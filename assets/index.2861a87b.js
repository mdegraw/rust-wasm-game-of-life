import{S as Y,i as V,s as Z,e as b,a as R,b as k,c as w,l as j,u as pe,g as de,d as _e,t as P,f as D,h as v,j as ge,k as ye,m as he,n as be,o as we,p as ve,q as $e,r as S,v as ke,w as U,x as $,y as G,z as ne,A as Ce,B as W,C as Le,D as Ae}from"./vendor.951d9cbf.js";const Re=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};Re();let y,oe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});oe.decode();let x=null;function Pe(){return(x===null||x.buffer!==y.memory.buffer)&&(x=new Uint8Array(y.memory.buffer)),x}function le(t,e){return oe.decode(Pe().subarray(t,t+e))}function Me(t){return t==null}let ee=null;function re(){return(ee===null||ee.buffer!==y.memory.buffer)&&(ee=new Int32Array(y.memory.buffer)),ee}function Fe(t){return()=>{throw new Error(`${t} is not defined`)}}const Oe=Object.freeze({Dead:0,"0":"Dead",Alive:1,"1":"Alive"});class B{static __wrap(e){const n=Object.create(B.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();y.__wbg_universe_free(e)}static new(e){var n=y.universe_new(Me(e)?16777215:e?1:0);return B.__wrap(n)}static square_one(){var e=y.universe_square_one();return B.__wrap(e)}width(){var e=y.universe_width(this.ptr);return e>>>0}height(){var e=y.universe_height(this.ptr);return e>>>0}cells(){var e=y.universe_cells(this.ptr);return e}tick(){y.universe_tick(this.ptr)}render(){try{const s=y.__wbindgen_add_to_stack_pointer(-16);y.universe_render(s,this.ptr);var e=re()[s/4+0],n=re()[s/4+1];return le(e,n)}finally{y.__wbindgen_add_to_stack_pointer(16),y.__wbindgen_free(e,n)}}toggle_cell(e,n){y.universe_toggle_cell(this.ptr,e,n)}}async function De(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(s){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}async function ie(t){typeof t=="undefined"&&(t=new URL("/rust-wasm-game-of-life/assets/rust_wasm_game_of_life_bg.9e487d61.wasm",self.location));const e={};e.wbg={},e.wbg.__wbg_random_a582babfa4489c72=typeof Math.random=="function"?Math.random:Fe("Math.random"),e.wbg.__wbindgen_throw=function(o,l){throw new Error(le(o,l))},(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:s}=await De(await t,e);return y=n.exports,ie.__wbindgen_wasm_module=s,y}var M;(function(t){t.Rules="rules",t.Patterns="patterns",t.Usage="usage"})(M||(M={}));const Ie=t=>({}),ae=t=>({});function ce(t){let e,n,s,o,l,r;const m=t[5].body,c=ve(m,t,t[4],ae);return{c(){e=b("div"),n=R(),s=b("div"),c&&c.c(),k(e,"class","modal-background svelte-7ofpci"),k(s,"class","modal svelte-7ofpci"),k(s,"role","dialog"),k(s,"aria-modal","true")},m(u,d){w(u,e,d),w(u,n,d),w(u,s,d),c&&c.m(s,null),t[6](s),o=!0,l||(r=j(e,"click",t[2]),l=!0)},p(u,d){c&&c.p&&(!o||d&16)&&pe(c,m,u,u[4],o?_e(m,u[4],d,Ie):de(u[4]),ae)},i(u){o||(P(c,u),o=!0)},o(u){D(c,u),o=!1},d(u){u&&v(e),u&&v(n),u&&v(s),c&&c.d(u),t[6](null),l=!1,r()}}}function Se(t){let e,n,s,o,l=t[0]&&ce(t);return{c(){l&&l.c(),e=ge()},m(r,m){l&&l.m(r,m),w(r,e,m),n=!0,s||(o=j(window,"keydown",t[3]),s=!0)},p(r,[m]){r[0]?l?(l.p(r,m),m&1&&P(l,1)):(l=ce(r),l.c(),P(l,1),l.m(e.parentNode,e)):l&&(ye(),D(l,1,1,()=>{l=null}),he())},i(r){n||(P(l),n=!0)},o(r){D(l),n=!1},d(r){l&&l.d(r),r&&v(e),s=!1,o()}}}function Ee(t,e,n){let{$$slots:s={},$$scope:o}=e;const l=be(),r=()=>l("close");let{open:m=!1}=e,c;const u=p=>{if(p.key==="Escape"){r();return}if(p.key==="Tab"){const H=c.querySelectorAll("*"),C=Array.from(H).filter(I=>I.tabIndex>=0);let a=C.indexOf(document.activeElement);a===-1&&p.shiftKey&&(a=0),a+=C.length+(p.shiftKey?-1:1),a%=C.length,C[a].focus(),p.preventDefault()}},d=typeof document!="undefined"&&document.activeElement;d&&we(()=>{d.focus()});function z(p){$e[p?"unshift":"push"](()=>{c=p,n(1,c)})}return t.$$set=p=>{"open"in p&&n(0,m=p.open),"$$scope"in p&&n(4,o=p.$$scope)},[m,c,r,u,o,s,z]}class se extends Y{constructor(e){super();V(this,e,Ee,Se,Z,{open:0})}}function Te(t){let e;return{c(){e=b("div"),e.innerHTML=`<h3>Interesting Patterns (<a href="http://pi.math.cornell.edu/~lipa/mec/lesson6.html" target="_blank" class="svelte-15pubte">source</a>)</h3> 
  <h3>Still Patterns:</h3> 
  <ul class="pattern-list svelte-15pubte"><li class="svelte-15pubte">Square: <img src="images/sq.png" alt="square pattern"/></li> 
    <li class="svelte-15pubte">Boat: <img src="images/boat.png" alt="boat pattern"/></li> 
    <li class="svelte-15pubte">Loaf: <img src="images/loaf.png" alt="loaf pattern"/></li> 
    <li class="svelte-15pubte">Ship: <img src="images/ship.png" alt="ship pattern"/></li></ul> 
  <h3>Dynamic Patterns:</h3> 
  <ul class="pattern-list svelte-15pubte"><li class="svelte-15pubte">Trimino: <img src="images/trimino.png" alt="trimino pattern"/>,</li> 
    <li class="svelte-15pubte">Glider: <img src="images/glider.png" alt="glider pattern"/></li> 
    <li class="svelte-15pubte">Lightweight Space Ship: <img src="images/lwss.png" alt="lightweight space ship pattern"/></li> 
    <li class="svelte-15pubte">F-pentomino: <img src="images/f.png" alt="f-pentomino pattern"/></li> 
    <li class="svelte-15pubte">Acorn: <img src="images/acorn.png" alt="acorn pattern"/></li></ul>`},m(n,s){w(n,e,s)},p:S,i:S,o:S,d(n){n&&v(e)}}}class je extends Y{constructor(e){super();V(this,e,null,Te,Z,{})}}function qe(t){let e;return{c(){e=b("div"),e.innerHTML=`<h3>Conway&#39;s Game of Life (<a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" class="svelte-1i0dxm8">wikipedia</a>) Rules:</h3> 
  <ul class="rule-list svelte-1i0dxm8"><li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li> 
    <li>Any live cell with two or three live neighbours lives on to the next generation.</li> 
    <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li> 
    <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by
      reproduction.</li></ul>`},m(n,s){w(n,e,s)},p:S,i:S,o:S,d(n){n&&v(e)}}}class Ue extends Y{constructor(e){super();V(this,e,null,qe,Z,{})}}function Ge(t){let e;return{c(){e=b("div"),e.innerHTML=`<h3>Usage</h3> 
  <ul class="usage-list svelte-480ker"><li>Click Pause and select cells on the canvas grid to create your own patterns.</li> 
    <li>Click Play to see them evolve.</li> 
    <li>Click Randomize to see a randomly generated universe.</li> 
    <li>Click Heat Death to set all the cells to dead for a blank canvas.</li></ul>`},m(n,s){w(n,e,s)},p:S,i:S,o:S,d(n){n&&v(e)}}}class We extends Y{constructor(e){super();V(this,e,null,Ge,Z,{})}}function Be(t){let e,n;return e=new Ue({}),{c(){U(e.$$.fragment)},m(s,o){G(e,s,o),n=!0},i(s){n||(P(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){W(e,s)}}}function ze(t){let e,n;return e=new We({}),{c(){U(e.$$.fragment)},m(s,o){G(e,s,o),n=!0},i(s){n||(P(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){W(e,s)}}}function He(t){let e,n;return e=new je({}),{c(){U(e.$$.fragment)},m(s,o){G(e,s,o),n=!0},i(s){n||(P(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){W(e,s)}}}function Ne(t){let e,n,s=(t[0]?"Pause":"Play")+"",o,l,r,m,c,u,d,z,p,H,C,a,I,J,F,L,h,A,_,O,E,Q;return F=new se({props:{open:t[1].show&&t[1].type===M.Rules,$$slots:{body:[Be]},$$scope:{ctx:t}}}),F.$on("close",t[6]),h=new se({props:{open:t[1].show&&t[1].type===M.Usage,$$slots:{body:[ze]},$$scope:{ctx:t}}}),h.$on("close",t[6]),_=new se({props:{open:t[1].show&&t[1].type===M.Patterns,$$slots:{body:[He]},$$scope:{ctx:t}}}),_.$on("close",t[6]),{c(){e=b("div"),n=b("button"),o=ke(s),l=R(),r=b("button"),r.textContent="Randomize",m=R(),c=b("button"),c.textContent="Heat Death",u=R(),d=b("button"),d.textContent="Rules",z=R(),p=b("button"),p.textContent="Usage",H=R(),C=b("button"),C.textContent="Patterns",a=R(),I=b("canvas"),J=R(),U(F.$$.fragment),L=R(),U(h.$$.fragment),A=R(),U(_.$$.fragment),k(n,"class","gol-btn gol-pause-play svelte-1j1u06u"),k(r,"class","gol-btn svelte-1j1u06u"),k(c,"class","gol-btn svelte-1j1u06u"),k(d,"class","gol-btn svelte-1j1u06u"),k(p,"class","gol-btn svelte-1j1u06u"),k(C,"class","gol-btn svelte-1j1u06u"),k(e,"class","gol-btn-row svelte-1j1u06u"),k(I,"class","game-of-life-canvas"),k(I,"id","game-of-life-canvas")},m(i,f){w(i,e,f),$(e,n),$(n,o),$(e,l),$(e,r),$(e,m),$(e,c),$(e,u),$(e,d),$(e,z),$(e,p),$(e,H),$(e,C),w(i,a,f),w(i,I,f),w(i,J,f),G(F,i,f),w(i,L,f),G(h,i,f),w(i,A,f),G(_,i,f),O=!0,E||(Q=[j(n,"click",function(){ne(t[2])&&t[2].apply(this,arguments)}),j(r,"click",function(){ne(t[4])&&t[4].apply(this,arguments)}),j(c,"click",function(){ne(t[3])&&t[3].apply(this,arguments)}),j(d,"click",t[8]),j(p,"click",t[9]),j(C,"click",t[10])],E=!0)},p(i,[f]){t=i,(!O||f&1)&&s!==(s=(t[0]?"Pause":"Play")+"")&&Ce(o,s);const N={};f&2&&(N.open=t[1].show&&t[1].type===M.Rules),f&4096&&(N.$$scope={dirty:f,ctx:t}),F.$set(N);const q={};f&2&&(q.open=t[1].show&&t[1].type===M.Usage),f&4096&&(q.$$scope={dirty:f,ctx:t}),h.$set(q);const g={};f&2&&(g.open=t[1].show&&t[1].type===M.Patterns),f&4096&&(g.$$scope={dirty:f,ctx:t}),_.$set(g)},i(i){O||(P(F.$$.fragment,i),P(h.$$.fragment,i),P(_.$$.fragment,i),O=!0)},o(i){D(F.$$.fragment,i),D(h.$$.fragment,i),D(_.$$.fragment,i),O=!1},d(i){i&&v(e),i&&v(a),i&&v(I),i&&v(J),W(F,i),i&&v(L),W(h,i),i&&v(A),W(_,i),E=!1,Le(Q)}}}let Ke=!0;function Xe(t,e,n){let{memory:s}=e,o,l=!0,r={show:!1},m,c,u;const d=({type:a})=>{n(1,r={type:a,show:!0})},z=()=>{n(1,r={show:!1})};Ae(()=>{const a=5,I="#CCCCCC",J="#FFFFFF",F="#000000";o=B.new(Ke);const L=o.width(),h=o.height(),A=document.getElementById("game-of-life-canvas");A.height=(a+1)*h+1,A.width=(a+1)*L+1;const _=A.getContext("2d");let O=null;const E=()=>{_.beginPath(),_.strokeStyle=I;for(let g=0;g<=L;g++)_.moveTo(g*(a+1)+1,0),_.lineTo(g*(a+1)+1,(a+1)*h+1);for(let g=0;g<=h;g++)_.moveTo(0,g*(a+1)+1),_.lineTo((a+1)*L+1,g*(a+1)+1);_.stroke()},Q=(g,T)=>g*L+T,i=()=>{const g=o.cells(),T=new Uint8Array(s.buffer,g,L*h);_.beginPath();for(let K=0;K<h;K++)for(let X=0;X<L;X++){const te=Q(K,X);_.fillStyle=T[te]===Oe.Dead?J:F,_.fillRect(X*(a+1)+1,K*(a+1)+1,a,a)}_.stroke()},f=()=>{l&&(o.tick(),E(),i(),O=requestAnimationFrame(f))},N=()=>{f()},q=()=>{n(0,l=!1),typeof O=="number"&&cancelAnimationFrame(O),O=null};A.addEventListener("click",g=>{const T=A.getBoundingClientRect(),K=A.width/T.width,X=A.height/T.height,te=(g.clientX-T.left)*K,ue=(g.clientY-T.top)*X,fe=Math.min(Math.floor(ue/(a+1)),h-1),me=Math.min(Math.floor(te/(a+1)),L-1);o.toggle_cell(fe,me),E(),i()}),n(2,m=()=>{n(0,l=!l),l?N():q()}),n(3,c=()=>{o=B.square_one(),E(),i(),q()}),n(4,u=()=>{o=B.new(!0),E(),i(),l||q()}),N()});const p=()=>d({show:!0,type:M.Rules}),H=()=>d({show:!0,type:M.Usage}),C=()=>d({show:!0,type:M.Patterns});return t.$$set=a=>{"memory"in a&&n(7,s=a.memory)},[l,r,m,c,u,d,z,s,p,H,C]}class Ye extends Y{constructor(e){super();V(this,e,Xe,Ne,Z,{memory:7})}}function Ve(t){let e,n,s,o,l;return o=new Ye({props:{memory:t[0]}}),{c(){e=b("main"),n=b("h1"),n.textContent="Conway's Game of Life",s=R(),U(o.$$.fragment)},m(r,m){w(r,e,m),$(e,n),$(e,s),G(o,e,null),l=!0},p(r,[m]){const c={};m&1&&(c.memory=r[0]),o.$set(c)},i(r){l||(P(o.$$.fragment,r),l=!0)},o(r){D(o.$$.fragment,r),l=!1},d(r){r&&v(e),W(o)}}}function Ze(t,e,n){let{memory:s}=e;return t.$$set=o=>{"memory"in o&&n(0,s=o.memory)},[s]}class Je extends Y{constructor(e){super();V(this,e,Ze,Ve,Z,{memory:0})}}const Qe=async()=>{const t=performance.now(),{memory:e}=await ie(),n=performance.now();console.log(`Call to wasm init took ${n-t} milliseconds`),new Je({target:document.body,props:{memory:e}})};Qe();
