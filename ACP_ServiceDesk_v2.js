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
          :host{display:block;font:14px/1.4 system-ui,Segoe UI,Roboto,Arial;color:#111827}
          header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid #e5e7eb;background:#f9fafb}
          header h1{margin:0;font-size:20px}
          .muted{color:#6b7280}
          nav{display:flex;gap:8px;padding:8px 20px;border-bottom:1px solid #e5e7eb;background:#fff}
          button{border:1px solid #e5e7eb;background:#fff;padding:6px 10px;border-radius:8px;cursor:pointer}
          button:hover{background:#f3f4f6}
          main{padding:20px;display:grid;grid-template-columns:1fr 1fr;gap:16px}
          .card{border:1px solid #e5e7eb;border-radius:12px;padding:16px;background:#fff}
          .grid{display:grid;grid-template-columns:140px 1fr;gap:8px 12px;align-items:center}
          .skeleton{background:linear-gradient(90deg,#eee,#f5f5f5,#eee);background-size:200% 100%;animation:s 1.2s infinite;border-radius:6px}
          @keyframes s{0%{background-position:200% 0}100%{background-position:-200% 0}}
          .row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed #e5e7eb}
          .row:last-child{border-bottom:0}
          .tag{display:inline-block;padding:2px 8px;border-radius:999px;border:1px solid #e5e7eb;font-size:12px;background:#fafafa}
          .ok{color:#065f46}.err{color:#991b1b}
          footer{padding:12px 20px;border-top:1px solid #e5e7eb;background:#fafafa;font-size:12px;color:#6b7280}
          .small{font-size:12px}
        </style>
        <header>
          <div>
            <h1>Hallo Welt 👋</h1>
            <div class="muted">Eigene Web-Component im Agent Desktop</div>
          </div>
          <div class="muted"><span id="agentName">Agent</span> • <span id="locale">–</span></div>
        </header>
        <nav>
          <button id="action-refresh">Neu laden</button>
          <button id="action-available">Status: Available</button>
          <span id="status" class="muted" style="margin-left:auto">Bereit.</span>
        </nav>
        <main>
          <section class="card">
            <h2>Kundenkontext</h2>
            <div class="grid">
              <div class="muted">ANI</div><div id="ani" class="skeleton" style="height:18px;width:160px;"></div>
              <div class="muted">Name</div><div id="custName" class="skeleton" style="height:18px;width:200px;"></div>
              <div class="muted">Kundennr.</div><div id="custNo" class="skeleton" style="height:18px;width:140px;"></div>
              <div class="muted">Segment</div><div id="segment" class="skeleton" style="height:18px;width:100px;"></div>
            </div>
          </section>
          <section class="card">
            <h2>Letzte Bestellungen</h2>
            <div id="orders">
              <div class="skeleton" style="height:18px;width:100%"></div>
              <div class="skeleton" style="height:18px;width:80%"></div>
              <div class="skeleton" style="height:18px;width:90%"></div>
            </div>
          </section>
          <section class="card" style="grid-column:1/-1">
            <h2>Tech-Details</h2>
            <div class="small">
              <div>SDK init: <span id="sdkState" class="tag">ausstehend</span></div>
              <div>Task Map: <span id="taskState" class="tag">–</span></div>
              <div>ERP Request: <span id="erpState" class="tag">–</span></div>
            </div>
          </section>
        </main>
        <footer>Beispiel: HTML im Shadow DOM, SDK & ERP-Fetch.</footer>
      `;
    }

    // Layout-Properties (optional)
    set agentName(v){ this._text('#agentName', v); }
    set locale(v){ this._text('#locale', v); }
    set accessToken(v){ this._accessToken = v; }

    async connectedCallback(){
      try{
        this.shadowRoot.getElementById('action-refresh')?.addEventListener('click', ()=>this._loadEverything(true));
        this.shadowRoot.getElementById('action-available')?.addEventListener('click', ()=>this._goAvailable());

        await this._initSdk();
        await this._loadEverything(false);
      }catch(e){ this._fatal(e); }
    }

    async _initSdk(){
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
        const url = `https://erp.example.com/api/customer?ani=${encodeURIComponent(ani)}`;
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
