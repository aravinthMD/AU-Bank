(window.webpackJsonp = window.webpackJsonp || []).push([
            [3], { 0: function(t, e, n) { t.exports = n("zUnb") }, "0EUg": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return s })); var r = n("bHdf");

                    function s() { return Object(r.a)(1) } }, "1kSV": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return qn })), n.d(e, "b", (function() { return Pn })), n.d(e, "c", (function() { return Kn })), n.d(e, "d", (function() { return Fr })), n.d(e, "e", (function() { return or })), n.d(e, "f", (function() { return ur })), n.d(e, "g", (function() { return br })), n.d(e, "h", (function() { return gr })), n.d(e, "i", (function() { return mr })), n.d(e, "j", (function() { return yr })), n.d(e, "k", (function() { return Dr })), n.d(e, "l", (function() { return jr })); var r = n("fXoL"),
                        s = n("ofXK"),
                        i = n("3Pt+"),
                        o = n("XNiG"),
                        a = (n("2Vo4"), n("itXk"), n("HDdC")),
                        l = n("quSY");
                    class c extends l.a { constructor(t, e) { super() }
                        schedule(t, e = 0) { return this } }
                    class u extends c { constructor(t, e) { super(t, e), this.scheduler = t, this.work = e, this.pending = !1 }
                        schedule(t, e = 0) { if (this.closed) return this;
                            this.state = t; const n = this.id,
                                r = this.scheduler; return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this }
                        requestAsyncId(t, e, n = 0) { return setInterval(t.flush.bind(t, this), n) }
                        recycleAsyncId(t, e, n = 0) { if (null !== n && this.delay === n && !1 === this.pending) return e;
                            clearInterval(e) }
                        execute(t, e) { if (this.closed) return new Error("executing a cancelled action");
                            this.pending = !1; const n = this._execute(t, e); if (n) return n;!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)) }
                        _execute(t, e) { let n = !1,
                                r = void 0; try { this.work(t) } catch (s) { n = !0, r = !!s && s || new Error(s) } if (n) return this.unsubscribe(), r }
                        _unsubscribe() { const t = this.id,
                                e = this.scheduler,
                                n = e.actions,
                                r = n.indexOf(this);
                            this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null } } let h = (() => { class t { constructor(e, n = t.now) { this.SchedulerAction = e, this.now = n }
                            schedule(t, e = 0, n) { return new this.SchedulerAction(this, t).schedule(n, e) } } return t.now = () => Date.now(), t })();
                    class d extends h { constructor(t, e = h.now) { super(t, () => d.delegate && d.delegate !== this ? d.delegate.now() : e()), this.actions = [], this.active = !1, this.scheduled = void 0 }
                        schedule(t, e = 0, n) { return d.delegate && d.delegate !== this ? d.delegate.schedule(t, e, n) : super.schedule(t, e, n) }
                        flush(t) { const { actions: e } = this; if (this.active) return void e.push(t); let n;
                            this.active = !0;
                            do { if (n = t.execute(t.state, t.delay)) break } while (t = e.shift()); if (this.active = !1, n) { for (; t = e.shift();) t.unsubscribe(); throw n } } } const f = new d(u); var p = n("DH7j");
                    n("z+Ro"), n("KqfI"); var m = n("n6bG"),
                        g = n("lJxs");

                    function b(t, e, n, r) { return Object(m.a)(n) && (r = n, n = void 0), r ? b(t, e, n).pipe(Object(g.a)(t => Object(p.a)(t) ? r(...t) : r(t))) : new a.a(r => {! function t(e, n, r, s, i) { let o; if (function(t) { return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener }(e)) { const t = e;
                                    e.addEventListener(n, r, i), o = () => t.removeEventListener(n, r, i) } else if (function(t) { return t && "function" == typeof t.on && "function" == typeof t.off }(e)) { const t = e;
                                    e.on(n, r), o = () => t.off(n, r) } else if (function(t) { return t && "function" == typeof t.addListener && "function" == typeof t.removeListener }(e)) { const t = e;
                                    e.addListener(n, r), o = () => t.removeListener(n, r) } else { if (!e || !e.length) throw new TypeError("Invalid event target"); for (let o = 0, a = e.length; o < a; o++) t(e[o], n, r, s, i) }
                                s.add(o) }(t, e, (function(t) { r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t) }), r, n) }) } var y = n("VRyK"),
                        _ = n("yCtX"),
                        v = n("l7GE"),
                        w = n("ZUHj");
                    class S { call(t, e) { return e.subscribe(new C(t)) } }
                    class C extends v.a { constructor(t) { super(t), this.hasFirst = !1, this.observables = [], this.subscriptions = [] }
                        _next(t) { this.observables.push(t) }
                        _complete() { const t = this.observables,
                                e = t.length; if (0 === e) this.destination.complete();
                            else { for (let n = 0; n < e && !this.hasFirst; n++) { let e = t[n],
                                        r = Object(w.a)(this, e, e, n);
                                    this.subscriptions && this.subscriptions.push(r), this.add(r) }
                                this.observables = null } }
                        notifyNext(t, e, n, r, s) { if (!this.hasFirst) { this.hasFirst = !0; for (let t = 0; t < this.subscriptions.length; t++)
                                    if (t !== n) { let e = this.subscriptions[t];
                                        e.unsubscribe(), this.remove(e) }
                                this.subscriptions = null }
                            this.destination.next(e) } }
                    n("JX91"); var E = n("7o/Q"),
                        x = n("eIep");

                    function k(t) { return e => e.lift(new O(t)) }
                    class O { constructor(t) { this.notifier = t }
                        call(t, e) { const n = new T(t),
                                r = Object(w.a)(n, this.notifier); return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n } }
                    class T extends v.a { constructor(t) { super(t), this.seenValue = !1 }
                        notifyNext(t, e, n, r, s) { this.seenValue = !0, this.complete() }
                        notifyComplete() {} }
                    var D = n("pLZG"),
                        I = n("IzEk"),
                        A = n("vkgz");

                    function R(...t) { return e => { let n; return "function" == typeof t[t.length - 1] && (n = t.pop()), e.lift(new j(t, n)) } }
                    class j { constructor(t, e) { this.observables = t, this.project = e }
                        call(t, e) { return e.subscribe(new N(t, this.observables, this.project)) } }
                    class N extends v.a { constructor(t, e, n) { super(t), this.observables = e, this.project = n, this.toRespond = []; const r = e.length;
                            this.values = new Array(r); for (let s = 0; s < r; s++) this.toRespond.push(s); for (let s = 0; s < r; s++) { let t = e[s];
                                this.add(Object(w.a)(this, t, t, s)) } }
                        notifyNext(t, e, n, r, s) { this.values[n] = e; const i = this.toRespond; if (i.length > 0) { const t = i.indexOf(n); - 1 !== t && i.splice(t, 1) } }
                        notifyComplete() {}
                        _next(t) { if (0 === this.toRespond.length) { const e = [t, ...this.values];
                                this.project ? this._tryProject(e) : this.destination.next(e) } }
                        _tryProject(t) { let e; try { e = this.project.apply(this, t) } catch (n) { return void this.destination.error(n) }
                            this.destination.next(e) } }
                    var P = n("EY2u"),
                        M = n("LRne"),
                        V = n("z6cu"); let F = (() => { class t { constructor(t, e, n) { this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t }
                            observe(t) { switch (this.kind) {
                                    case "N":
                                        return t.next && t.next(this.value);
                                    case "E":
                                        return t.error && t.error(this.error);
                                    case "C":
                                        return t.complete && t.complete() } }
                            do(t, e, n) { switch (this.kind) {
                                    case "N":
                                        return t && t(this.value);
                                    case "E":
                                        return e && e(this.error);
                                    case "C":
                                        return n && n() } }
                            accept(t, e, n) { return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n) }
                            toObservable() { switch (this.kind) {
                                    case "N":
                                        return Object(M.a)(this.value);
                                    case "E":
                                        return Object(V.a)(this.error);
                                    case "C":
                                        return Object(P.b)() } throw new Error("unexpected notification kind value") }
                            static
                            createNext(e) { return void 0 !== e ? new t("N", e) : t.undefinedValueNotification }
                            static createError(e) { return new t("E", void 0, e) }
                            static createComplete() { return t.completeNotification } } return t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t })();

                    function L(t, e = f) { var n; const r = (n = t) instanceof Date && !isNaN(+n) ? +t - e.now() : Math.abs(t); return t => t.lift(new U(r, e)) }
                    class U { constructor(t, e) { this.delay = t, this.scheduler = e }
                        call(t, e) { return e.subscribe(new H(t, this.delay, this.scheduler)) } }
                    class H extends E.a { constructor(t, e, n) { super(t), this.delay = e, this.scheduler = n, this.queue = [], this.active = !1, this.errored = !1 }
                        static dispatch(t) { const e = t.source,
                                n = e.queue,
                                r = t.scheduler,
                                s = t.destination; for (; n.length > 0 && n[0].time - r.now() <= 0;) n.shift().notification.observe(s); if (n.length > 0) { const e = Math.max(0, n[0].time - r.now());
                                this.schedule(t, e) } else this.unsubscribe(), e.active = !1 }
                        _schedule(t) { this.active = !0, this.destination.add(t.schedule(H.dispatch, this.delay, { source: this, destination: this.destination, scheduler: t })) }
                        scheduleNotification(t) { if (!0 === this.errored) return; const e = this.scheduler,
                                n = new $(e.now() + this.delay, t);
                            this.queue.push(n), !1 === this.active && this._schedule(e) }
                        _next(t) { this.scheduleNotification(F.createNext(t)) }
                        _error(t) { this.errored = !0, this.queue = [], this.destination.error(t), this.unsubscribe() }
                        _complete() { this.scheduleNotification(F.createComplete()), this.unsubscribe() } }
                    class $ { constructor(t, e) { this.time = t, this.notification = e } }
                    n("w1tV"), $localize `:@@ngb.alert.close␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`; const z = ["*"];
                    $localize `:@@ngb.carousel.previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`, $localize `:@@ngb.carousel.next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`; const B = ["defaultDayTemplate"],
                        q = ["content"];

                    function Q(t, e) { if (1 & t && r.Nb(0, "div", 7), 2 & t) { const t = e.currentMonth,
                                n = e.selected,
                                s = e.disabled,
                                i = e.focused;
                            r.lc("date", e.date)("currentMonth", t)("selected", n)("disabled", s)("focused", i) } }

                    function W(t, e) { if (1 & t && (r.Rb(0, "div", 12), r.Cc(1), r.Qb()), 2 & t) { const t = r.fc().$implicit,
                                e = r.fc(2);
                            r.zb(1), r.Fc(" ", e.i18n.getMonthFullName(t.number, t.year), " ", e.i18n.getYearNumerals(t.year), " ") } }

                    function G(t, e) { if (1 & t && (r.Rb(0, "div", 9), r.Ac(1, W, 2, 2, "div", 10), r.Nb(2, "ngb-datepicker-month", 11), r.Qb()), 2 & t) { const t = e.$implicit,
                                n = r.fc(2);
                            r.zb(1), r.lc("ngIf", "none" === n.navigation || n.displayMonths > 1 && "select" === n.navigation), r.zb(1), r.lc("month", t.firstDate) } }

                    function Z(t, e) { if (1 & t && r.Ac(0, G, 3, 2, "div", 8), 2 & t) { const t = r.fc();
                            r.lc("ngForOf", t.model.months) } }

                    function K(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "ngb-datepicker-navigation", 13), r.dc("navigate", (function(e) { return r.uc(t), r.fc().onNavigateEvent(e) }))("select", (function(e) { return r.uc(t), r.fc().onNavigateDateSelect(e) })), r.Qb() } if (2 & t) { const t = r.fc();
                            r.lc("date", t.model.firstDate)("months", t.model.months)("disabled", t.model.disabled)("showSelect", "select" === t.model.navigation)("prevDisabled", t.model.prevDisabled)("nextDisabled", t.model.nextDisabled)("selectBoxes", t.model.selectBoxes) } }

                    function J(t, e) {}

                    function X(t, e) {}

                    function Y(t, e) { 1 & t && r.Nb(0, "div", 5) }

                    function tt(t, e) { if (1 & t && (r.Rb(0, "div", 6), r.Cc(1), r.Qb()), 2 & t) { const t = e.$implicit,
                                n = r.fc(2);
                            r.zb(1), r.Ec(" ", n.i18n.getWeekdayShortName(t), " ") } }

                    function et(t, e) { if (1 & t && (r.Rb(0, "div", 2), r.Ac(1, Y, 1, 0, "div", 3), r.Ac(2, tt, 2, 1, "div", 4), r.Qb()), 2 & t) { const t = r.fc();
                            r.zb(1), r.lc("ngIf", t.datepicker.showWeekNumbers), r.zb(1), r.lc("ngForOf", t.viewModel.weekdays) } }

                    function nt(t, e) { if (1 & t && (r.Rb(0, "div", 11), r.Cc(1), r.Qb()), 2 & t) { const t = r.fc(2).$implicit,
                                e = r.fc();
                            r.zb(1), r.Dc(e.i18n.getWeekNumerals(t.number)) } }

                    function rt(t, e) {}

                    function st(t, e) { if (1 & t && r.Ac(0, rt, 0, 0, "ng-template", 14), 2 & t) { const t = r.fc().$implicit,
                                e = r.fc(3);
                            r.lc("ngTemplateOutlet", e.datepicker.dayTemplate)("ngTemplateOutletContext", t.context) } }

                    function it(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "div", 12), r.dc("click", (function(n) { r.uc(t); const s = e.$implicit; return r.fc(3).doSelect(s), n.preventDefault() })), r.Ac(1, st, 1, 2, "ng-template", 13), r.Qb() } if (2 & t) { const t = e.$implicit;
                            r.Eb("disabled", t.context.disabled)("hidden", t.hidden)("ngb-dp-today", t.context.today), r.lc("tabindex", t.tabindex), r.Ab("aria-label", t.ariaLabel), r.zb(1), r.lc("ngIf", !t.hidden) } }

                    function ot(t, e) { if (1 & t && (r.Rb(0, "div", 8), r.Ac(1, nt, 2, 1, "div", 9), r.Ac(2, it, 2, 9, "div", 10), r.Qb()), 2 & t) { const t = r.fc().$implicit,
                                e = r.fc();
                            r.zb(1), r.lc("ngIf", e.datepicker.showWeekNumbers), r.zb(1), r.lc("ngForOf", t.days) } }

                    function at(t, e) { 1 & t && r.Ac(0, ot, 3, 2, "div", 7), 2 & t && r.lc("ngIf", !e.$implicit.collapsed) } const lt = ["aria-label", $localize `:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`, "title", $localize `:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`],
                        ct = ["aria-label", $localize `:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`, "title", $localize `:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`];

                    function ut(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "ngb-datepicker-navigation-select", 6), r.dc("select", (function(e) { return r.uc(t), r.fc().select.emit(e) })), r.Qb() } if (2 & t) { const t = r.fc();
                            r.lc("date", t.date)("disabled", t.disabled)("months", t.selectBoxes.months)("years", t.selectBoxes.years) } }

                    function ht(t, e) { 1 & t && r.Nb(0, "div", 0) }

                    function dt(t, e) { 1 & t && r.Nb(0, "div", 0) }

                    function ft(t, e) { if (1 & t && (r.Ac(0, ht, 1, 0, "div", 8), r.Rb(1, "div", 9), r.Cc(2), r.Qb(), r.Ac(3, dt, 1, 0, "div", 8)), 2 & t) { const t = e.$implicit,
                                n = e.index,
                                s = r.fc(2);
                            r.lc("ngIf", n > 0), r.zb(2), r.Fc(" ", s.i18n.getMonthFullName(t.number, t.year), " ", s.i18n.getYearNumerals(t.year), " "), r.zb(1), r.lc("ngIf", n !== s.months.length - 1) } }

                    function pt(t, e) { if (1 & t && r.Ac(0, ft, 4, 4, "ng-template", 7), 2 & t) { const t = r.fc();
                            r.lc("ngForOf", t.months) } } const mt = ["ngbDatepickerDayView", ""],
                        gt = ["month"],
                        bt = ["year"],
                        yt = ["aria-label", $localize `:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`, "title", $localize `:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`],
                        _t = ["aria-label", $localize `:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`, "title", $localize `:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`];

                    function vt(t, e) { if (1 & t && (r.Rb(0, "option", 4), r.Cc(1), r.Qb()), 2 & t) { const t = e.$implicit,
                                n = r.fc();
                            r.lc("value", t), r.Ab("aria-label", n.i18n.getMonthFullName(t, null == n.date ? null : n.date.year)), r.zb(1), r.Dc(n.i18n.getMonthShortName(t, null == n.date ? null : n.date.year)) } }

                    function wt(t, e) { if (1 & t && (r.Rb(0, "option", 4), r.Cc(1), r.Qb()), 2 & t) { const t = e.$implicit,
                                n = r.fc();
                            r.lc("value", t), r.zb(1), r.Dc(n.i18n.getYearNumerals(t)) } } const St = ["dialog"]; var Ct, Et, xt, kt;

                    function Ot(t, e) { 1 & t && (r.Rb(0, "span", 8), r.Vb(1, Ct), r.Qb()) }

                    function Tt(t, e) { 1 & t && (r.Rb(0, "span", 8), r.Vb(1, Et), r.Qb()) }

                    function Dt(t, e) { 1 & t && (r.Rb(0, "span", 8), r.Vb(1, xt), r.Qb()) }

                    function It(t, e) { 1 & t && (r.Rb(0, "span", 8), r.Vb(1, kt), r.Qb()) }

                    function At(t, e) { 1 & t && r.Cc(0, "...") }

                    function Rt(t, e) { 1 & t && (r.Rb(0, "span", 10), r.Cc(1, "(current)"), r.Qb()) }

                    function jt(t, e) { if (1 & t && (r.Cc(0), r.Ac(1, Rt, 2, 0, "span", 9)), 2 & t) { const t = e.$implicit,
                                n = e.currentPage;
                            r.Ec(" ", t, " "), r.zb(1), r.lc("ngIf", t === n) } }
                    Ct = $localize `:@@ngb.pagination.first␟656506dfd46380956a655f919f1498d018f75ca0␟6867721956102594380:««`, Et = $localize `:@@ngb.pagination.previous␟6e52b6ee77a4848d899dd21b591c6fd499e3aef3␟6479320895410098858:«`, xt = $localize `:@@ngb.pagination.next␟ba9cbb4ff311464308a3627e4f1c3345d9fe6d7d␟5458177150283468089:»`, kt = $localize `:@@ngb.pagination.last␟49f27a460bc97e7e00be5b37098bfa79884fc7d9␟5277020320267646988:»»`; const Nt = ["aria-label", $localize `:@@ngb.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`];

                    function Pt(t, e) {} const Mt = function(t, e) { return { disabled: t, currentPage: e } };

                    function Vt(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "li", 11), r.Rb(1, "a", 12), r.Xb(2, Nt), r.dc("click", (function(e) { return r.uc(t), r.fc().selectPage(1), e.preventDefault() })), r.Ac(3, Pt, 0, 0, "ng-template", 13), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc(),
                                e = r.tc(1);
                            r.Eb("disabled", t.previousDisabled()), r.zb(1), r.Ab("tabindex", t.previousDisabled() ? "-1" : null)("aria-disabled", t.previousDisabled() ? "true" : null), r.zb(2), r.lc("ngTemplateOutlet", (null == t.tplFirst ? null : t.tplFirst.templateRef) || e)("ngTemplateOutletContext", r.qc(6, Mt, t.previousDisabled(), t.page)) } } const Ft = ["aria-label", $localize `:@@ngb.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`];

                    function Lt(t, e) {} const Ut = function(t) { return { disabled: t } };

                    function Ht(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "li", 11), r.Rb(1, "a", 12), r.Xb(2, Ft), r.dc("click", (function(e) { r.uc(t); const n = r.fc(); return n.selectPage(n.page - 1), e.preventDefault() })), r.Ac(3, Lt, 0, 0, "ng-template", 13), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc(),
                                e = r.tc(3);
                            r.Eb("disabled", t.previousDisabled()), r.zb(1), r.Ab("tabindex", t.previousDisabled() ? "-1" : null)("aria-disabled", t.previousDisabled() ? "true" : null), r.zb(2), r.lc("ngTemplateOutlet", (null == t.tplPrevious ? null : t.tplPrevious.templateRef) || e)("ngTemplateOutletContext", r.pc(6, Ut, t.previousDisabled())) } }

                    function $t(t, e) {} const zt = function(t) { return { disabled: !0, currentPage: t } };

                    function Bt(t, e) { if (1 & t && (r.Rb(0, "a", 16), r.Ac(1, $t, 0, 0, "ng-template", 13), r.Qb()), 2 & t) { const t = r.fc(2),
                                e = r.tc(9);
                            r.zb(1), r.lc("ngTemplateOutlet", (null == t.tplEllipsis ? null : t.tplEllipsis.templateRef) || e)("ngTemplateOutletContext", r.pc(2, zt, t.page)) } }

                    function qt(t, e) {} const Qt = function(t, e, n) { return { disabled: t, $implicit: e, currentPage: n } };

                    function Wt(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "a", 17), r.dc("click", (function(e) { r.uc(t); const n = r.fc().$implicit; return r.fc().selectPage(n), e.preventDefault() })), r.Ac(1, qt, 0, 0, "ng-template", 13), r.Qb() } if (2 & t) { const t = r.fc().$implicit,
                                e = r.fc(),
                                n = r.tc(11);
                            r.Ab("tabindex", e.disabled ? "-1" : null)("aria-disabled", e.disabled ? "true" : null), r.zb(1), r.lc("ngTemplateOutlet", (null == e.tplNumber ? null : e.tplNumber.templateRef) || n)("ngTemplateOutletContext", r.rc(4, Qt, e.disabled, t, e.page)) } }

                    function Gt(t, e) { if (1 & t && (r.Rb(0, "li", 11), r.Ac(1, Bt, 2, 4, "a", 14), r.Ac(2, Wt, 2, 8, "a", 15), r.Qb()), 2 & t) { const t = e.$implicit,
                                n = r.fc();
                            r.Eb("active", t === n.page)("disabled", n.isEllipsis(t) || n.disabled), r.Ab("aria-current", t === n.page ? "page" : null), r.zb(1), r.lc("ngIf", n.isEllipsis(t)), r.zb(1), r.lc("ngIf", !n.isEllipsis(t)) } } const Zt = ["aria-label", $localize `:@@ngb.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`];

                    function Kt(t, e) {}

                    function Jt(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "li", 11), r.Rb(1, "a", 12), r.Xb(2, Zt), r.dc("click", (function(e) { r.uc(t); const n = r.fc(); return n.selectPage(n.page + 1), e.preventDefault() })), r.Ac(3, Kt, 0, 0, "ng-template", 13), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc(),
                                e = r.tc(5);
                            r.Eb("disabled", t.nextDisabled()), r.zb(1), r.Ab("tabindex", t.nextDisabled() ? "-1" : null)("aria-disabled", t.nextDisabled() ? "true" : null), r.zb(2), r.lc("ngTemplateOutlet", (null == t.tplNext ? null : t.tplNext.templateRef) || e)("ngTemplateOutletContext", r.qc(6, Mt, t.nextDisabled(), t.page)) } } const Xt = ["aria-label", $localize `:@@ngb.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`];

                    function Yt(t, e) {}

                    function te(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "li", 11), r.Rb(1, "a", 12), r.Xb(2, Xt), r.dc("click", (function(e) { r.uc(t); const n = r.fc(); return n.selectPage(n.pageCount), e.preventDefault() })), r.Ac(3, Yt, 0, 0, "ng-template", 13), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc(),
                                e = r.tc(7);
                            r.Eb("disabled", t.nextDisabled()), r.zb(1), r.Ab("tabindex", t.nextDisabled() ? "-1" : null)("aria-disabled", t.nextDisabled() ? "true" : null), r.zb(2), r.lc("ngTemplateOutlet", (null == t.tplLast ? null : t.tplLast.templateRef) || e)("ngTemplateOutletContext", r.qc(6, Mt, t.nextDisabled(), t.page)) } } var ee;

                    function ne(t, e) { if (1 & t && (r.Rb(0, "span"), r.Vb(1, ee), r.Qb()), 2 & t) { const t = r.fc();
                            r.zb(1), r.Yb(t.getPercentValue()), r.Wb(1) } }

                    function re(t, e) {}

                    function se(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "li", 4), r.Rb(1, "a", 5), r.dc("click", (function(n) { r.uc(t); const s = e.$implicit; return r.fc().select(s.id), n.preventDefault() })), r.Cc(2), r.Ac(3, re, 0, 0, "ng-template", 6), r.Qb(), r.Qb() } if (2 & t) { const t = e.$implicit,
                                n = r.fc();
                            r.zb(1), r.Eb("active", t.id === n.activeId)("disabled", t.disabled), r.lc("id", t.id), r.Ab("tabindex", t.disabled ? "-1" : void 0)("aria-controls", n.destroyOnHide && t.id !== n.activeId ? null : t.id + "-panel")("aria-selected", t.id === n.activeId)("aria-disabled", t.disabled), r.zb(1), r.Ec(" ", t.title, ""), r.zb(1), r.lc("ngTemplateOutlet", (null == t.titleTpl ? null : t.titleTpl.templateRef) || null) } }

                    function ie(t, e) {}

                    function oe(t, e) { if (1 & t && (r.Rb(0, "div", 8), r.Ac(1, ie, 0, 0, "ng-template", 6), r.Qb()), 2 & t) { const t = r.fc().$implicit,
                                e = r.fc();
                            r.Cb("tab-pane ", t.id === e.activeId ? "active" : null, ""), r.nc("id", "", t.id, "-panel"), r.Ab("aria-labelledby", t.id), r.zb(1), r.lc("ngTemplateOutlet", (null == t.contentTpl ? null : t.contentTpl.templateRef) || null) } }

                    function ae(t, e) { if (1 & t && r.Ac(0, oe, 2, 6, "div", 7), 2 & t) { const t = e.$implicit,
                                n = r.fc();
                            r.lc("ngIf", !n.destroyOnHide || t.id === n.activeId) } }
                    ee = $localize `:@@ngb.progressbar.value␟04d611d19c117c60c9e14d0a04399a027184bc77␟5214781723415385277:${"\ufffd0\ufffd"}:INTERPOLATION:%`; const le = ["placeholder", $localize `:@@ngb.timepicker.HH␟ce676ab1d6d98f85c836381cf100a4a91ef95a1f␟4043638465245303811:HH`, "aria-label", $localize `:@@ngb.timepicker.hours␟3bbce5fef7e1151da052a4e529453edb340e3912␟8070396816726827304:Hours`],
                        ce = ["placeholder", $localize `:@@ngb.timepicker.MM␟72c8edf6a50068a05bde70991e36b1e881f4ca54␟1647282246509919852:MM`, "aria-label", $localize `:@@ngb.timepicker.minutes␟41e62daa962947c0d23ded0981975d1bddf0bf38␟5531237363767747080:Minutes`]; var ue, he, de, fe;

                    function pe(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "button", 10), r.dc("click", (function() { r.uc(t); const e = r.fc(); return e.changeHour(e.hourStep) })), r.Nb(1, "span", 11), r.Rb(2, "span", 12), r.Vb(3, ue), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc();
                            r.Eb("btn-sm", t.isSmallSize)("btn-lg", t.isLargeSize)("disabled", t.disabled), r.lc("disabled", t.disabled) } }

                    function me(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "button", 10), r.dc("click", (function() { r.uc(t); const e = r.fc(); return e.changeHour(0 - e.hourStep) })), r.Nb(1, "span", 13), r.Rb(2, "span", 12), r.Vb(3, he), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc();
                            r.Eb("btn-sm", t.isSmallSize)("btn-lg", t.isLargeSize)("disabled", t.disabled), r.lc("disabled", t.disabled) } }

                    function ge(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "button", 10), r.dc("click", (function() { r.uc(t); const e = r.fc(); return e.changeMinute(e.minuteStep) })), r.Nb(1, "span", 11), r.Rb(2, "span", 12), r.Vb(3, de), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc();
                            r.Eb("btn-sm", t.isSmallSize)("btn-lg", t.isLargeSize)("disabled", t.disabled), r.lc("disabled", t.disabled) } }

                    function be(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "button", 10), r.dc("click", (function() { r.uc(t); const e = r.fc(); return e.changeMinute(0 - e.minuteStep) })), r.Nb(1, "span", 13), r.Rb(2, "span", 12), r.Vb(3, fe), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc();
                            r.Eb("btn-sm", t.isSmallSize)("btn-lg", t.isLargeSize)("disabled", t.disabled), r.lc("disabled", t.disabled) } }

                    function ye(t, e) { 1 & t && (r.Rb(0, "div", 5), r.Cc(1, ":"), r.Qb()) }
                    ue = $localize `:@@ngb.timepicker.increment-hours␟cb74bc1d625a6c1742f0d7d47306cf495780c218␟5939278348542933629:Increment hours`, he = $localize `:@@ngb.timepicker.decrement-hours␟147c7a19429da7d999e247d22e33fee370b1691b␟3651829882940481818:Decrement hours`, de = $localize `:@@ngb.timepicker.increment-minutes␟f5a4a3bc05e053f6732475d0e74875ec01c3a348␟180147720391025024:Increment minutes`, fe = $localize `:@@ngb.timepicker.decrement-minutes␟c1a6899e529c096da5b660385d4e77fe1f7ad271␟7447789825403243588:Decrement minutes`; const _e = ["placeholder", $localize `:@@ngb.timepicker.SS␟ebe38d36a40a2383c5fefa9b4608ffbda08bd4a3␟3628127143071124194:SS`, "aria-label", $localize `:@@ngb.timepicker.seconds␟4f2ed9e71a7c981db3e50ae2fedb28aff2ec4e6c␟8874012390997067175:Seconds`]; var ve, we, Se, Ce;

                    function Ee(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "button", 10), r.dc("click", (function() { r.uc(t); const e = r.fc(2); return e.changeSecond(e.secondStep) })), r.Nb(1, "span", 11), r.Rb(2, "span", 12), r.Vb(3, ve), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc(2);
                            r.Eb("btn-sm", t.isSmallSize)("btn-lg", t.isLargeSize)("disabled", t.disabled), r.lc("disabled", t.disabled) } }

                    function xe(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "button", 10), r.dc("click", (function() { r.uc(t); const e = r.fc(2); return e.changeSecond(0 - e.secondStep) })), r.Nb(1, "span", 13), r.Rb(2, "span", 12), r.Vb(3, we), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc(2);
                            r.Eb("btn-sm", t.isSmallSize)("btn-lg", t.isLargeSize)("disabled", t.disabled), r.lc("disabled", t.disabled) } }

                    function ke(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "div", 14), r.Ac(1, Ee, 4, 7, "button", 3), r.Rb(2, "input", 4), r.Xb(3, _e), r.dc("change", (function(e) { return r.uc(t), r.fc().updateSecond(e.target.value) }))("input", (function(e) { return r.uc(t), r.fc().formatInput(e.target) }))("keydown.ArrowUp", (function(e) { r.uc(t); const n = r.fc(); return n.changeSecond(n.secondStep), e.preventDefault() }))("keydown.ArrowDown", (function(e) { r.uc(t); const n = r.fc(); return n.changeSecond(0 - n.secondStep), e.preventDefault() })), r.Qb(), r.Ac(4, xe, 4, 7, "button", 3), r.Qb() } if (2 & t) { const t = r.fc();
                            r.zb(1), r.lc("ngIf", t.spinners), r.zb(1), r.Eb("form-control-sm", t.isSmallSize)("form-control-lg", t.isLargeSize), r.lc("value", t.formatMinSec(null == t.model ? null : t.model.second))("readOnly", t.readonlyInputs)("disabled", t.disabled), r.zb(2), r.lc("ngIf", t.spinners) } }

                    function Oe(t, e) { 1 & t && r.Nb(0, "div", 5) }

                    function Te(t, e) { if (1 & t && (r.Pb(0), r.Vb(1, Se), r.Ob()), 2 & t) { const t = r.fc(2);
                            r.zb(1), r.Yb(t.i18n.getAfternoonPeriod()), r.Wb(1) } }

                    function De(t, e) { if (1 & t && r.Vb(0, Ce), 2 & t) { const t = r.fc(2);
                            r.Yb(t.i18n.getMorningPeriod()), r.Wb(0) } }

                    function Ie(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "div", 15), r.Rb(1, "button", 16), r.dc("click", (function() { return r.uc(t), r.fc().toggleMeridian() })), r.Ac(2, Te, 2, 1, "ng-container", 17), r.Ac(3, De, 1, 1, "ng-template", null, 18, r.Bc), r.Qb(), r.Qb() } if (2 & t) { const t = r.tc(4),
                                e = r.fc();
                            r.zb(1), r.Eb("btn-sm", e.isSmallSize)("btn-lg", e.isLargeSize)("disabled", e.disabled), r.lc("disabled", e.disabled), r.zb(1), r.lc("ngIf", e.model && e.model.hour >= 12)("ngIfElse", t) } }

                    function Ae(t, e) { if (1 & t && (r.Rb(0, "strong", 3), r.Cc(1), r.Qb()), 2 & t) { const t = r.fc();
                            r.zb(1), r.Dc(t.header) } }
                    ve = $localize `:@@ngb.timepicker.increment-seconds␟912322ecee7d659d04dcf494a70e22e49d334b26␟5364772110539092174:Increment seconds`, we = $localize `:@@ngb.timepicker.decrement-seconds␟5db47ac104294243a70eb9124fbea9d0004ddf69␟753633511487974857:Decrement seconds`, Se = $localize `:@@ngb.timepicker.PM␟8d6e691e10306c1b34c6b26805151aaea320ef7f␟3564199131264287502:${"\ufffd0\ufffd"}:INTERPOLATION:`, Ce = $localize `:@@ngb.timepicker.AM␟69a1f176a93998876952adac57c3bc3863b6105e␟4592818992509942761:${"\ufffd0\ufffd"}:INTERPOLATION:`; const Re = ["aria-label", $localize `:@@ngb.toast.close-aria␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`];

                    function je(t, e) {}

                    function Ne(t, e) { if (1 & t) { const t = r.Sb();
                            r.Rb(0, "div", 4), r.Ac(1, je, 0, 0, "ng-template", 5), r.Rb(2, "button", 6), r.Xb(3, Re), r.dc("click", (function() { return r.uc(t), r.fc().hide() })), r.Rb(4, "span", 7), r.Cc(5, "\xd7"), r.Qb(), r.Qb(), r.Qb() } if (2 & t) { const t = r.fc(),
                                e = r.tc(1);
                            r.zb(1), r.lc("ngTemplateOutlet", t.contentHeaderTpl || e) } }

                    function Pe(t) { return parseInt(`${t}`, 10) }

                    function Me(t, e, n = 0) { return Math.max(Math.min(t, e), n) }

                    function Ve(t) { return "string" == typeof t }

                    function Fe(t) { return !isNaN(Pe(t)) }

                    function Le(t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t }

                    function Ue(t) { return null != t }

                    function He(t) { return Fe(t) ? `0${t}`.slice(-2) : "" }

                    function $e(t, e) { return t && t.className && t.className.split && t.className.split(/\s+/).indexOf(e) >= 0 } "undefined" == typeof Element || Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function(t) { let e = this; if (!document.documentElement.contains(e)) return null;
                        do { if (e.matches(t)) return e;
                            e = e.parentElement || e.parentNode } while (null !== e && 1 === e.nodeType); return null }); let ze = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(),
                        Be = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(),
                        qe = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) } }), t })(),
                        Qe = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(),
                        We = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) } }), t })();
                    class Ge { constructor(t, e, n) { this.year = Le(t) ? t : null, this.month = Le(e) ? e : null, this.day = Le(n) ? n : null }
                        static from(t) { return t instanceof Ge ? t : t ? new Ge(t.year, t.month, t.day) : null }
                        equals(t) { return null != t && this.year === t.year && this.month === t.month && this.day === t.day }
                        before(t) { return !!t && (this.year === t.year ? this.month === t.month ? this.day !== t.day && this.day < t.day : this.month < t.month : this.year < t.year) }
                        after(t) { return !!t && (this.year === t.year ? this.month === t.month ? this.day !== t.day && this.day > t.day : this.month > t.month : this.year > t.year) } }

                    function Ze(t) { return new Ge(t.getFullYear(), t.getMonth() + 1, t.getDate()) }

                    function Ke(t) { const e = new Date(t.year, t.month - 1, t.day, 12); return isNaN(e.getTime()) || e.setFullYear(t.year), e }

                    function Je() { return new Ye } let Xe = (() => { let t = class {}; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: Je, token: t, providedIn: "root" }), t })(),
                        Ye = (() => { let t = class extends Xe { getDaysPerWeek() { return 7 }
                                getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
                                getWeeksPerMonth() { return 6 }
                                getNext(t, e = "d", n = 1) { let r = Ke(t),
                                        s = !0,
                                        i = r.getMonth(); switch (e) {
                                        case "y":
                                            r.setFullYear(r.getFullYear() + n); break;
                                        case "m":
                                            i += n, r.setMonth(i), i %= 12, i < 0 && (i += 12); break;
                                        case "d":
                                            r.setDate(r.getDate() + n), s = !1; break;
                                        default:
                                            return t } return s && r.getMonth() !== i && r.setDate(0), Ze(r) }
                                getPrev(t, e = "d", n = 1) { return this.getNext(t, e, -n) }
                                getWeekday(t) { let e = Ke(t).getDay(); return 0 === e ? 7 : e }
                                getWeekNumber(t, e) { 7 === e && (e = 0); const n = Ke(t[(11 - e) % 7]);
                                    n.setDate(n.getDate() + 4 - (n.getDay() || 7)); const r = n.getTime(); return n.setMonth(0), n.setDate(1), Math.floor(Math.round((r - n.getTime()) / 864e5) / 7) + 1 }
                                getToday() { return Ze(new Date) }
                                isValid(t) { if (!(t && Le(t.year) && Le(t.month) && Le(t.day))) return !1; if (0 === t.year) return !1; const e = Ke(t); return !isNaN(e.getTime()) && e.getFullYear() === t.year && e.getMonth() + 1 === t.month && e.getDate() === t.day } }; return t.\u0275fac = function(e) { return Lr(e || t) }, t.\u0275prov = r.Ib({ token: t, factory: t.\u0275fac }), t })();

                    function tn(t, e) { return ! function(t, e) { return !t && !e || !!t && !!e && t.equals(e) }(t, e) }

                    function en(t, e) { return !(!t && !e || t && e && t.year === e.year && t.month === e.month) }

                    function nn(t, e, n) { return t && e && t.before(e) ? e : t && n && t.after(n) ? n : t || null }

                    function rn(t, e) { const { minDate: n, maxDate: r, disabled: s, markDisabled: i } = e; return !(null == t || s || i && i(t, { year: t.year, month: t.month }) || n && t.before(n) || r && t.after(r)) } let sn = (() => { let t = class { getDayNumerals(t) { return `${t.day}` }
                                getWeekNumerals(t) { return `${t}` }
                                getYearNumerals(t) { return `${t}` } }; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return t = Object(r.Zb)(r.u), new on(t); var t }, token: t, providedIn: "root" }), t })(),
                        on = (() => { let t = class extends sn { constructor(t) { super(), this._locale = t; const e = Object(s.s)(t, s.e.Standalone, s.o.Short);
                                    this._weekdaysShort = e.map((t, n) => e[(n + 1) % 7]), this._monthsShort = Object(s.u)(t, s.e.Standalone, s.o.Abbreviated), this._monthsFull = Object(s.u)(t, s.e.Standalone, s.o.Wide) }
                                getWeekdayShortName(t) { return this._weekdaysShort[t - 1] || "" }
                                getMonthShortName(t) { return this._monthsShort[t - 1] || "" }
                                getMonthFullName(t) { return this._monthsFull[t - 1] || "" }
                                getDayAriaLabel(t) { const e = new Date(t.year, t.month - 1, t.day); return Object(s.r)(e, "fullDate", this._locale) } }; return t.\u0275fac = function(e) { return new(e || t)(r.Zb(r.u)) }, t.\u0275prov = r.Ib({ token: t, factory: t.\u0275fac }), t })(),
                        an = (() => { let t = class { constructor(t, e) { this._calendar = t, this._i18n = e, this._VALIDATORS = { dayTemplateData: t => { if (this._state.dayTemplateData !== t) return { dayTemplateData: t } }, displayMonths: t => { if (Le(t = Pe(t)) && t > 0 && this._state.displayMonths !== t) return { displayMonths: t } }, disabled: t => { if (this._state.disabled !== t) return { disabled: t } }, firstDayOfWeek: t => { if (Le(t = Pe(t)) && t >= 0 && this._state.firstDayOfWeek !== t) return { firstDayOfWeek: t } }, focusVisible: t => { if (this._state.focusVisible !== t && !this._state.disabled) return { focusVisible: t } }, markDisabled: t => { if (this._state.markDisabled !== t) return { markDisabled: t } }, maxDate: t => { const e = this.toValidDate(t, null); if (tn(this._state.maxDate, e)) return { maxDate: e } }, minDate: t => { const e = this.toValidDate(t, null); if (tn(this._state.minDate, e)) return { minDate: e } }, navigation: t => { if (this._state.navigation !== t) return { navigation: t } }, outsideDays: t => { if (this._state.outsideDays !== t) return { outsideDays: t } } }, this._model$ = new o.a, this._dateSelect$ = new o.a, this._state = { dayTemplateData: null, markDisabled: null, maxDate: null, minDate: null, disabled: !1, displayMonths: 1, firstDate: null, firstDayOfWeek: 1, lastDate: null, focusDate: null, focusVisible: !1, months: [], navigation: "select", outsideDays: "visible", prevDisabled: !1, nextDisabled: !1, selectedDate: null, selectBoxes: { years: [], months: [] } } }
                                get model$() { return this._model$.pipe(Object(D.a)(t => t.months.length > 0)) }
                                get dateSelect$() { return this._dateSelect$.pipe(Object(D.a)(t => null !== t)) }
                                set(t) { let e = Object.keys(t).map(e => this._VALIDATORS[e](t[e])).reduce((t, e) => Object.assign(Object.assign({}, t), e), {});
                                    Object.keys(e).length > 0 && this._nextState(e) }
                                focus(t) { const e = this.toValidDate(t, null);
                                    null != e && !this._state.disabled && tn(this._state.focusDate, e) && this._nextState({ focusDate: t }) }
                                focusSelect() { rn(this._state.focusDate, this._state) && this.select(this._state.focusDate, { emitEvent: !0 }) }
                                open(t) { const e = this.toValidDate(t, this._calendar.getToday());
                                    null == e || this._state.disabled || this._state.firstDate && !en(this._state.firstDate, e) || this._nextState({ firstDate: e }) }
                                select(t, e = {}) { const n = this.toValidDate(t, null);
                                    null == n || this._state.disabled || (tn(this._state.selectedDate, n) && this._nextState({ selectedDate: n }), e.emitEvent && rn(n, this._state) && this._dateSelect$.next(n)) }
                                toValidDate(t, e) { const n = Ge.from(t); return void 0 === e && (e = this._calendar.getToday()), this._calendar.isValid(n) ? n : e }
                                getMonth(t) { for (let e of this._state.months)
                                        if (t.month === e.number && t.year === e.year) return e;
                                    throw new Error(`month ${t.month} of year ${t.year} not found`) }
                                _nextState(t) { const e = this._updateState(t);
                                    this._patchContexts(e), this._state = e, this._model$.next(this._state) }
                                _patchContexts(t) { const { months: e, displayMonths: n, selectedDate: r, focusDate: s, focusVisible: i, disabled: o, outsideDays: a } = t;
                                    t.months.forEach(t => { t.weeks.forEach(l => { l.days.forEach(l => { s && (l.context.focused = s.equals(l.date) && i), l.tabindex = !o && s && l.date.equals(s) && s.month === t.number ? 0 : -1, !0 === o && (l.context.disabled = !0), void 0 !== r && (l.context.selected = null !== r && r.equals(l.date)), t.number !== l.date.month && (l.hidden = "hidden" === a || "collapsed" === a || n > 1 && l.date.after(e[0].firstDate) && l.date.before(e[n - 1].lastDate)) }) }) }) }
                                _updateState(t) { const e = Object.assign({}, this._state, t); let n = e.firstDate; if (("minDate" in t || "maxDate" in t) && (function(t, e) { if (e && t && e.before(t)) throw new Error(`'maxDate' ${e} should be greater than 'minDate' ${t}`) }(e.minDate, e.maxDate), e.focusDate = nn(e.focusDate, e.minDate, e.maxDate), e.firstDate = nn(e.firstDate, e.minDate, e.maxDate), n = e.focusDate), "disabled" in t && (e.focusVisible = !1), "selectedDate" in t && 0 === this._state.months.length && (n = e.selectedDate), "focusVisible" in t) return e; if ("focusDate" in t && (e.focusDate = nn(e.focusDate, e.minDate, e.maxDate), n = e.focusDate, 0 !== e.months.length && e.focusDate && !e.focusDate.before(e.firstDate) && !e.focusDate.after(e.lastDate))) return e; if ("firstDate" in t && (e.firstDate = nn(e.firstDate, e.minDate, e.maxDate), n = e.firstDate), n) { const r = function(t, e, n, r, s) { const { displayMonths: i, months: o } = n, a = o.splice(0, o.length); return Array.from({ length: i }, (n, r) => { const i = Object.assign(t.getNext(e, "m", r), { day: 1 }); if (o[r] = null, !s) { const t = a.findIndex(t => t.firstDate.equals(i)); - 1 !== t && (o[r] = a.splice(t, 1)[0]) } return i }).forEach((e, s) => { null === o[s] && (o[s] = function(t, e, n, r, s = {}) { const { dayTemplateData: i, minDate: o, maxDate: a, firstDayOfWeek: l, markDisabled: c, outsideDays: u } = n, h = t.getToday();
                                                    s.firstDate = null, s.lastDate = null, s.number = e.month, s.year = e.year, s.weeks = s.weeks || [], s.weekdays = s.weekdays || [], e = function(t, e, n) { const r = t.getDaysPerWeek(),
                                                            s = new Ge(e.year, e.month, 1),
                                                            i = t.getWeekday(s) % r; return t.getPrev(s, "d", (r + i - n) % r) }(t, e, l); for (let d = 0; d < t.getWeeksPerMonth(); d++) { let n = s.weeks[d];
                                                        n || (n = s.weeks[d] = { number: 0, days: [], collapsed: !0 }); const f = n.days; for (let l = 0; l < t.getDaysPerWeek(); l++) { 0 === d && (s.weekdays[l] = t.getWeekday(e)); const n = new Ge(e.year, e.month, e.day),
                                                                u = t.getNext(n),
                                                                p = r.getDayAriaLabel(n); let m = !!(o && n.before(o) || a && n.after(a));!m && c && (m = c(n, { month: s.number, year: s.year })); let g = n.equals(h),
                                                                b = i ? i(n, { month: s.number, year: s.year }) : void 0;
                                                            null === s.firstDate && n.month === s.number && (s.firstDate = n), n.month === s.number && u.month !== s.number && (s.lastDate = n); let y = f[l];
                                                            y || (y = f[l] = {}), y.date = n, y.context = Object.assign(y.context || {}, { $implicit: n, date: n, data: b, currentMonth: s.number, currentYear: s.year, disabled: m, focused: !1, selected: !1, today: g }), y.tabindex = -1, y.ariaLabel = p, y.hidden = !1, e = u }
                                                        n.number = t.getWeekNumber(f.map(t => t.date), l), n.collapsed = "collapsed" === u && f[0].date.month !== s.number && f[f.length - 1].date.month !== s.number } return s }(t, e, n, r, a.shift() || {})) }), o }(this._calendar, n, e, this._i18n, "dayTemplateData" in t || "firstDayOfWeek" in t || "markDisabled" in t || "minDate" in t || "maxDate" in t || "disabled" in t || "outsideDays" in t);
                                        e.months = r, e.firstDate = r[0].firstDate, e.lastDate = r[r.length - 1].lastDate, "selectedDate" in t && !rn(e.selectedDate, e) && (e.selectedDate = null), "firstDate" in t && (!e.focusDate || e.focusDate.before(e.firstDate) || e.focusDate.after(e.lastDate)) && (e.focusDate = n); const s = !this._state.firstDate || this._state.firstDate.year !== e.firstDate.year,
                                            i = !this._state.firstDate || this._state.firstDate.month !== e.firstDate.month; "select" === e.navigation ? (("minDate" in t || "maxDate" in t || 0 === e.selectBoxes.years.length || s) && (e.selectBoxes.years = function(t, e, n) { if (!t) return []; const r = e ? Math.max(e.year, t.year - 500) : t.year - 10,
                                                s = (n ? Math.min(n.year, t.year + 500) : t.year + 10) - r + 1,
                                                i = Array(s); for (let o = 0; o < s; o++) i[o] = r + o; return i }(e.firstDate, e.minDate, e.maxDate)), ("minDate" in t || "maxDate" in t || 0 === e.selectBoxes.months.length || s) && (e.selectBoxes.months = function(t, e, n, r) { if (!e) return []; let s = t.getMonths(e.year); if (n && e.year === n.year) { const t = s.findIndex(t => t === n.month);
                                                s = s.slice(t) } if (r && e.year === r.year) { const t = s.findIndex(t => t === r.month);
                                                s = s.slice(0, t + 1) } return s }(this._calendar, e.firstDate, e.minDate, e.maxDate))) : e.selectBoxes = { years: [], months: [] }, "arrows" !== e.navigation && "select" !== e.navigation || !(i || s || "minDate" in t || "maxDate" in t || "disabled" in t) || (e.prevDisabled = e.disabled || function(t, e, n) { const r = Object.assign(t.getPrev(e, "m"), { day: 1 }); return null != n && (r.year === n.year && r.month < n.month || r.year < n.year && 1 === n.month) }(this._calendar, e.firstDate, e.minDate), e.nextDisabled = e.disabled || function(t, e, n) { const r = Object.assign(t.getNext(e, "m"), { day: 1 }); return null != n && r.after(n) }(this._calendar, e.lastDate, e.maxDate)) } return e } }; return t.\u0275fac = function(e) { return new(e || t)(r.Zb(Xe), r.Zb(sn)) }, t.\u0275prov = r.Ib({ token: t, factory: t.\u0275fac }), t })(); var ln = function(t) { return t[t.PREV = 0] = "PREV", t[t.NEXT = 1] = "NEXT", t }({}); let cn = (() => { let t = class { constructor() { this.displayMonths = 1, this.firstDayOfWeek = 1, this.navigation = "select", this.outsideDays = "visible", this.showWeekdays = !0, this.showWeekNumbers = !1 } }; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t }, token: t, providedIn: "root" }), t })();

                    function un() { return new dn } let hn = (() => { let t = class {}; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: un, token: t, providedIn: "root" }), t })(),
                        dn = (() => { let t = class extends hn { fromModel(t) { return t && Le(t.year) && Le(t.month) && Le(t.day) ? { year: t.year, month: t.month, day: t.day } : null }
                                toModel(t) { return t && Le(t.year) && Le(t.month) && Le(t.day) ? { year: t.year, month: t.month, day: t.day } : null } }; return t.\u0275fac = function(e) { return Ur(e || t) }, t.\u0275prov = r.Ib({ token: t, factory: t.\u0275fac }), t })(); const fn = { provide: i.j, useExisting: Object(r.S)(() => mn), multi: !0 }; let pn = (() => { let t = class { constructor(t) { this.templateRef = t } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.K)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["ng-template", "ngbDatepickerContent", ""]
                                ] }), t })(),
                        mn = (() => { let t = class { constructor(t, e, n, s, i, a, l, c) { this._service = t, this._calendar = e, this.i18n = n, this._elementRef = a, this._ngbDateAdapter = l, this._ngZone = c, this._controlValue = null, this._destroyed$ = new o.a, this._publicState = {}, this.navigate = new r.n, this.dateSelect = new r.n, this.select = this.dateSelect, this.onChange = t => {}, this.onTouched = () => {}, ["dayTemplate", "dayTemplateData", "displayMonths", "firstDayOfWeek", "footerTemplate", "markDisabled", "minDate", "maxDate", "navigation", "outsideDays", "showWeekdays", "showWeekNumbers", "startDate"].forEach(t => this[t] = s[t]), t.dateSelect$.pipe(k(this._destroyed$)).subscribe(t => { this.dateSelect.emit(t) }), t.model$.pipe(k(this._destroyed$)).subscribe(t => { const e = t.firstDate,
                                            n = this.model ? this.model.firstDate : null;
                                        this._publicState = { maxDate: t.maxDate, minDate: t.minDate, firstDate: t.firstDate, lastDate: t.lastDate, focusedDate: t.focusDate, months: t.months.map(t => t.firstDate) }; let r = !1; if (!e.equals(n) && (this.navigate.emit({ current: n ? { year: n.year, month: n.month } : null, next: { year: e.year, month: e.month }, preventDefault: () => r = !0 }), r && null !== n)) return void this._service.open(n); const s = t.selectedDate,
                                            o = t.focusDate,
                                            a = this.model ? this.model.focusDate : null;
                                        this.model = t, tn(s, this._controlValue) && (this._controlValue = s, this.onTouched(), this.onChange(this._ngbDateAdapter.toModel(s))), tn(o, a) && a && t.focusVisible && this.focus(), i.markForCheck() }) }
                                get state() { return this._publicState }
                                get calendar() { return this._calendar }
                                focusDate(t) { this._service.focus(Ge.from(t)) }
                                focusSelect() { this._service.focusSelect() }
                                focus() { this._ngZone.onStable.asObservable().pipe(Object(I.a)(1)).subscribe(() => { const t = this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
                                        t && t.focus() }) }
                                navigateTo(t) { this._service.open(Ge.from(t ? t.day ? t : Object.assign(Object.assign({}, t), { day: 1 }) : null)) }
                                ngAfterViewInit() { this._ngZone.runOutsideAngular(() => { const t = b(this._contentEl.nativeElement, "focusin"),
                                            e = b(this._contentEl.nativeElement, "focusout"),
                                            { nativeElement: n } = this._elementRef;
                                        Object(y.a)(t, e).pipe(Object(D.a)(({ target: t, relatedTarget: e }) => !($e(t, "ngb-dp-day") && $e(e, "ngb-dp-day") && n.contains(t) && n.contains(e))), k(this._destroyed$)).subscribe(({ type: t }) => this._ngZone.run(() => this._service.set({ focusVisible: "focusin" === t }))) }) }
                                ngOnDestroy() { this._destroyed$.next() }
                                ngOnInit() { if (void 0 === this.model) { const t = {};
                                        ["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays"].forEach(e => t[e] = this[e]), this._service.set(t), this.navigateTo(this.startDate) }
                                    this.dayTemplate || (this.dayTemplate = this._defaultDayTemplate) }
                                ngOnChanges(t) { const e = {}; if (["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays"].filter(e => e in t).forEach(t => e[t] = this[t]), this._service.set(e), "startDate" in t) { const { currentValue: e, previousValue: n } = t.startDate;
                                        en(n, e) && this.navigateTo(this.startDate) } }
                                onDateSelect(t) { this._service.focus(t), this._service.select(t, { emitEvent: !0 }) }
                                onNavigateDateSelect(t) { this._service.open(t) }
                                onNavigateEvent(t) { switch (t) {
                                        case ln.PREV:
                                            this._service.open(this._calendar.getPrev(this.model.firstDate, "m", 1)); break;
                                        case ln.NEXT:
                                            this._service.open(this._calendar.getNext(this.model.firstDate, "m", 1)) } }
                                registerOnChange(t) { this.onChange = t }
                                registerOnTouched(t) { this.onTouched = t }
                                setDisabledState(t) { this._service.set({ disabled: t }) }
                                writeValue(t) { this._controlValue = Ge.from(this._ngbDateAdapter.fromModel(t)), this._service.select(this._controlValue) } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(an), r.Mb(Xe), r.Mb(sn), r.Mb(cn), r.Mb(r.h), r.Mb(r.l), r.Mb(hn), r.Mb(r.z)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-datepicker"]
                                ], contentQueries: function(t, e, n) { var s;
                                    1 & t && r.xc(n, pn, !0), 2 & t && r.sc(s = r.ec()) && (e.contentTemplate = s.first) }, viewQuery: function(t, e) { var n;
                                    1 & t && (r.yc(B, !0), r.yc(q, !0)), 2 & t && (r.sc(n = r.ec()) && (e._defaultDayTemplate = n.first), r.sc(n = r.ec()) && (e._contentEl = n.first)) }, inputs: { dayTemplate: "dayTemplate", dayTemplateData: "dayTemplateData", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", footerTemplate: "footerTemplate", markDisabled: "markDisabled", maxDate: "maxDate", minDate: "minDate", navigation: "navigation", outsideDays: "outsideDays", showWeekdays: "showWeekdays", showWeekNumbers: "showWeekNumbers", startDate: "startDate" }, outputs: { navigate: "navigate", dateSelect: "dateSelect", select: "select" }, exportAs: ["ngbDatepicker"], features: [r.yb([fn, an]), r.xb], decls: 10, vars: 5, consts: [
                                    ["defaultDayTemplate", ""],
                                    ["defaultContentTemplate", ""],
                                    [1, "ngb-dp-header"],
                                    [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes", "navigate", "select", 4, "ngIf"],
                                    [1, "ngb-dp-content"],
                                    ["content", ""],
                                    [3, "ngTemplateOutlet"],
                                    ["ngbDatepickerDayView", "", 3, "date", "currentMonth", "selected", "disabled", "focused"],
                                    ["class", "ngb-dp-month", 4, "ngFor", "ngForOf"],
                                    [1, "ngb-dp-month"],
                                    ["class", "ngb-dp-month-name", 4, "ngIf"],
                                    [3, "month"],
                                    [1, "ngb-dp-month-name"],
                                    [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes", "navigate", "select"]
                                ], template: function(t, e) { if (1 & t && (r.Ac(0, Q, 1, 5, "ng-template", null, 0, r.Bc), r.Ac(2, Z, 1, 1, "ng-template", null, 1, r.Bc), r.Rb(4, "div", 2), r.Ac(5, K, 1, 7, "ngb-datepicker-navigation", 3), r.Qb(), r.Rb(6, "div", 4, 5), r.Ac(8, J, 0, 0, "ng-template", 6), r.Qb(), r.Ac(9, X, 0, 0, "ng-template", 6)), 2 & t) { const t = r.tc(3);
                                        r.zb(5), r.lc("ngIf", "none" !== e.navigation), r.zb(1), r.Eb("ngb-dp-months", !e.contentTemplate), r.zb(2), r.lc("ngTemplateOutlet", (null == e.contentTemplate ? null : e.contentTemplate.templateRef) || t), r.zb(1), r.lc("ngTemplateOutlet", e.footerTemplate) } }, directives: function() { return [s.k, s.l, Mn, s.j, yn, _n] }, styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"], encapsulation: 2, changeDetection: 0 }), t })(); var gn = function(t) { return t[t.Tab = 9] = "Tab", t[t.Enter = 13] = "Enter", t[t.Escape = 27] = "Escape", t[t.Space = 32] = "Space", t[t.PageUp = 33] = "PageUp", t[t.PageDown = 34] = "PageDown", t[t.End = 35] = "End", t[t.Home = 36] = "Home", t[t.ArrowLeft = 37] = "ArrowLeft", t[t.ArrowUp = 38] = "ArrowUp", t[t.ArrowRight = 39] = "ArrowRight", t[t.ArrowDown = 40] = "ArrowDown", t }({}); let bn = (() => { let t = class { processKey(t, e) { const { state: n, calendar: r } = e; switch (t.which) {
                                        case gn.PageUp:
                                            e.focusDate(r.getPrev(n.focusedDate, t.shiftKey ? "y" : "m", 1)); break;
                                        case gn.PageDown:
                                            e.focusDate(r.getNext(n.focusedDate, t.shiftKey ? "y" : "m", 1)); break;
                                        case gn.End:
                                            e.focusDate(t.shiftKey ? n.maxDate : n.lastDate); break;
                                        case gn.Home:
                                            e.focusDate(t.shiftKey ? n.minDate : n.firstDate); break;
                                        case gn.ArrowLeft:
                                            e.focusDate(r.getPrev(n.focusedDate, "d", 1)); break;
                                        case gn.ArrowUp:
                                            e.focusDate(r.getPrev(n.focusedDate, "d", r.getDaysPerWeek())); break;
                                        case gn.ArrowRight:
                                            e.focusDate(r.getNext(n.focusedDate, "d", 1)); break;
                                        case gn.ArrowDown:
                                            e.focusDate(r.getNext(n.focusedDate, "d", r.getDaysPerWeek())); break;
                                        case gn.Enter:
                                        case gn.Space:
                                            e.focusSelect(); break;
                                        default:
                                            return }
                                    t.preventDefault(), t.stopPropagation() } }; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t }, token: t, providedIn: "root" }), t })(),
                        yn = (() => { let t = class { constructor(t, e, n, r) { this.i18n = t, this.datepicker = e, this._keyboardService = n, this._service = r }
                                set month(t) { this.viewModel = this._service.getMonth(t) }
                                onKeyDown(t) { this._keyboardService.processKey(t, this.datepicker) }
                                doSelect(t) { t.context.disabled || t.hidden || this.datepicker.onDateSelect(t.date) } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(sn), r.Mb(mn), r.Mb(bn), r.Mb(an)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-datepicker-month"]
                                ], hostAttrs: ["role", "grid"], hostBindings: function(t, e) { 1 & t && r.dc("keydown", (function(t) { return e.onKeyDown(t) })) }, inputs: { month: "month" }, decls: 2, vars: 2, consts: [
                                    ["class", "ngb-dp-week ngb-dp-weekdays", "role", "row", 4, "ngIf"],
                                    ["ngFor", "", 3, "ngForOf"],
                                    ["role", "row", 1, "ngb-dp-week", "ngb-dp-weekdays"],
                                    ["class", "ngb-dp-weekday ngb-dp-showweek", 4, "ngIf"],
                                    ["class", "ngb-dp-weekday small", "role", "columnheader", 4, "ngFor", "ngForOf"],
                                    [1, "ngb-dp-weekday", "ngb-dp-showweek"],
                                    ["role", "columnheader", 1, "ngb-dp-weekday", "small"],
                                    ["class", "ngb-dp-week", "role", "row", 4, "ngIf"],
                                    ["role", "row", 1, "ngb-dp-week"],
                                    ["class", "ngb-dp-week-number small text-muted", 4, "ngIf"],
                                    ["class", "ngb-dp-day", "role", "gridcell", 3, "disabled", "tabindex", "hidden", "ngb-dp-today", "click", 4, "ngFor", "ngForOf"],
                                    [1, "ngb-dp-week-number", "small", "text-muted"],
                                    ["role", "gridcell", 1, "ngb-dp-day", 3, "tabindex", "click"],
                                    [3, "ngIf"],
                                    [3, "ngTemplateOutlet", "ngTemplateOutletContext"]
                                ], template: function(t, e) { 1 & t && (r.Ac(0, et, 3, 2, "div", 0), r.Ac(1, at, 1, 1, "ng-template", 1)), 2 & t && (r.lc("ngIf", e.datepicker.showWeekdays), r.zb(1), r.lc("ngForOf", e.viewModel.weeks)) }, directives: [s.k, s.j, s.l], styles: ['ngb-datepicker-month{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex="0"]{z-index:1}'], encapsulation: 2 }), t })(),
                        _n = (() => { let t = class { constructor(t) { this.i18n = t, this.navigation = ln, this.months = [], this.navigate = new r.n, this.select = new r.n }
                                onClickPrev(t) { t.currentTarget.focus(), this.navigate.emit(this.navigation.PREV) }
                                onClickNext(t) { t.currentTarget.focus(), this.navigate.emit(this.navigation.NEXT) } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(sn)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-datepicker-navigation"]
                                ], inputs: { months: "months", date: "date", disabled: "disabled", showSelect: "showSelect", prevDisabled: "prevDisabled", nextDisabled: "nextDisabled", selectBoxes: "selectBoxes" }, outputs: { navigate: "navigate", select: "select" }, decls: 10, vars: 4, consts: [
                                    [1, "ngb-dp-arrow"],
                                    ["type", "button", 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "disabled", "click", 6, "aria-label", "title"],
                                    [1, "ngb-dp-navigation-chevron"],
                                    ["class", "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years", "select", 4, "ngIf"],
                                    [4, "ngIf"],
                                    [1, "ngb-dp-arrow", "right"],
                                    [1, "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years", "select"],
                                    ["ngFor", "", 3, "ngForOf"],
                                    ["class", "ngb-dp-arrow", 4, "ngIf"],
                                    [1, "ngb-dp-month-name"]
                                ], template: function(t, e) { 1 & t && (r.Rb(0, "div", 0), r.Rb(1, "button", 1), r.Xb(2, lt), r.dc("click", (function(t) { return e.onClickPrev(t) })), r.Nb(3, "span", 2), r.Qb(), r.Qb(), r.Ac(4, ut, 1, 4, "ngb-datepicker-navigation-select", 3), r.Ac(5, pt, 1, 1, void 0, 4), r.Rb(6, "div", 5), r.Rb(7, "button", 1), r.Xb(8, ct), r.dc("click", (function(t) { return e.onClickNext(t) })), r.Nb(9, "span", 2), r.Qb(), r.Qb()), 2 & t && (r.zb(1), r.lc("disabled", e.prevDisabled), r.zb(3), r.lc("ngIf", e.showSelect), r.zb(1), r.lc("ngIf", !e.showSelect), r.zb(2), r.lc("disabled", e.nextDisabled)) }, directives: function() { return [s.k, Vn, s.j] }, styles: ["ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}"], encapsulation: 2, changeDetection: 0 }), t })(); const vn = (t, e) => !!e && e.some(e => e.contains(t)),
                        wn = (t, e) => !e || null != function(t, e) { return e ? t.closest(e) : null }(t, e),
                        Sn = (() => "undefined" != typeof navigator && !!navigator.userAgent && (/iPad|iPhone|iPod/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 || /Android/.test(navigator.userAgent)))(); const Cn = ["a[href]", "button:not([disabled])", 'input:not([disabled]):not([type="hidden"])', "select:not([disabled])", "textarea:not([disabled])", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'].join(", ");

                    function En(t) { const e = Array.from(t.querySelectorAll(Cn)).filter(t => -1 !== t.tabIndex); return [e[0], e[e.length - 1]] } const xn = (t, e, n, r = !1) => { t.runOutsideAngular(() => { const t = b(e, "focusin").pipe(k(n), Object(g.a)(t => t.target));
                            b(e, "keydown").pipe(k(n), Object(D.a)(t => t.which === gn.Tab), R(t)).subscribe(([t, n]) => { const [r, s] = En(e);
                                n !== r && n !== e || !t.shiftKey || (s.focus(), t.preventDefault()), n !== s || t.shiftKey || (r.focus(), t.preventDefault()) }), r && b(e, "click").pipe(k(n), R(t), Object(g.a)(t => t[1])).subscribe(t => t.focus()) }) };
                    class kn { getAllStyles(t) { return window.getComputedStyle(t) }
                        getStyle(t, e) { return this.getAllStyles(t)[e] }
                        isStaticPositioned(t) { return "static" === (this.getStyle(t, "position") || "static") }
                        offsetParent(t) { let e = t.offsetParent || document.documentElement; for (; e && e !== document.documentElement && this.isStaticPositioned(e);) e = e.offsetParent; return e || document.documentElement }
                        position(t, e = !0) { let n, r = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 }; if ("fixed" === this.getStyle(t, "position")) n = t.getBoundingClientRect(), n = { top: n.top, bottom: n.bottom, left: n.left, right: n.right, height: n.height, width: n.width };
                            else { const e = this.offsetParent(t);
                                n = this.offset(t, !1), e !== document.documentElement && (r = this.offset(e, !1)), r.top += e.clientTop, r.left += e.clientLeft } return n.top -= r.top, n.bottom -= r.top, n.left -= r.left, n.right -= r.left, e && (n.top = Math.round(n.top), n.bottom = Math.round(n.bottom), n.left = Math.round(n.left), n.right = Math.round(n.right)), n }
                        offset(t, e = !0) { const n = t.getBoundingClientRect(),
                                r = window.pageYOffset - document.documentElement.clientTop,
                                s = window.pageXOffset - document.documentElement.clientLeft; let i = { height: n.height || t.offsetHeight, width: n.width || t.offsetWidth, top: n.top + r, bottom: n.bottom + r, left: n.left + s, right: n.right + s }; return e && (i.height = Math.round(i.height), i.width = Math.round(i.width), i.top = Math.round(i.top), i.bottom = Math.round(i.bottom), i.left = Math.round(i.left), i.right = Math.round(i.right)), i }
                        positionElements(t, e, n, r) { const [s = "top", i = "center"] = n.split("-"), o = r ? this.offset(t, !1) : this.position(t, !1), a = this.getAllStyles(e), l = parseFloat(a.marginTop), c = parseFloat(a.marginBottom), u = parseFloat(a.marginLeft), h = parseFloat(a.marginRight); let d = 0,
                                f = 0; switch (s) {
                                case "top":
                                    d = o.top - (e.offsetHeight + l + c); break;
                                case "bottom":
                                    d = o.top + o.height; break;
                                case "left":
                                    f = o.left - (e.offsetWidth + u + h); break;
                                case "right":
                                    f = o.left + o.width } switch (i) {
                                case "top":
                                    d = o.top; break;
                                case "bottom":
                                    d = o.top + o.height - e.offsetHeight; break;
                                case "left":
                                    f = o.left; break;
                                case "right":
                                    f = o.left + o.width - e.offsetWidth; break;
                                case "center":
                                    "top" === s || "bottom" === s ? f = o.left + o.width / 2 - e.offsetWidth / 2 : d = o.top + o.height / 2 - e.offsetHeight / 2 }
                            e.style.transform = `translate(${Math.round(f)}px, ${Math.round(d)}px)`; const p = e.getBoundingClientRect(),
                                m = document.documentElement,
                                g = window.innerHeight || m.clientHeight,
                                b = window.innerWidth || m.clientWidth; return p.left >= 0 && p.top >= 0 && p.right <= b && p.bottom <= g } } const On = /\s+/,
                        Tn = new kn;

                    function Dn() { return new An } let In = (() => { let t = class {}; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: Dn, token: t, providedIn: "root" }), t })(),
                        An = (() => { let t = class extends In { parse(t) { if (null != t) { const e = t.trim().split("-"); if (1 === e.length && Fe(e[0])) return { year: Pe(e[0]), month: null, day: null }; if (2 === e.length && Fe(e[0]) && Fe(e[1])) return { year: Pe(e[0]), month: Pe(e[1]), day: null }; if (3 === e.length && Fe(e[0]) && Fe(e[1]) && Fe(e[2])) return { year: Pe(e[0]), month: Pe(e[1]), day: Pe(e[2]) } } return null }
                                format(t) { return t ? `${t.year}-${Fe(t.month)?He(t.month):""}-${Fe(t.day)?He(t.day):""}` : "" } }; return t.\u0275fac = function(e) { return Hr(e || t) }, t.\u0275prov = r.Ib({ token: t, factory: t.\u0275fac }), t })(),
                        Rn = (() => { let t = class extends cn { constructor() { super(...arguments), this.autoClose = !0, this.placement = ["bottom-left", "bottom-right", "top-left", "top-right"], this.restoreFocus = !0 } }; return t.\u0275fac = function(e) { return $r(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t }, token: t, providedIn: "root" }), t })(); const jn = { provide: i.j, useExisting: Object(r.S)(() => Pn), multi: !0 },
                        Nn = { provide: i.i, useExisting: Object(r.S)(() => Pn), multi: !0 }; let Pn = (() => { let t = class { constructor(t, e, n, s, i, o, a, l, c, u, h) { this._parserFormatter = t, this._elRef = e, this._vcRef = n, this._renderer = s, this._cfr = i, this._ngZone = o, this._calendar = a, this._dateAdapter = l, this._document = c, this._changeDetector = u, this._cRef = null, this._disabled = !1, this._elWithFocus = null, this._model = null, this.dateSelect = new r.n, this.navigate = new r.n, this.closed = new r.n, this._onChange = t => {}, this._onTouched = () => {}, this._validatorChange = () => {}, ["autoClose", "container", "positionTarget", "placement"].forEach(t => this[t] = h[t]), this._zoneSubscription = o.onStable.subscribe(() => this._updatePopupPosition()) }
                                get disabled() { return this._disabled }
                                set disabled(t) { this._disabled = "" === t || t && "false" !== t, this.isOpen() && this._cRef.instance.setDisabledState(this._disabled) }
                                registerOnChange(t) { this._onChange = t }
                                registerOnTouched(t) { this._onTouched = t }
                                registerOnValidatorChange(t) { this._validatorChange = t }
                                setDisabledState(t) { this.disabled = t }
                                validate(t) { const { value: e } = t; if (null != e) { const t = this._fromDateStruct(this._dateAdapter.fromModel(e)); if (!t) return { ngbDate: { invalid: e } }; if (this.minDate && t.before(Ge.from(this.minDate))) return { ngbDate: { minDate: { minDate: this.minDate, actual: e } } }; if (this.maxDate && t.after(Ge.from(this.maxDate))) return { ngbDate: { maxDate: { maxDate: this.maxDate, actual: e } } } } return null }
                                writeValue(t) { this._model = this._fromDateStruct(this._dateAdapter.fromModel(t)), this._writeModelValue(this._model) }
                                manualDateChange(t, e = !1) { const n = t !== this._inputValue;
                                    n && (this._inputValue = t, this._model = this._fromDateStruct(this._parserFormatter.parse(t))), !n && e || this._onChange(this._model ? this._dateAdapter.toModel(this._model) : "" === t ? null : t), e && this._model && this._writeModelValue(this._model) }
                                isOpen() { return !!this._cRef }
                                open() { if (!this.isOpen()) { const t = this._cfr.resolveComponentFactory(mn);
                                        this._cRef = this._vcRef.createComponent(t), this._applyPopupStyling(this._cRef.location.nativeElement), this._applyDatepickerInputs(this._cRef.instance), this._subscribeForDatepickerOutputs(this._cRef.instance), this._cRef.instance.ngOnInit(), this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model)), this._cRef.instance.registerOnChange(t => { this.writeValue(t), this._onChange(t), this._onTouched() }), this._cRef.changeDetectorRef.detectChanges(), this._cRef.instance.setDisabledState(this.disabled), "body" === this.container && this._document.querySelector(this.container).appendChild(this._cRef.location.nativeElement), this._elWithFocus = this._document.activeElement, xn(this._ngZone, this._cRef.location.nativeElement, this.closed, !0), this._cRef.instance.focus(),
                                            function(t, e, n, r, s, i, o, a) { var l;
                                                n && t.runOutsideAngular((l = () => { const l = b(e, "keydown").pipe(k(s), Object(D.a)(t => t.which === gn.Escape), Object(A.a)(t => t.preventDefault())),
                                                        c = b(e, "mousedown").pipe(Object(g.a)(t => { const e = t.target; return 2 !== t.button && !vn(e, o) && ("inside" === n ? vn(e, i) && wn(e, a) : "outside" === n ? !vn(e, i) : wn(e, a) || !vn(e, i)) }), k(s));
                                                    (function(...t) { if (1 === t.length) { if (!Object(p.a)(t[0])) return t[0];
                                                            t = t[0] } return Object(_.a)(t, void 0).lift(new S) })([l, b(e, "mouseup").pipe(R(c), Object(D.a)(([t, e]) => e), L(0), k(s))]).subscribe(() => t.run(r)) }, Sn ? () => setTimeout(() => l(), 100) : l)) }(this._ngZone, this._document, this.autoClose, () => this.close(), this.closed, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]) } }
                                close() { if (this.isOpen()) { this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView)), this._cRef = null, this.closed.emit(), this._changeDetector.markForCheck(); let t = this._elWithFocus;
                                        Ve(this.restoreFocus) ? t = this._document.querySelector(this.restoreFocus) : void 0 !== this.restoreFocus && (t = this.restoreFocus), t && t.focus ? t.focus() : this._document.body.focus() } }
                                toggle() { this.isOpen() ? this.close() : this.open() }
                                navigateTo(t) { this.isOpen() && this._cRef.instance.navigateTo(t) }
                                onBlur() { this._onTouched() }
                                onFocus() { this._elWithFocus = this._elRef.nativeElement }
                                ngOnChanges(t) {
                                    (t.minDate || t.maxDate) && (this._validatorChange(), this.isOpen() && (t.minDate && (this._cRef.instance.minDate = this.minDate), t.maxDate && (this._cRef.instance.maxDate = this.maxDate), this._cRef.instance.ngOnChanges(t))) }
                                ngOnDestroy() { this.close(), this._zoneSubscription.unsubscribe() }
                                _applyDatepickerInputs(t) {
                                    ["dayTemplate", "dayTemplateData", "displayMonths", "firstDayOfWeek", "footerTemplate", "markDisabled", "minDate", "maxDate", "navigation", "outsideDays", "showNavigation", "showWeekdays", "showWeekNumbers"].forEach(e => { void 0 !== this[e] && (t[e] = this[e]) }), t.startDate = this.startDate || this._model }
                                _applyPopupStyling(t) { this._renderer.addClass(t, "dropdown-menu"), this._renderer.addClass(t, "show"), "body" === this.container && this._renderer.addClass(t, "ngb-dp-body") }
                                _subscribeForDatepickerOutputs(t) { t.navigate.subscribe(t => this.navigate.emit(t)), t.dateSelect.subscribe(t => { this.dateSelect.emit(t), !0 !== this.autoClose && "inside" !== this.autoClose || this.close() }) }
                                _writeModelValue(t) { const e = this._parserFormatter.format(t);
                                    this._inputValue = e, this._renderer.setProperty(this._elRef.nativeElement, "value", e), this.isOpen() && (this._cRef.instance.writeValue(this._dateAdapter.toModel(t)), this._onTouched()) }
                                _fromDateStruct(t) { const e = t ? new Ge(t.year, t.month, t.day) : null; return this._calendar.isValid(e) ? e : null }
                                _updatePopupPosition() { if (!this._cRef) return; let t; if (t = Ve(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget instanceof HTMLElement ? this.positionTarget : this._elRef.nativeElement, this.positionTarget && !t) throw new Error("ngbDatepicker could not find element declared in [positionTarget] to position against.");! function(t, e, n, r, s) { let i = Array.isArray(n) ? n : n.split(On); const o = ["top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"],
                                            a = t => { const [e, n] = t.split("-"), r = []; return r }; let l = i.findIndex(t => "auto" === t);
                                        l >= 0 && o.forEach((function(t) { null == i.find(e => -1 !== e.search("^" + t)) && i.splice(l++, 1, t) })); const c = e.style;
                                        c.position = "absolute", c.top = "0", c.left = "0", c["will-change"] = "transform"; let u = null,
                                            h = !1; for (u of i) { a(u); if (Tn.positionElements(t, e, u, r)) { h = !0; break } }
                                        h || (u = i[0], a(u), Tn.positionElements(t, e, u, r)) }(t, this._cRef.location.nativeElement, this.placement, "body" === this.container) } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(In), r.Mb(r.l), r.Mb(r.N), r.Mb(r.D), r.Mb(r.j), r.Mb(r.z), r.Mb(Xe), r.Mb(hn), r.Mb(s.c), r.Mb(r.h), r.Mb(Rn)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["input", "ngbDatepicker", ""]
                                ], hostVars: 1, hostBindings: function(t, e) { 1 & t && r.dc("input", (function(t) { return e.manualDateChange(t.target.value) }))("change", (function(t) { return e.manualDateChange(t.target.value, !0) }))("focus", (function() { return e.onFocus() }))("blur", (function() { return e.onBlur() })), 2 & t && r.Ub("disabled", e.disabled) }, inputs: { disabled: "disabled", autoClose: "autoClose", dayTemplate: "dayTemplate", dayTemplateData: "dayTemplateData", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", footerTemplate: "footerTemplate", markDisabled: "markDisabled", minDate: "minDate", maxDate: "maxDate", navigation: "navigation", outsideDays: "outsideDays", placement: "placement", restoreFocus: "restoreFocus", showWeekdays: "showWeekdays", showWeekNumbers: "showWeekNumbers", startDate: "startDate", container: "container", positionTarget: "positionTarget" }, outputs: { dateSelect: "dateSelect", navigate: "navigate", closed: "closed" }, exportAs: ["ngbDatepicker"], features: [r.yb([jn, Nn, { provide: cn, useExisting: Rn }]), r.xb] }), t })(),
                        Mn = (() => { let t = class { constructor(t) { this.i18n = t }
                                isMuted() { return !this.selected && (this.date.month !== this.currentMonth || this.disabled) } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(sn)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["", "ngbDatepickerDayView", ""]
                                ], hostAttrs: [1, "btn-light"], hostVars: 10, hostBindings: function(t, e) { 2 & t && r.Eb("bg-primary", e.selected)("text-white", e.selected)("text-muted", e.isMuted())("outside", e.isMuted())("active", e.focused) }, inputs: { currentMonth: "currentMonth", date: "date", disabled: "disabled", focused: "focused", selected: "selected" }, attrs: mt, decls: 1, vars: 1, template: function(t, e) { 1 & t && r.Cc(0), 2 & t && r.Dc(e.i18n.getDayNumerals(e.date)) }, styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}"], encapsulation: 2, changeDetection: 0 }), t })(),
                        Vn = (() => { let t = class { constructor(t, e) { this.i18n = t, this._renderer = e, this.select = new r.n, this._month = -1, this._year = -1 }
                                changeMonth(t) { this.select.emit(new Ge(this.date.year, Pe(t), 1)) }
                                changeYear(t) { this.select.emit(new Ge(Pe(t), this.date.month, 1)) }
                                ngAfterViewChecked() { this.date && (this.date.month !== this._month && (this._month = this.date.month, this._renderer.setProperty(this.monthSelect.nativeElement, "value", this._month)), this.date.year !== this._year && (this._year = this.date.year, this._renderer.setProperty(this.yearSelect.nativeElement, "value", this._year))) } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(sn), r.Mb(r.D)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-datepicker-navigation-select"]
                                ], viewQuery: function(t, e) { var n;
                                    1 & t && (r.yc(gt, !0, r.l), r.yc(bt, !0, r.l)), 2 & t && (r.sc(n = r.ec()) && (e.monthSelect = n.first), r.sc(n = r.ec()) && (e.yearSelect = n.first)) }, inputs: { date: "date", disabled: "disabled", months: "months", years: "years" }, outputs: { select: "select" }, decls: 8, vars: 4, consts: [
                                    [1, "custom-select", 3, "disabled", "change", 6, "aria-label", "title"],
                                    ["month", ""],
                                    [3, "value", 4, "ngFor", "ngForOf"],
                                    ["year", ""],
                                    [3, "value"]
                                ], template: function(t, e) { 1 & t && (r.Rb(0, "select", 0, 1), r.Xb(2, yt), r.dc("change", (function(t) { return e.changeMonth(t.target.value) })), r.Ac(3, vt, 2, 3, "option", 2), r.Qb(), r.Rb(4, "select", 0, 3), r.Xb(6, _t), r.dc("change", (function(t) { return e.changeYear(t.target.value) })), r.Ac(7, wt, 2, 2, "option", 2), r.Qb()), 2 & t && (r.lc("disabled", e.disabled), r.zb(3), r.lc("ngForOf", e.months), r.zb(1), r.lc("disabled", e.disabled), r.zb(3), r.lc("ngForOf", e.years)) }, directives: [s.j, i.m, i.r], styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.custom-select:focus{z-index:1}ngb-datepicker-navigation-select>.custom-select::-ms-value{background-color:transparent!important}"], encapsulation: 2, changeDetection: 0 }), t })(),
                        Fn = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b, i.h]
                                ] }), t })(),
                        Ln = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) } }), t })(),
                        Un = (() => { let t = class { constructor() { this.backdrop = !0, this.keyboard = !0 } }; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t }, token: t, providedIn: "root" }), t })();
                    class Hn { constructor(t, e, n) { this.nodes = t, this.viewRef = e, this.componentRef = n } } const $n = () => {}; let zn = (() => { let t = class { constructor(t) { this._document = t }
                                compensate() { const t = this._getWidth(); return this._isPresent(t) ? this._adjustBody(t) : $n }
                                _adjustBody(t) { const e = this._document.body,
                                        n = e.style.paddingRight,
                                        r = parseFloat(window.getComputedStyle(e)["padding-right"]); return e.style["padding-right"] = `${r+t}px`, () => e.style["padding-right"] = n }
                                _isPresent(t) { const e = this._document.body.getBoundingClientRect(); return window.innerWidth - (e.left + e.right) >= t - .1 * t }
                                _getWidth() { const t = this._document.createElement("div");
                                    t.className = "modal-scrollbar-measure"; const e = this._document.body;
                                    e.appendChild(t); const n = t.getBoundingClientRect().width - t.clientWidth; return e.removeChild(t), n } }; return t.\u0275fac = function(e) { return new(e || t)(r.Zb(s.c)) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t(Object(r.Zb)(s.c)) }, token: t, providedIn: "root" }), t })(),
                        Bn = (() => { let t = class {}; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-modal-backdrop"]
                                ], hostAttrs: [2, "z-index", "1050"], hostVars: 2, hostBindings: function(t, e) { 2 & t && r.Bb("modal-backdrop fade show" + (e.backdropClass ? " " + e.backdropClass : "")) }, inputs: { backdropClass: "backdropClass" }, decls: 0, vars: 0, template: function(t, e) {}, encapsulation: 2 }), t })();
                    class qn { close(t) {}
                        dismiss(t) {} }
                    class Qn { constructor(t, e, n, r) { this._windowCmptRef = t, this._contentRef = e, this._backdropCmptRef = n, this._beforeDismiss = r, t.instance.dismissEvent.subscribe(t => { this.dismiss(t) }), this.result = new Promise((t, e) => { this._resolve = t, this._reject = e }), this.result.then(null, () => {}) }
                        get componentInstance() { if (this._contentRef && this._contentRef.componentRef) return this._contentRef.componentRef.instance }
                        close(t) { this._windowCmptRef && (this._resolve(t), this._removeModalElements()) }
                        _dismiss(t) { this._reject(t), this._removeModalElements() }
                        dismiss(t) { if (this._windowCmptRef)
                                if (this._beforeDismiss) { const e = this._beforeDismiss();
                                    e && e.then ? e.then(e => {!1 !== e && this._dismiss(t) }, () => {}) : !1 !== e && this._dismiss(t) } else this._dismiss(t) }
                        _removeModalElements() { const t = this._windowCmptRef.location.nativeElement; if (t.parentNode.removeChild(t), this._windowCmptRef.destroy(), this._backdropCmptRef) { const t = this._backdropCmptRef.location.nativeElement;
                                t.parentNode.removeChild(t), this._backdropCmptRef.destroy() }
                            this._contentRef && this._contentRef.viewRef && this._contentRef.viewRef.destroy(), this._windowCmptRef = null, this._backdropCmptRef = null, this._contentRef = null } } var Wn = function(t) { return t[t.BACKDROP_CLICK = 0] = "BACKDROP_CLICK", t[t.ESC = 1] = "ESC", t }({}); let Gn = (() => { let t = class { constructor(t, e, n) { this._document = t, this._elRef = e, this._zone = n, this._closed$ = new o.a, this._elWithFocus = null, this.backdrop = !0, this.keyboard = !0, this.dismissEvent = new r.n }
                                dismiss(t) { this.dismissEvent.emit(t) }
                                ngOnInit() { this._elWithFocus = this._document.activeElement }
                                ngAfterViewInit() { const { nativeElement: t } = this._elRef; if (this._zone.runOutsideAngular(() => { b(t, "keydown").pipe(k(this._closed$), Object(D.a)(t => t.which === gn.Escape && this.keyboard)).subscribe(t => requestAnimationFrame(() => { t.defaultPrevented || this._zone.run(() => this.dismiss(Wn.ESC)) })); let e = !1;
                                            b(this._dialogEl.nativeElement, "mousedown").pipe(k(this._closed$), Object(A.a)(() => e = !1), Object(x.a)(() => b(t, "mouseup").pipe(k(this._closed$), Object(I.a)(1))), Object(D.a)(({ target: e }) => t === e)).subscribe(() => { e = !0 }), b(t, "click").pipe(k(this._closed$)).subscribe(({ target: n }) => {!0 !== this.backdrop || t !== n || e || this._zone.run(() => this.dismiss(Wn.BACKDROP_CLICK)), e = !1 }) }), !t.contains(document.activeElement)) { const e = t.querySelector("[ngbAutofocus]"),
                                            n = En(t)[0];
                                        (e || n || t).focus() } }
                                ngOnDestroy() { const t = this._document.body,
                                        e = this._elWithFocus; let n;
                                    n = e && e.focus && t.contains(e) ? e : t, this._zone.runOutsideAngular(() => { setTimeout(() => n.focus()), this._elWithFocus = null }), this._closed$.next() } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(s.c), r.Mb(r.l), r.Mb(r.z)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-modal-window"]
                                ], viewQuery: function(t, e) { var n;
                                    1 & t && r.yc(St, !0), 2 & t && r.sc(n = r.ec()) && (e._dialogEl = n.first) }, hostAttrs: ["role", "dialog", "tabindex", "-1"], hostVars: 5, hostBindings: function(t, e) { 2 & t && (r.Ab("aria-modal", !0)("aria-labelledby", e.ariaLabelledBy)("aria-describedby", e.ariaDescribedBy), r.Bb("modal fade show d-block" + (e.windowClass ? " " + e.windowClass : ""))) }, inputs: { backdrop: "backdrop", keyboard: "keyboard", ariaLabelledBy: "ariaLabelledBy", ariaDescribedBy: "ariaDescribedBy", centered: "centered", scrollable: "scrollable", size: "size", windowClass: "windowClass" }, outputs: { dismissEvent: "dismiss" }, ngContentSelectors: z, decls: 4, vars: 2, consts: [
                                    ["role", "document"],
                                    ["dialog", ""],
                                    [1, "modal-content"]
                                ], template: function(t, e) { 1 & t && (r.kc(), r.Rb(0, "div", 0, 1), r.Rb(2, "div", 2), r.jc(3), r.Qb(), r.Qb()), 2 & t && r.Bb("modal-dialog" + (e.size ? " modal-" + e.size : "") + (e.centered ? " modal-dialog-centered" : "") + (e.scrollable ? " modal-dialog-scrollable" : "")) }, styles: ["ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}"], encapsulation: 2 }), t })(),
                        Zn = (() => { let t = class { constructor(t, e, n, r, s, i) { this._applicationRef = t, this._injector = e, this._document = n, this._scrollBar = r, this._rendererFactory = s, this._ngZone = i, this._activeWindowCmptHasChanged = new o.a, this._ariaHiddenValues = new Map, this._backdropAttributes = ["backdropClass"], this._modalRefs = [], this._windowAttributes = ["ariaLabelledBy", "ariaDescribedBy", "backdrop", "centered", "keyboard", "scrollable", "size", "windowClass"], this._windowCmpts = [], this._activeWindowCmptHasChanged.subscribe(() => { if (this._windowCmpts.length) { const t = this._windowCmpts[this._windowCmpts.length - 1];
                                            xn(this._ngZone, t.location.nativeElement, this._activeWindowCmptHasChanged), this._revertAriaHidden(), this._setAriaHidden(t.location.nativeElement) } }) }
                                open(t, e, n, r) { const s = r.container instanceof HTMLElement ? r.container : Ue(r.container) ? this._document.querySelector(r.container) : this._document.body,
                                        i = this._rendererFactory.createRenderer(null, null),
                                        o = this._scrollBar.compensate(),
                                        a = () => { this._modalRefs.length || (i.removeClass(this._document.body, "modal-open"), this._revertAriaHidden()) }; if (!s) throw new Error(`The specified modal container "${r.container||"body"}" was not found in the DOM.`); const l = new qn,
                                        c = this._getContentRef(t, r.injector || e, n, l, r); let u = !1 !== r.backdrop ? this._attachBackdrop(t, s) : void 0,
                                        h = this._attachWindowComponent(t, s, c),
                                        d = new Qn(h, c, u, r.beforeDismiss); return this._registerModalRef(d), this._registerWindowCmpt(h), d.result.then(o, o), d.result.then(a, a), l.close = t => { d.close(t) }, l.dismiss = t => { d.dismiss(t) }, this._applyWindowOptions(h.instance, r), 1 === this._modalRefs.length && i.addClass(this._document.body, "modal-open"), u && u.instance && this._applyBackdropOptions(u.instance, r), d }
                                dismissAll(t) { this._modalRefs.forEach(e => e.dismiss(t)) }
                                hasOpenModals() { return this._modalRefs.length > 0 }
                                _attachBackdrop(t, e) { let n = t.resolveComponentFactory(Bn).create(this._injector); return this._applicationRef.attachView(n.hostView), e.appendChild(n.location.nativeElement), n }
                                _attachWindowComponent(t, e, n) { let r = t.resolveComponentFactory(Gn).create(this._injector, n.nodes); return this._applicationRef.attachView(r.hostView), e.appendChild(r.location.nativeElement), r }
                                _applyWindowOptions(t, e) { this._windowAttributes.forEach(n => { Ue(e[n]) && (t[n] = e[n]) }) }
                                _applyBackdropOptions(t, e) { this._backdropAttributes.forEach(n => { Ue(e[n]) && (t[n] = e[n]) }) }
                                _getContentRef(t, e, n, s, i) { return n ? n instanceof r.K ? this._createFromTemplateRef(n, s) : Ve(n) ? this._createFromString(n) : this._createFromComponent(t, e, n, s, i) : new Hn([]) }
                                _createFromTemplateRef(t, e) { const n = t.createEmbeddedView({ $implicit: e, close(t) { e.close(t) }, dismiss(t) { e.dismiss(t) } }); return this._applicationRef.attachView(n), new Hn([n.rootNodes], n) }
                                _createFromString(t) { const e = this._document.createTextNode(`${t}`); return new Hn([
                                        [e]
                                    ]) }
                                _createFromComponent(t, e, n, s, i) { const o = t.resolveComponentFactory(n),
                                        a = r.r.create({ providers: [{ provide: qn, useValue: s }], parent: e }),
                                        l = o.create(a),
                                        c = l.location.nativeElement; return i.scrollable && c.classList.add("component-host-scrollable"), this._applicationRef.attachView(l.hostView), new Hn([
                                        [c]
                                    ], l.hostView, l) }
                                _setAriaHidden(t) { const e = t.parentElement;
                                    e && t !== this._document.body && (Array.from(e.children).forEach(e => { e !== t && "SCRIPT" !== e.nodeName && (this._ariaHiddenValues.set(e, e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true")) }), this._setAriaHidden(e)) }
                                _revertAriaHidden() { this._ariaHiddenValues.forEach((t, e) => { t ? e.setAttribute("aria-hidden", t) : e.removeAttribute("aria-hidden") }), this._ariaHiddenValues.clear() }
                                _registerModalRef(t) { const e = () => { const e = this._modalRefs.indexOf(t);
                                        e > -1 && this._modalRefs.splice(e, 1) };
                                    this._modalRefs.push(t), t.result.then(e, e) }
                                _registerWindowCmpt(t) { this._windowCmpts.push(t), this._activeWindowCmptHasChanged.next(), t.onDestroy(() => { const e = this._windowCmpts.indexOf(t);
                                        e > -1 && (this._windowCmpts.splice(e, 1), this._activeWindowCmptHasChanged.next()) }) } }; return t.\u0275fac = function(e) { return new(e || t)(r.Zb(r.g), r.Zb(r.r), r.Zb(s.c), r.Zb(zn), r.Zb(r.E), r.Zb(r.z)) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t(Object(r.Zb)(r.g), Object(r.Zb)(r.o), Object(r.Zb)(s.c), Object(r.Zb)(zn), Object(r.Zb)(r.E), Object(r.Zb)(r.z)) }, token: t, providedIn: "root" }), t })(),
                        Kn = (() => { let t = class { constructor(t, e, n, r) { this._moduleCFR = t, this._injector = e, this._modalStack = n, this._config = r }
                                open(t, e = {}) { const n = Object.assign({}, this._config, e); return this._modalStack.open(this._moduleCFR, this._injector, t, n) }
                                dismissAll(t) { this._modalStack.dismissAll(t) }
                                hasOpenModals() { return this._modalStack.hasOpenModals() } }; return t.\u0275fac = function(e) { return new(e || t)(r.Zb(r.j), r.Zb(r.r), r.Zb(Zn), r.Zb(Un)) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t(Object(r.Zb)(r.j), Object(r.Zb)(r.o), Object(r.Zb)(Zn), Object(r.Zb)(Un)) }, token: t, providedIn: "root" }), t })(),
                        Jn = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, providers: [Kn] }), t })(),
                        Xn = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(),
                        Yn = (() => { let t = class { constructor() { this.disabled = !1, this.boundaryLinks = !1, this.directionLinks = !0, this.ellipses = !0, this.maxSize = 0, this.pageSize = 10, this.rotate = !1 } }; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t }, token: t, providedIn: "root" }), t })(),
                        tr = (() => { let t = class { constructor(t) { this.templateRef = t } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.K)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["ng-template", "ngbPaginationEllipsis", ""]
                                ] }), t })(),
                        er = (() => { let t = class { constructor(t) { this.templateRef = t } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.K)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["ng-template", "ngbPaginationFirst", ""]
                                ] }), t })(),
                        nr = (() => { let t = class { constructor(t) { this.templateRef = t } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.K)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["ng-template", "ngbPaginationLast", ""]
                                ] }), t })(),
                        rr = (() => { let t = class { constructor(t) { this.templateRef = t } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.K)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["ng-template", "ngbPaginationNext", ""]
                                ] }), t })(),
                        sr = (() => { let t = class { constructor(t) { this.templateRef = t } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.K)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["ng-template", "ngbPaginationNumber", ""]
                                ] }), t })(),
                        ir = (() => { let t = class { constructor(t) { this.templateRef = t } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.K)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["ng-template", "ngbPaginationPrevious", ""]
                                ] }), t })(),
                        or = (() => { let t = class { constructor(t) { this.pageCount = 0, this.pages = [], this.page = 1, this.pageChange = new r.n(!0), this.disabled = t.disabled, this.boundaryLinks = t.boundaryLinks, this.directionLinks = t.directionLinks, this.ellipses = t.ellipses, this.maxSize = t.maxSize, this.pageSize = t.pageSize, this.rotate = t.rotate, this.size = t.size }
                                hasPrevious() { return this.page > 1 }
                                hasNext() { return this.page < this.pageCount }
                                nextDisabled() { return !this.hasNext() || this.disabled }
                                previousDisabled() { return !this.hasPrevious() || this.disabled }
                                selectPage(t) { this._updatePages(t) }
                                ngOnChanges(t) { this._updatePages(this.page) }
                                isEllipsis(t) { return -1 === t }
                                _applyEllipses(t, e) { this.ellipses && (t > 0 && (t > 2 ? this.pages.unshift(-1) : 2 === t && this.pages.unshift(2), this.pages.unshift(1)), e < this.pageCount && (e < this.pageCount - 2 ? this.pages.push(-1) : e === this.pageCount - 2 && this.pages.push(this.pageCount - 1), this.pages.push(this.pageCount))) }
                                _applyRotation() { let t = 0,
                                        e = this.pageCount,
                                        n = Math.floor(this.maxSize / 2); return this.page <= n ? e = this.maxSize : this.pageCount - this.page < n ? t = this.pageCount - this.maxSize : (t = this.page - n - 1, e = this.page + (this.maxSize % 2 == 0 ? n - 1 : n)), [t, e] }
                                _applyPagination() { let t = (Math.ceil(this.page / this.maxSize) - 1) * this.maxSize; return [t, t + this.maxSize] }
                                _setPageInRange(t) { const e = this.page;
                                    this.page = Me(t, this.pageCount, 1), this.page !== e && Fe(this.collectionSize) && this.pageChange.emit(this.page) }
                                _updatePages(t) { this.pageCount = Math.ceil(this.collectionSize / this.pageSize), Fe(this.pageCount) || (this.pageCount = 0), this.pages.length = 0; for (let e = 1; e <= this.pageCount; e++) this.pages.push(e); if (this._setPageInRange(t), this.maxSize > 0 && this.pageCount > this.maxSize) { let t = 0,
                                            e = this.pageCount;
                                        [t, e] = this.rotate ? this._applyRotation() : this._applyPagination(), this.pages = this.pages.slice(t, e), this._applyEllipses(t, e) } } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(Yn)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-pagination"]
                                ], contentQueries: function(t, e, n) { var s;
                                    1 & t && (r.Fb(n, tr, !0), r.Fb(n, er, !0), r.Fb(n, nr, !0), r.Fb(n, rr, !0), r.Fb(n, sr, !0), r.Fb(n, ir, !0)), 2 & t && (r.sc(s = r.ec()) && (e.tplEllipsis = s.first), r.sc(s = r.ec()) && (e.tplFirst = s.first), r.sc(s = r.ec()) && (e.tplLast = s.first), r.sc(s = r.ec()) && (e.tplNext = s.first), r.sc(s = r.ec()) && (e.tplNumber = s.first), r.sc(s = r.ec()) && (e.tplPrevious = s.first)) }, hostAttrs: ["role", "navigation"], inputs: { page: "page", disabled: "disabled", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", ellipses: "ellipses", maxSize: "maxSize", pageSize: "pageSize", rotate: "rotate", size: "size", collectionSize: "collectionSize" }, outputs: { pageChange: "pageChange" }, features: [r.xb], decls: 18, vars: 7, consts: [
                                    ["first", ""],
                                    ["previous", ""],
                                    ["next", ""],
                                    ["last", ""],
                                    ["ellipsis", ""],
                                    ["defaultNumber", ""],
                                    ["class", "page-item", 3, "disabled", 4, "ngIf"],
                                    ["class", "page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"],
                                    ["aria-hidden", "true"],
                                    ["class", "sr-only", 4, "ngIf"],
                                    [1, "sr-only"],
                                    [1, "page-item"],
                                    ["href", "", 1, "page-link", 3, "click", 6, "aria-label"],
                                    [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
                                    ["class", "page-link", "tabindex", "-1", "aria-disabled", "true", 4, "ngIf"],
                                    ["class", "page-link", "href", "", 3, "click", 4, "ngIf"],
                                    ["tabindex", "-1", "aria-disabled", "true", 1, "page-link"],
                                    ["href", "", 1, "page-link", 3, "click"]
                                ], template: function(t, e) { 1 & t && (r.Ac(0, Ot, 2, 0, "ng-template", null, 0, r.Bc), r.Ac(2, Tt, 2, 0, "ng-template", null, 1, r.Bc), r.Ac(4, Dt, 2, 0, "ng-template", null, 2, r.Bc), r.Ac(6, It, 2, 0, "ng-template", null, 3, r.Bc), r.Ac(8, At, 1, 0, "ng-template", null, 4, r.Bc), r.Ac(10, jt, 2, 2, "ng-template", null, 5, r.Bc), r.Rb(12, "ul"), r.Ac(13, Vt, 4, 9, "li", 6), r.Ac(14, Ht, 4, 8, "li", 6), r.Ac(15, Gt, 3, 7, "li", 7), r.Ac(16, Jt, 4, 9, "li", 6), r.Ac(17, te, 4, 9, "li", 6), r.Qb()), 2 & t && (r.zb(12), r.Bb("pagination" + (e.size ? " pagination-" + e.size : "")), r.zb(1), r.lc("ngIf", e.boundaryLinks), r.zb(1), r.lc("ngIf", e.directionLinks), r.zb(1), r.lc("ngForOf", e.pages), r.zb(1), r.lc("ngIf", e.directionLinks), r.zb(1), r.lc("ngIf", e.boundaryLinks)) }, directives: [s.k, s.j, s.l], encapsulation: 2, changeDetection: 0 }), t })(),
                        ar = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(),
                        lr = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(),
                        cr = (() => { let t = class { constructor() { this.max = 100, this.animated = !1, this.striped = !1, this.showValue = !1 } }; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t }, token: t, providedIn: "root" }), t })(),
                        ur = (() => { let t = class { constructor(t) { this.value = 0, this.max = t.max, this.animated = t.animated, this.striped = t.striped, this.textType = t.textType, this.type = t.type, this.showValue = t.showValue, this.height = t.height }
                                set max(t) { this._max = !Fe(t) || t <= 0 ? 100 : t }
                                get max() { return this._max }
                                getValue() { return Me(this.value, this.max) }
                                getPercentValue() { return 100 * this.getValue() / this.max } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(cr)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-progressbar"]
                                ], inputs: { value: "value", max: "max", animated: "animated", striped: "striped", textType: "textType", type: "type", showValue: "showValue", height: "height" }, ngContentSelectors: z, decls: 4, vars: 13, consts: [
                                    [1, "progress"],
                                    ["role", "progressbar", "aria-valuemin", "0"],
                                    [4, "ngIf"]
                                ], template: function(t, e) { 1 & t && (r.kc(), r.Rb(0, "div", 0), r.Rb(1, "div", 1), r.Ac(2, ne, 2, 1, "span", 2), r.jc(3), r.Qb(), r.Qb()), 2 & t && (r.zc("height", e.height), r.zb(1), r.Db("progress-bar", e.type ? " bg-" + e.type : "", "", e.textType ? " text-" + e.textType : "", "\n      ", e.animated ? " progress-bar-animated" : "", "", e.striped ? " progress-bar-striped" : "", ""), r.zc("width", e.getPercentValue(), "%"), r.Ab("aria-valuenow", e.getValue())("aria-valuemax", e.max), r.zb(1), r.lc("ngIf", e.showValue)) }, directives: [s.k], encapsulation: 2, changeDetection: 0 }), t })(),
                        hr = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(),
                        dr = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(),
                        fr = (() => { let t = class { constructor() { this.justify = "start", this.orientation = "horizontal", this.type = "tabs" } }; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t }, token: t, providedIn: "root" }), t })(),
                        pr = 0,
                        mr = (() => { let t = class { constructor(t) { this.templateRef = t } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.K)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["ng-template", "ngbTabTitle", ""]
                                ] }), t })(),
                        gr = (() => { let t = class { constructor(t) { this.templateRef = t } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.K)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["ng-template", "ngbTabContent", ""]
                                ] }), t })(),
                        br = (() => { let t = class { constructor() { this.id = `ngb-tab-${pr++}`, this.disabled = !1 }
                                ngAfterContentChecked() { this.titleTpl = this.titleTpls.first, this.contentTpl = this.contentTpls.first } }; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["ngb-tab"]
                                ], contentQueries: function(t, e, n) { var s;
                                    1 & t && (r.Fb(n, mr, !1), r.Fb(n, gr, !1)), 2 & t && (r.sc(s = r.ec()) && (e.titleTpls = s), r.sc(s = r.ec()) && (e.contentTpls = s)) }, inputs: { id: "id", disabled: "disabled", title: "title" } }), t })(),
                        yr = (() => { let t = class { constructor(t) { this.destroyOnHide = !0, this.tabChange = new r.n, this.type = t.type, this.justify = t.justify, this.orientation = t.orientation }
                                set justify(t) { this.justifyClass = "fill" === t || "justified" === t ? `nav-${t}` : `justify-content-${t}` }
                                select(t) { let e = this._getTabById(t); if (e && !e.disabled && this.activeId !== e.id) { let t = !1;
                                        this.tabChange.emit({ activeId: this.activeId, nextId: e.id, preventDefault: () => { t = !0 } }), t || (this.activeId = e.id) } }
                                ngAfterContentChecked() { let t = this._getTabById(this.activeId);
                                    this.activeId = t ? t.id : this.tabs.length ? this.tabs.first.id : null }
                                _getTabById(t) { let e = this.tabs.filter(e => e.id === t); return e.length ? e[0] : null } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(fr)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-tabset"]
                                ], contentQueries: function(t, e, n) { var s;
                                    1 & t && r.Fb(n, br, !1), 2 & t && r.sc(s = r.ec()) && (e.tabs = s) }, inputs: { destroyOnHide: "destroyOnHide", type: "type", justify: "justify", orientation: "orientation", activeId: "activeId" }, outputs: { tabChange: "tabChange" }, exportAs: ["ngbTabset"], decls: 4, vars: 4, consts: [
                                    ["role", "tablist"],
                                    ["class", "nav-item", 4, "ngFor", "ngForOf"],
                                    [1, "tab-content"],
                                    ["ngFor", "", 3, "ngForOf"],
                                    [1, "nav-item"],
                                    ["href", "", "role", "tab", 1, "nav-link", 3, "id", "click"],
                                    [3, "ngTemplateOutlet"],
                                    ["role", "tabpanel", 3, "class", "id", 4, "ngIf"],
                                    ["role", "tabpanel", 3, "id"]
                                ], template: function(t, e) { 1 & t && (r.Rb(0, "ul", 0), r.Ac(1, se, 4, 11, "li", 1), r.Qb(), r.Rb(2, "div", 2), r.Ac(3, ae, 1, 1, "ng-template", 3), r.Qb()), 2 & t && (r.Bb("nav nav-" + e.type + ("horizontal" == e.orientation ? " " + e.justifyClass : " flex-column")), r.zb(1), r.lc("ngForOf", e.tabs), r.zb(2), r.lc("ngForOf", e.tabs)) }, directives: [s.j, s.l, s.k], encapsulation: 2 }), t })(),
                        _r = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })();
                    class vr { constructor(t, e, n) { this.hour = Pe(t), this.minute = Pe(e), this.second = Pe(n) }
                        changeHour(t = 1) { this.updateHour((isNaN(this.hour) ? 0 : this.hour) + t) }
                        updateHour(t) { this.hour = Fe(t) ? (t < 0 ? 24 + t : t) % 24 : NaN }
                        changeMinute(t = 1) { this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + t) }
                        updateMinute(t) { Fe(t) ? (this.minute = t % 60 < 0 ? 60 + t % 60 : t % 60, this.changeHour(Math.floor(t / 60))) : this.minute = NaN }
                        changeSecond(t = 1) { this.updateSecond((isNaN(this.second) ? 0 : this.second) + t) }
                        updateSecond(t) { Fe(t) ? (this.second = t < 0 ? 60 + t % 60 : t % 60, this.changeMinute(Math.floor(t / 60))) : this.second = NaN }
                        isValid(t = !0) { return Fe(this.hour) && Fe(this.minute) && (!t || Fe(this.second)) }
                        toString() { return `${this.hour||0}:${this.minute||0}:${this.second||0}` } } let wr = (() => { let t = class { constructor() { this.meridian = !1, this.spinners = !0, this.seconds = !1, this.hourStep = 1, this.minuteStep = 1, this.secondStep = 1, this.disabled = !1, this.readonlyInputs = !1, this.size = "medium" } }; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t }, token: t, providedIn: "root" }), t })();

                    function Sr() { return new Er } let Cr = (() => { let t = class {}; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: Sr, token: t, providedIn: "root" }), t })(),
                        Er = (() => { let t = class extends Cr { fromModel(t) { return t && Le(t.hour) && Le(t.minute) ? { hour: t.hour, minute: t.minute, second: Le(t.second) ? t.second : null } : null }
                                toModel(t) { return t && Le(t.hour) && Le(t.minute) ? { hour: t.hour, minute: t.minute, second: Le(t.second) ? t.second : null } : null } }; return t.\u0275fac = function(e) { return zr(e || t) }, t.\u0275prov = r.Ib({ token: t, factory: t.\u0275fac }), t })(),
                        xr = (() => { let t = class {}; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return t = Object(r.Zb)(r.u), new kr(t); var t }, token: t, providedIn: "root" }), t })(),
                        kr = (() => { let t = class extends xr { constructor(t) { super(), this._periods = Object(s.t)(t, s.e.Standalone, s.o.Narrow) }
                                getMorningPeriod() { return this._periods[0] }
                                getAfternoonPeriod() { return this._periods[1] } }; return t.\u0275fac = function(e) { return new(e || t)(r.Zb(r.u)) }, t.\u0275prov = r.Ib({ token: t, factory: t.\u0275fac }), t })(); const Or = /[^0-9]/g,
                        Tr = { provide: i.j, useExisting: Object(r.S)(() => Dr), multi: !0 }; let Dr = (() => { let t = class { constructor(t, e, n, r) { this._config = t, this._ngbTimeAdapter = e, this._cd = n, this.i18n = r, this.onChange = t => {}, this.onTouched = () => {}, this.meridian = t.meridian, this.spinners = t.spinners, this.seconds = t.seconds, this.hourStep = t.hourStep, this.minuteStep = t.minuteStep, this.secondStep = t.secondStep, this.disabled = t.disabled, this.readonlyInputs = t.readonlyInputs, this.size = t.size }
                                set hourStep(t) { this._hourStep = Le(t) ? t : this._config.hourStep }
                                get hourStep() { return this._hourStep }
                                set minuteStep(t) { this._minuteStep = Le(t) ? t : this._config.minuteStep }
                                get minuteStep() { return this._minuteStep }
                                set secondStep(t) { this._secondStep = Le(t) ? t : this._config.secondStep }
                                get secondStep() { return this._secondStep }
                                writeValue(t) { const e = this._ngbTimeAdapter.fromModel(t);
                                    this.model = e ? new vr(e.hour, e.minute, e.second) : new vr, this.seconds || e && Fe(e.second) || (this.model.second = 0), this._cd.markForCheck() }
                                registerOnChange(t) { this.onChange = t }
                                registerOnTouched(t) { this.onTouched = t }
                                setDisabledState(t) { this.disabled = t }
                                changeHour(t) { this.model.changeHour(t), this.propagateModelChange() }
                                changeMinute(t) { this.model.changeMinute(t), this.propagateModelChange() }
                                changeSecond(t) { this.model.changeSecond(t), this.propagateModelChange() }
                                updateHour(t) { const e = this.model.hour >= 12,
                                        n = Pe(t);
                                    this.model.updateHour(this.meridian && (e && n < 12 || !e && 12 === n) ? n + 12 : n), this.propagateModelChange() }
                                updateMinute(t) { this.model.updateMinute(Pe(t)), this.propagateModelChange() }
                                updateSecond(t) { this.model.updateSecond(Pe(t)), this.propagateModelChange() }
                                toggleMeridian() { this.meridian && this.changeHour(12) }
                                formatInput(t) { t.value = t.value.replace(Or, "") }
                                formatHour(t) { return Fe(t) ? He(this.meridian ? t % 12 == 0 ? 12 : t % 12 : t % 24) : He(NaN) }
                                formatMinSec(t) { return He(Fe(t) ? t : NaN) }
                                get isSmallSize() { return "small" === this.size }
                                get isLargeSize() { return "large" === this.size }
                                ngOnChanges(t) { t.seconds && !this.seconds && this.model && !Fe(this.model.second) && (this.model.second = 0, this.propagateModelChange(!1)) }
                                propagateModelChange(t = !0) { t && this.onTouched(), this.model.isValid(this.seconds) ? this.onChange(this._ngbTimeAdapter.toModel({ hour: this.model.hour, minute: this.model.minute, second: this.model.second })) : this.onChange(this._ngbTimeAdapter.toModel(null)) } }; return t.\u0275fac = function(e) { return new(e || t)(r.Mb(wr), r.Mb(Cr), r.Mb(r.h), r.Mb(xr)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-timepicker"]
                                ], inputs: { meridian: "meridian", spinners: "spinners", seconds: "seconds", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", readonlyInputs: "readonlyInputs", size: "size" }, features: [r.yb([Tr]), r.xb], decls: 18, vars: 25, consts: [
                                    [3, "disabled"],
                                    [1, "ngb-tp"],
                                    [1, "ngb-tp-input-container", "ngb-tp-hour"],
                                    ["tabindex", "-1", "type", "button", "class", "btn btn-link", 3, "btn-sm", "btn-lg", "disabled", "click", 4, "ngIf"],
                                    ["type", "text", "maxlength", "2", "inputmode", "numeric", 1, "ngb-tp-input", "form-control", 3, "value", "readOnly", "disabled", "change", "input", "keydown.ArrowUp", "keydown.ArrowDown", 6, "placeholder", "aria-label"],
                                    [1, "ngb-tp-spacer"],
                                    [1, "ngb-tp-input-container", "ngb-tp-minute"],
                                    ["class", "ngb-tp-spacer", 4, "ngIf"],
                                    ["class", "ngb-tp-input-container ngb-tp-second", 4, "ngIf"],
                                    ["class", "ngb-tp-meridian", 4, "ngIf"],
                                    ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "disabled", "click"],
                                    [1, "chevron", "ngb-tp-chevron"],
                                    [1, "sr-only"],
                                    [1, "chevron", "ngb-tp-chevron", "bottom"],
                                    [1, "ngb-tp-input-container", "ngb-tp-second"],
                                    [1, "ngb-tp-meridian"],
                                    ["type", "button", 1, "btn", "btn-outline-primary", 3, "disabled", "click"],
                                    [4, "ngIf", "ngIfElse"],
                                    ["am", ""]
                                ], template: function(t, e) { 1 & t && (r.Rb(0, "fieldset", 0), r.Rb(1, "div", 1), r.Rb(2, "div", 2), r.Ac(3, pe, 4, 7, "button", 3), r.Rb(4, "input", 4), r.Xb(5, le), r.dc("change", (function(t) { return e.updateHour(t.target.value) }))("input", (function(t) { return e.formatInput(t.target) }))("keydown.ArrowUp", (function(t) { return e.changeHour(e.hourStep), t.preventDefault() }))("keydown.ArrowDown", (function(t) { return e.changeHour(0 - e.hourStep), t.preventDefault() })), r.Qb(), r.Ac(6, me, 4, 7, "button", 3), r.Qb(), r.Rb(7, "div", 5), r.Cc(8, ":"), r.Qb(), r.Rb(9, "div", 6), r.Ac(10, ge, 4, 7, "button", 3), r.Rb(11, "input", 4), r.Xb(12, ce), r.dc("change", (function(t) { return e.updateMinute(t.target.value) }))("input", (function(t) { return e.formatInput(t.target) }))("keydown.ArrowUp", (function(t) { return e.changeMinute(e.minuteStep), t.preventDefault() }))("keydown.ArrowDown", (function(t) { return e.changeMinute(0 - e.minuteStep), t.preventDefault() })), r.Qb(), r.Ac(13, be, 4, 7, "button", 3), r.Qb(), r.Ac(14, ye, 2, 0, "div", 7), r.Ac(15, ke, 5, 9, "div", 8), r.Ac(16, Oe, 1, 0, "div", 7), r.Ac(17, Ie, 5, 9, "div", 9), r.Qb(), r.Qb()), 2 & t && (r.Eb("disabled", e.disabled), r.lc("disabled", e.disabled), r.zb(3), r.lc("ngIf", e.spinners), r.zb(1), r.Eb("form-control-sm", e.isSmallSize)("form-control-lg", e.isLargeSize), r.lc("value", e.formatHour(null == e.model ? null : e.model.hour))("readOnly", e.readonlyInputs)("disabled", e.disabled), r.zb(2), r.lc("ngIf", e.spinners), r.zb(4), r.lc("ngIf", e.spinners), r.zb(1), r.Eb("form-control-sm", e.isSmallSize)("form-control-lg", e.isLargeSize), r.lc("value", e.formatMinSec(null == e.model ? null : e.model.minute))("readOnly", e.readonlyInputs)("disabled", e.disabled), r.zb(2), r.lc("ngIf", e.spinners), r.zb(1), r.lc("ngIf", e.seconds), r.zb(1), r.lc("ngIf", e.seconds), r.zb(1), r.lc("ngIf", e.meridian), r.zb(1), r.lc("ngIf", e.meridian)) }, directives: [s.k], styles: ['ngb-timepicker{font-size:1rem}.ngb-tp{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron::before{border-style:solid;border-width:.29em .29em 0 0;content:"";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-meridian,.ngb-tp-minute,.ngb-tp-second{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}'], encapsulation: 2 }), t })(),
                        Ir = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(),
                        Ar = (() => { let t = class { constructor() { this.autohide = !0, this.delay = 500, this.ariaLive = "polite" } }; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = Object(r.Ib)({ factory: function() { return new t }, token: t, providedIn: "root" }), t })(),
                        Rr = (() => { let t = class {}; return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["", "ngbToastHeader", ""]
                                ] }), t })(),
                        jr = (() => { let t = class { constructor(t, e) { this.ariaLive = t, this.contentHeaderTpl = null, this.hideOutput = new r.n, null == this.ariaLive && (this.ariaLive = e.ariaLive), this.delay = e.delay, this.autohide = e.autohide }
                                ngAfterContentInit() { this._init() }
                                ngOnChanges(t) { "autohide" in t && (this._clearTimeout(), this._init()) }
                                hide() { this._clearTimeout(), this.hideOutput.emit() }
                                _init() { this.autohide && !this._timeoutID && (this._timeoutID = setTimeout(() => this.hide(), this.delay)) }
                                _clearTimeout() { this._timeoutID && (clearTimeout(this._timeoutID), this._timeoutID = null) } }; return t.\u0275fac = function(e) { return new(e || t)(r.ac("aria-live"), r.Mb(Ar)) }, t.\u0275cmp = r.Gb({ type: t, selectors: [
                                    ["ngb-toast"]
                                ], contentQueries: function(t, e, n) { var s;
                                    1 & t && r.xc(n, Rr, !0, r.K), 2 & t && r.sc(s = r.ec()) && (e.contentHeaderTpl = s.first) }, hostAttrs: ["role", "alert", "aria-atomic", "true"], hostVars: 5, hostBindings: function(t, e) { 2 & t && (r.Ab("aria-live", e.ariaLive), r.Eb("toast", !0)("show", !0)) }, inputs: { delay: "delay", autohide: "autohide", header: "header" }, outputs: { hideOutput: "hide" }, exportAs: ["ngbToast"], features: [r.xb], ngContentSelectors: z, decls: 5, vars: 1, consts: [
                                    ["headerTpl", ""],
                                    [3, "ngIf"],
                                    [1, "toast-body"],
                                    [1, "mr-auto"],
                                    [1, "toast-header"],
                                    [3, "ngTemplateOutlet"],
                                    ["type", "button", 1, "close", 3, "click", 6, "aria-label"],
                                    ["aria-hidden", "true"]
                                ], template: function(t, e) { 1 & t && (r.kc(), r.Ac(0, Ae, 2, 1, "ng-template", null, 0, r.Bc), r.Ac(2, Ne, 6, 1, "ng-template", 1), r.Rb(3, "div", 2), r.jc(4), r.Qb()), 2 & t && (r.zb(2), r.lc("ngIf", e.contentHeaderTpl || e.header)) }, directives: [s.k, s.l], styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"], encapsulation: 2 }), t })(),
                        Nr = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(),
                        Pr = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) } }), t })(),
                        Mr = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                    [s.b]
                                ] }), t })(); const Vr = [ze, Be, qe, Qe, We, Fn, Ln, Jn, Xn, ar, lr, hr, dr, Ir, Nr, Pr, Mr, _r]; let Fr = (() => { let t = class {}; return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, imports: [Vr, ze, Be, qe, Qe, We, Fn, Ln, Jn, Xn, ar, lr, hr, dr, Ir, Nr, Pr, Mr, _r] }), t })(); const Lr = r.Tb(Ye),
                        Ur = r.Tb(dn),
                        Hr = r.Tb(An),
                        $r = r.Tb(Rn),
                        zr = r.Tb(Er) }, "2QA8": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return r })); const r = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())() }, "2Vo4": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return i })); var r = n("XNiG"),
                        s = n("9ppp");
                    class i extends r.a { constructor(t) { super(), this._value = t }
                        get value() { return this.getValue() }
                        _subscribe(t) { const e = super._subscribe(t); return e && !e.closed && t.next(this._value), e }
                        getValue() { if (this.hasError) throw this.thrownError; if (this.closed) throw new s.a; return this._value }
                        next(t) { super.next(this._value = t) } } }, "2fFW": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return s })); let r = !1; const s = { Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) { if (t) { const t = new Error;
                                console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack) } else r && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                            r = t }, get useDeprecatedSynchronousErrorHandling() { return r } } }, "3Pt+": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return f })), n.d(e, "b", (function() { return g })), n.d(e, "c", (function() { return At })), n.d(e, "d", (function() { return dt })), n.d(e, "e", (function() { return Ot })), n.d(e, "f", (function() { return ft })), n.d(e, "g", (function() { return vt })), n.d(e, "h", (function() { return Rt })), n.d(e, "i", (function() { return k })), n.d(e, "j", (function() { return h })), n.d(e, "k", (function() { return C })), n.d(e, "l", (function() { return E })), n.d(e, "m", (function() { return G })), n.d(e, "n", (function() { return jt })), n.d(e, "o", (function() { return Dt })), n.d(e, "p", (function() { return W })), n.d(e, "q", (function() { return D })), n.d(e, "r", (function() { return X })), n.d(e, "s", (function() { return bt })); var r = n("fXoL"),
                        s = n("ofXK"),
                        i = n("HDdC"),
                        o = n("DH7j"),
                        a = n("lJxs"),
                        l = n("XoHu"),
                        c = n("Cfvw");

                    function u(t, e) { return new i.a(n => { const r = t.length; if (0 === r) return void n.complete(); const s = new Array(r); let i = 0,
                                o = 0; for (let a = 0; a < r; a++) { const l = Object(c.a)(t[a]); let u = !1;
                                n.add(l.subscribe({ next: t => { u || (u = !0, o++), s[a] = t }, error: t => n.error(t), complete: () => { i++, i !== r && u || (o === r && n.next(e ? e.reduce((t, e, n) => (t[e] = s[n], t), {}) : s), n.complete()) } })) } }) } const h = new r.q("NgValueAccessor"),
                        d = { provide: h, useExisting: Object(r.S)(() => f), multi: !0 }; let f = (() => { class t { constructor(t, e) { this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {} }
                            writeValue(t) { this._renderer.setProperty(this._elementRef.nativeElement, "checked", t) }
                            registerOnChange(t) { this.onChange = t }
                            registerOnTouched(t) { this.onTouched = t }
                            setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.D), r.Mb(r.l)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                ["input", "type", "checkbox", "formControlName", ""],
                                ["input", "type", "checkbox", "formControl", ""],
                                ["input", "type", "checkbox", "ngModel", ""]
                            ], hostBindings: function(t, e) { 1 & t && r.dc("change", (function(t) { return e.onChange(t.target.checked) }))("blur", (function() { return e.onTouched() })) }, features: [r.yb([d])] }), t })(); const p = { provide: h, useExisting: Object(r.S)(() => g), multi: !0 },
                        m = new r.q("CompositionEventMode"); let g = (() => { class t { constructor(t, e, n) { this._renderer = t, this._elementRef = e, this._compositionMode = n, this.onChange = t => {}, this.onTouched = () => {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = ! function() { const t = Object(s.y)() ? Object(s.y)().getUserAgent() : ""; return /android (\d+)/.test(t.toLowerCase()) }()) }
                                writeValue(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t) }
                                registerOnChange(t) { this.onChange = t }
                                registerOnTouched(t) { this.onTouched = t }
                                setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }
                                _handleInput(t) {
                                    (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t) }
                                _compositionStart() { this._composing = !0 }
                                _compositionEnd(t) { this._composing = !1, this._compositionMode && this.onChange(t) } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.D), r.Mb(r.l), r.Mb(m, 8)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["input", "formControlName", "", 3, "type", "checkbox"],
                                    ["textarea", "formControlName", ""],
                                    ["input", "formControl", "", 3, "type", "checkbox"],
                                    ["textarea", "formControl", ""],
                                    ["input", "ngModel", "", 3, "type", "checkbox"],
                                    ["textarea", "ngModel", ""],
                                    ["", "ngDefaultControl", ""]
                                ], hostBindings: function(t, e) { 1 & t && r.dc("input", (function(t) { return e._handleInput(t.target.value) }))("blur", (function() { return e.onTouched() }))("compositionstart", (function() { return e._compositionStart() }))("compositionend", (function(t) { return e._compositionEnd(t.target.value) })) }, features: [r.yb([p])] }), t })(),
                        b = (() => { class t { get value() { return this.control ? this.control.value : null }
                                get valid() { return this.control ? this.control.valid : null }
                                get invalid() { return this.control ? this.control.invalid : null }
                                get pending() { return this.control ? this.control.pending : null }
                                get disabled() { return this.control ? this.control.disabled : null }
                                get enabled() { return this.control ? this.control.enabled : null }
                                get errors() { return this.control ? this.control.errors : null }
                                get pristine() { return this.control ? this.control.pristine : null }
                                get dirty() { return this.control ? this.control.dirty : null }
                                get touched() { return this.control ? this.control.touched : null }
                                get status() { return this.control ? this.control.status : null }
                                get untouched() { return this.control ? this.control.untouched : null }
                                get statusChanges() { return this.control ? this.control.statusChanges : null }
                                get valueChanges() { return this.control ? this.control.valueChanges : null }
                                get path() { return null }
                                reset(t) { this.control && this.control.reset(t) }
                                hasError(t, e) { return !!this.control && this.control.hasError(t, e) }
                                getError(t, e) { return this.control ? this.control.getError(t, e) : null } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275dir = r.Hb({ type: t }), t })(),
                        y = (() => { class t extends b {get formDirective() { return null }
                                get path() { return null } } return t.\u0275fac = function(e) { return _(e || t) }, t.\u0275dir = r.Hb({ type: t, features: [r.wb] }), t })(); const _ = r.Tb(y);

                    function v() { throw new Error("unimplemented") }
                    class w extends b { constructor() { super(...arguments), this._parent = null, this.name = null, this.valueAccessor = null, this._rawValidators = [], this._rawAsyncValidators = [] }
                        get validator() { return v() }
                        get asyncValidator() { return v() } }
                    class S { constructor(t) { this._cd = t }
                        get ngClassUntouched() { return !!this._cd.control && this._cd.control.untouched }
                        get ngClassTouched() { return !!this._cd.control && this._cd.control.touched }
                        get ngClassPristine() { return !!this._cd.control && this._cd.control.pristine }
                        get ngClassDirty() { return !!this._cd.control && this._cd.control.dirty }
                        get ngClassValid() { return !!this._cd.control && this._cd.control.valid }
                        get ngClassInvalid() { return !!this._cd.control && this._cd.control.invalid }
                        get ngClassPending() { return !!this._cd.control && this._cd.control.pending } } let C = (() => { class t extends S { constructor(t) { super(t) } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(w, 2)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["", "formControlName", ""],
                                    ["", "ngModel", ""],
                                    ["", "formControl", ""]
                                ], hostVars: 14, hostBindings: function(t, e) { 2 & t && r.Eb("ng-untouched", e.ngClassUntouched)("ng-touched", e.ngClassTouched)("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)("ng-valid", e.ngClassValid)("ng-invalid", e.ngClassInvalid)("ng-pending", e.ngClassPending) }, features: [r.wb] }), t })(),
                        E = (() => { class t extends S { constructor(t) { super(t) } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(y, 2)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["", "formGroupName", ""],
                                    ["", "formArrayName", ""],
                                    ["", "ngModelGroup", ""],
                                    ["", "formGroup", ""],
                                    ["form", 3, "ngNoForm", ""],
                                    ["", "ngForm", ""]
                                ], hostVars: 14, hostBindings: function(t, e) { 2 & t && r.Eb("ng-untouched", e.ngClassUntouched)("ng-touched", e.ngClassTouched)("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)("ng-valid", e.ngClassValid)("ng-invalid", e.ngClassInvalid)("ng-pending", e.ngClassPending) }, features: [r.wb] }), t })();

                    function x(t) { return null == t || 0 === t.length } const k = new r.q("NgValidators"),
                        O = new r.q("NgAsyncValidators"),
                        T = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                    class D { static min(t) { return e => { if (x(e.value) || x(t)) return null; const n = parseFloat(e.value); return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null } }
                        static max(t) { return e => { if (x(e.value) || x(t)) return null; const n = parseFloat(e.value); return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null } }
                        static required(t) { return x(t.value) ? { required: !0 } : null }
                        static requiredTrue(t) { return !0 === t.value ? null : { required: !0 } }
                        static email(t) { return x(t.value) || T.test(t.value) ? null : { email: !0 } }
                        static minLength(t) { return e => { if (x(e.value)) return null; const n = e.value ? e.value.length : 0; return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null } }
                        static maxLength(t) { return e => { const n = e.value ? e.value.length : 0; return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null } }
                        static pattern(t) { if (!t) return D.nullValidator; let e, n; return "string" == typeof t ? (n = "", "^" !== t.charAt(0) && (n += "^"), n += t, "$" !== t.charAt(t.length - 1) && (n += "$"), e = new RegExp(n)) : (n = t.toString(), e = t), t => { if (x(t.value)) return null; const r = t.value; return e.test(r) ? null : { pattern: { requiredPattern: n, actualValue: r } } } }
                        static nullValidator(t) { return null }
                        static compose(t) { if (!t) return null; const e = t.filter(I); return 0 == e.length ? null : function(t) { return R(function(t, e) { return e.map(e => e(t)) }(t, e)) } }
                        static composeAsync(t) { if (!t) return null; const e = t.filter(I); return 0 == e.length ? null : function(t) { return function(...t) { if (1 === t.length) { const e = t[0]; if (Object(o.a)(e)) return u(e, null); if (Object(l.a)(e) && Object.getPrototypeOf(e) === Object.prototype) { const t = Object.keys(e); return u(t.map(t => e[t]), t) } } if ("function" == typeof t[t.length - 1]) { const e = t.pop(); return u(t = 1 === t.length && Object(o.a)(t[0]) ? t[0] : t, null).pipe(Object(a.a)(t => e(...t))) } return u(t, null) }(function(t, e) { return e.map(e => e(t)) }(t, e).map(A)).pipe(Object(a.a)(R)) } } }

                    function I(t) { return null != t }

                    function A(t) { const e = Object(r.qb)(t) ? Object(c.a)(t) : t; if (!Object(r.pb)(e)) throw new Error("Expected validator to return Promise or Observable."); return e }

                    function R(t) { let e = {}; return t.forEach(t => { e = null != t ? Object.assign(Object.assign({}, e), t) : e }), 0 === Object.keys(e).length ? null : e }

                    function j(t) { return t.validate ? e => t.validate(e) : t }

                    function N(t) { return t.validate ? e => t.validate(e) : t } const P = { provide: h, useExisting: Object(r.S)(() => M), multi: !0 }; let M = (() => { class t { constructor(t, e) { this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {} }
                            writeValue(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t) }
                            registerOnChange(t) { this.onChange = e => { t("" == e ? null : parseFloat(e)) } }
                            registerOnTouched(t) { this.onTouched = t }
                            setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.D), r.Mb(r.l)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                ["input", "type", "number", "formControlName", ""],
                                ["input", "type", "number", "formControl", ""],
                                ["input", "type", "number", "ngModel", ""]
                            ], hostBindings: function(t, e) { 1 & t && r.dc("change", (function(t) { return e.onChange(t.target.value) }))("input", (function(t) { return e.onChange(t.target.value) }))("blur", (function() { return e.onTouched() })) }, features: [r.yb([P])] }), t })(); const V = { provide: h, useExisting: Object(r.S)(() => L), multi: !0 }; let F = (() => { class t { constructor() { this._accessors = [] }
                                add(t, e) { this._accessors.push([t, e]) }
                                remove(t) { for (let e = this._accessors.length - 1; e >= 0; --e)
                                        if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1) }
                                select(t) { this._accessors.forEach(e => { this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value) }) }
                                _isSameGroup(t, e) { return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = r.Ib({ token: t, factory: t.\u0275fac }), t })(),
                        L = (() => { class t { constructor(t, e, n, r) { this._renderer = t, this._elementRef = e, this._registry = n, this._injector = r, this.onChange = () => {}, this.onTouched = () => {} }
                                ngOnInit() { this._control = this._injector.get(w), this._checkName(), this._registry.add(this._control, this) }
                                ngOnDestroy() { this._registry.remove(this) }
                                writeValue(t) { this._state = t === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state) }
                                registerOnChange(t) { this._fn = t, this.onChange = () => { t(this.value), this._registry.select(this) } }
                                fireUncheck(t) { this.writeValue(t) }
                                registerOnTouched(t) { this.onTouched = t }
                                setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }
                                _checkName() { this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName) }
                                _throwNameError() { throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ') } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.D), r.Mb(r.l), r.Mb(F), r.Mb(r.r)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["input", "type", "radio", "formControlName", ""],
                                    ["input", "type", "radio", "formControl", ""],
                                    ["input", "type", "radio", "ngModel", ""]
                                ], hostBindings: function(t, e) { 1 & t && r.dc("change", (function() { return e.onChange() }))("blur", (function() { return e.onTouched() })) }, inputs: { name: "name", formControlName: "formControlName", value: "value" }, features: [r.yb([V])] }), t })(); const U = { provide: h, useExisting: Object(r.S)(() => H), multi: !0 }; let H = (() => { class t { constructor(t, e) { this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {} }
                            writeValue(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t)) }
                            registerOnChange(t) { this.onChange = e => { t("" == e ? null : parseFloat(e)) } }
                            registerOnTouched(t) { this.onTouched = t }
                            setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.D), r.Mb(r.l)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                ["input", "type", "range", "formControlName", ""],
                                ["input", "type", "range", "formControl", ""],
                                ["input", "type", "range", "ngModel", ""]
                            ], hostBindings: function(t, e) { 1 & t && r.dc("change", (function(t) { return e.onChange(t.target.value) }))("input", (function(t) { return e.onChange(t.target.value) }))("blur", (function() { return e.onTouched() })) }, features: [r.yb([U])] }), t })(); const $ = '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
                        z = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });';
                    class B { static controlParentException() { throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${$}`) }
                        static ngModelGroupException() { throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${z}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>`) }
                        static missingFormException() { throw new Error(`formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ${$}`) }
                        static groupParentException() { throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${z}`) }
                        static arrayParentException() { throw new Error('formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });') }
                        static disabledAttrWarning() { console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ") }
                        static ngModelWarning(t) { console.warn(`\n    It looks like you're using ngModel on the same form field as ${t}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${"formControl"===t?"FormControlDirective":"FormControlName"}#use-with-ngmodel\n    `) } } const q = { provide: h, useExisting: Object(r.S)(() => W), multi: !0 };

                    function Q(t, e) { return null == t ? `${e}` : (e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50)) } let W = (() => { class t { constructor(t, e) { this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = r.rb }
                                set compareWith(t) { if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
                                    this._compareWith = t }
                                writeValue(t) { this.value = t; const e = this._getOptionId(t);
                                    null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1); const n = Q(e, t);
                                    this._renderer.setProperty(this._elementRef.nativeElement, "value", n) }
                                registerOnChange(t) { this.onChange = e => { this.value = this._getOptionValue(e), t(this.value) } }
                                registerOnTouched(t) { this.onTouched = t }
                                setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }
                                _registerOption() { return (this._idCounter++).toString() }
                                _getOptionId(t) { for (const e of Array.from(this._optionMap.keys()))
                                        if (this._compareWith(this._optionMap.get(e), t)) return e;
                                    return null }
                                _getOptionValue(t) { const e = function(t) { return t.split(":")[0] }(t); return this._optionMap.has(e) ? this._optionMap.get(e) : t } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.D), r.Mb(r.l)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["select", "formControlName", "", 3, "multiple", ""],
                                    ["select", "formControl", "", 3, "multiple", ""],
                                    ["select", "ngModel", "", 3, "multiple", ""]
                                ], hostBindings: function(t, e) { 1 & t && r.dc("change", (function(t) { return e.onChange(t.target.value) }))("blur", (function() { return e.onTouched() })) }, inputs: { compareWith: "compareWith" }, features: [r.yb([q])] }), t })(),
                        G = (() => { class t { constructor(t, e, n) { this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption()) }
                                set ngValue(t) { null != this._select && (this._select._optionMap.set(this.id, t), this._setElementValue(Q(this.id, t)), this._select.writeValue(this._select.value)) }
                                set value(t) { this._setElementValue(t), this._select && this._select.writeValue(this._select.value) }
                                _setElementValue(t) { this._renderer.setProperty(this._element.nativeElement, "value", t) }
                                ngOnDestroy() { this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value)) } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.l), r.Mb(r.D), r.Mb(W, 9)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["option"]
                                ], inputs: { ngValue: "ngValue", value: "value" } }), t })(); const Z = { provide: h, useExisting: Object(r.S)(() => J), multi: !0 };

                    function K(t, e) { return null == t ? `${e}` : ("string" == typeof e && (e = `'${e}'`), e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50)) } let J = (() => { class t { constructor(t, e) { this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = r.rb }
                                set compareWith(t) { if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
                                    this._compareWith = t }
                                writeValue(t) { let e; if (this.value = t, Array.isArray(t)) { const n = t.map(t => this._getOptionId(t));
                                        e = (t, e) => { t._setSelected(n.indexOf(e.toString()) > -1) } } else e = (t, e) => { t._setSelected(!1) };
                                    this._optionMap.forEach(e) }
                                registerOnChange(t) { this.onChange = e => { const n = []; if (e.hasOwnProperty("selectedOptions")) { const t = e.selectedOptions; for (let e = 0; e < t.length; e++) { const r = t.item(e),
                                                    s = this._getOptionValue(r.value);
                                                n.push(s) } } else { const t = e.options; for (let e = 0; e < t.length; e++) { const r = t.item(e); if (r.selected) { const t = this._getOptionValue(r.value);
                                                    n.push(t) } } }
                                        this.value = n, t(n) } }
                                registerOnTouched(t) { this.onTouched = t }
                                setDisabledState(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }
                                _registerOption(t) { const e = (this._idCounter++).toString(); return this._optionMap.set(e, t), e }
                                _getOptionId(t) { for (const e of Array.from(this._optionMap.keys()))
                                        if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
                                    return null }
                                _getOptionValue(t) { const e = function(t) { return t.split(":")[0] }(t); return this._optionMap.has(e) ? this._optionMap.get(e)._value : t } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.D), r.Mb(r.l)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["select", "multiple", "", "formControlName", ""],
                                    ["select", "multiple", "", "formControl", ""],
                                    ["select", "multiple", "", "ngModel", ""]
                                ], hostBindings: function(t, e) { 1 & t && r.dc("change", (function(t) { return e.onChange(t.target) }))("blur", (function() { return e.onTouched() })) }, inputs: { compareWith: "compareWith" }, features: [r.yb([Z])] }), t })(),
                        X = (() => { class t { constructor(t, e, n) { this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption(this)) }
                                set ngValue(t) { null != this._select && (this._value = t, this._setElementValue(K(this.id, t)), this._select.writeValue(this._select.value)) }
                                set value(t) { this._select ? (this._value = t, this._setElementValue(K(this.id, t)), this._select.writeValue(this._select.value)) : this._setElementValue(t) }
                                _setElementValue(t) { this._renderer.setProperty(this._element.nativeElement, "value", t) }
                                _setSelected(t) { this._renderer.setProperty(this._element.nativeElement, "selected", t) }
                                ngOnDestroy() { this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value)) } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(r.l), r.Mb(r.D), r.Mb(J, 9)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["option"]
                                ], inputs: { ngValue: "ngValue", value: "value" } }), t })();

                    function Y(t, e) { return [...e.path, t] }

                    function tt(t, e) { t || st(e, "Cannot find control with"), e.valueAccessor || st(e, "No value accessor for form control with"), t.validator = D.compose([t.validator, e.validator]), t.asyncValidator = D.composeAsync([t.asyncValidator, e.asyncValidator]), e.valueAccessor.writeValue(t.value),
                            function(t, e) { e.valueAccessor.registerOnChange(n => { t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && et(t, e) }) }(t, e),
                            function(t, e) { t.registerOnChange((t, n) => { e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t) }) }(t, e),
                            function(t, e) { e.valueAccessor.registerOnTouched(() => { t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && et(t, e), "submit" !== t.updateOn && t.markAsTouched() }) }(t, e), e.valueAccessor.setDisabledState && t.registerOnDisabledChange(t => { e.valueAccessor.setDisabledState(t) }), e._rawValidators.forEach(e => { e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity()) }), e._rawAsyncValidators.forEach(e => { e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity()) }) }

                    function et(t, e) { t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, { emitModelToViewChange: !1 }), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1 }

                    function nt(t, e) { null == t && st(e, "Cannot find control with"), t.validator = D.compose([t.validator, e.validator]), t.asyncValidator = D.composeAsync([t.asyncValidator, e.asyncValidator]) }

                    function rt(t) { return st(t, "There is no FormControl instance attached to form control element with") }

                    function st(t, e) { let n; throw n = t.path.length > 1 ? `path: '${t.path.join(" -> ")}'` : t.path[0] ? `name: '${t.path}'` : "unspecified name attribute", new Error(`${e} ${n}`) }

                    function it(t) { return null != t ? D.compose(t.map(j)) : null }

                    function ot(t) { return null != t ? D.composeAsync(t.map(N)) : null } const at = [f, H, M, W, J, L];

                    function lt(t) { const e = ut(t) ? t.validators : t; return Array.isArray(e) ? it(e) : e || null }

                    function ct(t, e) { const n = ut(e) ? e.asyncValidators : t; return Array.isArray(n) ? ot(n) : n || null }

                    function ut(t) { return null != t && !Array.isArray(t) && "object" == typeof t }
                    class ht { constructor(t, e) { this.validator = t, this.asyncValidator = e, this._onCollectionChange = () => {}, this.pristine = !0, this.touched = !1, this._onDisabledChange = [] }
                        get parent() { return this._parent }
                        get valid() { return "VALID" === this.status }
                        get invalid() { return "INVALID" === this.status }
                        get pending() { return "PENDING" == this.status }
                        get disabled() { return "DISABLED" === this.status }
                        get enabled() { return "DISABLED" !== this.status }
                        get dirty() { return !this.pristine }
                        get untouched() { return !this.touched }
                        get updateOn() { return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change" }
                        setValidators(t) { this.validator = lt(t) }
                        setAsyncValidators(t) { this.asyncValidator = ct(t) }
                        clearValidators() { this.validator = null }
                        clearAsyncValidators() { this.asyncValidator = null }
                        markAsTouched(t = {}) { this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t) }
                        markAllAsTouched() { this.markAsTouched({ onlySelf: !0 }), this._forEachChild(t => t.markAllAsTouched()) }
                        markAsUntouched(t = {}) { this.touched = !1, this._pendingTouched = !1, this._forEachChild(t => { t.markAsUntouched({ onlySelf: !0 }) }), this._parent && !t.onlySelf && this._parent._updateTouched(t) }
                        markAsDirty(t = {}) { this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t) }
                        markAsPristine(t = {}) { this.pristine = !0, this._pendingDirty = !1, this._forEachChild(t => { t.markAsPristine({ onlySelf: !0 }) }), this._parent && !t.onlySelf && this._parent._updatePristine(t) }
                        markAsPending(t = {}) { this.status = "PENDING", !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t) }
                        disable(t = {}) { const e = this._parentMarkedDirty(t.onlySelf);
                            this.status = "DISABLED", this.errors = null, this._forEachChild(e => { e.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 })) }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Object.assign(Object.assign({}, t), { skipPristineCheck: e })), this._onDisabledChange.forEach(t => t(!0)) }
                        enable(t = {}) { const e = this._parentMarkedDirty(t.onlySelf);
                            this.status = "VALID", this._forEachChild(e => { e.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 })) }), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }), this._updateAncestors(Object.assign(Object.assign({}, t), { skipPristineCheck: e })), this._onDisabledChange.forEach(t => t(!1)) }
                        _updateAncestors(t) { this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched()) }
                        setParent(t) { this._parent = t }
                        updateValueAndValidity(t = {}) { this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t) }
                        _updateTreeValidity(t = { emitEvent: !0 }) { this._forEachChild(e => e._updateTreeValidity(t)), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }) }
                        _setInitialStatus() { this.status = this._allControlsDisabled() ? "DISABLED" : "VALID" }
                        _runValidator() { return this.validator ? this.validator(this) : null }
                        _runAsyncValidator(t) { if (this.asyncValidator) { this.status = "PENDING"; const e = A(this.asyncValidator(this));
                                this._asyncValidationSubscription = e.subscribe(e => this.setErrors(e, { emitEvent: t })) } }
                        _cancelExistingSubscription() { this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe() }
                        setErrors(t, e = {}) { this.errors = t, this._updateControlsErrors(!1 !== e.emitEvent) }
                        get(t) { return function(t, e, n) { if (null == e) return null; if (Array.isArray(e) || (e = e.split(".")), Array.isArray(e) && 0 === e.length) return null; let r = t; return e.forEach(t => { r = r instanceof ft ? r.controls.hasOwnProperty(t) ? r.controls[t] : null : r instanceof pt && r.at(t) || null }), r }(this, t) }
                        getError(t, e) { const n = e ? this.get(e) : this; return n && n.errors ? n.errors[t] : null }
                        hasError(t, e) { return !!this.getError(t, e) }
                        get root() { let t = this; for (; t._parent;) t = t._parent; return t }
                        _updateControlsErrors(t) { this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t) }
                        _initObservables() { this.valueChanges = new r.n, this.statusChanges = new r.n }
                        _calculateStatus() { return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID" }
                        _anyControlsHaveStatus(t) { return this._anyControls(e => e.status === t) }
                        _anyControlsDirty() { return this._anyControls(t => t.dirty) }
                        _anyControlsTouched() { return this._anyControls(t => t.touched) }
                        _updatePristine(t = {}) { this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t) }
                        _updateTouched(t = {}) { this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t) }
                        _isBoxedValue(t) { return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t }
                        _registerOnCollectionChange(t) { this._onCollectionChange = t }
                        _setUpdateStrategy(t) { ut(t) && null != t.updateOn && (this._updateOn = t.updateOn) }
                        _parentMarkedDirty(t) { return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty() } }
                    class dt extends ht { constructor(t = null, e, n) { super(lt(e), ct(n, e)), this._onChange = [], this._applyFormState(t), this._setUpdateStrategy(e), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), this._initObservables() }
                        setValue(t, e = {}) { this.value = this._pendingValue = t, this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(t => t(this.value, !1 !== e.emitViewToModelChange)), this.updateValueAndValidity(e) }
                        patchValue(t, e = {}) { this.setValue(t, e) }
                        reset(t = null, e = {}) { this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1 }
                        _updateValue() {}
                        _anyControls(t) { return !1 }
                        _allControlsDisabled() { return this.disabled }
                        registerOnChange(t) { this._onChange.push(t) }
                        _clearChangeFns() { this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = () => {} }
                        registerOnDisabledChange(t) { this._onDisabledChange.push(t) }
                        _forEachChild(t) {}
                        _syncPendingControls() { return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)) }
                        _applyFormState(t) { this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 })) : this.value = this._pendingValue = t } }
                    class ft extends ht { constructor(t, e, n) { super(lt(e), ct(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }) }
                        registerControl(t, e) { return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e) }
                        addControl(t, e) { this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange() }
                        removeControl(t) { this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange() }
                        setControl(t, e) { this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange() }
                        contains(t) { return this.controls.hasOwnProperty(t) && this.controls[t].enabled }
                        setValue(t, e = {}) { this._checkAllValuesPresent(t), Object.keys(t).forEach(n => { this._throwIfControlMissing(n), this.controls[n].setValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e) }
                        patchValue(t, e = {}) { Object.keys(t).forEach(n => { this.controls[n] && this.controls[n].patchValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e) }
                        reset(t = {}, e = {}) { this._forEachChild((n, r) => { n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent }) }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e) }
                        getRawValue() { return this._reduceChildren({}, (t, e, n) => (t[n] = e instanceof dt ? e.value : e.getRawValue(), t)) }
                        _syncPendingControls() { let t = this._reduceChildren(!1, (t, e) => !!e._syncPendingControls() || t); return t && this.updateValueAndValidity({ onlySelf: !0 }), t }
                        _throwIfControlMissing(t) { if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "); if (!this.controls[t]) throw new Error(`Cannot find form control with name: ${t}.`) }
                        _forEachChild(t) { Object.keys(this.controls).forEach(e => t(this.controls[e], e)) }
                        _setUpControls() { this._forEachChild(t => { t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange) }) }
                        _updateValue() { this.value = this._reduceValue() }
                        _anyControls(t) { let e = !1; return this._forEachChild((n, r) => { e = e || this.contains(r) && t(n) }), e }
                        _reduceValue() { return this._reduceChildren({}, (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t)) }
                        _reduceChildren(t, e) { let n = t; return this._forEachChild((t, r) => { n = e(n, t, r) }), n }
                        _allControlsDisabled() { for (const t of Object.keys(this.controls))
                                if (this.controls[t].enabled) return !1;
                            return Object.keys(this.controls).length > 0 || this.disabled }
                        _checkAllValuesPresent(t) { this._forEachChild((e, n) => { if (void 0 === t[n]) throw new Error(`Must supply a value for form control with name: '${n}'.`) }) } }
                    class pt extends ht { constructor(t, e, n) { super(lt(e), ct(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }) }
                        at(t) { return this.controls[t] }
                        push(t) { this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange() }
                        insert(t, e) { this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity() }
                        removeAt(t) { this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), this.controls.splice(t, 1), this.updateValueAndValidity() }
                        setControl(t, e) { this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), this.controls.splice(t, 1), e && (this.controls.splice(t, 0, e), this._registerControl(e)), this.updateValueAndValidity(), this._onCollectionChange() }
                        get length() { return this.controls.length }
                        setValue(t, e = {}) { this._checkAllValuesPresent(t), t.forEach((t, n) => { this._throwIfControlMissing(n), this.at(n).setValue(t, { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e) }
                        patchValue(t, e = {}) { t.forEach((t, n) => { this.at(n) && this.at(n).patchValue(t, { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e) }
                        reset(t = [], e = {}) { this._forEachChild((n, r) => { n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent }) }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e) }
                        getRawValue() { return this.controls.map(t => t instanceof dt ? t.value : t.getRawValue()) }
                        clear() { this.controls.length < 1 || (this._forEachChild(t => t._registerOnCollectionChange(() => {})), this.controls.splice(0), this.updateValueAndValidity()) }
                        _syncPendingControls() { let t = this.controls.reduce((t, e) => !!e._syncPendingControls() || t, !1); return t && this.updateValueAndValidity({ onlySelf: !0 }), t }
                        _throwIfControlMissing(t) { if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "); if (!this.at(t)) throw new Error(`Cannot find form control at index ${t}`) }
                        _forEachChild(t) { this.controls.forEach((e, n) => { t(e, n) }) }
                        _updateValue() { this.value = this.controls.filter(t => t.enabled || this.disabled).map(t => t.value) }
                        _anyControls(t) { return this.controls.some(e => e.enabled && t(e)) }
                        _setUpControls() { this._forEachChild(t => this._registerControl(t)) }
                        _checkAllValuesPresent(t) { this._forEachChild((e, n) => { if (void 0 === t[n]) throw new Error(`Must supply a value for form control at index: ${n}.`) }) }
                        _allControlsDisabled() { for (const t of this.controls)
                                if (t.enabled) return !1;
                            return this.controls.length > 0 || this.disabled }
                        _registerControl(t) { t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange) } } let mt = (() => { class t extends y { ngOnInit() { this._checkParentType(), this.formDirective.addFormGroup(this) }
                            ngOnDestroy() { this.formDirective && this.formDirective.removeFormGroup(this) }
                            get control() { return this.formDirective.getFormGroup(this) }
                            get path() { return Y(null == this.name ? this.name : this.name.toString(), this._parent) }
                            get formDirective() { return this._parent ? this._parent.formDirective : null }
                            get validator() { return it(this._validators) }
                            get asyncValidator() { return ot(this._asyncValidators) }
                            _checkParentType() {} } return t.\u0275fac = function(e) { return gt(e || t) }, t.\u0275dir = r.Hb({ type: t, features: [r.wb] }), t })(); const gt = r.Tb(mt); let bt = (() => { class t {} return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]
                            ], hostAttrs: ["novalidate", ""] }), t })(); const yt = new r.q("NgModelWithFormControlWarning"),
                        _t = { provide: y, useExisting: Object(r.S)(() => vt) }; let vt = (() => { class t extends y { constructor(t, e) { super(), this._validators = t, this._asyncValidators = e, this.submitted = !1, this.directives = [], this.form = null, this.ngSubmit = new r.n }
                            ngOnChanges(t) { this._checkFormPresent(), t.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations()) }
                            get formDirective() { return this }
                            get control() { return this.form }
                            get path() { return [] }
                            addControl(t) { const e = this.form.get(t.path); return tt(e, t), e.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(t), e }
                            getControl(t) { return this.form.get(t.path) }
                            removeControl(t) {! function(t, e) { const n = t.indexOf(e);
                                    n > -1 && t.splice(n, 1) }(this.directives, t) }
                            addFormGroup(t) { const e = this.form.get(t.path);
                                nt(e, t), e.updateValueAndValidity({ emitEvent: !1 }) }
                            removeFormGroup(t) {}
                            getFormGroup(t) { return this.form.get(t.path) }
                            addFormArray(t) { const e = this.form.get(t.path);
                                nt(e, t), e.updateValueAndValidity({ emitEvent: !1 }) }
                            removeFormArray(t) {}
                            getFormArray(t) { return this.form.get(t.path) }
                            updateModel(t, e) { this.form.get(t.path).setValue(e) }
                            onSubmit(t) { return this.submitted = !0, e = this.directives, this.form._syncPendingControls(), e.forEach(t => { const e = t.control; "submit" === e.updateOn && e._pendingChange && (t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1) }), this.ngSubmit.emit(t), !1; var e }
                            onReset() { this.resetForm() }
                            resetForm(t) { this.form.reset(t), this.submitted = !1 }
                            _updateDomValue() { this.directives.forEach(t => { const e = this.form.get(t.path);
                                    t.control !== e && (function(t, e) { e.valueAccessor.registerOnChange(() => rt(e)), e.valueAccessor.registerOnTouched(() => rt(e)), e._rawValidators.forEach(t => { t.registerOnValidatorChange && t.registerOnValidatorChange(null) }), e._rawAsyncValidators.forEach(t => { t.registerOnValidatorChange && t.registerOnValidatorChange(null) }), t && t._clearChangeFns() }(t.control, t), e && tt(e, t), t.control = e) }), this.form._updateTreeValidity({ emitEvent: !1 }) }
                            _updateRegistrations() { this.form._registerOnCollectionChange(() => this._updateDomValue()), this._oldForm && this._oldForm._registerOnCollectionChange(() => {}), this._oldForm = this.form }
                            _updateValidators() { const t = it(this._validators);
                                this.form.validator = D.compose([this.form.validator, t]); const e = ot(this._asyncValidators);
                                this.form.asyncValidator = D.composeAsync([this.form.asyncValidator, e]) }
                            _checkFormPresent() { this.form || B.missingFormException() } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(k, 10), r.Mb(O, 10)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                ["", "formGroup", ""]
                            ], hostBindings: function(t, e) { 1 & t && r.dc("submit", (function(t) { return e.onSubmit(t) }))("reset", (function() { return e.onReset() })) }, inputs: { form: ["formGroup", "form"] }, outputs: { ngSubmit: "ngSubmit" }, exportAs: ["ngForm"], features: [r.yb([_t]), r.wb, r.xb] }), t })(); const wt = { provide: y, useExisting: Object(r.S)(() => St) }; let St = (() => { class t extends mt { constructor(t, e, n) { super(), this._parent = t, this._validators = e, this._asyncValidators = n }
                            _checkParentType() { xt(this._parent) && B.groupParentException() } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(y, 13), r.Mb(k, 10), r.Mb(O, 10)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                ["", "formGroupName", ""]
                            ], inputs: { name: ["formGroupName", "name"] }, features: [r.yb([wt]), r.wb] }), t })(); const Ct = { provide: y, useExisting: Object(r.S)(() => Et) }; let Et = (() => { class t extends y { constructor(t, e, n) { super(), this._parent = t, this._validators = e, this._asyncValidators = n }
                            ngOnInit() { this._checkParentType(), this.formDirective.addFormArray(this) }
                            ngOnDestroy() { this.formDirective && this.formDirective.removeFormArray(this) }
                            get control() { return this.formDirective.getFormArray(this) }
                            get formDirective() { return this._parent ? this._parent.formDirective : null }
                            get path() { return Y(null == this.name ? this.name : this.name.toString(), this._parent) }
                            get validator() { return it(this._validators) }
                            get asyncValidator() { return ot(this._asyncValidators) }
                            _checkParentType() { xt(this._parent) && B.arrayParentException() } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(y, 13), r.Mb(k, 10), r.Mb(O, 10)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                ["", "formArrayName", ""]
                            ], inputs: { name: ["formArrayName", "name"] }, features: [r.yb([Ct]), r.wb] }), t })();

                    function xt(t) { return !(t instanceof St || t instanceof vt || t instanceof Et) } const kt = { provide: w, useExisting: Object(r.S)(() => Ot) }; let Ot = (() => { class t extends w { constructor(t, e, n, s, i) { super(), this._ngModelWarningConfig = i, this._added = !1, this.update = new r.n, this._ngModelWarningSent = !1, this._parent = t, this._rawValidators = e || [], this._rawAsyncValidators = n || [], this.valueAccessor = function(t, e) { if (!e) return null;
                                    Array.isArray(e) || st(t, "Value accessor was not provided as an array for form control with"); let n = void 0,
                                        r = void 0,
                                        s = void 0; return e.forEach(e => { var i;
                                        e.constructor === g ? n = e : (i = e, at.some(t => i.constructor === t) ? (r && st(t, "More than one built-in value accessor matches form control with"), r = e) : (s && st(t, "More than one custom value accessor matches form control with"), s = e)) }), s || r || n || (st(t, "No valid value accessor for form control with"), null) }(this, s) }
                            set isDisabled(t) { B.disabledAttrWarning() }
                            ngOnChanges(e) { var n, s;
                                this._added || this._setUpControl(),
                                    function(t, e) { if (!t.hasOwnProperty("model")) return !1; const n = t.model; return !!n.isFirstChange() || !Object(r.rb)(e, n.currentValue) }(e, this.viewModel) && ("formControlName", n = t, this, s = this._ngModelWarningConfig, Object(r.T)() && "never" !== s && ((null !== s && "once" !== s || n._ngModelWarningSentOnce) && ("always" !== s || this._ngModelWarningSent) || (B.ngModelWarning("formControlName"), n._ngModelWarningSentOnce = !0, this._ngModelWarningSent = !0)), this.viewModel = this.model, this.formDirective.updateModel(this, this.model)) }
                            ngOnDestroy() { this.formDirective && this.formDirective.removeControl(this) }
                            viewToModelUpdate(t) { this.viewModel = t, this.update.emit(t) }
                            get path() { return Y(null == this.name ? this.name : this.name.toString(), this._parent) }
                            get formDirective() { return this._parent ? this._parent.formDirective : null }
                            get validator() { return it(this._rawValidators) }
                            get asyncValidator() { return ot(this._rawAsyncValidators) }
                            _checkParentType() {!(this._parent instanceof St) && this._parent instanceof mt ? B.ngModelGroupException() : this._parent instanceof St || this._parent instanceof vt || this._parent instanceof Et || B.controlParentException() }
                            _setUpControl() { this._checkParentType(), this.control = this.formDirective.addControl(this), this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0), this._added = !0 } } return t.\u0275fac = function(e) { return new(e || t)(r.Mb(y, 13), r.Mb(k, 10), r.Mb(O, 10), r.Mb(h, 10), r.Mb(yt, 8)) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                ["", "formControlName", ""]
                            ], inputs: { isDisabled: ["disabled", "isDisabled"], name: ["formControlName", "name"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, features: [r.yb([kt]), r.wb, r.xb] }), t._ngModelWarningSentOnce = !1, t })(); const Tt = { provide: k, useExisting: Object(r.S)(() => Dt), multi: !0 }; let Dt = (() => { class t { get required() { return this._required }
                                set required(t) { this._required = null != t && !1 !== t && "false" !== `${t}`, this._onChange && this._onChange() }
                                validate(t) { return this.required ? D.required(t) : null }
                                registerOnValidatorChange(t) { this._onChange = t } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275dir = r.Hb({ type: t, selectors: [
                                    ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
                                    ["", "required", "", "formControl", "", 3, "type", "checkbox"],
                                    ["", "required", "", "ngModel", "", 3, "type", "checkbox"]
                                ], hostVars: 1, hostBindings: function(t, e) { 2 & t && r.Ab("required", e.required ? "" : null) }, inputs: { required: "required" }, features: [r.yb([Tt])] }), t })(),
                        It = (() => { class t {} return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) } }), t })(),
                        At = (() => { class t { group(t, e = null) { const n = this._reduceControls(t); let r = null,
                                        s = null,
                                        i = void 0; return null != e && (function(t) { return void 0 !== t.asyncValidators || void 0 !== t.validators || void 0 !== t.updateOn }(e) ? (r = null != e.validators ? e.validators : null, s = null != e.asyncValidators ? e.asyncValidators : null, i = null != e.updateOn ? e.updateOn : void 0) : (r = null != e.validator ? e.validator : null, s = null != e.asyncValidator ? e.asyncValidator : null)), new ft(n, { asyncValidators: s, updateOn: i, validators: r }) }
                                control(t, e, n) { return new dt(t, e, n) }
                                array(t, e, n) { const r = t.map(t => this._createControl(t)); return new pt(r, e, n) }
                                _reduceControls(t) { const e = {}; return Object.keys(t).forEach(n => { e[n] = this._createControl(t[n]) }), e }
                                _createControl(t) { return t instanceof dt || t instanceof ft || t instanceof pt ? t : Array.isArray(t) ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null) : this.control(t) } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = r.Ib({ token: t, factory: t.\u0275fac }), t })(),
                        Rt = (() => { class t {} return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, providers: [F], imports: [It] }), t })(),
                        jt = (() => { class t { static withConfig(e) { return { ngModule: t, providers: [{ provide: yt, useValue: e.warnOnNgModelWithFormControl }] } } } return t.\u0275mod = r.Kb({ type: t }), t.\u0275inj = r.Jb({ factory: function(e) { return new(e || t) }, providers: [At, F], imports: [It] }), t })() }, "4I5i": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return r })); const r = (() => {
                        function t() { return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this } return t.prototype = Object.create(Error.prototype), t })() }, "5+tZ": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return l })); var r = n("ZUHj"),
                        s = n("l7GE"),
                        i = n("51Dv"),
                        o = n("lJxs"),
                        a = n("Cfvw");

                    function l(t, e, n = Number.POSITIVE_INFINITY) { return "function" == typeof e ? r => r.pipe(l((n, r) => Object(a.a)(t(n, r)).pipe(Object(o.a)((t, s) => e(n, t, r, s))), n)) : ("number" == typeof e && (n = e), e => e.lift(new c(t, n))) }
                    class c { constructor(t, e = Number.POSITIVE_INFINITY) { this.project = t, this.concurrent = e }
                        call(t, e) { return e.subscribe(new u(t, this.project, this.concurrent)) } }
                    class u extends s.a { constructor(t, e, n = Number.POSITIVE_INFINITY) { super(t), this.project = e, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0 }
                        _next(t) { this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t) }
                        _tryNext(t) { let e; const n = this.index++; try { e = this.project(t, n) } catch (r) { return void this.destination.error(r) }
                            this.active++, this._innerSub(e, t, n) }
                        _innerSub(t, e, n) { const s = new i.a(this, e, n),
                                o = this.destination;
                            o.add(s); const a = Object(r.a)(this, t, void 0, void 0, s);
                            a !== s && o.add(a) }
                        _complete() { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe() }
                        notifyNext(t, e, n, r, s) { this.destination.next(e) }
                        notifyComplete(t) { const e = this.buffer;
                            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete() } } }, "51Dv": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return s })); var r = n("7o/Q");
                    class s extends r.a { constructor(t, e, n) { super(), this.parent = t, this.outerValue = e, this.outerIndex = n, this.index = 0 }
                        _next(t) { this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this) }
                        _error(t) { this.parent.notifyError(t, this), this.unsubscribe() }
                        _complete() { this.parent.notifyComplete(this), this.unsubscribe() } } }, "7o/Q": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return c })); var r = n("n6bG"),
                        s = n("gRHU"),
                        i = n("quSY"),
                        o = n("2QA8"),
                        a = n("2fFW"),
                        l = n("NJ4a");
                    class c extends i.a { constructor(t, e, n) { switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                                case 0:
                                    this.destination = s.a; break;
                                case 1:
                                    if (!t) { this.destination = s.a; break } if ("object" == typeof t) { t instanceof c ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new u(this, t)); break }
                                default:
                                    this.syncErrorThrowable = !0, this.destination = new u(this, t, e, n) } }[o.a]() { return this }
                        static create(t, e, n) { const r = new c(t, e, n); return r.syncErrorThrowable = !1, r }
                        next(t) { this.isStopped || this._next(t) }
                        error(t) { this.isStopped || (this.isStopped = !0, this._error(t)) }
                        complete() { this.isStopped || (this.isStopped = !0, this._complete()) }
                        unsubscribe() { this.closed || (this.isStopped = !0, super.unsubscribe()) }
                        _next(t) { this.destination.next(t) }
                        _error(t) { this.destination.error(t), this.unsubscribe() }
                        _complete() { this.destination.complete(), this.unsubscribe() }
                        _unsubscribeAndRecycle() { const { _parentOrParents: t } = this; return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this } }
                    class u extends c { constructor(t, e, n, i) { let o;
                            super(), this._parentSubscriber = t; let a = this;
                            Object(r.a)(e) ? o = e : e && (o = e.next, n = e.error, i = e.complete, e !== s.a && (a = Object.create(e), Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)), a.unsubscribe = this.unsubscribe.bind(this))), this._context = a, this._next = o, this._error = n, this._complete = i }
                        next(t) { if (!this.isStopped && this._next) { const { _parentSubscriber: e } = this;
                                a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t) } }
                        error(t) { if (!this.isStopped) { const { _parentSubscriber: e } = this, { useDeprecatedSynchronousErrorHandling: n } = a.a; if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                                else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : Object(l.a)(t), this.unsubscribe();
                                else { if (this.unsubscribe(), n) throw t;
                                    Object(l.a)(t) } } }
                        complete() { if (!this.isStopped) { const { _parentSubscriber: t } = this; if (this._complete) { const e = () => this._complete.call(this._context);
                                    a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe()) } else this.unsubscribe() } }
                        __tryOrUnsub(t, e) { try { t.call(this._context, e) } catch (n) { if (this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling) throw n;
                                Object(l.a)(n) } }
                        __tryOrSetError(t, e, n) { if (!a.a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call"); try { e.call(this._context, n) } catch (r) { return a.a.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (Object(l.a)(r), !0) } return !1 }
                        _unsubscribe() { const { _parentSubscriber: t } = this;
                            this._context = null, this._parentSubscriber = null, t.unsubscribe() } } }, "9ppp": function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return r })); const r = (() => {
                        function t() { return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this } return t.prototype = Object.create(Error.prototype), t })() }, AytR: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return r })); const r = { version: "0.0.3", buildDate: "13/08/2020", production: !0, projectId: "e1175c26fea511e8bb4f0050569c0a8e", api: { getUserDetails: { workflowId: "bec29b30999b11eaa360c282e0885855", processId: "bf086020999b11eaa360c282e0885855" }, getForgetDetails: { workflowId: "bec29b30999b11eaa360c282e0885855", processId: "3dd579ae9a8e11eab90cc282e0885855" }, changeUserPassword: { workflowId: "bec29b30999b11eaa360c282e0885855", processId: "05373b4099a411eaa360c282e0885855" }, resetUserPassword: { workflowId: "bec29b30999b11eaa360c282e0885855", processId: "9c6c75849a7b11eab90cc282e0885855" }, createUser: { workflowId: "27f4ad189dbc11eaa360c282e0885855", processId: "28148b6a9dbc11eaa360c282e0885855" }, fetchUserByMobileNumber: { workflowId: "d2ab1974c4de11eab220727d5ac274b2", processId: "b2374f7ac59f11eab220727d5ac274b2" }, blockUserWhatsappAccess: { workflowId: "d2ab1974c4de11eab220727d5ac274b2", processId: "d2d6f080c4de11eab220727d5ac274b2" }, fetchUsers: { workflowId: "d2ab1974c4de11eab220727d5ac274b2", processId: "3183021ec68211eab22b727d5ac274b2" }, fetchUserActivityList: { workflowId: "d2ab1974c4de11eab220727d5ac274b2", processId: "a9790b38c69611eab22b727d5ac274b2" }, updateUser: { workflowId: "d2ab1974c4de11eab220727d5ac274b2", processId: "570b5632c69911eab22b727d5ac274b2" }, disableUser: { workflowId: "27f4ad189dbc11eaa360c282e0885855", processId: "31116bf29e5c11eaa360c282e0885855" }, whatsappReport: { workflowId: "54b48f28c6a511eab22b727d5ac274b2", processId: "54d2fe86c6a511eab22b727d5ac274b2" }, createMessageTemplate: { projectId: "e45e9cf0d5a411eab60b727d5ac274b2", workflowId: "2356727ad5a511eab60b727d5ac274b2", processId: "28952a4cd5a511eab60b727d5ac274b2" }, createPromotionalTemplate: { projectId: "e45e9cf0d5a411eab60b727d5ac274b2", workflowId: "2356727ad5a511eab60b727d5ac274b2", processId: "32445f1ad5bc11eab60b727d5ac274b2" }, updateTemplate: { projectId: "e45e9cf0d5a411eab60b727d5ac274b2", workflowId: "2356727ad5a511eab60b727d5ac274b2", processId: "e81eed10d5ac11eab60b727d5ac274b2" }, fetchTemplates: { projectId: "e45e9cf0d5a411eab60b727d5ac274b2", workflowId: "102df80ed5a911eab60b727d5ac274b2", processId: "f24acf34d5bb11eab60b727d5ac274b2" }, deactivateTemplate: { projectId: "e45e9cf0d5a411eab60b727d5ac274b2", workflowId: "5a3bad14d6e511eab60b727d5ac274b2", processId: "390f605ad72511eab60c727d5ac274b2" }, createPreappovedOffer: { projectId: "e45e9cf0d5a411eab60b727d5ac274b2", workflowId: "2356727ad5a511eab60b727d5ac274b2", processId: "c4acd156d86511eab60c727d5ac274b2" }, fetchcheckerScreenTemplates: { projectId: "e45e9cf0d5a411eab60b727d5ac274b2", workflowId: "102df80ed5a911eab60b727d5ac274b2", processId: "34c44c92dbbf11eab60d727d5ac274b2" } }, host: "/appiyo" } }, Cfvw: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return h })); var r = n("HDdC"),
                        s = n("SeVD"),
                        i = n("quSY"),
                        o = n("kJWO"),
                        a = n("jZKg"),
                        l = n("Lhse"),
                        c = n("c2HN"),
                        u = n("I55L");

                    function h(t, e) { return e ? function(t, e) { if (null != t) { if (function(t) { return t && "function" == typeof t[o.a] }(t)) return function(t, e) { return new r.a(n => { const r = new i.a; return r.add(e.schedule(() => { const s = t[o.a]();
                                            r.add(s.subscribe({ next(t) { r.add(e.schedule(() => n.next(t))) }, error(t) { r.add(e.schedule(() => n.error(t))) }, complete() { r.add(e.schedule(() => n.complete())) } })) })), r }) }(t, e); if (Object(c.a)(t)) return function(t, e) { return new r.a(n => { const r = new i.a; return r.add(e.schedule(() => t.then(t => { r.add(e.schedule(() => { n.next(t), r.add(e.schedule(() => n.complete())) })) }, t => { r.add(e.schedule(() => n.error(t))) }))), r }) }(t, e); if (Object(u.a)(t)) return Object(a.a)(t, e); if (function(t) { return t && "function" == typeof t[l.a] }(t) || "string" == typeof t) return function(t, e) { if (!t) throw new Error("Iterable cannot be null"); return new r.a(n => { const r = new i.a; let s; return r.add(() => { s && "function" == typeof s.return && s.return() }), r.add(e.schedule(() => { s = t[l.a](), r.add(e.schedule((function() { if (n.closed) return; let t, e; try { const n = s.next();
                                                    t = n.value, e = n.done } catch (r) { return void n.error(r) }
                                                e ? n.complete() : (n.next(t), this.schedule()) }))) })), r }) }(t, e) } throw new TypeError((null !== t && typeof t || t) + " is not observable") }(t, e) : t instanceof r.a ? t : new r.a(Object(s.a)(t)) } }, DH7j: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return r })); const r = (() => Array.isArray || (t => t && "number" == typeof t.length))() }, EY2u: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return s })), n.d(e, "b", (function() { return i })); var r = n("HDdC"); const s = new r.a(t => t.complete());

                    function i(t) { return t ? function(t) { return new r.a(e => t.schedule(() => e.complete())) }(t) : s } }, HDdC: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return c })); var r = n("7o/Q"),
                        s = n("2QA8"),
                        i = n("gRHU"),
                        o = n("kJWO"),
                        a = n("mCNh"),
                        l = n("2fFW"); let c = (() => { class t { constructor(t) { this._isScalar = !1, t && (this._subscribe = t) }
                            lift(e) { const n = new t; return n.source = this, n.operator = e, n }
                            subscribe(t, e, n) { const { operator: o } = this, a = function(t, e, n) { if (t) { if (t instanceof r.a) return t; if (t[s.a]) return t[s.a]() } return t || e || n ? new r.a(t, e, n) : new r.a(i.a) }(t, e, n); if (a.add(o ? o.call(a, this.source) : this.source || l.a.useDeprecatedSynchronousErrorHandling && !a.syncErrorThrowable ? this._subscribe(a) : this._trySubscribe(a)), l.a.useDeprecatedSynchronousErrorHandling && a.syncErrorThrowable && (a.syncErrorThrowable = !1, a.syncErrorThrown)) throw a.syncErrorValue; return a }
                            _trySubscribe(t) { try { return this._subscribe(t) } catch (e) { l.a.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                                        function(t) { for (; t;) { const { closed: e, destination: n, isStopped: s } = t; if (e || s) return !1;
                                                t = n && n instanceof r.a ? n : null } return !0 }(t) ? t.error(e) : console.warn(e) } }
                            forEach(t, e) { return new(e = u(e))((e, n) => { let r;
                                    r = this.subscribe(e => { try { t(e) } catch (s) { n(s), r && r.unsubscribe() } }, n, e) }) }
                            _subscribe(t) { const { source: e } = this; return e && e.subscribe(t) }[o.a]() { return this }
                            pipe(...t) { return 0 === t.length ? this : Object(a.b)(t)(this) }
                            toPromise(t) { return new(t = u(t))((t, e) => { let n;
                                    this.subscribe(t => n = t, t => e(t), () => t(n)) }) } } return t.create = e => new t(e), t })();

                    function u(t) { if (t || (t = l.a.Promise || Promise), !t) throw new Error("no Promise impl found"); return t } }, I55L: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return r })); const r = t => t && "number" == typeof t.length && "function" != typeof t }, IzEk: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return o })); var r = n("7o/Q"),
                        s = n("4I5i"),
                        i = n("EY2u");

                    function o(t) { return e => 0 === t ? Object(i.b)() : e.lift(new a(t)) }
                    class a { constructor(t) { if (this.total = t, this.total < 0) throw new s.a }
                        call(t, e) { return e.subscribe(new l(t, this.total)) } }
                    class l extends r.a { constructor(t, e) { super(t), this.total = e, this.count = 0 }
                        _next(t) { const e = this.total,
                                n = ++this.count;
                            n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe())) } } }, JIr8: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return o })); var r = n("l7GE"),
                        s = n("51Dv"),
                        i = n("ZUHj");

                    function o(t) { return function(e) { const n = new a(t),
                                r = e.lift(n); return n.caught = r } }
                    class a { constructor(t) { this.selector = t }
                        call(t, e) { return e.subscribe(new l(t, this.selector, this.caught)) } }
                    class l extends r.a { constructor(t, e, n) { super(t), this.selector = e, this.caught = n }
                        error(t) { if (!this.isStopped) { let n; try { n = this.selector(t, this.caught) } catch (e) { return void super.error(e) }
                                this._unsubscribeAndRecycle(); const r = new s.a(this, void 0, void 0);
                                this.add(r); const o = Object(i.a)(this, n, void 0, void 0, r);
                                o !== r && this.add(o) } } } }, JX91: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return a })); var r = n("LRne"),
                        s = n("0EUg");

                    function i(...t) { return Object(s.a)()(Object(r.a)(...t)) } var o = n("z+Ro");

                    function a(...t) { const e = t[t.length - 1]; return Object(o.a)(e) ? (t.pop(), n => i(t, n, e)) : e => i(t, e) } }, KqfI: function(t, e, n) { "use strict";

                    function r() {}
                    n.d(e, "a", (function() { return r })) }, LRne: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return o })); var r = n("z+Ro"),
                        s = n("yCtX"),
                        i = n("jZKg");

                    function o(...t) { let e = t[t.length - 1]; return Object(r.a)(e) ? (t.pop(), Object(i.a)(t, e)) : Object(s.a)(t) } }, Lhse: function(t, e, n) { "use strict";

                    function r() { return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator" }
                    n.d(e, "a", (function() { return s })); const s = r() }, NJ4a: function(t, e, n) { "use strict";

                    function r(t) { setTimeout(() => { throw t }, 0) }
                    n.d(e, "a", (function() { return r })) }, PCNd: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return l })); var r = n("ofXK"),
                        s = n("tyNb"),
                        i = n("1kSV"),
                        o = n("3Pt+"),
                        a = n("fXoL"); let l = (() => { class t {} return t.\u0275mod = a.Kb({ type: t }), t.\u0275inj = a.Jb({ factory: function(e) { return new(e || t) }, imports: [
                                [o.n, o.h, r.b, s.e, i.d], i.d, o.n, o.h
                            ] }), t })() }, QK5H: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return r })), n.d(e, "b", (function() { return s })); const r = new(n("fXoL").q)("window"),
                        s = [{ provide: r, useFactory: () => window }] }, SeVD: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return u })); var r = n("ngJS"),
                        s = n("NJ4a"),
                        i = n("Lhse"),
                        o = n("kJWO"),
                        a = n("I55L"),
                        l = n("c2HN"),
                        c = n("XoHu"); const u = t => { if (t && "function" == typeof t[o.a]) return u = t, t => { const e = u[o.a](); if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable"); return e.subscribe(t) }; if (Object(a.a)(t)) return Object(r.a)(t); if (Object(l.a)(t)) return n = t, t => (n.then(e => { t.closed || (t.next(e), t.complete()) }, e => t.error(e)).then(null, s.a), t); if (t && "function" == typeof t[i.a]) return e = t, t => { const n = e[i.a](); for (;;) { const e = n.next(); if (e.done) { t.complete(); break } if (t.next(e.value), t.closed) break } return "function" == typeof n.return && t.add(() => { n.return && n.return() }), t }; { const e = Object(c.a)(t) ? "an invalid object" : `'${t}'`; throw new TypeError(`You provided ${e} where a stream was expected.` + " You can provide an Observable, Promise, Array, or Iterable.") } var e, n, u } }, SpAZ: function(t, e, n) { "use strict";

                    function r(t) { return t }
                    n.d(e, "a", (function() { return r })) }, VRyK: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return a })); var r = n("HDdC"),
                        s = n("z+Ro"),
                        i = n("bHdf"),
                        o = n("yCtX");

                    function a(...t) { let e = Number.POSITIVE_INFINITY,
                            n = null,
                            a = t[t.length - 1]; return Object(s.a)(a) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof a && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof r.a ? t[0] : Object(i.a)(e)(Object(o.a)(t, n)) } }, XNiG: function(t, e, n) { "use strict";
                    n.d(e, "b", (function() { return c })), n.d(e, "a", (function() { return u })); var r = n("HDdC"),
                        s = n("7o/Q"),
                        i = n("quSY"),
                        o = n("9ppp");
                    class a extends i.a { constructor(t, e) { super(), this.subject = t, this.subscriber = e, this.closed = !1 }
                        unsubscribe() { if (this.closed) return;
                            this.closed = !0; const t = this.subject,
                                e = t.observers; if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return; const n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1) } }
                    var l = n("2QA8");
                    class c extends s.a { constructor(t) { super(t), this.destination = t } }
                    let u = (() => { class t extends r.a { constructor() { super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null }[l.a]() { return new c(this) }
                            lift(t) { const e = new h(this, this); return e.operator = t, e }
                            next(t) { if (this.closed) throw new o.a; if (!this.isStopped) { const { observers: e } = this, n = e.length, r = e.slice(); for (let s = 0; s < n; s++) r[s].next(t) } }
                            error(t) { if (this.closed) throw new o.a;
                                this.hasError = !0, this.thrownError = t, this.isStopped = !0; const { observers: e } = this, n = e.length, r = e.slice(); for (let s = 0; s < n; s++) r[s].error(t);
                                this.observers.length = 0 }
                            complete() { if (this.closed) throw new o.a;
                                this.isStopped = !0; const { observers: t } = this, e = t.length, n = t.slice(); for (let r = 0; r < e; r++) n[r].complete();
                                this.observers.length = 0 }
                            unsubscribe() { this.isStopped = !0, this.closed = !0, this.observers = null }
                            _trySubscribe(t) { if (this.closed) throw new o.a; return super._trySubscribe(t) }
                            _subscribe(t) { if (this.closed) throw new o.a; return this.hasError ? (t.error(this.thrownError), i.a.EMPTY) : this.isStopped ? (t.complete(), i.a.EMPTY) : (this.observers.push(t), new a(this, t)) }
                            asObservable() { const t = new r.a; return t.source = this, t } }
                        return t.create = (t, e) => new h(t, e), t })();
                    class h extends u { constructor(t, e) { super(), this.destination = t, this.source = e }
                        next(t) { const { destination: e } = this;
                            e && e.next && e.next(t) }
                        error(t) { const { destination: e } = this;
                            e && e.error && this.destination.error(t) }
                        complete() { const { destination: t } = this;
                            t && t.complete && this.destination.complete() }
                        _subscribe(t) { const { source: e } = this; return e ? this.source.subscribe(t) : i.a.EMPTY } } }, XoHu: function(t, e, n) { "use strict";

                    function r(t) { return null !== t && "object" == typeof t }
                    n.d(e, "a", (function() { return r })) }, ZUHj: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return o })); var r = n("51Dv"),
                        s = n("SeVD"),
                        i = n("HDdC");

                    function o(t, e, n, o, a = new r.a(t, n, o)) { if (!a.closed) return e instanceof i.a ? e.subscribe(a) : Object(s.a)(e)(a) } }, bHdf: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return i })); var r = n("5+tZ"),
                        s = n("SpAZ");

                    function i(t = Number.POSITIVE_INFINITY) { return Object(r.a)(s.a, t) } }, bOdf: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return s })); var r = n("5+tZ");

                    function s(t, e) { return Object(r.a)(t, e, 1) } }, c2HN: function(t, e, n) { "use strict";

                    function r(t) { return !!t && "function" != typeof t.subscribe && "function" == typeof t.then }
                    n.d(e, "a", (function() { return r })) }, eIep: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return l })); var r = n("l7GE"),
                        s = n("51Dv"),
                        i = n("ZUHj"),
                        o = n("lJxs"),
                        a = n("Cfvw");

                    function l(t, e) { return "function" == typeof e ? n => n.pipe(l((n, r) => Object(a.a)(t(n, r)).pipe(Object(o.a)((t, s) => e(n, t, r, s))))) : e => e.lift(new c(t)) }
                    class c { constructor(t) { this.project = t }
                        call(t, e) { return e.subscribe(new u(t, this.project)) } }
                    class u extends r.a { constructor(t, e) { super(t), this.project = e, this.index = 0 }
                        _next(t) { let e; const n = this.index++; try { e = this.project(t, n) } catch (r) { return void this.destination.error(r) }
                            this._innerSub(e, t, n) }
                        _innerSub(t, e, n) { const r = this.innerSubscription;
                            r && r.unsubscribe(); const o = new s.a(this, e, n),
                                a = this.destination;
                            a.add(o), this.innerSubscription = Object(i.a)(this, t, void 0, void 0, o), this.innerSubscription !== o && a.add(this.innerSubscription) }
                        _complete() { const { innerSubscription: t } = this;
                            t && !t.closed || super._complete(), this.unsubscribe() }
                        _unsubscribe() { this.innerSubscription = null }
                        notifyComplete(t) { this.destination.remove(t), this.innerSubscription = null, this.isStopped && super._complete() }
                        notifyNext(t, e, n, r, s) { this.destination.next(e) } } }, fXoL: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return wi })), n.d(e, "b", (function() { return gc })), n.d(e, "c", (function() { return hc })), n.d(e, "d", (function() { return cc })), n.d(e, "e", (function() { return uc })), n.d(e, "f", (function() { return lu })), n.d(e, "g", (function() { return Xc })), n.d(e, "h", (function() { return si })), n.d(e, "i", (function() { return Oc })), n.d(e, "j", (function() { return sa })), n.d(e, "k", (function() { return _c })), n.d(e, "l", (function() { return ia })), n.d(e, "m", (function() { return gn })), n.d(e, "n", (function() { return Hl })), n.d(e, "o", (function() { return Q })), n.d(e, "p", (function() { return u })), n.d(e, "q", (function() { return q })), n.d(e, "r", (function() { return vi })), n.d(e, "s", (function() { return Ea })), n.d(e, "t", (function() { return xa })), n.d(e, "u", (function() { return yc })), n.d(e, "v", (function() { return ot })), n.d(e, "w", (function() { return tu })), n.d(e, "x", (function() { return it })), n.d(e, "y", (function() { return Wc })), n.d(e, "z", (function() { return Ac })), n.d(e, "A", (function() { return h })), n.d(e, "B", (function() { return mc })), n.d(e, "C", (function() { return pc })), n.d(e, "D", (function() { return ca })), n.d(e, "E", (function() { return aa })), n.d(e, "F", (function() { return la })), n.d(e, "G", (function() { return ha })), n.d(e, "H", (function() { return sr })), n.d(e, "I", (function() { return f })), n.d(e, "J", (function() { return ru })), n.d(e, "K", (function() { return Da })), n.d(e, "L", (function() { return Lc })), n.d(e, "M", (function() { return da })), n.d(e, "N", (function() { return Aa })), n.d(e, "O", (function() { return gt })), n.d(e, "P", (function() { return Di })), n.d(e, "Q", (function() { return Gc })), n.d(e, "R", (function() { return Nn })), n.d(e, "S", (function() { return I })), n.d(e, "T", (function() { return jn })), n.d(e, "U", (function() { return ou })), n.d(e, "V", (function() { return $c })), n.d(e, "W", (function() { return bc })), n.d(e, "X", (function() { return oi })), n.d(e, "Y", (function() { return Wa })), n.d(e, "Z", (function() { return nr })), n.d(e, "ab", (function() { return ar })), n.d(e, "bb", (function() { return Fn })), n.d(e, "cb", (function() { return En })), n.d(e, "db", (function() { return kn })), n.d(e, "eb", (function() { return In })), n.d(e, "fb", (function() { return Tn })), n.d(e, "gb", (function() { return On })), n.d(e, "hb", (function() { return Dn })), n.d(e, "ib", (function() { return za })), n.d(e, "jb", (function() { return iu })), n.d(e, "kb", (function() { return Ba })), n.d(e, "lb", (function() { return qa })), n.d(e, "mb", (function() { return xn })), n.d(e, "nb", (function() { return V })), n.d(e, "ob", (function() { return Ii })), n.d(e, "pb", (function() { return Ji })), n.d(e, "qb", (function() { return Ki })), n.d(e, "rb", (function() { return Ti })), n.d(e, "sb", (function() { return $a })), n.d(e, "tb", (function() { return Ut })), n.d(e, "ub", (function() { return O })), n.d(e, "vb", (function() { return Cn })), n.d(e, "wb", (function() { return Lo })), n.d(e, "xb", (function() { return qo })), n.d(e, "yb", (function() { return ea })), n.d(e, "zb", (function() { return Er })), n.d(e, "Ab", (function() { return Pi })), n.d(e, "Bb", (function() { return _o })), n.d(e, "Cb", (function() { return Po })), n.d(e, "Db", (function() { return Mo })), n.d(e, "Eb", (function() { return yo })), n.d(e, "Fb", (function() { return tc })), n.d(e, "Gb", (function() { return vt })), n.d(e, "Hb", (function() { return Ot })), n.d(e, "Ib", (function() { return b })), n.d(e, "Jb", (function() { return y })), n.d(e, "Kb", (function() { return Et })), n.d(e, "Lb", (function() { return Tt })), n.d(e, "Mb", (function() { return Li })), n.d(e, "Nb", (function() { return Qi })), n.d(e, "Ob", (function() { return Gi })), n.d(e, "Pb", (function() { return Wi })), n.d(e, "Qb", (function() { return qi })), n.d(e, "Rb", (function() { return Bi })), n.d(e, "Sb", (function() { return Zi })), n.d(e, "Tb", (function() { return dn })), n.d(e, "Ub", (function() { return Vo })), n.d(e, "Vb", (function() { return fl })), n.d(e, "Wb", (function() { return yl })), n.d(e, "Xb", (function() { return pl })), n.d(e, "Yb", (function() { return bl })), n.d(e, "Zb", (function() { return et })), n.d(e, "ac", (function() { return Ui })), n.d(e, "bc", (function() { return lc })), n.d(e, "cc", (function() { return Hi })), n.d(e, "dc", (function() { return Xi })), n.d(e, "ec", (function() { return rc })), n.d(e, "fc", (function() { return eo })), n.d(e, "gc", (function() { return Ml })), n.d(e, "hc", (function() { return Vl })), n.d(e, "ic", (function() { return Fl })), n.d(e, "jc", (function() { return oo })), n.d(e, "kc", (function() { return ro })), n.d(e, "lc", (function() { return $i })), n.d(e, "mc", (function() { return ao })), n.d(e, "nc", (function() { return lo })), n.d(e, "oc", (function() { return Dl })), n.d(e, "pc", (function() { return Il })), n.d(e, "qc", (function() { return Al })), n.d(e, "rc", (function() { return Rl })), n.d(e, "sc", (function() { return Xl })), n.d(e, "tc", (function() { return Fi })), n.d(e, "uc", (function() { return ie })), n.d(e, "vc", (function() { return lr })), n.d(e, "wc", (function() { return xt })), n.d(e, "xc", (function() { return ec })), n.d(e, "yc", (function() { return Yl })), n.d(e, "zc", (function() { return bo })), n.d(e, "Ac", (function() { return Vi })), n.d(e, "Bc", (function() { return ac })), n.d(e, "Cc", (function() { return Ao })), n.d(e, "Dc", (function() { return Ro })), n.d(e, "Ec", (function() { return jo })), n.d(e, "Fc", (function() { return No })); var r = n("XNiG"),
                        s = n("quSY"),
                        i = n("HDdC"),
                        o = n("VRyK"),
                        a = n("w1tV");

                    function l(t) { return { toString: t }.toString() }

                    function c(t, e, n) { return l(() => { const r = function(t) { return function(...e) { if (t) { const n = t(...e); for (const t in n) this[t] = n[t] } } }(e);

                            function s(...t) { if (this instanceof s) return r.apply(this, t), this; const e = new s(...t); return n.annotation = e, n;

                                function n(t, n, r) { const s = t.hasOwnProperty("__parameters__") ? t.__parameters__ : Object.defineProperty(t, "__parameters__", { value: [] }).__parameters__; for (; s.length <= r;) s.push(null); return (s[r] = s[r] || []).push(e), t } } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = t, s.annotationCls = s, s }) } const u = c("Inject", t => ({ token: t })),
                        h = c("Optional"),
                        d = c("Self"),
                        f = c("SkipSelf"); var p = function(t) { return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t }({});

                    function m(t) { for (let e in t)
                            if (t[e] === m) return e;
                        throw Error("Could not find renamed property on target object.") }

                    function g(t, e) { for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]) }

                    function b(t) { return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 } }

                    function y(t) { return { factory: t.factory, providers: t.providers || [], imports: t.imports || [] } }

                    function _(t) { return v(t, t[S]) || v(t, t[x]) }

                    function v(t, e) { return e && e.token === t ? e : null }

                    function w(t) { return t && (t.hasOwnProperty(C) || t.hasOwnProperty(k)) ? t[C] : null } const S = m({ "\u0275prov": m }),
                        C = m({ "\u0275inj": m }),
                        E = m({ "\u0275provFallback": m }),
                        x = m({ ngInjectableDef: m }),
                        k = m({ ngInjectorDef: m });

                    function O(t) { if ("string" == typeof t) return t; if (Array.isArray(t)) return "[" + t.map(O).join(", ") + "]"; if (null == t) return "" + t; if (t.overriddenName) return `${t.overriddenName}`; if (t.name) return `${t.name}`; const e = t.toString(); if (null == e) return "" + e; const n = e.indexOf("\n"); return -1 === n ? e : e.substring(0, n) }

                    function T(t, e) { return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e } const D = m({ __forward_ref__: m });

                    function I(t) { return t.__forward_ref__ = I, t.toString = function() { return O(this()) }, t }

                    function A(t) { return R(t) ? t() : t }

                    function R(t) { return "function" == typeof t && t.hasOwnProperty(D) && t.__forward_ref__ === I } const j = "undefined" != typeof globalThis && globalThis,
                        N = "undefined" != typeof window && window,
                        P = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                        M = "undefined" != typeof global && global,
                        V = j || M || N || P,
                        F = m({ "\u0275cmp": m }),
                        L = m({ "\u0275dir": m }),
                        U = m({ "\u0275pipe": m }),
                        H = m({ "\u0275mod": m }),
                        $ = m({ "\u0275loc": m }),
                        z = m({ "\u0275fac": m }),
                        B = m({ __NG_ELEMENT_ID__: m });
                    class q { constructor(t, e) { this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = b({ token: this, providedIn: e.providedIn || "root", factory: e.factory })) }
                        toString() { return `InjectionToken ${this._desc}` } } const Q = new q("INJECTOR", -1),
                        W = {},
                        G = /\n/gm,
                        Z = m({ provide: String, useValue: m }); let K, J = void 0;

                    function X(t) { const e = J; return J = t, e }

                    function Y(t) { const e = K; return K = t, e }

                    function tt(t, e = p.Default) { if (void 0 === J) throw new Error("inject() must be called from an injection context"); return null === J ? nt(t, void 0, e) : J.get(t, e & p.Optional ? null : void 0, e) }

                    function et(t, e = p.Default) { return (K || tt)(A(t), e) }

                    function nt(t, e, n) { const r = _(t); if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value; if (n & p.Optional) return null; if (void 0 !== e) return e; throw new Error(`Injector: NOT_FOUND [${O(t)}]`) }

                    function rt(t) { const e = []; for (let n = 0; n < t.length; n++) { const r = A(t[n]); if (Array.isArray(r)) { if (0 === r.length) throw new Error("Arguments array must have arguments."); let t = void 0,
                                    n = p.Default; for (let e = 0; e < r.length; e++) { const s = r[e];
                                    s instanceof h || "Optional" === s.ngMetadataName || s === h ? n |= p.Optional : s instanceof f || "SkipSelf" === s.ngMetadataName || s === f ? n |= p.SkipSelf : s instanceof d || "Self" === s.ngMetadataName || s === d ? n |= p.Self : t = s instanceof u || s === u ? s.token : s }
                                e.push(et(t, n)) } else e.push(et(r)) } return e }
                    class st { get(t, e = W) { if (e === W) { const e = new Error(`NullInjectorError: No provider for ${O(t)}!`); throw e.name = "NullInjectorError", e } return e } }
                    class it {}
                    class ot {}

                    function at(t, e) { for (let n = 0; n < t.length; n++) e.push(t[n]) }

                    function lt(t, e) { t.forEach(t => Array.isArray(t) ? lt(t, e) : e(t)) }

                    function ct(t, e, n) { e >= t.length ? t.push(n) : t.splice(e, 0, n) }

                    function ut(t, e) { return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0] }

                    function ht(t, e) { const n = []; for (let r = 0; r < t; r++) n.push(e); return n }

                    function dt(t, e, n) { let r = pt(t, e); return r >= 0 ? t[1 | r] = n : (r = ~r, function(t, e, n, r) { let s = t.length; if (s == e) t.push(n, r);
                            else if (1 === s) t.push(r, t[0]), t[0] = n;
                            else { for (s--, t.push(t[s - 1], t[s]); s > e;) t[s] = t[s - 2], s--;
                                t[e] = n, t[e + 1] = r } }(t, r, e, n)), r }

                    function ft(t, e) { const n = pt(t, e); if (n >= 0) return t[1 | n] }

                    function pt(t, e) { return function(t, e, n) { let r = 0,
                                s = t.length >> 1; for (; s !== r;) { const n = r + (s - r >> 1),
                                    i = t[n << 1]; if (e === i) return n << 1;
                                i > e ? s = n : r = n + 1 } return ~(s << 1) }(t, e) } const mt = function() { var t = { OnPush: 0, Default: 1 }; return t[t.OnPush] = "OnPush", t[t.Default] = "Default", t }(),
                        gt = function() { var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 }; return t[t.Emulated] = "Emulated", t[t.Native] = "Native", t[t.None] = "None", t[t.ShadowDom] = "ShadowDom", t }(),
                        bt = {},
                        yt = []; let _t = 0;

                    function vt(t) { return l(() => { const e = t.type,
                                n = e.prototype,
                                r = {},
                                s = { type: e, providersResolver: null, decls: t.decls, vars: t.vars, factory: null, template: t.template || null, consts: t.consts || null, ngContentSelectors: t.ngContentSelectors, hostBindings: t.hostBindings || null, hostVars: t.hostVars || 0, hostAttrs: t.hostAttrs || null, contentQueries: t.contentQueries || null, declaredInputs: r, inputs: null, outputs: null, exportAs: t.exportAs || null, onChanges: null, onInit: n.ngOnInit || null, doCheck: n.ngDoCheck || null, afterContentInit: n.ngAfterContentInit || null, afterContentChecked: n.ngAfterContentChecked || null, afterViewInit: n.ngAfterViewInit || null, afterViewChecked: n.ngAfterViewChecked || null, onDestroy: n.ngOnDestroy || null, onPush: t.changeDetection === mt.OnPush, directiveDefs: null, pipeDefs: null, selectors: t.selectors || yt, viewQuery: t.viewQuery || null, features: t.features || null, data: t.data || {}, encapsulation: t.encapsulation || gt.Emulated, id: "c", styles: t.styles || yt, _: null, setInput: null, schemas: t.schemas || null, tView: null },
                                i = t.directives,
                                o = t.features,
                                a = t.pipes; return s.id += _t++, s.inputs = kt(t.inputs, r), s.outputs = kt(t.outputs), o && o.forEach(t => t(s)), s.directiveDefs = i ? () => ("function" == typeof i ? i() : i).map(wt) : null, s.pipeDefs = a ? () => ("function" == typeof a ? a() : a).map(St) : null, s }) }

                    function wt(t) { return Dt(t) || function(t) { return t[L] || null }(t) }

                    function St(t) { return function(t) { return t[U] || null }(t) } const Ct = {};

                    function Et(t) { const e = { type: t.type, bootstrap: t.bootstrap || yt, declarations: t.declarations || yt, imports: t.imports || yt, exports: t.exports || yt, transitiveCompileScopes: null, schemas: t.schemas || null, id: t.id || null }; return null != t.id && l(() => { Ct[t.id] = t.type }), e }

                    function xt(t, e) { return l(() => { const n = At(t, !0);
                            n.declarations = e.declarations || yt, n.imports = e.imports || yt, n.exports = e.exports || yt }) }

                    function kt(t, e) { if (null == t) return bt; const n = {}; for (const r in t)
                            if (t.hasOwnProperty(r)) { let s = t[r],
                                    i = s;
                                Array.isArray(s) && (i = s[1], s = s[0]), n[s] = r, e && (e[s] = i) }
                        return n } const Ot = vt;

                    function Tt(t) { return { type: t.type, name: t.name, factory: null, pure: !1 !== t.pure, onDestroy: t.type.prototype.ngOnDestroy || null } }

                    function Dt(t) { return t[F] || null }

                    function It(t, e) { return t.hasOwnProperty(z) ? t[z] : null }

                    function At(t, e) { const n = t[H] || null; if (!n && !0 === e) throw new Error(`Type ${O(t)} does not have '\u0275mod' property.`); return n }

                    function Rt(t) { return Array.isArray(t) && "object" == typeof t[1] }

                    function jt(t) { return Array.isArray(t) && !0 === t[1] }

                    function Nt(t) { return 0 != (8 & t.flags) }

                    function Pt(t) { return 2 == (2 & t.flags) }

                    function Mt(t) { return 1 == (1 & t.flags) }

                    function Vt(t) { return null !== t.template }

                    function Ft(t) { return 0 != (512 & t[2]) } let Lt = void 0;

                    function Ut(t) { Lt = t }

                    function Ht() { return void 0 !== Lt ? Lt : "undefined" != typeof document ? document : void 0 }

                    function $t(t) { return !!t.listen } const zt = { createRenderer: (t, e) => Ht() };

                    function Bt(t) { for (; Array.isArray(t);) t = t[0]; return t }

                    function qt(t, e) { return Bt(e[t + 19]) }

                    function Qt(t, e) { return Bt(e[t.index]) }

                    function Wt(t, e) { return t.data[e + 19] }

                    function Gt(t, e) { return t[e + 19] }

                    function Zt(t, e) { const n = e[t]; return Rt(n) ? n : n[0] }

                    function Kt(t) { const e = function(t) { return t.__ngContext__ || null }(t); return e ? Array.isArray(e) ? e : e.lView : null }

                    function Jt(t) { return 4 == (4 & t[2]) }

                    function Xt(t) { return 128 == (128 & t[2]) }

                    function Yt(t, e) { return null === t || null == e ? null : t[e] }

                    function te(t) { t[18] = 0 } const ee = { lFrame: Se(null), bindingsEnabled: !0, checkNoChangesMode: !1 };

                    function ne() { return ee.bindingsEnabled }

                    function re() { return ee.lFrame.lView }

                    function se() { return ee.lFrame.tView }

                    function ie(t) { ee.lFrame.contextLView = t }

                    function oe() { return ee.lFrame.previousOrParentTNode }

                    function ae(t, e) { ee.lFrame.previousOrParentTNode = t, ee.lFrame.isParent = e }

                    function le() { return ee.lFrame.isParent }

                    function ce() { ee.lFrame.isParent = !1 }

                    function ue() { return ee.checkNoChangesMode }

                    function he(t) { ee.checkNoChangesMode = t }

                    function de() { const t = ee.lFrame; let e = t.bindingRootIndex; return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e }

                    function fe() { return ee.lFrame.bindingIndex }

                    function pe() { return ee.lFrame.bindingIndex++ }

                    function me(t) { const e = ee.lFrame,
                            n = e.bindingIndex; return e.bindingIndex = e.bindingIndex + t, n }

                    function ge(t, e) { const n = ee.lFrame;
                        n.bindingIndex = n.bindingRootIndex = t, n.currentDirectiveIndex = e }

                    function be() { return ee.lFrame.currentQueryIndex }

                    function ye(t) { ee.lFrame.currentQueryIndex = t }

                    function _e(t, e) { const n = we();
                        ee.lFrame = n, n.previousOrParentTNode = e, n.lView = t }

                    function ve(t, e) { const n = we(),
                            r = t[1];
                        ee.lFrame = n, n.previousOrParentTNode = e, n.lView = t, n.tView = r, n.contextLView = t, n.bindingIndex = r.bindingStartIndex }

                    function we() { const t = ee.lFrame,
                            e = null === t ? null : t.child; return null === e ? Se(t) : e }

                    function Se(t) { const e = { previousOrParentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: 0, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentSanitizer: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: t, child: null }; return null !== t && (t.child = e), e }

                    function Ce() { const t = ee.lFrame; return ee.lFrame = t.parent, t.previousOrParentTNode = null, t.lView = null, t } const Ee = Ce;

                    function xe() { const t = Ce();
                        t.isParent = !0, t.tView = null, t.selectedIndex = 0, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.currentSanitizer = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0 }

                    function ke() { return ee.lFrame.selectedIndex }

                    function Oe(t) { ee.lFrame.selectedIndex = t }

                    function Te() { const t = ee.lFrame; return Wt(t.tView, t.selectedIndex) }

                    function De(t, e) { for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) { const e = t.data[n];
                            e.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, e.afterContentInit), e.afterContentChecked && ((t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentChecked), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, e.afterContentChecked)), e.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit), e.afterViewChecked && ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, e.afterViewChecked)), null != e.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy) } }

                    function Ie(t, e, n) { je(t, e, 3, n) }

                    function Ae(t, e, n, r) {
                        (3 & t[2]) === n && je(t, e, n, r) }

                    function Re(t, e) { let n = t[2];
                        (3 & n) === e && (n &= 1023, n += 1, t[2] = n) }

                    function je(t, e, n, r) { const s = null != r ? r : -1; let i = 0; for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
                            if ("number" == typeof e[o + 1]) { if (i = e[o], null != r && i >= r) break } else e[o] < 0 && (t[18] += 65536), (i < s || -1 == s) && (Ne(t, n, e, o), t[18] = (4294901760 & t[18]) + o + 2), o++ }

                    function Ne(t, e, n, r) { const s = n[r] < 0,
                            i = n[r + 1],
                            o = t[s ? -n[r] : n[r]];
                        s ? t[2] >> 10 < t[18] >> 16 && (3 & t[2]) === e && (t[2] += 1024, i.call(o)) : i.call(o) }
                    class Pe { constructor(t, e, n) { this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n } }

                    function Me(t, e, n) { const r = $t(t); let s = 0; for (; s < n.length;) { const i = n[s]; if ("number" == typeof i) { if (0 !== i) break;
                                s++; const o = n[s++],
                                    a = n[s++],
                                    l = n[s++];
                                r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l) } else { const o = i,
                                    a = n[++s];
                                Fe(o) ? r && t.setProperty(e, o, a) : r ? t.setAttribute(e, o, a) : e.setAttribute(o, a), s++ } } return s }

                    function Ve(t) { return 3 === t || 4 === t || 6 === t }

                    function Fe(t) { return 64 === t.charCodeAt(0) }

                    function Le(t, e) { if (null === e || 0 === e.length);
                        else if (null === t || 0 === t.length) t = e.slice();
                        else { let n = -1; for (let r = 0; r < e.length; r++) { const s = e[r]; "number" == typeof s ? n = s : 0 === n || Ue(t, n, s, null, -1 === n || 2 === n ? e[++r] : null) } } return t }

                    function Ue(t, e, n, r, s) { let i = 0,
                            o = t.length; if (-1 === e) o = -1;
                        else
                            for (; i < t.length;) { const n = t[i++]; if ("number" == typeof n) { if (n === e) { o = -1; break } if (n > e) { o = i - 1; break } } }
                        for (; i < t.length;) { const e = t[i]; if ("number" == typeof e) break; if (e === n) { if (null === r) return void(null !== s && (t[i + 1] = s)); if (r === t[i + 1]) return void(t[i + 2] = s) }
                            i++, null !== r && i++, null !== s && i++ } - 1 !== o && (t.splice(o, 0, e), i = o + 1), t.splice(i++, 0, n), null !== r && t.splice(i++, 0, r), null !== s && t.splice(i++, 0, s) }

                    function He(t) { return -1 !== t }

                    function $e(t) { return 32767 & t }

                    function ze(t) { return t >> 16 }

                    function Be(t, e) { let n = ze(t),
                            r = e; for (; n > 0;) r = r[15], n--; return r }

                    function qe(t) { return "string" == typeof t ? t : null == t ? "" : "" + t }

                    function Qe(t) { return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : qe(t) } const We = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(V))();

                    function Ge(t) { return t instanceof Function ? t() : t } let Ze = !0;

                    function Ke(t) { const e = Ze; return Ze = t, e } let Je = 0;

                    function Xe(t, e) { const n = tn(t, e); if (-1 !== n) return n; const r = e[1];
                        r.firstCreatePass && (t.injectorIndex = e.length, Ye(r.data, t), Ye(e, null), Ye(r.blueprint, null)); const s = en(t, e),
                            i = t.injectorIndex; if (He(s)) { const t = $e(s),
                                n = Be(s, e),
                                r = n[1].data; for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s] } return e[i + 8] = s, i }

                    function Ye(t, e) { t.push(0, 0, 0, 0, 0, 0, 0, 0, e) }

                    function tn(t, e) { return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + 8] ? -1 : t.injectorIndex }

                    function en(t, e) { if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex; let n = e[6],
                            r = 1; for (; n && -1 === n.injectorIndex;) n = (e = e[15]) ? e[6] : null, r++; return n ? n.injectorIndex | r << 16 : -1 }

                    function nn(t, e, n) {! function(t, e, n) { let r = "string" != typeof n ? n[B] : n.charCodeAt(0) || 0;
                            null == r && (r = n[B] = Je++); const s = 255 & r,
                                i = 1 << s,
                                o = 64 & s,
                                a = 32 & s,
                                l = e.data;
                            128 & s ? o ? a ? l[t + 7] |= i : l[t + 6] |= i : a ? l[t + 5] |= i : l[t + 4] |= i : o ? a ? l[t + 3] |= i : l[t + 2] |= i : a ? l[t + 1] |= i : l[t] |= i }(t, e, n) }

                    function rn(t, e, n, r = p.Default, s) { if (null !== t) { const s = function(t) { if ("string" == typeof t) return t.charCodeAt(0) || 0; const e = t[B]; return "number" == typeof e && e > 0 ? 255 & e : e }(n); if ("function" == typeof s) { _e(e, t); try { const t = s(); if (null != t || r & p.Optional) return t; throw new Error(`No provider for ${Qe(n)}!`) } finally { Ee() } } else if ("number" == typeof s) { if (-1 === s) return new hn(t, e); let i = null,
                                    o = tn(t, e),
                                    a = -1,
                                    l = r & p.Host ? e[16][6] : null; for ((-1 === o || r & p.SkipSelf) && (a = -1 === o ? en(t, e) : e[o + 8], un(r, !1) ? (i = e[1], o = $e(a), e = Be(a, e)) : o = -1); - 1 !== o;) { a = e[o + 8]; const t = e[1]; if (cn(s, o, t.data)) { const t = on(o, e, n, i, r, l); if (t !== sn) return t }
                                    un(r, e[1].data[o + 8] === l) && cn(s, o, e) ? (i = t, o = $e(a), e = Be(a, e)) : o = -1 } } } if (r & p.Optional && void 0 === s && (s = null), 0 == (r & (p.Self | p.Host))) { const t = e[9],
                                i = Y(void 0); try { return t ? t.get(n, s, r & p.Optional) : nt(n, s, r & p.Optional) } finally { Y(i) } } if (r & p.Optional) return s; throw new Error(`NodeInjector: NOT_FOUND [${Qe(n)}]`) } const sn = {};

                    function on(t, e, n, r, s, i) { const o = e[1],
                            a = o.data[t + 8],
                            l = an(a, o, n, null == r ? Pt(a) && Ze : r != o && 3 === a.type, s & p.Host && i === a); return null !== l ? ln(e, o, l, a) : sn }

                    function an(t, e, n, r, s) { const i = t.providerIndexes,
                            o = e.data,
                            a = 65535 & i,
                            l = t.directiveStart,
                            c = i >> 16,
                            u = s ? a + c : t.directiveEnd; for (let h = r ? a : a + c; h < u; h++) { const t = o[h]; if (h < l && n === t || h >= l && t.type === n) return h } if (s) { const t = o[l]; if (t && Vt(t) && t.type === n) return l } return null }

                    function ln(t, e, n, r) { let s = t[n]; const i = e.data; if (s instanceof Pe) { const o = s; if (o.resolving) throw new Error(`Circular dep for ${Qe(i[n])}`); const a = Ke(o.canSeeViewProviders); let l;
                            o.resolving = !0, o.injectImpl && (l = Y(o.injectImpl)), _e(t, r); try { s = t[n] = o.factory(void 0, i, t, r), e.firstCreatePass && n >= r.directiveStart && function(t, e, n) { const { onChanges: r, onInit: s, doCheck: i } = e;
                                    r && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)), s && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, s), i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i)) }(n, i[n], e) } finally { o.injectImpl && Y(l), Ke(a), o.resolving = !1, Ee() } } return s }

                    function cn(t, e, n) { const r = 64 & t,
                            s = 32 & t; let i; return i = 128 & t ? r ? s ? n[e + 7] : n[e + 6] : s ? n[e + 5] : n[e + 4] : r ? s ? n[e + 3] : n[e + 2] : s ? n[e + 1] : n[e], !!(i & 1 << t) }

                    function un(t, e) { return !(t & p.Self || t & p.Host && e) }
                    class hn { constructor(t, e) { this._tNode = t, this._lView = e }
                        get(t, e) { return rn(this._tNode, this._lView, t, void 0, e) } }

                    function dn(t) { return l(() => { const e = Object.getPrototypeOf(t.prototype).constructor,
                                n = e[z] || function t(e) { const n = e; if (R(e)) return () => { const e = t(A(n)); return e ? e() : null }; let r = It(n); if (null === r) { const t = w(n);
                                        r = t && t.factory } return r || null }(e); return null !== n ? n : t => new t }) }

                    function fn(t) { return t.ngDebugContext }

                    function pn(t) { return t.ngOriginalError }

                    function mn(t, ...e) { t.error(...e) }
                    class gn { constructor() { this._console = console }
                        handleError(t) { const e = this._findOriginalError(t),
                                n = this._findContext(t),
                                r = function(t) { return t.ngErrorLogger || mn }(t);
                            r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n) }
                        _findContext(t) { return t ? fn(t) ? fn(t) : this._findContext(pn(t)) : null }
                        _findOriginalError(t) { let e = pn(t); for (; e && pn(e);) e = pn(e); return e } }
                    class bn { constructor(t) { this.changingThisBreaksApplicationSecurity = t }
                        toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + " (see http://g.co/ng/security#xss)" } }
                    class yn extends bn { getTypeName() { return "HTML" } }
                    class _n extends bn { getTypeName() { return "Style" } }
                    class vn extends bn { getTypeName() { return "Script" } }
                    class wn extends bn { getTypeName() { return "URL" } }
                    class Sn extends bn { getTypeName() { return "ResourceURL" } }

                    function Cn(t) { return t instanceof bn ? t.changingThisBreaksApplicationSecurity : t }

                    function En(t, e) { const n = xn(t); if (null != n && n !== e) { if ("ResourceURL" === n && "URL" === e) return !0; throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`) } return n === e }

                    function xn(t) { return t instanceof bn && t.getTypeName() || null }

                    function kn(t) { return new yn(t) }

                    function On(t) { return new _n(t) }

                    function Tn(t) { return new vn(t) }

                    function Dn(t) { return new wn(t) }

                    function In(t) { return new Sn(t) } let An = !0,
                        Rn = !1;

                    function jn() { return Rn = !0, An }

                    function Nn() { if (Rn) throw new Error("Cannot enable prod mode after platform setup.");
                        An = !1 }
                    class Pn { constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); let e = this.inertDocument.body; if (null == e) { const t = this.inertDocument.createElement("html");
                                this.inertDocument.appendChild(t), e = this.inertDocument.createElement("body"), t.appendChild(e) }
                            e.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !e.querySelector || e.querySelector("svg") ? (e.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = e.querySelector && e.querySelector("svg img") && function() { try { return !!window.DOMParser } catch (t) { return !1 } }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR }
                        getInertBodyElement_XHR(t) { t = "<body><remove></remove>" + t + "</body>"; try { t = encodeURI(t) } catch (r) { return null } const e = new XMLHttpRequest;
                            e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(void 0); const n = e.response.body; return n.removeChild(n.firstChild), n }
                        getInertBodyElement_DOMParser(t) { t = "<body><remove></remove>" + t + "</body>"; try { const e = (new window.DOMParser).parseFromString(t, "text/html").body; return e.removeChild(e.firstChild), e } catch (e) { return null } }
                        getInertBodyElement_InertDocument(t) { const e = this.inertDocument.createElement("template"); if ("content" in e) return e.innerHTML = t, e; const n = this.inertDocument.createElement("body"); return n.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n }
                        stripCustomNsAttrs(t) { const e = t.attributes; for (let r = e.length - 1; 0 < r; r--) { const n = e.item(r).name; "xmlns:ns1" !== n && 0 !== n.indexOf("ns1:") || t.removeAttribute(n) } let n = t.firstChild; for (; n;) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), n = n.nextSibling } } const Mn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                        Vn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

                    function Fn(t) { return (t = String(t)).match(Mn) || t.match(Vn) ? t : (jn() && console.warn(`WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`), "unsafe:" + t) }

                    function Ln(t) { return (t = String(t)).split(",").map(t => Fn(t.trim())).join(", ") }

                    function Un(t) { const e = {}; for (const n of t.split(",")) e[n] = !0; return e }

                    function Hn(...t) { const e = {}; for (const n of t)
                            for (const t in n) n.hasOwnProperty(t) && (e[t] = !0); return e } const $n = Un("area,br,col,hr,img,wbr"),
                        zn = Un("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                        Bn = Un("rp,rt"),
                        qn = Hn(Bn, zn),
                        Qn = Hn($n, Hn(zn, Un("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Hn(Bn, Un("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), qn),
                        Wn = Un("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                        Gn = Un("srcset"),
                        Zn = Hn(Wn, Gn, Un("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Un("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
                        Kn = Un("script,style,template");
                    class Jn { constructor() { this.sanitizedSomething = !1, this.buf = [] }
                        sanitizeChildren(t) { let e = t.firstChild,
                                n = !0; for (; e;)
                                if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild) e = e.firstChild;
                                else
                                    for (; e;) { e.nodeType === Node.ELEMENT_NODE && this.endElement(e); let t = this.checkClobberedElement(e, e.nextSibling); if (t) { e = t; break }
                                        e = this.checkClobberedElement(e, e.parentNode) }
                                return this.buf.join("") }
                        startElement(t) { const e = t.nodeName.toLowerCase(); if (!Qn.hasOwnProperty(e)) return this.sanitizedSomething = !0, !Kn.hasOwnProperty(e);
                            this.buf.push("<"), this.buf.push(e); const n = t.attributes; for (let r = 0; r < n.length; r++) { const t = n.item(r),
                                    e = t.name,
                                    s = e.toLowerCase(); if (!Zn.hasOwnProperty(s)) { this.sanitizedSomething = !0; continue } let i = t.value;
                                Wn[s] && (i = Fn(i)), Gn[s] && (i = Ln(i)), this.buf.push(" ", e, '="', tr(i), '"') } return this.buf.push(">"), !0 }
                        endElement(t) { const e = t.nodeName.toLowerCase();
                            Qn.hasOwnProperty(e) && !$n.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">")) }
                        chars(t) { this.buf.push(tr(t)) }
                        checkClobberedElement(t, e) { if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`); return e } } const Xn = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                        Yn = /([^\#-~ |!])/g;

                    function tr(t) { return t.replace(/&/g, "&amp;").replace(Xn, (function(t) { return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";" })).replace(Yn, (function(t) { return "&#" + t.charCodeAt(0) + ";" })).replace(/</g, "&lt;").replace(/>/g, "&gt;") } let er;

                    function nr(t, e) { let n = null; try { er = er || new Pn(t); let r = e ? String(e) : "";
                            n = er.getInertBodyElement(r); let s = 5,
                                i = r;
                            do { if (0 === s) throw new Error("Failed to sanitize html because the input is unstable");
                                s--, r = i, i = n.innerHTML, n = er.getInertBodyElement(r) } while (r !== i); const o = new Jn,
                                a = o.sanitizeChildren(rr(n) || n); return jn() && o.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), a } finally { if (n) { const t = rr(n) || n; for (; t.firstChild;) t.removeChild(t.firstChild) } } }

                    function rr(t) { return "content" in t && function(t) { return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName }(t) ? t.content : null } const sr = function() { var t = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 }; return t[t.NONE] = "NONE", t[t.HTML] = "HTML", t[t.STYLE] = "STYLE", t[t.SCRIPT] = "SCRIPT", t[t.URL] = "URL", t[t.RESOURCE_URL] = "RESOURCE_URL", t }(),
                        ir = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
                        or = /^url\(([^)]+)\)$/;

                    function ar(t) { if (!(t = String(t).trim())) return ""; const e = t.match(or); return e && Fn(e[1]) === e[1] || t.match(ir) && function(t) { let e = !0,
                                n = !0; for (let r = 0; r < t.length; r++) { const s = t.charAt(r); "'" === s && n ? e = !e : '"' === s && e && (n = !n) } return e && n }(t) ? t : (jn() && console.warn(`WARNING: sanitizing unsafe style value ${t} (see http://g.co/ng/security#xss).`), "unsafe") }

                    function lr(t) { const e = function() { const t = re(); return t && t[12] }(); return e ? e.sanitize(sr.URL, t) || "" : En(t, "URL") ? Cn(t) : Fn(qe(t)) }

                    function cr(t, e) { t.__ngContext__ = e }

                    function ur(t) { throw new Error(`Multiple components match node with tagname ${t.tagName}`) }

                    function hr() { throw new Error("Cannot mix multi providers and regular providers") }

                    function dr(t, e, n) { let r = t.length; for (;;) { const s = t.indexOf(e, n); if (-1 === s) return s; if (0 === s || t.charCodeAt(s - 1) <= 32) { const n = e.length; if (s + n === r || t.charCodeAt(s + n) <= 32) return s }
                            n = s + 1 } }

                    function fr(t, e, n) { let r = 0; for (; r < t.length;) { let s = t[r++]; if (n && "class" === s) { if (s = t[r], -1 !== dr(s.toLowerCase(), e, 0)) return !0 } else if (1 === s) { for (; r < t.length && "string" == typeof(s = t[r++]);)
                                    if (s.toLowerCase() === e) return !0;
                                return !1 } } return !1 }

                    function pr(t, e, n) { return e === (0 !== t.type || n ? t.tagName : "ng-template") }

                    function mr(t, e, n) { let r = 4; const s = t.attrs || [],
                            i = function(t) { for (let e = 0; e < t.length; e++)
                                    if (Ve(t[e])) return e;
                                return t.length }(s); let o = !1; for (let a = 0; a < e.length; a++) { const l = e[a]; if ("number" != typeof l) { if (!o)
                                    if (4 & r) { if (r = 2 | 1 & r, "" !== l && !pr(t, l, n) || "" === l && 1 === e.length) { if (gr(r)) return !1;
                                            o = !0 } } else { const c = 8 & r ? l : e[++a]; if (8 & r && null !== t.attrs) { if (!fr(t.attrs, c, n)) { if (gr(r)) return !1;
                                                o = !0 } continue } const u = br(8 & r ? "class" : l, s, 0 == t.type && "ng-template" !== t.tagName, n); if (-1 === u) { if (gr(r)) return !1;
                                            o = !0; continue } if ("" !== c) { let t;
                                            t = u > i ? "" : s[u + 1].toLowerCase(); const e = 8 & r ? t : null; if (e && -1 !== dr(e, c, 0) || 2 & r && c !== t) { if (gr(r)) return !1;
                                                o = !0 } } } } else { if (!o && !gr(r) && !gr(l)) return !1; if (o && gr(l)) continue;
                                o = !1, r = l | 1 & r } } return gr(r) || o }

                    function gr(t) { return 0 == (1 & t) }

                    function br(t, e, n, r) { if (null === e) return -1; let s = 0; if (r || !n) { let n = !1; for (; s < e.length;) { const r = e[s]; if (r === t) return s; if (3 === r || 6 === r) n = !0;
                                else { if (1 === r || 2 === r) { let t = e[++s]; for (;
                                            "string" == typeof t;) t = e[++s]; continue } if (4 === r) break; if (0 === r) { s += 4; continue } }
                                s += n ? 1 : 2 } return -1 } return function(t, e) { let n = t.indexOf(4); if (n > -1)
                                for (n++; n < t.length;) { if (t[n] === e) return n;
                                    n++ }
                            return -1 }(e, t) }

                    function yr(t, e, n = !1) { for (let r = 0; r < e.length; r++)
                            if (mr(t, e[r], n)) return !0;
                        return !1 }

                    function _r(t, e) { t: for (let n = 0; n < e.length; n++) { const r = e[n]; if (t.length === r.length) { for (let e = 0; e < t.length; e++)
                                    if (t[e] !== r[e]) continue t;
                                return !0 } }
                        return !1 }

                    function vr(t, e) { return t ? ":not(" + e.trim() + ")" : e }

                    function wr(t) { let e = t[0],
                            n = 1,
                            r = 2,
                            s = "",
                            i = !1; for (; n < t.length;) { let o = t[n]; if ("string" == typeof o)
                                if (2 & r) { const e = t[++n];
                                    s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]" } else 8 & r ? s += "." + o : 4 & r && (s += " " + o);
                            else "" === s || gr(o) || (e += vr(i, s), s = ""), r = o, i = i || !gr(r);
                            n++ } return "" !== s && (e += vr(i, s)), e } const Sr = {};

                    function Cr(t) { const e = t[3]; return jt(e) ? e[3] : e }

                    function Er(t) { xr(se(), re(), ke() + t, ue()) }

                    function xr(t, e, n, r) { if (!r)
                            if (3 == (3 & e[2])) { const r = t.preOrderCheckHooks;
                                null !== r && Ie(e, r, n) } else { const r = t.preOrderHooks;
                                null !== r && Ae(e, r, 0, n) }
                        Oe(n) } const kr = { marker: "element" },
                        Or = { marker: "comment" };

                    function Tr(t, e) { return t << 17 | e << 2 }

                    function Dr(t) { return t >> 17 & 32767 }

                    function Ir(t) { return 2 | t }

                    function Ar(t) { return (131068 & t) >> 2 }

                    function Rr(t, e) { return -131069 & t | e << 2 }

                    function jr(t) { return 1 | t }

                    function Nr(t, e) { const n = t.contentQueries; if (null !== n)
                            for (let r = 0; r < n.length; r += 2) { const s = n[r],
                                    i = n[r + 1]; if (-1 !== i) { const n = t.data[i];
                                    ye(s), n.contentQueries(2, e[i], i) } } }

                    function Pr(t, e, n) { return $t(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t) }

                    function Mr(t, e, n, r, s, i, o, a, l, c) { const u = e.blueprint.slice(); return u[0] = s, u[2] = 140 | r, te(u), u[3] = u[15] = t, u[8] = n, u[10] = o || t && t[10], u[11] = a || t && t[11], u[12] = l || t && t[12] || null, u[9] = c || t && t[9] || null, u[6] = i, u[16] = 2 == e.type ? t[16] : u, u }

                    function Vr(t, e, n, r, s, i) { const o = n + 19,
                            a = t.data[o] || function(t, e, n, r, s, i) { const o = oe(),
                                    a = le(),
                                    l = a ? o : o && o.parent,
                                    c = t.data[n] = Wr(0, l && l !== e ? l : null, r, n, s, i); return null === t.firstChild && (t.firstChild = c), o && (!a || null != o.child || null === c.parent && 2 !== o.type ? a || (o.next = c) : o.child = c), c }(t, e, o, r, s, i); return ae(a, !0), a }

                    function Fr(t, e, n) { ve(e, e[6]); try { const r = t.viewQuery;
                            null !== r && bs(1, r, n); const s = t.template;
                            null !== s && Hr(t, e, s, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && Nr(t, e), t.staticViewQueries && bs(2, t.viewQuery, n); const i = t.components;
                            null !== i && function(t, e) { for (let n = 0; n < e.length; n++) ds(t, e[n]) }(e, i) } finally { e[2] &= -5, xe() } }

                    function Lr(t, e, n, r) { const s = e[2]; if (256 == (256 & s)) return;
                        ve(e, e[6]); const i = ue(); try { te(e), ee.lFrame.bindingIndex = t.bindingStartIndex, null !== n && Hr(t, e, n, 2, r); const o = 3 == (3 & s); if (!i)
                                if (o) { const n = t.preOrderCheckHooks;
                                    null !== n && Ie(e, n, null) } else { const n = t.preOrderHooks;
                                    null !== n && Ae(e, n, 0, null), Re(e, 0) }
                            if (function(t) { let e = t[13]; for (; null !== e;) { let n; if (jt(e) && (n = e[2]) >> 1 == -1) { for (let t = 9; t < e.length; t++) { const n = e[t],
                                                    r = n[1];
                                                Xt(n) && Lr(r, n, r.template, n[8]) }
                                            0 != (1 & n) && us(e, t[16]) }
                                        e = e[4] } }(e), null !== t.contentQueries && Nr(t, e), !i)
                                if (o) { const n = t.contentCheckHooks;
                                    null !== n && Ie(e, n) } else { const n = t.contentHooks;
                                    null !== n && Ae(e, n, 1), Re(e, 1) }! function(t, e) { try { const n = t.expandoInstructions; if (null !== n) { let r = t.expandoStartIndex,
                                            s = -1,
                                            i = -1; for (let t = 0; t < n.length; t++) { const o = n[t]; "number" == typeof o ? o <= 0 ? (i = 0 - o, Oe(i), r += 9 + n[++t], s = r) : r += o : (null !== o && (ge(r, s), o(2, e[s])), s++) } } } finally { Oe(-1) } }(t, e); const a = t.components;
                            null !== a && function(t, e) { for (let n = 0; n < e.length; n++) hs(t, e[n]) }(e, a); const l = t.viewQuery; if (null !== l && bs(2, l, r), !i)
                                if (o) { const n = t.viewCheckHooks;
                                    null !== n && Ie(e, n) } else { const n = t.viewHooks;
                                    null !== n && Ae(e, n, 2), Re(e, 2) }!0 === t.firstUpdatePass && (t.firstUpdatePass = !1), i || (e[2] &= -73) } finally { xe() } }

                    function Ur(t, e, n, r) { const s = e[10],
                            i = !ue(),
                            o = Jt(e); try { i && !o && s.begin && s.begin(), o && Fr(t, e, r), Lr(t, e, n, r) } finally { i && !o && s.end && s.end() } }

                    function Hr(t, e, n, r, s) { const i = ke(); try { Oe(-1), 2 & r && e.length > 19 && xr(t, e, 0, ue()), n(r, s) } finally { Oe(i) } }

                    function $r(t, e, n) { if (Nt(e)) { const r = e.directiveEnd; for (let s = e.directiveStart; s < r; s++) { const e = t.data[s];
                                e.contentQueries && e.contentQueries(1, n[s], s) } } }

                    function zr(t, e, n) { ne() && (function(t, e, n, r) { const s = n.directiveStart,
                                i = n.directiveEnd;
                            t.firstCreatePass || Xe(n, e), cr(r, e); const o = n.initialInputs; for (let a = s; a < i; a++) { const r = t.data[a],
                                    i = Vt(r);
                                i && is(e, n, r); const l = ln(e, t, a, n);
                                cr(l, e), null !== o && as(0, a - s, l, r, 0, o), i && (Zt(n.index, e)[8] = l) } }(t, e, n, Qt(n, e)), 128 == (128 & n.flags) && function(t, e, n) { const r = n.directiveStart,
                                s = n.directiveEnd,
                                i = t.expandoInstructions,
                                o = t.firstCreatePass,
                                a = n.index - 19; try { Oe(a); for (let n = r; n < s; n++) { const r = t.data[n],
                                        s = e[n];
                                    null !== r.hostBindings || 0 !== r.hostVars || null !== r.hostAttrs ? Yr(r, s) : o && i.push(null) } } finally { Oe(-1) } }(t, e, n)) }

                    function Br(t, e, n = Qt) { const r = e.localNames; if (null !== r) { let s = e.index + 1; for (let i = 0; i < r.length; i += 2) { const o = r[i + 1],
                                    a = -1 === o ? n(e, t) : t[o];
                                t[s++] = a } } }

                    function qr(t) { return t.tView || (t.tView = Qr(1, -1, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts)) }

                    function Qr(t, e, n, r, s, i, o, a, l, c) { const u = 19 + r,
                            h = u + s,
                            d = function(t, e) { const n = []; for (let r = 0; r < e; r++) n.push(r < t ? null : Sr); return n }(u, h); return d[1] = { type: t, id: e, blueprint: d, template: n, queries: null, viewQuery: a, node: null, data: d.slice().fill(null, u), bindingStartIndex: u, expandoStartIndex: h, expandoInstructions: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: "function" == typeof i ? i() : i, pipeRegistry: "function" == typeof o ? o() : o, firstChild: null, schemas: l, consts: c } }

                    function Wr(t, e, n, r, s, i) { return { type: n, index: r, injectorIndex: e ? e.injectorIndex : -1, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, propertyBindings: null, flags: 0, providerIndexes: 0, tagName: s, attrs: i, mergedAttrs: null, localNames: null, initialInputs: void 0, inputs: null, outputs: null, tViews: null, next: null, projectionNext: null, child: null, parent: e, projection: null, styles: null, residualStyles: void 0, classes: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 } }

                    function Gr(t, e, n) { for (let r in t)
                            if (t.hasOwnProperty(r)) { const s = t[r];
                                (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, s) : n[r] = [e, s] }
                        return n }

                    function Zr(t, e, n, r, s, i, o, a) { const l = Qt(e, n); let c, u = e.inputs; var h;!a && null != u && (c = u[r]) ? (Ss(t, n, c, r, s), Pt(e) && function(t, e) { const n = Zt(e, t);
                            16 & n[2] || (n[2] |= 64) }(n, e.index)) : 3 === e.type && (r = "class" === (h = r) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, s = null != o ? o(s, e.tagName || "", r) : s, $t(i) ? i.setProperty(l, r, s) : Fe(r) || (l.setProperty ? l.setProperty(r, s) : l[r] = s)) }

                    function Kr(t, e, n, r) { let s = !1; if (ne()) { const i = function(t, e, n) { const r = t.directiveRegistry; let s = null; if (r)
                                        for (let i = 0; i < r.length; i++) { const o = r[i];
                                            yr(n, o.selectors, !1) && (s || (s = []), nn(Xe(n, e), t, o.type), Vt(o) ? (2 & n.flags && ur(n), es(t, n), s.unshift(o)) : s.push(o)) }
                                    return s }(t, e, n),
                                o = null === r ? null : { "": -1 }; if (null !== i) { let r = 0;
                                s = !0, rs(n, t.data.length, i.length); for (let t = 0; t < i.length; t++) { const e = i[t];
                                    e.providersResolver && e.providersResolver(e) }
                                ts(t, n, i.length); let a = !1,
                                    l = !1; for (let s = 0; s < i.length; s++) { const c = i[s];
                                    n.mergedAttrs = Le(n.mergedAttrs, c.hostAttrs), ss(t, e, c), ns(t.data.length - 1, c, o), null !== c.contentQueries && (n.flags |= 8), null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars || (n.flags |= 128), !a && (c.onChanges || c.onInit || c.doCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 19), a = !0), l || !c.onChanges && !c.doCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 19), l = !0), Jr(t, c), r += c.hostVars }! function(t, e) { const n = e.directiveEnd,
                                        r = t.data,
                                        s = e.attrs,
                                        i = []; let o = null,
                                        a = null; for (let l = e.directiveStart; l < n; l++) { const t = r[l],
                                            e = t.inputs;
                                        i.push(null !== s ? ls(e, s) : null), o = Gr(e, l, o), a = Gr(t.outputs, l, a) }
                                    null !== o && (o.hasOwnProperty("class") && (e.flags |= 16), o.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = i, e.inputs = o, e.outputs = a }(t, n), Xr(t, e, r) }
                            o && function(t, e, n) { if (e) { const r = t.localNames = []; for (let t = 0; t < e.length; t += 2) { const s = n[e[t + 1]]; if (null == s) throw new Error(`Export of name '${e[t+1]}' not found!`);
                                        r.push(e[t], s) } } }(n, r, o) } return n.mergedAttrs = Le(n.mergedAttrs, n.attrs), s }

                    function Jr(t, e) { const n = t.expandoInstructions;
                        n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars) }

                    function Xr(t, e, n) { for (let r = 0; r < n; r++) e.push(Sr), t.blueprint.push(Sr), t.data.push(null) }

                    function Yr(t, e) { null !== t.hostBindings && t.hostBindings(1, e) }

                    function ts(t, e, n) { const r = 19 - e.index,
                            s = t.data.length - (65535 & e.providerIndexes);
                        (t.expandoInstructions || (t.expandoInstructions = [])).push(r, s, n) }

                    function es(t, e) { e.flags |= 2, (t.components || (t.components = [])).push(e.index) }

                    function ns(t, e, n) { if (n) { if (e.exportAs)
                                for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
                            Vt(e) && (n[""] = t) } }

                    function rs(t, e, n) { t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e }

                    function ss(t, e, n) { t.data.push(n); const r = n.factory || (n.factory = It(n.type)),
                            s = new Pe(r, Vt(n), null);
                        t.blueprint.push(s), e.push(s) }

                    function is(t, e, n) { const r = Qt(e, t),
                            s = qr(n),
                            i = t[10],
                            o = fs(t, Mr(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n)));
                        t[e.index] = o }

                    function os(t, e, n, r, s, i) { const o = Qt(t, e),
                            a = e[11]; if (null == r) $t(a) ? a.removeAttribute(o, n, i) : o.removeAttribute(n);
                        else { const e = null == s ? qe(r) : s(r, t.tagName || "", n);
                            $t(a) ? a.setAttribute(o, n, e, i) : i ? o.setAttributeNS(i, n, e) : o.setAttribute(n, e) } }

                    function as(t, e, n, r, s, i) { const o = i[e]; if (null !== o) { const t = r.setInput; for (let e = 0; e < o.length;) { const s = o[e++],
                                    i = o[e++],
                                    a = o[e++];
                                null !== t ? r.setInput(n, a, s, i) : n[i] = a } } }

                    function ls(t, e) { let n = null,
                            r = 0; for (; r < e.length;) { const s = e[r]; if (0 !== s)
                                if (5 !== s) { if ("number" == typeof s) break;
                                    t.hasOwnProperty(s) && (null === n && (n = []), n.push(s, t[s], e[r + 1])), r += 2 } else r += 2;
                            else r += 4 } return n }

                    function cs(t, e, n, r) { return new Array(t, !0, -2, e, null, null, r, n, null) }

                    function us(t, e) { const n = t[5]; for (let r = 0; r < n.length; r++) { const t = n[r],
                                s = t[3][3][16]; if (s !== e && 0 == (16 & s[2])) { const e = t[1];
                                Lr(e, t, e.template, t[8]) } } }

                    function hs(t, e) { const n = Zt(e, t); if (Xt(n) && 80 & n[2]) { const t = n[1];
                            Lr(t, n, t.template, n[8]) } }

                    function ds(t, e) { const n = Zt(e, t),
                            r = n[1];! function(t, e) { for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n]) }(r, n), Fr(r, n, n[8]) }

                    function fs(t, e) { return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e }

                    function ps(t) { for (; t;) { t[2] |= 64; const e = Cr(t); if (Ft(t) && !e) return t;
                            t = e } return null }

                    function ms(t, e, n) { const r = e[10];
                        r.begin && r.begin(); try { Lr(t, e, t.template, n) } catch (s) { throw ws(e, s), s } finally { r.end && r.end() } }

                    function gs(t) {! function(t) { for (let e = 0; e < t.components.length; e++) { const n = t.components[e],
                                    r = Kt(n),
                                    s = r[1];
                                Ur(s, r, s.template, n) } }(t[8]) }

                    function bs(t, e, n) { ye(0), e(t, n) } const ys = (() => Promise.resolve(null))();

                    function _s(t) { return t[7] || (t[7] = []) }

                    function vs(t) { return t.cleanup || (t.cleanup = []) }

                    function ws(t, e) { const n = t[9],
                            r = n ? n.get(gn, null) : null;
                        r && r.handleError(e) }

                    function Ss(t, e, n, r, s) { for (let i = 0; i < n.length;) { const o = n[i++],
                                a = n[i++],
                                l = e[o],
                                c = t.data[o];
                            null !== c.setInput ? c.setInput(l, s, r, a) : l[a] = s } }

                    function Cs(t, e, n) { const r = qt(e, t),
                            s = t[11];
                        $t(s) ? s.setValue(r, n) : r.textContent = n }

                    function Es(t, e) { const n = e[3]; return -1 === t.index ? jt(n) ? n : null : n }

                    function xs(t, e) { const n = Es(t, e); return n ? Fs(e[11], n[7]) : null }

                    function ks(t, e, n, r, s) { if (null != r) { let i, o = !1;
                            jt(r) ? i = r : Rt(r) && (o = !0, r = r[0]); const a = Bt(r);
                            0 === t && null !== n ? null == s ? Ms(e, n, a) : Ps(e, n, a, s || null) : 1 === t && null !== n ? Ps(e, n, a, s || null) : 2 === t ? $s(e, a, o) : 3 === t && e.destroyNode(a), null != i && function(t, e, n, r, s) { const i = n[7];
                                i !== Bt(n) && ks(e, t, r, i, s); for (let o = 9; o < n.length; o++) { const s = n[o];
                                    Bs(s[1], s, t, e, r, i) } }(e, t, i, n, s) } }

                    function Os(t, e) { return $t(e) ? e.createText(t) : e.createTextNode(t) }

                    function Ts(t, e, n, r) { const s = xs(t.node, e);
                        s && Bs(t, e, e[11], n ? 1 : 2, s, r) }

                    function Ds(t, e) { const n = t[5],
                            r = n.indexOf(e);
                        n.splice(r, 1) }

                    function Is(t, e) { if (t.length <= 9) return; const n = 9 + e,
                            r = t[n]; if (r) { const s = r[17];
                            null !== s && s !== t && Ds(s, r), e > 0 && (t[n - 1][4] = r[4]); const i = ut(t, 9 + e);
                            Ts(r[1], r, !1, null); const o = i[5];
                            null !== o && o.detachView(i[1]), r[3] = null, r[4] = null, r[2] &= -129 } return r }

                    function As(t, e) { if (!(256 & e[2])) { const n = e[11];
                            $t(n) && n.destroyNode && Bs(t, e, n, 3, null, null),
                                function(t) { let e = t[13]; if (!e) return js(t[1], t); for (; e;) { let n = null; if (Rt(e)) n = e[13];
                                        else { const t = e[9];
                                            t && (n = t) } if (!n) { for (; e && !e[4] && e !== t;) Rt(e) && js(e[1], e), e = Rs(e, t);
                                            null === e && (e = t), Rt(e) && js(e[1], e), n = e && e[4] }
                                        e = n } }(e) } }

                    function Rs(t, e) { let n; return Rt(t) && (n = t[6]) && 2 === n.type ? Es(n, t) : t[3] === e ? null : t[3] }

                    function js(t, e) { if (!(256 & e[2])) { e[2] &= -129, e[2] |= 256,
                                function(t, e) { let n; if (null != t && null != (n = t.destroyHooks))
                                        for (let r = 0; r < n.length; r += 2) { const t = e[n[r]];
                                            t instanceof Pe || n[r + 1].call(t) } }(t, e),
                                function(t, e) { const n = t.cleanup; if (null !== n) { const t = e[7]; for (let r = 0; r < n.length - 1; r += 2)
                                            if ("string" == typeof n[r]) { const s = n[r + 1],
                                                    i = "function" == typeof s ? s(e) : Bt(e[s]),
                                                    o = t[n[r + 2]],
                                                    a = n[r + 3]; "boolean" == typeof a ? i.removeEventListener(n[r], o, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(), r += 2 } else n[r].call(t[n[r + 1]]);
                                        e[7] = null } }(t, e); const n = e[6];
                            n && 3 === n.type && $t(e[11]) && e[11].destroy(); const r = e[17]; if (null !== r && jt(e[3])) { r !== e[3] && Ds(r, e); const n = e[5];
                                null !== n && n.detachView(t) } } }

                    function Ns(t, e, n) { let r = e.parent; for (; null != r && (4 === r.type || 5 === r.type);) r = (e = r).parent; if (null == r) { const t = n[6]; return 2 === t.type ? xs(t, n) : n[0] } if (e && 5 === e.type && 4 & e.flags) return Qt(e, n).parentNode; if (2 & r.flags) { const e = t.data,
                                n = e[e[r.index].directiveStart].encapsulation; if (n !== gt.ShadowDom && n !== gt.Native) return null } return Qt(r, n) }

                    function Ps(t, e, n, r) { $t(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0) }

                    function Ms(t, e, n) { $t(t) ? t.appendChild(e, n) : e.appendChild(n) }

                    function Vs(t, e, n, r) { null !== r ? Ps(t, e, n, r) : Ms(t, e, n) }

                    function Fs(t, e) { return $t(t) ? t.parentNode(e) : e.parentNode }

                    function Ls(t, e) { if (2 === t.type) { const n = Es(t, e); return null === n ? null : Hs(n.indexOf(e, 9) - 9, n) } return 4 === t.type || 5 === t.type ? Qt(t, e) : null }

                    function Us(t, e, n, r) { const s = Ns(t, r, e); if (null != s) { const t = e[11],
                                i = Ls(r.parent || e[6], e); if (Array.isArray(n))
                                for (let e = 0; e < n.length; e++) Vs(t, s, n[e], i);
                            else Vs(t, s, n, i) } }

                    function Hs(t, e) { const n = 9 + t + 1; if (n < e.length) { const t = e[n],
                                r = t[1].firstChild; if (null !== r) return function t(e, n) { if (null !== n) { const r = n.type; if (3 === r) return Qt(n, e); if (0 === r) return Hs(-1, e[n.index]); if (4 === r || 5 === r) { const r = n.child; if (null !== r) return t(e, r); { const t = e[n.index]; return jt(t) ? Hs(-1, t) : Bt(t) } } { const r = e[16],
                                            s = r[6],
                                            i = Cr(r),
                                            o = s.projection[n.projection]; return null != o ? t(i, o) : t(e, n.next) } } return null }(t, r) } return e[7] }

                    function $s(t, e, n) { const r = Fs(t, e);
                        r && function(t, e, n, r) { $t(t) ? t.removeChild(e, n, r) : e.removeChild(n) }(t, r, e, n) }

                    function zs(t, e, n, r, s, i, o) { for (; null != n;) { const a = r[n.index],
                                l = n.type;
                            o && 0 === e && (a && cr(Bt(a), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === l || 5 === l ? (zs(t, e, n.child, r, s, i, !1), ks(e, t, s, a, i)) : 1 === l ? Qs(t, e, r, n, s, i) : ks(e, t, s, a, i)), n = o ? n.projectionNext : n.next } }

                    function Bs(t, e, n, r, s, i) { zs(n, r, t.node.child, e, s, i, !1) }

                    function qs(t, e, n) { Qs(e[11], 0, e, n, Ns(t, n, e), Ls(n.parent || e[6], e)) }

                    function Qs(t, e, n, r, s, i) { const o = n[16],
                            a = o[6].projection[r.projection]; if (Array.isArray(a))
                            for (let l = 0; l < a.length; l++) ks(e, t, s, a[l], i);
                        else zs(t, e, a, o[3], s, i, !0) }

                    function Ws(t, e, n) { $t(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n }

                    function Gs(t, e, n) { $t(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n }
                    class Zs { constructor(t, e) { this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null }
                        get rootNodes() { const t = this._lView; return null == t[0] ? function t(e, n, r, s, i = !1) { for (; null !== r;) { const o = n[r.index]; if (null !== o && s.push(Bt(o)), jt(o))
                                        for (let e = 9; e < o.length; e++) { const n = o[e],
                                                r = n[1].firstChild;
                                            null !== r && t(n[1], n, r, s) }
                                    const a = r.type; if (4 === a || 5 === a) t(e, n, r.child, s);
                                    else if (1 === a) { const e = n[16],
                                            i = e[6],
                                            o = Cr(e); let a = i.projection[r.projection];
                                        null !== a && null !== o && t(o[1], o, a, s, !0) }
                                    r = i ? r.projectionNext : r.next } return s }(t[1], t, t[6].child, []) : [] }
                        get context() { return this._lView[8] }
                        get destroyed() { return 256 == (256 & this._lView[2]) }
                        destroy() { if (this._appRef) this._appRef.detachView(this);
                            else if (this._viewContainerRef) { const t = this._viewContainerRef.indexOf(this);
                                t > -1 && this._viewContainerRef.detach(t), this._viewContainerRef = null }
                            As(this._lView[1], this._lView) }
                        onDestroy(t) { var e, n, r;
                            e = this._lView[1], r = t, _s(n = this._lView).push(r), e.firstCreatePass && vs(e).push(n[7].length - 1, null) }
                        markForCheck() { ps(this._cdRefInjectingView || this._lView) }
                        detach() { this._lView[2] &= -129 }
                        reattach() { this._lView[2] |= 128 }
                        detectChanges() { ms(this._lView[1], this._lView, this.context) }
                        checkNoChanges() {! function(t, e, n) { he(!0); try { ms(t, e, n) } finally { he(!1) } }(this._lView[1], this._lView, this.context) }
                        attachToViewContainerRef(t) { if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                            this._viewContainerRef = t }
                        detachFromAppRef() { var t;
                            this._appRef = null, Bs(this._lView[1], t = this._lView, t[11], 2, null, null) }
                        attachToAppRef(t) { if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                            this._appRef = t } }
                    class Ks extends Zs { constructor(t) { super(t), this._view = t }
                        detectChanges() { gs(this._view) }
                        checkNoChanges() {! function(t) { he(!0); try { gs(t) } finally { he(!1) } }(this._view) }
                        get context() { return null } } let Js, Xs, Ys;

                    function ti(t, e, n) { return Js || (Js = class extends t {}), new Js(Qt(e, n)) }

                    function ei(t, e, n, r) { return Xs || (Xs = class extends t { constructor(t, e, n) { super(), this._declarationView = t, this._declarationTContainer = e, this.elementRef = n }
                            createEmbeddedView(t) { const e = this._declarationTContainer.tViews,
                                    n = Mr(this._declarationView, e, t, 16, null, e.node);
                                n[17] = this._declarationView[this._declarationTContainer.index]; const r = this._declarationView[5];
                                null !== r && (n[5] = r.createEmbeddedView(e)), Fr(e, n, t); const s = new Zs(n); return s._tViewNode = n[6], s } }), 0 === n.type ? new Xs(r, n, ti(e, n, r)) : null }

                    function ni(t, e, n, r) { let s;
                        Ys || (Ys = class extends t { constructor(t, e, n) { super(), this._lContainer = t, this._hostTNode = e, this._hostView = n }
                            get element() { return ti(e, this._hostTNode, this._hostView) }
                            get injector() { return new hn(this._hostTNode, this._hostView) }
                            get parentInjector() { const t = en(this._hostTNode, this._hostView),
                                    e = Be(t, this._hostView),
                                    n = function(t, e, n) { if (n.parent && -1 !== n.parent.injectorIndex) { const t = n.parent.injectorIndex; let e = n.parent; for (; null != e.parent && t == e.parent.injectorIndex;) e = e.parent; return e } let r = ze(t),
                                            s = e,
                                            i = e[6]; for (; r > 1;) s = s[15], i = s[6], r--; return i }(t, this._hostView, this._hostTNode); return He(t) && null != n ? new hn(n, e) : new hn(null, this._hostView) }
                            clear() { for (; this.length > 0;) this.remove(this.length - 1) }
                            get(t) { return null !== this._lContainer[8] && this._lContainer[8][t] || null }
                            get length() { return this._lContainer.length - 9 }
                            createEmbeddedView(t, e, n) { const r = t.createEmbeddedView(e || {}); return this.insert(r, n), r }
                            createComponent(t, e, n, r, s) { const i = n || this.parentInjector; if (!s && null == t.ngModule && i) { const t = i.get(it, null);
                                    t && (s = t) } const o = t.create(i, r, void 0, s); return this.insert(o.hostView, e), o }
                            insert(t, e) { const n = t._lView,
                                    r = n[1]; if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!"); if (this.allocateContainerIfNeeded(), jt(n[3])) { const e = this.indexOf(t); if (-1 !== e) this.detach(e);
                                    else { const e = n[3],
                                            r = new Ys(e, e[6], e[3]);
                                        r.detach(r.indexOf(t)) } } const s = this._adjustIndex(e); return function(t, e, n, r) { const s = 9 + r,
                                        i = n.length;
                                    r > 0 && (n[s - 1][4] = e), r < i - 9 ? (e[4] = n[s], ct(n, 9 + r, e)) : (n.push(e), e[4] = null), e[3] = n; const o = e[17];
                                    null !== o && n !== o && function(t, e) { const n = t[5],
                                            r = e[3][3][16];
                                        16 != (16 & r[2]) && e[16] !== r && (t[2] |= 1), null === n ? t[5] = [e] : n.push(e) }(o, e); const a = e[5];
                                    null !== a && a.insertView(t), e[2] |= 128 }(r, n, this._lContainer, s), Ts(r, n, !0, Hs(s, this._lContainer)), t.attachToViewContainerRef(this), ct(this._lContainer[8], s, t), t }
                            move(t, e) { if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!"); return this.insert(t, e) }
                            indexOf(t) { const e = this._lContainer[8]; return null !== e ? e.indexOf(t) : -1 }
                            remove(t) { this.allocateContainerIfNeeded(); const e = this._adjustIndex(t, -1);
                                (function(t, e) { const n = Is(t, e);
                                    n && As(n[1], n) })(this._lContainer, e), ut(this._lContainer[8], e) }
                            detach(t) { this.allocateContainerIfNeeded(); const e = this._adjustIndex(t, -1),
                                    n = Is(this._lContainer, e); return n && null != ut(this._lContainer[8], e) ? new Zs(n) : null }
                            _adjustIndex(t, e = 0) { return null == t ? this.length + e : t }
                            allocateContainerIfNeeded() { null === this._lContainer[8] && (this._lContainer[8] = []) } }); const i = r[n.index]; if (jt(i)) s = i,
                            function(t, e) { t[2] = -2 }(s);
                        else { let t; if (4 === n.type) t = Bt(i);
                            else if (t = r[11].createComment(""), Ft(r)) { const e = r[11],
                                    s = Qt(n, r);
                                Ps(e, Fs(e, s), t, function(t, e) { return $t(t) ? t.nextSibling(e) : e.nextSibling }(e, s)) } else Us(r[1], r, t, n);
                            r[n.index] = s = cs(i, r, t, n), fs(r, s) } return new Ys(s, n, r) }

                    function ri(t = !1) { return function(t, e, n) { if (!n && Pt(t)) { const n = Zt(t.index, e); return new Zs(n, n) } return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new Zs(e[16], e) : null }(oe(), re(), t) } let si = (() => { class t {} return t.__NG_ELEMENT_ID__ = () => ii(), t })(); const ii = ri,
                        oi = new q("Set Injector scope."),
                        ai = {},
                        li = {},
                        ci = []; let ui = void 0;

                    function hi() { return void 0 === ui && (ui = new st), ui }

                    function di(t, e = null, n = null, r) { return new fi(t, n, e || hi(), r) }
                    class fi { constructor(t, e, n, r = null) { this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1; const s = [];
                            e && lt(e, n => this.processProvider(n, t, e)), lt([t], t => this.processInjectorType(t, [], s)), this.records.set(Q, gi(void 0, this)); const i = this.records.get(oi);
                            this.scope = null != i ? i.value : null, this.source = r || ("object" == typeof t ? null : O(t)) }
                        get destroyed() { return this._destroyed }
                        destroy() { this.assertNotDestroyed(), this._destroyed = !0; try { this.onDestroy.forEach(t => t.ngOnDestroy()) } finally { this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear() } }
                        get(t, e = W, n = p.Default) { this.assertNotDestroyed(); const r = X(this); try { if (!(n & p.SkipSelf)) { let e = this.records.get(t); if (void 0 === e) { const n = ("function" == typeof(s = t) || "object" == typeof s && s instanceof q) && _(t);
                                        e = n && this.injectableDefInScope(n) ? gi(pi(t), ai) : null, this.records.set(t, e) } if (null != e) return this.hydrate(t, e) } return (n & p.Self ? hi() : this.parent).get(t, e = n & p.Optional && e === W ? null : e) } catch (i) { if ("NullInjectorError" === i.name) { if ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(O(t)), r) throw i; return function(t, e, n, r) { const s = t.ngTempTokenPath; throw e.__source && s.unshift(e.__source), t.message = function(t, e, n, r = null) { t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t; let s = O(e); if (Array.isArray(e)) s = e.map(O).join(" -> ");
                                            else if ("object" == typeof e) { let t = []; for (let n in e)
                                                    if (e.hasOwnProperty(n)) { let r = e[n];
                                                        t.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : O(r))) }
                                                s = `{${t.join(", ")}}` } return `${n}${r?"("+r+")":""}[${s}]: ${t.replace(G,"\n  ")}` }("\n" + t.message, s, n, r), t.ngTokenPath = s, t.ngTempTokenPath = null, t }(i, t, "R3InjectorError", this.source) } throw i } finally { X(r) } var s }
                        _resolveInjectorDefTypes() { this.injectorDefTypes.forEach(t => this.get(t)) }
                        toString() { const t = []; return this.records.forEach((e, n) => t.push(O(n))), `R3Injector[${t.join(", ")}]` }
                        assertNotDestroyed() { if (this._destroyed) throw new Error("Injector has already been destroyed.") }
                        processInjectorType(t, e, n) { if (!(t = A(t))) return !1; let r = w(t); const s = null == r && t.ngModule || void 0,
                                i = void 0 === s ? t : s,
                                o = -1 !== n.indexOf(i); if (void 0 !== s && (r = w(s)), null == r) return !1; if (null != r.imports && !o) { let t;
                                n.push(i); try { lt(r.imports, r => { this.processInjectorType(r, e, n) && (void 0 === t && (t = []), t.push(r)) }) } finally {} if (void 0 !== t)
                                    for (let e = 0; e < t.length; e++) { const { ngModule: n, providers: r } = t[e];
                                        lt(r, t => this.processProvider(t, n, r || ci)) } }
                            this.injectorDefTypes.add(i), this.records.set(i, gi(r.factory, ai)); const a = r.providers; if (null != a && !o) { const e = t;
                                lt(a, t => this.processProvider(t, e, a)) } return void 0 !== s && void 0 !== t.providers }
                        processProvider(t, e, n) { let r = yi(t = A(t)) ? t : A(t && t.provide); const s = function(t, e, n) { return bi(t) ? gi(void 0, t.useValue) : gi(mi(t, e, n), ai) }(t, e, n); if (yi(t) || !0 !== t.multi) { const t = this.records.get(r);
                                t && void 0 !== t.multi && hr() } else { let e = this.records.get(r);
                                e ? void 0 === e.multi && hr() : (e = gi(void 0, ai, !0), e.factory = () => rt(e.multi), this.records.set(r, e)), r = t, e.multi.push(t) }
                            this.records.set(r, s) }
                        hydrate(t, e) { var n; return e.value === li ? function(t) { throw new Error(`Cannot instantiate cyclic dependency! ${t}`) }(O(t)) : e.value === ai && (e.value = li, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value }
                        injectableDefInScope(t) { return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn)) } }

                    function pi(t) { const e = _(t),
                            n = null !== e ? e.factory : It(t); if (null !== n) return n; const r = w(t); if (null !== r) return r.factory; if (t instanceof q) throw new Error(`Token ${O(t)} is missing a \u0275prov definition.`); if (t instanceof Function) return function(t) { const e = t.length; if (e > 0) { const n = ht(e, "?"); throw new Error(`Can't resolve all parameters for ${O(t)}: (${n.join(", ")}).`) } const n = function(t) { const e = t && (t[S] || t[x] || t[E] && t[E]()); if (e) { const n = function(t) { if (t.hasOwnProperty("name")) return t.name; const e = ("" + t).match(/^function\s*([^\s(]+)/); return null === e ? "" : e[1] }(t); return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n` + `This will become an error in v10. Please add @Injectable() to the "${n}" class.`), e } return null }(t); return null !== n ? () => n.factory(t) : () => new t }(t); throw new Error("unreachable") }

                    function mi(t, e, n) { let r = void 0; if (yi(t)) { const e = A(t); return It(e) || pi(e) } if (bi(t)) r = () => A(t.useValue);
                        else if ((s = t) && s.useFactory) r = () => t.useFactory(...rt(t.deps || []));
                        else if (function(t) { return !(!t || !t.useExisting) }(t)) r = () => et(A(t.useExisting));
                        else { const s = A(t && (t.useClass || t.provide)); if (s || function(t, e, n) { let r = ""; throw t && e && (r = ` - only instances of Provider and Type are allowed, got: [${e.map(t=>t==n?"?"+n+"?":"...").join(", ")}]`), new Error(`Invalid provider for the NgModule '${O(t)}'` + r) }(e, n, t), ! function(t) { return !!t.deps }(t)) return It(s) || pi(s);
                            r = () => new s(...rt(t.deps)) } var s; return r }

                    function gi(t, e, n = !1) { return { factory: t, value: e, multi: n ? [] : void 0 } }

                    function bi(t) { return null !== t && "object" == typeof t && Z in t }

                    function yi(t) { return "function" == typeof t } const _i = function(t, e, n) { return function(t, e = null, n = null, r) { const s = di(t, e, n, r); return s._resolveInjectorDefTypes(), s }({ name: n }, e, t, n) }; let vi = (() => { class t { static create(t, e) { return Array.isArray(t) ? _i(t, e, "") : _i(t.providers, t.parent, t.name || "") } } return t.THROW_IF_NOT_FOUND = W, t.NULL = new st, t.\u0275prov = b({ token: t, providedIn: "any", factory: () => et(Q) }), t.__NG_ELEMENT_ID__ = -1, t })(); const wi = new q("AnalyzeForEntryComponents"); let Si = new Map; const Ci = new Set;

                    function Ei(t) { return "string" == typeof t ? t : t.text() }

                    function xi(t, e) { let n = t.styles,
                            r = t.classes,
                            s = 0; for (let i = 0; i < e.length; i++) { const t = e[i]; "number" == typeof t ? s = t : 1 == s ? r = T(r, t) : 2 == s && (n = T(n, t + ": " + e[++i] + ";")) }
                        null !== n && (t.styles = n), null !== r && (t.classes = r) } let ki = null;

                    function Oi() { if (!ki) { const t = V.Symbol; if (t && t.iterator) ki = t.iterator;
                            else { const t = Object.getOwnPropertyNames(Map.prototype); for (let e = 0; e < t.length; ++e) { const n = t[e]; "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (ki = n) } } } return ki }

                    function Ti(t, e) { return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e) }
                    class Di { constructor(t) { this.wrapped = t }
                        static wrap(t) { return new Di(t) }
                        static unwrap(t) { return Di.isWrapped(t) ? t.wrapped : t }
                        static isWrapped(t) { return t instanceof Di } }

                    function Ii(t) { return !!Ai(t) && (Array.isArray(t) || !(t instanceof Map) && Oi() in t) }

                    function Ai(t) { return null !== t && ("function" == typeof t || "object" == typeof t) }

                    function Ri(t, e, n) { return t[e] = n }

                    function ji(t, e, n) { return !Object.is(t[e], n) && (t[e] = n, !0) }

                    function Ni(t, e, n, r) { const s = ji(t, e, n); return ji(t, e + 1, r) || s }

                    function Pi(t, e, n, r) { const s = re(); return ji(s, pe(), e) && (se(), os(Te(), s, t, e, n, r)), Pi }

                    function Mi(t, e, n, r) { return ji(t, pe(), n) ? e + qe(n) + r : Sr }

                    function Vi(t, e, n, r, s, i, o, a) { const l = re(),
                            c = se(),
                            u = t + 19,
                            h = c.firstCreatePass ? function(t, e, n, r, s, i, o, a, l) { const c = e.consts,
                                    u = Vr(e, n[6], t, 0, o || null, Yt(c, a));
                                Kr(e, n, u, Yt(c, l)), De(e, u); const h = u.tViews = Qr(2, -1, r, s, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c),
                                    d = Wr(0, null, 2, -1, null, null); return d.injectorIndex = u.injectorIndex, h.node = d, null !== e.queries && (e.queries.template(e, u), h.queries = e.queries.embeddedTView(u)), u }(t, c, l, e, n, r, s, i, o) : c.data[u];
                        ae(h, !1); const d = l[11].createComment("");
                        Us(c, l, d, h), cr(d, l), fs(l, l[u] = cs(d, l, d, h)), Mt(h) && zr(c, l, h), null != o && Br(l, h, a) }

                    function Fi(t) { return Gt(ee.lFrame.contextLView, t) }

                    function Li(t, e = p.Default) { const n = re(); return null == n ? et(t, e) : rn(oe(), n, A(t), e) }

                    function Ui(t) { return function(t, e) { if ("class" === e) return t.classes; if ("style" === e) return t.styles; const n = t.attrs; if (n) { const t = n.length; let r = 0; for (; r < t;) { const s = n[r]; if (Ve(s)) break; if (0 === s) r += 2;
                                    else if ("number" == typeof s)
                                        for (r++; r < t && "string" == typeof n[r];) r++;
                                    else { if (s === e) return n[r + 1];
                                        r += 2 } } } return null }(oe(), t) }

                    function Hi() { throw new Error("invalid") }

                    function $i(t, e, n) { const r = re(); return ji(r, pe(), e) && Zr(se(), Te(), r, t, e, r[11], n, !1), $i }

                    function zi(t, e, n, r, s) { const i = s ? "class" : "style";
                        Ss(t, n, e.inputs[i], i, r) }

                    function Bi(t, e, n, r) { const s = re(),
                            i = se(),
                            o = 19 + t,
                            a = s[11],
                            l = s[o] = Pr(e, a, ee.lFrame.currentNamespace),
                            c = i.firstCreatePass ? function(t, e, n, r, s, i, o) { const a = e.consts,
                                    l = Yt(a, i),
                                    c = Vr(e, n[6], t, 3, s, l); return Kr(e, n, c, Yt(a, o)), null !== c.mergedAttrs && xi(c, c.mergedAttrs), null !== e.queries && e.queries.elementStart(e, c), c }(t, i, s, 0, e, n, r) : i.data[o];
                        ae(c, !0); const u = c.mergedAttrs;
                        null !== u && Me(a, l, u); const h = c.classes;
                        null !== h && Gs(a, l, h); const d = c.styles;
                        null !== d && Ws(a, l, d), Us(i, s, l, c), 0 === ee.lFrame.elementDepthCount && cr(l, s), ee.lFrame.elementDepthCount++, Mt(c) && (zr(i, s, c), $r(i, c, s)), null !== r && Br(s, c) }

                    function qi() { let t = oe();
                        le() ? ce() : (t = t.parent, ae(t, !1)); const e = t;
                        ee.lFrame.elementDepthCount--; const n = se();
                        n.firstCreatePass && (De(n, t), Nt(t) && n.queries.elementEnd(t)), null !== e.classes && function(t) { return 0 != (16 & t.flags) }(e) && zi(n, e, re(), e.classes, !0), null !== e.styles && function(t) { return 0 != (32 & t.flags) }(e) && zi(n, e, re(), e.styles, !1) }

                    function Qi(t, e, n, r) { Bi(t, e, n, r), qi() }

                    function Wi(t, e, n) { const r = re(),
                            s = se(),
                            i = t + 19,
                            o = s.firstCreatePass ? function(t, e, n, r, s) { const i = e.consts,
                                    o = Yt(i, r),
                                    a = Vr(e, n[6], t, 4, "ng-container", o); return null !== o && xi(a, o), Kr(e, n, a, Yt(i, s)), null !== e.queries && e.queries.elementStart(e, a), a }(t, s, r, e, n) : s.data[i];
                        ae(o, !0); const a = r[i] = r[11].createComment("");
                        Us(s, r, a, o), cr(a, r), Mt(o) && (zr(s, r, o), $r(s, o, r)), null != n && Br(r, o) }

                    function Gi() { let t = oe(); const e = se();
                        le() ? ce() : (t = t.parent, ae(t, !1)), e.firstCreatePass && (De(e, t), Nt(t) && e.queries.elementEnd(t)) }

                    function Zi() { return re() }

                    function Ki(t) { return !!t && "function" == typeof t.then }

                    function Ji(t) { return !!t && "function" == typeof t.subscribe }

                    function Xi(t, e, n = !1, r) { const s = re(),
                            i = se(),
                            o = oe(); return function(t, e, n, r, s, i, o = !1, a) { const l = Mt(r),
                                c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
                                u = _s(e); let h = !0; if (3 === r.type) { const d = Qt(r, e),
                                    f = a ? a(d) : bt,
                                    p = f.target || d,
                                    m = u.length,
                                    g = a ? t => a(Bt(t[r.index])).target : r.index; if ($t(n)) { let o = null; if (!a && l && (o = function(t, e, n, r) { const s = t.cleanup; if (null != s)
                                                for (let i = 0; i < s.length - 1; i += 2) { const t = s[i]; if (t === n && s[i + 1] === r) { const t = e[7],
                                                            n = s[i + 2]; return t.length > n ? t[n] : null } "string" == typeof t && (i += 2) }
                                            return null }(t, e, s, r.index)), null !== o)(o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i, o.__ngLastListenerFn__ = i, h = !1;
                                    else { i = to(r, e, i, !1); const t = n.listen(f.name || p, s, i);
                                        u.push(i, t), c && c.push(s, g, m, m + 1) } } else i = to(r, e, i, !0), p.addEventListener(s, i, o), u.push(i), c && c.push(s, g, m, o) } const d = r.outputs; let f; if (h && null !== d && (f = d[s])) { const t = f.length; if (t)
                                    for (let n = 0; n < t; n += 2) { const t = e[f[n]][f[n + 1]].subscribe(i),
                                            o = u.length;
                                        u.push(i, t), c && c.push(s, r.index, o, -(o + 1)) } } }(i, s, s[11], o, t, e, n, r), Xi }

                    function Yi(t, e, n) { try { return !1 !== e(n) } catch (r) { return ws(t, r), !1 } }

                    function to(t, e, n, r) { return function s(i) { if (i === Function) return n; const o = 2 & t.flags ? Zt(t.index, e) : e;
                            0 == (32 & e[2]) && ps(o); let a = Yi(e, n, i),
                                l = s.__ngNextListenerFn__; for (; l;) a = Yi(e, l, i) && a, l = l.__ngNextListenerFn__; return r && !1 === a && (i.preventDefault(), i.returnValue = !1), a } }

                    function eo(t = 1) { return function(t) { return (ee.lFrame.contextLView = function(t, e) { for (; t > 0;) e = e[15], t--; return e }(t, ee.lFrame.contextLView))[8] }(t) }

                    function no(t, e) { let n = null; const r = function(t) { const e = t.attrs; if (null != e) { const t = e.indexOf(5); if (0 == (1 & t)) return e[t + 1] } return null }(t); for (let s = 0; s < e.length; s++) { const i = e[s]; if ("*" !== i) { if (null === r ? yr(t, i, !0) : _r(r, i)) return s } else n = s } return n }

                    function ro(t) { const e = re()[16][6]; if (!e.projection) { const n = e.projection = ht(t ? t.length : 1, null),
                                r = n.slice(); let s = e.child; for (; null !== s;) { const e = t ? no(s, t) : 0;
                                null !== e && (r[e] ? r[e].projectionNext = s : n[e] = s, r[e] = s), s = s.next } } } let so = !1;

                    function io(t) { so = t }

                    function oo(t, e = 0, n) { const r = re(),
                            s = se(),
                            i = Vr(s, r[6], t, 1, null, n || null);
                        null === i.projection && (i.projection = e), ce(), so || qs(s, r, i) }

                    function ao(t, e, n) { return lo(t, "", e, "", n), ao }

                    function lo(t, e, n, r, s) { const i = re(),
                            o = Mi(i, e, n, r); return o !== Sr && Zr(se(), Te(), i, t, o, i[11], s, !1), lo } const co = [];

                    function uo(t, e, n, r, s) { const i = t[n + 1],
                            o = null === e; let a = r ? Dr(i) : Ar(i),
                            l = !1; for (; 0 !== a && (!1 === l || o);) { const n = t[a + 1];
                            ho(t[a], e) && (l = !0, t[a + 1] = r ? jr(n) : Ir(n)), a = r ? Dr(n) : Ar(n) }
                        l && (t[n + 1] = r ? Ir(i) : jr(i)) }

                    function ho(t, e) { return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && pt(t, e) >= 0 } const fo = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };

                    function po(t) { return t.substring(fo.key, fo.keyEnd) }

                    function mo(t, e) { const n = fo.textEnd; return n === e ? -1 : (e = fo.keyEnd = function(t, e, n) { for (; e < n && t.charCodeAt(e) > 32;) e++; return e }(t, fo.key = e, n), go(t, e, n)) }

                    function go(t, e, n) { for (; e < n && t.charCodeAt(e) <= 32;) e++; return e }

                    function bo(t, e, n) { return wo(t, e, n, !1), bo }

                    function yo(t, e) { return wo(t, e, null, !0), yo }

                    function _o(t) { So(dt, vo, t, !0) }

                    function vo(t, e) { for (let n = function(t) { return function(t) { fo.key = 0, fo.keyEnd = 0, fo.value = 0, fo.valueEnd = 0, fo.textEnd = t.length }(t), mo(t, go(t, 0, fo.textEnd)) }(e); n >= 0; n = mo(e, n)) dt(t, po(e), !0) }

                    function wo(t, e, n, r) { const s = re(),
                            i = se(),
                            o = me(2); if (i.firstUpdatePass && Eo(i, t, o, r), e !== Sr && ji(s, o, e)) { let a;
                            null == n && (a = function() { const t = ee.lFrame; return null === t ? null : t.currentSanitizer }()) && (n = a), Oo(i, i.data[ke() + 19], s, s[11], t, s[o + 1] = function(t, e) { return null == t || ("function" == typeof e ? t = e(t) : "string" == typeof e ? t += e : "object" == typeof t && (t = O(Cn(t)))), t }(e, n), r, o) } }

                    function So(t, e, n, r) { const s = se(),
                            i = me(2);
                        s.firstUpdatePass && Eo(s, null, i, r); const o = re(); if (n !== Sr && ji(o, i, n)) { const a = s.data[ke() + 19]; if (Io(a, r) && !Co(s, i)) { let t = r ? a.classes : a.styles;
                                null !== t && (n = T(t, n || "")), zi(s, a, o, n, r) } else ! function(t, e, n, r, s, i, o, a) { s === Sr && (s = co); let l = 0,
                                    c = 0,
                                    u = 0 < s.length ? s[0] : null,
                                    h = 0 < i.length ? i[0] : null; for (; null !== u || null !== h;) { const d = l < s.length ? s[l + 1] : void 0,
                                        f = c < i.length ? i[c + 1] : void 0; let p = null,
                                        m = void 0;
                                    u === h ? (l += 2, c += 2, d !== f && (p = h, m = f)) : null === h || null !== u && u < h ? (l += 2, p = u) : (c += 2, p = h, m = f), null !== p && Oo(t, e, n, r, p, m, o, a), u = l < s.length ? s[l] : null, h = c < i.length ? i[c] : null } }(s, a, o, o[11], o[i + 1], o[i + 1] = function(t, e, n) { if (null == n || "" === n) return co; const r = [],
                                    s = Cn(n); if (Array.isArray(s))
                                    for (let i = 0; i < s.length; i++) t(r, s[i], !0);
                                else if ("object" == typeof s)
                                    for (const i in s) s.hasOwnProperty(i) && t(r, i, s[i]);
                                else "string" == typeof s && e(r, s); return r }(t, e, n), r, i) } }

                    function Co(t, e) { return e >= t.expandoStartIndex }

                    function Eo(t, e, n, r) { const s = t.data; if (null === s[n + 1]) { const i = s[ke() + 19],
                                o = Co(t, n);
                            Io(i, r) && null === e && !o && (e = !1), e = function(t, e, n, r) { const s = function(t) { const e = ee.lFrame.currentDirectiveIndex; return -1 === e ? null : t[e] }(t); let i = r ? e.residualClasses : e.residualStyles; if (null === s) 0 === (r ? e.classBindings : e.styleBindings) && (n = ko(n = xo(null, t, e, n, r), e.attrs, r), i = null);
                                    else { const o = e.directiveStylingLast; if (-1 === o || t[o] !== s)
                                            if (n = xo(s, t, e, n, r), null === i) { let n = function(t, e, n) { const r = n ? e.classBindings : e.styleBindings; if (0 !== Ar(r)) return t[Dr(r)] }(t, e, r);
                                                void 0 !== n && Array.isArray(n) && (n = xo(null, t, e, n[1], r), n = ko(n, e.attrs, r), function(t, e, n, r) { t[Dr(n ? e.classBindings : e.styleBindings)] = r }(t, e, r, n)) } else i = function(t, e, n) { let r = void 0; const s = e.directiveEnd; for (let i = 1 + e.directiveStylingLast; i < s; i++) r = ko(r, t[i].hostAttrs, n); return ko(r, e.attrs, n) }(t, e, r) } return void 0 !== i && (r ? e.residualClasses = i : e.residualStyles = i), n }(s, i, e, r),
                                function(t, e, n, r, s, i) { let o = i ? e.classBindings : e.styleBindings,
                                        a = Dr(o),
                                        l = Ar(o);
                                    t[r] = n; let c, u = !1; if (Array.isArray(n)) { const t = n;
                                        c = t[1], (null === c || pt(t, c) > 0) && (u = !0) } else c = n; if (s)
                                        if (0 !== l) { const e = Dr(t[a + 1]);
                                            t[r + 1] = Tr(e, a), 0 !== e && (t[e + 1] = Rr(t[e + 1], r)), t[a + 1] = 131071 & t[a + 1] | r << 17 } else t[r + 1] = Tr(a, 0), 0 !== a && (t[a + 1] = Rr(t[a + 1], r)), a = r;
                                    else t[r + 1] = Tr(l, 0), 0 === a ? a = r : t[l + 1] = Rr(t[l + 1], r), l = r;
                                    u && (t[r + 1] = Ir(t[r + 1])), uo(t, c, r, !0), uo(t, c, r, !1),
                                        function(t, e, n, r, s) { const i = s ? t.residualClasses : t.residualStyles;
                                            null != i && "string" == typeof e && pt(i, e) >= 0 && (n[r + 1] = jr(n[r + 1])) }(e, c, t, r, i), o = Tr(a, l), i ? e.classBindings = o : e.styleBindings = o }(s, i, e, n, o, r) } }

                    function xo(t, e, n, r, s) { let i = null; const o = n.directiveEnd; let a = n.directiveStylingLast; for (-1 === a ? a = n.directiveStart : a++; a < o && (i = e[a], r = ko(r, i.hostAttrs, s), i !== t);) a++; return null !== t && (n.directiveStylingLast = a), r }

                    function ko(t, e, n) { const r = n ? 1 : 2; let s = -1; if (null !== e)
                            for (let i = 0; i < e.length; i++) { const o = e[i]; "number" == typeof o ? s = o : s === r && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), dt(t, o, !!n || e[++i])) }
                        return void 0 === t ? null : t }

                    function Oo(t, e, n, r, s, i, o, a) { if (3 !== e.type) return; const l = t.data,
                            c = l[a + 1];
                        Do(1 == (1 & c) ? To(l, e, n, s, Ar(c), o) : void 0) || (Do(i) || function(t) { return 2 == (2 & t) }(c) && (i = To(l, null, n, s, a, o)), function(t, e, n, r, s) { const i = $t(t); if (e) s ? i ? t.addClass(n, r) : n.classList.add(r) : i ? t.removeClass(n, r) : n.classList.remove(r);
                            else { const e = -1 == r.indexOf("-") ? void 0 : 2;
                                null == s ? i ? t.removeStyle(n, r, e) : n.style.removeProperty(r) : i ? t.setStyle(n, r, s, e) : n.style.setProperty(r, s) } }(r, o, qt(ke(), n), s, i)) }

                    function To(t, e, n, r, s, i) { const o = null === e; let a = void 0; for (; s > 0;) { const e = t[s],
                                i = Array.isArray(e),
                                l = i ? e[1] : e,
                                c = null === l; let u = n[s + 1];
                            u === Sr && (u = c ? co : void 0); let h = c ? ft(u, r) : l === r ? u : void 0; if (i && !Do(h) && (h = ft(e, r)), Do(h) && (a = h, o)) return a; const d = t[s + 1];
                            s = o ? Dr(d) : Ar(d) } if (null !== e) { let t = i ? e.residualClasses : e.residualStyles;
                            null != t && (a = ft(t, r)) } return a }

                    function Do(t) { return void 0 !== t }

                    function Io(t, e) { return 0 != (t.flags & (e ? 16 : 32)) }

                    function Ao(t, e = "") { const n = re(),
                            r = se(),
                            s = t + 19,
                            i = r.firstCreatePass ? Vr(r, n[6], t, 3, null, null) : r.data[s],
                            o = n[s] = Os(e, n[11]);
                        Us(r, n, o, i), ae(i, !1) }

                    function Ro(t) { return jo("", t, ""), Ro }

                    function jo(t, e, n) { const r = re(),
                            s = Mi(r, t, e, n); return s !== Sr && Cs(r, ke(), s), jo }

                    function No(t, e, n, r, s) { const i = re(),
                            o = function(t, e, n, r, s, i) { const o = Ni(t, fe(), n, s); return me(2), o ? e + qe(n) + r + qe(s) + i : Sr }(i, t, e, n, r, s); return o !== Sr && Cs(i, ke(), o), No }

                    function Po(t, e, n) { So(dt, vo, Mi(re(), t, e, n), !0) }

                    function Mo(t, e, n, r, s, i, o, a, l) { So(dt, vo, function(t, e, n, r, s, i, o, a, l, c) { const u = function(t, e, n, r, s, i) { const o = Ni(t, e, n, r); return Ni(t, e + 2, s, i) || o }(t, fe(), n, s, o, l); return me(4), u ? e + qe(n) + r + qe(s) + i + qe(o) + a + qe(l) + c : Sr }(re(), t, e, n, r, s, i, o, a, l), !0) }

                    function Vo(t, e, n) { const r = re(); return ji(r, pe(), e) && Zr(se(), Te(), r, t, e, r[11], n, !0), Vo }

                    function Fo(t, e) { const n = Kt(t)[1],
                            r = n.data.length - 1;
                        De(n, { directiveStart: r, directiveEnd: r + 1 }) }

                    function Lo(t) { let e = Object.getPrototypeOf(t.type.prototype).constructor,
                            n = !0; const r = [t]; for (; e;) { let s = void 0; if (Vt(t)) s = e.\u0275cmp || e.\u0275dir;
                            else { if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
                                s = e.\u0275dir } if (s) { if (n) { r.push(s); const e = t;
                                    e.inputs = Uo(t.inputs), e.declaredInputs = Uo(t.declaredInputs), e.outputs = Uo(t.outputs); const n = s.hostBindings;
                                    n && zo(t, n); const i = s.viewQuery,
                                        o = s.contentQueries; if (i && Ho(t, i), o && $o(t, o), g(t.inputs, s.inputs), g(t.declaredInputs, s.declaredInputs), g(t.outputs, s.outputs), Vt(s) && s.data.animation) { const e = t.data;
                                        e.animation = (e.animation || []).concat(s.data.animation) }
                                    e.afterContentChecked = e.afterContentChecked || s.afterContentChecked, e.afterContentInit = t.afterContentInit || s.afterContentInit, e.afterViewChecked = t.afterViewChecked || s.afterViewChecked, e.afterViewInit = t.afterViewInit || s.afterViewInit, e.doCheck = t.doCheck || s.doCheck, e.onDestroy = t.onDestroy || s.onDestroy, e.onInit = t.onInit || s.onInit } const e = s.features; if (e)
                                    for (let r = 0; r < e.length; r++) { const s = e[r];
                                        s && s.ngInherit && s(t), s === Lo && (n = !1) } }
                            e = Object.getPrototypeOf(e) }! function(t) { let e = 0,
                                n = null; for (let r = t.length - 1; r >= 0; r--) { const s = t[r];
                                s.hostVars = e += s.hostVars, s.hostAttrs = Le(s.hostAttrs, n = Le(n, s.hostAttrs)) } }(r) }

                    function Uo(t) { return t === bt ? {} : t === yt ? [] : t }

                    function Ho(t, e) { const n = t.viewQuery;
                        t.viewQuery = n ? (t, r) => { e(t, r), n(t, r) } : e }

                    function $o(t, e) { const n = t.contentQueries;
                        t.contentQueries = n ? (t, r, s) => { e(t, r, s), n(t, r, s) } : e }

                    function zo(t, e) { const n = t.hostBindings;
                        t.hostBindings = n ? (t, r) => { e(t, r), n(t, r) } : e }
                    class Bo { constructor(t, e, n) { this.previousValue = t, this.currentValue = e, this.firstChange = n }
                        isFirstChange() { return this.firstChange } }

                    function qo(t) { t.type.prototype.ngOnChanges && (t.setInput = Qo, t.onChanges = function() { const t = Wo(this),
                                e = t && t.current; if (e) { const n = t.previous; if (n === bt) t.previous = e;
                                else
                                    for (let t in e) n[t] = e[t];
                                t.current = null, this.ngOnChanges(e) } }) }

                    function Qo(t, e, n, r) { const s = Wo(t) || function(t, e) { return t.__ngSimpleChanges__ = e }(t, { previous: bt, current: null }),
                            i = s.current || (s.current = {}),
                            o = s.previous,
                            a = this.declaredInputs[n],
                            l = o[a];
                        i[a] = new Bo(l && l.currentValue, e, o === bt), t[r] = e }

                    function Wo(t) { return t.__ngSimpleChanges__ || null }

                    function Go(t, e, n, r, s) { if (t = A(t), Array.isArray(t))
                            for (let i = 0; i < t.length; i++) Go(t[i], e, n, r, s);
                        else { const i = se(),
                                o = re(); let a = yi(t) ? t : A(t.provide),
                                l = mi(t); const c = oe(),
                                u = 65535 & c.providerIndexes,
                                h = c.directiveStart,
                                d = c.providerIndexes >> 16; if (yi(t) || !t.multi) { const r = new Pe(l, s, Li),
                                    f = Jo(a, e, s ? u : u + d, h); - 1 === f ? (nn(Xe(c, o), i, a), Zo(i, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, s && (c.providerIndexes += 65536), n.push(r), o.push(r)) : (n[f] = r, o[f] = r) } else { const f = Jo(a, e, u + d, h),
                                    p = Jo(a, e, u, u + d),
                                    m = f >= 0 && n[f],
                                    g = p >= 0 && n[p]; if (s && !g || !s && !m) { nn(Xe(c, o), i, a); const u = function(t, e, n, r, s) { const i = new Pe(t, n, Li); return i.multi = [], i.index = e, i.componentProviders = 0, Ko(i, s, r && !n), i }(s ? Yo : Xo, n.length, s, r, l);!s && g && (n[p].providerFactory = u), Zo(i, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, s && (c.providerIndexes += 65536), n.push(u), o.push(u) } else Zo(i, t, f > -1 ? f : p), Ko(n[s ? p : f], l, !s && r);!s && r && g && n[p].componentProviders++ } } }

                    function Zo(t, e, n) { if (yi(e) || e.useClass) { const r = (e.useClass || e).prototype.ngOnDestroy;
                            r && (t.destroyHooks || (t.destroyHooks = [])).push(n, r) } }

                    function Ko(t, e, n) { t.multi.push(e), n && t.componentProviders++ }

                    function Jo(t, e, n, r) { for (let s = n; s < r; s++)
                            if (e[s] === t) return s;
                        return -1 }

                    function Xo(t, e, n, r) { return ta(this.multi, []) }

                    function Yo(t, e, n, r) { const s = this.multi; let i; if (this.providerFactory) { const t = this.providerFactory.componentProviders,
                                e = ln(n, n[1], this.providerFactory.index, r);
                            i = e.slice(0, t), ta(s, i); for (let n = t; n < e.length; n++) i.push(e[n]) } else i = [], ta(s, i); return i }

                    function ta(t, e) { for (let n = 0; n < t.length; n++) e.push((0, t[n])()); return e }

                    function ea(t, e = []) { return n => { n.providersResolver = (n, r) => function(t, e, n) { const r = se(); if (r.firstCreatePass) { const s = Vt(t);
                                    Go(n, r.data, r.blueprint, s, !0), Go(e, r.data, r.blueprint, s, !1) } }(n, r ? r(t) : t, e) } }
                    qo.ngInherit = !0;
                    class na {}
                    class ra { resolveComponentFactory(t) { throw
                            function(t) { const e = Error(`No component factory found for ${O(t)}. Did you add it to @NgModule.entryComponents?`); return e.ngComponent = t, e }(t) } } let sa = (() => { class t {} return t.NULL = new ra, t })(),
                        ia = (() => { class t { constructor(t) { this.nativeElement = t } } return t.__NG_ELEMENT_ID__ = () => oa(t), t })(); const oa = function(t) { return ti(t, oe(), re()) };
                    class aa {} const la = function() { var t = { Important: 1, DashCase: 2 }; return t[t.Important] = "Important", t[t.DashCase] = "DashCase", t }(); let ca = (() => { class t {} return t.__NG_ELEMENT_ID__ = () => ua(), t })(); const ua = function() { const t = re(),
                            e = Zt(oe().index, t); return function(t) { const e = t[11]; if ($t(e)) return e; throw new Error("Cannot inject Renderer2 when the application uses Renderer3!") }(Rt(e) ? e : t) }; let ha = (() => { class t {} return t.\u0275prov = b({ token: t, providedIn: "root", factory: () => null }), t })();
                    class da { constructor(t) { this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".") } } const fa = new da("9.0.7");
                    class pa { constructor() {}
                        supports(t) { return Ii(t) }
                        create(t) { return new ga(t) } } const ma = (t, e) => e;
                    class ga { constructor(t) { this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || ma }
                        forEachItem(t) { let e; for (e = this._itHead; null !== e; e = e._next) t(e) }
                        forEachOperation(t) { let e = this._itHead,
                                n = this._removalsHead,
                                r = 0,
                                s = null; for (; e || n;) { const i = !n || e && e.currentIndex < va(n, r, s) ? e : n,
                                    o = va(i, r, s),
                                    a = i.currentIndex; if (i === n) r--, n = n._nextRemoved;
                                else if (e = e._next, null == i.previousIndex) r++;
                                else { s || (s = []); const t = o - r,
                                        e = a - r; if (t != e) { for (let n = 0; n < t; n++) { const r = n < s.length ? s[n] : s[n] = 0,
                                                i = r + n;
                                            e <= i && i < t && (s[n] = r + 1) }
                                        s[i.previousIndex] = e - t } }
                                o !== a && t(i, o, a) } }
                        forEachPreviousItem(t) { let e; for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e) }
                        forEachAddedItem(t) { let e; for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e) }
                        forEachMovedItem(t) { let e; for (e = this._movesHead; null !== e; e = e._nextMoved) t(e) }
                        forEachRemovedItem(t) { let e; for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e) }
                        forEachIdentityChange(t) { let e; for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e) }
                        diff(t) { if (null == t && (t = []), !Ii(t)) throw new Error(`Error trying to diff '${O(t)}'. Only arrays and iterables are allowed`); return this.check(t) ? this : null }
                        onDestroy() {}
                        check(t) { this._reset(); let e, n, r, s = this._itHead,
                                i = !1; if (Array.isArray(t)) { this.length = t.length; for (let e = 0; e < this.length; e++) n = t[e], r = this._trackByFn(e, n), null !== s && Ti(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, n, r, e)), Ti(s.item, n) || this._addIdentityChange(s, n)) : (s = this._mismatch(s, n, r, e), i = !0), s = s._next } else e = 0,
                                function(t, e) { if (Array.isArray(t))
                                        for (let n = 0; n < t.length; n++) e(t[n]);
                                    else { const n = t[Oi()](); let r; for (; !(r = n.next()).done;) e(r.value) } }(t, t => { r = this._trackByFn(e, t), null !== s && Ti(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, t, r, e)), Ti(s.item, t) || this._addIdentityChange(s, t)) : (s = this._mismatch(s, t, r, e), i = !0), s = s._next, e++ }), this.length = e; return this._truncate(s), this.collection = t, this.isDirty }
                        get isDirty() { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead }
                        _reset() { if (this.isDirty) { let t, e; for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next; for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex; for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
                                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null } }
                        _mismatch(t, e, n, r) { let s; return null === t ? s = this._itTail : (s = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Ti(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, s, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Ti(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, s, r)) : t = this._addAfter(new ba(e, n), s, r), t }
                        _verifyReinsertion(t, e, n, r) { let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null); return null !== s ? t = this._reinsertAfter(s, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t }
                        _truncate(t) { for (; null !== t;) { const e = t._next;
                                this._addToRemovals(this._unlink(t)), t = e }
                            null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null) }
                        _reinsertAfter(t, e, n) { null !== this._unlinkedRecords && this._unlinkedRecords.remove(t); const r = t._prevRemoved,
                                s = t._nextRemoved; return null === r ? this._removalsHead = s : r._nextRemoved = s, null === s ? this._removalsTail = r : s._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t }
                        _moveAfter(t, e, n) { return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t }
                        _addAfter(t, e, n) { return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t }
                        _insertAfter(t, e, n) { const r = null === e ? this._itHead : e._next; return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new _a), this._linkedRecords.put(t), t.currentIndex = n, t }
                        _remove(t) { return this._addToRemovals(this._unlink(t)) }
                        _unlink(t) { null !== this._linkedRecords && this._linkedRecords.remove(t); const e = t._prev,
                                n = t._next; return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t }
                        _addToMoves(t, e) { return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t }
                        _addToRemovals(t) { return null === this._unlinkedRecords && (this._unlinkedRecords = new _a), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t }
                        _addIdentityChange(t, e) { return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t } }
                    class ba { constructor(t, e) { this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null } }
                    class ya { constructor() { this._head = null, this._tail = null }
                        add(t) { null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t) }
                        get(t, e) { let n; for (n = this._head; null !== n; n = n._nextDup)
                                if ((null === e || e <= n.currentIndex) && Ti(n.trackById, t)) return n;
                            return null }
                        remove(t) { const e = t._prevDup,
                                n = t._nextDup; return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head } }
                    class _a { constructor() { this.map = new Map }
                        put(t) { const e = t.trackById; let n = this.map.get(e);
                            n || (n = new ya, this.map.set(e, n)), n.add(t) }
                        get(t, e) { const n = this.map.get(t); return n ? n.get(t, e) : null }
                        remove(t) { const e = t.trackById; return this.map.get(e).remove(t) && this.map.delete(e), t }
                        get isEmpty() { return 0 === this.map.size }
                        clear() { this.map.clear() } }

                    function va(t, e, n) { const r = t.previousIndex; if (null === r) return r; let s = 0; return n && r < n.length && (s = n[r]), r + e + s }
                    class wa { constructor() {}
                        supports(t) { return t instanceof Map || Ai(t) }
                        create() { return new Sa } }
                    class Sa { constructor() { this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null }
                        get isDirty() { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead }
                        forEachItem(t) { let e; for (e = this._mapHead; null !== e; e = e._next) t(e) }
                        forEachPreviousItem(t) { let e; for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e) }
                        forEachChangedItem(t) { let e; for (e = this._changesHead; null !== e; e = e._nextChanged) t(e) }
                        forEachAddedItem(t) { let e; for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e) }
                        forEachRemovedItem(t) { let e; for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e) }
                        diff(t) { if (t) { if (!(t instanceof Map || Ai(t))) throw new Error(`Error trying to diff '${O(t)}'. Only maps and objects are allowed`) } else t = new Map; return this.check(t) ? this : null }
                        onDestroy() {}
                        check(t) { this._reset(); let e = this._mapHead; if (this._appendAfter = null, this._forEach(t, (t, n) => { if (e && e.key === n) this._maybeAddToChanges(e, t), this._appendAfter = e, e = e._next;
                                    else { const r = this._getOrCreateRecordForKey(n, t);
                                        e = this._insertBeforeOrAppend(e, r) } }), e) { e._prev && (e._prev._next = null), this._removalsHead = e; for (let t = e; null !== t; t = t._nextRemoved) t === this._mapHead && (this._mapHead = null), this._records.delete(t.key), t._nextRemoved = t._next, t.previousValue = t.currentValue, t.currentValue = null, t._prev = null, t._next = null } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty }
                        _insertBeforeOrAppend(t, e) { if (t) { const n = t._prev; return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t } return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null }
                        _getOrCreateRecordForKey(t, e) { if (this._records.has(t)) { const n = this._records.get(t);
                                this._maybeAddToChanges(n, e); const r = n._prev,
                                    s = n._next; return r && (r._next = s), s && (s._prev = r), n._next = null, n._prev = null, n } const n = new Ca(t); return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n }
                        _reset() { if (this.isDirty) { let t; for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next; for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue; for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null } }
                        _maybeAddToChanges(t, e) { Ti(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t)) }
                        _addToAdditions(t) { null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t) }
                        _addToChanges(t) { null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t) }
                        _forEach(t, e) { t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n)) } }
                    class Ca { constructor(t) { this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null } } let Ea = (() => { class t { constructor(t) { this.factories = t }
                                static create(e, n) { if (null != n) { const t = n.factories.slice();
                                        e = e.concat(t) } return new t(e) }
                                static extend(e) { return { provide: t, useFactory: n => { if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector"); return t.create(e, n) }, deps: [
                                            [t, new f, new h]
                                        ] } }
                                find(t) { const e = this.factories.find(e => e.supports(t)); if (null != e) return e; throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`); var n } } return t.\u0275prov = b({ token: t, providedIn: "root", factory: () => new t([new pa]) }), t })(),
                        xa = (() => { class t { constructor(t) { this.factories = t }
                                static create(e, n) { if (n) { const t = n.factories.slice();
                                        e = e.concat(t) } return new t(e) }
                                static extend(e) { return { provide: t, useFactory: n => { if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector"); return t.create(e, n) }, deps: [
                                            [t, new f, new h]
                                        ] } }
                                find(t) { const e = this.factories.find(e => e.supports(t)); if (e) return e; throw new Error(`Cannot find a differ supporting object '${t}'`) } } return t.\u0275prov = b({ token: t, providedIn: "root", factory: () => new t([new wa]) }), t })(); const ka = [new wa],
                        Oa = new Ea([new pa]),
                        Ta = new xa(ka); let Da = (() => { class t {} return t.__NG_ELEMENT_ID__ = () => Ia(t, ia), t })(); const Ia = function(t, e) { return ei(t, e, oe(), re()) }; let Aa = (() => { class t {} return t.__NG_ELEMENT_ID__ = () => Ra(t, ia), t })(); const Ra = function(t, e) { return ni(t, e, oe(), re()) },
                        ja = {};
                    class Na extends sa { constructor(t) { super(), this.ngModule = t }
                        resolveComponentFactory(t) { const e = Dt(t); return new Va(e, this.ngModule) } }

                    function Pa(t) { const e = []; for (let n in t) t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n }); return e } const Ma = new q("SCHEDULER_TOKEN", { providedIn: "root", factory: () => We });
                    class Va extends na { constructor(t, e) { super(), this.componentDef = t, this.ngModule = e, this.componentType = t.type, this.selector = t.selectors.map(wr).join(","), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!e }
                        get inputs() { return Pa(this.componentDef.inputs) }
                        get outputs() { return Pa(this.componentDef.outputs) }
                        create(t, e, n, r) { const s = (r = r || this.ngModule) ? function(t, e) { return { get: (n, r, s) => { const i = t.get(n, ja, s); return i !== ja || r === ja ? i : e.get(n, r, s) } } }(t, r.injector) : t,
                                i = s.get(aa, zt),
                                o = s.get(ha, null),
                                a = i.createRenderer(null, this.componentDef),
                                l = this.componentDef.selectors[0][0] || "div",
                                c = n ? function(t, e, n) { if ($t(t)) return t.selectRootElement(e, n === gt.ShadowDom); let r = "string" == typeof e ? t.querySelector(e) : e; return r.textContent = "", r }(a, n, this.componentDef.encapsulation) : Pr(l, i.createRenderer(null, this.componentDef), function(t) { const e = t.toLowerCase(); return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null }(l)),
                                u = this.componentDef.onPush ? 576 : 528,
                                h = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
                                d = { components: [], scheduler: We, clean: ys, playerHandler: null, flags: 0 },
                                f = Qr(0, -1, null, 1, 0, null, null, null, null, null),
                                p = Mr(null, f, d, u, null, null, i, a, o, s); let m, g;
                            ve(p, null); try { const t = function(t, e, n, r, s, i) { const o = n[1];
                                    n[19] = t; const a = Vr(o, null, 0, 3, null, null),
                                        l = a.mergedAttrs = e.hostAttrs;
                                    null !== l && (xi(a, l), null !== t && (Me(s, t, l), null !== a.classes && Gs(s, t, a.classes), null !== a.styles && Ws(s, t, a.styles))); const c = r.createRenderer(t, e),
                                        u = Mr(n, qr(e), null, e.onPush ? 64 : 16, n[19], a, r, c, void 0); return o.firstCreatePass && (nn(Xe(a, n), o, e.type), es(o, a), rs(a, n.length, 1)), fs(n, u), n[19] = u }(c, this.componentDef, p, i, a); if (c)
                                    if (n) Me(a, c, ["ng-version", fa.full]);
                                    else { const { attrs: t, classes: e } = function(t) { const e = [],
                                                n = []; let r = 1,
                                                s = 2; for (; r < t.length;) { let i = t[r]; if ("string" == typeof i) 2 === s ? "" !== i && e.push(i, t[++r]) : 8 === s && n.push(i);
                                                else { if (!gr(s)) break;
                                                    s = i }
                                                r++ } return { attrs: e, classes: n } }(this.componentDef.selectors[0]);
                                        t && Me(a, c, t), e && e.length > 0 && Gs(a, c, e.join(" ")) }
                                g = Wt(p[1], 0), e && (g.projection = e.map(t => Array.from(t))), m = function(t, e, n, r, s) { const i = n[1],
                                        o = function(t, e, n) { const r = oe();
                                            t.firstCreatePass && (n.providersResolver && n.providersResolver(n), ts(t, r, 1), ss(t, e, n)); const s = ln(e, t, e.length - 1, r);
                                            cr(s, e); const i = Qt(r, e); return i && cr(i, e), s }(i, n, e);
                                    r.components.push(o), t[8] = o, s && s.forEach(t => t(o, e)), e.contentQueries && e.contentQueries(1, o, n.length - 1); const a = oe(); if (i.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) { Oe(a.index - 19); const t = n[1];
                                        Jr(t, e), Xr(t, n, e.hostVars), Yr(e, o) } return o }(t, this.componentDef, p, d, [Fo]), Fr(f, p, null) } finally { xe() } const b = new Fa(this.componentType, m, ti(ia, g, p), p, g); return n && !h || (b.hostView._tViewNode.child = g), b } }
                    class Fa extends class {} { constructor(t, e, n, r, s) { super(), this.location = n, this._rootLView = r, this._tNode = s, this.destroyCbs = [], this.instance = e, this.hostView = this.changeDetectorRef = new Ks(r), this.hostView._tViewNode = function(t, e, n, r) { let s = t.node; return null == s && (t.node = s = Wr(0, null, 2, -1, null, null)), r[6] = s }(r[1], 0, 0, r), this.componentType = t }
                        get injector() { return new hn(this._tNode, this._rootLView) }
                        destroy() { this.destroyCbs && (this.destroyCbs.forEach(t => t()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy()) }
                        onDestroy(t) { this.destroyCbs && this.destroyCbs.push(t) } } const La = void 0; var Ua = ["en", [
                            ["a", "p"],
                            ["AM", "PM"], La
                        ],
                        [
                            ["AM", "PM"], La, La
                        ],
                        [
                            ["S", "M", "T", "W", "T", "F", "S"],
                            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                        ], La, [
                            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                        ], La, [
                            ["B", "A"],
                            ["BC", "AD"],
                            ["Before Christ", "Anno Domini"]
                        ], 0, [6, 0],
                        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                        ["{1}, {0}", La, "{1} 'at' {0}", La],
                        [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {},
                        function(t) { let e = Math.floor(Math.abs(t)),
                                n = t.toString().replace(/^[^.]*\.?/, "").length; return 1 === e && 0 === n ? 1 : 5 }
                    ]; let Ha = {};

                    function $a(t, e, n) { "string" != typeof e && (n = e, e = t[Wa.LocaleId]), e = e.toLowerCase().replace(/_/g, "-"), Ha[e] = t, n && (Ha[e][Wa.ExtraData] = n) }

                    function za(t) { const e = function(t) { return t.toLowerCase().replace(/_/g, "-") }(t); let n = Qa(e); if (n) return n; const r = e.split("-")[0]; if (n = Qa(r), n) return n; if ("en" === r) return Ua; throw new Error(`Missing locale data for the locale "${t}".`) }

                    function Ba(t) { return za(t)[Wa.CurrencyCode] || null }

                    function qa(t) { return za(t)[Wa.PluralCase] }

                    function Qa(t) { return t in Ha || (Ha[t] = V.ng && V.ng.common && V.ng.common.locales && V.ng.common.locales[t]), Ha[t] } const Wa = function() { var t = { LocaleId: 0, DayPeriodsFormat: 1, DayPeriodsStandalone: 2, DaysFormat: 3, DaysStandalone: 4, MonthsFormat: 5, MonthsStandalone: 6, Eras: 7, FirstDayOfWeek: 8, WeekendRange: 9, DateFormat: 10, TimeFormat: 11, DateTimeFormat: 12, NumberSymbols: 13, NumberFormats: 14, CurrencyCode: 15, CurrencySymbol: 16, CurrencyName: 17, Currencies: 18, PluralCase: 19, ExtraData: 20 }; return t[t.LocaleId] = "LocaleId", t[t.DayPeriodsFormat] = "DayPeriodsFormat", t[t.DayPeriodsStandalone] = "DayPeriodsStandalone", t[t.DaysFormat] = "DaysFormat", t[t.DaysStandalone] = "DaysStandalone", t[t.MonthsFormat] = "MonthsFormat", t[t.MonthsStandalone] = "MonthsStandalone", t[t.Eras] = "Eras", t[t.FirstDayOfWeek] = "FirstDayOfWeek", t[t.WeekendRange] = "WeekendRange", t[t.DateFormat] = "DateFormat", t[t.TimeFormat] = "TimeFormat", t[t.DateTimeFormat] = "DateTimeFormat", t[t.NumberSymbols] = "NumberSymbols", t[t.NumberFormats] = "NumberFormats", t[t.CurrencyCode] = "CurrencyCode", t[t.CurrencySymbol] = "CurrencySymbol", t[t.CurrencyName] = "CurrencyName", t[t.Currencies] = "Currencies", t[t.PluralCase] = "PluralCase", t[t.ExtraData] = "ExtraData", t }(),
                        Ga = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,
                        Za = /\ufffd\/?\*(\d+:\d+)\ufffd/gi,
                        Ka = /\ufffd(\/?[#*!]\d+):?\d*\ufffd/gi,
                        Ja = /\ufffd(\d+):?\d*\ufffd/gi,
                        Xa = /({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi;

                    function Ya(t) { if (!t) return []; let e = 0; const n = [],
                            r = [],
                            s = /[{}]/g; let i; for (s.lastIndex = 0; i = s.exec(t);) { const s = i.index; if ("}" == i[0]) { if (n.pop(), 0 == n.length) { const n = t.substring(e, s);
                                    Ga.test(n) ? r.push(tl(n)) : r.push(n), e = s + 1 } } else { if (0 == n.length) { const n = t.substring(e, s);
                                    r.push(n), e = s + 1 }
                                n.push("{") } } const o = t.substring(e); return r.push(o), r }

                    function tl(t) { const e = [],
                            n = []; let r = 1,
                            s = 0; const i = Ya(t = t.replace(Ga, (function(t, e, n) { return r = "select" === n ? 0 : 1, s = parseInt(e.substr(1), 10), "" }))); for (let o = 0; o < i.length;) { let t = i[o++].trim();
                            1 === r && (t = t.replace(/\s*(?:=)?(\w+)\s*/, "$1")), t.length && e.push(t); const s = Ya(i[o++]);
                            e.length > n.length && n.push(s) } return { type: r, mainBinding: s, cases: e, values: n } }

                    function el(t) { let e, n, r = "",
                            s = 0,
                            i = !1; for (; null !== (e = Za.exec(t));) i ? e[0] === `\ufffd/*${n}\ufffd` && (s = e.index, i = !1) : (r += t.substring(s, e.index + e[0].length), n = e[1], i = !0); return r += t.substr(s), r }

                    function nl(t, e, n, r = null) { const s = [null, null],
                            i = t.split(Ja); let o = 0; for (let a = 0; a < i.length; a++) { const t = i[a]; if (1 & a) { const e = parseInt(t, 10);
                                s.push(-1 - e), o |= ol(e) } else "" !== t && s.push(t) } return s.push(e << 2 | (n ? 1 : 0)), n && s.push(n, r), s[0] = o, s[1] = s.length - 2, s }

                    function rl(t, e = 0) { let n;
                        e |= ol(t.mainBinding); for (let r = 0; r < t.values.length; r++) { const s = t.values[r]; for (let t = 0; t < s.length; t++) { const r = s[t]; if ("string" == typeof r)
                                    for (; n = Ja.exec(r);) e |= ol(parseInt(n[1], 10));
                                else e = rl(r, e) } } return e } const sl = []; let il = -1;

                    function ol(t) { return 1 << Math.min(t, 31) } const al = []; let ll;

                    function cl(t, e, n, r, s) { const i = e.next;
                        r || (r = n), r === n && e !== n.child ? (e.next = n.child, n.child = e) : r !== n && e !== r.next ? (e.next = r.next, r.next = e) : e.next = null, n !== s[6] && (e.parent = n); let o = e.next; for (; o;) o.next === e && (o.next = i), o = o.next; if (1 === e.type) return qs(t, s, e), e;
                        Us(t, s, Qt(e, s), e); const a = s[e.index]; return 0 !== e.type && jt(a) && Us(t, s, a[7], e), e }

                    function ul(t, e, n, r, s, i) { const o = oe();
                        e[n + 19] = s; const a = Vr(t, e[6], n, r, i, null); return o && o.next === a && (o.next = null), a }

                    function hl(t, e, n, r) { const s = r[11]; let i = null,
                            o = null; const a = []; for (let l = 0; l < e.length; l++) { const c = e[l]; if ("string" == typeof c) { const t = Os(c, s),
                                    u = e[++l];
                                o = i, i = ul(n, r, u, 3, t, null), a.push(u), ce() } else if ("number" == typeof c) switch (7 & c) {
                                case 1:
                                    const s = c >>> 17; let u;
                                    u = s === t ? r[6] : Wt(n, s), o = cl(n, i, u, o, r); break;
                                case 0:
                                    const h = c >= 0,
                                        d = (h ? c : ~c) >>> 3;
                                    a.push(d), o = i, i = Wt(n, d), i && ae(i, h); break;
                                case 5:
                                    o = i = Wt(n, c >>> 3), ae(i, !1); break;
                                case 4:
                                    const f = e[++l],
                                        p = e[++l];
                                    os(Wt(n, c >>> 3), r, f, p, null, null); break;
                                default:
                                    throw new Error(`Unable to determine the type of mutate operation for "${c}"`) } else switch (c) {
                                case Or:
                                    const t = e[++l],
                                        u = e[++l],
                                        h = s.createComment(t);
                                    o = i, i = ul(n, r, u, 5, h, null), a.push(u), cr(h, r), i.activeCaseIndex = null, ce(); break;
                                case kr:
                                    const d = e[++l],
                                        f = e[++l];
                                    o = i, i = ul(n, r, f, 3, s.createElement(d), d), a.push(f); break;
                                default:
                                    throw new Error(`Unable to determine the type of mutate operation for "${c}"`) } } return ce(), a }

                    function dl(t, e, n, r) { const s = Wt(t, n),
                            i = qt(n, e);
                        i && $s(e[11], i); const o = Gt(e, n); if (jt(o)) { const t = o;
                            0 !== s.type && $s(e[11], t[7]) }
                        r && (s.flags |= 64) }

                    function fl(t, e, n) {
                        (function(t, e, n) { const r = se();
                            sl[++il] = t, io(!0), r.firstCreatePass && null === r.data[t + 19] && function(t, e, n, r, s) { const i = e.blueprint.length - 19;
                                ll = 0; const o = oe(),
                                    a = le() ? o : o && o.parent; let l = a && a !== t[6] ? a.index - 19 : n,
                                    c = 0;
                                al[c] = l; const u = []; if (n > 0 && o !== a) { let t = o.index - 19;
                                    le() || (t = ~t), u.push(t << 3 | 0) } const h = [],
                                    d = [],
                                    f = function(t, e) { if ("number" != typeof e) return el(t); { const n = t.indexOf(`:${e}\ufffd`) + 2 + e.toString().length,
                                                r = t.search(new RegExp(`\ufffd\\/\\*\\d+:${e}\ufffd`)); return el(t.substring(n, r)) } }(r, s),
                                    p = (m = f, m.replace(Cl, " ")).split(Ka); var m; for (let g = 0; g < p.length; g++) { let t = p[g]; if (1 & g)
                                        if ("/" === t.charAt(0)) { if ("#" === t.charAt(1)) { const e = parseInt(t.substr(2), 10);
                                                l = al[--c], u.push(e << 3 | 5) } } else { const e = parseInt(t.substr(1), 10),
                                                n = "#" === t.charAt(0);
                                            u.push((n ? e : ~e) << 3 | 0, l << 17 | 1), n && (al[++c] = l = e) }
                                    else { const e = Ya(t); for (let t = 0; t < e.length; t++)
                                            if (1 & t) { const n = e[t]; if ("object" != typeof n) throw new Error(`Unable to parse ICU expression in "${f}" message.`); const r = i + ll++;
                                                u.push(Or, "", r, l << 17 | 1); const s = rl(n);
                                                vl(d, n, r, r); const o = d.length - 1;
                                                h.push(ol(n.mainBinding), 3, -1 - n.mainBinding, r << 2 | 2, o, s, 2, r << 2 | 3, o) } else if ("" !== e[t]) { const n = e[t],
                                                r = n.match(Ja),
                                                s = i + ll++;
                                            u.push(r ? "" : n, s, l << 17 | 1), r && at(nl(n, s), h) } } }
                                ll > 0 && function(t, e, n) { if (n > 0 && t.firstCreatePass) { for (let r = 0; r < n; r++) t.blueprint.push(null), t.data.push(null), e.push(null);
                                        t.expandoInstructions ? t.expandoInstructions.push(n) : t.expandoStartIndex += n } }(e, t, ll), e.data[n + 19] = { vars: ll, create: u, update: h, icus: d.length ? d : null } }(re(), r, t, e, n) })(t, e, n),
                        function() { const t = re();! function(t, e) { const n = sl[il--],
                                    r = t.data[n + 19],
                                    s = oe(),
                                    i = hl(n, r.create, t, e); let o = n + 1; for (; o <= s.index - 19;) {-1 === i.indexOf(o) && dl(t, e, o, !0); const n = Wt(t, o);!n || 0 !== n.type && 3 !== n.type && 4 !== n.type || null === n.localNames || (o += n.localNames.length >> 1), o++ } }(se(), t), io(!1) }() }

                    function pl(t, e) {! function(t, e, n, r) { const s = oe().index - 19,
                                i = []; for (let o = 0; o < r.length; o += 2) { const a = r[o],
                                    l = r[o + 1].split(Xa); for (let r = 0; r < l.length; r++) { const o = l[r]; if (1 & r) throw new Error("ICU expressions are not yet supported in attributes"); if ("" !== o)
                                        if (o.match(Ja)) e.firstCreatePass && null === e.data[n + 19] && at(nl(o, s, a), i);
                                        else { const n = Wt(e, s);
                                            3 === n.type && os(n, t, a, o, null, null); const r = null !== n.inputs && n.inputs[a];
                                            r && Ss(e, t, r, a, o) } } }
                            e.firstCreatePass && null === e.data[n + 19] && (e.data[n + 19] = i) }(re(), se(), t, e) } let ml = 0,
                        gl = 0;

                    function bl(t) { return ji(re(), pe(), t) && (ml |= 1 << gl), gl++, bl }

                    function yl(t) { if (gl) { const e = se(),
                                n = e.data[t + 19]; let r, s = null;
                            Array.isArray(n) ? r = n : (r = n.update, s = n.icus); const i = fe() - gl - 1,
                                o = re();! function t(e, n, r, s, i, o, a = !1) { let l = !1; for (let c = 0; c < e.length; c++) { const u = e[c],
                                        h = e[++c]; if (a || u & s) { let a = ""; for (let u = c + 1; u <= c + h; u++) { const c = e[u]; if ("string" == typeof c) a += c;
                                            else if ("number" == typeof c)
                                                if (c < 0) a += qe(o[r - c]);
                                                else { const h = c >>> 2; let d, f, p; switch (3 & c) {
                                                        case 1:
                                                            const c = e[++u],
                                                                m = e[++u];
                                                            Zr(i, Wt(i, h), o, c, a, o[11], m, !1); break;
                                                        case 0:
                                                            Cs(o, h, a); break;
                                                        case 2:
                                                            if (d = e[++u], f = n[d], p = Wt(i, h), null !== p.activeCaseIndex) { const t = f.remove[p.activeCaseIndex]; for (let e = 0; e < t.length; e++) { const r = t[e]; switch (7 & r) {
                                                                        case 3:
                                                                            dl(i, o, r >>> 3, !1); break;
                                                                        case 6:
                                                                            const s = Wt(i, t[e + 1] >>> 3).activeCaseIndex;
                                                                            null !== s && at(n[r >>> 3].remove[s], t) } } } const g = _l(f, a);
                                                            p.activeCaseIndex = -1 !== g ? g : null, g > -1 && (hl(-1, f.create[g], i, o), l = !0); break;
                                                        case 3:
                                                            d = e[++u], f = n[d], p = Wt(i, h), null !== p.activeCaseIndex && t(f.update[p.activeCaseIndex], n, r, s, i, o, l) } } } }
                                    c += h } }(r, s, i, ml, e, o), ml = 0, gl = 0 } }

                    function _l(t, e) { let n = t.cases.indexOf(e); if (-1 === n) switch (t.type) {
                            case 1:
                                { const r = function(t, e) { switch (qa(e)(t)) {
                                            case 0:
                                                return "zero";
                                            case 1:
                                                return "one";
                                            case 2:
                                                return "two";
                                            case 3:
                                                return "few";
                                            case 4:
                                                return "many";
                                            default:
                                                return "other" } }(e, El);n = t.cases.indexOf(r), -1 === n && "other" !== r && (n = t.cases.indexOf("other")); break }
                            case 0:
                                n = t.cases.indexOf("other") }
                        return n }

                    function vl(t, e, n, r) { const s = [],
                            i = [],
                            o = [],
                            a = [],
                            l = []; for (let c = 0; c < e.values.length; c++) { const u = e.values[c],
                                h = []; for (let t = 0; t < u.length; t++) { const e = u[t]; if ("string" != typeof e) { const n = h.push(e) - 1;
                                    u[t] = `\x3c!--\ufffd${n}\ufffd--\x3e` } } const d = wl(u.join(""), n, h, t, r);
                            s.push(d.create), i.push(d.remove), o.push(d.update), a.push(d.vars), l.push(d.childIcus) }
                        t.push({ type: e.type, vars: a, childIcus: l, cases: e.cases, create: s, remove: i, update: o }), ll += Math.max(...a) }

                    function wl(t, e, n, r, s) { const i = new Pn(Ht()).getInertBodyElement(t); if (!i) throw new Error("Unable to generate inert body element"); const o = { vars: 0, childIcus: [], create: [], remove: [], update: [] }; return function t(e, n, r, s, i, o) { if (e) { const a = []; for (; e;) { const l = e.nextSibling,
                                        c = o + ++n.vars; switch (e.nodeType) {
                                        case Node.ELEMENT_NODE:
                                            const l = e,
                                                u = l.tagName.toLowerCase(); if (Qn.hasOwnProperty(u)) { n.create.push(kr, u, c, r << 17 | 1); const a = l.attributes; for (let t = 0; t < a.length; t++) { const e = a.item(t),
                                                        r = e.name.toLowerCase();
                                                    e.value.match(Ja) ? Zn.hasOwnProperty(r) && at(Wn[r] ? nl(e.value, c, e.name, Fn) : Gn[r] ? nl(e.value, c, e.name, Ln) : nl(e.value, c, e.name), n.update) : n.create.push(c << 3 | 4, e.name, e.value) }
                                                t(e.firstChild, n, c, s, i, o), n.remove.push(c << 3 | 3) } else n.vars--; break;
                                        case Node.TEXT_NODE:
                                            const h = e.textContent || "",
                                                d = h.match(Ja);
                                            n.create.push(d ? "" : h, c, r << 17 | 1), n.remove.push(c << 3 | 3), d && at(nl(h, c), n.update); break;
                                        case Node.COMMENT_NODE:
                                            const f = Sl.exec(e.textContent || ""); if (f) { const t = parseInt(f[1], 10);
                                                n.create.push(Or, "", c, r << 17 | 1), a.push([s[t], c]) } else n.vars--; break;
                                        default:
                                            n.vars-- }
                                    e = l } for (let t = 0; t < a.length; t++) { const e = a[t][0],
                                        r = a[t][1];
                                    vl(i, e, r, o + n.vars); const s = i.length - 1;
                                    n.vars += Math.max(...i[s].vars), n.childIcus.push(s); const l = rl(e);
                                    n.update.push(ol(e.mainBinding), 3, -1 - e.mainBinding, r << 2 | 2, s, l, 2, r << 2 | 3, s), n.remove.push(s << 3 | 6, r << 3 | 3) } } }((rr(i) || i).firstChild, o, e, n, r, s), o } const Sl = /\ufffd(\d+)\ufffd/,
                        Cl = /\uE500/g; let El = "en-US";

                    function xl(t) { var e, n;
                        n = "Expected localeId to be defined", null == (e = t) && function(t, e, n, r) { throw new Error(`ASSERTION ERROR: ${t}` + ` [Expected=> null != ${e} <=Actual]`) }(n, e), "string" == typeof t && (El = t.toLowerCase().replace(/_/g, "-")) } const kl = new Map;
                    class Ol extends it { constructor(t, e) { super(), this._parent = e, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new Na(this); const n = At(t),
                                r = t[$] || null;
                            r && xl(r), this._bootstrapComponents = Ge(n.bootstrap), this._r3Injector = di(t, e, [{ provide: it, useValue: this }, { provide: sa, useValue: this.componentFactoryResolver }], O(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t) }
                        get(t, e = vi.THROW_IF_NOT_FOUND, n = p.Default) { return t === vi || t === it || t === Q ? this : this._r3Injector.get(t, e, n) }
                        destroy() { const t = this._r3Injector;!t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), this.destroyCbs = null }
                        onDestroy(t) { this.destroyCbs.push(t) } }
                    class Tl extends ot { constructor(t) { super(), this.moduleType = t, null !== At(t) && function t(e) { if (null !== e.\u0275mod.id) { const t = e.\u0275mod.id;
                                    (function(t, e, n) { if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${O(e)} vs ${O(e.name)}`) })(t, kl.get(t), e), kl.set(t, e) } let n = e.\u0275mod.imports;
                                n instanceof Function && (n = n()), n && n.forEach(e => t(e)) }(t) }
                        create(t) { return new Ol(this.moduleType, t) } }

                    function Dl(t, e, n) { const r = de() + t,
                            s = re(); return s[r] === Sr ? Ri(s, r, n ? e.call(n) : e()) : function(t, e) { return t[e] }(s, r) }

                    function Il(t, e, n, r) { return Nl(re(), de(), t, e, n, r) }

                    function Al(t, e, n, r, s) { return Pl(re(), de(), t, e, n, r, s) }

                    function Rl(t, e, n, r, s, i) { return function(t, e, n, r, s, i, o, a) { const l = e + n; return function(t, e, n, r, s) { const i = Ni(t, e, n, r); return ji(t, e + 2, s) || i }(t, l, s, i, o) ? Ri(t, l + 3, a ? r.call(a, s, i, o) : r(s, i, o)) : jl(t, l + 3) }(re(), de(), t, e, n, r, s, i) }

                    function jl(t, e) { const n = t[e]; return n === Sr ? void 0 : n }

                    function Nl(t, e, n, r, s, i) { const o = e + n; return ji(t, o, s) ? Ri(t, o + 1, i ? r.call(i, s) : r(s)) : jl(t, o + 1) }

                    function Pl(t, e, n, r, s, i, o) { const a = e + n; return Ni(t, a, s, i) ? Ri(t, a + 2, o ? r.call(o, s, i) : r(s, i)) : jl(t, a + 2) }

                    function Ml(t, e) { const n = se(); let r; const s = t + 19;
                        n.firstCreatePass ? (r = function(t, e) { if (e)
                                for (let n = e.length - 1; n >= 0; n--) { const r = e[n]; if (t === r.name) return r }
                            throw new Error(`The pipe '${t}' could not be found!`) }(e, n.pipeRegistry), n.data[s] = r, r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy)) : r = n.data[s]; const i = r.factory || (r.factory = It(r.type)),
                            o = Y(Li),
                            a = i(); return Y(o),
                            function(t, e, n, r) { const s = n + 19;
                                s >= t.data.length && (t.data[s] = null, t.blueprint[s] = null), e[s] = r }(n, re(), t, a), a }

                    function Vl(t, e, n) { const r = re(),
                            s = Gt(r, t); return Ul(r, Ll(r, t) ? Nl(r, de(), e, s.transform, n, s) : s.transform(n)) }

                    function Fl(t, e, n, r) { const s = re(),
                            i = Gt(s, t); return Ul(s, Ll(s, t) ? Pl(s, de(), e, i.transform, n, r, i) : i.transform(n, r)) }

                    function Ll(t, e) { return t[1].data[e + 19].pure }

                    function Ul(t, e) { return Di.isWrapped(e) && (e = Di.unwrap(e), t[fe()] = Sr), e }
                    class Hl extends r.a { constructor(t = !1) { super(), this.__isAsync = t }
                        emit(t) { super.next(t) }
                        subscribe(t, e, n) { let r, i = t => null,
                                o = () => null;
                            t && "object" == typeof t ? (r = this.__isAsync ? e => { setTimeout(() => t.next(e)) } : e => { t.next(e) }, t.error && (i = this.__isAsync ? e => { setTimeout(() => t.error(e)) } : e => { t.error(e) }), t.complete && (o = this.__isAsync ? () => { setTimeout(() => t.complete()) } : () => { t.complete() })) : (r = this.__isAsync ? e => { setTimeout(() => t(e)) } : e => { t(e) }, e && (i = this.__isAsync ? t => { setTimeout(() => e(t)) } : t => { e(t) }), n && (o = this.__isAsync ? () => { setTimeout(() => n()) } : () => { n() })); const a = super.subscribe(r, i, o); return t instanceof s.a && t.add(a), a } }

                    function $l() { return this._results[Oi()]() }
                    class zl { constructor() { this.dirty = !0, this._results = [], this.changes = new Hl, this.length = 0; const t = Oi(),
                                e = zl.prototype;
                            e[t] || (e[t] = $l) }
                        map(t) { return this._results.map(t) }
                        filter(t) { return this._results.filter(t) }
                        find(t) { return this._results.find(t) }
                        reduce(t, e) { return this._results.reduce(t, e) }
                        forEach(t) { this._results.forEach(t) }
                        some(t) { return this._results.some(t) }
                        toArray() { return this._results.slice() }
                        toString() { return this._results.toString() }
                        reset(t) { this._results = function t(e, n) { void 0 === n && (n = e); for (let r = 0; r < e.length; r++) { let s = e[r];
                                    Array.isArray(s) ? (n === e && (n = e.slice(0, r)), t(s, n)) : n !== e && n.push(s) } return n }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0] }
                        notifyOnChanges() { this.changes.emit(this) }
                        setDirty() { this.dirty = !0 }
                        destroy() { this.changes.complete(), this.changes.unsubscribe() } }
                    class Bl { constructor(t) { this.queryList = t, this.matches = null }
                        clone() { return new Bl(this.queryList) }
                        setDirty() { this.queryList.setDirty() } }
                    class ql { constructor(t = []) { this.queries = t }
                        createEmbeddedView(t) { const e = t.queries; if (null !== e) { const n = null !== t.contentQueries ? t.contentQueries[0] : e.length,
                                    r = []; for (let t = 0; t < n; t++) { const n = e.getByIndex(t);
                                    r.push(this.queries[n.indexInDeclarationView].clone()) } return new ql(r) } return null }
                        insertView(t) { this.dirtyQueriesWithMatches(t) }
                        detachView(t) { this.dirtyQueriesWithMatches(t) }
                        dirtyQueriesWithMatches(t) { for (let e = 0; e < this.queries.length; e++) null !== oc(t, e).matches && this.queries[e].setDirty() } }
                    class Ql { constructor(t, e, n, r = null) { this.predicate = t, this.descendants = e, this.isStatic = n, this.read = r } }
                    class Wl { constructor(t = []) { this.queries = t }
                        elementStart(t, e) { for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e) }
                        elementEnd(t) { for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t) }
                        embeddedTView(t) { let e = null; for (let n = 0; n < this.length; n++) { const r = null !== e ? e.length : 0,
                                    s = this.getByIndex(n).embeddedTView(t, r);
                                s && (s.indexInDeclarationView = n, null !== e ? e.push(s) : e = [s]) } return null !== e ? new Wl(e) : null }
                        template(t, e) { for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e) }
                        getByIndex(t) { return this.queries[t] }
                        get length() { return this.queries.length }
                        track(t) { this.queries.push(t) } }
                    class Gl { constructor(t, e = -1) { this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = e }
                        elementStart(t, e) { this.isApplyingToNode(e) && this.matchTNode(t, e) }
                        elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1) }
                        template(t, e) { this.elementStart(t, e) }
                        embeddedTView(t, e) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, e), new Gl(this.metadata)) : null }
                        isApplyingToNode(t) { if (this._appliesToNextNode && !1 === this.metadata.descendants) { const e = this._declarationNodeIndex; let n = t.parent; for (; null !== n && 4 === n.type && n.index !== e;) n = n.parent; return e === (null !== n ? n.index : -1) } return this._appliesToNextNode }
                        matchTNode(t, e) { if (Array.isArray(this.metadata.predicate)) { const n = this.metadata.predicate; for (let r = 0; r < n.length; r++) this.matchTNodeWithReadOption(t, e, Zl(e, n[r])) } else { const n = this.metadata.predicate;
                                n === Da ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, an(e, t, n, !1, !1)) } }
                        matchTNodeWithReadOption(t, e, n) { if (null !== n) { const r = this.metadata.read; if (null !== r)
                                    if (r === ia || r === Aa || r === Da && 0 === e.type) this.addMatch(e.index, -2);
                                    else { const n = an(e, t, r, !1, !1);
                                        null !== n && this.addMatch(e.index, n) }
                                else this.addMatch(e.index, n) } }
                        addMatch(t, e) { null === this.matches ? this.matches = [t, e] : this.matches.push(t, e) } }

                    function Zl(t, e) { const n = t.localNames; if (null !== n)
                            for (let r = 0; r < n.length; r += 2)
                                if (n[r] === e) return n[r + 1];
                        return null }

                    function Kl(t, e, n, r) { return -1 === n ? function(t, e) { return 3 === t.type || 4 === t.type ? ti(ia, t, e) : 0 === t.type ? ei(Da, ia, t, e) : null }(e, t) : -2 === n ? function(t, e, n) { return n === ia ? ti(ia, e, t) : n === Da ? ei(Da, ia, e, t) : n === Aa ? ni(Aa, ia, e, t) : void 0 }(t, e, r) : ln(t, t[1], n, e) }

                    function Jl(t, e, n, r) { const s = e[5].queries[r]; if (null === s.matches) { const r = t.data,
                                i = n.matches,
                                o = []; for (let t = 0; t < i.length; t += 2) { const s = i[t];
                                o.push(s < 0 ? null : Kl(e, r[s], i[t + 1], n.metadata.read)) }
                            s.matches = o } return s.matches }

                    function Xl(t) { const e = re(),
                            n = se(),
                            r = be();
                        ye(r + 1); const s = oc(n, r); if (t.dirty && Jt(e) === s.metadata.isStatic) { if (null === s.matches) t.reset([]);
                            else { const i = s.crossesNgTemplate ? function t(e, n, r, s) { const i = e.queries.getByIndex(r),
                                        o = i.matches; if (null !== o) { const a = Jl(e, n, i, r); for (let e = 0; e < o.length; e += 2) { const r = o[e]; if (r > 0) s.push(a[e / 2]);
                                            else { const i = o[e + 1],
                                                    a = n[-r]; for (let e = 9; e < a.length; e++) { const n = a[e];
                                                    n[17] === n[3] && t(n[1], n, i, s) } if (null !== a[5]) { const e = a[5]; for (let n = 0; n < e.length; n++) { const r = e[n];
                                                        t(r[1], r, i, s) } } } } } return s }(n, e, r, []) : Jl(n, e, s, r);
                                t.reset(i), t.notifyOnChanges() } return !0 } return !1 }

                    function Yl(t, e, n) {! function(t, e, n, r, s, i) { t.firstCreatePass && (ic(t, new Ql(n, r, !0, s), -1), t.staticViewQueries = !0), sc(t, e) }(se(), re(), t, e, n) }

                    function tc(t, e, n, r) { nc(se(), re(), e, n, r, !1, oe(), t) }

                    function ec(t, e, n, r) { nc(se(), re(), e, n, r, !0, oe(), t) }

                    function nc(t, e, n, r, s, i, o, a) { t.firstCreatePass && (ic(t, new Ql(n, r, i, s), o.index), function(t, e) { const n = t.contentQueries || (t.contentQueries = []);
                            e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e) }(t, a), i && (t.staticContentQueries = !0)), sc(t, e) }

                    function rc() { return t = re(), e = be(), t[5].queries[e].queryList; var t, e }

                    function sc(t, e) { const n = new zl;! function(t, e, n, r) { const s = _s(e);
                            s.push(n), t.firstCreatePass && vs(t).push(r, s.length - 1) }(t, e, n, n.destroy), null === e[5] && (e[5] = new ql), e[5].queries.push(new Bl(n)) }

                    function ic(t, e, n) { null === t.queries && (t.queries = new Wl), t.queries.track(new Gl(e, n)) }

                    function oc(t, e) { return t.queries.getByIndex(e) }

                    function ac(t, e) { return ei(Da, ia, t, e) }

                    function lc(t = p.Default) { const e = ri(!0); if (null != e || t & p.Optional) return e; throw new Error("No provider for ChangeDetectorRef!") } const cc = new q("Application Initializer"); let uc = (() => { class t { constructor(t) { this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((t, e) => { this.resolve = t, this.reject = e }) }
                            runInitializers() { if (this.initialized) return; const t = [],
                                    e = () => { this.done = !0, this.resolve() }; if (this.appInits)
                                    for (let n = 0; n < this.appInits.length; n++) { const e = this.appInits[n]();
                                        Ki(e) && t.push(e) }
                                Promise.all(t).then(() => { e() }).catch(t => { this.reject(t) }), 0 === t.length && e(), this.initialized = !0 } } return t.\u0275fac = function(e) { return new(e || t)(et(cc, 8)) }, t.\u0275prov = b({ token: t, factory: t.\u0275fac }), t })(); const hc = new q("AppId"),
                        dc = { provide: hc, useFactory: function() { return `${fc()}${fc()}${fc()}` }, deps: [] };

                    function fc() { return String.fromCharCode(97 + Math.floor(25 * Math.random())) } const pc = new q("Platform Initializer"),
                        mc = new q("Platform ID"),
                        gc = new q("appBootstrapListener"); let bc = (() => { class t { log(t) { console.log(t) }
                            warn(t) { console.warn(t) } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = b({ token: t, factory: t.\u0275fac }), t })(); const yc = new q("LocaleId"),
                        _c = new q("DefaultCurrencyCode");
                    class vc { constructor(t, e) { this.ngModuleFactory = t, this.componentFactories = e } } const wc = function(t) { return new Tl(t) },
                        Sc = wc,
                        Cc = function(t) { return Promise.resolve(wc(t)) },
                        Ec = function(t) { const e = wc(t),
                                n = Ge(At(t).declarations).reduce((t, e) => { const n = Dt(e); return n && t.push(new Va(n)), t }, []); return new vc(e, n) },
                        xc = Ec,
                        kc = function(t) { return Promise.resolve(Ec(t)) }; let Oc = (() => { class t { constructor() { this.compileModuleSync = Sc, this.compileModuleAsync = Cc, this.compileModuleAndAllComponentsSync = xc, this.compileModuleAndAllComponentsAsync = kc }
                            clearCache() {}
                            clearCacheFor(t) {}
                            getModuleId(t) {} } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = b({ token: t, factory: t.\u0275fac }), t })(); const Tc = new q("compilerOptions"),
                        Dc = (() => Promise.resolve(0))();

                    function Ic(t) { "undefined" == typeof Zone ? Dc.then(() => { t && t.apply(null, null) }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t) }
                    class Ac { constructor({ enableLongStackTrace: t = !1, shouldCoalesceEventChangeDetection: e = !1 }) { if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new Hl(!1), this.onMicrotaskEmpty = new Hl(!1), this.onStable = new Hl(!1), this.onError = new Hl(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                            Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = e, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function() { let t = V.requestAnimationFrame,
                                        e = V.cancelAnimationFrame; if ("undefined" != typeof Zone && t && e) { const n = t[Zone.__symbol__("OriginalDelegate")];
                                        n && (t = n); const r = e[Zone.__symbol__("OriginalDelegate")];
                                        r && (e = r) } return { nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: e } }().nativeRequestAnimationFrame,
                                function(t) { const e = !!t.shouldCoalesceEventChangeDetection && t.nativeRequestAnimationFrame && (() => {! function(t) {-1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(V, () => { t.lastRequestAnimationFrameId = -1, Pc(t), Nc(t) }), Pc(t)) }(t) });
                                    t._inner = t._inner.fork({ name: "angular", properties: { isAngularZone: !0, maybeDelayChangeDetection: e }, onInvokeTask: (n, r, s, i, o, a) => { try { return Mc(t), n.invokeTask(s, i, o, a) } finally { e && "eventTask" === i.type && e(), Vc(t) } }, onInvoke: (e, n, r, s, i, o, a) => { try { return Mc(t), e.invoke(r, s, i, o, a) } finally { Vc(t) } }, onHasTask: (e, n, r, s) => { e.hasTask(r, s), n === r && ("microTask" == s.change ? (t._hasPendingMicrotasks = s.microTask, Pc(t), Nc(t)) : "macroTask" == s.change && (t.hasPendingMacrotasks = s.macroTask)) }, onHandleError: (e, n, r, s) => (e.handleError(r, s), t.runOutsideAngular(() => t.onError.emit(s)), !1) }) }(this) }
                        static isInAngularZone() { return !0 === Zone.current.get("isAngularZone") }
                        static assertInAngularZone() { if (!Ac.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!") }
                        static assertNotInAngularZone() { if (Ac.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!") }
                        run(t, e, n) { return this._inner.run(t, e, n) }
                        runTask(t, e, n, r) { const s = this._inner,
                                i = s.scheduleEventTask("NgZoneEvent: " + r, t, jc, Rc, Rc); try { return s.runTask(i, e, n) } finally { s.cancelTask(i) } }
                        runGuarded(t, e, n) { return this._inner.runGuarded(t, e, n) }
                        runOutsideAngular(t) { return this._outer.run(t) } }

                    function Rc() {} const jc = {};

                    function Nc(t) { if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try { t._nesting++, t.onMicrotaskEmpty.emit(null) } finally { if (t._nesting--, !t.hasPendingMicrotasks) try { t.runOutsideAngular(() => t.onStable.emit(null)) } finally { t.isStable = !0 } } }

                    function Pc(t) { t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId) }

                    function Mc(t) { t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null)) }

                    function Vc(t) { t._nesting--, Nc(t) }
                    class Fc { constructor() { this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Hl, this.onMicrotaskEmpty = new Hl, this.onStable = new Hl, this.onError = new Hl }
                        run(t, e, n) { return t.apply(e, n) }
                        runGuarded(t, e, n) { return t.apply(e, n) }
                        runOutsideAngular(t) { return t() }
                        runTask(t, e, n, r) { return t.apply(e, n) } } let Lc = (() => { class t { constructor(t) { this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(() => { this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone") }) }
                                _watchAngularEvents() { this._ngZone.onUnstable.subscribe({ next: () => { this._didWork = !0, this._isZoneStable = !1 } }), this._ngZone.runOutsideAngular(() => { this._ngZone.onStable.subscribe({ next: () => { Ac.assertNotInAngularZone(), Ic(() => { this._isZoneStable = !0, this._runCallbacksIfReady() }) } }) }) }
                                increasePendingRequestCount() { return this._pendingCount += 1, this._didWork = !0, this._pendingCount }
                                decreasePendingRequestCount() { if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount }
                                isStable() { return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks }
                                _runCallbacksIfReady() { if (this.isStable()) Ic(() => { for (; 0 !== this._callbacks.length;) { let t = this._callbacks.pop();
                                            clearTimeout(t.timeoutId), t.doneCb(this._didWork) }
                                        this._didWork = !1 });
                                    else { let t = this.getPendingTasks();
                                        this._callbacks = this._callbacks.filter(e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)), this._didWork = !0 } }
                                getPendingTasks() { return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t => ({ source: t.source, creationLocation: t.creationLocation, data: t.data })) : [] }
                                addCallback(t, e, n) { let r = -1;
                                    e && e > 0 && (r = setTimeout(() => { this._callbacks = this._callbacks.filter(t => t.timeoutId !== r), t(this._didWork, this.getPendingTasks()) }, e)), this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n }) }
                                whenStable(t, e, n) { if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                                    this.addCallback(t, e, n), this._runCallbacksIfReady() }
                                getPendingRequestCount() { return this._pendingCount }
                                findProviders(t, e, n) { return [] } } return t.\u0275fac = function(e) { return new(e || t)(et(Ac)) }, t.\u0275prov = b({ token: t, factory: t.\u0275fac }), t })(),
                        Uc = (() => { class t { constructor() { this._applications = new Map, Bc.addToWindow(this) }
                                registerApplication(t, e) { this._applications.set(t, e) }
                                unregisterApplication(t) { this._applications.delete(t) }
                                unregisterAllApplications() { this._applications.clear() }
                                getTestability(t) { return this._applications.get(t) || null }
                                getAllTestabilities() { return Array.from(this._applications.values()) }
                                getAllRootElements() { return Array.from(this._applications.keys()) }
                                findTestabilityInTree(t, e = !0) { return Bc.findTestabilityInTree(this, t, e) } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = b({ token: t, factory: t.\u0275fac }), t })();
                    class Hc { addToWindow(t) {}
                        findTestabilityInTree(t, e, n) { return null } }

                    function $c(t) { Bc = t } let zc, Bc = new Hc,
                        qc = function(t, e, n) { const r = new Tl(n); if (0 === Si.size) return Promise.resolve(r); const s = function(t) { const e = []; return t.forEach(t => t && e.push(...t)), e }(t.get(Tc, []).concat(e).map(t => t.providers)); if (0 === s.length) return Promise.resolve(r); const i = function() { const t = V.ng; if (!t || !t.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."); return t.\u0275compilerFacade }(),
                                o = vi.create({ providers: s }).get(i.ResourceLoader); return function(t) { const e = [],
                                    n = new Map;

                                function r(t) { let e = n.get(t); if (!e) { const r = (t => Promise.resolve(o.get(t)))(t);
                                        n.set(t, e = r.then(Ei)) } return e } return Si.forEach((t, n) => { const s = [];
                                    t.templateUrl && s.push(r(t.templateUrl).then(e => { t.template = e })); const i = t.styleUrls,
                                        o = t.styles || (t.styles = []),
                                        a = t.styles.length;
                                    i && i.forEach((e, n) => { o.push(""), s.push(r(e).then(r => { o[a + n] = r, i.splice(i.indexOf(e), 1), 0 == i.length && (t.styleUrls = void 0) })) }); const l = Promise.all(s).then(() => function(t) { Ci.delete(t) }(n));
                                    e.push(l) }), Si = new Map, Promise.all(e).then(() => {}) }().then(() => r) }; const Qc = new q("AllowMultipleToken");
                    class Wc { constructor(t, e) { this.name = t, this.token = e } }

                    function Gc(t, e, n = []) { const r = `Platform: ${e}`,
                            s = new q(r); return (e = []) => { let i = Zc(); if (!i || i.injector.get(Qc, !1))
                                if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
                                else { const t = n.concat(e).concat({ provide: s, useValue: !0 }, { provide: oi, useValue: "platform" });! function(t) { if (zc && !zc.destroyed && !zc.injector.get(Qc, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                        zc = t.get(Kc); const e = t.get(pc, null);
                                        e && e.forEach(t => t()) }(vi.create({ providers: t, name: r })) }
                            return function(t) { const e = Zc(); if (!e) throw new Error("No platform exists!"); if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first."); return e }(s) } }

                    function Zc() { return zc && !zc.destroyed ? zc : null } let Kc = (() => { class t { constructor(t) { this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1 }
                            bootstrapModuleFactory(t, e) { const n = function(t, e) { let n; return n = "noop" === t ? new Fc : ("zone.js" === t ? void 0 : t) || new Ac({ enableLongStackTrace: jn(), shouldCoalesceEventChangeDetection: e }), n }(e ? e.ngZone : void 0, e && e.ngZoneEventCoalescing || !1),
                                    r = [{ provide: Ac, useValue: n }]; return n.run(() => { const e = vi.create({ providers: r, parent: this.injector, name: t.moduleType.name }),
                                        s = t.create(e),
                                        i = s.injector.get(gn, null); if (!i) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?"); return s.onDestroy(() => Yc(this._modules, s)), n.runOutsideAngular(() => n.onError.subscribe({ next: t => { i.handleError(t) } })),
                                        function(t, e, n) { try { const r = n(); return Ki(r) ? r.catch(n => { throw e.runOutsideAngular(() => t.handleError(n)), n }) : r } catch (r) { throw e.runOutsideAngular(() => t.handleError(r)), r } }(i, n, () => { const t = s.injector.get(uc); return t.runInitializers(), t.donePromise.then(() => (xl(s.injector.get(yc, "en-US") || "en-US"), this._moduleDoBootstrap(s), s)) }) }) }
                            bootstrapModule(t, e = []) { const n = Jc({}, e); return qc(this.injector, n, t).then(t => this.bootstrapModuleFactory(t, n)) }
                            _moduleDoBootstrap(t) { const e = t.injector.get(Xc); if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t));
                                else { if (!t.instance.ngDoBootstrap) throw new Error(`The module ${O(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` + "Please define one of these.");
                                    t.instance.ngDoBootstrap(e) }
                                this._modules.push(t) }
                            onDestroy(t) { this._destroyListeners.push(t) }
                            get injector() { return this._injector }
                            destroy() { if (this._destroyed) throw new Error("The platform has already been destroyed!");
                                this._modules.slice().forEach(t => t.destroy()), this._destroyListeners.forEach(t => t()), this._destroyed = !0 }
                            get destroyed() { return this._destroyed } } return t.\u0275fac = function(e) { return new(e || t)(et(vi)) }, t.\u0275prov = b({ token: t, factory: t.\u0275fac }), t })();

                    function Jc(t, e) { return Array.isArray(e) ? e.reduce(Jc, t) : Object.assign(Object.assign({}, t), e) } let Xc = (() => { class t { constructor(t, e, n, r, s, l) { this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = s, this._initStatus = l, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = jn(), this._zone.onMicrotaskEmpty.subscribe({ next: () => { this._zone.run(() => { this.tick() }) } }); const c = new i.a(t => { this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => { t.next(this._stable), t.complete() }) }),
                                    u = new i.a(t => { let e;
                                        this._zone.runOutsideAngular(() => { e = this._zone.onStable.subscribe(() => { Ac.assertNotInAngularZone(), Ic(() => { this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, t.next(!0)) }) }) }); const n = this._zone.onUnstable.subscribe(() => { Ac.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => { t.next(!1) })) }); return () => { e.unsubscribe(), n.unsubscribe() } });
                                this.isStable = Object(o.a)(c, u.pipe(Object(a.a)())) }
                            bootstrap(t, e) { if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."); let n;
                                n = t instanceof na ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType); const r = n.isBoundToModule ? void 0 : this._injector.get(it),
                                    s = n.create(vi.NULL, [], e || n.selector, r);
                                s.onDestroy(() => { this._unloadComponent(s) }); const i = s.injector.get(Lc, null); return i && s.injector.get(Uc).registerApplication(s.location.nativeElement, i), this._loadComponent(s), jn() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), s }
                            tick() { if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively"); try { this._runningTick = !0; for (let t of this._views) t.detectChanges(); if (this._enforceNoNewChanges)
                                        for (let t of this._views) t.checkNoChanges() } catch (t) { this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t)) } finally { this._runningTick = !1 } }
                            attachView(t) { const e = t;
                                this._views.push(e), e.attachToAppRef(this) }
                            detachView(t) { const e = t;
                                Yc(this._views, e), e.detachFromAppRef() }
                            _loadComponent(t) { this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(gc, []).concat(this._bootstrapListeners).forEach(e => e(t)) }
                            _unloadComponent(t) { this.detachView(t.hostView), Yc(this.components, t) }
                            ngOnDestroy() { this._views.slice().forEach(t => t.destroy()) }
                            get viewCount() { return this._views.length } } return t.\u0275fac = function(e) { return new(e || t)(et(Ac), et(bc), et(vi), et(gn), et(sa), et(uc)) }, t.\u0275prov = b({ token: t, factory: t.\u0275fac }), t })();

                    function Yc(t, e) { const n = t.indexOf(e);
                        n > -1 && t.splice(n, 1) }
                    class tu {}
                    class eu {} const nu = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" }; let ru = (() => { class t { constructor(t, e) { this._compiler = t, this._config = e || nu }
                            load(t) { return this.loadAndCompile(t) }
                            loadAndCompile(t) { let [e, r] = t.split("#"); return void 0 === r && (r = "default"), n("zn8P")(e).then(t => t[r]).then(t => su(t, e, r)).then(t => this._compiler.compileModuleAsync(t)) }
                            loadFactory(t) { let [e, r] = t.split("#"), s = "NgFactory"; return void 0 === r && (r = "default", s = ""), n("zn8P")(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t => t[r + s]).then(t => su(t, e, r)) } } return t.\u0275fac = function(e) { return new(e || t)(et(Oc), et(eu, 8)) }, t.\u0275prov = b({ token: t, factory: t.\u0275fac }), t })();

                    function su(t, e, n) { if (!t) throw new Error(`Cannot find '${n}' in '${e}'`); return t } const iu = function(t) { return null },
                        ou = Gc(null, "core", [{ provide: mc, useValue: "unknown" }, { provide: Kc, deps: [vi] }, { provide: Uc, deps: [] }, { provide: bc, deps: [] }]),
                        au = [{ provide: Xc, useClass: Xc, deps: [Ac, bc, vi, gn, sa, uc] }, { provide: Ma, deps: [Ac], useFactory: function(t) { let e = []; return t.onStable.subscribe(() => { for (; e.length;) e.pop()() }),
                                    function(t) { e.push(t) } } }, { provide: uc, useClass: uc, deps: [
                                [new h, cc]
                            ] }, { provide: Oc, useClass: Oc, deps: [] }, dc, { provide: Ea, useFactory: function() { return Oa }, deps: [] }, { provide: xa, useFactory: function() { return Ta }, deps: [] }, { provide: yc, useFactory: function(t) { return xl(t = t || "undefined" != typeof $localize && $localize.locale || "en-US"), t }, deps: [
                                [new u(yc), new h, new f]
                            ] }, { provide: _c, useValue: "USD" }]; let lu = (() => { class t { constructor(t) {} } return t.\u0275mod = Et({ type: t }), t.\u0275inj = y({ factory: function(e) { return new(e || t)(et(Xc)) }, providers: au }), t })() }, gRHU: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return i })); var r = n("2fFW"),
                        s = n("NJ4a"); const i = { closed: !0, next(t) {}, error(t) { if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
                            Object(s.a)(t) }, complete() {} } }, itXk: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return c })); var r = n("z+Ro"),
                        s = n("DH7j"),
                        i = n("l7GE"),
                        o = n("ZUHj"),
                        a = n("yCtX"); const l = {};

                    function c(...t) { let e = null,
                            n = null; return Object(r.a)(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (e = t.pop()), 1 === t.length && Object(s.a)(t[0]) && (t = t[0]), Object(a.a)(t, n).lift(new u(e)) }
                    class u { constructor(t) { this.resultSelector = t }
                        call(t, e) { return e.subscribe(new h(t, this.resultSelector)) } }
                    class h extends i.a { constructor(t, e) { super(t), this.resultSelector = e, this.active = 0, this.values = [], this.observables = [] }
                        _next(t) { this.values.push(l), this.observables.push(t) }
                        _complete() { const t = this.observables,
                                e = t.length; if (0 === e) this.destination.complete();
                            else { this.active = e, this.toRespond = e; for (let n = 0; n < e; n++) { const e = t[n];
                                    this.add(Object(o.a)(this, e, e, n)) } } }
                        notifyComplete(t) { 0 == (this.active -= 1) && this.destination.complete() }
                        notifyNext(t, e, n, r, s) { const i = this.values,
                                o = this.toRespond ? i[n] === l ? --this.toRespond : this.toRespond : 0;
                            i[n] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice())) }
                        _tryResultSelector(t) { let e; try { e = this.resultSelector.apply(this, t) } catch (n) { return void this.destination.error(n) }
                            this.destination.next(e) } } }, jZKg: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return i })); var r = n("HDdC"),
                        s = n("quSY");

                    function i(t, e) { return new r.a(n => { const r = new s.a; let i = 0; return r.add(e.schedule((function() { i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete() }))), r }) } }, kJWO: function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return r })); const r = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")() }, kmKP: function(t, e, n) { "use strict";
                        n.d(e, "a", (function() { return m })); var r = n("tk/3"),
                            s = n("2Vo4"),
                            i = n("lJxs"),
                            o = n("AytR");
                        class a { constructor(t, e, n, r, s) { this.id = t, this.title = e, this.routerLink = n, this.hasSubMenu = r, this.parentId = s } } const l = [new a(10, "Admin/User Creation", "/user-creation", !1, 0), new a(20, "Manage Users", "/manage-users", !1, 0)],
                            c = [new a(10, "User Creation", "/user-creation", !1, 0), new a(20, "Manage Users", "/manage-users", !1, 0)]; var u = n("y1cd"),
                            h = n("QK5H"),
                            d = n("fXoL"),
                            f = n("tyNb"),
                            p = n("mAmA"); let m = (() => { class t { constructor(t, e, n, r) { this.http = t, this.router = e, this.toasterService = n, this.window = r, this.tokenSubject = new s.a(JSON.parse(localStorage.getItem("token"))), this.token = this.tokenSubject.asObservable(), this.currentUserSubject = new s.a(JSON.parse(localStorage.getItem("currentUser"))), this.currentUser = this.currentUserSubject.asObservable(), this.currentHomeSubject = new s.a(JSON.parse(localStorage.getItem("currentHome"))), this.currentHome = this.currentHomeSubject.asObservable(), this.currentMenuSubject = new s.a(JSON.parse(localStorage.getItem("currentMenu"))), this.currentMenu = this.currentMenuSubject.asObservable(); const { location: { origin: i } } = this.window;
                                            this.host = o.a.production ? `${i}${o.a.host}` : o.a.host }
                                        get currentUserValue() { return this.currentUserSubject.value }
                                        get currentHomeValue() { return this.currentHomeSubject.value }
                                        get currentMenuValue() { return this.currentMenuSubject.value }
                                        get tokenValue() { return this.tokenSubject.value }
                                        setCurrentUserSubject(t) { localStorage.setItem("currentUser", JSON.stringify(t)), this.currentUserSubject.next(t) }
                                        setHomeAndMenu(t, e) { if (t === u.h.SUPER_ADMIN) this.currentMenuSubject.next(l), this.currentHomeSubject.next(u.f.USER_CREATION), localStorage.setItem("currentHome", JSON.stringify(u.f.USER_CREATION)), localStorage.setItem("currentMenu", JSON.stringify(l));
                                            else if (t === u.h.ADMIN) this.currentMenuSubject.next(c), this.currentHomeSubject.next(u.f.USER_CREATION), localStorage.setItem("currentHome", JSON.stringify(u.f.USER_CREATION)), localStorage.setItem("currentMenu", JSON.stringify(c));
                                            else { const t = [],
                                                    n = e.find(t => 1 === t),
                                                    r = e.find(t => 2 === t),
                                                    s = e.find(t => 3 === t),
                                                    i = e.find(t => 4 === t);
                                                n && t.push(new a(10, "View Whatsapp", "/view-whatsapp", !1, 0)), r && t.push(new a(20, "Block Whatsapp", "/block-whatsapp", !1, 0)), s && t.push(new a(30, "Marketing Maker", "/marketing-maker", !1, 0)), i && t.push(new a(40, "Marketing Checker", "/marketing-checker", !1, 0)), this.currentMenuSubject.next(t), this.currentHomeSubject.next(t[0].routerLink), localStorage.setItem("currentHome", JSON.stringify(t[0].routerLink)), localStorage.setItem("currentMenu", JSON.stringify(t)) } }
                                        login(t, e, n) { const r = t.indexOf("@"); return this.http.post(`${this.host}/account/login`, `email=${-1===r?`${t}${u.c.USER_ID_CONCAT_HELPER}`:t}&password=${e}&useADAuth=${n}`).pipe(Object(i.a)(t=>{const{token:e}=t;return localStorage.setItem("token",JSON.stringify(e)),this.tokenSubject.next(e),t}))}getUserDetail(t){const e=-1===t.indexOf("@")?`${t}${u.c.USER_ID_CONCAT_HELPER}`:t,{api:{getUserDetails:{processId:n,workflowId:r}},projectId:s}=o.a,a={processVariables:JSON.stringify({processId:n,workflowId:r,ProcessVariables:{userName:e},projectId:s})},l=this.transform(a);return this.http.post(`${this.host}/d/workflows/${r}/execute?projectId=${s}`,l).pipe(Object(i.a)(t=>{if(t&&t.ProcessVariables){const e=t.ProcessVariables;localStorage.setItem("currentUser",JSON.stringify(e)),this.currentUserSubject.next(e);const{roleName:n,activityList:r}=e;return this.setHomeAndMenu(n,r),e}}))}createUser(t,e,n,r){const{api:{createUser:{processId:s,workflowId:i}},projectId:a}=o.a,l=t,c=l.indexOf("@"),u={processVariables:JSON.stringify({processId:s,ProcessVariables:{emailId:-1===c?`${l}@uataxisb.com`:l,roleName:e,userId:n,activityList:r},workflowId:i,projectId:a})},h=this.transform(u);return this.http.post(`${this.host}/d/workflows/${i}/execute?projectId=${a}`,h)}fetchUserByMobileNumber(t){const{api:{fetchUserByMobileNumber:{processId:e,workflowId:n}},projectId:r}=o.a,s={processVariables:JSON.stringify({processId:e,ProcessVariables:{mobileNumber:t},workflowId:n,projectId:r})},i=this.transform(s);return this.http.post(`${this.host}/d/workflows/${n}/execute?projectId=${r}`,i)}blockUserWhatsappAccesss(t,e,n,r,s,i,a){const{api:{blockUserWhatsappAccess:{processId:l,workflowId:c}},projectId:u}=o.a,h={processVariables:JSON.stringify({processId:l,ProcessVariables:{srNo:t,reason:e,userId:n,action:r,cTime:s,channel:i,mobile:a},workflowId:c,projectId:u})},d=this.transform(h);return this.http.post(`${this.host}/d/workflows/${c}/execute?projectId=${u}`,d)}changePassword(t,e,n,s){const i={currentPassword:t,newPassword:e,confirmNewPassword:n,userId:s},{api:{changeUserPassword:{processId:a,workflowId:l}},projectId:c}=o.a,u={processVariables:JSON.stringify({processId:a,ProcessVariables:i,workflowId:l,projectId:c})},h=new r.d({fromObject:u});return this.http.post(`${this.host}/ProcessStore/d/workflows/${l}/execute?projectId=${c}`,h)}disableUserById(t,e){const n={newUserId:t,userId:e},{processId:r,workflowId:s}=o.a.api.disableUser,{projectId:i}=o.a,a={processVariables:JSON.stringify({processId:r,ProcessVariables:n,workflowId:s,projectId:i})},l=this.transform(a);return this.http.post(`${this.host}/ProcessStore/d/workflows/${s}/execute?projectId=${i}`,l)}fetchUsers(t,e){const n={perPage:t,currentPage:e},{api:{fetchUsers:{processId:r,workflowId:s}},projectId:i}=o.a,a={processVariables:JSON.stringify({processId:r,ProcessVariables:n,workflowId:s,projectId:i})},l=this.transform(a);return this.http.post(`${this.host}/ProcessStore/d/workflows/${s}/execute?projectId=${i}`,l)}fetchUserActivityByUserId(t){const e={userId:t},{api:{fetchUserActivityList:{processId:n,workflowId:r}},projectId:s}=o.a,i={processVariables:JSON.stringify({processId:n,ProcessVariables:e,workflowId:r,projectId:s})},a=this.transform(i);return this.http.post(`${this.host}/ProcessStore/d/workflows/${r}/execute?projectId=${s}`,a)}updateUser(t,e,n){const r={userId:t,activityList:e,modifiedBy:n},{api:{updateUser:{processId:s,workflowId:i}},projectId:a}=o.a,l={processVariables:JSON.stringify({processId:s,ProcessVariables:r,workflowId:i,projectId:a})},c=this.transform(l);return this.http.post(`${this.host}/ProcessStore/d/workflows/${i}/execute?projectId=${a}`,c)}downloadReport(t,e,n,r){const s={mobileNo:t,fromDate:e,toDate:n,isDownload:r},{api:{whatsappReport:{processId:i,workflowId:a}},projectId:l}=o.a,c={processVariables:JSON.stringify({processId:i,ProcessVariables:s,workflowId:a,projectId:l})},u=this.transform(c);return this.http.post(`${this.host}/ProcessStore/d/workflows/${a}/execute?projectId=${l}`,u)}createMessageTemplate(t,e,n,r,s){const i={template:t,startDate:e,endDate:n,triggerTime:r,userId:s},{api:{createMessageTemplate:{processId:a,workflowId:l,projectId:c}}}=o.a,u={processVariables:JSON.stringify({processId:a,ProcessVariables:i,workflowId:l,projectId:c})},h=this.transform(u);return this.http.post(`${this.host}/ProcessStore/d/workflows/${l}/execute?projectId=${c}`,h)}createPromotionalTemplate(t,e,n,r,s){const i={templateId:t,template:e,startDate:n,triggerTime:r,userId:s,isPromotion:"true"},{api:{createPromotionalTemplate:{processId:a,workflowId:l,projectId:c}}}=o.a,u={processVariables:JSON.stringify({processId:a,ProcessVariables:i,workflowId:l,projectId:c})},h=this.transform(u);return this.http.post(`${this.host}/ProcessStore/d/workflows/${l}/execute?projectId=${c}`,h)}createPreapprovedOffer(t,e,n,r){const s={startDate:t,triggerTime:n,endDate:e,userId:r},{api:{createPreappovedOffer:{processId:i,workflowId:a,projectId:l}}}=o.a,c={processVariables:JSON.stringify({processId:i,ProcessVariables:s,workflowId:a,projectId:l})},u=this.transform(c);return this.http.post(`${this.host}/ProcessStore/d/workflows/${a}/execute?projectId=${l}`,u)}fetchTemplates(t,e,n,r){const s={fromDate:e,toDate:n,templateStatus:r,currentPage:t},{api:{fetchTemplates:{processId:i,workflowId:a,projectId:l}}}=o.a,c={processVariables:JSON.stringify({processId:i,ProcessVariables:s,workflowId:a,projectId:l})},u=this.transform(c);return this.http.post(`${this.host}/ProcessStore/d/workflows/${a}/execute?projectId=${l}`,u)}updateTemplate(t,e,n,r){const s={userId:t,templateStatus:e,id:n,reason:r},{api:{updateTemplate:{processId:i,workflowId:a,projectId:l}}}=o.a,c={processVariables:JSON.stringify({processId:i,ProcessVariables:s,workflowId:a,projectId:l})},u=this.transform(c);return this.http.post(`${this.host}/ProcessStore/d/workflows/${a}/execute?projectId=${l}`,u)}deactivateTemplate(t){const e={id:t},{api:{deactivateTemplate:{processId:n,workflowId:r,projectId:s}}}=o.a,i={processVariables:JSON.stringify({processId:n,ProcessVariables:e,workflowId:r,projectId:s})},a=this.transform(i);return this.http.post(`${this.host}/ProcessStore/d/workflows/${r}/execute?projectId=${s}`,a)}logout(){this.http.get(`${this.host}/account/logout`)}clear(){localStorage.removeItem("currentUser"),localStorage.removeItem("currentHome"),localStorage.removeItem("currentMenu"),localStorage.removeItem("token"),this.currentUserSubject.next(null),this.currentHomeSubject.next(null),this.currentMenuSubject.next(null),this.tokenSubject.next(null)}transform(t){return new r.d({fromObject:t})}closeAndLogout(){this.logout(),this.clear(),this.toasterService.showError(u.j.TOKEN_EXPIRED_MESSAGE),this.router.navigate([u.f.PUBLIC,{queryParams:{returnUrl:this.router.url}}])}fetchCheckerScreenTemplates(t,e,n,r,s,i){const a={fromDate:e,toDate:n,templateStatus:r,currentPage:t,checkerLogin:s,isActiveInput:i},{api:{fetchcheckerScreenTemplates:{processId:l,workflowId:c,projectId:u}}}=o.a,h={processVariables:JSON.stringify({processId:l,ProcessVariables:a,workflowId:c,projectId:u})},d=this.transform(h);return this.http.post(`${this.host}/ProcessStore/d/workflows/${c}/execute?projectId=${u}`,d)}}return t.\u0275fac=function(e){return new(e||t)(d.Zb(r.b),d.Zb(f.b),d.Zb(p.a),d.Zb(h.a))},t.\u0275prov=d.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},l7GE:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("7o/Q");class s extends r.a{notifyNext(t,e,n,r,s){this.destination.next(e)}notifyError(t,e){this.destination.error(t)}notifyComplete(t){this.destination.complete()}}},lJxs:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("7o/Q");function s(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new i(t,e))}}class i{constructor(t,e){this.project=t,this.thisArg=e}call(t,e){return e.subscribe(new o(t,this.project,this.thisArg))}}class o extends r.a{constructor(t,e,n){super(t),this.project=e,this.count=0,this.thisArg=n||this}_next(t){let e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}},mAmA:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("2Vo4"),s=n("fXoL");let i=(()=>{class t{constructor(){this.toastsSubject=new r.a([]),this.toasts=this.toastsSubject.asObservable()}showSuccess(t){this.toastsSubject.next([{message:t,classname:"bg-success text-light"}])}showError(t){this.toastsSubject.next([{message:t,classname:"bg-danger text-light"}])}showWarning(t){this.toastsSubject.next([{message:t,classname:"bg-warning text-light"}])}remove(){this.toastsSubject.next(null)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},mCNh:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}));var r=n("SpAZ");function s(...t){return i(t)}function i(t){return 0===t.length?r.a:1===t.length?t[0]:function(e){return t.reduce((t,e)=>e(t),e)}}},n6bG:function(t,e,n){"use strict";function r(t){return"function"==typeof t}n.d(e,"a",(function(){return r}))},ngJS:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>e=>{for(let n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()}},ofXK:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return bt})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return gt})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return S})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return C})),n.d(e,"i",(function(){return y})),n.d(e,"j",(function(){return lt})),n.d(e,"k",(function(){return ut})),n.d(e,"l",(function(){return ft})),n.d(e,"m",(function(){return w})),n.d(e,"n",(function(){return c})),n.d(e,"o",(function(){return T})),n.d(e,"p",(function(){return mt})),n.d(e,"q",(function(){return vt})),n.d(e,"r",(function(){return G})),n.d(e,"s",(function(){return R})),n.d(e,"t",(function(){return A})),n.d(e,"u",(function(){return j})),n.d(e,"v",(function(){return _t})),n.d(e,"w",(function(){return a})),n.d(e,"x",(function(){return yt})),n.d(e,"y",(function(){return i})),n.d(e,"z",(function(){return ot})),n.d(e,"A",(function(){return o}));var r=n("fXoL");let s=null;function i(){return s}function o(t){s||(s=t)}class a{}const l=new r.q("DocumentToken");let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(r.Ib)({factory:u,token:t,providedIn:"platform"}),t})();function u(){return Object(r.Zb)(d)}const h=new r.q("Location Initialized");let d=(()=>{class t extends c{constructor(t){super(),this._doc=t,this._init()}_init(){this.location=i().getLocation(),this._history=i().getHistory()}getBaseHrefFromDOM(){return i().getBaseHref(this._doc)}onPopState(t){i().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",t,!1)}onHashChange(t){i().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",t,!1)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(t){this.location.pathname=t}pushState(t,e,n){f()?this._history.pushState(t,e,n):this.location.hash=n}replaceState(t,e,n){f()?this._history.replaceState(t,e,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}getState(){return this._history.state}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(l))},t.\u0275prov=Object(r.Ib)({factory:p,token:t,providedIn:"platform"}),t})();function f(){return!!window.history.pushState}function p(){return new d(Object(r.Zb)(l))}function m(t,e){if(0==t.length)return e;if(0==e.length)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,2==n?t+e.substring(1):1==n?t+e:t+"/"+e}function g(t){const e=t.match(/#|\?|$/),n=e&&e.index||t.length;return t.slice(0,n-("/"===t[n-1]?1:0))+t.slice(n)}function b(t){return t&&"?"!==t[0]?"?"+t:t}let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(r.Ib)({factory:_,token:t,providedIn:"root"}),t})();function _(t){const e=Object(r.Zb)(l).location;return new w(Object(r.Zb)(c),e&&e.origin||"")}const v=new r.q("appBaseHref");let w=(()=>{class t extends y{constructor(t,e){if(super(),this._platformLocation=t,null==e&&(e=this._platformLocation.getBaseHrefFromDOM()),null==e)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=e}onPopState(t){this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t)}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return m(this._baseHref,t)}path(t=!1){const e=this._platformLocation.pathname+b(this._platformLocation.search),n=this._platformLocation.hash;return n&&t?`${e}${n}`:e}pushState(t,e,n,r){const s=this.prepareExternalUrl(n+b(r));this._platformLocation.pushState(t,e,s)}replaceState(t,e,n,r){const s=this.prepareExternalUrl(n+b(r));this._platformLocation.replaceState(t,e,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(c),r.Zb(v,8))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})(),S=(()=>{class t extends y{constructor(t,e){super(),this._platformLocation=t,this._baseHref="",null!=e&&(this._baseHref=e)}onPopState(t){this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t)}getBaseHref(){return this._baseHref}path(t=!1){let e=this._platformLocation.hash;return null==e&&(e="#"),e.length>0?e.substring(1):e}prepareExternalUrl(t){const e=m(this._baseHref,t);return e.length>0?"#"+e:e}pushState(t,e,n,r){let s=this.prepareExternalUrl(n+b(r));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(t,e,s)}replaceState(t,e,n,r){let s=this.prepareExternalUrl(n+b(r));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(t,e,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(c),r.Zb(v,8))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})(),C=(()=>{class t{constructor(t,e){this._subject=new r.n,this._urlChangeListeners=[],this._platformStrategy=t;const n=this._platformStrategy.getBaseHref();this._platformLocation=e,this._baseHref=g(x(n)),this._platformStrategy.onPopState(t=>{this._subject.emit({url:this.path(!0),pop:!0,state:t.state,type:t.type})})}path(t=!1){return this.normalize(this._platformStrategy.path(t))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(t,e=""){return this.path()==this.normalize(t+b(e))}normalize(e){return t.stripTrailingSlash(function(t,e){return t&&e.startsWith(t)?e.substring(t.length):e}(this._baseHref,x(e)))}prepareExternalUrl(t){return t&&"/"!==t[0]&&(t="/"+t),this._platformStrategy.prepareExternalUrl(t)}go(t,e="",n=null){this._platformStrategy.pushState(n,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+b(e)),n)}replaceState(t,e="",n=null){this._platformStrategy.replaceState(n,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+b(e)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}onUrlChange(t){this._urlChangeListeners.push(t),this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)})}_notifyUrlChangeListeners(t="",e){this._urlChangeListeners.forEach(n=>n(t,e))}subscribe(t,e,n){return this._subject.subscribe({next:t,error:e,complete:n})}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(y),r.Zb(c))},t.normalizeQueryParams=b,t.joinWithSlash=m,t.stripTrailingSlash=g,t.\u0275prov=Object(r.Ib)({factory:E,token:t,providedIn:"root"}),t})();function E(){return new C(Object(r.Zb)(y),Object(r.Zb)(c))}function x(t){return t.replace(/\/index.html$/,"")}const k=function(){var t={Zero:0,One:1,Two:2,Few:3,Many:4,Other:5};return t[t.Zero]="Zero",t[t.One]="One",t[t.Two]="Two",t[t.Few]="Few",t[t.Many]="Many",t[t.Other]="Other",t}(),O=function(){var t={Format:0,Standalone:1};return t[t.Format]="Format",t[t.Standalone]="Standalone",t}(),T=function(){var t={Narrow:0,Abbreviated:1,Wide:2,Short:3};return t[t.Narrow]="Narrow",t[t.Abbreviated]="Abbreviated",t[t.Wide]="Wide",t[t.Short]="Short",t}(),D=function(){var t={Short:0,Medium:1,Long:2,Full:3};return t[t.Short]="Short",t[t.Medium]="Medium",t[t.Long]="Long",t[t.Full]="Full",t}(),I=function(){var t={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};return t[t.Decimal]="Decimal",t[t.Group]="Group",t[t.List]="List",t[t.PercentSign]="PercentSign",t[t.PlusSign]="PlusSign",t[t.MinusSign]="MinusSign",t[t.Exponential]="Exponential",t[t.SuperscriptingExponent]="SuperscriptingExponent",t[t.PerMille]="PerMille",t[t.Infinity]="Infinity",t[t.NaN]="NaN",t[t.TimeSeparator]="TimeSeparator",t[t.CurrencyDecimal]="CurrencyDecimal",t[t.CurrencyGroup]="CurrencyGroup",t}();function A(t,e,n){const s=Object(r.ib)(t),i=U([s[r.Y.DayPeriodsFormat],s[r.Y.DayPeriodsStandalone]],e);return U(i,n)}function R(t,e,n){const s=Object(r.ib)(t),i=U([s[r.Y.DaysFormat],s[r.Y.DaysStandalone]],e);return U(i,n)}function j(t,e,n){const s=Object(r.ib)(t),i=U([s[r.Y.MonthsFormat],s[r.Y.MonthsStandalone]],e);return U(i,n)}function N(t,e){return U(Object(r.ib)(t)[r.Y.DateFormat],e)}function P(t,e){return U(Object(r.ib)(t)[r.Y.TimeFormat],e)}function M(t,e){return U(Object(r.ib)(t)[r.Y.DateTimeFormat],e)}function V(t,e){const n=Object(r.ib)(t),s=n[r.Y.NumberSymbols][e];if(void 0===s){if(e===I.CurrencyDecimal)return n[r.Y.NumberSymbols][I.Decimal];if(e===I.CurrencyGroup)return n[r.Y.NumberSymbols][I.Group]}return s}const F=r.lb;function L(t){if(!t[r.Y.ExtraData])throw new Error(`Missing extra locale data for the locale "${t[r.Y.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function U(t,e){for(let n=e;n>-1;n--)if(void 0!==t[n])return t[n];throw new Error("Locale data API: locale data undefined")}function H(t){const[e,n]=t.split(":");return{hours:+e,minutes:+n}}const $=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,z={},B=/((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,q=function(){var t={Short:0,ShortGMT:1,Long:2,Extended:3};return t[t.Short]="Short",t[t.ShortGMT]="ShortGMT",t[t.Long]="Long",t[t.Extended]="Extended",t}(),Q=function(){var t={FullYear:0,Month:1,Date:2,Hours:3,Minutes:4,Seconds:5,FractionalSeconds:6,Day:7};return t[t.FullYear]="FullYear",t[t.Month]="Month",t[t.Date]="Date",t[t.Hours]="Hours",t[t.Minutes]="Minutes",t[t.Seconds]="Seconds",t[t.FractionalSeconds]="FractionalSeconds",t[t.Day]="Day",t}(),W=function(){var t={DayPeriods:0,Days:1,Months:2,Eras:3};return t[t.DayPeriods]="DayPeriods",t[t.Days]="Days",t[t.Months]="Months",t[t.Eras]="Eras",t}();function G(t,e,n,s){let i=function(t){if(rt(t))return t;if("number"==typeof t&&!isNaN(t))return new Date(t);if("string"==typeof t){t=t.trim();const e=parseFloat(t);if(!isNaN(t-e))return new Date(e);if(/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)){const[e,n,r]=t.split("-").map(t=>+t);return new Date(e,n-1,r)}let n;if(n=t.match($))return function(t){const e=new Date(0);let n=0,r=0;const s=t[8]?e.setUTCFullYear:e.setFullYear,i=t[8]?e.setUTCHours:e.setHours;t[9]&&(n=Number(t[9]+t[10]),r=Number(t[9]+t[11])),s.call(e,Number(t[1]),Number(t[2])-1,Number(t[3]));const o=Number(t[4]||0)-n,a=Number(t[5]||0)-r,l=Number(t[6]||0),c=Math.round(1e3*parseFloat("0."+(t[7]||0)));return i.call(e,o,a,l,c),e}(n)}const e=new Date(t);if(!rt(e))throw new Error(`Unable to convert "${t}" into a date`);return e}(t);e=function t(e,n){const s=function(t){return Object(r.ib)(t)[r.Y.LocaleId]}(e);if(z[s]=z[s]||{},z[s][n])return z[s][n];let i="";switch(n){case"shortDate":i=N(e,D.Short);break;case"mediumDate":i=N(e,D.Medium);break;case"longDate":i=N(e,D.Long);break;case"fullDate":i=N(e,D.Full);break;case"shortTime":i=P(e,D.Short);break;case"mediumTime":i=P(e,D.Medium);break;case"longTime":i=P(e,D.Long);break;case"fullTime":i=P(e,D.Full);break;case"short":const n=t(e,"shortTime"),r=t(e,"shortDate");i=Z(M(e,D.Short),[n,r]);break;case"medium":const s=t(e,"mediumTime"),o=t(e,"mediumDate");i=Z(M(e,D.Medium),[s,o]);break;case"long":const a=t(e,"longTime"),l=t(e,"longDate");i=Z(M(e,D.Long),[a,l]);break;case"full":const c=t(e,"fullTime"),u=t(e,"fullDate");i=Z(M(e,D.Full),[c,u])}return i&&(z[s][n]=i),i}(n,e)||e;let o,a=[];for(;e;){if(o=B.exec(e),!o){a.push(e);break}{a=a.concat(o.slice(1));const t=a.pop();if(!t)break;e=t}}let l=i.getTimezoneOffset();s&&(l=nt(s,l),i=function(t,e,n){const r=t.getTimezoneOffset();return function(t,e){return(t=new Date(t.getTime())).setMinutes(t.getMinutes()+e),t}(t,-1*(nt(e,r)-r))}(i,s));let c="";return a.forEach(t=>{const e=function(t){if(et[t])return et[t];let e;switch(t){case"G":case"GG":case"GGG":e=X(W.Eras,T.Abbreviated);break;case"GGGG":e=X(W.Eras,T.Wide);break;case"GGGGG":e=X(W.Eras,T.Narrow);break;case"y":e=J(Q.FullYear,1,0,!1,!0);break;case"yy":e=J(Q.FullYear,2,0,!0,!0);break;case"yyy":e=J(Q.FullYear,3,0,!1,!0);break;case"yyyy":e=J(Q.FullYear,4,0,!1,!0);break;case"M":case"L":e=J(Q.Month,1,1);break;case"MM":case"LL":e=J(Q.Month,2,1);break;case"MMM":e=X(W.Months,T.Abbreviated);break;case"MMMM":e=X(W.Months,T.Wide);break;case"MMMMM":e=X(W.Months,T.Narrow);break;case"LLL":e=X(W.Months,T.Abbreviated,O.Standalone);break;case"LLLL":e=X(W.Months,T.Wide,O.Standalone);break;case"LLLLL":e=X(W.Months,T.Narrow,O.Standalone);break;case"w":e=tt(1);break;case"ww":e=tt(2);break;case"W":e=tt(1,!0);break;case"d":e=J(Q.Date,1);break;case"dd":e=J(Q.Date,2);break;case"E":case"EE":case"EEE":e=X(W.Days,T.Abbreviated);break;case"EEEE":e=X(W.Days,T.Wide);break;case"EEEEE":e=X(W.Days,T.Narrow);break;case"EEEEEE":e=X(W.Days,T.Short);break;case"a":case"aa":case"aaa":e=X(W.DayPeriods,T.Abbreviated);break;case"aaaa":e=X(W.DayPeriods,T.Wide);break;case"aaaaa":e=X(W.DayPeriods,T.Narrow);break;case"b":case"bb":case"bbb":e=X(W.DayPeriods,T.Abbreviated,O.Standalone,!0);break;case"bbbb":e=X(W.DayPeriods,T.Wide,O.Standalone,!0);break;case"bbbbb":e=X(W.DayPeriods,T.Narrow,O.Standalone,!0);break;case"B":case"BB":case"BBB":e=X(W.DayPeriods,T.Abbreviated,O.Format,!0);break;case"BBBB":e=X(W.DayPeriods,T.Wide,O.Format,!0);break;case"BBBBB":e=X(W.DayPeriods,T.Narrow,O.Format,!0);break;case"h":e=J(Q.Hours,1,-12);break;case"hh":e=J(Q.Hours,2,-12);break;case"H":e=J(Q.Hours,1);break;case"HH":e=J(Q.Hours,2);break;case"m":e=J(Q.Minutes,1);break;case"mm":e=J(Q.Minutes,2);break;case"s":e=J(Q.Seconds,1);break;case"ss":e=J(Q.Seconds,2);break;case"S":e=J(Q.FractionalSeconds,1);break;case"SS":e=J(Q.FractionalSeconds,2);break;case"SSS":e=J(Q.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":e=Y(q.Short);break;case"ZZZZZ":e=Y(q.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=Y(q.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":e=Y(q.Long);break;default:return null}return et[t]=e,e}(t);c+=e?e(i,n,l):"''"===t?"'":t.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function Z(t,e){return e&&(t=t.replace(/\{([^}]+)}/g,(function(t,n){return null!=e&&n in e?e[n]:t}))),t}function K(t,e,n="-",r,s){let i="";(t<0||s&&t<=0)&&(s?t=1-t:(t=-t,i=n));let o=String(t);for(;o.length<e;)o="0"+o;return r&&(o=o.substr(o.length-e)),i+o}function J(t,e,n=0,r=!1,s=!1){return function(i,o){let a=function(t,e){switch(t){case Q.FullYear:return e.getFullYear();case Q.Month:return e.getMonth();case Q.Date:return e.getDate();case Q.Hours:return e.getHours();case Q.Minutes:return e.getMinutes();case Q.Seconds:return e.getSeconds();case Q.FractionalSeconds:return e.getMilliseconds();case Q.Day:return e.getDay();default:throw new Error(`Unknown DateType value "${t}".`)}}(t,i);if((n>0||a>-n)&&(a+=n),t===Q.Hours)0===a&&-12===n&&(a=12);else if(t===Q.FractionalSeconds)return l=e,K(a,3).substr(0,l);var l;const c=V(o,I.MinusSign);return K(a,e,c,r,s)}}function X(t,e,n=O.Format,s=!1){return function(i,o){return function(t,e,n,s,i,o){switch(n){case W.Months:return j(e,i,s)[t.getMonth()];case W.Days:return R(e,i,s)[t.getDay()];case W.DayPeriods:const a=t.getHours(),l=t.getMinutes();if(o){const t=function(t){const e=Object(r.ib)(t);return L(e),(e[r.Y.ExtraData][2]||[]).map(t=>"string"==typeof t?H(t):[H(t[0]),H(t[1])])}(e),n=function(t,e,n){const s=Object(r.ib)(t);L(s);const i=U([s[r.Y.ExtraData][0],s[r.Y.ExtraData][1]],e)||[];return U(i,n)||[]}(e,i,s);let o;if(t.forEach((t,e)=>{if(Array.isArray(t)){const{hours:r,minutes:s}=t[0],{hours:i,minutes:c}=t[1];a>=r&&l>=s&&(a<i||a===i&&l<c)&&(o=n[e])}else{const{hours:r,minutes:s}=t;r===a&&s===l&&(o=n[e])}}),o)return o}return A(e,i,s)[a<12?0:1];case W.Eras:return function(t,e){return U(Object(r.ib)(t)[r.Y.Eras],e)}(e,s)[t.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${n}`)}}(i,o,t,e,n,s)}}function Y(t){return function(e,n,r){const s=-1*r,i=V(n,I.MinusSign),o=s>0?Math.floor(s/60):Math.ceil(s/60);switch(t){case q.Short:return(s>=0?"+":"")+K(o,2,i)+K(Math.abs(s%60),2,i);case q.ShortGMT:return"GMT"+(s>=0?"+":"")+K(o,1,i);case q.Long:return"GMT"+(s>=0?"+":"")+K(o,2,i)+":"+K(Math.abs(s%60),2,i);case q.Extended:return 0===r?"Z":(s>=0?"+":"")+K(o,2,i)+":"+K(Math.abs(s%60),2,i);default:throw new Error(`Unknown zone width "${t}"`)}}}function tt(t,e=!1){return function(n,r){let s;if(e){const t=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,e=n.getDate();s=1+Math.floor((e+t)/7)}else{const t=function(t){const e=new Date(t,0,1).getDay();return new Date(t,0,1+(e<=4?4:11)-e)}(n.getFullYear()),e=(i=n,new Date(i.getFullYear(),i.getMonth(),i.getDate()+(4-i.getDay()))).getTime()-t.getTime();s=1+Math.round(e/6048e5)}var i;return K(s,t,V(r,I.MinusSign))}}const et={};function nt(t,e){t=t.replace(/:/g,"");const n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(n)?e:n}function rt(t){return t instanceof Date&&!isNaN(t.valueOf())}class st{}let it=(()=>{class t extends st{constructor(t){super(),this.locale=t}getPluralCategory(t,e){switch(F(e||this.locale)(t)){case k.Zero:return"zero";case k.One:return"one";case k.Two:return"two";case k.Few:return"few";case k.Many:return"many";default:return"other"}}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(r.u))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();function ot(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const t=n.indexOf("="),[r,s]=-1==t?[n,""]:[n.slice(0,t),n.slice(t+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}class at{constructor(t,e,n,r){this.$implicit=t,this.ngForOf=e,this.index=n,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let lt=(()=>{class t{constructor(t,e,n){this._viewContainer=t,this._template=e,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){Object(r.T)()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. `+"See https://angular.io/api/common/NgForOf#change-propagation for more information."),this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;if(!this._differ&&n)try{this._differ=this._differs.find(n).create(this.ngForTrackBy)}catch(e){throw new Error(`Cannot find a differ supporting object '${n}' of type '${t=n,t.name||typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)}}var t;if(this._differ){const t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){const e=[];t.forEachOperation((t,n,r)=>{if(null==t.previousIndex){const n=this._viewContainer.createEmbeddedView(this._template,new at(null,this._ngForOf,-1,-1),null===r?void 0:r),s=new ct(t,n);e.push(s)}else if(null==r)this._viewContainer.remove(null===n?void 0:n);else if(null!==n){const s=this._viewContainer.get(n);this._viewContainer.move(s,r);const i=new ct(t,s);e.push(i)}});for(let n=0;n<e.length;n++)this._perViewChange(e[n].view,e[n].record);for(let n=0,r=this._viewContainer.length;n<r;n++){const t=this._viewContainer.get(n);t.context.index=n,t.context.count=r,t.context.ngForOf=this._ngForOf}t.forEachIdentityChange(t=>{this._viewContainer.get(t.currentIndex).context.$implicit=t.item})}_perViewChange(t,e){t.context.$implicit=e.item}static ngTemplateContextGuard(t,e){return!0}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(r.N),r.Mb(r.K),r.Mb(r.s))},t.\u0275dir=r.Hb({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),t})();class ct{constructor(t,e){this.record=t,this.view=e}}let ut=(()=>{class t{constructor(t,e){this._viewContainer=t,this._context=new ht,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=e}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){dt("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){dt("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,e){return!0}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(r.N),r.Mb(r.K))},t.\u0275dir=r.Hb({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),t})();class ht{constructor(){this.$implicit=null,this.ngIf=null}}function dt(t,e){if(e&&!e.createEmbeddedView)throw new Error(`${t} must be a TemplateRef, but received '${Object(r.ub)(e)}'.`)}let ft=(()=>{class t{constructor(t){this._viewContainerRef=t,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null}ngOnChanges(t){if(this._shouldRecreateView(t)){const t=this._viewContainerRef;this._viewRef&&t.remove(t.indexOf(this._viewRef)),this._viewRef=this.ngTemplateOutlet?t.createEmbeddedView(this.ngTemplateOutlet,this.ngTemplateOutletContext):null}else this._viewRef&&this.ngTemplateOutletContext&&this._updateExistingContext(this.ngTemplateOutletContext)}_shouldRecreateView(t){const e=t.ngTemplateOutletContext;return!!t.ngTemplateOutlet||e&&this._hasContextShapeChanged(e)}_hasContextShapeChanged(t){const e=Object.keys(t.previousValue||{}),n=Object.keys(t.currentValue||{});if(e.length===n.length){for(let t of n)if(-1===e.indexOf(t))return!0;return!1}return!0}_updateExistingContext(t){for(let e of Object.keys(t))this._viewRef.context[e]=this.ngTemplateOutletContext[e]}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(r.N))},t.\u0275dir=r.Hb({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet"},features:[r.xb]}),t})();function pt(t,e){return Error(`InvalidPipeArgument: '${e}' for pipe '${Object(r.ub)(t)}'`)}let mt=(()=>{class t{transform(e){if(!e)return e;if("string"!=typeof e)throw pt(t,e);return e.toUpperCase()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Lb({name:"uppercase",type:t,pure:!0}),t})(),gt=(()=>{class t{constructor(t){this.locale=t}transform(e,n="mediumDate",r,s){if(null==e||""===e||e!=e)return null;try{return G(e,n,s||this.locale,r)}catch(i){throw pt(t,i.message)}}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(r.u))},t.\u0275pipe=r.Lb({name:"date",type:t,pure:!0}),t})(),bt=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},providers:[{provide:st,useClass:it}]}),t})();const yt="browser";function _t(t){return t===yt}let vt=(()=>{class t{}return t.\u0275prov=Object(r.Ib)({token:t,providedIn:"root",factory:()=>new wt(Object(r.Zb)(l),window,Object(r.Zb)(r.m))}),t})();class wt{constructor(t,e,n){this.document=t,this.window=e,this.errorHandler=n,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportScrollRestoration()?[this.window.scrollX,this.window.scrollY]:[0,0]}scrollToPosition(t){this.supportScrollRestoration()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(this.supportScrollRestoration()){t=this.window.CSS&&this.window.CSS.escape?this.window.CSS.escape(t):t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g,"\\$1");try{const e=this.document.querySelector(`#${t}`);if(e)return void this.scrollToElement(e);const n=this.document.querySelector(`[name='${t}']`);if(n)return void this.scrollToElement(n)}catch(e){this.errorHandler.handleError(e)}}}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const e=this.window.history;e&&e.scrollRestoration&&(e.scrollRestoration=t)}}scrollToElement(t){const e=t.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],r-s[1])}supportScrollRestoration(){try{return!!this.window&&!!this.window.scrollTo}catch(t){return!1}}}},pLZG:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("7o/Q");function s(t,e){return function(n){return n.lift(new i(t,e))}}class i{constructor(t,e){this.predicate=t,this.thisArg=e}call(t,e){return e.subscribe(new o(t,this.predicate,this.thisArg))}}class o extends r.a{constructor(t,e,n){super(t),this.predicate=e,this.thisArg=n,this.count=0}_next(t){let e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}e&&this.destination.next(t)}}},quSY:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("DH7j"),s=n("XoHu"),i=n("n6bG");const o=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();let a=(()=>{class t{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}unsubscribe(){let e;if(this.closed)return;let{_parentOrParents:n,_unsubscribe:a,_subscriptions:c}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(let t=0;t<n.length;++t)n[t].remove(this);if(Object(i.a)(a))try{a.call(this)}catch(u){e=u instanceof o?l(u.errors):[u]}if(Object(r.a)(c)){let t=-1,n=c.length;for(;++t<n;){const n=c[t];if(Object(s.a)(n))try{n.unsubscribe()}catch(u){e=e||[],u instanceof o?e=e.concat(l(u.errors)):e.push(u)}}}if(e)throw new o(e)}add(e){let n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){const e=n;n=new t,n._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof t){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n}remove(t){const e=this._subscriptions;if(e){const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}}var e;return t.EMPTY=((e=new t).closed=!0,e),t})();function l(t){return t.reduce((t,e)=>t.concat(e instanceof o?e.errors:e),[])}},"tk/3":function(t,e,n){"use strict";n.d(e,"a",(function(){return T})),n.d(e,"b",(function(){return k})),n.d(e,"c",(function(){return H})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return C}));var r=n("fXoL"),s=n("LRne"),i=n("HDdC"),o=n("bOdf"),a=n("pLZG"),l=n("lJxs"),c=n("ofXK");class u{}class h{}class d{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(t=>{const e=t.indexOf(":");if(e>0){const n=t.slice(0,e),r=n.toLowerCase(),s=t.slice(e+1).trim();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(s):this.headers.set(r,[s])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let n=t[e];const r=e.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(this.headers.set(r,n),this.maybeSetNormalizedName(e,r))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof d?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new d;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof d?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(t.name,e);const r=("a"===t.op?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":const s=t.value;if(s){let t=this.headers.get(e);if(!t)return;t=t.filter(t=>-1===s.indexOf(t)),0===t.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,t)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class f{encodeKey(t){return p(t)}encodeValue(t){return p(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}function p(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class m{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new f,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(t,e){const n=new Map;return t.length>0&&t.split("&").forEach(t=>{const r=t.indexOf("="),[s,i]=-1==r?[e.decodeKey(t),""]:[e.decodeKey(t.slice(0,r)),e.decodeValue(t.slice(r+1))],o=n.get(s)||[];o.push(i),n.set(s,o)}),n}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const n=t.fromObject[e];this.map.set(e,Array.isArray(n)?n:[n])})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new m({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat([t]),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(t.value),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let e=this.map.get(t.param)||[];const n=e.indexOf(t.value);-1!==n&&e.splice(n,1),e.length>0?this.map.set(t.param,e):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}function g(t){return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer}function b(t){return"undefined"!=typeof Blob&&t instanceof Blob}function y(t){return"undefined"!=typeof FormData&&t instanceof FormData}class _{constructor(t,e,n,r){let s;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==n?n:null,s=r):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.params&&(this.params=s.params)),this.headers||(this.headers=new d),this.params){const t=this.params.toString();if(0===t.length)this.urlWithParams=e;else{const n=e.indexOf("?");this.urlWithParams=e+(-1===n?"?":n<e.length-1?"&":"")+t}}else this.params=new m,this.urlWithParams=e}serializeBody(){return null===this.body?null:g(this.body)||b(this.body)||y(this.body)||"string"==typeof this.body?this.body:this.body instanceof m?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||y(this.body)?null:b(this.body)?this.body.type||null:g(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof m?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}clone(t={}){const e=t.method||this.method,n=t.url||this.url,r=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,i=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,o=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let a=t.headers||this.headers,l=t.params||this.params;return void 0!==t.setHeaders&&(a=Object.keys(t.setHeaders).reduce((e,n)=>e.set(n,t.setHeaders[n]),a)),t.setParams&&(l=Object.keys(t.setParams).reduce((e,n)=>e.set(n,t.setParams[n]),l)),new _(e,n,s,{params:l,headers:a,reportProgress:o,responseType:r,withCredentials:i})}}const v=function(){var t={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return t[t.Sent]="Sent",t[t.UploadProgress]="UploadProgress",t[t.ResponseHeader]="ResponseHeader",t[t.DownloadProgress]="DownloadProgress",t[t.Response]="Response",t[t.User]="User",t}();class w{constructor(t,e=200,n="OK"){this.headers=t.headers||new d,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class S extends w{constructor(t={}){super(t),this.type=v.ResponseHeader}clone(t={}){return new S({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class C extends w{constructor(t={}){super(t),this.type=v.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new C({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class E extends w{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function x(t,e){return{body:e,headers:t.headers,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}let k=(()=>{class t{constructor(t){this.handler=t}request(t,e,n={}){let r;if(t instanceof _)r=t;else{let s=void 0;s=n.headers instanceof d?n.headers:new d(n.headers);let i=void 0;n.params&&(i=n.params instanceof m?n.params:new m({fromObject:n.params})),r=new _(t,e,void 0!==n.body?n.body:null,{headers:s,params:i,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const i=Object(s.a)(r).pipe(Object(o.a)(t=>this.handler.handle(t)));if(t instanceof _||"events"===n.observe)return i;const c=i.pipe(Object(a.a)(t=>t instanceof C));switch(n.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return c.pipe(Object(l.a)(t=>{if(null!==t.body&&!(t.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return t.body}));case"blob":return c.pipe(Object(l.a)(t=>{if(null!==t.body&&!(t.body instanceof Blob))throw new Error("Response is not a Blob.");return t.body}));case"text":return c.pipe(Object(l.a)(t=>{if(null!==t.body&&"string"!=typeof t.body)throw new Error("Response is not a string.");return t.body}));case"json":default:return c.pipe(Object(l.a)(t=>t.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(t,e={}){return this.request("DELETE",t,e)}get(t,e={}){return this.request("GET",t,e)}head(t,e={}){return this.request("HEAD",t,e)}jsonp(t,e){return this.request("JSONP",t,{params:(new m).append(e,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,e={}){return this.request("OPTIONS",t,e)}patch(t,e,n={}){return this.request("PATCH",t,x(n,e))}post(t,e,n={}){return this.request("POST",t,x(n,e))}put(t,e,n={}){return this.request("PUT",t,x(n,e))}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(u))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();class O{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const T=new r.q("HTTP_INTERCEPTORS");let D=(()=>{class t{intercept(t,e){return e.handle(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();const I=/^\)\]\}',?\n/;class A{}let R=(()=>{class t{constructor(){}build(){return new XMLHttpRequest}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})(),j=(()=>{class t{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new i.a(e=>{const n=this.xhrFactory.build();if(n.open(t.method,t.urlWithParams),t.withCredentials&&(n.withCredentials=!0),t.headers.forEach((t,e)=>n.setRequestHeader(t,e.join(","))),t.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const e=t.detectContentTypeHeader();null!==e&&n.setRequestHeader("Content-Type",e)}if(t.responseType){const e=t.responseType.toLowerCase();n.responseType="json"!==e?e:"text"}const r=t.serializeBody();let s=null;const i=()=>{if(null!==s)return s;const e=1223===n.status?204:n.status,r=n.statusText||"OK",i=new d(n.getAllResponseHeaders()),o=function(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}(n)||t.url;return s=new S({headers:i,status:e,statusText:r,url:o}),s},o=()=>{let{headers:r,status:s,statusText:o,url:a}=i(),l=null;204!==s&&(l=void 0===n.response?n.responseText:n.response),0===s&&(s=l?200:0);let c=s>=200&&s<300;if("json"===t.responseType&&"string"==typeof l){const t=l;l=l.replace(I,"");try{l=""!==l?JSON.parse(l):null}catch(u){l=t,c&&(c=!1,l={error:u,text:l})}}c?(e.next(new C({body:l,headers:r,status:s,statusText:o,url:a||void 0})),e.complete()):e.error(new E({error:l,headers:r,status:s,statusText:o,url:a||void 0}))},a=t=>{const{url:r}=i(),s=new E({error:t,status:n.status||0,statusText:n.statusText||"Unknown Error",url:r||void 0});e.error(s)};let l=!1;const c=r=>{l||(e.next(i()),l=!0);let s={type:v.DownloadProgress,loaded:r.loaded};r.lengthComputable&&(s.total=r.total),"text"===t.responseType&&n.responseText&&(s.partialText=n.responseText),e.next(s)},u=t=>{let n={type:v.UploadProgress,loaded:t.loaded};t.lengthComputable&&(n.total=t.total),e.next(n)};return n.addEventListener("load",o),n.addEventListener("error",a),t.reportProgress&&(n.addEventListener("progress",c),null!==r&&n.upload&&n.upload.addEventListener("progress",u)),n.send(r),e.next({type:v.Sent}),()=>{n.removeEventListener("error",a),n.removeEventListener("load",o),t.reportProgress&&(n.removeEventListener("progress",c),null!==r&&n.upload&&n.upload.removeEventListener("progress",u)),n.abort()}})}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(A))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();const N=new r.q("XSRF_COOKIE_NAME"),P=new r.q("XSRF_HEADER_NAME");class M{}let V=(()=>{class t{constructor(t,e,n){this.doc=t,this.platform=e,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(c.z)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(c.c),r.Zb(r.B),r.Zb(N))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})(),F=(()=>{class t{constructor(t,e){this.tokenService=t,this.headerName=e}intercept(t,e){const n=t.url.toLowerCase();if("GET"===t.method||"HEAD"===t.method||n.startsWith("http://")||n.startsWith("https://"))return e.handle(t);const r=this.tokenService.getToken();return null===r||t.headers.has(this.headerName)||(t=t.clone({headers:t.headers.set(this.headerName,r)})),e.handle(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(M),r.Zb(P))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})(),L=(()=>{class t{constructor(t,e){this.backend=t,this.injector=e,this.chain=null}handle(t){if(null===this.chain){const t=this.injector.get(T,[]);this.chain=t.reduceRight((t,e)=>new O(t,e),this.backend)}return this.chain.handle(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(h),r.Zb(r.r))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})(),U=(()=>{class t{static disable(){return{ngModule:t,providers:[{provide:F,useClass:D}]}}static withOptions(e={}){return{ngModule:t,providers:[e.cookieName?{provide:N,useValue:e.cookieName}:[],e.headerName?{provide:P,useValue:e.headerName}:[]]}}}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},providers:[F,{provide:T,useExisting:F,multi:!0},{provide:M,useClass:V},{provide:N,useValue:"XSRF-TOKEN"},{provide:P,useValue:"X-XSRF-TOKEN"}]}),t})(),H=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},providers:[k,{provide:u,useClass:L},j,{provide:h,useExisting:j},R,{provide:A,useExisting:R}],imports:[[U.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),t})()},tyNb:function(t,e,n){"use strict";n.d(e,"a",(function(){return ne})),n.d(e,"b",(function(){return hn})),n.d(e,"c",(function(){return mn})),n.d(e,"d",(function(){return fn})),n.d(e,"e",(function(){return Tn})),n.d(e,"f",(function(){return yn}));var r=n("ofXK"),s=n("fXoL"),i=n("LRne"),o=n("Cfvw"),a=n("2Vo4"),l=n("HDdC");const c=(()=>{function t(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return t.prototype=Object.create(Error.prototype),t})();var u=n("itXk"),h=n("EY2u");function d(t){return new l.a(e=>{let n;try{n=t()}catch(r){return void e.error(r)}return(n?Object(o.a)(n):Object(h.b)()).subscribe(e)})}var f=n("XNiG"),p=n("lJxs"),m=n("0EUg"),g=n("pLZG"),b=n("7o/Q"),y=n("4I5i");function _(t){return function(e){return 0===t?Object(h.b)():e.lift(new v(t))}}class v{constructor(t){if(this.total=t,this.total<0)throw new y.a}call(t,e){return e.subscribe(new w(t,this.total))}}class w extends b.a{constructor(t,e){super(t),this.total=e,this.ring=new Array,this.count=0}_next(t){const e=this.ring,n=this.total,r=this.count++;e.length<n?e.push(t):e[r%n]=t}_complete(){const t=this.destination;let e=this.count;if(e>0){const n=this.count>=this.total?this.total:this.count,r=this.ring;for(let s=0;s<n;s++){const s=e++%n;t.next(r[s])}}t.complete()}}function S(t=x){return e=>e.lift(new C(t))}class C{constructor(t){this.errorFactory=t}call(t,e){return e.subscribe(new E(t,this.errorFactory))}}class E extends b.a{constructor(t,e){super(t),this.errorFactory=e,this.hasValue=!1}_next(t){this.hasValue=!0,this.destination.next(t)}_complete(){if(this.hasValue)return this.destination.complete();{let e;try{e=this.errorFactory()}catch(t){e=t}this.destination.error(e)}}}function x(){return new c}function k(t=null){return e=>e.lift(new O(t))}class O{constructor(t){this.defaultValue=t}call(t,e){return e.subscribe(new T(t,this.defaultValue))}}class T extends b.a{constructor(t,e){super(t),this.defaultValue=e,this.isEmpty=!0}_next(t){this.isEmpty=!1,this.destination.next(t)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}var D=n("SpAZ");function I(t,e){const n=arguments.length>=2;return r=>r.pipe(t?Object(g.a)((e,n)=>t(e,n,r)):D.a,_(1),n?k(e):S(()=>new c))}var A=n("JIr8"),R=n("IzEk");function j(t,e){const n=arguments.length>=2;return r=>r.pipe(t?Object(g.a)((e,n)=>t(e,n,r)):D.a,Object(R.a)(1),n?k(e):S(()=>new c))}var N=n("5+tZ");class P{constructor(t,e,n){this.predicate=t,this.thisArg=e,this.source=n}call(t,e){return e.subscribe(new M(t,this.predicate,this.thisArg,this.source))}}class M extends b.a{constructor(t,e,n,r){super(t),this.predicate=e,this.thisArg=n,this.source=r,this.index=0,this.thisArg=n||this}notifyComplete(t){this.destination.next(t),this.destination.complete()}_next(t){let e=!1;try{e=this.predicate.call(this.thisArg,t,this.index++,this.source)}catch(n){return void this.destination.error(n)}e||this.notifyComplete(!1)}_complete(){this.notifyComplete(!0)}}var V=n("eIep"),F=n("JX91");function L(t,e){let n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new U(t,e,n))}}class U{constructor(t,e,n=!1){this.accumulator=t,this.seed=e,this.hasSeed=n}call(t,e){return e.subscribe(new H(t,this.accumulator,this.seed,this.hasSeed))}}class H extends b.a{constructor(t,e,n,r){super(t),this.accumulator=e,this._seed=n,this.hasSeed=r,this.index=0}get seed(){return this._seed}set seed(t){this.hasSeed=!0,this._seed=t}_next(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)}_tryNext(t){const e=this.index++;let n;try{n=this.accumulator(this.seed,t,e)}catch(r){this.destination.error(r)}this.seed=n,this.destination.next(n)}}var $=n("bOdf"),z=n("mCNh"),B=n("vkgz"),q=n("quSY");class Q{constructor(t){this.callback=t}call(t,e){return e.subscribe(new W(t,this.callback))}}class W extends b.a{constructor(t,e){super(t),this.add(new q.a(e))}}var G=n("bHdf");class Z{constructor(t,e){this.id=t,this.url=e}}class K extends Z{constructor(t,e,n="imperative",r=null){super(t,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class J extends Z{constructor(t,e,n){super(t,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class X extends Z{constructor(t,e,n){super(t,e),this.reason=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Y extends Z{constructor(t,e,n){super(t,e),this.error=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class tt extends Z{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class et extends Z{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class nt extends Z{constructor(t,e,n,r,s){super(t,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class rt extends Z{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class st extends Z{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class it{constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class ot{constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class at{constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class lt{constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class ct{constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class ut{constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class ht{constructor(t,e,n){this.routerEvent=t,this.position=e,this.anchor=n}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}let dt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],decls:1,vars:0,template:function(t,e){1&t&&s.Nb(0,"router-outlet")},directives:function(){return[yn]},encapsulation:2}),t})();class ft{constructor(t){this.params=t||{}}has(t){return this.params.hasOwnProperty(t)}get(t){if(this.has(t)){const e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){const e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}}function pt(t){return new ft(t)}function mt(t){const e=Error("NavigationCancelingError: "+t);return e.ngNavigationCancelingError=!0,e}function gt(t,e,n){const r=n.path.split("/");if(r.length>t.length)return null;if("full"===n.pathMatch&&(e.hasChildren()||r.length<t.length))return null;const s={};for(let i=0;i<r.length;i++){const e=r[i],n=t[i];if(e.startsWith(":"))s[e.substring(1)]=n;else if(e!==n.path)return null}return{consumed:t.slice(0,r.length),posParams:s}}class bt{constructor(t,e){this.routes=t,this.module=e}}function yt(t,e=""){for(let n=0;n<t.length;n++){const r=t[n];_t(r,vt(e,r))}}function _t(t,e){if(!t)throw new Error(`\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);if(Array.isArray(t))throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);if(!t.component&&!t.children&&!t.loadChildren&&t.outlet&&"primary"!==t.outlet)throw new Error(`Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`);if(t.redirectTo&&t.children)throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);if(t.redirectTo&&t.loadChildren)throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);if(t.children&&t.loadChildren)throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);if(t.redirectTo&&t.component)throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);if(t.path&&t.matcher)throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);if(void 0===t.redirectTo&&!t.component&&!t.children&&!t.loadChildren)throw new Error(`Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`);if(void 0===t.path&&void 0===t.matcher)throw new Error(`Invalid configuration of route '${e}': routes must have either a path or a matcher specified`);if("string"==typeof t.path&&"/"===t.path.charAt(0))throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);if(""===t.path&&void 0!==t.redirectTo&&void 0===t.pathMatch)throw new Error(`Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);if(void 0!==t.pathMatch&&"full"!==t.pathMatch&&"prefix"!==t.pathMatch)throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);t.children&&yt(t.children,e)}function vt(t,e){return e?t||e.path?t&&!e.path?`${t}/`:!t&&e.path?e.path:`${t}/${e.path}`:"":t}function wt(t){const e=t.children&&t.children.map(wt),n=e?Object.assign(Object.assign({},t),{children:e}):Object.assign({},t);return!n.component&&(e||n.loadChildren)&&n.outlet&&"primary"!==n.outlet&&(n.component=dt),n}function St(t,e){const n=Object.keys(t),r=Object.keys(e);if(!n||!r||n.length!=r.length)return!1;let s;for(let i=0;i<n.length;i++)if(s=n[i],!Ct(t[s],e[s]))return!1;return!0}function Ct(t,e){return Array.isArray(t)&&Array.isArray(e)?t.length==e.length&&t.every(t=>e.indexOf(t)>-1):t===e}function Et(t){return Array.prototype.concat.apply([],t)}function xt(t){return t.length>0?t[t.length-1]:null}function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(t[n],n)}function Ot(t){return Object(s.pb)(t)?t:Object(s.qb)(t)?Object(o.a)(Promise.resolve(t)):Object(i.a)(t)}function Tt(t,e,n){return n?function(t,e){return St(t,e)}(t.queryParams,e.queryParams)&&function t(e,n){if(!Rt(e.segments,n.segments))return!1;if(e.numberOfChildren!==n.numberOfChildren)return!1;for(const r in n.children){if(!e.children[r])return!1;if(!t(e.children[r],n.children[r]))return!1}return!0}(t.root,e.root):function(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(n=>Ct(t[n],e[n]))}(t.queryParams,e.queryParams)&&function t(e,n){return function e(n,r,s){if(n.segments.length>s.length)return!!Rt(n.segments.slice(0,s.length),s)&&!r.hasChildren();if(n.segments.length===s.length){if(!Rt(n.segments,s))return!1;for(const e in r.children){if(!n.children[e])return!1;if(!t(n.children[e],r.children[e]))return!1}return!0}{const t=s.slice(0,n.segments.length),i=s.slice(n.segments.length);return!!Rt(n.segments,t)&&!!n.children.primary&&e(n.children.primary,r,i)}}(e,n,n.segments)}(t.root,e.root)}class Dt{constructor(t,e,n){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=pt(this.queryParams)),this._queryParamMap}toString(){return Mt.serialize(this)}}class It{constructor(t,e){this.segments=t,this.children=e,this.parent=null,kt(e,(t,e)=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Vt(this)}}class At{constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap||(this._parameterMap=pt(this.parameters)),this._parameterMap}toString(){return zt(this)}}function Rt(t,e){return t.length===e.length&&t.every((t,n)=>t.path===e[n].path)}function jt(t,e){let n=[];return kt(t.children,(t,r)=>{"primary"===r&&(n=n.concat(e(t,r)))}),kt(t.children,(t,r)=>{"primary"!==r&&(n=n.concat(e(t,r)))}),n}class Nt{}class Pt{parse(t){const e=new Gt(t);return new Dt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){var e;return`${`/${function t(e,n){if(!e.hasChildren())return Vt(e);if(n){const n=e.children.primary?t(e.children.primary,!1):"",r=[];return kt(e.children,(e,n)=>{"primary"!==n&&r.push(`${n}:${t(e,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=jt(e,(n,r)=>"primary"===r?[t(e.children.primary,!1)]:[`${r}:${t(n,!1)}`]);return`${Vt(e)}/(${n.join("//")})`}}(t.root,!0)}`}${function(t){const e=Object.keys(t).map(e=>{const n=t[e];return Array.isArray(n)?n.map(t=>`${Lt(e)}=${Lt(t)}`).join("&"):`${Lt(e)}=${Lt(n)}`});return e.length?`?${e.join("&")}`:""}(t.queryParams)}${"string"==typeof t.fragment?`#${e=t.fragment,encodeURI(e)}`:""}`}}const Mt=new Pt;function Vt(t){return t.segments.map(t=>zt(t)).join("/")}function Ft(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Lt(t){return Ft(t).replace(/%3B/gi,";")}function Ut(t){return Ft(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ht(t){return decodeURIComponent(t)}function $t(t){return Ht(t.replace(/\+/g,"%20"))}function zt(t){return`${Ut(t.path)}${e=t.parameters,Object.keys(e).map(t=>`;${Ut(t)}=${Ut(e[t])}`).join("")}`;var e}const Bt=/^[^\/()?;=#]+/;function qt(t){const e=t.match(Bt);return e?e[0]:""}const Qt=/^[^=?&#]+/,Wt=/^[^?&#]+/;class Gt{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new It([],{}):new It([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(n.primary=new It(t,e)),n}parseSegment(){const t=qt(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(t),new At(Ht(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const e=qt(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const t=qt(this.remaining);t&&(n=t,this.capture(n))}t[Ht(e)]=Ht(n)}parseQueryParam(t){const e=function(t){const e=t.match(Qt);return e?e[0]:""}(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const t=function(t){const e=t.match(Wt);return e?e[0]:""}(this.remaining);t&&(n=t,this.capture(n))}const r=$t(e),s=$t(n);if(t.hasOwnProperty(r)){let e=t[r];Array.isArray(e)||(e=[e],t[r]=e),e.push(s)}else t[r]=s}parseParens(t){const e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=qt(this.remaining),r=this.remaining[n.length];if("/"!==r&&")"!==r&&";"!==r)throw new Error(`Cannot parse url '${this.url}'`);let s=void 0;n.indexOf(":")>-1?(s=n.substr(0,n.indexOf(":")),this.capture(s),this.capture(":")):t&&(s="primary");const i=this.parseChildren();e[s]=1===Object.keys(i).length?i.primary:new It([],i),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new Error(`Expected "${t}".`)}}class Zt{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){const e=Kt(t,this._root);return e?e.children.map(t=>t.value):[]}firstChild(t){const e=Kt(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){const e=Jt(t,this._root);return e.length<2?[]:e[e.length-2].children.map(t=>t.value).filter(e=>e!==t)}pathFromRoot(t){return Jt(t,this._root).map(t=>t.value)}}function Kt(t,e){if(t===e.value)return e;for(const n of e.children){const e=Kt(t,n);if(e)return e}return null}function Jt(t,e){if(t===e.value)return[e];for(const n of e.children){const r=Jt(t,n);if(r.length)return r.unshift(e),r}return[]}class Xt{constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}}function Yt(t){const e={};return t&&t.children.forEach(t=>e[t.value.outlet]=t),e}class te extends Zt{constructor(t,e){super(t),this.snapshot=e,oe(this,t)}toString(){return this.snapshot.toString()}}function ee(t,e){const n=function(t,e){const n=new se([],{},{},"",{},"primary",e,null,t.root,-1,{});return new ie("",new Xt(n,[]))}(t,e),r=new a.a([new At("",{})]),s=new a.a({}),i=new a.a({}),o=new a.a({}),l=new a.a(""),c=new ne(r,s,o,l,i,"primary",e,n.root);return c.snapshot=n.root,new te(new Xt(c,[]),n)}class ne{constructor(t,e,n,r,s,i,o,a){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=i,this.component=o,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(Object(p.a)(t=>pt(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(Object(p.a)(t=>pt(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function re(t,e="emptyOnly"){const n=t.pathFromRoot;let r=0;if("always"!==e)for(r=n.length-1;r>=1;){const t=n[r],e=n[r-1];if(t.routeConfig&&""===t.routeConfig.path)r--;else{if(e.component)break;r--}}return function(t){return t.reduce((t,e)=>({params:Object.assign(Object.assign({},t.params),e.params),data:Object.assign(Object.assign({},t.data),e.data),resolve:Object.assign(Object.assign({},t.resolve),e._resolvedData)}),{params:{},data:{},resolve:{}})}(n.slice(r))}class se{constructor(t,e,n,r,s,i,o,a,l,c,u){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=i,this.component=o,this.routeConfig=a,this._urlSegment=l,this._lastPathIndex=c,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=pt(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=pt(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class ie extends Zt{constructor(t,e){super(e),this.url=t,oe(this,e)}toString(){return ae(this._root)}}function oe(t,e){e.value._routerState=t,e.children.forEach(e=>oe(t,e))}function ae(t){const e=t.children.length>0?` { ${t.children.map(ae).join(", ")} } `:"";return`${t.value}${e}`}function le(t){if(t.snapshot){const e=t.snapshot,n=t._futureSnapshot;t.snapshot=n,St(e.queryParams,n.queryParams)||t.queryParams.next(n.queryParams),e.fragment!==n.fragment&&t.fragment.next(n.fragment),St(e.params,n.params)||t.params.next(n.params),function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!St(t[n],e[n]))return!1;return!0}(e.url,n.url)||t.url.next(n.url),St(e.data,n.data)||t.data.next(n.data)}else t.snapshot=t._futureSnapshot,t.data.next(t._futureSnapshot.data)}function ce(t,e){var n,r;return St(t.params,e.params)&&Rt(n=t.url,r=e.url)&&n.every((t,e)=>St(t.parameters,r[e].parameters))&&!(!t.parent!=!e.parent)&&(!t.parent||ce(t.parent,e.parent))}function ue(t){return"object"==typeof t&&null!=t&&!t.outlets&&!t.segmentPath}function he(t,e,n,r,s){let i={};return r&&kt(r,(t,e)=>{i[e]=Array.isArray(t)?t.map(t=>`${t}`):`${t}`}),new Dt(n.root===t?e:function t(e,n,r){const s={};return kt(e.children,(e,i)=>{s[i]=e===n?r:t(e,n,r)}),new It(e.segments,s)}(n.root,t,e),i,s)}class de{constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&ue(n[0]))throw new Error("Root segment cannot have matrix parameters");const r=n.find(t=>"object"==typeof t&&null!=t&&t.outlets);if(r&&r!==xt(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class fe{constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}}function pe(t){return"object"==typeof t&&null!=t&&t.outlets?t.outlets.primary:`${t}`}function me(t,e,n){if(t||(t=new It([],{})),0===t.segments.length&&t.hasChildren())return ge(t,e,n);const r=function(t,e,n){let r=0,s=e;const i={match:!1,pathIndex:0,commandIndex:0};for(;s<t.segments.length;){if(r>=n.length)return i;const e=t.segments[s],o=pe(n[r]),a=r<n.length-1?n[r+1]:null;if(s>0&&void 0===o)break;if(o&&a&&"object"==typeof a&&void 0===a.outlets){if(!ve(o,a,e))return i;r+=2}else{if(!ve(o,{},e))return i;r++}s++}return{match:!0,pathIndex:s,commandIndex:r}}(t,e,n),s=n.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){const e=new It(t.segments.slice(0,r.pathIndex),{});return e.children.primary=new It(t.segments.slice(r.pathIndex),t.children),ge(e,0,s)}return r.match&&0===s.length?new It(t.segments,{}):r.match&&!t.hasChildren()?be(t,e,n):r.match?ge(t,0,s):be(t,e,n)}function ge(t,e,n){if(0===n.length)return new It(t.segments,{});{const r=function(t){return"object"!=typeof t[0]||void 0===t[0].outlets?{primary:t}:t[0].outlets}(n),s={};return kt(r,(n,r)=>{null!==n&&(s[r]=me(t.children[r],e,n))}),kt(t.children,(t,e)=>{void 0===r[e]&&(s[e]=t)}),new It(t.segments,s)}}function be(t,e,n){const r=t.segments.slice(0,e);let s=0;for(;s<n.length;){if("object"==typeof n[s]&&void 0!==n[s].outlets){const t=ye(n[s].outlets);return new It(r,t)}if(0===s&&ue(n[0])){r.push(new At(t.segments[e].path,n[0])),s++;continue}const i=pe(n[s]),o=s<n.length-1?n[s+1]:null;i&&o&&ue(o)?(r.push(new At(i,_e(o))),s+=2):(r.push(new At(i,{})),s++)}return new It(r,{})}function ye(t){const e={};return kt(t,(t,n)=>{null!==t&&(e[n]=be(new It([],{}),0,t))}),e}function _e(t){const e={};return kt(t,(t,n)=>e[n]=`${t}`),e}function ve(t,e,n){return t==n.path&&St(e,n.parameters)}class we{constructor(t,e,n,r){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r}activate(t){const e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),le(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){const r=Yt(e);t.children.forEach(t=>{const e=t.value.outlet;this.deactivateRoutes(t,r[e],n),delete r[e]}),kt(r,(t,e)=>{this.deactivateRouteAndItsChildren(t,n)})}deactivateRoutes(t,e,n){const r=t.value,s=e?e.value:null;if(r===s)if(r.component){const s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(t,e,s.children)}else this.deactivateChildRoutes(t,e,n);else s&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){const n=e.getContext(t.value.outlet);if(n&&n.outlet){const e=n.outlet.detach(),r=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:e,route:t,contexts:r})}}deactivateRouteAndOutlet(t,e){const n=e.getContext(t.value.outlet);if(n){const r=Yt(t),s=t.value.component?n.children:e;kt(r,(t,e)=>this.deactivateRouteAndItsChildren(t,s)),n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated())}}activateChildRoutes(t,e,n){const r=Yt(e);t.children.forEach(t=>{this.activateRoutes(t,r[t.value.outlet],n),this.forwardEvent(new ut(t.value.snapshot))}),t.children.length&&this.forwardEvent(new lt(t.value.snapshot))}activateRoutes(t,e,n){const r=t.value,s=e?e.value:null;if(le(r),r===s)if(r.component){const s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,s.children)}else this.activateChildRoutes(t,e,n);else if(r.component){const e=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const t=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),e.children.onOutletReAttached(t.contexts),e.attachRef=t.componentRef,e.route=t.route.value,e.outlet&&e.outlet.attach(t.componentRef,t.route.value),Se(t.route)}else{const n=function(t){for(let e=t.parent;e;e=e.parent){const t=e.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig;if(t&&t.component)return null}return null}(r.snapshot),s=n?n.module.componentFactoryResolver:null;e.attachRef=null,e.route=r,e.resolver=s,e.outlet&&e.outlet.activateWith(r,s),this.activateChildRoutes(t,null,e.children)}}else this.activateChildRoutes(t,null,n)}}function Se(t){le(t.value),t.children.forEach(Se)}function Ce(t){return"function"==typeof t}function Ee(t){return t instanceof Dt}class xe{constructor(t){this.segmentGroup=t||null}}class ke{constructor(t){this.urlTree=t}}function Oe(t){return new l.a(e=>e.error(new xe(t)))}function Te(t){return new l.a(e=>e.error(new ke(t)))}function De(t){return new l.a(e=>e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))}class Ie{constructor(t,e,n,r,i){this.configLoader=e,this.urlSerializer=n,this.urlTree=r,this.config=i,this.allowRedirects=!0,this.ngModule=t.get(s.x)}apply(){return this.expandSegmentGroup(this.ngModule,this.config,this.urlTree.root,"primary").pipe(Object(p.a)(t=>this.createUrlTree(t,this.urlTree.queryParams,this.urlTree.fragment))).pipe(Object(A.a)(t=>{if(t instanceof ke)return this.allowRedirects=!1,this.match(t.urlTree);if(t instanceof xe)throw this.noMatchError(t);throw t}))}match(t){return this.expandSegmentGroup(this.ngModule,this.config,t.root,"primary").pipe(Object(p.a)(e=>this.createUrlTree(e,t.queryParams,t.fragment))).pipe(Object(A.a)(t=>{if(t instanceof xe)throw this.noMatchError(t);throw t}))}noMatchError(t){return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)}createUrlTree(t,e,n){const r=t.segments.length>0?new It([],{primary:t}):t;return new Dt(r,e,n)}expandSegmentGroup(t,e,n,r){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(t,e,n).pipe(Object(p.a)(t=>new It([],t))):this.expandSegment(t,n,e,n.segments,r,!0)}expandChildren(t,e,n){return function(t,e){if(0===Object.keys(t).length)return Object(i.a)({});const n=[],r=[],s={};return kt(t,(t,i)=>{const o=e(i,t).pipe(Object(p.a)(t=>s[i]=t));"primary"===i?n.push(o):r.push(o)}),i.a.apply(null,n.concat(r)).pipe(Object(m.a)(),I(),Object(p.a)(()=>s))}(n.children,(n,r)=>this.expandSegmentGroup(t,e,r,n))}expandSegment(t,e,n,r,s,o){return Object(i.a)(...n).pipe(Object(p.a)(a=>this.expandSegmentAgainstRoute(t,e,n,a,r,s,o).pipe(Object(A.a)(t=>{if(t instanceof xe)return Object(i.a)(null);throw t}))),Object(m.a)(),j(t=>!!t),Object(A.a)((t,n)=>{if(t instanceof c||"EmptyError"===t.name){if(this.noLeftoversInUrl(e,r,s))return Object(i.a)(new It([],{}));throw new xe(e)}throw t}))}noLeftoversInUrl(t,e,n){return 0===e.length&&!t.children[n]}expandSegmentAgainstRoute(t,e,n,r,s,i,o){return Ne(r)!==i?Oe(e):void 0===r.redirectTo?this.matchSegmentAgainstRoute(t,e,r,s):o&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i):Oe(e)}expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,i):this.expandRegularSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,e,n,r){const s=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?Te(s):this.lineralizeSegments(n,s).pipe(Object(N.a)(n=>{const s=new It(n,{});return this.expandSegment(t,s,e,n,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i){const{matched:o,consumedSegments:a,lastChild:l,positionalParamSegments:c}=Ae(e,r,s);if(!o)return Oe(e);const u=this.applyRedirectCommands(a,r.redirectTo,c);return r.redirectTo.startsWith("/")?Te(u):this.lineralizeSegments(r,u).pipe(Object(N.a)(r=>this.expandSegment(t,e,n,r.concat(s.slice(l)),i,!1)))}matchSegmentAgainstRoute(t,e,n,r){if("**"===n.path)return n.loadChildren?this.configLoader.load(t.injector,n).pipe(Object(p.a)(t=>(n._loadedConfig=t,new It(r,{})))):Object(i.a)(new It(r,{}));const{matched:s,consumedSegments:o,lastChild:a}=Ae(e,n,r);if(!s)return Oe(e);const l=r.slice(a);return this.getChildConfig(t,n,r).pipe(Object(N.a)(t=>{const n=t.module,r=t.routes,{segmentGroup:s,slicedSegments:a}=function(t,e,n,r){return n.length>0&&function(t,e,n){return n.some(n=>je(t,e,n)&&"primary"!==Ne(n))}(t,n,r)?{segmentGroup:Re(new It(e,function(t,e){const n={};n.primary=e;for(const r of t)""===r.path&&"primary"!==Ne(r)&&(n[Ne(r)]=new It([],{}));return n}(r,new It(n,t.children)))),slicedSegments:[]}:0===n.length&&function(t,e,n){return n.some(n=>je(t,e,n))}(t,n,r)?{segmentGroup:Re(new It(t.segments,function(t,e,n,r){const s={};for(const i of n)je(t,e,i)&&!r[Ne(i)]&&(s[Ne(i)]=new It([],{}));return Object.assign(Object.assign({},r),s)}(t,n,r,t.children))),slicedSegments:n}:{segmentGroup:t,slicedSegments:n}}(e,o,l,r);return 0===a.length&&s.hasChildren()?this.expandChildren(n,r,s).pipe(Object(p.a)(t=>new It(o,t))):0===r.length&&0===a.length?Object(i.a)(new It(o,{})):this.expandSegment(n,s,r,a,"primary",!0).pipe(Object(p.a)(t=>new It(o.concat(t.segments),t.children)))}))}getChildConfig(t,e,n){return e.children?Object(i.a)(new bt(e.children,t)):e.loadChildren?void 0!==e._loadedConfig?Object(i.a)(e._loadedConfig):function(t,e,n){const r=e.canLoad;return r&&0!==r.length?Object(o.a)(r).pipe(Object(p.a)(r=>{const s=t.get(r);let i;if(function(t){return t&&Ce(t.canLoad)}(s))i=s.canLoad(e,n);else{if(!Ce(s))throw new Error("Invalid CanLoad guard");i=s(e,n)}return Ot(i)})).pipe(Object(m.a)(),(s=t=>!0===t,t=>t.lift(new P(s,void 0,t)))):Object(i.a)(!0);var s}(t.injector,e,n).pipe(Object(N.a)(n=>n?this.configLoader.load(t.injector,e).pipe(Object(p.a)(t=>(e._loadedConfig=t,t))):function(t){return new l.a(e=>e.error(mt(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))}(e))):Object(i.a)(new bt([],t))}lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),0===r.numberOfChildren)return Object(i.a)(n);if(r.numberOfChildren>1||!r.children.primary)return De(t.redirectTo);r=r.children.primary}}applyRedirectCommands(t,e,n){return this.applyRedirectCreatreUrlTree(e,this.urlSerializer.parse(e),t,n)}applyRedirectCreatreUrlTree(t,e,n,r){const s=this.createSegmentGroup(t,e.root,n,r);return new Dt(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){const n={};return kt(t,(t,r)=>{if("string"==typeof t&&t.startsWith(":")){const s=t.substring(1);n[r]=e[s]}else n[r]=t}),n}createSegmentGroup(t,e,n,r){const s=this.createSegments(t,e.segments,n,r);let i={};return kt(e.children,(e,s)=>{i[s]=this.createSegmentGroup(t,e,n,r)}),new It(s,i)}createSegments(t,e,n,r){return e.map(e=>e.path.startsWith(":")?this.findPosParam(t,e,r):this.findOrReturn(e,n))}findPosParam(t,e,n){const r=n[e.path.substring(1)];if(!r)throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);return r}findOrReturn(t,e){let n=0;for(const r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}}function Ae(t,e,n){if(""===e.path)return"full"===e.pathMatch&&(t.hasChildren()||n.length>0)?{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}:{matched:!0,consumedSegments:[],lastChild:0,positionalParamSegments:{}};const r=(e.matcher||gt)(n,t,e);return r?{matched:!0,consumedSegments:r.consumed,lastChild:r.consumed.length,positionalParamSegments:r.posParams}:{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}}function Re(t){if(1===t.numberOfChildren&&t.children.primary){const e=t.children.primary;return new It(t.segments.concat(e.segments),e.children)}return t}function je(t,e,n){return(!(t.hasChildren()||e.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0!==n.redirectTo}function Ne(t){return t.outlet||"primary"}class Pe{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class Me{constructor(t,e){this.component=t,this.route=e}}function Ve(t,e,n){const r=t._root;return function t(e,n,r,s,i={canDeactivateChecks:[],canActivateChecks:[]}){const o=Yt(n);return e.children.forEach(e=>{!function(e,n,r,s,i={canDeactivateChecks:[],canActivateChecks:[]}){const o=e.value,a=n?n.value:null,l=r?r.getContext(e.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){const c=function(t,e,n){if("function"==typeof n)return n(t,e);switch(n){case"pathParamsChange":return!Rt(t.url,e.url);case"pathParamsOrQueryParamsChange":return!Rt(t.url,e.url)||!St(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ce(t,e)||!St(t.queryParams,e.queryParams);case"paramsChange":default:return!ce(t,e)}}(a,o,o.routeConfig.runGuardsAndResolvers);c?i.canActivateChecks.push(new Pe(s)):(o.data=a.data,o._resolvedData=a._resolvedData),t(e,n,o.component?l?l.children:null:r,s,i),c&&i.canDeactivateChecks.push(new Me(l&&l.outlet&&l.outlet.component||null,a))}else a&&Le(n,l,i),i.canActivateChecks.push(new Pe(s)),t(e,null,o.component?l?l.children:null:r,s,i)}(e,o[e.value.outlet],r,s.concat([e.value]),i),delete o[e.value.outlet]}),kt(o,(t,e)=>Le(t,r.getContext(e),i)),i}(r,e?e._root:null,n,[r.value])}function Fe(t,e,n){const r=function(t){if(!t)return null;for(let e=t.parent;e;e=e.parent){const t=e.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig}return null}(e);return(r?r.module.injector:n).get(t)}function Le(t,e,n){const r=Yt(t),s=t.value;kt(r,(t,r)=>{Le(t,s.component?e?e.children.getContext(r):null:e,n)}),n.canDeactivateChecks.push(new Me(s.component&&e&&e.outlet&&e.outlet.isActivated?e.outlet.component:null,s))}const Ue=Symbol("INITIAL_VALUE");function He(){return Object(V.a)(t=>Object(u.a)(...t.map(t=>t.pipe(Object(R.a)(1),Object(F.a)(Ue)))).pipe(L((t,e)=>{let n=!1;return e.reduce((t,r,s)=>{if(t!==Ue)return t;if(r===Ue&&(n=!0),!n){if(!1===r)return r;if(s===e.length-1||Ee(r))return r}return t},t)},Ue),Object(g.a)(t=>t!==Ue),Object(p.a)(t=>Ee(t)?t:!0===t),Object(R.a)(1)))}function $e(t,e){return null!==t&&e&&e(new ct(t)),Object(i.a)(!0)}function ze(t,e){return null!==t&&e&&e(new at(t)),Object(i.a)(!0)}function Be(t,e,n){const r=e.routeConfig?e.routeConfig.canActivate:null;if(!r||0===r.length)return Object(i.a)(!0);const s=r.map(r=>d(()=>{const s=Fe(r,e,n);let i;if(function(t){return t&&Ce(t.canActivate)}(s))i=Ot(s.canActivate(e,t));else{if(!Ce(s))throw new Error("Invalid CanActivate guard");i=Ot(s(e,t))}return i.pipe(j())}));return Object(i.a)(s).pipe(He())}function qe(t,e,n){const r=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(t=>function(t){const e=t.routeConfig?t.routeConfig.canActivateChild:null;return e&&0!==e.length?{node:t,guards:e}:null}(t)).filter(t=>null!==t).map(e=>d(()=>{const s=e.guards.map(s=>{const i=Fe(s,e.node,n);let o;if(function(t){return t&&Ce(t.canActivateChild)}(i))o=Ot(i.canActivateChild(r,t));else{if(!Ce(i))throw new Error("Invalid CanActivateChild guard");o=Ot(i(r,t))}return o.pipe(j())});return Object(i.a)(s).pipe(He())}));return Object(i.a)(s).pipe(He())}class Qe{}class We{constructor(t,e,n,r,s,i){this.rootComponentType=t,this.config=e,this.urlTree=n,this.url=r,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=i}recognize(){try{const t=Ke(this.urlTree.root,[],[],this.config,this.relativeLinkResolution).segmentGroup,e=this.processSegmentGroup(this.config,t,"primary"),n=new se([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},"primary",this.rootComponentType,null,this.urlTree.root,-1,{}),r=new Xt(n,e),s=new ie(this.url,r);return this.inheritParamsAndData(s._root),Object(i.a)(s)}catch(t){return new l.a(e=>e.error(t))}}inheritParamsAndData(t){const e=t.value,n=re(e,this.paramsInheritanceStrategy);e.params=Object.freeze(n.params),e.data=Object.freeze(n.data),t.children.forEach(t=>this.inheritParamsAndData(t))}processSegmentGroup(t,e,n){return 0===e.segments.length&&e.hasChildren()?this.processChildren(t,e):this.processSegment(t,e,e.segments,n)}processChildren(t,e){const n=jt(e,(e,n)=>this.processSegmentGroup(t,e,n));return function(t){const e={};t.forEach(t=>{const n=e[t.value.outlet];if(n){const e=n.url.map(t=>t.toString()).join("/"),r=t.value.url.map(t=>t.toString()).join("/");throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${r}'.`)}e[t.value.outlet]=t.value})}(n),n.sort((t,e)=>"primary"===t.value.outlet?-1:"primary"===e.value.outlet?1:t.value.outlet.localeCompare(e.value.outlet)),n}processSegment(t,e,n,r){for(const i of t)try{return this.processSegmentAgainstRoute(i,e,n,r)}catch(s){if(!(s instanceof Qe))throw s}if(this.noLeftoversInUrl(e,n,r))return[];throw new Qe}noLeftoversInUrl(t,e,n){return 0===e.length&&!t.children[n]}processSegmentAgainstRoute(t,e,n,r){if(t.redirectTo)throw new Qe;if((t.outlet||"primary")!==r)throw new Qe;let s,i=[],o=[];if("**"===t.path){const i=n.length>0?xt(n).parameters:{};s=new se(n,i,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ye(t),r,t.component,t,Ge(e),Ze(e)+n.length,tn(t))}else{const a=function(t,e,n){if(""===e.path){if("full"===e.pathMatch&&(t.hasChildren()||n.length>0))throw new Qe;return{consumedSegments:[],lastChild:0,parameters:{}}}const r=(e.matcher||gt)(n,t,e);if(!r)throw new Qe;const s={};kt(r.posParams,(t,e)=>{s[e]=t.path});const i=r.consumed.length>0?Object.assign(Object.assign({},s),r.consumed[r.consumed.length-1].parameters):s;return{consumedSegments:r.consumed,lastChild:r.consumed.length,parameters:i}}(e,t,n);i=a.consumedSegments,o=n.slice(a.lastChild),s=new se(i,a.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ye(t),r,t.component,t,Ge(e),Ze(e)+i.length,tn(t))}const a=function(t){return t.children?t.children:t.loadChildren?t._loadedConfig.routes:[]}(t),{segmentGroup:l,slicedSegments:c}=Ke(e,i,o,a,this.relativeLinkResolution);if(0===c.length&&l.hasChildren()){const t=this.processChildren(a,l);return[new Xt(s,t)]}if(0===a.length&&0===c.length)return[new Xt(s,[])];const u=this.processSegment(a,l,c,"primary");return[new Xt(s,u)]}}function Ge(t){let e=t;for(;e._sourceSegment;)e=e._sourceSegment;return e}function Ze(t){let e=t,n=e._segmentIndexShift?e._segmentIndexShift:0;for(;e._sourceSegment;)e=e._sourceSegment,n+=e._segmentIndexShift?e._segmentIndexShift:0;return n-1}function Ke(t,e,n,r,s){if(n.length>0&&function(t,e,n){return n.some(n=>Je(t,e,n)&&"primary"!==Xe(n))}(t,n,r)){const s=new It(e,function(t,e,n,r){const s={};s.primary=r,r._sourceSegment=t,r._segmentIndexShift=e.length;for(const i of n)if(""===i.path&&"primary"!==Xe(i)){const n=new It([],{});n._sourceSegment=t,n._segmentIndexShift=e.length,s[Xe(i)]=n}return s}(t,e,r,new It(n,t.children)));return s._sourceSegment=t,s._segmentIndexShift=e.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function(t,e,n){return n.some(n=>Je(t,e,n))}(t,n,r)){const i=new It(t.segments,function(t,e,n,r,s,i){const o={};for(const a of r)if(Je(t,n,a)&&!s[Xe(a)]){const n=new It([],{});n._sourceSegment=t,n._segmentIndexShift="legacy"===i?t.segments.length:e.length,o[Xe(a)]=n}return Object.assign(Object.assign({},s),o)}(t,e,n,r,t.children,s));return i._sourceSegment=t,i._segmentIndexShift=e.length,{segmentGroup:i,slicedSegments:n}}const i=new It(t.segments,t.children);return i._sourceSegment=t,i._segmentIndexShift=e.length,{segmentGroup:i,slicedSegments:n}}function Je(t,e,n){return(!(t.hasChildren()||e.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0===n.redirectTo}function Xe(t){return t.outlet||"primary"}function Ye(t){return t.data||{}}function tn(t){return t.resolve||{}}function en(t,e,n,r){const s=Fe(t,e,r);return Ot(s.resolve?s.resolve(e,n):s(e,n))}function nn(t){return function(e){return e.pipe(Object(V.a)(e=>{const n=t(e);return n?Object(o.a)(n).pipe(Object(p.a)(()=>e)):Object(o.a)([e])}))}}class rn{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}}const sn=new s.q("ROUTES");class on{constructor(t,e,n,r){this.loader=t,this.compiler=e,this.onLoadStartListener=n,this.onLoadEndListener=r}load(t,e){return this.onLoadStartListener&&this.onLoadStartListener(e),this.loadModuleFactory(e.loadChildren).pipe(Object(p.a)(n=>{this.onLoadEndListener&&this.onLoadEndListener(e);const r=n.create(t);return new bt(Et(r.injector.get(sn)).map(wt),r)}))}loadModuleFactory(t){return"string"==typeof t?Object(o.a)(this.loader.load(t)):Ot(t()).pipe(Object(N.a)(t=>t instanceof s.v?Object(i.a)(t):Object(o.a)(this.compiler.compileModuleAsync(t))))}}class an{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}}function ln(t){throw t}function cn(t,e,n){return e.parse("/")}function un(t,e){return Object(i.a)(null)}let hn=(()=>{class t{constructor(t,e,n,r,i,o,l,c){this.rootComponentType=t,this.urlSerializer=e,this.rootContexts=n,this.location=r,this.config=c,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new f.a,this.errorHandler=ln,this.malformedUriErrorHandler=cn,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:un,afterPreactivation:un},this.urlHandlingStrategy=new an,this.routeReuseStrategy=new rn,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="legacy",this.ngModule=i.get(s.x),this.console=i.get(s.W);const u=i.get(s.z);this.isNgZoneEnabled=u instanceof s.z,this.resetConfig(c),this.currentUrlTree=new Dt(new It([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new on(o,l,t=>this.triggerEvent(new it(t)),t=>this.triggerEvent(new ot(t))),this.routerState=ee(this.currentUrlTree,this.rootComponentType),this.transitions=new a.a({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}setupNavigations(t){const e=this.events;return t.pipe(Object(g.a)(t=>0!==t.id),Object(p.a)(t=>Object.assign(Object.assign({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl)})),Object(V.a)(t=>{let n=!1,r=!1;return Object(i.a)(t).pipe(Object(B.a)(t=>{this.currentNavigation={id:t.id,initialUrl:t.currentRawUrl,extractedUrl:t.extractedUrl,trigger:t.source,extras:t.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Object(V.a)(t=>{const n=!this.navigated||t.extractedUrl.toString()!==this.browserUrlTree.toString();if(("reload"===this.onSameUrlNavigation||n)&&this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl))return Object(i.a)(t).pipe(Object(V.a)(t=>{const n=this.transitions.getValue();return e.next(new K(t.id,this.serializeUrl(t.extractedUrl),t.source,t.restoredState)),n!==this.transitions.getValue()?h.a:[t]}),Object(V.a)(t=>Promise.resolve(t)),(r=this.ngModule.injector,s=this.configLoader,o=this.urlSerializer,a=this.config,function(t){return t.pipe(Object(V.a)(t=>function(t,e,n,r,s){return new Ie(t,e,n,r,s).apply()}(r,s,o,t.extractedUrl,a).pipe(Object(p.a)(e=>Object.assign(Object.assign({},t),{urlAfterRedirects:e})))))}),Object(B.a)(t=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:t.urlAfterRedirects})}),function(t,e,n,r,s){return function(i){return i.pipe(Object(N.a)(i=>function(t,e,n,r,s="emptyOnly",i="legacy"){return new We(t,e,n,r,s,i).recognize()}(t,e,i.urlAfterRedirects,n(i.urlAfterRedirects),r,s).pipe(Object(p.a)(t=>Object.assign(Object.assign({},i),{targetSnapshot:t})))))}}(this.rootComponentType,this.config,t=>this.serializeUrl(t),this.paramsInheritanceStrategy,this.relativeLinkResolution),Object(B.a)(t=>{"eager"===this.urlUpdateStrategy&&(t.extras.skipLocationChange||this.setBrowserUrl(t.urlAfterRedirects,!!t.extras.replaceUrl,t.id,t.extras.state),this.browserUrlTree=t.urlAfterRedirects)}),Object(B.a)(t=>{const n=new tt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);e.next(n)}));var r,s,o,a;if(n&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:n,extractedUrl:r,source:s,restoredState:o,extras:a}=t,l=new K(n,this.serializeUrl(r),s,o);e.next(l);const c=ee(r,this.rootComponentType).snapshot;return Object(i.a)(Object.assign(Object.assign({},t),{targetSnapshot:c,urlAfterRedirects:r,extras:Object.assign(Object.assign({},a),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=t.rawUrl,this.browserUrlTree=t.urlAfterRedirects,t.resolve(null),h.a}),nn(t=>{const{targetSnapshot:e,id:n,extractedUrl:r,rawUrl:s,extras:{skipLocationChange:i,replaceUrl:o}}=t;return this.hooks.beforePreactivation(e,{navigationId:n,appliedUrlTree:r,rawUrlTree:s,skipLocationChange:!!i,replaceUrl:!!o})}),Object(B.a)(t=>{const e=new et(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}),Object(p.a)(t=>Object.assign(Object.assign({},t),{guards:Ve(t.targetSnapshot,t.currentSnapshot,this.rootContexts)})),function(t,e){return function(n){return n.pipe(Object(N.a)(n=>{const{targetSnapshot:r,currentSnapshot:s,guards:{canActivateChecks:a,canDeactivateChecks:l}}=n;return 0===l.length&&0===a.length?Object(i.a)(Object.assign(Object.assign({},n),{guardsResult:!0})):function(t,e,n,r){return Object(o.a)(t).pipe(Object(N.a)(t=>function(t,e,n,r,s){const o=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!o||0===o.length)return Object(i.a)(!0);const a=o.map(i=>{const o=Fe(i,e,s);let a;if(function(t){return t&&Ce(t.canDeactivate)}(o))a=Ot(o.canDeactivate(t,e,n,r));else{if(!Ce(o))throw new Error("Invalid CanDeactivate guard");a=Ot(o(t,e,n,r))}return a.pipe(j())});return Object(i.a)(a).pipe(He())}(t.component,t.route,n,e,r)),j(t=>!0!==t,!0))}(l,r,s,t).pipe(Object(N.a)(n=>n&&"boolean"==typeof n?function(t,e,n,r){return Object(o.a)(e).pipe(Object($.a)(e=>Object(o.a)([ze(e.route.parent,r),$e(e.route,r),qe(t,e.path,n),Be(t,e.route,n)]).pipe(Object(m.a)(),j(t=>!0!==t,!0))),j(t=>!0!==t,!0))}(r,a,t,e):Object(i.a)(n)),Object(p.a)(t=>Object.assign(Object.assign({},n),{guardsResult:t})))}))}}(this.ngModule.injector,t=>this.triggerEvent(t)),Object(B.a)(t=>{if(Ee(t.guardsResult)){const e=mt(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);throw e.url=t.guardsResult,e}}),Object(B.a)(t=>{const e=new nt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot,!!t.guardsResult);this.triggerEvent(e)}),Object(g.a)(t=>{if(!t.guardsResult){this.resetUrlToCurrentUrlTree();const n=new X(t.id,this.serializeUrl(t.extractedUrl),"");return e.next(n),t.resolve(!1),!1}return!0}),nn(t=>{if(t.guards.canActivateChecks.length)return Object(i.a)(t).pipe(Object(B.a)(t=>{const e=new rt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}),(e=this.paramsInheritanceStrategy,n=this.ngModule.injector,function(t){return t.pipe(Object(N.a)(t=>{const{targetSnapshot:r,guards:{canActivateChecks:s}}=t;return s.length?Object(o.a)(s).pipe(Object($.a)(t=>function(t,e,n,r){return function(t,e,n,r){const s=Object.keys(t);if(0===s.length)return Object(i.a)({});if(1===s.length){const i=s[0];return en(t[i],e,n,r).pipe(Object(p.a)(t=>({[i]:t})))}const a={};return Object(o.a)(s).pipe(Object(N.a)(s=>en(t[s],e,n,r).pipe(Object(p.a)(t=>(a[s]=t,t))))).pipe(I(),Object(p.a)(()=>a))}(t._resolve,t,e,r).pipe(Object(p.a)(e=>(t._resolvedData=e,t.data=Object.assign(Object.assign({},t.data),re(t,n).resolve),null)))}(t.route,r,e,n)),function(t,e){return arguments.length>=2?function(n){return Object(z.a)(L(t,e),_(1),k(e))(n)}:function(e){return Object(z.a)(L((e,n,r)=>t(e,n,r+1)),_(1))(e)}}((t,e)=>t),Object(p.a)(e=>t)):Object(i.a)(t)}))}),Object(B.a)(t=>{const e=new st(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}));var e,n}),nn(t=>{const{targetSnapshot:e,id:n,extractedUrl:r,rawUrl:s,extras:{skipLocationChange:i,replaceUrl:o}}=t;return this.hooks.afterPreactivation(e,{navigationId:n,appliedUrlTree:r,rawUrlTree:s,skipLocationChange:!!i,replaceUrl:!!o})}),Object(p.a)(t=>{const e=function(t,e,n){const r=function t(e,n,r){if(r&&e.shouldReuseRoute(n.value,r.value.snapshot)){const s=r.value;s._futureSnapshot=n.value;const i=function(e,n,r){return n.children.map(n=>{for(const s of r.children)if(e.shouldReuseRoute(s.value.snapshot,n.value))return t(e,n,s);return t(e,n)})}(e,n,r);return new Xt(s,i)}{const r=e.retrieve(n.value);if(r){const t=r.route;return function t(e,n){if(e.value.routeConfig!==n.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(e.children.length!==n.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");n.value._futureSnapshot=e.value;for(let r=0;r<e.children.length;++r)t(e.children[r],n.children[r])}(n,t),t}{const r=new ne(new a.a((s=n.value).url),new a.a(s.params),new a.a(s.queryParams),new a.a(s.fragment),new a.a(s.data),s.outlet,s.component,s),i=n.children.map(n=>t(e,n));return new Xt(r,i)}}var s}(t,e._root,n?n._root:void 0);return new te(r,e)}(this.routeReuseStrategy,t.targetSnapshot,t.currentRouterState);return Object.assign(Object.assign({},t),{targetRouterState:e})}),Object(B.a)(t=>{this.currentUrlTree=t.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.rawUrl),this.routerState=t.targetRouterState,"deferred"===this.urlUpdateStrategy&&(t.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,!!t.extras.replaceUrl,t.id,t.extras.state),this.browserUrlTree=t.urlAfterRedirects)}),(l=this.rootContexts,c=this.routeReuseStrategy,u=t=>this.triggerEvent(t),Object(p.a)(t=>(new we(c,t.targetRouterState,t.currentRouterState,u).activate(l),t))),Object(B.a)({next(){n=!0},complete(){n=!0}}),(s=()=>{if(!n&&!r){this.resetUrlToCurrentUrlTree();const n=new X(t.id,this.serializeUrl(t.extractedUrl),`Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);e.next(n),t.resolve(!1)}this.currentNavigation=null},t=>t.lift(new Q(s))),Object(A.a)(n=>{if(r=!0,(s=n)&&s.ngNavigationCancelingError){const r=Ee(n.url);r||(this.navigated=!0,this.resetStateAndUrl(t.currentRouterState,t.currentUrlTree,t.rawUrl));const s=new X(t.id,this.serializeUrl(t.extractedUrl),n.message);e.next(s),r?setTimeout(()=>{const e=this.urlHandlingStrategy.merge(n.url,this.rawUrlTree);return this.scheduleNavigation(e,"imperative",null,{skipLocationChange:t.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy},{resolve:t.resolve,reject:t.reject,promise:t.promise})},0):t.resolve(!1)}else{this.resetStateAndUrl(t.currentRouterState,t.currentUrlTree,t.rawUrl);const r=new Y(t.id,this.serializeUrl(t.extractedUrl),n);e.next(r);try{t.resolve(this.errorHandler(n))}catch(i){t.reject(i)}}var s;return h.a}));var s,l,c,u}))}resetRootComponentType(t){this.rootComponentType=t,this.routerState.root.component=this.rootComponentType}getTransition(){const t=this.transitions.value;return t.urlAfterRedirects=this.browserUrlTree,t}setTransition(t){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),t))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(t=>{let e=this.parseUrl(t.url);const n="popstate"===t.type?"popstate":"hashchange",r=t.state&&t.state.navigationId?t.state:null;setTimeout(()=>{this.scheduleNavigation(e,n,r,{replaceUrl:!0})},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(t){this.events.next(t)}resetConfig(t){yt(t),this.config=t.map(wt),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=null)}createUrlTree(t,e={}){const{relativeTo:n,queryParams:r,fragment:i,preserveQueryParams:o,queryParamsHandling:a,preserveFragment:l}=e;Object(s.T)()&&o&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");const c=n||this.routerState.root,u=l?this.currentUrlTree.fragment:i;let h=null;if(a)switch(a){case"merge":h=Object.assign(Object.assign({},this.currentUrlTree.queryParams),r);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=r||null}else h=o?this.currentUrlTree.queryParams:r||null;return null!==h&&(h=this.removeEmptyProps(h)),function(t,e,n,r,s){if(0===n.length)return he(e.root,e.root,e,r,s);const i=function(t){if("string"==typeof t[0]&&1===t.length&&"/"===t[0])return new de(!0,0,t);let e=0,n=!1;const r=t.reduce((t,r,s)=>{if("object"==typeof r&&null!=r){if(r.outlets){const e={};return kt(r.outlets,(t,n)=>{e[n]="string"==typeof t?t.split("/"):t}),[...t,{outlets:e}]}if(r.segmentPath)return[...t,r.segmentPath]}return"string"!=typeof r?[...t,r]:0===s?(r.split("/").forEach((r,s)=>{0==s&&"."===r||(0==s&&""===r?n=!0:".."===r?e++:""!=r&&t.push(r))}),t):[...t,r]},[]);return new de(n,e,r)}(n);if(i.toRoot())return he(e.root,new It([],{}),e,r,s);const o=function(t,e,n){if(t.isAbsolute)return new fe(e.root,!0,0);if(-1===n.snapshot._lastPathIndex)return new fe(n.snapshot._urlSegment,!0,0);const r=ue(t.commands[0])?0:1;return function(t,e,n){let r=t,s=e,i=n;for(;i>s;){if(i-=s,r=r.parent,!r)throw new Error("Invalid number of '../'");s=r.segments.length}return new fe(r,!1,s-i)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+r,t.numberOfDoubleDots)}(i,e,t),a=o.processChildren?ge(o.segmentGroup,o.index,i.commands):me(o.segmentGroup,o.index,i.commands);return he(o.segmentGroup,a,e,r,s)}(c,this.currentUrlTree,t,h,u)}navigateByUrl(t,e={skipLocationChange:!1}){Object(s.T)()&&this.isNgZoneEnabled&&!s.z.isInAngularZone()&&this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");const n=Ee(t)?t:this.parseUrl(t),r=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(r,"imperative",null,e)}navigate(t,e={skipLocationChange:!1}){return function(t){for(let e=0;e<t.length;e++){const n=t[e];if(null==n)throw new Error(`The requested path contains ${n} segment at index ${e}`)}}(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){let e;try{e=this.urlSerializer.parse(t)}catch(n){e=this.malformedUriErrorHandler(n,this.urlSerializer,t)}return e}isActive(t,e){if(Ee(t))return Tt(this.currentUrlTree,t,e);const n=this.parseUrl(t);return Tt(this.currentUrlTree,n,e)}removeEmptyProps(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return null!=r&&(e[n]=r),e},{})}processNavigations(){this.navigations.subscribe(t=>{this.navigated=!0,this.lastSuccessfulId=t.id,this.events.next(new J(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.currentNavigation=null,t.resolve(!0)},t=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(t,e,n,r,s){const i=this.getTransition();if(i&&"imperative"!==e&&"imperative"===i.source&&i.rawUrl.toString()===t.toString())return Promise.resolve(!0);if(i&&"hashchange"==e&&"popstate"===i.source&&i.rawUrl.toString()===t.toString())return Promise.resolve(!0);if(i&&"popstate"==e&&"hashchange"===i.source&&i.rawUrl.toString()===t.toString())return Promise.resolve(!0);let o,a,l;s?(o=s.resolve,a=s.reject,l=s.promise):l=new Promise((t,e)=>{o=t,a=e});const c=++this.navigationId;return this.setTransition({id:c,source:e,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:t,extras:r,resolve:o,reject:a,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(t=>Promise.reject(t))}setBrowserUrl(t,e,n,r){const s=this.urlSerializer.serialize(t);r=r||{},this.location.isCurrentPathEqualTo(s)||e?this.location.replaceState(s,"",Object.assign(Object.assign({},r),{navigationId:n})):this.location.go(s,"",Object.assign(Object.assign({},r),{navigationId:n}))}resetStateAndUrl(t,e,n){this.routerState=t,this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}}return t.\u0275fac=function(t){s.cc()},t.\u0275dir=s.Hb({type:t}),t})(),dn=(()=>{class t{constructor(t,e,n,r,s){this.router=t,this.route=e,this.commands=[],null==n&&r.setAttribute(s.nativeElement,"tabindex","0")}set routerLink(t){this.commands=null!=t?Array.isArray(t)?t:[t]:[]}set preserveQueryParams(t){Object(s.T)()&&console&&console.warn&&console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."),this.preserve=t}onClick(){const t={skipLocationChange:pn(this.skipLocationChange),replaceUrl:pn(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,t),!0}get urlTree(){return this.router.createUrlTree(this.commands,{relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,preserveQueryParams:pn(this.preserve),queryParamsHandling:this.queryParamsHandling,preserveFragment:pn(this.preserveFragment)})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(hn),s.Mb(ne),s.ac("tabindex"),s.Mb(s.D),s.Mb(s.l))},t.\u0275dir=s.Hb({type:t,selectors:[["","routerLink","",5,"a",5,"area"]],hostBindings:function(t,e){1&t&&s.dc("click",(function(){return e.onClick()}))},inputs:{routerLink:"routerLink",preserveQueryParams:"preserveQueryParams",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state"}}),t})(),fn=(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.locationStrategy=n,this.commands=[],this.subscription=t.events.subscribe(t=>{t instanceof J&&this.updateTargetUrlAndHref()})}set routerLink(t){this.commands=null!=t?Array.isArray(t)?t:[t]:[]}set preserveQueryParams(t){Object(s.T)()&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."),this.preserve=t}ngOnChanges(t){this.updateTargetUrlAndHref()}ngOnDestroy(){this.subscription.unsubscribe()}onClick(t,e,n,r){if(0!==t||e||n||r)return!0;if("string"==typeof this.target&&"_self"!=this.target)return!0;const s={skipLocationChange:pn(this.skipLocationChange),replaceUrl:pn(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,s),!1}updateTargetUrlAndHref(){this.href=this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))}get urlTree(){return this.router.createUrlTree(this.commands,{relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,preserveQueryParams:pn(this.preserve),queryParamsHandling:this.queryParamsHandling,preserveFragment:pn(this.preserveFragment)})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(hn),s.Mb(ne),s.Mb(r.i))},t.\u0275dir=s.Hb({type:t,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(t,e){1&t&&s.dc("click",(function(t){return e.onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)})),2&t&&(s.Ub("href",e.href,s.vc),s.Ab("target",e.target))},inputs:{routerLink:"routerLink",preserveQueryParams:"preserveQueryParams",target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state"},features:[s.xb]}),t})();function pn(t){return""===t||!!t}let mn=(()=>{class t{constructor(t,e,n,r,s){this.router=t,this.element=e,this.renderer=n,this.link=r,this.linkWithHref=s,this.classes=[],this.isActive=!1,this.routerLinkActiveOptions={exact:!1},this.subscription=t.events.subscribe(t=>{t instanceof J&&this.update()})}ngAfterContentInit(){this.links.changes.subscribe(t=>this.update()),this.linksWithHrefs.changes.subscribe(t=>this.update()),this.update()}set routerLinkActive(t){const e=Array.isArray(t)?t:t.split(" ");this.classes=e.filter(t=>!!t)}ngOnChanges(t){this.update()}ngOnDestroy(){this.subscription.unsubscribe()}update(){this.links&&this.linksWithHrefs&&this.router.navigated&&Promise.resolve().then(()=>{const t=this.hasActiveLinks();this.isActive!==t&&(this.isActive=t,this.classes.forEach(e=>{t?this.renderer.addClass(this.element.nativeElement,e):this.renderer.removeClass(this.element.nativeElement,e)}))})}isLinkActive(t){return e=>t.isActive(e.urlTree,this.routerLinkActiveOptions.exact)}hasActiveLinks(){const t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.linkWithHref&&t(this.linkWithHref)||this.links.some(t)||this.linksWithHrefs.some(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(hn),s.Mb(s.l),s.Mb(s.D),s.Mb(dn,8),s.Mb(fn,8))},t.\u0275dir=s.Hb({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(t,e,n){var r;1&t&&(s.Fb(n,dn,!0),s.Fb(n,fn,!0)),2&t&&(s.sc(r=s.ec())&&(e.links=r),s.sc(r=s.ec())&&(e.linksWithHrefs=r))},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",routerLinkActive:"routerLinkActive"},exportAs:["routerLinkActive"],features:[s.xb]}),t})();class gn{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new bn,this.attachRef=null}}class bn{constructor(){this.contexts=new Map}onChildOutletCreated(t,e){const n=this.getOrCreateContext(t);n.outlet=e,this.contexts.set(t,n)}onChildOutletDestroyed(t){const e=this.getContext(t);e&&(e.outlet=null)}onOutletDeactivated(){const t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new gn,this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}}let yn=(()=>{class t{constructor(t,e,n,r,i){this.parentContexts=t,this.location=e,this.resolver=n,this.changeDetector=i,this.activated=null,this._activatedRoute=null,this.activateEvents=new s.n,this.deactivateEvents=new s.n,this.name=r||"primary",t.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const t=this.parentContexts.getContext(this.name);t&&t.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const t=this.activated;return this.activated=null,this._activatedRoute=null,t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView)}deactivate(){if(this.activated){const t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=t;const n=(e=e||this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),r=this.parentContexts.getOrCreateContext(this.name).children,s=new _n(t,r,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,s),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(bn),s.Mb(s.N),s.Mb(s.j),s.ac("name"),s.Mb(s.h))},t.\u0275dir=s.Hb({type:t,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),t})();class _n{constructor(t,e,n){this.route=t,this.childContexts=e,this.parent=n}get(t,e){return t===ne?this.route:t===bn?this.childContexts:this.parent.get(t,e)}}class vn{}class wn{preload(t,e){return Object(i.a)(null)}}let Sn=(()=>{class t{constructor(t,e,n,r,s){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=new on(e,n,e=>t.triggerEvent(new it(e)),e=>t.triggerEvent(new ot(e)))}setUpPreloading(){this.subscription=this.router.events.pipe(Object(g.a)(t=>t instanceof J),Object($.a)(()=>this.preload())).subscribe(()=>{})}preload(){const t=this.injector.get(s.x);return this.processRoutes(t,this.router.config)}ngOnDestroy(){this.subscription.unsubscribe()}processRoutes(t,e){const n=[];for(const r of e)if(r.loadChildren&&!r.canLoad&&r._loadedConfig){const t=r._loadedConfig;n.push(this.processRoutes(t.module,t.routes))}else r.loadChildren&&!r.canLoad?n.push(this.preloadConfig(t,r)):r.children&&n.push(this.processRoutes(t,r.children));return Object(o.a)(n).pipe(Object(G.a)(),Object(p.a)(t=>{}))}preloadConfig(t,e){return this.preloadingStrategy.preload(e,()=>this.loader.load(t.injector,e).pipe(Object(N.a)(t=>(e._loadedConfig=t,this.processRoutes(t.module,t.routes)))))}}return t.\u0275fac=function(e){return new(e||t)(s.Zb(hn),s.Zb(s.w),s.Zb(s.i),s.Zb(s.r),s.Zb(vn))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac}),t})(),Cn=(()=>{class t{constructor(t,e,n={}){this.router=t,this.viewportScroller=e,this.options=n,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},n.scrollPositionRestoration=n.scrollPositionRestoration||"disabled",n.anchorScrolling=n.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(t=>{t instanceof K?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof J&&(this.lastId=t.id,this.scheduleScrollEvent(t,this.router.parseUrl(t.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(t=>{t instanceof ht&&(t.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(t.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,e){this.router.triggerEvent(new ht(t,"popstate"===this.lastSource?this.store[this.restoredId]:null,e))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return t.\u0275fac=function(t){s.cc()},t.\u0275dir=s.Hb({type:t}),t})();const En=new s.q("ROUTER_CONFIGURATION"),xn=new s.q("ROUTER_FORROOT_GUARD"),kn=[r.h,{provide:Nt,useClass:Pt},{provide:hn,useFactory:function(t,e,n,s,i,o,a,l={},c,u){const h=new hn(null,t,e,n,s,i,o,Et(a));if(c&&(h.urlHandlingStrategy=c),u&&(h.routeReuseStrategy=u),l.errorHandler&&(h.errorHandler=l.errorHandler),l.malformedUriErrorHandler&&(h.malformedUriErrorHandler=l.malformedUriErrorHandler),l.enableTracing){const t=Object(r.y)();h.events.subscribe(e=>{t.logGroup(`Router Event: ${e.constructor.name}`),t.log(e.toString()),t.log(e),t.logGroupEnd()})}return l.onSameUrlNavigation&&(h.onSameUrlNavigation=l.onSameUrlNavigation),l.paramsInheritanceStrategy&&(h.paramsInheritanceStrategy=l.paramsInheritanceStrategy),l.urlUpdateStrategy&&(h.urlUpdateStrategy=l.urlUpdateStrategy),l.relativeLinkResolution&&(h.relativeLinkResolution=l.relativeLinkResolution),h},deps:[Nt,bn,r.h,s.r,s.w,s.i,sn,En,[class{},new s.A],[class{},new s.A]]},bn,{provide:ne,useFactory:function(t){return t.routerState.root},deps:[hn]},{provide:s.w,useClass:s.J},Sn,wn,class{preload(t,e){return e().pipe(Object(A.a)(()=>Object(i.a)(null)))}},{provide:En,useValue:{enableTracing:!1}}];function On(){return new s.y("Router",hn)}let Tn=(()=>{class t{constructor(t,e){}static forRoot(e,n){return{ngModule:t,providers:[kn,Rn(e),{provide:xn,useFactory:An,deps:[[hn,new s.A,new s.I]]},{provide:En,useValue:n||{}},{provide:r.i,useFactory:In,deps:[r.n,[new s.p(r.a),new s.A],En]},{provide:Cn,useFactory:Dn,deps:[hn,r.q,En]},{provide:vn,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:wn},{provide:s.y,multi:!0,useFactory:On},[jn,{provide:s.d,multi:!0,useFactory:Nn,deps:[jn]},{provide:Mn,useFactory:Pn,deps:[jn]},{provide:s.b,multi:!0,useExisting:Mn}]]}}static forChild(e){return{ngModule:t,providers:[Rn(e)]}}}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)(s.Zb(xn,8),s.Zb(hn,8))}}),t})();function Dn(t,e,n){return n.scrollOffset&&e.setOffset(n.scrollOffset),new Cn(t,e,n)}function In(t,e,n={}){return n.useHash?new r.f(t,e):new r.m(t,e)}function An(t){if(t)throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");return"guarded"}function Rn(t){return[{provide:s.a,multi:!0,useValue:t},{provide:sn,multi:!0,useValue:t}]}let jn=(()=>{class t{constructor(t){this.injector=t,this.initNavigation=!1,this.resultOfPreactivationDone=new f.a}appInitializer(){return this.injector.get(r.g,Promise.resolve(null)).then(()=>{let t=null;const e=new Promise(e=>t=e),n=this.injector.get(hn),r=this.injector.get(En);if(this.isLegacyDisabled(r)||this.isLegacyEnabled(r))t(!0);else if("disabled"===r.initialNavigation)n.setUpLocationChangeListener(),t(!0);else{if("enabled"!==r.initialNavigation)throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);n.hooks.afterPreactivation=()=>this.initNavigation?Object(i.a)(null):(this.initNavigation=!0,t(!0),this.resultOfPreactivationDone),n.initialNavigation()}return e})}bootstrapListener(t){const e=this.injector.get(En),n=this.injector.get(Sn),r=this.injector.get(Cn),i=this.injector.get(hn),o=this.injector.get(s.g);t===o.components[0]&&(this.isLegacyEnabled(e)?i.initialNavigation():this.isLegacyDisabled(e)&&i.setUpLocationChangeListener(),n.setUpPreloading(),r.init(),i.resetRootComponentType(o.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}isLegacyEnabled(t){return"legacy_enabled"===t.initialNavigation||!0===t.initialNavigation||void 0===t.initialNavigation}isLegacyDisabled(t){return"legacy_disabled"===t.initialNavigation||!1===t.initialNavigation}}return t.\u0275fac=function(e){return new(e||t)(s.Zb(s.r))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac}),t})();function Nn(t){return t.appInitializer.bind(t)}function Pn(t){return t.bootstrapListener.bind(t)}const Mn=new s.q("Router Initializer")},vkgz:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("7o/Q"),s=n("KqfI"),i=n("n6bG");function o(t,e,n){return function(r){return r.lift(new a(t,e,n))}}class a{constructor(t,e,n){this.nextOrObserver=t,this.error=e,this.complete=n}call(t,e){return e.subscribe(new l(t,this.nextOrObserver,this.error,this.complete))}}class l extends r.a{constructor(t,e,n,r){super(t),this._tapNext=s.a,this._tapError=s.a,this._tapComplete=s.a,this._tapError=n||s.a,this._tapComplete=r||s.a,Object(i.a)(e)?(this._context=this,this._tapNext=e):e&&(this._context=e,this._tapNext=e.next||s.a,this._tapError=e.error||s.a,this._tapComplete=e.complete||s.a)}_next(t){try{this._tapNext.call(this._context,t)}catch(e){return void this.destination.error(e)}this.destination.next(t)}_error(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)}_complete(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()}}},w1tV:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("XNiG"),s=n("HDdC"),i=n("7o/Q"),o=n("quSY");function a(){return function(t){return t.lift(new l(t))}}class l{constructor(t){this.connectable=t}call(t,e){const{connectable:n}=this;n._refCount++;const r=new c(t,n),s=e.subscribe(r);return r.closed||(r.connection=n.connect()),s}}class c extends i.a{constructor(t,e){super(t),this.connectable=e}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const e=t._refCount;if(e<=0)return void(this.connection=null);if(t._refCount=e-1,e>1)return void(this.connection=null);const{connection:n}=this,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class u extends s.a{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,t=this._connection=new o.a,t.add(this.source.subscribe(new d(this.getSubject(),this))),t.closed&&(this._connection=null,t=o.a.EMPTY)),t}refCount(){return a()(this)}}const h=(()=>{const t=u.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})();class d extends r.b{constructor(t,e){super(t),this.connectable=e}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}function f(){return new r.a}function p(){return t=>{return a()((e=f,function(t){let n;n="function"==typeof e?e:function(){return e};const r=Object.create(t,h);return r.source=t,r.subjectFactory=n,r})(t));var e}}},y1cd:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"h",(function(){return s})),n.d(e,"f",(function(){return i})),n.d(e,"j",(function(){return o})),n.d(e,"g",(function(){return a})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"i",(function(){return h})),n.d(e,"a",(function(){return d}));var r=function(t){return t.LOGIN_BUTTON_TEXT="Login",t.SUBMIT_BUTTON_TEXT="Submit",t.DISABLE_BUTTON_TEXT="Disable",t.SEARCH_BUTTON_TEXT="Search",t.DOWNLOAD_BUTTON_TEXT="Download",t.LAUNCH_BUTTON_TEXT="Launch",t.BLOCK_BUTTON_TEXT="Block",t.CONFIRM_BUTTON_TEXT="Confirm",t.CANCEL_BUTTON_TEXT="Cancel",t.CLOSE_BUTTON_TEXT="Close",t.VIEW_BUTTON_TEXT="View",t.ACTIVATE_BUTTON_TEXT="Activate",t.DEACTIVATE_BUTTON_TEXT="Deactivate",t.CHANGE_PASSWORD_BUTTON_TEXT="Change password",t.EDIT_BUTTON_TEXT="Edit",t.UPDATE_BUTTON_TEXT="Update",t.REJECT_BUTTON_TEXT="Reject",t}({}),s=function(t){return t.SUPER_ADMIN="Super Admin",t.ADMIN="Admin",t.USER="User",t}({}),i=function(t){return t.PUBLIC="/public",t.USER_CREATION="/user-creation",t.VIEW_WHATSAPP="/view-whatsapp",t.BLOCK_WHATSAPP="/block-whatsapp",t.MARKETING_MAKER="/marketing-maker",t.MARKETING_CHECKER="/marketing-checker",t.CHANGE_PASSWORD="/public/change-password",t}({}),o=function(t){return t.LOGIN_SUCCESS="Logged in successfully.",t.LOGOUT_SUCCESS="Logged out successfully",t.CREATE_USER_SUCCESS="User created successfully.",t.CHANGE_PASSWORD_WARNING="Please change your old password.",t.USER_NOT_FOUND="User not found",t.BLOCK_WHASTAPP_SUCCESS="blocked successfully.",t.CHANGE_PASSWORD_SUCCESS="Password changed successfully.",t.INVALID_CURRENT_PASSWORD="Current password is not valid.",t.PASSWORD_MATCH_ERROR="New password & Confirm password didn't match.",t.FETCH_USER_SUCCESS="User fetched successfully.",t.DISABLE_USER_SUCCESS="User disabled successfully.",t.UPDATE_USER_SUCCESS="User updated successfully.",t.REPORT_DOWNLOAD_SUCCESS="Report downloaded successfully.",t.CREATE_MESSAGE_TEMPLATE_SUCCESS="Message template created successfully.",t.CREATE_PROMOTIONAL_TEMPLATE_SUCCESS="Promotional template created successfully.",t.CREATE_PREAPPROVED_OFFER_SUCCESS="Offer created successfully.",t.APPROVE_TEMPLATE_SUCCESS="Template approved successfully.",t.REJECT_TEMPLATE_SUCCESS="Template rejected successfully.",t.TOKEN_EXPIRED_MESSAGE="Token Expired.Please login again!",t.DEACTIVATE_USER_SUCCESS="Successfully Deactivated.",t}({}),a=function(t){return t.SUCCESS="SUCCESS",t}({}),l=function(t){return t.VIEW_WHATSAPP="View Whatsapp",t.BLOCK_WHATSAPP="Block Whatsapp",t.MARKETING_CHECKER="Marketing Checker",t.MARKETING_MAKER="Marketing Maker",t}({}),c=function(t){return t.USER_ID_CONCAT_HELPER="@uataxisb.com",t}({}),u=function(t){return t.NETWORK_NOT_AVAILABLE="Network connection not available.",t}({}),h=function(t){return t.SUBMITTED="10",t.REJECTED="20",t.APPROVED="30",t.ALL="40",t}({}),d=function(t){return t.TRUE="true",t.FALSE="false",t}({})},yCtX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("HDdC"),s=n("ngJS"),i=n("jZKg");function o(t,e){return e?Object(i.a)(t,e):new r.a(Object(s.a)(t))}},"z+Ro":function(t,e,n){"use strict";function r(t){return t&&"function"==typeof t.schedule}n.d(e,"a",(function(){return r}))},z6cu:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("HDdC");function s(t,e){return new r.a(e?n=>e.schedule(i,0,{error:t,subscriber:n}):e=>e.error(t))}function i({error:t,subscriber:e}){e.error(t)}},zUnb:function(t,e,n){"use strict";n.r(e);var r=n("fXoL"),s=n("AytR"),i=n("ofXK");class o extends i.w{constructor(){super()}supportsDOMEvents(){return!0}}class a extends o{static makeCurrent(){Object(i.A)(new a)}getProperty(t,e){return t[e]}log(t){window.console&&window.console.log&&window.console.log(t)}logGroup(t){window.console&&window.console.group&&window.console.group(t)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(t,e,n){return t.addEventListener(e,n,!1),()=>{t.removeEventListener(e,n,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){return t.parentNode&&t.parentNode.removeChild(t),t}getValue(t){return t.value}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(t){const e=c||(c=document.querySelector("base"),c)?c.getAttribute("href"):null;return null==e?null:(n=e,l||(l=document.createElement("a")),l.setAttribute("href",n),"/"===l.pathname.charAt(0)?l.pathname:"/"+l.pathname);var n}resetBaseElement(){c=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(t){return Object(i.z)(document.cookie,t)}}let l,c=null;const u=new r.q("TRANSITION_ID"),h=[{provide:r.d,useFactory:function(t,e,n){return()=>{n.get(r.e).donePromise.then(()=>{const n=Object(i.y)();Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e=>e.getAttribute("ng-transition")===t).forEach(t=>n.remove(t))})}},deps:[u,i.c,r.r],multi:!0}];class d{static init(){Object(r.V)(new d)}addToWindow(t){r.nb.getAngularTestability=(e,n=!0)=>{const r=t.findTestabilityInTree(e,n);if(null==r)throw new Error("Could not find testability for element.");return r},r.nb.getAllAngularTestabilities=()=>t.getAllTestabilities(),r.nb.getAllAngularRootElements=()=>t.getAllRootElements(),r.nb.frameworkStabilizers||(r.nb.frameworkStabilizers=[]),r.nb.frameworkStabilizers.push(t=>{const e=r.nb.getAllAngularTestabilities();let n=e.length,s=!1;const i=function(e){s=s||e,n--,0==n&&t(s)};e.forEach((function(t){t.whenStable(i)}))})}findTestabilityInTree(t,e,n){if(null==e)return null;const r=t.getTestability(e);return null!=r?r:n?Object(i.y)().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null}}const f=new r.q("EventManagerPlugins");let p=(()=>{class t{constructor(t,e){this._zone=e,this._eventNameToPlugin=new Map,t.forEach(t=>t.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,e,n){return this._findPluginFor(e).addEventListener(t,e,n)}addGlobalEventListener(t,e,n){return this._findPluginFor(e).addGlobalEventListener(t,e,n)}getZone(){return this._zone}_findPluginFor(t){const e=this._eventNameToPlugin.get(t);if(e)return e;const n=this._plugins;for(let r=0;r<n.length;r++){const e=n[r];if(e.supports(t))return this._eventNameToPlugin.set(t,e),e}throw new Error(`No event manager plugin found for event ${t}`)}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(f),r.Zb(r.z))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();class m{constructor(t){this._doc=t}addGlobalEventListener(t,e,n){const r=Object(i.y)().getGlobalEventTarget(this._doc,t);if(!r)throw new Error(`Unsupported event target ${r} for event ${e}`);return this.addEventListener(r,e,n)}}let g=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(t){const e=new Set;t.forEach(t=>{this._stylesSet.has(t)||(this._stylesSet.add(t),e.add(t))}),this.onStylesAdded(e)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})(),b=(()=>{class t extends g{constructor(t){super(),this._doc=t,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(t.head)}_addStylesToHost(t,e){t.forEach(t=>{const n=this._doc.createElement("style");n.textContent=t,this._styleNodes.add(e.appendChild(n))})}addHost(t){this._addStylesToHost(this._stylesSet,t),this._hostNodes.add(t)}removeHost(t){this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach(e=>this._addStylesToHost(t,e))}ngOnDestroy(){this._styleNodes.forEach(t=>Object(i.y)().remove(t))}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(i.c))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();const y={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},_=/%COMP%/g;function v(t,e,n){for(let r=0;r<e.length;r++){let s=e[r];Array.isArray(s)?v(t,s,n):(s=s.replace(_,t),n.push(s))}return n}function w(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}let S=(()=>{class t{constructor(t,e,n){this.eventManager=t,this.sharedStylesHost=e,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new C(t)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;switch(e.encapsulation){case r.O.Emulated:{let n=this.rendererByCompId.get(e.id);return n||(n=new E(this.eventManager,this.sharedStylesHost,e,this.appId),this.rendererByCompId.set(e.id,n)),n.applyToHost(t),n}case r.O.Native:case r.O.ShadowDom:return new x(this.eventManager,this.sharedStylesHost,t,e);default:if(!this.rendererByCompId.has(e.id)){const t=v(e.id,e.styles,[]);this.sharedStylesHost.addStyles(t),this.rendererByCompId.set(e.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(p),r.Zb(b),r.Zb(r.c))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();class C{constructor(t){this.eventManager=t,this.data=Object.create(null)}destroy(){}createElement(t,e){return e?document.createElementNS(y[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){t.appendChild(e)}insertBefore(t,e,n){t&&t.insertBefore(e,n)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let n="string"==typeof t?document.querySelector(t):t;if(!n)throw new Error(`The selector "${t}" did not match any elements`);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;const s=y[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){const r=y[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,s){s&r.F.DashCase?t.style.setProperty(e,n,s&r.F.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&r.F.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t[e]=n}setValue(t,e){t.nodeValue=e}listen(t,e,n){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,w(n)):this.eventManager.addEventListener(t,e,w(n))}}class E extends C{constructor(t,e,n,r){super(t),this.component=n;const s=v(r+"-"+n.id,n.styles,[]);e.addStyles(s),this.contentAttr="_ngcontent-%COMP%".replace(_,r+"-"+n.id),this.hostAttr=function(t){return"_nghost-%COMP%".replace(_,t)}(r+"-"+n.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}}class x extends C{constructor(t,e,n,s){super(t),this.sharedStylesHost=e,this.hostEl=n,this.component=s,this.shadowRoot=s.encapsulation===r.O.ShadowDom?n.attachShadow({mode:"open"}):n.createShadowRoot(),this.sharedStylesHost.addHost(this.shadowRoot);const i=v(s.id,s.styles,[]);for(let r=0;r<i.length;r++){const t=document.createElement("style");t.textContent=i[r],this.shadowRoot.appendChild(t)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let k=(()=>{class t extends m{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,n){return t.addEventListener(e,n,!1),()=>this.removeEventListener(t,e,n)}removeEventListener(t,e,n){return t.removeEventListener(e,n)}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(i.c))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();const O=["alt","control","meta","shift"],T={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},D={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},I={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};let A=(()=>{class t extends m{constructor(t){super(t)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,n,r){const s=t.parseEventName(n),o=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Object(i.y)().onAndCancel(e,s.domEventName,o))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const s=t._normalizeKey(n.pop());let i="";if(O.forEach(t=>{const e=n.indexOf(t);e>-1&&(n.splice(e,1),i+=t+".")}),i+=s,0!=n.length||0===s.length)return null;const o={};return o.domEventName=r,o.fullKey=i,o}static getEventFullKey(t){let e="",n=function(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&D.hasOwnProperty(e)&&(e=D[e]))}return T[e]||e}(t);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),O.forEach(r=>{r!=n&&(0,I[r])(t)&&(e+=r+".")}),e+=n,e}static eventCallback(e,n,r){return s=>{t.getEventFullKey(s)===e&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){switch(t){case"esc":return"escape";default:return t}}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(i.c))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();const R=[{provide:r.B,useValue:i.x},{provide:r.C,useValue:function(){a.makeCurrent(),d.init()},multi:!0},{provide:i.c,useFactory:function(){return Object(r.tb)(document),document},deps:[]}],j=Object(r.Q)(r.U,"browser",R),N=[[],{provide:r.X,useValue:"root"},{provide:r.m,useFactory:function(){return new r.m},deps:[]},{provide:f,useClass:k,multi:!0,deps:[i.c,r.z,r.B]},{provide:f,useClass:A,multi:!0,deps:[i.c]},[],{provide:S,useClass:S,deps:[p,b,r.c]},{provide:r.E,useExisting:S},{provide:g,useExisting:b},{provide:b,useClass:b,deps:[i.c]},{provide:r.L,useClass:r.L,deps:[r.z]},{provide:p,useClass:p,deps:[f,r.z]},[]];let P=(()=>{class t{constructor(t){if(t)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:t,providers:[{provide:r.c,useValue:e.appId},{provide:u,useExisting:r.c},h]}}}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)(r.Zb(t,12))},providers:N,imports:[i.b,r.f]}),t})();"undefined"!=typeof window&&window;class M{}function V(t,e=null){return{type:2,steps:t,options:e}}function F(t){return{type:6,styles:t,offset:null}}function L(t){Promise.resolve(null).then(t)}class U{constructor(t=0,e=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this.parentPlayer=null,this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._onStartFns.push(t)}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){L(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){}setPosition(t){}getPosition(){return 0}triggerCallback(t){const e="start"==t?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}}class H{constructor(t){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;let e=0,n=0,r=0;const s=this.players.length;0==s?L(()=>this._onFinish()):this.players.forEach(t=>{t.onDone(()=>{++e==s&&this._onFinish()}),t.onDestroy(()=>{++n==s&&this._onDestroy()}),t.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((t,e)=>Math.max(t,e.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){const e=t*this.totalTime;this.players.forEach(t=>{const n=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(n)})}getPosition(){let t=0;return this.players.forEach(e=>{const n=e.getPosition();t=Math.min(n,t)}),t}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){const e="start"==t?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}}function $(){return"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)}function z(t){switch(t.length){case 0:return new U;case 1:return t[0];default:return new H(t)}}function B(t,e,n,r,s={},i={}){const o=[],a=[];let l=-1,c=null;if(r.forEach(t=>{const n=t.offset,r=n==l,u=r&&c||{};Object.keys(t).forEach(n=>{let r=n,a=t[n];if("offset"!==n)switch(r=e.normalizePropertyName(r,o),a){case"!":a=s[n];break;case"*":a=i[n];break;default:a=e.normalizeStyleValue(n,r,a,o)}u[r]=a}),r||a.push(u),c=u,l=n}),o.length){const t="\n - ";throw new Error(`Unable to animate due to the following errors:${t}${o.join(t)}`)}return a}function q(t,e,n,r){switch(e){case"start":t.onStart(()=>r(n&&Q(n,"start",t)));break;case"done":t.onDone(()=>r(n&&Q(n,"done",t)));break;case"destroy":t.onDestroy(()=>r(n&&Q(n,"destroy",t)))}}function Q(t,e,n){const r=n.totalTime,s=W(t.element,t.triggerName,t.fromState,t.toState,e||t.phaseName,null==r?t.totalTime:r,!!n.disabled),i=t._data;return null!=i&&(s._data=i),s}function W(t,e,n,r,s="",i=0,o){return{element:t,triggerName:e,fromState:n,toState:r,phaseName:s,totalTime:i,disabled:!!o}}function G(t,e,n){let r;return t instanceof Map?(r=t.get(e),r||t.set(e,r=n)):(r=t[e],r||(r=t[e]=n)),r}function Z(t){const e=t.indexOf(":");return[t.substring(1,e),t.substr(e+1)]}let K=(t,e)=>!1,J=(t,e)=>!1,X=(t,e,n)=>[];const Y=$();(Y||"undefined"!=typeof Element)&&(K=(t,e)=>t.contains(e),J=(()=>{if(Y||Element.prototype.matches)return(t,e)=>t.matches(e);{const t=Element.prototype,e=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector;return e?(t,n)=>e.apply(t,[n]):J}})(),X=(t,e,n)=>{let r=[];if(n)r.push(...t.querySelectorAll(e));else{const n=t.querySelector(e);n&&r.push(n)}return r});let tt=null,et=!1;function nt(t){tt||(tt=("undefined"!=typeof document?document.body:null)||{},et=!!tt.style&&"WebkitAppearance"in tt.style);let e=!0;return tt.style&&!function(t){return"ebkit"==t.substring(1,6)}(t)&&(e=t in tt.style,!e&&et)&&(e="Webkit"+t.charAt(0).toUpperCase()+t.substr(1)in tt.style),e}const rt=J,st=K,it=X;function ot(t){const e={};return Object.keys(t).forEach(n=>{const r=n.replace(/([a-z])([A-Z])/g,"$1-$2");e[r]=t[n]}),e}let at=(()=>{class t{validateStyleProperty(t){return nt(t)}matchesElement(t,e){return rt(t,e)}containsElement(t,e){return st(t,e)}query(t,e,n){return it(t,e,n)}computeStyle(t,e,n){return n||""}animate(t,e,n,r,s,i=[],o){return new U(n,r)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})(),lt=(()=>{class t{}return t.NOOP=new at,t})();function ct(t){if("number"==typeof t)return t;const e=t.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:ut(parseFloat(e[1]),e[2])}function ut(t,e){switch(e){case"s":return 1e3*t;default:return t}}function ht(t,e,n){return t.hasOwnProperty("duration")?t:function(t,e,n){let r,s=0,i="";if("string"==typeof t){const n=t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===n)return e.push(`The provided timing value "${t}" is invalid.`),{duration:0,delay:0,easing:""};r=ut(parseFloat(n[1]),n[2]);const o=n[3];null!=o&&(s=ut(parseFloat(o),n[4]));const a=n[5];a&&(i=a)}else r=t;if(!n){let n=!1,i=e.length;r<0&&(e.push("Duration values below 0 are not allowed for this animation step."),n=!0),s<0&&(e.push("Delay values below 0 are not allowed for this animation step."),n=!0),n&&e.splice(i,0,`The provided timing value "${t}" is invalid.`)}return{duration:r,delay:s,easing:i}}(t,e,n)}function dt(t,e={}){return Object.keys(t).forEach(n=>{e[n]=t[n]}),e}function ft(t,e,n={}){if(e)for(let r in t)n[r]=t[r];else dt(t,n);return n}function pt(t,e,n){return n?e+":"+n+";":""}function mt(t){let e="";for(let n=0;n<t.style.length;n++){const r=t.style.item(n);e+=pt(0,r,t.style.getPropertyValue(r))}for(const n in t.style)t.style.hasOwnProperty(n)&&!n.startsWith("_")&&(e+=pt(0,n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t.style[n]));t.setAttribute("style",e)}function gt(t,e,n){t.style&&(Object.keys(e).forEach(r=>{const s=Et(r);n&&!n.hasOwnProperty(r)&&(n[r]=t.style[s]),t.style[s]=e[r]}),$()&&mt(t))}function bt(t,e){t.style&&(Object.keys(e).forEach(e=>{const n=Et(e);t.style[n]=""}),$()&&mt(t))}function yt(t){return Array.isArray(t)?1==t.length?t[0]:V(t):t}const _t=new RegExp("{{\\s*(.+?)\\s*}}","g");function vt(t){let e=[];if("string"==typeof t){let n;for(;n=_t.exec(t);)e.push(n[1]);_t.lastIndex=0}return e}function wt(t,e,n){const r=t.toString(),s=r.replace(_t,(t,r)=>{let s=e[r];return e.hasOwnProperty(r)||(n.push(`Please provide a value for the animation param ${r}`),s=""),s.toString()});return s==r?t:s}function St(t){const e=[];let n=t.next();for(;!n.done;)e.push(n.value),n=t.next();return e}const Ct=/-+([a-z0-9])/g;function Et(t){return t.replace(Ct,(...t)=>t[1].toUpperCase())}function xt(t,e){return 0===t||0===e}function kt(t,e,n){const r=Object.keys(n);if(r.length&&e.length){let i=e[0],o=[];if(r.forEach(t=>{i.hasOwnProperty(t)||o.push(t),i[t]=n[t]}),o.length)for(var s=1;s<e.length;s++){let n=e[s];o.forEach((function(e){n[e]=Tt(t,e)}))}}return e}function Ot(t,e,n){switch(e.type){case 7:return t.visitTrigger(e,n);case 0:return t.visitState(e,n);case 1:return t.visitTransition(e,n);case 2:return t.visitSequence(e,n);case 3:return t.visitGroup(e,n);case 4:return t.visitAnimate(e,n);case 5:return t.visitKeyframes(e,n);case 6:return t.visitStyle(e,n);case 8:return t.visitReference(e,n);case 9:return t.visitAnimateChild(e,n);case 10:return t.visitAnimateRef(e,n);case 11:return t.visitQuery(e,n);case 12:return t.visitStagger(e,n);default:throw new Error(`Unable to resolve animation metadata node #${e.type}`)}}function Tt(t,e){return window.getComputedStyle(t)[e]}function Dt(t,e){const n=[];return"string"==typeof t?t.split(/\s*,\s*/).forEach(t=>function(t,e,n){if(":"==t[0]){const r=function(t,e){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,e)=>parseFloat(e)>parseFloat(t);case":decrement":return(t,e)=>parseFloat(e)<parseFloat(t);default:return e.push(`The transition alias value "${t}" is not supported`),"* => *"}}(t,n);if("function"==typeof r)return void e.push(r);t=r}const r=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==r||r.length<4)return n.push(`The provided transition expression "${t}" is not supported`),e;const s=r[1],i=r[2],o=r[3];e.push(Rt(s,o)),"<"!=i[0]||"*"==s&&"*"==o||e.push(Rt(o,s))}(t,n,e)):n.push(t),n}const It=new Set(["true","1"]),At=new Set(["false","0"]);function Rt(t,e){const n=It.has(t)||At.has(t),r=It.has(e)||At.has(e);return(s,i)=>{let o="*"==t||t==s,a="*"==e||e==i;return!o&&n&&"boolean"==typeof s&&(o=s?It.has(t):At.has(t)),!a&&r&&"boolean"==typeof i&&(a=i?It.has(e):At.has(e)),o&&a}}const jt=new RegExp("s*:selfs*,?","g");function Nt(t,e,n){return new Pt(t).build(e,n)}class Pt{constructor(t){this._driver=t}build(t,e){const n=new Mt(e);return this._resetContextStyleTimingState(n),Ot(this,yt(t),n)}_resetContextStyleTimingState(t){t.currentQuerySelector="",t.collectedStyles={},t.collectedStyles[""]={},t.currentTime=0}visitTrigger(t,e){let n=e.queryCount=0,r=e.depCount=0;const s=[],i=[];return"@"==t.name.charAt(0)&&e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"),t.definitions.forEach(t=>{if(this._resetContextStyleTimingState(e),0==t.type){const n=t,r=n.name;r.toString().split(/\s*,\s*/).forEach(t=>{n.name=t,s.push(this.visitState(n,e))}),n.name=r}else if(1==t.type){const s=this.visitTransition(t,e);n+=s.queryCount,r+=s.depCount,i.push(s)}else e.errors.push("only state() and transition() definitions can sit inside of a trigger()")}),{type:7,name:t.name,states:s,transitions:i,queryCount:n,depCount:r,options:null}}visitState(t,e){const n=this.visitStyle(t.styles,e),r=t.options&&t.options.params||null;if(n.containsDynamicStyles){const s=new Set,i=r||{};if(n.styles.forEach(t=>{if(Vt(t)){const e=t;Object.keys(e).forEach(t=>{vt(e[t]).forEach(t=>{i.hasOwnProperty(t)||s.add(t)})})}}),s.size){const n=St(s.values());e.errors.push(`state("${t.name}", ...) must define default values for all the following style substitutions: ${n.join(", ")}`)}}return{type:0,name:t.name,style:n,options:r?{params:r}:null}}visitTransition(t,e){e.queryCount=0,e.depCount=0;const n=Ot(this,yt(t.animation),e);return{type:1,matchers:Dt(t.expr,e.errors),animation:n,queryCount:e.queryCount,depCount:e.depCount,options:Ft(t.options)}}visitSequence(t,e){return{type:2,steps:t.steps.map(t=>Ot(this,t,e)),options:Ft(t.options)}}visitGroup(t,e){const n=e.currentTime;let r=0;const s=t.steps.map(t=>{e.currentTime=n;const s=Ot(this,t,e);return r=Math.max(r,e.currentTime),s});return e.currentTime=r,{type:3,steps:s,options:Ft(t.options)}}visitAnimate(t,e){const n=function(t,e){let n=null;if(t.hasOwnProperty("duration"))n=t;else if("number"==typeof t)return Lt(ht(t,e).duration,0,"");const r=t;if(r.split(/\s+/).some(t=>"{"==t.charAt(0)&&"{"==t.charAt(1))){const t=Lt(0,0,"");return t.dynamic=!0,t.strValue=r,t}return n=n||ht(r,e),Lt(n.duration,n.delay,n.easing)}(t.timings,e.errors);let r;e.currentAnimateTimings=n;let s=t.styles?t.styles:F({});if(5==s.type)r=this.visitKeyframes(s,e);else{let s=t.styles,i=!1;if(!s){i=!0;const t={};n.easing&&(t.easing=n.easing),s=F(t)}e.currentTime+=n.duration+n.delay;const o=this.visitStyle(s,e);o.isEmptyStep=i,r=o}return e.currentAnimateTimings=null,{type:4,timings:n,style:r,options:null}}visitStyle(t,e){const n=this._makeStyleAst(t,e);return this._validateStyleAst(n,e),n}_makeStyleAst(t,e){const n=[];Array.isArray(t.styles)?t.styles.forEach(t=>{"string"==typeof t?"*"==t?n.push(t):e.errors.push(`The provided style string value ${t} is not allowed.`):n.push(t)}):n.push(t.styles);let r=!1,s=null;return n.forEach(t=>{if(Vt(t)){const e=t,n=e.easing;if(n&&(s=n,delete e.easing),!r)for(let t in e)if(e[t].toString().indexOf("{{")>=0){r=!0;break}}}),{type:6,styles:n,easing:s,offset:t.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(t,e){const n=e.currentAnimateTimings;let r=e.currentTime,s=e.currentTime;n&&s>0&&(s-=n.duration+n.delay),t.styles.forEach(t=>{"string"!=typeof t&&Object.keys(t).forEach(n=>{if(!this._driver.validateStyleProperty(n))return void e.errors.push(`The provided animation property "${n}" is not a supported CSS property for animations`);const i=e.collectedStyles[e.currentQuerySelector],o=i[n];let a=!0;o&&(s!=r&&s>=o.startTime&&r<=o.endTime&&(e.errors.push(`The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`),a=!1),s=o.startTime),a&&(i[n]={startTime:s,endTime:r}),e.options&&function(t,e,n){const r=e.params||{},s=vt(t);s.length&&s.forEach(t=>{r.hasOwnProperty(t)||n.push(`Unable to resolve the local animation param ${t} in the given list of values`)})}(t[n],e.options,e.errors)})})}visitKeyframes(t,e){const n={type:5,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push("keyframes() must be placed inside of a call to animate()"),n;let r=0;const s=[];let i=!1,o=!1,a=0;const l=t.steps.map(t=>{const n=this._makeStyleAst(t,e);let l=null!=n.offset?n.offset:function(t){if("string"==typeof t)return null;let e=null;if(Array.isArray(t))t.forEach(t=>{if(Vt(t)&&t.hasOwnProperty("offset")){const n=t;e=parseFloat(n.offset),delete n.offset}});else if(Vt(t)&&t.hasOwnProperty("offset")){const n=t;e=parseFloat(n.offset),delete n.offset}return e}(n.styles),c=0;return null!=l&&(r++,c=n.offset=l),o=o||c<0||c>1,i=i||c<a,a=c,s.push(c),n});o&&e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"),i&&e.errors.push("Please ensure that all keyframe offsets are in order");const c=t.steps.length;let u=0;r>0&&r<c?e.errors.push("Not all style() steps within the declared keyframes() contain offsets"):0==r&&(u=1/(c-1));const h=c-1,d=e.currentTime,f=e.currentAnimateTimings,p=f.duration;return l.forEach((t,r)=>{const i=u>0?r==h?1:u*r:s[r],o=i*p;e.currentTime=d+f.delay+o,f.duration=o,this._validateStyleAst(t,e),t.offset=i,n.styles.push(t)}),n}visitReference(t,e){return{type:8,animation:Ot(this,yt(t.animation),e),options:Ft(t.options)}}visitAnimateChild(t,e){return e.depCount++,{type:9,options:Ft(t.options)}}visitAnimateRef(t,e){return{type:10,animation:this.visitReference(t.animation,e),options:Ft(t.options)}}visitQuery(t,e){const n=e.currentQuerySelector,r=t.options||{};e.queryCount++,e.currentQuery=t;const[s,i]=function(t){const e=!!t.split(/\s*,\s*/).find(t=>":self"==t);return e&&(t=t.replace(jt,"")),[t=t.replace(/@\*/g,".ng-trigger").replace(/@\w+/g,t=>".ng-trigger-"+t.substr(1)).replace(/:animating/g,".ng-animating"),e]}(t.selector);e.currentQuerySelector=n.length?n+" "+s:s,G(e.collectedStyles,e.currentQuerySelector,{});const o=Ot(this,yt(t.animation),e);return e.currentQuery=null,e.currentQuerySelector=n,{type:11,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:i,animation:o,originalSelector:t.selector,options:Ft(t.options)}}visitStagger(t,e){e.currentQuery||e.errors.push("stagger() can only be used inside of query()");const n="full"===t.timings?{duration:0,delay:0,easing:"full"}:ht(t.timings,e.errors,!0);return{type:12,animation:Ot(this,yt(t.animation),e),timings:n,options:null}}}class Mt{constructor(t){this.errors=t,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles={},this.options=null}}function Vt(t){return!Array.isArray(t)&&"object"==typeof t}function Ft(t){var e;return t?(t=dt(t)).params&&(t.params=(e=t.params)?dt(e):null):t={},t}function Lt(t,e,n){return{duration:t,delay:e,easing:n}}function Ut(t,e,n,r,s,i,o=null,a=!1){return{type:1,element:t,keyframes:e,preStyleProps:n,postStyleProps:r,duration:s,delay:i,totalTime:s+i,easing:o,subTimeline:a}}class Ht{constructor(){this._map=new Map}consume(t){let e=this._map.get(t);return e?this._map.delete(t):e=[],e}append(t,e){let n=this._map.get(t);n||this._map.set(t,n=[]),n.push(...e)}has(t){return this._map.has(t)}clear(){this._map.clear()}}const $t=new RegExp(":enter","g"),zt=new RegExp(":leave","g");function Bt(t,e,n,r,s,i={},o={},a,l,c=[]){return(new qt).buildKeyframes(t,e,n,r,s,i,o,a,l,c)}class qt{buildKeyframes(t,e,n,r,s,i,o,a,l,c=[]){l=l||new Ht;const u=new Wt(t,e,l,r,s,c,[]);u.options=a,u.currentTimeline.setStyles([i],null,u.errors,a),Ot(this,n,u);const h=u.timelines.filter(t=>t.containsAnimation());if(h.length&&Object.keys(o).length){const t=h[h.length-1];t.allowOnlyTimelineStyles()||t.setStyles([o],null,u.errors,a)}return h.length?h.map(t=>t.buildKeyframes()):[Ut(e,[],[],[],0,0,"",!1)]}visitTrigger(t,e){}visitState(t,e){}visitTransition(t,e){}visitAnimateChild(t,e){const n=e.subInstructions.consume(e.element);if(n){const r=e.createSubContext(t.options),s=e.currentTimeline.currentTime,i=this._visitSubInstructions(n,r,r.options);s!=i&&e.transformIntoNewTimeline(i)}e.previousNode=t}visitAnimateRef(t,e){const n=e.createSubContext(t.options);n.transformIntoNewTimeline(),this.visitReference(t.animation,n),e.transformIntoNewTimeline(n.currentTimeline.currentTime),e.previousNode=t}_visitSubInstructions(t,e,n){let r=e.currentTimeline.currentTime;const s=null!=n.duration?ct(n.duration):null,i=null!=n.delay?ct(n.delay):null;return 0!==s&&t.forEach(t=>{const n=e.appendInstructionToTimeline(t,s,i);r=Math.max(r,n.duration+n.delay)}),r}visitReference(t,e){e.updateOptions(t.options,!0),Ot(this,t.animation,e),e.previousNode=t}visitSequence(t,e){const n=e.subContextCount;let r=e;const s=t.options;if(s&&(s.params||s.delay)&&(r=e.createSubContext(s),r.transformIntoNewTimeline(),null!=s.delay)){6==r.previousNode.type&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Qt);const t=ct(s.delay);r.delayNextStep(t)}t.steps.length&&(t.steps.forEach(t=>Ot(this,t,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>n&&r.transformIntoNewTimeline()),e.previousNode=t}visitGroup(t,e){const n=[];let r=e.currentTimeline.currentTime;const s=t.options&&t.options.delay?ct(t.options.delay):0;t.steps.forEach(i=>{const o=e.createSubContext(t.options);s&&o.delayNextStep(s),Ot(this,i,o),r=Math.max(r,o.currentTimeline.currentTime),n.push(o.currentTimeline)}),n.forEach(t=>e.currentTimeline.mergeTimelineCollectedStyles(t)),e.transformIntoNewTimeline(r),e.previousNode=t}_visitTiming(t,e){if(t.dynamic){const n=t.strValue;return ht(e.params?wt(n,e.params,e.errors):n,e.errors)}return{duration:t.duration,delay:t.delay,easing:t.easing}}visitAnimate(t,e){const n=e.currentAnimateTimings=this._visitTiming(t.timings,e),r=e.currentTimeline;n.delay&&(e.incrementTime(n.delay),r.snapshotCurrentStyles());const s=t.style;5==s.type?this.visitKeyframes(s,e):(e.incrementTime(n.duration),this.visitStyle(s,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=t}visitStyle(t,e){const n=e.currentTimeline,r=e.currentAnimateTimings;!r&&n.getCurrentStyleProperties().length&&n.forwardFrame();const s=r&&r.easing||t.easing;t.isEmptyStep?n.applyEmptyStep(s):n.setStyles(t.styles,s,e.errors,e.options),e.previousNode=t}visitKeyframes(t,e){const n=e.currentAnimateTimings,r=e.currentTimeline.duration,s=n.duration,i=e.createSubContext().currentTimeline;i.easing=n.easing,t.styles.forEach(t=>{i.forwardTime((t.offset||0)*s),i.setStyles(t.styles,t.easing,e.errors,e.options),i.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(i),e.transformIntoNewTimeline(r+s),e.previousNode=t}visitQuery(t,e){const n=e.currentTimeline.currentTime,r=t.options||{},s=r.delay?ct(r.delay):0;s&&(6===e.previousNode.type||0==n&&e.currentTimeline.getCurrentStyleProperties().length)&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Qt);let i=n;const o=e.invokeQuery(t.selector,t.originalSelector,t.limit,t.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=o.length;let a=null;o.forEach((n,r)=>{e.currentQueryIndex=r;const o=e.createSubContext(t.options,n);s&&o.delayNextStep(s),n===e.element&&(a=o.currentTimeline),Ot(this,t.animation,o),o.currentTimeline.applyStylesToKeyframe(),i=Math.max(i,o.currentTimeline.currentTime)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(i),a&&(e.currentTimeline.mergeTimelineCollectedStyles(a),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=t}visitStagger(t,e){const n=e.parentContext,r=e.currentTimeline,s=t.timings,i=Math.abs(s.duration),o=i*(e.currentQueryTotal-1);let a=i*e.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":a=o-a;break;case"full":a=n.currentStaggerTime}const l=e.currentTimeline;a&&l.delayNextStep(a);const c=l.currentTime;Ot(this,t.animation,e),e.previousNode=t,n.currentStaggerTime=r.currentTime-c+(r.startTime-n.currentTimeline.startTime)}}const Qt={};class Wt{constructor(t,e,n,r,s,i,o,a){this._driver=t,this.element=e,this.subInstructions=n,this._enterClassName=r,this._leaveClassName=s,this.errors=i,this.timelines=o,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Qt,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=a||new Gt(this._driver,e,0),o.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(t,e){if(!t)return;const n=t;let r=this.options;null!=n.duration&&(r.duration=ct(n.duration)),null!=n.delay&&(r.delay=ct(n.delay));const s=n.params;if(s){let t=r.params;t||(t=this.options.params={}),Object.keys(s).forEach(n=>{e&&t.hasOwnProperty(n)||(t[n]=wt(s[n],t,this.errors))})}}_copyOptions(){const t={};if(this.options){const e=this.options.params;if(e){const n=t.params={};Object.keys(e).forEach(t=>{n[t]=e[t]})}}return t}createSubContext(t=null,e,n){const r=e||this.element,s=new Wt(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,n||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(t),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(t){return this.previousNode=Qt,this.currentTimeline=this.currentTimeline.fork(this.element,t),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(t,e,n){const r={duration:null!=e?e:t.duration,delay:this.currentTimeline.currentTime+(null!=n?n:0)+t.delay,easing:""},s=new Zt(this._driver,t.element,t.keyframes,t.preStyleProps,t.postStyleProps,r,t.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(t){this.currentTimeline.forwardTime(this.currentTimeline.duration+t)}delayNextStep(t){t>0&&this.currentTimeline.delayNextStep(t)}invokeQuery(t,e,n,r,s,i){let o=[];if(r&&o.push(this.element),t.length>0){t=(t=t.replace($t,"."+this._enterClassName)).replace(zt,"."+this._leaveClassName);let e=this._driver.query(this.element,t,1!=n);0!==n&&(e=n<0?e.slice(e.length+n,e.length):e.slice(0,n)),o.push(...e)}return s||0!=o.length||i.push(`\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`),o}}class Gt{constructor(t,e,n,r){this._driver=t,this.element=e,this.startTime=n,this._elementTimelineStylesLookup=r,this.duration=0,this._previousKeyframe={},this._currentKeyframe={},this._keyframes=new Map,this._styleSummary={},this._pendingStyles={},this._backFill={},this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.getCurrentStyleProperties().length>0;default:return!0}}getCurrentStyleProperties(){return Object.keys(this._currentKeyframe)}get currentTime(){return this.startTime+this.duration}delayNextStep(t){const e=1==this._keyframes.size&&Object.keys(this._pendingStyles).length;this.duration||e?(this.forwardTime(this.currentTime+t),e&&this.snapshotCurrentStyles()):this.startTime+=t}fork(t,e){return this.applyStylesToKeyframe(),new Gt(this._driver,t,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(t){this.applyStylesToKeyframe(),this.duration=t,this._loadKeyframe()}_updateStyle(t,e){this._localTimelineStyles[t]=e,this._globalTimelineStyles[t]=e,this._styleSummary[t]={time:this.currentTime,value:e}}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(t){t&&(this._previousKeyframe.easing=t),Object.keys(this._globalTimelineStyles).forEach(t=>{this._backFill[t]=this._globalTimelineStyles[t]||"*",this._currentKeyframe[t]="*"}),this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(t,e,n,r){e&&(this._previousKeyframe.easing=e);const s=r&&r.params||{},i=function(t,e){const n={};let r;return t.forEach(t=>{"*"===t?(r=r||Object.keys(e),r.forEach(t=>{n[t]="*"})):ft(t,!1,n)}),n}(t,this._globalTimelineStyles);Object.keys(i).forEach(t=>{const e=wt(i[t],s,n);this._pendingStyles[t]=e,this._localTimelineStyles.hasOwnProperty(t)||(this._backFill[t]=this._globalTimelineStyles.hasOwnProperty(t)?this._globalTimelineStyles[t]:"*"),this._updateStyle(t,e)})}applyStylesToKeyframe(){const t=this._pendingStyles,e=Object.keys(t);0!=e.length&&(this._pendingStyles={},e.forEach(e=>{this._currentKeyframe[e]=t[e]}),Object.keys(this._localTimelineStyles).forEach(t=>{this._currentKeyframe.hasOwnProperty(t)||(this._currentKeyframe[t]=this._localTimelineStyles[t])}))}snapshotCurrentStyles(){Object.keys(this._localTimelineStyles).forEach(t=>{const e=this._localTimelineStyles[t];this._pendingStyles[t]=e,this._updateStyle(t,e)})}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const t=[];for(let e in this._currentKeyframe)t.push(e);return t}mergeTimelineCollectedStyles(t){Object.keys(t._styleSummary).forEach(e=>{const n=this._styleSummary[e],r=t._styleSummary[e];(!n||r.time>n.time)&&this._updateStyle(e,r.value)})}buildKeyframes(){this.applyStylesToKeyframe();const t=new Set,e=new Set,n=1===this._keyframes.size&&0===this.duration;let r=[];this._keyframes.forEach((s,i)=>{const o=ft(s,!0);Object.keys(o).forEach(n=>{const r=o[n];"!"==r?t.add(n):"*"==r&&e.add(n)}),n||(o.offset=i/this.duration),r.push(o)});const s=t.size?St(t.values()):[],i=e.size?St(e.values()):[];if(n){const t=r[0],e=dt(t);t.offset=0,e.offset=1,r=[t,e]}return Ut(this.element,r,s,i,this.duration,this.startTime,this.easing,!1)}}class Zt extends Gt{constructor(t,e,n,r,s,i,o=!1){super(t,e,i.delay),this.element=e,this.keyframes=n,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=o,this.timings={duration:i.duration,delay:i.delay,easing:i.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let t=this.keyframes,{delay:e,duration:n,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){const s=[],i=n+e,o=e/i,a=ft(t[0],!1);a.offset=0,s.push(a);const l=ft(t[0],!1);l.offset=Kt(o),s.push(l);const c=t.length-1;for(let r=1;r<=c;r++){let o=ft(t[r],!1);o.offset=Kt((e+o.offset*n)/i),s.push(o)}n=i,e=0,r="",t=s}return Ut(this.element,t,this.preStyleProps,this.postStyleProps,n,e,r,!0)}}function Kt(t,e=3){const n=Math.pow(10,e-1);return Math.round(t*n)/n}class Jt{}class Xt extends Jt{normalizePropertyName(t,e){return Et(t)}normalizeStyleValue(t,e,n,r){let s="";const i=n.toString().trim();if(Yt[e]&&0!==n&&"0"!==n)if("number"==typeof n)s="px";else{const e=n.match(/^[+-]?[\d\.]+([a-z]*)$/);e&&0==e[1].length&&r.push(`Please provide a CSS unit value for ${t}:${n}`)}return i+s}}const Yt=(()=>function(t){const e={};return t.forEach(t=>e[t]=!0),e}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();function te(t,e,n,r,s,i,o,a,l,c,u,h,d){return{type:0,element:t,triggerName:e,isRemovalTransition:s,fromState:n,fromStyles:i,toState:r,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:u,totalTime:h,errors:d}}const ee={};class ne{constructor(t,e,n){this._triggerName=t,this.ast=e,this._stateStyles=n}match(t,e,n,r){return function(t,e,n,r,s){return t.some(t=>t(e,n,r,s))}(this.ast.matchers,t,e,n,r)}buildStyles(t,e,n){const r=this._stateStyles["*"],s=this._stateStyles[t],i=r?r.buildStyles(e,n):{};return s?s.buildStyles(e,n):i}build(t,e,n,r,s,i,o,a,l,c){const u=[],h=this.ast.options&&this.ast.options.params||ee,d=this.buildStyles(n,o&&o.params||ee,u),f=a&&a.params||ee,p=this.buildStyles(r,f,u),m=new Set,g=new Map,b=new Map,y="void"===r,_={params:Object.assign(Object.assign({},h),f)},v=c?[]:Bt(t,e,this.ast.animation,s,i,d,p,_,l,u);let w=0;if(v.forEach(t=>{w=Math.max(t.duration+t.delay,w)}),u.length)return te(e,this._triggerName,n,r,y,d,p,[],[],g,b,w,u);v.forEach(t=>{const n=t.element,r=G(g,n,{});t.preStyleProps.forEach(t=>r[t]=!0);const s=G(b,n,{});t.postStyleProps.forEach(t=>s[t]=!0),n!==e&&m.add(n)});const S=St(m.values());return te(e,this._triggerName,n,r,y,d,p,v,S,g,b,w)}}class re{constructor(t,e){this.styles=t,this.defaultParams=e}buildStyles(t,e){const n={},r=dt(this.defaultParams);return Object.keys(t).forEach(e=>{const n=t[e];null!=n&&(r[e]=n)}),this.styles.styles.forEach(t=>{if("string"!=typeof t){const s=t;Object.keys(s).forEach(t=>{let i=s[t];i.length>1&&(i=wt(i,r,e)),n[t]=i})}}),n}}class se{constructor(t,e){this.name=t,this.ast=e,this.transitionFactories=[],this.states={},e.states.forEach(t=>{this.states[t.name]=new re(t.style,t.options&&t.options.params||{})}),ie(this.states,"true","1"),ie(this.states,"false","0"),e.transitions.forEach(e=>{this.transitionFactories.push(new ne(t,e,this.states))}),this.fallbackTransition=new ne(t,{type:1,animation:{type:2,steps:[],options:null},matchers:[(t,e)=>!0],options:null,queryCount:0,depCount:0},this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(t,e,n,r){return this.transitionFactories.find(s=>s.match(t,e,n,r))||null}matchStyles(t,e,n){return this.fallbackTransition.buildStyles(t,e,n)}}function ie(t,e,n){t.hasOwnProperty(e)?t.hasOwnProperty(n)||(t[n]=t[e]):t.hasOwnProperty(n)&&(t[e]=t[n])}const oe=new Ht;class ae{constructor(t,e,n){this.bodyNode=t,this._driver=e,this._normalizer=n,this._animations={},this._playersById={},this.players=[]}register(t,e){const n=[],r=Nt(this._driver,e,n);if(n.length)throw new Error(`Unable to build the animation due to the following errors: ${n.join("\n")}`);this._animations[t]=r}_buildPlayer(t,e,n){const r=t.element,s=B(0,this._normalizer,0,t.keyframes,e,n);return this._driver.animate(r,s,t.duration,t.delay,t.easing,[],!0)}create(t,e,n={}){const r=[],s=this._animations[t];let i;const o=new Map;if(s?(i=Bt(this._driver,e,s,"ng-enter","ng-leave",{},{},n,oe,r),i.forEach(t=>{const e=G(o,t.element,{});t.postStyleProps.forEach(t=>e[t]=null)})):(r.push("The requested animation doesn't exist or has already been destroyed"),i=[]),r.length)throw new Error(`Unable to create the animation due to the following errors: ${r.join("\n")}`);o.forEach((t,e)=>{Object.keys(t).forEach(n=>{t[n]=this._driver.computeStyle(e,n,"*")})});const a=z(i.map(t=>{const e=o.get(t.element);return this._buildPlayer(t,{},e)}));return this._playersById[t]=a,a.onDestroy(()=>this.destroy(t)),this.players.push(a),a}destroy(t){const e=this._getPlayer(t);e.destroy(),delete this._playersById[t];const n=this.players.indexOf(e);n>=0&&this.players.splice(n,1)}_getPlayer(t){const e=this._playersById[t];if(!e)throw new Error(`Unable to find the timeline player referenced by ${t}`);return e}listen(t,e,n,r){const s=W(e,"","","");return q(this._getPlayer(t),n,s,r),()=>{}}command(t,e,n,r){if("register"==n)return void this.register(t,r[0]);if("create"==n)return void this.create(t,e,r[0]||{});const s=this._getPlayer(t);switch(n){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(t)}}}const le=[],ce={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},ue={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};class he{constructor(t,e=""){this.namespaceId=e;const n=t&&t.hasOwnProperty("value");if(this.value=null!=(r=n?t.value:t)?r:null,n){const e=dt(t);delete e.value,this.options=e}else this.options={};var r;this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(t){const e=t.params;if(e){const t=this.options.params;Object.keys(e).forEach(n=>{null==t[n]&&(t[n]=e[n])})}}}const de=new he("void");class fe{constructor(t,e,n){this.id=t,this.hostElement=e,this._engine=n,this.players=[],this._triggers={},this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+t,ve(e,this._hostClassName)}listen(t,e,n,r){if(!this._triggers.hasOwnProperty(e))throw new Error(`Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`);if(null==n||0==n.length)throw new Error(`Unable to listen on the animation trigger "${e}" because the provided event is undefined!`);if("start"!=(s=n)&&"done"!=s)throw new Error(`The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`);var s;const i=G(this._elementListeners,t,[]),o={name:e,phase:n,callback:r};i.push(o);const a=G(this._engine.statesByElement,t,{});return a.hasOwnProperty(e)||(ve(t,"ng-trigger"),ve(t,"ng-trigger-"+e),a[e]=de),()=>{this._engine.afterFlush(()=>{const t=i.indexOf(o);t>=0&&i.splice(t,1),this._triggers[e]||delete a[e]})}}register(t,e){return!this._triggers[t]&&(this._triggers[t]=e,!0)}_getTrigger(t){const e=this._triggers[t];if(!e)throw new Error(`The provided animation trigger "${t}" has not been registered!`);return e}trigger(t,e,n,r=!0){const s=this._getTrigger(e),i=new me(this.id,e,t);let o=this._engine.statesByElement.get(t);o||(ve(t,"ng-trigger"),ve(t,"ng-trigger-"+e),this._engine.statesByElement.set(t,o={}));let a=o[e];const l=new he(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&a&&l.absorbOptions(a.options),o[e]=l,a||(a=de),"void"!==l.value&&a.value===l.value){if(!function(t,e){const n=Object.keys(t),r=Object.keys(e);if(n.length!=r.length)return!1;for(let s=0;s<n.length;s++){const r=n[s];if(!e.hasOwnProperty(r)||t[r]!==e[r])return!1}return!0}(a.params,l.params)){const e=[],n=s.matchStyles(a.value,a.params,e),r=s.matchStyles(l.value,l.params,e);e.length?this._engine.reportError(e):this._engine.afterFlush(()=>{bt(t,n),gt(t,r)})}return}const c=G(this._engine.playersByElement,t,[]);c.forEach(t=>{t.namespaceId==this.id&&t.triggerName==e&&t.queued&&t.destroy()});let u=s.matchTransition(a.value,l.value,t,l.params),h=!1;if(!u){if(!r)return;u=s.fallbackTransition,h=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:e,transition:u,fromState:a,toState:l,player:i,isFallbackTransition:h}),h||(ve(t,"ng-animate-queued"),i.onStart(()=>{we(t,"ng-animate-queued")})),i.onDone(()=>{let e=this.players.indexOf(i);e>=0&&this.players.splice(e,1);const n=this._engine.playersByElement.get(t);if(n){let t=n.indexOf(i);t>=0&&n.splice(t,1)}}),this.players.push(i),c.push(i),i}deregister(t){delete this._triggers[t],this._engine.statesByElement.forEach((e,n)=>{delete e[t]}),this._elementListeners.forEach((e,n)=>{this._elementListeners.set(n,e.filter(e=>e.name!=t))})}clearElementCache(t){this._engine.statesByElement.delete(t),this._elementListeners.delete(t);const e=this._engine.playersByElement.get(t);e&&(e.forEach(t=>t.destroy()),this._engine.playersByElement.delete(t))}_signalRemovalForInnerTriggers(t,e){const n=this._engine.driver.query(t,".ng-trigger",!0);n.forEach(t=>{if(t.__ng_removed)return;const n=this._engine.fetchNamespacesByElement(t);n.size?n.forEach(n=>n.triggerLeaveAnimation(t,e,!1,!0)):this.clearElementCache(t)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(t=>this.clearElementCache(t)))}triggerLeaveAnimation(t,e,n,r){const s=this._engine.statesByElement.get(t);if(s){const i=[];if(Object.keys(s).forEach(e=>{if(this._triggers[e]){const n=this.trigger(t,e,"void",r);n&&i.push(n)}}),i.length)return this._engine.markElementAsRemoved(this.id,t,!0,e),n&&z(i).onDone(()=>this._engine.processLeaveNode(t)),!0}return!1}prepareLeaveAnimationListeners(t){const e=this._elementListeners.get(t);if(e){const n=new Set;e.forEach(e=>{const r=e.name;if(n.has(r))return;n.add(r);const s=this._triggers[r].fallbackTransition,i=this._engine.statesByElement.get(t)[r]||de,o=new he("void"),a=new me(this.id,r,t);this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:r,transition:s,fromState:i,toState:o,player:a,isFallbackTransition:!0})})}}removeNode(t,e){const n=this._engine;if(t.childElementCount&&this._signalRemovalForInnerTriggers(t,e),this.triggerLeaveAnimation(t,e,!0))return;let r=!1;if(n.totalAnimations){const e=n.players.length?n.playersByQueriedElement.get(t):[];if(e&&e.length)r=!0;else{let e=t;for(;e=e.parentNode;)if(n.statesByElement.get(e)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(t),r)n.markElementAsRemoved(this.id,t,!1,e);else{const r=t.__ng_removed;r&&r!==ce||(n.afterFlush(()=>this.clearElementCache(t)),n.destroyInnerAnimations(t),n._onRemovalComplete(t,e))}}insertNode(t,e){ve(t,this._hostClassName)}drainQueuedTransitions(t){const e=[];return this._queue.forEach(n=>{const r=n.player;if(r.destroyed)return;const s=n.element,i=this._elementListeners.get(s);i&&i.forEach(e=>{if(e.name==n.triggerName){const r=W(s,n.triggerName,n.fromState.value,n.toState.value);r._data=t,q(n.player,e.phase,r,e.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(n)}),this._queue=[],e.sort((t,e)=>{const n=t.transition.ast.depCount,r=e.transition.ast.depCount;return 0==n||0==r?n-r:this._engine.driver.containsElement(t.element,e.element)?1:-1})}destroy(t){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,t)}elementContainsData(t){let e=!1;return this._elementListeners.has(t)&&(e=!0),e=!!this._queue.find(e=>e.element===t)||e,e}}class pe{constructor(t,e,n){this.bodyNode=t,this.driver=e,this._normalizer=n,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(t,e)=>{}}_onRemovalComplete(t,e){this.onRemovalComplete(t,e)}get queuedPlayers(){const t=[];return this._namespaceList.forEach(e=>{e.players.forEach(e=>{e.queued&&t.push(e)})}),t}createNamespace(t,e){const n=new fe(t,e,this);return e.parentNode?this._balanceNamespaceList(n,e):(this.newHostElements.set(e,n),this.collectEnterElement(e)),this._namespaceLookup[t]=n}_balanceNamespaceList(t,e){const n=this._namespaceList.length-1;if(n>=0){let r=!1;for(let s=n;s>=0;s--)if(this.driver.containsElement(this._namespaceList[s].hostElement,e)){this._namespaceList.splice(s+1,0,t),r=!0;break}r||this._namespaceList.splice(0,0,t)}else this._namespaceList.push(t);return this.namespacesByHostElement.set(e,t),t}register(t,e){let n=this._namespaceLookup[t];return n||(n=this.createNamespace(t,e)),n}registerTrigger(t,e,n){let r=this._namespaceLookup[t];r&&r.register(e,n)&&this.totalAnimations++}destroy(t,e){if(!t)return;const n=this._fetchNamespace(t);this.afterFlush(()=>{this.namespacesByHostElement.delete(n.hostElement),delete this._namespaceLookup[t];const e=this._namespaceList.indexOf(n);e>=0&&this._namespaceList.splice(e,1)}),this.afterFlushAnimationsDone(()=>n.destroy(e))}_fetchNamespace(t){return this._namespaceLookup[t]}fetchNamespacesByElement(t){const e=new Set,n=this.statesByElement.get(t);if(n){const t=Object.keys(n);for(let r=0;r<t.length;r++){const s=n[t[r]].namespaceId;if(s){const t=this._fetchNamespace(s);t&&e.add(t)}}}return e}trigger(t,e,n,r){if(ge(e)){const s=this._fetchNamespace(t);if(s)return s.trigger(e,n,r),!0}return!1}insertNode(t,e,n,r){if(!ge(e))return;const s=e.__ng_removed;if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;const t=this.collectedLeaveElements.indexOf(e);t>=0&&this.collectedLeaveElements.splice(t,1)}if(t){const r=this._fetchNamespace(t);r&&r.insertNode(e,n)}r&&this.collectEnterElement(e)}collectEnterElement(t){this.collectedEnterElements.push(t)}markElementAsDisabled(t,e){e?this.disabledNodes.has(t)||(this.disabledNodes.add(t),ve(t,"ng-animate-disabled")):this.disabledNodes.has(t)&&(this.disabledNodes.delete(t),we(t,"ng-animate-disabled"))}removeNode(t,e,n,r){if(ge(e)){const s=t?this._fetchNamespace(t):null;if(s?s.removeNode(e,r):this.markElementAsRemoved(t,e,!1,r),n){const n=this.namespacesByHostElement.get(e);n&&n.id!==t&&n.removeNode(e,r)}}else this._onRemovalComplete(e,r)}markElementAsRemoved(t,e,n,r){this.collectedLeaveElements.push(e),e.__ng_removed={namespaceId:t,setForRemoval:r,hasAnimation:n,removedBeforeQueried:!1}}listen(t,e,n,r,s){return ge(e)?this._fetchNamespace(t).listen(e,n,r,s):()=>{}}_buildInstruction(t,e,n,r,s){return t.transition.build(this.driver,t.element,t.fromState.value,t.toState.value,n,r,t.fromState.options,t.toState.options,e,s)}destroyInnerAnimations(t){let e=this.driver.query(t,".ng-trigger",!0);e.forEach(t=>this.destroyActiveAnimationsForElement(t)),0!=this.playersByQueriedElement.size&&(e=this.driver.query(t,".ng-animating",!0),e.forEach(t=>this.finishActiveQueriedAnimationOnElement(t)))}destroyActiveAnimationsForElement(t){const e=this.playersByElement.get(t);e&&e.forEach(t=>{t.queued?t.markedForDestroy=!0:t.destroy()})}finishActiveQueriedAnimationOnElement(t){const e=this.playersByQueriedElement.get(t);e&&e.forEach(t=>t.finish())}whenRenderingDone(){return new Promise(t=>{if(this.players.length)return z(this.players).onDone(()=>t());t()})}processLeaveNode(t){const e=t.__ng_removed;if(e&&e.setForRemoval){if(t.__ng_removed=ce,e.namespaceId){this.destroyInnerAnimations(t);const n=this._fetchNamespace(e.namespaceId);n&&n.clearElementCache(t)}this._onRemovalComplete(t,e.setForRemoval)}this.driver.matchesElement(t,".ng-animate-disabled")&&this.markElementAsDisabled(t,!1),this.driver.query(t,".ng-animate-disabled",!0).forEach(t=>{this.markElementAsDisabled(t,!1)})}flush(t=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((t,e)=>this._balanceNamespaceList(t,e)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++)ve(this.collectedEnterElements[n],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const n=[];try{e=this._flushAnimations(n,t)}finally{for(let t=0;t<n.length;t++)n[t]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++)this.processLeaveNode(this.collectedLeaveElements[n]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(t=>t()),this._flushFns=[],this._whenQuietFns.length){const t=this._whenQuietFns;this._whenQuietFns=[],e.length?z(e).onDone(()=>{t.forEach(t=>t())}):t.forEach(t=>t())}}reportError(t){throw new Error(`Unable to process animations due to the following failed trigger transitions\n ${t.join("\n")}`)}_flushAnimations(t,e){const n=new Ht,r=[],s=new Map,i=[],o=new Map,a=new Map,l=new Map,c=new Set;this.disabledNodes.forEach(t=>{c.add(t);const e=this.driver.query(t,".ng-animate-queued",!0);for(let n=0;n<e.length;n++)c.add(e[n])});const u=this.bodyNode,h=Array.from(this.statesByElement.keys()),d=_e(h,this.collectedEnterElements),f=new Map;let p=0;d.forEach((t,e)=>{const n="ng-enter"+p++;f.set(e,n),t.forEach(t=>ve(t,n))});const m=[],g=new Set,b=new Set;for(let I=0;I<this.collectedLeaveElements.length;I++){const t=this.collectedLeaveElements[I],e=t.__ng_removed;e&&e.setForRemoval&&(m.push(t),g.add(t),e.hasAnimation?this.driver.query(t,".ng-star-inserted",!0).forEach(t=>g.add(t)):b.add(t))}const y=new Map,_=_e(h,Array.from(g));_.forEach((t,e)=>{const n="ng-leave"+p++;y.set(e,n),t.forEach(t=>ve(t,n))}),t.push(()=>{d.forEach((t,e)=>{const n=f.get(e);t.forEach(t=>we(t,n))}),_.forEach((t,e)=>{const n=y.get(e);t.forEach(t=>we(t,n))}),m.forEach(t=>{this.processLeaveNode(t)})});const v=[],w=[];for(let I=this._namespaceList.length-1;I>=0;I--)this._namespaceList[I].drainQueuedTransitions(e).forEach(t=>{const e=t.player,s=t.element;if(v.push(e),this.collectedEnterElements.length){const t=s.__ng_removed;if(t&&t.setForMove)return void e.destroy()}const c=!u||!this.driver.containsElement(u,s),h=y.get(s),d=f.get(s),p=this._buildInstruction(t,n,d,h,c);if(!p.errors||!p.errors.length)return c||t.isFallbackTransition?(e.onStart(()=>bt(s,p.fromStyles)),e.onDestroy(()=>gt(s,p.toStyles)),void r.push(e)):(p.timelines.forEach(t=>t.stretchStartingKeyframe=!0),n.append(s,p.timelines),i.push({instruction:p,player:e,element:s}),p.queriedElements.forEach(t=>G(o,t,[]).push(e)),p.preStyleProps.forEach((t,e)=>{const n=Object.keys(t);if(n.length){let t=a.get(e);t||a.set(e,t=new Set),n.forEach(e=>t.add(e))}}),void p.postStyleProps.forEach((t,e)=>{const n=Object.keys(t);let r=l.get(e);r||l.set(e,r=new Set),n.forEach(t=>r.add(t))}));w.push(p)});if(w.length){const t=[];w.forEach(e=>{t.push(`@${e.triggerName} has failed due to:\n`),e.errors.forEach(e=>t.push(`- ${e}\n`))}),v.forEach(t=>t.destroy()),this.reportError(t)}const S=new Map,C=new Map;i.forEach(t=>{const e=t.element;n.has(e)&&(C.set(e,e),this._beforeAnimationBuild(t.player.namespaceId,t.instruction,S))}),r.forEach(t=>{const e=t.element;this._getPreviousPlayers(e,!1,t.namespaceId,t.triggerName,null).forEach(t=>{G(S,e,[]).push(t),t.destroy()})});const E=m.filter(t=>Ce(t,a,l)),x=new Map;ye(x,this.driver,b,l,"*").forEach(t=>{Ce(t,a,l)&&E.push(t)});const k=new Map;d.forEach((t,e)=>{ye(k,this.driver,new Set(t),a,"!")}),E.forEach(t=>{const e=x.get(t),n=k.get(t);x.set(t,Object.assign(Object.assign({},e),n))});const O=[],T=[],D={};i.forEach(t=>{const{element:e,player:i,instruction:o}=t;if(n.has(e)){if(c.has(e))return i.onDestroy(()=>gt(e,o.toStyles)),i.disabled=!0,i.overrideTotalTime(o.totalTime),void r.push(i);let t=D;if(C.size>1){let n=e;const r=[];for(;n=n.parentNode;){const e=C.get(n);if(e){t=e;break}r.push(n)}r.forEach(e=>C.set(e,t))}const n=this._buildAnimation(i.namespaceId,o,S,s,k,x);if(i.setRealPlayer(n),t===D)O.push(i);else{const e=this.playersByElement.get(t);e&&e.length&&(i.parentPlayer=z(e)),r.push(i)}}else bt(e,o.fromStyles),i.onDestroy(()=>gt(e,o.toStyles)),T.push(i),c.has(e)&&r.push(i)}),T.forEach(t=>{const e=s.get(t.element);if(e&&e.length){const n=z(e);t.setRealPlayer(n)}}),r.forEach(t=>{t.parentPlayer?t.syncPlayerEvents(t.parentPlayer):t.destroy()});for(let I=0;I<m.length;I++){const t=m[I],e=t.__ng_removed;if(we(t,"ng-leave"),e&&e.hasAnimation)continue;let n=[];if(o.size){let e=o.get(t);e&&e.length&&n.push(...e);let r=this.driver.query(t,".ng-animating",!0);for(let t=0;t<r.length;t++){let e=o.get(r[t]);e&&e.length&&n.push(...e)}}const r=n.filter(t=>!t.destroyed);r.length?Se(this,t,r):this.processLeaveNode(t)}return m.length=0,O.forEach(t=>{this.players.push(t),t.onDone(()=>{t.destroy();const e=this.players.indexOf(t);this.players.splice(e,1)}),t.play()}),O}elementContainsData(t,e){let n=!1;const r=e.__ng_removed;return r&&r.setForRemoval&&(n=!0),this.playersByElement.has(e)&&(n=!0),this.playersByQueriedElement.has(e)&&(n=!0),this.statesByElement.has(e)&&(n=!0),this._fetchNamespace(t).elementContainsData(e)||n}afterFlush(t){this._flushFns.push(t)}afterFlushAnimationsDone(t){this._whenQuietFns.push(t)}_getPreviousPlayers(t,e,n,r,s){let i=[];if(e){const e=this.playersByQueriedElement.get(t);e&&(i=e)}else{const e=this.playersByElement.get(t);if(e){const t=!s||"void"==s;e.forEach(e=>{e.queued||(t||e.triggerName==r)&&i.push(e)})}}return(n||r)&&(i=i.filter(t=>!(n&&n!=t.namespaceId||r&&r!=t.triggerName))),i}_beforeAnimationBuild(t,e,n){const r=e.element,s=e.isRemovalTransition?void 0:t,i=e.isRemovalTransition?void 0:e.triggerName;for(const o of e.timelines){const t=o.element,a=t!==r,l=G(n,t,[]);this._getPreviousPlayers(t,a,s,i,e.toState).forEach(t=>{const e=t.getRealPlayer();e.beforeDestroy&&e.beforeDestroy(),t.destroy(),l.push(t)})}bt(r,e.fromStyles)}_buildAnimation(t,e,n,r,s,i){const o=e.triggerName,a=e.element,l=[],c=new Set,u=new Set,h=e.timelines.map(e=>{const h=e.element;c.add(h);const d=h.__ng_removed;if(d&&d.removedBeforeQueried)return new U(e.duration,e.delay);const f=h!==a,p=function(t){const e=[];return function t(e,n){for(let r=0;r<e.length;r++){const s=e[r];s instanceof H?t(s.players,n):n.push(s)}}(t,e),e}((n.get(h)||le).map(t=>t.getRealPlayer())).filter(t=>!!t.element&&t.element===h),m=s.get(h),g=i.get(h),b=B(0,this._normalizer,0,e.keyframes,m,g),y=this._buildPlayer(e,b,p);if(e.subTimeline&&r&&u.add(h),f){const e=new me(t,o,h);e.setRealPlayer(y),l.push(e)}return y});l.forEach(t=>{G(this.playersByQueriedElement,t.element,[]).push(t),t.onDone(()=>function(t,e,n){let r;if(t instanceof Map){if(r=t.get(e),r){if(r.length){const t=r.indexOf(n);r.splice(t,1)}0==r.length&&t.delete(e)}}else if(r=t[e],r){if(r.length){const t=r.indexOf(n);r.splice(t,1)}0==r.length&&delete t[e]}return r}(this.playersByQueriedElement,t.element,t))}),c.forEach(t=>ve(t,"ng-animating"));const d=z(h);return d.onDestroy(()=>{c.forEach(t=>we(t,"ng-animating")),gt(a,e.toStyles)}),u.forEach(t=>{G(r,t,[]).push(d)}),d}_buildPlayer(t,e,n){return e.length>0?this.driver.animate(t.element,e,t.duration,t.delay,t.easing,n):new U(t.duration,t.delay)}}class me{constructor(t,e,n){this.namespaceId=t,this.triggerName=e,this.element=n,this._player=new U,this._containsRealPlayer=!1,this._queuedCallbacks={},this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(t){this._containsRealPlayer||(this._player=t,Object.keys(this._queuedCallbacks).forEach(e=>{this._queuedCallbacks[e].forEach(n=>q(t,e,void 0,n))}),this._queuedCallbacks={},this._containsRealPlayer=!0,this.overrideTotalTime(t.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(t){this.totalTime=t}syncPlayerEvents(t){const e=this._player;e.triggerCallback&&t.onStart(()=>e.triggerCallback("start")),t.onDone(()=>this.finish()),t.onDestroy(()=>this.destroy())}_queueEvent(t,e){G(this._queuedCallbacks,t,[]).push(e)}onDone(t){this.queued&&this._queueEvent("done",t),this._player.onDone(t)}onStart(t){this.queued&&this._queueEvent("start",t),this._player.onStart(t)}onDestroy(t){this.queued&&this._queueEvent("destroy",t),this._player.onDestroy(t)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(t){this.queued||this._player.setPosition(t)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(t){const e=this._player;e.triggerCallback&&e.triggerCallback(t)}}function ge(t){return t&&1===t.nodeType}function be(t,e){const n=t.style.display;return t.style.display=null!=e?e:"none",n}function ye(t,e,n,r,s){const i=[];n.forEach(t=>i.push(be(t)));const o=[];r.forEach((n,r)=>{const i={};n.forEach(t=>{const n=i[t]=e.computeStyle(r,t,s);n&&0!=n.length||(r.__ng_removed=ue,o.push(r))}),t.set(r,i)});let a=0;return n.forEach(t=>be(t,i[a++])),o}function _e(t,e){const n=new Map;if(t.forEach(t=>n.set(t,[])),0==e.length)return n;const r=new Set(e),s=new Map;return e.forEach(t=>{const e=function t(e){if(!e)return 1;let i=s.get(e);if(i)return i;const o=e.parentNode;return i=n.has(o)?o:r.has(o)?1:t(o),s.set(e,i),i}(t);1!==e&&n.get(e).push(t)}),n}function ve(t,e){if(t.classList)t.classList.add(e);else{let n=t.$$classes;n||(n=t.$$classes={}),n[e]=!0}}function we(t,e){if(t.classList)t.classList.remove(e);else{let n=t.$$classes;n&&delete n[e]}}function Se(t,e,n){z(n).onDone(()=>t.processLeaveNode(e))}function Ce(t,e,n){const r=n.get(t);if(!r)return!1;let s=e.get(t);return s?r.forEach(t=>s.add(t)):e.set(t,r),n.delete(t),!0}class Ee{constructor(t,e,n){this.bodyNode=t,this._driver=e,this._triggerCache={},this.onRemovalComplete=(t,e)=>{},this._transitionEngine=new pe(t,e,n),this._timelineEngine=new ae(t,e,n),this._transitionEngine.onRemovalComplete=(t,e)=>this.onRemovalComplete(t,e)}registerTrigger(t,e,n,r,s){const i=t+"-"+r;let o=this._triggerCache[i];if(!o){const t=[],e=Nt(this._driver,s,t);if(t.length)throw new Error(`The animation trigger "${r}" has failed to build due to the following errors:\n - ${t.join("\n - ")}`);o=function(t,e){return new se(t,e)}(r,e),this._triggerCache[i]=o}this._transitionEngine.registerTrigger(e,r,o)}register(t,e){this._transitionEngine.register(t,e)}destroy(t,e){this._transitionEngine.destroy(t,e)}onInsert(t,e,n,r){this._transitionEngine.insertNode(t,e,n,r)}onRemove(t,e,n,r){this._transitionEngine.removeNode(t,e,r||!1,n)}disableAnimations(t,e){this._transitionEngine.markElementAsDisabled(t,e)}process(t,e,n,r){if("@"==n.charAt(0)){const[t,s]=Z(n);this._timelineEngine.command(t,e,s,r)}else this._transitionEngine.trigger(t,e,n,r)}listen(t,e,n,r,s){if("@"==n.charAt(0)){const[t,r]=Z(n);return this._timelineEngine.listen(t,e,r,s)}return this._transitionEngine.listen(t,e,n,r,s)}flush(t=-1){this._transitionEngine.flush(t)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}function xe(t,e){let n=null,r=null;return Array.isArray(e)&&e.length?(n=Oe(e[0]),e.length>1&&(r=Oe(e[e.length-1]))):e&&(n=Oe(e)),n||r?new ke(t,n,r):null}let ke=(()=>{class t{constructor(e,n,r){this._element=e,this._startStyles=n,this._endStyles=r,this._state=0;let s=t.initialStylesByElement.get(e);s||t.initialStylesByElement.set(e,s={}),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&gt(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(gt(this._element,this._initialStyles),this._endStyles&&(gt(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(t.initialStylesByElement.delete(this._element),this._startStyles&&(bt(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(bt(this._element,this._endStyles),this._endStyles=null),gt(this._element,this._initialStyles),this._state=3)}}return t.initialStylesByElement=new WeakMap,t})();function Oe(t){let e=null;const n=Object.keys(t);for(let r=0;r<n.length;r++){const s=n[r];Te(s)&&(e=e||{},e[s]=t[s])}return e}function Te(t){return"display"===t||"position"===t}class De{constructor(t,e,n,r,s,i,o){this._element=t,this._name=e,this._duration=n,this._delay=r,this._easing=s,this._fillMode=i,this._onDoneFn=o,this._finished=!1,this._destroyed=!1,this._startTime=0,this._position=0,this._eventFn=t=>this._handleCallback(t)}apply(){!function(t,e){const n=Pe(t,"").trim();n.length&&(function(t,e){let n=0;for(let r=0;r<t.length;r++)","===t.charAt(r)&&n++}(n),e=`${n}, ${e}`),Ne(t,"",e)}(this._element,`${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`),je(this._element,this._eventFn,!1),this._startTime=Date.now()}pause(){Ie(this._element,this._name,"paused")}resume(){Ie(this._element,this._name,"running")}setPosition(t){const e=Ae(this._element,this._name);this._position=t*this._duration,Ne(this._element,"Delay",`-${this._position}ms`,e)}getPosition(){return this._position}_handleCallback(t){const e=t._ngTestManualTimestamp||Date.now(),n=1e3*parseFloat(t.elapsedTime.toFixed(3));t.animationName==this._name&&Math.max(e-this._startTime,0)>=this._delay&&n>=this._duration&&this.finish()}finish(){this._finished||(this._finished=!0,this._onDoneFn(),je(this._element,this._eventFn,!0))}destroy(){this._destroyed||(this._destroyed=!0,this.finish(),function(t,e){const n=Pe(t,"").split(","),r=Re(n,e);r>=0&&(n.splice(r,1),Ne(t,"",n.join(",")))}(this._element,this._name))}}function Ie(t,e,n){Ne(t,"PlayState",n,Ae(t,e))}function Ae(t,e){const n=Pe(t,"");return n.indexOf(",")>0?Re(n.split(","),e):Re([n],e)}function Re(t,e){for(let n=0;n<t.length;n++)if(t[n].indexOf(e)>=0)return n;return-1}function je(t,e,n){n?t.removeEventListener("animationend",e):t.addEventListener("animationend",e)}function Ne(t,e,n,r){const s="animation"+e;if(null!=r){const e=t.style[s];if(e.length){const t=e.split(",");t[r]=n,n=t.join(",")}}t.style[s]=n}function Pe(t,e){return t.style["animation"+e]}class Me{constructor(t,e,n,r,s,i,o,a){this.element=t,this.keyframes=e,this.animationName=n,this._duration=r,this._delay=s,this._finalStyles=o,this._specialStyles=a,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this.currentSnapshot={},this._state=0,this.easing=i||"linear",this.totalTime=r+s,this._buildStyler()}onStart(t){this._onStartFns.push(t)}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}destroy(){this.init(),this._state>=4||(this._state=4,this._styler.destroy(),this._flushStartFns(),this._flushDoneFns(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}_flushDoneFns(){this._onDoneFns.forEach(t=>t()),this._onDoneFns=[]}_flushStartFns(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}finish(){this.init(),this._state>=3||(this._state=3,this._styler.finish(),this._flushStartFns(),this._specialStyles&&this._specialStyles.finish(),this._flushDoneFns())}setPosition(t){this._styler.setPosition(t)}getPosition(){return this._styler.getPosition()}hasStarted(){return this._state>=2}init(){this._state>=1||(this._state=1,this._styler.apply(),this._delay&&this._styler.pause())}play(){this.init(),this.hasStarted()||(this._flushStartFns(),this._state=2,this._specialStyles&&this._specialStyles.start()),this._styler.resume()}pause(){this.init(),this._styler.pause()}restart(){this.reset(),this.play()}reset(){this._styler.destroy(),this._buildStyler(),this._styler.apply()}_buildStyler(){this._styler=new De(this.element,this.animationName,this._duration,this._delay,this.easing,"forwards",()=>this.finish())}triggerCallback(t){const e="start"==t?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}beforeDestroy(){this.init();const t={};if(this.hasStarted()){const e=this._state>=3;Object.keys(this._finalStyles).forEach(n=>{"offset"!=n&&(t[n]=e?this._finalStyles[n]:Tt(this.element,n))})}this.currentSnapshot=t}}class Ve extends U{constructor(t,e){super(),this.element=t,this._startingStyles={},this.__initialized=!1,this._styles=ot(e)}init(){!this.__initialized&&this._startingStyles&&(this.__initialized=!0,Object.keys(this._styles).forEach(t=>{this._startingStyles[t]=this.element.style[t]}),super.init())}play(){this._startingStyles&&(this.init(),Object.keys(this._styles).forEach(t=>this.element.style.setProperty(t,this._styles[t])),super.play())}destroy(){this._startingStyles&&(Object.keys(this._startingStyles).forEach(t=>{const e=this._startingStyles[t];e?this.element.style.setProperty(t,e):this.element.style.removeProperty(t)}),this._startingStyles=null,super.destroy())}}class Fe{constructor(){this._count=0,this._head=document.querySelector("head"),this._warningIssued=!1}validateStyleProperty(t){return nt(t)}matchesElement(t,e){return rt(t,e)}containsElement(t,e){return st(t,e)}query(t,e,n){return it(t,e,n)}computeStyle(t,e,n){return window.getComputedStyle(t)[e]}buildKeyframeElement(t,e,n){n=n.map(t=>ot(t));let r=`@keyframes ${e} {\n`,s="";n.forEach(t=>{s=" ";const e=parseFloat(t.offset);r+=`${s}${100*e}% {\n`,s+=" ",Object.keys(t).forEach(e=>{const n=t[e];switch(e){case"offset":return;case"easing":return void(n&&(r+=`${s}animation-timing-function: ${n};\n`));default:return void(r+=`${s}${e}: ${n};\n`)}}),r+=`${s}}\n`}),r+="}\n";const i=document.createElement("style");return i.innerHTML=r,i}animate(t,e,n,r,s,i=[],o){o&&this._notifyFaultyScrubber();const a=i.filter(t=>t instanceof Me),l={};xt(n,r)&&a.forEach(t=>{let e=t.currentSnapshot;Object.keys(e).forEach(t=>l[t]=e[t])});const c=function(t){let e={};return t&&(Array.isArray(t)?t:[t]).forEach(t=>{Object.keys(t).forEach(n=>{"offset"!=n&&"easing"!=n&&(e[n]=t[n])})}),e}(e=kt(t,e,l));if(0==n)return new Ve(t,c);const u=`gen_css_kf_${this._count++}`,h=this.buildKeyframeElement(t,u,e);document.querySelector("head").appendChild(h);const d=xe(t,e),f=new Me(t,e,u,n,r,s,c,d);return f.onDestroy(()=>{var t;(t=h).parentNode.removeChild(t)}),f}_notifyFaultyScrubber(){this._warningIssued||(console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n","  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."),this._warningIssued=!0)}}class Le{constructor(t,e,n,r){this.element=t,this.keyframes=e,this.options=n,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot={},this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const t=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,t,this.options),this._finalKeyframe=t.length?t[t.length-1]:{},this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_triggerWebAnimation(t,e,n){return t.animate(e,n)}onStart(t){this._onStartFns.push(t)}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}setPosition(t){this.domPlayer.currentTime=t*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const t={};this.hasStarted()&&Object.keys(this._finalKeyframe).forEach(e=>{"offset"!=e&&(t[e]=this._finished?this._finalKeyframe[e]:Tt(this.element,e))}),this.currentSnapshot=t}triggerCallback(t){const e="start"==t?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}}class Ue{constructor(){this._isNativeImpl=/\{\s*\[native\s+code\]\s*\}/.test(He().toString()),this._cssKeyframesDriver=new Fe}validateStyleProperty(t){return nt(t)}matchesElement(t,e){return rt(t,e)}containsElement(t,e){return st(t,e)}query(t,e,n){return it(t,e,n)}computeStyle(t,e,n){return window.getComputedStyle(t)[e]}overrideWebAnimationsSupport(t){this._isNativeImpl=t}animate(t,e,n,r,s,i=[],o){if(!o&&!this._isNativeImpl)return this._cssKeyframesDriver.animate(t,e,n,r,s,i);const a={duration:n,delay:r,fill:0==r?"both":"forwards"};s&&(a.easing=s);const l={},c=i.filter(t=>t instanceof Le);xt(n,r)&&c.forEach(t=>{let e=t.currentSnapshot;Object.keys(e).forEach(t=>l[t]=e[t])});const u=xe(t,e=kt(t,e=e.map(t=>ft(t,!1)),l));return new Le(t,e,a,u)}}function He(){return"undefined"!=typeof window&&void 0!==window.document&&Element.prototype.animate||{}}let $e=(()=>{class t extends M{constructor(t,e){super(),this._nextAnimationId=0,this._renderer=t.createRenderer(e.body,{id:"0",encapsulation:r.O.None,styles:[],data:{animation:[]}})}build(t){const e=this._nextAnimationId.toString();this._nextAnimationId++;const n=Array.isArray(t)?V(t):t;return qe(this._renderer,null,e,"register",[n]),new ze(e,this._renderer)}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(r.E),r.Zb(i.c))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();class ze extends class{}{constructor(t,e){super(),this._id=t,this._renderer=e}create(t,e){return new Be(this._id,t,e||{},this._renderer)}}class Be{constructor(t,e,n,r){this.id=t,this.element=e,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(t,e){return this._renderer.listen(this.element,`@@${this.id}:${t}`,e)}_command(t,...e){return qe(this._renderer,this.element,this.id,t,e)}onDone(t){this._listen("done",t)}onStart(t){this._listen("start",t)}onDestroy(t){this._listen("destroy",t)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset")}setPosition(t){this._command("setPosition",t)}getPosition(){return 0}}function qe(t,e,n,r,s){return t.setProperty(e,`@@${n}:${r}`,s)}let Qe=(()=>{class t{constructor(t,e,n){this.delegate=t,this.engine=e,this._zone=n,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),e.onRemovalComplete=(t,e)=>{e&&e.parentNode(t)&&e.removeChild(t.parentNode,t)}}createRenderer(t,e){const n=this.delegate.createRenderer(t,e);if(!(t&&e&&e.data&&e.data.animation)){let t=this._rendererCache.get(n);return t||(t=new We("",n,this.engine),this._rendererCache.set(n,t)),t}const r=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,t);const i=e=>{Array.isArray(e)?e.forEach(i):this.engine.registerTrigger(r,s,t,e.name,e)};return e.data.animation.forEach(i),new Ge(this,s,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(t,e,n){t>=0&&t<this._microtaskId?this._zone.run(()=>e(n)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(t=>{const[e,n]=t;e(n)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([e,n]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(r.E),r.Zb(Ee),r.Zb(r.z))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();class We{constructor(t,e,n){this.namespaceId=t,this.delegate=e,this.engine=n,this.destroyNode=this.delegate.destroyNode?t=>e.destroyNode(t):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}appendChild(t,e){this.delegate.appendChild(t,e),this.engine.onInsert(this.namespaceId,e,t,!1)}insertBefore(t,e,n){this.delegate.insertBefore(t,e,n),this.engine.onInsert(this.namespaceId,e,t,!0)}removeChild(t,e,n){this.engine.onRemove(this.namespaceId,e,this.delegate,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,r){this.delegate.setAttribute(t,e,n,r)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,r){this.delegate.setStyle(t,e,n,r)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){"@"==e.charAt(0)&&"@.disabled"==e?this.disableAnimations(t,!!n):this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.delegate.listen(t,e,n)}disableAnimations(t,e){this.engine.disableAnimations(t,e)}}class Ge extends We{constructor(t,e,n,r){super(e,n,r),this.factory=t,this.namespaceId=e}setProperty(t,e,n){"@"==e.charAt(0)?"."==e.charAt(1)&&"@.disabled"==e?this.disableAnimations(t,n=void 0===n||!!n):this.engine.process(this.namespaceId,t,e.substr(1),n):this.delegate.setProperty(t,e,n)}listen(t,e,n){if("@"==e.charAt(0)){const r=function(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}(t);let s=e.substr(1),i="";return"@"!=s.charAt(0)&&([s,i]=function(t){const e=t.indexOf(".");return[t.substring(0,e),t.substr(e+1)]}(s)),this.engine.listen(this.namespaceId,r,s,i,t=>{this.factory.scheduleListenerCallback(t._data||-1,n,t)})}return this.delegate.listen(t,e,n)}}let Ze=(()=>{class t extends Ee{constructor(t,e,n){super(t.body,e,n)}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(i.c),r.Zb(lt),r.Zb(Jt))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})();const Ke=[{provide:lt,useFactory:function(){return"function"==typeof He()?new Ue:new Fe}},{provide:new r.q("AnimationModuleType"),useValue:"BrowserAnimations"},{provide:M,useClass:$e},{provide:Jt,useFactory:function(){return new Xt}},{provide:Ee,useClass:Ze},{provide:r.E,useFactory:function(t,e,n){return new Qe(t,e,n)},deps:[S,Ee,r.z]}];let Je=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},providers:Ke,imports:[P]}),t})();var Xe=n("tyNb");let Ye=(()=>{class t{constructor(){this.currentYear=(new Date).getFullYear(),this.version=s.a.version}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-public-home"]],decls:15,vars:2,consts:[[1,"page-container"],[1,"content-wrap"],[1,"logo"],["src","assets/topnav-logo.png","alt","Au Bank Admin"],[1,"row"],[1,"col-2"],[1,"col-8"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Rb(3,"a"),r.Nb(4,"img",3),r.Qb(),r.Qb(),r.Nb(5,"router-outlet"),r.Qb(),r.Rb(6,"footer"),r.Rb(7,"div",4),r.Nb(8,"div",5),r.Rb(9,"div",6),r.Rb(10,"h6"),r.Cc(11),r.Qb(),r.Qb(),r.Rb(12,"div",5),r.Rb(13,"h6"),r.Cc(14),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.zb(11),r.Ec(" Copyright @",e.currentYear," Au Bank Disclaimer Privacy Policy Code of Commitment Responsible Disclosure Policy "),r.zb(3),r.Ec("version ",e.version,""))},directives:[Xe.f],styles:[""]}),t})();var tn=n("y1cd"),en=n("kmKP");let nn=(()=>{class t{constructor(t){this.userService=t}getMenuItems(){return this.userService.currentMenuValue}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(en.a))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var rn=n("1kSV"),sn=n("mAmA");const on=function(t){return[t]},an=function(){return{exact:!0}};function ln(t,e){if(1&t&&(r.Rb(0,"a",3),r.Cc(1),r.Qb()),2&t){const t=r.fc().$implicit;r.lc("routerLink",r.pc(3,on,t.routerLink))("routerLinkActiveOptions",r.oc(5,an)),r.zb(1),r.Dc(t.title)}}function cn(t,e){if(1&t&&(r.Rb(0,"div"),r.Ac(1,ln,2,6,"a",2),r.Qb()),2&t){const t=e.$implicit;r.zb(1),r.lc("ngIf",!t.hasSubMenu)}}let un=(()=>{class t{constructor(t,e){this.menuService=t,this.router=e}ngOnInit(){this.parentMenu=this.menuItems.filter(t=>t.parentId===this.menuParentId)}onClick(t){console.log(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(nn),r.Mb(Xe.b))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-vertical-menu"]],inputs:{menuItems:"menuItems",menuParentId:"menuParentId"},decls:2,vars:1,consts:[[1,"sidenav","shadow"],[4,"ngFor","ngForOf"],["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions",4,"ngIf"],["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Ac(1,cn,2,1,"div",1),r.Qb()),2&t&&(r.zb(1),r.lc("ngForOf",e.parentMenu))},directives:[i.j,i.k,Xe.d,Xe.c],styles:[""],encapsulation:2}),t})(),hn=(()=>{class t{constructor(t,e,n,r,s){this.menuService=t,this.userService=e,this.ngbModal=n,this.toasterService=r,this.router=s,this.confirmButtonText=tn.b.CONFIRM_BUTTON_TEXT,this.cancelButtonText=tn.b.CANCEL_BUTTON_TEXT}ngOnInit(){this.menuItems=this.menuService.getMenuItems(),this.userName=this.userService.currentUserValue.userName}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(nn),r.Mb(en.a),r.Mb(rn.c),r.Mb(sn.a),r.Mb(Xe.b))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-sidenav"]],decls:1,vars:2,consts:[[3,"menuItems","menuParentId"]],template:function(t,e){1&t&&r.Nb(0,"app-vertical-menu",0),2&t&&r.lc("menuItems",e.menuItems)("menuParentId",0)},directives:[un],styles:[""],encapsulation:2}),t})();function dn(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div",11),r.Rb(1,"h4",12),r.Cc(2," Do you want to logout? "),r.Qb(),r.Rb(3,"button",13),r.dc("click",(function(){return e.$implicit.dismiss()})),r.Rb(4,"span",14),r.Cc(5,"\xd7"),r.Qb(),r.Qb(),r.Qb(),r.Rb(6,"div",15),r.Rb(7,"span",16),r.Cc(8,"Any information associated with your profile will not be deleted."),r.Qb(),r.Qb(),r.Rb(9,"div",17),r.Rb(10,"button",18),r.dc("click",(function(){return r.uc(t),r.fc().logout()})),r.Cc(11),r.Qb(),r.Rb(12,"button",19),r.dc("click",(function(){return e.$implicit.close()})),r.Cc(13),r.Qb(),r.Qb()}if(2&t){const t=r.fc();r.zb(11),r.Ec(" ",t.confirmButtonText," "),r.zb(2),r.Ec(" ",t.cancelButtonText," ")}}let fn=(()=>{class t{constructor(t,e,n,r,i){this.menuService=t,this.userService=e,this.ngbModal=n,this.toasterService=r,this.router=i,this.confirmButtonText=tn.b.CONFIRM_BUTTON_TEXT,this.cancelButtonText=tn.b.CANCEL_BUTTON_TEXT,this.currentYear=(new Date).getFullYear(),this.version=s.a.version,this.buildDate=s.a.buildDate}ngOnInit(){this.menuItems=this.menuService.getMenuItems(),this.userName=this.userService.currentUserValue.userName}open(t){this.ngbModal.open(t,{ariaLabelledBy:"modal-basic-title",centered:!0})}logout(){this.userService.logout(),this.ngbModal.dismissAll(),this.userService.clear(),this.toasterService.showSuccess(tn.j.LOGOUT_SUCCESS),this.router.navigate([tn.f.PUBLIC])}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(nn),r.Mb(en.a),r.Mb(rn.c),r.Mb(sn.a),r.Mb(Xe.b))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-protected-home"]],decls:23,vars:4,consts:[[1,"page-container"],[1,"content-wrap"],[1,"logo"],["src","assets/topnav-logo.png","alt","Au Bank Admin"],[1,"mx-1","btn","logout-btn","shadow",3,"click"],[1,"fa","fa-sign-out"],[1,"row"],[1,"col-2"],[1,"col-8"],[3,"title"],["content",""],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"text-message"],[1,"modal-footer"],["type","button","ngbAutofocus","",1,"btn","btn-confirm",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Rb(3,"a"),r.Nb(4,"img",3),r.Qb(),r.Rb(5,"h4"),r.Rb(6,"span"),r.Cc(7),r.Qb(),r.Rb(8,"button",4),r.dc("click",(function(){r.uc(t);const n=r.tc(22);return e.open(n)})),r.Nb(9,"i",5),r.Qb(),r.Qb(),r.Qb(),r.Nb(10,"app-sidenav"),r.Nb(11,"router-outlet"),r.Qb(),r.Rb(12,"footer"),r.Rb(13,"div",6),r.Nb(14,"div",7),r.Rb(15,"div",8),r.Rb(16,"h6"),r.Cc(17),r.Qb(),r.Qb(),r.Rb(18,"div",7),r.Rb(19,"h6",9),r.Cc(20),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Ac(21,dn,14,2,"ng-template",null,10,r.Bc)}2&t&&(r.zb(7),r.Dc(e.userName),r.zb(10),r.Ec(" Copyright @",e.currentYear," Au Bank Disclaimer Privacy Policy Code of Commitment Responsible Disclosure Policy "),r.zb(2),r.lc("title",e.buildDate),r.zb(1),r.Ec("version ",e.version,""))},directives:[hn,Xe.f],styles:[".logout-btn[_ngcontent-%COMP%]{background-color:#97144d;color:#fff}.logout-btn[_ngcontent-%COMP%]:hover{color:#fff}"]}),t})(),pn=(()=>{let t=class{constructor(t){this.router=t}canActivate(t,e){return!!localStorage.getItem("currentUser")||(this.router.navigate([tn.f.PUBLIC],{queryParams:{returnUrl:e.url}}),!1)}};return t.\u0275fac=function(e){return new(e||t)(r.Zb(Xe.b))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var mn=n("3Pt+");function gn(t,e){1&t&&r.Nb(0,"span",17)}function bn(t,e){if(1&t&&(r.Rb(0,"span"),r.Cc(1),r.Qb()),2&t){const t=r.fc();r.zb(1),r.Ec(" ",t.loginButtonText,"")}}let yn=(()=>{class t{constructor(t,e,n,r,s){this.formBuilder=t,this.userService=e,this.toasterService=n,this.router=r,this.route=s,this.loginButtonText=tn.b.LOGIN_BUTTON_TEXT,this.loading=!1}ngOnInit(){this.loginForm=this.formBuilder.group({userId:["",mn.q.required],password:["",mn.q.required],isExternalUser:[!1]});const t=JSON.parse(localStorage.getItem("currentUser")),e=localStorage.getItem("currentHome");t&&(t.roleName===tn.h.USER&&t.isFirstLogin===tn.a.TRUE?this.router.navigate([tn.f.CHANGE_PASSWORD]):(this.returnUrl=this.route.snapshot.queryParams.returnUrl?this.route.snapshot.queryParams.returnUrl:JSON.parse(e),this.router.navigate([this.returnUrl])))}get fieldControls(){return this.loginForm.controls}onSubmit(){this.loading=!0,this.userService.login(this.fieldControls.userId.value,this.fieldControls.password.value,!this.loginForm.controls.isExternalUser.value).subscribe(()=>{this.getUserDetail(),this.loading=!1},t=>{this.toasterService.showError(t),this.loading=!1})}getUserDetail(){this.loading=!0,this.userService.getUserDetail(this.fieldControls.userId.value).subscribe(t=>{t&&t.status?t.roleName!==tn.h.USER||t.roleName===tn.h.USER&&t.isFirstLogin===tn.a.FALSE?(this.loading=!1,this.toasterService.showSuccess(tn.j.LOGIN_SUCCESS),this.router.navigate([this.userService.currentHomeValue])):t.roleName===tn.h.USER&&t.isFirstLogin===tn.a.TRUE&&(this.loading=!1,this.toasterService.showWarning(tn.j.CHANGE_PASSWORD_WARNING),this.router.navigate([tn.f.CHANGE_PASSWORD])):(this.loading=!1,this.toasterService.showError(t.message.value))},t=>{this.loading=!1,this.toasterService.showError(t)})}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(mn.c),r.Mb(en.a),r.Mb(sn.a),r.Mb(Xe.b),r.Mb(Xe.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-login"]],decls:23,vars:4,consts:[[1,"login","shadow-lg","p-4"],[1,"admin_img"],["src","assets/axis_admin_logo.png","alt","","srcset",""],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","userId"],["type","text","formControlName","userId","id","userId","placeholder","Eg: USER0001","aria-describedby","userIdHelp","autocomplete","off","autofocus","","required","",1,"form-control"],["id","userIdHelp",1,"form-text","text-muted"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Enter your password","aria-describedby","passwordHelp","autocomplete","off","required","",1,"form-control"],["id","passwordHelp",1,"form-text","text-muted"],[1,"form-check"],["type","checkbox","formControlName","isExternalUser","id","externalUserCheck",1,"form-check-input"],["for","externalUserCheck",1,"form-check-label"],[1,"shadow",3,"disabled"],["class","spinner-border","style","width: 2rem; height: 2rem;","aria-hidden","true",4,"ngIf"],[4,"ngIf"],["aria-hidden","true",1,"spinner-border",2,"width","2rem","height","2rem"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Nb(2,"img",2),r.Qb(),r.Rb(3,"form",3),r.dc("ngSubmit",(function(){return e.onSubmit()})),r.Rb(4,"div",4),r.Rb(5,"label",5),r.Cc(6,"USER ID"),r.Qb(),r.Nb(7,"input",6),r.Rb(8,"small",7),r.Cc(9,"Enter a valid user id"),r.Qb(),r.Qb(),r.Rb(10,"div",4),r.Rb(11,"label",8),r.Cc(12,"Password"),r.Qb(),r.Nb(13,"input",9),r.Rb(14,"small",10),r.Cc(15,"Enter a valid password"),r.Qb(),r.Qb(),r.Rb(16,"div",11),r.Nb(17,"input",12),r.Rb(18,"label",13),r.Cc(19,"External User"),r.Qb(),r.Qb(),r.Rb(20,"button",14),r.Ac(21,gn,1,0,"span",15),r.Ac(22,bn,2,1,"span",16),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.zb(3),r.lc("formGroup",e.loginForm),r.zb(17),r.lc("disabled",e.loginForm.invalid||e.loading),r.zb(1),r.lc("ngIf",e.loading),r.zb(1),r.lc("ngIf",!e.loading))},directives:[mn.s,mn.l,mn.g,mn.b,mn.k,mn.e,mn.o,mn.a,i.k],styles:["button[_ngcontent-%COMP%]{width:-webkit-fill-available;color:#fff;background-color:#97144d;border:1px solid #97144d;padding:10px;margin-top:10px;font-size:18px}input[type=checkbox][_ngcontent-%COMP%]{margin-top:7px!important}"]}),t})();function _n(t,e){1&t&&r.Nb(0,"span",14)}function vn(t,e){if(1&t&&(r.Rb(0,"span"),r.Cc(1),r.Qb()),2&t){const t=r.fc();r.zb(1),r.Dc(t.changePasswordButtonText)}}const wn=[{path:"",component:fn,canActivate:[pn],children:[{path:"user-creation",loadChildren:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"GTwx")).then(t=>t.UserCreationModule)},{path:"manage-users",loadChildren:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"JrXR")).then(t=>t.ManageUsersModule)},{path:"view-whatsapp",loadChildren:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"SEnO")).then(t=>t.WhatsappModule)},{path:"block-whatsapp",loadChildren:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"SEnO")).then(t=>t.WhatsappModule)},{path:"marketing-maker",loadChildren:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"sjZA")).then(t=>t.MarketingMakerModule)},{path:"marketing-checker",loadChildren:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"R+aC")).then(t=>t.MarketingCheckerModule)}]},{path:"public",component:Ye,children:[{path:"",component:yn},{path:"login",component:yn},{path:"change-password",component:(()=>{class t{constructor(t,e,n,r){this.formBuilder=t,this.userService=e,this.toasterService=n,this.router=r,this.changePasswordButtonText=tn.b.CHANGE_PASSWORD_BUTTON_TEXT,this.loading=!1}ngOnInit(){this.form=this.formBuilder.group({currentPassword:["",mn.q.required],newPassword:["",mn.q.required],confirmPassword:["",mn.q.required]})}changePassword(){this.loading=!0;const t=this.form.controls,e=t.currentPassword.value,n=t.newPassword.value,r=t.confirmPassword.value,{dbPassword:s,userId:i}=this.userService.currentUserValue;s===e&&n===r?this.userService.changePassword(e,n,r,Number(i)).subscribe(t=>{const{ProcessVariables:{status:e,message:r={}}}=t;if(e){const t=this.userService.currentHomeValue,e=this.userService.currentUserValue;e.dbPassword=n,e.isFirstLogin="false",this.userService.setCurrentUserSubject(e),this.loading=!1,this.toasterService.showSuccess(tn.j.CHANGE_PASSWORD_SUCCESS),this.loading=!1,this.router.navigate([t])}else this.loading=!1,this.toasterService.showError(r.value)},t=>{this.loading=!1,this.toasterService.showError(t)}):s!==e?(this.loading=!1,this.toasterService.showError(tn.j.INVALID_CURRENT_PASSWORD)):n!==r&&(this.loading=!1,this.toasterService.showError(tn.j.PASSWORD_MATCH_ERROR))}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(mn.c),r.Mb(en.a),r.Mb(sn.a),r.Mb(Xe.b))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-change-password"]],decls:20,vars:4,consts:[[1,"login","shadow-lg"],[1,"card-header","text-center"],[1,"p-4"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","current-password"],["type","password","formControlName","currentPassword","id","current-password","placeholder","Eg: User@123",1,"form-control"],["for","new-password"],["type","password","formControlName","newPassword","id","new-password","placeholder","Eg: Axis@123",1,"form-control"],["for","confirm-password"],["type","password","formControlName","confirmPassword","id","confirm-password","placeholder","Eg: Axis@123",1,"form-control"],[3,"disabled"],["class","spinner-border","style","width: 2rem; height: 2rem;","aria-hidden","true",4,"ngIf"],[4,"ngIf"],["aria-hidden","true",1,"spinner-border",2,"width","2rem","height","2rem"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Cc(2," Change Password "),r.Qb(),r.Rb(3,"div",2),r.Rb(4,"form",3),r.dc("ngSubmit",(function(){return e.changePassword()})),r.Rb(5,"div",4),r.Rb(6,"label",5),r.Cc(7,"Current Password"),r.Qb(),r.Nb(8,"input",6),r.Qb(),r.Rb(9,"div",4),r.Rb(10,"label",7),r.Cc(11,"New Password"),r.Qb(),r.Nb(12,"input",8),r.Qb(),r.Rb(13,"div",4),r.Rb(14,"label",9),r.Cc(15,"Confirm New Password"),r.Qb(),r.Nb(16,"input",10),r.Qb(),r.Rb(17,"button",11),r.Ac(18,_n,1,0,"span",12),r.Ac(19,vn,2,1,"span",13),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.zb(4),r.lc("formGroup",e.form),r.zb(13),r.lc("disabled",e.form.invalid||e.loading),r.zb(1),r.lc("ngIf",e.loading),r.zb(1),r.lc("ngIf",!e.loading))},directives:[mn.s,mn.l,mn.g,mn.b,mn.k,mn.e,i.k],styles:["button[_ngcontent-%COMP%]{width:-webkit-fill-available;border:1px solid #97144d;padding:10px;margin-top:10px;font-size:18px}.card-header[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{color:#fff;background-color:#97144d}.card-header[_ngcontent-%COMP%]{padding:.75rem!important;border-top-left-radius:unset;border-top-right-radius:unset;font-size:20px}"]}),t})()}]}];let Sn=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},imports:[[Xe.e.forRoot(wn,{scrollPositionRestoration:"top"})],Xe.e]}),t})();function Cn(t,e){if(1&t){const t=r.Sb();r.Rb(0,"ngb-toast",2),r.dc("hide",(function(){return r.uc(t),r.fc().remove()})),r.Cc(1),r.Qb()}if(2&t){const t=e.$implicit;r.Bb(t.classname),r.lc("autohide",!0)("delay",2e3),r.zb(1),r.Ec(" ",t.message," ")}}let En=(()=>{class t{constructor(t){this.toastService=t,this.toasts=[],this.toastService.toasts.subscribe(t=>{this.toasts=t})}ngOnInit(){}remove(){this.toastService.remove()}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(sn.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-toast"]],decls:2,vars:1,consts:[[1,"d-flex","align-items-center","justify-content-center"],[3,"class","autohide","delay","hide",4,"ngFor","ngForOf"],[3,"autohide","delay","hide"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Ac(1,Cn,2,5,"ngb-toast",1),r.Qb()),2&t&&(r.zb(1),r.lc("ngForOf",e.toasts))},directives:[i.j,rn.l],styles:["[_nghost-%COMP%]{position:fixed;top:0;right:0;margin:.5em;z-index:1200}"]}),t})(),xn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-root"]],decls:2,vars:0,consts:[["aria-live","polite","aria-atomic","true",1,"d-flex","justify-content-center","align-items-center"]],template:function(t,e){1&t&&(r.Nb(0,"router-outlet"),r.Nb(1,"app-toast",0))},directives:[Xe.f,En],styles:[""]}),t})();var kn=n("PCNd"),On=n("tk/3"),Tn=n("z6cu"),Dn=n("lJxs"),In=n("JIr8");let An=(()=>{class t{constructor(t,e){this.userService=t,this.ngbModal=e}intercept(t,e){return t=t.clone({setHeaders:{"Content-Type":"application/x-www-form-urlencoded","authentication-token":this.userService.tokenValue?this.userService.tokenValue:""}}),e.handle(t).pipe(Object(Dn.a)(t=>{if(t instanceof On.e){const e=t.body;if(!e||!e.login_required)return t;this.ngbModal.dismissAll(),this.userService.closeAndLogout()}}),Object(In.a)(t=>{const e=window.navigator.onLine?t.error.message||t.statusText:tn.e.NETWORK_NOT_AVAILABLE;return Object(Tn.a)(e)}))}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(en.a),r.Zb(rn.c))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Rn=n("QK5H");let jn=(()=>{class t{}return t.\u0275mod=r.Kb({type:t,bootstrap:[xn]}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},providers:[{provide:On.a,useClass:An,multi:!0},Rn.b],imports:[[P,Je,On.c,Sn,kn.a,rn.d]]}),t})();s.a.production&&Object(r.R)(),j().bootstrapModule(jn).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,1]]]);