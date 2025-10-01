// Beispiel: Web Component für Webex CC Agent Desktop
// Package: @wxcc-desktop/sdk
import { Desktop } from '@wxcc-desktop/sdk';

class MyCompanyDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // Basis-HTML; ja, **normales HTML** im Shadow DOM ist möglich
    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; font: 14px/1.4 system-ui, sans-serif; padding: 12px; }
        .muted { opacity: .7 }
        .card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 12px; }
      </style>
      <div class="card">
        <h2>Hallo <span id="agentName">Agent</span> 👋</h2>
        <p class="muted">Team: <span id="teamName">–</span> • Locale: <span id="locale">–</span></p>
        <p>Status: <span id="state">unbekannt</span></p>
        <button id="goAvailable">Auf „Available“ wechseln</button>
      </div>
    `;
  }

  static get observedAttributes() {
    // Attribute, die ihr im Layout unter "attributes" setzt (Strings!)
    return ['data-feature-flag'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    // Optional: reagiert auf Layout-Attribute
    if (name === 'data-feature-flag') {
      // Feature toggles, CSS-Klassen etc. setzen
    }
  }

  // Properties vom Layout (nicht nur Attributes) werden als echte JS-Properties übergeben.
  // Definiert passende Setter, um bei Laufzeitupdates zu reagieren:
  set agentName(val) { this._setText('#agentName', val); }
  set teamName(val) { this._setText('#teamName', val); }
  set locale(val)    { this._setText('#locale', val); }

  async connectedCallback() {
    // Desktop SDK initialisieren
    Desktop.config.init(); // stellt die Brücke zum Desktop her
    // Agent-Info live lesen
    const latest = Desktop.agentStateInfo?.latestData;
    if (latest?.status) this._setText('#state', latest.status);

    // Events abonnieren (z.B. Agent State Änderungen)
    Desktop.agentStateInfo?.addEventListener('eAgentStateChange', (evt) => {
      this._setText('#state', evt?.detail?.state || 'unbekannt');
    });

    // Beispiel: Button „Available“ umschalten
    this.shadowRoot.getElementById('goAvailable')?.addEventListener('click', async () => {
      try {
        await Desktop.agentStateInfo.stateChange({ state: 'Available' });
      } catch (e) {
        console.error('State change failed', e);
      }
    });
  }

  _setText(sel, val) {
    const el = this.shadowRoot.querySelector(sel);
    if (el) el.textContent = val ?? '–';
  }
}

customElements.define('my-company-dashboard', MyCompanyDashboard);
