(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
  };
  var __asyncGenerator = (__this, __arguments, generator) => {
    var resume = (k, v, yes, no) => {
      try {
        var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
        Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e) => resume("throw", e, yes, no));
      } catch (e) {
        no(e);
      }
    }, method = (k) => it[k] = (x) => new Promise((yes, no) => resume(k, x, yes, no)), it = {};
    return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
  };
  var __yieldStar = (value) => {
    var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
    if (obj == null) {
      obj = value[__knownSymbol("iterator")]();
      method = (k) => it[k] = (x) => obj[k](x);
    } else {
      obj = obj.call(value);
      method = (k) => it[k] = (v) => {
        if (isAwait) {
          isAwait = false;
          if (k === "throw") throw v;
          return v;
        }
        isAwait = true;
        return {
          done: false,
          value: new __await(new Promise((resolve) => {
            var x = obj[k](v);
            if (!(x instanceof Object)) __typeError("Object expected");
            resolve(x);
          }), 1)
        };
      };
    }
    return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
      throw x;
    }, "return" in obj && method("return"), it;
  };
  var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

  // node_modules/@wxcc-desktop/sdk/dist/index.js
  var require_dist = __commonJS({
    "node_modules/@wxcc-desktop/sdk/dist/index.js"(exports, module) {
      !(function(e, t) {
        if ("object" == typeof exports && "object" == typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
          var n = t();
          for (var i in n) ("object" == typeof exports ? exports : e)[i] = n[i];
        }
      })(window, (function() {
        return (function(e) {
          var t = {};
          function n(i) {
            if (t[i]) return t[i].exports;
            var r = t[i] = { i, l: false, exports: {} };
            return e[i].call(r.exports, r, r.exports, n), r.l = true, r.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, i) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: i });
          }, n.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n.t = function(e2, t2) {
            if (1 & t2 && (e2 = n(e2)), 8 & t2) return e2;
            if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule) return e2;
            var i = /* @__PURE__ */ Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2) for (var r in e2) n.d(i, r, function(t3) {
              return e2[t3];
            }.bind(null, r));
            return i;
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "/", n(n.s = 50);
        })([function(e, t, n) {
          var i;
          self, i = () => (() => {
            "use strict";
            var e2 = { n: (t3) => {
              var n2 = t3 && t3.__esModule ? () => t3.default : () => t3;
              return e2.d(n2, { a: n2 }), n2;
            }, d: (t3, n2) => {
              for (var i3 in n2) e2.o(n2, i3) && !e2.o(t3, i3) && Object.defineProperty(t3, i3, { enumerable: true, get: n2[i3] });
            }, o: (e3, t3) => Object.prototype.hasOwnProperty.call(e3, t3), r: (e3) => {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
            } }, t2 = {};
            e2.r(t2), e2.d(t2, { AssertUtils: () => $, BrowserNotification: () => h, Decorator: () => E, Err: () => f, Evt: () => I, I18N: () => N, Logger: () => u, NotificationItemsContent: () => P, Notifications: () => V, Signal: () => j, clearInterval: () => W, clearTimeout: () => Z, createBrowserNotifications: () => v, createHttp: () => O, createLogger: () => l, createNotifications: () => F, ensureError: () => K, setInterval: () => G, setTimeout: () => Y });
            const i2 = n(8);
            var r = e2.n(i2);
            const o = n(37), s = "*********";
            class a {
              constructor(e3) {
                this.maskKeys = e3;
              }
              tryJSONParse(e3) {
                try {
                  return JSON.parse(e3);
                } catch (e4) {
                  return;
                }
              }
              copiedObj(e3) {
                try {
                  return JSON.parse(JSON.stringify(e3));
                } catch (t3) {
                  return e3;
                }
              }
              maskObjectProperty(e3) {
                const t3 = e3;
                Object.keys(e3).forEach((n2) => {
                  "object" == typeof e3[n2] && null !== e3[n2] ? this.maskObjectProperty(e3[n2]) : t3[n2] = s;
                });
              }
              maskLogData(e3) {
                Object.keys(e3).forEach((t3) => {
                  "object" == typeof e3[t3] && null !== e3[t3] ? this.maskKeys[t3] ? this.maskObjectProperty(e3[t3]) : this.maskLogData(e3[t3]) : (this.maskKeys[t3] && "string" == typeof e3[t3] || "value" === t3 && this.maskKeys[e3.name]) && (e3[t3] = s);
                });
              }
              maskPIIInformation(e3) {
                const t3 = e3[e3.length - 1], n2 = "string" == typeof t3 ? this.tryJSONParse(t3) : this.copiedObj(t3);
                n2 && "object" == typeof n2 && (this.maskLogData(n2), e3.splice(e3.length - 1, 1, n2));
              }
            }
            const c = (...e3) => e3.map((e4) => "string" == typeof e4 ? e4 : JSON.stringify(e4));
            var u;
            function l(e3, t3) {
              const n2 = new u.Service(e3, t3);
              return u.POOL.addLogger(n2), n2;
            }
            !(function(e3) {
              e3.MAX_LOGS_SIZE = 1048576, e3.LS_LOGS_KEY = "uuip-client-logs";
              const t3 = "<uuip-eol>", n2 = /[\u0100-\uFFFF]/g, i3 = "yyyy-LL-dd HH:mm:ss:SSS";
              let s2;
              e3.defaultSaveIntervalMilliSeconds = 5e3, (function(e4) {
                e4[e4.Trace = 1] = "Trace", e4[e4.Debug = 2] = "Debug", e4[e4.Warn = 3] = "Warn", e4[e4.Error = 4] = "Error", e4[e4.Fatal = 5] = "Fatal";
              })(s2 = e3.Level || (e3.Level = {})), e3.Service = class {
                constructor(e4, t4) {
                  this.loggerEmitter = r()(), this.prefix = e4, this.maskKeys = t4;
                }
                log(t4, ...n3) {
                  this.maskKeys && "object" == typeof this.maskKeys && ((e4, t5) => {
                    new a(t5).maskPIIInformation(e4);
                  })(n3, this.maskKeys);
                  const r2 = c(this.prefix ? ["" + this.prefix, ...n3] : n3), s3 = Date.now(), u3 = o.DateTime.fromMillis(s3).toFormat(i3);
                  switch (t4) {
                    case e3.Level.Trace:
                      console.info(u3, ...r2);
                      break;
                    case e3.Level.Debug:
                      console.log(u3, ...r2);
                      break;
                    case e3.Level.Warn:
                      console.warn(u3, ...r2);
                      break;
                    case e3.Level.Error:
                    case e3.Level.Fatal:
                      console.error(u3, ...r2);
                      break;
                    default:
                      console.log(...r2);
                  }
                  const l2 = { pfx: this.prefix, msgs: [...n3], ts: s3, lvl: t4 };
                  this.emit("add", l2);
                }
                info(...e4) {
                  this.log(s2.Trace, ...e4);
                }
                debug(...e4) {
                  this.log(s2.Debug, ...e4);
                }
                warn(...e4) {
                  this.log(s2.Warn, ...e4);
                }
                error(...e4) {
                  this.log(s2.Error, ...e4);
                }
                emit(e4, ...t4) {
                  this.loggerEmitter.emit(e4, ...t4);
                }
                addEventListener(e4, t4) {
                  return this.loggerEmitter.on(e4, t4), () => {
                    this.removeEventListener(e4, t4);
                  };
                }
                removeEventListener(e4, t4) {
                  this.loggerEmitter.off(e4, t4);
                }
              };
              class u2 {
                constructor() {
                  this.loggers = /* @__PURE__ */ new Map(), this.logsCollectionString = "", this.prefixedLogsCollections = {}, this.lastSaveTime = Date.now(), this.config = { saveIntervalMilliSeconds: e3.defaultSaveIntervalMilliSeconds }, this.logRecordsSerializedLength = 0, this.flush = () => {
                    this.save(false);
                  }, this.onLoggerAddRecord = (e4) => {
                    this.addLogRecord(e4), this.save(true);
                  }, this.restore();
                }
                static getSerializedJsonLogRecordBytesSize(e4 = "") {
                  const t4 = e4.length;
                  if (t4) {
                    const i4 = e4.replace(n2, "").length;
                    return 1 * i4 + 2 * (t4 - i4);
                  }
                  return t4;
                }
                get serializedJsonLogsBytesSize() {
                  const e4 = this.logsCollectionString.split(t3).length;
                  return 2 + this.logRecordsSerializedLength + 1 * (e4 - 1);
                }
                save(t4 = true) {
                  const n3 = Date.now();
                  t4 && n3 - this.lastSaveTime < this.config.saveIntervalMilliSeconds || (this.lastSaveTime = n3, window.sessionStorage.setItem(e3.LS_LOGS_KEY, this.logsCollectionString));
                }
                restore() {
                  try {
                    const t4 = window.sessionStorage.getItem(e3.LS_LOGS_KEY) || "";
                    this.logsCollectionString = t4, this.logRecordsSerializedLength += u2.getSerializedJsonLogRecordBytesSize(this.logsCollectionString), this.restorePreFixedLogs();
                  } catch (e4) {
                    console.warn("Logger failed read logs from sessionStorage: ", e4);
                  }
                }
                getLogObjectFromString() {
                  try {
                    return "" !== this.logsCollectionString ? JSON.parse(`[${this.logsCollectionString.split(t3).join(",")}]`) : [];
                  } catch (e4) {
                    console.log("Error parsing local storage data");
                  }
                }
                restorePreFixedLogs() {
                  const e4 = this.getLogObjectFromString();
                  e4 && Array.isArray(e4) && e4.length > 0 && e4.forEach((e5) => {
                    this.addPreFixedLogs(e5), this.removeOversized();
                  });
                }
                addPreFixedLogs(e4) {
                  this.prefixedLogsCollections[e4.pfx] = this.prefixedLogsCollections[e4.pfx] || /* @__PURE__ */ new Set(), this.prefixedLogsCollections[e4.pfx].add(e4);
                }
                removeOversized() {
                  for (; this.serializedJsonLogsBytesSize > e3.MAX_LOGS_SIZE && "" !== this.logsCollectionString; ) this.removeLogRecord();
                }
                removeTextFromString(e4, t4, n3) {
                  return `${e4.slice(0, t4)}${e4.slice(n3 + t4)}`;
                }
                addLogRecord(e4) {
                  try {
                    const n3 = JSON.stringify(e4), i4 = this.logsCollectionString;
                    this.logsCollectionString = null == i4 ? void 0 : i4.concat(`${"" !== i4.trim() ? t3 : ""}${n3}`);
                  } catch (t4) {
                    const n3 = JSON.stringify(e4);
                    this.logsCollectionString = n3, console.warn("Logger failed read logs from sessionStorage: ", t4);
                  }
                  this.logRecordsSerializedLength += u2.getSerializedJsonLogRecordBytesSize(JSON.stringify(e4)), this.addPreFixedLogs(e4), this.removeOversized();
                }
                removeLogRecord() {
                  if ("" !== this.logsCollectionString) {
                    const e4 = this.logsCollectionString.indexOf(t3);
                    if (-1 !== e4) {
                      const t4 = this.logsCollectionString.substring(0, e4), n3 = e4 + 10, i4 = this.removeTextFromString(this.logsCollectionString, 0, n3);
                      this.logsCollectionString = i4, this.logRecordsSerializedLength -= u2.getSerializedJsonLogRecordBytesSize(t4);
                      try {
                        const e5 = JSON.parse(t4);
                        this.prefixedLogsCollections[e5.pfx] && this.prefixedLogsCollections[e5.pfx].forEach((t5) => {
                          t5.ts === e5.ts && this.prefixedLogsCollections[e5.pfx].delete(t5);
                        });
                      } catch (e5) {
                        console.warn("Logger failed to read/parse the first logs from sessionStorage: ", e5);
                      }
                    }
                  }
                }
                removePreFixedLogs(e4) {
                  const n3 = this.getLogObjectFromString();
                  e4.forEach((e5) => {
                    const t4 = n3.findIndex((t5) => t5.pfx === e5.pfx);
                    -1 !== t4 && (n3.splice(t4, 1), this.logRecordsSerializedLength -= u2.getSerializedJsonLogRecordBytesSize(JSON.stringify(e5)), this.prefixedLogsCollections[e5.pfx] && this.prefixedLogsCollections[e5.pfx].has(e5) && this.prefixedLogsCollections[e5.pfx].delete(e5));
                  }), this.logsCollectionString = n3.map((e5) => JSON.stringify(e5)).join(t3);
                }
                static getLogRecordReadable(e4) {
                  if (e4.ts) return { prefix: e4.pfx, messages: e4.msgs, timestamp: o.DateTime.fromMillis(e4.ts).toFormat(i3), level: s2[e4.lvl] };
                }
                static getLogsReadableJson(e4) {
                  const t4 = (e5) => e5.map((e6) => u2.getLogRecordReadable(e6));
                  return JSON.stringify(Array.isArray(e4) ? t4(e4) : Object.keys(e4).reduce((n3, i4) => (n3[i4] = t4(e4[i4]), n3), {}), null, 2);
                }
                static getLogsReadableText(e4) {
                  const t4 = (e5) => e5.reduce((e6, t5) => {
                    const n3 = u2.getLogRecordReadable(t5);
                    return n3 && (e6 += `${n3.timestamp} ${n3.prefix} ${n3.level} ${c(n3.messages).join(" ")} \r
`), e6;
                  }, "");
                  return Array.isArray(e4) ? t4(e4) : Object.keys(e4).reduce((n3, i4) => (n3 += `[SERVICE "${i4}" LOGS]: `) + t4(e4[i4]), "");
                }
                static getLogsUrl(e4) {
                  return "data:text/plain;charset=utf-8," + encodeURIComponent(e4);
                }
                static browserDownload(e4, t4) {
                  try {
                    if (document && document.createElement) {
                      const n3 = document.createElement("a");
                      n3.setAttribute("href", e4), n3.setAttribute("download", t4), n3.style.display = "none", document.body.appendChild(n3), n3.click(), document.body.removeChild(n3);
                    } else console.warn("Browser is not supported to download logs");
                  } catch (e5) {
                  }
                }
                addLogger(e4) {
                  this.loggers.set(e4.prefix, e4), e4.removeEventListener("add", this.onLoggerAddRecord), e4.addEventListener("add", this.onLoggerAddRecord);
                }
                getAllLogsJsonUrl() {
                  return u2.getLogsUrl(u2.getLogsReadableJson(this.getLogObjectFromString()));
                }
                getAllPrefixedLogsJsonUrl() {
                  return u2.getLogsUrl(u2.getLogsReadableJson(this.getAllPrefixedLogsCollections()));
                }
                getPrefixedLogsJsonUrl(e4) {
                  return u2.getLogsUrl(u2.getLogsReadableJson(this.getPrefixedLogsCollection(e4)));
                }
                getAllLogsTextUrl() {
                  return u2.getLogsUrl(u2.getLogsReadableText(this.getLogObjectFromString()));
                }
                getPrefixedLogsTextUrl(e4) {
                  return u2.getLogsUrl(u2.getLogsReadableText(this.getPrefixedLogsCollection(e4)));
                }
                browserDownloadAllLogsJson() {
                  u2.browserDownload(this.getAllLogsJsonUrl(), /* @__PURE__ */ new Date() + "_all_logs.json");
                }
                browserDownloadAllPrefixedLogsJson() {
                  u2.browserDownload(this.getAllPrefixedLogsJsonUrl(), /* @__PURE__ */ new Date() + "_all_prefixed_logs.json");
                }
                browserDownloadPrefixedLogsJson(e4) {
                  u2.browserDownload(this.getPrefixedLogsJsonUrl(e4), `${/* @__PURE__ */ new Date()}_${e4}_logs.json`);
                }
                browserDownloadAllLogsText() {
                  u2.browserDownload(this.getAllLogsTextUrl(), /* @__PURE__ */ new Date() + "_all_logs.log");
                }
                browserDownloadPrefixedLogsText(e4) {
                  u2.browserDownload(this.getPrefixedLogsTextUrl(e4), `${/* @__PURE__ */ new Date()}_${e4}_logs.log`);
                }
                cleanupAllLogs() {
                  this.logRecordsSerializedLength = 0, this.logsCollectionString = "", Object.keys(this.prefixedLogsCollections).forEach((e4) => this.prefixedLogsCollections[e4] = /* @__PURE__ */ new Set()), this.save(true);
                }
                cleanupPrefixedLogs(e4) {
                  const t4 = this.getPrefixedLogsCollection(e4);
                  this.removePreFixedLogs(t4), this.prefixedLogsCollections[e4] = /* @__PURE__ */ new Set(), this.save(true);
                }
                getAllPrefixedLogsCollections() {
                  return Object.keys(this.prefixedLogsCollections).reduce((e4, t4) => (e4[t4] = this.getPrefixedLogsCollection(t4), e4), {});
                }
                getPrefixedLogsCollection(e4) {
                  return Array.from(this.prefixedLogsCollections[e4] || /* @__PURE__ */ new Set());
                }
              }
              e3.ServicesPool = u2, e3.POOL = new e3.ServicesPool();
            })(u || (u = {}));
            const d = l("unified-ui-platform-sdk", { title: true, text: true });
            var h, f;
            function v(e3) {
              return new h.Service(e3);
            }
            function p(e3, t3) {
              if (e3.descriptor = e3.descriptor || Object.getOwnPropertyDescriptor(e3.target, e3.key), "function" != typeof e3.descriptor.value) return console.warn(e3.key, "Decorator must be used on function"), e3.descriptor;
              const n2 = e3.descriptor.value, i3 = e3.target.constructor.name;
              return e3.descriptor.value = function() {
                const e4 = [];
                for (let t4 = 0; t4 < arguments.length; t4++) e4[t4] = arguments[t4];
                return t3.call(this, n2, e4, i3);
              }, e3.descriptor;
            }
            function g(e3 = 250) {
              return function(t3, n2, i3) {
                let r2;
                return p({ target: t3, key: n2, descriptor: i3 }, (function(t4, n3) {
                  clearTimeout(r2), r2 = window.setTimeout(() => {
                    clearTimeout(r2), t4.apply(this, n3);
                  }, e3);
                }));
              };
            }
            function m() {
              return (e3, t3) => {
                const n2 = { get() {
                  return new I(this, void 0 !== t3 ? t3 : e3.key);
                }, enumerable: true, configurable: true };
                return void 0 !== t3 ? Object.defineProperty(e3, t3, n2) : { kind: "method", placement: "prototype", key: e3.key, descriptor: n2 };
              };
            }
            function y(e3, t3 = true) {
              return function(n2, i3, r2) {
                return p({ target: n2, key: i3, descriptor: r2 }, (function(n3, r3) {
                  return o2 = this, a2 = function* () {
                    const o3 = "_" + i3 + "_exec_flag";
                    if (t3 && this[o3]) return void console.log("PREVENTING DOUBLE EXECUTION");
                    const s3 = (t4) => {
                      if (this[o3] = t4, "function" == typeof e3) e3.call(this, { isExec: t4, ctx: this });
                      else {
                        const n4 = e3;
                        t4 ? n4.before && n4.before.call(this, this) : n4.after && n4.after.call(this, this);
                      }
                    };
                    s3(true);
                    const a3 = n3.apply(this, r3);
                    return a3 instanceof Promise ? a3.then(() => s3(false)).catch(() => s3(false)) : (console.warn("Must be async function to use [@Executing] decorator"), s3(false)), a3;
                  }, new ((s2 = void 0) || (s2 = Promise))((function(e4, t4) {
                    function n4(e5) {
                      try {
                        r4(a2.next(e5));
                      } catch (e6) {
                        t4(e6);
                      }
                    }
                    function i4(e5) {
                      try {
                        r4(a2.throw(e5));
                      } catch (e6) {
                        t4(e6);
                      }
                    }
                    function r4(t5) {
                      var r5;
                      t5.done ? e4(t5.value) : (r5 = t5.value, r5 instanceof s2 ? r5 : new s2((function(e5) {
                        e5(r5);
                      }))).then(n4, i4);
                    }
                    r4((a2 = a2.apply(o2, [])).next());
                  }));
                  var o2, s2, a2;
                }));
              };
            }
            !(function(e3) {
              class t3 {
                static get isBrowserNotificationPromiseSupported() {
                  try {
                    window.Notification.requestPermission().then();
                  } catch (e4) {
                    return false;
                  }
                  return true;
                }
                constructor(e4) {
                  this.defaultOptions = e4 || {};
                }
                get isBrowserNotificationSupported() {
                  return !!("Notification" in window);
                }
                get isBrowserNotificationIconSupported() {
                  return this.isBrowserNotificationSupported && "icon" in window.Notification.prototype;
                }
                get isBrowserNotificationImageSupported() {
                  return this.isBrowserNotificationSupported && "image" in window.Notification.prototype;
                }
                get isBrowserNotificationBadgeSupported() {
                  return this.isBrowserNotificationSupported && "badge" in window.Notification.prototype;
                }
                get isPermissionGranted() {
                  return "granted" === window.Notification.permission;
                }
                get isPermissionDenied() {
                  return "denied" === window.Notification.permission;
                }
                get isPermissionUnknown() {
                  return !this.isPermissionGranted && !this.isPermissionDenied;
                }
                requestNotificationUserPermission() {
                  return e4 = this, i3 = function* () {
                    this.isBrowserNotificationSupported ? t3.isBrowserNotificationPromiseSupported ? yield window.Notification.requestPermission() : yield new Promise((e5) => window.Notification.requestPermission((t4) => e5(t4))) : d.warn("Browser notification is not supported...");
                  }, new ((n2 = void 0) || (n2 = Promise))((function(t4, r2) {
                    function o2(e5) {
                      try {
                        a2(i3.next(e5));
                      } catch (e6) {
                        r2(e6);
                      }
                    }
                    function s2(e5) {
                      try {
                        a2(i3.throw(e5));
                      } catch (e6) {
                        r2(e6);
                      }
                    }
                    function a2(e5) {
                      var i4;
                      e5.done ? t4(e5.value) : (i4 = e5.value, i4 instanceof n2 ? i4 : new n2((function(e6) {
                        e6(i4);
                      }))).then(o2, s2);
                    }
                    a2((i3 = i3.apply(e4, [])).next());
                  }));
                  var e4, n2, i3;
                }
                fire(e4, t4) {
                  return new window.Notification(e4, Object.assign(Object.assign({}, this.defaultOptions), t4 || {}));
                }
              }
              e3.Service = t3;
            })(h || (h = {})), (function(e3) {
              class t3 extends Error {
                constructor(e4, t4) {
                  super(), this.isErr = "yes", this.id = e4, this.stack = new Error().stack, "string" == typeof t4 ? this.message = t4 : t4 instanceof Error ? (this.message = t4.message, this.name = t4.name) : this.message = "";
                }
              }
              e3.Message = t3;
              class n2 extends Error {
                constructor(e4, t4) {
                  super(), this.isErr = "yes", this.id = e4, this.stack = new Error().stack, this.details = t4;
                }
              }
              e3.Details = n2;
            })(f || (f = {}));
            var E, b = function(e3, t3, n2, i3) {
              return new (n2 || (n2 = Promise))((function(r2, o2) {
                function s2(e4) {
                  try {
                    c2(i3.next(e4));
                  } catch (e5) {
                    o2(e5);
                  }
                }
                function a2(e4) {
                  try {
                    c2(i3.throw(e4));
                  } catch (e5) {
                    o2(e5);
                  }
                }
                function c2(e4) {
                  var t4;
                  e4.done ? r2(e4.value) : (t4 = e4.value, t4 instanceof n2 ? t4 : new n2((function(e5) {
                    e5(t4);
                  }))).then(s2, a2);
                }
                c2((i3 = i3.apply(e3, t3 || [])).next());
              }));
            };
            function w(e3) {
              return function(t3, n2, i3) {
                return p({ target: t3, key: n2, descriptor: i3 }, (function(t4, i4, r2) {
                  return b(this, void 0, void 0, (function* () {
                    const o2 = this, s2 = (t5) => b(this, void 0, void 0, (function* () {
                      t5.id && "string" == typeof t5.id && "yes" === t5.isErr || ("string" == typeof t5 || t5 instanceof Error ? t5 = new f.Message("system", t5) : (console.warn("Err must be 'string' or 'new Error()' instance"), t5 = new f.Message("system", "")));
                      const i5 = t5;
                      i5.ctx = o2;
                      const s3 = `Error] ${r2}.${n2} [${i5.id}]: ${i5.message}`;
                      if ("function" == typeof e3) {
                        const t6 = e3;
                        console.log("[Handled" + s3);
                        const n3 = t6.call(o2, i5);
                        n3 instanceof Promise && (yield n3);
                      } else {
                        const t6 = e3;
                        if (t6[i5.id]) {
                          console.log("[Handled" + s3);
                          const e4 = t6[i5.id].call(o2, i5);
                          e4 instanceof Promise && (yield e4);
                        } else if (t6.handle) {
                          console.log("[Handled" + s3);
                          const e4 = t6.handle.call(o2, i5);
                          e4 instanceof Promise && (yield e4);
                        } else console.warn("[Unhandled " + s3);
                        if (t6.fallback) {
                          const e4 = t6.fallback.call(o2, i5);
                          e4 instanceof Promise && (yield e4);
                        }
                      }
                    }));
                    try {
                      const e4 = t4.apply(o2, i4);
                      return e4 instanceof Promise ? new Promise((t5) => {
                        e4.then(t5).catch((e5) => b(this, void 0, void 0, (function* () {
                          yield s2(e5), t5(void 0);
                        })));
                      }) : e4;
                    } catch (e4) {
                      return void (yield s2(e4));
                    }
                  }));
                }));
              };
            }
            function S() {
              return function(e3, t3, n2) {
                return p({ target: e3, key: t3, descriptor: n2 }, (function(e4, n3) {
                  const i3 = "_" + t3 + "_once_flag";
                  if (!this[i3]) return this[i3] = true, e4.call(this, n3);
                }));
              };
            }
            function k(e3 = 1e3 / 60) {
              return function(t3, n2, i3) {
                let r2, o2 = Date.now();
                return p({ target: t3, key: n2, descriptor: i3 }, (function(t4, n3) {
                  const i4 = (...n4) => {
                    const s2 = Date.now();
                    window.clearTimeout(r2), !o2 || s2 - o2 >= e3 ? (o2 = s2, t4.apply(this, n4)) : r2 = window.setTimeout(() => i4(...n4), e3 - (s2 - o2));
                  };
                  i4(...n3);
                }));
              };
            }
            !(function(e3) {
              e3.Debounce = g, e3.Evt = m, e3.Exec = y, e3.Handle = w, e3.Once = S, e3.Throttle = k;
            })(E || (E = {}));
            class I {
              constructor(e3, t3) {
                this.target = e3, this.eventName = t3;
              }
              emit(e3, t3 = { bubbles: true, composed: true, cancelable: false }) {
                this.target.dispatchEvent(new CustomEvent(this.eventName, Object.assign({ detail: e3 }, t3)));
              }
            }
            const A = n(49);
            var C = e2.n(A);
            const T = n(51);
            function O(e3) {
              const t3 = C().create();
              return t3.accessToken = e3, t3.interceptors.request.use((e4) => {
                if (!e4.headers.Authorization && t3.accessToken && (e4.headers.Authorization = "Bearer " + t3.accessToken), !e4.headers.TrackingID) {
                  const t4 = (0, T.v1)();
                  e4.headers.TrackingID = `uuip_${t4}_1.0:1.0`;
                }
                return e4.headers["Content-Type"] || (e4.headers["Content-Type"] = "application/json"), e4;
              }), t3;
            }
            const U = n(52);
            var R = e2.n(U);
            const L = n(44);
            var x = e2.n(L);
            const D = n(46);
            var N, P, _ = e2.n(D);
            !(function(e3) {
              e3.createService = (e4) => {
                const t3 = R().createInstance();
                {
                  const n2 = e4 && e4.backend ? e4.backend : new (x())();
                  t3.use(n2);
                }
                {
                  const n2 = e4 && e4.languageDetector ? e4.languageDetector : new (_())();
                  t3.use(n2);
                }
                return e4 && e4.logger && t3.use({ log: "log" in e4.logger ? e4.logger.log : e4.logger.info, warn: e4.logger.warn, error: e4.logger.error, type: "logger" }), t3;
              }, e3.mergeServiceInitOptions = (...e4) => Object.assign.call(null, {}, ...e4), e3.createMixin = (t3) => {
                const n2 = "i18n" in t3 ? t3.i18n : e3.createService(), i3 = "i18nInitOptions" in t3 ? t3.i18nInitOptions : null;
                i3 || d.info("i18n mixin instance waiting service initialization outside...");
                let r2 = false;
                return (e4) => class extends e4 {
                  constructor() {
                    super(...arguments), this.onI18NInitialized = (e5) => this.requestUpdate(), this.onI18NLanguageChanged = (e5) => this.requestUpdate();
                  }
                  connectedCallback() {
                    super.connectedCallback && super.connectedCallback(), n2.on("initialized", this.onI18NInitialized), n2.on("languageChanged", this.onI18NLanguageChanged), n2.isInitialized || r2 || !i3 || (r2 = true, n2.init(i3).finally(() => r2 = false));
                  }
                  disconnectedCallback() {
                    n2.off("initialized", this.onI18NInitialized), n2.off("languageChanged", this.onI18NLanguageChanged), super.disconnectedCallback && super.disconnectedCallback();
                  }
                  t(...e5) {
                    return n2.t(...e5);
                  }
                };
              };
            })(N || (N = {})), (function(e3) {
              e3.DataController = class {
                constructor(e4) {
                  this.localization = { closeButtonText: "Close" }, this.type = e4.type, this.text = e4.text, this.link = e4.link, this.linkName = e4.linkName, this.linkTooltip = e4.linkTooltip, this.iconDetail = e4.iconDetail, this.linkHandler = e4.linkHandler, this.clickHandler = e4.clickHandler, this.errorDetail = e4.errorDetail, this.taskId = e4.taskId, this.localization = e4.localization || this.localization, this.dismissHandler = e4.dismissHandler, this.actions = e4.actions, this.lineClamp = e4.lineClamp;
                }
              };
            })(P || (P = {}));
            const M = n(15);
            var V, j, q = e2.n(M);
            function F(e3 = {}) {
              const t3 = new V.Service();
              return t3.updateConfig(e3), t3;
            }
            !(function(e3) {
              let t3, n2;
              !(function(e4) {
                let t4, n3, i4, r2, o2, s3, a3, c3;
                !(function(e5) {
                  e5.Info = "info", e5.Warn = "warn", e5.Error = "error", e5.Success = "success", e5.Chat = "chat", e5.Default = "default";
                })(t4 = e4.Type || (e4.Type = {})), e4.TYPES = Object.values(t4), (function(e5) {
                  e5.Silent = "silent", e5.AutoDismiss = "autodismiss", e5.Acknowledge = "acknowledge";
                })(n3 = e4.Mode || (e4.Mode = {})), e4.MODES = Object.values(n3), (function(e5) {
                  e5.Added = "added", e5.Pended = "pended", e5.Activated = "activated", e5.Deactivated = "deactivated", e5.Removed = "removed";
                })(i4 = e4.Status || (e4.Status = {})), e4.StatusWeight = { [i4.Added]: 0, [i4.Pended]: 1, [i4.Activated]: 2, [i4.Deactivated]: 3, [i4.Removed]: 4 }, e4.STATUSES = Object.values(i4), (function(e5) {
                  e5.User = "user_add";
                })(r2 = e4.AddEventReason || (e4.AddEventReason = {})), (function(e5) {
                  e5.ServiceAutoPropagate = "service_auto_propagate_pending", e5.ServiceAutoDismiss = "service_autodismiss_pending", e5.UserSilent = "user_silent_pending";
                })(o2 = e4.PendingEventReason || (e4.PendingEventReason = {})), (function(e5) {
                  e5.ServiceAutoPropagate = "service_auto_propagate_activate";
                })(s3 = e4.ActivateEventReason || (e4.ActivateEventReason = {})), (function(e5) {
                  e5.UserNegative = "user_negative_deactivate", e5.UserPositive = "user_positive_deactivate", e5.UserNeutral = "user_neutral_deactivate";
                })(a3 = e4.DeactivateEventReason || (e4.DeactivateEventReason = {})), (function(e5) {
                  e5.User = "user_remove";
                })(c3 = e4.RemoveEventReason || (e4.RemoveEventReason = {}));
              })(t3 = e3.ItemMeta || (e3.ItemMeta = {})), (function(e4) {
                e4.STATUS_EVENTS = ["add", "pending", "activate", "deactivate", "remove"], e4.STATUS_EVENT_MAP = { add: t3.Status.Added, pending: t3.Status.Pended, activate: t3.Status.Activated, deactivate: t3.Status.Deactivated, remove: t3.Status.Removed }, e4.DISABLED_ITEM_MODE = { [t3.Mode.Silent]: false, [t3.Mode.AutoDismiss]: false, [t3.Mode.Acknowledge]: false }, e4.ACTIVATED_ITEM_MODE_LIMIT = { [t3.Mode.Silent]: 0, [t3.Mode.AutoDismiss]: 10, [t3.Mode.Acknowledge]: 1 }, e4.AUTO_DISMISS_TIMEOUT = 5e3;
              })(n2 = e3.ServiceMeta || (e3.ServiceMeta = {}));
              class i3 {
                constructor() {
                  this.hubEmitter = r()();
                }
                emit(e4, ...t4) {
                  this.hubEmitter.emit(e4, ...t4);
                }
                addEventListener(e4, t4) {
                  this.hubEmitter.on(e4, t4);
                }
                addOnceEventListener(e4, t4) {
                  this.hubEmitter.once(e4, t4);
                }
                removeEventListener(e4, t4) {
                  this.hubEmitter.off(e4, t4);
                }
                removeAllEventListeners() {
                  q()(this.hubEmitter);
                }
              }
              e3.Item = class {
                get status() {
                  return this._status;
                }
                get reason() {
                  return this._reason;
                }
                get mode() {
                  return this._mode;
                }
                validateAuxOptions(e4) {
                  let n3 = {};
                  return e4 && void 0 !== e4.AUTO_DISMISS_TIMEOUT && this.mode === t3.Mode.AutoDismiss && (n3 = Object.assign(Object.assign({}, n3), { AUTO_DISMISS_TIMEOUT: e4.AUTO_DISMISS_TIMEOUT })), n3;
                }
                constructor(e4, n3) {
                  this._serviceHubSubscriptions = [], this._itemEmitter = r()();
                  const { type: i4, mode: s3, title: a3, data: c3, timestamp: u2 } = e4.data;
                  this.type = i4, this.title = a3, this.data = c3, this._mode = s3, this.timestamp = u2 || (/* @__PURE__ */ new Date()).toISOString(), this.datetime = o.DateTime.fromISO(this.timestamp).toLocaleString(o.DateTime.DATETIME_SHORT_WITH_SECONDS), this.options = Object.freeze(this.validateAuxOptions(e4.options || {})), n3 && (this._serviceHubAdapter = n3, this._status = t3.Status.Added, this._reason = t3.AddEventReason.User, this.bindItemHubListeners());
                }
                bindItemHubListeners() {
                  if (this._serviceHubAdapter) {
                    {
                      const e4 = (e5, n4, i4) => {
                        this.timestamp in e5 && (this._status = n4, this._reason = i4, n4 === t3.Status.Removed && (this.unbindItemHubListeners(), this.removeAllEventListeners()), this.emit("statusUpdate", n4, i4));
                      };
                      this._serviceHubAdapter.addEventListener("statusServiceUpdateResponse", e4);
                      const n3 = () => {
                        var t4;
                        null === (t4 = this._serviceHubAdapter) || void 0 === t4 || t4.removeEventListener("statusServiceUpdateResponse", e4);
                      };
                      this._serviceHubSubscriptions.push(n3);
                    }
                    {
                      const e4 = (e5, t5) => {
                        this.timestamp in e5 && (this._mode = t5, this.emit("modeUpdate", t5));
                      };
                      this._serviceHubAdapter.addEventListener("modeStatusUpdateResponse", e4);
                      const t4 = () => {
                        var t5;
                        null === (t5 = this._serviceHubAdapter) || void 0 === t5 || t5.removeEventListener("modeStatusUpdateResponse", e4);
                      };
                      this._serviceHubSubscriptions.push(t4);
                    }
                  }
                }
                unbindItemHubListeners() {
                  this._serviceHubSubscriptions && (this._serviceHubSubscriptions.forEach((e4) => e4()), this._serviceHubSubscriptions.length = 0);
                }
                deactivate(e4) {
                  this._status && t3.StatusWeight[this._status] < t3.StatusWeight[t3.Status.Deactivated] ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, t3.Status.Deactivated, e4) : d.warn("Service hub adapter is not initialized for this notification item instance: ", this) : d.warn(`Notification should have "${t3.Status.Pended}" or "${t3.Status.Activated}" status to be able change status to "${t3.Status.Deactivated}".Current notification status is "${this._status}". Ignoring this change`);
                }
                pending() {
                  this._status === t3.Status.Activated || this.mode !== t3.Mode.Silent ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, t3.Status.Pended, t3.PendingEventReason.UserSilent) : d.warn("Service hub adapter is not initialized for this notification item instance: ", this) : d.warn(`Notification should have "${t3.Status.Activated}" status or not "${t3.Mode.Silent}" mode, to be able change status to "${t3.Status.Pended}" and mode to "${t3.Mode.Silent}".Current notification status is "${this._status}" and mode is "${this.mode}". Ignoring this change`);
                }
                emit(e4, ...t4) {
                  this._itemEmitter.emit(e4, ...t4);
                }
                addEventListener(e4, t4) {
                  this._itemEmitter.on(e4, t4);
                }
                addOnceEventListener(e4, t4) {
                  this._itemEmitter.once(e4, t4);
                }
                removeEventListener(e4, t4) {
                  this._itemEmitter.off(e4, t4);
                }
                removeAllEventListeners() {
                  q()(this._itemEmitter);
                }
              };
              const s2 = (e4, t4, n3 = (() => 0)) => [...e4, ...t4].sort(n3), a2 = (e4, t4) => e4.reduce((e5, n3) => (-1 === t4.indexOf(n3) && e5.push(n3), e5), []);
              class c2 {
                constructor() {
                  this.emitter = r()(), this.map = {}, this.status = c2.createStatus(), this.serviceConfig = { DISABLED_ITEM_MODE: Object.assign({}, n2.DISABLED_ITEM_MODE), ACTIVATED_ITEM_MODE_LIMIT: Object.assign({}, n2.ACTIVATED_ITEM_MODE_LIMIT), AUTO_DISMISS_TIMEOUT: n2.AUTO_DISMISS_TIMEOUT }, this.activeAutoDismissTimeoutRefs = {}, this.serviceHubAdapter = new i3(), this.bindServiceHubEvents();
                }
                static mergeConfig(e4, ...t4) {
                  if (!t4.length) return e4;
                  const n3 = t4.shift(), i4 = (e5) => e5 && "object" == typeof e5 && !Array.isArray(e5);
                  if (i4(e4) && i4(n3)) for (const t5 in n3) i4(n3[t5]) ? (e4[t5] || Object.assign(e4, { [t5]: {} }), this.mergeConfig(e4[t5], n3[t5])) : Object.assign(e4, { [t5]: n3[t5] });
                  return this.mergeConfig(e4, ...t4);
                }
                static createStatus() {
                  return { [t3.Status.Added]: this.createStatusHolderCollection(), [t3.Status.Pended]: this.createStatusHolderCollection(), [t3.Status.Activated]: this.createStatusHolderCollection(), [t3.Status.Deactivated]: this.createStatusHolderCollection(), [t3.Status.Removed]: this.createStatusHolderCollection() };
                }
                static createStatusHolderCollection() {
                  return Object.assign([], Object.assign(Object.assign({ ids: [] }, this.createStatusHolderSubCollections(t3.MODES)), this.createStatusHolderSubCollections(t3.TYPES)));
                }
                static createStatusHolderSubCollections(e4) {
                  return Object.assign({}, e4.reduce((e5, t4) => (e5[t4] = [], e5), {}));
                }
                updateNotificationsCollections() {
                  const e4 = c2.createStatus();
                  this.status.added.ids.forEach((n3) => {
                    const i4 = this.map[n3];
                    t3.STATUSES.forEach((t4) => {
                      -1 !== this.status[t4].ids.indexOf(i4.timestamp) && (e4[t4].push(i4), e4[t4].ids.push(n3), e4[t4][i4.mode].push(i4), e4[t4][i4.type].push(i4));
                    });
                  }), this.status = e4;
                }
                setAutoDismiss(e4, n3 = (() => {
                })) {
                  this.prepareUpdateNotifications(e4).forEach((e5) => {
                    var i4;
                    if (e5.mode === t3.Mode.AutoDismiss) {
                      const t4 = () => n3(e5);
                      this.activeAutoDismissTimeoutRefs[e5.timestamp] = window.setTimeout(t4, null !== (i4 = e5.options.AUTO_DISMISS_TIMEOUT) && void 0 !== i4 ? i4 : this.serviceConfig.AUTO_DISMISS_TIMEOUT);
                    }
                  });
                }
                removeAutoDismiss(e4, t4 = (() => {
                })) {
                  this.prepareUpdateNotifications(e4).forEach((e5) => {
                    e5.timestamp in this.activeAutoDismissTimeoutRefs && (t4(e5), window.clearTimeout(this.activeAutoDismissTimeoutRefs[e5.timestamp]), delete this.activeAutoDismissTimeoutRefs[e5.timestamp]);
                  });
                }
                update(e4, t4, n3) {
                  const i4 = Array.isArray(n3) ? n3 : [n3];
                  if (i4.length) {
                    const n4 = i4.map((e5) => e5.timestamp);
                    switch (e4) {
                      case "add":
                        i4.forEach((e5) => this.map[e5.timestamp] = e5), this.status.added.ids = s2(this.status.added.ids, n4, c2.sortTimestampsFn);
                        break;
                      case "pending":
                        this.status.pended.ids = s2(this.status.pended.ids, n4, c2.sortTimestampsFn), this.status.activated.ids = a2(this.status.activated.ids, n4), this.status.deactivated.ids = a2(this.status.deactivated.ids, n4);
                        break;
                      case "activate":
                        this.status.pended.ids = a2(this.status.pended.ids, n4), this.status.activated.ids = s2(this.status.activated.ids, n4, c2.sortTimestampsFn), this.status.deactivated.ids = a2(this.status.deactivated.ids, n4);
                        break;
                      case "deactivate":
                        this.status.pended.ids = a2(this.status.pended.ids, n4), this.status.activated.ids = a2(this.status.activated.ids, n4), this.status.deactivated.ids = s2(this.status.deactivated.ids, n4, c2.sortTimestampsFn);
                        break;
                      case "remove":
                        this.status.pended.ids = a2(this.status.pended.ids, n4), this.status.activated.ids = a2(this.status.activated.ids, n4), this.status.deactivated.ids = a2(this.status.deactivated.ids, n4), this.status.added.ids = a2(this.status.added.ids, n4), this.status.removed.ids = s2(this.status.removed.ids, n4, c2.sortTimestampsFn), n4.forEach((e5) => delete this.map[e5]);
                    }
                    this.updateNotificationsCollections(), this.emit(e4, i4, t4), this.propagate(e4, t4, i4);
                  }
                }
                propagate(e4, n3, i4) {
                  const r2 = Array.isArray(i4) ? i4 : [i4];
                  if (r2.length) switch (e4) {
                    case "add":
                      this.update("pending", t3.PendingEventReason.ServiceAutoPropagate, r2);
                      break;
                    case "pending":
                    case "deactivate":
                      r2.forEach((e5) => {
                        this.removeAutoDismiss(e5);
                      }), this.update("activate", t3.ActivateEventReason.ServiceAutoPropagate, this.prepareActiveCandidatesNotifications(this.status.pended));
                      break;
                    case "activate":
                      r2.forEach((e5) => {
                        this.setAutoDismiss(e5, (e6) => {
                          e6.mode === t3.Mode.AutoDismiss && this.serviceHubAdapter.emit("statusServiceUpdateRequest", e6, t3.Status.Pended, t3.PendingEventReason.ServiceAutoDismiss);
                        });
                      });
                      break;
                    case "remove":
                      this.update("deactivate", t3.DeactivateEventReason.UserNegative, r2);
                  }
                }
                prepareAddNotifications(t4) {
                  const n3 = Object.keys(this.serviceConfig.DISABLED_ITEM_MODE).reduce((e4, t5) => (this.serviceConfig.DISABLED_ITEM_MODE[t5] || e4.push(t5), e4), []).map((e4) => `"${e4}"`).join(", ");
                  return (Array.isArray(t4) ? t4 : [t4]).filter((e4) => !this.serviceConfig.DISABLED_ITEM_MODE[e4.data.mode] || (d.error(`Trying to .add(...) notification mode "${e4.data.mode}" that is disabled in this notifications service instance by configuration.Current configuration is: "${JSON.stringify(this.config)}"Only ${n3} allowed. Ignoring .add(${JSON.stringify(e4)}) notification...`), false)).map((t5) => new e3.Item(t5, this.serviceHubAdapter));
                }
                prepareUpdateNotifications(e4) {
                  return (Array.isArray(e4) ? e4 : [e4]).reduce((e5, t4) => (t4.timestamp in this.map ? e5.push(t4) : d.error("Trying to handle untracked notification. Call .add(...) first...", JSON.stringify(t4)), e5), []);
                }
                prepareActiveCandidatesNotifications(e4) {
                  const n3 = (Array.isArray(e4) ? e4 : [e4]).reduce((e5, t4) => (this.status.activated[t4.mode].length + e5[t4.mode].length < this.serviceConfig.ACTIVATED_ITEM_MODE_LIMIT[t4.mode] && e5[t4.mode].push(t4), e5), c2.createStatusHolderSubCollections(t3.MODES));
                  return Object.values(n3).reduce((e5, t4) => e5.concat(t4), []);
                }
                static sortByTimestampsFn(e4, t4) {
                  return c2.sortTimestampsFn(e4.timestamp, t4.timestamp);
                }
                get added() {
                  return this.status.added;
                }
                get pended() {
                  return this.status.pended;
                }
                get activated() {
                  return this.status.activated;
                }
                get deactivated() {
                  return this.status.deactivated;
                }
                getNotificationStatus(e4) {
                  return Object.keys(this.status).filter((e5) => e5 !== t3.Status.Added).find((t4) => -1 !== this.status[t4].ids.indexOf(e4.timestamp));
                }
                get config() {
                  return Object.freeze(this.serviceConfig);
                }
                static validateUpdateConfig(e4) {
                  const i4 = e4;
                  if (i4.ACTIVATED_ITEM_MODE_LIMIT && i4.ACTIVATED_ITEM_MODE_LIMIT.acknowledge > n2.ACTIVATED_ITEM_MODE_LIMIT.acknowledge) throw new Error(`
          Max ${t3.Mode.Acknowledge} limit is ${n2.ACTIVATED_ITEM_MODE_LIMIT.acknowledge}
        `);
                  if (i4.DISABLED_ITEM_MODE) {
                    if (!Object.keys(i4.DISABLED_ITEM_MODE).reduce((e5, t4) => (i4.DISABLED_ITEM_MODE[t4] && e5++, e5), 0)) throw new Error("At least one notifications mode should be allowed in service instance");
                    Object.keys(i4.ACTIVATED_ITEM_MODE_LIMIT).forEach((e5) => {
                      e5 in i4.DISABLED_ITEM_MODE && i4.DISABLED_ITEM_MODE[e5] && d.warn(`Changing configuration limit count for mode "${e5}" won't have any effect, because this mode is disabled in notifications service instance`);
                    }), "AUTO_DISMISS_TIMEOUT" in i4 && i4.DISABLED_ITEM_MODE[t3.Mode.AutoDismiss] && d.warn(`Changing "AUTO_DISMISS_TIMEOUT" configuration option won't have any effect,because "${t3.Mode.AutoDismiss}" mode is disabled in notifications service instance`);
                  }
                  return true;
                }
                updateConfig(e4) {
                  c2.validateUpdateConfig(e4) && (this.serviceConfig = c2.mergeConfig({}, this.serviceConfig, e4), d.info("Updated notifications service configuration: ", this.config));
                }
                add(e4) {
                  const n3 = this.prepareAddNotifications(e4);
                  return this.update("add", t3.AddEventReason.User, n3), n3;
                }
                pending(e4) {
                  const n3 = this.prepareUpdateNotifications(e4);
                  return this.serviceHubAdapter.emit("statusServiceUpdateRequest", n3, t3.Status.Pended, t3.PendingEventReason.UserSilent), n3;
                }
                deactivate(e4, n3) {
                  const i4 = this.prepareUpdateNotifications(e4);
                  return this.serviceHubAdapter.emit("statusServiceUpdateRequest", i4, t3.Status.Deactivated, n3), i4;
                }
                remove(e4) {
                  const n3 = this.prepareUpdateNotifications(e4);
                  return this.serviceHubAdapter.emit("statusServiceUpdateRequest", n3, t3.Status.Removed, t3.RemoveEventReason.User), n3;
                }
                pendingAllActivated() {
                  return this.pending(this.status.activated);
                }
                pendingAll() {
                  return this.pending([...this.status.pended, ...this.status.activated]);
                }
                deactivateAllActivated(e4) {
                  return this.deactivate(this.status.activated, e4);
                }
                deactivateAll(e4) {
                  return this.deactivate([...this.status.pended, ...this.status.activated], e4);
                }
                removeAllDeactivated() {
                  return this.remove(this.status.deactivated);
                }
                removeAll() {
                  return this.remove(this.status.added);
                }
                addEventListener(e4, t4) {
                  this.emitter.on(e4, t4);
                }
                removeEventListener(e4, t4) {
                  this.emitter.off(e4, t4);
                }
                addOnceEventListener(e4, t4) {
                  this.emitter.once(e4, t4);
                }
                removeAllEventListeners() {
                  q()(this.emitter);
                }
                emit(e4, ...t4) {
                  this.emitter.emit(e4, ...t4);
                }
                bindServiceHubEvents() {
                  this.serviceHubAdapter.addEventListener("statusServiceUpdateRequest", (e4, n3, i4) => {
                    const r2 = Array.isArray(e4) ? e4 : [e4], o2 = r2.reduce((e5, t4) => (e5[t4.timestamp] = this.getNotificationStatus(t4), e5), {});
                    {
                      const e5 = r2.filter((e6) => (o2[e6.timestamp] === t3.Status.Activated || e6.mode !== t3.Mode.Silent) && n3 === t3.Status.Pended);
                      {
                        const n4 = e5.filter((e6) => e6.mode !== t3.Mode.Silent);
                        n4.length && this.serviceHubAdapter.emit("modeStatusUpdateResponse", n4.reduce((e6, t4) => (e6[t4.timestamp] = t4, e6), {}), t3.Mode.Silent);
                      }
                      e5.length && this.update("pending", i4, e5);
                    }
                    {
                      const e5 = r2.filter((e6) => {
                        const i5 = o2[e6.timestamp];
                        return (i5 === t3.Status.Pended || i5 === t3.Status.Activated) && n3 === t3.Status.Deactivated;
                      });
                      e5.length && this.update("deactivate", i4, e5);
                    }
                    r2.filter((e5) => {
                      const i5 = o2[e5.timestamp];
                      return (i5 === t3.Status.Pended || i5 === t3.Status.Activated || i5 === t3.Status.Deactivated) && n3 === t3.Status.Removed;
                    }).length && this.update("remove", i4, e4);
                  }), n2.STATUS_EVENTS.forEach((e4) => {
                    this.addEventListener(e4, (t4, i4) => {
                      const r2 = n2.STATUS_EVENT_MAP[e4], o2 = t4.reduce((e5, t5) => (e5[t5.timestamp] = t5, e5), {});
                      this.serviceHubAdapter.emit("statusServiceUpdateResponse", o2, r2, i4);
                    });
                  });
                }
              }
              c2.sortTimestampsFn = (e4, t4) => e4 > t4 ? 1 : e4 < t4 ? -1 : 0, e3.Service = c2;
            })(V || (V = {})), (function(e3) {
              class t3 {
                constructor() {
                  this.listeners = [], this.listenersOnce = [], this.listen = (e4) => (this.listeners.push(e4), { stopListen: () => this.stopListen(e4) }), this.listenOnce = (e4) => (this.listenersOnce.push(e4), { stopListenOnce: () => this.stopListenOnce(e4) }), this.stopListen = (e4) => {
                    const t4 = this.listeners.indexOf(e4, 0);
                    return t4 > -1 && (this.listeners.splice(t4, 1), true);
                  }, this.stopListenOnce = (e4) => {
                    const t4 = this.listenersOnce.indexOf(e4, 0);
                    return t4 > -1 && (this.listenersOnce.splice(t4, 1), true);
                  }, this.stopListenAll = () => {
                    this.listeners = [], this.listenersOnce = [];
                  }, this.send = (e4) => {
                    this.listeners.forEach((t4) => t4(e4)), this.listenersOnce.forEach((t4) => t4(e4)), this.listenersOnce = [];
                  };
                }
              }
              class n2 {
                constructor() {
                  this.listeners = [], this.listenersOnce = [], this.listen = (e4) => (this.listeners.push(e4), { stopListen: () => this.stopListen(e4) }), this.listenOnce = (e4) => (this.listenersOnce.push(e4), { stopListenOnce: () => this.stopListenOnce(e4) }), this.stopListen = (e4) => {
                    const t4 = this.listeners.indexOf(e4, 0);
                    return t4 > -1 && (this.listeners.splice(t4, 1), true);
                  }, this.stopListenOnce = (e4) => {
                    const t4 = this.listenersOnce.indexOf(e4, 0);
                    return t4 > -1 && (this.listenersOnce.splice(t4, 1), true);
                  }, this.stopListenAll = () => {
                    this.listeners = [], this.listenersOnce = [];
                  }, this.send = () => {
                    this.listeners.forEach((e4) => e4()), this.listenersOnce.forEach((e4) => e4()), this.listenersOnce = [];
                  };
                }
              }
              e3.create = new class {
                withData() {
                  const e4 = new t3();
                  return { signal: e4, send: e4.send, stopListenAll: e4.stopListenAll };
                }
                empty() {
                  const e4 = new n2();
                  return { signal: e4, send: e4.send, stopListenAll: e4.stopListenAll };
                }
              }();
            })(j || (j = {}));
            let B = null;
            const H = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER, z = 1073741824, J = () => {
              if (null !== B) return B;
              const e3 = new Blob([`(()=>{"use strict";
const e=new Map,t=new Map,r=(e,t)=>
{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);
    return{expected:r+o,remainingDelay:o}},
    o=(e,t,r,i)=>{const s=performance.now();
        s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};
        addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;
        if("interval"===i)
        (t=>{const r=e.get(t);
        if(void 0===r)
        throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));
        clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});
        else{if("timeout"!==i)
        throw new Error('The given type "'.concat(i,'" is not supported'));
        (e=>{const r=t.get(e);if(void 0===r)
        throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));
        clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}
        else{if("set"!==s.method)
        throw new Error('The given method "'.concat(s.method,'" is not supported'));
        {const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;
        if("interval"===d)
        ((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);
        e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);
        else{if("timeout"!==d)
        throw new Error('The given type "'.concat(d,'" is not supported'));
        ((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);
        t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();`], { type: "application/javascript; charset=utf-8" }), t3 = URL.createObjectURL(e3);
              return d.info("Worker url established", t3), B = ((e4) => {
                const t4 = /* @__PURE__ */ new Map([[0, () => {
                }]]), n2 = /* @__PURE__ */ new Map([[0, () => {
                }]]), i3 = /* @__PURE__ */ new Map(), r2 = new Worker(e4);
                d.info("worker created ", r2);
                const o2 = /* @__PURE__ */ new WeakMap();
                var s2;
                const a2 = /* @__PURE__ */ ((e5, t5) => (n3) => {
                  const i4 = t5.get(n3);
                  let r3 = void 0 === i4 ? n3.size : i4 < z ? i4 + 1 : 0;
                  if (!n3.has(r3)) return e5(n3, r3);
                  if (n3.size < 536870912) {
                    for (; n3.has(r3); ) r3 = Math.floor(Math.random() * z);
                    return e5(n3, r3);
                  }
                  if (n3.size > H) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
                  for (; n3.has(r3); ) r3 = Math.floor(Math.random() * H);
                  return e5(n3, r3);
                })((s2 = o2, (e5, t5) => (s2.set(e5, t5), t5)), o2);
                return r2.addEventListener("message", ({ data: e5 }) => {
                  if (void 0 !== (r3 = e5).method && "call" === r3.method) {
                    const { params: { timerId: r4, timerType: o3 } } = e5;
                    if ("interval" === o3) {
                      const e6 = t4.get(r4);
                      if ("number" == typeof e6) {
                        const t5 = i3.get(e6);
                        if (void 0 === t5 || t5.timerId !== r4 || t5.timerType !== o3) throw new Error("The timer is in an undefined state.");
                      } else {
                        if (void 0 === e6) throw new Error("The timer is in an undefined state.");
                        e6();
                      }
                    } else if ("timeout" === o3) {
                      const e6 = n2.get(r4);
                      if ("number" == typeof e6) {
                        const t5 = i3.get(e6);
                        if (void 0 === t5 || t5.timerId !== r4 || t5.timerType !== o3) throw new Error("The timer is in an undefined state.");
                      } else {
                        if (void 0 === e6) throw new Error("The timer is in an undefined state.");
                        e6(), n2.delete(r4);
                      }
                    }
                  } else if (((e6) => null === e6.error && "number" == typeof e6.id)(e5)) {
                    const { id: r4 } = e5, o3 = i3.get(r4);
                    if (void 0 === o3) throw new Error("The timer is in an undefined state.");
                    const { timerId: s3, timerType: a3 } = o3;
                    i3.delete(r4), "interval" === a3 ? t4.delete(s3) : n2.delete(s3);
                  } else {
                    const { error: { message: t5 } } = e5;
                  }
                  var r3;
                }), { clearInterval: (e5) => {
                  const n3 = a2(i3);
                  i3.set(n3, { timerId: e5, timerType: "interval" }), t4.set(e5, n3), r2.postMessage({ id: n3, method: "clear", params: { timerId: e5, timerType: "interval" } });
                }, clearTimeout: (e5) => {
                  const t5 = a2(i3);
                  i3.set(t5, { timerId: e5, timerType: "timeout" }), n2.set(e5, t5), r2.postMessage({ id: t5, method: "clear", params: { timerId: e5, timerType: "timeout" } });
                }, setInterval: (e5, n3) => {
                  const i4 = a2(t4);
                  return t4.set(i4, () => {
                    e5(), "function" == typeof t4.get(i4) && r2.postMessage({ id: null, method: "set", params: { delay: n3, now: performance.now(), timerId: i4, timerType: "interval" } });
                  }), r2.postMessage({ id: null, method: "set", params: { delay: n3, now: performance.now(), timerId: i4, timerType: "interval" } }), i4;
                }, setTimeout: (e5, t5) => {
                  const i4 = a2(n2);
                  return n2.set(i4, e5), r2.postMessage({ id: null, method: "set", params: { delay: t5, now: performance.now(), timerId: i4, timerType: "timeout" } }), i4;
                } };
              })(t3), B.setTimeout(() => URL.revokeObjectURL(t3), 0), B;
            }, W = (e3) => J().clearInterval(e3), Z = (e3) => J().clearTimeout(e3), G = (e3, t3) => J().setInterval(e3, t3), Y = (e3, t3) => J().setTimeout(e3, t3);
            var $;
            function K(e3) {
              if (e3 instanceof Error) return e3;
              let t3 = "[Unable to stringify the thrown value]";
              try {
                t3 = JSON.stringify(e3);
              } catch (e4) {
              }
              return new Error("This value was thrown as is, not through an Error: " + t3);
            }
            return (function(e3) {
              let t3 = null;
              e3.setErrorHandler = function(e4) {
                t3 ? d.error("Error handler already set") : (d.info("Setting custom error handler: " + e4), t3 = e4);
              }, e3.check = function(e4, n2, i3) {
                return e4 || (t3 ? t3(n2, i3) : d.info(`Assert failed in ${n2}: ${i3}`)), e4;
              };
            })($ || ($ = {})), t2;
          })(), e.exports = i();
        }, function(e, t, n) {
          "use strict";
          (function(e2, i, r) {
            var o = n(11);
            const { toString: s } = Object.prototype, { getPrototypeOf: a } = Object, { iterator: c, toStringTag: u } = Symbol, l = (d = /* @__PURE__ */ Object.create(null), (e3) => {
              const t2 = s.call(e3);
              return d[t2] || (d[t2] = t2.slice(8, -1).toLowerCase());
            });
            var d;
            const h = (e3) => (e3 = e3.toLowerCase(), (t2) => l(t2) === e3), f = (e3) => (t2) => typeof t2 === e3, { isArray: v } = Array, p = f("undefined");
            function g(e3) {
              return null !== e3 && !p(e3) && null !== e3.constructor && !p(e3.constructor) && E(e3.constructor.isBuffer) && e3.constructor.isBuffer(e3);
            }
            const m = h("ArrayBuffer");
            const y = f("string"), E = f("function"), b = f("number"), w = (e3) => null !== e3 && "object" == typeof e3, S = (e3) => {
              if ("object" !== l(e3)) return false;
              const t2 = a(e3);
              return !(null !== t2 && t2 !== Object.prototype && null !== Object.getPrototypeOf(t2) || u in e3 || c in e3);
            }, k = h("Date"), I = h("File"), A = h("Blob"), C = h("FileList"), T = h("URLSearchParams"), [O, U, R, L] = ["ReadableStream", "Request", "Response", "Headers"].map(h);
            function x(e3, t2, { allOwnKeys: n2 = false } = {}) {
              if (null == e3) return;
              let i2, r2;
              if ("object" != typeof e3 && (e3 = [e3]), v(e3)) for (i2 = 0, r2 = e3.length; i2 < r2; i2++) t2.call(null, e3[i2], i2, e3);
              else {
                if (g(e3)) return;
                const r3 = n2 ? Object.getOwnPropertyNames(e3) : Object.keys(e3), o2 = r3.length;
                let s2;
                for (i2 = 0; i2 < o2; i2++) s2 = r3[i2], t2.call(null, e3[s2], s2, e3);
              }
            }
            function D(e3, t2) {
              if (g(e3)) return null;
              t2 = t2.toLowerCase();
              const n2 = Object.keys(e3);
              let i2, r2 = n2.length;
              for (; r2-- > 0; ) if (i2 = n2[r2], t2 === i2.toLowerCase()) return i2;
              return null;
            }
            const N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : e2, P = (e3) => !p(e3) && e3 !== N;
            const _ = (M = "undefined" != typeof Uint8Array && a(Uint8Array), (e3) => M && e3 instanceof M);
            var M;
            const V = h("HTMLFormElement"), j = (({ hasOwnProperty: e3 }) => (t2, n2) => e3.call(t2, n2))(Object.prototype), q = h("RegExp"), F = (e3, t2) => {
              const n2 = Object.getOwnPropertyDescriptors(e3), i2 = {};
              x(n2, (n3, r2) => {
                let o2;
                false !== (o2 = t2(n3, r2, e3)) && (i2[r2] = o2 || n3);
              }), Object.defineProperties(e3, i2);
            };
            const B = h("AsyncFunction"), H = (z = "function" == typeof i, J = E(N.postMessage), z ? i : J ? (W = "axios@" + Math.random(), Z = [], N.addEventListener("message", ({ source: e3, data: t2 }) => {
              e3 === N && t2 === W && Z.length && Z.shift()();
            }, false), (e3) => {
              Z.push(e3), N.postMessage(W, "*");
            }) : (e3) => setTimeout(e3));
            var z, J, W, Z;
            const G = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(N) : void 0 !== r && r.nextTick || H;
            t.a = { isArray: v, isArrayBuffer: m, isBuffer: g, isFormData: (e3) => {
              let t2;
              return e3 && ("function" == typeof FormData && e3 instanceof FormData || E(e3.append) && ("formdata" === (t2 = l(e3)) || "object" === t2 && E(e3.toString) && "[object FormData]" === e3.toString()));
            }, isArrayBufferView: function(e3) {
              let t2;
              return t2 = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e3) : e3 && e3.buffer && m(e3.buffer), t2;
            }, isString: y, isNumber: b, isBoolean: (e3) => true === e3 || false === e3, isObject: w, isPlainObject: S, isEmptyObject: (e3) => {
              if (!w(e3) || g(e3)) return false;
              try {
                return 0 === Object.keys(e3).length && Object.getPrototypeOf(e3) === Object.prototype;
              } catch (e4) {
                return false;
              }
            }, isReadableStream: O, isRequest: U, isResponse: R, isHeaders: L, isUndefined: p, isDate: k, isFile: I, isBlob: A, isRegExp: q, isFunction: E, isStream: (e3) => w(e3) && E(e3.pipe), isURLSearchParams: T, isTypedArray: _, isFileList: C, forEach: x, merge: function e3() {
              const { caseless: t2, skipUndefined: n2 } = P(this) && this || {}, i2 = {}, r2 = (r3, o2) => {
                const s2 = t2 && D(i2, o2) || o2;
                S(i2[s2]) && S(r3) ? i2[s2] = e3(i2[s2], r3) : S(r3) ? i2[s2] = e3({}, r3) : v(r3) ? i2[s2] = r3.slice() : n2 && p(r3) || (i2[s2] = r3);
              };
              for (let e4 = 0, t3 = arguments.length; e4 < t3; e4++) arguments[e4] && x(arguments[e4], r2);
              return i2;
            }, extend: (e3, t2, n2, { allOwnKeys: i2 } = {}) => (x(t2, (t3, i3) => {
              n2 && E(t3) ? e3[i3] = Object(o.a)(t3, n2) : e3[i3] = t3;
            }, { allOwnKeys: i2 }), e3), trim: (e3) => e3.trim ? e3.trim() : e3.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (e3) => (65279 === e3.charCodeAt(0) && (e3 = e3.slice(1)), e3), inherits: (e3, t2, n2, i2) => {
              e3.prototype = Object.create(t2.prototype, i2), e3.prototype.constructor = e3, Object.defineProperty(e3, "super", { value: t2.prototype }), n2 && Object.assign(e3.prototype, n2);
            }, toFlatObject: (e3, t2, n2, i2) => {
              let r2, o2, s2;
              const c2 = {};
              if (t2 = t2 || {}, null == e3) return t2;
              do {
                for (r2 = Object.getOwnPropertyNames(e3), o2 = r2.length; o2-- > 0; ) s2 = r2[o2], i2 && !i2(s2, e3, t2) || c2[s2] || (t2[s2] = e3[s2], c2[s2] = true);
                e3 = false !== n2 && a(e3);
              } while (e3 && (!n2 || n2(e3, t2)) && e3 !== Object.prototype);
              return t2;
            }, kindOf: l, kindOfTest: h, endsWith: (e3, t2, n2) => {
              e3 = String(e3), (void 0 === n2 || n2 > e3.length) && (n2 = e3.length), n2 -= t2.length;
              const i2 = e3.indexOf(t2, n2);
              return -1 !== i2 && i2 === n2;
            }, toArray: (e3) => {
              if (!e3) return null;
              if (v(e3)) return e3;
              let t2 = e3.length;
              if (!b(t2)) return null;
              const n2 = new Array(t2);
              for (; t2-- > 0; ) n2[t2] = e3[t2];
              return n2;
            }, forEachEntry: (e3, t2) => {
              const n2 = (e3 && e3[c]).call(e3);
              let i2;
              for (; (i2 = n2.next()) && !i2.done; ) {
                const n3 = i2.value;
                t2.call(e3, n3[0], n3[1]);
              }
            }, matchAll: (e3, t2) => {
              let n2;
              const i2 = [];
              for (; null !== (n2 = e3.exec(t2)); ) i2.push(n2);
              return i2;
            }, isHTMLForm: V, hasOwnProperty: j, hasOwnProp: j, reduceDescriptors: F, freezeMethods: (e3) => {
              F(e3, (t2, n2) => {
                if (E(e3) && -1 !== ["arguments", "caller", "callee"].indexOf(n2)) return false;
                const i2 = e3[n2];
                E(i2) && (t2.enumerable = false, "writable" in t2 ? t2.writable = false : t2.set || (t2.set = () => {
                  throw Error("Can not rewrite read-only method '" + n2 + "'");
                }));
              });
            }, toObjectSet: (e3, t2) => {
              const n2 = {}, i2 = (e4) => {
                e4.forEach((e5) => {
                  n2[e5] = true;
                });
              };
              return v(e3) ? i2(e3) : i2(String(e3).split(t2)), n2;
            }, toCamelCase: (e3) => e3.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e4, t2, n2) {
              return t2.toUpperCase() + n2;
            })), noop: () => {
            }, toFiniteNumber: (e3, t2) => null != e3 && Number.isFinite(e3 = +e3) ? e3 : t2, findKey: D, global: N, isContextDefined: P, isSpecCompliantForm: function(e3) {
              return !!(e3 && E(e3.append) && "FormData" === e3[u] && e3[c]);
            }, toJSONObject: (e3) => {
              const t2 = new Array(10), n2 = (e4, i2) => {
                if (w(e4)) {
                  if (t2.indexOf(e4) >= 0) return;
                  if (g(e4)) return e4;
                  if (!("toJSON" in e4)) {
                    t2[i2] = e4;
                    const r2 = v(e4) ? [] : {};
                    return x(e4, (e5, t3) => {
                      const o2 = n2(e5, i2 + 1);
                      !p(o2) && (r2[t3] = o2);
                    }), t2[i2] = void 0, r2;
                  }
                }
                return e4;
              };
              return n2(e3, 0);
            }, isAsyncFn: B, isThenable: (e3) => e3 && (w(e3) || E(e3)) && E(e3.then) && E(e3.catch), setImmediate: H, asap: G, isIterable: (e3) => null != e3 && E(e3[c]) };
          }).call(this, n(9), n(38).setImmediate, n(17));
        }, function(e, t, n) {
          "use strict";
          var i = n(1);
          function r(e2, t2, n2, i2, r2) {
            Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e2, this.name = "AxiosError", t2 && (this.code = t2), n2 && (this.config = n2), i2 && (this.request = i2), r2 && (this.response = r2, this.status = r2.status ? r2.status : null);
          }
          i.a.inherits(r, Error, { toJSON: function() {
            return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: i.a.toJSONObject(this.config), code: this.code, status: this.status };
          } });
          const o = r.prototype, s = {};
          ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e2) => {
            s[e2] = { value: e2 };
          }), Object.defineProperties(r, s), Object.defineProperty(o, "isAxiosError", { value: true }), r.from = (e2, t2, n2, s2, a, c) => {
            const u = Object.create(o);
            i.a.toFlatObject(e2, u, (function(e3) {
              return e3 !== Error.prototype;
            }), (e3) => "isAxiosError" !== e3);
            const l = e2 && e2.message ? e2.message : "Error", d = null == t2 && e2 ? e2.code : t2;
            return r.call(u, l, d, n2, s2, a), e2 && null == u.cause && Object.defineProperty(u, "cause", { value: e2, configurable: true }), u.name = e2 && e2.name || "Error", c && Object.assign(u, c), u;
          }, t.a = r;
        }, function(e, t, n) {
          "use strict";
          function i(e2) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            })(e2);
          }
          n.d(t, "a", (function() {
            return i;
          }));
        }, function(e, t, n) {
          "use strict";
          function i(e2, t2) {
            if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
          }
          n.d(t, "a", (function() {
            return i;
          }));
        }, function(e, t, n) {
          "use strict";
          n.d(t, "a", (function() {
            return o;
          }));
          var i = n(13);
          function r(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var r2 = t2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, Object(i.a)(r2.key), r2);
            }
          }
          function o(e2, t2, n2) {
            return t2 && r(e2.prototype, t2), n2 && r(e2, n2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
          }
        }, function(e, t, n) {
          "use strict";
          (function(e2) {
            var i = n(1), r = n(2), o = n(12);
            function s(e3) {
              return i.a.isPlainObject(e3) || i.a.isArray(e3);
            }
            function a(e3) {
              return i.a.endsWith(e3, "[]") ? e3.slice(0, -2) : e3;
            }
            function c(e3, t2, n2) {
              return e3 ? e3.concat(t2).map((function(e4, t3) {
                return e4 = a(e4), !n2 && t3 ? "[" + e4 + "]" : e4;
              })).join(n2 ? "." : "") : t2;
            }
            const u = i.a.toFlatObject(i.a, {}, null, (function(e3) {
              return /^is[A-Z]/.test(e3);
            }));
            t.a = function(t2, n2, l) {
              if (!i.a.isObject(t2)) throw new TypeError("target must be an object");
              n2 = n2 || new (o.a || FormData)();
              const d = (l = i.a.toFlatObject(l, { metaTokens: true, dots: false, indexes: false }, false, (function(e3, t3) {
                return !i.a.isUndefined(t3[e3]);
              }))).metaTokens, h = l.visitor || m, f = l.dots, v = l.indexes, p = (l.Blob || "undefined" != typeof Blob && Blob) && i.a.isSpecCompliantForm(n2);
              if (!i.a.isFunction(h)) throw new TypeError("visitor must be a function");
              function g(t3) {
                if (null === t3) return "";
                if (i.a.isDate(t3)) return t3.toISOString();
                if (i.a.isBoolean(t3)) return t3.toString();
                if (!p && i.a.isBlob(t3)) throw new r.a("Blob is not supported. Use a Buffer instead.");
                return i.a.isArrayBuffer(t3) || i.a.isTypedArray(t3) ? p && "function" == typeof Blob ? new Blob([t3]) : e2.from(t3) : t3;
              }
              function m(e3, t3, r2) {
                let o2 = e3;
                if (e3 && !r2 && "object" == typeof e3) {
                  if (i.a.endsWith(t3, "{}")) t3 = d ? t3 : t3.slice(0, -2), e3 = JSON.stringify(e3);
                  else if (i.a.isArray(e3) && (function(e4) {
                    return i.a.isArray(e4) && !e4.some(s);
                  })(e3) || (i.a.isFileList(e3) || i.a.endsWith(t3, "[]")) && (o2 = i.a.toArray(e3))) return t3 = a(t3), o2.forEach((function(e4, r3) {
                    !i.a.isUndefined(e4) && null !== e4 && n2.append(true === v ? c([t3], r3, f) : null === v ? t3 : t3 + "[]", g(e4));
                  })), false;
                }
                return !!s(e3) || (n2.append(c(r2, t3, f), g(e3)), false);
              }
              const y = [], E = Object.assign(u, { defaultVisitor: m, convertValue: g, isVisitable: s });
              if (!i.a.isObject(t2)) throw new TypeError("data must be an object");
              return (function e3(t3, r2) {
                if (!i.a.isUndefined(t3)) {
                  if (-1 !== y.indexOf(t3)) throw Error("Circular reference detected in " + r2.join("."));
                  y.push(t3), i.a.forEach(t3, (function(t4, o2) {
                    true === (!(i.a.isUndefined(t4) || null === t4) && h.call(n2, t4, i.a.isString(o2) ? o2.trim() : o2, r2, E)) && e3(t4, r2 ? r2.concat(o2) : [o2]);
                  })), y.pop();
                }
              })(t2), n2;
            };
          }).call(this, n(40).Buffer);
        }, function(e, t, n) {
          "use strict";
          function i(e2) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
              return typeof e3;
            } : function(e3) {
              return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
            })(e2);
          }
          n.d(t, "a", (function() {
            return a;
          })), n.d(t, "b", (function() {
            return c;
          })), n.d(t, "c", (function() {
            return u;
          }));
          var r = [], o = r.forEach, s = r.slice;
          function a(e2) {
            return o.call(s.call(arguments, 1), (function(t2) {
              if (t2) for (var n2 in t2) void 0 === e2[n2] && (e2[n2] = t2[n2]);
            })), e2;
          }
          function c() {
            return "function" == typeof XMLHttpRequest || "object" === ("undefined" == typeof XMLHttpRequest ? "undefined" : i(XMLHttpRequest));
          }
          function u(e2) {
            return (function(e3) {
              return !!e3 && "function" == typeof e3.then;
            })(e2) ? e2 : Promise.resolve(e2);
          }
        }, function(e, t, n) {
          "use strict";
          var i, r, o, s, a, c, u, l = n(19), d = n(36), h = Function.prototype.apply, f = Function.prototype.call, v = Object.create, p = Object.defineProperty, g = Object.defineProperties, m = Object.prototype.hasOwnProperty, y = { configurable: true, enumerable: false, writable: true };
          r = function(e2, t2) {
            var n2, r2;
            return d(t2), r2 = this, i.call(this, e2, n2 = function() {
              o.call(r2, e2, n2), h.call(t2, this, arguments);
            }), n2.__eeOnceListener__ = t2, this;
          }, a = { on: i = function(e2, t2) {
            var n2;
            return d(t2), m.call(this, "__ee__") ? n2 = this.__ee__ : (n2 = y.value = v(null), p(this, "__ee__", y), y.value = null), n2[e2] ? "object" == typeof n2[e2] ? n2[e2].push(t2) : n2[e2] = [n2[e2], t2] : n2[e2] = t2, this;
          }, once: r, off: o = function(e2, t2) {
            var n2, i2, r2, o2;
            if (d(t2), !m.call(this, "__ee__")) return this;
            if (!(n2 = this.__ee__)[e2]) return this;
            if ("object" == typeof (i2 = n2[e2])) for (o2 = 0; r2 = i2[o2]; ++o2) r2 !== t2 && r2.__eeOnceListener__ !== t2 || (2 === i2.length ? n2[e2] = i2[o2 ? 0 : 1] : i2.splice(o2, 1));
            else i2 !== t2 && i2.__eeOnceListener__ !== t2 || delete n2[e2];
            return this;
          }, emit: s = function(e2) {
            var t2, n2, i2, r2, o2;
            if (m.call(this, "__ee__") && (r2 = this.__ee__[e2])) if ("object" == typeof r2) {
              for (n2 = arguments.length, o2 = new Array(n2 - 1), t2 = 1; t2 < n2; ++t2) o2[t2 - 1] = arguments[t2];
              for (r2 = r2.slice(), t2 = 0; i2 = r2[t2]; ++t2) h.call(i2, this, o2);
            } else switch (arguments.length) {
              case 1:
                f.call(r2, this);
                break;
              case 2:
                f.call(r2, this, arguments[1]);
                break;
              case 3:
                f.call(r2, this, arguments[1], arguments[2]);
                break;
              default:
                for (n2 = arguments.length, o2 = new Array(n2 - 1), t2 = 1; t2 < n2; ++t2) o2[t2 - 1] = arguments[t2];
                h.call(r2, this, o2);
            }
          } }, c = { on: l(i), once: l(r), off: l(o), emit: l(s) }, u = g({}, c), e.exports = t = function(e2) {
            return null == e2 ? v(u) : g(Object(e2), c);
          }, t.methods = a;
        }, function(e, t) {
          var n;
          n = /* @__PURE__ */ (function() {
            return this;
          })();
          try {
            n = n || new Function("return this")();
          } catch (e2) {
            "object" == typeof window && (n = window);
          }
          e.exports = n;
        }, function(e, t, n) {
          "use strict";
          var i = n(30)();
          e.exports = function(e2) {
            return e2 !== i && null !== e2;
          };
        }, function(e, t, n) {
          "use strict";
          function i(e2, t2) {
            return function() {
              return e2.apply(t2, arguments);
            };
          }
          n.d(t, "a", (function() {
            return i;
          }));
        }, function(e, t, n) {
          "use strict";
          t.a = null;
        }, function(e, t, n) {
          "use strict";
          n.d(t, "a", (function() {
            return r;
          }));
          var i = n(3);
          function r(e2) {
            var t2 = (function(e3, t3) {
              if ("object" != Object(i.a)(e3) || !e3) return e3;
              var n2 = e3[Symbol.toPrimitive];
              if (void 0 !== n2) {
                var r2 = n2.call(e3, t3 || "default");
                if ("object" != Object(i.a)(r2)) return r2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t3 ? String : Number)(e3);
            })(e2, "string");
            return "symbol" == Object(i.a)(t2) ? t2 : t2 + "";
          }
        }, function(e, t, n) {
          (function(i) {
            var r;
            if ("function" == typeof fetch && (r = void 0 !== i && i.fetch ? i.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch), "undefined" == typeof window || void 0 === window.document) {
              var o = r || n(45);
              o.default && (o = o.default), t.default = o, e.exports = t.default;
            }
          }).call(this, n(9));
        }, function(e, t, n) {
          "use strict";
          var i = n(47), r = Object.prototype.hasOwnProperty;
          e.exports = function(e2) {
            var t2, n2 = arguments[1];
            if (i(e2), void 0 === n2) r.call(e2, "__ee__") && delete e2.__ee__;
            else {
              if (!(t2 = r.call(e2, "__ee__") && e2.__ee__)) return;
              t2[n2] && delete t2[n2];
            }
          };
        }, function(e, t, n) {
          "use strict";
          e.exports = function(e2) {
            return null != e2;
          };
        }, function(e, t) {
          var n, i, r = e.exports = {};
          function o() {
            throw new Error("setTimeout has not been defined");
          }
          function s() {
            throw new Error("clearTimeout has not been defined");
          }
          function a(e2) {
            if (n === setTimeout) return setTimeout(e2, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e2, 0);
            try {
              return n(e2, 0);
            } catch (t2) {
              try {
                return n.call(null, e2, 0);
              } catch (t3) {
                return n.call(this, e2, 0);
              }
            }
          }
          !(function() {
            try {
              n = "function" == typeof setTimeout ? setTimeout : o;
            } catch (e2) {
              n = o;
            }
            try {
              i = "function" == typeof clearTimeout ? clearTimeout : s;
            } catch (e2) {
              i = s;
            }
          })();
          var c, u = [], l = false, d = -1;
          function h() {
            l && c && (l = false, c.length ? u = c.concat(u) : d = -1, u.length && f());
          }
          function f() {
            if (!l) {
              var e2 = a(h);
              l = true;
              for (var t2 = u.length; t2; ) {
                for (c = u, u = []; ++d < t2; ) c && c[d].run();
                d = -1, t2 = u.length;
              }
              c = null, l = false, (function(e3) {
                if (i === clearTimeout) return clearTimeout(e3);
                if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e3);
                try {
                  i(e3);
                } catch (t3) {
                  try {
                    return i.call(null, e3);
                  } catch (t4) {
                    return i.call(this, e3);
                  }
                }
              })(e2);
            }
          }
          function v(e2, t2) {
            this.fun = e2, this.array = t2;
          }
          function p() {
          }
          r.nextTick = function(e2) {
            var t2 = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
            u.push(new v(e2, t2)), 1 !== u.length || l || a(f);
          }, v.prototype.run = function() {
            this.fun.apply(null, this.array);
          }, r.title = "browser", r.browser = true, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e2) {
            return [];
          }, r.binding = function(e2) {
            throw new Error("process.binding is not supported");
          }, r.cwd = function() {
            return "/";
          }, r.chdir = function(e2) {
            throw new Error("process.chdir is not supported");
          }, r.umask = function() {
            return 0;
          };
        }, function(e, t, n) {
          "use strict";
          (function(e2) {
            var i, r, o, s = n(7), a = n(14), c = n.n(a);
            function u(e3) {
              return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                return typeof e4;
              } : function(e4) {
                return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
              })(e3);
            }
            "function" == typeof fetch && (i = void 0 !== e2 && e2.fetch ? e2.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch), Object(s.b)() && (void 0 !== e2 && e2.XMLHttpRequest ? r = e2.XMLHttpRequest : "undefined" != typeof window && window.XMLHttpRequest && (r = window.XMLHttpRequest)), "function" == typeof ActiveXObject && (void 0 !== e2 && e2.ActiveXObject ? o = e2.ActiveXObject : "undefined" != typeof window && window.ActiveXObject && (o = window.ActiveXObject)), i || !a || r || o || (i = c.a || a), "function" != typeof i && (i = void 0);
            var l = function(e3, t2) {
              if (t2 && "object" === u(t2)) {
                var n2 = "";
                for (var i2 in t2) n2 += "&" + encodeURIComponent(i2) + "=" + encodeURIComponent(t2[i2]);
                if (!n2) return e3;
                e3 = e3 + (-1 !== e3.indexOf("?") ? "&" : "?") + n2.slice(1);
              }
              return e3;
            }, d = function(e3, t2, n2) {
              i(e3, t2).then((function(e4) {
                if (!e4.ok) return n2(e4.statusText || "Error", { status: e4.status });
                e4.text().then((function(t3) {
                  n2(null, { status: e4.status, data: t3 });
                })).catch(n2);
              })).catch(n2);
            }, h = false;
            t.a = function(e3, t2, n2, a2) {
              return "function" == typeof n2 && (a2 = n2, n2 = void 0), a2 = a2 || function() {
              }, i ? (function(e4, t3, n3, i2) {
                e4.queryStringParams && (t3 = l(t3, e4.queryStringParams));
                var r2 = Object(s.a)({}, "function" == typeof e4.customHeaders ? e4.customHeaders() : e4.customHeaders);
                n3 && (r2["Content-Type"] = "application/json");
                var o2 = "function" == typeof e4.requestOptions ? e4.requestOptions(n3) : e4.requestOptions, a3 = Object(s.a)({ method: n3 ? "POST" : "GET", body: n3 ? e4.stringify(n3) : void 0, headers: r2 }, h ? {} : o2);
                try {
                  d(t3, a3, i2);
                } catch (e5) {
                  if (!o2 || 0 === Object.keys(o2).length || !e5.message || e5.message.indexOf("not implemented") < 0) return i2(e5);
                  try {
                    Object.keys(o2).forEach((function(e6) {
                      delete a3[e6];
                    })), d(t3, a3, i2), h = true;
                  } catch (e6) {
                    i2(e6);
                  }
                }
              })(e3, t2, n2, a2) : Object(s.b)() || "function" == typeof ActiveXObject ? (function(e4, t3, n3, i2) {
                n3 && "object" === u(n3) && (n3 = l("", n3).slice(1)), e4.queryStringParams && (t3 = l(t3, e4.queryStringParams));
                try {
                  var s2;
                  (s2 = r ? new r() : new o("MSXML2.XMLHTTP.3.0")).open(n3 ? "POST" : "GET", t3, 1), e4.crossDomain || s2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s2.withCredentials = !!e4.withCredentials, n3 && s2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s2.overrideMimeType && s2.overrideMimeType("application/json");
                  var a3 = e4.customHeaders;
                  if (a3 = "function" == typeof a3 ? a3() : a3) for (var c2 in a3) s2.setRequestHeader(c2, a3[c2]);
                  s2.onreadystatechange = function() {
                    s2.readyState > 3 && i2(s2.status >= 400 ? s2.statusText : null, { status: s2.status, data: s2.responseText });
                  }, s2.send(n3);
                } catch (e5) {
                  console && console.log(e5);
                }
              })(e3, t2, n2, a2) : void a2(new Error("No fetch and no xhr implementation found!"));
            };
          }).call(this, n(9));
        }, function(e, t, n) {
          "use strict";
          var i = n(16), r = n(20), o = n(24), s = n(32), a = n(33);
          (e.exports = function(e2, t2) {
            var n2, r2, c, u, l;
            return arguments.length < 2 || "string" != typeof e2 ? (u = t2, t2 = e2, e2 = null) : u = arguments[2], i(e2) ? (n2 = a.call(e2, "c"), r2 = a.call(e2, "e"), c = a.call(e2, "w")) : (n2 = c = true, r2 = false), l = { value: t2, configurable: n2, enumerable: r2, writable: c }, u ? o(s(u), l) : l;
          }).gs = function(e2, t2, n2) {
            var c, u, l, d;
            return "string" != typeof e2 ? (l = n2, n2 = t2, t2 = e2, e2 = null) : l = arguments[3], i(t2) ? r(t2) ? i(n2) ? r(n2) || (l = n2, n2 = void 0) : n2 = void 0 : (l = t2, t2 = n2 = void 0) : t2 = void 0, i(e2) ? (c = a.call(e2, "c"), u = a.call(e2, "e")) : (c = true, u = false), d = { get: t2, set: n2, configurable: c, enumerable: u }, l ? o(s(l), d) : d;
          };
        }, function(e, t, n) {
          "use strict";
          var i = n(21), r = /^\s*class[\s{/}]/, o = Function.prototype.toString;
          e.exports = function(e2) {
            return !!i(e2) && !r.test(o.call(e2));
          };
        }, function(e, t, n) {
          "use strict";
          var i = n(22);
          e.exports = function(e2) {
            if ("function" != typeof e2) return false;
            if (!hasOwnProperty.call(e2, "length")) return false;
            try {
              if ("number" != typeof e2.length) return false;
              if ("function" != typeof e2.call) return false;
              if ("function" != typeof e2.apply) return false;
            } catch (e3) {
              return false;
            }
            return !i(e2);
          };
        }, function(e, t, n) {
          "use strict";
          var i = n(23);
          e.exports = function(e2) {
            if (!i(e2)) return false;
            try {
              return !!e2.constructor && e2.constructor.prototype === e2;
            } catch (e3) {
              return false;
            }
          };
        }, function(e, t, n) {
          "use strict";
          var i = n(16), r = { object: true, function: true, undefined: true };
          e.exports = function(e2) {
            return !!i(e2) && hasOwnProperty.call(r, typeof e2);
          };
        }, function(e, t, n) {
          "use strict";
          e.exports = n(25)() ? Object.assign : n(26);
        }, function(e, t, n) {
          "use strict";
          e.exports = function() {
            var e2, t2 = Object.assign;
            return "function" == typeof t2 && (t2(e2 = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), e2.foo + e2.bar + e2.trzy === "razdwatrzy");
          };
        }, function(e, t, n) {
          "use strict";
          var i = n(27), r = n(31), o = Math.max;
          e.exports = function(e2, t2) {
            var n2, s, a, c = o(arguments.length, 2);
            for (e2 = Object(r(e2)), a = function(i2) {
              try {
                e2[i2] = t2[i2];
              } catch (e3) {
                n2 || (n2 = e3);
              }
            }, s = 1; s < c; ++s) i(t2 = arguments[s]).forEach(a);
            if (void 0 !== n2) throw n2;
            return e2;
          };
        }, function(e, t, n) {
          "use strict";
          e.exports = n(28)() ? Object.keys : n(29);
        }, function(e, t, n) {
          "use strict";
          e.exports = function() {
            try {
              return Object.keys("primitive"), true;
            } catch (e2) {
              return false;
            }
          };
        }, function(e, t, n) {
          "use strict";
          var i = n(10), r = Object.keys;
          e.exports = function(e2) {
            return r(i(e2) ? Object(e2) : e2);
          };
        }, function(e, t, n) {
          "use strict";
          e.exports = function() {
          };
        }, function(e, t, n) {
          "use strict";
          var i = n(10);
          e.exports = function(e2) {
            if (!i(e2)) throw new TypeError("Cannot use null or undefined");
            return e2;
          };
        }, function(e, t, n) {
          "use strict";
          var i = n(10), r = Array.prototype.forEach, o = Object.create, s = function(e2, t2) {
            var n2;
            for (n2 in e2) t2[n2] = e2[n2];
          };
          e.exports = function(e2) {
            var t2 = o(null);
            return r.call(arguments, (function(e3) {
              i(e3) && s(Object(e3), t2);
            })), t2;
          };
        }, function(e, t, n) {
          "use strict";
          e.exports = n(34)() ? String.prototype.contains : n(35);
        }, function(e, t, n) {
          "use strict";
          var i = "razdwatrzy";
          e.exports = function() {
            return "function" == typeof i.contains && (true === i.contains("dwa") && false === i.contains("foo"));
          };
        }, function(e, t, n) {
          "use strict";
          var i = String.prototype.indexOf;
          e.exports = function(e2) {
            return i.call(this, e2, arguments[1]) > -1;
          };
        }, function(e, t, n) {
          "use strict";
          e.exports = function(e2) {
            if ("function" != typeof e2) throw new TypeError(e2 + " is not a function");
            return e2;
          };
        }, function(e, t, n) {
          "use strict";
          function i(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
            }
          }
          function r(e2, t2, n2) {
            return t2 && i(e2.prototype, t2), n2 && i(e2, n2), e2;
          }
          function o(e2, t2) {
            e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2.__proto__ = t2;
          }
          function s(e2) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
              return e3.__proto__ || Object.getPrototypeOf(e3);
            })(e2);
          }
          function a(e2, t2) {
            return (a = Object.setPrototypeOf || function(e3, t3) {
              return e3.__proto__ = t3, e3;
            })(e2, t2);
          }
          function c() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {
              }))), true;
            } catch (e2) {
              return false;
            }
          }
          function u(e2, t2, n2) {
            return (u = c() ? Reflect.construct : function(e3, t3, n3) {
              var i2 = [null];
              i2.push.apply(i2, t3);
              var r2 = new (Function.bind.apply(e3, i2))();
              return n3 && a(r2, n3.prototype), r2;
            }).apply(null, arguments);
          }
          function l(e2) {
            var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
            return (l = function(e3) {
              if (null === e3 || (n2 = e3, -1 === Function.toString.call(n2).indexOf("[native code]"))) return e3;
              var n2;
              if ("function" != typeof e3) throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== t2) {
                if (t2.has(e3)) return t2.get(e3);
                t2.set(e3, i2);
              }
              function i2() {
                return u(e3, arguments, s(this).constructor);
              }
              return i2.prototype = Object.create(e3.prototype, { constructor: { value: i2, enumerable: false, writable: true, configurable: true } }), a(i2, e3);
            })(e2);
          }
          function d(e2, t2) {
            (null == t2 || t2 > e2.length) && (t2 = e2.length);
            for (var n2 = 0, i2 = new Array(t2); n2 < t2; n2++) i2[n2] = e2[n2];
            return i2;
          }
          function h(e2) {
            var t2 = 0;
            if ("undefined" == typeof Symbol || null == e2[Symbol.iterator]) {
              if (Array.isArray(e2) || (e2 = (function(e3, t3) {
                if (e3) {
                  if ("string" == typeof e3) return d(e3, t3);
                  var n2 = Object.prototype.toString.call(e3).slice(8, -1);
                  return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(n2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? d(e3, t3) : void 0;
                }
              })(e2))) return function() {
                return t2 >= e2.length ? { done: true } : { done: false, value: e2[t2++] };
              };
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            return (t2 = e2[Symbol.iterator]()).next.bind(t2);
          }
          Object.defineProperty(t, "__esModule", { value: true });
          var f = (function(e2) {
            function t2() {
              return e2.apply(this, arguments) || this;
            }
            return o(t2, e2), t2;
          })(l(Error)), v = (function(e2) {
            function t2(t3) {
              return e2.call(this, "Invalid DateTime: " + t3.toMessage()) || this;
            }
            return o(t2, e2), t2;
          })(f), p = (function(e2) {
            function t2(t3) {
              return e2.call(this, "Invalid Interval: " + t3.toMessage()) || this;
            }
            return o(t2, e2), t2;
          })(f), g = (function(e2) {
            function t2(t3) {
              return e2.call(this, "Invalid Duration: " + t3.toMessage()) || this;
            }
            return o(t2, e2), t2;
          })(f), m = (function(e2) {
            function t2() {
              return e2.apply(this, arguments) || this;
            }
            return o(t2, e2), t2;
          })(f), y = (function(e2) {
            function t2(t3) {
              return e2.call(this, "Invalid unit " + t3) || this;
            }
            return o(t2, e2), t2;
          })(f), E = (function(e2) {
            function t2() {
              return e2.apply(this, arguments) || this;
            }
            return o(t2, e2), t2;
          })(f), b = (function(e2) {
            function t2() {
              return e2.call(this, "Zone is an abstract class") || this;
            }
            return o(t2, e2), t2;
          })(f), w = "numeric", S = "short", k = "long", I = { year: w, month: w, day: w }, A = { year: w, month: S, day: w }, C = { year: w, month: S, day: w, weekday: S }, T = { year: w, month: k, day: w }, O = { year: w, month: k, day: w, weekday: k }, U = { hour: w, minute: w }, R = { hour: w, minute: w, second: w }, L = { hour: w, minute: w, second: w, timeZoneName: S }, x = { hour: w, minute: w, second: w, timeZoneName: k }, D = { hour: w, minute: w, hour12: false }, N = { hour: w, minute: w, second: w, hour12: false }, P = { hour: w, minute: w, second: w, hour12: false, timeZoneName: S }, _ = { hour: w, minute: w, second: w, hour12: false, timeZoneName: k }, M = { year: w, month: w, day: w, hour: w, minute: w }, V = { year: w, month: w, day: w, hour: w, minute: w, second: w }, j = { year: w, month: S, day: w, hour: w, minute: w }, q = { year: w, month: S, day: w, hour: w, minute: w, second: w }, F = { year: w, month: S, day: w, weekday: S, hour: w, minute: w }, B = { year: w, month: k, day: w, hour: w, minute: w, timeZoneName: S }, H = { year: w, month: k, day: w, hour: w, minute: w, second: w, timeZoneName: S }, z = { year: w, month: k, day: w, weekday: k, hour: w, minute: w, timeZoneName: k }, J = { year: w, month: k, day: w, weekday: k, hour: w, minute: w, second: w, timeZoneName: k };
          function W(e2) {
            return void 0 === e2;
          }
          function Z(e2) {
            return "number" == typeof e2;
          }
          function G(e2) {
            return "number" == typeof e2 && e2 % 1 == 0;
          }
          function Y() {
            try {
              return "undefined" != typeof Intl && Intl.DateTimeFormat;
            } catch (e2) {
              return false;
            }
          }
          function $() {
            return !W(Intl.DateTimeFormat.prototype.formatToParts);
          }
          function K() {
            try {
              return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
            } catch (e2) {
              return false;
            }
          }
          function X(e2, t2, n2) {
            if (0 !== e2.length) return e2.reduce((function(e3, i2) {
              var r2 = [t2(i2), i2];
              return e3 && n2(e3[0], r2[0]) === e3[0] ? e3 : r2;
            }), null)[1];
          }
          function Q(e2, t2) {
            return t2.reduce((function(t3, n2) {
              return t3[n2] = e2[n2], t3;
            }), {});
          }
          function ee(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }
          function te(e2, t2, n2) {
            return G(e2) && e2 >= t2 && e2 <= n2;
          }
          function ne(e2, t2) {
            void 0 === t2 && (t2 = 2);
            var n2 = e2 < 0 ? "-" : "", i2 = n2 ? -1 * e2 : e2;
            return "" + n2 + (i2.toString().length < t2 ? ("0".repeat(t2) + i2).slice(-t2) : i2.toString());
          }
          function ie(e2) {
            return W(e2) || null === e2 || "" === e2 ? void 0 : parseInt(e2, 10);
          }
          function re(e2) {
            if (!W(e2) && null !== e2 && "" !== e2) {
              var t2 = 1e3 * parseFloat("0." + e2);
              return Math.floor(t2);
            }
          }
          function oe(e2, t2, n2) {
            void 0 === n2 && (n2 = false);
            var i2 = Math.pow(10, t2);
            return (n2 ? Math.trunc : Math.round)(e2 * i2) / i2;
          }
          function se(e2) {
            return e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0);
          }
          function ae(e2) {
            return se(e2) ? 366 : 365;
          }
          function ce(e2, t2) {
            var n2 = (function(e3, t3) {
              return e3 - t3 * Math.floor(e3 / t3);
            })(t2 - 1, 12) + 1;
            return 2 === n2 ? se(e2 + (t2 - n2) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n2 - 1];
          }
          function ue(e2) {
            var t2 = Date.UTC(e2.year, e2.month - 1, e2.day, e2.hour, e2.minute, e2.second, e2.millisecond);
            return e2.year < 100 && e2.year >= 0 && (t2 = new Date(t2)).setUTCFullYear(t2.getUTCFullYear() - 1900), +t2;
          }
          function le(e2) {
            var t2 = (e2 + Math.floor(e2 / 4) - Math.floor(e2 / 100) + Math.floor(e2 / 400)) % 7, n2 = e2 - 1, i2 = (n2 + Math.floor(n2 / 4) - Math.floor(n2 / 100) + Math.floor(n2 / 400)) % 7;
            return 4 === t2 || 3 === i2 ? 53 : 52;
          }
          function de(e2) {
            return e2 > 99 ? e2 : e2 > 60 ? 1900 + e2 : 2e3 + e2;
          }
          function he(e2, t2, n2, i2) {
            void 0 === i2 && (i2 = null);
            var r2 = new Date(e2), o2 = { hour12: false, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
            i2 && (o2.timeZone = i2);
            var s2 = Object.assign({ timeZoneName: t2 }, o2), a2 = Y();
            if (a2 && $()) {
              var c2 = new Intl.DateTimeFormat(n2, s2).formatToParts(r2).find((function(e3) {
                return "timezonename" === e3.type.toLowerCase();
              }));
              return c2 ? c2.value : null;
            }
            if (a2) {
              var u2 = new Intl.DateTimeFormat(n2, o2).format(r2);
              return new Intl.DateTimeFormat(n2, s2).format(r2).substring(u2.length).replace(/^[, \u200e]+/, "");
            }
            return null;
          }
          function fe(e2, t2) {
            var n2 = parseInt(e2, 10);
            Number.isNaN(n2) && (n2 = 0);
            var i2 = parseInt(t2, 10) || 0;
            return 60 * n2 + (n2 < 0 || Object.is(n2, -0) ? -i2 : i2);
          }
          function ve(e2) {
            var t2 = Number(e2);
            if ("boolean" == typeof e2 || "" === e2 || Number.isNaN(t2)) throw new E("Invalid unit value " + e2);
            return t2;
          }
          function pe(e2, t2, n2) {
            var i2 = {};
            for (var r2 in e2) if (ee(e2, r2)) {
              if (n2.indexOf(r2) >= 0) continue;
              var o2 = e2[r2];
              if (null == o2) continue;
              i2[t2(r2)] = ve(o2);
            }
            return i2;
          }
          function ge(e2, t2) {
            var n2 = Math.trunc(Math.abs(e2 / 60)), i2 = Math.trunc(Math.abs(e2 % 60)), r2 = e2 >= 0 ? "+" : "-";
            switch (t2) {
              case "short":
                return "" + r2 + ne(n2, 2) + ":" + ne(i2, 2);
              case "narrow":
                return "" + r2 + n2 + (i2 > 0 ? ":" + i2 : "");
              case "techie":
                return "" + r2 + ne(n2, 2) + ne(i2, 2);
              default:
                throw new RangeError("Value format " + t2 + " is out of range for property format");
            }
          }
          function me(e2) {
            return Q(e2, ["hour", "minute", "second", "millisecond"]);
          }
          var ye = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
          function Ee(e2) {
            return JSON.stringify(e2, Object.keys(e2).sort());
          }
          var be = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], we = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Se = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
          function ke(e2) {
            switch (e2) {
              case "narrow":
                return [].concat(Se);
              case "short":
                return [].concat(we);
              case "long":
                return [].concat(be);
              case "numeric":
                return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
              case "2-digit":
                return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
              default:
                return null;
            }
          }
          var Ie = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], Ae = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Ce = ["M", "T", "W", "T", "F", "S", "S"];
          function Te(e2) {
            switch (e2) {
              case "narrow":
                return [].concat(Ce);
              case "short":
                return [].concat(Ae);
              case "long":
                return [].concat(Ie);
              case "numeric":
                return ["1", "2", "3", "4", "5", "6", "7"];
              default:
                return null;
            }
          }
          var Oe = ["AM", "PM"], Ue = ["Before Christ", "Anno Domini"], Re = ["BC", "AD"], Le = ["B", "A"];
          function xe(e2) {
            switch (e2) {
              case "narrow":
                return [].concat(Le);
              case "short":
                return [].concat(Re);
              case "long":
                return [].concat(Ue);
              default:
                return null;
            }
          }
          function De(e2, t2) {
            for (var n2, i2 = "", r2 = h(e2); !(n2 = r2()).done; ) {
              var o2 = n2.value;
              o2.literal ? i2 += o2.val : i2 += t2(o2.val);
            }
            return i2;
          }
          var Ne = { D: I, DD: A, DDD: T, DDDD: O, t: U, tt: R, ttt: L, tttt: x, T: D, TT: N, TTT: P, TTTT: _, f: M, ff: j, fff: B, ffff: z, F: V, FF: q, FFF: H, FFFF: J }, Pe = (function() {
            function e2(e3, t3) {
              this.opts = t3, this.loc = e3, this.systemLoc = null;
            }
            e2.create = function(t3, n2) {
              return void 0 === n2 && (n2 = {}), new e2(t3, n2);
            }, e2.parseFormat = function(e3) {
              for (var t3 = null, n2 = "", i2 = false, r2 = [], o2 = 0; o2 < e3.length; o2++) {
                var s2 = e3.charAt(o2);
                "'" === s2 ? (n2.length > 0 && r2.push({ literal: i2, val: n2 }), t3 = null, n2 = "", i2 = !i2) : i2 || s2 === t3 ? n2 += s2 : (n2.length > 0 && r2.push({ literal: false, val: n2 }), n2 = s2, t3 = s2);
              }
              return n2.length > 0 && r2.push({ literal: i2, val: n2 }), r2;
            }, e2.macroTokenToFormatOpts = function(e3) {
              return Ne[e3];
            };
            var t2 = e2.prototype;
            return t2.formatWithSystemDefault = function(e3, t3) {
              return null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e3, Object.assign({}, this.opts, t3)).format();
            }, t2.formatDateTime = function(e3, t3) {
              return void 0 === t3 && (t3 = {}), this.loc.dtFormatter(e3, Object.assign({}, this.opts, t3)).format();
            }, t2.formatDateTimeParts = function(e3, t3) {
              return void 0 === t3 && (t3 = {}), this.loc.dtFormatter(e3, Object.assign({}, this.opts, t3)).formatToParts();
            }, t2.resolvedOptions = function(e3, t3) {
              return void 0 === t3 && (t3 = {}), this.loc.dtFormatter(e3, Object.assign({}, this.opts, t3)).resolvedOptions();
            }, t2.num = function(e3, t3) {
              if (void 0 === t3 && (t3 = 0), this.opts.forceSimple) return ne(e3, t3);
              var n2 = Object.assign({}, this.opts);
              return t3 > 0 && (n2.padTo = t3), this.loc.numberFormatter(n2).format(e3);
            }, t2.formatDateTimeFromString = function(t3, n2) {
              var i2 = this, r2 = "en" === this.loc.listingMode(), o2 = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar && $(), s2 = function(e3, n3) {
                return i2.loc.extract(t3, e3, n3);
              }, a2 = function(e3) {
                return t3.isOffsetFixed && 0 === t3.offset && e3.allowZ ? "Z" : t3.isValid ? t3.zone.formatOffset(t3.ts, e3.format) : "";
              }, c2 = function() {
                return r2 ? (function(e3) {
                  return Oe[e3.hour < 12 ? 0 : 1];
                })(t3) : s2({ hour: "numeric", hour12: true }, "dayperiod");
              }, u2 = function(e3, n3) {
                return r2 ? (function(e4, t4) {
                  return ke(t4)[e4.month - 1];
                })(t3, e3) : s2(n3 ? { month: e3 } : { month: e3, day: "numeric" }, "month");
              }, l2 = function(e3, n3) {
                return r2 ? (function(e4, t4) {
                  return Te(t4)[e4.weekday - 1];
                })(t3, e3) : s2(n3 ? { weekday: e3 } : { weekday: e3, month: "long", day: "numeric" }, "weekday");
              }, d2 = function(e3) {
                return r2 ? (function(e4, t4) {
                  return xe(t4)[e4.year < 0 ? 0 : 1];
                })(t3, e3) : s2({ era: e3 }, "era");
              };
              return De(e2.parseFormat(n2), (function(n3) {
                switch (n3) {
                  case "S":
                    return i2.num(t3.millisecond);
                  case "u":
                  case "SSS":
                    return i2.num(t3.millisecond, 3);
                  case "s":
                    return i2.num(t3.second);
                  case "ss":
                    return i2.num(t3.second, 2);
                  case "m":
                    return i2.num(t3.minute);
                  case "mm":
                    return i2.num(t3.minute, 2);
                  case "h":
                    return i2.num(t3.hour % 12 == 0 ? 12 : t3.hour % 12);
                  case "hh":
                    return i2.num(t3.hour % 12 == 0 ? 12 : t3.hour % 12, 2);
                  case "H":
                    return i2.num(t3.hour);
                  case "HH":
                    return i2.num(t3.hour, 2);
                  case "Z":
                    return a2({ format: "narrow", allowZ: i2.opts.allowZ });
                  case "ZZ":
                    return a2({ format: "short", allowZ: i2.opts.allowZ });
                  case "ZZZ":
                    return a2({ format: "techie", allowZ: i2.opts.allowZ });
                  case "ZZZZ":
                    return t3.zone.offsetName(t3.ts, { format: "short", locale: i2.loc.locale });
                  case "ZZZZZ":
                    return t3.zone.offsetName(t3.ts, { format: "long", locale: i2.loc.locale });
                  case "z":
                    return t3.zoneName;
                  case "a":
                    return c2();
                  case "d":
                    return o2 ? s2({ day: "numeric" }, "day") : i2.num(t3.day);
                  case "dd":
                    return o2 ? s2({ day: "2-digit" }, "day") : i2.num(t3.day, 2);
                  case "c":
                    return i2.num(t3.weekday);
                  case "ccc":
                    return l2("short", true);
                  case "cccc":
                    return l2("long", true);
                  case "ccccc":
                    return l2("narrow", true);
                  case "E":
                    return i2.num(t3.weekday);
                  case "EEE":
                    return l2("short", false);
                  case "EEEE":
                    return l2("long", false);
                  case "EEEEE":
                    return l2("narrow", false);
                  case "L":
                    return o2 ? s2({ month: "numeric", day: "numeric" }, "month") : i2.num(t3.month);
                  case "LL":
                    return o2 ? s2({ month: "2-digit", day: "numeric" }, "month") : i2.num(t3.month, 2);
                  case "LLL":
                    return u2("short", true);
                  case "LLLL":
                    return u2("long", true);
                  case "LLLLL":
                    return u2("narrow", true);
                  case "M":
                    return o2 ? s2({ month: "numeric" }, "month") : i2.num(t3.month);
                  case "MM":
                    return o2 ? s2({ month: "2-digit" }, "month") : i2.num(t3.month, 2);
                  case "MMM":
                    return u2("short", false);
                  case "MMMM":
                    return u2("long", false);
                  case "MMMMM":
                    return u2("narrow", false);
                  case "y":
                    return o2 ? s2({ year: "numeric" }, "year") : i2.num(t3.year);
                  case "yy":
                    return o2 ? s2({ year: "2-digit" }, "year") : i2.num(t3.year.toString().slice(-2), 2);
                  case "yyyy":
                    return o2 ? s2({ year: "numeric" }, "year") : i2.num(t3.year, 4);
                  case "yyyyyy":
                    return o2 ? s2({ year: "numeric" }, "year") : i2.num(t3.year, 6);
                  case "G":
                    return d2("short");
                  case "GG":
                    return d2("long");
                  case "GGGGG":
                    return d2("narrow");
                  case "kk":
                    return i2.num(t3.weekYear.toString().slice(-2), 2);
                  case "kkkk":
                    return i2.num(t3.weekYear, 4);
                  case "W":
                    return i2.num(t3.weekNumber);
                  case "WW":
                    return i2.num(t3.weekNumber, 2);
                  case "o":
                    return i2.num(t3.ordinal);
                  case "ooo":
                    return i2.num(t3.ordinal, 3);
                  case "q":
                    return i2.num(t3.quarter);
                  case "qq":
                    return i2.num(t3.quarter, 2);
                  case "X":
                    return i2.num(Math.floor(t3.ts / 1e3));
                  case "x":
                    return i2.num(t3.ts);
                  default:
                    return (function(n4) {
                      var r3 = e2.macroTokenToFormatOpts(n4);
                      return r3 ? i2.formatWithSystemDefault(t3, r3) : n4;
                    })(n3);
                }
              }));
            }, t2.formatDurationFromString = function(t3, n2) {
              var i2, r2 = this, o2 = function(e3) {
                switch (e3[0]) {
                  case "S":
                    return "millisecond";
                  case "s":
                    return "second";
                  case "m":
                    return "minute";
                  case "h":
                    return "hour";
                  case "d":
                    return "day";
                  case "M":
                    return "month";
                  case "y":
                    return "year";
                  default:
                    return null;
                }
              }, s2 = e2.parseFormat(n2), a2 = s2.reduce((function(e3, t4) {
                var n3 = t4.literal, i3 = t4.val;
                return n3 ? e3 : e3.concat(i3);
              }), []), c2 = t3.shiftTo.apply(t3, a2.map(o2).filter((function(e3) {
                return e3;
              })));
              return De(s2, (i2 = c2, function(e3) {
                var t4 = o2(e3);
                return t4 ? r2.num(i2.get(t4), e3.length) : e3;
              }));
            }, e2;
          })(), _e = (function() {
            function e2(e3, t2) {
              this.reason = e3, this.explanation = t2;
            }
            return e2.prototype.toMessage = function() {
              return this.explanation ? this.reason + ": " + this.explanation : this.reason;
            }, e2;
          })(), Me = (function() {
            function e2() {
            }
            var t2 = e2.prototype;
            return t2.offsetName = function(e3, t3) {
              throw new b();
            }, t2.formatOffset = function(e3, t3) {
              throw new b();
            }, t2.offset = function(e3) {
              throw new b();
            }, t2.equals = function(e3) {
              throw new b();
            }, r(e2, [{ key: "type", get: function() {
              throw new b();
            } }, { key: "name", get: function() {
              throw new b();
            } }, { key: "universal", get: function() {
              throw new b();
            } }, { key: "isValid", get: function() {
              throw new b();
            } }]), e2;
          })(), Ve = null, je = (function(e2) {
            function t2() {
              return e2.apply(this, arguments) || this;
            }
            o(t2, e2);
            var n2 = t2.prototype;
            return n2.offsetName = function(e3, t3) {
              return he(e3, t3.format, t3.locale);
            }, n2.formatOffset = function(e3, t3) {
              return ge(this.offset(e3), t3);
            }, n2.offset = function(e3) {
              return -new Date(e3).getTimezoneOffset();
            }, n2.equals = function(e3) {
              return "local" === e3.type;
            }, r(t2, [{ key: "type", get: function() {
              return "local";
            } }, { key: "name", get: function() {
              return Y() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : "local";
            } }, { key: "universal", get: function() {
              return false;
            } }, { key: "isValid", get: function() {
              return true;
            } }], [{ key: "instance", get: function() {
              return null === Ve && (Ve = new t2()), Ve;
            } }]), t2;
          })(Me), qe = RegExp("^" + ye.source + "$"), Fe = {};
          var Be = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
          var He = {}, ze = (function(e2) {
            function t2(n3) {
              var i2;
              return (i2 = e2.call(this) || this).zoneName = n3, i2.valid = t2.isValidZone(n3), i2;
            }
            o(t2, e2), t2.create = function(e3) {
              return He[e3] || (He[e3] = new t2(e3)), He[e3];
            }, t2.resetCache = function() {
              He = {}, Fe = {};
            }, t2.isValidSpecifier = function(e3) {
              return !(!e3 || !e3.match(qe));
            }, t2.isValidZone = function(e3) {
              try {
                return new Intl.DateTimeFormat("en-US", { timeZone: e3 }).format(), true;
              } catch (e4) {
                return false;
              }
            }, t2.parseGMTOffset = function(e3) {
              if (e3) {
                var t3 = e3.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
                if (t3) return -60 * parseInt(t3[1]);
              }
              return null;
            };
            var n2 = t2.prototype;
            return n2.offsetName = function(e3, t3) {
              return he(e3, t3.format, t3.locale, this.name);
            }, n2.formatOffset = function(e3, t3) {
              return ge(this.offset(e3), t3);
            }, n2.offset = function(e3) {
              var t3 = new Date(e3);
              if (isNaN(t3)) return NaN;
              var n3, i2 = (n3 = this.name, Fe[n3] || (Fe[n3] = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: n3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })), Fe[n3]), r2 = i2.formatToParts ? (function(e4, t4) {
                for (var n4 = e4.formatToParts(t4), i3 = [], r3 = 0; r3 < n4.length; r3++) {
                  var o3 = n4[r3], s3 = o3.type, a3 = o3.value, c3 = Be[s3];
                  W(c3) || (i3[c3] = parseInt(a3, 10));
                }
                return i3;
              })(i2, t3) : (function(e4, t4) {
                var n4 = e4.format(t4).replace(/\u200E/g, ""), i3 = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n4), r3 = i3[1], o3 = i3[2];
                return [i3[3], r3, o3, i3[4], i3[5], i3[6]];
              })(i2, t3), o2 = r2[0], s2 = r2[1], a2 = r2[2], c2 = r2[3], u2 = +t3, l2 = u2 % 1e3;
              return (ue({ year: o2, month: s2, day: a2, hour: 24 === c2 ? 0 : c2, minute: r2[4], second: r2[5], millisecond: 0 }) - (u2 -= l2 >= 0 ? l2 : 1e3 + l2)) / 6e4;
            }, n2.equals = function(e3) {
              return "iana" === e3.type && e3.name === this.name;
            }, r(t2, [{ key: "type", get: function() {
              return "iana";
            } }, { key: "name", get: function() {
              return this.zoneName;
            } }, { key: "universal", get: function() {
              return false;
            } }, { key: "isValid", get: function() {
              return this.valid;
            } }]), t2;
          })(Me), Je = null, We = (function(e2) {
            function t2(t3) {
              var n3;
              return (n3 = e2.call(this) || this).fixed = t3, n3;
            }
            o(t2, e2), t2.instance = function(e3) {
              return 0 === e3 ? t2.utcInstance : new t2(e3);
            }, t2.parseSpecifier = function(e3) {
              if (e3) {
                var n3 = e3.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                if (n3) return new t2(fe(n3[1], n3[2]));
              }
              return null;
            }, r(t2, null, [{ key: "utcInstance", get: function() {
              return null === Je && (Je = new t2(0)), Je;
            } }]);
            var n2 = t2.prototype;
            return n2.offsetName = function() {
              return this.name;
            }, n2.formatOffset = function(e3, t3) {
              return ge(this.fixed, t3);
            }, n2.offset = function() {
              return this.fixed;
            }, n2.equals = function(e3) {
              return "fixed" === e3.type && e3.fixed === this.fixed;
            }, r(t2, [{ key: "type", get: function() {
              return "fixed";
            } }, { key: "name", get: function() {
              return 0 === this.fixed ? "UTC" : "UTC" + ge(this.fixed, "narrow");
            } }, { key: "universal", get: function() {
              return true;
            } }, { key: "isValid", get: function() {
              return true;
            } }]), t2;
          })(Me), Ze = (function(e2) {
            function t2(t3) {
              var n3;
              return (n3 = e2.call(this) || this).zoneName = t3, n3;
            }
            o(t2, e2);
            var n2 = t2.prototype;
            return n2.offsetName = function() {
              return null;
            }, n2.formatOffset = function() {
              return "";
            }, n2.offset = function() {
              return NaN;
            }, n2.equals = function() {
              return false;
            }, r(t2, [{ key: "type", get: function() {
              return "invalid";
            } }, { key: "name", get: function() {
              return this.zoneName;
            } }, { key: "universal", get: function() {
              return false;
            } }, { key: "isValid", get: function() {
              return false;
            } }]), t2;
          })(Me);
          function Ge(e2, t2) {
            var n2;
            if (W(e2) || null === e2) return t2;
            if (e2 instanceof Me) return e2;
            if ("string" == typeof e2) {
              var i2 = e2.toLowerCase();
              return "local" === i2 ? t2 : "utc" === i2 || "gmt" === i2 ? We.utcInstance : null != (n2 = ze.parseGMTOffset(e2)) ? We.instance(n2) : ze.isValidSpecifier(i2) ? ze.create(e2) : We.parseSpecifier(i2) || new Ze(e2);
            }
            return Z(e2) ? We.instance(e2) : "object" == typeof e2 && e2.offset && "number" == typeof e2.offset ? e2 : new Ze(e2);
          }
          var Ye = function() {
            return Date.now();
          }, $e = null, Ke = null, Xe = null, Qe = null, et = false, tt = (function() {
            function e2() {
            }
            return e2.resetCaches = function() {
              ht.resetCache(), ze.resetCache();
            }, r(e2, null, [{ key: "now", get: function() {
              return Ye;
            }, set: function(e3) {
              Ye = e3;
            } }, { key: "defaultZoneName", get: function() {
              return e2.defaultZone.name;
            }, set: function(e3) {
              $e = e3 ? Ge(e3) : null;
            } }, { key: "defaultZone", get: function() {
              return $e || je.instance;
            } }, { key: "defaultLocale", get: function() {
              return Ke;
            }, set: function(e3) {
              Ke = e3;
            } }, { key: "defaultNumberingSystem", get: function() {
              return Xe;
            }, set: function(e3) {
              Xe = e3;
            } }, { key: "defaultOutputCalendar", get: function() {
              return Qe;
            }, set: function(e3) {
              Qe = e3;
            } }, { key: "throwOnInvalid", get: function() {
              return et;
            }, set: function(e3) {
              et = e3;
            } }]), e2;
          })(), nt = {};
          function it(e2, t2) {
            void 0 === t2 && (t2 = {});
            var n2 = JSON.stringify([e2, t2]), i2 = nt[n2];
            return i2 || (i2 = new Intl.DateTimeFormat(e2, t2), nt[n2] = i2), i2;
          }
          var rt = {};
          var ot = {};
          function st(e2, t2) {
            void 0 === t2 && (t2 = {});
            var n2 = t2, i2 = (n2.base, (function(e3, t3) {
              if (null == e3) return {};
              var n3, i3, r3 = {}, o3 = Object.keys(e3);
              for (i3 = 0; i3 < o3.length; i3++) n3 = o3[i3], t3.indexOf(n3) >= 0 || (r3[n3] = e3[n3]);
              return r3;
            })(n2, ["base"])), r2 = JSON.stringify([e2, i2]), o2 = ot[r2];
            return o2 || (o2 = new Intl.RelativeTimeFormat(e2, t2), ot[r2] = o2), o2;
          }
          var at = null;
          function ct(e2, t2, n2, i2, r2) {
            var o2 = e2.listingMode(n2);
            return "error" === o2 ? null : "en" === o2 ? i2(t2) : r2(t2);
          }
          var ut = (function() {
            function e2(e3, t2, n2) {
              if (this.padTo = n2.padTo || 0, this.floor = n2.floor || false, !t2 && Y()) {
                var i2 = { useGrouping: false };
                n2.padTo > 0 && (i2.minimumIntegerDigits = n2.padTo), this.inf = (function(e4, t3) {
                  void 0 === t3 && (t3 = {});
                  var n3 = JSON.stringify([e4, t3]), i3 = rt[n3];
                  return i3 || (i3 = new Intl.NumberFormat(e4, t3), rt[n3] = i3), i3;
                })(e3, i2);
              }
            }
            return e2.prototype.format = function(e3) {
              if (this.inf) {
                var t2 = this.floor ? Math.floor(e3) : e3;
                return this.inf.format(t2);
              }
              return ne(this.floor ? Math.floor(e3) : oe(e3, 3), this.padTo);
            }, e2;
          })(), lt = (function() {
            function e2(e3, t3, n2) {
              var i2;
              if (this.opts = n2, this.hasIntl = Y(), e3.zone.universal && this.hasIntl) {
                var r2 = e3.offset / 60 * -1, o2 = r2 >= 0 ? "Etc/GMT+" + r2 : "Etc/GMT" + r2, s2 = ze.isValidZone(o2);
                0 !== e3.offset && s2 ? (i2 = o2, this.dt = e3) : (i2 = "UTC", n2.timeZoneName ? this.dt = e3 : this.dt = 0 === e3.offset ? e3 : li.fromMillis(e3.ts + 60 * e3.offset * 1e3));
              } else "local" === e3.zone.type ? this.dt = e3 : (this.dt = e3, i2 = e3.zone.name);
              if (this.hasIntl) {
                var a2 = Object.assign({}, this.opts);
                i2 && (a2.timeZone = i2), this.dtf = it(t3, a2);
              }
            }
            var t2 = e2.prototype;
            return t2.format = function() {
              if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
              var e3 = (function(e4) {
                switch (Ee(Q(e4, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]))) {
                  case Ee(I):
                    return "M/d/yyyy";
                  case Ee(A):
                    return "LLL d, yyyy";
                  case Ee(C):
                    return "EEE, LLL d, yyyy";
                  case Ee(T):
                    return "LLLL d, yyyy";
                  case Ee(O):
                    return "EEEE, LLLL d, yyyy";
                  case Ee(U):
                    return "h:mm a";
                  case Ee(R):
                    return "h:mm:ss a";
                  case Ee(L):
                  case Ee(x):
                    return "h:mm a";
                  case Ee(D):
                    return "HH:mm";
                  case Ee(N):
                    return "HH:mm:ss";
                  case Ee(P):
                  case Ee(_):
                    return "HH:mm";
                  case Ee(M):
                    return "M/d/yyyy, h:mm a";
                  case Ee(j):
                    return "LLL d, yyyy, h:mm a";
                  case Ee(B):
                    return "LLLL d, yyyy, h:mm a";
                  case Ee(z):
                    return "EEEE, LLLL d, yyyy, h:mm a";
                  case Ee(V):
                    return "M/d/yyyy, h:mm:ss a";
                  case Ee(q):
                    return "LLL d, yyyy, h:mm:ss a";
                  case Ee(F):
                    return "EEE, d LLL yyyy, h:mm a";
                  case Ee(H):
                    return "LLLL d, yyyy, h:mm:ss a";
                  case Ee(J):
                    return "EEEE, LLLL d, yyyy, h:mm:ss a";
                  default:
                    return "EEEE, LLLL d, yyyy, h:mm a";
                }
              })(this.opts), t3 = ht.create("en-US");
              return Pe.create(t3).formatDateTimeFromString(this.dt, e3);
            }, t2.formatToParts = function() {
              return this.hasIntl && $() ? this.dtf.formatToParts(this.dt.toJSDate()) : [];
            }, t2.resolvedOptions = function() {
              return this.hasIntl ? this.dtf.resolvedOptions() : { locale: "en-US", numberingSystem: "latn", outputCalendar: "gregory" };
            }, e2;
          })(), dt = (function() {
            function e2(e3, t3, n2) {
              this.opts = Object.assign({ style: "long" }, n2), !t3 && K() && (this.rtf = st(e3, n2));
            }
            var t2 = e2.prototype;
            return t2.format = function(e3, t3) {
              return this.rtf ? this.rtf.format(e3, t3) : (function(e4, t4, n2, i2) {
                void 0 === n2 && (n2 = "always"), void 0 === i2 && (i2 = false);
                var r2 = { years: ["year", "yr."], quarters: ["quarter", "qtr."], months: ["month", "mo."], weeks: ["week", "wk."], days: ["day", "day", "days"], hours: ["hour", "hr."], minutes: ["minute", "min."], seconds: ["second", "sec."] }, o2 = -1 === ["hours", "minutes", "seconds"].indexOf(e4);
                if ("auto" === n2 && o2) {
                  var s2 = "days" === e4;
                  switch (t4) {
                    case 1:
                      return s2 ? "tomorrow" : "next " + r2[e4][0];
                    case -1:
                      return s2 ? "yesterday" : "last " + r2[e4][0];
                    case 0:
                      return s2 ? "today" : "this " + r2[e4][0];
                  }
                }
                var a2 = Object.is(t4, -0) || t4 < 0, c2 = Math.abs(t4), u2 = 1 === c2, l2 = r2[e4], d2 = i2 ? u2 ? l2[1] : l2[2] || l2[1] : u2 ? r2[e4][0] : e4;
                return a2 ? c2 + " " + d2 + " ago" : "in " + c2 + " " + d2;
              })(t3, e3, this.opts.numeric, "long" !== this.opts.style);
            }, t2.formatToParts = function(e3, t3) {
              return this.rtf ? this.rtf.formatToParts(e3, t3) : [];
            }, e2;
          })(), ht = (function() {
            function e2(e3, t3, n2, i2) {
              var r2 = (function(e4) {
                var t4 = e4.indexOf("-u-");
                if (-1 === t4) return [e4];
                var n3, i3 = e4.substring(0, t4);
                try {
                  n3 = it(e4).resolvedOptions();
                } catch (e5) {
                  n3 = it(i3).resolvedOptions();
                }
                var r3 = n3;
                return [i3, r3.numberingSystem, r3.calendar];
              })(e3), o2 = r2[0], s2 = r2[1], a2 = r2[2];
              this.locale = o2, this.numberingSystem = t3 || s2 || null, this.outputCalendar = n2 || a2 || null, this.intl = (function(e4, t4, n3) {
                return Y() ? n3 || t4 ? (e4 += "-u", n3 && (e4 += "-ca-" + n3), t4 && (e4 += "-nu-" + t4), e4) : e4 : [];
              })(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i2, this.fastNumbersCached = null;
            }
            e2.fromOpts = function(t3) {
              return e2.create(t3.locale, t3.numberingSystem, t3.outputCalendar, t3.defaultToEN);
            }, e2.create = function(t3, n2, i2, r2) {
              void 0 === r2 && (r2 = false);
              var o2 = t3 || tt.defaultLocale;
              return new e2(o2 || (r2 ? "en-US" : (function() {
                if (at) return at;
                if (Y()) {
                  var e3 = new Intl.DateTimeFormat().resolvedOptions().locale;
                  return at = e3 && "und" !== e3 ? e3 : "en-US";
                }
                return at = "en-US";
              })()), n2 || tt.defaultNumberingSystem, i2 || tt.defaultOutputCalendar, o2);
            }, e2.resetCache = function() {
              at = null, nt = {}, rt = {}, ot = {};
            }, e2.fromObject = function(t3) {
              var n2 = void 0 === t3 ? {} : t3, i2 = n2.locale, r2 = n2.numberingSystem, o2 = n2.outputCalendar;
              return e2.create(i2, r2, o2);
            };
            var t2 = e2.prototype;
            return t2.listingMode = function(e3) {
              void 0 === e3 && (e3 = true);
              var t3 = Y() && $(), n2 = this.isEnglish(), i2 = !(null !== this.numberingSystem && "latn" !== this.numberingSystem || null !== this.outputCalendar && "gregory" !== this.outputCalendar);
              return t3 || n2 && i2 || e3 ? !t3 || n2 && i2 ? "en" : "intl" : "error";
            }, t2.clone = function(t3) {
              return t3 && 0 !== Object.getOwnPropertyNames(t3).length ? e2.create(t3.locale || this.specifiedLocale, t3.numberingSystem || this.numberingSystem, t3.outputCalendar || this.outputCalendar, t3.defaultToEN || false) : this;
            }, t2.redefaultToEN = function(e3) {
              return void 0 === e3 && (e3 = {}), this.clone(Object.assign({}, e3, { defaultToEN: true }));
            }, t2.redefaultToSystem = function(e3) {
              return void 0 === e3 && (e3 = {}), this.clone(Object.assign({}, e3, { defaultToEN: false }));
            }, t2.months = function(e3, t3, n2) {
              var i2 = this;
              return void 0 === t3 && (t3 = false), void 0 === n2 && (n2 = true), ct(this, e3, n2, ke, (function() {
                var n3 = t3 ? { month: e3, day: "numeric" } : { month: e3 }, r2 = t3 ? "format" : "standalone";
                return i2.monthsCache[r2][e3] || (i2.monthsCache[r2][e3] = (function(e4) {
                  for (var t4 = [], n4 = 1; n4 <= 12; n4++) {
                    var i3 = li.utc(2016, n4, 1);
                    t4.push(e4(i3));
                  }
                  return t4;
                })((function(e4) {
                  return i2.extract(e4, n3, "month");
                }))), i2.monthsCache[r2][e3];
              }));
            }, t2.weekdays = function(e3, t3, n2) {
              var i2 = this;
              return void 0 === t3 && (t3 = false), void 0 === n2 && (n2 = true), ct(this, e3, n2, Te, (function() {
                var n3 = t3 ? { weekday: e3, year: "numeric", month: "long", day: "numeric" } : { weekday: e3 }, r2 = t3 ? "format" : "standalone";
                return i2.weekdaysCache[r2][e3] || (i2.weekdaysCache[r2][e3] = (function(e4) {
                  for (var t4 = [], n4 = 1; n4 <= 7; n4++) {
                    var i3 = li.utc(2016, 11, 13 + n4);
                    t4.push(e4(i3));
                  }
                  return t4;
                })((function(e4) {
                  return i2.extract(e4, n3, "weekday");
                }))), i2.weekdaysCache[r2][e3];
              }));
            }, t2.meridiems = function(e3) {
              var t3 = this;
              return void 0 === e3 && (e3 = true), ct(this, void 0, e3, (function() {
                return Oe;
              }), (function() {
                if (!t3.meridiemCache) {
                  var e4 = { hour: "numeric", hour12: true };
                  t3.meridiemCache = [li.utc(2016, 11, 13, 9), li.utc(2016, 11, 13, 19)].map((function(n2) {
                    return t3.extract(n2, e4, "dayperiod");
                  }));
                }
                return t3.meridiemCache;
              }));
            }, t2.eras = function(e3, t3) {
              var n2 = this;
              return void 0 === t3 && (t3 = true), ct(this, e3, t3, xe, (function() {
                var t4 = { era: e3 };
                return n2.eraCache[e3] || (n2.eraCache[e3] = [li.utc(-40, 1, 1), li.utc(2017, 1, 1)].map((function(e4) {
                  return n2.extract(e4, t4, "era");
                }))), n2.eraCache[e3];
              }));
            }, t2.extract = function(e3, t3, n2) {
              var i2 = this.dtFormatter(e3, t3).formatToParts().find((function(e4) {
                return e4.type.toLowerCase() === n2;
              }));
              return i2 ? i2.value : null;
            }, t2.numberFormatter = function(e3) {
              return void 0 === e3 && (e3 = {}), new ut(this.intl, e3.forceSimple || this.fastNumbers, e3);
            }, t2.dtFormatter = function(e3, t3) {
              return void 0 === t3 && (t3 = {}), new lt(e3, this.intl, t3);
            }, t2.relFormatter = function(e3) {
              return void 0 === e3 && (e3 = {}), new dt(this.intl, this.isEnglish(), e3);
            }, t2.isEnglish = function() {
              return "en" === this.locale || "en-us" === this.locale.toLowerCase() || Y() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
            }, t2.equals = function(e3) {
              return this.locale === e3.locale && this.numberingSystem === e3.numberingSystem && this.outputCalendar === e3.outputCalendar;
            }, r(e2, [{ key: "fastNumbers", get: function() {
              var e3;
              return null == this.fastNumbersCached && (this.fastNumbersCached = (!(e3 = this).numberingSystem || "latn" === e3.numberingSystem) && ("latn" === e3.numberingSystem || !e3.locale || e3.locale.startsWith("en") || Y() && "latn" === new Intl.DateTimeFormat(e3.intl).resolvedOptions().numberingSystem)), this.fastNumbersCached;
            } }]), e2;
          })();
          function ft() {
            for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
            var i2 = t2.reduce((function(e3, t3) {
              return e3 + t3.source;
            }), "");
            return RegExp("^" + i2 + "$");
          }
          function vt() {
            for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
            return function(e3) {
              return t2.reduce((function(t3, n3) {
                var i2 = t3[0], r2 = t3[1], o2 = t3[2], s2 = n3(e3, o2), a2 = s2[0], c2 = s2[1], u2 = s2[2];
                return [Object.assign(i2, a2), r2 || c2, u2];
              }), [{}, null, 1]).slice(0, 2);
            };
          }
          function pt(e2) {
            if (null == e2) return [null, null];
            for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) n2[i2 - 1] = arguments[i2];
            for (var r2 = 0, o2 = n2; r2 < o2.length; r2++) {
              var s2 = o2[r2], a2 = s2[0], c2 = s2[1], u2 = a2.exec(e2);
              if (u2) return c2(u2);
            }
            return [null, null];
          }
          function gt() {
            for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
            return function(e3, n3) {
              var i2, r2 = {};
              for (i2 = 0; i2 < t2.length; i2++) r2[t2[i2]] = ie(e3[n3 + i2]);
              return [r2, null, n3 + i2];
            };
          }
          var mt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, yt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Et = RegExp("" + yt.source + mt.source + "?"), bt = RegExp("(?:T" + Et.source + ")?"), wt = gt("weekYear", "weekNumber", "weekDay"), St = gt("year", "ordinal"), kt = RegExp(yt.source + " ?(?:" + mt.source + "|(" + ye.source + "))?"), It = RegExp("(?: " + kt.source + ")?");
          function At(e2, t2, n2) {
            var i2 = e2[t2];
            return W(i2) ? n2 : ie(i2);
          }
          function Ct(e2, t2) {
            return [{ year: At(e2, t2), month: At(e2, t2 + 1, 1), day: At(e2, t2 + 2, 1) }, null, t2 + 3];
          }
          function Tt(e2, t2) {
            return [{ hours: At(e2, t2, 0), minutes: At(e2, t2 + 1, 0), seconds: At(e2, t2 + 2, 0), milliseconds: re(e2[t2 + 3]) }, null, t2 + 4];
          }
          function Ot(e2, t2) {
            var n2 = !e2[t2] && !e2[t2 + 1], i2 = fe(e2[t2 + 1], e2[t2 + 2]);
            return [{}, n2 ? null : We.instance(i2), t2 + 3];
          }
          function Ut(e2, t2) {
            return [{}, e2[t2] ? ze.create(e2[t2]) : null, t2 + 1];
          }
          var Rt = RegExp("^T?" + yt.source + "$"), Lt = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
          function xt(e2) {
            var t2 = e2[0], n2 = e2[1], i2 = e2[2], r2 = e2[3], o2 = e2[4], s2 = e2[5], a2 = e2[6], c2 = e2[7], u2 = e2[8], l2 = "-" === t2[0], d2 = c2 && "-" === c2[0], h2 = function(e3, t3) {
              return void 0 === t3 && (t3 = false), void 0 !== e3 && (t3 || e3 && l2) ? -e3 : e3;
            };
            return [{ years: h2(ie(n2)), months: h2(ie(i2)), weeks: h2(ie(r2)), days: h2(ie(o2)), hours: h2(ie(s2)), minutes: h2(ie(a2)), seconds: h2(ie(c2), "-0" === c2), milliseconds: h2(re(u2), d2) }];
          }
          var Dt = { GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
          function Nt(e2, t2, n2, i2, r2, o2, s2) {
            var a2 = { year: 2 === t2.length ? de(ie(t2)) : ie(t2), month: we.indexOf(n2) + 1, day: ie(i2), hour: ie(r2), minute: ie(o2) };
            return s2 && (a2.second = ie(s2)), e2 && (a2.weekday = e2.length > 3 ? Ie.indexOf(e2) + 1 : Ae.indexOf(e2) + 1), a2;
          }
          var Pt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
          function _t(e2) {
            var t2, n2 = e2[1], i2 = e2[2], r2 = e2[3], o2 = e2[4], s2 = e2[5], a2 = e2[6], c2 = e2[7], u2 = e2[8], l2 = e2[9], d2 = e2[10], h2 = e2[11], f2 = Nt(n2, o2, r2, i2, s2, a2, c2);
            return t2 = u2 ? Dt[u2] : l2 ? 0 : fe(d2, h2), [f2, new We(t2)];
          }
          var Mt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Vt = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, jt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
          function qt(e2) {
            var t2 = e2[1], n2 = e2[2], i2 = e2[3];
            return [Nt(t2, e2[4], i2, n2, e2[5], e2[6], e2[7]), We.utcInstance];
          }
          function Ft(e2) {
            var t2 = e2[1], n2 = e2[2], i2 = e2[3], r2 = e2[4], o2 = e2[5], s2 = e2[6];
            return [Nt(t2, e2[7], n2, i2, r2, o2, s2), We.utcInstance];
          }
          var Bt = ft(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, bt), Ht = ft(/(\d{4})-?W(\d\d)(?:-?(\d))?/, bt), zt = ft(/(\d{4})-?(\d{3})/, bt), Jt = ft(Et), Wt = vt(Ct, Tt, Ot), Zt = vt(wt, Tt, Ot), Gt = vt(St, Tt, Ot), Yt = vt(Tt, Ot);
          var $t = vt(Tt);
          var Kt = ft(/(\d{4})-(\d\d)-(\d\d)/, It), Xt = ft(kt), Qt = vt(Ct, Tt, Ot, Ut), en = vt(Tt, Ot, Ut);
          var tn = { weeks: { days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5 }, days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 }, hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 }, minutes: { seconds: 60, milliseconds: 6e4 }, seconds: { milliseconds: 1e3 } }, nn = Object.assign({ years: { quarters: 4, months: 12, weeks: 52, days: 365, hours: 8760, minutes: 525600, seconds: 31536e3, milliseconds: 31536e6 }, quarters: { months: 3, weeks: 13, days: 91, hours: 2184, minutes: 131040, seconds: 7862400, milliseconds: 78624e5 }, months: { weeks: 4, days: 30, hours: 720, minutes: 43200, seconds: 2592e3, milliseconds: 2592e6 } }, tn), rn = Object.assign({ years: { quarters: 4, months: 12, weeks: 52.1775, days: 365.2425, hours: 8765.82, minutes: 525949.2, seconds: 525949.2 * 60, milliseconds: 525949.2 * 60 * 1e3 }, quarters: { months: 3, weeks: 13.044375, days: 91.310625, hours: 2191.455, minutes: 131487.3, seconds: 525949.2 * 60 / 4, milliseconds: 7889237999999999e-6 }, months: { weeks: 30.436875 / 7, days: 30.436875, hours: 730.485, minutes: 43829.1, seconds: 2629746, milliseconds: 2629746e3 } }, tn), on = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], sn = on.slice(0).reverse();
          function an(e2, t2, n2) {
            void 0 === n2 && (n2 = false);
            var i2 = { values: n2 ? t2.values : Object.assign({}, e2.values, t2.values || {}), loc: e2.loc.clone(t2.loc), conversionAccuracy: t2.conversionAccuracy || e2.conversionAccuracy };
            return new un(i2);
          }
          function cn(e2, t2, n2, i2, r2) {
            var o2 = e2[r2][n2], s2 = t2[n2] / o2, a2 = !(Math.sign(s2) === Math.sign(i2[r2])) && 0 !== i2[r2] && Math.abs(s2) <= 1 ? (function(e3) {
              return e3 < 0 ? Math.floor(e3) : Math.ceil(e3);
            })(s2) : Math.trunc(s2);
            i2[r2] += a2, t2[n2] -= a2 * o2;
          }
          var un = (function() {
            function e2(e3) {
              var t3 = "longterm" === e3.conversionAccuracy || false;
              this.values = e3.values, this.loc = e3.loc || ht.create(), this.conversionAccuracy = t3 ? "longterm" : "casual", this.invalid = e3.invalid || null, this.matrix = t3 ? rn : nn, this.isLuxonDuration = true;
            }
            e2.fromMillis = function(t3, n2) {
              return e2.fromObject(Object.assign({ milliseconds: t3 }, n2));
            }, e2.fromObject = function(t3) {
              if (null == t3 || "object" != typeof t3) throw new E("Duration.fromObject: argument expected to be an object, got " + (null === t3 ? "null" : typeof t3));
              return new e2({ values: pe(t3, e2.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone"]), loc: ht.fromObject(t3), conversionAccuracy: t3.conversionAccuracy });
            }, e2.fromISO = function(t3, n2) {
              var i2 = (function(e3) {
                return pt(e3, [Lt, xt]);
              })(t3)[0];
              if (i2) {
                var r2 = Object.assign(i2, n2);
                return e2.fromObject(r2);
              }
              return e2.invalid("unparsable", 'the input "' + t3 + `" can't be parsed as ISO 8601`);
            }, e2.fromISOTime = function(t3, n2) {
              var i2 = (function(e3) {
                return pt(e3, [Rt, $t]);
              })(t3)[0];
              if (i2) {
                var r2 = Object.assign(i2, n2);
                return e2.fromObject(r2);
              }
              return e2.invalid("unparsable", 'the input "' + t3 + `" can't be parsed as ISO 8601`);
            }, e2.invalid = function(t3, n2) {
              if (void 0 === n2 && (n2 = null), !t3) throw new E("need to specify a reason the Duration is invalid");
              var i2 = t3 instanceof _e ? t3 : new _e(t3, n2);
              if (tt.throwOnInvalid) throw new g(i2);
              return new e2({ invalid: i2 });
            }, e2.normalizeUnit = function(e3) {
              var t3 = { year: "years", years: "years", quarter: "quarters", quarters: "quarters", month: "months", months: "months", week: "weeks", weeks: "weeks", day: "days", days: "days", hour: "hours", hours: "hours", minute: "minutes", minutes: "minutes", second: "seconds", seconds: "seconds", millisecond: "milliseconds", milliseconds: "milliseconds" }[e3 ? e3.toLowerCase() : e3];
              if (!t3) throw new y(e3);
              return t3;
            }, e2.isDuration = function(e3) {
              return e3 && e3.isLuxonDuration || false;
            };
            var t2 = e2.prototype;
            return t2.toFormat = function(e3, t3) {
              void 0 === t3 && (t3 = {});
              var n2 = Object.assign({}, t3, { floor: false !== t3.round && false !== t3.floor });
              return this.isValid ? Pe.create(this.loc, n2).formatDurationFromString(this, e3) : "Invalid Duration";
            }, t2.toObject = function(e3) {
              if (void 0 === e3 && (e3 = {}), !this.isValid) return {};
              var t3 = Object.assign({}, this.values);
              return e3.includeConfig && (t3.conversionAccuracy = this.conversionAccuracy, t3.numberingSystem = this.loc.numberingSystem, t3.locale = this.loc.locale), t3;
            }, t2.toISO = function() {
              if (!this.isValid) return null;
              var e3 = "P";
              return 0 !== this.years && (e3 += this.years + "Y"), 0 === this.months && 0 === this.quarters || (e3 += this.months + 3 * this.quarters + "M"), 0 !== this.weeks && (e3 += this.weeks + "W"), 0 !== this.days && (e3 += this.days + "D"), 0 === this.hours && 0 === this.minutes && 0 === this.seconds && 0 === this.milliseconds || (e3 += "T"), 0 !== this.hours && (e3 += this.hours + "H"), 0 !== this.minutes && (e3 += this.minutes + "M"), 0 === this.seconds && 0 === this.milliseconds || (e3 += oe(this.seconds + this.milliseconds / 1e3, 3) + "S"), "P" === e3 && (e3 += "T0S"), e3;
            }, t2.toISOTime = function(e3) {
              if (void 0 === e3 && (e3 = {}), !this.isValid) return null;
              var t3 = this.toMillis();
              if (t3 < 0 || t3 >= 864e5) return null;
              e3 = Object.assign({ suppressMilliseconds: false, suppressSeconds: false, includePrefix: false, format: "extended" }, e3);
              var n2 = this.shiftTo("hours", "minutes", "seconds", "milliseconds"), i2 = "basic" === e3.format ? "hhmm" : "hh:mm";
              e3.suppressSeconds && 0 === n2.seconds && 0 === n2.milliseconds || (i2 += "basic" === e3.format ? "ss" : ":ss", e3.suppressMilliseconds && 0 === n2.milliseconds || (i2 += ".SSS"));
              var r2 = n2.toFormat(i2);
              return e3.includePrefix && (r2 = "T" + r2), r2;
            }, t2.toJSON = function() {
              return this.toISO();
            }, t2.toString = function() {
              return this.toISO();
            }, t2.toMillis = function() {
              return this.as("milliseconds");
            }, t2.valueOf = function() {
              return this.toMillis();
            }, t2.plus = function(e3) {
              if (!this.isValid) return this;
              for (var t3, n2 = ln(e3), i2 = {}, r2 = h(on); !(t3 = r2()).done; ) {
                var o2 = t3.value;
                (ee(n2.values, o2) || ee(this.values, o2)) && (i2[o2] = n2.get(o2) + this.get(o2));
              }
              return an(this, { values: i2 }, true);
            }, t2.minus = function(e3) {
              if (!this.isValid) return this;
              var t3 = ln(e3);
              return this.plus(t3.negate());
            }, t2.mapUnits = function(e3) {
              if (!this.isValid) return this;
              for (var t3 = {}, n2 = 0, i2 = Object.keys(this.values); n2 < i2.length; n2++) {
                var r2 = i2[n2];
                t3[r2] = ve(e3(this.values[r2], r2));
              }
              return an(this, { values: t3 }, true);
            }, t2.get = function(t3) {
              return this[e2.normalizeUnit(t3)];
            }, t2.set = function(t3) {
              return this.isValid ? an(this, { values: Object.assign(this.values, pe(t3, e2.normalizeUnit, [])) }) : this;
            }, t2.reconfigure = function(e3) {
              var t3 = void 0 === e3 ? {} : e3, n2 = t3.locale, i2 = t3.numberingSystem, r2 = t3.conversionAccuracy, o2 = { loc: this.loc.clone({ locale: n2, numberingSystem: i2 }) };
              return r2 && (o2.conversionAccuracy = r2), an(this, o2);
            }, t2.as = function(e3) {
              return this.isValid ? this.shiftTo(e3).get(e3) : NaN;
            }, t2.normalize = function() {
              if (!this.isValid) return this;
              var e3 = this.toObject();
              return (function(e4, t3) {
                sn.reduce((function(n2, i2) {
                  return W(t3[i2]) ? n2 : (n2 && cn(e4, t3, n2, t3, i2), i2);
                }), null);
              })(this.matrix, e3), an(this, { values: e3 }, true);
            }, t2.shiftTo = function() {
              for (var t3 = arguments.length, n2 = new Array(t3), i2 = 0; i2 < t3; i2++) n2[i2] = arguments[i2];
              if (!this.isValid) return this;
              if (0 === n2.length) return this;
              n2 = n2.map((function(t4) {
                return e2.normalizeUnit(t4);
              }));
              for (var r2, o2, s2 = {}, a2 = {}, c2 = this.toObject(), u2 = h(on); !(o2 = u2()).done; ) {
                var l2 = o2.value;
                if (n2.indexOf(l2) >= 0) {
                  r2 = l2;
                  var d2 = 0;
                  for (var f2 in a2) d2 += this.matrix[f2][l2] * a2[f2], a2[f2] = 0;
                  Z(c2[l2]) && (d2 += c2[l2]);
                  var v2 = Math.trunc(d2);
                  for (var p2 in s2[l2] = v2, a2[l2] = d2 - v2, c2) on.indexOf(p2) > on.indexOf(l2) && cn(this.matrix, c2, p2, s2, l2);
                } else Z(c2[l2]) && (a2[l2] = c2[l2]);
              }
              for (var g2 in a2) 0 !== a2[g2] && (s2[r2] += g2 === r2 ? a2[g2] : a2[g2] / this.matrix[r2][g2]);
              return an(this, { values: s2 }, true).normalize();
            }, t2.negate = function() {
              if (!this.isValid) return this;
              for (var e3 = {}, t3 = 0, n2 = Object.keys(this.values); t3 < n2.length; t3++) {
                var i2 = n2[t3];
                e3[i2] = -this.values[i2];
              }
              return an(this, { values: e3 }, true);
            }, t2.equals = function(e3) {
              if (!this.isValid || !e3.isValid) return false;
              if (!this.loc.equals(e3.loc)) return false;
              for (var t3, n2 = h(on); !(t3 = n2()).done; ) {
                var i2 = t3.value;
                if (r2 = this.values[i2], o2 = e3.values[i2], !(void 0 === r2 || 0 === r2 ? void 0 === o2 || 0 === o2 : r2 === o2)) return false;
              }
              var r2, o2;
              return true;
            }, r(e2, [{ key: "locale", get: function() {
              return this.isValid ? this.loc.locale : null;
            } }, { key: "numberingSystem", get: function() {
              return this.isValid ? this.loc.numberingSystem : null;
            } }, { key: "years", get: function() {
              return this.isValid ? this.values.years || 0 : NaN;
            } }, { key: "quarters", get: function() {
              return this.isValid ? this.values.quarters || 0 : NaN;
            } }, { key: "months", get: function() {
              return this.isValid ? this.values.months || 0 : NaN;
            } }, { key: "weeks", get: function() {
              return this.isValid ? this.values.weeks || 0 : NaN;
            } }, { key: "days", get: function() {
              return this.isValid ? this.values.days || 0 : NaN;
            } }, { key: "hours", get: function() {
              return this.isValid ? this.values.hours || 0 : NaN;
            } }, { key: "minutes", get: function() {
              return this.isValid ? this.values.minutes || 0 : NaN;
            } }, { key: "seconds", get: function() {
              return this.isValid ? this.values.seconds || 0 : NaN;
            } }, { key: "milliseconds", get: function() {
              return this.isValid ? this.values.milliseconds || 0 : NaN;
            } }, { key: "isValid", get: function() {
              return null === this.invalid;
            } }, { key: "invalidReason", get: function() {
              return this.invalid ? this.invalid.reason : null;
            } }, { key: "invalidExplanation", get: function() {
              return this.invalid ? this.invalid.explanation : null;
            } }]), e2;
          })();
          function ln(e2) {
            if (Z(e2)) return un.fromMillis(e2);
            if (un.isDuration(e2)) return e2;
            if ("object" == typeof e2) return un.fromObject(e2);
            throw new E("Unknown duration argument " + e2 + " of type " + typeof e2);
          }
          var dn = "Invalid Interval";
          function hn(e2, t2) {
            return e2 && e2.isValid ? t2 && t2.isValid ? t2 < e2 ? fn.invalid("end before start", "The end of an interval must be after its start, but you had start=" + e2.toISO() + " and end=" + t2.toISO()) : null : fn.invalid("missing or invalid end") : fn.invalid("missing or invalid start");
          }
          var fn = (function() {
            function e2(e3) {
              this.s = e3.start, this.e = e3.end, this.invalid = e3.invalid || null, this.isLuxonInterval = true;
            }
            e2.invalid = function(t3, n2) {
              if (void 0 === n2 && (n2 = null), !t3) throw new E("need to specify a reason the Interval is invalid");
              var i2 = t3 instanceof _e ? t3 : new _e(t3, n2);
              if (tt.throwOnInvalid) throw new p(i2);
              return new e2({ invalid: i2 });
            }, e2.fromDateTimes = function(t3, n2) {
              var i2 = di(t3), r2 = di(n2), o2 = hn(i2, r2);
              return null == o2 ? new e2({ start: i2, end: r2 }) : o2;
            }, e2.after = function(t3, n2) {
              var i2 = ln(n2), r2 = di(t3);
              return e2.fromDateTimes(r2, r2.plus(i2));
            }, e2.before = function(t3, n2) {
              var i2 = ln(n2), r2 = di(t3);
              return e2.fromDateTimes(r2.minus(i2), r2);
            }, e2.fromISO = function(t3, n2) {
              var i2 = (t3 || "").split("/", 2), r2 = i2[0], o2 = i2[1];
              if (r2 && o2) {
                var s2, a2, c2, u2;
                try {
                  a2 = (s2 = li.fromISO(r2, n2)).isValid;
                } catch (o3) {
                  a2 = false;
                }
                try {
                  u2 = (c2 = li.fromISO(o2, n2)).isValid;
                } catch (o3) {
                  u2 = false;
                }
                if (a2 && u2) return e2.fromDateTimes(s2, c2);
                if (a2) {
                  var l2 = un.fromISO(o2, n2);
                  if (l2.isValid) return e2.after(s2, l2);
                } else if (u2) {
                  var d2 = un.fromISO(r2, n2);
                  if (d2.isValid) return e2.before(c2, d2);
                }
              }
              return e2.invalid("unparsable", 'the input "' + t3 + `" can't be parsed as ISO 8601`);
            }, e2.isInterval = function(e3) {
              return e3 && e3.isLuxonInterval || false;
            };
            var t2 = e2.prototype;
            return t2.length = function(e3) {
              return void 0 === e3 && (e3 = "milliseconds"), this.isValid ? this.toDuration.apply(this, [e3]).get(e3) : NaN;
            }, t2.count = function(e3) {
              if (void 0 === e3 && (e3 = "milliseconds"), !this.isValid) return NaN;
              var t3 = this.start.startOf(e3), n2 = this.end.startOf(e3);
              return Math.floor(n2.diff(t3, e3).get(e3)) + 1;
            }, t2.hasSame = function(e3) {
              return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e3));
            }, t2.isEmpty = function() {
              return this.s.valueOf() === this.e.valueOf();
            }, t2.isAfter = function(e3) {
              return !!this.isValid && this.s > e3;
            }, t2.isBefore = function(e3) {
              return !!this.isValid && this.e <= e3;
            }, t2.contains = function(e3) {
              return !!this.isValid && (this.s <= e3 && this.e > e3);
            }, t2.set = function(t3) {
              var n2 = void 0 === t3 ? {} : t3, i2 = n2.start, r2 = n2.end;
              return this.isValid ? e2.fromDateTimes(i2 || this.s, r2 || this.e) : this;
            }, t2.splitAt = function() {
              var t3 = this;
              if (!this.isValid) return [];
              for (var n2 = arguments.length, i2 = new Array(n2), r2 = 0; r2 < n2; r2++) i2[r2] = arguments[r2];
              for (var o2 = i2.map(di).filter((function(e3) {
                return t3.contains(e3);
              })).sort(), s2 = [], a2 = this.s, c2 = 0; a2 < this.e; ) {
                var u2 = o2[c2] || this.e, l2 = +u2 > +this.e ? this.e : u2;
                s2.push(e2.fromDateTimes(a2, l2)), a2 = l2, c2 += 1;
              }
              return s2;
            }, t2.splitBy = function(t3) {
              var n2 = ln(t3);
              if (!this.isValid || !n2.isValid || 0 === n2.as("milliseconds")) return [];
              for (var i2, r2 = this.s, o2 = 1, s2 = []; r2 < this.e; ) {
                var a2 = this.start.plus(n2.mapUnits((function(e3) {
                  return e3 * o2;
                })));
                i2 = +a2 > +this.e ? this.e : a2, s2.push(e2.fromDateTimes(r2, i2)), r2 = i2, o2 += 1;
              }
              return s2;
            }, t2.divideEqually = function(e3) {
              return this.isValid ? this.splitBy(this.length() / e3).slice(0, e3) : [];
            }, t2.overlaps = function(e3) {
              return this.e > e3.s && this.s < e3.e;
            }, t2.abutsStart = function(e3) {
              return !!this.isValid && +this.e == +e3.s;
            }, t2.abutsEnd = function(e3) {
              return !!this.isValid && +e3.e == +this.s;
            }, t2.engulfs = function(e3) {
              return !!this.isValid && (this.s <= e3.s && this.e >= e3.e);
            }, t2.equals = function(e3) {
              return !(!this.isValid || !e3.isValid) && (this.s.equals(e3.s) && this.e.equals(e3.e));
            }, t2.intersection = function(t3) {
              if (!this.isValid) return this;
              var n2 = this.s > t3.s ? this.s : t3.s, i2 = this.e < t3.e ? this.e : t3.e;
              return n2 >= i2 ? null : e2.fromDateTimes(n2, i2);
            }, t2.union = function(t3) {
              if (!this.isValid) return this;
              var n2 = this.s < t3.s ? this.s : t3.s, i2 = this.e > t3.e ? this.e : t3.e;
              return e2.fromDateTimes(n2, i2);
            }, e2.merge = function(e3) {
              var t3 = e3.sort((function(e4, t4) {
                return e4.s - t4.s;
              })).reduce((function(e4, t4) {
                var n3 = e4[0], i3 = e4[1];
                return i3 ? i3.overlaps(t4) || i3.abutsStart(t4) ? [n3, i3.union(t4)] : [n3.concat([i3]), t4] : [n3, t4];
              }), [[], null]), n2 = t3[0], i2 = t3[1];
              return i2 && n2.push(i2), n2;
            }, e2.xor = function(t3) {
              for (var n2, i2, r2 = null, o2 = 0, s2 = [], a2 = t3.map((function(e3) {
                return [{ time: e3.s, type: "s" }, { time: e3.e, type: "e" }];
              })), c2 = h((n2 = Array.prototype).concat.apply(n2, a2).sort((function(e3, t4) {
                return e3.time - t4.time;
              }))); !(i2 = c2()).done; ) {
                var u2 = i2.value;
                1 === (o2 += "s" === u2.type ? 1 : -1) ? r2 = u2.time : (r2 && +r2 != +u2.time && s2.push(e2.fromDateTimes(r2, u2.time)), r2 = null);
              }
              return e2.merge(s2);
            }, t2.difference = function() {
              for (var t3 = this, n2 = arguments.length, i2 = new Array(n2), r2 = 0; r2 < n2; r2++) i2[r2] = arguments[r2];
              return e2.xor([this].concat(i2)).map((function(e3) {
                return t3.intersection(e3);
              })).filter((function(e3) {
                return e3 && !e3.isEmpty();
              }));
            }, t2.toString = function() {
              return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : dn;
            }, t2.toISO = function(e3) {
              return this.isValid ? this.s.toISO(e3) + "/" + this.e.toISO(e3) : dn;
            }, t2.toISODate = function() {
              return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : dn;
            }, t2.toISOTime = function(e3) {
              return this.isValid ? this.s.toISOTime(e3) + "/" + this.e.toISOTime(e3) : dn;
            }, t2.toFormat = function(e3, t3) {
              var n2 = (void 0 === t3 ? {} : t3).separator, i2 = void 0 === n2 ? " – " : n2;
              return this.isValid ? "" + this.s.toFormat(e3) + i2 + this.e.toFormat(e3) : dn;
            }, t2.toDuration = function(e3, t3) {
              return this.isValid ? this.e.diff(this.s, e3, t3) : un.invalid(this.invalidReason);
            }, t2.mapEndpoints = function(t3) {
              return e2.fromDateTimes(t3(this.s), t3(this.e));
            }, r(e2, [{ key: "start", get: function() {
              return this.isValid ? this.s : null;
            } }, { key: "end", get: function() {
              return this.isValid ? this.e : null;
            } }, { key: "isValid", get: function() {
              return null === this.invalidReason;
            } }, { key: "invalidReason", get: function() {
              return this.invalid ? this.invalid.reason : null;
            } }, { key: "invalidExplanation", get: function() {
              return this.invalid ? this.invalid.explanation : null;
            } }]), e2;
          })(), vn = (function() {
            function e2() {
            }
            return e2.hasDST = function(e3) {
              void 0 === e3 && (e3 = tt.defaultZone);
              var t2 = li.now().setZone(e3).set({ month: 12 });
              return !e3.universal && t2.offset !== t2.set({ month: 6 }).offset;
            }, e2.isValidIANAZone = function(e3) {
              return ze.isValidSpecifier(e3) && ze.isValidZone(e3);
            }, e2.normalizeZone = function(e3) {
              return Ge(e3, tt.defaultZone);
            }, e2.months = function(e3, t2) {
              void 0 === e3 && (e3 = "long");
              var n2 = void 0 === t2 ? {} : t2, i2 = n2.locale, r2 = void 0 === i2 ? null : i2, o2 = n2.numberingSystem, s2 = void 0 === o2 ? null : o2, a2 = n2.locObj, c2 = void 0 === a2 ? null : a2, u2 = n2.outputCalendar, l2 = void 0 === u2 ? "gregory" : u2;
              return (c2 || ht.create(r2, s2, l2)).months(e3);
            }, e2.monthsFormat = function(e3, t2) {
              void 0 === e3 && (e3 = "long");
              var n2 = void 0 === t2 ? {} : t2, i2 = n2.locale, r2 = void 0 === i2 ? null : i2, o2 = n2.numberingSystem, s2 = void 0 === o2 ? null : o2, a2 = n2.locObj, c2 = void 0 === a2 ? null : a2, u2 = n2.outputCalendar, l2 = void 0 === u2 ? "gregory" : u2;
              return (c2 || ht.create(r2, s2, l2)).months(e3, true);
            }, e2.weekdays = function(e3, t2) {
              void 0 === e3 && (e3 = "long");
              var n2 = void 0 === t2 ? {} : t2, i2 = n2.locale, r2 = void 0 === i2 ? null : i2, o2 = n2.numberingSystem, s2 = void 0 === o2 ? null : o2, a2 = n2.locObj;
              return ((void 0 === a2 ? null : a2) || ht.create(r2, s2, null)).weekdays(e3);
            }, e2.weekdaysFormat = function(e3, t2) {
              void 0 === e3 && (e3 = "long");
              var n2 = void 0 === t2 ? {} : t2, i2 = n2.locale, r2 = void 0 === i2 ? null : i2, o2 = n2.numberingSystem, s2 = void 0 === o2 ? null : o2, a2 = n2.locObj;
              return ((void 0 === a2 ? null : a2) || ht.create(r2, s2, null)).weekdays(e3, true);
            }, e2.meridiems = function(e3) {
              var t2 = (void 0 === e3 ? {} : e3).locale, n2 = void 0 === t2 ? null : t2;
              return ht.create(n2).meridiems();
            }, e2.eras = function(e3, t2) {
              void 0 === e3 && (e3 = "short");
              var n2 = (void 0 === t2 ? {} : t2).locale, i2 = void 0 === n2 ? null : n2;
              return ht.create(i2, null, "gregory").eras(e3);
            }, e2.features = function() {
              var e3 = false, t2 = false, n2 = false, i2 = false;
              if (Y()) {
                e3 = true, t2 = $(), i2 = K();
                try {
                  n2 = "America/New_York" === new Intl.DateTimeFormat("en", { timeZone: "America/New_York" }).resolvedOptions().timeZone;
                } catch (e4) {
                  n2 = false;
                }
              }
              return { intl: e3, intlTokens: t2, zones: n2, relative: i2 };
            }, e2;
          })();
          function pn(e2, t2) {
            var n2 = function(e3) {
              return e3.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf();
            }, i2 = n2(t2) - n2(e2);
            return Math.floor(un.fromMillis(i2).as("days"));
          }
          function gn(e2, t2, n2, i2) {
            var r2 = (function(e3, t3, n3) {
              for (var i3, r3, o3 = {}, s3 = 0, a3 = [["years", function(e4, t4) {
                return t4.year - e4.year;
              }], ["quarters", function(e4, t4) {
                return t4.quarter - e4.quarter;
              }], ["months", function(e4, t4) {
                return t4.month - e4.month + 12 * (t4.year - e4.year);
              }], ["weeks", function(e4, t4) {
                var n4 = pn(e4, t4);
                return (n4 - n4 % 7) / 7;
              }], ["days", pn]]; s3 < a3.length; s3++) {
                var c3 = a3[s3], u3 = c3[0], l3 = c3[1];
                if (n3.indexOf(u3) >= 0) {
                  var d3;
                  i3 = u3;
                  var h3, f3 = l3(e3, t3);
                  if ((r3 = e3.plus(((d3 = {})[u3] = f3, d3))) > t3) e3 = e3.plus(((h3 = {})[u3] = f3 - 1, h3)), f3 -= 1;
                  else e3 = r3;
                  o3[u3] = f3;
                }
              }
              return [e3, o3, r3, i3];
            })(e2, t2, n2), o2 = r2[0], s2 = r2[1], a2 = r2[2], c2 = r2[3], u2 = t2 - o2, l2 = n2.filter((function(e3) {
              return ["hours", "minutes", "seconds", "milliseconds"].indexOf(e3) >= 0;
            }));
            if (0 === l2.length) {
              var d2;
              if (a2 < t2) a2 = o2.plus(((d2 = {})[c2] = 1, d2));
              a2 !== o2 && (s2[c2] = (s2[c2] || 0) + u2 / (a2 - o2));
            }
            var h2, f2 = un.fromObject(Object.assign(s2, i2));
            return l2.length > 0 ? (h2 = un.fromMillis(u2, i2)).shiftTo.apply(h2, l2).plus(f2) : f2;
          }
          var mn = { arab: "[٠-٩]", arabext: "[۰-۹]", bali: "[᭐-᭙]", beng: "[০-৯]", deva: "[०-९]", fullwide: "[０-９]", gujr: "[૦-૯]", hanidec: "[〇|一|二|三|四|五|六|七|八|九]", khmr: "[០-៩]", knda: "[೦-೯]", laoo: "[໐-໙]", limb: "[᥆-᥏]", mlym: "[൦-൯]", mong: "[᠐-᠙]", mymr: "[၀-၉]", orya: "[୦-୯]", tamldec: "[௦-௯]", telu: "[౦-౯]", thai: "[๐-๙]", tibt: "[༠-༩]", latn: "\\d" }, yn = { arab: [1632, 1641], arabext: [1776, 1785], bali: [6992, 7001], beng: [2534, 2543], deva: [2406, 2415], fullwide: [65296, 65303], gujr: [2790, 2799], khmr: [6112, 6121], knda: [3302, 3311], laoo: [3792, 3801], limb: [6470, 6479], mlym: [3430, 3439], mong: [6160, 6169], mymr: [4160, 4169], orya: [2918, 2927], tamldec: [3046, 3055], telu: [3174, 3183], thai: [3664, 3673], tibt: [3872, 3881] }, En = mn.hanidec.replace(/[\[|\]]/g, "").split("");
          function bn(e2, t2) {
            var n2 = e2.numberingSystem;
            return void 0 === t2 && (t2 = ""), new RegExp("" + mn[n2 || "latn"] + t2);
          }
          function wn(e2, t2) {
            return void 0 === t2 && (t2 = function(e3) {
              return e3;
            }), { regex: e2, deser: function(e3) {
              var n2 = e3[0];
              return t2((function(e4) {
                var t3 = parseInt(e4, 10);
                if (isNaN(t3)) {
                  t3 = "";
                  for (var n3 = 0; n3 < e4.length; n3++) {
                    var i2 = e4.charCodeAt(n3);
                    if (-1 !== e4[n3].search(mn.hanidec)) t3 += En.indexOf(e4[n3]);
                    else for (var r2 in yn) {
                      var o2 = yn[r2], s2 = o2[0], a2 = o2[1];
                      i2 >= s2 && i2 <= a2 && (t3 += i2 - s2);
                    }
                  }
                  return parseInt(t3, 10);
                }
                return t3;
              })(n2));
            } };
          }
          var Sn = "( |" + String.fromCharCode(160) + ")", kn = new RegExp(Sn, "g");
          function In(e2) {
            return e2.replace(/\./g, "\\.?").replace(kn, Sn);
          }
          function An(e2) {
            return e2.replace(/\./g, "").replace(kn, " ").toLowerCase();
          }
          function Cn(e2, t2) {
            return null === e2 ? null : { regex: RegExp(e2.map(In).join("|")), deser: function(n2) {
              var i2 = n2[0];
              return e2.findIndex((function(e3) {
                return An(i2) === An(e3);
              })) + t2;
            } };
          }
          function Tn(e2, t2) {
            return { regex: e2, deser: function(e3) {
              return fe(e3[1], e3[2]);
            }, groups: t2 };
          }
          function On(e2) {
            return { regex: e2, deser: function(e3) {
              return e3[0];
            } };
          }
          var Un = { year: { "2-digit": "yy", numeric: "yyyyy" }, month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" }, day: { numeric: "d", "2-digit": "dd" }, weekday: { short: "EEE", long: "EEEE" }, dayperiod: "a", dayPeriod: "a", hour: { numeric: "h", "2-digit": "hh" }, minute: { numeric: "m", "2-digit": "mm" }, second: { numeric: "s", "2-digit": "ss" } };
          var Rn = null;
          function Ln(e2, t2) {
            if (e2.literal) return e2;
            var n2 = Pe.macroTokenToFormatOpts(e2.val);
            if (!n2) return e2;
            var i2 = Pe.create(t2, n2).formatDateTimeParts((Rn || (Rn = li.fromMillis(1555555555555)), Rn)).map((function(e3) {
              return (function(e4, t3, n3) {
                var i3 = e4.type, r2 = e4.value;
                if ("literal" === i3) return { literal: true, val: r2 };
                var o2 = n3[i3], s2 = Un[i3];
                return "object" == typeof s2 && (s2 = s2[o2]), s2 ? { literal: false, val: s2 } : void 0;
              })(e3, 0, n2);
            }));
            return i2.includes(void 0) ? e2 : i2;
          }
          function xn(e2, t2, n2) {
            var i2 = (function(e3, t3) {
              var n3;
              return (n3 = Array.prototype).concat.apply(n3, e3.map((function(e4) {
                return Ln(e4, t3);
              })));
            })(Pe.parseFormat(n2), e2), r2 = i2.map((function(t3) {
              return n3 = t3, r3 = bn(i3 = e2), o3 = bn(i3, "{2}"), s3 = bn(i3, "{3}"), a3 = bn(i3, "{4}"), c3 = bn(i3, "{6}"), u3 = bn(i3, "{1,2}"), l3 = bn(i3, "{1,3}"), d3 = bn(i3, "{1,6}"), h3 = bn(i3, "{1,9}"), f3 = bn(i3, "{2,4}"), v3 = bn(i3, "{4,6}"), p3 = function(e3) {
                return { regex: RegExp((t4 = e3.val, t4.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))), deser: function(e4) {
                  return e4[0];
                }, literal: true };
                var t4;
              }, (g2 = (function(e3) {
                if (n3.literal) return p3(e3);
                switch (e3.val) {
                  case "G":
                    return Cn(i3.eras("short", false), 0);
                  case "GG":
                    return Cn(i3.eras("long", false), 0);
                  case "y":
                    return wn(d3);
                  case "yy":
                    return wn(f3, de);
                  case "yyyy":
                    return wn(a3);
                  case "yyyyy":
                    return wn(v3);
                  case "yyyyyy":
                    return wn(c3);
                  case "M":
                    return wn(u3);
                  case "MM":
                    return wn(o3);
                  case "MMM":
                    return Cn(i3.months("short", true, false), 1);
                  case "MMMM":
                    return Cn(i3.months("long", true, false), 1);
                  case "L":
                    return wn(u3);
                  case "LL":
                    return wn(o3);
                  case "LLL":
                    return Cn(i3.months("short", false, false), 1);
                  case "LLLL":
                    return Cn(i3.months("long", false, false), 1);
                  case "d":
                    return wn(u3);
                  case "dd":
                    return wn(o3);
                  case "o":
                    return wn(l3);
                  case "ooo":
                    return wn(s3);
                  case "HH":
                    return wn(o3);
                  case "H":
                    return wn(u3);
                  case "hh":
                    return wn(o3);
                  case "h":
                    return wn(u3);
                  case "mm":
                    return wn(o3);
                  case "m":
                  case "q":
                    return wn(u3);
                  case "qq":
                    return wn(o3);
                  case "s":
                    return wn(u3);
                  case "ss":
                    return wn(o3);
                  case "S":
                    return wn(l3);
                  case "SSS":
                    return wn(s3);
                  case "u":
                    return On(h3);
                  case "a":
                    return Cn(i3.meridiems(), 0);
                  case "kkkk":
                    return wn(a3);
                  case "kk":
                    return wn(f3, de);
                  case "W":
                    return wn(u3);
                  case "WW":
                    return wn(o3);
                  case "E":
                  case "c":
                    return wn(r3);
                  case "EEE":
                    return Cn(i3.weekdays("short", false, false), 1);
                  case "EEEE":
                    return Cn(i3.weekdays("long", false, false), 1);
                  case "ccc":
                    return Cn(i3.weekdays("short", true, false), 1);
                  case "cccc":
                    return Cn(i3.weekdays("long", true, false), 1);
                  case "Z":
                  case "ZZ":
                    return Tn(new RegExp("([+-]" + u3.source + ")(?::(" + o3.source + "))?"), 2);
                  case "ZZZ":
                    return Tn(new RegExp("([+-]" + u3.source + ")(" + o3.source + ")?"), 2);
                  case "z":
                    return On(/[a-z_+-/]{1,256}?/i);
                  default:
                    return p3(e3);
                }
              })(n3) || { invalidReason: "missing Intl.DateTimeFormat.formatToParts support" }).token = n3, g2;
              var n3, i3, r3, o3, s3, a3, c3, u3, l3, d3, h3, f3, v3, p3, g2;
            })), o2 = r2.find((function(e3) {
              return e3.invalidReason;
            }));
            if (o2) return { input: t2, tokens: i2, invalidReason: o2.invalidReason };
            var s2 = (function(e3) {
              return ["^" + e3.map((function(e4) {
                return e4.regex;
              })).reduce((function(e4, t3) {
                return e4 + "(" + t3.source + ")";
              }), "") + "$", e3];
            })(r2), a2 = s2[0], c2 = s2[1], u2 = RegExp(a2, "i"), l2 = (function(e3, t3, n3) {
              var i3 = e3.match(t3);
              if (i3) {
                var r3 = {}, o3 = 1;
                for (var s3 in n3) if (ee(n3, s3)) {
                  var a3 = n3[s3], c3 = a3.groups ? a3.groups + 1 : 1;
                  !a3.literal && a3.token && (r3[a3.token.val[0]] = a3.deser(i3.slice(o3, o3 + c3))), o3 += c3;
                }
                return [i3, r3];
              }
              return [i3, {}];
            })(t2, u2, c2), d2 = l2[0], h2 = l2[1], f2 = h2 ? (function(e3) {
              var t3;
              return t3 = W(e3.Z) ? W(e3.z) ? null : ze.create(e3.z) : new We(e3.Z), W(e3.q) || (e3.M = 3 * (e3.q - 1) + 1), W(e3.h) || (e3.h < 12 && 1 === e3.a ? e3.h += 12 : 12 === e3.h && 0 === e3.a && (e3.h = 0)), 0 === e3.G && e3.y && (e3.y = -e3.y), W(e3.u) || (e3.S = re(e3.u)), [Object.keys(e3).reduce((function(t4, n3) {
                var i3 = (function(e4) {
                  switch (e4) {
                    case "S":
                      return "millisecond";
                    case "s":
                      return "second";
                    case "m":
                      return "minute";
                    case "h":
                    case "H":
                      return "hour";
                    case "d":
                      return "day";
                    case "o":
                      return "ordinal";
                    case "L":
                    case "M":
                      return "month";
                    case "y":
                      return "year";
                    case "E":
                    case "c":
                      return "weekday";
                    case "W":
                      return "weekNumber";
                    case "k":
                      return "weekYear";
                    case "q":
                      return "quarter";
                    default:
                      return null;
                  }
                })(n3);
                return i3 && (t4[i3] = e3[n3]), t4;
              }), {}), t3];
            })(h2) : [null, null], v2 = f2[0], p2 = f2[1];
            if (ee(h2, "a") && ee(h2, "H")) throw new m("Can't include meridiem when specifying 24-hour format");
            return { input: t2, tokens: i2, regex: u2, rawMatches: d2, matches: h2, result: v2, zone: p2 };
          }
          var Dn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Nn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
          function Pn(e2, t2) {
            return new _e("unit out of range", "you specified " + t2 + " (of type " + typeof t2 + ") as a " + e2 + ", which is invalid");
          }
          function _n(e2, t2, n2) {
            var i2 = new Date(Date.UTC(e2, t2 - 1, n2)).getUTCDay();
            return 0 === i2 ? 7 : i2;
          }
          function Mn(e2, t2, n2) {
            return n2 + (se(e2) ? Nn : Dn)[t2 - 1];
          }
          function Vn(e2, t2) {
            var n2 = se(e2) ? Nn : Dn, i2 = n2.findIndex((function(e3) {
              return e3 < t2;
            }));
            return { month: i2 + 1, day: t2 - n2[i2] };
          }
          function jn(e2) {
            var t2, n2 = e2.year, i2 = e2.month, r2 = e2.day, o2 = Mn(n2, i2, r2), s2 = _n(n2, i2, r2), a2 = Math.floor((o2 - s2 + 10) / 7);
            return a2 < 1 ? a2 = le(t2 = n2 - 1) : a2 > le(n2) ? (t2 = n2 + 1, a2 = 1) : t2 = n2, Object.assign({ weekYear: t2, weekNumber: a2, weekday: s2 }, me(e2));
          }
          function qn(e2) {
            var t2, n2 = e2.weekYear, i2 = e2.weekNumber, r2 = e2.weekday, o2 = _n(n2, 1, 4), s2 = ae(n2), a2 = 7 * i2 + r2 - o2 - 3;
            a2 < 1 ? a2 += ae(t2 = n2 - 1) : a2 > s2 ? (t2 = n2 + 1, a2 -= ae(n2)) : t2 = n2;
            var c2 = Vn(t2, a2), u2 = c2.month, l2 = c2.day;
            return Object.assign({ year: t2, month: u2, day: l2 }, me(e2));
          }
          function Fn(e2) {
            var t2 = e2.year, n2 = Mn(t2, e2.month, e2.day);
            return Object.assign({ year: t2, ordinal: n2 }, me(e2));
          }
          function Bn(e2) {
            var t2 = e2.year, n2 = Vn(t2, e2.ordinal), i2 = n2.month, r2 = n2.day;
            return Object.assign({ year: t2, month: i2, day: r2 }, me(e2));
          }
          function Hn(e2) {
            var t2 = G(e2.year), n2 = te(e2.month, 1, 12), i2 = te(e2.day, 1, ce(e2.year, e2.month));
            return t2 ? n2 ? !i2 && Pn("day", e2.day) : Pn("month", e2.month) : Pn("year", e2.year);
          }
          function zn(e2) {
            var t2 = e2.hour, n2 = e2.minute, i2 = e2.second, r2 = e2.millisecond, o2 = te(t2, 0, 23) || 24 === t2 && 0 === n2 && 0 === i2 && 0 === r2, s2 = te(n2, 0, 59), a2 = te(i2, 0, 59), c2 = te(r2, 0, 999);
            return o2 ? s2 ? a2 ? !c2 && Pn("millisecond", r2) : Pn("second", i2) : Pn("minute", n2) : Pn("hour", t2);
          }
          function Jn(e2) {
            return new _e("unsupported zone", 'the zone "' + e2.name + '" is not supported');
          }
          function Wn(e2) {
            return null === e2.weekData && (e2.weekData = jn(e2.c)), e2.weekData;
          }
          function Zn(e2, t2) {
            var n2 = { ts: e2.ts, zone: e2.zone, c: e2.c, o: e2.o, loc: e2.loc, invalid: e2.invalid };
            return new li(Object.assign({}, n2, t2, { old: n2 }));
          }
          function Gn(e2, t2, n2) {
            var i2 = e2 - 60 * t2 * 1e3, r2 = n2.offset(i2);
            if (t2 === r2) return [i2, t2];
            i2 -= 60 * (r2 - t2) * 1e3;
            var o2 = n2.offset(i2);
            return r2 === o2 ? [i2, r2] : [e2 - 60 * Math.min(r2, o2) * 1e3, Math.max(r2, o2)];
          }
          function Yn(e2, t2) {
            var n2 = new Date(e2 += 60 * t2 * 1e3);
            return { year: n2.getUTCFullYear(), month: n2.getUTCMonth() + 1, day: n2.getUTCDate(), hour: n2.getUTCHours(), minute: n2.getUTCMinutes(), second: n2.getUTCSeconds(), millisecond: n2.getUTCMilliseconds() };
          }
          function $n(e2, t2, n2) {
            return Gn(ue(e2), t2, n2);
          }
          function Kn(e2, t2) {
            var n2 = e2.o, i2 = e2.c.year + Math.trunc(t2.years), r2 = e2.c.month + Math.trunc(t2.months) + 3 * Math.trunc(t2.quarters), o2 = Object.assign({}, e2.c, { year: i2, month: r2, day: Math.min(e2.c.day, ce(i2, r2)) + Math.trunc(t2.days) + 7 * Math.trunc(t2.weeks) }), s2 = un.fromObject({ years: t2.years - Math.trunc(t2.years), quarters: t2.quarters - Math.trunc(t2.quarters), months: t2.months - Math.trunc(t2.months), weeks: t2.weeks - Math.trunc(t2.weeks), days: t2.days - Math.trunc(t2.days), hours: t2.hours, minutes: t2.minutes, seconds: t2.seconds, milliseconds: t2.milliseconds }).as("milliseconds"), a2 = Gn(ue(o2), n2, e2.zone), c2 = a2[0], u2 = a2[1];
            return 0 !== s2 && (c2 += s2, u2 = e2.zone.offset(c2)), { ts: c2, o: u2 };
          }
          function Xn(e2, t2, n2, i2, r2) {
            var o2 = n2.setZone, s2 = n2.zone;
            if (e2 && 0 !== Object.keys(e2).length) {
              var a2 = t2 || s2, c2 = li.fromObject(Object.assign(e2, n2, { zone: a2, setZone: void 0 }));
              return o2 ? c2 : c2.setZone(s2);
            }
            return li.invalid(new _e("unparsable", 'the input "' + r2 + `" can't be parsed as ` + i2));
          }
          function Qn(e2, t2, n2) {
            return void 0 === n2 && (n2 = true), e2.isValid ? Pe.create(ht.create("en-US"), { allowZ: n2, forceSimple: true }).formatDateTimeFromString(e2, t2) : null;
          }
          function ei(e2, t2) {
            var n2 = t2.suppressSeconds, i2 = void 0 !== n2 && n2, r2 = t2.suppressMilliseconds, o2 = void 0 !== r2 && r2, s2 = t2.includeOffset, a2 = t2.includePrefix, c2 = void 0 !== a2 && a2, u2 = t2.includeZone, l2 = void 0 !== u2 && u2, d2 = t2.spaceZone, h2 = void 0 !== d2 && d2, f2 = t2.format, v2 = void 0 === f2 ? "extended" : f2, p2 = "basic" === v2 ? "HHmm" : "HH:mm";
            i2 && 0 === e2.second && 0 === e2.millisecond || (p2 += "basic" === v2 ? "ss" : ":ss", o2 && 0 === e2.millisecond || (p2 += ".SSS")), (l2 || s2) && h2 && (p2 += " "), l2 ? p2 += "z" : s2 && (p2 += "basic" === v2 ? "ZZZ" : "ZZ");
            var g2 = Qn(e2, p2);
            return c2 && (g2 = "T" + g2), g2;
          }
          var ti = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, ni = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, ii = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, ri = ["year", "month", "day", "hour", "minute", "second", "millisecond"], oi = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], si = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
          function ai(e2) {
            var t2 = { year: "year", years: "year", month: "month", months: "month", day: "day", days: "day", hour: "hour", hours: "hour", minute: "minute", minutes: "minute", quarter: "quarter", quarters: "quarter", second: "second", seconds: "second", millisecond: "millisecond", milliseconds: "millisecond", weekday: "weekday", weekdays: "weekday", weeknumber: "weekNumber", weeksnumber: "weekNumber", weeknumbers: "weekNumber", weekyear: "weekYear", weekyears: "weekYear", ordinal: "ordinal" }[e2.toLowerCase()];
            if (!t2) throw new y(e2);
            return t2;
          }
          function ci(e2, t2) {
            for (var n2, i2 = h(ri); !(n2 = i2()).done; ) {
              var r2 = n2.value;
              W(e2[r2]) && (e2[r2] = ti[r2]);
            }
            var o2 = Hn(e2) || zn(e2);
            if (o2) return li.invalid(o2);
            var s2 = tt.now(), a2 = $n(e2, t2.offset(s2), t2), c2 = a2[0], u2 = a2[1];
            return new li({ ts: c2, zone: t2, o: u2 });
          }
          function ui(e2, t2, n2) {
            var i2 = !!W(n2.round) || n2.round, r2 = function(e3, r3) {
              return e3 = oe(e3, i2 || n2.calendary ? 0 : 2, true), t2.loc.clone(n2).relFormatter(n2).format(e3, r3);
            }, o2 = function(i3) {
              return n2.calendary ? t2.hasSame(e2, i3) ? 0 : t2.startOf(i3).diff(e2.startOf(i3), i3).get(i3) : t2.diff(e2, i3).get(i3);
            };
            if (n2.unit) return r2(o2(n2.unit), n2.unit);
            for (var s2, a2 = h(n2.units); !(s2 = a2()).done; ) {
              var c2 = s2.value, u2 = o2(c2);
              if (Math.abs(u2) >= 1) return r2(u2, c2);
            }
            return r2(e2 > t2 ? -0 : 0, n2.units[n2.units.length - 1]);
          }
          var li = (function() {
            function e2(e3) {
              var t3 = e3.zone || tt.defaultZone, n2 = e3.invalid || (Number.isNaN(e3.ts) ? new _e("invalid input") : null) || (t3.isValid ? null : Jn(t3));
              this.ts = W(e3.ts) ? tt.now() : e3.ts;
              var i2 = null, r2 = null;
              if (!n2) if (e3.old && e3.old.ts === this.ts && e3.old.zone.equals(t3)) {
                var o2 = [e3.old.c, e3.old.o];
                i2 = o2[0], r2 = o2[1];
              } else {
                var s2 = t3.offset(this.ts);
                i2 = Yn(this.ts, s2), i2 = (n2 = Number.isNaN(i2.year) ? new _e("invalid input") : null) ? null : i2, r2 = n2 ? null : s2;
              }
              this._zone = t3, this.loc = e3.loc || ht.create(), this.invalid = n2, this.weekData = null, this.c = i2, this.o = r2, this.isLuxonDateTime = true;
            }
            e2.now = function() {
              return new e2({});
            }, e2.local = function(t3, n2, i2, r2, o2, s2, a2) {
              return W(t3) ? e2.now() : ci({ year: t3, month: n2, day: i2, hour: r2, minute: o2, second: s2, millisecond: a2 }, tt.defaultZone);
            }, e2.utc = function(t3, n2, i2, r2, o2, s2, a2) {
              return W(t3) ? new e2({ ts: tt.now(), zone: We.utcInstance }) : ci({ year: t3, month: n2, day: i2, hour: r2, minute: o2, second: s2, millisecond: a2 }, We.utcInstance);
            }, e2.fromJSDate = function(t3, n2) {
              void 0 === n2 && (n2 = {});
              var i2, r2 = (i2 = t3, "[object Date]" === Object.prototype.toString.call(i2) ? t3.valueOf() : NaN);
              if (Number.isNaN(r2)) return e2.invalid("invalid input");
              var o2 = Ge(n2.zone, tt.defaultZone);
              return o2.isValid ? new e2({ ts: r2, zone: o2, loc: ht.fromObject(n2) }) : e2.invalid(Jn(o2));
            }, e2.fromMillis = function(t3, n2) {
              if (void 0 === n2 && (n2 = {}), Z(t3)) return t3 < -864e13 || t3 > 864e13 ? e2.invalid("Timestamp out of range") : new e2({ ts: t3, zone: Ge(n2.zone, tt.defaultZone), loc: ht.fromObject(n2) });
              throw new E("fromMillis requires a numerical input, but received a " + typeof t3 + " with value " + t3);
            }, e2.fromSeconds = function(t3, n2) {
              if (void 0 === n2 && (n2 = {}), Z(t3)) return new e2({ ts: 1e3 * t3, zone: Ge(n2.zone, tt.defaultZone), loc: ht.fromObject(n2) });
              throw new E("fromSeconds requires a numerical input");
            }, e2.fromObject = function(t3) {
              var n2 = Ge(t3.zone, tt.defaultZone);
              if (!n2.isValid) return e2.invalid(Jn(n2));
              var i2 = tt.now(), r2 = n2.offset(i2), o2 = pe(t3, ai, ["zone", "locale", "outputCalendar", "numberingSystem"]), s2 = !W(o2.ordinal), a2 = !W(o2.year), c2 = !W(o2.month) || !W(o2.day), u2 = a2 || c2, l2 = o2.weekYear || o2.weekNumber, d2 = ht.fromObject(t3);
              if ((u2 || s2) && l2) throw new m("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
              if (c2 && s2) throw new m("Can't mix ordinal dates with month/day");
              var f2, v2, p2 = l2 || o2.weekday && !u2, g2 = Yn(i2, r2);
              p2 ? (f2 = oi, v2 = ni, g2 = jn(g2)) : s2 ? (f2 = si, v2 = ii, g2 = Fn(g2)) : (f2 = ri, v2 = ti);
              for (var y2, E2 = false, b2 = h(f2); !(y2 = b2()).done; ) {
                var w2 = y2.value;
                W(o2[w2]) ? o2[w2] = E2 ? v2[w2] : g2[w2] : E2 = true;
              }
              var S2 = (p2 ? (function(e3) {
                var t4 = G(e3.weekYear), n3 = te(e3.weekNumber, 1, le(e3.weekYear)), i3 = te(e3.weekday, 1, 7);
                return t4 ? n3 ? !i3 && Pn("weekday", e3.weekday) : Pn("week", e3.week) : Pn("weekYear", e3.weekYear);
              })(o2) : s2 ? (function(e3) {
                var t4 = G(e3.year), n3 = te(e3.ordinal, 1, ae(e3.year));
                return t4 ? !n3 && Pn("ordinal", e3.ordinal) : Pn("year", e3.year);
              })(o2) : Hn(o2)) || zn(o2);
              if (S2) return e2.invalid(S2);
              var k2 = $n(p2 ? qn(o2) : s2 ? Bn(o2) : o2, r2, n2), I2 = new e2({ ts: k2[0], zone: n2, o: k2[1], loc: d2 });
              return o2.weekday && u2 && t3.weekday !== I2.weekday ? e2.invalid("mismatched weekday", "you can't specify both a weekday of " + o2.weekday + " and a date of " + I2.toISO()) : I2;
            }, e2.fromISO = function(e3, t3) {
              void 0 === t3 && (t3 = {});
              var n2 = (function(e4) {
                return pt(e4, [Bt, Wt], [Ht, Zt], [zt, Gt], [Jt, Yt]);
              })(e3);
              return Xn(n2[0], n2[1], t3, "ISO 8601", e3);
            }, e2.fromRFC2822 = function(e3, t3) {
              void 0 === t3 && (t3 = {});
              var n2 = (function(e4) {
                return pt((function(e5) {
                  return e5.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
                })(e4), [Pt, _t]);
              })(e3);
              return Xn(n2[0], n2[1], t3, "RFC 2822", e3);
            }, e2.fromHTTP = function(e3, t3) {
              void 0 === t3 && (t3 = {});
              var n2 = (function(e4) {
                return pt(e4, [Mt, qt], [Vt, qt], [jt, Ft]);
              })(e3);
              return Xn(n2[0], n2[1], t3, "HTTP", t3);
            }, e2.fromFormat = function(t3, n2, i2) {
              if (void 0 === i2 && (i2 = {}), W(t3) || W(n2)) throw new E("fromFormat requires an input string and a format");
              var r2 = i2, o2 = r2.locale, s2 = void 0 === o2 ? null : o2, a2 = r2.numberingSystem, c2 = void 0 === a2 ? null : a2, u2 = (function(e3, t4, n3) {
                var i3 = xn(e3, t4, n3);
                return [i3.result, i3.zone, i3.invalidReason];
              })(ht.fromOpts({ locale: s2, numberingSystem: c2, defaultToEN: true }), t3, n2), l2 = u2[0], d2 = u2[1], h2 = u2[2];
              return h2 ? e2.invalid(h2) : Xn(l2, d2, i2, "format " + n2, t3);
            }, e2.fromString = function(t3, n2, i2) {
              return void 0 === i2 && (i2 = {}), e2.fromFormat(t3, n2, i2);
            }, e2.fromSQL = function(e3, t3) {
              void 0 === t3 && (t3 = {});
              var n2 = (function(e4) {
                return pt(e4, [Kt, Qt], [Xt, en]);
              })(e3);
              return Xn(n2[0], n2[1], t3, "SQL", e3);
            }, e2.invalid = function(t3, n2) {
              if (void 0 === n2 && (n2 = null), !t3) throw new E("need to specify a reason the DateTime is invalid");
              var i2 = t3 instanceof _e ? t3 : new _e(t3, n2);
              if (tt.throwOnInvalid) throw new v(i2);
              return new e2({ invalid: i2 });
            }, e2.isDateTime = function(e3) {
              return e3 && e3.isLuxonDateTime || false;
            };
            var t2 = e2.prototype;
            return t2.get = function(e3) {
              return this[e3];
            }, t2.resolvedLocaleOpts = function(e3) {
              void 0 === e3 && (e3 = {});
              var t3 = Pe.create(this.loc.clone(e3), e3).resolvedOptions(this);
              return { locale: t3.locale, numberingSystem: t3.numberingSystem, outputCalendar: t3.calendar };
            }, t2.toUTC = function(e3, t3) {
              return void 0 === e3 && (e3 = 0), void 0 === t3 && (t3 = {}), this.setZone(We.instance(e3), t3);
            }, t2.toLocal = function() {
              return this.setZone(tt.defaultZone);
            }, t2.setZone = function(t3, n2) {
              var i2 = void 0 === n2 ? {} : n2, r2 = i2.keepLocalTime, o2 = void 0 !== r2 && r2, s2 = i2.keepCalendarTime, a2 = void 0 !== s2 && s2;
              if ((t3 = Ge(t3, tt.defaultZone)).equals(this.zone)) return this;
              if (t3.isValid) {
                var c2 = this.ts;
                if (o2 || a2) {
                  var u2 = t3.offset(this.ts);
                  c2 = $n(this.toObject(), u2, t3)[0];
                }
                return Zn(this, { ts: c2, zone: t3 });
              }
              return e2.invalid(Jn(t3));
            }, t2.reconfigure = function(e3) {
              var t3 = void 0 === e3 ? {} : e3, n2 = t3.locale, i2 = t3.numberingSystem, r2 = t3.outputCalendar;
              return Zn(this, { loc: this.loc.clone({ locale: n2, numberingSystem: i2, outputCalendar: r2 }) });
            }, t2.setLocale = function(e3) {
              return this.reconfigure({ locale: e3 });
            }, t2.set = function(e3) {
              if (!this.isValid) return this;
              var t3, n2 = pe(e3, ai, []), i2 = !W(n2.weekYear) || !W(n2.weekNumber) || !W(n2.weekday), r2 = !W(n2.ordinal), o2 = !W(n2.year), s2 = !W(n2.month) || !W(n2.day), a2 = o2 || s2, c2 = n2.weekYear || n2.weekNumber;
              if ((a2 || r2) && c2) throw new m("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
              if (s2 && r2) throw new m("Can't mix ordinal dates with month/day");
              i2 ? t3 = qn(Object.assign(jn(this.c), n2)) : W(n2.ordinal) ? (t3 = Object.assign(this.toObject(), n2), W(n2.day) && (t3.day = Math.min(ce(t3.year, t3.month), t3.day))) : t3 = Bn(Object.assign(Fn(this.c), n2));
              var u2 = $n(t3, this.o, this.zone);
              return Zn(this, { ts: u2[0], o: u2[1] });
            }, t2.plus = function(e3) {
              return this.isValid ? Zn(this, Kn(this, ln(e3))) : this;
            }, t2.minus = function(e3) {
              return this.isValid ? Zn(this, Kn(this, ln(e3).negate())) : this;
            }, t2.startOf = function(e3) {
              if (!this.isValid) return this;
              var t3 = {}, n2 = un.normalizeUnit(e3);
              switch (n2) {
                case "years":
                  t3.month = 1;
                case "quarters":
                case "months":
                  t3.day = 1;
                case "weeks":
                case "days":
                  t3.hour = 0;
                case "hours":
                  t3.minute = 0;
                case "minutes":
                  t3.second = 0;
                case "seconds":
                  t3.millisecond = 0;
              }
              if ("weeks" === n2 && (t3.weekday = 1), "quarters" === n2) {
                var i2 = Math.ceil(this.month / 3);
                t3.month = 3 * (i2 - 1) + 1;
              }
              return this.set(t3);
            }, t2.endOf = function(e3) {
              var t3;
              return this.isValid ? this.plus((t3 = {}, t3[e3] = 1, t3)).startOf(e3).minus(1) : this;
            }, t2.toFormat = function(e3, t3) {
              return void 0 === t3 && (t3 = {}), this.isValid ? Pe.create(this.loc.redefaultToEN(t3)).formatDateTimeFromString(this, e3) : "Invalid DateTime";
            }, t2.toLocaleString = function(e3) {
              return void 0 === e3 && (e3 = I), this.isValid ? Pe.create(this.loc.clone(e3), e3).formatDateTime(this) : "Invalid DateTime";
            }, t2.toLocaleParts = function(e3) {
              return void 0 === e3 && (e3 = {}), this.isValid ? Pe.create(this.loc.clone(e3), e3).formatDateTimeParts(this) : [];
            }, t2.toISO = function(e3) {
              return void 0 === e3 && (e3 = {}), this.isValid ? this.toISODate(e3) + "T" + this.toISOTime(e3) : null;
            }, t2.toISODate = function(e3) {
              var t3 = (void 0 === e3 ? {} : e3).format, n2 = "basic" === (void 0 === t3 ? "extended" : t3) ? "yyyyMMdd" : "yyyy-MM-dd";
              return this.year > 9999 && (n2 = "+" + n2), Qn(this, n2);
            }, t2.toISOWeekDate = function() {
              return Qn(this, "kkkk-'W'WW-c");
            }, t2.toISOTime = function(e3) {
              var t3 = void 0 === e3 ? {} : e3, n2 = t3.suppressMilliseconds, i2 = void 0 !== n2 && n2, r2 = t3.suppressSeconds, o2 = void 0 !== r2 && r2, s2 = t3.includeOffset, a2 = void 0 === s2 || s2, c2 = t3.includePrefix, u2 = void 0 !== c2 && c2, l2 = t3.format;
              return ei(this, { suppressSeconds: o2, suppressMilliseconds: i2, includeOffset: a2, includePrefix: u2, format: void 0 === l2 ? "extended" : l2 });
            }, t2.toRFC2822 = function() {
              return Qn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
            }, t2.toHTTP = function() {
              return Qn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
            }, t2.toSQLDate = function() {
              return Qn(this, "yyyy-MM-dd");
            }, t2.toSQLTime = function(e3) {
              var t3 = void 0 === e3 ? {} : e3, n2 = t3.includeOffset, i2 = void 0 === n2 || n2, r2 = t3.includeZone;
              return ei(this, { includeOffset: i2, includeZone: void 0 !== r2 && r2, spaceZone: true });
            }, t2.toSQL = function(e3) {
              return void 0 === e3 && (e3 = {}), this.isValid ? this.toSQLDate() + " " + this.toSQLTime(e3) : null;
            }, t2.toString = function() {
              return this.isValid ? this.toISO() : "Invalid DateTime";
            }, t2.valueOf = function() {
              return this.toMillis();
            }, t2.toMillis = function() {
              return this.isValid ? this.ts : NaN;
            }, t2.toSeconds = function() {
              return this.isValid ? this.ts / 1e3 : NaN;
            }, t2.toJSON = function() {
              return this.toISO();
            }, t2.toBSON = function() {
              return this.toJSDate();
            }, t2.toObject = function(e3) {
              if (void 0 === e3 && (e3 = {}), !this.isValid) return {};
              var t3 = Object.assign({}, this.c);
              return e3.includeConfig && (t3.outputCalendar = this.outputCalendar, t3.numberingSystem = this.loc.numberingSystem, t3.locale = this.loc.locale), t3;
            }, t2.toJSDate = function() {
              return new Date(this.isValid ? this.ts : NaN);
            }, t2.diff = function(e3, t3, n2) {
              if (void 0 === t3 && (t3 = "milliseconds"), void 0 === n2 && (n2 = {}), !this.isValid || !e3.isValid) return un.invalid(this.invalid || e3.invalid, "created by diffing an invalid DateTime");
              var i2, r2 = Object.assign({ locale: this.locale, numberingSystem: this.numberingSystem }, n2), o2 = (i2 = t3, Array.isArray(i2) ? i2 : [i2]).map(un.normalizeUnit), s2 = e3.valueOf() > this.valueOf(), a2 = gn(s2 ? this : e3, s2 ? e3 : this, o2, r2);
              return s2 ? a2.negate() : a2;
            }, t2.diffNow = function(t3, n2) {
              return void 0 === t3 && (t3 = "milliseconds"), void 0 === n2 && (n2 = {}), this.diff(e2.now(), t3, n2);
            }, t2.until = function(e3) {
              return this.isValid ? fn.fromDateTimes(this, e3) : this;
            }, t2.hasSame = function(e3, t3) {
              if (!this.isValid) return false;
              var n2 = e3.valueOf(), i2 = this.setZone(e3.zone, { keepLocalTime: true });
              return i2.startOf(t3) <= n2 && n2 <= i2.endOf(t3);
            }, t2.equals = function(e3) {
              return this.isValid && e3.isValid && this.valueOf() === e3.valueOf() && this.zone.equals(e3.zone) && this.loc.equals(e3.loc);
            }, t2.toRelative = function(t3) {
              if (void 0 === t3 && (t3 = {}), !this.isValid) return null;
              var n2 = t3.base || e2.fromObject({ zone: this.zone }), i2 = t3.padding ? this < n2 ? -t3.padding : t3.padding : 0, r2 = ["years", "months", "days", "hours", "minutes", "seconds"], o2 = t3.unit;
              return Array.isArray(t3.unit) && (r2 = t3.unit, o2 = void 0), ui(n2, this.plus(i2), Object.assign(t3, { numeric: "always", units: r2, unit: o2 }));
            }, t2.toRelativeCalendar = function(t3) {
              return void 0 === t3 && (t3 = {}), this.isValid ? ui(t3.base || e2.fromObject({ zone: this.zone }), this, Object.assign(t3, { numeric: "auto", units: ["years", "months", "days"], calendary: true })) : null;
            }, e2.min = function() {
              for (var t3 = arguments.length, n2 = new Array(t3), i2 = 0; i2 < t3; i2++) n2[i2] = arguments[i2];
              if (!n2.every(e2.isDateTime)) throw new E("min requires all arguments be DateTimes");
              return X(n2, (function(e3) {
                return e3.valueOf();
              }), Math.min);
            }, e2.max = function() {
              for (var t3 = arguments.length, n2 = new Array(t3), i2 = 0; i2 < t3; i2++) n2[i2] = arguments[i2];
              if (!n2.every(e2.isDateTime)) throw new E("max requires all arguments be DateTimes");
              return X(n2, (function(e3) {
                return e3.valueOf();
              }), Math.max);
            }, e2.fromFormatExplain = function(e3, t3, n2) {
              void 0 === n2 && (n2 = {});
              var i2 = n2, r2 = i2.locale, o2 = void 0 === r2 ? null : r2, s2 = i2.numberingSystem, a2 = void 0 === s2 ? null : s2;
              return xn(ht.fromOpts({ locale: o2, numberingSystem: a2, defaultToEN: true }), e3, t3);
            }, e2.fromStringExplain = function(t3, n2, i2) {
              return void 0 === i2 && (i2 = {}), e2.fromFormatExplain(t3, n2, i2);
            }, r(e2, [{ key: "isValid", get: function() {
              return null === this.invalid;
            } }, { key: "invalidReason", get: function() {
              return this.invalid ? this.invalid.reason : null;
            } }, { key: "invalidExplanation", get: function() {
              return this.invalid ? this.invalid.explanation : null;
            } }, { key: "locale", get: function() {
              return this.isValid ? this.loc.locale : null;
            } }, { key: "numberingSystem", get: function() {
              return this.isValid ? this.loc.numberingSystem : null;
            } }, { key: "outputCalendar", get: function() {
              return this.isValid ? this.loc.outputCalendar : null;
            } }, { key: "zone", get: function() {
              return this._zone;
            } }, { key: "zoneName", get: function() {
              return this.isValid ? this.zone.name : null;
            } }, { key: "year", get: function() {
              return this.isValid ? this.c.year : NaN;
            } }, { key: "quarter", get: function() {
              return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
            } }, { key: "month", get: function() {
              return this.isValid ? this.c.month : NaN;
            } }, { key: "day", get: function() {
              return this.isValid ? this.c.day : NaN;
            } }, { key: "hour", get: function() {
              return this.isValid ? this.c.hour : NaN;
            } }, { key: "minute", get: function() {
              return this.isValid ? this.c.minute : NaN;
            } }, { key: "second", get: function() {
              return this.isValid ? this.c.second : NaN;
            } }, { key: "millisecond", get: function() {
              return this.isValid ? this.c.millisecond : NaN;
            } }, { key: "weekYear", get: function() {
              return this.isValid ? Wn(this).weekYear : NaN;
            } }, { key: "weekNumber", get: function() {
              return this.isValid ? Wn(this).weekNumber : NaN;
            } }, { key: "weekday", get: function() {
              return this.isValid ? Wn(this).weekday : NaN;
            } }, { key: "ordinal", get: function() {
              return this.isValid ? Fn(this.c).ordinal : NaN;
            } }, { key: "monthShort", get: function() {
              return this.isValid ? vn.months("short", { locObj: this.loc })[this.month - 1] : null;
            } }, { key: "monthLong", get: function() {
              return this.isValid ? vn.months("long", { locObj: this.loc })[this.month - 1] : null;
            } }, { key: "weekdayShort", get: function() {
              return this.isValid ? vn.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
            } }, { key: "weekdayLong", get: function() {
              return this.isValid ? vn.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
            } }, { key: "offset", get: function() {
              return this.isValid ? +this.o : NaN;
            } }, { key: "offsetNameShort", get: function() {
              return this.isValid ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale }) : null;
            } }, { key: "offsetNameLong", get: function() {
              return this.isValid ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale }) : null;
            } }, { key: "isOffsetFixed", get: function() {
              return this.isValid ? this.zone.universal : null;
            } }, { key: "isInDST", get: function() {
              return !this.isOffsetFixed && (this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset);
            } }, { key: "isInLeapYear", get: function() {
              return se(this.year);
            } }, { key: "daysInMonth", get: function() {
              return ce(this.year, this.month);
            } }, { key: "daysInYear", get: function() {
              return this.isValid ? ae(this.year) : NaN;
            } }, { key: "weeksInWeekYear", get: function() {
              return this.isValid ? le(this.weekYear) : NaN;
            } }], [{ key: "DATE_SHORT", get: function() {
              return I;
            } }, { key: "DATE_MED", get: function() {
              return A;
            } }, { key: "DATE_MED_WITH_WEEKDAY", get: function() {
              return C;
            } }, { key: "DATE_FULL", get: function() {
              return T;
            } }, { key: "DATE_HUGE", get: function() {
              return O;
            } }, { key: "TIME_SIMPLE", get: function() {
              return U;
            } }, { key: "TIME_WITH_SECONDS", get: function() {
              return R;
            } }, { key: "TIME_WITH_SHORT_OFFSET", get: function() {
              return L;
            } }, { key: "TIME_WITH_LONG_OFFSET", get: function() {
              return x;
            } }, { key: "TIME_24_SIMPLE", get: function() {
              return D;
            } }, { key: "TIME_24_WITH_SECONDS", get: function() {
              return N;
            } }, { key: "TIME_24_WITH_SHORT_OFFSET", get: function() {
              return P;
            } }, { key: "TIME_24_WITH_LONG_OFFSET", get: function() {
              return _;
            } }, { key: "DATETIME_SHORT", get: function() {
              return M;
            } }, { key: "DATETIME_SHORT_WITH_SECONDS", get: function() {
              return V;
            } }, { key: "DATETIME_MED", get: function() {
              return j;
            } }, { key: "DATETIME_MED_WITH_SECONDS", get: function() {
              return q;
            } }, { key: "DATETIME_MED_WITH_WEEKDAY", get: function() {
              return F;
            } }, { key: "DATETIME_FULL", get: function() {
              return B;
            } }, { key: "DATETIME_FULL_WITH_SECONDS", get: function() {
              return H;
            } }, { key: "DATETIME_HUGE", get: function() {
              return z;
            } }, { key: "DATETIME_HUGE_WITH_SECONDS", get: function() {
              return J;
            } }]), e2;
          })();
          function di(e2) {
            if (li.isDateTime(e2)) return e2;
            if (e2 && e2.valueOf && Z(e2.valueOf())) return li.fromJSDate(e2);
            if (e2 && "object" == typeof e2) return li.fromObject(e2);
            throw new E("Unknown datetime argument: " + e2 + ", of type " + typeof e2);
          }
          t.DateTime = li, t.Duration = un, t.FixedOffsetZone = We, t.IANAZone = ze, t.Info = vn, t.Interval = fn, t.InvalidZone = Ze, t.LocalZone = je, t.Settings = tt, t.VERSION = "1.28.1", t.Zone = Me;
        }, function(e, t, n) {
          (function(e2) {
            var i = void 0 !== e2 && e2 || "undefined" != typeof self && self || window, r = Function.prototype.apply;
            function o(e3, t2) {
              this._id = e3, this._clearFn = t2;
            }
            t.setTimeout = function() {
              return new o(r.call(setTimeout, i, arguments), clearTimeout);
            }, t.setInterval = function() {
              return new o(r.call(setInterval, i, arguments), clearInterval);
            }, t.clearTimeout = t.clearInterval = function(e3) {
              e3 && e3.close();
            }, o.prototype.unref = o.prototype.ref = function() {
            }, o.prototype.close = function() {
              this._clearFn.call(i, this._id);
            }, t.enroll = function(e3, t2) {
              clearTimeout(e3._idleTimeoutId), e3._idleTimeout = t2;
            }, t.unenroll = function(e3) {
              clearTimeout(e3._idleTimeoutId), e3._idleTimeout = -1;
            }, t._unrefActive = t.active = function(e3) {
              clearTimeout(e3._idleTimeoutId);
              var t2 = e3._idleTimeout;
              t2 >= 0 && (e3._idleTimeoutId = setTimeout((function() {
                e3._onTimeout && e3._onTimeout();
              }), t2));
            }, n(39), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e2 && e2.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e2 && e2.clearImmediate || this && this.clearImmediate;
          }).call(this, n(9));
        }, function(e, t, n) {
          (function(e2, t2) {
            !(function(e3, n2) {
              "use strict";
              if (!e3.setImmediate) {
                var i, r, o, s, a, c = 1, u = {}, l = false, d = e3.document, h = Object.getPrototypeOf && Object.getPrototypeOf(e3);
                h = h && h.setTimeout ? h : e3, "[object process]" === {}.toString.call(e3.process) ? i = function(e4) {
                  t2.nextTick((function() {
                    v(e4);
                  }));
                } : !(function() {
                  if (e3.postMessage && !e3.importScripts) {
                    var t3 = true, n3 = e3.onmessage;
                    return e3.onmessage = function() {
                      t3 = false;
                    }, e3.postMessage("", "*"), e3.onmessage = n3, t3;
                  }
                })() ? e3.MessageChannel ? ((o = new MessageChannel()).port1.onmessage = function(e4) {
                  v(e4.data);
                }, i = function(e4) {
                  o.port2.postMessage(e4);
                }) : d && "onreadystatechange" in d.createElement("script") ? (r = d.documentElement, i = function(e4) {
                  var t3 = d.createElement("script");
                  t3.onreadystatechange = function() {
                    v(e4), t3.onreadystatechange = null, r.removeChild(t3), t3 = null;
                  }, r.appendChild(t3);
                }) : i = function(e4) {
                  setTimeout(v, 0, e4);
                } : (s = "setImmediate$" + Math.random() + "$", a = function(t3) {
                  t3.source === e3 && "string" == typeof t3.data && 0 === t3.data.indexOf(s) && v(+t3.data.slice(s.length));
                }, e3.addEventListener ? e3.addEventListener("message", a, false) : e3.attachEvent("onmessage", a), i = function(t3) {
                  e3.postMessage(s + t3, "*");
                }), h.setImmediate = function(e4) {
                  "function" != typeof e4 && (e4 = new Function("" + e4));
                  for (var t3 = new Array(arguments.length - 1), n3 = 0; n3 < t3.length; n3++) t3[n3] = arguments[n3 + 1];
                  var r2 = { callback: e4, args: t3 };
                  return u[c] = r2, i(c), c++;
                }, h.clearImmediate = f;
              }
              function f(e4) {
                delete u[e4];
              }
              function v(e4) {
                if (l) setTimeout(v, 0, e4);
                else {
                  var t3 = u[e4];
                  if (t3) {
                    l = true;
                    try {
                      !(function(e5) {
                        var t4 = e5.callback, n3 = e5.args;
                        switch (n3.length) {
                          case 0:
                            t4();
                            break;
                          case 1:
                            t4(n3[0]);
                            break;
                          case 2:
                            t4(n3[0], n3[1]);
                            break;
                          case 3:
                            t4(n3[0], n3[1], n3[2]);
                            break;
                          default:
                            t4.apply(void 0, n3);
                        }
                      })(t3);
                    } finally {
                      f(e4), l = false;
                    }
                  }
                }
              }
            })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
          }).call(this, n(9), n(17));
        }, function(e, t, n) {
          "use strict";
          (function(e2) {
            var i = n(41), r = n(42), o = n(43);
            function s() {
              return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function a(e3, t2) {
              if (s() < t2) throw new RangeError("Invalid typed array length");
              return c.TYPED_ARRAY_SUPPORT ? (e3 = new Uint8Array(t2)).__proto__ = c.prototype : (null === e3 && (e3 = new c(t2)), e3.length = t2), e3;
            }
            function c(e3, t2, n2) {
              if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e3, t2, n2);
              if ("number" == typeof e3) {
                if ("string" == typeof t2) throw new Error("If encoding is specified then the first argument must be a string");
                return d(this, e3);
              }
              return u(this, e3, t2, n2);
            }
            function u(e3, t2, n2, i2) {
              if ("number" == typeof t2) throw new TypeError('"value" argument must not be a number');
              return "undefined" != typeof ArrayBuffer && t2 instanceof ArrayBuffer ? (function(e4, t3, n3, i3) {
                if (t3.byteLength, n3 < 0 || t3.byteLength < n3) throw new RangeError("'offset' is out of bounds");
                if (t3.byteLength < n3 + (i3 || 0)) throw new RangeError("'length' is out of bounds");
                t3 = void 0 === n3 && void 0 === i3 ? new Uint8Array(t3) : void 0 === i3 ? new Uint8Array(t3, n3) : new Uint8Array(t3, n3, i3);
                c.TYPED_ARRAY_SUPPORT ? (e4 = t3).__proto__ = c.prototype : e4 = h(e4, t3);
                return e4;
              })(e3, t2, n2, i2) : "string" == typeof t2 ? (function(e4, t3, n3) {
                "string" == typeof n3 && "" !== n3 || (n3 = "utf8");
                if (!c.isEncoding(n3)) throw new TypeError('"encoding" must be a valid string encoding');
                var i3 = 0 | v(t3, n3), r2 = (e4 = a(e4, i3)).write(t3, n3);
                r2 !== i3 && (e4 = e4.slice(0, r2));
                return e4;
              })(e3, t2, n2) : (function(e4, t3) {
                if (c.isBuffer(t3)) {
                  var n3 = 0 | f(t3.length);
                  return 0 === (e4 = a(e4, n3)).length || t3.copy(e4, 0, 0, n3), e4;
                }
                if (t3) {
                  if ("undefined" != typeof ArrayBuffer && t3.buffer instanceof ArrayBuffer || "length" in t3) return "number" != typeof t3.length || (i3 = t3.length) != i3 ? a(e4, 0) : h(e4, t3);
                  if ("Buffer" === t3.type && o(t3.data)) return h(e4, t3.data);
                }
                var i3;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
              })(e3, t2);
            }
            function l(e3) {
              if ("number" != typeof e3) throw new TypeError('"size" argument must be a number');
              if (e3 < 0) throw new RangeError('"size" argument must not be negative');
            }
            function d(e3, t2) {
              if (l(t2), e3 = a(e3, t2 < 0 ? 0 : 0 | f(t2)), !c.TYPED_ARRAY_SUPPORT) for (var n2 = 0; n2 < t2; ++n2) e3[n2] = 0;
              return e3;
            }
            function h(e3, t2) {
              var n2 = t2.length < 0 ? 0 : 0 | f(t2.length);
              e3 = a(e3, n2);
              for (var i2 = 0; i2 < n2; i2 += 1) e3[i2] = 255 & t2[i2];
              return e3;
            }
            function f(e3) {
              if (e3 >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
              return 0 | e3;
            }
            function v(e3, t2) {
              if (c.isBuffer(e3)) return e3.length;
              if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e3) || e3 instanceof ArrayBuffer)) return e3.byteLength;
              "string" != typeof e3 && (e3 = "" + e3);
              var n2 = e3.length;
              if (0 === n2) return 0;
              for (var i2 = false; ; ) switch (t2) {
                case "ascii":
                case "latin1":
                case "binary":
                  return n2;
                case "utf8":
                case "utf-8":
                case void 0:
                  return q(e3).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * n2;
                case "hex":
                  return n2 >>> 1;
                case "base64":
                  return F(e3).length;
                default:
                  if (i2) return q(e3).length;
                  t2 = ("" + t2).toLowerCase(), i2 = true;
              }
            }
            function p(e3, t2, n2) {
              var i2 = false;
              if ((void 0 === t2 || t2 < 0) && (t2 = 0), t2 > this.length) return "";
              if ((void 0 === n2 || n2 > this.length) && (n2 = this.length), n2 <= 0) return "";
              if ((n2 >>>= 0) <= (t2 >>>= 0)) return "";
              for (e3 || (e3 = "utf8"); ; ) switch (e3) {
                case "hex":
                  return U(this, t2, n2);
                case "utf8":
                case "utf-8":
                  return C(this, t2, n2);
                case "ascii":
                  return T(this, t2, n2);
                case "latin1":
                case "binary":
                  return O(this, t2, n2);
                case "base64":
                  return A(this, t2, n2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return R(this, t2, n2);
                default:
                  if (i2) throw new TypeError("Unknown encoding: " + e3);
                  e3 = (e3 + "").toLowerCase(), i2 = true;
              }
            }
            function g(e3, t2, n2) {
              var i2 = e3[t2];
              e3[t2] = e3[n2], e3[n2] = i2;
            }
            function m(e3, t2, n2, i2, r2) {
              if (0 === e3.length) return -1;
              if ("string" == typeof n2 ? (i2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, isNaN(n2) && (n2 = r2 ? 0 : e3.length - 1), n2 < 0 && (n2 = e3.length + n2), n2 >= e3.length) {
                if (r2) return -1;
                n2 = e3.length - 1;
              } else if (n2 < 0) {
                if (!r2) return -1;
                n2 = 0;
              }
              if ("string" == typeof t2 && (t2 = c.from(t2, i2)), c.isBuffer(t2)) return 0 === t2.length ? -1 : y(e3, t2, n2, i2, r2);
              if ("number" == typeof t2) return t2 &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r2 ? Uint8Array.prototype.indexOf.call(e3, t2, n2) : Uint8Array.prototype.lastIndexOf.call(e3, t2, n2) : y(e3, [t2], n2, i2, r2);
              throw new TypeError("val must be string, number or Buffer");
            }
            function y(e3, t2, n2, i2, r2) {
              var o2, s2 = 1, a2 = e3.length, c2 = t2.length;
              if (void 0 !== i2 && ("ucs2" === (i2 = String(i2).toLowerCase()) || "ucs-2" === i2 || "utf16le" === i2 || "utf-16le" === i2)) {
                if (e3.length < 2 || t2.length < 2) return -1;
                s2 = 2, a2 /= 2, c2 /= 2, n2 /= 2;
              }
              function u2(e4, t3) {
                return 1 === s2 ? e4[t3] : e4.readUInt16BE(t3 * s2);
              }
              if (r2) {
                var l2 = -1;
                for (o2 = n2; o2 < a2; o2++) if (u2(e3, o2) === u2(t2, -1 === l2 ? 0 : o2 - l2)) {
                  if (-1 === l2 && (l2 = o2), o2 - l2 + 1 === c2) return l2 * s2;
                } else -1 !== l2 && (o2 -= o2 - l2), l2 = -1;
              } else for (n2 + c2 > a2 && (n2 = a2 - c2), o2 = n2; o2 >= 0; o2--) {
                for (var d2 = true, h2 = 0; h2 < c2; h2++) if (u2(e3, o2 + h2) !== u2(t2, h2)) {
                  d2 = false;
                  break;
                }
                if (d2) return o2;
              }
              return -1;
            }
            function E(e3, t2, n2, i2) {
              n2 = Number(n2) || 0;
              var r2 = e3.length - n2;
              i2 ? (i2 = Number(i2)) > r2 && (i2 = r2) : i2 = r2;
              var o2 = t2.length;
              if (o2 % 2 != 0) throw new TypeError("Invalid hex string");
              i2 > o2 / 2 && (i2 = o2 / 2);
              for (var s2 = 0; s2 < i2; ++s2) {
                var a2 = parseInt(t2.substr(2 * s2, 2), 16);
                if (isNaN(a2)) return s2;
                e3[n2 + s2] = a2;
              }
              return s2;
            }
            function b(e3, t2, n2, i2) {
              return B(q(t2, e3.length - n2), e3, n2, i2);
            }
            function w(e3, t2, n2, i2) {
              return B((function(e4) {
                for (var t3 = [], n3 = 0; n3 < e4.length; ++n3) t3.push(255 & e4.charCodeAt(n3));
                return t3;
              })(t2), e3, n2, i2);
            }
            function S(e3, t2, n2, i2) {
              return w(e3, t2, n2, i2);
            }
            function k(e3, t2, n2, i2) {
              return B(F(t2), e3, n2, i2);
            }
            function I(e3, t2, n2, i2) {
              return B((function(e4, t3) {
                for (var n3, i3, r2, o2 = [], s2 = 0; s2 < e4.length && !((t3 -= 2) < 0); ++s2) n3 = e4.charCodeAt(s2), i3 = n3 >> 8, r2 = n3 % 256, o2.push(r2), o2.push(i3);
                return o2;
              })(t2, e3.length - n2), e3, n2, i2);
            }
            function A(e3, t2, n2) {
              return 0 === t2 && n2 === e3.length ? i.fromByteArray(e3) : i.fromByteArray(e3.slice(t2, n2));
            }
            function C(e3, t2, n2) {
              n2 = Math.min(e3.length, n2);
              for (var i2 = [], r2 = t2; r2 < n2; ) {
                var o2, s2, a2, c2, u2 = e3[r2], l2 = null, d2 = u2 > 239 ? 4 : u2 > 223 ? 3 : u2 > 191 ? 2 : 1;
                if (r2 + d2 <= n2) switch (d2) {
                  case 1:
                    u2 < 128 && (l2 = u2);
                    break;
                  case 2:
                    128 == (192 & (o2 = e3[r2 + 1])) && (c2 = (31 & u2) << 6 | 63 & o2) > 127 && (l2 = c2);
                    break;
                  case 3:
                    o2 = e3[r2 + 1], s2 = e3[r2 + 2], 128 == (192 & o2) && 128 == (192 & s2) && (c2 = (15 & u2) << 12 | (63 & o2) << 6 | 63 & s2) > 2047 && (c2 < 55296 || c2 > 57343) && (l2 = c2);
                    break;
                  case 4:
                    o2 = e3[r2 + 1], s2 = e3[r2 + 2], a2 = e3[r2 + 3], 128 == (192 & o2) && 128 == (192 & s2) && 128 == (192 & a2) && (c2 = (15 & u2) << 18 | (63 & o2) << 12 | (63 & s2) << 6 | 63 & a2) > 65535 && c2 < 1114112 && (l2 = c2);
                }
                null === l2 ? (l2 = 65533, d2 = 1) : l2 > 65535 && (l2 -= 65536, i2.push(l2 >>> 10 & 1023 | 55296), l2 = 56320 | 1023 & l2), i2.push(l2), r2 += d2;
              }
              return (function(e4) {
                var t3 = e4.length;
                if (t3 <= 4096) return String.fromCharCode.apply(String, e4);
                var n3 = "", i3 = 0;
                for (; i3 < t3; ) n3 += String.fromCharCode.apply(String, e4.slice(i3, i3 += 4096));
                return n3;
              })(i2);
            }
            t.Buffer = c, t.SlowBuffer = function(e3) {
              +e3 != e3 && (e3 = 0);
              return c.alloc(+e3);
            }, t.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== e2.TYPED_ARRAY_SUPPORT ? e2.TYPED_ARRAY_SUPPORT : (function() {
              try {
                var e3 = new Uint8Array(1);
                return e3.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                  return 42;
                } }, 42 === e3.foo() && "function" == typeof e3.subarray && 0 === e3.subarray(1, 1).byteLength;
              } catch (e4) {
                return false;
              }
            })(), t.kMaxLength = s(), c.poolSize = 8192, c._augment = function(e3) {
              return e3.__proto__ = c.prototype, e3;
            }, c.from = function(e3, t2, n2) {
              return u(null, e3, t2, n2);
            }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, { value: null, configurable: true })), c.alloc = function(e3, t2, n2) {
              return (function(e4, t3, n3, i2) {
                return l(t3), t3 <= 0 ? a(e4, t3) : void 0 !== n3 ? "string" == typeof i2 ? a(e4, t3).fill(n3, i2) : a(e4, t3).fill(n3) : a(e4, t3);
              })(null, e3, t2, n2);
            }, c.allocUnsafe = function(e3) {
              return d(null, e3);
            }, c.allocUnsafeSlow = function(e3) {
              return d(null, e3);
            }, c.isBuffer = function(e3) {
              return !(null == e3 || !e3._isBuffer);
            }, c.compare = function(e3, t2) {
              if (!c.isBuffer(e3) || !c.isBuffer(t2)) throw new TypeError("Arguments must be Buffers");
              if (e3 === t2) return 0;
              for (var n2 = e3.length, i2 = t2.length, r2 = 0, o2 = Math.min(n2, i2); r2 < o2; ++r2) if (e3[r2] !== t2[r2]) {
                n2 = e3[r2], i2 = t2[r2];
                break;
              }
              return n2 < i2 ? -1 : i2 < n2 ? 1 : 0;
            }, c.isEncoding = function(e3) {
              switch (String(e3).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return true;
                default:
                  return false;
              }
            }, c.concat = function(e3, t2) {
              if (!o(e3)) throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === e3.length) return c.alloc(0);
              var n2;
              if (void 0 === t2) for (t2 = 0, n2 = 0; n2 < e3.length; ++n2) t2 += e3[n2].length;
              var i2 = c.allocUnsafe(t2), r2 = 0;
              for (n2 = 0; n2 < e3.length; ++n2) {
                var s2 = e3[n2];
                if (!c.isBuffer(s2)) throw new TypeError('"list" argument must be an Array of Buffers');
                s2.copy(i2, r2), r2 += s2.length;
              }
              return i2;
            }, c.byteLength = v, c.prototype._isBuffer = true, c.prototype.swap16 = function() {
              var e3 = this.length;
              if (e3 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
              for (var t2 = 0; t2 < e3; t2 += 2) g(this, t2, t2 + 1);
              return this;
            }, c.prototype.swap32 = function() {
              var e3 = this.length;
              if (e3 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
              for (var t2 = 0; t2 < e3; t2 += 4) g(this, t2, t2 + 3), g(this, t2 + 1, t2 + 2);
              return this;
            }, c.prototype.swap64 = function() {
              var e3 = this.length;
              if (e3 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
              for (var t2 = 0; t2 < e3; t2 += 8) g(this, t2, t2 + 7), g(this, t2 + 1, t2 + 6), g(this, t2 + 2, t2 + 5), g(this, t2 + 3, t2 + 4);
              return this;
            }, c.prototype.toString = function() {
              var e3 = 0 | this.length;
              return 0 === e3 ? "" : 0 === arguments.length ? C(this, 0, e3) : p.apply(this, arguments);
            }, c.prototype.equals = function(e3) {
              if (!c.isBuffer(e3)) throw new TypeError("Argument must be a Buffer");
              return this === e3 || 0 === c.compare(this, e3);
            }, c.prototype.inspect = function() {
              var e3 = "", n2 = t.INSPECT_MAX_BYTES;
              return this.length > 0 && (e3 = this.toString("hex", 0, n2).match(/.{2}/g).join(" "), this.length > n2 && (e3 += " ... ")), "<Buffer " + e3 + ">";
            }, c.prototype.compare = function(e3, t2, n2, i2, r2) {
              if (!c.isBuffer(e3)) throw new TypeError("Argument must be a Buffer");
              if (void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = e3 ? e3.length : 0), void 0 === i2 && (i2 = 0), void 0 === r2 && (r2 = this.length), t2 < 0 || n2 > e3.length || i2 < 0 || r2 > this.length) throw new RangeError("out of range index");
              if (i2 >= r2 && t2 >= n2) return 0;
              if (i2 >= r2) return -1;
              if (t2 >= n2) return 1;
              if (this === e3) return 0;
              for (var o2 = (r2 >>>= 0) - (i2 >>>= 0), s2 = (n2 >>>= 0) - (t2 >>>= 0), a2 = Math.min(o2, s2), u2 = this.slice(i2, r2), l2 = e3.slice(t2, n2), d2 = 0; d2 < a2; ++d2) if (u2[d2] !== l2[d2]) {
                o2 = u2[d2], s2 = l2[d2];
                break;
              }
              return o2 < s2 ? -1 : s2 < o2 ? 1 : 0;
            }, c.prototype.includes = function(e3, t2, n2) {
              return -1 !== this.indexOf(e3, t2, n2);
            }, c.prototype.indexOf = function(e3, t2, n2) {
              return m(this, e3, t2, n2, true);
            }, c.prototype.lastIndexOf = function(e3, t2, n2) {
              return m(this, e3, t2, n2, false);
            }, c.prototype.write = function(e3, t2, n2, i2) {
              if (void 0 === t2) i2 = "utf8", n2 = this.length, t2 = 0;
              else if (void 0 === n2 && "string" == typeof t2) i2 = t2, n2 = this.length, t2 = 0;
              else {
                if (!isFinite(t2)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t2 |= 0, isFinite(n2) ? (n2 |= 0, void 0 === i2 && (i2 = "utf8")) : (i2 = n2, n2 = void 0);
              }
              var r2 = this.length - t2;
              if ((void 0 === n2 || n2 > r2) && (n2 = r2), e3.length > 0 && (n2 < 0 || t2 < 0) || t2 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
              i2 || (i2 = "utf8");
              for (var o2 = false; ; ) switch (i2) {
                case "hex":
                  return E(this, e3, t2, n2);
                case "utf8":
                case "utf-8":
                  return b(this, e3, t2, n2);
                case "ascii":
                  return w(this, e3, t2, n2);
                case "latin1":
                case "binary":
                  return S(this, e3, t2, n2);
                case "base64":
                  return k(this, e3, t2, n2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return I(this, e3, t2, n2);
                default:
                  if (o2) throw new TypeError("Unknown encoding: " + i2);
                  i2 = ("" + i2).toLowerCase(), o2 = true;
              }
            }, c.prototype.toJSON = function() {
              return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
            };
            function T(e3, t2, n2) {
              var i2 = "";
              n2 = Math.min(e3.length, n2);
              for (var r2 = t2; r2 < n2; ++r2) i2 += String.fromCharCode(127 & e3[r2]);
              return i2;
            }
            function O(e3, t2, n2) {
              var i2 = "";
              n2 = Math.min(e3.length, n2);
              for (var r2 = t2; r2 < n2; ++r2) i2 += String.fromCharCode(e3[r2]);
              return i2;
            }
            function U(e3, t2, n2) {
              var i2 = e3.length;
              (!t2 || t2 < 0) && (t2 = 0), (!n2 || n2 < 0 || n2 > i2) && (n2 = i2);
              for (var r2 = "", o2 = t2; o2 < n2; ++o2) r2 += j(e3[o2]);
              return r2;
            }
            function R(e3, t2, n2) {
              for (var i2 = e3.slice(t2, n2), r2 = "", o2 = 0; o2 < i2.length; o2 += 2) r2 += String.fromCharCode(i2[o2] + 256 * i2[o2 + 1]);
              return r2;
            }
            function L(e3, t2, n2) {
              if (e3 % 1 != 0 || e3 < 0) throw new RangeError("offset is not uint");
              if (e3 + t2 > n2) throw new RangeError("Trying to access beyond buffer length");
            }
            function x(e3, t2, n2, i2, r2, o2) {
              if (!c.isBuffer(e3)) throw new TypeError('"buffer" argument must be a Buffer instance');
              if (t2 > r2 || t2 < o2) throw new RangeError('"value" argument is out of bounds');
              if (n2 + i2 > e3.length) throw new RangeError("Index out of range");
            }
            function D(e3, t2, n2, i2) {
              t2 < 0 && (t2 = 65535 + t2 + 1);
              for (var r2 = 0, o2 = Math.min(e3.length - n2, 2); r2 < o2; ++r2) e3[n2 + r2] = (t2 & 255 << 8 * (i2 ? r2 : 1 - r2)) >>> 8 * (i2 ? r2 : 1 - r2);
            }
            function N(e3, t2, n2, i2) {
              t2 < 0 && (t2 = 4294967295 + t2 + 1);
              for (var r2 = 0, o2 = Math.min(e3.length - n2, 4); r2 < o2; ++r2) e3[n2 + r2] = t2 >>> 8 * (i2 ? r2 : 3 - r2) & 255;
            }
            function P(e3, t2, n2, i2, r2, o2) {
              if (n2 + i2 > e3.length) throw new RangeError("Index out of range");
              if (n2 < 0) throw new RangeError("Index out of range");
            }
            function _(e3, t2, n2, i2, o2) {
              return o2 || P(e3, 0, n2, 4), r.write(e3, t2, n2, i2, 23, 4), n2 + 4;
            }
            function M(e3, t2, n2, i2, o2) {
              return o2 || P(e3, 0, n2, 8), r.write(e3, t2, n2, i2, 52, 8), n2 + 8;
            }
            c.prototype.slice = function(e3, t2) {
              var n2, i2 = this.length;
              if ((e3 = ~~e3) < 0 ? (e3 += i2) < 0 && (e3 = 0) : e3 > i2 && (e3 = i2), (t2 = void 0 === t2 ? i2 : ~~t2) < 0 ? (t2 += i2) < 0 && (t2 = 0) : t2 > i2 && (t2 = i2), t2 < e3 && (t2 = e3), c.TYPED_ARRAY_SUPPORT) (n2 = this.subarray(e3, t2)).__proto__ = c.prototype;
              else {
                var r2 = t2 - e3;
                n2 = new c(r2, void 0);
                for (var o2 = 0; o2 < r2; ++o2) n2[o2] = this[o2 + e3];
              }
              return n2;
            }, c.prototype.readUIntLE = function(e3, t2, n2) {
              e3 |= 0, t2 |= 0, n2 || L(e3, t2, this.length);
              for (var i2 = this[e3], r2 = 1, o2 = 0; ++o2 < t2 && (r2 *= 256); ) i2 += this[e3 + o2] * r2;
              return i2;
            }, c.prototype.readUIntBE = function(e3, t2, n2) {
              e3 |= 0, t2 |= 0, n2 || L(e3, t2, this.length);
              for (var i2 = this[e3 + --t2], r2 = 1; t2 > 0 && (r2 *= 256); ) i2 += this[e3 + --t2] * r2;
              return i2;
            }, c.prototype.readUInt8 = function(e3, t2) {
              return t2 || L(e3, 1, this.length), this[e3];
            }, c.prototype.readUInt16LE = function(e3, t2) {
              return t2 || L(e3, 2, this.length), this[e3] | this[e3 + 1] << 8;
            }, c.prototype.readUInt16BE = function(e3, t2) {
              return t2 || L(e3, 2, this.length), this[e3] << 8 | this[e3 + 1];
            }, c.prototype.readUInt32LE = function(e3, t2) {
              return t2 || L(e3, 4, this.length), (this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16) + 16777216 * this[e3 + 3];
            }, c.prototype.readUInt32BE = function(e3, t2) {
              return t2 || L(e3, 4, this.length), 16777216 * this[e3] + (this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3]);
            }, c.prototype.readIntLE = function(e3, t2, n2) {
              e3 |= 0, t2 |= 0, n2 || L(e3, t2, this.length);
              for (var i2 = this[e3], r2 = 1, o2 = 0; ++o2 < t2 && (r2 *= 256); ) i2 += this[e3 + o2] * r2;
              return i2 >= (r2 *= 128) && (i2 -= Math.pow(2, 8 * t2)), i2;
            }, c.prototype.readIntBE = function(e3, t2, n2) {
              e3 |= 0, t2 |= 0, n2 || L(e3, t2, this.length);
              for (var i2 = t2, r2 = 1, o2 = this[e3 + --i2]; i2 > 0 && (r2 *= 256); ) o2 += this[e3 + --i2] * r2;
              return o2 >= (r2 *= 128) && (o2 -= Math.pow(2, 8 * t2)), o2;
            }, c.prototype.readInt8 = function(e3, t2) {
              return t2 || L(e3, 1, this.length), 128 & this[e3] ? -1 * (255 - this[e3] + 1) : this[e3];
            }, c.prototype.readInt16LE = function(e3, t2) {
              t2 || L(e3, 2, this.length);
              var n2 = this[e3] | this[e3 + 1] << 8;
              return 32768 & n2 ? 4294901760 | n2 : n2;
            }, c.prototype.readInt16BE = function(e3, t2) {
              t2 || L(e3, 2, this.length);
              var n2 = this[e3 + 1] | this[e3] << 8;
              return 32768 & n2 ? 4294901760 | n2 : n2;
            }, c.prototype.readInt32LE = function(e3, t2) {
              return t2 || L(e3, 4, this.length), this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16 | this[e3 + 3] << 24;
            }, c.prototype.readInt32BE = function(e3, t2) {
              return t2 || L(e3, 4, this.length), this[e3] << 24 | this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3];
            }, c.prototype.readFloatLE = function(e3, t2) {
              return t2 || L(e3, 4, this.length), r.read(this, e3, true, 23, 4);
            }, c.prototype.readFloatBE = function(e3, t2) {
              return t2 || L(e3, 4, this.length), r.read(this, e3, false, 23, 4);
            }, c.prototype.readDoubleLE = function(e3, t2) {
              return t2 || L(e3, 8, this.length), r.read(this, e3, true, 52, 8);
            }, c.prototype.readDoubleBE = function(e3, t2) {
              return t2 || L(e3, 8, this.length), r.read(this, e3, false, 52, 8);
            }, c.prototype.writeUIntLE = function(e3, t2, n2, i2) {
              (e3 = +e3, t2 |= 0, n2 |= 0, i2) || x(this, e3, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
              var r2 = 1, o2 = 0;
              for (this[t2] = 255 & e3; ++o2 < n2 && (r2 *= 256); ) this[t2 + o2] = e3 / r2 & 255;
              return t2 + n2;
            }, c.prototype.writeUIntBE = function(e3, t2, n2, i2) {
              (e3 = +e3, t2 |= 0, n2 |= 0, i2) || x(this, e3, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
              var r2 = n2 - 1, o2 = 1;
              for (this[t2 + r2] = 255 & e3; --r2 >= 0 && (o2 *= 256); ) this[t2 + r2] = e3 / o2 & 255;
              return t2 + n2;
            }, c.prototype.writeUInt8 = function(e3, t2, n2) {
              return e3 = +e3, t2 |= 0, n2 || x(this, e3, t2, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e3 = Math.floor(e3)), this[t2] = 255 & e3, t2 + 1;
            }, c.prototype.writeUInt16LE = function(e3, t2, n2) {
              return e3 = +e3, t2 |= 0, n2 || x(this, e3, t2, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e3, this[t2 + 1] = e3 >>> 8) : D(this, e3, t2, true), t2 + 2;
            }, c.prototype.writeUInt16BE = function(e3, t2, n2) {
              return e3 = +e3, t2 |= 0, n2 || x(this, e3, t2, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 8, this[t2 + 1] = 255 & e3) : D(this, e3, t2, false), t2 + 2;
            }, c.prototype.writeUInt32LE = function(e3, t2, n2) {
              return e3 = +e3, t2 |= 0, n2 || x(this, e3, t2, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t2 + 3] = e3 >>> 24, this[t2 + 2] = e3 >>> 16, this[t2 + 1] = e3 >>> 8, this[t2] = 255 & e3) : N(this, e3, t2, true), t2 + 4;
            }, c.prototype.writeUInt32BE = function(e3, t2, n2) {
              return e3 = +e3, t2 |= 0, n2 || x(this, e3, t2, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 24, this[t2 + 1] = e3 >>> 16, this[t2 + 2] = e3 >>> 8, this[t2 + 3] = 255 & e3) : N(this, e3, t2, false), t2 + 4;
            }, c.prototype.writeIntLE = function(e3, t2, n2, i2) {
              if (e3 = +e3, t2 |= 0, !i2) {
                var r2 = Math.pow(2, 8 * n2 - 1);
                x(this, e3, t2, n2, r2 - 1, -r2);
              }
              var o2 = 0, s2 = 1, a2 = 0;
              for (this[t2] = 255 & e3; ++o2 < n2 && (s2 *= 256); ) e3 < 0 && 0 === a2 && 0 !== this[t2 + o2 - 1] && (a2 = 1), this[t2 + o2] = (e3 / s2 >> 0) - a2 & 255;
              return t2 + n2;
            }, c.prototype.writeIntBE = function(e3, t2, n2, i2) {
              if (e3 = +e3, t2 |= 0, !i2) {
                var r2 = Math.pow(2, 8 * n2 - 1);
                x(this, e3, t2, n2, r2 - 1, -r2);
              }
              var o2 = n2 - 1, s2 = 1, a2 = 0;
              for (this[t2 + o2] = 255 & e3; --o2 >= 0 && (s2 *= 256); ) e3 < 0 && 0 === a2 && 0 !== this[t2 + o2 + 1] && (a2 = 1), this[t2 + o2] = (e3 / s2 >> 0) - a2 & 255;
              return t2 + n2;
            }, c.prototype.writeInt8 = function(e3, t2, n2) {
              return e3 = +e3, t2 |= 0, n2 || x(this, e3, t2, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e3 = Math.floor(e3)), e3 < 0 && (e3 = 255 + e3 + 1), this[t2] = 255 & e3, t2 + 1;
            }, c.prototype.writeInt16LE = function(e3, t2, n2) {
              return e3 = +e3, t2 |= 0, n2 || x(this, e3, t2, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e3, this[t2 + 1] = e3 >>> 8) : D(this, e3, t2, true), t2 + 2;
            }, c.prototype.writeInt16BE = function(e3, t2, n2) {
              return e3 = +e3, t2 |= 0, n2 || x(this, e3, t2, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 8, this[t2 + 1] = 255 & e3) : D(this, e3, t2, false), t2 + 2;
            }, c.prototype.writeInt32LE = function(e3, t2, n2) {
              return e3 = +e3, t2 |= 0, n2 || x(this, e3, t2, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e3, this[t2 + 1] = e3 >>> 8, this[t2 + 2] = e3 >>> 16, this[t2 + 3] = e3 >>> 24) : N(this, e3, t2, true), t2 + 4;
            }, c.prototype.writeInt32BE = function(e3, t2, n2) {
              return e3 = +e3, t2 |= 0, n2 || x(this, e3, t2, 4, 2147483647, -2147483648), e3 < 0 && (e3 = 4294967295 + e3 + 1), c.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 24, this[t2 + 1] = e3 >>> 16, this[t2 + 2] = e3 >>> 8, this[t2 + 3] = 255 & e3) : N(this, e3, t2, false), t2 + 4;
            }, c.prototype.writeFloatLE = function(e3, t2, n2) {
              return _(this, e3, t2, true, n2);
            }, c.prototype.writeFloatBE = function(e3, t2, n2) {
              return _(this, e3, t2, false, n2);
            }, c.prototype.writeDoubleLE = function(e3, t2, n2) {
              return M(this, e3, t2, true, n2);
            }, c.prototype.writeDoubleBE = function(e3, t2, n2) {
              return M(this, e3, t2, false, n2);
            }, c.prototype.copy = function(e3, t2, n2, i2) {
              if (n2 || (n2 = 0), i2 || 0 === i2 || (i2 = this.length), t2 >= e3.length && (t2 = e3.length), t2 || (t2 = 0), i2 > 0 && i2 < n2 && (i2 = n2), i2 === n2) return 0;
              if (0 === e3.length || 0 === this.length) return 0;
              if (t2 < 0) throw new RangeError("targetStart out of bounds");
              if (n2 < 0 || n2 >= this.length) throw new RangeError("sourceStart out of bounds");
              if (i2 < 0) throw new RangeError("sourceEnd out of bounds");
              i2 > this.length && (i2 = this.length), e3.length - t2 < i2 - n2 && (i2 = e3.length - t2 + n2);
              var r2, o2 = i2 - n2;
              if (this === e3 && n2 < t2 && t2 < i2) for (r2 = o2 - 1; r2 >= 0; --r2) e3[r2 + t2] = this[r2 + n2];
              else if (o2 < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (r2 = 0; r2 < o2; ++r2) e3[r2 + t2] = this[r2 + n2];
              else Uint8Array.prototype.set.call(e3, this.subarray(n2, n2 + o2), t2);
              return o2;
            }, c.prototype.fill = function(e3, t2, n2, i2) {
              if ("string" == typeof e3) {
                if ("string" == typeof t2 ? (i2 = t2, t2 = 0, n2 = this.length) : "string" == typeof n2 && (i2 = n2, n2 = this.length), 1 === e3.length) {
                  var r2 = e3.charCodeAt(0);
                  r2 < 256 && (e3 = r2);
                }
                if (void 0 !== i2 && "string" != typeof i2) throw new TypeError("encoding must be a string");
                if ("string" == typeof i2 && !c.isEncoding(i2)) throw new TypeError("Unknown encoding: " + i2);
              } else "number" == typeof e3 && (e3 &= 255);
              if (t2 < 0 || this.length < t2 || this.length < n2) throw new RangeError("Out of range index");
              if (n2 <= t2) return this;
              var o2;
              if (t2 >>>= 0, n2 = void 0 === n2 ? this.length : n2 >>> 0, e3 || (e3 = 0), "number" == typeof e3) for (o2 = t2; o2 < n2; ++o2) this[o2] = e3;
              else {
                var s2 = c.isBuffer(e3) ? e3 : q(new c(e3, i2).toString()), a2 = s2.length;
                for (o2 = 0; o2 < n2 - t2; ++o2) this[o2 + t2] = s2[o2 % a2];
              }
              return this;
            };
            var V = /[^+\/0-9A-Za-z-_]/g;
            function j(e3) {
              return e3 < 16 ? "0" + e3.toString(16) : e3.toString(16);
            }
            function q(e3, t2) {
              var n2;
              t2 = t2 || 1 / 0;
              for (var i2 = e3.length, r2 = null, o2 = [], s2 = 0; s2 < i2; ++s2) {
                if ((n2 = e3.charCodeAt(s2)) > 55295 && n2 < 57344) {
                  if (!r2) {
                    if (n2 > 56319) {
                      (t2 -= 3) > -1 && o2.push(239, 191, 189);
                      continue;
                    }
                    if (s2 + 1 === i2) {
                      (t2 -= 3) > -1 && o2.push(239, 191, 189);
                      continue;
                    }
                    r2 = n2;
                    continue;
                  }
                  if (n2 < 56320) {
                    (t2 -= 3) > -1 && o2.push(239, 191, 189), r2 = n2;
                    continue;
                  }
                  n2 = 65536 + (r2 - 55296 << 10 | n2 - 56320);
                } else r2 && (t2 -= 3) > -1 && o2.push(239, 191, 189);
                if (r2 = null, n2 < 128) {
                  if ((t2 -= 1) < 0) break;
                  o2.push(n2);
                } else if (n2 < 2048) {
                  if ((t2 -= 2) < 0) break;
                  o2.push(n2 >> 6 | 192, 63 & n2 | 128);
                } else if (n2 < 65536) {
                  if ((t2 -= 3) < 0) break;
                  o2.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, 63 & n2 | 128);
                } else {
                  if (!(n2 < 1114112)) throw new Error("Invalid code point");
                  if ((t2 -= 4) < 0) break;
                  o2.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, 63 & n2 | 128);
                }
              }
              return o2;
            }
            function F(e3) {
              return i.toByteArray((function(e4) {
                if ((e4 = (function(e5) {
                  return e5.trim ? e5.trim() : e5.replace(/^\s+|\s+$/g, "");
                })(e4).replace(V, "")).length < 2) return "";
                for (; e4.length % 4 != 0; ) e4 += "=";
                return e4;
              })(e3));
            }
            function B(e3, t2, n2, i2) {
              for (var r2 = 0; r2 < i2 && !(r2 + n2 >= t2.length || r2 >= e3.length); ++r2) t2[r2 + n2] = e3[r2];
              return r2;
            }
          }).call(this, n(9));
        }, function(e, t, n) {
          "use strict";
          t.byteLength = function(e2) {
            var t2 = u(e2), n2 = t2[0], i2 = t2[1];
            return 3 * (n2 + i2) / 4 - i2;
          }, t.toByteArray = function(e2) {
            var t2, n2, i2 = u(e2), s2 = i2[0], a2 = i2[1], c2 = new o((function(e3, t3, n3) {
              return 3 * (t3 + n3) / 4 - n3;
            })(0, s2, a2)), l2 = 0, d = a2 > 0 ? s2 - 4 : s2;
            for (n2 = 0; n2 < d; n2 += 4) t2 = r[e2.charCodeAt(n2)] << 18 | r[e2.charCodeAt(n2 + 1)] << 12 | r[e2.charCodeAt(n2 + 2)] << 6 | r[e2.charCodeAt(n2 + 3)], c2[l2++] = t2 >> 16 & 255, c2[l2++] = t2 >> 8 & 255, c2[l2++] = 255 & t2;
            2 === a2 && (t2 = r[e2.charCodeAt(n2)] << 2 | r[e2.charCodeAt(n2 + 1)] >> 4, c2[l2++] = 255 & t2);
            1 === a2 && (t2 = r[e2.charCodeAt(n2)] << 10 | r[e2.charCodeAt(n2 + 1)] << 4 | r[e2.charCodeAt(n2 + 2)] >> 2, c2[l2++] = t2 >> 8 & 255, c2[l2++] = 255 & t2);
            return c2;
          }, t.fromByteArray = function(e2) {
            for (var t2, n2 = e2.length, r2 = n2 % 3, o2 = [], s2 = 0, a2 = n2 - r2; s2 < a2; s2 += 16383) o2.push(l(e2, s2, s2 + 16383 > a2 ? a2 : s2 + 16383));
            1 === r2 ? (t2 = e2[n2 - 1], o2.push(i[t2 >> 2] + i[t2 << 4 & 63] + "==")) : 2 === r2 && (t2 = (e2[n2 - 2] << 8) + e2[n2 - 1], o2.push(i[t2 >> 10] + i[t2 >> 4 & 63] + i[t2 << 2 & 63] + "="));
            return o2.join("");
          };
          for (var i = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) i[a] = s[a], r[s.charCodeAt(a)] = a;
          function u(e2) {
            var t2 = e2.length;
            if (t2 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n2 = e2.indexOf("=");
            return -1 === n2 && (n2 = t2), [n2, n2 === t2 ? 0 : 4 - n2 % 4];
          }
          function l(e2, t2, n2) {
            for (var r2, o2, s2 = [], a2 = t2; a2 < n2; a2 += 3) r2 = (e2[a2] << 16 & 16711680) + (e2[a2 + 1] << 8 & 65280) + (255 & e2[a2 + 2]), s2.push(i[(o2 = r2) >> 18 & 63] + i[o2 >> 12 & 63] + i[o2 >> 6 & 63] + i[63 & o2]);
            return s2.join("");
          }
          r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63;
        }, function(e, t) {
          t.read = function(e2, t2, n, i, r) {
            var o, s, a = 8 * r - i - 1, c = (1 << a) - 1, u = c >> 1, l = -7, d = n ? r - 1 : 0, h = n ? -1 : 1, f = e2[t2 + d];
            for (d += h, o = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; o = 256 * o + e2[t2 + d], d += h, l -= 8) ;
            for (s = o & (1 << -l) - 1, o >>= -l, l += i; l > 0; s = 256 * s + e2[t2 + d], d += h, l -= 8) ;
            if (0 === o) o = 1 - u;
            else {
              if (o === c) return s ? NaN : 1 / 0 * (f ? -1 : 1);
              s += Math.pow(2, i), o -= u;
            }
            return (f ? -1 : 1) * s * Math.pow(2, o - i);
          }, t.write = function(e2, t2, n, i, r, o) {
            var s, a, c, u = 8 * o - r - 1, l = (1 << u) - 1, d = l >> 1, h = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = i ? 0 : o - 1, v = i ? 1 : -1, p = t2 < 0 || 0 === t2 && 1 / t2 < 0 ? 1 : 0;
            for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (a = isNaN(t2) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t2) / Math.LN2), t2 * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (t2 += s + d >= 1 ? h / c : h * Math.pow(2, 1 - d)) * c >= 2 && (s++, c /= 2), s + d >= l ? (a = 0, s = l) : s + d >= 1 ? (a = (t2 * c - 1) * Math.pow(2, r), s += d) : (a = t2 * Math.pow(2, d - 1) * Math.pow(2, r), s = 0)); r >= 8; e2[n + f] = 255 & a, f += v, a /= 256, r -= 8) ;
            for (s = s << r | a, u += r; u > 0; e2[n + f] = 255 & s, f += v, s /= 256, u -= 8) ;
            e2[n + f - v] |= 128 * p;
          };
        }, function(e, t) {
          var n = {}.toString;
          e.exports = Array.isArray || function(e2) {
            return "[object Array]" == n.call(e2);
          };
        }, function(e, t, n) {
          "use strict";
          n.r(t);
          var i = n(7), r = n(18);
          function o(e2, t2) {
            if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
          }
          function s(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
            }
          }
          var a = function() {
            return { loadPath: "/locales/{{lng}}/{{ns}}.json", addPath: "/locales/add/{{lng}}/{{ns}}", allowMultiLoading: false, parse: function(e2) {
              return JSON.parse(e2);
            }, stringify: JSON.stringify, parsePayload: function(e2, t2, n2) {
              return (function(e3, t3, n3) {
                return t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
              })({}, t2, n2 || "");
            }, request: r.a, reloadInterval: "undefined" == typeof window && 36e5, customHeaders: {}, queryStringParams: {}, crossDomain: false, withCredentials: false, overrideMimeType: false, requestOptions: { mode: "cors", credentials: "same-origin", cache: "default" } };
          }, c = (function() {
            function e2(t3) {
              var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              o(this, e2), this.services = t3, this.options = n3, this.allOptions = i2, this.type = "backend", this.init(t3, n3, i2);
            }
            var t2, n2, r2;
            return t2 = e2, (n2 = [{ key: "init", value: function(e3) {
              var t3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              this.services = e3, this.options = Object(i.a)(n3, this.options || {}, a()), this.allOptions = r3, this.services && this.options.reloadInterval && setInterval((function() {
                return t3.reload();
              }), this.options.reloadInterval);
            } }, { key: "readMulti", value: function(e3, t3, n3) {
              this._readAny(e3, e3, t3, t3, n3);
            } }, { key: "read", value: function(e3, t3, n3) {
              this._readAny([e3], e3, [t3], t3, n3);
            } }, { key: "_readAny", value: function(e3, t3, n3, r3, o2) {
              var s2 = this, a2 = this.options.loadPath;
              "function" == typeof this.options.loadPath && (a2 = this.options.loadPath(e3, n3)), (a2 = Object(i.c)(a2)).then((function(i2) {
                if (!i2) return o2(null, {});
                var a3 = s2.services.interpolator.interpolate(i2, { lng: e3.join("+"), ns: n3.join("+") });
                s2.loadUrl(a3, o2, t3, r3);
              }));
            } }, { key: "loadUrl", value: function(e3, t3, n3, i2) {
              var r3 = this;
              this.options.request(this.options, e3, void 0, (function(o2, s2) {
                if (s2 && (s2.status >= 500 && s2.status < 600 || !s2.status)) return t3("failed loading " + e3 + "; status code: " + s2.status, true);
                if (s2 && s2.status >= 400 && s2.status < 500) return t3("failed loading " + e3 + "; status code: " + s2.status, false);
                if (!s2 && o2 && o2.message && o2.message.indexOf("Failed to fetch") > -1) return t3("failed loading " + e3 + ": " + o2.message, true);
                if (o2) return t3(o2, false);
                var a2, c2;
                try {
                  a2 = "string" == typeof s2.data ? r3.options.parse(s2.data, n3, i2) : s2.data;
                } catch (t4) {
                  c2 = "failed parsing " + e3 + " to json";
                }
                if (c2) return t3(c2, false);
                t3(null, a2);
              }));
            } }, { key: "create", value: function(e3, t3, n3, i2, r3) {
              var o2 = this;
              if (this.options.addPath) {
                "string" == typeof e3 && (e3 = [e3]);
                var s2 = this.options.parsePayload(t3, n3, i2), a2 = 0, c2 = [], u = [];
                e3.forEach((function(n4) {
                  var i3 = o2.options.addPath;
                  "function" == typeof o2.options.addPath && (i3 = o2.options.addPath(n4, t3));
                  var l = o2.services.interpolator.interpolate(i3, { lng: n4, ns: t3 });
                  o2.options.request(o2.options, l, s2, (function(t4, n5) {
                    a2 += 1, c2.push(t4), u.push(n5), a2 === e3.length && r3 && r3(c2, u);
                  }));
                }));
              }
            } }, { key: "reload", value: function() {
              var e3 = this, t3 = this.services, n3 = t3.backendConnector, i2 = t3.languageUtils, r3 = t3.logger, o2 = n3.language;
              if (!o2 || "cimode" !== o2.toLowerCase()) {
                var s2 = [], a2 = function(e4) {
                  i2.toResolveHierarchy(e4).forEach((function(e5) {
                    s2.indexOf(e5) < 0 && s2.push(e5);
                  }));
                };
                a2(o2), this.allOptions.preload && this.allOptions.preload.forEach((function(e4) {
                  return a2(e4);
                })), s2.forEach((function(t4) {
                  e3.allOptions.ns.forEach((function(e4) {
                    n3.read(t4, e4, "read", null, null, (function(i3, o3) {
                      i3 && r3.warn("loading namespace ".concat(e4, " for language ").concat(t4, " failed"), i3), !i3 && o3 && r3.log("loaded namespace ".concat(e4, " for language ").concat(t4), o3), n3.loaded("".concat(t4, "|").concat(e4), i3, o3);
                    }));
                  }));
                }));
              }
            } }]) && s(t2.prototype, n2), r2 && s(t2, r2), Object.defineProperty(t2, "prototype", { writable: false }), e2;
          })();
          c.type = "backend", t.default = c;
        }, function(e, t) {
          var n = "undefined" != typeof self ? self : this, i = (function() {
            function e2() {
              this.fetch = false, this.DOMException = n.DOMException;
            }
            return e2.prototype = n, new e2();
          })();
          !(function(e2) {
            !(function(t2) {
              var n2 = "URLSearchParams" in e2, i2 = "Symbol" in e2 && "iterator" in Symbol, r2 = "FileReader" in e2 && "Blob" in e2 && (function() {
                try {
                  return new Blob(), true;
                } catch (e3) {
                  return false;
                }
              })(), o = "FormData" in e2, s = "ArrayBuffer" in e2;
              if (s) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], c = ArrayBuffer.isView || function(e3) {
                return e3 && a.indexOf(Object.prototype.toString.call(e3)) > -1;
              };
              function u(e3) {
                if ("string" != typeof e3 && (e3 = String(e3)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e3)) throw new TypeError("Invalid character in header field name");
                return e3.toLowerCase();
              }
              function l(e3) {
                return "string" != typeof e3 && (e3 = String(e3)), e3;
              }
              function d(e3) {
                var t3 = { next: function() {
                  var t4 = e3.shift();
                  return { done: void 0 === t4, value: t4 };
                } };
                return i2 && (t3[Symbol.iterator] = function() {
                  return t3;
                }), t3;
              }
              function h(e3) {
                this.map = {}, e3 instanceof h ? e3.forEach((function(e4, t3) {
                  this.append(t3, e4);
                }), this) : Array.isArray(e3) ? e3.forEach((function(e4) {
                  this.append(e4[0], e4[1]);
                }), this) : e3 && Object.getOwnPropertyNames(e3).forEach((function(t3) {
                  this.append(t3, e3[t3]);
                }), this);
              }
              function f(e3) {
                if (e3.bodyUsed) return Promise.reject(new TypeError("Already read"));
                e3.bodyUsed = true;
              }
              function v(e3) {
                return new Promise((function(t3, n3) {
                  e3.onload = function() {
                    t3(e3.result);
                  }, e3.onerror = function() {
                    n3(e3.error);
                  };
                }));
              }
              function p(e3) {
                var t3 = new FileReader(), n3 = v(t3);
                return t3.readAsArrayBuffer(e3), n3;
              }
              function g(e3) {
                if (e3.slice) return e3.slice(0);
                var t3 = new Uint8Array(e3.byteLength);
                return t3.set(new Uint8Array(e3)), t3.buffer;
              }
              function m() {
                return this.bodyUsed = false, this._initBody = function(e3) {
                  var t3;
                  this._bodyInit = e3, e3 ? "string" == typeof e3 ? this._bodyText = e3 : r2 && Blob.prototype.isPrototypeOf(e3) ? this._bodyBlob = e3 : o && FormData.prototype.isPrototypeOf(e3) ? this._bodyFormData = e3 : n2 && URLSearchParams.prototype.isPrototypeOf(e3) ? this._bodyText = e3.toString() : s && r2 && ((t3 = e3) && DataView.prototype.isPrototypeOf(t3)) ? (this._bodyArrayBuffer = g(e3.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(e3) || c(e3)) ? this._bodyArrayBuffer = g(e3) : this._bodyText = e3 = Object.prototype.toString.call(e3) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e3 ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n2 && URLSearchParams.prototype.isPrototypeOf(e3) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                }, r2 && (this.blob = function() {
                  var e3 = f(this);
                  if (e3) return e3;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }, this.arrayBuffer = function() {
                  return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p);
                }), this.text = function() {
                  var e3, t3, n3, i3 = f(this);
                  if (i3) return i3;
                  if (this._bodyBlob) return e3 = this._bodyBlob, t3 = new FileReader(), n3 = v(t3), t3.readAsText(e3), n3;
                  if (this._bodyArrayBuffer) return Promise.resolve((function(e4) {
                    for (var t4 = new Uint8Array(e4), n4 = new Array(t4.length), i4 = 0; i4 < t4.length; i4++) n4[i4] = String.fromCharCode(t4[i4]);
                    return n4.join("");
                  })(this._bodyArrayBuffer));
                  if (this._bodyFormData) throw new Error("could not read FormData body as text");
                  return Promise.resolve(this._bodyText);
                }, o && (this.formData = function() {
                  return this.text().then(b);
                }), this.json = function() {
                  return this.text().then(JSON.parse);
                }, this;
              }
              h.prototype.append = function(e3, t3) {
                e3 = u(e3), t3 = l(t3);
                var n3 = this.map[e3];
                this.map[e3] = n3 ? n3 + ", " + t3 : t3;
              }, h.prototype.delete = function(e3) {
                delete this.map[u(e3)];
              }, h.prototype.get = function(e3) {
                return e3 = u(e3), this.has(e3) ? this.map[e3] : null;
              }, h.prototype.has = function(e3) {
                return this.map.hasOwnProperty(u(e3));
              }, h.prototype.set = function(e3, t3) {
                this.map[u(e3)] = l(t3);
              }, h.prototype.forEach = function(e3, t3) {
                for (var n3 in this.map) this.map.hasOwnProperty(n3) && e3.call(t3, this.map[n3], n3, this);
              }, h.prototype.keys = function() {
                var e3 = [];
                return this.forEach((function(t3, n3) {
                  e3.push(n3);
                })), d(e3);
              }, h.prototype.values = function() {
                var e3 = [];
                return this.forEach((function(t3) {
                  e3.push(t3);
                })), d(e3);
              }, h.prototype.entries = function() {
                var e3 = [];
                return this.forEach((function(t3, n3) {
                  e3.push([n3, t3]);
                })), d(e3);
              }, i2 && (h.prototype[Symbol.iterator] = h.prototype.entries);
              var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
              function E(e3, t3) {
                var n3, i3, r3 = (t3 = t3 || {}).body;
                if (e3 instanceof E) {
                  if (e3.bodyUsed) throw new TypeError("Already read");
                  this.url = e3.url, this.credentials = e3.credentials, t3.headers || (this.headers = new h(e3.headers)), this.method = e3.method, this.mode = e3.mode, this.signal = e3.signal, r3 || null == e3._bodyInit || (r3 = e3._bodyInit, e3.bodyUsed = true);
                } else this.url = String(e3);
                if (this.credentials = t3.credentials || this.credentials || "same-origin", !t3.headers && this.headers || (this.headers = new h(t3.headers)), this.method = (n3 = t3.method || this.method || "GET", i3 = n3.toUpperCase(), y.indexOf(i3) > -1 ? i3 : n3), this.mode = t3.mode || this.mode || null, this.signal = t3.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r3) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(r3);
              }
              function b(e3) {
                var t3 = new FormData();
                return e3.trim().split("&").forEach((function(e4) {
                  if (e4) {
                    var n3 = e4.split("="), i3 = n3.shift().replace(/\+/g, " "), r3 = n3.join("=").replace(/\+/g, " ");
                    t3.append(decodeURIComponent(i3), decodeURIComponent(r3));
                  }
                })), t3;
              }
              function w(e3, t3) {
                t3 || (t3 = {}), this.type = "default", this.status = void 0 === t3.status ? 200 : t3.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t3 ? t3.statusText : "OK", this.headers = new h(t3.headers), this.url = t3.url || "", this._initBody(e3);
              }
              E.prototype.clone = function() {
                return new E(this, { body: this._bodyInit });
              }, m.call(E.prototype), m.call(w.prototype), w.prototype.clone = function() {
                return new w(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new h(this.headers), url: this.url });
              }, w.error = function() {
                var e3 = new w(null, { status: 0, statusText: "" });
                return e3.type = "error", e3;
              };
              var S = [301, 302, 303, 307, 308];
              w.redirect = function(e3, t3) {
                if (-1 === S.indexOf(t3)) throw new RangeError("Invalid status code");
                return new w(null, { status: t3, headers: { location: e3 } });
              }, t2.DOMException = e2.DOMException;
              try {
                new t2.DOMException();
              } catch (e3) {
                t2.DOMException = function(e4, t3) {
                  this.message = e4, this.name = t3;
                  var n3 = Error(e4);
                  this.stack = n3.stack;
                }, t2.DOMException.prototype = Object.create(Error.prototype), t2.DOMException.prototype.constructor = t2.DOMException;
              }
              function k(e3, n3) {
                return new Promise((function(i3, o2) {
                  var s2 = new E(e3, n3);
                  if (s2.signal && s2.signal.aborted) return o2(new t2.DOMException("Aborted", "AbortError"));
                  var a2 = new XMLHttpRequest();
                  function c2() {
                    a2.abort();
                  }
                  a2.onload = function() {
                    var e4, t3, n4 = { status: a2.status, statusText: a2.statusText, headers: (e4 = a2.getAllResponseHeaders() || "", t3 = new h(), e4.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e5) {
                      var n5 = e5.split(":"), i4 = n5.shift().trim();
                      if (i4) {
                        var r4 = n5.join(":").trim();
                        t3.append(i4, r4);
                      }
                    })), t3) };
                    n4.url = "responseURL" in a2 ? a2.responseURL : n4.headers.get("X-Request-URL");
                    var r3 = "response" in a2 ? a2.response : a2.responseText;
                    i3(new w(r3, n4));
                  }, a2.onerror = function() {
                    o2(new TypeError("Network request failed"));
                  }, a2.ontimeout = function() {
                    o2(new TypeError("Network request failed"));
                  }, a2.onabort = function() {
                    o2(new t2.DOMException("Aborted", "AbortError"));
                  }, a2.open(s2.method, s2.url, true), "include" === s2.credentials ? a2.withCredentials = true : "omit" === s2.credentials && (a2.withCredentials = false), "responseType" in a2 && r2 && (a2.responseType = "blob"), s2.headers.forEach((function(e4, t3) {
                    a2.setRequestHeader(t3, e4);
                  })), s2.signal && (s2.signal.addEventListener("abort", c2), a2.onreadystatechange = function() {
                    4 === a2.readyState && s2.signal.removeEventListener("abort", c2);
                  }), a2.send(void 0 === s2._bodyInit ? null : s2._bodyInit);
                }));
              }
              k.polyfill = true, e2.fetch || (e2.fetch = k, e2.Headers = h, e2.Request = E, e2.Response = w), t2.Headers = h, t2.Request = E, t2.Response = w, t2.fetch = k, Object.defineProperty(t2, "__esModule", { value: true });
            })({});
          })(i), i.fetch.ponyfill = true, delete i.fetch.polyfill;
          var r = i;
          (t = r.fetch).default = r.fetch, t.fetch = r.fetch, t.Headers = r.Headers, t.Request = r.Request, t.Response = r.Response, e.exports = t;
        }, function(e, t, n) {
          "use strict";
          n.r(t);
          var i = n(4), r = n(5), o = [], s = o.forEach, a = o.slice;
          function c(e2) {
            return s.call(a.call(arguments, 1), (function(t2) {
              if (t2) for (var n2 in t2) void 0 === e2[n2] && (e2[n2] = t2[n2]);
            })), e2;
          }
          var u = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, l = function(e2, t2, n2) {
            var i2 = n2 || {};
            i2.path = i2.path || "/";
            var r2 = e2 + "=" + encodeURIComponent(t2);
            if (i2.maxAge > 0) {
              var o2 = i2.maxAge - 0;
              if (isNaN(o2)) throw new Error("maxAge should be a Number");
              r2 += "; Max-Age=" + Math.floor(o2);
            }
            if (i2.domain) {
              if (!u.test(i2.domain)) throw new TypeError("option domain is invalid");
              r2 += "; Domain=" + i2.domain;
            }
            if (i2.path) {
              if (!u.test(i2.path)) throw new TypeError("option path is invalid");
              r2 += "; Path=" + i2.path;
            }
            if (i2.expires) {
              if ("function" != typeof i2.expires.toUTCString) throw new TypeError("option expires is invalid");
              r2 += "; Expires=" + i2.expires.toUTCString();
            }
            if (i2.httpOnly && (r2 += "; HttpOnly"), i2.secure && (r2 += "; Secure"), i2.sameSite) switch ("string" == typeof i2.sameSite ? i2.sameSite.toLowerCase() : i2.sameSite) {
              case true:
                r2 += "; SameSite=Strict";
                break;
              case "lax":
                r2 += "; SameSite=Lax";
                break;
              case "strict":
                r2 += "; SameSite=Strict";
                break;
              case "none":
                r2 += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
            return r2;
          }, d = function(e2, t2, n2, i2) {
            var r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { path: "/", sameSite: "strict" };
            n2 && (r2.expires = /* @__PURE__ */ new Date(), r2.expires.setTime(r2.expires.getTime() + 60 * n2 * 1e3)), i2 && (r2.domain = i2), document.cookie = l(e2, encodeURIComponent(t2), r2);
          }, h = function(e2) {
            for (var t2 = e2 + "=", n2 = document.cookie.split(";"), i2 = 0; i2 < n2.length; i2++) {
              for (var r2 = n2[i2]; " " === r2.charAt(0); ) r2 = r2.substring(1, r2.length);
              if (0 === r2.indexOf(t2)) return r2.substring(t2.length, r2.length);
            }
            return null;
          }, f = { name: "cookie", lookup: function(e2) {
            var t2;
            if (e2.lookupCookie && "undefined" != typeof document) {
              var n2 = h(e2.lookupCookie);
              n2 && (t2 = n2);
            }
            return t2;
          }, cacheUserLanguage: function(e2, t2) {
            t2.lookupCookie && "undefined" != typeof document && d(t2.lookupCookie, e2, t2.cookieMinutes, t2.cookieDomain, t2.cookieOptions);
          } }, v = { name: "querystring", lookup: function(e2) {
            var t2;
            if ("undefined" != typeof window) for (var n2 = window.location.search.substring(1).split("&"), i2 = 0; i2 < n2.length; i2++) {
              var r2 = n2[i2].indexOf("=");
              if (r2 > 0) n2[i2].substring(0, r2) === e2.lookupQuerystring && (t2 = n2[i2].substring(r2 + 1));
            }
            return t2;
          } }, p = null, g = function() {
            if (null !== p) return p;
            try {
              p = "undefined" !== window && null !== window.localStorage;
              window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo");
            } catch (e2) {
              p = false;
            }
            return p;
          }, m = { name: "localStorage", lookup: function(e2) {
            var t2;
            if (e2.lookupLocalStorage && g()) {
              var n2 = window.localStorage.getItem(e2.lookupLocalStorage);
              n2 && (t2 = n2);
            }
            return t2;
          }, cacheUserLanguage: function(e2, t2) {
            t2.lookupLocalStorage && g() && window.localStorage.setItem(t2.lookupLocalStorage, e2);
          } }, y = null, E = function() {
            if (null !== y) return y;
            try {
              y = "undefined" !== window && null !== window.sessionStorage;
              window.sessionStorage.setItem("i18next.translate.boo", "foo"), window.sessionStorage.removeItem("i18next.translate.boo");
            } catch (e2) {
              y = false;
            }
            return y;
          }, b = { name: "sessionStorage", lookup: function(e2) {
            var t2;
            if (e2.lookupSessionStorage && E()) {
              var n2 = window.sessionStorage.getItem(e2.lookupSessionStorage);
              n2 && (t2 = n2);
            }
            return t2;
          }, cacheUserLanguage: function(e2, t2) {
            t2.lookupSessionStorage && E() && window.sessionStorage.setItem(t2.lookupSessionStorage, e2);
          } }, w = { name: "navigator", lookup: function(e2) {
            var t2 = [];
            if ("undefined" != typeof navigator) {
              if (navigator.languages) for (var n2 = 0; n2 < navigator.languages.length; n2++) t2.push(navigator.languages[n2]);
              navigator.userLanguage && t2.push(navigator.userLanguage), navigator.language && t2.push(navigator.language);
            }
            return t2.length > 0 ? t2 : void 0;
          } }, S = { name: "htmlTag", lookup: function(e2) {
            var t2, n2 = e2.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
            return n2 && "function" == typeof n2.getAttribute && (t2 = n2.getAttribute("lang")), t2;
          } }, k = { name: "path", lookup: function(e2) {
            var t2;
            if ("undefined" != typeof window) {
              var n2 = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
              if (n2 instanceof Array) if ("number" == typeof e2.lookupFromPathIndex) {
                if ("string" != typeof n2[e2.lookupFromPathIndex]) return;
                t2 = n2[e2.lookupFromPathIndex].replace("/", "");
              } else t2 = n2[0].replace("/", "");
            }
            return t2;
          } }, I = { name: "subdomain", lookup: function(e2) {
            var t2;
            if ("undefined" != typeof window) {
              var n2 = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
              n2 instanceof Array && (t2 = "number" == typeof e2.lookupFromSubdomainIndex ? n2[e2.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n2[0].replace("http://", "").replace("https://", "").replace(".", ""));
            }
            return t2;
          } };
          var A = (function() {
            function e2(t2) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              Object(i.a)(this, e2), this.type = "languageDetector", this.detectors = {}, this.init(t2, n2);
            }
            return Object(r.a)(e2, [{ key: "init", value: function(e3) {
              var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              this.services = e3, this.options = c(t2, this.options || {}, { order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"], lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"] }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n2, this.addDetector(f), this.addDetector(v), this.addDetector(m), this.addDetector(b), this.addDetector(w), this.addDetector(S), this.addDetector(k), this.addDetector(I);
            } }, { key: "addDetector", value: function(e3) {
              this.detectors[e3.name] = e3;
            } }, { key: "detect", value: function(e3) {
              var t2 = this;
              e3 || (e3 = this.options.order);
              var n2 = [];
              return e3.forEach((function(e4) {
                if (t2.detectors[e4]) {
                  var i2 = t2.detectors[e4].lookup(t2.options);
                  i2 && "string" == typeof i2 && (i2 = [i2]), i2 && (n2 = n2.concat(i2));
                }
              })), this.services.languageUtils.getBestMatchFromCodes ? n2 : n2.length > 0 ? n2[0] : null;
            } }, { key: "cacheUserLanguage", value: function(e3, t2) {
              var n2 = this;
              t2 || (t2 = this.options.caches), t2 && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e3) > -1 || t2.forEach((function(t3) {
                n2.detectors[t3] && n2.detectors[t3].cacheUserLanguage(e3, n2.options);
              })));
            } }]), e2;
          })();
          A.type = "languageDetector", t.default = A;
        }, function(e, t, n) {
          "use strict";
          var i = n(48);
          e.exports = function(e2) {
            if (!i(e2)) throw new TypeError(e2 + " is not an Object");
            return e2;
          };
        }, function(e, t, n) {
          "use strict";
          var i = n(10), r = { function: true, object: true };
          e.exports = function(e2) {
            return i(e2) && r[typeof e2] || false;
          };
        }, function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, "default", (function() {
            return Oe;
          })), n.d(t, "Axios", (function() {
            return Ue;
          })), n.d(t, "AxiosError", (function() {
            return Re;
          })), n.d(t, "CanceledError", (function() {
            return Le;
          })), n.d(t, "isCancel", (function() {
            return xe;
          })), n.d(t, "CancelToken", (function() {
            return De;
          })), n.d(t, "VERSION", (function() {
            return Ne;
          })), n.d(t, "all", (function() {
            return Pe;
          })), n.d(t, "Cancel", (function() {
            return _e;
          })), n.d(t, "isAxiosError", (function() {
            return Me;
          })), n.d(t, "spread", (function() {
            return Ve;
          })), n.d(t, "toFormData", (function() {
            return je;
          })), n.d(t, "AxiosHeaders", (function() {
            return qe;
          })), n.d(t, "HttpStatusCode", (function() {
            return Fe;
          })), n.d(t, "formToJSON", (function() {
            return Be;
          })), n.d(t, "getAdapter", (function() {
            return He;
          })), n.d(t, "mergeConfig", (function() {
            return ze;
          }));
          var i = {};
          n.r(i), n.d(i, "hasBrowserEnv", (function() {
            return m;
          })), n.d(i, "hasStandardBrowserWebWorkerEnv", (function() {
            return b;
          })), n.d(i, "hasStandardBrowserEnv", (function() {
            return E;
          })), n.d(i, "navigator", (function() {
            return y;
          })), n.d(i, "origin", (function() {
            return w;
          }));
          var r = n(1), o = n(11), s = n(6);
          function a(e2) {
            const t2 = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
            return encodeURIComponent(e2).replace(/[!'()~]|%20|%00/g, (function(e3) {
              return t2[e3];
            }));
          }
          function c(e2, t2) {
            this._pairs = [], e2 && Object(s.a)(e2, this, t2);
          }
          const u = c.prototype;
          u.append = function(e2, t2) {
            this._pairs.push([e2, t2]);
          }, u.toString = function(e2) {
            const t2 = e2 ? function(t3) {
              return e2.call(this, t3, a);
            } : a;
            return this._pairs.map((function(e3) {
              return t2(e3[0]) + "=" + t2(e3[1]);
            }), "").join("&");
          };
          var l = c;
          function d(e2) {
            return encodeURIComponent(e2).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
          }
          function h(e2, t2, n2) {
            if (!t2) return e2;
            const i2 = n2 && n2.encode || d;
            r.a.isFunction(n2) && (n2 = { serialize: n2 });
            const o2 = n2 && n2.serialize;
            let s2;
            if (s2 = o2 ? o2(t2, n2) : r.a.isURLSearchParams(t2) ? t2.toString() : new l(t2, n2).toString(i2), s2) {
              const t3 = e2.indexOf("#");
              -1 !== t3 && (e2 = e2.slice(0, t3)), e2 += (-1 === e2.indexOf("?") ? "?" : "&") + s2;
            }
            return e2;
          }
          var f = class {
            constructor() {
              this.handlers = [];
            }
            use(e2, t2, n2) {
              return this.handlers.push({ fulfilled: e2, rejected: t2, synchronous: !!n2 && n2.synchronous, runWhen: n2 ? n2.runWhen : null }), this.handlers.length - 1;
            }
            eject(e2) {
              this.handlers[e2] && (this.handlers[e2] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(e2) {
              r.a.forEach(this.handlers, (function(t2) {
                null !== t2 && e2(t2);
              }));
            }
          }, v = n(2), p = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, g = { isBrowser: true, classes: { URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : l, FormData: "undefined" != typeof FormData ? FormData : null, Blob: "undefined" != typeof Blob ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] };
          const m = "undefined" != typeof window && "undefined" != typeof document, y = "object" == typeof navigator && navigator || void 0, E = m && (!y || ["ReactNative", "NativeScript", "NS"].indexOf(y.product) < 0), b = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts, w = m && window.location.href || "http://localhost";
          var S = __spreadValues(__spreadValues({}, i), g);
          var k = function(e2) {
            function t2(e3, n2, i2, o2) {
              let s2 = e3[o2++];
              if ("__proto__" === s2) return true;
              const a2 = Number.isFinite(+s2), c2 = o2 >= e3.length;
              if (s2 = !s2 && r.a.isArray(i2) ? i2.length : s2, c2) return r.a.hasOwnProp(i2, s2) ? i2[s2] = [i2[s2], n2] : i2[s2] = n2, !a2;
              i2[s2] && r.a.isObject(i2[s2]) || (i2[s2] = []);
              return t2(e3, n2, i2[s2], o2) && r.a.isArray(i2[s2]) && (i2[s2] = (function(e4) {
                const t3 = {}, n3 = Object.keys(e4);
                let i3;
                const r2 = n3.length;
                let o3;
                for (i3 = 0; i3 < r2; i3++) o3 = n3[i3], t3[o3] = e4[o3];
                return t3;
              })(i2[s2])), !a2;
            }
            if (r.a.isFormData(e2) && r.a.isFunction(e2.entries)) {
              const n2 = {};
              return r.a.forEachEntry(e2, (e3, i2) => {
                t2((function(e4) {
                  return r.a.matchAll(/\w+|\[(\w*)]/g, e4).map((e5) => "[]" === e5[0] ? "" : e5[1] || e5[0]);
                })(e3), i2, n2, 0);
              }), n2;
            }
            return null;
          };
          const I = { transitional: p, adapter: ["xhr", "http", "fetch"], transformRequest: [function(e2, t2) {
            const n2 = t2.getContentType() || "", i2 = n2.indexOf("application/json") > -1, o2 = r.a.isObject(e2);
            o2 && r.a.isHTMLForm(e2) && (e2 = new FormData(e2));
            if (r.a.isFormData(e2)) return i2 ? JSON.stringify(k(e2)) : e2;
            if (r.a.isArrayBuffer(e2) || r.a.isBuffer(e2) || r.a.isStream(e2) || r.a.isFile(e2) || r.a.isBlob(e2) || r.a.isReadableStream(e2)) return e2;
            if (r.a.isArrayBufferView(e2)) return e2.buffer;
            if (r.a.isURLSearchParams(e2)) return t2.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), e2.toString();
            let a2;
            if (o2) {
              if (n2.indexOf("application/x-www-form-urlencoded") > -1) return (function(e3, t3) {
                return Object(s.a)(e3, new S.classes.URLSearchParams(), __spreadValues({ visitor: function(e4, t4, n3, i3) {
                  return S.isNode && r.a.isBuffer(e4) ? (this.append(t4, e4.toString("base64")), false) : i3.defaultVisitor.apply(this, arguments);
                } }, t3));
              })(e2, this.formSerializer).toString();
              if ((a2 = r.a.isFileList(e2)) || n2.indexOf("multipart/form-data") > -1) {
                const t3 = this.env && this.env.FormData;
                return Object(s.a)(a2 ? { "files[]": e2 } : e2, t3 && new t3(), this.formSerializer);
              }
            }
            return o2 || i2 ? (t2.setContentType("application/json", false), (function(e3, t3, n3) {
              if (r.a.isString(e3)) try {
                return (t3 || JSON.parse)(e3), r.a.trim(e3);
              } catch (e4) {
                if ("SyntaxError" !== e4.name) throw e4;
              }
              return (n3 || JSON.stringify)(e3);
            })(e2)) : e2;
          }], transformResponse: [function(e2) {
            const t2 = this.transitional || I.transitional, n2 = t2 && t2.forcedJSONParsing, i2 = "json" === this.responseType;
            if (r.a.isResponse(e2) || r.a.isReadableStream(e2)) return e2;
            if (e2 && r.a.isString(e2) && (n2 && !this.responseType || i2)) {
              const n3 = !(t2 && t2.silentJSONParsing) && i2;
              try {
                return JSON.parse(e2, this.parseReviver);
              } catch (e3) {
                if (n3) {
                  if ("SyntaxError" === e3.name) throw v.a.from(e3, v.a.ERR_BAD_RESPONSE, this, null, this.response);
                  throw e3;
                }
              }
            }
            return e2;
          }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: S.classes.FormData, Blob: S.classes.Blob }, validateStatus: function(e2) {
            return e2 >= 200 && e2 < 300;
          }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
          r.a.forEach(["delete", "get", "head", "post", "put", "patch"], (e2) => {
            I.headers[e2] = {};
          });
          var A = I;
          const C = r.a.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
          const T = Symbol("internals");
          function O(e2) {
            return e2 && String(e2).trim().toLowerCase();
          }
          function U(e2) {
            return false === e2 || null == e2 ? e2 : r.a.isArray(e2) ? e2.map(U) : String(e2);
          }
          function R(e2, t2, n2, i2, o2) {
            return r.a.isFunction(i2) ? i2.call(this, t2, n2) : (o2 && (t2 = n2), r.a.isString(t2) ? r.a.isString(i2) ? -1 !== t2.indexOf(i2) : r.a.isRegExp(i2) ? i2.test(t2) : void 0 : void 0);
          }
          class L {
            constructor(e2) {
              e2 && this.set(e2);
            }
            set(e2, t2, n2) {
              const i2 = this;
              function o2(e3, t3, n3) {
                const o3 = O(t3);
                if (!o3) throw new Error("header name must be a non-empty string");
                const s3 = r.a.findKey(i2, o3);
                (!s3 || void 0 === i2[s3] || true === n3 || void 0 === n3 && false !== i2[s3]) && (i2[s3 || t3] = U(e3));
              }
              const s2 = (e3, t3) => r.a.forEach(e3, (e4, n3) => o2(e4, n3, t3));
              if (r.a.isPlainObject(e2) || e2 instanceof this.constructor) s2(e2, t2);
              else if (r.a.isString(e2) && (e2 = e2.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e2.trim())) s2(((e3) => {
                const t3 = {};
                let n3, i3, r2;
                return e3 && e3.split("\n").forEach((function(e4) {
                  r2 = e4.indexOf(":"), n3 = e4.substring(0, r2).trim().toLowerCase(), i3 = e4.substring(r2 + 1).trim(), !n3 || t3[n3] && C[n3] || ("set-cookie" === n3 ? t3[n3] ? t3[n3].push(i3) : t3[n3] = [i3] : t3[n3] = t3[n3] ? t3[n3] + ", " + i3 : i3);
                })), t3;
              })(e2), t2);
              else if (r.a.isObject(e2) && r.a.isIterable(e2)) {
                let n3, i3, o3 = {};
                for (const t3 of e2) {
                  if (!r.a.isArray(t3)) throw TypeError("Object iterator must return a key-value pair");
                  o3[i3 = t3[0]] = (n3 = o3[i3]) ? r.a.isArray(n3) ? [...n3, t3[1]] : [n3, t3[1]] : t3[1];
                }
                s2(o3, t2);
              } else null != e2 && o2(t2, e2, n2);
              return this;
            }
            get(e2, t2) {
              if (e2 = O(e2)) {
                const n2 = r.a.findKey(this, e2);
                if (n2) {
                  const e3 = this[n2];
                  if (!t2) return e3;
                  if (true === t2) return (function(e4) {
                    const t3 = /* @__PURE__ */ Object.create(null), n3 = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let i2;
                    for (; i2 = n3.exec(e4); ) t3[i2[1]] = i2[2];
                    return t3;
                  })(e3);
                  if (r.a.isFunction(t2)) return t2.call(this, e3, n2);
                  if (r.a.isRegExp(t2)) return t2.exec(e3);
                  throw new TypeError("parser must be boolean|regexp|function");
                }
              }
            }
            has(e2, t2) {
              if (e2 = O(e2)) {
                const n2 = r.a.findKey(this, e2);
                return !(!n2 || void 0 === this[n2] || t2 && !R(0, this[n2], n2, t2));
              }
              return false;
            }
            delete(e2, t2) {
              const n2 = this;
              let i2 = false;
              function o2(e3) {
                if (e3 = O(e3)) {
                  const o3 = r.a.findKey(n2, e3);
                  !o3 || t2 && !R(0, n2[o3], o3, t2) || (delete n2[o3], i2 = true);
                }
              }
              return r.a.isArray(e2) ? e2.forEach(o2) : o2(e2), i2;
            }
            clear(e2) {
              const t2 = Object.keys(this);
              let n2 = t2.length, i2 = false;
              for (; n2--; ) {
                const r2 = t2[n2];
                e2 && !R(0, this[r2], r2, e2, true) || (delete this[r2], i2 = true);
              }
              return i2;
            }
            normalize(e2) {
              const t2 = this, n2 = {};
              return r.a.forEach(this, (i2, o2) => {
                const s2 = r.a.findKey(n2, o2);
                if (s2) return t2[s2] = U(i2), void delete t2[o2];
                const a2 = e2 ? (function(e3) {
                  return e3.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e4, t3, n3) => t3.toUpperCase() + n3);
                })(o2) : String(o2).trim();
                a2 !== o2 && delete t2[o2], t2[a2] = U(i2), n2[a2] = true;
              }), this;
            }
            concat(...e2) {
              return this.constructor.concat(this, ...e2);
            }
            toJSON(e2) {
              const t2 = /* @__PURE__ */ Object.create(null);
              return r.a.forEach(this, (n2, i2) => {
                null != n2 && false !== n2 && (t2[i2] = e2 && r.a.isArray(n2) ? n2.join(", ") : n2);
              }), t2;
            }
            [Symbol.iterator]() {
              return Object.entries(this.toJSON())[Symbol.iterator]();
            }
            toString() {
              return Object.entries(this.toJSON()).map(([e2, t2]) => e2 + ": " + t2).join("\n");
            }
            getSetCookie() {
              return this.get("set-cookie") || [];
            }
            get [Symbol.toStringTag]() {
              return "AxiosHeaders";
            }
            static from(e2) {
              return e2 instanceof this ? e2 : new this(e2);
            }
            static concat(e2, ...t2) {
              const n2 = new this(e2);
              return t2.forEach((e3) => n2.set(e3)), n2;
            }
            static accessor(e2) {
              const t2 = (this[T] = this[T] = { accessors: {} }).accessors, n2 = this.prototype;
              function i2(e3) {
                const i3 = O(e3);
                t2[i3] || (!(function(e4, t3) {
                  const n3 = r.a.toCamelCase(" " + t3);
                  ["get", "set", "has"].forEach((i4) => {
                    Object.defineProperty(e4, i4 + n3, { value: function(e5, n4, r2) {
                      return this[i4].call(this, t3, e5, n4, r2);
                    }, configurable: true });
                  });
                })(n2, e3), t2[i3] = true);
              }
              return r.a.isArray(e2) ? e2.forEach(i2) : i2(e2), this;
            }
          }
          L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), r.a.reduceDescriptors(L.prototype, ({ value: e2 }, t2) => {
            let n2 = t2[0].toUpperCase() + t2.slice(1);
            return { get: () => e2, set(e3) {
              this[n2] = e3;
            } };
          }), r.a.freezeMethods(L);
          var x = L;
          function D(e2, t2) {
            const n2 = this || A, i2 = t2 || n2, o2 = x.from(i2.headers);
            let s2 = i2.data;
            return r.a.forEach(e2, (function(e3) {
              s2 = e3.call(n2, s2, o2.normalize(), t2 ? t2.status : void 0);
            })), o2.normalize(), s2;
          }
          function N(e2) {
            return !(!e2 || !e2.__CANCEL__);
          }
          function P(e2, t2, n2) {
            v.a.call(this, null == e2 ? "canceled" : e2, v.a.ERR_CANCELED, t2, n2), this.name = "CanceledError";
          }
          r.a.inherits(P, v.a, { __CANCEL__: true });
          var _ = P, M = n(12);
          function V(e2, t2, n2) {
            const i2 = n2.config.validateStatus;
            n2.status && i2 && !i2(n2.status) ? t2(new v.a("Request failed with status code " + n2.status, [v.a.ERR_BAD_REQUEST, v.a.ERR_BAD_RESPONSE][Math.floor(n2.status / 100) - 4], n2.config, n2.request, n2)) : e2(n2);
          }
          var j = function(e2, t2) {
            e2 = e2 || 10;
            const n2 = new Array(e2), i2 = new Array(e2);
            let r2, o2 = 0, s2 = 0;
            return t2 = void 0 !== t2 ? t2 : 1e3, function(a2) {
              const c2 = Date.now(), u2 = i2[s2];
              r2 || (r2 = c2), n2[o2] = a2, i2[o2] = c2;
              let l2 = s2, d2 = 0;
              for (; l2 !== o2; ) d2 += n2[l2++], l2 %= e2;
              if (o2 = (o2 + 1) % e2, o2 === s2 && (s2 = (s2 + 1) % e2), c2 - r2 < t2) return;
              const h2 = u2 && c2 - u2;
              return h2 ? Math.round(1e3 * d2 / h2) : void 0;
            };
          };
          var q = function(e2, t2) {
            let n2, i2, r2 = 0, o2 = 1e3 / t2;
            const s2 = (t3, o3 = Date.now()) => {
              r2 = o3, n2 = null, i2 && (clearTimeout(i2), i2 = null), e2(...t3);
            };
            return [(...e3) => {
              const t3 = Date.now(), a2 = t3 - r2;
              a2 >= o2 ? s2(e3, t3) : (n2 = e3, i2 || (i2 = setTimeout(() => {
                i2 = null, s2(n2);
              }, o2 - a2)));
            }, () => n2 && s2(n2)];
          };
          const F = (e2, t2, n2 = 3) => {
            let i2 = 0;
            const r2 = j(50, 250);
            return q((n3) => {
              const o2 = n3.loaded, s2 = n3.lengthComputable ? n3.total : void 0, a2 = o2 - i2, c2 = r2(a2);
              i2 = o2;
              e2({ loaded: o2, total: s2, progress: s2 ? o2 / s2 : void 0, bytes: a2, rate: c2 || void 0, estimated: c2 && s2 && o2 <= s2 ? (s2 - o2) / c2 : void 0, event: n3, lengthComputable: null != s2, [t2 ? "download" : "upload"]: true });
            }, n2);
          }, B = (e2, t2) => {
            const n2 = null != e2;
            return [(i2) => t2[0]({ lengthComputable: n2, total: e2, loaded: i2 }), t2[1]];
          }, H = (e2) => (...t2) => r.a.asap(() => e2(...t2));
          var z, J, W = S.hasStandardBrowserEnv ? (z = new URL(S.origin), J = S.navigator && /(msie|trident)/i.test(S.navigator.userAgent), (e2) => (e2 = new URL(e2, S.origin), z.protocol === e2.protocol && z.host === e2.host && (J || z.port === e2.port))) : () => true, Z = S.hasStandardBrowserEnv ? { write(e2, t2, n2, i2, o2, s2) {
            const a2 = [e2 + "=" + encodeURIComponent(t2)];
            r.a.isNumber(n2) && a2.push("expires=" + new Date(n2).toGMTString()), r.a.isString(i2) && a2.push("path=" + i2), r.a.isString(o2) && a2.push("domain=" + o2), true === s2 && a2.push("secure"), document.cookie = a2.join("; ");
          }, read(e2) {
            const t2 = document.cookie.match(new RegExp("(^|;\\s*)(" + e2 + ")=([^;]*)"));
            return t2 ? decodeURIComponent(t2[3]) : null;
          }, remove(e2) {
            this.write(e2, "", Date.now() - 864e5);
          } } : { write() {
          }, read: () => null, remove() {
          } };
          function G(e2, t2, n2) {
            let i2 = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t2);
            return e2 && (i2 || 0 == n2) ? (function(e3, t3) {
              return t3 ? e3.replace(/\/?\/$/, "") + "/" + t3.replace(/^\/+/, "") : e3;
            })(e2, t2) : t2;
          }
          const Y = (e2) => e2 instanceof x ? __spreadValues({}, e2) : e2;
          function $(e2, t2) {
            t2 = t2 || {};
            const n2 = {};
            function i2(e3, t3, n3, i3) {
              return r.a.isPlainObject(e3) && r.a.isPlainObject(t3) ? r.a.merge.call({ caseless: i3 }, e3, t3) : r.a.isPlainObject(t3) ? r.a.merge({}, t3) : r.a.isArray(t3) ? t3.slice() : t3;
            }
            function o2(e3, t3, n3, o3) {
              return r.a.isUndefined(t3) ? r.a.isUndefined(e3) ? void 0 : i2(void 0, e3, 0, o3) : i2(e3, t3, 0, o3);
            }
            function s2(e3, t3) {
              if (!r.a.isUndefined(t3)) return i2(void 0, t3);
            }
            function a2(e3, t3) {
              return r.a.isUndefined(t3) ? r.a.isUndefined(e3) ? void 0 : i2(void 0, e3) : i2(void 0, t3);
            }
            function c2(n3, r2, o3) {
              return o3 in t2 ? i2(n3, r2) : o3 in e2 ? i2(void 0, n3) : void 0;
            }
            const u2 = { url: s2, method: s2, data: s2, baseURL: a2, transformRequest: a2, transformResponse: a2, paramsSerializer: a2, timeout: a2, timeoutMessage: a2, withCredentials: a2, withXSRFToken: a2, adapter: a2, responseType: a2, xsrfCookieName: a2, xsrfHeaderName: a2, onUploadProgress: a2, onDownloadProgress: a2, decompress: a2, maxContentLength: a2, maxBodyLength: a2, beforeRedirect: a2, transport: a2, httpAgent: a2, httpsAgent: a2, cancelToken: a2, socketPath: a2, responseEncoding: a2, validateStatus: c2, headers: (e3, t3, n3) => o2(Y(e3), Y(t3), 0, true) };
            return r.a.forEach(Object.keys(__spreadValues(__spreadValues({}, e2), t2)), (function(i3) {
              const s3 = u2[i3] || o2, a3 = s3(e2[i3], t2[i3], i3);
              r.a.isUndefined(a3) && s3 !== c2 || (n2[i3] = a3);
            })), n2;
          }
          var K = (e2) => {
            const t2 = $({}, e2);
            let { data: n2, withXSRFToken: i2, xsrfHeaderName: o2, xsrfCookieName: s2, headers: a2, auth: c2 } = t2;
            if (t2.headers = a2 = x.from(a2), t2.url = h(G(t2.baseURL, t2.url, t2.allowAbsoluteUrls), e2.params, e2.paramsSerializer), c2 && a2.set("Authorization", "Basic " + btoa((c2.username || "") + ":" + (c2.password ? unescape(encodeURIComponent(c2.password)) : ""))), r.a.isFormData(n2)) {
              if (S.hasStandardBrowserEnv || S.hasStandardBrowserWebWorkerEnv) a2.setContentType(void 0);
              else if (r.a.isFunction(n2.getHeaders)) {
                const e3 = n2.getHeaders(), t3 = ["content-type", "content-length"];
                Object.entries(e3).forEach(([e4, n3]) => {
                  t3.includes(e4.toLowerCase()) && a2.set(e4, n3);
                });
              }
            }
            if (S.hasStandardBrowserEnv && (i2 && r.a.isFunction(i2) && (i2 = i2(t2)), i2 || false !== i2 && W(t2.url))) {
              const e3 = o2 && s2 && Z.read(s2);
              e3 && a2.set(o2, e3);
            }
            return t2;
          };
          var X = "undefined" != typeof XMLHttpRequest && function(e2) {
            return new Promise((function(t2, n2) {
              const i2 = K(e2);
              let o2 = i2.data;
              const s2 = x.from(i2.headers).normalize();
              let a2, c2, u2, l2, d2, { responseType: h2, onUploadProgress: f2, onDownloadProgress: g2 } = i2;
              function m2() {
                l2 && l2(), d2 && d2(), i2.cancelToken && i2.cancelToken.unsubscribe(a2), i2.signal && i2.signal.removeEventListener("abort", a2);
              }
              let y2 = new XMLHttpRequest();
              function E2() {
                if (!y2) return;
                const i3 = x.from("getAllResponseHeaders" in y2 && y2.getAllResponseHeaders());
                V((function(e3) {
                  t2(e3), m2();
                }), (function(e3) {
                  n2(e3), m2();
                }), { data: h2 && "text" !== h2 && "json" !== h2 ? y2.response : y2.responseText, status: y2.status, statusText: y2.statusText, headers: i3, config: e2, request: y2 }), y2 = null;
              }
              y2.open(i2.method.toUpperCase(), i2.url, true), y2.timeout = i2.timeout, "onloadend" in y2 ? y2.onloadend = E2 : y2.onreadystatechange = function() {
                y2 && 4 === y2.readyState && (0 !== y2.status || y2.responseURL && 0 === y2.responseURL.indexOf("file:")) && setTimeout(E2);
              }, y2.onabort = function() {
                y2 && (n2(new v.a("Request aborted", v.a.ECONNABORTED, e2, y2)), y2 = null);
              }, y2.onerror = function(t3) {
                const i3 = t3 && t3.message ? t3.message : "Network Error", r2 = new v.a(i3, v.a.ERR_NETWORK, e2, y2);
                r2.event = t3 || null, n2(r2), y2 = null;
              }, y2.ontimeout = function() {
                let t3 = i2.timeout ? "timeout of " + i2.timeout + "ms exceeded" : "timeout exceeded";
                const r2 = i2.transitional || p;
                i2.timeoutErrorMessage && (t3 = i2.timeoutErrorMessage), n2(new v.a(t3, r2.clarifyTimeoutError ? v.a.ETIMEDOUT : v.a.ECONNABORTED, e2, y2)), y2 = null;
              }, void 0 === o2 && s2.setContentType(null), "setRequestHeader" in y2 && r.a.forEach(s2.toJSON(), (function(e3, t3) {
                y2.setRequestHeader(t3, e3);
              })), r.a.isUndefined(i2.withCredentials) || (y2.withCredentials = !!i2.withCredentials), h2 && "json" !== h2 && (y2.responseType = i2.responseType), g2 && ([u2, d2] = F(g2, true), y2.addEventListener("progress", u2)), f2 && y2.upload && ([c2, l2] = F(f2), y2.upload.addEventListener("progress", c2), y2.upload.addEventListener("loadend", l2)), (i2.cancelToken || i2.signal) && (a2 = (t3) => {
                y2 && (n2(!t3 || t3.type ? new _(null, e2, y2) : t3), y2.abort(), y2 = null);
              }, i2.cancelToken && i2.cancelToken.subscribe(a2), i2.signal && (i2.signal.aborted ? a2() : i2.signal.addEventListener("abort", a2)));
              const b2 = (function(e3) {
                const t3 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e3);
                return t3 && t3[1] || "";
              })(i2.url);
              b2 && -1 === S.protocols.indexOf(b2) ? n2(new v.a("Unsupported protocol " + b2 + ":", v.a.ERR_BAD_REQUEST, e2)) : y2.send(o2 || null);
            }));
          };
          var Q = (e2, t2) => {
            const { length: n2 } = e2 = e2 ? e2.filter(Boolean) : [];
            if (t2 || n2) {
              let n3, i2 = new AbortController();
              const o2 = function(e3) {
                if (!n3) {
                  n3 = true, a2();
                  const t3 = e3 instanceof Error ? e3 : this.reason;
                  i2.abort(t3 instanceof v.a ? t3 : new _(t3 instanceof Error ? t3.message : t3));
                }
              };
              let s2 = t2 && setTimeout(() => {
                s2 = null, o2(new v.a(`timeout ${t2} of ms exceeded`, v.a.ETIMEDOUT));
              }, t2);
              const a2 = () => {
                e2 && (s2 && clearTimeout(s2), s2 = null, e2.forEach((e3) => {
                  e3.unsubscribe ? e3.unsubscribe(o2) : e3.removeEventListener("abort", o2);
                }), e2 = null);
              };
              e2.forEach((e3) => e3.addEventListener("abort", o2));
              const { signal: c2 } = i2;
              return c2.unsubscribe = () => r.a.asap(a2), c2;
            }
          };
          const ee = function* (e2, t2) {
            let n2 = e2.byteLength;
            if (!t2 || n2 < t2) return void (yield e2);
            let i2, r2 = 0;
            for (; r2 < n2; ) i2 = r2 + t2, yield e2.slice(r2, i2), r2 = i2;
          }, te = function(e2) {
            return __asyncGenerator(this, null, function* () {
              if (e2[Symbol.asyncIterator]) return void (yield* __yieldStar(e2));
              const t2 = e2.getReader();
              try {
                for (; ; ) {
                  const { done: e3, value: n2 } = yield new __await(t2.read());
                  if (e3) break;
                  yield n2;
                }
              } finally {
                yield new __await(t2.cancel());
              }
            });
          }, ne = (e2, t2, n2, i2) => {
            const r2 = (function(e3, t3) {
              return __asyncGenerator(this, null, function* () {
                try {
                  for (var iter = __forAwait(te(e3)), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
                    const n3 = temp.value;
                    yield* __yieldStar(ee(n3, t3));
                  }
                } catch (temp) {
                  error = [temp];
                } finally {
                  try {
                    more && (temp = iter.return) && (yield new __await(temp.call(iter)));
                  } finally {
                    if (error)
                      throw error[0];
                  }
                }
              });
            })(e2, t2);
            let o2, s2 = 0, a2 = (e3) => {
              o2 || (o2 = true, i2 && i2(e3));
            };
            return new ReadableStream({ async pull(e3) {
              try {
                const { done: t3, value: i3 } = await r2.next();
                if (t3) return a2(), void e3.close();
                let o3 = i3.byteLength;
                if (n2) {
                  let e4 = s2 += o3;
                  n2(e4);
                }
                e3.enqueue(new Uint8Array(i3));
              } catch (e4) {
                throw a2(e4), e4;
              }
            }, cancel: (e3) => (a2(e3), r2.return()) }, { highWaterMark: 2 });
          }, { isFunction: ie } = r.a, re = (({ Request: e2, Response: t2 }) => ({ Request: e2, Response: t2 }))(r.a.global), { ReadableStream: oe, TextEncoder: se } = r.a.global, ae = (e2, ...t2) => {
            try {
              return !!e2(...t2);
            } catch (e3) {
              return false;
            }
          }, ce = (e2) => {
            e2 = r.a.merge.call({ skipUndefined: true }, re, e2);
            const { fetch: t2, Request: n2, Response: i2 } = e2, o2 = t2 ? ie(t2) : "function" == typeof fetch, s2 = ie(n2), a2 = ie(i2);
            if (!o2) return false;
            const c2 = o2 && ie(oe), u2 = o2 && ("function" == typeof se ? (l2 = new se(), (e3) => l2.encode(e3)) : async (e3) => new Uint8Array(await new n2(e3).arrayBuffer()));
            var l2;
            const d2 = s2 && c2 && ae(() => {
              let e3 = false;
              const t3 = new n2(S.origin, { body: new oe(), method: "POST", get duplex() {
                return e3 = true, "half";
              } }).headers.has("Content-Type");
              return e3 && !t3;
            }), h2 = a2 && c2 && ae(() => r.a.isReadableStream(new i2("").body)), f2 = { stream: h2 && ((e3) => e3.body) };
            o2 && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e3) => {
              !f2[e3] && (f2[e3] = (t3, n3) => {
                let i3 = t3 && t3[e3];
                if (i3) return i3.call(t3);
                throw new v.a(`Response type '${e3}' is not supported`, v.a.ERR_NOT_SUPPORT, n3);
              });
            });
            const p2 = async (e3, t3) => {
              const i3 = r.a.toFiniteNumber(e3.getContentLength());
              return null == i3 ? (async (e4) => {
                if (null == e4) return 0;
                if (r.a.isBlob(e4)) return e4.size;
                if (r.a.isSpecCompliantForm(e4)) {
                  const t4 = new n2(S.origin, { method: "POST", body: e4 });
                  return (await t4.arrayBuffer()).byteLength;
                }
                return r.a.isArrayBufferView(e4) || r.a.isArrayBuffer(e4) ? e4.byteLength : (r.a.isURLSearchParams(e4) && (e4 += ""), r.a.isString(e4) ? (await u2(e4)).byteLength : void 0);
              })(t3) : i3;
            };
            return async (e3) => {
              let { url: o3, method: a3, data: c3, signal: u3, cancelToken: l3, timeout: g2, onDownloadProgress: m2, onUploadProgress: y2, responseType: E2, headers: b2, withCredentials: w2 = "same-origin", fetchOptions: S2 } = K(e3), k2 = t2 || fetch;
              E2 = E2 ? (E2 + "").toLowerCase() : "text";
              let I2 = Q([u3, l3 && l3.toAbortSignal()], g2), A2 = null;
              const C2 = I2 && I2.unsubscribe && (() => {
                I2.unsubscribe();
              });
              let T2;
              try {
                if (y2 && d2 && "get" !== a3 && "head" !== a3 && 0 !== (T2 = await p2(b2, c3))) {
                  let e4, t4 = new n2(o3, { method: "POST", body: c3, duplex: "half" });
                  if (r.a.isFormData(c3) && (e4 = t4.headers.get("content-type")) && b2.setContentType(e4), t4.body) {
                    const [e5, n3] = B(T2, F(H(y2)));
                    c3 = ne(t4.body, 65536, e5, n3);
                  }
                }
                r.a.isString(w2) || (w2 = w2 ? "include" : "omit");
                const t3 = s2 && "credentials" in n2.prototype, u4 = __spreadProps(__spreadValues({}, S2), { signal: I2, method: a3.toUpperCase(), headers: b2.normalize().toJSON(), body: c3, duplex: "half", credentials: t3 ? w2 : void 0 });
                A2 = s2 && new n2(o3, u4);
                let l4 = await (s2 ? k2(A2, S2) : k2(o3, u4));
                const v2 = h2 && ("stream" === E2 || "response" === E2);
                if (h2 && (m2 || v2 && C2)) {
                  const e4 = {};
                  ["status", "statusText", "headers"].forEach((t5) => {
                    e4[t5] = l4[t5];
                  });
                  const t4 = r.a.toFiniteNumber(l4.headers.get("content-length")), [n3, o4] = m2 && B(t4, F(H(m2), true)) || [];
                  l4 = new i2(ne(l4.body, 65536, n3, () => {
                    o4 && o4(), C2 && C2();
                  }), e4);
                }
                E2 = E2 || "text";
                let g3 = await f2[r.a.findKey(f2, E2) || "text"](l4, e3);
                return !v2 && C2 && C2(), await new Promise((t4, n3) => {
                  V(t4, n3, { data: g3, headers: x.from(l4.headers), status: l4.status, statusText: l4.statusText, config: e3, request: A2 });
                });
              } catch (t3) {
                if (C2 && C2(), t3 && "TypeError" === t3.name && /Load failed|fetch/i.test(t3.message)) throw Object.assign(new v.a("Network Error", v.a.ERR_NETWORK, e3, A2), { cause: t3.cause || t3 });
                throw v.a.from(t3, t3 && t3.code, e3, A2);
              }
            };
          }, ue = /* @__PURE__ */ new Map(), le = (e2) => {
            let t2 = e2 ? e2.env : {};
            const { fetch: n2, Request: i2, Response: r2 } = t2, o2 = [i2, r2, n2];
            let s2, a2, c2 = o2.length, u2 = ue;
            for (; c2--; ) s2 = o2[c2], a2 = u2.get(s2), void 0 === a2 && u2.set(s2, a2 = c2 ? /* @__PURE__ */ new Map() : ce(t2)), u2 = a2;
            return a2;
          };
          le();
          const de = { http: M.a, xhr: X, fetch: { get: le } };
          r.a.forEach(de, (e2, t2) => {
            if (e2) {
              try {
                Object.defineProperty(e2, "name", { value: t2 });
              } catch (e3) {
              }
              Object.defineProperty(e2, "adapterName", { value: t2 });
            }
          });
          const he = (e2) => "- " + e2, fe = (e2) => r.a.isFunction(e2) || null === e2 || false === e2;
          var ve = (e2, t2) => {
            e2 = r.a.isArray(e2) ? e2 : [e2];
            const { length: n2 } = e2;
            let i2, o2;
            const s2 = {};
            for (let a2 = 0; a2 < n2; a2++) {
              let n3;
              if (i2 = e2[a2], o2 = i2, !fe(i2) && (o2 = de[(n3 = String(i2)).toLowerCase()], void 0 === o2)) throw new v.a(`Unknown adapter '${n3}'`);
              if (o2 && (r.a.isFunction(o2) || (o2 = o2.get(t2)))) break;
              s2[n3 || "#" + a2] = o2;
            }
            if (!o2) {
              const e3 = Object.entries(s2).map(([e4, t4]) => `adapter ${e4} ` + (false === t4 ? "is not supported by the environment" : "is not available in the build"));
              let t3 = n2 ? e3.length > 1 ? "since :\n" + e3.map(he).join("\n") : " " + he(e3[0]) : "as no adapter specified";
              throw new v.a("There is no suitable adapter to dispatch the request " + t3, "ERR_NOT_SUPPORT");
            }
            return o2;
          };
          function pe(e2) {
            if (e2.cancelToken && e2.cancelToken.throwIfRequested(), e2.signal && e2.signal.aborted) throw new _(null, e2);
          }
          function ge(e2) {
            pe(e2), e2.headers = x.from(e2.headers), e2.data = D.call(e2, e2.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e2.method) && e2.headers.setContentType("application/x-www-form-urlencoded", false);
            return ve(e2.adapter || A.adapter, e2)(e2).then((function(t2) {
              return pe(e2), t2.data = D.call(e2, e2.transformResponse, t2), t2.headers = x.from(t2.headers), t2;
            }), (function(t2) {
              return N(t2) || (pe(e2), t2 && t2.response && (t2.response.data = D.call(e2, e2.transformResponse, t2.response), t2.response.headers = x.from(t2.response.headers))), Promise.reject(t2);
            }));
          }
          const me = {};
          ["object", "boolean", "number", "function", "string", "symbol"].forEach((e2, t2) => {
            me[e2] = function(n2) {
              return typeof n2 === e2 || "a" + (t2 < 1 ? "n " : " ") + e2;
            };
          });
          const ye = {};
          me.transitional = function(e2, t2, n2) {
            function i2(e3, t3) {
              return "[Axios v1.12.2] Transitional option '" + e3 + "'" + t3 + (n2 ? ". " + n2 : "");
            }
            return (n3, r2, o2) => {
              if (false === e2) throw new v.a(i2(r2, " has been removed" + (t2 ? " in " + t2 : "")), v.a.ERR_DEPRECATED);
              return t2 && !ye[r2] && (ye[r2] = true, console.warn(i2(r2, " has been deprecated since v" + t2 + " and will be removed in the near future"))), !e2 || e2(n3, r2, o2);
            };
          }, me.spelling = function(e2) {
            return (t2, n2) => (console.warn(`${n2} is likely a misspelling of ${e2}`), true);
          };
          var Ee = { assertOptions: function(e2, t2, n2) {
            if ("object" != typeof e2) throw new v.a("options must be an object", v.a.ERR_BAD_OPTION_VALUE);
            const i2 = Object.keys(e2);
            let r2 = i2.length;
            for (; r2-- > 0; ) {
              const o2 = i2[r2], s2 = t2[o2];
              if (s2) {
                const t3 = e2[o2], n3 = void 0 === t3 || s2(t3, o2, e2);
                if (true !== n3) throw new v.a("option " + o2 + " must be " + n3, v.a.ERR_BAD_OPTION_VALUE);
              } else if (true !== n2) throw new v.a("Unknown option " + o2, v.a.ERR_BAD_OPTION);
            }
          }, validators: me };
          const be = Ee.validators;
          class we {
            constructor(e2) {
              this.defaults = e2 || {}, this.interceptors = { request: new f(), response: new f() };
            }
            async request(e2, t2) {
              try {
                return await this._request(e2, t2);
              } catch (e3) {
                if (e3 instanceof Error) {
                  let t3 = {};
                  Error.captureStackTrace ? Error.captureStackTrace(t3) : t3 = new Error();
                  const n2 = t3.stack ? t3.stack.replace(/^.+\n/, "") : "";
                  try {
                    e3.stack ? n2 && !String(e3.stack).endsWith(n2.replace(/^.+\n.+\n/, "")) && (e3.stack += "\n" + n2) : e3.stack = n2;
                  } catch (e4) {
                  }
                }
                throw e3;
              }
            }
            _request(e2, t2) {
              "string" == typeof e2 ? (t2 = t2 || {}).url = e2 : t2 = e2 || {}, t2 = $(this.defaults, t2);
              const { transitional: n2, paramsSerializer: i2, headers: o2 } = t2;
              void 0 !== n2 && Ee.assertOptions(n2, { silentJSONParsing: be.transitional(be.boolean), forcedJSONParsing: be.transitional(be.boolean), clarifyTimeoutError: be.transitional(be.boolean) }, false), null != i2 && (r.a.isFunction(i2) ? t2.paramsSerializer = { serialize: i2 } : Ee.assertOptions(i2, { encode: be.function, serialize: be.function }, true)), void 0 !== t2.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t2.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t2.allowAbsoluteUrls = true), Ee.assertOptions(t2, { baseUrl: be.spelling("baseURL"), withXsrfToken: be.spelling("withXSRFToken") }, true), t2.method = (t2.method || this.defaults.method || "get").toLowerCase();
              let s2 = o2 && r.a.merge(o2.common, o2[t2.method]);
              o2 && r.a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e3) => {
                delete o2[e3];
              }), t2.headers = x.concat(s2, o2);
              const a2 = [];
              let c2 = true;
              this.interceptors.request.forEach((function(e3) {
                "function" == typeof e3.runWhen && false === e3.runWhen(t2) || (c2 = c2 && e3.synchronous, a2.unshift(e3.fulfilled, e3.rejected));
              }));
              const u2 = [];
              let l2;
              this.interceptors.response.forEach((function(e3) {
                u2.push(e3.fulfilled, e3.rejected);
              }));
              let d2, h2 = 0;
              if (!c2) {
                const e3 = [ge.bind(this), void 0];
                for (e3.unshift(...a2), e3.push(...u2), d2 = e3.length, l2 = Promise.resolve(t2); h2 < d2; ) l2 = l2.then(e3[h2++], e3[h2++]);
                return l2;
              }
              d2 = a2.length;
              let f2 = t2;
              for (; h2 < d2; ) {
                const e3 = a2[h2++], t3 = a2[h2++];
                try {
                  f2 = e3(f2);
                } catch (e4) {
                  t3.call(this, e4);
                  break;
                }
              }
              try {
                l2 = ge.call(this, f2);
              } catch (e3) {
                return Promise.reject(e3);
              }
              for (h2 = 0, d2 = u2.length; h2 < d2; ) l2 = l2.then(u2[h2++], u2[h2++]);
              return l2;
            }
            getUri(e2) {
              return h(G((e2 = $(this.defaults, e2)).baseURL, e2.url, e2.allowAbsoluteUrls), e2.params, e2.paramsSerializer);
            }
          }
          r.a.forEach(["delete", "get", "head", "options"], (function(e2) {
            we.prototype[e2] = function(t2, n2) {
              return this.request($(n2 || {}, { method: e2, url: t2, data: (n2 || {}).data }));
            };
          })), r.a.forEach(["post", "put", "patch"], (function(e2) {
            function t2(t3) {
              return function(n2, i2, r2) {
                return this.request($(r2 || {}, { method: e2, headers: t3 ? { "Content-Type": "multipart/form-data" } : {}, url: n2, data: i2 }));
              };
            }
            we.prototype[e2] = t2(), we.prototype[e2 + "Form"] = t2(true);
          }));
          var Se = we;
          class ke {
            constructor(e2) {
              if ("function" != typeof e2) throw new TypeError("executor must be a function.");
              let t2;
              this.promise = new Promise((function(e3) {
                t2 = e3;
              }));
              const n2 = this;
              this.promise.then((e3) => {
                if (!n2._listeners) return;
                let t3 = n2._listeners.length;
                for (; t3-- > 0; ) n2._listeners[t3](e3);
                n2._listeners = null;
              }), this.promise.then = (e3) => {
                let t3;
                const i2 = new Promise((e4) => {
                  n2.subscribe(e4), t3 = e4;
                }).then(e3);
                return i2.cancel = function() {
                  n2.unsubscribe(t3);
                }, i2;
              }, e2((function(e3, i2, r2) {
                n2.reason || (n2.reason = new _(e3, i2, r2), t2(n2.reason));
              }));
            }
            throwIfRequested() {
              if (this.reason) throw this.reason;
            }
            subscribe(e2) {
              this.reason ? e2(this.reason) : this._listeners ? this._listeners.push(e2) : this._listeners = [e2];
            }
            unsubscribe(e2) {
              if (!this._listeners) return;
              const t2 = this._listeners.indexOf(e2);
              -1 !== t2 && this._listeners.splice(t2, 1);
            }
            toAbortSignal() {
              const e2 = new AbortController(), t2 = (t3) => {
                e2.abort(t3);
              };
              return this.subscribe(t2), e2.signal.unsubscribe = () => this.unsubscribe(t2), e2.signal;
            }
            static source() {
              let e2;
              return { token: new ke((function(t2) {
                e2 = t2;
              })), cancel: e2 };
            }
          }
          var Ie = ke;
          const Ae = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
          Object.entries(Ae).forEach(([e2, t2]) => {
            Ae[t2] = e2;
          });
          var Ce = Ae;
          const Te = (function e2(t2) {
            const n2 = new Se(t2), i2 = Object(o.a)(Se.prototype.request, n2);
            return r.a.extend(i2, Se.prototype, n2, { allOwnKeys: true }), r.a.extend(i2, n2, null, { allOwnKeys: true }), i2.create = function(n3) {
              return e2($(t2, n3));
            }, i2;
          })(A);
          Te.Axios = Se, Te.CanceledError = _, Te.CancelToken = Ie, Te.isCancel = N, Te.VERSION = "1.12.2", Te.toFormData = s.a, Te.AxiosError = v.a, Te.Cancel = Te.CanceledError, Te.all = function(e2) {
            return Promise.all(e2);
          }, Te.spread = function(e2) {
            return function(t2) {
              return e2.apply(null, t2);
            };
          }, Te.isAxiosError = function(e2) {
            return r.a.isObject(e2) && true === e2.isAxiosError;
          }, Te.mergeConfig = $, Te.AxiosHeaders = x, Te.formToJSON = (e2) => k(r.a.isHTMLForm(e2) ? new FormData(e2) : e2), Te.getAdapter = ve, Te.HttpStatusCode = Ce, Te.default = Te;
          var Oe = Te;
          const { Axios: Ue, AxiosError: Re, CanceledError: Le, isCancel: xe, CancelToken: De, VERSION: Ne, all: Pe, Cancel: _e, isAxiosError: Me, spread: Ve, toFormData: je, AxiosHeaders: qe, HttpStatusCode: Fe, formToJSON: Be, getAdapter: He, mergeConfig: ze } = Oe;
        }, function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, "Desktop", (function() {
            return Me;
          }));
          var i = n(0);
          const r = Object(i.createLogger)("agentx-js-api"), o = (e2, t2) => ({ info: (...n2) => e2.info(t2, ...n2), warn: (...n2) => e2.warn(t2, ...n2), error: (...n2) => e2.error(t2, ...n2) });
          class s {
            constructor(e2) {
              this.logger = e2.logger;
            }
            check(e2) {
              return e2 ? !!e2.isInited || (this.logger.error("SERVICE still not initialized... Await it's init(...) first."), false) : (this.logger.error("SERVICE is not defined..."), false);
            }
          }
          const a = (e2) => new s(e2);
          var c = function(e2, t2, n2, i2) {
            return new (n2 || (n2 = Promise))((function(r2, o2) {
              function s2(e3) {
                try {
                  c2(i2.next(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function a2(e3) {
                try {
                  c2(i2.throw(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function c2(e3) {
                var t3;
                e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                  e4(t3);
                }))).then(s2, a2);
              }
              c2((i2 = i2.apply(e2, t2 || [])).next());
            }));
          };
          const u = { rps: 120, tag: "jsapi" }, l = { rps: 0, tag: "jsapi" }, d = { tag: "jsapi" }, h = (e2) => e2.actionsChannels.createSource("fireGeneralSilentNotification/Req", u), f = (e2) => e2.actionsChannels.createSource("fireGeneralAutoDismissNotification/Req", l), v = (e2) => e2.actionsChannels.createDestination("fireGeneralAutoDismissNotification/Res", l), p = (e2) => e2.actionsChannels.createSource("fireGeneralAcknowledgeNotification/Req", l), g = (e2) => e2.actionsChannels.createDestination("fireGeneralAcknowledgeNotification/Res", l), m = (e2) => e2.actionsChannels.createSource("addCustomTask", u), y = (e2) => e2.actionsChannels.createSource("getToken/Req", l), E = (e2) => e2.actionsChannels.createDestination("getToken/Res", d), b = (e2) => e2.actionsChannels.createSource("getTaskMap/Req", l), w = (e2) => e2.actionsChannels.createDestination("getTaskMap/Res", d), S = (e2) => e2.actionsChannels.createSource("getMediaTypeQueue/Req", l), k = (e2) => e2.actionsChannels.createDestination("getMediaTypeQueue/Res", d), I = (e2) => e2.actionsChannels.createSource("getIdleCodes/Req", l), A = (e2) => e2.actionsChannels.createDestination("getIdleCodes/Res", d), C = (e2) => e2.actionsChannels.createSource("getWrapUpCodes/Req", l), T = (e2) => e2.actionsChannels.createDestination("getWrapUpCodes/Res", d);
          class O {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            getNextReqId() {
              const e2 = Date.now();
              return this.lastReqTs !== e2 ? (this.lastReqTs = e2, this.lastReqN = 0) : this.lastReqN++, `${this.lastReqTs}_${this.lastReqN}`;
            }
            constructor(e2) {
              this.lastReqTs = Date.now(), this.lastReqN = 0, this.toggleMiximizeRestore = (e3) => {
                var t2;
                if (e3 && e3.target) {
                  const n2 = null === (t2 = this.getClosestElement(e3.target, ".dynamic-widget-wrapper")) || void 0 === t2 ? void 0 : t2.id;
                  if (n2) {
                    const e4 = new CustomEvent("toggle-maximize-restore", { detail: { widgetId: n2 } });
                    window.dispatchEvent(e4), r.info("Dispatching toggle-maximize-restore event for widgetId:", n2);
                  }
                }
              }, this.toggleVoiceInteractionPanel = () => {
                window.dispatchEvent(new CustomEvent("toggle-voice-interaction-panel")), r.info("Dispatching toggl-voice-interaction-panel");
              }, this.toggleMuteUnmuteWebRtcCall = () => {
                const e3 = new CustomEvent("ax-web-call-mute-unmute", {});
                window.dispatchEvent(e3), r.info("Dispatching ax-web-call-mute-unmute event");
              }, this.declineWebRtcCall = () => {
                const e3 = new CustomEvent("ax-web-call-decline", {});
                window.dispatchEvent(e3), r.info("Dispatching ax-web-call-decline event");
              }, this.acceptWebRtcCall = () => {
                const e3 = new CustomEvent("ax-web-call-answer", {});
                window.dispatchEvent(e3), r.info("Dispatching ax-web-call-answer event");
              }, this.logger = e2.logger, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && (this.sourceActionsChannels = { fireGeneralSilentNotification: h(this.SERVICE), fireGeneralAutoDismissNotification: f(this.SERVICE), fireGeneralAcknowledgeNotification: p(this.SERVICE), addCustomTask: m(this.SERVICE), getToken: y(this.SERVICE), getTaskMap: b(this.SERVICE), getMediaTypeQueue: S(this.SERVICE), getIdleCodes: I(this.SERVICE), getWrapUpCodes: C(this.SERVICE) }, this.destinationActionsChannels = { fireGeneralAutoDismissNotification: v(this.SERVICE), fireGeneralAcknowledgeNotification: g(this.SERVICE), getToken: E(this.SERVICE), getTaskMap: w(this.SERVICE), getMediaTypeQueue: k(this.SERVICE), getIdleCodes: A(this.SERVICE), getWrapUpCodes: T(this.SERVICE) }, this.logger.info("Inited"));
            }
            cleanup() {
              this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            fireGeneralSilentNotification(...e2) {
              this.checkService() && this.sourceActionsChannels.fireGeneralSilentNotification.send(...e2);
            }
            fireGeneralAutoDismissNotification(...e2) {
              return c(this, void 0, void 0, (function* () {
                if (this.checkService()) return yield new Promise((t2) => {
                  const n2 = this.getNextReqId(), r2 = ({ args: [e3, o2, s2, a2] }) => {
                    a2 === n2 && (s2 !== i.Notifications.ItemMeta.Mode.AutoDismiss && s2 !== i.Notifications.ItemMeta.Mode.Silent || e3 === i.Notifications.ItemMeta.Status.Deactivated && (t2([e3, o2, s2]), this.destinationActionsChannels.fireGeneralAutoDismissNotification.removeListener(r2)));
                  };
                  this.destinationActionsChannels.fireGeneralAutoDismissNotification.addListener(r2), this.sourceActionsChannels.fireGeneralAutoDismissNotification.send(...e2);
                });
              }));
            }
            fireGeneralAcknowledgeNotification(...e2) {
              return c(this, void 0, void 0, (function* () {
                if (this.checkService()) return yield new Promise((t2) => {
                  const n2 = this.getNextReqId(), r2 = ({ args: [e3, o2, s2, a2] }) => {
                    a2 === n2 && (s2 !== i.Notifications.ItemMeta.Mode.Acknowledge && s2 !== i.Notifications.ItemMeta.Mode.Silent || e3 === i.Notifications.ItemMeta.Status.Deactivated && (t2([e3, o2, s2]), this.destinationActionsChannels.fireGeneralAcknowledgeNotification.removeListener(r2)));
                  };
                  this.destinationActionsChannels.fireGeneralAcknowledgeNotification.addListener(r2), this.sourceActionsChannels.fireGeneralAcknowledgeNotification.send(...e2);
                });
              }));
            }
            addCustomTask(...e2) {
              this.checkService() && this.sourceActionsChannels.addCustomTask.send(...e2);
            }
            getTaskMap() {
              return c(this, void 0, void 0, (function* () {
                if (this.checkService()) return yield new Promise((e2) => {
                  const t2 = this.getNextReqId(), n2 = ({ args: [i2, r2] }) => {
                    r2 === t2 && (e2(i2), this.destinationActionsChannels.getTaskMap.removeListener(n2));
                  };
                  this.destinationActionsChannels.getTaskMap.addListener(n2), this.sourceActionsChannels.getTaskMap.send(t2);
                });
              }));
            }
            getMediaTypeQueue(e2) {
              return c(this, void 0, void 0, (function* () {
                if (this.checkService()) return yield new Promise((t2) => {
                  const n2 = this.getNextReqId(), i2 = ({ args: [e3, r2] }) => {
                    r2 === n2 && (t2(e3), this.destinationActionsChannels.getMediaTypeQueue.removeListener(i2));
                  };
                  this.destinationActionsChannels.getMediaTypeQueue.addListener(i2), this.sourceActionsChannels.getMediaTypeQueue.send(e2, n2);
                });
              }));
            }
            getToken() {
              return c(this, void 0, void 0, (function* () {
                if (this.checkService()) return yield new Promise((e2) => {
                  const t2 = this.getNextReqId(), n2 = ({ args: [i2, r2] }) => {
                    r2 === t2 && (e2(i2), this.destinationActionsChannels.getToken.removeListener(n2));
                  };
                  this.destinationActionsChannels.getToken.addListener(n2), this.sourceActionsChannels.getToken.send(t2);
                });
              }));
            }
            getIdleCodes() {
              return c(this, void 0, void 0, (function* () {
                if (this.checkService()) return yield new Promise((e2) => {
                  const t2 = this.getNextReqId(), n2 = ({ args: [i2, r2] }) => {
                    r2 === t2 && (e2(i2), this.destinationActionsChannels.getIdleCodes.removeListener(n2));
                  };
                  this.destinationActionsChannels.getIdleCodes.addListener(n2), this.sourceActionsChannels.getIdleCodes.send(t2);
                });
              }));
            }
            getWrapUpCodes() {
              return c(this, void 0, void 0, (function* () {
                if (this.checkService()) return yield new Promise((e2) => {
                  const t2 = this.getNextReqId(), n2 = ({ args: [i2, r2] }) => {
                    r2 === t2 && (e2(i2), this.destinationActionsChannels.getWrapUpCodes.removeListener(n2));
                  };
                  this.destinationActionsChannels.getWrapUpCodes.addListener(n2), this.sourceActionsChannels.getWrapUpCodes.send(t2);
                });
              }));
            }
            getClosestElement(e2, t2) {
              return e2 && e2 !== document && e2 !== window ? e2 instanceof ShadowRoot ? this.getClosestElement(e2.host, t2) : e2 instanceof HTMLElement && e2.matches(t2) ? e2 : this.getClosestElement(e2.parentNode, t2) : null;
            }
          }
          const U = o(r, "[Actions JSAPI] =>");
          class R {
            constructor(e2) {
              this.isInited = false, this.listeners = /* @__PURE__ */ new Map(), this.listenersOnce = /* @__PURE__ */ new Map(), this.logger = e2.logger;
            }
            init(e2) {
              this.aqmServiceEntity = e2.aqmServiceEntity, this.aqmServiceEntityString = e2.aqmServiceEntityString, this.isInited = true;
            }
            cleanup() {
              this.removeAllEventListeners(), this.aqmServiceEntity = void 0, this.aqmServiceEntityString = void 0, this.isInited = false;
            }
            _addEventListener(e2, t2, n2) {
              var i2, r2, o2;
              const s2 = n2 ? "listenersOnce" : "listeners";
              this[s2].has(e2) || this[s2].set(e2, /* @__PURE__ */ new Map());
              const a2 = this[s2].get(e2), c2 = n2 ? "listenOnce" : "listen", u2 = (i3) => {
                let r3 = null;
                return n2 && (r3 = this.aqmServiceEntity[e2].listenOnce(() => this.removeOnceEventListener(e2, t2))), () => {
                  var t3;
                  if (i3) {
                    n2 ? (i3.stopListenOnce(), r3 && r3.stopListenOnce()) : i3.stopListen();
                    const o3 = [];
                    o3.push(`UnBound "${e2.toString()}"`), n2 && o3.push("Once"), this.aqmServiceEntityString && o3.push(`from "${this.aqmServiceEntityString}"`), null === (t3 = this.logger) || void 0 === t3 || t3.info(o3.join(" "));
                  }
                };
              };
              if (this.aqmServiceEntity) if (e2 in this.aqmServiceEntity && c2 in this.aqmServiceEntity[e2]) {
                const r3 = this.aqmServiceEntity[e2][c2](t2);
                a2.set(t2, u2(r3));
                const o3 = [];
                o3.push(`Bound "${e2.toString()}"`), n2 && o3.push("Once"), this.aqmServiceEntityString && o3.push(`to "${this.aqmServiceEntityString}"`), null === (i2 = this.logger) || void 0 === i2 || i2.info(o3.join(" "));
              } else null === (r2 = this.logger) || void 0 === r2 || r2.warn(`EventName "${e2.toString()}" is not recognized, so won't be subscribed...`);
              else null === (o2 = this.logger) || void 0 === o2 || o2.error(`"${this.aqmServiceEntityString}" is not ready yet. .init(...) first...`);
            }
            _removeEventListener(e2, t2, n2) {
              const i2 = n2 ? "listenersOnce" : "listeners";
              if (this[i2].has(e2)) {
                const n3 = this[i2].get(e2);
                if (n3) {
                  if (n3.has(t2)) {
                    n3.get(t2)(), n3.delete(t2);
                  }
                  n3.size < 1 && this[i2].delete(e2);
                }
              }
            }
            addEventListener(e2, t2) {
              this._addEventListener(e2, t2, false);
            }
            addOnceEventListener(e2, t2) {
              this._addEventListener(e2, t2, true);
            }
            removeEventListener(e2, t2) {
              this._removeEventListener(e2, t2, false);
            }
            removeOnceEventListener(e2, t2) {
              this._removeEventListener(e2, t2, true);
            }
            removeAllEventListeners() {
              ["listeners", "listenersOnce"].forEach((e2) => {
                this[e2].forEach((e3, t2) => {
                  e3.forEach((e4, t3) => e4()), e3.clear();
                }), this[e2].clear();
              });
            }
          }
          const L = (e2) => new R(e2);
          var x, D, N, P, _, M, V, j, q;
          !(function(e2) {
            e2.TELEPHONY = "telephony", e2.CHAT = "chat", e2.EMAIL = "email", e2.SOCIAL = "social", e2.MIDCALL_TELEPHONY = "midcall telephony", e2.APPLE_MESSAGES = "appleMessages";
          })(x || (x = {})), (function(e2) {
            e2.QUEUE = "queue", e2.DIAL_NUMBER = "dialNumber", e2.AGENT = "agent", e2.EPDN = "entrypointDialNumber", e2.ENTRY_POINT = "entryPoint";
          })(D || (D = {})), (function(e2) {
            e2.IDLE = "Idle", e2.AVAILABLE = "Available", e2.RONA = "RONA";
          })(N || (N = {})), (function(e2) {
            e2.All = "All", e2.TELEPHONY = "telephony", e2.CHAT = "chat", e2.EMAIL = "email", e2.SOCIAL = "social";
          })(P || (P = {})), (function(e2) {
            e2.SMS = "SMS", e2.TELEPHONY = "Call", e2.CHAT = "Chat", e2.EMAIL = "Email", e2.MESSENGER = "Messenger", e2.WHATSAPP = "WhatsApp", e2.APPLE_BUSINESS_CHAT = "Apple Business Chat", e2.GOOGLE_BUSINESS_MESSAGES = "Google's Business Messages";
          })(_ || (_ = {})), (function(e2) {
            e2.MIDCALL = "midcall", e2.ADHOC = "adhoc", e2.CONTINUOUS = "continuous";
          })(M || (M = {})), (function(e2) {
            e2.EMAIL = "email", e2.CHAT = "chat", e2.TELEPHONY = "telephony", e2.SOCIAL = "social", e2.SMS = "sms", e2.FACEBOOK = "facebook", e2.WHATSAPP = "whatsapp", e2.APPLEMESSAGES = "appleMessages", e2.GOOGLEMESSAGES = "googleMessages";
          })(V || (V = {})), (q = j || (j = {})).validateAgentState = (e2) => Object.values(N).includes(e2), q.validateURL = (e2) => /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(e2), q.validateChannelName = (e2) => Object.values(_).includes(e2), q.validateStateChannelType = (e2) => Array.isArray(e2) && e2.length > 0 && e2.every((e3) => ["telephony", "chat", "email", "social"].includes(e3)), q.validateDestinationType = (e2) => Object.values(D).includes(e2), q.validateMediaType = (e2) => Object.values(x).includes(e2), q.validateUTCTimeStampNumberFormat = (e2) => Number.isInteger(e2) && e2 >= 0 && e2 <= 4102444799999, q.validateNumber = (e2) => Number.isInteger(e2) && e2 >= 0 && e2 <= 2147483647, q.validateBoolean = (e2) => "boolean" == typeof e2 || (0 === e2 || 1 === e2) && q.validatePropValueNotNullAndEmpty(e2), q.validateStringToBoolean = (e2) => {
            const t2 = null == e2 ? void 0 : e2.toLowerCase();
            return "true" === t2 || "false" === t2 || "0" === t2 || "1" === t2;
          }, q.validatePropValueNotNullAndEmpty = (e2) => null !== e2 && "" !== e2, q.validateChannelType = (e2) => Object.values(_).includes(e2), q.validateMonitorType = (e2) => Object.values(M).includes(e2), q.validateUUID = (e2) => /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(e2), q.validateStringNumberOnly = (e2) => /^(\+)?\d+$/.test(e2), q.validateBuddyAgents = (e2, t2) => {
            i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.agentProfileId), t2, "agentProfileId is not a valid UUID"), i.AssertUtils.check(q.validateChannelName(null == e2 ? void 0 : e2.channelName), t2, "channelName is not a valid channel name"), void 0 !== (null == e2 ? void 0 : e2.state) && i.AssertUtils.check(q.validateAgentState(e2.state), t2, "state is not a valid state"), void 0 !== (null == e2 ? void 0 : e2.trackingId) && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.trackingId), t2, "trackingId is not a valid string");
          }, q.validateAuxCodeType = (e2, t2) => {
            i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(e2), t2, "value is null or empty"), i.AssertUtils.check("IDLE_CODE" === e2 || "WRAP_UP_CODE" === e2, t2, "value is not IDLE_CODE or WRAP_UP_CODE");
          }, q.validateAuxCodePayload = (e2, t2) => {
            q.validateAuxCodeType(e2.workType, t2), void 0 !== e2.page && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(e2.page), t2, "page is is null or empty"), void 0 !== e2.pageSize && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(e2.pageSize), t2, "pageSize is is null or empty"), void 0 !== e2.search && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(e2.search), t2, "search is is null or empty"), void 0 !== e2.customFilter && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(e2.customFilter), t2, "customFilter is is null or empty");
          }, q.validateCancelCtq = (e2, t2) => {
            i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.agentId), t2, "agentId is not a valid UUID"), i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.queueId), t2, "queueId is not a valid UUID");
          }, q.validateWrapupPayload = (e2, t2) => {
            i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.wrapUpReason), t2, "wrapUpReason is not a valid string"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.auxCodeId), t2, "auxCodeId is not a valid string"), i.AssertUtils.check(q.validateStringToBoolean(null == e2 ? void 0 : e2.isAutoWrapup), t2, "isAutoWrapup is not a valid boolean value");
          }, q.validateVTeamTransferPayload = (e2, t2) => {
            i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.vteamId), t2, "vteamId is not a valid string"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.vteamType), t2, "vteamType is not a valid string");
          }, q.validateBlindTransferPayload = (e2, t2) => {
            i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.agentId), t2, "agentId is not a valid UUID"), i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.destAgentId), t2, "destAgentId is not a valid UUID"), i.AssertUtils.check(q.validateMediaType(null == e2 ? void 0 : e2.mediaType), t2, "mediaType is not a valid media type"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.destAgentTeamId), t2, "destAgentTeamId is not a valid string"), i.AssertUtils.check(q.validateStringNumberOnly(null == e2 ? void 0 : e2.destAgentDN), t2, "destAgentDN is not a numbers only string"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.destSiteId), t2, "destSiteId is not a valid string");
          }, q.validateConsultPayload = (e2, t2) => {
            i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.agentId), t2, "agentId is not a valid UUID"), void 0 !== (null == e2 ? void 0 : e2.destAgentId) && i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.destAgentId), t2, "destAgentId is not a valid UUID"), void 0 !== (null == e2 ? void 0 : e2.mediaType) && i.AssertUtils.check(q.validateMediaType(null == e2 ? void 0 : e2.mediaType), t2, "mediaType is not a valid media type"), void 0 !== (null == e2 ? void 0 : e2.holdParticipants) && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.holdParticipants), t2, "holdParticipants is not valid");
          }, q.validateConsultTransferPayLoad = (e2, t2) => {
            void 0 !== (null == e2 ? void 0 : e2.agentId) && i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.agentId), t2, "agentId is not a valid UUID"), i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.destAgentId), t2, "destagentId is not a valid UUID"), i.AssertUtils.check(q.validateMediaType(null == e2 ? void 0 : e2.mediaType), t2, "mediaType is not a valid media type"), i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.mediaResourceId), t2, "mediaResourceId is not a valid UUID"), i.AssertUtils.check(q.validateDestinationType(null == e2 ? void 0 : e2.destinationType), t2, "destinationType is not a valid destination type");
          }, q.validateWrapUpV2Payload = (e2, t2) => {
            i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.wrapUpReason), t2, "wrapUpReason is not a valid string"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.auxCodeId), t2, "auxCodeId is not a valid string");
          }, q.validateChangeAgentStateType = (e2, t2) => {
            i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(e2.state), t2, "state is null or empty"), i.AssertUtils.check("available" === e2.state.toLowerCase() || "idle" === e2.state.toLowerCase(), t2, "state is not Available or Idle"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(e2.auxCodeId), t2, "auxCodeId is null or empty"), i.AssertUtils.check(q.validateUUID(e2.agentId), t2, "agentId is not a valid UUID");
          }, q.validateConsultDataV2Payload = (e2, t2) => {
            void 0 !== (null == e2 ? void 0 : e2.to) && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.to), t2, "to is not a valid string or not undefined"), i.AssertUtils.check(q.validateDestinationType(null == e2 ? void 0 : e2.destinationType), t2, "destinationType is not a valid destination type"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.holdParticipants), t2, "holdParticipants is not valid");
          }, q.validateConsultConferenceDataV2Payload = (e2, t2) => {
            void 0 !== (null == e2 ? void 0 : e2.agentId) && i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.agentId), t2, "agentId is not a valid UUID"), void 0 !== (null == e2 ? void 0 : e2.to) && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.to), t2, "to is not a valid string or not undefined"), i.AssertUtils.check(q.validateDestinationType(null == e2 ? void 0 : e2.destinationType), t2, "destinationType is not a valid destination type");
          }, q.validateTransferV2Payload = (e2, t2) => {
            void 0 !== (null == e2 ? void 0 : e2.to) && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.to), t2, "to is not a valid string or not undefined"), i.AssertUtils.check(q.validateDestinationType(null == e2 ? void 0 : e2.destinationType), t2, "destinationType is not a valid destination type");
          }, q.validateBuddyAgentsV2Payload = (e2, t2) => {
            i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.agentProfileId), t2, "agentProfileId is not a valid UUID"), i.AssertUtils.check(q.validateMediaType(null == e2 ? void 0 : e2.mediaType), t2, "mediaType is not a valid media type"), i.AssertUtils.check(q.validateAgentState(null == e2 ? void 0 : e2.state), t2, "state is not a valid state");
          }, q.validateVTeam = (e2, t2) => {
            i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.agentProfileId), t2, "agentProfileId is not a valid UUID"), i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.agentSessionId), t2, "agentSessionId is not a valid UUID"), i.AssertUtils.check(q.validateChannelType(null == e2 ? void 0 : e2.channelType), t2, "channelType is not a valid channel type"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.type), t2, "type is not a valid string"), void 0 !== (null == e2 ? void 0 : e2.trackingId) && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.trackingId), t2, "trackingId is not a valid string");
          }, q.validateDialerTasks = (e2, t2) => {
            (null == e2 ? void 0 : e2.id) && i.AssertUtils.check(q.validateUUID(e2.id), t2, "id is not a valid UUID"), i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.entryPointId), t2, "entryPointId is not a valid UUID"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.destination), t2, "destination is null or empty"), i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.direction), t2, "direction is not a valid UUID"), (null == e2 ? void 0 : e2.origin) && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(e2.origin), t2, "origin is null or empty"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.attributes.key), t2, "attributes.key is null or empty"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.attributes.value), t2, "attributes.value is null or empty"), i.AssertUtils.check(q.validateMediaType(null == e2 ? void 0 : e2.mediaType), t2, "mediaType is not a valid media type"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.outboundType), t2, "outboundType is null or empty");
          }, q.validatePreviewCampaignPayload = (e2, t2) => {
            i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.interactionId), t2, "interactionId is not a valid UUID"), i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(null == e2 ? void 0 : e2.campaignId), t2, "campaignId is null or empty");
          }, q.validateMonitoringRequest = (e2, t2) => {
            i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.id), t2, "id is not a valid UUID"), i.AssertUtils.check(q.validateMonitorType(null == e2 ? void 0 : e2.monitorType), t2, "monitorType is not a valid monitor type"), void 0 !== (null == e2 ? void 0 : e2.queueIds) && e2.queueIds.forEach((e3) => {
              i.AssertUtils.check(q.validateUUID(e3), t2, "queueIds is not a valid UUID");
            }), void 0 !== (null == e2 ? void 0 : e2.teams) && e2.teams.forEach((e3) => {
              i.AssertUtils.check(q.validateUUID(e3), t2, "team is not a valid UUID");
            }), void 0 !== (null == e2 ? void 0 : e2.sites) && e2.sites.forEach((e3) => {
              i.AssertUtils.check(q.validateUUID(e3), t2, "site is not a valid UUID");
            }), void 0 !== (null == e2 ? void 0 : e2.agents) && e2.agents.forEach((e3) => {
              i.AssertUtils.check(q.validateUUID(e3), t2, "agent is not a valid UUID");
            }), void 0 !== (null == e2 ? void 0 : e2.startUTCTimestamp) && i.AssertUtils.check(q.validateUTCTimeStampNumberFormat(e2.startUTCTimestamp), t2, "startUTCTimestamp is not a valid timestamp"), void 0 !== (null == e2 ? void 0 : e2.continuousDuration) && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(e2.continuousDuration), t2, "continuousDuration is not a valid string or not undefined"), void 0 !== (null == e2 ? void 0 : e2.taskId) && i.AssertUtils.check(q.validateUUID(e2.taskId), t2, "taskId is not a valid UUID"), i.AssertUtils.check(q.validateUUID(null == e2 ? void 0 : e2.trackingId), t2, "trackingId is not a valid UUID"), (null == e2 ? void 0 : e2.invisibleMode) && i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(e2.invisibleMode), t2, "invisibleMode is not a valid string or not undefined");
          }, q.validateMultiConsultPayload = (e2, t2) => {
            e2 && Object.entries(e2).forEach(([e3, n2]) => {
              switch (e3) {
                case "agentId":
                  i.AssertUtils.check(q.validateUUID(String(n2)), t2, "agentId is not a valid UUID");
                  break;
                case "destAgentId":
                  i.AssertUtils.check(q.validateUUID(String(n2)), t2, "destAgentId is not a valid UUID");
                  break;
                case "mediaType":
                  i.AssertUtils.check(q.validateMediaType(n2), t2, "mediaType is not a valid media type");
                  break;
                case "holdParticipants":
                  i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(n2), t2, "holdParticipants is not valid");
                  break;
                case "destAgentDN":
                  i.AssertUtils.check(q.validateStringNumberOnly(String(n2)), t2, "destAgentDN is not a numbers only string");
                  break;
                case "destinationType":
                  i.AssertUtils.check(q.validateDestinationType(n2), t2, "destinationType is not a valid destination type");
                  break;
                case "destAgentTeamId":
                  i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(String(n2)), t2, "destAgentTeamId is not a valid string");
                  break;
                case "destSiteId":
                  i.AssertUtils.check(q.validatePropValueNotNullAndEmpty(String(n2)), t2, "destSiteId is not a valid string");
                  break;
                case "queueId":
                  i.AssertUtils.check(q.validateUUID(String(n2)), t2, "queueId is not a valid UUID");
                  break;
                case "trackingId":
                  i.AssertUtils.check(q.validateUUID(String(n2)), t2, "trackingId is not a valid string");
              }
            });
          };
          var F = function(e2, t2, n2, i2) {
            return new (n2 || (n2 = Promise))((function(r2, o2) {
              function s2(e3) {
                try {
                  c2(i2.next(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function a2(e3) {
                try {
                  c2(i2.throw(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function c2(e3) {
                var t3;
                e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                  e4(t3);
                }))).then(s2, a2);
              }
              c2((i2 = i2.apply(e2, t2 || [])).next());
            }));
          };
          class B {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.aqmEvents = e2.aqmEvents, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.contact, aqmServiceEntityString: "SERVICE.aqm.contact" }), this.logger.info("Inited"));
            }
            cleanup() {
              this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            sendDtmf(e2) {
              this.checkService() && this.SERVICE.webCalling.sendDTMF(e2);
            }
            accept(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "accept", "interactionId is not a valid UUID"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.accept(e2);
              }));
            }
            consultAccept(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "consultAccept", "interactionId is not a valid UUID"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.consultAccept(e2);
              }));
            }
            buddyAgents(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return j.validateBuddyAgents(e2.data, "buddyAgents"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.buddyAgents(e2);
              }));
            }
            end(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "end", "interactionId is not a valid UUID"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.end(e2);
              }));
            }
            consultEnd(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "consultEnd", "interactionId is not a valid UUID"), i.AssertUtils.check(j.validateBoolean(e2.isConsult), "consultEnd", "isConsult is not a valid boolean value"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.consultEnd(e2);
              }));
            }
            cancelCtq(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "cancelCtq", "interactionId is not a valid UUID"), j.validateCancelCtq(e2.data, "cancelCtq"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.cancelCtq(e2);
              }));
            }
            wrapup(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "cancelCtq", "interactionId is not a valid UUID"), j.validateWrapupPayload(e2.data, "wrapup"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.wrapup(e2);
              }));
            }
            vteamTransfer(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "cancelCtq", "interactionId is not a valid UUID"), j.validateVTeamTransferPayload(e2.data, "vteamTransfer"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.vteamTransfer(e2);
              }));
            }
            blindTransfer(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "blindTransfer", "interactionId is not a valid UUID"), j.validateBlindTransferPayload(e2.data, "blindTransfer"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.blindTransfer(e2);
              }));
            }
            hold(e2) {
              var t2, n2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "hold", "interactionId is not a valid UUID"), i.AssertUtils.check(j.validateUUID(null === (t2 = e2.data) || void 0 === t2 ? void 0 : t2.mediaResourceId), "hold", "mediaResourceId is not a valid UUID"), null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.aqm.contact.hold(e2);
              }));
            }
            unHold(e2) {
              var t2, n2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "unHold", "interactionId is not a valid UUID"), i.AssertUtils.check(j.validateUUID(null === (t2 = e2.data) || void 0 === t2 ? void 0 : t2.mediaResourceId), "unHold", "mediaResourceId is not a valid UUID"), null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.aqm.contact.unHold(e2);
              }));
            }
            consult(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "consult", "interactionId is not a valid UUID"), i.AssertUtils.check(j.validateURL(e2.url), "consult", "url is not a valid URL"), j.validateMultiConsultPayload(e2.data, "consult"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.consult(e2);
              }));
            }
            consultConference(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "consultConference", "interactionId is not a valid UUID"), j.validateConsultPayload(e2.data, "consultConference"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.consultConference(e2);
              }));
            }
            decline(e2) {
              var t2, n2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "decline", "interactionId is not a valid UUID"), i.AssertUtils.check(j.validateUUID(null === (t2 = e2.data) || void 0 === t2 ? void 0 : t2.mediaResourceId), "decline", "mediaResourceId is not a valid UUID"), i.AssertUtils.check(j.validateBoolean(e2.isConsult), "decline", "isConsult is not a valid boolean value"), null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.aqm.contact.decline(e2);
              }));
            }
            consultTransfer(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "decline", "interactionId is not a valid UUID"), j.validateConsultTransferPayLoad(e2.data, "consultTransfer"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.consultTransfer(e2);
              }));
            }
            vteamList(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return j.validateVTeam(e2.data, "vteamList"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.vteamList(e2);
              }));
            }
            pauseRecording(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "pauseRecording", "interactionId is not a valid UUID"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.pauseRecording(e2);
              }));
            }
            resumeRecording(e2) {
              var t2, n2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "resumeRecording", "interactionId is not a valid UUID"), i.AssertUtils.check(j.validateBoolean(null === (t2 = e2.data) || void 0 === t2 ? void 0 : t2.autoResumed), "resumeRecording", "autoResumed is not a valid boolean value"), null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.aqm.contact.resumeRecording(e2);
              }));
            }
            acceptV2(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "acceptV2", "interactionId is not a valid UUID"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.acceptV2(e2);
              }));
            }
            endV2(e2) {
              var t2, n2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "endV2", "interactionId is not a valid UUID"), e2.isEndingFromNonPrimary && i.AssertUtils.check(j.validateBoolean(e2.isEndingFromNonPrimary), "endV2", "isEndingFromNonPrimary is not a valid boolean value"), (null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.endV2) ? null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.aqm.contact.endV2(e2) : void 0;
              }));
            }
            cancelTaskV2(e2) {
              var t2, n2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "cancelTaskV2", "interactionId is not a valid UUID"), (null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.cancelTaskV2) ? null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.aqm.contact.cancelTaskV2(e2) : void 0;
              }));
            }
            pauseRecordingV2(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "pauseRecordingV2", "interactionId is not a valid UUID"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.pauseRecordingV2(e2);
              }));
            }
            resumeRecordingV2(e2) {
              var t2, n2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "resumeRecordingV2", "interactionId is not a valid UUID"), i.AssertUtils.check(j.validateBoolean(null === (t2 = e2.data) || void 0 === t2 ? void 0 : t2.autoResumed), "resumeRecordingV2", "autoResumed is not a valid boolean value"), null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.aqm.contact.resumeRecordingV2(e2);
              }));
            }
            wrapupV2(e2) {
              var t2, n2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "wrapupV2", "interactionId is not a valid UUID"), j.validateWrapUpV2Payload(e2.data, "wrapupV2"), (null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.wrapupV2) ? null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.aqm.contact.wrapupV2(e2) : void 0;
              }));
            }
            consultV2(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "consultV2", "interactionId is not a valid UUID"), j.validateConsultDataV2Payload(e2.data, "consultV2"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.consultV2(e2);
              }));
            }
            consultEndV2(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "consultEndV2", "interactionId is not a valid UUID"), i.AssertUtils.check(j.validateBoolean(e2.isConsult), "consultEndV2", "isConsult is not a valid boolean value"), e2.isSecondaryEpDnAgent && i.AssertUtils.check(j.validateBoolean(e2.isSecondaryEpDnAgent), "consultEndV2", "isSecondaryEpDnAgent is not a valid boolean value"), e2.queueId && i.AssertUtils.check(j.validateUUID(e2.queueId), "consultEndV2", "queueId is not a valid UUID"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.consultEndV2(e2);
              }));
            }
            consultConferenceV2(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "consultConferenceV2", "interactionId is not a valid UUID"), j.validateConsultConferenceDataV2Payload(e2.data, "consultConferenceV2"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.consultConferenceV2(e2);
              }));
            }
            exitConference(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "exitConference", "interactionId is not a valid UUID"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.exitConference(e2);
              }));
            }
            consultTransferV2(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "consultTransferV2", "interactionId is not a valid UUID"), j.validateTransferV2Payload(e2.data, "consultTransferV2"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.consultTransferV2(e2);
              }));
            }
            blindTransferV2(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "blindTransferV2", "interactionId is not a valid UUID"), j.validateTransferV2Payload(e2.data, "blindTransferV2"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.blindTransferV2(e2);
              }));
            }
            vteamTransferV2(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "vteamTransferV2", "interactionId is not a valid UUID"), j.validateTransferV2Payload(e2.data, "vteamTransferV2"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.vteamTransferV2(e2);
              }));
            }
            buddyAgentsV2(e2) {
              var t2;
              return F(this, void 0, void 0, (function* () {
                if (this.checkService()) return j.validateBuddyAgentsV2Payload(e2.data, "buddyAgentsV2"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.contact.buddyAgentsV2(e2);
              }));
            }
            addEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addEventListener(e2, t2);
            }
            addOnceEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addOnceEventListener(e2, t2);
            }
            removeEventListener(e2, t2) {
              this.aqmEvents.removeEventListener(e2, t2);
            }
            removeOnceEventListener(e2, t2) {
              this.aqmEvents.removeOnceEventListener(e2, t2);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const H = o(r, "[AgentContact JSAPI] =>"), z = o(H, "[AqmServiceEvents: Contact] => ");
          var J = n(8), W = n.n(J), Z = n(15), G = n.n(Z), Y = function(e2, t2, n2, i2) {
            return new (n2 || (n2 = Promise))((function(r2, o2) {
              function s2(e3) {
                try {
                  c2(i2.next(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function a2(e3) {
                try {
                  c2(i2.throw(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function c2(e3) {
                var t3;
                e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                  e4(t3);
                }))).then(s2, a2);
              }
              c2((i2 = i2.apply(e2, t2 || [])).next());
            }));
          };
          const $ = { agentName: void 0, agentProfileID: void 0, agentSessionId: void 0, idleCode: void 0, teamId: void 0, teamName: void 0, dn: void 0, status: void 0, subStatus: void 0, idleCodes: void 0, wrapupCodes: void 0, outDialRegex: void 0, isOutboundEnabledForTenant: void 0, isOutboundEnabledForAgent: void 0, isEndCallEnabled: void 0, isEndConsultEnabled: void 0, allowConsultToQueue: void 0, isAdhocDialingEnabled: void 0, isAgentAvailableAfterOutdial: void 0, isCampaignManagementEnabled: void 0, agentPersonalStatsEnabled: void 0 };
          class K {
            stateChangeByChannelType(e2) {
              throw new Error("Method not implemented.");
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            emit(e2, ...t2) {
              this.emitter.emit(e2, ...t2);
            }
            update(e2) {
              const t2 = Object.keys(e2).reduce((t3, n2) => {
                const i2 = e2[n2], r2 = this.latestData[n2];
                return JSON.stringify(i2) !== JSON.stringify(r2) && t3.push({ name: n2, value: i2, oldValue: r2 }), t3;
              }, []);
              t2.length && (t2.forEach((e3) => this.latestData[e3.name] = e3.value), this.emit("updated", t2));
            }
            static getOutdialRegex(e2) {
              if (e2 && e2.dialPlanEntity) {
                const t2 = e2.dialPlanEntity.find((e3) => "Any Format" === e3.name);
                if (t2) return t2.regex;
              }
              return "";
            }
            constructor(e2) {
              this.emitter = W()(), this.listeners = /* @__PURE__ */ new Set(), this.teams = [], this.idleCodes = {}, this.latestData = Object.assign({}, $), this.logger = e2.logger, this.serviceChecker = e2.serviceChecker;
            }
            static findTeamName(e2, t2) {
              const n2 = e2.find((e3) => e3.teamId === t2);
              return (null == n2 ? void 0 : n2.teamName) || "";
            }
            init(e2) {
              return Y(this, void 0, void 0, (function* () {
                e2 && (this.SERVICE = e2), this.checkService() && (yield this.fetchLatestData(), this.subscribeSelfDataEvents(), this.logger.info("Inited"));
              }));
            }
            cleanup() {
              this.unsubscribeSelfDataEvents(), this.removeAllEventListeners(), this.SERVICE = void 0, this.update(Object.assign({}, $)), this.logger.info("Cleaned");
            }
            fetchLatestData() {
              var e2, t2, n2, i2, r2, o2, s2;
              return Y(this, void 0, void 0, (function* () {
                const a2 = (null === (e2 = this.SERVICE) || void 0 === e2 ? void 0 : e2.conf.profile) ? null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.conf.profile : yield null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.conf.fetchProfile();
                if (a2) {
                  const { teams: e3, agentName: t3, agentProfileID: n3, defaultDn: c2, agentSubStatus: u2, agentStatus: l2, idleCodes: d2, wrapupCodes: h2, dialPlan: f2, isOutboundEnabledForTenant: v2, isOutboundEnabledForAgent: p2, isAdhocDialingEnabled: g2, isEndCallEnabled: m2, isEndConsultEnabled: y2, allowConsultToQueue: E2, isAgentAvailableAfterOutdial: b2, isCampaignManagementEnabled: w2, agentPersonalStatsEnabled: S2 } = a2;
                  let { idleCode: k2 } = a2;
                  const I2 = c2;
                  let A2 = l2, C2 = u2;
                  if (this.teams = e3, null == d2 || d2.forEach((e4) => {
                    this.idleCodes[e4.id] = { id: e4.id, name: e4.name };
                  }), !k2 || !(null === (i2 = this.SERVICE) || void 0 === i2 ? void 0 : i2.conf.isReloginSuccess)) {
                    const e4 = yield null === (r2 = this.SERVICE) || void 0 === r2 ? void 0 : r2.aqm.agent.reload();
                    (null == e4 ? void 0 : e4.data) && (k2 = "0" != e4.data.auxCodeId && e4.data.auxCodeId ? this.idleCodes[e4.data.auxCodeId] : void 0, A2 = null === (o2 = null == e4 ? void 0 : e4.data) || void 0 === o2 ? void 0 : o2.status, C2 = null === (s2 = null == e4 ? void 0 : e4.data) || void 0 === s2 ? void 0 : s2.subStatus);
                  }
                  const T2 = K.getOutdialRegex(f2);
                  this.update({ agentName: t3, agentProfileID: n3, dn: I2, status: A2, subStatus: C2, idleCode: k2, idleCodes: d2, wrapupCodes: h2, outDialRegex: T2, isOutboundEnabledForTenant: v2, isOutboundEnabledForAgent: p2, isAdhocDialingEnabled: g2, isEndCallEnabled: m2, isEndConsultEnabled: y2, allowConsultToQueue: E2, isAgentAvailableAfterOutdial: b2, isCampaignManagementEnabled: w2, agentPersonalStatsEnabled: S2 });
                }
              }));
            }
            subscribeSelfDataEvents() {
              var e2, t2, n2, i2, r2, o2;
              if (this.checkService()) {
                {
                  const t3 = null === (e2 = this.SERVICE) || void 0 === e2 ? void 0 : e2.aqm.agent.eAgentReloginSuccess.listen(({ data: { agentSessionId: e3 = "", teamId: t4 = "", dn: n3 = "", status: i3 = "", subStatus: r3 = "", auxCodeId: o3 = "" } }) => {
                    const s2 = K.findTeamName(this.teams, t4);
                    this.update({ agentSessionId: e3, teamId: t4, teamName: s2, dn: n3, status: i3, subStatus: r3, idleCode: this.idleCodes[o3] });
                  });
                  this.listeners.add(() => null == t3 ? void 0 : t3.stopListen());
                }
                {
                  const e3 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.agent.eAgentStationLoginSuccess.listen(({ data: { agentSessionId: e4 = "", teamId: t3 = "", status: n3 = "", subStatus: i3 = "", auxCodeId: r3 = "" } }) => {
                    const o3 = K.findTeamName(this.teams, t3);
                    this.update({ agentSessionId: e4, teamId: t3, teamName: o3, status: n3, subStatus: i3, idleCode: this.idleCodes[r3] });
                  });
                  this.listeners.add(() => null == e3 ? void 0 : e3.stopListen());
                }
                {
                  const e3 = null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.aqm.agent.eAgentStateChangeSuccess.listen(({ data: { agentSessionId: e4 = "", status: t3 = "", subStatus: n3 = "", auxCodeId: i3 = "" } }) => {
                    var r3;
                    const o3 = this.idleCodes ? null === (r3 = this.idleCodes[i3]) || void 0 === r3 ? void 0 : r3.name : "";
                    this.update({ agentSessionId: e4, status: t3, subStatus: n3, idleCode: { id: i3, name: o3 } });
                  });
                  this.listeners.add(() => null == e3 ? void 0 : e3.stopListen());
                }
                {
                  const e3 = null === (i2 = this.SERVICE) || void 0 === i2 ? void 0 : i2.aqm.agent.eAgentDNRegistered.listen(({ data: { dn: e4 = "" } }) => {
                    this.update({ dn: e4 });
                  });
                  this.listeners.add(() => null == e3 ? void 0 : e3.stopListen());
                }
                {
                  const e3 = null === (r2 = this.SERVICE) || void 0 === r2 ? void 0 : r2.aqm.agent.eAgentChannelReloginSuccess.listen((e4) => {
                    this.emit("eAgentChannelReloginSuccess", e4);
                  });
                  this.listeners.add(() => null == e3 ? void 0 : e3.stopListen());
                }
                {
                  const e3 = null === (o2 = this.SERVICE) || void 0 === o2 ? void 0 : o2.aqm.agent.eAgentChannelStateChanged.listen((e4) => {
                    this.emit("eAgentChannelStateChanged", e4);
                  });
                  this.listeners.add(() => null == e3 ? void 0 : e3.stopListen());
                }
              }
            }
            unsubscribeSelfDataEvents() {
              this.listeners.forEach((e2) => e2()), this.listeners.clear();
            }
            stateChange(e2) {
              var t2, n2, r2;
              return Y(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e2.state), "stateChange", "state is null or empty"), i.AssertUtils.check("available" === (null === (t2 = e2.state) || void 0 === t2 ? void 0 : t2.toLowerCase()) || "idle" === (null === (n2 = e2.state) || void 0 === n2 ? void 0 : n2.toLowerCase()), "stateChange", "state is not Available or Idle"), i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e2.auxCodeIdArray), "stateChange", "auxCodeIdArray is null or empty"), null === (r2 = this.SERVICE) || void 0 === r2 ? void 0 : r2.aqm.agent.stateChange({ data: e2 });
              }));
            }
            stateChangeV2(e2) {
              var t2;
              return Y(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e2.state), "stateChange", "state is null or empty"), i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e2.auxCodeId), "stateChange", "auxCodeId is null or empty"), i.AssertUtils.check(j.validateStateChannelType(e2.channelType), "stateChange", "channelType is null or empty or invalid"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.agent.stateChangeV2({ data: e2 });
                r.info("stateChangeV2 - Service is not available");
              }));
            }
            mockOutdialAniList() {
              var e2, t2;
              return Y(this, void 0, void 0, (function* () {
                if (this.checkService()) return (null === (e2 = this.SERVICE) || void 0 === e2 ? void 0 : e2.aqm.agent.mockOutdialAniList) && (null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.agent.mockOutdialAniList());
              }));
            }
            fetchAddressBooks() {
              var e2, t2;
              return Y(this, void 0, void 0, (function* () {
                if (this.checkService()) return (null === (e2 = this.SERVICE) || void 0 === e2 ? void 0 : e2.aqm.agent.fetchAddressBooks) && (null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.agent.fetchAddressBooks());
              }));
            }
            changeAgentState(e2, t2) {
              var n2;
              return Y(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2), "changeAgentState", "orgId is not a valid UUID"), j.validateChangeAgentStateType(t2, "changeAgentState"), null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.aqm.supervisor.changeAgentState({ orgId: e2, data: t2 });
              }));
            }
            fetchAgentIdleCodes(e2, t2) {
              var n2;
              return Y(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2), "fetchAgentIdleCodes", "orgId is not a valid UUID"), i.AssertUtils.check(j.validateUUID(t2), "fetchAgentIdleCodes", "agentId is not a valid UUID"), yield null === (n2 = this.SERVICE) || void 0 === n2 ? void 0 : n2.abs.fetchAgentIdleCodes({ orgId: e2, agentId: t2 });
              }));
            }
            fetchOrganizationIdleCodes(e2) {
              var t2;
              return Y(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2), "fetchOrganizationIdleCodes", "orgId is not a valid UUID"), yield null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.abs.fetchIdleCodes({ orgId: e2, accessType: "ALL" });
              }));
            }
            addEventListener(e2, t2) {
              this.checkService() && this.emitter.on(e2, t2);
            }
            removeEventListener(e2, t2) {
              this.checkService() && this.emitter.off(e2, t2);
            }
            removeAllEventListeners() {
              G()(this.emitter);
            }
          }
          const X = o(r, "[AgentInfo JSAPI] =>");
          var Q = function(e2, t2, n2, i2) {
            return new (n2 || (n2 = Promise))((function(r2, o2) {
              function s2(e3) {
                try {
                  c2(i2.next(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function a2(e3) {
                try {
                  c2(i2.throw(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function c2(e3) {
                var t3;
                e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                  e4(t3);
                }))).then(s2, a2);
              }
              c2((i2 = i2.apply(e2, t2 || [])).next());
            }));
          };
          class ee {
            waitUntil(e2) {
              return Q(this, void 0, void 0, (function* () {
                if ("function" == typeof e2) {
                  yield new Promise((e3) => setTimeout(e3, 1e3 / 30));
                  !e2() && (yield this.waitUntil(e2));
                }
              }));
            }
            constructor(e2) {
              this.initEventType = {}, this.emitter = W()(), this.logger = e2.logger, this.agentxSERVICE = e2.SERVICE;
            }
            checkService(e2) {
              return Q(this, void 0, void 0, (function* () {
                e2 ? (e2.isInited || (this.logger.warn("SERVICE is not inited. Awaiting it's initAgentxServices(...)..."), yield this.waitUntil(() => e2.isInited)), this.logger.info("SERVICE is inited. Continuing..."), this.emit("inited")) : this.logger.error("SERVICE is not defiend...");
              }));
            }
            emit(e2, ...t2) {
              this.emitter.emit(e2, ...t2);
            }
            init(e2) {
              return Q(this, void 0, void 0, (function* () {
                this.agentxSERVICE ? yield this.checkService(this.agentxSERVICE) : this.logger.error("SERVICE is not defined..."), this.initEventType.widgetName = e2.widgetName, this.initEventType.widgetProvider = e2.widgetProvider, this.publishEvent("agentx-js-sdk-init");
              }));
            }
            registerCrmConnector(e2) {
              if (window.self !== window.top) {
                this.initEventType.crmPlatform = e2.crmPlatform, this.initEventType.crmConnectorProvider = e2.crmConnectorProvider || "Cisco", r.info(`CRm Connector registered through JS SDK... [crmPlatform: ${this.initEventType.crmPlatform}, widgetProvider: ${this.initEventType.crmConnectorProvider}]  `);
                const t2 = document.referrer;
                r.info("This Desktop is loaded inside an iframe.", t2), this.publishEvent("agentx-js-sdk-register-crm-connector");
              } else r.warn("This Desktop is not loaded inside an iframe. CRM Connector is not registered.");
            }
            publishEvent(e2) {
              const { crmPlatform: t2, crmConnectorProvider: n2, widgetName: i2, widgetProvider: o2 } = this.initEventType, s2 = Object.assign({}, ...Object.entries(this.initEventType).map(([e3, t3]) => t3 ? { [e3]: t3 } : {}));
              this.logger.info("initEvent", s2), r.info(`Publishing js sdk init ${e2} event : [widgetName: ${i2}, widgetProvider: ${o2}, crmPlatform: ${t2}, crmConnectorProvider: ${n2}]`), this.agentxSERVICE && this.agentxSERVICE.isInited && this.agentxSERVICE.webexMetrics && (r.info(`tracking behavioral for ${e2} event `), this.agentxSERVICE.webexMetrics.trackBehavioralEvent(e2, Object.assign({}, s2)));
            }
            cleanup() {
              this.agentxSERVICE = void 0, this.emit("cleaned"), this.logger.info("Cleaned");
            }
            get clientLocale() {
              return null != window.navigator.languages ? window.navigator.languages[0] : window.navigator.language;
            }
            addEventListener(e2, t2) {
              this.emitter.on(e2, t2);
            }
            removeEventListener(e2, t2) {
              this.emitter.off(e2, t2);
            }
          }
          const te = o(r, "[Config JSAPI] =>");
          var ne = function(e2, t2, n2, i2) {
            return new (n2 || (n2 = Promise))((function(r2, o2) {
              function s2(e3) {
                try {
                  c2(i2.next(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function a2(e3) {
                try {
                  c2(i2.throw(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function c2(e3) {
                var t3;
                e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                  e4(t3);
                }))).then(s2, a2);
              }
              c2((i2 = i2.apply(e2, t2 || [])).next());
            }));
          };
          class ie {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.aqmEvents = e2.aqmEvents, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.dialer, aqmServiceEntityString: "SERVICE.aqm.dialer" }), this.logger.info("Inited"));
            }
            cleanup() {
              this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            startOutdial(e2) {
              var t2;
              return ne(this, void 0, void 0, (function* () {
                if (this.checkService()) return j.validateDialerTasks(e2.data, "startOutdial"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.dialer.startOutdial(e2);
              }));
            }
            previewCampaignAccept(e2) {
              var t2;
              return ne(this, void 0, void 0, (function* () {
                if (this.checkService()) return j.validatePreviewCampaignPayload(e2.data, "previewCampaignAccept"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.dialer.acceptPreviewContact(e2);
              }));
            }
            previewCampaignSkip(e2) {
              var t2;
              return ne(this, void 0, void 0, (function* () {
                if (this.checkService()) return j.validatePreviewCampaignPayload(e2.data, "previewCampaignSkip"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.dialer.skipPreviewContact(e2);
              }));
            }
            removePreviewContact(e2) {
              var t2;
              return ne(this, void 0, void 0, (function* () {
                if (this.checkService()) return j.validatePreviewCampaignPayload(e2.data, "removePreviewContact"), null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.dialer.removePreviewContact(e2);
              }));
            }
            updateCadVariables(e2) {
              var t2, n2, r2, o2, s2;
              return ne(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "updateCadVariables", "interactionId is not valid UUID"), i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(null === (n2 = null === (t2 = e2.data) || void 0 === t2 ? void 0 : t2.attributes) || void 0 === n2 ? void 0 : n2.key), "updateCadVariables", "attributes.key is not valid"), i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(null === (o2 = null === (r2 = e2.data) || void 0 === r2 ? void 0 : r2.attributes) || void 0 === o2 ? void 0 : o2.value), "updateCadVariables", "attributes.value is not valid"), e2.secureCad && e2.secureCad.forEach((e3) => {
                  i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e3), "updateCadVariables", "secureCad is not valid");
                }), e2.keyId && i.AssertUtils.check(j.validateUUID(e2.keyId), "updateCadVariables", "keyId is not valid UUID"), e2.keyVersion && i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e2.keyVersion), "updateCadVariables", "keyVersion is not valid"), null === (s2 = this.SERVICE) || void 0 === s2 ? void 0 : s2.aqm.dialer.updateCadVariables(e2);
              }));
            }
            addEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addEventListener(e2, t2);
            }
            addOnceEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addOnceEventListener(e2, t2);
            }
            removeEventListener(e2, t2) {
              this.aqmEvents.removeEventListener(e2, t2);
            }
            removeOnceEventListener(e2, t2) {
              this.aqmEvents.removeOnceEventListener(e2, t2);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const re = o(r, "[Dialer JSAPI] =>"), oe = o(re, "[AqmServiceEvents: Dialer] =>");
          class se {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && this.logger.info("Inited");
            }
            cleanup() {
              this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            createInstance(e2) {
              return i.I18N.createService(e2);
            }
            createMixin(e2) {
              return i.I18N.createMixin(e2);
            }
            get DEFAULT_INIT_OPTIONS() {
              var e2;
              if (this.checkService()) return null === (e2 = this.SERVICE) || void 0 === e2 ? void 0 : e2.i18n.DEFAULT_INIT_OPTIONS;
            }
            getMergedInitOptions(...e2) {
              return i.I18N.mergeServiceInitOptions(...e2);
            }
          }
          const ae = o(r, "[I18N JSAPI] =>");
          class ce {
            constructor(e2) {
              this.clientLoggers = /* @__PURE__ */ new Map(), this.logger = e2.logger;
            }
            createLogger(e2) {
              const t2 = Object(i.createLogger)(e2);
              return this.clientLoggers.set(e2, t2), this.logger.info(`Client logger created: "${e2}"`), t2;
            }
            cleanupLogs(e2) {
              this.clientLoggers.has(e2) && i.Logger.POOL.cleanupPrefixedLogs(e2);
            }
            browserDownloadLogsJson(e2) {
              this.clientLoggers.has(e2) && i.Logger.POOL.browserDownloadPrefixedLogsJson(e2);
            }
            browserDownloadLogsText(e2) {
              this.clientLoggers.has(e2) && i.Logger.POOL.browserDownloadPrefixedLogsText(e2);
            }
            getLogsCollection(e2) {
              if (this.clientLoggers.has(e2)) return i.Logger.POOL.getPrefixedLogsCollection(e2);
            }
            getLogsJsonUrl(e2) {
              if (this.clientLoggers.has(e2)) return i.Logger.POOL.getPrefixedLogsJsonUrl(e2);
            }
            getLogsTextUrl(e2) {
              if (this.clientLoggers.has(e2)) return i.Logger.POOL.getPrefixedLogsTextUrl(e2);
            }
          }
          const ue = o(r, "[Logger JSAPI] =>");
          class le {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.aqmEvents = e2.aqmEvents, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.screenpop, aqmServiceEntityString: "SERVICE.aqm.screenpop" }), this.logger.info("Inited"));
            }
            cleanup() {
              this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            addEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addEventListener(e2, t2);
            }
            addOnceEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addOnceEventListener(e2, t2);
            }
            removeEventListener(e2, t2) {
              this.aqmEvents.removeEventListener(e2, t2);
            }
            removeOnceEventListener(e2, t2) {
              this.aqmEvents.removeOnceEventListener(e2, t2);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const de = o(r, "[ScreenPop JSAPI] =>"), he = o(de, "[AqmServiceEvents: ScreenPop] =>");
          class fe {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && this.logger.info("Inited");
            }
            cleanup() {
              this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            listenKeyPress(...e2) {
              var t2;
              this.checkService() && (null === (t2 = this.SERVICE) || void 0 === t2 || t2.shortcut.event.listenKeyPress(...e2));
            }
            listenKeyConflict(...e2) {
              var t2;
              this.checkService() && (null === (t2 = this.SERVICE) || void 0 === t2 || t2.shortcut.event.listenKeyConflict(...e2));
            }
            listenConflictResolved(...e2) {
              var t2;
              this.checkService() && (null === (t2 = this.SERVICE) || void 0 === t2 || t2.shortcut.event.listenConflictResolved(...e2));
            }
            register(...e2) {
              var t2;
              this.checkService() && (null === (t2 = this.SERVICE) || void 0 === t2 || t2.shortcut.register(...e2));
            }
            unregisterKeys(...e2) {
              var t2;
              this.checkService() && (null === (t2 = this.SERVICE) || void 0 === t2 || t2.shortcut.unregisterKeys(...e2));
            }
            getRegisteredKeys() {
              var e2;
              if (this.checkService()) return null === (e2 = this.SERVICE) || void 0 === e2 ? void 0 : e2.shortcut.getRegisteredKeys();
            }
            get DEFAULT_SHORTCUT_KEYS() {
              var e2;
              return null === (e2 = this.SERVICE) || void 0 === e2 ? void 0 : e2.shortcut.DEFAULT_SHORTCUT_KEYS;
            }
            get MODIFIERS() {
              var e2;
              return null === (e2 = this.SERVICE) || void 0 === e2 ? void 0 : e2.shortcut.MODIFIERS;
            }
            get REGISTERED_KEYS() {
              var e2;
              return null === (e2 = this.SERVICE) || void 0 === e2 ? void 0 : e2.shortcut.REGISTERED_KEYS;
            }
          }
          const ve = o(r, "[ShortcutKey JSAPI] =>");
          var pe = function(e2, t2, n2, i2) {
            return new (n2 || (n2 = Promise))((function(r2, o2) {
              function s2(e3) {
                try {
                  c2(i2.next(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function a2(e3) {
                try {
                  c2(i2.throw(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function c2(e3) {
                var t3;
                e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                  e4(t3);
                }))).then(s2, a2);
              }
              c2((i2 = i2.apply(e2, t2 || [])).next());
            }));
          };
          class ge {
            waitUntil(e2) {
              return pe(this, void 0, void 0, (function* () {
                if ("function" == typeof e2) {
                  yield new Promise((e3) => setTimeout(e3, 1e3 / 30));
                  !e2() && (yield this.waitUntil(e2));
                }
              }));
            }
            checkService() {
              var e2, t2, n2, i2, r2;
              return pe(this, void 0, void 0, (function* () {
                window.wxcc && (null === (e2 = window.wxcc) || void 0 === e2 ? void 0 : e2.rtdwc) ? ((null === (n2 = null === (t2 = window.wxcc) || void 0 === t2 ? void 0 : t2.rtdwc) || void 0 === n2 ? void 0 : n2.error) && (this.logger.error("RTDWC initialization failed. Awaiting Websocket connection to establish", null === (r2 = null === (i2 = window.wxcc) || void 0 === i2 ? void 0 : i2.rtdwc) || void 0 === r2 ? void 0 : r2.error), yield this.waitUntil(() => {
                  var e3, t3;
                  return !(null === (t3 = null === (e3 = window.wxcc) || void 0 === e3 ? void 0 : e3.rtdwc) || void 0 === t3 ? void 0 : t3.error);
                })), this.logger.info("Websocket connection established successfully. Continue to subscribe...")) : this.logger.error("issue in loading rtdwc");
              }));
            }
            constructor(e2) {
              this.emitter = W()(), this.logger = e2.logger;
            }
            init() {
              return pe(this, void 0, void 0, (function* () {
                yield this.checkService(), this.logger.info("rtdwc initialized");
              }));
            }
            subscribe({ datasetName: e2, update: t2, error: n2 }) {
              var i2, r2;
              return pe(this, void 0, void 0, (function* () {
                return yield this.checkService(), yield null === (r2 = null === (i2 = window.wxcc) || void 0 === i2 ? void 0 : i2.rtdwc) || void 0 === r2 ? void 0 : r2.subscribe({ datasetName: e2, update: t2, error: n2 });
              }));
            }
          }
          const me = o(r, "[RTDWC JSAPI] =>");
          var ye = function(e2, t2, n2, i2) {
            return new (n2 || (n2 = Promise))((function(r2, o2) {
              function s2(e3) {
                try {
                  c2(i2.next(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function a2(e3) {
                try {
                  c2(i2.throw(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function c2(e3) {
                var t3;
                e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                  e4(t3);
                }))).then(s2, a2);
              }
              c2((i2 = i2.apply(e2, t2 || [])).next());
            }));
          };
          class Ee {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.aqmEvents = e2.aqmEvents, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.supervisor, aqmServiceEntityString: "SERVICE.aqm.supervisor" }), this.logger.info("[JSAPI] Monitoring Inited"));
            }
            cleanup() {
              this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            startMonitoring(e2) {
              var t2, n2;
              return ye(this, void 0, void 0, (function* () {
                if (this.checkService()) return j.validateMonitoringRequest(e2.data, "startMonitoring"), null === (n2 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.supervisor) || void 0 === n2 ? void 0 : n2.startMonitoring(e2);
              }));
            }
            endMonitoring(e2) {
              var t2, n2;
              return ye(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "endMonitoring", "interactionId is not valid UUID"), null === (n2 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.supervisor) || void 0 === n2 ? void 0 : n2.endMonitoring(e2);
              }));
            }
            holdMonitoring(e2) {
              var t2, n2;
              return ye(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "endMonitoring", "interactionId is not valid UUID"), null === (n2 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.supervisor) || void 0 === n2 ? void 0 : n2.holdMonitoring(e2);
              }));
            }
            unHoldMonitoring(e2) {
              var t2, n2;
              return ye(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "endMonitoring", "interactionId is not valid UUID"), null === (n2 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.supervisor) || void 0 === n2 ? void 0 : n2.unHoldMonitoring(e2);
              }));
            }
            bargeIn(e2) {
              var t2, n2;
              return ye(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.interactionId), "endMonitoring", "interactionId is not valid UUID"), null === (n2 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.supervisor) || void 0 === n2 ? void 0 : n2.bargeIn(e2);
              }));
            }
            addEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addEventListener(e2, t2);
            }
            addOnceEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addOnceEventListener(e2, t2);
            }
            removeEventListener(e2, t2) {
              this.aqmEvents.removeEventListener(e2, t2);
            }
            removeOnceEventListener(e2, t2) {
              this.aqmEvents.removeOnceEventListener(e2, t2);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const be = o(r, "[Call Monitoring JSAPI] =>"), we = o(be, "[AqmServiceEvents: Call Monitoring] =>");
          class Se {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && this.logger.info("Inited");
            }
            cleanup() {
              this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            trackBehavioralEvent(...e2) {
              var t2;
              if (this.checkService()) try {
                r.info("[webexMetrics Internal JSAPI] => event=trackBehavioralEvent for", e2), null === (t2 = this.SERVICE) || void 0 === t2 || t2.webexMetrics.trackBehavioralEvent(...e2);
              } catch (e3) {
                r.error("[webexMetrics Internal JSAPI] => event=trackBehavioralEvent Error", e3);
              }
            }
          }
          const ke = o(r, "[webexMetrics Internal JSAPI] =>");
          var Ie = function(e2, t2, n2, i2) {
            return new (n2 || (n2 = Promise))((function(r2, o2) {
              function s2(e3) {
                try {
                  c2(i2.next(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function a2(e3) {
                try {
                  c2(i2.throw(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function c2(e3) {
                var t3;
                e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                  e4(t3);
                }))).then(s2, a2);
              }
              c2((i2 = i2.apply(e2, t2 || [])).next());
            }));
          };
          class Ae {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.aqmEvents = e2.aqmEvents, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.agent, aqmServiceEntityString: "SERVICE.aqm.agent" }), this.logger.info("[JSAPI] Logout Inited"));
            }
            cleanup() {
              this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            desktopLogout(e2) {
              var t2, n2;
              return Ie(this, void 0, void 0, (function* () {
                if (!this.checkService()) return;
                const r2 = yield Me.actions.getTaskMap();
                if (0 !== (null == r2 ? void 0 : r2.size)) throw new Error("You cannot sign out now because you have active conversations. Complete them and try again.");
                return void 0 !== e2.data.logoutReason && i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e2.data.logoutReason), "desktopLogout", "logoutReason is null or empty"), void 0 !== e2.data.logoutReason && i.AssertUtils.check("user requested logout" === e2.data.logoutReason.toLowerCase() || "inactivity Logout" === e2.data.logoutReason.toLowerCase(), "desktopLogout", "logoutReason should be either 'User requested logout' or 'Inactivity Logout'"), null === (n2 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.agent) || void 0 === n2 ? void 0 : n2.logout(e2);
              }));
            }
            signoutAgent(e2) {
              var t2, n2;
              return Ie(this, void 0, void 0, (function* () {
                if (this.checkService()) try {
                  return r.info("[App:TPW] event=signoutAgentBySupervisor for agent ", e2.data.agentId), i.AssertUtils.check(j.validateUUID(e2.orgId), "signoutAgent", "orgId is not a valid UUID"), i.AssertUtils.check(j.validateUUID(e2.data.agentId), "signoutAgent", "agentId is not a valid UUID"), i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e2.data.logoutReason), "signoutAgent", "logoutReason is null or empty"), null === (n2 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.aqm.supervisor) || void 0 === n2 ? void 0 : n2.signoutAgent(e2);
                } catch (t3) {
                  r.error("[App:TPW] event=signoutAgentBySupervisorFailed for agent ", e2.data.agentId, t3);
                }
              }));
            }
            addEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addEventListener(e2, t2);
            }
            addOnceEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addOnceEventListener(e2, t2);
            }
            removeEventListener(e2, t2) {
              this.aqmEvents.removeEventListener(e2, t2);
            }
            removeOnceEventListener(e2, t2) {
              this.aqmEvents.removeOnceEventListener(e2, t2);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const Ce = o(r, "[Station Logout JSAPI] =>"), Te = o(Ce, "[AqmServiceEvents: Call Monitoring] =>");
          class Oe {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.aqmEvents = e2.aqmEvents, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              var t2, n2;
              e2 && (this.SERVICE = e2), this.checkService() ? (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.aiAssistant, aqmServiceEntityString: "SERVICE.aqm.aiAssistant" }), this.logger.info("AiAssistantJsApi inited.")) : null === (n2 = (t2 = this.logger).warn) || void 0 === n2 || n2.call(t2, "Service check failed");
            }
            cleanup() {
              this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned AiAssistantJsApi.");
            }
            addEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addEventListener(e2, t2);
            }
            addOnceEventListener(e2, t2) {
              this.checkService() && this.aqmEvents.addOnceEventListener(e2, t2);
            }
            removeEventListener(e2, t2) {
              this.aqmEvents.removeEventListener(e2, t2);
            }
            removeOnceEventListener(e2, t2) {
              this.aqmEvents.removeOnceEventListener(e2, t2);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const Ue = o(r, "[AI Assistant JSAPI] =>"), Re = o(Ue, "[AqmServiceEvents: AiAssistant] =>");
          var Le = function(e2, t2, n2, i2) {
            return new (n2 || (n2 = Promise))((function(r2, o2) {
              function s2(e3) {
                try {
                  c2(i2.next(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function a2(e3) {
                try {
                  c2(i2.throw(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function c2(e3) {
                var t3;
                e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                  e4(t3);
                }))).then(s2, a2);
              }
              c2((i2 = i2.apply(e2, t2 || [])).next());
            }));
          };
          class xe {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && this.logger.info("[JSAPI] Initialized");
            }
            cleanup() {
              this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            fetchTasks(e2) {
              var t2, n2;
              return Le(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e2.startTime), "fetchTasks", "startTime is null or empty"), i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e2.endTime), "fetchTasks", "endTime is null or empty"), i.AssertUtils.check(j.validatePropValueNotNullAndEmpty(e2.pageNumber), "fetchTasks", "pageNumber is null or empty"), i.AssertUtils.check(j.validateNumber(e2.startTime), "fetchTasks", "startTime is not a valid time"), i.AssertUtils.check(j.validateNumber(e2.endTime), "fetchTasks", "endTime is not a valid time"), i.AssertUtils.check(j.validateNumber(e2.pageNumber), "fetchTasks", "pageNumber is not a valid number"), null === (n2 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.qmw) || void 0 === n2 ? void 0 : n2.fetchTasks(e2);
              }));
            }
            fetchCapture(e2) {
              var t2, n2;
              return Le(this, void 0, void 0, (function* () {
                if (this.checkService()) return i.AssertUtils.check(j.validateUUID(e2.taskId), "fetchCapture", "taskId is not a valid UUID"), null === (n2 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.qmw) || void 0 === n2 ? void 0 : n2.fetchCapture(e2);
              }));
            }
          }
          const De = o(r, "[PI JSAPI] =>");
          var Ne = function(e2, t2, n2, i2) {
            return new (n2 || (n2 = Promise))((function(r2, o2) {
              function s2(e3) {
                try {
                  c2(i2.next(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function a2(e3) {
                try {
                  c2(i2.throw(e3));
                } catch (e4) {
                  o2(e4);
                }
              }
              function c2(e3) {
                var t3;
                e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                  e4(t3);
                }))).then(s2, a2);
              }
              c2((i2 = i2.apply(e2, t2 || [])).next());
            }));
          };
          class Pe {
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            constructor(e2) {
              this.logger = e2.logger, this.serviceChecker = e2.serviceChecker;
            }
            init(e2) {
              e2 && (this.SERVICE = e2), this.checkService() && this.logger.info("[JSAPI] AgentConfigJsApi Initialized");
            }
            cleanup() {
              this.SERVICE = void 0, this.logger.info("Cleaned");
            }
            fetchPaginatedAuxCodes(e2) {
              var t2, n2;
              return Ne(this, void 0, void 0, (function* () {
                if (this.checkService()) return j.validateAuxCodePayload(e2, "fetchPaginatedAuxCodes"), yield null === (n2 = null === (t2 = this.SERVICE) || void 0 === t2 ? void 0 : t2.abs) || void 0 === n2 ? void 0 : n2.fetchPaginatedAuxCodes(e2);
              }));
            }
          }
          const _e = o(r, "[AGENT CONFIG JSAPI] =>"), Me = (() => {
            AGENTX_SERVICE ? r.info('Found global "AGENTX_SERVICE"!') : r.error('Missed global "AGENTX_SERVICE"...');
            const e2 = (t2 = AGENTX_SERVICE, new ee({ logger: te, SERVICE: t2 }));
            var t2;
            const n2 = new ce({ logger: ue }), i2 = new fe({ logger: ve, serviceChecker: a({ logger: ve }) }), o2 = new O({ logger: U, serviceChecker: a({ logger: U }) }), s2 = new K({ logger: X, serviceChecker: a({ logger: X }) }), c2 = new B({ logger: H, serviceChecker: a({ logger: H }), aqmEvents: L({ logger: z }) }), u2 = new ie({ logger: re, aqmEvents: L({ logger: oe }), serviceChecker: a({ logger: re }) }), l2 = new Ee({ logger: be, aqmEvents: L({ logger: we }), serviceChecker: a({ logger: be }) }), d2 = new le({ logger: de, aqmEvents: L({ logger: he }), serviceChecker: a({ logger: de }) }), h2 = new Ae({ logger: Ce, aqmEvents: L({ logger: Te }), serviceChecker: a({ logger: Ce }) }), f2 = new Oe({ logger: Ue, aqmEvents: L({ logger: Re }), serviceChecker: a({ logger: Ue }) }), v2 = new se({ logger: ae, serviceChecker: a({ logger: ae }) }), p2 = new ge({ logger: me });
            p2.init();
            const g2 = new xe({ logger: De, serviceChecker: a({ logger: De }) }), m2 = new Pe({ logger: _e, serviceChecker: a({ logger: _e }) }), y2 = new Se({ logger: ke, serviceChecker: a({ logger: ke }) });
            return e2.addEventListener("inited", () => {
              c2.init(AGENTX_SERVICE), s2.init(AGENTX_SERVICE), u2.init(AGENTX_SERVICE), l2.init(AGENTX_SERVICE), d2.init(AGENTX_SERVICE), h2.init(AGENTX_SERVICE), f2.init(AGENTX_SERVICE), g2.init(AGENTX_SERVICE), i2.init(AGENTX_SERVICE), o2.init(AGENTX_SERVICE), v2.init(AGENTX_SERVICE), m2.init(AGENTX_SERVICE), y2.init(AGENTX_SERVICE);
            }), e2.addEventListener("cleaned", () => {
              c2.cleanup(), s2.cleanup(), u2.cleanup(), l2.cleanup(), d2.cleanup(), h2.cleanup(), f2.cleanup(), g2.cleanup(), i2.cleanup(), v2.cleanup(), o2.cleanup(), m2.cleanup(), y2.cleanup();
            }), { config: e2, logger: n2, monitoring: l2, shortcutKey: i2, actions: o2, agentContact: c2, agentStateInfo: s2, dialer: u2, screenpop: d2, aiAssistant: f2, i18n: v2, rtdwc: p2, postInteractions: g2, logout: h2, agentConfigJsApi: m2, webexMetricsInternal: y2 };
          })();
        }, function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, "v1", (function() {
            return f;
          })), n.d(t, "v3", (function() {
            return w;
          })), n.d(t, "v4", (function() {
            return S;
          })), n.d(t, "v5", (function() {
            return A;
          }));
          var i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto), r = new Uint8Array(16);
          function o() {
            if (!i) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return i(r);
          }
          for (var s = [], a = 0; a < 256; ++a) s[a] = (a + 256).toString(16).substr(1);
          var c, u, l = function(e2, t2) {
            var n2 = t2 || 0, i2 = s;
            return [i2[e2[n2++]], i2[e2[n2++]], i2[e2[n2++]], i2[e2[n2++]], "-", i2[e2[n2++]], i2[e2[n2++]], "-", i2[e2[n2++]], i2[e2[n2++]], "-", i2[e2[n2++]], i2[e2[n2++]], "-", i2[e2[n2++]], i2[e2[n2++]], i2[e2[n2++]], i2[e2[n2++]], i2[e2[n2++]], i2[e2[n2++]]].join("");
          }, d = 0, h = 0;
          var f = function(e2, t2, n2) {
            var i2 = t2 && n2 || 0, r2 = t2 || [], s2 = (e2 = e2 || {}).node || c, a2 = void 0 !== e2.clockseq ? e2.clockseq : u;
            if (null == s2 || null == a2) {
              var f2 = e2.random || (e2.rng || o)();
              null == s2 && (s2 = c = [1 | f2[0], f2[1], f2[2], f2[3], f2[4], f2[5]]), null == a2 && (a2 = u = 16383 & (f2[6] << 8 | f2[7]));
            }
            var v2 = void 0 !== e2.msecs ? e2.msecs : (/* @__PURE__ */ new Date()).getTime(), p2 = void 0 !== e2.nsecs ? e2.nsecs : h + 1, g2 = v2 - d + (p2 - h) / 1e4;
            if (g2 < 0 && void 0 === e2.clockseq && (a2 = a2 + 1 & 16383), (g2 < 0 || v2 > d) && void 0 === e2.nsecs && (p2 = 0), p2 >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            d = v2, h = p2, u = a2;
            var m2 = (1e4 * (268435455 & (v2 += 122192928e5)) + p2) % 4294967296;
            r2[i2++] = m2 >>> 24 & 255, r2[i2++] = m2 >>> 16 & 255, r2[i2++] = m2 >>> 8 & 255, r2[i2++] = 255 & m2;
            var y2 = v2 / 4294967296 * 1e4 & 268435455;
            r2[i2++] = y2 >>> 8 & 255, r2[i2++] = 255 & y2, r2[i2++] = y2 >>> 24 & 15 | 16, r2[i2++] = y2 >>> 16 & 255, r2[i2++] = a2 >>> 8 | 128, r2[i2++] = 255 & a2;
            for (var E2 = 0; E2 < 6; ++E2) r2[i2 + E2] = s2[E2];
            return t2 || l(r2);
          };
          var v = function(e2, t2, n2) {
            var i2 = function(e3, i3, r2, o2) {
              var s2 = r2 && o2 || 0;
              if ("string" == typeof e3 && (e3 = (function(e4) {
                e4 = unescape(encodeURIComponent(e4));
                for (var t3 = new Array(e4.length), n3 = 0; n3 < e4.length; n3++) t3[n3] = e4.charCodeAt(n3);
                return t3;
              })(e3)), "string" == typeof i3 && (i3 = (function(e4) {
                var t3 = [];
                return e4.replace(/[a-fA-F0-9]{2}/g, (function(e5) {
                  t3.push(parseInt(e5, 16));
                })), t3;
              })(i3)), !Array.isArray(e3)) throw TypeError("value must be an array of bytes");
              if (!Array.isArray(i3) || 16 !== i3.length) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
              var a2 = n2(i3.concat(e3));
              if (a2[6] = 15 & a2[6] | t2, a2[8] = 63 & a2[8] | 128, r2) for (var c2 = 0; c2 < 16; ++c2) r2[s2 + c2] = a2[c2];
              return r2 || l(a2);
            };
            try {
              i2.name = e2;
            } catch (e3) {
            }
            return i2.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", i2.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", i2;
          };
          function p(e2, t2) {
            var n2 = (65535 & e2) + (65535 & t2);
            return (e2 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
          }
          function g(e2, t2, n2, i2, r2, o2) {
            return p((s2 = p(p(t2, e2), p(i2, o2))) << (a2 = r2) | s2 >>> 32 - a2, n2);
            var s2, a2;
          }
          function m(e2, t2, n2, i2, r2, o2, s2) {
            return g(t2 & n2 | ~t2 & i2, e2, t2, r2, o2, s2);
          }
          function y(e2, t2, n2, i2, r2, o2, s2) {
            return g(t2 & i2 | n2 & ~i2, e2, t2, r2, o2, s2);
          }
          function E(e2, t2, n2, i2, r2, o2, s2) {
            return g(t2 ^ n2 ^ i2, e2, t2, r2, o2, s2);
          }
          function b(e2, t2, n2, i2, r2, o2, s2) {
            return g(n2 ^ (t2 | ~i2), e2, t2, r2, o2, s2);
          }
          var w = v("v3", 48, (function(e2) {
            if ("string" == typeof e2) {
              var t2 = unescape(encodeURIComponent(e2));
              e2 = new Array(t2.length);
              for (var n2 = 0; n2 < t2.length; n2++) e2[n2] = t2.charCodeAt(n2);
            }
            return (function(e3) {
              var t3, n3, i2, r2 = [], o2 = 32 * e3.length;
              for (t3 = 0; t3 < o2; t3 += 8) n3 = e3[t3 >> 5] >>> t3 % 32 & 255, i2 = parseInt("0123456789abcdef".charAt(n3 >>> 4 & 15) + "0123456789abcdef".charAt(15 & n3), 16), r2.push(i2);
              return r2;
            })((function(e3, t3) {
              var n3, i2, r2, o2, s2;
              e3[t3 >> 5] |= 128 << t3 % 32, e3[14 + (t3 + 64 >>> 9 << 4)] = t3;
              var a2 = 1732584193, c2 = -271733879, u2 = -1732584194, l2 = 271733878;
              for (n3 = 0; n3 < e3.length; n3 += 16) i2 = a2, r2 = c2, o2 = u2, s2 = l2, a2 = m(a2, c2, u2, l2, e3[n3], 7, -680876936), l2 = m(l2, a2, c2, u2, e3[n3 + 1], 12, -389564586), u2 = m(u2, l2, a2, c2, e3[n3 + 2], 17, 606105819), c2 = m(c2, u2, l2, a2, e3[n3 + 3], 22, -1044525330), a2 = m(a2, c2, u2, l2, e3[n3 + 4], 7, -176418897), l2 = m(l2, a2, c2, u2, e3[n3 + 5], 12, 1200080426), u2 = m(u2, l2, a2, c2, e3[n3 + 6], 17, -1473231341), c2 = m(c2, u2, l2, a2, e3[n3 + 7], 22, -45705983), a2 = m(a2, c2, u2, l2, e3[n3 + 8], 7, 1770035416), l2 = m(l2, a2, c2, u2, e3[n3 + 9], 12, -1958414417), u2 = m(u2, l2, a2, c2, e3[n3 + 10], 17, -42063), c2 = m(c2, u2, l2, a2, e3[n3 + 11], 22, -1990404162), a2 = m(a2, c2, u2, l2, e3[n3 + 12], 7, 1804603682), l2 = m(l2, a2, c2, u2, e3[n3 + 13], 12, -40341101), u2 = m(u2, l2, a2, c2, e3[n3 + 14], 17, -1502002290), c2 = m(c2, u2, l2, a2, e3[n3 + 15], 22, 1236535329), a2 = y(a2, c2, u2, l2, e3[n3 + 1], 5, -165796510), l2 = y(l2, a2, c2, u2, e3[n3 + 6], 9, -1069501632), u2 = y(u2, l2, a2, c2, e3[n3 + 11], 14, 643717713), c2 = y(c2, u2, l2, a2, e3[n3], 20, -373897302), a2 = y(a2, c2, u2, l2, e3[n3 + 5], 5, -701558691), l2 = y(l2, a2, c2, u2, e3[n3 + 10], 9, 38016083), u2 = y(u2, l2, a2, c2, e3[n3 + 15], 14, -660478335), c2 = y(c2, u2, l2, a2, e3[n3 + 4], 20, -405537848), a2 = y(a2, c2, u2, l2, e3[n3 + 9], 5, 568446438), l2 = y(l2, a2, c2, u2, e3[n3 + 14], 9, -1019803690), u2 = y(u2, l2, a2, c2, e3[n3 + 3], 14, -187363961), c2 = y(c2, u2, l2, a2, e3[n3 + 8], 20, 1163531501), a2 = y(a2, c2, u2, l2, e3[n3 + 13], 5, -1444681467), l2 = y(l2, a2, c2, u2, e3[n3 + 2], 9, -51403784), u2 = y(u2, l2, a2, c2, e3[n3 + 7], 14, 1735328473), c2 = y(c2, u2, l2, a2, e3[n3 + 12], 20, -1926607734), a2 = E(a2, c2, u2, l2, e3[n3 + 5], 4, -378558), l2 = E(l2, a2, c2, u2, e3[n3 + 8], 11, -2022574463), u2 = E(u2, l2, a2, c2, e3[n3 + 11], 16, 1839030562), c2 = E(c2, u2, l2, a2, e3[n3 + 14], 23, -35309556), a2 = E(a2, c2, u2, l2, e3[n3 + 1], 4, -1530992060), l2 = E(l2, a2, c2, u2, e3[n3 + 4], 11, 1272893353), u2 = E(u2, l2, a2, c2, e3[n3 + 7], 16, -155497632), c2 = E(c2, u2, l2, a2, e3[n3 + 10], 23, -1094730640), a2 = E(a2, c2, u2, l2, e3[n3 + 13], 4, 681279174), l2 = E(l2, a2, c2, u2, e3[n3], 11, -358537222), u2 = E(u2, l2, a2, c2, e3[n3 + 3], 16, -722521979), c2 = E(c2, u2, l2, a2, e3[n3 + 6], 23, 76029189), a2 = E(a2, c2, u2, l2, e3[n3 + 9], 4, -640364487), l2 = E(l2, a2, c2, u2, e3[n3 + 12], 11, -421815835), u2 = E(u2, l2, a2, c2, e3[n3 + 15], 16, 530742520), c2 = E(c2, u2, l2, a2, e3[n3 + 2], 23, -995338651), a2 = b(a2, c2, u2, l2, e3[n3], 6, -198630844), l2 = b(l2, a2, c2, u2, e3[n3 + 7], 10, 1126891415), u2 = b(u2, l2, a2, c2, e3[n3 + 14], 15, -1416354905), c2 = b(c2, u2, l2, a2, e3[n3 + 5], 21, -57434055), a2 = b(a2, c2, u2, l2, e3[n3 + 12], 6, 1700485571), l2 = b(l2, a2, c2, u2, e3[n3 + 3], 10, -1894986606), u2 = b(u2, l2, a2, c2, e3[n3 + 10], 15, -1051523), c2 = b(c2, u2, l2, a2, e3[n3 + 1], 21, -2054922799), a2 = b(a2, c2, u2, l2, e3[n3 + 8], 6, 1873313359), l2 = b(l2, a2, c2, u2, e3[n3 + 15], 10, -30611744), u2 = b(u2, l2, a2, c2, e3[n3 + 6], 15, -1560198380), c2 = b(c2, u2, l2, a2, e3[n3 + 13], 21, 1309151649), a2 = b(a2, c2, u2, l2, e3[n3 + 4], 6, -145523070), l2 = b(l2, a2, c2, u2, e3[n3 + 11], 10, -1120210379), u2 = b(u2, l2, a2, c2, e3[n3 + 2], 15, 718787259), c2 = b(c2, u2, l2, a2, e3[n3 + 9], 21, -343485551), a2 = p(a2, i2), c2 = p(c2, r2), u2 = p(u2, o2), l2 = p(l2, s2);
              return [a2, c2, u2, l2];
            })((function(e3) {
              var t3, n3 = [];
              for (n3[(e3.length >> 2) - 1] = void 0, t3 = 0; t3 < n3.length; t3 += 1) n3[t3] = 0;
              var i2 = 8 * e3.length;
              for (t3 = 0; t3 < i2; t3 += 8) n3[t3 >> 5] |= (255 & e3[t3 / 8]) << t3 % 32;
              return n3;
            })(e2), 8 * e2.length));
          }));
          var S = function(e2, t2, n2) {
            var i2 = t2 && n2 || 0;
            "string" == typeof e2 && (t2 = "binary" === e2 ? new Array(16) : null, e2 = null);
            var r2 = (e2 = e2 || {}).random || (e2.rng || o)();
            if (r2[6] = 15 & r2[6] | 64, r2[8] = 63 & r2[8] | 128, t2) for (var s2 = 0; s2 < 16; ++s2) t2[i2 + s2] = r2[s2];
            return t2 || l(r2);
          };
          function k(e2, t2, n2, i2) {
            switch (e2) {
              case 0:
                return t2 & n2 ^ ~t2 & i2;
              case 1:
                return t2 ^ n2 ^ i2;
              case 2:
                return t2 & n2 ^ t2 & i2 ^ n2 & i2;
              case 3:
                return t2 ^ n2 ^ i2;
            }
          }
          function I(e2, t2) {
            return e2 << t2 | e2 >>> 32 - t2;
          }
          var A = v("v5", 80, (function(e2) {
            var t2 = [1518500249, 1859775393, 2400959708, 3395469782], n2 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof e2) {
              var i2 = unescape(encodeURIComponent(e2));
              e2 = new Array(i2.length);
              for (var r2 = 0; r2 < i2.length; r2++) e2[r2] = i2.charCodeAt(r2);
            }
            e2.push(128);
            var o2 = e2.length / 4 + 2, s2 = Math.ceil(o2 / 16), a2 = new Array(s2);
            for (r2 = 0; r2 < s2; r2++) {
              a2[r2] = new Array(16);
              for (var c2 = 0; c2 < 16; c2++) a2[r2][c2] = e2[64 * r2 + 4 * c2] << 24 | e2[64 * r2 + 4 * c2 + 1] << 16 | e2[64 * r2 + 4 * c2 + 2] << 8 | e2[64 * r2 + 4 * c2 + 3];
            }
            for (a2[s2 - 1][14] = 8 * (e2.length - 1) / Math.pow(2, 32), a2[s2 - 1][14] = Math.floor(a2[s2 - 1][14]), a2[s2 - 1][15] = 8 * (e2.length - 1) & 4294967295, r2 = 0; r2 < s2; r2++) {
              for (var u2 = new Array(80), l2 = 0; l2 < 16; l2++) u2[l2] = a2[r2][l2];
              for (l2 = 16; l2 < 80; l2++) u2[l2] = I(u2[l2 - 3] ^ u2[l2 - 8] ^ u2[l2 - 14] ^ u2[l2 - 16], 1);
              var d2 = n2[0], h2 = n2[1], f2 = n2[2], v2 = n2[3], p2 = n2[4];
              for (l2 = 0; l2 < 80; l2++) {
                var g2 = Math.floor(l2 / 20), m2 = I(d2, 5) + k(g2, h2, f2, v2) + p2 + t2[g2] + u2[l2] >>> 0;
                p2 = v2, v2 = f2, f2 = I(h2, 30) >>> 0, h2 = d2, d2 = m2;
              }
              n2[0] = n2[0] + d2 >>> 0, n2[1] = n2[1] + h2 >>> 0, n2[2] = n2[2] + f2 >>> 0, n2[3] = n2[3] + v2 >>> 0, n2[4] = n2[4] + p2 >>> 0;
            }
            return [n2[0] >> 24 & 255, n2[0] >> 16 & 255, n2[0] >> 8 & 255, 255 & n2[0], n2[1] >> 24 & 255, n2[1] >> 16 & 255, n2[1] >> 8 & 255, 255 & n2[1], n2[2] >> 24 & 255, n2[2] >> 16 & 255, n2[2] >> 8 & 255, 255 & n2[2], n2[3] >> 24 & 255, n2[3] >> 16 & 255, n2[3] >> 8 & 255, 255 & n2[3], n2[4] >> 24 & 255, n2[4] >> 16 & 255, n2[4] >> 8 & 255, 255 & n2[4]];
          }));
        }, function(e, t, n) {
          "use strict";
          n.r(t);
          var i = n(3), r = n(13);
          function o(e2, t2, n2) {
            return (t2 = Object(r.a)(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
          }
          function s(e2) {
            for (var t2 = 1; t2 < arguments.length; t2++) {
              var n2 = null != arguments[t2] ? Object(arguments[t2]) : {}, i2 = Object.keys(n2);
              "function" == typeof Object.getOwnPropertySymbols && i2.push.apply(i2, Object.getOwnPropertySymbols(n2).filter((function(e3) {
                return Object.getOwnPropertyDescriptor(n2, e3).enumerable;
              }))), i2.forEach((function(t3) {
                o(e2, t3, n2[t3]);
              }));
            }
            return e2;
          }
          var a = n(4), c = n(5);
          function u(e2) {
            if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e2;
          }
          function l(e2, t2) {
            if (t2 && ("object" == Object(i.a)(t2) || "function" == typeof t2)) return t2;
            if (void 0 !== t2) throw new TypeError("Derived constructors may only return object or undefined");
            return u(e2);
          }
          function d(e2) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
              return e3.__proto__ || Object.getPrototypeOf(e3);
            })(e2);
          }
          function h(e2, t2) {
            return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
              return e3.__proto__ = t3, e3;
            })(e2, t2);
          }
          function f(e2, t2) {
            if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
            e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t2 && h(e2, t2);
          }
          var v = { type: "logger", log: function(e2) {
            this.output("log", e2);
          }, warn: function(e2) {
            this.output("warn", e2);
          }, error: function(e2) {
            this.output("error", e2);
          }, output: function(e2, t2) {
            console && console[e2] && console[e2].apply(console, t2);
          } }, p = new ((function() {
            function e2(t2) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              Object(a.a)(this, e2), this.init(t2, n2);
            }
            return Object(c.a)(e2, [{ key: "init", value: function(e3) {
              var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this.prefix = t2.prefix || "i18next:", this.logger = e3 || v, this.options = t2, this.debug = t2.debug;
            } }, { key: "setDebug", value: function(e3) {
              this.debug = e3;
            } }, { key: "log", value: function() {
              for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
              return this.forward(t2, "log", "", true);
            } }, { key: "warn", value: function() {
              for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
              return this.forward(t2, "warn", "", true);
            } }, { key: "error", value: function() {
              for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
              return this.forward(t2, "error", "");
            } }, { key: "deprecate", value: function() {
              for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
              return this.forward(t2, "warn", "WARNING DEPRECATED: ", true);
            } }, { key: "forward", value: function(e3, t2, n2, i2) {
              return i2 && !this.debug ? null : ("string" == typeof e3[0] && (e3[0] = "".concat(n2).concat(this.prefix, " ").concat(e3[0])), this.logger[t2](e3));
            } }, { key: "create", value: function(t2) {
              return new e2(this.logger, s({}, { prefix: "".concat(this.prefix, ":").concat(t2, ":") }, this.options));
            } }]), e2;
          })())(), g = (function() {
            function e2() {
              Object(a.a)(this, e2), this.observers = {};
            }
            return Object(c.a)(e2, [{ key: "on", value: function(e3, t2) {
              var n2 = this;
              return e3.split(" ").forEach((function(e4) {
                n2.observers[e4] = n2.observers[e4] || [], n2.observers[e4].push(t2);
              })), this;
            } }, { key: "off", value: function(e3, t2) {
              this.observers[e3] && (t2 ? this.observers[e3] = this.observers[e3].filter((function(e4) {
                return e4 !== t2;
              })) : delete this.observers[e3]);
            } }, { key: "emit", value: function(e3) {
              for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) n2[i2 - 1] = arguments[i2];
              if (this.observers[e3]) {
                var r2 = [].concat(this.observers[e3]);
                r2.forEach((function(e4) {
                  e4.apply(void 0, n2);
                }));
              }
              if (this.observers["*"]) {
                var o2 = [].concat(this.observers["*"]);
                o2.forEach((function(t3) {
                  t3.apply(t3, [e3].concat(n2));
                }));
              }
            } }]), e2;
          })();
          function m() {
            var e2, t2, n2 = new Promise((function(n3, i2) {
              e2 = n3, t2 = i2;
            }));
            return n2.resolve = e2, n2.reject = t2, n2;
          }
          function y(e2) {
            return null == e2 ? "" : "" + e2;
          }
          function E(e2, t2, n2) {
            e2.forEach((function(e3) {
              t2[e3] && (n2[e3] = t2[e3]);
            }));
          }
          function b(e2, t2, n2) {
            function i2(e3) {
              return e3 && e3.indexOf("###") > -1 ? e3.replace(/###/g, ".") : e3;
            }
            function r2() {
              return !e2 || "string" == typeof e2;
            }
            for (var o2 = "string" != typeof t2 ? [].concat(t2) : t2.split("."); o2.length > 1; ) {
              if (r2()) return {};
              var s2 = i2(o2.shift());
              !e2[s2] && n2 && (e2[s2] = new n2()), e2 = Object.prototype.hasOwnProperty.call(e2, s2) ? e2[s2] : {};
            }
            return r2() ? {} : { obj: e2, k: i2(o2.shift()) };
          }
          function w(e2, t2, n2) {
            var i2 = b(e2, t2, Object);
            i2.obj[i2.k] = n2;
          }
          function S(e2, t2) {
            var n2 = b(e2, t2), i2 = n2.obj, r2 = n2.k;
            if (i2) return i2[r2];
          }
          function k(e2, t2, n2) {
            var i2 = S(e2, n2);
            return void 0 !== i2 ? i2 : S(t2, n2);
          }
          function I(e2, t2, n2) {
            for (var i2 in t2) "__proto__" !== i2 && "constructor" !== i2 && (i2 in e2 ? "string" == typeof e2[i2] || e2[i2] instanceof String || "string" == typeof t2[i2] || t2[i2] instanceof String ? n2 && (e2[i2] = t2[i2]) : I(e2[i2], t2[i2], n2) : e2[i2] = t2[i2]);
            return e2;
          }
          function A(e2) {
            return e2.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          }
          var C = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
          function T(e2) {
            return "string" == typeof e2 ? e2.replace(/[&<>"'\/]/g, (function(e3) {
              return C[e3];
            })) : e2;
          }
          var O = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, U = (function(e2) {
            function t2(e3) {
              var n2, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
              return Object(a.a)(this, t2), n2 = l(this, d(t2).call(this)), O && g.call(u(n2)), n2.data = e3 || {}, n2.options = i2, void 0 === n2.options.keySeparator && (n2.options.keySeparator = "."), n2;
            }
            return f(t2, e2), Object(c.a)(t2, [{ key: "addNamespaces", value: function(e3) {
              this.options.ns.indexOf(e3) < 0 && this.options.ns.push(e3);
            } }, { key: "removeNamespaces", value: function(e3) {
              var t3 = this.options.ns.indexOf(e3);
              t3 > -1 && this.options.ns.splice(t3, 1);
            } }, { key: "getResource", value: function(e3, t3, n2) {
              var i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, r2 = void 0 !== i2.keySeparator ? i2.keySeparator : this.options.keySeparator, o2 = [e3, t3];
              return n2 && "string" != typeof n2 && (o2 = o2.concat(n2)), n2 && "string" == typeof n2 && (o2 = o2.concat(r2 ? n2.split(r2) : n2)), e3.indexOf(".") > -1 && (o2 = e3.split(".")), S(this.data, o2);
            } }, { key: "addResource", value: function(e3, t3, n2, i2) {
              var r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: false }, o2 = this.options.keySeparator;
              void 0 === o2 && (o2 = ".");
              var s2 = [e3, t3];
              n2 && (s2 = s2.concat(o2 ? n2.split(o2) : n2)), e3.indexOf(".") > -1 && (i2 = t3, t3 = (s2 = e3.split("."))[1]), this.addNamespaces(t3), w(this.data, s2, i2), r2.silent || this.emit("added", e3, t3, n2, i2);
            } }, { key: "addResources", value: function(e3, t3, n2) {
              var i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: false };
              for (var r2 in n2) "string" != typeof n2[r2] && "[object Array]" !== Object.prototype.toString.apply(n2[r2]) || this.addResource(e3, t3, r2, n2[r2], { silent: true });
              i2.silent || this.emit("added", e3, t3, n2);
            } }, { key: "addResourceBundle", value: function(e3, t3, n2, i2, r2) {
              var o2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : { silent: false }, a2 = [e3, t3];
              e3.indexOf(".") > -1 && (i2 = n2, n2 = t3, t3 = (a2 = e3.split("."))[1]), this.addNamespaces(t3);
              var c2 = S(this.data, a2) || {};
              i2 ? I(c2, n2, r2) : c2 = s({}, c2, n2), w(this.data, a2, c2), o2.silent || this.emit("added", e3, t3, n2);
            } }, { key: "removeResourceBundle", value: function(e3, t3) {
              this.hasResourceBundle(e3, t3) && delete this.data[e3][t3], this.removeNamespaces(t3), this.emit("removed", e3, t3);
            } }, { key: "hasResourceBundle", value: function(e3, t3) {
              return void 0 !== this.getResource(e3, t3);
            } }, { key: "getResourceBundle", value: function(e3, t3) {
              return t3 || (t3 = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? s({}, {}, this.getResource(e3, t3)) : this.getResource(e3, t3);
            } }, { key: "getDataByLanguage", value: function(e3) {
              return this.data[e3];
            } }, { key: "toJSON", value: function() {
              return this.data;
            } }]), t2;
          })(g), R = { processors: {}, addPostProcessor: function(e2) {
            this.processors[e2.name] = e2;
          }, handle: function(e2, t2, n2, i2, r2) {
            var o2 = this;
            return e2.forEach((function(e3) {
              o2.processors[e3] && (t2 = o2.processors[e3].process(t2, n2, i2, r2));
            })), t2;
          } }, L = {}, x = (function(e2) {
            function t2(e3) {
              var n2, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return Object(a.a)(this, t2), n2 = l(this, d(t2).call(this)), O && g.call(u(n2)), E(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e3, u(n2)), n2.options = i2, void 0 === n2.options.keySeparator && (n2.options.keySeparator = "."), n2.logger = p.create("translator"), n2;
            }
            return f(t2, e2), Object(c.a)(t2, [{ key: "changeLanguage", value: function(e3) {
              e3 && (this.language = e3);
            } }, { key: "exists", value: function(e3) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} }, n2 = this.resolve(e3, t3);
              return n2 && void 0 !== n2.res;
            } }, { key: "extractFromKey", value: function(e3, t3) {
              var n2 = void 0 !== t3.nsSeparator ? t3.nsSeparator : this.options.nsSeparator;
              void 0 === n2 && (n2 = ":");
              var i2 = void 0 !== t3.keySeparator ? t3.keySeparator : this.options.keySeparator, r2 = t3.ns || this.options.defaultNS;
              if (n2 && e3.indexOf(n2) > -1) {
                var o2 = e3.match(this.interpolator.nestingRegexp);
                if (o2 && o2.length > 0) return { key: e3, namespaces: r2 };
                var s2 = e3.split(n2);
                (n2 !== i2 || n2 === i2 && this.options.ns.indexOf(s2[0]) > -1) && (r2 = s2.shift()), e3 = s2.join(i2);
              }
              return "string" == typeof r2 && (r2 = [r2]), { key: e3, namespaces: r2 };
            } }, { key: "translate", value: function(e3, n2, r2) {
              var o2 = this;
              if ("object" !== Object(i.a)(n2) && this.options.overloadTranslationOptionHandler && (n2 = this.options.overloadTranslationOptionHandler(arguments)), n2 || (n2 = {}), null == e3) return "";
              Array.isArray(e3) || (e3 = [String(e3)]);
              var a2 = void 0 !== n2.keySeparator ? n2.keySeparator : this.options.keySeparator, c2 = this.extractFromKey(e3[e3.length - 1], n2), u2 = c2.key, l2 = c2.namespaces, d2 = l2[l2.length - 1], h2 = n2.lng || this.language, f2 = n2.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
              if (h2 && "cimode" === h2.toLowerCase()) {
                if (f2) {
                  var v2 = n2.nsSeparator || this.options.nsSeparator;
                  return d2 + v2 + u2;
                }
                return u2;
              }
              var p2 = this.resolve(e3, n2), g2 = p2 && p2.res, m2 = p2 && p2.usedKey || u2, y2 = p2 && p2.exactUsedKey || u2, E2 = Object.prototype.toString.apply(g2), b2 = ["[object Number]", "[object Function]", "[object RegExp]"], w2 = void 0 !== n2.joinArrays ? n2.joinArrays : this.options.joinArrays, S2 = !this.i18nFormat || this.i18nFormat.handleAsObject, k2 = "string" != typeof g2 && "boolean" != typeof g2 && "number" != typeof g2;
              if (S2 && g2 && k2 && b2.indexOf(E2) < 0 && ("string" != typeof w2 || "[object Array]" !== E2)) {
                if (!n2.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m2, g2, n2) : "key '".concat(u2, " (").concat(this.language, ")' returned an object instead of string.");
                if (a2) {
                  var I2 = "[object Array]" === E2, A2 = I2 ? [] : {}, C2 = I2 ? y2 : m2;
                  for (var T2 in g2) if (Object.prototype.hasOwnProperty.call(g2, T2)) {
                    var O2 = "".concat(C2).concat(a2).concat(T2);
                    A2[T2] = this.translate(O2, s({}, n2, { joinArrays: false, ns: l2 })), A2[T2] === O2 && (A2[T2] = g2[T2]);
                  }
                  g2 = A2;
                }
              } else if (S2 && "string" == typeof w2 && "[object Array]" === E2) (g2 = g2.join(w2)) && (g2 = this.extendTranslation(g2, e3, n2, r2));
              else {
                var U2 = false, R2 = false, L2 = void 0 !== n2.count && "string" != typeof n2.count, x2 = t2.hasDefaultValue(n2), D2 = L2 ? this.pluralResolver.getSuffix(h2, n2.count) : "", N2 = n2["defaultValue".concat(D2)] || n2.defaultValue;
                !this.isValidLookup(g2) && x2 && (U2 = true, g2 = N2), this.isValidLookup(g2) || (R2 = true, g2 = u2);
                var P2 = x2 && N2 !== g2 && this.options.updateMissing;
                if (R2 || U2 || P2) {
                  if (this.logger.log(P2 ? "updateKey" : "missingKey", h2, d2, u2, P2 ? N2 : g2), a2) {
                    var _2 = this.resolve(u2, s({}, n2, { keySeparator: false }));
                    _2 && _2.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
                  }
                  var M2 = [], V2 = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n2.lng || this.language);
                  if ("fallback" === this.options.saveMissingTo && V2 && V2[0]) for (var j2 = 0; j2 < V2.length; j2++) M2.push(V2[j2]);
                  else "all" === this.options.saveMissingTo ? M2 = this.languageUtils.toResolveHierarchy(n2.lng || this.language) : M2.push(n2.lng || this.language);
                  var q2 = function(e4, t3, i2) {
                    o2.options.missingKeyHandler ? o2.options.missingKeyHandler(e4, d2, t3, P2 ? i2 : g2, P2, n2) : o2.backendConnector && o2.backendConnector.saveMissing && o2.backendConnector.saveMissing(e4, d2, t3, P2 ? i2 : g2, P2, n2), o2.emit("missingKey", e4, d2, t3, g2);
                  };
                  this.options.saveMissing && (this.options.saveMissingPlurals && L2 ? M2.forEach((function(e4) {
                    o2.pluralResolver.getSuffixes(e4).forEach((function(t3) {
                      q2([e4], u2 + t3, n2["defaultValue".concat(t3)] || N2);
                    }));
                  })) : q2(M2, u2, N2));
                }
                g2 = this.extendTranslation(g2, e3, n2, p2, r2), R2 && g2 === u2 && this.options.appendNamespaceToMissingKey && (g2 = "".concat(d2, ":").concat(u2)), R2 && this.options.parseMissingKeyHandler && (g2 = this.options.parseMissingKeyHandler(g2));
              }
              return g2;
            } }, { key: "extendTranslation", value: function(e3, t3, n2, i2, r2) {
              var o2 = this;
              if (this.i18nFormat && this.i18nFormat.parse) e3 = this.i18nFormat.parse(e3, n2, i2.usedLng, i2.usedNS, i2.usedKey, { resolved: i2 });
              else if (!n2.skipInterpolation) {
                n2.interpolation && this.interpolator.init(s({}, n2, { interpolation: s({}, this.options.interpolation, n2.interpolation) }));
                var a2, c2 = n2.interpolation && n2.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                if (c2) {
                  var u2 = e3.match(this.interpolator.nestingRegexp);
                  a2 = u2 && u2.length;
                }
                var l2 = n2.replace && "string" != typeof n2.replace ? n2.replace : n2;
                if (this.options.interpolation.defaultVariables && (l2 = s({}, this.options.interpolation.defaultVariables, l2)), e3 = this.interpolator.interpolate(e3, l2, n2.lng || this.language, n2), c2) {
                  var d2 = e3.match(this.interpolator.nestingRegexp);
                  a2 < (d2 && d2.length) && (n2.nest = false);
                }
                false !== n2.nest && (e3 = this.interpolator.nest(e3, (function() {
                  for (var e4 = arguments.length, i3 = new Array(e4), s2 = 0; s2 < e4; s2++) i3[s2] = arguments[s2];
                  return r2 && r2[0] === i3[0] && !n2.context ? (o2.logger.warn("It seems you are nesting recursively key: ".concat(i3[0], " in key: ").concat(t3[0])), null) : o2.translate.apply(o2, i3.concat([t3]));
                }), n2)), n2.interpolation && this.interpolator.reset();
              }
              var h2 = n2.postProcess || this.options.postProcess, f2 = "string" == typeof h2 ? [h2] : h2;
              return null != e3 && f2 && f2.length && false !== n2.applyPostProcessor && (e3 = R.handle(f2, e3, t3, this.options && this.options.postProcessPassResolved ? s({ i18nResolved: i2 }, n2) : n2, this)), e3;
            } }, { key: "resolve", value: function(e3) {
              var t3, n2, i2, r2, o2, s2 = this, a2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return "string" == typeof e3 && (e3 = [e3]), e3.forEach((function(e4) {
                if (!s2.isValidLookup(t3)) {
                  var c2 = s2.extractFromKey(e4, a2), u2 = c2.key;
                  n2 = u2;
                  var l2 = c2.namespaces;
                  s2.options.fallbackNS && (l2 = l2.concat(s2.options.fallbackNS));
                  var d2 = void 0 !== a2.count && "string" != typeof a2.count, h2 = void 0 !== a2.context && "string" == typeof a2.context && "" !== a2.context, f2 = a2.lngs ? a2.lngs : s2.languageUtils.toResolveHierarchy(a2.lng || s2.language, a2.fallbackLng);
                  l2.forEach((function(e5) {
                    s2.isValidLookup(t3) || (o2 = e5, !L["".concat(f2[0], "-").concat(e5)] && s2.utils && s2.utils.hasLoadedNamespace && !s2.utils.hasLoadedNamespace(o2) && (L["".concat(f2[0], "-").concat(e5)] = true, s2.logger.warn('key "'.concat(n2, '" for languages "').concat(f2.join(", "), `" won't get resolved as namespace "`).concat(o2, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f2.forEach((function(n3) {
                      if (!s2.isValidLookup(t3)) {
                        r2 = n3;
                        var o3, c3, l3 = u2, f3 = [l3];
                        if (s2.i18nFormat && s2.i18nFormat.addLookupKeys) s2.i18nFormat.addLookupKeys(f3, u2, n3, e5, a2);
                        else d2 && (o3 = s2.pluralResolver.getSuffix(n3, a2.count)), d2 && h2 && f3.push(l3 + o3), h2 && f3.push(l3 += "".concat(s2.options.contextSeparator).concat(a2.context)), d2 && f3.push(l3 += o3);
                        for (; c3 = f3.pop(); ) s2.isValidLookup(t3) || (i2 = c3, t3 = s2.getResource(n3, e5, c3, a2));
                      }
                    })));
                  }));
                }
              })), { res: t3, usedKey: n2, exactUsedKey: i2, usedLng: r2, usedNS: o2 };
            } }, { key: "isValidLookup", value: function(e3) {
              return !(void 0 === e3 || !this.options.returnNull && null === e3 || !this.options.returnEmptyString && "" === e3);
            } }, { key: "getResource", value: function(e3, t3, n2) {
              var i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e3, t3, n2, i2) : this.resourceStore.getResource(e3, t3, n2, i2);
            } }], [{ key: "hasDefaultValue", value: function(e3) {
              for (var t3 in e3) if (Object.prototype.hasOwnProperty.call(e3, t3) && "defaultValue" === t3.substring(0, "defaultValue".length) && void 0 !== e3[t3]) return true;
              return false;
            } }]), t2;
          })(g);
          function D(e2) {
            return e2.charAt(0).toUpperCase() + e2.slice(1);
          }
          var N = (function() {
            function e2(t2) {
              Object(a.a)(this, e2), this.options = t2, this.whitelist = this.options.supportedLngs || false, this.supportedLngs = this.options.supportedLngs || false, this.logger = p.create("languageUtils");
            }
            return Object(c.a)(e2, [{ key: "getScriptPartFromCode", value: function(e3) {
              if (!e3 || e3.indexOf("-") < 0) return null;
              var t2 = e3.split("-");
              return 2 === t2.length ? null : (t2.pop(), "x" === t2[t2.length - 1].toLowerCase() ? null : this.formatLanguageCode(t2.join("-")));
            } }, { key: "getLanguagePartFromCode", value: function(e3) {
              if (!e3 || e3.indexOf("-") < 0) return e3;
              var t2 = e3.split("-");
              return this.formatLanguageCode(t2[0]);
            } }, { key: "formatLanguageCode", value: function(e3) {
              if ("string" == typeof e3 && e3.indexOf("-") > -1) {
                var t2 = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], n2 = e3.split("-");
                return this.options.lowerCaseLng ? n2 = n2.map((function(e4) {
                  return e4.toLowerCase();
                })) : 2 === n2.length ? (n2[0] = n2[0].toLowerCase(), n2[1] = n2[1].toUpperCase(), t2.indexOf(n2[1].toLowerCase()) > -1 && (n2[1] = D(n2[1].toLowerCase()))) : 3 === n2.length && (n2[0] = n2[0].toLowerCase(), 2 === n2[1].length && (n2[1] = n2[1].toUpperCase()), "sgn" !== n2[0] && 2 === n2[2].length && (n2[2] = n2[2].toUpperCase()), t2.indexOf(n2[1].toLowerCase()) > -1 && (n2[1] = D(n2[1].toLowerCase())), t2.indexOf(n2[2].toLowerCase()) > -1 && (n2[2] = D(n2[2].toLowerCase()))), n2.join("-");
              }
              return this.options.cleanCode || this.options.lowerCaseLng ? e3.toLowerCase() : e3;
            } }, { key: "isWhitelisted", value: function(e3) {
              return this.logger.deprecate("languageUtils.isWhitelisted", `function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it's usage asap.`), this.isSupportedCode(e3);
            } }, { key: "isSupportedCode", value: function(e3) {
              return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e3 = this.getLanguagePartFromCode(e3)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e3) > -1;
            } }, { key: "getBestMatchFromCodes", value: function(e3) {
              var t2, n2 = this;
              return e3 ? (e3.forEach((function(e4) {
                if (!t2) {
                  var i2 = n2.formatLanguageCode(e4);
                  n2.options.supportedLngs && !n2.isSupportedCode(i2) || (t2 = i2);
                }
              })), !t2 && this.options.supportedLngs && e3.forEach((function(e4) {
                if (!t2) {
                  var i2 = n2.getLanguagePartFromCode(e4);
                  if (n2.isSupportedCode(i2)) return t2 = i2;
                  t2 = n2.options.supportedLngs.find((function(e5) {
                    if (0 === e5.indexOf(i2)) return e5;
                  }));
                }
              })), t2 || (t2 = this.getFallbackCodes(this.options.fallbackLng)[0]), t2) : null;
            } }, { key: "getFallbackCodes", value: function(e3, t2) {
              if (!e3) return [];
              if ("function" == typeof e3 && (e3 = e3(t2)), "string" == typeof e3 && (e3 = [e3]), "[object Array]" === Object.prototype.toString.apply(e3)) return e3;
              if (!t2) return e3.default || [];
              var n2 = e3[t2];
              return n2 || (n2 = e3[this.getScriptPartFromCode(t2)]), n2 || (n2 = e3[this.formatLanguageCode(t2)]), n2 || (n2 = e3[this.getLanguagePartFromCode(t2)]), n2 || (n2 = e3.default), n2 || [];
            } }, { key: "toResolveHierarchy", value: function(e3, t2) {
              var n2 = this, i2 = this.getFallbackCodes(t2 || this.options.fallbackLng || [], e3), r2 = [], o2 = function(e4) {
                e4 && (n2.isSupportedCode(e4) ? r2.push(e4) : n2.logger.warn("rejecting language code not found in supportedLngs: ".concat(e4)));
              };
              return "string" == typeof e3 && e3.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && o2(this.formatLanguageCode(e3)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o2(this.getScriptPartFromCode(e3)), "currentOnly" !== this.options.load && o2(this.getLanguagePartFromCode(e3))) : "string" == typeof e3 && o2(this.formatLanguageCode(e3)), i2.forEach((function(e4) {
                r2.indexOf(e4) < 0 && o2(n2.formatLanguageCode(e4));
              })), r2;
            } }]), e2;
          })(), P = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }], _ = { 1: function(e2) {
            return Number(e2 > 1);
          }, 2: function(e2) {
            return Number(1 != e2);
          }, 3: function(e2) {
            return 0;
          }, 4: function(e2) {
            return Number(e2 % 10 == 1 && e2 % 100 != 11 ? 0 : e2 % 10 >= 2 && e2 % 10 <= 4 && (e2 % 100 < 10 || e2 % 100 >= 20) ? 1 : 2);
          }, 5: function(e2) {
            return Number(0 == e2 ? 0 : 1 == e2 ? 1 : 2 == e2 ? 2 : e2 % 100 >= 3 && e2 % 100 <= 10 ? 3 : e2 % 100 >= 11 ? 4 : 5);
          }, 6: function(e2) {
            return Number(1 == e2 ? 0 : e2 >= 2 && e2 <= 4 ? 1 : 2);
          }, 7: function(e2) {
            return Number(1 == e2 ? 0 : e2 % 10 >= 2 && e2 % 10 <= 4 && (e2 % 100 < 10 || e2 % 100 >= 20) ? 1 : 2);
          }, 8: function(e2) {
            return Number(1 == e2 ? 0 : 2 == e2 ? 1 : 8 != e2 && 11 != e2 ? 2 : 3);
          }, 9: function(e2) {
            return Number(e2 >= 2);
          }, 10: function(e2) {
            return Number(1 == e2 ? 0 : 2 == e2 ? 1 : e2 < 7 ? 2 : e2 < 11 ? 3 : 4);
          }, 11: function(e2) {
            return Number(1 == e2 || 11 == e2 ? 0 : 2 == e2 || 12 == e2 ? 1 : e2 > 2 && e2 < 20 ? 2 : 3);
          }, 12: function(e2) {
            return Number(e2 % 10 != 1 || e2 % 100 == 11);
          }, 13: function(e2) {
            return Number(0 !== e2);
          }, 14: function(e2) {
            return Number(1 == e2 ? 0 : 2 == e2 ? 1 : 3 == e2 ? 2 : 3);
          }, 15: function(e2) {
            return Number(e2 % 10 == 1 && e2 % 100 != 11 ? 0 : e2 % 10 >= 2 && (e2 % 100 < 10 || e2 % 100 >= 20) ? 1 : 2);
          }, 16: function(e2) {
            return Number(e2 % 10 == 1 && e2 % 100 != 11 ? 0 : 0 !== e2 ? 1 : 2);
          }, 17: function(e2) {
            return Number(1 == e2 || e2 % 10 == 1 && e2 % 100 != 11 ? 0 : 1);
          }, 18: function(e2) {
            return Number(0 == e2 ? 0 : 1 == e2 ? 1 : 2);
          }, 19: function(e2) {
            return Number(1 == e2 ? 0 : 0 == e2 || e2 % 100 > 1 && e2 % 100 < 11 ? 1 : e2 % 100 > 10 && e2 % 100 < 20 ? 2 : 3);
          }, 20: function(e2) {
            return Number(1 == e2 ? 0 : 0 == e2 || e2 % 100 > 0 && e2 % 100 < 20 ? 1 : 2);
          }, 21: function(e2) {
            return Number(e2 % 100 == 1 ? 1 : e2 % 100 == 2 ? 2 : e2 % 100 == 3 || e2 % 100 == 4 ? 3 : 0);
          }, 22: function(e2) {
            return Number(1 == e2 ? 0 : 2 == e2 ? 1 : (e2 < 0 || e2 > 10) && e2 % 10 == 0 ? 2 : 3);
          } };
          function M() {
            var e2 = {};
            return P.forEach((function(t2) {
              t2.lngs.forEach((function(n2) {
                e2[n2] = { numbers: t2.nr, plurals: _[t2.fc] };
              }));
            })), e2;
          }
          var V = (function() {
            function e2(t2) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              Object(a.a)(this, e2), this.languageUtils = t2, this.options = n2, this.logger = p.create("pluralResolver"), this.rules = M();
            }
            return Object(c.a)(e2, [{ key: "addRule", value: function(e3, t2) {
              this.rules[e3] = t2;
            } }, { key: "getRule", value: function(e3) {
              return this.rules[e3] || this.rules[this.languageUtils.getLanguagePartFromCode(e3)];
            } }, { key: "needsPlural", value: function(e3) {
              var t2 = this.getRule(e3);
              return t2 && t2.numbers.length > 1;
            } }, { key: "getPluralFormsOfKey", value: function(e3, t2) {
              return this.getSuffixes(e3).map((function(e4) {
                return t2 + e4;
              }));
            } }, { key: "getSuffixes", value: function(e3) {
              var t2 = this, n2 = this.getRule(e3);
              return n2 ? n2.numbers.map((function(n3) {
                return t2.getSuffix(e3, n3);
              })) : [];
            } }, { key: "getSuffix", value: function(e3, t2) {
              var n2 = this, i2 = this.getRule(e3);
              if (i2) {
                var r2 = i2.noAbs ? i2.plurals(t2) : i2.plurals(Math.abs(t2)), o2 = i2.numbers[r2];
                this.options.simplifyPluralSuffix && 2 === i2.numbers.length && 1 === i2.numbers[0] && (2 === o2 ? o2 = "plural" : 1 === o2 && (o2 = ""));
                var s2 = function() {
                  return n2.options.prepend && o2.toString() ? n2.options.prepend + o2.toString() : o2.toString();
                };
                return "v1" === this.options.compatibilityJSON ? 1 === o2 ? "" : "number" == typeof o2 ? "_plural_".concat(o2.toString()) : s2() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === i2.numbers.length && 1 === i2.numbers[0] ? s2() : this.options.prepend && r2.toString() ? this.options.prepend + r2.toString() : r2.toString();
              }
              return this.logger.warn("no plural rule found for: ".concat(e3)), "";
            } }]), e2;
          })(), j = (function() {
            function e2() {
              var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              Object(a.a)(this, e2), this.logger = p.create("interpolator"), this.options = t2, this.format = t2.interpolation && t2.interpolation.format || function(e3) {
                return e3;
              }, this.init(t2);
            }
            return Object(c.a)(e2, [{ key: "init", value: function() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              e3.interpolation || (e3.interpolation = { escapeValue: true });
              var t2 = e3.interpolation;
              this.escape = void 0 !== t2.escape ? t2.escape : T, this.escapeValue = void 0 === t2.escapeValue || t2.escapeValue, this.useRawValueToEscape = void 0 !== t2.useRawValueToEscape && t2.useRawValueToEscape, this.prefix = t2.prefix ? A(t2.prefix) : t2.prefixEscaped || "{{", this.suffix = t2.suffix ? A(t2.suffix) : t2.suffixEscaped || "}}", this.formatSeparator = t2.formatSeparator ? t2.formatSeparator : t2.formatSeparator || ",", this.unescapePrefix = t2.unescapeSuffix ? "" : t2.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t2.unescapeSuffix || "", this.nestingPrefix = t2.nestingPrefix ? A(t2.nestingPrefix) : t2.nestingPrefixEscaped || A("$t("), this.nestingSuffix = t2.nestingSuffix ? A(t2.nestingSuffix) : t2.nestingSuffixEscaped || A(")"), this.nestingOptionsSeparator = t2.nestingOptionsSeparator ? t2.nestingOptionsSeparator : t2.nestingOptionsSeparator || ",", this.maxReplaces = t2.maxReplaces ? t2.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t2.alwaysFormat && t2.alwaysFormat, this.resetRegExp();
            } }, { key: "reset", value: function() {
              this.options && this.init(this.options);
            } }, { key: "resetRegExp", value: function() {
              var e3 = "".concat(this.prefix, "(.+?)").concat(this.suffix);
              this.regexp = new RegExp(e3, "g");
              var t2 = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
              this.regexpUnescape = new RegExp(t2, "g");
              var n2 = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
              this.nestingRegexp = new RegExp(n2, "g");
            } }, { key: "interpolate", value: function(e3, t2, n2, i2) {
              var r2, o2, s2, a2 = this, c2 = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
              function u2(e4) {
                return e4.replace(/\$/g, "$$$$");
              }
              var l2 = function(e4) {
                if (e4.indexOf(a2.formatSeparator) < 0) {
                  var r3 = k(t2, c2, e4);
                  return a2.alwaysFormat ? a2.format(r3, void 0, n2) : r3;
                }
                var o3 = e4.split(a2.formatSeparator), s3 = o3.shift().trim(), u3 = o3.join(a2.formatSeparator).trim();
                return a2.format(k(t2, c2, s3), u3, n2, i2);
              };
              this.resetRegExp();
              var d2 = i2 && i2.missingInterpolationHandler || this.options.missingInterpolationHandler, h2 = i2 && i2.interpolation && i2.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
              return [{ regex: this.regexpUnescape, safeValue: function(e4) {
                return u2(e4);
              } }, { regex: this.regexp, safeValue: function(e4) {
                return a2.escapeValue ? u2(a2.escape(e4)) : u2(e4);
              } }].forEach((function(t3) {
                for (s2 = 0; r2 = t3.regex.exec(e3); ) {
                  if (void 0 === (o2 = l2(r2[1].trim()))) if ("function" == typeof d2) {
                    var n3 = d2(e3, r2, i2);
                    o2 = "string" == typeof n3 ? n3 : "";
                  } else {
                    if (h2) {
                      o2 = r2[0];
                      continue;
                    }
                    a2.logger.warn("missed to pass in variable ".concat(r2[1], " for interpolating ").concat(e3)), o2 = "";
                  }
                  else "string" == typeof o2 || a2.useRawValueToEscape || (o2 = y(o2));
                  if (e3 = e3.replace(r2[0], t3.safeValue(o2)), t3.regex.lastIndex = 0, ++s2 >= a2.maxReplaces) break;
                }
              })), e3;
            } }, { key: "nest", value: function(e3, t2) {
              var n2, i2, r2 = this, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a2 = s({}, o2);
              function c2(e4, t3) {
                var n3 = this.nestingOptionsSeparator;
                if (e4.indexOf(n3) < 0) return e4;
                var i3 = e4.split(new RegExp("".concat(n3, "[ ]*{"))), r3 = "{".concat(i3[1]);
                e4 = i3[0], r3 = (r3 = this.interpolate(r3, a2)).replace(/'/g, '"');
                try {
                  a2 = JSON.parse(r3), t3 && (a2 = s({}, t3, a2));
                } catch (t4) {
                  return this.logger.warn("failed parsing options string in nesting for key ".concat(e4), t4), "".concat(e4).concat(n3).concat(r3);
                }
                return delete a2.defaultValue, e4;
              }
              for (a2.applyPostProcessor = false, delete a2.defaultValue; n2 = this.nestingRegexp.exec(e3); ) {
                var u2 = [], l2 = false;
                if (n2[0].includes(this.formatSeparator) && !/{.*}/.test(n2[1])) {
                  var d2 = n2[1].split(this.formatSeparator).map((function(e4) {
                    return e4.trim();
                  }));
                  n2[1] = d2.shift(), u2 = d2, l2 = true;
                }
                if ((i2 = t2(c2.call(this, n2[1].trim(), a2), a2)) && n2[0] === e3 && "string" != typeof i2) return i2;
                "string" != typeof i2 && (i2 = y(i2)), i2 || (this.logger.warn("missed to resolve ".concat(n2[1], " for nesting ").concat(e3)), i2 = ""), l2 && (i2 = u2.reduce((function(e4, t3) {
                  return r2.format(e4, t3, o2.lng, o2);
                }), i2.trim())), e3 = e3.replace(n2[0], i2), this.regexp.lastIndex = 0;
              }
              return e3;
            } }]), e2;
          })();
          var q = (function(e2) {
            function t2(e3, n2, i2) {
              var r2, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              return Object(a.a)(this, t2), r2 = l(this, d(t2).call(this)), O && g.call(u(r2)), r2.backend = e3, r2.store = n2, r2.services = i2, r2.languageUtils = i2.languageUtils, r2.options = o2, r2.logger = p.create("backendConnector"), r2.state = {}, r2.queue = [], r2.backend && r2.backend.init && r2.backend.init(i2, o2.backend, o2), r2;
            }
            return f(t2, e2), Object(c.a)(t2, [{ key: "queueLoad", value: function(e3, t3, n2, i2) {
              var r2 = this, o2 = [], s2 = [], a2 = [], c2 = [];
              return e3.forEach((function(e4) {
                var i3 = true;
                t3.forEach((function(t4) {
                  var a3 = "".concat(e4, "|").concat(t4);
                  !n2.reload && r2.store.hasResourceBundle(e4, t4) ? r2.state[a3] = 2 : r2.state[a3] < 0 || (1 === r2.state[a3] ? s2.indexOf(a3) < 0 && s2.push(a3) : (r2.state[a3] = 1, i3 = false, s2.indexOf(a3) < 0 && s2.push(a3), o2.indexOf(a3) < 0 && o2.push(a3), c2.indexOf(t4) < 0 && c2.push(t4)));
                })), i3 || a2.push(e4);
              })), (o2.length || s2.length) && this.queue.push({ pending: s2, loaded: {}, errors: [], callback: i2 }), { toLoad: o2, pending: s2, toLoadLanguages: a2, toLoadNamespaces: c2 };
            } }, { key: "loaded", value: function(e3, t3, n2) {
              var i2 = e3.split("|"), r2 = i2[0], o2 = i2[1];
              t3 && this.emit("failedLoading", r2, o2, t3), n2 && this.store.addResourceBundle(r2, o2, n2), this.state[e3] = t3 ? -1 : 2;
              var s2 = {};
              this.queue.forEach((function(n3) {
                var i3, a2, c2, u2, l2, d2;
                i3 = n3.loaded, a2 = o2, u2 = b(i3, [r2], Object), l2 = u2.obj, d2 = u2.k, l2[d2] = l2[d2] || [], c2 && (l2[d2] = l2[d2].concat(a2)), c2 || l2[d2].push(a2), (function(e4, t4) {
                  for (var n4 = e4.indexOf(t4); -1 !== n4; ) e4.splice(n4, 1), n4 = e4.indexOf(t4);
                })(n3.pending, e3), t3 && n3.errors.push(t3), 0 !== n3.pending.length || n3.done || (Object.keys(n3.loaded).forEach((function(e4) {
                  s2[e4] || (s2[e4] = []), n3.loaded[e4].length && n3.loaded[e4].forEach((function(t4) {
                    s2[e4].indexOf(t4) < 0 && s2[e4].push(t4);
                  }));
                })), n3.done = true, n3.errors.length ? n3.callback(n3.errors) : n3.callback());
              })), this.emit("loaded", s2), this.queue = this.queue.filter((function(e4) {
                return !e4.done;
              }));
            } }, { key: "read", value: function(e3, t3, n2) {
              var i2 = this, r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350, s2 = arguments.length > 5 ? arguments[5] : void 0;
              return e3.length ? this.backend[n2](e3, t3, (function(a2, c2) {
                a2 && c2 && r2 < 5 ? setTimeout((function() {
                  i2.read.call(i2, e3, t3, n2, r2 + 1, 2 * o2, s2);
                }), o2) : s2(a2, c2);
              })) : s2(null, {});
            } }, { key: "prepareLoading", value: function(e3, t3) {
              var n2 = this, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = arguments.length > 3 ? arguments[3] : void 0;
              if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r2 && r2();
              "string" == typeof e3 && (e3 = this.languageUtils.toResolveHierarchy(e3)), "string" == typeof t3 && (t3 = [t3]);
              var o2 = this.queueLoad(e3, t3, i2, r2);
              if (!o2.toLoad.length) return o2.pending.length || r2(), null;
              o2.toLoad.forEach((function(e4) {
                n2.loadOne(e4);
              }));
            } }, { key: "load", value: function(e3, t3, n2) {
              this.prepareLoading(e3, t3, {}, n2);
            } }, { key: "reload", value: function(e3, t3, n2) {
              this.prepareLoading(e3, t3, { reload: true }, n2);
            } }, { key: "loadOne", value: function(e3) {
              var t3 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i2 = e3.split("|"), r2 = i2[0], o2 = i2[1];
              this.read(r2, o2, "read", void 0, void 0, (function(i3, s2) {
                i3 && t3.logger.warn("".concat(n2, "loading namespace ").concat(o2, " for language ").concat(r2, " failed"), i3), !i3 && s2 && t3.logger.log("".concat(n2, "loaded namespace ").concat(o2, " for language ").concat(r2), s2), t3.loaded(e3, i3, s2);
              }));
            } }, { key: "saveMissing", value: function(e3, t3, n2, i2, r2) {
              var o2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
              this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t3) ? this.logger.warn('did not save key "'.concat(n2, '" as the namespace "').concat(t3, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n2 && "" !== n2 && (this.backend && this.backend.create && this.backend.create(e3, t3, n2, i2, null, s({}, o2, { isUpdate: r2 })), e3 && e3[0] && this.store.addResource(e3[0], t3, n2, i2));
            } }]), t2;
          })(g);
          function F() {
            return { debug: false, initImmediate: true, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: false, whitelist: false, nonExplicitWhitelist: false, supportedLngs: false, nonExplicitSupportedLngs: false, load: "all", preload: false, simplifyPluralSuffix: true, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: false, saveMissing: false, updateMissing: false, saveMissingTo: "fallback", saveMissingPlurals: true, missingKeyHandler: false, missingInterpolationHandler: false, postProcess: false, postProcessPassResolved: false, returnNull: true, returnEmptyString: true, returnObjects: false, joinArrays: false, returnedObjectHandler: false, parseMissingKeyHandler: false, appendNamespaceToMissingKey: false, appendNamespaceToCIMode: false, overloadTranslationOptionHandler: function(e2) {
              var t2 = {};
              if ("object" === Object(i.a)(e2[1]) && (t2 = e2[1]), "string" == typeof e2[1] && (t2.defaultValue = e2[1]), "string" == typeof e2[2] && (t2.tDescription = e2[2]), "object" === Object(i.a)(e2[2]) || "object" === Object(i.a)(e2[3])) {
                var n2 = e2[3] || e2[2];
                Object.keys(n2).forEach((function(e3) {
                  t2[e3] = n2[e3];
                }));
              }
              return t2;
            }, interpolation: { escapeValue: true, format: function(e2, t2, n2, i2) {
              return e2;
            }, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: false } };
          }
          function B(e2) {
            return "string" == typeof e2.ns && (e2.ns = [e2.ns]), "string" == typeof e2.fallbackLng && (e2.fallbackLng = [e2.fallbackLng]), "string" == typeof e2.fallbackNS && (e2.fallbackNS = [e2.fallbackNS]), e2.whitelist && (e2.whitelist && e2.whitelist.indexOf("cimode") < 0 && (e2.whitelist = e2.whitelist.concat(["cimode"])), e2.supportedLngs = e2.whitelist), e2.nonExplicitWhitelist && (e2.nonExplicitSupportedLngs = e2.nonExplicitWhitelist), e2.supportedLngs && e2.supportedLngs.indexOf("cimode") < 0 && (e2.supportedLngs = e2.supportedLngs.concat(["cimode"])), e2;
          }
          function H() {
          }
          var z = new ((function(e2) {
            function t2() {
              var e3, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i2 = arguments.length > 1 ? arguments[1] : void 0;
              if (Object(a.a)(this, t2), e3 = l(this, d(t2).call(this)), O && g.call(u(e3)), e3.options = B(n2), e3.services = {}, e3.logger = p, e3.modules = { external: [] }, i2 && !e3.isInitialized && !n2.isClone) {
                if (!e3.options.initImmediate) return e3.init(n2, i2), l(e3, u(e3));
                setTimeout((function() {
                  e3.init(n2, i2);
                }), 0);
              }
              return e3;
            }
            return f(t2, e2), Object(c.a)(t2, [{ key: "init", value: function() {
              var e3 = this, t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = arguments.length > 1 ? arguments[1] : void 0;
              function i2(e4) {
                return e4 ? "function" == typeof e4 ? new e4() : e4 : null;
              }
              if ("function" == typeof t3 && (n2 = t3, t3 = {}), t3.whitelist && !t3.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), t3.nonExplicitWhitelist && !t3.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = s({}, F(), this.options, B(t3)), this.format = this.options.interpolation.format, n2 || (n2 = H), !this.options.isClone) {
                this.modules.logger ? p.init(i2(this.modules.logger), this.options) : p.init(null, this.options);
                var r2 = new N(this.options);
                this.store = new U(this.options.resources, this.options);
                var o2 = this.services;
                o2.logger = p, o2.resourceStore = this.store, o2.languageUtils = r2, o2.pluralResolver = new V(r2, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), o2.interpolator = new j(this.options), o2.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, o2.backendConnector = new q(i2(this.modules.backend), o2.resourceStore, o2, this.options), o2.backendConnector.on("*", (function(t4) {
                  for (var n3 = arguments.length, i3 = new Array(n3 > 1 ? n3 - 1 : 0), r3 = 1; r3 < n3; r3++) i3[r3 - 1] = arguments[r3];
                  e3.emit.apply(e3, [t4].concat(i3));
                })), this.modules.languageDetector && (o2.languageDetector = i2(this.modules.languageDetector), o2.languageDetector.init(o2, this.options.detection, this.options)), this.modules.i18nFormat && (o2.i18nFormat = i2(this.modules.i18nFormat), o2.i18nFormat.init && o2.i18nFormat.init(this)), this.translator = new x(this.services, this.options), this.translator.on("*", (function(t4) {
                  for (var n3 = arguments.length, i3 = new Array(n3 > 1 ? n3 - 1 : 0), r3 = 1; r3 < n3; r3++) i3[r3 - 1] = arguments[r3];
                  e3.emit.apply(e3, [t4].concat(i3));
                })), this.modules.external.forEach((function(t4) {
                  t4.init && t4.init(e3);
                }));
              }
              if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                var a2 = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                a2.length > 0 && "dev" !== a2[0] && (this.options.lng = a2[0]);
              }
              this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
              var c2 = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
              c2.forEach((function(t4) {
                e3[t4] = function() {
                  var n3;
                  return (n3 = e3.store)[t4].apply(n3, arguments);
                };
              }));
              var u2 = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
              u2.forEach((function(t4) {
                e3[t4] = function() {
                  var n3;
                  return (n3 = e3.store)[t4].apply(n3, arguments), e3;
                };
              }));
              var l2 = m(), d2 = function() {
                var t4 = function(t5, i3) {
                  e3.isInitialized && e3.logger.warn("init: i18next is already initialized. You should call init just once!"), e3.isInitialized = true, e3.options.isClone || e3.logger.log("initialized", e3.options), e3.emit("initialized", e3.options), l2.resolve(i3), n2(t5, i3);
                };
                if (e3.languages && "v1" !== e3.options.compatibilityAPI && !e3.isInitialized) return t4(null, e3.t.bind(e3));
                e3.changeLanguage(e3.options.lng, t4);
              };
              return this.options.resources || !this.options.initImmediate ? d2() : setTimeout(d2, 0), l2;
            } }, { key: "loadResources", value: function(e3) {
              var t3 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H, i2 = n2, r2 = "string" == typeof e3 ? e3 : this.language;
              if ("function" == typeof e3 && (i2 = e3), !this.options.resources || this.options.partialBundledLanguages) {
                if (r2 && "cimode" === r2.toLowerCase()) return i2();
                var o2 = [], s2 = function(e4) {
                  e4 && t3.services.languageUtils.toResolveHierarchy(e4).forEach((function(e5) {
                    o2.indexOf(e5) < 0 && o2.push(e5);
                  }));
                };
                if (r2) s2(r2);
                else {
                  var a2 = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                  a2.forEach((function(e4) {
                    return s2(e4);
                  }));
                }
                this.options.preload && this.options.preload.forEach((function(e4) {
                  return s2(e4);
                })), this.services.backendConnector.load(o2, this.options.ns, i2);
              } else i2(null);
            } }, { key: "reloadResources", value: function(e3, t3, n2) {
              var i2 = m();
              return e3 || (e3 = this.languages), t3 || (t3 = this.options.ns), n2 || (n2 = H), this.services.backendConnector.reload(e3, t3, (function(e4) {
                i2.resolve(), n2(e4);
              })), i2;
            } }, { key: "use", value: function(e3) {
              if (!e3) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
              if (!e3.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
              return "backend" === e3.type && (this.modules.backend = e3), ("logger" === e3.type || e3.log && e3.warn && e3.error) && (this.modules.logger = e3), "languageDetector" === e3.type && (this.modules.languageDetector = e3), "i18nFormat" === e3.type && (this.modules.i18nFormat = e3), "postProcessor" === e3.type && R.addPostProcessor(e3), "3rdParty" === e3.type && this.modules.external.push(e3), this;
            } }, { key: "changeLanguage", value: function(e3, t3) {
              var n2 = this;
              this.isLanguageChangingTo = e3;
              var i2 = m();
              this.emit("languageChanging", e3);
              var r2 = function(e4) {
                var r3 = "string" == typeof e4 ? e4 : n2.services.languageUtils.getBestMatchFromCodes(e4);
                r3 && (n2.language || (n2.language = r3, n2.languages = n2.services.languageUtils.toResolveHierarchy(r3)), n2.translator.language || n2.translator.changeLanguage(r3), n2.services.languageDetector && n2.services.languageDetector.cacheUserLanguage(r3)), n2.loadResources(r3, (function(e5) {
                  !(function(e6, r4) {
                    r4 ? (n2.language = r4, n2.languages = n2.services.languageUtils.toResolveHierarchy(r4), n2.translator.changeLanguage(r4), n2.isLanguageChangingTo = void 0, n2.emit("languageChanged", r4), n2.logger.log("languageChanged", r4)) : n2.isLanguageChangingTo = void 0, i2.resolve((function() {
                      return n2.t.apply(n2, arguments);
                    })), t3 && t3(e6, (function() {
                      return n2.t.apply(n2, arguments);
                    }));
                  })(e5, r3);
                }));
              };
              return e3 || !this.services.languageDetector || this.services.languageDetector.async ? !e3 && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(r2) : r2(e3) : r2(this.services.languageDetector.detect()), i2;
            } }, { key: "getFixedT", value: function(e3, t3) {
              var n2 = this, r2 = function e4(t4, r3) {
                var o2;
                if ("object" !== Object(i.a)(r3)) {
                  for (var a2 = arguments.length, c2 = new Array(a2 > 2 ? a2 - 2 : 0), u2 = 2; u2 < a2; u2++) c2[u2 - 2] = arguments[u2];
                  o2 = n2.options.overloadTranslationOptionHandler([t4, r3].concat(c2));
                } else o2 = s({}, r3);
                return o2.lng = o2.lng || e4.lng, o2.lngs = o2.lngs || e4.lngs, o2.ns = o2.ns || e4.ns, n2.t(t4, o2);
              };
              return "string" == typeof e3 ? r2.lng = e3 : r2.lngs = e3, r2.ns = t3, r2;
            } }, { key: "t", value: function() {
              var e3;
              return this.translator && (e3 = this.translator).translate.apply(e3, arguments);
            } }, { key: "exists", value: function() {
              var e3;
              return this.translator && (e3 = this.translator).exists.apply(e3, arguments);
            } }, { key: "setDefaultNamespace", value: function(e3) {
              this.options.defaultNS = e3;
            } }, { key: "hasLoadedNamespace", value: function(e3) {
              var t3 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), false;
              if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), false;
              var i2 = this.languages[0], r2 = !!this.options && this.options.fallbackLng, o2 = this.languages[this.languages.length - 1];
              if ("cimode" === i2.toLowerCase()) return true;
              var s2 = function(e4, n3) {
                var i3 = t3.services.backendConnector.state["".concat(e4, "|").concat(n3)];
                return -1 === i3 || 2 === i3;
              };
              if (n2.precheck) {
                var a2 = n2.precheck(this, s2);
                if (void 0 !== a2) return a2;
              }
              return !!this.hasResourceBundle(i2, e3) || (!this.services.backendConnector.backend || !(!s2(i2, e3) || r2 && !s2(o2, e3)));
            } }, { key: "loadNamespaces", value: function(e3, t3) {
              var n2 = this, i2 = m();
              return this.options.ns ? ("string" == typeof e3 && (e3 = [e3]), e3.forEach((function(e4) {
                n2.options.ns.indexOf(e4) < 0 && n2.options.ns.push(e4);
              })), this.loadResources((function(e4) {
                i2.resolve(), t3 && t3(e4);
              })), i2) : (t3 && t3(), Promise.resolve());
            } }, { key: "loadLanguages", value: function(e3, t3) {
              var n2 = m();
              "string" == typeof e3 && (e3 = [e3]);
              var i2 = this.options.preload || [], r2 = e3.filter((function(e4) {
                return i2.indexOf(e4) < 0;
              }));
              return r2.length ? (this.options.preload = i2.concat(r2), this.loadResources((function(e4) {
                n2.resolve(), t3 && t3(e4);
              })), n2) : (t3 && t3(), Promise.resolve());
            } }, { key: "dir", value: function(e3) {
              if (e3 || (e3 = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e3) return "rtl";
              return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e3)) >= 0 ? "rtl" : "ltr";
            } }, { key: "createInstance", value: function() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = arguments.length > 1 ? arguments[1] : void 0;
              return new t2(e3, n2);
            } }, { key: "cloneInstance", value: function() {
              var e3 = this, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H, r2 = s({}, this.options, n2, { isClone: true }), o2 = new t2(r2), a2 = ["store", "services", "language"];
              return a2.forEach((function(t3) {
                o2[t3] = e3[t3];
              })), o2.services = s({}, this.services), o2.services.utils = { hasLoadedNamespace: o2.hasLoadedNamespace.bind(o2) }, o2.translator = new x(o2.services, o2.options), o2.translator.on("*", (function(e4) {
                for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), i3 = 1; i3 < t3; i3++) n3[i3 - 1] = arguments[i3];
                o2.emit.apply(o2, [e4].concat(n3));
              })), o2.init(r2, i2), o2.translator.options = o2.options, o2.translator.backendConnector.services.utils = { hasLoadedNamespace: o2.hasLoadedNamespace.bind(o2) }, o2;
            } }]), t2;
          })(g))();
          t.default = z;
        }]);
      }));
    }
  });

  // src/ACP-SD-hidden-widget.js
  var import_sdk = __toESM(require_dist());
  var AcpServicedeskHidden = class extends HTMLElement {
    constructor() {
      super();
      this._mounted = false;
      this._on = this._on.bind(this);
      this._events = [
        "eAgentContactConnected",
        "eAgentContactUpdated",
        "eAgentOfferContact",
        "eAgentContactAssigned",
        "eAgentContactWrapUp"
      ];
      this._pollTimer = null;
    }
    connectedCallback() {
      this._mounted = true;
      this._init().catch((err) => console.warn("bridge init error", err));
    }
    disconnectedCallback() {
      this._mounted = false;
      try {
        this._events.forEach((evt) => {
          var _a;
          return (_a = import_sdk.Desktop.agentContact) == null ? void 0 : _a.removeEventListener(evt, this._on);
        });
      } catch (e) {
      }
      if (this._pollTimer) {
        clearInterval(this._pollTimer);
        this._pollTimer = null;
      }
    }
    async _init() {
      console.warn("HIDDEN: init Desktop");
      await import_sdk.Desktop.config.init({
        widgetName: "acp-servicedesk-hidden",
        widgetProvider: "Custom"
        // oder ein für euch passender Providername
      });
      if (import_sdk.Desktop.agentContact && typeof import_sdk.Desktop.agentContact.addEventListener === "function") {
        console.warn("HIDDEN: addListener");
        this._events.forEach((evt) => import_sdk.Desktop.agentContact.addEventListener(evt, this._on));
      }
      await this._snapshotFromTaskMap();
      if (!this._pollTimer) {
        this._pollTimer = setInterval(() => this._snapshotFromTaskMap(), 2e3);
      }
    }
    async _snapshotFromTaskMap() {
      var _a;
      if (!this._mounted) return;
      try {
        console.warn("HIDDEN: getting TaskMap");
        const tm = await import_sdk.Desktop.actions.getTaskMap();
        if (!tm || !Object.keys(tm).length) return;
        const tasks = Object.values(tm);
        const t = tasks.find((x) => (x == null ? void 0 : x.mediaType) === "telephony" || (x == null ? void 0 : x.channelType) === "telephony") || tasks[0];
        if (!t) return;
        const cad = ((_a = t == null ? void 0 : t.interaction) == null ? void 0 : _a.callAssociatedData) || (t == null ? void 0 : t.callAssociatedData) || (t == null ? void 0 : t.cad) || {};
        const ani = this._extractAniLike(cad) || this._extractAniLike(t);
        if (!ani) return;
        const interactionId = (t == null ? void 0 : t.interactionId) || (t == null ? void 0 : t.id) || (t == null ? void 0 : t.contactId) || null;
        this._saveSnapshot({ interactionId, ani, eventType: "poll:taskMap" });
      } catch (e) {
      }
    }
    _on(evt) {
      var _a, _b, _c;
      try {
        console.warn("HIDDEN: Evt fired");
        const detail = (evt == null ? void 0 : evt.detail) || {};
        const cad = ((_a = detail == null ? void 0 : detail.data) == null ? void 0 : _a.callAssociatedData) || (detail == null ? void 0 : detail.callAssociatedData) || ((_b = detail == null ? void 0 : detail.interaction) == null ? void 0 : _b.callAssociatedData) || (detail == null ? void 0 : detail.cad) || {};
        const ani = this._extractAniLike(cad);
        console.warn("HIDDEN: Evt ani=" + ani);
        console.warn("HIDDEN: Evt ani manual=" + detail.interaction.callAssociatedDetails.ani);
        const interactionId = ((_c = detail == null ? void 0 : detail.data) == null ? void 0 : _c.interactionId) || (detail == null ? void 0 : detail.interactionId) || (detail == null ? void 0 : detail.contactId) || null;
        this._saveSnapshot({ interactionId, ani: ani || null, eventType: evt.type });
      } catch (e) {
        console.warn("bridge onEvent error", e);
      }
    }
    _saveSnapshot({ interactionId, ani, eventType }) {
      console.warn("HIDDEN: saving snapshot: " + ani);
      const snapshot = { interactionId, ani, eventType, ts: Date.now() };
      const prev = window.__WXCC_LAST;
      if (!prev || prev.ani !== ani || prev.interactionId !== interactionId || prev.eventType !== eventType) {
        window.__WXCC_LAST = snapshot;
        try {
          localStorage.setItem("wxcc:ani_saver", JSON.stringify(snapshot));
        } catch (e) {
        }
      }
    }
    _extractAniLike(obj) {
      if (!obj || typeof obj !== "object") return null;
      const val = (v) => v && typeof v === "object" && "value" in v ? v.value : v;
      const looks = (s) => {
        const x = String(s || "").replace(/[^\d+]/g, "");
        return /^\+?\d{6,}$/.test(x) ? x : null;
      };
      for (const k of ["ANI", "ani", "callerNumber", "caller", "cli", "phoneNumber", "fromAddress"]) {
        const hit = looks(val(obj[k]));
        if (hit) return hit;
      }
      const seen = /* @__PURE__ */ new WeakSet(), stack = [obj];
      while (stack.length) {
        const n = stack.pop();
        if (!n || typeof n !== "object" || seen.has(n)) continue;
        seen.add(n);
        for (const v of Object.values(n)) {
          const out = val(v);
          if (typeof out === "string") {
            const hit = looks(out);
            if (hit) return hit;
          } else if (out && typeof out === "object") {
            stack.push(out);
          }
        }
      }
      return null;
    }
  };
  if (!customElements.get("acp-servicedesk-hidden")) {
    customElements.define("acp-servicedesk-hidden", AcpServicedeskHidden);
  }
})();