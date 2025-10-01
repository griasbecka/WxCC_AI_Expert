// my-company-dashboard.js – ohne Bundling/Imports, nutzt window.Desktop
(function(){
  'use strict';

  // Globale Fehler sichtbar machen
  window.addEventListener('error', e => console.error('[my-app] onerror', e.message));
  window.addEventListener('unhandledrejection', e => console.error('[my-app] unhandledrejection', e.reason));

  class MyCompanyDashboard extends HTMLElement {
    constructor(){
      super();
      this.attachShadow({mode:'open'});
      this.shadowRoot.innerHTML = `
        <style>
          :host{ display:block; font:14px/1.4 system-ui,Segoe UI,Roboto,Arial; color:#111827 }
          .muted{ color:#6b7280 }
          .err{ color:#991b1b }
          .wrap{ border:1px solid #e5e7eb; border-radius:12px; padding:12px; background:#fff }
        </style>
        <div class="wrap">
          <div class="muted" id="status">Lade ServiceNow Integrator…</div>
          <div id="mount"></div>
          <div id="error" class="err"></div>
        </div>
      `;
    }

    // Layout-Properties (optional)
    set agentName(v){ this._text('#agentName', v); }
    set locale(v){ this._text('#locale', v); }
    set accessToken(v){ this._accessToken = v; }

    async connectedCallback(){
      try{
		console.error('ACP:: connectedCallback');
        /*
		this.shadowRoot.getElementById('action-refresh')?.addEventListener('click', ()=>this._loadEverything(true));
        this.shadowRoot.getElementById('action-available')?.addEventListener('click', ()=>this._goAvailable());
		*/
		
        await this._initSdk();
        await this._loadEverything(false);
      }catch(e){ console.error('ACP:: connectedCallback Error '+e); }
    }

    async _initSdk(){
	  console.error('ACP:: _initSdk');
      const SDK = (window.Desktop && window.Desktop.config) ? window.Desktop : null;
      if(!SDK) throw new Error('SDK nicht gefunden (window.Desktop fehlt)');
      await SDK.config.init();
      this._tag('#sdkState','ok','initialisiert');
      // optionale Live-Events
      SDK.agentStateInfo?.addEventListener('eAgentStateChange',(evt)=>{
        this._status('Agent State: '+(evt?.detail?.state||'unbekannt'));
      });
      this._SDK = SDK;
    }

    async _loadEverything(force){
      this._status('Lade Kundenkontext …');
	  console.error('ACP:: _loadEverything');
      const ani = await this._getAni(force);
      this._text('#ani', ani || '–', true);
      if(!ani){ this._status('Keine ANI gefunden.'); return; }
      this._status(`ANI ${ani} → ERP anfragen …`);
      const data = await this._fetchErp(ani);
      if(data) this._fill(data);
      this._status('Fertig.');
    }

    async _getAni(force){
      try{
        const taskMap = await this._SDK.actions.getTaskMap();
        this._tag('#taskState','ok',`${Object.keys(taskMap||{}).length} Task(s)`);
        const tasks = Object.values(taskMap||{});
        const t = tasks.find(x => (x.mediaType==='telephony'||x.channelType==='telephony') && (x.state==='connected'||x.state==='onCall')) || tasks.find(x => (x.mediaType==='telephony'||x.channelType==='telephony')) || tasks[0];
        if(!t) return null;
        const cands = [
          t?.customer?.ani, t?.customer?.phoneNumber, t?.interaction?.ani, t?.fromAddress,
          t?.callAssociatedData?.ani, t?.callAssociatedData?.ANI,
          t?.interaction?.callAssociatedData?.ani, t?.interaction?.callAssociatedData?.ANI,
          t?.attributes?.ani, t?.attributes?.ANI
        ].filter(Boolean);
        if(cands.length) return String(cands[0]);
        const cad = t?.callAssociatedData || t?.interaction?.callAssociatedData || {};
        for(const [k,v] of Object.entries(cad)) if(/^(ani|caller|from|clid)$/i.test(k)) return String(v);
        return null;
      }catch(e){
        this._tag('#taskState','err','Fehler'); console.error(e); return null;
      }
    }

    async _fetchErp(ani){
      this._tag('#erpState',null,'lädt …');
      try{
        const headers = { 'Accept':'application/json' };
        if(this._accessToken) headers['Authorization'] = `Bearer ${this._accessToken}`;
        // TODO: Eigene ERP-URL einsetzen
		console.error('ACP:: fetching url');
        const url = `https://griasbecka.github.io/WxCC_AI_Expert/snow_fragment.html?sAnrufer=${encodeURIComponent(ani)}`;
        const res = await fetch(url, { headers, credentials:'include' });
        if(!res.ok) throw new Error('ERP '+res.status);
        const data = await res.json();
        this._tag('#erpState','ok','200 OK');
        return data;
      }catch(e){
        this._tag('#erpState','err','Fehler'); console.error(e);
        // Demo-Mock, damit die UI gefüllt ist
        return {
          customer:{ name:'Max Mustermann', number:'C-12345', segment:'Gold' },
          orders:[
            { id:'SO-4711', date:'2025-09-22', total:149.9, status:'Shipped' },
            { id:'SO-4712', date:'2025-09-29', total:89.0, status:'Open' }
          ]
        };
      }
    }

    _fill(data){
      const c = data?.customer || {};
      this._text('#custName', c.name ?? '–', true);
      this._text('#custNo', c.number ?? '–', true);
      this._text('#segment', c.segment ?? '–', true);

      const list = this.shadowRoot.querySelector('#orders');
      list.innerHTML = '';
      const orders = Array.isArray(data?.orders) ? data.orders : [];
      if(!orders.length){ list.innerHTML = '<div class="muted">Keine Bestellungen gefunden.</div>'; return; }
      for(const o of orders){
        const row = document.createElement('div');
        row.className = 'row';
        row.innerHTML = `
          <div><strong>${o.id}</strong> <span class="muted">(${o.date||''})</span></div>
          <div>${(o.total!=null)?o.total.toLocaleString(undefined,{style:'currency',currency:'EUR'}):''}
               <span class="tag">${o.status||''}</span></div>`;
        list.appendChild(row);
      }
    }

    async _goAvailable(){
      try{ await this._SDK.agentStateInfo.stateChange({ state:'Available' }); this._status('Status auf Available gesetzt.'); }
      catch(e){ this._status('Konnte Status nicht ändern.', true); console.error(e); }
    }

    // Helpers
    _status(txt, err){ const el=this.shadowRoot.getElementById('status'); if(el){ el.textContent = txt; el.className = err?'err':'muted'; } }
    _text(sel, v, rm){ const el=this.shadowRoot.querySelector(sel); if(el){ el.textContent = (v??'–'); if(rm) el.classList.remove('skeleton'); } }
    _tag(sel, cls, txt){ const el=this.shadowRoot.querySelector(sel); if(!el) return; el.textContent = txt; el.className='tag'; if(cls==='ok') el.classList.add('ok'); if(cls==='err') el.classList.add('err'); }
  }

  if(!customElements.get('my-company-dashboard')){
    customElements.define('my-company-dashboard', MyCompanyDashboard);
  }
})();
