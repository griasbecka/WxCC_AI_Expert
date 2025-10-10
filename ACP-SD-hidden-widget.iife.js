(() => {
  // src/ACP-SD-hidden-widget.js
  var ACP_SD_hiddenWidget = class extends HTMLElement {
    constructor() {
      super();
      this._on = this._on.bind(this);
      this._events = [
        "eAgentContactConnected",
        "eAgentContactUpdated",
        "eAgentOfferContact",
        "eAgentContactAssigned",
        "eAgentContactWrapUp"
      ];
      this._acRef = null;
      this._mounted = false;
    }
    connectedCallback() {
      this._mounted = true;
      this._init();
    }
    disconnectedCallback() {
      this._mounted = false;
      try {
        if (this._acRef) {
          this._events.forEach((evt) => this._acRef.removeEventListener(evt, this._on));
        }
      } catch (e) {
      }
      this._acRef = null;
    }
    async _init() {
      const ok = await this._waitFor(() => window.Desktop && Desktop.agentContact, 12e3, 150);
      if (!ok) {
        console.warn("ACP_SD_hiddenWidget: Desktop.agentContact nicht verf\xFCgbar (Surface/Timing).");
        return;
      }
      this._acRef = Desktop.agentContact;
      this._events.forEach((evt) => this._acRef.addEventListener(evt, this._on));
    }
    _waitFor(testFn, timeoutMs = 12e3, intervalMs = 150) {
      return new Promise((resolve) => {
        const t0 = Date.now();
        const tick = () => {
          if (!this._mounted) return resolve(false);
          let ok = false;
          try {
            ok = !!testFn();
          } catch (e) {
          }
          if (ok) return resolve(true);
          if (Date.now() - t0 >= timeoutMs) return resolve(false);
          setTimeout(tick, intervalMs);
        };
        tick();
      });
    }
    _on(evt) {
      var _a, _b, _c, _d, _e;
      try {
        const detail = (evt == null ? void 0 : evt.detail) || {};
        const cad = ((_a = detail == null ? void 0 : detail.data) == null ? void 0 : _a.callAssociatedData) || (detail == null ? void 0 : detail.callAssociatedData) || ((_b = detail == null ? void 0 : detail.interaction) == null ? void 0 : _b.callAssociatedData) || (detail == null ? void 0 : detail.cad) || {};
        const looks = (s) => {
          const x = String(s || "").replace(/[^\d+]/g, "");
          return /^\+?\d{6,}$/.test(x) ? x : null;
        };
        const keys = ["ANI", "ani", "callerNumber", "caller", "cli", "phoneNumber", "fromAddress"];
        let ani = null;
        for (const k of keys) {
          const v = (_d = (_c = cad == null ? void 0 : cad[k]) == null ? void 0 : _c.value) != null ? _d : cad == null ? void 0 : cad[k];
          if (!ani) ani = looks(v);
        }
        if (!ani) {
          const seen = /* @__PURE__ */ new WeakSet(), stack = [cad];
          while (stack.length && !ani) {
            const n = stack.pop();
            if (!n || typeof n !== "object" || seen.has(n)) continue;
            seen.add(n);
            for (const v of Object.values(n)) {
              const val = v && typeof v === "object" && "value" in v ? v.value : v;
              if (typeof val === "string") {
                const hit = looks(val);
                if (hit) {
                  ani = hit;
                  break;
                }
              } else if (val && typeof val === "object") stack.push(val);
            }
          }
        }
        const interactionId = ((_e = detail == null ? void 0 : detail.data) == null ? void 0 : _e.interactionId) || (detail == null ? void 0 : detail.interactionId) || (detail == null ? void 0 : detail.contactId) || null;
        const snapshot = { interactionId, ani: ani || null, eventType: evt.type, ts: Date.now() };
        window.__WXCC_LAST = snapshot;
        try {
          localStorage.setItem("wxcc:ani_saver", JSON.stringify(snapshot));
        } catch (e) {
        }
      } catch (e) {
        console.warn("ACP_SD_hiddenWidget: onEvent error", e);
      }
    }
  };
  if (!customElements.get("acp-servicedesk-hidden")) {
    customElements.define("acp-servicedesk-hidden", ACP_SD_hiddenWidget);
  }
})();
