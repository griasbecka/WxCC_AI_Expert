// KEIN import ... from '@wxcc-desktop/sdk'  <-- raus!

class ACP_SD_hiddenWidget extends HTMLElement 
{
  constructor(){
    super();
    this._on = this._on.bind(this);
    this._events = [
      'eAgentContactConnected',
      'eAgentContactUpdated',
      'eAgentOfferContact',
      'eAgentContactAssigned',
      'eAgentContactWrapUp'
    ];
    this._acRef = null;
    this._mounted = false;
  }

  connectedCallback(){
    this._mounted = true;
    this._init();
  }

  disconnectedCallback(){
    this._mounted = false;
    try {
      if (this._acRef) {
        this._events.forEach(evt => this._acRef.removeEventListener(evt, this._on));
      }
    } catch {}
    this._acRef = null;
  }

  async _init(){
    // Warten, bis die global injizierte Desktop-Bridge da ist
    const ok = await this._waitFor(() => (window.Desktop && Desktop.agentContact), 12000, 150);
    if (!ok) {
      console.warn('ACP_SD_hiddenWidget: Desktop.agentContact nicht verfügbar (Surface/Timing).');
      return;
    }
    this._acRef = Desktop.agentContact;
    this._events.forEach(evt => this._acRef.addEventListener(evt, this._on));
    // console.debug('ACP_SD_hiddenWidget: listeners bound');
  }

  _waitFor(testFn, timeoutMs=12000, intervalMs=150){
    return new Promise(resolve => {
      const t0 = Date.now();
      const tick = () => {
        if (!this._mounted) return resolve(false);
        let ok = false;
        try { ok = !!testFn(); } catch {}
        if (ok) return resolve(true);
        if (Date.now() - t0 >= timeoutMs) return resolve(false);
        setTimeout(tick, intervalMs);
      };
      tick();
    });
  }

  _on(evt){
    try {
      const detail = evt?.detail || {};
      const cad =
        detail?.data?.callAssociatedData ||
        detail?.callAssociatedData ||
        detail?.interaction?.callAssociatedData ||
        detail?.cad || {};

      const looks = s => { const x = String(s||'').replace(/[^\d+]/g,''); return /^\+?\d{6,}$/.test(x) ? x : null; };
      const keys = ['ANI','ani','callerNumber','caller','cli','phoneNumber','fromAddress'];
      let ani = null;
      for (const k of keys) {
        const v = cad?.[k]?.value ?? cad?.[k];
        if (!ani) ani = looks(v);
      }
      if (!ani) {
        // Fallback: Tiefensuche
        const seen = new WeakSet(), stack = [cad];
        while (stack.length && !ani) {
          const n = stack.pop();
          if (!n || typeof n !== 'object' || seen.has(n)) continue;
          seen.add(n);
          for (const v of Object.values(n)) {
            const val = (v && typeof v==='object' && 'value' in v) ? v.value : v;
            if (typeof val === 'string') { const hit = looks(val); if (hit){ ani = hit; break; } }
            else if (val && typeof val === 'object') stack.push(val);
          }
        }
      }

      const interactionId =
        detail?.data?.interactionId || detail?.interactionId || detail?.contactId || null;

      const snapshot = { interactionId, ani: ani || null, eventType: evt.type, ts: Date.now() };
      window.__WXCC_LAST = snapshot;
      try { localStorage.setItem('wxcc:ani_saver', JSON.stringify(snapshot)); } catch {}
      // console.debug('ACP_SD_hiddenWidget snapshot', snapshot);
    } catch (e) {
      console.warn('ACP_SD_hiddenWidget: onEvent error', e);
    }
  }
}

// gültiger Tagname + Guard gegen Doppelt-Registrierung
if (!customElements.get('acp-servicedesk-hidden')) {
  customElements.define('acp-servicedesk-hidden', ACP_SD_hiddenWidget);
}
