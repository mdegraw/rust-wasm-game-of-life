function C(){}function B(t,n){for(const e in n)t[e]=n[e];return t}function A(t){return t()}function S(){return Object.create(null)}function d(t){t.forEach(A)}function L(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function T(t){return Object.keys(t).length===0}function V(t,n,e,r){if(t){const o=D(t,n,e,r);return t[0](o)}}function D(t,n,e,r){return t[1]&&r?B(e.ctx.slice(),t[1](r(n))):e.ctx}function W(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const c=[],u=Math.max(n.dirty.length,o.length);for(let i=0;i<u;i+=1)c[i]=n.dirty[i]|o[i];return c}return n.dirty|o}return n.dirty}function X(t,n,e,r,o,c){if(o){const u=D(n,e,r,c);t.p(u,o)}}function Y(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function Z(t,n){t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function q(t){t.parentNode.removeChild(t)}function nt(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function et(){return M(" ")}function rt(){return M("")}function ot(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function st(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function F(t){return Array.from(t.childNodes)}function ct(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function P(t,n,e=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,!1,n),r}let h;function m(t){h=t}function y(){if(!h)throw new Error("Function called outside component initialization");return h}function ut(t){y().$$.on_mount.push(t)}function it(t){y().$$.on_destroy.push(t)}function at(){const t=y();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=P(n,e);r.slice().forEach(c=>{c.call(t,o)})}}}const _=[],N=[],g=[],O=[],G=Promise.resolve();let x=!1;function H(){x||(x=!0,G.then(z))}function b(t){g.push(t)}let $=!1;const E=new Set;function z(){if(!$){$=!0;do{for(let t=0;t<_.length;t+=1){const n=_[t];m(n),I(n.$$)}for(m(null),_.length=0;N.length;)N.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];E.has(n)||(E.add(n),n())}g.length=0}while(_.length);for(;O.length;)O.pop()();x=!1,$=!1,E.clear()}}function I(t){if(t.fragment!==null){t.update(),d(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const p=new Set;let l;function ft(){l={r:0,c:[],p:l}}function lt(){l.r||d(l.c),l=l.p}function J(t,n){t&&t.i&&(p.delete(t),t.i(n))}function dt(t,n,e,r){if(t&&t.o){if(p.has(t))return;p.add(t),l.c.push(()=>{p.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function _t(t){t&&t.c()}function K(t,n,e,r){const{fragment:o,on_mount:c,on_destroy:u,after_update:i}=t.$$;o&&o.m(n,e),r||b(()=>{const f=c.map(A).filter(L);u?u.push(...f):d(f),t.$$.on_mount=[]}),i.forEach(b)}function Q(t,n){const e=t.$$;e.fragment!==null&&(d(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function R(t,n){t.$$.dirty[0]===-1&&(_.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ht(t,n,e,r,o,c,u,i=[-1]){const f=h;m(t);const s=t.$$={fragment:null,ctx:null,props:c,update:C,not_equal:o,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:S(),dirty:i,skip_bound:!1,root:n.target||f.$$.root};u&&u(s.root);let v=!1;if(s.ctx=e?e(t,n.props||{},(a,w,...k)=>{const j=k.length?k[0]:w;return s.ctx&&o(s.ctx[a],s.ctx[a]=j)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](j),v&&R(t,a)),w}):[],s.update(),v=!0,d(s.before_update),s.fragment=r?r(s.ctx):!1,n.target){if(n.hydrate){const a=F(n.target);s.fragment&&s.fragment.l(a),a.forEach(q)}else s.fragment&&s.fragment.c();n.intro&&J(t.$$.fragment),K(t,n.target,n.anchor,n.customElement),z()}m(f)}class mt{$destroy(){Q(this,1),this.$destroy=C}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}$set(n){this.$$set&&!T(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ct as A,Q as B,d as C,ut as D,mt as S,et as a,st as b,tt as c,W as d,nt as e,dt as f,Y as g,q as h,ht as i,rt as j,ft as k,ot as l,lt as m,at as n,it as o,V as p,N as q,C as r,U as s,J as t,X as u,M as v,_t as w,Z as x,K as y,L as z};
