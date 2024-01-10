import { ref as K, computed as C, onMounted as Tt, watch as At, defineComponent as St, openBlock as F, createElementBlock as N, createElementVNode as ye, normalizeStyle as pe, unref as m, renderSlot as $e, toDisplayString as Ct } from "vue";
function Ot(e, t) {
  const r = [];
  for (; e !== ""; ) {
    let a = e.substr(0, t);
    if (e.charAt(t) !== "" && e.charAt(t) !== " ") {
      const i = a.lastIndexOf(" ");
      i !== -1 && (a = a.substr(0, i));
    }
    e = e.replace(a, "").trim(), r.push(a);
  }
  return r;
}
const It = {
  radius: 250,
  // 圆的半径
  textRadius: 190,
  // 奖品位置距离圆心的距离
  textLength: 6,
  // 奖品文本 1 行几个字符, 最多 2 行
  textDirection: "horizontal",
  // 奖品文本方向
  lineHeight: 20,
  // 文本行高
  borderWidth: 0,
  // 圆的外边框
  borderColor: "transparent",
  // 外边框的颜色
  btnText: "GO",
  // 开始按钮的文本
  btnWidth: 140,
  // 按钮的宽
  fontSize: 34
  // 奖品字号
};
function Pt(e) {
  const t = K(), r = C(() => Object.assign(It, e.canvas));
  function a() {
    const n = t.value;
    if (n.getContext) {
      const { radius: s, textRadius: o, borderWidth: c, borderColor: u, fontSize: v } = r.value, l = Math.PI / (e.prizes.length / 2), f = n.getContext("2d");
      f.clearRect(0, 0, s * 2, s * 2), f.strokeStyle = u, f.lineWidth = c * 2, f.font = `${v}px Arial`, e.prizes.forEach((y, _) => {
        const g = _ * l - Math.PI / 2;
        f.fillStyle = y.bgColor, f.beginPath(), f.arc(s, s, s - c, g, g + l, !1), f.stroke(), f.arc(s, s, 0, g + l, g, !0), f.fill(), f.save(), f.fillStyle = y.color, f.translate(s + Math.cos(g + l / 2) * o, s + Math.sin(g + l / 2) * o), i(f, g, l, y.name), f.restore();
      });
    }
  }
  function i(n, s, o, c) {
    const { lineHeight: u, textLength: v, textDirection: l } = r.value, f = Ot(c, v);
    f !== null && (l === "vertical" ? n.rotate(s + o / 2 + Math.PI) : n.rotate(s + o / 2 + Math.PI / 2), f.forEach((y, _) => {
      let g = -n.measureText(y).width / 2, T = (_ + 1) * u;
      l === "vertical" && (g = 0, T = (_ + 1) * u - f.length * u / 2), n.fillText(y, g, T);
    }));
  }
  return Tt(() => {
    e.type === "canvas" && a();
  }), {
    wheelEl: t,
    canvasConfig: r,
    drawCanvas: a
  };
}
var B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ve(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function wt() {
  this.__data__ = [], this.size = 0;
}
var Et = wt;
function xt(e, t) {
  return e === t || e !== e && t !== t;
}
var fe = xt, Mt = fe;
function Dt(e, t) {
  for (var r = e.length; r--; )
    if (Mt(e[r][0], t))
      return r;
  return -1;
}
var k = Dt, Rt = k, Lt = Array.prototype, jt = Lt.splice;
function Gt(e) {
  var t = this.__data__, r = Rt(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : jt.call(t, r, 1), --this.size, !0;
}
var zt = Gt, Ft = k;
function Nt(e) {
  var t = this.__data__, r = Ft(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Bt = Nt, Ht = k;
function Kt(e) {
  return Ht(this.__data__, e) > -1;
}
var Ut = Kt, qt = k;
function Wt(e, t) {
  var r = this.__data__, a = qt(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var kt = Wt, Xt = Et, Yt = zt, Zt = Bt, Jt = Ut, Qt = kt;
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = Xt;
P.prototype.delete = Yt;
P.prototype.get = Zt;
P.prototype.has = Jt;
P.prototype.set = Qt;
var X = P, Vt = X;
function er() {
  this.__data__ = new Vt(), this.size = 0;
}
var tr = er;
function rr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var ar = rr;
function nr(e) {
  return this.__data__.get(e);
}
var ir = nr;
function sr(e) {
  return this.__data__.has(e);
}
var or = sr, fr = typeof B == "object" && B && B.Object === Object && B, et = fr, ur = et, cr = typeof self == "object" && self && self.Object === Object && self, lr = ur || cr || Function("return this")(), S = lr, vr = S, dr = vr.Symbol, Y = dr, be = Y, tt = Object.prototype, hr = tt.hasOwnProperty, gr = tt.toString, R = be ? be.toStringTag : void 0;
function _r(e) {
  var t = hr.call(e, R), r = e[R];
  try {
    e[R] = void 0;
    var a = !0;
  } catch {
  }
  var i = gr.call(e);
  return a && (t ? e[R] = r : delete e[R]), i;
}
var yr = _r, pr = Object.prototype, $r = pr.toString;
function br(e) {
  return $r.call(e);
}
var mr = br, me = Y, Tr = yr, Ar = mr, Sr = "[object Null]", Cr = "[object Undefined]", Te = me ? me.toStringTag : void 0;
function Or(e) {
  return e == null ? e === void 0 ? Cr : Sr : Te && Te in Object(e) ? Tr(e) : Ar(e);
}
var L = Or;
function Ir(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var j = Ir, Pr = L, wr = j, Er = "[object AsyncFunction]", xr = "[object Function]", Mr = "[object GeneratorFunction]", Dr = "[object Proxy]";
function Rr(e) {
  if (!wr(e))
    return !1;
  var t = Pr(e);
  return t == xr || t == Mr || t == Er || t == Dr;
}
var rt = Rr, Lr = S, jr = Lr["__core-js_shared__"], Gr = jr, ee = Gr, Ae = function() {
  var e = /[^.]+$/.exec(ee && ee.keys && ee.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zr(e) {
  return !!Ae && Ae in e;
}
var Fr = zr, Nr = Function.prototype, Br = Nr.toString;
function Hr(e) {
  if (e != null) {
    try {
      return Br.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var at = Hr, Kr = rt, Ur = Fr, qr = j, Wr = at, kr = /[\\^$.*+?()[\]{}|]/g, Xr = /^\[object .+?Constructor\]$/, Yr = Function.prototype, Zr = Object.prototype, Jr = Yr.toString, Qr = Zr.hasOwnProperty, Vr = RegExp(
  "^" + Jr.call(Qr).replace(kr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ea(e) {
  if (!qr(e) || Ur(e))
    return !1;
  var t = Kr(e) ? Vr : Xr;
  return t.test(Wr(e));
}
var ta = ea;
function ra(e, t) {
  return e == null ? void 0 : e[t];
}
var aa = ra, na = ta, ia = aa;
function sa(e, t) {
  var r = ia(e, t);
  return na(r) ? r : void 0;
}
var w = sa, oa = w, fa = S, ua = oa(fa, "Map"), ue = ua, ca = w, la = ca(Object, "create"), Z = la, Se = Z;
function va() {
  this.__data__ = Se ? Se(null) : {}, this.size = 0;
}
var da = va;
function ha(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ga = ha, _a = Z, ya = "__lodash_hash_undefined__", pa = Object.prototype, $a = pa.hasOwnProperty;
function ba(e) {
  var t = this.__data__;
  if (_a) {
    var r = t[e];
    return r === ya ? void 0 : r;
  }
  return $a.call(t, e) ? t[e] : void 0;
}
var ma = ba, Ta = Z, Aa = Object.prototype, Sa = Aa.hasOwnProperty;
function Ca(e) {
  var t = this.__data__;
  return Ta ? t[e] !== void 0 : Sa.call(t, e);
}
var Oa = Ca, Ia = Z, Pa = "__lodash_hash_undefined__";
function wa(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ia && t === void 0 ? Pa : t, this;
}
var Ea = wa, xa = da, Ma = ga, Da = ma, Ra = Oa, La = Ea;
function E(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
E.prototype.clear = xa;
E.prototype.delete = Ma;
E.prototype.get = Da;
E.prototype.has = Ra;
E.prototype.set = La;
var ja = E, Ce = ja, Ga = X, za = ue;
function Fa() {
  this.size = 0, this.__data__ = {
    hash: new Ce(),
    map: new (za || Ga)(),
    string: new Ce()
  };
}
var Na = Fa;
function Ba(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ha = Ba, Ka = Ha;
function Ua(e, t) {
  var r = e.__data__;
  return Ka(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var J = Ua, qa = J;
function Wa(e) {
  var t = qa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var ka = Wa, Xa = J;
function Ya(e) {
  return Xa(this, e).get(e);
}
var Za = Ya, Ja = J;
function Qa(e) {
  return Ja(this, e).has(e);
}
var Va = Qa, en = J;
function tn(e, t) {
  var r = en(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var rn = tn, an = Na, nn = ka, sn = Za, on = Va, fn = rn;
function x(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
x.prototype.clear = an;
x.prototype.delete = nn;
x.prototype.get = sn;
x.prototype.has = on;
x.prototype.set = fn;
var ce = x, un = X, cn = ue, ln = ce, vn = 200;
function dn(e, t) {
  var r = this.__data__;
  if (r instanceof un) {
    var a = r.__data__;
    if (!cn || a.length < vn - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ln(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var hn = dn, gn = X, _n = tr, yn = ar, pn = ir, $n = or, bn = hn;
function M(e) {
  var t = this.__data__ = new gn(e);
  this.size = t.size;
}
M.prototype.clear = _n;
M.prototype.delete = yn;
M.prototype.get = pn;
M.prototype.has = $n;
M.prototype.set = bn;
var nt = M, mn = "__lodash_hash_undefined__";
function Tn(e) {
  return this.__data__.set(e, mn), this;
}
var An = Tn;
function Sn(e) {
  return this.__data__.has(e);
}
var Cn = Sn, On = ce, In = An, Pn = Cn;
function U(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new On(); ++t < r; )
    this.add(e[t]);
}
U.prototype.add = U.prototype.push = In;
U.prototype.has = Pn;
var wn = U;
function En(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var xn = En;
function Mn(e, t) {
  return e.has(t);
}
var Dn = Mn, Rn = wn, Ln = xn, jn = Dn, Gn = 1, zn = 2;
function Fn(e, t, r, a, i, n) {
  var s = r & Gn, o = e.length, c = t.length;
  if (o != c && !(s && c > o))
    return !1;
  var u = n.get(e), v = n.get(t);
  if (u && v)
    return u == t && v == e;
  var l = -1, f = !0, y = r & zn ? new Rn() : void 0;
  for (n.set(e, t), n.set(t, e); ++l < o; ) {
    var _ = e[l], g = t[l];
    if (a)
      var T = s ? a(g, _, l, t, e, n) : a(_, g, l, e, t, n);
    if (T !== void 0) {
      if (T)
        continue;
      f = !1;
      break;
    }
    if (y) {
      if (!Ln(t, function(A, d) {
        if (!jn(y, d) && (_ === A || i(_, A, r, a, n)))
          return y.push(d);
      })) {
        f = !1;
        break;
      }
    } else if (!(_ === g || i(_, g, r, a, n))) {
      f = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), f;
}
var it = Fn, Nn = S, Bn = Nn.Uint8Array, Hn = Bn;
function Kn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a, i) {
    r[++t] = [i, a];
  }), r;
}
var Un = Kn;
function qn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a) {
    r[++t] = a;
  }), r;
}
var Wn = qn, Oe = Y, Ie = Hn, kn = fe, Xn = it, Yn = Un, Zn = Wn, Jn = 1, Qn = 2, Vn = "[object Boolean]", ei = "[object Date]", ti = "[object Error]", ri = "[object Map]", ai = "[object Number]", ni = "[object RegExp]", ii = "[object Set]", si = "[object String]", oi = "[object Symbol]", fi = "[object ArrayBuffer]", ui = "[object DataView]", Pe = Oe ? Oe.prototype : void 0, te = Pe ? Pe.valueOf : void 0;
function ci(e, t, r, a, i, n, s) {
  switch (r) {
    case ui:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case fi:
      return !(e.byteLength != t.byteLength || !n(new Ie(e), new Ie(t)));
    case Vn:
    case ei:
    case ai:
      return kn(+e, +t);
    case ti:
      return e.name == t.name && e.message == t.message;
    case ni:
    case si:
      return e == t + "";
    case ri:
      var o = Yn;
    case ii:
      var c = a & Jn;
      if (o || (o = Zn), e.size != t.size && !c)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      a |= Qn, s.set(e, t);
      var v = Xn(o(e), o(t), a, i, n, s);
      return s.delete(e), v;
    case oi:
      if (te)
        return te.call(e) == te.call(t);
  }
  return !1;
}
var li = ci;
function vi(e, t) {
  for (var r = -1, a = t.length, i = e.length; ++r < a; )
    e[i + r] = t[r];
  return e;
}
var di = vi, hi = Array.isArray, O = hi, gi = di, _i = O;
function yi(e, t, r) {
  var a = t(e);
  return _i(e) ? a : gi(a, r(e));
}
var pi = yi;
function $i(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = 0, n = []; ++r < a; ) {
    var s = e[r];
    t(s, r, e) && (n[i++] = s);
  }
  return n;
}
var bi = $i;
function mi() {
  return [];
}
var Ti = mi, Ai = bi, Si = Ti, Ci = Object.prototype, Oi = Ci.propertyIsEnumerable, we = Object.getOwnPropertySymbols, Ii = we ? function(e) {
  return e == null ? [] : (e = Object(e), Ai(we(e), function(t) {
    return Oi.call(e, t);
  }));
} : Si, Pi = Ii;
function wi(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var Ei = wi;
function xi(e) {
  return e != null && typeof e == "object";
}
var G = xi, Mi = L, Di = G, Ri = "[object Arguments]";
function Li(e) {
  return Di(e) && Mi(e) == Ri;
}
var ji = Li, Ee = ji, Gi = G, st = Object.prototype, zi = st.hasOwnProperty, Fi = st.propertyIsEnumerable, Ni = Ee(function() {
  return arguments;
}()) ? Ee : function(e) {
  return Gi(e) && zi.call(e, "callee") && !Fi.call(e, "callee");
}, ot = Ni, q = { exports: {} };
function Bi() {
  return !1;
}
var Hi = Bi;
q.exports;
(function(e, t) {
  var r = S, a = Hi, i = t && !t.nodeType && t, n = i && !0 && e && !e.nodeType && e, s = n && n.exports === i, o = s ? r.Buffer : void 0, c = o ? o.isBuffer : void 0, u = c || a;
  e.exports = u;
})(q, q.exports);
var ft = q.exports, Ki = 9007199254740991, Ui = /^(?:0|[1-9]\d*)$/;
function qi(e, t) {
  var r = typeof e;
  return t = t ?? Ki, !!t && (r == "number" || r != "symbol" && Ui.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var le = qi, Wi = 9007199254740991;
function ki(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Wi;
}
var ve = ki, Xi = L, Yi = ve, Zi = G, Ji = "[object Arguments]", Qi = "[object Array]", Vi = "[object Boolean]", es = "[object Date]", ts = "[object Error]", rs = "[object Function]", as = "[object Map]", ns = "[object Number]", is = "[object Object]", ss = "[object RegExp]", os = "[object Set]", fs = "[object String]", us = "[object WeakMap]", cs = "[object ArrayBuffer]", ls = "[object DataView]", vs = "[object Float32Array]", ds = "[object Float64Array]", hs = "[object Int8Array]", gs = "[object Int16Array]", _s = "[object Int32Array]", ys = "[object Uint8Array]", ps = "[object Uint8ClampedArray]", $s = "[object Uint16Array]", bs = "[object Uint32Array]", h = {};
h[vs] = h[ds] = h[hs] = h[gs] = h[_s] = h[ys] = h[ps] = h[$s] = h[bs] = !0;
h[Ji] = h[Qi] = h[cs] = h[Vi] = h[ls] = h[es] = h[ts] = h[rs] = h[as] = h[ns] = h[is] = h[ss] = h[os] = h[fs] = h[us] = !1;
function ms(e) {
  return Zi(e) && Yi(e.length) && !!h[Xi(e)];
}
var Ts = ms;
function As(e) {
  return function(t) {
    return e(t);
  };
}
var Ss = As, W = { exports: {} };
W.exports;
(function(e, t) {
  var r = et, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, n = i && i.exports === a, s = n && r.process, o = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(W, W.exports);
var Cs = W.exports, Os = Ts, Is = Ss, xe = Cs, Me = xe && xe.isTypedArray, Ps = Me ? Is(Me) : Os, ut = Ps, ws = Ei, Es = ot, xs = O, Ms = ft, Ds = le, Rs = ut, Ls = Object.prototype, js = Ls.hasOwnProperty;
function Gs(e, t) {
  var r = xs(e), a = !r && Es(e), i = !r && !a && Ms(e), n = !r && !a && !i && Rs(e), s = r || a || i || n, o = s ? ws(e.length, String) : [], c = o.length;
  for (var u in e)
    (t || js.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ds(u, c))) && o.push(u);
  return o;
}
var zs = Gs, Fs = Object.prototype;
function Ns(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Fs;
  return e === r;
}
var Bs = Ns;
function Hs(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ks = Hs, Us = Ks, qs = Us(Object.keys, Object), Ws = qs, ks = Bs, Xs = Ws, Ys = Object.prototype, Zs = Ys.hasOwnProperty;
function Js(e) {
  if (!ks(e))
    return Xs(e);
  var t = [];
  for (var r in Object(e))
    Zs.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Qs = Js, Vs = rt, eo = ve;
function to(e) {
  return e != null && eo(e.length) && !Vs(e);
}
var ct = to, ro = zs, ao = Qs, no = ct;
function io(e) {
  return no(e) ? ro(e) : ao(e);
}
var lt = io, so = pi, oo = Pi, fo = lt;
function uo(e) {
  return so(e, fo, oo);
}
var co = uo, De = co, lo = 1, vo = Object.prototype, ho = vo.hasOwnProperty;
function go(e, t, r, a, i, n) {
  var s = r & lo, o = De(e), c = o.length, u = De(t), v = u.length;
  if (c != v && !s)
    return !1;
  for (var l = c; l--; ) {
    var f = o[l];
    if (!(s ? f in t : ho.call(t, f)))
      return !1;
  }
  var y = n.get(e), _ = n.get(t);
  if (y && _)
    return y == t && _ == e;
  var g = !0;
  n.set(e, t), n.set(t, e);
  for (var T = s; ++l < c; ) {
    f = o[l];
    var A = e[f], d = t[f];
    if (a)
      var p = s ? a(d, A, f, t, e, n) : a(A, d, f, e, t, n);
    if (!(p === void 0 ? A === d || i(A, d, r, a, n) : p)) {
      g = !1;
      break;
    }
    T || (T = f == "constructor");
  }
  if (g && !T) {
    var b = e.constructor, $ = t.constructor;
    b != $ && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof $ == "function" && $ instanceof $) && (g = !1);
  }
  return n.delete(e), n.delete(t), g;
}
var _o = go, yo = w, po = S, $o = yo(po, "DataView"), bo = $o, mo = w, To = S, Ao = mo(To, "Promise"), So = Ao, Co = w, Oo = S, Io = Co(Oo, "Set"), Po = Io, wo = w, Eo = S, xo = wo(Eo, "WeakMap"), Mo = xo, ae = bo, ne = ue, ie = So, se = Po, oe = Mo, vt = L, D = at, Re = "[object Map]", Do = "[object Object]", Le = "[object Promise]", je = "[object Set]", Ge = "[object WeakMap]", ze = "[object DataView]", Ro = D(ae), Lo = D(ne), jo = D(ie), Go = D(se), zo = D(oe), I = vt;
(ae && I(new ae(new ArrayBuffer(1))) != ze || ne && I(new ne()) != Re || ie && I(ie.resolve()) != Le || se && I(new se()) != je || oe && I(new oe()) != Ge) && (I = function(e) {
  var t = vt(e), r = t == Do ? e.constructor : void 0, a = r ? D(r) : "";
  if (a)
    switch (a) {
      case Ro:
        return ze;
      case Lo:
        return Re;
      case jo:
        return Le;
      case Go:
        return je;
      case zo:
        return Ge;
    }
  return t;
});
var Fo = I, re = nt, No = it, Bo = li, Ho = _o, Fe = Fo, Ne = O, Be = ft, Ko = ut, Uo = 1, He = "[object Arguments]", Ke = "[object Array]", H = "[object Object]", qo = Object.prototype, Ue = qo.hasOwnProperty;
function Wo(e, t, r, a, i, n) {
  var s = Ne(e), o = Ne(t), c = s ? Ke : Fe(e), u = o ? Ke : Fe(t);
  c = c == He ? H : c, u = u == He ? H : u;
  var v = c == H, l = u == H, f = c == u;
  if (f && Be(e)) {
    if (!Be(t))
      return !1;
    s = !0, v = !1;
  }
  if (f && !v)
    return n || (n = new re()), s || Ko(e) ? No(e, t, r, a, i, n) : Bo(e, t, c, r, a, i, n);
  if (!(r & Uo)) {
    var y = v && Ue.call(e, "__wrapped__"), _ = l && Ue.call(t, "__wrapped__");
    if (y || _) {
      var g = y ? e.value() : e, T = _ ? t.value() : t;
      return n || (n = new re()), i(g, T, r, a, n);
    }
  }
  return f ? (n || (n = new re()), Ho(e, t, r, a, i, n)) : !1;
}
var ko = Wo, Xo = ko, qe = G;
function dt(e, t, r, a, i) {
  return e === t ? !0 : e == null || t == null || !qe(e) && !qe(t) ? e !== e && t !== t : Xo(e, t, r, a, dt, i);
}
var ht = dt, Yo = nt, Zo = ht, Jo = 1, Qo = 2;
function Vo(e, t, r, a) {
  var i = r.length, n = i, s = !a;
  if (e == null)
    return !n;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++i < n; ) {
    o = r[i];
    var c = o[0], u = e[c], v = o[1];
    if (s && o[2]) {
      if (u === void 0 && !(c in e))
        return !1;
    } else {
      var l = new Yo();
      if (a)
        var f = a(u, v, c, e, t, l);
      if (!(f === void 0 ? Zo(v, u, Jo | Qo, a, l) : f))
        return !1;
    }
  }
  return !0;
}
var ef = Vo, tf = j;
function rf(e) {
  return e === e && !tf(e);
}
var gt = rf, af = gt, nf = lt;
function sf(e) {
  for (var t = nf(e), r = t.length; r--; ) {
    var a = t[r], i = e[a];
    t[r] = [a, i, af(i)];
  }
  return t;
}
var of = sf;
function ff(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var _t = ff, uf = ef, cf = of, lf = _t;
function vf(e) {
  var t = cf(e);
  return t.length == 1 && t[0][2] ? lf(t[0][0], t[0][1]) : function(r) {
    return r === e || uf(r, e, t);
  };
}
var df = vf, hf = L, gf = G, _f = "[object Symbol]";
function yf(e) {
  return typeof e == "symbol" || gf(e) && hf(e) == _f;
}
var Q = yf, pf = O, $f = Q, bf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, mf = /^\w*$/;
function Tf(e, t) {
  if (pf(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || $f(e) ? !0 : mf.test(e) || !bf.test(e) || t != null && e in Object(t);
}
var de = Tf, yt = ce, Af = "Expected a function";
function he(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Af);
  var r = function() {
    var a = arguments, i = t ? t.apply(this, a) : a[0], n = r.cache;
    if (n.has(i))
      return n.get(i);
    var s = e.apply(this, a);
    return r.cache = n.set(i, s) || n, s;
  };
  return r.cache = new (he.Cache || yt)(), r;
}
he.Cache = yt;
var Sf = he, Cf = Sf, Of = 500;
function If(e) {
  var t = Cf(e, function(a) {
    return r.size === Of && r.clear(), a;
  }), r = t.cache;
  return t;
}
var Pf = If, wf = Pf, Ef = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xf = /\\(\\)?/g, Mf = wf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ef, function(r, a, i, n) {
    t.push(i ? n.replace(xf, "$1") : a || r);
  }), t;
}), Df = Mf;
function Rf(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = Array(a); ++r < a; )
    i[r] = t(e[r], r, e);
  return i;
}
var Lf = Rf, We = Y, jf = Lf, Gf = O, zf = Q, Ff = 1 / 0, ke = We ? We.prototype : void 0, Xe = ke ? ke.toString : void 0;
function pt(e) {
  if (typeof e == "string")
    return e;
  if (Gf(e))
    return jf(e, pt) + "";
  if (zf(e))
    return Xe ? Xe.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ff ? "-0" : t;
}
var Nf = pt, Bf = Nf;
function Hf(e) {
  return e == null ? "" : Bf(e);
}
var Kf = Hf, Uf = O, qf = de, Wf = Df, kf = Kf;
function Xf(e, t) {
  return Uf(e) ? e : qf(e, t) ? [e] : Wf(kf(e));
}
var $t = Xf, Yf = Q, Zf = 1 / 0;
function Jf(e) {
  if (typeof e == "string" || Yf(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Zf ? "-0" : t;
}
var V = Jf, Qf = $t, Vf = V;
function eu(e, t) {
  t = Qf(t, e);
  for (var r = 0, a = t.length; e != null && r < a; )
    e = e[Vf(t[r++])];
  return r && r == a ? e : void 0;
}
var bt = eu, tu = bt;
function ru(e, t, r) {
  var a = e == null ? void 0 : tu(e, t);
  return a === void 0 ? r : a;
}
var au = ru;
function nu(e, t) {
  return e != null && t in Object(e);
}
var iu = nu, su = $t, ou = ot, fu = O, uu = le, cu = ve, lu = V;
function vu(e, t, r) {
  t = su(t, e);
  for (var a = -1, i = t.length, n = !1; ++a < i; ) {
    var s = lu(t[a]);
    if (!(n = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return n || ++a != i ? n : (i = e == null ? 0 : e.length, !!i && cu(i) && uu(s, i) && (fu(e) || ou(e)));
}
var du = vu, hu = iu, gu = du;
function _u(e, t) {
  return e != null && gu(e, t, hu);
}
var yu = _u, pu = ht, $u = au, bu = yu, mu = de, Tu = gt, Au = _t, Su = V, Cu = 1, Ou = 2;
function Iu(e, t) {
  return mu(e) && Tu(t) ? Au(Su(e), t) : function(r) {
    var a = $u(r, e);
    return a === void 0 && a === t ? bu(r, e) : pu(t, a, Cu | Ou);
  };
}
var Pu = Iu;
function wu(e) {
  return e;
}
var Eu = wu;
function xu(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Mu = xu, Du = bt;
function Ru(e) {
  return function(t) {
    return Du(t, e);
  };
}
var Lu = Ru, ju = Mu, Gu = Lu, zu = de, Fu = V;
function Nu(e) {
  return zu(e) ? ju(Fu(e)) : Gu(e);
}
var Bu = Nu, Hu = df, Ku = Pu, Uu = Eu, qu = O, Wu = Bu;
function ku(e) {
  return typeof e == "function" ? e : e == null ? Uu : typeof e == "object" ? qu(e) ? Ku(e[0], e[1]) : Hu(e) : Wu(e);
}
var Xu = ku;
function Yu(e, t) {
  for (var r, a = -1, i = e.length; ++a < i; ) {
    var n = t(e[a]);
    n !== void 0 && (r = r === void 0 ? n : r + n);
  }
  return r;
}
var Zu = Yu, Ju = Xu, Qu = Zu;
function Vu(e, t) {
  return e && e.length ? Qu(e, Ju(t)) : 0;
}
var ec = Vu;
const tc = /* @__PURE__ */ Ve(ec);
var rc = Math.floor, ac = Math.random;
function nc(e, t) {
  return e + rc(ac() * (t - e + 1));
}
var ic = nc, sc = fe, oc = ct, fc = le, uc = j;
function cc(e, t, r) {
  if (!uc(r))
    return !1;
  var a = typeof t;
  return (a == "number" ? oc(r) && fc(t, r.length) : a == "string" && t in r) ? sc(r[t], e) : !1;
}
var lc = cc, vc = /\s/;
function dc(e) {
  for (var t = e.length; t-- && vc.test(e.charAt(t)); )
    ;
  return t;
}
var hc = dc, gc = hc, _c = /^\s+/;
function yc(e) {
  return e && e.slice(0, gc(e) + 1).replace(_c, "");
}
var pc = yc, $c = pc, Ye = j, bc = Q, Ze = 0 / 0, mc = /^[-+]0x[0-9a-f]+$/i, Tc = /^0b[01]+$/i, Ac = /^0o[0-7]+$/i, Sc = parseInt;
function Cc(e) {
  if (typeof e == "number")
    return e;
  if (bc(e))
    return Ze;
  if (Ye(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ye(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = $c(e);
  var r = Tc.test(e);
  return r || Ac.test(e) ? Sc(e.slice(2), r ? 2 : 8) : mc.test(e) ? Ze : +e;
}
var Oc = Cc, Ic = Oc, Je = 1 / 0, Pc = 17976931348623157e292;
function wc(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Ic(e), e === Je || e === -Je) {
    var t = e < 0 ? -1 : 1;
    return t * Pc;
  }
  return e === e ? e : 0;
}
var Ec = wc, xc = ic, Mc = lc, Qe = Ec, Dc = parseFloat, Rc = Math.min, Lc = Math.random;
function jc(e, t, r) {
  if (r && typeof r != "boolean" && Mc(e, t, r) && (t = r = void 0), r === void 0 && (typeof t == "boolean" ? (r = t, t = void 0) : typeof e == "boolean" && (r = e, e = void 0)), e === void 0 && t === void 0 ? (e = 0, t = 1) : (e = Qe(e), t === void 0 ? (t = e, e = 0) : t = Qe(t)), e > t) {
    var a = e;
    e = t, t = a;
  }
  if (r || e % 1 || t % 1) {
    var i = Lc();
    return Rc(e + i * (t - e + Dc("1e-" + ((i + "").length - 1))), t);
  }
  return xc(e, t);
}
var Gc = jc;
const zc = /* @__PURE__ */ Ve(Gc);
function Fc(e, t) {
  const r = K(!1), a = K(0), i = K(), n = C(() => e.useWeight ? 100 : tc(e.prizes, (d) => d.probability || 0)), s = C(() => {
    if (e.useWeight)
      return 0;
    const d = [...e.prizes].sort(($, z) => {
      const ge = String($.probability).split(".")[1], _e = String(z.probability).split(".")[1], mt = ge ? ge.length : 0;
      return (_e ? _e.length : 0) - mt;
    }), p = String(d[0].probability).split(".")[1], b = p ? p.length : 0;
    return [1, 10, 100, 1e3, 1e4][b > 4 ? 4 : b];
  }), o = C(() => {
    const d = [];
    return e.prizes.forEach((p) => {
      const b = e.useWeight ? p.weight || 0 : (p.probability || 0) * s.value, $ = new Array(b).fill(p.id);
      d.push(...$);
    }), d;
  }), c = C(() => r.value ? e.duration / 1e3 : 0), u = C(() => ({
    "-webkit-transform": `rotateZ(${a.value}deg)`,
    transform: `rotateZ(${a.value}deg)`,
    "-webkit-transition-duration": `${c.value}s`,
    "transition-duration": `${c.value}s`,
    "-webkit-transition-timing-function:": e.timingFun,
    "transition-timing-function": e.timingFun
  })), v = C(() => {
    let d = e.angleBase * 360;
    return e.angleBase < 0 && (d -= 360), d;
  }), l = C(() => !e.disabled && !r.value && n.value === 100);
  At(() => e.prizeId, (d) => {
    if (!r.value)
      return;
    let p = A(d);
    e.angleBase < 0 && (p -= 360);
    const b = a.value;
    let $ = e.angleBase * 360 + p;
    const z = 360 * Math.floor(($ - b) / 360);
    e.angleBase >= 0 ? $ += Math.abs(z) : $ += -360 - z, a.value = $;
  }), f();
  function f() {
    if (n.value !== 100)
      throw new Error("Prizes Is Error: Sum of probabilities is not 100!");
    return !0;
  }
  function y() {
    if (l.value) {
      if (e.verify) {
        t("rotateStart", _);
        return;
      }
      t("rotateStart"), _();
    }
  }
  function _() {
    r.value = !0;
    const d = e.prizeId || T();
    a.value = v.value + A(d);
  }
  function g() {
    r.value = !1, a.value %= 360, t("rotateEnd", i.value);
  }
  function T() {
    const d = o.value.length;
    return o.value[zc(0, d - 1)];
  }
  function A(d) {
    const p = 360 / e.prizes.length, b = e.prizes.findIndex(($) => $.id === d);
    return i.value = e.prizes[b], 360 - (p * b + p / 2);
  }
  return {
    rotateStyle: u,
    handleClick: y,
    onRotateEnd: g
  };
}
const Nc = { class: "fw-container" }, Bc = ["width", "height"], Hc = { class: "fw-btn" }, Kc = /* @__PURE__ */ St({
  __name: "index",
  props: {
    type: { default: "canvas" },
    useWeight: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    verify: { type: Boolean, default: !1 },
    canvas: { default: () => ({}) },
    duration: { default: 6e3 },
    timingFun: { default: "cubic-bezier(0.36, 0.95, 0.64, 1)" },
    angleBase: { default: 10 },
    prizeId: { default: 0 },
    prizes: { default: () => [] }
  },
  emits: ["rotateStart", "rotateEnd"],
  setup(e, { expose: t, emit: r }) {
    const a = e, { wheelEl: i, canvasConfig: n } = Pt(a), { handleClick: s, rotateStyle: o, onRotateEnd: c } = Fc(a, r);
    return t({
      startRotate: () => {
        s();
      }
    }), (u, v) => (F(), N("div", Nc, [
      ye("div", {
        class: "fw-wheel",
        style: pe(m(o)),
        onTransitionend: v[0] || (v[0] = //@ts-ignore
        (...l) => m(c) && m(c)(...l)),
        "on:webkitTransitionend": v[1] || (v[1] = //@ts-ignore
        (...l) => m(c) && m(c)(...l))
      }, [
        e.type === "canvas" ? (F(), N("canvas", {
          key: 0,
          ref_key: "wheelEl",
          ref: i,
          width: m(n).radius * 2,
          height: m(n).radius * 2
        }, null, 8, Bc)) : $e(u.$slots, "wheel", { key: 1 }, void 0, !0)
      ], 36),
      ye("div", Hc, [
        e.type === "canvas" ? (F(), N("div", {
          key: 0,
          class: "fw-btn__btn",
          style: pe({
            width: m(n).btnWidth + "px",
            height: m(n).btnWidth + "px"
          }),
          onClick: v[2] || (v[2] = //@ts-ignore
          (...l) => m(s) && m(s)(...l))
        }, Ct(m(n).btnText), 5)) : (F(), N("div", {
          key: 1,
          class: "fw-btn__image",
          onClick: v[3] || (v[3] = //@ts-ignore
          (...l) => m(s) && m(s)(...l))
        }, [
          $e(u.$slots, "button", {}, void 0, !0)
        ]))
      ])
    ]));
  }
});
const Uc = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, i] of t)
    r[a] = i;
  return r;
}, kc = /* @__PURE__ */ Uc(Kc, [["__scopeId", "data-v-2516156a"]]);
export {
  kc as default
};
