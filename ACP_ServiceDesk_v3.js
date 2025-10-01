// my-company-dashboard.js – ohne Bundling/Imports, nutzt window.Desktop

(function(){
  'use strict';

  // Globale Fehler sichtbar machen
  //window.addEventListener('error', e => console.error('[my-app] onerror', e.message));
  //window.addEventListener('unhandledrejection', e => console.error('[my-app] unhandledrejection', e.reason));

  class MyCompanyDashboard extends HTMLElement {
    constructor(){
      super();
      this.attachShadow({mode:'open'});
      this.shadowRoot.innerHTML = `
          <style>
			body {
			  font-family: Arial, sans-serif;
			  background-color: #f9f9f9;
			  margin: 0;
			  padding: 0;
			  font-size: 14px;
			}

			.container {
			  max-width: 1600px;
			  margin: 0 auto;
			  padding: 5px;
			  background-color: #fff;
			  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			}

			.header {
			  text-align: center;
			  margin-bottom: 10px;
			}
			
			.myhead {
			  border: 1px solid #3D4A52;
			  background: #3D4A52;
			  color: #fff;
			  border-radius: 4px;
			}

			h1 {
			  color: #fff;
			  font-size: 22px;
			}
			
			h2 {
			  color: #3D4A52;
			  font-size: 14px;
			  font-weight: bold;
			  background-color: #AAC936;
			  padding: 3px;
			  padding-left: 10px;
			  border-radius: 4px;
			}

			.form-group {
			  margin-bottom: 5px;
			}

			img {
				padding:0px;
				margin:0px;
				border:0px;
			}

			label {
			  display: block;
			  font-weight: bold;
			  font-size: 16px;
			  margin-bottom: 5px;
			  display: inline-block;
			}

			.readonly-field {
			  background-color: #f2f2f2;
			  padding: 6px;
			  border: none;
			  border-radius: 4px;
			  color: #333;
			  width: 90%;
			}
			
			.readonly-field-small {
			  background-color: #f2f2f2;
			  padding: 6px;
			  border: none;
			  border-radius: 4px;
			  color: #333;
			  width: 87%;
			}
			
			.readonly-field-extrasmall {
			  background-color: #f2f2f2;
			  padding: 6px;
			  border: none;
			  border-radius: 4px;
			  color: #333;
			  width: 35%;
			}

			.readonly-field_bold {
			  background-color: #f2f2f2;
			  padding: 6px;
			  border: none;
			  border-radius: 4px;
			  color: #b00e2c;
			  font-weight: bold;
			  width: 90%;
			}
			
			.readonly-field_bold-small {
			  background-color: #f2f2f2;
			  padding: 6px;
			  border: none;
			  border-radius: 4px;
			  color: #b00e2c;
			  font-weight: bold;
			  width: 87%;
			}

			.sub-section {
			  margin-top: 20px;
			}

			.sub-section h2 {
			  /*color: #3D4A52;*/
			  margin-bottom: 10px;
			}

			.contact-persons-table {
			  width: 93%;
			  border-collapse: collapse;
			  margin-left: 40px;
			}

			.contact-persons-table th{
			  padding: 8px;
			  text-align: left;
			  border-bottom: 1px solid #ddd;
			  font-size: 14px;
			  background-color: #f2f2f2;
			}
			
			.contact-persons-table td {
			  padding: 8px;
			  text-align: left;
			  border-bottom: 1px solid #ddd;
			  font-size: 14px;
			  vertical-align: middle;
			}

			button {
			  background-color: #3D4A52;
			  color: white;
			  padding: 10px 20px;
			  border: none;
			  cursor: pointer;
			  font-size: 16px;
			  border-radius: 4px;
			  transition: background-color 0.3s ease;
			  width: 200px;
			}

			button:hover {
			  background-color: #AAC936;
			  color: #3D4A52;
			  font-weight: bold;
			}

			.column {
			  width: 50%;
			  float: left;
			  box-sizing: border-box;
			  padding-right: 10px;
			}

			@media (max-width: 600px) {
			  .column {
				width: 100%;
				padding-right: 0;
			  }
			}
		  </style>
		  <script>
			// Holt den gesamten Querystring der URL (param1=hallo&param2=echo)
			const queryString = window.location.search;
			
			// Extrahiert aus dem Querystring einzelne Parameter
			const urlParams = new URLSearchParams(queryString);
			  
			// Liest mit .get() die Werte der Parameter aus
			const sAnrufer = urlParams.get('sAnrufer').replace("+", "%2B");
			const existTicket = urlParams.get('existTicket');
			
			//sAnrufer=sAnrufer.replace("+", "%2B");

			var DBconURL = 'https://webexdb.swsnet.de/rest/webexcc/a395418d-20c8-4b1b-b3a4-65081aeb359d?sAnrufer='+sAnrufer;

			var myHeaders = new Headers();
			myHeaders.append("Cookie", "JSESSIONID=30B05B948B696117347EA0E8774E0865");			

			var requestOptions = {
			  method: 'GET',
			  /*mode: "no-cors",*/
			  headers: myHeaders,
			  redirect: 'follow'
			};
			/*
			document.getElementById("sanrufer").value = sAnrufer.replace("%2B", "+");
			if (existTicket == true)
				document.getElementById("existTicket").value = 'ja';
			else
				document.getElementById("existTicket").value = 'nein';
			*/
			
			/*
			fetch(DBconURL, requestOptions)
			  .then(result => {
				//alert(result);
				//document.getElementById("content").innerHTML = 'result: '+result;                
				alert('yeah');
						
				alert(response.json());
				console.log(response.json());
				
			  })
			  .catch(error => {
				document.getElementById("sanrufer").value = sAnrufer.replace("%2B", "+");
				alert('error', error);        
			  });    
			*/
			/*
			const response = fetch(DBconURL, requestOptions);
			const jsonData = response.json();
			alert(jsonData);
			*/
			async function AskDBcon() 
			{
			  try
			  {
				/*
				  const response = await fetch(DBconURL, requestOptions);
				  const jsonData = await response.json();
				  console.log(jsonData);
				*/
				  document.getElementById("mylasttime").value = jsonData.mylasttime;
				  document.getElementById("mylastagent").value = jsonData.sagentemail;
			  }
			  catch(error)
			  {

			  }
			}
			//AskDBcon();    
			
		  </script>
		</head>
		<body>
		  <div class="container">
			<div class="header">
			  <!--<table class=myhead width="100%"><tr><td width=120><img src='https://wxcc1.demos.efa.ai/images/ACP_logo.png' border=0 width=50></td><td align=left><h1>Demo-Maske</h1></td></tr></table>-->
				<table class=myhead width="100%"><tr><td width=120><img src='https://griasbecka.github.io/WxCC_AI_Expert/ACP_logo.png' border=0 width=50></td><td align=left><h1>ServiceNow Integrator2</h1></td></tr></table>
			</div>
			<div class="upper-section">
			  <div class="column">
				<form>
				  <div class="form-group">
					<table border=0 width="100%"><tr><td width=150><label for="company">Firma</label></td><td><input type="text" id="company" name="company" class="readonly-field" value="Beispiel GmbH"></td></tr></table>
				  </div>
				  <div class="form-group">
					<table border=0 width="100%"><tr><td width=150><label for="company">Adresse</label></td><td><input type="text" id="company" name="company" class="readonly-field" value="Musterstrasse 123, 94051 Hauzenberg"></td></tr></table>			
				  </div>	
				  <div class="form-group">
					<table border=0 width="100%"><tr><td width=150><label for="company">Account-Manager</label></td><td><input type="text" id="mylasttime" name="mylasttime" class="readonly-field-extrasmall" value="Godfather of Salesplay">
						&nbsp;<a href='webexteams://im?email=stefan.slominski@acp.de'><img src='https://griasbecka.github.io/WxCC_AI_Expert/webex.png' border=0 width=24></a>
						&nbsp;&nbsp;<a href='https://teams.microsoft.com/l/chat/0/0?users=stefan.slominski@acp.de' target=_blank><img src='https://griasbecka.github.io/WxCC_AI_Expert/teams.png' width=24></a>
					</td></tr></table>
				  </div>		  
					<hr>		  
				  <div class="form-group">
					<table border=0 width="100%"><tr><td width=300><label for="company">Anfrage zu bestehendem Ticket</label></td><td><input type="text" id="existTicket" name="existTicket" class="readonly-field-small" value="ja / nein"></td></tr></table>
				  </div> 
				</form>
			  </div>
			  <div class="column">
				<form>
				  <div class="form-group">		  
					<table border=0 width="100%"><tr><td width=150><label for="company">Telefon Anrufer</label></td><td><input type="text" id="sanrufer" name="sanrufer" class="readonly-field" value="+49123456789"></td></tr></table>
				  </div>
				  <div class="form-group">
					<table border=0 width="100%"><tr><td width=150><label for="company">Name Anrufer</label></td><td><input type="text" id="company" name="company" class="readonly-field" value="Max Mustermann"></td></tr></table>
				  </div>		  
				  <div class="form-group">
					<table border=0 width="100%"><tr><td width=150><label for="company">Servicemanager</label></td><td><input type="text" id="mylastagent" name="mylastagent" class="readonly-field-extrasmall" value="Taking Care Guy">
						&nbsp;<a href='webexteams://im?email=stefan.slominski@acp.de'><img src='https://griasbecka.github.io/WxCC_AI_Expert/webex.png' border=0 width=24></a>
						&nbsp;&nbsp;<a href='https://teams.microsoft.com/l/chat/0/0?users=stefan.slominski@acp.de' target=_blank><img src='https://griasbecka.github.io/WxCC_AI_Expert/teams.png' border=0 width=24></a>
					</td></tr></table>
				  </div>
					<hr>
				  <div class="form-group">
					<table border=0 width="100%"><tr><td width=300><label for="company"><font color=#b00e2c>Aktuell offene Tickets</font></label></td><td><input type="text" id="company" name="company" class="readonly-field_bold-small" value="4"></td></tr></table>
				  </div>
				</form>
			  </div>
			  <div style="clear: both;"></div>
			</div>
			<div class="sub-section">
			  <h2>Offene Tickets</h2>
			  <table class="contact-persons-table">
				<thead>
				  <tr>
					<th width=150>TicketNr</th>
					<th width=400>Topic</th>
					<th width=240>Assignment Group</th>
					<th>Assigned to</th>
					<th>Eröffnet / Letzter Eintrag</th>
					<th>Needs Attention</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td><a href='https://acpprod.service-now.com/change_request.do?sys_id=1daae53283db5e50f5ae9cdfeeaad32c&sysparm_record_target=task&sysparm_record_row=5&sysparm_record_rows=8&sysparm_record_list=active%3Dtrue%5Eassigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe%5EstateNOT+IN3%2C4%2C7%2C8%2C5%2C6%5EORDERBYshort_description' target='_blank'>CHG0084341</a></td>
					<td>User in Webex anlegen</td>
					<td>HZB.Collaboration</td>
					<td>Stefan Slominski</td>
					<td>11.09.2025</td>
					<td></td>
				  </tr>
				  <tr>
					<td><a href='' target='_blank'>CHG1234567</a></td>
					<td>O365 Problem mit Resourcenpostfach</td>
					<td>HZB.EnterpriseApplication</td>
					<td>Stefan Maximilian</td>
					<td>07.09.2025</td>
					<td></td>
				  </tr>
				  <tr>
					<td><a href='' target='_blank'>INC1111222</a></td>
					<td>Citrix - Golden Image verschwunden</td>
					<td>HZB.Dispo</td>
					<td></td>
					<td>30.08.2025</td>
					<td>&#9989; &#10071;</td>
				  </tr>
				  <tr>
					<td><a href='' target='_blank'>CHG9876543</a></td>
					<td>Projekt Network as a Service</td>
					<td>HZB.SecureInfrastructure Green</td>
					<td>Jonas Pongratz</td>
					<td>08.09.2025</td>
					<td></td>
				  </tr>
				</tbody>
			  </table>
			</div>	
			<div class="sub-section">
			  <h2>Deine Optionen</h2>
			  <!--
			  <table class="contact-persons-table">
				<thead>
				  <tr>
					<th width=240>Name</th> 
					<th width=240>Abgeschlossen am</th>
					<th>Endet am</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>Vertragsposition 1</td>
					<td>01. Januar 2023</td>
					<td>31. Dezember 2099</td>
				  </tr>
				  <tr>
					<td>Vertragsposition 2</td>
					<td>01. Februar 2024</td>
					<td>31. Januar 2099</td>
				  </tr>
				</tbody>
			  </table>
			  -->
			</div>
			<br>
			<div class="footer">
			  <button type="submit" disabled>+ Incident</button> 
			  <button type="submit" disabled>+ Presales Anfrage</button> 
			  <button type="submit" disabled>*do magic*</button> 
			  <button type="submit" disabled>drink a beer</button>
			</div>
		  </div>
		  <div id="content">bla</div>
		  <script>
			document.getElementById("sanrufer").value = sAnrufer.replace("%2B", "+");
			if (existTicket == "true")
				document.getElementById("existTicket").value = 'ja';
			else
				document.getElementById("existTicket").value = 'nein';
		  </script>
		</body>

      `;
    }

    // Layout-Properties (optional)
    set agentName(v){ this._text('#agentName', v); }
    set locale(v){ this._text('#locale', v); }
    set accessToken(v){ this._accessToken = v; }

    async connectedCallback(){
	  console.error('ACP:: connectedCallback');
      try{		
        /*
		this.shadowRoot.getElementById('action-refresh')?.addEventListener('click', ()=>this._loadEverything(true));
        this.shadowRoot.getElementById('action-available')?.addEventListener('click', ()=>this._goAvailable());
		*/
		
        await this._initSdk();
        await this._loadEverything(false);
		document.getElementById("content").value = 'Agent Name: '+agentName;
      }catch(e){ console.error('ACP:: connectedCallback Error '+e); }
    }

    async _initSdk(){
	  console.error('ACP:: _initSdk');
	  try
	  {
		  const SDK = (window.Desktop && window.Desktop.config) ? window.Desktop : null;
		  if(!SDK) 
		  {
			console.error('ACP:: _initSdk SDK fehlt ');
			return;
		  }
		  await SDK.config.init();
		  console.error('ACP:: _initSdk SDK initiiert ok');
		  // optionale Live-Events
		  SDK.agentStateInfo?.addEventListener('eAgentStateChange',(evt)=>{
			console.error('ACP:: Agent State: '+(evt?.detail?.state||'unbekannt'));
			//this._status('Agent State: '+(evt?.detail?.state||'unbekannt'));
		  });
		  this._SDK = SDK;    
	  }catch(e){ console.error('ACP:: _initSdk Error '+e); }
	}
	
    async _loadEverything(force){
      //this._status('Lade Kundenkontext …');
	  console.error('ACP:: _loadEverything');
	  try {
		  //const ani = await this._getAni(force);
		  const ani = '%20B491735894743';
		  //this._text('#ani', ani || '–', true);
		  console.error('ACP:: ani = '+ani+'-> frage SNOW an');
		  if(!ani){ console.error('ACP:: _loadEverything keine ani gefunden'); return; }
		  //this._status(`ANI ${ani} → ERP anfragen …`);	  
		  //const data = await this._fetchErp(ani);
		  //if(data) this._fill(data);
		  console.error('ACP:: _loadEverything fertig');
		  //this._status('Fertig.');
	  }catch(e){ console.error('ACP:: _loadEverything Error '+e); }
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
        console.error('ACP:: _getAni Error '+e); return null;
      }
    }

    async _fetchErp(ani){
      console.error('ACP:: _fetchErp');
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
      /*
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
	  */
	  this.shadowRoot.innerHTML = data;
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



