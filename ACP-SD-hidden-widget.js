class ACP_SD_hiddenWidget extends HTMLElement {
  constructor(){ super(); this._on = this._on.bind(this); }
  connectedCallback(){
    // keine UI
    // sichere Event-Bindings (nur wenn vorhanden)
    const AC = window.Desktop?.agentContact;
    if (!AC) { console.warn('ACP_SD_hiddenWidget: Desktop.agentContact fehlt'); return; }

    ['eAgentContactConnected','eAgentContactUpdated','eAgentOfferContact','eAgentContactAssigned','eAgentContactWrapUp']
      .forEach(evt => AC.addEventListener(evt, this._on));
  }
  disconnectedCallback(){
    const AC = window.Desktop?.agentContact;
    if (!AC) return;
    ['eAgentContactConnected','eAgentContactUpdated','eAgentOfferContact','eAgentContactAssigned','eAgentContactWrapUp']
      .forEach(evt => AC.removeEventListener(evt, this._on));
  }
  _on(evt){
    try {
      const detail = evt?.detail || {};
      const cad = detail?.data?.callAssociatedData || detail?.callAssociatedData || detail?.interaction?.callAssociatedData || detail?.cad || {};
      const looks = s => { const x=String(s||'').replace(/[^\d+]/g,''); return /^\+?\d{6,}$/.test(x)?x:null; };
      const keys = ['ANI','ani','callerNumber','caller','cli','phoneNumber','fromAddress'];
      let ani = null;
      for (const k of keys){
        const v = cad?.[k]?.value ?? cad?.[k];
        if (!ani) ani = looks(v);
      }
      // Fallback Tiefensuche
      if (!ani) {
        const seen=new WeakSet(), stack=[cad];
        while(stack.length){
          const n=stack.pop();
          if (!n||typeof n!=='object'||seen.has(n)) continue;
          seen.add(n);
          for (const v of Object.values(n)){
            const val = (v&&typeof v==='object'&&'value' in v)? v.value : v;
            if (typeof val==='string'){ const hit=looks(val); if (hit){ ani=hit; break; } }
            else if (val&&typeof val==='object') stack.push(val);
          }
          if (ani) break;
        }
      }

      const interactionId =
        detail?.data?.interactionId || detail?.interactionId || detail?.contactId || null;

      const snapshot = {
        interactionId,
        ani: ani || null,
        eventType: evt.type,
        ts: Date.now(),
        cad: cad || {}
      };
      // global in Memory + persistent
      window.__WXCC_LAST = snapshot;
	  console.warn('ACP_SD_hiddenWidget: saving: '+JSON.stringify(snapshot));
      try { localStorage.setItem('wxcc:ani_saver', JSON.stringify(snapshot)); } catch {}
      // optional: Log
      // console.debug('Bridge snapshot', snapshot);
    } catch(e){
      console.warn('ACP_SD_hiddenWidget: Bridge error', e);
    }
  }
}
customElements.define('ACP_ServiceDesk_hidden', ACP_SD_hiddenWidget);
