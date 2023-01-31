(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function it(){}function ce(i,e){for(const t in e)i[t]=e[t];return i}function zc(i){return i()}function Pa(){return Object.create(null)}function vt(i){i.forEach(zc)}function ji(i){return typeof i=="function"}function Ge(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function Uu(i){return Object.keys(i).length===0}function ca(i,...e){if(i==null)return it;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Hn(i){let e;return ca(i,t=>e=t)(),e}function bt(i,e,t){i.$$.on_destroy.push(ca(e,t))}function at(i,e,t,n){if(i){const s=Oc(i,e,t,n);return i[0](s)}}function Oc(i,e,t,n){return i[1]&&n?ce(t.ctx.slice(),i[1](n(e))):t.ctx}function ot(i,e,t,n){if(i[2]&&n){const s=i[2](n(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],a=Math.max(e.dirty.length,s.length);for(let o=0;o<a;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function lt(i,e,t,n,s,r){if(s){const a=Oc(e,t,n,r);i.p(a,s)}}function ct(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Ye(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function Le(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function ua(i){const e={};for(const t in i)e[t]=!0;return e}function Xt(i,e,t){return i.set(t),e}function Bu(i){return i&&ji(i.destroy)?i.destroy:it}function ie(i,e){i.appendChild(e)}function K(i,e,t){i.insertBefore(e,t||null)}function Z(i){i.parentNode&&i.parentNode.removeChild(i)}function er(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function he(i){return document.createElement(i)}function rt(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Be(i){return document.createTextNode(i)}function ye(){return Be(" ")}function Bt(){return Be("")}function fe(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function Gu(i){return function(e){return e.stopPropagation(),i.call(this,e)}}function ne(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Fe(i,e){const t=Object.getOwnPropertyDescriptors(i.__proto__);for(const n in e)e[n]==null?i.removeAttribute(n):n==="style"?i.style.cssText=e[n]:n==="__value"?i.value=i[n]=e[n]:t[n]&&t[n].set?i[n]=e[n]:ne(i,n,e[n])}function $t(i,e){for(const t in e)ne(i,t,e[t])}function Vu(i){return Array.from(i.childNodes)}function st(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function Da(i,e,t,n){t===null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function I(i,e,t){i.classList[t?"add":"remove"](e)}function Hu(i,e,{bubbles:t=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(i,t,n,e),s}function Bi(i,e){return new i(e)}let us;function cs(i){us=i}function Xn(){if(!us)throw new Error("Function called outside component initialization");return us}function Wu(i){Xn().$$.before_update.push(i)}function qi(i){Xn().$$.on_mount.push(i)}function fa(i){Xn().$$.after_update.push(i)}function Mt(i){Xn().$$.on_destroy.push(i)}function Cn(){const i=Xn();return(e,t,{cancelable:n=!1}={})=>{const s=i.$$.callbacks[e];if(s){const r=Hu(e,t,{cancelable:n});return s.slice().forEach(a=>{a.call(i,r)}),!r.defaultPrevented}return!0}}function Jt(i,e){return Xn().$$.context.set(i,e),e}function en(i){return Xn().$$.context.get(i)}function pe(i,e){const t=i.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const ki=[],Tt=[],qs=[],Kr=[],Nc=Promise.resolve();let Jr=!1;function Uc(){Jr||(Jr=!0,Nc.then(Bc))}function da(){return Uc(),Nc}function Qs(i){qs.push(i)}function Yn(i){Kr.push(i)}const ur=new Set;let gi=0;function Bc(){if(gi!==0)return;const i=us;do{try{for(;gi<ki.length;){const e=ki[gi];gi++,cs(e),ju(e.$$)}}catch(e){throw ki.length=0,gi=0,e}for(cs(null),ki.length=0,gi=0;Tt.length;)Tt.pop()();for(let e=0;e<qs.length;e+=1){const t=qs[e];ur.has(t)||(ur.add(t),t())}qs.length=0}while(ki.length);for(;Kr.length;)Kr.pop()();Jr=!1,ur.clear(),cs(i)}function ju(i){if(i.fragment!==null){i.update(),vt(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Qs)}}const Xs=new Set;let ai;function ut(){ai={r:0,c:[],p:ai}}function ft(){ai.r||vt(ai.c),ai=ai.p}function z(i,e){i&&i.i&&(Xs.delete(i),i.i(e))}function G(i,e,t,n){if(i&&i.o){if(Xs.has(i))return;Xs.add(i),ai.c.push(()=>{Xs.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function Gc(i,e){G(i,1,1,()=>{e.delete(i.key)})}function Vc(i,e,t,n,s,r,a,o,l,c,u,f){let d=i.length,h=r.length,p=d;const m={};for(;p--;)m[i[p].key]=p;const g=[],b=new Map,M=new Map;for(p=h;p--;){const S=f(s,r,p),A=t(S);let v=a.get(A);v?n&&v.p(S,e):(v=c(A,S),v.c()),b.set(A,g[p]=v),A in m&&M.set(A,Math.abs(p-m[A]))}const x=new Set,y=new Set;function _(S){z(S,1),S.m(o,u),a.set(S.key,S),u=S.first,h--}for(;d&&h;){const S=g[h-1],A=i[d-1],v=S.key,E=A.key;S===A?(u=S.first,d--,h--):b.has(E)?!a.has(v)||x.has(v)?_(S):y.has(E)?d--:M.get(v)>M.get(E)?(y.add(v),_(S)):(x.add(E),d--):(l(A,a),d--)}for(;d--;){const S=i[d];b.has(S.key)||l(S,a)}for(;h;)_(g[h-1]);return g}function Ke(i,e){const t={},n={},s={$$scope:1};let r=i.length;for(;r--;){const a=i[r],o=e[r];if(o){for(const l in a)l in o||(n[l]=1);for(const l in o)s[l]||(t[l]=o[l],s[l]=1);i[r]=o}else for(const l in a)s[l]=1}for(const a in n)a in t||(t[a]=void 0);return t}function Xi(i){return typeof i=="object"&&i!==null?i:{}}function Zn(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function Ee(i){i&&i.c()}function Se(i,e,t,n){const{fragment:s,after_update:r}=i.$$;s&&s.m(e,t),n||Qs(()=>{const a=i.$$.on_mount.map(zc).filter(ji);i.$$.on_destroy?i.$$.on_destroy.push(...a):vt(a),i.$$.on_mount=[]}),r.forEach(Qs)}function we(i,e){const t=i.$$;t.fragment!==null&&(vt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function qu(i,e){i.$$.dirty[0]===-1&&(ki.push(i),Uc(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function He(i,e,t,n,s,r,a,o=[-1]){const l=us;cs(i);const c=i.$$={fragment:null,ctx:[],props:r,update:it,not_equal:s,bound:Pa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Pa(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(f,d,...h)=>{const p=h.length?h[0]:d;return c.ctx&&s(c.ctx[f],c.ctx[f]=p)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](p),u&&qu(i,f)),d}):[],c.update(),u=!0,vt(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Vu(e.target);c.fragment&&c.fragment.l(f),f.forEach(Z)}else c.fragment&&c.fragment.c();e.intro&&z(i.$$.fragment),Se(i,e.target,e.anchor,e.customElement),Bc()}cs(l)}class We{$destroy(){we(this,1),this.$destroy=it}$on(e,t){if(!ji(t))return it;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Uu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _i=[];function Hc(i,e){return{subscribe:ht(i,e).subscribe}}function ht(i,e=it){let t;const n=new Set;function s(o){if(Ge(i,o)&&(i=o,t)){const l=!_i.length;for(const c of n)c[1](),_i.push(c,i);if(l){for(let c=0;c<_i.length;c+=2)_i[c][0](_i[c+1]);_i.length=0}}}function r(o){s(o(i))}function a(o,l=it){const c=[o,l];return n.add(c),n.size===1&&(t=e(s)||it),o(i),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:a}}function Xu(i,e,t){const n=!Array.isArray(i),s=n?[i]:i,r=e.length<2;return Hc(t,a=>{let o=!1;const l=[];let c=0,u=it;const f=()=>{if(c)return;u();const h=e(n?l[0]:l,a);r?a(h):u=ji(h)?h:it},d=s.map((h,p)=>ca(h,m=>{l[p]=m,c&=~(1<<p),o&&f()},()=>{c|=1<<p}));return o=!0,f(),function(){vt(d),u()}})}function Ra(i){let e,t;return{c(){e=rt("title"),t=Be(i[1])},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s&2&&st(t,n[1])},d(n){n&&Z(e)}}}function Yu(i){let e,t,n=i[1]&&Ra(i),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],r={};for(let a=0;a<s.length;a+=1)r=ce(r,s[a]);return{c(){e=rt("svg"),n&&n.c(),t=rt("path"),ne(t,"d","M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"),$t(e,r)},m(a,o){K(a,e,o),n&&n.m(e,null),ie(e,t)},p(a,[o]){a[1]?n?n.p(a,o):(n=Ra(a),n.c(),n.m(e,t)):n&&(n.d(1),n=null),$t(e,r=Ke(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},o&1&&{width:a[0]},o&1&&{height:a[0]},o&4&&a[2],o&8&&a[3]]))},i:it,o:it,d(a){a&&Z(e),n&&n.d()}}}function Zu(i,e,t){let n,s;const r=["size","title"];let a=Le(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ce(ce({},e),Ye(c))),t(3,a=Le(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Ye(e),[o,l,s,a,n]}class Ku extends We{constructor(e){super(),He(this,e,Zu,Yu,Ge,{size:0,title:1})}}const ha=Ku;function Ia(i,e,t){const n=i.slice();return n[2]=e[t].width,n}function Ju(i){let e,t,n,s,r=[i[4],{style:t="width: "+i[2]+";"+i[4].style}],a={};for(let o=0;o<r.length;o+=1)a=ce(a,r[o]);return{c(){e=he("p"),Fe(e,a),I(e,"bx--skeleton__text",!0),I(e,"bx--skeleton__heading",i[0])},m(o,l){K(o,e,l),n||(s=[fe(e,"click",i[12]),fe(e,"mouseover",i[13]),fe(e,"mouseenter",i[14]),fe(e,"mouseleave",i[15])],n=!0)},p(o,l){Fe(e,a=Ke(r,[l&16&&o[4],l&20&&t!==(t="width: "+o[2]+";"+o[4].style)&&{style:t}])),I(e,"bx--skeleton__text",!0),I(e,"bx--skeleton__heading",o[0])},d(o){o&&Z(e),n=!1,vt(s)}}}function Qu(i){let e,t,n,s=i[3],r=[];for(let l=0;l<s.length;l+=1)r[l]=ka(Ia(i,s,l));let a=[i[4]],o={};for(let l=0;l<a.length;l+=1)o=ce(o,a[l]);return{c(){e=he("div");for(let l=0;l<r.length;l+=1)r[l].c();Fe(e,o)},m(l,c){K(l,e,c);for(let u=0;u<r.length;u+=1)r[u].m(e,null);t||(n=[fe(e,"click",i[8]),fe(e,"mouseover",i[9]),fe(e,"mouseenter",i[10]),fe(e,"mouseleave",i[11])],t=!0)},p(l,c){if(c&9){s=l[3];let u;for(u=0;u<s.length;u+=1){const f=Ia(l,s,u);r[u]?r[u].p(f,c):(r[u]=ka(f),r[u].c(),r[u].m(e,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=s.length}Fe(e,o=Ke(a,[c&16&&l[4]]))},d(l){l&&Z(e),er(r,l),t=!1,vt(n)}}}function ka(i){let e;return{c(){e=he("p"),Da(e,"width",i[2]),I(e,"bx--skeleton__text",!0),I(e,"bx--skeleton__heading",i[0])},m(t,n){K(t,e,n)},p(t,n){n&8&&Da(e,"width",t[2]),n&1&&I(e,"bx--skeleton__heading",t[0])},d(t){t&&Z(e)}}}function $u(i){let e;function t(r,a){return r[1]?Qu:Ju}let n=t(i),s=n(i);return{c(){s.c(),e=Bt()},m(r,a){s.m(r,a),K(r,e,a)},p(r,[a]){n===(n=t(r))&&s?s.p(r,a):(s.d(1),s=n(r),s&&(s.c(),s.m(e.parentNode,e)))},i:it,o:it,d(r){s.d(r),r&&Z(e)}}}function ef(i,e,t){let n,s,r;const a=["lines","heading","paragraph","width"];let o=Le(e,a),{lines:l=3}=e,{heading:c=!1}=e,{paragraph:u=!1}=e,{width:f="100%"}=e;const d=[.973,.153,.567];function h(_){pe.call(this,i,_)}function p(_){pe.call(this,i,_)}function m(_){pe.call(this,i,_)}function g(_){pe.call(this,i,_)}function b(_){pe.call(this,i,_)}function M(_){pe.call(this,i,_)}function x(_){pe.call(this,i,_)}function y(_){pe.call(this,i,_)}return i.$$set=_=>{e=ce(ce({},e),Ye(_)),t(4,o=Le(e,a)),"lines"in _&&t(5,l=_.lines),"heading"in _&&t(0,c=_.heading),"paragraph"in _&&t(1,u=_.paragraph),"width"in _&&t(2,f=_.width)},i.$$.update=()=>{if(i.$$.dirty&4&&t(7,s=parseInt(f,10)),i.$$.dirty&4&&t(6,r=f.includes("px")),i.$$.dirty&238&&u)for(let _=0;_<l;_++){const S=r?s-75:0,A=r?s:75,v=Math.floor(d[_%3]*(A-S+1))+S+"px";t(3,n=[...n,{width:r?v:`calc(${f} - ${v})`}])}},t(3,n=[]),[c,u,f,n,o,l,r,s,h,p,m,g,b,M,x,y]}class tf extends We{constructor(e){super(),He(this,e,ef,$u,Ge,{lines:5,heading:0,paragraph:1,width:2})}}const ss=tf;function Fa(i,e,t){const n=i.slice();return n[9]=e[t],n}function za(i){let e,t,n,s,r,a,o,l,c,u,f,d,h;return n=new ha({props:{class:"bx--accordion__arrow"}}),r=new ss({props:{class:"bx--accordion__title"}}),l=new ss({props:{width:"90%"}}),u=new ss({props:{width:"80%"}}),d=new ss({props:{width:"95%"}}),{c(){e=he("li"),t=he("span"),Ee(n.$$.fragment),s=ye(),Ee(r.$$.fragment),a=ye(),o=he("div"),Ee(l.$$.fragment),c=ye(),Ee(u.$$.fragment),f=ye(),Ee(d.$$.fragment),I(t,"bx--accordion__heading",!0),I(o,"bx--accordion__content",!0),I(e,"bx--accordion__item",!0),I(e,"bx--accordion__item--active",!0)},m(p,m){K(p,e,m),ie(e,t),Se(n,t,null),ie(t,s),Se(r,t,null),ie(e,a),ie(e,o),Se(l,o,null),ie(o,c),Se(u,o,null),ie(o,f),Se(d,o,null),h=!0},i(p){h||(z(n.$$.fragment,p),z(r.$$.fragment,p),z(l.$$.fragment,p),z(u.$$.fragment,p),z(d.$$.fragment,p),h=!0)},o(p){G(n.$$.fragment,p),G(r.$$.fragment,p),G(l.$$.fragment,p),G(u.$$.fragment,p),G(d.$$.fragment,p),h=!1},d(p){p&&Z(e),we(n),we(r),we(l),we(u),we(d)}}}function Oa(i,e){let t,n,s,r,a,o,l;return s=new ha({props:{class:"bx--accordion__arrow"}}),a=new ss({props:{class:"bx--accordion__title"}}),{key:i,first:null,c(){t=he("li"),n=he("span"),Ee(s.$$.fragment),r=ye(),Ee(a.$$.fragment),o=ye(),I(n,"bx--accordion__heading",!0),I(t,"bx--accordion__item",!0),this.first=t},m(c,u){K(c,t,u),ie(t,n),Se(s,n,null),ie(n,r),Se(a,n,null),ie(t,o),l=!0},p(c,u){},i(c){l||(z(s.$$.fragment,c),z(a.$$.fragment,c),l=!0)},o(c){G(s.$$.fragment,c),G(a.$$.fragment,c),l=!1},d(c){c&&Z(t),we(s),we(a)}}}function nf(i){let e,t,n=[],s=new Map,r,a,o,l=i[3]&&za(),c=Array.from({length:i[3]?i[0]-1:i[0]},Na);const u=h=>h[9];for(let h=0;h<c.length;h+=1){let p=Fa(i,c,h),m=u(p);s.set(m,n[h]=Oa(m))}let f=[i[4]],d={};for(let h=0;h<f.length;h+=1)d=ce(d,f[h]);return{c(){e=he("ul"),l&&l.c(),t=ye();for(let h=0;h<n.length;h+=1)n[h].c();Fe(e,d),I(e,"bx--skeleton",!0),I(e,"bx--accordion",!0),I(e,"bx--accordion--start",i[1]==="start"),I(e,"bx--accordion--end",i[1]==="end"),I(e,"bx--accordion--sm",i[2]==="sm"),I(e,"bx--accordion--xl",i[2]==="xl")},m(h,p){K(h,e,p),l&&l.m(e,null),ie(e,t);for(let m=0;m<n.length;m+=1)n[m].m(e,null);r=!0,a||(o=[fe(e,"click",i[5]),fe(e,"mouseover",i[6]),fe(e,"mouseenter",i[7]),fe(e,"mouseleave",i[8])],a=!0)},p(h,[p]){h[3]?l?p&8&&z(l,1):(l=za(),l.c(),z(l,1),l.m(e,t)):l&&(ut(),G(l,1,1,()=>{l=null}),ft()),p&9&&(c=Array.from({length:h[3]?h[0]-1:h[0]},Na),ut(),n=Vc(n,p,u,1,h,c,s,e,Gc,Oa,null,Fa),ft()),Fe(e,d=Ke(f,[p&16&&h[4]])),I(e,"bx--skeleton",!0),I(e,"bx--accordion",!0),I(e,"bx--accordion--start",h[1]==="start"),I(e,"bx--accordion--end",h[1]==="end"),I(e,"bx--accordion--sm",h[2]==="sm"),I(e,"bx--accordion--xl",h[2]==="xl")},i(h){if(!r){z(l);for(let p=0;p<c.length;p+=1)z(n[p]);r=!0}},o(h){G(l);for(let p=0;p<n.length;p+=1)G(n[p]);r=!1},d(h){h&&Z(e),l&&l.d();for(let p=0;p<n.length;p+=1)n[p].d();a=!1,vt(o)}}}const Na=(i,e)=>e;function sf(i,e,t){const n=["count","align","size","open"];let s=Le(e,n),{count:r=4}=e,{align:a="end"}=e,{size:o=void 0}=e,{open:l=!0}=e;function c(h){pe.call(this,i,h)}function u(h){pe.call(this,i,h)}function f(h){pe.call(this,i,h)}function d(h){pe.call(this,i,h)}return i.$$set=h=>{e=ce(ce({},e),Ye(h)),t(4,s=Le(e,n)),"count"in h&&t(0,r=h.count),"align"in h&&t(1,a=h.align),"size"in h&&t(2,o=h.size),"open"in h&&t(3,l=h.open)},[r,a,o,l,s,c,u,f,d]}class rf extends We{constructor(e){super(),He(this,e,sf,nf,Ge,{count:0,align:1,size:2,open:3})}}const af=rf;function of(i){let e,t,n,s;const r=i[6].default,a=at(r,i,i[5],null);let o=[i[3]],l={};for(let c=0;c<o.length;c+=1)l=ce(l,o[c]);return{c(){e=he("ul"),a&&a.c(),Fe(e,l),I(e,"bx--accordion",!0),I(e,"bx--accordion--start",i[0]==="start"),I(e,"bx--accordion--end",i[0]==="end"),I(e,"bx--accordion--sm",i[1]==="sm"),I(e,"bx--accordion--xl",i[1]==="xl")},m(c,u){K(c,e,u),a&&a.m(e,null),t=!0,n||(s=[fe(e,"click",i[7]),fe(e,"mouseover",i[8]),fe(e,"mouseenter",i[9]),fe(e,"mouseleave",i[10])],n=!0)},p(c,u){a&&a.p&&(!t||u&32)&&lt(a,r,c,c[5],t?ot(r,c[5],u,null):ct(c[5]),null),Fe(e,l=Ke(o,[u&8&&c[3]])),I(e,"bx--accordion",!0),I(e,"bx--accordion--start",c[0]==="start"),I(e,"bx--accordion--end",c[0]==="end"),I(e,"bx--accordion--sm",c[1]==="sm"),I(e,"bx--accordion--xl",c[1]==="xl")},i(c){t||(z(a,c),t=!0)},o(c){G(a,c),t=!1},d(c){c&&Z(e),a&&a.d(c),n=!1,vt(s)}}}function lf(i){let e,t;const n=[i[3],{align:i[0]},{size:i[1]}];let s={};for(let r=0;r<n.length;r+=1)s=ce(s,n[r]);return e=new af({props:s}),e.$on("click",i[11]),e.$on("mouseover",i[12]),e.$on("mouseenter",i[13]),e.$on("mouseleave",i[14]),{c(){Ee(e.$$.fragment)},m(r,a){Se(e,r,a),t=!0},p(r,a){const o=a&11?Ke(n,[a&8&&Xi(r[3]),a&1&&{align:r[0]},a&2&&{size:r[1]}]):{};e.$set(o)},i(r){t||(z(e.$$.fragment,r),t=!0)},o(r){G(e.$$.fragment,r),t=!1},d(r){we(e,r)}}}function cf(i){let e,t,n,s;const r=[lf,of],a=[];function o(l,c){return l[2]?0:1}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Bt()},m(l,c){a[e].m(l,c),K(l,n,c),s=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ut(),G(a[u],1,1,()=>{a[u]=null}),ft(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),z(t,1),t.m(n.parentNode,n))},i(l){s||(z(t),s=!0)},o(l){G(t),s=!1},d(l){a[e].d(l),l&&Z(n)}}}function uf(i,e,t){const n=["align","size","disabled","skeleton"];let s=Le(e,n),{$$slots:r={},$$scope:a}=e,{align:o="end"}=e,{size:l=void 0}=e,{disabled:c=!1}=e,{skeleton:u=!1}=e;const f=ht(c);Jt("Accordion",{disableItems:f});function d(y){pe.call(this,i,y)}function h(y){pe.call(this,i,y)}function p(y){pe.call(this,i,y)}function m(y){pe.call(this,i,y)}function g(y){pe.call(this,i,y)}function b(y){pe.call(this,i,y)}function M(y){pe.call(this,i,y)}function x(y){pe.call(this,i,y)}return i.$$set=y=>{e=ce(ce({},e),Ye(y)),t(3,s=Le(e,n)),"align"in y&&t(0,o=y.align),"size"in y&&t(1,l=y.size),"disabled"in y&&t(4,c=y.disabled),"skeleton"in y&&t(2,u=y.skeleton),"$$scope"in y&&t(5,a=y.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&f.set(c)},[o,l,u,s,c,a,r,d,h,p,m,g,b,M,x]}class ff extends We{constructor(e){super(),He(this,e,uf,cf,Ge,{align:0,size:1,disabled:4,skeleton:2})}}const df=ff,hf=i=>({}),Ua=i=>({});function mf(i){let e;return{c(){e=Be(i[2])},m(t,n){K(t,e,n)},p(t,n){n&4&&st(e,t[2])},d(t){t&&Z(e)}}}function pf(i){let e,t,n,s,r,a,o,l,c,u;n=new ha({props:{class:"bx--accordion__arrow","aria-label":i[3]}});const f=i[7].title,d=at(f,i,i[6],Ua),h=d||mf(i),p=i[7].default,m=at(p,i,i[6],null);let g=[i[5]],b={};for(let M=0;M<g.length;M+=1)b=ce(b,g[M]);return{c(){e=he("li"),t=he("button"),Ee(n.$$.fragment),s=ye(),r=he("div"),h&&h.c(),a=ye(),o=he("div"),m&&m.c(),I(r,"bx--accordion__title",!0),ne(t,"type","button"),ne(t,"title",i[3]),ne(t,"aria-expanded",i[0]),t.disabled=i[1],I(t,"bx--accordion__heading",!0),I(o,"bx--accordion__content",!0),Fe(e,b),I(e,"bx--accordion__item",!0),I(e,"bx--accordion__item--active",i[0]),I(e,"bx--accordion__item--disabled",i[1]),I(e,"bx--accordion__item--expanding",i[4]==="expanding"),I(e,"bx--accordion__item--collapsing",i[4]==="collapsing")},m(M,x){K(M,e,x),ie(e,t),Se(n,t,null),ie(t,s),ie(t,r),h&&h.m(r,null),ie(e,a),ie(e,o),m&&m.m(o,null),l=!0,c||(u=[fe(t,"click",i[9]),fe(t,"click",i[14]),fe(t,"mouseover",i[10]),fe(t,"mouseenter",i[11]),fe(t,"mouseleave",i[12]),fe(t,"keydown",i[13]),fe(t,"keydown",i[15]),fe(e,"animationend",i[8]),fe(e,"animationend",i[16])],c=!0)},p(M,[x]){const y={};x&8&&(y["aria-label"]=M[3]),n.$set(y),d?d.p&&(!l||x&64)&&lt(d,f,M,M[6],l?ot(f,M[6],x,hf):ct(M[6]),Ua):h&&h.p&&(!l||x&4)&&h.p(M,l?x:-1),(!l||x&8)&&ne(t,"title",M[3]),(!l||x&1)&&ne(t,"aria-expanded",M[0]),(!l||x&2)&&(t.disabled=M[1]),m&&m.p&&(!l||x&64)&&lt(m,p,M,M[6],l?ot(p,M[6],x,null):ct(M[6]),null),Fe(e,b=Ke(g,[x&32&&M[5]])),I(e,"bx--accordion__item",!0),I(e,"bx--accordion__item--active",M[0]),I(e,"bx--accordion__item--disabled",M[1]),I(e,"bx--accordion__item--expanding",M[4]==="expanding"),I(e,"bx--accordion__item--collapsing",M[4]==="collapsing")},i(M){l||(z(n.$$.fragment,M),z(h,M),z(m,M),l=!0)},o(M){G(n.$$.fragment,M),G(h,M),G(m,M),l=!1},d(M){M&&Z(e),we(n),h&&h.d(M),m&&m.d(M),c=!1,vt(u)}}}function gf(i,e,t){const n=["title","open","disabled","iconDescription"];let s=Le(e,n),{$$slots:r={},$$scope:a}=e,{title:o="title"}=e,{open:l=!1}=e,{disabled:c=!1}=e,{iconDescription:u="Expand/Collapse"}=e,f=c;const h=en("Accordion").disableItems.subscribe(v=>{!v&&f||t(1,c=v)});let p;qi(()=>()=>{h()});function m(v){pe.call(this,i,v)}function g(v){pe.call(this,i,v)}function b(v){pe.call(this,i,v)}function M(v){pe.call(this,i,v)}function x(v){pe.call(this,i,v)}function y(v){pe.call(this,i,v)}const _=()=>{t(0,l=!l),t(4,p=l?"expanding":"collapsing")},S=({key:v})=>{l&&v==="Escape"&&t(0,l=!1)},A=()=>{t(4,p=void 0)};return i.$$set=v=>{e=ce(ce({},e),Ye(v)),t(5,s=Le(e,n)),"title"in v&&t(2,o=v.title),"open"in v&&t(0,l=v.open),"disabled"in v&&t(1,c=v.disabled),"iconDescription"in v&&t(3,u=v.iconDescription),"$$scope"in v&&t(6,a=v.$$scope)},[l,c,o,u,p,s,a,r,m,g,b,M,x,y,_,S,A]}class _f extends We{constructor(e){super(),He(this,e,gf,pf,Ge,{title:2,open:0,disabled:1,iconDescription:3})}}const Ba=_f;function bf(i){let e,t,n,s=[i[2]],r={};for(let a=0;a<s.length;a+=1)r=ce(r,s[a]);return{c(){e=he("div"),Fe(e,r),I(e,"bx--skeleton",!0),I(e,"bx--btn",!0),I(e,"bx--btn--field",i[1]==="field"),I(e,"bx--btn--sm",i[1]==="small"),I(e,"bx--btn--lg",i[1]==="lg"),I(e,"bx--btn--xl",i[1]==="xl")},m(a,o){K(a,e,o),t||(n=[fe(e,"click",i[7]),fe(e,"mouseover",i[8]),fe(e,"mouseenter",i[9]),fe(e,"mouseleave",i[10])],t=!0)},p(a,o){Fe(e,r=Ke(s,[o&4&&a[2]])),I(e,"bx--skeleton",!0),I(e,"bx--btn",!0),I(e,"bx--btn--field",a[1]==="field"),I(e,"bx--btn--sm",a[1]==="small"),I(e,"bx--btn--lg",a[1]==="lg"),I(e,"bx--btn--xl",a[1]==="xl")},d(a){a&&Z(e),t=!1,vt(n)}}}function vf(i){let e,t="",n,s,r,a,o=[{href:i[0]},{rel:s=i[2].target==="_blank"?"noopener noreferrer":void 0},{role:"button"},i[2]],l={};for(let c=0;c<o.length;c+=1)l=ce(l,o[c]);return{c(){e=he("a"),n=Be(t),Fe(e,l),I(e,"bx--skeleton",!0),I(e,"bx--btn",!0),I(e,"bx--btn--field",i[1]==="field"),I(e,"bx--btn--sm",i[1]==="small"),I(e,"bx--btn--lg",i[1]==="lg"),I(e,"bx--btn--xl",i[1]==="xl")},m(c,u){K(c,e,u),ie(e,n),r||(a=[fe(e,"click",i[3]),fe(e,"mouseover",i[4]),fe(e,"mouseenter",i[5]),fe(e,"mouseleave",i[6])],r=!0)},p(c,u){Fe(e,l=Ke(o,[u&1&&{href:c[0]},u&4&&s!==(s=c[2].target==="_blank"?"noopener noreferrer":void 0)&&{rel:s},{role:"button"},u&4&&c[2]])),I(e,"bx--skeleton",!0),I(e,"bx--btn",!0),I(e,"bx--btn--field",c[1]==="field"),I(e,"bx--btn--sm",c[1]==="small"),I(e,"bx--btn--lg",c[1]==="lg"),I(e,"bx--btn--xl",c[1]==="xl")},d(c){c&&Z(e),r=!1,vt(a)}}}function xf(i){let e;function t(r,a){return r[0]?vf:bf}let n=t(i),s=n(i);return{c(){s.c(),e=Bt()},m(r,a){s.m(r,a),K(r,e,a)},p(r,[a]){n===(n=t(r))&&s?s.p(r,a):(s.d(1),s=n(r),s&&(s.c(),s.m(e.parentNode,e)))},i:it,o:it,d(r){s.d(r),r&&Z(e)}}}function Mf(i,e,t){const n=["href","size"];let s=Le(e,n),{href:r=void 0}=e,{size:a="default"}=e;function o(m){pe.call(this,i,m)}function l(m){pe.call(this,i,m)}function c(m){pe.call(this,i,m)}function u(m){pe.call(this,i,m)}function f(m){pe.call(this,i,m)}function d(m){pe.call(this,i,m)}function h(m){pe.call(this,i,m)}function p(m){pe.call(this,i,m)}return i.$$set=m=>{e=ce(ce({},e),Ye(m)),t(2,s=Le(e,n)),"href"in m&&t(0,r=m.href),"size"in m&&t(1,a=m.size)},[r,a,s,o,l,c,u,f,d,h,p]}class yf extends We{constructor(e){super(),He(this,e,Mf,xf,Ge,{href:0,size:1})}}const Sf=yf,wf=i=>({props:i[0]&512}),Ga=i=>({props:i[9]});function Tf(i){let e,t,n,s,r,a,o=i[8]&&Va(i);const l=i[19].default,c=at(l,i,i[18],null);var u=i[2];function f(p){return{props:{"aria-hidden":"true",class:"bx--btn__icon",style:p[8]?"margin-left: 0":void 0,"aria-label":p[3]}}}u&&(n=Bi(u,f(i)));let d=[i[9]],h={};for(let p=0;p<d.length;p+=1)h=ce(h,d[p]);return{c(){e=he("button"),o&&o.c(),t=ye(),c&&c.c(),n&&Ee(n.$$.fragment),Fe(e,h)},m(p,m){K(p,e,m),o&&o.m(e,null),ie(e,t),c&&c.m(e,null),n&&Se(n,e,null),e.autofocus&&e.focus(),i[33](e),s=!0,r||(a=[fe(e,"click",i[24]),fe(e,"mouseover",i[25]),fe(e,"mouseenter",i[26]),fe(e,"mouseleave",i[27])],r=!0)},p(p,m){p[8]?o?o.p(p,m):(o=Va(p),o.c(),o.m(e,t)):o&&(o.d(1),o=null),c&&c.p&&(!s||m[0]&262144)&&lt(c,l,p,p[18],s?ot(l,p[18],m,null):ct(p[18]),null);const g={};if(m[0]&256&&(g.style=p[8]?"margin-left: 0":void 0),m[0]&8&&(g["aria-label"]=p[3]),u!==(u=p[2])){if(n){ut();const b=n;G(b.$$.fragment,1,0,()=>{we(b,1)}),ft()}u?(n=Bi(u,f(p)),Ee(n.$$.fragment),z(n.$$.fragment,1),Se(n,e,null)):n=null}else u&&n.$set(g);Fe(e,h=Ke(d,[m[0]&512&&p[9]]))},i(p){s||(z(c,p),n&&z(n.$$.fragment,p),s=!0)},o(p){G(c,p),n&&G(n.$$.fragment,p),s=!1},d(p){p&&Z(e),o&&o.d(),c&&c.d(p),n&&we(n),i[33](null),r=!1,vt(a)}}}function Ef(i){let e,t,n,s,r,a,o=i[8]&&Ha(i);const l=i[19].default,c=at(l,i,i[18],null);var u=i[2];function f(p){return{props:{"aria-hidden":"true",class:"bx--btn__icon","aria-label":p[3]}}}u&&(n=Bi(u,f(i)));let d=[i[9]],h={};for(let p=0;p<d.length;p+=1)h=ce(h,d[p]);return{c(){e=he("a"),o&&o.c(),t=ye(),c&&c.c(),n&&Ee(n.$$.fragment),Fe(e,h)},m(p,m){K(p,e,m),o&&o.m(e,null),ie(e,t),c&&c.m(e,null),n&&Se(n,e,null),i[32](e),s=!0,r||(a=[fe(e,"click",i[20]),fe(e,"mouseover",i[21]),fe(e,"mouseenter",i[22]),fe(e,"mouseleave",i[23])],r=!0)},p(p,m){p[8]?o?o.p(p,m):(o=Ha(p),o.c(),o.m(e,t)):o&&(o.d(1),o=null),c&&c.p&&(!s||m[0]&262144)&&lt(c,l,p,p[18],s?ot(l,p[18],m,null):ct(p[18]),null);const g={};if(m[0]&8&&(g["aria-label"]=p[3]),u!==(u=p[2])){if(n){ut();const b=n;G(b.$$.fragment,1,0,()=>{we(b,1)}),ft()}u?(n=Bi(u,f(p)),Ee(n.$$.fragment),z(n.$$.fragment,1),Se(n,e,null)):n=null}else u&&n.$set(g);Fe(e,h=Ke(d,[m[0]&512&&p[9]]))},i(p){s||(z(c,p),n&&z(n.$$.fragment,p),s=!0)},o(p){G(c,p),n&&G(n.$$.fragment,p),s=!1},d(p){p&&Z(e),o&&o.d(),c&&c.d(p),n&&we(n),i[32](null),r=!1,vt(a)}}}function Af(i){let e;const t=i[19].default,n=at(t,i,i[18],Ga);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r[0]&262656)&&lt(n,t,s,s[18],e?ot(t,s[18],r,wf):ct(s[18]),Ga)},i(s){e||(z(n,s),e=!0)},o(s){G(n,s),e=!1},d(s){n&&n.d(s)}}}function Cf(i){let e,t;const n=[{href:i[7]},{size:i[1]},i[10],{style:i[8]&&"width: 3rem;"}];let s={};for(let r=0;r<n.length;r+=1)s=ce(s,n[r]);return e=new Sf({props:s}),e.$on("click",i[28]),e.$on("mouseover",i[29]),e.$on("mouseenter",i[30]),e.$on("mouseleave",i[31]),{c(){Ee(e.$$.fragment)},m(r,a){Se(e,r,a),t=!0},p(r,a){const o=a[0]&1410?Ke(n,[a[0]&128&&{href:r[7]},a[0]&2&&{size:r[1]},a[0]&1024&&Xi(r[10]),a[0]&256&&{style:r[8]&&"width: 3rem;"}]):{};e.$set(o)},i(r){t||(z(e.$$.fragment,r),t=!0)},o(r){G(e.$$.fragment,r),t=!1},d(r){we(e,r)}}}function Va(i){let e,t;return{c(){e=he("span"),t=Be(i[3]),I(e,"bx--assistive-text",!0)},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s[0]&8&&st(t,n[3])},d(n){n&&Z(e)}}}function Ha(i){let e,t;return{c(){e=he("span"),t=Be(i[3]),I(e,"bx--assistive-text",!0)},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s[0]&8&&st(t,n[3])},d(n){n&&Z(e)}}}function Lf(i){let e,t,n,s;const r=[Cf,Af,Ef,Tf],a=[];function o(l,c){return l[5]?0:l[4]?1:l[7]&&!l[6]?2:3}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Bt()},m(l,c){a[e].m(l,c),K(l,n,c),s=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(ut(),G(a[u],1,1,()=>{a[u]=null}),ft(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),z(t,1),t.m(n.parentNode,n))},i(l){s||(z(t),s=!0)},o(l){G(t),s=!1},d(l){a[e].d(l),l&&Z(n)}}}function Pf(i,e,t){let n,s;const r=["kind","size","expressive","isSelected","icon","iconDescription","tooltipAlignment","tooltipPosition","as","skeleton","disabled","href","tabindex","type","ref"];let a=Le(e,r),{$$slots:o={},$$scope:l}=e;const c=ua(o);let{kind:u="primary"}=e,{size:f="default"}=e,{expressive:d=!1}=e,{isSelected:h=!1}=e,{icon:p=void 0}=e,{iconDescription:m=void 0}=e,{tooltipAlignment:g="center"}=e,{tooltipPosition:b="bottom"}=e,{as:M=!1}=e,{skeleton:x=!1}=e,{disabled:y=!1}=e,{href:_=void 0}=e,{tabindex:S="0"}=e,{type:A="button"}=e,{ref:v=null}=e;const E=en("ComposedModal");function w(H){pe.call(this,i,H)}function R(H){pe.call(this,i,H)}function j(H){pe.call(this,i,H)}function F(H){pe.call(this,i,H)}function D(H){pe.call(this,i,H)}function q(H){pe.call(this,i,H)}function re(H){pe.call(this,i,H)}function te(H){pe.call(this,i,H)}function Y(H){pe.call(this,i,H)}function ae(H){pe.call(this,i,H)}function oe(H){pe.call(this,i,H)}function k(H){pe.call(this,i,H)}function J(H){Tt[H?"unshift":"push"](()=>{v=H,t(0,v)})}function le(H){Tt[H?"unshift":"push"](()=>{v=H,t(0,v)})}return i.$$set=H=>{e=ce(ce({},e),Ye(H)),t(10,a=Le(e,r)),"kind"in H&&t(11,u=H.kind),"size"in H&&t(1,f=H.size),"expressive"in H&&t(12,d=H.expressive),"isSelected"in H&&t(13,h=H.isSelected),"icon"in H&&t(2,p=H.icon),"iconDescription"in H&&t(3,m=H.iconDescription),"tooltipAlignment"in H&&t(14,g=H.tooltipAlignment),"tooltipPosition"in H&&t(15,b=H.tooltipPosition),"as"in H&&t(4,M=H.as),"skeleton"in H&&t(5,x=H.skeleton),"disabled"in H&&t(6,y=H.disabled),"href"in H&&t(7,_=H.href),"tabindex"in H&&t(16,S=H.tabindex),"type"in H&&t(17,A=H.type),"ref"in H&&t(0,v=H.ref),"$$scope"in H&&t(18,l=H.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&1&&E&&v&&E.declareRef(v),i.$$.dirty[0]&4&&t(8,n=p&&!c.default),t(9,s={type:_&&!y?void 0:A,tabindex:S,disabled:y===!0?!0:void 0,href:_,"aria-pressed":n&&u==="ghost"&&!_?h:void 0,...a,class:["bx--btn",d&&"bx--btn--expressive",(f==="small"&&!d||f==="sm"&&!d||f==="small"&&!d)&&"bx--btn--sm",f==="field"&&!d||f==="md"&&!d&&"bx--btn--md",f==="field"&&"bx--btn--field",f==="small"&&"bx--btn--sm",f==="lg"&&"bx--btn--lg",f==="xl"&&"bx--btn--xl",u&&`bx--btn--${u}`,y&&"bx--btn--disabled",n&&"bx--btn--icon-only",n&&"bx--tooltip__trigger",n&&"bx--tooltip--a11y",n&&b&&`bx--btn--icon-only--${b}`,n&&g&&`bx--tooltip--align-${g}`,n&&h&&u==="ghost"&&"bx--btn--selected",a.class].filter(Boolean).join(" ")})},[v,f,p,m,M,x,y,_,n,s,a,u,d,h,g,b,S,A,l,o,w,R,j,F,D,q,re,te,Y,ae,oe,k,J,le]}class Df extends We{constructor(e){super(),He(this,e,Pf,Lf,Ge,{kind:11,size:1,expressive:12,isSelected:13,icon:2,iconDescription:3,tooltipAlignment:14,tooltipPosition:15,as:4,skeleton:5,disabled:6,href:7,tabindex:16,type:17,ref:0},null,[-1,-1])}}const Wc=Df;function Wa(i){let e,t;return{c(){e=rt("title"),t=Be(i[1])},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s&2&&st(t,n[1])},d(n){n&&Z(e)}}}function Rf(i){let e,t,n,s=i[1]&&Wa(i),r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],a={};for(let o=0;o<r.length;o+=1)a=ce(a,r[o]);return{c(){e=rt("svg"),s&&s.c(),t=rt("path"),n=rt("path"),ne(t,"d","M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"),ne(n,"fill","none"),ne(n,"d","M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z"),ne(n,"data-icon-path","inner-path"),ne(n,"opacity","0"),$t(e,a)},m(o,l){K(o,e,l),s&&s.m(e,null),ie(e,t),ie(e,n)},p(o,[l]){o[1]?s?s.p(o,l):(s=Wa(o),s.c(),s.m(e,t)):s&&(s.d(1),s=null),$t(e,a=Ke(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},l&1&&{width:o[0]},l&1&&{height:o[0]},l&4&&o[2],l&8&&o[3]]))},i:it,o:it,d(o){o&&Z(e),s&&s.d()}}}function If(i,e,t){let n,s;const r=["size","title"];let a=Le(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ce(ce({},e),Ye(c))),t(3,a=Le(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Ye(e),[o,l,s,a,n]}class kf extends We{constructor(e){super(),He(this,e,If,Rf,Ge,{size:0,title:1})}}const ma=kf;function ja(i){let e,t;return{c(){e=rt("title"),t=Be(i[1])},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s&2&&st(t,n[1])},d(n){n&&Z(e)}}}function Ff(i){let e,t,n,s,r=i[1]&&ja(i),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],o={};for(let l=0;l<a.length;l+=1)o=ce(o,a[l]);return{c(){e=rt("svg"),r&&r.c(),t=rt("path"),n=rt("path"),s=rt("path"),ne(t,"fill","none"),ne(t,"d","M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"),ne(t,"data-icon-path","inner-path"),ne(n,"d","M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"),ne(s,"d","M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"),$t(e,o)},m(l,c){K(l,e,c),r&&r.m(e,null),ie(e,t),ie(e,n),ie(e,s)},p(l,[c]){l[1]?r?r.p(l,c):(r=ja(l),r.c(),r.m(e,t)):r&&(r.d(1),r=null),$t(e,o=Ke(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},c&1&&{width:l[0]},c&1&&{height:l[0]},c&4&&l[2],c&8&&l[3]]))},i:it,o:it,d(l){l&&Z(e),r&&r.d()}}}function zf(i,e,t){let n,s;const r=["size","title"];let a=Le(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ce(ce({},e),Ye(c))),t(3,a=Le(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Ye(e),[o,l,s,a,n]}class Of extends We{constructor(e){super(),He(this,e,zf,Ff,Ge,{size:0,title:1})}}const Nf=Of;function qa(i){let e,t;return{c(){e=rt("title"),t=Be(i[1])},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s&2&&st(t,n[1])},d(n){n&&Z(e)}}}function Uf(i){let e,t,n=i[1]&&qa(i),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],r={};for(let a=0;a<s.length;a+=1)r=ce(r,s[a]);return{c(){e=rt("svg"),n&&n.c(),t=rt("path"),ne(t,"d","M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"),$t(e,r)},m(a,o){K(a,e,o),n&&n.m(e,null),ie(e,t)},p(a,[o]){a[1]?n?n.p(a,o):(n=qa(a),n.c(),n.m(e,t)):n&&(n.d(1),n=null),$t(e,r=Ke(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},o&1&&{width:a[0]},o&1&&{height:a[0]},o&4&&a[2],o&8&&a[3]]))},i:it,o:it,d(a){a&&Z(e),n&&n.d()}}}function Bf(i,e,t){let n,s;const r=["size","title"];let a=Le(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ce(ce({},e),Ye(c))),t(3,a=Le(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Ye(e),[o,l,s,a,n]}class Gf extends We{constructor(e){super(),He(this,e,Bf,Uf,Ge,{size:0,title:1})}}const jc=Gf;function Xa(i){let e,t;return{c(){e=rt("title"),t=Be(i[1])},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s&2&&st(t,n[1])},d(n){n&&Z(e)}}}function Vf(i){let e,t,n=i[1]&&Xa(i),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],r={};for(let a=0;a<s.length;a+=1)r=ce(r,s[a]);return{c(){e=rt("svg"),n&&n.c(),t=rt("path"),ne(t,"d","M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"),$t(e,r)},m(a,o){K(a,e,o),n&&n.m(e,null),ie(e,t)},p(a,[o]){a[1]?n?n.p(a,o):(n=Xa(a),n.c(),n.m(e,t)):n&&(n.d(1),n=null),$t(e,r=Ke(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},o&1&&{width:a[0]},o&1&&{height:a[0]},o&4&&a[2],o&8&&a[3]]))},i:it,o:it,d(a){a&&Z(e),n&&n.d()}}}function Hf(i,e,t){let n,s;const r=["size","title"];let a=Le(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ce(ce({},e),Ye(c))),t(3,a=Le(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Ye(e),[o,l,s,a,n]}class Wf extends We{constructor(e){super(),He(this,e,Hf,Vf,Ge,{size:0,title:1})}}const pa=Wf,jf=i=>({}),Ya=i=>({});function Za(i){let e,t;const n=i[16].labelText,s=at(n,i,i[15],Ya),r=s||qf(i);return{c(){e=he("span"),r&&r.c(),I(e,"bx--visually-hidden",i[7])},m(a,o){K(a,e,o),r&&r.m(e,null),t=!0},p(a,o){s?s.p&&(!t||o&32768)&&lt(s,n,a,a[15],t?ot(n,a[15],o,jf):ct(a[15]),Ya):r&&r.p&&(!t||o&64)&&r.p(a,t?o:-1),(!t||o&128)&&I(e,"bx--visually-hidden",a[7])},i(a){t||(z(r,a),t=!0)},o(a){G(r,a),t=!1},d(a){a&&Z(e),r&&r.d(a)}}}function qf(i){let e;return{c(){e=Be(i[6])},m(t,n){K(t,e,n)},p(t,n){n&64&&st(e,t[6])},d(t){t&&Z(e)}}}function Xf(i){let e,t,n,s,r,a,o,l,c,u=(i[6]||i[13].labelText)&&Za(i),f=[i[12]],d={};for(let h=0;h<f.length;h+=1)d=ce(d,f[h]);return{c(){e=he("div"),t=he("input"),n=ye(),s=he("label"),r=he("span"),a=ye(),u&&u.c(),ne(t,"type","radio"),ne(t,"id",i[8]),ne(t,"name",i[9]),t.checked=i[0],t.disabled=i[3],t.required=i[4],t.value=i[2],I(t,"bx--radio-button",!0),I(r,"bx--radio-button__appearance",!0),ne(s,"for",i[8]),I(s,"bx--radio-button__label",!0),Fe(e,d),I(e,"bx--radio-button-wrapper",!0),I(e,"bx--radio-button-wrapper--label-left",i[5]==="left")},m(h,p){K(h,e,p),ie(e,t),i[18](t),ie(e,n),ie(e,s),ie(s,r),ie(s,a),u&&u.m(s,null),o=!0,l||(c=[fe(t,"change",i[17]),fe(t,"change",i[19])],l=!0)},p(h,[p]){(!o||p&256)&&ne(t,"id",h[8]),(!o||p&512)&&ne(t,"name",h[9]),(!o||p&1)&&(t.checked=h[0]),(!o||p&8)&&(t.disabled=h[3]),(!o||p&16)&&(t.required=h[4]),(!o||p&4)&&(t.value=h[2]),h[6]||h[13].labelText?u?(u.p(h,p),p&8256&&z(u,1)):(u=Za(h),u.c(),z(u,1),u.m(s,null)):u&&(ut(),G(u,1,1,()=>{u=null}),ft()),(!o||p&256)&&ne(s,"for",h[8]),Fe(e,d=Ke(f,[p&4096&&h[12]])),I(e,"bx--radio-button-wrapper",!0),I(e,"bx--radio-button-wrapper--label-left",h[5]==="left")},i(h){o||(z(u),o=!0)},o(h){G(u),o=!1},d(h){h&&Z(e),i[18](null),u&&u.d(),l=!1,vt(c)}}}function Yf(i,e,t){const n=["value","checked","disabled","required","labelPosition","labelText","hideLabel","id","name","ref"];let s=Le(e,n),r,{$$slots:a={},$$scope:o}=e;const l=ua(a);let{value:c=""}=e,{checked:u=!1}=e,{disabled:f=!1}=e,{required:d=!1}=e,{labelPosition:h="right"}=e,{labelText:p=""}=e,{hideLabel:m=!1}=e,{id:g="ccs-"+Math.random().toString(36)}=e,{name:b=""}=e,{ref:M=null}=e;const x=en("RadioButtonGroup"),y=x?x.selectedValue:ht(u?c:void 0);bt(i,y,v=>t(14,r=v)),x&&x.add({id:g,checked:u,disabled:f,value:c});function _(v){pe.call(this,i,v)}function S(v){Tt[v?"unshift":"push"](()=>{M=v,t(1,M)})}const A=()=>{x&&x.update(c)};return i.$$set=v=>{e=ce(ce({},e),Ye(v)),t(12,s=Le(e,n)),"value"in v&&t(2,c=v.value),"checked"in v&&t(0,u=v.checked),"disabled"in v&&t(3,f=v.disabled),"required"in v&&t(4,d=v.required),"labelPosition"in v&&t(5,h=v.labelPosition),"labelText"in v&&t(6,p=v.labelText),"hideLabel"in v&&t(7,m=v.hideLabel),"id"in v&&t(8,g=v.id),"name"in v&&t(9,b=v.name),"ref"in v&&t(1,M=v.ref),"$$scope"in v&&t(15,o=v.$$scope)},i.$$.update=()=>{i.$$.dirty&16388&&t(0,u=r===c)},[u,M,c,f,d,h,p,m,g,b,x,y,s,l,r,o,a,_,S,A]}class Zf extends We{constructor(e){super(),He(this,e,Yf,Xf,Ge,{value:2,checked:0,disabled:3,required:4,labelPosition:5,labelText:6,hideLabel:7,id:8,name:9,ref:1})}}const Kf=Zf;function Ka(i){let e,t;return{c(){e=rt("title"),t=Be(i[1])},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s&2&&st(t,n[1])},d(n){n&&Z(e)}}}function Jf(i){let e,t,n,s=i[1]&&Ka(i),r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],a={};for(let o=0;o<r.length;o+=1)a=ce(a,r[o]);return{c(){e=rt("svg"),s&&s.c(),t=rt("path"),n=rt("path"),ne(t,"d","M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM14,21.5908l-5-5L10.5906,15,14,18.4092,21.41,11l1.5957,1.5859Z"),ne(n,"fill","none"),ne(n,"d","M14 21.591L9 16.591 10.591 15 14 18.409 21.41 11 23.005 12.585 14 21.591z"),ne(n,"data-icon-path","inner-path"),$t(e,a)},m(o,l){K(o,e,l),s&&s.m(e,null),ie(e,t),ie(e,n)},p(o,[l]){o[1]?s?s.p(o,l):(s=Ka(o),s.c(),s.m(e,t)):s&&(s.d(1),s=null),$t(e,a=Ke(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},l&1&&{width:o[0]},l&1&&{height:o[0]},l&4&&o[2],l&8&&o[3]]))},i:it,o:it,d(o){o&&Z(e),s&&s.d()}}}function Qf(i,e,t){let n,s;const r=["size","title"];let a=Le(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ce(ce({},e),Ye(c))),t(3,a=Le(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Ye(e),[o,l,s,a,n]}class $f extends We{constructor(e){super(),He(this,e,Qf,Jf,Ge,{size:0,title:1})}}const ed=$f;function td(i){let e,t,n,s,r,a,o,l,c,u=i[0]&&Ja(i),f=[{"aria-atomic":"true"},{"aria-labelledby":i[4]},{"aria-live":c=i[1]?"assertive":"off"},i[6]],d={};for(let h=0;h<f.length;h+=1)d=ce(d,f[h]);return{c(){e=he("div"),t=he("label"),n=Be(i[3]),s=ye(),r=rt("svg"),a=rt("title"),o=Be(i[3]),u&&u.c(),l=rt("circle"),ne(t,"id",i[4]),I(t,"bx--visually-hidden",!0),ne(l,"cx","50%"),ne(l,"cy","50%"),ne(l,"r",i[5]),I(l,"bx--loading__stroke",!0),ne(r,"viewBox","0 0 100 100"),I(r,"bx--loading__svg",!0),Fe(e,d),I(e,"bx--loading",!0),I(e,"bx--loading--small",i[0]),I(e,"bx--loading--stop",!i[1])},m(h,p){K(h,e,p),ie(e,t),ie(t,n),ie(e,s),ie(e,r),ie(r,a),ie(a,o),u&&u.m(r,null),ie(r,l)},p(h,p){p&8&&st(n,h[3]),p&16&&ne(t,"id",h[4]),p&8&&st(o,h[3]),h[0]?u?u.p(h,p):(u=Ja(h),u.c(),u.m(r,l)):u&&(u.d(1),u=null),p&32&&ne(l,"r",h[5]),Fe(e,d=Ke(f,[{"aria-atomic":"true"},p&16&&{"aria-labelledby":h[4]},p&2&&c!==(c=h[1]?"assertive":"off")&&{"aria-live":c},p&64&&h[6]])),I(e,"bx--loading",!0),I(e,"bx--loading--small",h[0]),I(e,"bx--loading--stop",!h[1])},d(h){h&&Z(e),u&&u.d()}}}function nd(i){let e,t,n,s,r,a,o,l,c,u,f=i[0]&&Qa(i),d=[i[6]],h={};for(let p=0;p<d.length;p+=1)h=ce(h,d[p]);return{c(){e=he("div"),t=he("div"),n=he("label"),s=Be(i[3]),r=ye(),a=rt("svg"),o=rt("title"),l=Be(i[3]),f&&f.c(),c=rt("circle"),ne(n,"id",i[4]),I(n,"bx--visually-hidden",!0),ne(c,"cx","50%"),ne(c,"cy","50%"),ne(c,"r",i[5]),I(c,"bx--loading__stroke",!0),ne(a,"viewBox","0 0 100 100"),I(a,"bx--loading__svg",!0),ne(t,"aria-atomic","true"),ne(t,"aria-labelledby",i[4]),ne(t,"aria-live",u=i[1]?"assertive":"off"),I(t,"bx--loading",!0),I(t,"bx--loading--small",i[0]),I(t,"bx--loading--stop",!i[1]),Fe(e,h),I(e,"bx--loading-overlay",!0),I(e,"bx--loading-overlay--stop",!i[1])},m(p,m){K(p,e,m),ie(e,t),ie(t,n),ie(n,s),ie(t,r),ie(t,a),ie(a,o),ie(o,l),f&&f.m(a,null),ie(a,c)},p(p,m){m&8&&st(s,p[3]),m&16&&ne(n,"id",p[4]),m&8&&st(l,p[3]),p[0]?f?f.p(p,m):(f=Qa(p),f.c(),f.m(a,c)):f&&(f.d(1),f=null),m&32&&ne(c,"r",p[5]),m&16&&ne(t,"aria-labelledby",p[4]),m&2&&u!==(u=p[1]?"assertive":"off")&&ne(t,"aria-live",u),m&1&&I(t,"bx--loading--small",p[0]),m&2&&I(t,"bx--loading--stop",!p[1]),Fe(e,h=Ke(d,[m&64&&p[6]])),I(e,"bx--loading-overlay",!0),I(e,"bx--loading-overlay--stop",!p[1])},d(p){p&&Z(e),f&&f.d()}}}function Ja(i){let e;return{c(){e=rt("circle"),ne(e,"cx","50%"),ne(e,"cy","50%"),ne(e,"r",i[5]),I(e,"bx--loading__background",!0)},m(t,n){K(t,e,n)},p(t,n){n&32&&ne(e,"r",t[5])},d(t){t&&Z(e)}}}function Qa(i){let e;return{c(){e=rt("circle"),ne(e,"cx","50%"),ne(e,"cy","50%"),ne(e,"r",i[5]),I(e,"bx--loading__background",!0)},m(t,n){K(t,e,n)},p(t,n){n&32&&ne(e,"r",t[5])},d(t){t&&Z(e)}}}function id(i){let e;function t(r,a){return r[2]?nd:td}let n=t(i),s=n(i);return{c(){s.c(),e=Bt()},m(r,a){s.m(r,a),K(r,e,a)},p(r,[a]){n===(n=t(r))&&s?s.p(r,a):(s.d(1),s=n(r),s&&(s.c(),s.m(e.parentNode,e)))},i:it,o:it,d(r){s.d(r),r&&Z(e)}}}function sd(i,e,t){let n;const s=["small","active","withOverlay","description","id"];let r=Le(e,s),{small:a=!1}=e,{active:o=!0}=e,{withOverlay:l=!0}=e,{description:c="Active loading indicator"}=e,{id:u="ccs-"+Math.random().toString(36)}=e;return i.$$set=f=>{e=ce(ce({},e),Ye(f)),t(6,r=Le(e,s)),"small"in f&&t(0,a=f.small),"active"in f&&t(1,o=f.active),"withOverlay"in f&&t(2,l=f.withOverlay),"description"in f&&t(3,c=f.description),"id"in f&&t(4,u=f.id)},i.$$.update=()=>{i.$$.dirty&1&&t(5,n=a?"42":"44")},[a,o,l,c,u,n,r]}class rd extends We{constructor(e){super(),He(this,e,sd,id,Ge,{small:0,active:1,withOverlay:2,description:3,id:4})}}const ad=rd;function $a(i){let e,t;const n=[{description:i[1]},i[3],{small:!0},{withOverlay:!1}];let s={};for(let r=0;r<n.length;r+=1)s=ce(s,n[r]);return e=new ad({props:s}),{c(){Ee(e.$$.fragment)},m(r,a){Se(e,r,a),t=!0},p(r,a){const o=a&10?Ke(n,[a&2&&{description:r[1]},a&8&&Xi(r[3]),n[2],n[3]]):{};e.$set(o)},i(r){t||(z(e.$$.fragment,r),t=!0)},o(r){G(e.$$.fragment,r),t=!1},d(r){we(e,r)}}}function eo(i){let e,t,n,s,r,a,o=i[2]&&to();n=new pa({});let l=[{"aria-label":i[1]},{type:"button"},{tabindex:"0"},i[3]],c={};for(let u=0;u<l.length;u+=1)c=ce(c,l[u]);return{c(){o&&o.c(),e=ye(),t=he("button"),Ee(n.$$.fragment),Fe(t,c),I(t,"bx--file-close",!0)},m(u,f){o&&o.m(u,f),K(u,e,f),K(u,t,f),Se(n,t,null),t.autofocus&&t.focus(),s=!0,r||(a=[fe(t,"click",i[4]),fe(t,"keydown",i[5])],r=!0)},p(u,f){u[2]?o?f&4&&z(o,1):(o=to(),o.c(),z(o,1),o.m(e.parentNode,e)):o&&(ut(),G(o,1,1,()=>{o=null}),ft()),Fe(t,c=Ke(l,[(!s||f&2)&&{"aria-label":u[1]},{type:"button"},{tabindex:"0"},f&8&&u[3]])),I(t,"bx--file-close",!0)},i(u){s||(z(o),z(n.$$.fragment,u),s=!0)},o(u){G(o),G(n.$$.fragment,u),s=!1},d(u){o&&o.d(u),u&&Z(e),u&&Z(t),we(n),r=!1,vt(a)}}}function to(i){let e,t;return e=new ma({props:{class:"bx--file-invalid"}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function no(i){let e,t;const n=[{"aria-label":i[1]},{title:i[1]},{class:"bx--file-complete"},i[3]];let s={};for(let r=0;r<n.length;r+=1)s=ce(s,n[r]);return e=new ed({props:s}),{c(){Ee(e.$$.fragment)},m(r,a){Se(e,r,a),t=!0},p(r,a){const o=a&10?Ke(n,[a&2&&{"aria-label":r[1]},a&2&&{title:r[1]},n[2],a&8&&Xi(r[3])]):{};e.$set(o)},i(r){t||(z(e.$$.fragment,r),t=!0)},o(r){G(e.$$.fragment,r),t=!1},d(r){we(e,r)}}}function od(i){let e,t,n,s,r=i[0]==="uploading"&&$a(i),a=i[0]==="edit"&&eo(i),o=i[0]==="complete"&&no(i);return{c(){r&&r.c(),e=ye(),a&&a.c(),t=ye(),o&&o.c(),n=Bt()},m(l,c){r&&r.m(l,c),K(l,e,c),a&&a.m(l,c),K(l,t,c),o&&o.m(l,c),K(l,n,c),s=!0},p(l,[c]){l[0]==="uploading"?r?(r.p(l,c),c&1&&z(r,1)):(r=$a(l),r.c(),z(r,1),r.m(e.parentNode,e)):r&&(ut(),G(r,1,1,()=>{r=null}),ft()),l[0]==="edit"?a?(a.p(l,c),c&1&&z(a,1)):(a=eo(l),a.c(),z(a,1),a.m(t.parentNode,t)):a&&(ut(),G(a,1,1,()=>{a=null}),ft()),l[0]==="complete"?o?(o.p(l,c),c&1&&z(o,1)):(o=no(l),o.c(),z(o,1),o.m(n.parentNode,n)):o&&(ut(),G(o,1,1,()=>{o=null}),ft())},i(l){s||(z(r),z(a),z(o),s=!0)},o(l){G(r),G(a),G(o),s=!1},d(l){r&&r.d(l),l&&Z(e),a&&a.d(l),l&&Z(t),o&&o.d(l),l&&Z(n)}}}function ld(i,e,t){const n=["status","iconDescription","invalid"];let s=Le(e,n),{status:r="uploading"}=e,{iconDescription:a=""}=e,{invalid:o=!1}=e;function l(u){pe.call(this,i,u)}function c(u){pe.call(this,i,u)}return i.$$set=u=>{e=ce(ce({},e),Ye(u)),t(3,s=Le(e,n)),"status"in u&&t(0,r=u.status),"iconDescription"in u&&t(1,a=u.iconDescription),"invalid"in u&&t(2,o=u.invalid)},[r,a,o,s,l,c]}class cd extends We{constructor(e){super(),He(this,e,ld,od,Ge,{status:0,iconDescription:1,invalid:2})}}const ud=cd,fd=i=>({}),io=i=>({});function dd(i){let e;return{c(){e=Be(i[2])},m(t,n){K(t,e,n)},p(t,n){n&4&&st(e,t[2])},d(t){t&&Z(e)}}}function hd(i){let e,t,n,s,r,a,o,l;const c=i[15].labelText,u=at(c,i,i[14],io),f=u||dd(i);let d=[{type:"file"},{tabindex:"-1"},{accept:i[3]},{disabled:i[5]},{id:i[10]},{multiple:i[4]},{name:i[11]},i[13]],h={};for(let p=0;p<d.length;p+=1)h=ce(h,d[p]);return{c(){e=he("label"),t=he("span"),f&&f.c(),s=ye(),r=he("input"),ne(t,"role",i[8]),ne(e,"aria-disabled",i[5]),ne(e,"for",i[10]),ne(e,"tabindex",n=i[5]?"-1":i[9]),I(e,"bx--btn",!0),I(e,"bx--btn--sm",!0),I(e,"bx--btn--disabled",i[5]),I(e,"bx--btn--primary",i[7]==="primary"),I(e,"bx--btn--secondary",i[7]==="secondary"),I(e,"bx--btn--tertiary",i[7]==="tertiary"),I(e,"bx--btn--ghost",i[7]==="ghost"),I(e,"bx--btn--danger",i[7]==="danger"),Fe(r,h),I(r,"bx--visually-hidden",!0)},m(p,m){K(p,e,m),ie(e,t),f&&f.m(t,null),K(p,s,m),K(p,r,m),r.autofocus&&r.focus(),i[19](r),a=!0,o||(l=[fe(e,"keydown",i[17]),fe(e,"keydown",i[18]),fe(r,"change",Gu(i[20])),fe(r,"click",i[16]),fe(r,"click",md)],o=!0)},p(p,[m]){u?u.p&&(!a||m&16384)&&lt(u,c,p,p[14],a?ot(c,p[14],m,fd):ct(p[14]),io):f&&f.p&&(!a||m&4)&&f.p(p,a?m:-1),(!a||m&256)&&ne(t,"role",p[8]),(!a||m&32)&&ne(e,"aria-disabled",p[5]),(!a||m&1024)&&ne(e,"for",p[10]),(!a||m&544&&n!==(n=p[5]?"-1":p[9]))&&ne(e,"tabindex",n),(!a||m&32)&&I(e,"bx--btn--disabled",p[5]),(!a||m&128)&&I(e,"bx--btn--primary",p[7]==="primary"),(!a||m&128)&&I(e,"bx--btn--secondary",p[7]==="secondary"),(!a||m&128)&&I(e,"bx--btn--tertiary",p[7]==="tertiary"),(!a||m&128)&&I(e,"bx--btn--ghost",p[7]==="ghost"),(!a||m&128)&&I(e,"bx--btn--danger",p[7]==="danger"),Fe(r,h=Ke(d,[{type:"file"},{tabindex:"-1"},(!a||m&8)&&{accept:p[3]},(!a||m&32)&&{disabled:p[5]},(!a||m&1024)&&{id:p[10]},(!a||m&16)&&{multiple:p[4]},(!a||m&2048)&&{name:p[11]},m&8192&&p[13]])),I(r,"bx--visually-hidden",!0)},i(p){a||(z(f,p),a=!0)},o(p){G(f,p),a=!1},d(p){p&&Z(e),f&&f.d(p),p&&Z(s),p&&Z(r),i[19](null),o=!1,vt(l)}}}const md=({target:i})=>{i.value=null};function pd(i,e,t){const n=["accept","files","multiple","disabled","disableLabelChanges","kind","labelText","role","tabindex","id","name","ref"];let s=Le(e,n),{$$slots:r={},$$scope:a}=e,{accept:o=[]}=e,{files:l=[]}=e,{multiple:c=!1}=e,{disabled:u=!1}=e,{disableLabelChanges:f=!1}=e,{kind:d="primary"}=e,{labelText:h="Add file"}=e,{role:p="button"}=e,{tabindex:m="0"}=e,{id:g="ccs-"+Math.random().toString(36)}=e,{name:b=""}=e,{ref:M=null}=e;const x=Cn();let y=h;function _(w){pe.call(this,i,w)}function S(w){pe.call(this,i,w)}const A=({key:w})=>{(w===" "||w==="Enter")&&M.click()};function v(w){Tt[w?"unshift":"push"](()=>{M=w,t(1,M),t(0,l),t(21,y)})}const E=({target:w})=>{t(0,l=[...w.files]),l&&!f&&t(2,h=l.length>1?`${l.length} files`:l[0].name),x("change",l)};return i.$$set=w=>{e=ce(ce({},e),Ye(w)),t(13,s=Le(e,n)),"accept"in w&&t(3,o=w.accept),"files"in w&&t(0,l=w.files),"multiple"in w&&t(4,c=w.multiple),"disabled"in w&&t(5,u=w.disabled),"disableLabelChanges"in w&&t(6,f=w.disableLabelChanges),"kind"in w&&t(7,d=w.kind),"labelText"in w&&t(2,h=w.labelText),"role"in w&&t(8,p=w.role),"tabindex"in w&&t(9,m=w.tabindex),"id"in w&&t(10,g=w.id),"name"in w&&t(11,b=w.name),"ref"in w&&t(1,M=w.ref),"$$scope"in w&&t(14,a=w.$$scope)},i.$$.update=()=>{i.$$.dirty&3&&M&&l.length===0&&(t(2,h=y),t(1,M.value=null,M))},[l,M,h,o,c,u,f,d,p,m,g,b,x,s,a,r,_,S,A,v,E]}class gd extends We{constructor(e){super(),He(this,e,pd,hd,Ge,{accept:3,files:0,multiple:4,disabled:5,disableLabelChanges:6,kind:7,labelText:2,role:8,tabindex:9,id:10,name:11,ref:1})}}const _d=gd;function so(i,e,t){const n=i.slice();return n[10]=e[t].name,n[27]=t,n}function ro(i){let e,t,n=i[10]+"",s,r,a,o,l,c;function u(...d){return i[20](i[27],...d)}function f(){return i[22](i[27])}return o=new ud({props:{iconDescription:i[9],status:i[1]}}),o.$on("keydown",i[19]),o.$on("keydown",u),o.$on("click",i[21]),o.$on("click",f),{c(){e=he("span"),t=he("p"),s=Be(n),r=ye(),a=he("span"),Ee(o.$$.fragment),l=ye(),I(t,"bx--file-filename",!0),I(a,"bx--file__state-container",!0),I(e,"bx--file__selected-file",!0)},m(d,h){K(d,e,h),ie(e,t),ie(t,s),ie(e,r),ie(e,a),Se(o,a,null),ie(e,l),c=!0},p(d,h){i=d,(!c||h&1)&&n!==(n=i[10]+"")&&st(s,n);const p={};h&512&&(p.iconDescription=i[9]),h&2&&(p.status=i[1]),o.$set(p)},i(d){c||(z(o.$$.fragment,d),c=!0)},o(d){G(o.$$.fragment,d),c=!1},d(d){d&&Z(e),we(o)}}}function bd(i){let e,t,n,s,r,a,o,l,c,u,f,d,h;l=new _d({props:{disabled:i[2],disableLabelChanges:!0,labelText:i[8],accept:i[3],name:i[10],multiple:i[4],kind:i[7]}}),l.$on("change",i[17]),l.$on("change",i[18]);let p=i[0],m=[];for(let x=0;x<p.length;x+=1)m[x]=ro(so(i,p,x));const g=x=>G(m[x],1,1,()=>{m[x]=null});let b=[i[11]],M={};for(let x=0;x<b.length;x+=1)M=ce(M,b[x]);return{c(){e=he("div"),t=he("p"),n=Be(i[6]),s=ye(),r=he("p"),a=Be(i[5]),o=ye(),Ee(l.$$.fragment),c=ye(),u=he("div");for(let x=0;x<m.length;x+=1)m[x].c();I(t,"bx--file--label",!0),I(t,"bx--label-description--disabled",i[2]),I(r,"bx--label-description",!0),I(r,"bx--label-description--disabled",i[2]),I(u,"bx--file-container",!0),Fe(e,M),I(e,"bx--form-item",!0)},m(x,y){K(x,e,y),ie(e,t),ie(t,n),ie(e,s),ie(e,r),ie(r,a),ie(e,o),Se(l,e,null),ie(e,c),ie(e,u);for(let _=0;_<m.length;_+=1)m[_].m(u,null);f=!0,d||(h=[fe(e,"click",i[13]),fe(e,"mouseover",i[14]),fe(e,"mouseenter",i[15]),fe(e,"mouseleave",i[16])],d=!0)},p(x,[y]){(!f||y&64)&&st(n,x[6]),(!f||y&4)&&I(t,"bx--label-description--disabled",x[2]),(!f||y&32)&&st(a,x[5]),(!f||y&4)&&I(r,"bx--label-description--disabled",x[2]);const _={};if(y&4&&(_.disabled=x[2]),y&256&&(_.labelText=x[8]),y&8&&(_.accept=x[3]),y&1024&&(_.name=x[10]),y&16&&(_.multiple=x[4]),y&128&&(_.kind=x[7]),l.$set(_),y&515){p=x[0];let S;for(S=0;S<p.length;S+=1){const A=so(x,p,S);m[S]?(m[S].p(A,y),z(m[S],1)):(m[S]=ro(A),m[S].c(),z(m[S],1),m[S].m(u,null))}for(ut(),S=p.length;S<m.length;S+=1)g(S);ft()}Fe(e,M=Ke(b,[y&2048&&x[11]])),I(e,"bx--form-item",!0)},i(x){if(!f){z(l.$$.fragment,x);for(let y=0;y<p.length;y+=1)z(m[y]);f=!0}},o(x){G(l.$$.fragment,x),m=m.filter(Boolean);for(let y=0;y<m.length;y+=1)G(m[y]);f=!1},d(x){x&&Z(e),we(l),er(m,x),d=!1,vt(h)}}}function vd(i,e,t){const n=["status","disabled","accept","files","multiple","clearFiles","labelDescription","labelTitle","kind","buttonLabel","iconDescription","name"];let s=Le(e,n),{status:r="uploading"}=e,{disabled:a=!1}=e,{accept:o=[]}=e,{files:l=[]}=e,{multiple:c=!1}=e;const u=()=>{t(0,l=[])};let{labelDescription:f=""}=e,{labelTitle:d=""}=e,{kind:h="primary"}=e,{buttonLabel:p=""}=e,{iconDescription:m="Provide icon description"}=e,{name:g=""}=e;const b=Cn();let M=[];const x=D=>D.lastModified+D.name;fa(()=>{const D=l.map(x),q=M.map(x),re=D.filter(Y=>!q.includes(Y)),te=q.filter(Y=>!D.includes(Y));re.length>0&&b("add",re.map(Y=>l.find(ae=>Y===x(ae)))),te.length>0&&b("remove",te.map(Y=>M.find(ae=>Y===x(ae)))),M=[...l]});function y(D){pe.call(this,i,D)}function _(D){pe.call(this,i,D)}function S(D){pe.call(this,i,D)}function A(D){pe.call(this,i,D)}function v(D){pe.call(this,i,D)}const E=D=>{t(0,l=D.detail)};function w(D){pe.call(this,i,D)}const R=(D,{key:q})=>{(q===" "||q==="Enter")&&t(0,l=l.filter((re,te)=>te!==D))};function j(D){pe.call(this,i,D)}const F=D=>{t(0,l=l.filter((q,re)=>re!==D))};return i.$$set=D=>{e=ce(ce({},e),Ye(D)),t(11,s=Le(e,n)),"status"in D&&t(1,r=D.status),"disabled"in D&&t(2,a=D.disabled),"accept"in D&&t(3,o=D.accept),"files"in D&&t(0,l=D.files),"multiple"in D&&t(4,c=D.multiple),"labelDescription"in D&&t(5,f=D.labelDescription),"labelTitle"in D&&t(6,d=D.labelTitle),"kind"in D&&t(7,h=D.kind),"buttonLabel"in D&&t(8,p=D.buttonLabel),"iconDescription"in D&&t(9,m=D.iconDescription),"name"in D&&t(10,g=D.name)},[l,r,a,o,c,f,d,h,p,m,g,s,u,y,_,S,A,v,E,w,R,j,F]}class xd extends We{constructor(e){super(),He(this,e,vd,bd,Ge,{status:1,disabled:2,accept:3,files:0,multiple:4,clearFiles:12,labelDescription:5,labelTitle:6,kind:7,buttonLabel:8,iconDescription:9,name:10})}get clearFiles(){return this.$$.ctx[12]}}const qc=xd,Md=i=>({props:i&2}),ao=i=>({props:i[1]});function yd(i){let e,t;const n=i[10].default,s=at(n,i,i[9],null);let r=[i[1]],a={};for(let o=0;o<r.length;o+=1)a=ce(a,r[o]);return{c(){e=he("div"),s&&s.c(),Fe(e,a)},m(o,l){K(o,e,l),s&&s.m(e,null),t=!0},p(o,l){s&&s.p&&(!t||l&512)&&lt(s,n,o,o[9],t?ot(n,o[9],l,null):ct(o[9]),null),Fe(e,a=Ke(r,[l&2&&o[1]]))},i(o){t||(z(s,o),t=!0)},o(o){G(s,o),t=!1},d(o){o&&Z(e),s&&s.d(o)}}}function Sd(i){let e;const t=i[10].default,n=at(t,i,i[9],ao);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&514)&&lt(n,t,s,s[9],e?ot(t,s[9],r,Md):ct(s[9]),ao)},i(s){e||(z(n,s),e=!0)},o(s){G(n,s),e=!1},d(s){n&&n.d(s)}}}function wd(i){let e,t,n,s;const r=[Sd,yd],a=[];function o(l,c){return l[0]?0:1}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Bt()},m(l,c){a[e].m(l,c),K(l,n,c),s=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ut(),G(a[u],1,1,()=>{a[u]=null}),ft(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),z(t,1),t.m(n.parentNode,n))},i(l){s||(z(t),s=!0)},o(l){G(t),s=!1},d(l){a[e].d(l),l&&Z(n)}}}function Td(i,e,t){let n;const s=["as","condensed","narrow","fullWidth","noGutter","noGutterLeft","noGutterRight","padding"];let r=Le(e,s),{$$slots:a={},$$scope:o}=e,{as:l=!1}=e,{condensed:c=!1}=e,{narrow:u=!1}=e,{fullWidth:f=!1}=e,{noGutter:d=!1}=e,{noGutterLeft:h=!1}=e,{noGutterRight:p=!1}=e,{padding:m=!1}=e;return i.$$set=g=>{e=ce(ce({},e),Ye(g)),t(11,r=Le(e,s)),"as"in g&&t(0,l=g.as),"condensed"in g&&t(2,c=g.condensed),"narrow"in g&&t(3,u=g.narrow),"fullWidth"in g&&t(4,f=g.fullWidth),"noGutter"in g&&t(5,d=g.noGutter),"noGutterLeft"in g&&t(6,h=g.noGutterLeft),"noGutterRight"in g&&t(7,p=g.noGutterRight),"padding"in g&&t(8,m=g.padding),"$$scope"in g&&t(9,o=g.$$scope)},i.$$.update=()=>{t(1,n={...r,class:[r.class,"bx--grid",c&&"bx--grid--condensed",u&&"bx--grid--narrow",f&&"bx--grid--full-width",d&&"bx--no-gutter",h&&"bx--no-gutter--left",p&&"bx--no-gutter--right",m&&"bx--row-padding"].filter(Boolean).join(" ")})},[l,n,c,u,f,d,h,p,m,o,a]}class Ed extends We{constructor(e){super(),He(this,e,Td,wd,Ge,{as:0,condensed:2,narrow:3,fullWidth:4,noGutter:5,noGutterLeft:6,noGutterRight:7,padding:8})}}const Ad=Ed,Cd=i=>({props:i&2}),oo=i=>({props:i[1]});function Ld(i){let e,t;const n=i[9].default,s=at(n,i,i[8],null);let r=[i[1]],a={};for(let o=0;o<r.length;o+=1)a=ce(a,r[o]);return{c(){e=he("div"),s&&s.c(),Fe(e,a)},m(o,l){K(o,e,l),s&&s.m(e,null),t=!0},p(o,l){s&&s.p&&(!t||l&256)&&lt(s,n,o,o[8],t?ot(n,o[8],l,null):ct(o[8]),null),Fe(e,a=Ke(r,[l&2&&o[1]]))},i(o){t||(z(s,o),t=!0)},o(o){G(s,o),t=!1},d(o){o&&Z(e),s&&s.d(o)}}}function Pd(i){let e;const t=i[9].default,n=at(t,i,i[8],oo);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&258)&&lt(n,t,s,s[8],e?ot(t,s[8],r,Cd):ct(s[8]),oo)},i(s){e||(z(n,s),e=!0)},o(s){G(n,s),e=!1},d(s){n&&n.d(s)}}}function Dd(i){let e,t,n,s;const r=[Pd,Ld],a=[];function o(l,c){return l[0]?0:1}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Bt()},m(l,c){a[e].m(l,c),K(l,n,c),s=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ut(),G(a[u],1,1,()=>{a[u]=null}),ft(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),z(t,1),t.m(n.parentNode,n))},i(l){s||(z(t),s=!0)},o(l){G(t),s=!1},d(l){a[e].d(l),l&&Z(n)}}}function Rd(i,e,t){let n;const s=["as","condensed","narrow","noGutter","noGutterLeft","noGutterRight","padding"];let r=Le(e,s),{$$slots:a={},$$scope:o}=e,{as:l=!1}=e,{condensed:c=!1}=e,{narrow:u=!1}=e,{noGutter:f=!1}=e,{noGutterLeft:d=!1}=e,{noGutterRight:h=!1}=e,{padding:p=!1}=e;return i.$$set=m=>{e=ce(ce({},e),Ye(m)),t(10,r=Le(e,s)),"as"in m&&t(0,l=m.as),"condensed"in m&&t(2,c=m.condensed),"narrow"in m&&t(3,u=m.narrow),"noGutter"in m&&t(4,f=m.noGutter),"noGutterLeft"in m&&t(5,d=m.noGutterLeft),"noGutterRight"in m&&t(6,h=m.noGutterRight),"padding"in m&&t(7,p=m.padding),"$$scope"in m&&t(8,o=m.$$scope)},i.$$.update=()=>{t(1,n={...r,class:[r.class,"bx--row",c&&"bx--row--condensed",u&&"bx--row--narrow",f&&"bx--no-gutter",d&&"bx--no-gutter--left",h&&"bx--no-gutter--right",p&&"bx--row-padding"].filter(Boolean).join(" ")})},[l,n,c,u,f,d,h,p,o,a]}class Id extends We{constructor(e){super(),He(this,e,Rd,Dd,Ge,{as:0,condensed:2,narrow:3,noGutter:4,noGutterLeft:5,noGutterRight:6,padding:7})}}const kd=Id,Fd=i=>({props:i&2}),lo=i=>({props:i[1]});function zd(i){let e,t;const n=i[14].default,s=at(n,i,i[13],null);let r=[i[1]],a={};for(let o=0;o<r.length;o+=1)a=ce(a,r[o]);return{c(){e=he("div"),s&&s.c(),Fe(e,a)},m(o,l){K(o,e,l),s&&s.m(e,null),t=!0},p(o,l){s&&s.p&&(!t||l&8192)&&lt(s,n,o,o[13],t?ot(n,o[13],l,null):ct(o[13]),null),Fe(e,a=Ke(r,[l&2&&o[1]]))},i(o){t||(z(s,o),t=!0)},o(o){G(s,o),t=!1},d(o){o&&Z(e),s&&s.d(o)}}}function Od(i){let e;const t=i[14].default,n=at(t,i,i[13],lo);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&8194)&&lt(n,t,s,s[13],e?ot(t,s[13],r,Fd):ct(s[13]),lo)},i(s){e||(z(n,s),e=!0)},o(s){G(n,s),e=!1},d(s){n&&n.d(s)}}}function Nd(i){let e,t,n,s;const r=[Od,zd],a=[];function o(l,c){return l[0]?0:1}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Bt()},m(l,c){a[e].m(l,c),K(l,n,c),s=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ut(),G(a[u],1,1,()=>{a[u]=null}),ft(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),z(t,1),t.m(n.parentNode,n))},i(l){s||(z(t),s=!0)},o(l){G(t),s=!1},d(l){a[e].d(l),l&&Z(n)}}}function Ud(i,e,t){let n,s;const r=["as","noGutter","noGutterLeft","noGutterRight","padding","aspectRatio","sm","md","lg","xlg","max"];let a=Le(e,r),{$$slots:o={},$$scope:l}=e,{as:c=!1}=e,{noGutter:u=!1}=e,{noGutterLeft:f=!1}=e,{noGutterRight:d=!1}=e,{padding:h=!1}=e,{aspectRatio:p=void 0}=e,{sm:m=void 0}=e,{md:g=void 0}=e,{lg:b=void 0}=e,{xlg:M=void 0}=e,{max:x=void 0}=e;const y=["sm","md","lg","xlg","max"];return i.$$set=_=>{e=ce(ce({},e),Ye(_)),t(16,a=Le(e,r)),"as"in _&&t(0,c=_.as),"noGutter"in _&&t(2,u=_.noGutter),"noGutterLeft"in _&&t(3,f=_.noGutterLeft),"noGutterRight"in _&&t(4,d=_.noGutterRight),"padding"in _&&t(5,h=_.padding),"aspectRatio"in _&&t(6,p=_.aspectRatio),"sm"in _&&t(7,m=_.sm),"md"in _&&t(8,g=_.md),"lg"in _&&t(9,b=_.lg),"xlg"in _&&t(10,M=_.xlg),"max"in _&&t(11,x=_.max),"$$scope"in _&&t(13,l=_.$$scope)},i.$$.update=()=>{i.$$.dirty&3968&&t(12,n=[m,g,b,M,x].map((_,S)=>{const A=y[S];if(_===!0)return`bx--col-${A}`;if(typeof _=="number")return`bx--col-${A}-${_}`;if(typeof _=="object"){let v=[];return typeof _.span=="number"?v=[...v,`bx--col-${A}-${_.span}`]:_.span===!0&&(v=[...v,`bx--col-${A}`]),typeof _.offset=="number"&&(v=[...v,`bx--offset-${A}-${_.offset}`]),v.join(" ")}}).filter(Boolean).join(" ")),t(1,s={...a,class:[a.class,n,!n&&"bx--col",u&&"bx--no-gutter",f&&"bx--no-gutter--left",d&&"bx--no-gutter--right",p&&`bx--aspect-ratio bx--aspect-ratio--${p}`,h&&"bx--col-padding"].filter(Boolean).join(" ")})},[c,s,u,f,d,h,p,m,g,b,M,x,n,l,o]}class Bd extends We{constructor(e){super(),He(this,e,Ud,Nd,Ge,{as:0,noGutter:2,noGutterLeft:3,noGutterRight:4,padding:5,aspectRatio:6,sm:7,md:8,lg:9,xlg:10,max:11})}}const co=Bd;function Xc(){localStorage.clear()}function Gd(i,e,t){let{key:n="local-storage-key"}=e,{value:s=""}=e;function r(){localStorage.removeItem(n)}const a=Cn();let o=s;function l(){typeof s=="object"?localStorage.setItem(n,JSON.stringify(s)):localStorage.setItem(n,s)}return qi(()=>{const c=localStorage.getItem(n);if(c!=null)try{t(0,s=JSON.parse(c))}catch{t(0,s=c)}else l(),a("save")}),fa(()=>{o!==s&&(l(),a("update",{prevValue:o,value:s})),o=s}),i.$$set=c=>{"key"in c&&t(1,n=c.key),"value"in c&&t(0,s=c.value)},[s,n,r,Xc]}class Vd extends We{constructor(e){super(),He(this,e,Gd,null,Ge,{key:1,value:0,clearItem:2,clearAll:3})}get clearItem(){return this.$$.ctx[2]}get clearAll(){return Xc}}const Hd=Vd,Wd=i=>({}),uo=i=>({});function fo(i){let e,t;const n=i[26].labelText,s=at(n,i,i[25],uo),r=s||jd(i);return{c(){e=he("label"),r&&r.c(),ne(e,"for",i[5]),I(e,"bx--label",!0),I(e,"bx--visually-hidden",i[14]),I(e,"bx--label--disabled",i[4])},m(a,o){K(a,e,o),r&&r.m(e,null),t=!0},p(a,o){s?s.p&&(!t||o[0]&33554432)&&lt(s,n,a,a[25],t?ot(n,a[25],o,Wd):ct(a[25]),uo):r&&r.p&&(!t||o[0]&8192)&&r.p(a,t?o:[-1,-1]),(!t||o[0]&32)&&ne(e,"for",a[5]),(!t||o[0]&16384)&&I(e,"bx--visually-hidden",a[14]),(!t||o[0]&16)&&I(e,"bx--label--disabled",a[4])},i(a){t||(z(r,a),t=!0)},o(a){G(r,a),t=!1},d(a){a&&Z(e),r&&r.d(a)}}}function jd(i){let e;return{c(){e=Be(i[13])},m(t,n){K(t,e,n)},p(t,n){n[0]&8192&&st(e,t[13])},d(t){t&&Z(e)}}}function ho(i){let e,t,n,s,r,a,o,l,c,u,f,d,h,p,m,g,b;const M=i[26].default,x=at(M,i,i[25],null);c=new jc({props:{class:"bx--select__arrow"}});let y=i[7]&&mo(),_=i[7]&&po(i),S=i[11]&&go(i);return{c(){e=he("div"),t=he("div"),n=he("select"),x&&x.c(),l=ye(),Ee(c.$$.fragment),u=ye(),y&&y.c(),d=ye(),_&&_.c(),h=ye(),S&&S.c(),p=Bt(),ne(n,"aria-describedby",s=i[7]?i[16]:void 0),ne(n,"aria-invalid",r=i[7]||void 0),n.disabled=a=i[4]||void 0,n.required=o=i[15]||void 0,ne(n,"id",i[5]),ne(n,"name",i[6]),I(n,"bx--select-input",!0),I(n,"bx--select-input--sm",i[1]==="sm"),I(n,"bx--select-input--xl",i[1]==="xl"),ne(t,"data-invalid",f=i[7]||void 0),I(t,"bx--select-input__wrapper",!0),I(e,"bx--select-input--inline__wrapper",!0)},m(A,v){K(A,e,v),ie(e,t),ie(t,n),x&&x.m(n,null),i[35](n),ie(t,l),Se(c,t,null),ie(t,u),y&&y.m(t,null),ie(e,d),_&&_.m(e,null),K(A,h,v),S&&S.m(A,v),K(A,p,v),m=!0,g||(b=[fe(n,"change",i[21]),fe(n,"change",i[31]),fe(n,"input",i[32]),fe(n,"focus",i[33]),fe(n,"blur",i[34])],g=!0)},p(A,v){x&&x.p&&(!m||v[0]&33554432)&&lt(x,M,A,A[25],m?ot(M,A[25],v,null):ct(A[25]),null),(!m||v[0]&65664&&s!==(s=A[7]?A[16]:void 0))&&ne(n,"aria-describedby",s),(!m||v[0]&128&&r!==(r=A[7]||void 0))&&ne(n,"aria-invalid",r),(!m||v[0]&16&&a!==(a=A[4]||void 0))&&(n.disabled=a),(!m||v[0]&32768&&o!==(o=A[15]||void 0))&&(n.required=o),(!m||v[0]&32)&&ne(n,"id",A[5]),(!m||v[0]&64)&&ne(n,"name",A[6]),(!m||v[0]&2)&&I(n,"bx--select-input--sm",A[1]==="sm"),(!m||v[0]&2)&&I(n,"bx--select-input--xl",A[1]==="xl"),A[7]?y?v[0]&128&&z(y,1):(y=mo(),y.c(),z(y,1),y.m(t,null)):y&&(ut(),G(y,1,1,()=>{y=null}),ft()),(!m||v[0]&128&&f!==(f=A[7]||void 0))&&ne(t,"data-invalid",f),A[7]?_?_.p(A,v):(_=po(A),_.c(),_.m(e,null)):_&&(_.d(1),_=null),A[11]?S?S.p(A,v):(S=go(A),S.c(),S.m(p.parentNode,p)):S&&(S.d(1),S=null)},i(A){m||(z(x,A),z(c.$$.fragment,A),z(y),m=!0)},o(A){G(x,A),G(c.$$.fragment,A),G(y),m=!1},d(A){A&&Z(e),x&&x.d(A),i[35](null),we(c),y&&y.d(),_&&_.d(),A&&Z(h),S&&S.d(A),A&&Z(p),g=!1,vt(b)}}}function mo(i){let e,t;return e=new ma({props:{class:"bx--select__invalid-icon"}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function po(i){let e,t;return{c(){e=he("div"),t=Be(i[8]),ne(e,"id",i[16]),I(e,"bx--form-requirement",!0)},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s[0]&256&&st(t,n[8]),s[0]&65536&&ne(e,"id",n[16])},d(n){n&&Z(e)}}}function go(i){let e,t;return{c(){e=he("div"),t=Be(i[11]),I(e,"bx--form__helper-text",!0),I(e,"bx--form__helper-text--disabled",i[4])},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s[0]&2048&&st(t,n[11]),s[0]&16&&I(e,"bx--form__helper-text--disabled",n[4])},d(n){n&&Z(e)}}}function _o(i){let e,t,n,s,r,a,o,l,c,u,f,d,h,p,m,g,b,M;const x=i[26].default,y=at(x,i,i[25],null);l=new jc({props:{class:"bx--select__arrow"}});let _=i[7]&&bo(),S=!i[7]&&i[9]&&vo(),A=!i[7]&&i[11]&&xo(i),v=i[7]&&Mo(i),E=!i[7]&&i[9]&&yo(i);return{c(){e=he("div"),t=he("select"),y&&y.c(),o=ye(),Ee(l.$$.fragment),c=ye(),_&&_.c(),u=ye(),S&&S.c(),d=ye(),A&&A.c(),h=ye(),v&&v.c(),p=ye(),E&&E.c(),m=Bt(),ne(t,"id",i[5]),ne(t,"name",i[6]),ne(t,"aria-describedby",n=i[7]?i[16]:void 0),t.disabled=s=i[4]||void 0,t.required=r=i[15]||void 0,ne(t,"aria-invalid",a=i[7]||void 0),I(t,"bx--select-input",!0),I(t,"bx--select-input--sm",i[1]==="sm"),I(t,"bx--select-input--xl",i[1]==="xl"),ne(e,"data-invalid",f=i[7]||void 0),I(e,"bx--select-input__wrapper",!0)},m(w,R){K(w,e,R),ie(e,t),y&&y.m(t,null),i[36](t),ie(e,o),Se(l,e,null),ie(e,c),_&&_.m(e,null),ie(e,u),S&&S.m(e,null),K(w,d,R),A&&A.m(w,R),K(w,h,R),v&&v.m(w,R),K(w,p,R),E&&E.m(w,R),K(w,m,R),g=!0,b||(M=[fe(t,"change",i[21]),fe(t,"change",i[27]),fe(t,"input",i[28]),fe(t,"focus",i[29]),fe(t,"blur",i[30])],b=!0)},p(w,R){y&&y.p&&(!g||R[0]&33554432)&&lt(y,x,w,w[25],g?ot(x,w[25],R,null):ct(w[25]),null),(!g||R[0]&32)&&ne(t,"id",w[5]),(!g||R[0]&64)&&ne(t,"name",w[6]),(!g||R[0]&65664&&n!==(n=w[7]?w[16]:void 0))&&ne(t,"aria-describedby",n),(!g||R[0]&16&&s!==(s=w[4]||void 0))&&(t.disabled=s),(!g||R[0]&32768&&r!==(r=w[15]||void 0))&&(t.required=r),(!g||R[0]&128&&a!==(a=w[7]||void 0))&&ne(t,"aria-invalid",a),(!g||R[0]&2)&&I(t,"bx--select-input--sm",w[1]==="sm"),(!g||R[0]&2)&&I(t,"bx--select-input--xl",w[1]==="xl"),w[7]?_?R[0]&128&&z(_,1):(_=bo(),_.c(),z(_,1),_.m(e,u)):_&&(ut(),G(_,1,1,()=>{_=null}),ft()),!w[7]&&w[9]?S?R[0]&640&&z(S,1):(S=vo(),S.c(),z(S,1),S.m(e,null)):S&&(ut(),G(S,1,1,()=>{S=null}),ft()),(!g||R[0]&128&&f!==(f=w[7]||void 0))&&ne(e,"data-invalid",f),!w[7]&&w[11]?A?A.p(w,R):(A=xo(w),A.c(),A.m(h.parentNode,h)):A&&(A.d(1),A=null),w[7]?v?v.p(w,R):(v=Mo(w),v.c(),v.m(p.parentNode,p)):v&&(v.d(1),v=null),!w[7]&&w[9]?E?E.p(w,R):(E=yo(w),E.c(),E.m(m.parentNode,m)):E&&(E.d(1),E=null)},i(w){g||(z(y,w),z(l.$$.fragment,w),z(_),z(S),g=!0)},o(w){G(y,w),G(l.$$.fragment,w),G(_),G(S),g=!1},d(w){w&&Z(e),y&&y.d(w),i[36](null),we(l),_&&_.d(),S&&S.d(),w&&Z(d),A&&A.d(w),w&&Z(h),v&&v.d(w),w&&Z(p),E&&E.d(w),w&&Z(m),b=!1,vt(M)}}}function bo(i){let e,t;return e=new ma({props:{class:"bx--select__invalid-icon"}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function vo(i){let e,t;return e=new Nf({props:{class:"bx--select__invalid-icon bx--select__invalid-icon--warning"}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function xo(i){let e,t;return{c(){e=he("div"),t=Be(i[11]),I(e,"bx--form__helper-text",!0),I(e,"bx--form__helper-text--disabled",i[4])},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s[0]&2048&&st(t,n[11]),s[0]&16&&I(e,"bx--form__helper-text--disabled",n[4])},d(n){n&&Z(e)}}}function Mo(i){let e,t;return{c(){e=he("div"),t=Be(i[8]),ne(e,"id",i[16]),I(e,"bx--form-requirement",!0)},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s[0]&256&&st(t,n[8]),s[0]&65536&&ne(e,"id",n[16])},d(n){n&&Z(e)}}}function yo(i){let e,t;return{c(){e=he("div"),t=Be(i[10]),ne(e,"id",i[16]),I(e,"bx--form-requirement",!0)},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s[0]&1024&&st(t,n[10]),s[0]&65536&&ne(e,"id",n[16])},d(n){n&&Z(e)}}}function qd(i){let e,t,n,s,r,a=!i[12]&&fo(i),o=i[2]&&ho(i),l=!i[2]&&_o(i),c=[i[22]],u={};for(let f=0;f<c.length;f+=1)u=ce(u,c[f]);return{c(){e=he("div"),t=he("div"),a&&a.c(),n=ye(),o&&o.c(),s=ye(),l&&l.c(),I(t,"bx--select",!0),I(t,"bx--select--inline",i[2]),I(t,"bx--select--light",i[3]),I(t,"bx--select--invalid",i[7]),I(t,"bx--select--disabled",i[4]),I(t,"bx--select--warning",i[9]),Fe(e,u),I(e,"bx--form-item",!0)},m(f,d){K(f,e,d),ie(e,t),a&&a.m(t,null),ie(t,n),o&&o.m(t,null),ie(t,s),l&&l.m(t,null),r=!0},p(f,d){f[12]?a&&(ut(),G(a,1,1,()=>{a=null}),ft()):a?(a.p(f,d),d[0]&4096&&z(a,1)):(a=fo(f),a.c(),z(a,1),a.m(t,n)),f[2]?o?(o.p(f,d),d[0]&4&&z(o,1)):(o=ho(f),o.c(),z(o,1),o.m(t,s)):o&&(ut(),G(o,1,1,()=>{o=null}),ft()),f[2]?l&&(ut(),G(l,1,1,()=>{l=null}),ft()):l?(l.p(f,d),d[0]&4&&z(l,1)):(l=_o(f),l.c(),z(l,1),l.m(t,null)),(!r||d[0]&4)&&I(t,"bx--select--inline",f[2]),(!r||d[0]&8)&&I(t,"bx--select--light",f[3]),(!r||d[0]&128)&&I(t,"bx--select--invalid",f[7]),(!r||d[0]&16)&&I(t,"bx--select--disabled",f[4]),(!r||d[0]&512)&&I(t,"bx--select--warning",f[9]),Fe(e,u=Ke(c,[d[0]&4194304&&f[22]])),I(e,"bx--form-item",!0)},i(f){r||(z(a),z(o),z(l),r=!0)},o(f){G(a),G(o),G(l),r=!1},d(f){f&&Z(e),a&&a.d(),o&&o.d(),l&&l.d()}}}function Xd(i,e,t){let n;const s=["selected","size","inline","light","disabled","id","name","invalid","invalidText","warn","warnText","helperText","noLabel","labelText","hideLabel","ref","required"];let r=Le(e,s),a,o,l,c,{$$slots:u={},$$scope:f}=e,{selected:d=void 0}=e,{size:h=void 0}=e,{inline:p=!1}=e,{light:m=!1}=e,{disabled:g=!1}=e,{id:b="ccs-"+Math.random().toString(36)}=e,{name:M=void 0}=e,{invalid:x=!1}=e,{invalidText:y=""}=e,{warn:_=!1}=e,{warnText:S=""}=e,{helperText:A=""}=e,{noLabel:v=!1}=e,{labelText:E=""}=e,{hideLabel:w=!1}=e,{ref:R=null}=e,{required:j=!1}=e;const F=Cn(),D=ht(d);bt(i,D,X=>t(38,o=X));const q=ht(null);bt(i,q,X=>t(40,c=X));const re=ht(null);bt(i,re,X=>t(24,a=X));const te=ht({});bt(i,te,X=>t(39,l=X)),Jt("Select",{selectedValue:D,setDefaultValue:(X,je)=>{a===null?(q.set(X),re.set(je)):c===X&&D.set(je),te.update(Ve=>({...Ve,[je]:typeof je}))}});const Y=({target:X})=>{let je=X.value;l[je]==="number"&&(je=Number(je)),D.set(je)};let ae;fa(()=>{t(23,d=o),ae!==void 0&&d!==ae&&F("update",o),ae=d});function oe(X){pe.call(this,i,X)}function k(X){pe.call(this,i,X)}function J(X){pe.call(this,i,X)}function le(X){pe.call(this,i,X)}function H(X){pe.call(this,i,X)}function ge(X){pe.call(this,i,X)}function N(X){pe.call(this,i,X)}function ve(X){pe.call(this,i,X)}function Ce(X){Tt[X?"unshift":"push"](()=>{R=X,t(0,R)})}function ke(X){Tt[X?"unshift":"push"](()=>{R=X,t(0,R)})}return i.$$set=X=>{e=ce(ce({},e),Ye(X)),t(22,r=Le(e,s)),"selected"in X&&t(23,d=X.selected),"size"in X&&t(1,h=X.size),"inline"in X&&t(2,p=X.inline),"light"in X&&t(3,m=X.light),"disabled"in X&&t(4,g=X.disabled),"id"in X&&t(5,b=X.id),"name"in X&&t(6,M=X.name),"invalid"in X&&t(7,x=X.invalid),"invalidText"in X&&t(8,y=X.invalidText),"warn"in X&&t(9,_=X.warn),"warnText"in X&&t(10,S=X.warnText),"helperText"in X&&t(11,A=X.helperText),"noLabel"in X&&t(12,v=X.noLabel),"labelText"in X&&t(13,E=X.labelText),"hideLabel"in X&&t(14,w=X.hideLabel),"ref"in X&&t(0,R=X.ref),"required"in X&&t(15,j=X.required),"$$scope"in X&&t(25,f=X.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&32&&t(16,n=`error-${b}`),i.$$.dirty[0]&25165824&&D.set(d??a)},[R,h,p,m,g,b,M,x,y,_,S,A,v,E,w,j,n,D,q,re,te,Y,r,d,a,f,u,oe,k,J,le,H,ge,N,ve,Ce,ke]}class Yd extends We{constructor(e){super(),He(this,e,Xd,qd,Ge,{selected:23,size:1,inline:2,light:3,disabled:4,id:5,name:6,invalid:7,invalidText:8,warn:9,warnText:10,helperText:11,noLabel:12,labelText:13,hideLabel:14,ref:0,required:15},null,[-1,-1])}}const Zd=Yd;function Kd(i){let e,t=(i[1]||i[0])+"",n,s,r;return{c(){e=he("option"),n=Be(t),e.__value=i[0],e.value=e.__value,e.disabled=i[3],e.hidden=i[2],e.selected=i[4],ne(e,"class",s=i[5].class),ne(e,"style",r=i[5].style),I(e,"bx--select-option",!0)},m(a,o){K(a,e,o),ie(e,n)},p(a,[o]){o&3&&t!==(t=(a[1]||a[0])+"")&&st(n,t),o&1&&(e.__value=a[0],e.value=e.__value),o&8&&(e.disabled=a[3]),o&4&&(e.hidden=a[2]),o&16&&(e.selected=a[4]),o&32&&s!==(s=a[5].class)&&ne(e,"class",s),o&32&&r!==(r=a[5].style)&&ne(e,"style",r),o&32&&I(e,"bx--select-option",!0)},i:it,o:it,d(a){a&&Z(e)}}}function Jd(i,e,t){const n=["value","text","hidden","disabled"];let s=Le(e,n),{value:r=""}=e,{text:a=""}=e,{hidden:o=!1}=e,{disabled:l=!1}=e;const c="ccs-"+Math.random().toString(36),u=en("Select")||en("TimePickerSelect");let f=!1;const d=u.selectedValue.subscribe(h=>{t(4,f=h===r)});return qi(()=>()=>d()),i.$$set=h=>{e=ce(ce({},e),Ye(h)),t(5,s=Le(e,n)),"value"in h&&t(0,r=h.value),"text"in h&&t(1,a=h.text),"hidden"in h&&t(2,o=h.hidden),"disabled"in h&&t(3,l=h.disabled)},i.$$.update=()=>{var h;i.$$.dirty&1&&((h=u==null?void 0:u.setDefaultValue)==null||h.call(u,c,r))},[r,a,o,l,f,s]}class Qd extends We{constructor(e){super(),He(this,e,Jd,Kd,Ge,{value:0,text:1,hidden:2,disabled:3})}}const $d=Qd,eh=i=>({}),So=i=>({});function wo(i){let e,t;const n=i[11].legendText,s=at(n,i,i[10],So),r=s||th(i);return{c(){e=he("legend"),r&&r.c(),I(e,"bx--label",!0),I(e,"bx--visually-hidden",i[2])},m(a,o){K(a,e,o),r&&r.m(e,null),t=!0},p(a,o){s?s.p&&(!t||o&1024)&&lt(s,n,a,a[10],t?ot(n,a[10],o,eh):ct(a[10]),So):r&&r.p&&(!t||o&2)&&r.p(a,t?o:-1),(!t||o&4)&&I(e,"bx--visually-hidden",a[2])},i(a){t||(z(r,a),t=!0)},o(a){G(r,a),t=!1},d(a){a&&Z(e),r&&r.d(a)}}}function th(i){let e;return{c(){e=Be(i[1])},m(t,n){K(t,e,n)},p(t,n){n&2&&st(e,t[1])},d(t){t&&Z(e)}}}function nh(i){let e,t,n,s,r,a,o=(i[1]||i[8].legendText)&&wo(i);const l=i[11].default,c=at(l,i,i[10],null);let u=[{id:i[5]},i[7]],f={};for(let d=0;d<u.length;d+=1)f=ce(f,u[d]);return{c(){e=he("div"),t=he("fieldset"),o&&o.c(),n=ye(),c&&c.c(),t.disabled=i[0],I(t,"bx--radio-button-group",!0),I(t,"bx--radio-button-group--vertical",i[4]==="vertical"),I(t,"bx--radio-button-group--label-left",i[3]==="left"),I(t,"bx--radio-button-group--label-right",i[3]==="right"),Fe(e,f),I(e,"bx--form-item",!0)},m(d,h){K(d,e,h),ie(e,t),o&&o.m(t,null),ie(t,n),c&&c.m(t,null),s=!0,r||(a=[fe(e,"click",i[12]),fe(e,"mouseover",i[13]),fe(e,"mouseenter",i[14]),fe(e,"mouseleave",i[15])],r=!0)},p(d,[h]){d[1]||d[8].legendText?o?(o.p(d,h),h&258&&z(o,1)):(o=wo(d),o.c(),z(o,1),o.m(t,n)):o&&(ut(),G(o,1,1,()=>{o=null}),ft()),c&&c.p&&(!s||h&1024)&&lt(c,l,d,d[10],s?ot(l,d[10],h,null):ct(d[10]),null),(!s||h&1)&&(t.disabled=d[0]),(!s||h&16)&&I(t,"bx--radio-button-group--vertical",d[4]==="vertical"),(!s||h&8)&&I(t,"bx--radio-button-group--label-left",d[3]==="left"),(!s||h&8)&&I(t,"bx--radio-button-group--label-right",d[3]==="right"),Fe(e,f=Ke(u,[(!s||h&32)&&{id:d[5]},h&128&&d[7]])),I(e,"bx--form-item",!0)},i(d){s||(z(o),z(c,d),s=!0)},o(d){G(o),G(c,d),s=!1},d(d){d&&Z(e),o&&o.d(),c&&c.d(d),r=!1,vt(a)}}}function ih(i,e,t){const n=["selected","disabled","legendText","hideLegend","labelPosition","orientation","id"];let s=Le(e,n),r,{$$slots:a={},$$scope:o}=e;const l=ua(a);let{selected:c=void 0}=e,{disabled:u=!1}=e,{legendText:f=""}=e,{hideLegend:d=!1}=e,{labelPosition:h="right"}=e,{orientation:p="horizontal"}=e,{id:m=void 0}=e;const g=Cn(),b=ht(c);bt(i,b,S=>t(16,r=S)),Jt("RadioButtonGroup",{selectedValue:b,add:({checked:S,value:A})=>{S&&b.set(A)},update:S=>{t(9,c=S)}}),qi(()=>{Xt(b,r=c,r)}),Wu(()=>{Xt(b,r=c,r)}),b.subscribe(S=>{t(9,c=S),g("change",S)});function M(S){pe.call(this,i,S)}function x(S){pe.call(this,i,S)}function y(S){pe.call(this,i,S)}function _(S){pe.call(this,i,S)}return i.$$set=S=>{e=ce(ce({},e),Ye(S)),t(7,s=Le(e,n)),"selected"in S&&t(9,c=S.selected),"disabled"in S&&t(0,u=S.disabled),"legendText"in S&&t(1,f=S.legendText),"hideLegend"in S&&t(2,d=S.hideLegend),"labelPosition"in S&&t(3,h=S.labelPosition),"orientation"in S&&t(4,p=S.orientation),"id"in S&&t(5,m=S.id),"$$scope"in S&&t(10,o=S.$$scope)},[u,f,d,h,p,m,b,s,l,c,o,a,M,x,y,_]}class sh extends We{constructor(e){super(),He(this,e,ih,nh,Ge,{selected:9,disabled:0,legendText:1,hideLegend:2,labelPosition:3,orientation:4,id:5})}}const rh=sh,ah=i=>({}),To=i=>({}),oh=i=>({}),Eo=i=>({}),lh=i=>({}),Ao=i=>({});function ch(i){let e;return{c(){e=Be(i[5])},m(t,n){K(t,e,n)},p(t,n){n&32&&st(e,t[5])},d(t){t&&Z(e)}}}function uh(i){let e;return{c(){e=Be(i[3])},m(t,n){K(t,e,n)},p(t,n){n&8&&st(e,t[3])},d(t){t&&Z(e)}}}function fh(i){let e;return{c(){e=Be(i[4])},m(t,n){K(t,e,n)},p(t,n){n&16&&st(e,t[4])},d(t){t&&Z(e)}}}function dh(i){let e,t,n,s,r,a,o,l,c,u,f,d,h,p,m,g;const b=i[12].labelText,M=at(b,i,i[11],Ao),x=M||ch(i),y=i[12].labelA,_=at(y,i,i[11],Eo),S=_||uh(i),A=i[12].labelB,v=at(A,i,i[11],To),E=v||fh(i);let w=[i[9],{style:h=i[9].style+"; user-select: none"}],R={};for(let j=0;j<w.length;j+=1)R=ce(R,w[j]);return{c(){e=he("div"),t=he("input"),n=ye(),s=he("label"),r=he("span"),x&&x.c(),a=ye(),o=he("span"),l=he("span"),S&&S.c(),c=ye(),u=he("span"),E&&E.c(),ne(t,"role","switch"),ne(t,"type","checkbox"),t.checked=i[0],t.disabled=i[2],ne(t,"id",i[7]),ne(t,"name",i[8]),I(t,"bx--toggle-input",!0),I(t,"bx--toggle-input--small",i[1]==="sm"),I(r,"bx--visually-hidden",i[6]),ne(l,"aria-hidden","true"),I(l,"bx--toggle__text--off",!0),ne(u,"aria-hidden","true"),I(u,"bx--toggle__text--on",!0),ne(o,"style",f=i[6]&&"margin-top: 0"),I(o,"bx--toggle__switch",!0),ne(s,"aria-label",d=i[5]?void 0:i[10]["aria-label"]||"Toggle"),ne(s,"for",i[7]),I(s,"bx--toggle-input__label",!0),Fe(e,R),I(e,"bx--form-item",!0)},m(j,F){K(j,e,F),ie(e,t),ie(e,n),ie(e,s),ie(s,r),x&&x.m(r,null),ie(s,a),ie(s,o),ie(o,l),S&&S.m(l,null),ie(o,c),ie(o,u),E&&E.m(u,null),p=!0,m||(g=[fe(t,"change",i[21]),fe(t,"change",i[17]),fe(t,"keyup",i[22]),fe(t,"keyup",i[18]),fe(t,"focus",i[19]),fe(t,"blur",i[20]),fe(e,"click",i[13]),fe(e,"mouseover",i[14]),fe(e,"mouseenter",i[15]),fe(e,"mouseleave",i[16])],m=!0)},p(j,[F]){(!p||F&1)&&(t.checked=j[0]),(!p||F&4)&&(t.disabled=j[2]),(!p||F&128)&&ne(t,"id",j[7]),(!p||F&256)&&ne(t,"name",j[8]),(!p||F&2)&&I(t,"bx--toggle-input--small",j[1]==="sm"),M?M.p&&(!p||F&2048)&&lt(M,b,j,j[11],p?ot(b,j[11],F,lh):ct(j[11]),Ao):x&&x.p&&(!p||F&32)&&x.p(j,p?F:-1),(!p||F&64)&&I(r,"bx--visually-hidden",j[6]),_?_.p&&(!p||F&2048)&&lt(_,y,j,j[11],p?ot(y,j[11],F,oh):ct(j[11]),Eo):S&&S.p&&(!p||F&8)&&S.p(j,p?F:-1),v?v.p&&(!p||F&2048)&&lt(v,A,j,j[11],p?ot(A,j[11],F,ah):ct(j[11]),To):E&&E.p&&(!p||F&16)&&E.p(j,p?F:-1),(!p||F&64&&f!==(f=j[6]&&"margin-top: 0"))&&ne(o,"style",f),(!p||F&1056&&d!==(d=j[5]?void 0:j[10]["aria-label"]||"Toggle"))&&ne(s,"aria-label",d),(!p||F&128)&&ne(s,"for",j[7]),Fe(e,R=Ke(w,[F&512&&j[9],(!p||F&512&&h!==(h=j[9].style+"; user-select: none"))&&{style:h}])),I(e,"bx--form-item",!0)},i(j){p||(z(x,j),z(S,j),z(E,j),p=!0)},o(j){G(x,j),G(S,j),G(E,j),p=!1},d(j){j&&Z(e),x&&x.d(j),S&&S.d(j),E&&E.d(j),m=!1,vt(g)}}}function hh(i,e,t){const n=["size","toggled","disabled","labelA","labelB","labelText","hideLabel","id","name"];let s=Le(e,n),{$$slots:r={},$$scope:a}=e,{size:o="default"}=e,{toggled:l=!1}=e,{disabled:c=!1}=e,{labelA:u="Off"}=e,{labelB:f="On"}=e,{labelText:d=""}=e,{hideLabel:h=!1}=e,{id:p="ccs-"+Math.random().toString(36)}=e,{name:m=void 0}=e;const g=Cn();function b(R){pe.call(this,i,R)}function M(R){pe.call(this,i,R)}function x(R){pe.call(this,i,R)}function y(R){pe.call(this,i,R)}function _(R){pe.call(this,i,R)}function S(R){pe.call(this,i,R)}function A(R){pe.call(this,i,R)}function v(R){pe.call(this,i,R)}const E=()=>{t(0,l=!l)},w=R=>{(R.key===" "||R.key==="Enter")&&(R.preventDefault(),t(0,l=!l))};return i.$$set=R=>{t(10,e=ce(ce({},e),Ye(R))),t(9,s=Le(e,n)),"size"in R&&t(1,o=R.size),"toggled"in R&&t(0,l=R.toggled),"disabled"in R&&t(2,c=R.disabled),"labelA"in R&&t(3,u=R.labelA),"labelB"in R&&t(4,f=R.labelB),"labelText"in R&&t(5,d=R.labelText),"hideLabel"in R&&t(6,h=R.hideLabel),"id"in R&&t(7,p=R.id),"name"in R&&t(8,m=R.name),"$$scope"in R&&t(11,a=R.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&g("toggle",{toggled:l})},e=Ye(e),[l,o,c,u,f,d,h,p,m,s,e,a,r,b,M,x,y,_,S,A,v,E,w]}class mh extends We{constructor(e){super(),He(this,e,hh,dh,Ge,{size:1,toggled:0,disabled:2,labelA:3,labelB:4,labelText:5,hideLabel:6,id:7,name:8})}}const ph=mh,gh=i=>({theme:i&1}),Co=i=>({theme:i[0]});function Lo(i,e,t){const n=i.slice();return n[0]=e[t],n}function Po(i){let e,t,n;function s(a){i[9](a)}let r={key:i[2]};return i[0]!==void 0&&(r.value=i[0]),e=new Hd({props:r}),Tt.push(()=>Zn(e,"value",s)),{c(){Ee(e.$$.fragment)},m(a,o){Se(e,a,o),n=!0},p(a,o){const l={};o&4&&(l.key=a[2]),!t&&o&1&&(t=!0,l.value=a[0],Yn(()=>t=!1)),e.$set(l)},i(a){n||(z(e.$$.fragment,a),n=!0)},o(a){G(e.$$.fragment,a),n=!1},d(a){we(e,a)}}}function _h(i){let e,t,n;const s=[i[5]];function r(o){i[11](o)}let a={$$slots:{default:[vh]},$$scope:{ctx:i}};for(let o=0;o<s.length;o+=1)a=ce(a,s[o]);return i[0]!==void 0&&(a.selected=i[0]),e=new Zd({props:a}),Tt.push(()=>Zn(e,"selected",r)),{c(){Ee(e.$$.fragment)},m(o,l){Se(e,o,l),n=!0},p(o,l){const c=l&32?Ke(s,[Xi(o[5])]):{};l&4128&&(c.$$scope={dirty:l,ctx:o}),!t&&l&1&&(t=!0,c.selected=o[0],Yn(()=>t=!1)),e.$set(c)},i(o){n||(z(e.$$.fragment,o),n=!0)},o(o){G(e.$$.fragment,o),n=!1},d(o){we(e,o)}}}function bh(i){let e,t;const n=[i[4],{toggled:i[0]===i[4].themes[1]}];let s={};for(let r=0;r<n.length;r+=1)s=ce(s,n[r]);return e=new ph({props:s}),e.$on("toggle",i[10]),{c(){Ee(e.$$.fragment)},m(r,a){Se(e,r,a),t=!0},p(r,a){const o=a&17?Ke(n,[a&16&&Xi(r[4]),{toggled:r[0]===r[4].themes[1]}]):{};e.$set(o)},i(r){t||(z(e.$$.fragment,r),t=!0)},o(r){G(e.$$.fragment,r),t=!1},d(r){we(e,r)}}}function Do(i,e){let t,n,s;return n=new $d({props:{value:e[0],text:e[6][e[0]]}}),{key:i,first:null,c(){t=Bt(),Ee(n.$$.fragment),this.first=t},m(r,a){K(r,t,a),Se(n,r,a),s=!0},p(r,a){e=r;const o={};a&32&&(o.value=e[0]),a&32&&(o.text=e[6][e[0]]),n.$set(o)},i(r){s||(z(n.$$.fragment,r),s=!0)},o(r){G(n.$$.fragment,r),s=!1},d(r){r&&Z(t),we(n,r)}}}function vh(i){let e=[],t=new Map,n,s,r=i[5].themes;const a=o=>o[0];for(let o=0;o<r.length;o+=1){let l=Lo(i,r,o),c=a(l);t.set(c,e[o]=Do(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=Bt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c].m(o,l);K(o,n,l),s=!0},p(o,l){l&96&&(r=o[5].themes,ut(),e=Vc(e,l,a,1,o,r,t,n.parentNode,Gc,Do,n,Lo),ft())},i(o){if(!s){for(let l=0;l<r.length;l+=1)z(e[l]);s=!0}},o(o){for(let l=0;l<e.length;l+=1)G(e[l]);s=!1},d(o){for(let l=0;l<e.length;l+=1)e[l].d(o);o&&Z(n)}}}function xh(i){let e,t,n,s,r,a=i[1]&&Po(i);const o=[bh,_h],l=[];function c(d,h){return d[3]==="toggle"?0:d[3]==="select"?1:-1}~(t=c(i))&&(n=l[t]=o[t](i));const u=i[8].default,f=at(u,i,i[12],Co);return{c(){a&&a.c(),e=ye(),n&&n.c(),s=ye(),f&&f.c()},m(d,h){a&&a.m(d,h),K(d,e,h),~t&&l[t].m(d,h),K(d,s,h),f&&f.m(d,h),r=!0},p(d,[h]){d[1]?a?(a.p(d,h),h&2&&z(a,1)):(a=Po(d),a.c(),z(a,1),a.m(e.parentNode,e)):a&&(ut(),G(a,1,1,()=>{a=null}),ft());let p=t;t=c(d),t===p?~t&&l[t].p(d,h):(n&&(ut(),G(l[p],1,1,()=>{l[p]=null}),ft()),~t?(n=l[t],n?n.p(d,h):(n=l[t]=o[t](d),n.c()),z(n,1),n.m(s.parentNode,s)):n=null),f&&f.p&&(!r||h&4097)&&lt(f,u,d,d[12],r?ot(u,d[12],h,gh):ct(d[12]),Co)},i(d){r||(z(a),z(n),z(f,d),r=!0)},o(d){G(a),G(n),G(f,d),r=!1},d(d){a&&a.d(d),d&&Z(e),~t&&l[t].d(d),d&&Z(s),f&&f.d(d)}}}function Mh(i,e,t){let{$$slots:n={},$$scope:s}=e,{theme:r="white"}=e,{tokens:a={}}=e,{persist:o=!1}=e,{persistKey:l="theme"}=e,{render:c=void 0}=e,{toggle:u={themes:["white","g100"],labelA:"",labelB:"",labelText:"Dark mode",hideLabel:!1}}=e;const f={white:"White",g10:"Gray 10",g80:"Gray 80",g90:"Gray 90",g100:"Gray 100"},d=Object.keys(f);let{select:h={themes:d,labelText:"Themes",hideLabel:!1}}=e;const p=Cn();function m(M){r=M,t(0,r)}const g=({detail:M})=>{t(0,r=M.toggled?u.themes[1]:u.themes[0])};function b(M){r=M,t(0,r)}return i.$$set=M=>{"theme"in M&&t(0,r=M.theme),"tokens"in M&&t(7,a=M.tokens),"persist"in M&&t(1,o=M.persist),"persistKey"in M&&t(2,l=M.persistKey),"render"in M&&t(3,c=M.render),"toggle"in M&&t(4,u=M.toggle),"select"in M&&t(5,h=M.select),"$$scope"in M&&t(12,s=M.$$scope)},i.$$.update=()=>{i.$$.dirty&129&&typeof window<"u"&&(Object.entries(a).forEach(([M,x])=>{document.documentElement.style.setProperty(`--cds-${M}`,x)}),r in f?(document.documentElement.setAttribute("theme",r),p("update",{theme:r})):console.warn(`[Theme.svelte] invalid theme "${r}". Value must be one of: ${JSON.stringify(Object.keys(f))}`))},[r,o,l,c,u,h,f,a,n,m,g,b,s]}class yh extends We{constructor(e){super(),He(this,e,Mh,xh,Ge,{theme:0,tokens:7,persist:1,persistKey:2,render:3,toggle:4,select:5})}}const Sh=yh;function Ro(i){let e,t;return{c(){e=rt("title"),t=Be(i[1])},m(n,s){K(n,e,s),ie(e,t)},p(n,s){s&2&&st(t,n[1])},d(n){n&&Z(e)}}}function wh(i){let e,t,n=i[1]&&Ro(i),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],r={};for(let a=0;a<s.length;a+=1)r=ce(r,s[a]);return{c(){e=rt("svg"),n&&n.c(),t=rt("path"),ne(t,"d","M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"),$t(e,r)},m(a,o){K(a,e,o),n&&n.m(e,null),ie(e,t)},p(a,[o]){a[1]?n?n.p(a,o):(n=Ro(a),n.c(),n.m(e,t)):n&&(n.d(1),n=null),$t(e,r=Ke(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},o&1&&{width:a[0]},o&1&&{height:a[0]},o&4&&a[2],o&8&&a[3]]))},i:it,o:it,d(a){a&&Z(e),n&&n.d()}}}function Th(i,e,t){let n,s;const r=["size","title"];let a=Le(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ce(ce({},e),Ye(c))),t(3,a=Le(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Ye(e),[o,l,s,a,n]}class Eh extends We{constructor(e){super(),He(this,e,Th,wh,Ge,{size:0,title:1})}}const Yc=Eh,Ah=ht(!1),Ch=ht(!1),Lh=ht(!1);function Ph(i){let e,t,n,s,r;var a=i[0]?i[4]:i[3];function o(u){return{props:{size:20}}}a&&(t=Bi(a,o()));let l=[{type:"button"},{title:i[2]},{"aria-label":i[2]},i[5]],c={};for(let u=0;u<l.length;u+=1)c=ce(c,l[u]);return{c(){e=he("button"),t&&Ee(t.$$.fragment),Fe(e,c),I(e,"bx--header__action",!0),I(e,"bx--header__menu-trigger",!0),I(e,"bx--header__menu-toggle",!0)},m(u,f){K(u,e,f),t&&Se(t,e,null),e.autofocus&&e.focus(),i[7](e),n=!0,s||(r=[fe(e,"click",i[6]),fe(e,"click",i[8])],s=!0)},p(u,[f]){if(a!==(a=u[0]?u[4]:u[3])){if(t){ut();const d=t;G(d.$$.fragment,1,0,()=>{we(d,1)}),ft()}a?(t=Bi(a,o()),Ee(t.$$.fragment),z(t.$$.fragment,1),Se(t,e,null)):t=null}Fe(e,c=Ke(l,[{type:"button"},(!n||f&4)&&{title:u[2]},(!n||f&4)&&{"aria-label":u[2]},f&32&&u[5]])),I(e,"bx--header__action",!0),I(e,"bx--header__menu-trigger",!0),I(e,"bx--header__menu-toggle",!0)},i(u){n||(t&&z(t.$$.fragment,u),n=!0)},o(u){t&&G(t.$$.fragment,u),n=!1},d(u){u&&Z(e),t&&we(t),i[7](null),s=!1,vt(r)}}}function Dh(i,e,t){const n=["ariaLabel","isOpen","iconMenu","iconClose","ref"];let s=Le(e,n),{ariaLabel:r=void 0}=e,{isOpen:a=!1}=e,{iconMenu:o=Yc}=e,{iconClose:l=pa}=e,{ref:c=null}=e;function u(h){pe.call(this,i,h)}function f(h){Tt[h?"unshift":"push"](()=>{c=h,t(1,c)})}const d=()=>t(0,a=!a);return i.$$set=h=>{e=ce(ce({},e),Ye(h)),t(5,s=Le(e,n)),"ariaLabel"in h&&t(2,r=h.ariaLabel),"isOpen"in h&&t(0,a=h.isOpen),"iconMenu"in h&&t(3,o=h.iconMenu),"iconClose"in h&&t(4,l=h.iconClose),"ref"in h&&t(1,c=h.ref)},[a,c,r,o,l,s,u,f,d]}class Rh extends We{constructor(e){super(),He(this,e,Dh,Ph,Ge,{ariaLabel:2,isOpen:0,iconMenu:3,iconClose:4,ref:1})}}const Ih=Rh,kh=i=>({}),Io=i=>({}),Fh=i=>({}),ko=i=>({});function Fo(i){let e,t,n;function s(a){i[19](a)}let r={iconClose:i[8],iconMenu:i[7]};return i[0]!==void 0&&(r.isOpen=i[0]),e=new Ih({props:r}),Tt.push(()=>Zn(e,"isOpen",s)),{c(){Ee(e.$$.fragment)},m(a,o){Se(e,a,o),n=!0},p(a,o){const l={};o&256&&(l.iconClose=a[8]),o&128&&(l.iconMenu=a[7]),!t&&o&1&&(t=!0,l.isOpen=a[0],Yn(()=>t=!1)),e.$set(l)},i(a){n||(z(e.$$.fragment,a),n=!0)},o(a){G(e.$$.fragment,a),n=!1},d(a){we(e,a)}}}function zo(i){let e,t,n;return{c(){e=he("span"),t=Be(i[3]),n=Be(" "),I(e,"bx--header__name--prefix",!0)},m(s,r){K(s,e,r),ie(e,t),ie(e,n)},p(s,r){r&8&&st(t,s[3])},d(s){s&&Z(e)}}}function zh(i){let e;return{c(){e=Be(i[4])},m(t,n){K(t,e,n)},p(t,n){n&16&&st(e,t[4])},d(t){t&&Z(e)}}}function Oh(i){let e,t,n,s,r,a,o,l,c;Qs(i[18]);const u=i[16]["skip-to-content"],f=at(u,i,i[15],ko);let d=(i[11]&&i[9]<i[6]||i[5])&&Fo(i),h=i[3]&&zo(i);const p=i[16].platform,m=at(p,i,i[15],Io),g=m||zh(i);let b=[{href:i[2]},i[12]],M={};for(let _=0;_<b.length;_+=1)M=ce(M,b[_]);const x=i[16].default,y=at(x,i,i[15],null);return{c(){e=he("header"),f&&f.c(),t=ye(),d&&d.c(),n=ye(),s=he("a"),h&&h.c(),r=ye(),g&&g.c(),a=ye(),y&&y.c(),Fe(s,M),I(s,"bx--header__name",!0),ne(e,"aria-label",i[10]),I(e,"bx--header",!0)},m(_,S){K(_,e,S),f&&f.m(e,null),ie(e,t),d&&d.m(e,null),ie(e,n),ie(e,s),h&&h.m(s,null),ie(s,r),g&&g.m(s,null),i[20](s),ie(e,a),y&&y.m(e,null),o=!0,l||(c=[fe(window,"resize",i[18]),fe(s,"click",i[17])],l=!0)},p(_,[S]){f&&f.p&&(!o||S&32768)&&lt(f,u,_,_[15],o?ot(u,_[15],S,Fh):ct(_[15]),ko),_[11]&&_[9]<_[6]||_[5]?d?(d.p(_,S),S&2656&&z(d,1)):(d=Fo(_),d.c(),z(d,1),d.m(e,n)):d&&(ut(),G(d,1,1,()=>{d=null}),ft()),_[3]?h?h.p(_,S):(h=zo(_),h.c(),h.m(s,r)):h&&(h.d(1),h=null),m?m.p&&(!o||S&32768)&&lt(m,p,_,_[15],o?ot(p,_[15],S,kh):ct(_[15]),Io):g&&g.p&&(!o||S&16)&&g.p(_,o?S:-1),Fe(s,M=Ke(b,[(!o||S&4)&&{href:_[2]},S&4096&&_[12]])),I(s,"bx--header__name",!0),y&&y.p&&(!o||S&32768)&&lt(y,x,_,_[15],o?ot(x,_[15],S,null):ct(_[15]),null),(!o||S&1024)&&ne(e,"aria-label",_[10])},i(_){o||(z(f,_),z(d),z(g,_),z(y,_),o=!0)},o(_){G(f,_),G(d),G(g,_),G(y,_),o=!1},d(_){_&&Z(e),f&&f.d(_),d&&d.d(),h&&h.d(),g&&g.d(_),i[20](null),y&&y.d(_),l=!1,vt(c)}}}function Nh(i,e,t){let n;const s=["expandedByDefault","isSideNavOpen","uiShellAriaLabel","href","company","platformName","persistentHamburgerMenu","expansionBreakpoint","ref","iconMenu","iconClose"];let r=Le(e,s),a;bt(i,Ah,E=>t(11,a=E));let{$$slots:o={},$$scope:l}=e,{expandedByDefault:c=!0}=e,{isSideNavOpen:u=!1}=e,{uiShellAriaLabel:f=void 0}=e,{href:d=void 0}=e,{company:h=void 0}=e,{platformName:p=""}=e,{persistentHamburgerMenu:m=!1}=e,{expansionBreakpoint:g=1056}=e,{ref:b=null}=e,{iconMenu:M=Yc}=e,{iconClose:x=pa}=e,y;function _(E){pe.call(this,i,E)}function S(){t(9,y=window.innerWidth)}function A(E){u=E,t(0,u),t(13,c),t(9,y),t(6,g),t(5,m)}function v(E){Tt[E?"unshift":"push"](()=>{b=E,t(1,b)})}return i.$$set=E=>{t(21,e=ce(ce({},e),Ye(E))),t(12,r=Le(e,s)),"expandedByDefault"in E&&t(13,c=E.expandedByDefault),"isSideNavOpen"in E&&t(0,u=E.isSideNavOpen),"uiShellAriaLabel"in E&&t(14,f=E.uiShellAriaLabel),"href"in E&&t(2,d=E.href),"company"in E&&t(3,h=E.company),"platformName"in E&&t(4,p=E.platformName),"persistentHamburgerMenu"in E&&t(5,m=E.persistentHamburgerMenu),"expansionBreakpoint"in E&&t(6,g=E.expansionBreakpoint),"ref"in E&&t(1,b=E.ref),"iconMenu"in E&&t(7,M=E.iconMenu),"iconClose"in E&&t(8,x=E.iconClose),"$$scope"in E&&t(15,l=E.$$scope)},i.$$.update=()=>{i.$$.dirty&8800&&t(0,u=c&&y>=g&&!m),t(10,n=h?`${h} `:""+(f||e["aria-label"]||p))},e=Ye(e),[u,b,d,h,p,m,g,M,x,y,n,a,r,c,f,l,o,_,S,A,v]}class Uh extends We{constructor(e){super(),He(this,e,Nh,Oh,Ge,{expandedByDefault:13,isSideNavOpen:0,uiShellAriaLabel:14,href:2,company:3,platformName:4,persistentHamburgerMenu:5,expansionBreakpoint:6,ref:1,iconMenu:7,iconClose:8})}}const Bh=Uh;function Gh(i){let e,t,n;const s=i[6].default,r=at(s,i,i[5],null);let a=[{id:i[0]},i[2],{style:t=(i[1]?"margin-left: 0;":"")+" "+i[2].style}],o={};for(let l=0;l<a.length;l+=1)o=ce(o,a[l]);return{c(){e=he("main"),r&&r.c(),Fe(e,o),I(e,"bx--content",!0)},m(l,c){K(l,e,c),r&&r.m(e,null),n=!0},p(l,[c]){r&&r.p&&(!n||c&32)&&lt(r,s,l,l[5],n?ot(s,l[5],c,null):ct(l[5]),null),Fe(e,o=Ke(a,[(!n||c&1)&&{id:l[0]},c&4&&l[2],(!n||c&6&&t!==(t=(l[1]?"margin-left: 0;":"")+" "+l[2].style))&&{style:t}])),I(e,"bx--content",!0)},i(l){n||(z(r,l),n=!0)},o(l){G(r,l),n=!1},d(l){l&&Z(e),r&&r.d(l)}}}function Vh(i,e,t){let n;const s=["id"];let r=Le(e,s),a,o;bt(i,Lh,f=>t(3,a=f)),bt(i,Ch,f=>t(4,o=f));let{$$slots:l={},$$scope:c}=e,{id:u="main-content"}=e;return i.$$set=f=>{e=ce(ce({},e),Ye(f)),t(2,r=Le(e,s)),"id"in f&&t(0,u=f.id),"$$scope"in f&&t(5,c=f.$$scope)},i.$$.update=()=>{i.$$.dirty&24&&t(1,n=o&&!a)},[u,n,r,a,o,c,l]}class Hh extends We{constructor(e){super(),He(this,e,Vh,Gh,Ge,{id:0})}}const Wh=Hh;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="148",bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jh=0,Oo=1,qh=2,Zc=1,Kc=2,rs=3,di=0,_n=1,_a=2,Ms=3,Wn=0,Ni=1,No=2,Uo=3,Bo=4,Xh=5,Fi=100,Yh=101,Zh=102,Go=103,Vo=104,Kh=200,Jh=201,Qh=202,$h=203,Jc=204,Qc=205,em=206,tm=207,nm=208,im=209,sm=210,rm=0,am=1,om=2,Qr=3,lm=4,cm=5,um=6,fm=7,ba=0,dm=1,hm=2,En=0,mm=1,pm=2,gm=3,$c=4,_m=5,eu=300,Gi=301,Vi=302,$r=303,ea=304,tr=306,ta=1e3,Mn=1001,na=1002,Yt=1003,Ho=1004,fr=1005,pn=1006,bm=1007,fs=1008,hi=1009,vm=1010,xm=1011,tu=1012,Mm=1013,oi=1014,li=1015,ds=1016,ym=1017,Sm=1018,Ui=1020,wm=1021,Tm=1022,yn=1023,Em=1024,Am=1025,ui=1026,Hi=1027,Cm=1028,Lm=1029,Pm=1030,Dm=1031,Rm=1033,dr=33776,hr=33777,mr=33778,pr=33779,Wo=35840,jo=35841,qo=35842,Xo=35843,Im=36196,Yo=37492,Zo=37496,Ko=37808,Jo=37809,Qo=37810,$o=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,ll=37820,cl=37821,ul=36492,jn=3e3,_t=3001,km=3200,Fm=3201,va=0,zm=1,Sn="srgb",hs="srgb-linear",gr=7680,Om=519,fl=35044,dl="300 es",ia=1035;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,hl=180/Math.PI;function ps(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function Nm(i,e){return(i%e+e)%e}function br(i,e,t){return(1-t)*i+t*e}function ml(i){return(i&i-1)===0&&i!==0}function sa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ys(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(){cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],p=n[8],m=s[0],g=s[3],b=s[6],M=s[1],x=s[4],y=s[7],_=s[2],S=s[5],A=s[8];return r[0]=a*m+o*M+l*_,r[3]=a*g+o*x+l*S,r[6]=a*b+o*y+l*A,r[1]=c*m+u*M+f*_,r[4]=c*g+u*x+f*S,r[7]=c*b+u*y+f*A,r[2]=d*m+h*M+p*_,r[5]=d*g+h*x+p*S,r[8]=d*b+h*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,p=t*f+n*d+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=f*m,e[1]=(s*c-u*n)*m,e[2]=(o*n-s*a)*m,e[3]=d*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=h*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vr.makeScale(e,t)),this}rotate(e){return this.premultiply(vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(vr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new cn;function nu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const xr={[Sn]:{[hs]:fi},[hs]:{[Sn]:Ys}},jt={legacyMode:!0,get workingColorSpace(){return hs},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(xr[e]&&xr[e][t]!==void 0){const n=xr[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={r:0,g:0,b:0},bn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Mr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ws(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=jt.workingColorSpace){if(e=Nm(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Mr(a,r,e+1/3),this.g=Mr(a,r,e),this.b=Mr(a,r,e-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(e,t=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,jt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,jt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,jt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Sn){const n=iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return jt.fromWorkingColorSpace(ws(this,Dt),e),Kt(Dt.r*255,0,255)<<16^Kt(Dt.g*255,0,255)<<8^Kt(Dt.b*255,0,255)<<0}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.fromWorkingColorSpace(ws(this,Dt),t);const n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=jt.workingColorSpace){return jt.fromWorkingColorSpace(ws(this,Dt),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Sn){return jt.fromWorkingColorSpace(ws(this,Dt),e),e!==Sn?`color(${e} ${Dt.r} ${Dt.g} ${Dt.b})`:`rgb(${Dt.r*255|0},${Dt.g*255|0},${Dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(bn),bn.h+=e,bn.s+=t,bn.l+=n,this.setHSL(bn.h,bn.s,bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(Ss);const n=br(bn.h,Ss.h,t),s=br(bn.s,Ss.s,t),r=br(bn.l,Ss.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}nt.NAMES=iu;let xi;class su{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=ms("canvas")),xi.width=e.width,xi.height=e.height;const n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ru{constructor(e=null){this.isSource=!0,this.uuid=ps(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yr(s[a].image)):r.push(yr(s[a]))}else r=yr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?su.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Um=0;class Qt extends pi{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=Mn,s=Mn,r=pn,a=fs,o=yn,l=hi,c=Qt.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ps(),this.name="",this.source=new ru(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=eu;Qt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,s=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],p=l[9],m=l[2],g=l[6],b=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+m)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(h+1)/2,_=(b+1)/2,S=(u+d)/4,A=(f+m)/4,v=(p+g)/4;return x>y&&x>_?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=A/n):y>_?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=v/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=A/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(f-m)*(f-m)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(f-m)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qn extends pi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ru(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class au extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bm extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const d=r[a+0],h=r[a+1],p=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(f!==m||l!==d||c!==h||u!==p){let g=1-o;const b=l*d+c*h+u*p+f*m,M=b>=0?1:-1,x=1-b*b;if(x>Number.EPSILON){const _=Math.sqrt(x),S=Math.atan2(_,b*M);g=Math.sin(g*S)/_,o=Math.sin(o*S)/_}const y=o*M;if(l=l*g+d*y,c=c*g+h*y,u=u*g+p*y,f=f*g+m*y,g===1-o){const _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],h=r[a+2],p=r[a+3];return e[t]=o*p+u*f+l*h-c*d,e[t+1]=l*p+u*d+c*f-o*h,e[t+2]=c*p+u*h+o*d-l*f,e[t+3]=u*p-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),h=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"YXZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"ZXY":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"ZYX":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"YZX":this._x=d*u*f+c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f-d*h*p;break;case"XZY":this._x=d*u*f-c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f+d*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*s-o*n,u=l*n+o*t-r*s,f=l*s+r*n-a*t,d=-r*t-a*n-o*s;return this.x=c*l+d*-r+u*-o-f*-a,this.y=u*l+d*-a+f*-r-c*-o,this.z=f*l+d*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sr.copy(this).projectOnVector(e),this.sub(Sr)}reflect(e){return this.sub(Sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new U,pl=new mi;class gs{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<s&&(s=d),u>r&&(r=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<s&&(s=d),u>r&&(r=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)ei.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ei)}else n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox),wr.applyMatrix4(e.matrixWorld),this.union(wr);const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Ts.subVectors(this.max,Ji),Mi.subVectors(e.a,Ji),yi.subVectors(e.b,Ji),Si.subVectors(e.c,Ji),Un.subVectors(yi,Mi),Bn.subVectors(Si,yi),ti.subVectors(Mi,Si);let t=[0,-Un.z,Un.y,0,-Bn.z,Bn.y,0,-ti.z,ti.y,Un.z,0,-Un.x,Bn.z,0,-Bn.x,ti.z,0,-ti.x,-Un.y,Un.x,0,-Bn.y,Bn.x,0,-ti.y,ti.x,0];return!Tr(t,Mi,yi,Si,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,Mi,yi,Si,Ts))?!1:(Es.crossVectors(Un,Bn),t=[Es.x,Es.y,Es.z],Tr(t,Mi,yi,Si,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ei.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new U,new U,new U,new U,new U,new U,new U,new U],ei=new U,wr=new gs,Mi=new U,yi=new U,Si=new U,Un=new U,Bn=new U,ti=new U,Ji=new U,Ts=new U,Es=new U,ni=new U;function Tr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);const o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gm=new gs,Qi=new U,Er=new U;class _s{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Er)),this.expandByPoint(Qi.copy(e.center).sub(Er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new U,Ar=new U,As=new U,Gn=new U,Cr=new U,Cs=new U,Lr=new U;class nr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.direction).multiplyScalar(t).add(this.origin),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ar.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Ar);const r=e.distanceTo(t)*.5,a=-this.direction.dot(As),o=Gn.dot(this.direction),l=-Gn.dot(As),c=Gn.lengthSq(),u=Math.abs(1-a*a);let f,d,h,p;if(u>0)if(f=a*l-o,d=a*o-l,p=r*u,f>=0)if(d>=-p)if(d<=p){const m=1/u;f*=m,d*=m,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),s&&s.copy(As).multiplyScalar(d).add(Ar),h}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){Cr.subVectors(t,e),Cs.subVectors(n,e),Lr.crossVectors(Cr,Cs);let a=this.direction.dot(Lr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot(Cs.crossVectors(Gn,Cs));if(l<0)return null;const c=o*this.direction.dot(Cr.cross(Gn));if(c<0||l+c>a)return null;const u=-o*Gn.dot(Lr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,a,o,l,c,u,f,d,h,p,m,g){const b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=s,b[1]=r,b[5]=a,b[9]=o,b[13]=l,b[2]=c,b[6]=u,b[10]=f,b[14]=d,b[3]=h,b[7]=p,b[11]=m,b[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,h=a*f,p=o*u,m=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+p*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=p+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,p=c*u,m=c*f;t[0]=d+m*o,t[4]=p*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-p,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,p=c*u,m=c*f;t[0]=d-m*o,t[4]=-a*f,t[8]=p+h*o,t[1]=h+p*o,t[5]=a*u,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,p=o*u,m=o*f;t[0]=l*u,t[4]=p*c-h,t[8]=d*c+m,t[1]=l*f,t[5]=m*c+d,t[9]=h*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,p=o*l,m=o*c;t[0]=l*u,t[4]=m-d*f,t[8]=p*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+p,t[10]=d-m*f}else if(e.order==="XZY"){const d=a*l,h=a*c,p=o*l,m=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+m,t[5]=a*u,t[9]=h*f-p,t[2]=p*f-h,t[6]=o*u,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Hm)}lookAt(e,t,n){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Vn.crossVectors(n,an),Vn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Vn.crossVectors(n,an)),Vn.normalize(),Ls.crossVectors(an,Vn),s[0]=Vn.x,s[4]=Ls.x,s[8]=an.x,s[1]=Vn.y,s[5]=Ls.y,s[9]=an.y,s[2]=Vn.z,s[6]=Ls.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],p=n[2],m=n[6],g=n[10],b=n[14],M=n[3],x=n[7],y=n[11],_=n[15],S=s[0],A=s[4],v=s[8],E=s[12],w=s[1],R=s[5],j=s[9],F=s[13],D=s[2],q=s[6],re=s[10],te=s[14],Y=s[3],ae=s[7],oe=s[11],k=s[15];return r[0]=a*S+o*w+l*D+c*Y,r[4]=a*A+o*R+l*q+c*ae,r[8]=a*v+o*j+l*re+c*oe,r[12]=a*E+o*F+l*te+c*k,r[1]=u*S+f*w+d*D+h*Y,r[5]=u*A+f*R+d*q+h*ae,r[9]=u*v+f*j+d*re+h*oe,r[13]=u*E+f*F+d*te+h*k,r[2]=p*S+m*w+g*D+b*Y,r[6]=p*A+m*R+g*q+b*ae,r[10]=p*v+m*j+g*re+b*oe,r[14]=p*E+m*F+g*te+b*k,r[3]=M*S+x*w+y*D+_*Y,r[7]=M*A+x*R+y*q+_*ae,r[11]=M*v+x*j+y*re+_*oe,r[15]=M*E+x*F+y*te+_*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],p=e[3],m=e[7],g=e[11],b=e[15];return p*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*h-n*l*h)+m*(+t*l*h-t*c*d+r*a*d-s*a*h+s*c*u-r*l*u)+g*(+t*c*f-t*o*h-r*a*f+n*a*h+r*o*u-n*c*u)+b*(-s*o*u-t*l*f+t*o*d+s*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],p=e[12],m=e[13],g=e[14],b=e[15],M=f*g*c-m*d*c+m*l*h-o*g*h-f*l*b+o*d*b,x=p*d*c-u*g*c-p*l*h+a*g*h+u*l*b-a*d*b,y=u*m*c-p*f*c+p*o*h-a*m*h-u*o*b+a*f*b,_=p*f*l-u*m*l-p*o*d+a*m*d+u*o*g-a*f*g,S=t*M+n*x+s*y+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=M*A,e[1]=(m*d*r-f*g*r-m*s*h+n*g*h+f*s*b-n*d*b)*A,e[2]=(o*g*r-m*l*r+m*s*c-n*g*c-o*s*b+n*l*b)*A,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*h-n*l*h)*A,e[4]=x*A,e[5]=(u*g*r-p*d*r+p*s*h-t*g*h-u*s*b+t*d*b)*A,e[6]=(p*l*r-a*g*r-p*s*c+t*g*c+a*s*b-t*l*b)*A,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*h+t*l*h)*A,e[8]=y*A,e[9]=(p*f*r-u*m*r-p*n*h+t*m*h+u*n*b-t*f*b)*A,e[10]=(a*m*r-p*o*r+p*n*c-t*m*c-a*n*b+t*o*b)*A,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*h-t*o*h)*A,e[12]=_*A,e[13]=(u*m*s-p*f*s+p*n*d-t*m*d-u*n*g+t*f*g)*A,e[14]=(p*o*s-a*m*s-p*n*l+t*m*l+a*n*g-t*o*g)*A,e[15]=(a*f*s-u*o*s+u*n*l-t*f*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,p=r*f,m=a*u,g=a*f,b=o*f,M=l*c,x=l*u,y=l*f,_=n.x,S=n.y,A=n.z;return s[0]=(1-(m+b))*_,s[1]=(h+y)*_,s[2]=(p-x)*_,s[3]=0,s[4]=(h-y)*S,s[5]=(1-(d+b))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(p+x)*A,s[9]=(g-M)*A,s[10]=(1-(d+m))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const a=wi.set(s[4],s[5],s[6]).length(),o=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const c=1/r,u=1/a,f=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,t.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d=-(a+r)/(a-r),h=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=h,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){const o=this.elements,l=1/(t-e),c=1/(n-s),u=1/(a-r),f=(t+e)*l,d=(n+s)*c,h=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-h,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new U,vn=new yt,Vm=new U(0,0,0),Hm=new U(1,1,1),Vn=new U,Ls=new U,an=new U,gl=new yt,_l=new mi;class bs{constructor(e=0,t=0,n=0,s=bs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}bs.DefaultOrder="XYZ";bs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wm=0;const bl=new U,Ti=new mi,In=new yt,Ps=new U,$i=new U,jm=new U,qm=new mi,vl=new U(1,0,0),xl=new U(0,1,0),Ml=new U(0,0,1),Xm={type:"added"},yl={type:"removed"};class St extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DefaultUp.clone();const e=new U,t=new bs,n=new mi,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new cn}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=St.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DefaultMatrixWorldAutoUpdate,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(vl,e)}rotateY(e){return this.rotateOnAxis(xl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vl,e)}translateY(e){return this.translateOnAxis(xl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt($i,Ps,this.up):In.lookAt(Ps,$i,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(In),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DefaultUp=new U(0,1,0);St.DefaultMatrixAutoUpdate=!0;St.DefaultMatrixWorldAutoUpdate=!0;const xn=new U,kn=new U,Pr=new U,Fn=new U,Ei=new U,Ai=new U,Sl=new U,Dr=new U,Rr=new U,Ir=new U;class On{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xn.subVectors(s,t),kn.subVectors(n,t),Pr.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(kn),l=xn.dot(Pr),c=kn.dot(kn),u=kn.dot(Pr),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);const d=1/f,h=(c*l-o*u)*d,p=(a*u-o*l)*d;return r.set(1-h-p,p,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn),Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Fn),l.set(0,0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),kn.subVectors(e,t),xn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return On.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ei.subVectors(s,n),Ai.subVectors(r,n),Dr.subVectors(e,n);const l=Ei.dot(Dr),c=Ai.dot(Dr);if(l<=0&&c<=0)return t.copy(n);Rr.subVectors(e,s);const u=Ei.dot(Rr),f=Ai.dot(Rr);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ei,a);Ir.subVectors(e,r);const h=Ei.dot(Ir),p=Ai.dot(Ir);if(p>=0&&h<=p)return t.copy(r);const m=h*c-l*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ai,o);const g=u*p-h*f;if(g<=0&&f-u>=0&&h-p>=0)return Sl.subVectors(r,s),o=(f-u)/(f-u+(h-p)),t.copy(s).addScaledVector(Sl,o);const b=1/(g+m+d);return a=m*b,o=d*b,t.copy(n).addScaledVector(Ei,a).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ym=0;class An extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Ni,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ou extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new U,Ds=new Ue;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lu extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cu extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zm=0;const hn=new yt,kr=new St,Ci=new U,on=new gs,es=new gs,Nt=new U;class tn extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?cu:lu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new cn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(on.min,es.min),on.expandByPoint(Nt),Nt.addVectors(on.max,es.max),on.expandByPoint(Nt)):(on.expandByPoint(es.min),on.expandByPoint(es.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),Nt.add(Ci)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new U,u[w]=new U;const f=new U,d=new U,h=new U,p=new Ue,m=new Ue,g=new Ue,b=new U,M=new U;function x(w,R,j){f.fromArray(s,w*3),d.fromArray(s,R*3),h.fromArray(s,j*3),p.fromArray(a,w*2),m.fromArray(a,R*2),g.fromArray(a,j*2),d.sub(f),h.sub(f),m.sub(p),g.sub(p);const F=1/(m.x*g.y-g.x*m.y);isFinite(F)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(F),M.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(F),c[w].add(b),c[R].add(b),c[j].add(b),u[w].add(M),u[R].add(M),u[j].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,R=y.length;w<R;++w){const j=y[w],F=j.start,D=j.count;for(let q=F,re=F+D;q<re;q+=3)x(n[q+0],n[q+1],n[q+2])}const _=new U,S=new U,A=new U,v=new U;function E(w){A.fromArray(r,w*3),v.copy(A);const R=c[w];_.copy(R),_.sub(A.multiplyScalar(A.dot(R))).normalize(),S.crossVectors(v,R);const F=S.dot(u[w])<0?-1:1;l[w*4]=_.x,l[w*4+1]=_.y,l[w*4+2]=_.z,l[w*4+3]=F}for(let w=0,R=y.length;w<R;++w){const j=y[w],F=j.start,D=j.count;for(let q=F,re=F+D;q<re;q+=3)E(n[q+0]),E(n[q+1]),E(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let d=0,h=e.count;d<h;d+=3){const p=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,p=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?h=l[m]*o.data.stride+o.offset:h=l[m]*u;for(let b=0;b<u;b++)d[p++]=c[h++]}return new un(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new yt,Li=new nr,Fr=new _s,ts=new U,ns=new U,is=new U,zr=new U,Rs=new U,Is=new Ue,ks=new Ue,Fs=new Ue,Or=new U,zs=new U;class gn extends St{constructor(e=new tn,t=new ou){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(zr.fromBufferAttribute(f,e),a?Rs.addScaledVector(zr,u):Rs.addScaledVector(zr.sub(t),u))}t.add(Rs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),e.ray.intersectsSphere(Fr)===!1)||(wl.copy(r).invert(),Li.copy(e.ray).applyMatrix4(wl),n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(s))for(let h=0,p=f.length;h<p;h++){const m=f[h],g=s[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,y=M;x<y;x+=3){const _=o.getX(x),S=o.getX(x+1),A=o.getX(x+2);a=Os(this,g,e,Li,c,u,_,S,A),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const h=Math.max(0,d.start),p=Math.min(o.count,d.start+d.count);for(let m=h,g=p;m<g;m+=3){const b=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);a=Os(this,s,e,Li,c,u,b,M,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let h=0,p=f.length;h<p;h++){const m=f[h],g=s[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,y=M;x<y;x+=3){const _=x,S=x+1,A=x+2;a=Os(this,g,e,Li,c,u,_,S,A),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const h=Math.max(0,d.start),p=Math.min(l.count,d.start+d.count);for(let m=h,g=p;m<g;m+=3){const b=m,M=m+1,x=m+2;a=Os(this,s,e,Li,c,u,b,M,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Km(i,e,t,n,s,r,a,o){let l;if(e.side===_n?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===di,o),l===null)return null;zs.copy(o),zs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(zs);return c<t.near||c>t.far?null:{distance:c,point:zs.clone(),object:i}}function Os(i,e,t,n,s,r,a,o,l){i.getVertexPosition(a,ts),i.getVertexPosition(o,ns),i.getVertexPosition(l,is);const c=Km(i,e,t,n,ts,ns,is,Or);if(c){s&&(Is.fromBufferAttribute(s,a),ks.fromBufferAttribute(s,o),Fs.fromBufferAttribute(s,l),c.uv=On.getUV(Or,ts,ns,is,Is,ks,Fs,new Ue)),r&&(Is.fromBufferAttribute(r,a),ks.fromBufferAttribute(r,o),Fs.fromBufferAttribute(r,l),c.uv2=On.getUV(Or,ts,ns,is,Is,ks,Fs,new Ue));const u={a,b:o,c:l,normal:new U,materialIndex:0};On.getNormal(ts,ns,is,u.normal),c.face=u}return c}class vs extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(f,2));function p(m,g,b,M,x,y,_,S,A,v,E){const w=y/A,R=_/v,j=y/2,F=_/2,D=S/2,q=A+1,re=v+1;let te=0,Y=0;const ae=new U;for(let oe=0;oe<re;oe++){const k=oe*R-F;for(let J=0;J<q;J++){const le=J*w-j;ae[m]=le*M,ae[g]=k*x,ae[b]=D,c.push(ae.x,ae.y,ae.z),ae[m]=0,ae[g]=0,ae[b]=S>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(J/A),f.push(1-oe/v),te+=1}}for(let oe=0;oe<v;oe++)for(let k=0;k<A;k++){const J=d+k+q*oe,le=d+k+q*(oe+1),H=d+(k+1)+q*(oe+1),ge=d+(k+1)+q*oe;l.push(J,le,ge),l.push(le,H,ge),Y+=6}o.addGroup(h,Y,E),h+=Y,d+=te}}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Wi(i[t]);for(const s in n)e[s]=n[s]}return e}function Jm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uu(i){return i.getRenderTarget()===null&&i.outputEncoding===_t?Sn:hs}const fu={clone:Wi,merge:qt};var Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=$m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ma extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ln extends Ma{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Di=1;class ep extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new ln(Pi,Di,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new ln(Pi,Di,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new ln(Pi,Di,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new ln(Pi,Di,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new ln(Pi,Di,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ln(Pi,Di,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=En,e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class du extends Qt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tp extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new du(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vs(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Wn});r.uniforms.tEquirect.value=t;const a=new gn(s,r),o=t.minFilter;return t.minFilter===fs&&(t.minFilter=pn),new ep(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Nr=new U,np=new U,ip=new cn;class ii{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Nr.subVectors(n,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Nr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ip.getNormalMatrix(e),s=this.coplanarPoint(Nr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new _s,Ns=new U;class ya{constructor(e=new ii,t=new ii,n=new ii,s=new ii,r=new ii,a=new ii){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],h=n[9],p=n[10],m=n[11],g=n[12],b=n[13],M=n[14],x=n[15];return t[0].setComponents(o-s,f-l,m-d,x-g).normalize(),t[1].setComponents(o+s,f+l,m+d,x+g).normalize(),t[2].setComponents(o+r,f+c,m+h,x+b).normalize(),t[3].setComponents(o-r,f-c,m-h,x-b).normalize(),t[4].setComponents(o-a,f-u,m-p,x-M).normalize(),t[5].setComponents(o+a,f+u,m+p,x+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ns.x=s.normal.x>0?e.max.x:e.min.x,Ns.y=s.normal.y>0?e.max.y:e.min.y,Ns.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sp(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const f=c.array,d=c.usage,h=i.createBuffer();i.bindBuffer(u,h),i.bufferData(u,f,d),c.onUploadCallback();let p;if(f instanceof Float32Array)p=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(f instanceof Int16Array)p=5122;else if(f instanceof Uint32Array)p=5125;else if(f instanceof Int32Array)p=5124;else if(f instanceof Int8Array)p=5120;else if(f instanceof Uint8Array)p=5121;else if(f instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:p,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,h=u.updateRange;i.bindBuffer(f,c),h.count===-1?i.bufferSubData(f,0,d):(t?i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Sa extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,h=[],p=[],m=[],g=[];for(let b=0;b<u;b++){const M=b*d-a;for(let x=0;x<c;x++){const y=x*f-r;p.push(y,-M,0),m.push(0,0,1),g.push(x/o),g.push(1-b/l)}}for(let b=0;b<l;b++)for(let M=0;M<o;M++){const x=M+c*b,y=M+c*(b+1),_=M+1+c*(b+1),S=M+1+c*b;h.push(x,y,S),h.push(y,_,S)}this.setIndex(h),this.setAttribute("position",new Rt(p,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(g,2))}static fromJSON(e){return new Sa(e.width,e.height,e.widthSegments,e.heightSegments)}}var rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp="vec3 transformed = vec3( position );",dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Tp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,eg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,sg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,vg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ng=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ug=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Kg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Jg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Qg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$g=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,e_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,t_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,c_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,f_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,__=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,F_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:rp,alphamap_pars_fragment:ap,alphatest_fragment:op,alphatest_pars_fragment:lp,aomap_fragment:cp,aomap_pars_fragment:up,begin_vertex:fp,beginnormal_vertex:dp,bsdfs:hp,iridescence_fragment:mp,bumpmap_pars_fragment:pp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:bp,clipping_planes_vertex:vp,color_fragment:xp,color_pars_fragment:Mp,color_pars_vertex:yp,color_vertex:Sp,common:wp,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:Ap,displacementmap_vertex:Cp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Pp,encodings_fragment:Dp,encodings_pars_fragment:Rp,envmap_fragment:Ip,envmap_common_pars_fragment:kp,envmap_pars_fragment:Fp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Yp,envmap_vertex:Op,fog_vertex:Np,fog_pars_vertex:Up,fog_fragment:Bp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Vp,lightmap_fragment:Hp,lightmap_pars_fragment:Wp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:qp,lights_pars_begin:Xp,lights_toon_fragment:Zp,lights_toon_pars_fragment:Kp,lights_phong_fragment:Jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:$p,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:og,map_fragment:lg,map_pars_fragment:cg,map_particle_fragment:ug,map_particle_pars_fragment:fg,metalnessmap_fragment:dg,metalnessmap_pars_fragment:hg,morphcolor_vertex:mg,morphnormal_vertex:pg,morphtarget_pars_vertex:gg,morphtarget_vertex:_g,normal_fragment_begin:bg,normal_fragment_maps:vg,normal_pars_fragment:xg,normal_pars_vertex:Mg,normal_vertex:yg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:Ag,output_fragment:Cg,packing:Lg,premultiplied_alpha_fragment:Pg,project_vertex:Dg,dithering_fragment:Rg,dithering_pars_fragment:Ig,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:Og,shadowmap_vertex:Ng,shadowmask_pars_fragment:Ug,skinbase_vertex:Bg,skinning_pars_vertex:Gg,skinning_vertex:Vg,skinnormal_vertex:Hg,specularmap_fragment:Wg,specularmap_pars_fragment:jg,tonemapping_fragment:qg,tonemapping_pars_fragment:Xg,transmission_fragment:Yg,transmission_pars_fragment:Zg,uv_pars_fragment:Kg,uv_pars_vertex:Jg,uv_vertex:Qg,uv2_pars_fragment:$g,uv2_pars_vertex:e_,uv2_vertex:t_,worldpos_vertex:n_,background_vert:i_,background_frag:s_,backgroundCube_vert:r_,backgroundCube_frag:a_,cube_vert:o_,cube_frag:l_,depth_vert:c_,depth_frag:u_,distanceRGBA_vert:f_,distanceRGBA_frag:d_,equirect_vert:h_,equirect_frag:m_,linedashed_vert:p_,linedashed_frag:g_,meshbasic_vert:__,meshbasic_frag:b_,meshlambert_vert:v_,meshlambert_frag:x_,meshmatcap_vert:M_,meshmatcap_frag:y_,meshnormal_vert:S_,meshnormal_frag:w_,meshphong_vert:T_,meshphong_frag:E_,meshphysical_vert:A_,meshphysical_frag:C_,meshtoon_vert:L_,meshtoon_frag:P_,points_vert:D_,points_frag:R_,shadow_vert:I_,shadow_frag:k_,sprite_vert:F_,sprite_frag:z_},_e={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new cn},uv2Transform:{value:new cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}}},wn={basic:{uniforms:qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:qt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:qt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:qt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:qt([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:qt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:qt([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:qt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:qt([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:qt([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:qt([_e.lights,_e.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};wn.physical={uniforms:qt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Us={r:0,b:0,g:0};function O_(i,e,t,n,s,r,a){const o=new nt(0);let l=r===!0?0:1,c,u,f=null,d=0,h=null;function p(g,b){let M=!1,x=b.isScene===!0?b.background:null;x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x));const y=i.xr,_=y.getSession&&y.getSession();_&&_.environmentBlendMode==="additive"&&(x=null),x===null?m(o,l):x&&x.isColor&&(m(x,1),M=!0),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===tr)?(u===void 0&&(u=new gn(new vs(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Wi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=x.encoding!==_t,(f!==x||d!==x.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,h=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new gn(new Sa(2,2),new Nn({name:"BackgroundMaterial",uniforms:Wi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=x.encoding!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,h=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,b){g.getRGB(Us,uu(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(g,b=1){o.set(g),l=b,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(o,l)},render:p}}function N_(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null);let c=l,u=!1;function f(D,q,re,te,Y){let ae=!1;if(a){const oe=m(te,re,q);c!==oe&&(c=oe,h(c.object)),ae=b(D,te,re,Y),ae&&M(D,te,re,Y)}else{const oe=q.wireframe===!0;(c.geometry!==te.id||c.program!==re.id||c.wireframe!==oe)&&(c.geometry=te.id,c.program=re.id,c.wireframe=oe,ae=!0)}Y!==null&&t.update(Y,34963),(ae||u)&&(u=!1,v(D,q,re,te),Y!==null&&i.bindBuffer(34963,t.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function h(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function p(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function m(D,q,re){const te=re.wireframe===!0;let Y=o[D.id];Y===void 0&&(Y={},o[D.id]=Y);let ae=Y[q.id];ae===void 0&&(ae={},Y[q.id]=ae);let oe=ae[te];return oe===void 0&&(oe=g(d()),ae[te]=oe),oe}function g(D){const q=[],re=[],te=[];for(let Y=0;Y<s;Y++)q[Y]=0,re[Y]=0,te[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:re,attributeDivisors:te,object:D,attributes:{},index:null}}function b(D,q,re,te){const Y=c.attributes,ae=q.attributes;let oe=0;const k=re.getAttributes();for(const J in k)if(k[J].location>=0){const H=Y[J];let ge=ae[J];if(ge===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),H===void 0||H.attribute!==ge||ge&&H.data!==ge.data)return!0;oe++}return c.attributesNum!==oe||c.index!==te}function M(D,q,re,te){const Y={},ae=q.attributes;let oe=0;const k=re.getAttributes();for(const J in k)if(k[J].location>=0){let H=ae[J];H===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(H=D.instanceColor));const ge={};ge.attribute=H,H&&H.data&&(ge.data=H.data),Y[J]=ge,oe++}c.attributes=Y,c.attributesNum=oe,c.index=te}function x(){const D=c.newAttributes;for(let q=0,re=D.length;q<re;q++)D[q]=0}function y(D){_(D,0)}function _(D,q){const re=c.newAttributes,te=c.enabledAttributes,Y=c.attributeDivisors;re[D]=1,te[D]===0&&(i.enableVertexAttribArray(D),te[D]=1),Y[D]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,q),Y[D]=q)}function S(){const D=c.newAttributes,q=c.enabledAttributes;for(let re=0,te=q.length;re<te;re++)q[re]!==D[re]&&(i.disableVertexAttribArray(re),q[re]=0)}function A(D,q,re,te,Y,ae){n.isWebGL2===!0&&(re===5124||re===5125)?i.vertexAttribIPointer(D,q,re,Y,ae):i.vertexAttribPointer(D,q,re,te,Y,ae)}function v(D,q,re,te){if(n.isWebGL2===!1&&(D.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Y=te.attributes,ae=re.getAttributes(),oe=q.defaultAttributeValues;for(const k in ae){const J=ae[k];if(J.location>=0){let le=Y[k];if(le===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),le!==void 0){const H=le.normalized,ge=le.itemSize,N=t.get(le);if(N===void 0)continue;const ve=N.buffer,Ce=N.type,ke=N.bytesPerElement;if(le.isInterleavedBufferAttribute){const X=le.data,je=X.stride,Ve=le.offset;if(X.isInstancedInterleavedBuffer){for(let ze=0;ze<J.locationSize;ze++)_(J.location+ze,X.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ze=0;ze<J.locationSize;ze++)y(J.location+ze);i.bindBuffer(34962,ve);for(let ze=0;ze<J.locationSize;ze++)A(J.location+ze,ge/J.locationSize,Ce,H,je*ke,(Ve+ge/J.locationSize*ze)*ke)}else{if(le.isInstancedBufferAttribute){for(let X=0;X<J.locationSize;X++)_(J.location+X,le.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let X=0;X<J.locationSize;X++)y(J.location+X);i.bindBuffer(34962,ve);for(let X=0;X<J.locationSize;X++)A(J.location+X,ge/J.locationSize,Ce,H,ge*ke,ge/J.locationSize*X*ke)}}else if(oe!==void 0){const H=oe[k];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(J.location,H);break;case 3:i.vertexAttrib3fv(J.location,H);break;case 4:i.vertexAttrib4fv(J.location,H);break;default:i.vertexAttrib1fv(J.location,H)}}}}S()}function E(){j();for(const D in o){const q=o[D];for(const re in q){const te=q[re];for(const Y in te)p(te[Y].object),delete te[Y];delete q[re]}delete o[D]}}function w(D){if(o[D.id]===void 0)return;const q=o[D.id];for(const re in q){const te=q[re];for(const Y in te)p(te[Y].object),delete te[Y];delete q[re]}delete o[D.id]}function R(D){for(const q in o){const re=o[q];if(re[D.id]===void 0)continue;const te=re[D.id];for(const Y in te)p(te[Y].object),delete te[Y];delete re[D.id]}}function j(){F(),u=!0,c!==l&&(c=l,h(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:y,disableUnusedAttributes:S}}function U_(i,e,t,n){const s=n.isWebGL2;let r;function a(c){r=c}function o(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,h;if(s)d=i,h="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function B_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),d=i.getParameter(35660),h=i.getParameter(3379),p=i.getParameter(34076),m=i.getParameter(34921),g=i.getParameter(36347),b=i.getParameter(36348),M=i.getParameter(36349),x=d>0,y=a||e.has("OES_texture_float"),_=x&&y,S=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:g,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:_,maxSamples:S}}function G_(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ii,o=new cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,h){const p=f.length!==0||d||n!==0||s;return s=d,t=u(f,h,0),n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,d,h){const p=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,b=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const M=r?0:n,x=M*4;let y=b.clippingState||null;l.value=y,y=u(p,d,x,h);for(let _=0;_!==x;++_)y[_]=t[_];b.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,p){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,p!==!0||g===null){const b=h+m*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<b)&&(g=new Float32Array(b));for(let x=0,y=h;x!==m;++x,y+=4)a.copy(f[x]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function V_(i){let e=new WeakMap;function t(a,o){return o===$r?a.mapping=Gi:o===ea&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===$r||o===ea)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tp(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wa extends Ma{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oi=4,Tl=[.125,.215,.35,.446,.526,.582],ri=20,Ur=new wa,El=new nt;let Br=null;const si=(1+Math.sqrt(5))/2,Ii=1/si,Al=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,si,Ii),new U(0,si,-Ii),new U(Ii,0,si),new U(-Ii,0,si),new U(si,Ii,0),new U(-si,Ii,0)];class Cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Br=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Br),e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Br=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ds,format:yn,encoding:jn,depthBuffer:!1},s=Ll(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H_(r)),this._blurMaterial=W_(r,e,t)}return s}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,n,s){const o=new ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(El),u.toneMapping=En,u.autoClear=!1;const h=new ou({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),p=new gn(new vs,h);let m=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,m=!0):(h.color.copy(El),m=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(o.up.set(0,l[b],0),o.lookAt(c[b],0,0)):M===1?(o.up.set(0,0,l[b]),o.lookAt(0,c[b],0)):(o.up.set(0,l[b],0),o.lookAt(0,0,c[b]));const x=this._cubeSize;Bs(s,M*x,b>2?x:0,x,x),u.setRenderTarget(s),m&&u.render(p,o),u.render(e,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Gi||e.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new gn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Al[(s-1)%Al.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new gn(this._lodPlanes[s],c),d=c.uniforms,h=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ri-1),m=r/p,g=isFinite(r)?1+Math.floor(u*m):ri;g>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ri}`);const b=[];let M=0;for(let A=0;A<ri;++A){const v=A/m,E=Math.exp(-v*v/2);b.push(E),A===0?M+=E:A<g&&(M+=2*E)}for(let A=0;A<b.length;A++)b[A]=b[A]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=b,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const y=this._sizeLods[s],_=3*y*(s>x-Oi?s-x+Oi:0),S=4*(this._cubeSize-y);Bs(t,_,S,3*y,2*y),l.setRenderTarget(t),l.render(f,Ur)}}function H_(i){const e=[],t=[],n=[];let s=i;const r=i-Oi+1+Tl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Oi?l=Tl[a-i+Oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,p=6,m=3,g=2,b=1,M=new Float32Array(m*p*h),x=new Float32Array(g*p*h),y=new Float32Array(b*p*h);for(let S=0;S<h;S++){const A=S%3*2/3-1,v=S>2?0:-1,E=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];M.set(E,m*p*S),x.set(d,g*p*S);const w=[S,S,S,S,S,S];y.set(w,b*p*S)}const _=new tn;_.setAttribute("position",new un(M,m)),_.setAttribute("uv",new un(x,g)),_.setAttribute("faceIndex",new un(y,b)),e.push(_),s>Oi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ll(i,e,t){const n=new qn(i,e,t);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function W_(i,e,t){const n=new Float32Array(ri),s=new U(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Pl(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Dl(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===$r||l===ea,u=l===Gi||l===Vi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Cl(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new Cl(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function q_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function X_(i,e,t,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],34962);const h=f.morphAttributes;for(const p in h){const m=h[p];for(let g=0,b=m.length;g<b;g++)e.update(m[g],34962)}}function c(f){const d=[],h=f.index,p=f.attributes.position;let m=0;if(h!==null){const M=h.array;m=h.version;for(let x=0,y=M.length;x<y;x+=3){const _=M[x+0],S=M[x+1],A=M[x+2];d.push(_,S,S,A,A,_)}}else{const M=p.array;m=p.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const _=x+0,S=x+1,A=x+2;d.push(_,S,S,A,A,_)}}const g=new(nu(d)?cu:lu)(d,1);g.version=m;const b=r.get(f);b&&e.remove(b),r.set(f,g)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Y_(i,e,t,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,h){i.drawElements(r,h,o,d*l),t.update(h,r,1)}function f(d,h,p){if(p===0)return;let m,g;if(s)m=i,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,o,d*l,p),t.update(h,r,p)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Z_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function K_(i,e){return i[0]-e[0]}function J_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Q_(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new Ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let b=r.get(u);if(b===void 0||b.count!==g){let re=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",re)};var p=re;b!==void 0&&b.texture.dispose();const y=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let w=0;y===!0&&(w=1),_===!0&&(w=2),S===!0&&(w=3);let R=u.attributes.position.count*w,j=1;R>e.maxTextureSize&&(j=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const F=new Float32Array(R*j*4*g),D=new au(F,R,j,g);D.type=li,D.needsUpdate=!0;const q=w*4;for(let te=0;te<g;te++){const Y=A[te],ae=v[te],oe=E[te],k=R*j*4*te;for(let J=0;J<Y.count;J++){const le=J*q;y===!0&&(a.fromBufferAttribute(Y,J),F[k+le+0]=a.x,F[k+le+1]=a.y,F[k+le+2]=a.z,F[k+le+3]=0),_===!0&&(a.fromBufferAttribute(ae,J),F[k+le+4]=a.x,F[k+le+5]=a.y,F[k+le+6]=a.z,F[k+le+7]=0),S===!0&&(a.fromBufferAttribute(oe,J),F[k+le+8]=a.x,F[k+le+9]=a.y,F[k+le+10]=a.z,F[k+le+11]=oe.itemSize===4?a.w:1)}}b={count:g,texture:D,size:new Ue(R,j)},r.set(u,b),u.addEventListener("dispose",re)}let M=0;for(let y=0;y<h.length;y++)M+=h[y];const x=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(i,"morphTargetBaseInfluence",x),d.getUniforms().setValue(i,"morphTargetInfluences",h),d.getUniforms().setValue(i,"morphTargetsTexture",b.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",b.size)}else{const m=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<m;_++){const S=g[_];S[0]=_,S[1]=h[_]}g.sort(J_);for(let _=0;_<8;_++)_<m&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(K_);const b=u.morphAttributes.position,M=u.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const S=o[_],A=S[0],v=S[1];A!==Number.MAX_SAFE_INTEGER&&v?(b&&u.getAttribute("morphTarget"+_)!==b[A]&&u.setAttribute("morphTarget"+_,b[A]),M&&u.getAttribute("morphNormal"+_)!==M[A]&&u.setAttribute("morphNormal"+_,M[A]),s[_]=v,x+=v):(b&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),M&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const y=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function $_(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const mu=new Qt,pu=new au,gu=new Bm,_u=new du,Rl=[],Il=[],kl=new Float32Array(16),Fl=new Float32Array(9),zl=new Float32Array(4);function Yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Rl[s];if(r===void 0&&(r=new Float32Array(s),Rl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ir(i,e){let t=Il[e];t===void 0&&(t=new Int32Array(e),Il[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function e0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function s0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(It(t,n))return;zl.set(n),i.uniformMatrix2fv(this.addr,!1,zl),kt(t,n)}}function r0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(It(t,n))return;Fl.set(n),i.uniformMatrix3fv(this.addr,!1,Fl),kt(t,n)}}function a0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(It(t,n))return;kl.set(n),i.uniformMatrix4fv(this.addr,!1,kl),kt(t,n)}}function o0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function f0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function p0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||mu,s)}function g0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gu,s)}function _0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_u,s)}function b0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pu,s)}function v0(i){switch(i){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return d0;case 36295:return h0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return b0}}function x0(i,e){i.uniform1fv(this.addr,e)}function M0(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function y0(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function S0(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function w0(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function T0(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E0(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function A0(i,e){i.uniform1iv(this.addr,e)}function C0(i,e){i.uniform2iv(this.addr,e)}function L0(i,e){i.uniform3iv(this.addr,e)}function P0(i,e){i.uniform4iv(this.addr,e)}function D0(i,e){i.uniform1uiv(this.addr,e)}function R0(i,e){i.uniform2uiv(this.addr,e)}function I0(i,e){i.uniform3uiv(this.addr,e)}function k0(i,e){i.uniform4uiv(this.addr,e)}function F0(i,e,t){const n=this.cache,s=e.length,r=ir(t,s);It(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||mu,r[a])}function z0(i,e,t){const n=this.cache,s=e.length,r=ir(t,s);It(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gu,r[a])}function O0(i,e,t){const n=this.cache,s=e.length,r=ir(t,s);It(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_u,r[a])}function N0(i,e,t){const n=this.cache,s=e.length,r=ir(t,s);It(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pu,r[a])}function U0(i){switch(i){case 5126:return x0;case 35664:return M0;case 35665:return y0;case 35666:return S0;case 35674:return w0;case 35675:return T0;case 35676:return E0;case 5124:case 35670:return A0;case 35667:case 35671:return C0;case 35668:case 35672:return L0;case 35669:case 35673:return P0;case 5125:return D0;case 36294:return R0;case 36295:return I0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return N0}}class B0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=v0(t.type)}}class G0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=U0(t.type)}}class V0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function Ol(i,e){i.seq.push(e),i.map[e.id]=e}function H0(i,e,t){const n=i.name,s=n.length;for(Gr.lastIndex=0;;){const r=Gr.exec(n),a=Gr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ol(t,c===void 0?new B0(o,i,e):new G0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new V0(o),Ol(t,f)),t=f}}}class Zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);H0(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Nl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let W0=0;function j0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function q0(i){switch(i){case jn:return["Linear","( value )"];case _t:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Ul(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+j0(i.getShaderSource(e),a)}else return s}function X0(i,e){const t=q0(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Y0(i,e){let t;switch(e){case mm:t="Linear";break;case pm:t="Reinhard";break;case gm:t="OptimizedCineon";break;case $c:t="ACESFilmic";break;case _m:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(as).join(`
`)}function K0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J0(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function as(i){return i!==""}function Bl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(i){return i.replace(Q0,$0)}function $0(i,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ra(t)}const eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(i){return i.replace(eb,tb)}function tb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rs&&(e="SHADOWMAP_TYPE_VSM"),e}function ib(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Vi:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function rb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ba:e="ENVMAP_BLENDING_MULTIPLY";break;case dm:e="ENVMAP_BLENDING_MIX";break;case hm:e="ENVMAP_BLENDING_ADD";break}return e}function ab(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ob(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=nb(t),c=ib(t),u=sb(t),f=rb(t),d=ab(t),h=t.isWebGL2?"":Z0(t),p=K0(r),m=s.createProgram();let g,b,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[p].filter(as).join(`
`),g.length>0&&(g+=`
`),b=[h,p].filter(as).join(`
`),b.length>0&&(b+=`
`)):(g=[Hl(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),b=[h,Hl(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?qe.tonemapping_pars_fragment:"",t.toneMapping!==En?Y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,X0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),a=ra(a),a=Bl(a,t),a=Gl(a,t),o=ra(o),o=Bl(o,t),o=Gl(o,t),a=Vl(a),o=Vl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,b=["#define varying in",t.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const x=M+g+a,y=M+b+o,_=Nl(s,35633,x),S=Nl(s,35632,y);if(s.attachShader(m,_),s.attachShader(m,S),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const E=s.getProgramInfoLog(m).trim(),w=s.getShaderInfoLog(_).trim(),R=s.getShaderInfoLog(S).trim();let j=!0,F=!0;if(s.getProgramParameter(m,35714)===!1){j=!1;const D=Ul(s,_,"vertex"),q=Ul(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+D+`
`+q)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(w===""||R==="")&&(F=!1);F&&(this.diagnostics={runnable:j,programLog:E,vertexShader:{log:w,prefix:g},fragmentShader:{log:R,prefix:b}})}s.deleteShader(_),s.deleteShader(S);let A;this.getUniforms=function(){return A===void 0&&(A=new Zs(s,m)),A};let v;return this.getAttributes=function(){return v===void 0&&(v=J0(s,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=S,this}let lb=0;class cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ub(e),t.set(e,n)),n}}class ub{constructor(e){this.id=lb++,this.code=e,this.usedTimes=0}}function fb(i,e,t,n,s,r,a){const o=new xa,l=new cb,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,E,w,R,j){const F=R.fog,D=j.geometry,q=v.isMeshStandardMaterial?R.environment:null,re=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),te=re&&re.mapping===tr?re.image.height:null,Y=p[v.type];v.precision!==null&&(h=s.getMaxPrecision(v.precision),h!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ae=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,oe=ae!==void 0?ae.length:0;let k=0;D.morphAttributes.position!==void 0&&(k=1),D.morphAttributes.normal!==void 0&&(k=2),D.morphAttributes.color!==void 0&&(k=3);let J,le,H,ge;if(Y){const je=wn[Y];J=je.vertexShader,le=je.fragmentShader}else J=v.vertexShader,le=v.fragmentShader,l.update(v),H=l.getVertexShaderID(v),ge=l.getFragmentShaderID(v);const N=i.getRenderTarget(),ve=v.alphaTest>0,Ce=v.clearcoat>0,ke=v.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:v.type,vertexShader:J,fragmentShader:le,defines:v.defines,customVertexShaderID:H,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:d,outputEncoding:N===null?i.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:jn,map:!!v.map,matcap:!!v.matcap,envMap:!!re,envMapMode:re&&re.mapping,envMapCubeUVHeight:te,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===zm,tangentSpaceNormalMap:v.normalMapType===va,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===_t,clearcoat:Ce,clearcoatMap:Ce&&!!v.clearcoatMap,clearcoatRoughnessMap:Ce&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Ce&&!!v.clearcoatNormalMap,iridescence:ke,iridescenceMap:ke&&!!v.iridescenceMap,iridescenceThicknessMap:ke&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ni,alphaMap:!!v.alphaMap,alphaTest:ve,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:k,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:En,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_a,flipSided:v.side===_n,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function g(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)E.push(w),E.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(b(E,v),M(E,v),E.push(i.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function b(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),v.push(o.mask)}function x(v){const E=p[v.type];let w;if(E){const R=wn[E];w=fu.clone(R.uniforms)}else w=v.uniforms;return w}function y(v,E){let w;for(let R=0,j=c.length;R<j;R++){const F=c[R];if(F.cacheKey===E){w=F,++w.usedTimes;break}}return w===void 0&&(w=new ob(i,E,v,r),c.push(w)),w}function _(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function S(v){l.remove(v)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:x,acquireProgram:y,releaseProgram:_,releaseShaderCache:S,programs:c,dispose:A}}function db(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function hb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,h,p,m,g){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:d,material:h,groupOrder:p,renderOrder:f.renderOrder,z:m,group:g},i[e]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=h,b.groupOrder=p,b.renderOrder=f.renderOrder,b.z=m,b.group=g),e++,b}function o(f,d,h,p,m,g){const b=a(f,d,h,p,m,g);h.transmission>0?n.push(b):h.transparent===!0?s.push(b):t.push(b)}function l(f,d,h,p,m,g){const b=a(f,d,h,p,m,g);h.transmission>0?n.unshift(b):h.transparent===!0?s.unshift(b):t.unshift(b)}function c(f,d){t.length>1&&t.sort(f||hb),n.length>1&&n.sort(d||Wl),s.length>1&&s.sort(d||Wl)}function u(){for(let f=e,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function mb(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new jl,i.set(n,[a])):s>=r.length?(a=new jl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new nt};break;case"SpotLight":t={position:new U,direction:new U,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function gb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _b=0;function bb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vb(i,e){const t=new pb,n=gb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new U);const r=new U,a=new yt,o=new yt;function l(u,f){let d=0,h=0,p=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let m=0,g=0,b=0,M=0,x=0,y=0,_=0,S=0,A=0,v=0;u.sort(bb);const E=f!==!0?Math.PI:1;for(let R=0,j=u.length;R<j;R++){const F=u[R],D=F.color,q=F.intensity,re=F.distance,te=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=D.r*q*E,h+=D.g*q*E,p+=D.b*q*E;else if(F.isLightProbe)for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(F.sh.coefficients[Y],q);else if(F.isDirectionalLight){const Y=t.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity*E),F.castShadow){const ae=F.shadow,oe=n.get(F);oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,s.directionalShadow[m]=oe,s.directionalShadowMap[m]=te,s.directionalShadowMatrix[m]=F.shadow.matrix,y++}s.directional[m]=Y,m++}else if(F.isSpotLight){const Y=t.get(F);Y.position.setFromMatrixPosition(F.matrixWorld),Y.color.copy(D).multiplyScalar(q*E),Y.distance=re,Y.coneCos=Math.cos(F.angle),Y.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Y.decay=F.decay,s.spot[b]=Y;const ae=F.shadow;if(F.map&&(s.spotLightMap[A]=F.map,A++,ae.updateMatrices(F),F.castShadow&&v++),s.spotLightMatrix[b]=ae.matrix,F.castShadow){const oe=n.get(F);oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,s.spotShadow[b]=oe,s.spotShadowMap[b]=te,S++}b++}else if(F.isRectAreaLight){const Y=t.get(F);Y.color.copy(D).multiplyScalar(q),Y.halfWidth.set(F.width*.5,0,0),Y.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=Y,M++}else if(F.isPointLight){const Y=t.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity*E),Y.distance=F.distance,Y.decay=F.decay,F.castShadow){const ae=F.shadow,oe=n.get(F);oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,oe.shadowCameraNear=ae.camera.near,oe.shadowCameraFar=ae.camera.far,s.pointShadow[g]=oe,s.pointShadowMap[g]=te,s.pointShadowMatrix[g]=F.shadow.matrix,_++}s.point[g]=Y,g++}else if(F.isHemisphereLight){const Y=t.get(F);Y.skyColor.copy(F.color).multiplyScalar(q*E),Y.groundColor.copy(F.groundColor).multiplyScalar(q*E),s.hemi[x]=Y,x++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=h,s.ambient[2]=p;const w=s.hash;(w.directionalLength!==m||w.pointLength!==g||w.spotLength!==b||w.rectAreaLength!==M||w.hemiLength!==x||w.numDirectionalShadows!==y||w.numPointShadows!==_||w.numSpotShadows!==S||w.numSpotMaps!==A)&&(s.directional.length=m,s.spot.length=b,s.rectArea.length=M,s.point.length=g,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=_,s.pointShadowMap.length=_,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=_,s.spotLightMatrix.length=S+A-v,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=v,w.directionalLength=m,w.pointLength=g,w.spotLength=b,w.rectAreaLength=M,w.hemiLength=x,w.numDirectionalShadows=y,w.numPointShadows=_,w.numSpotShadows=S,w.numSpotMaps=A,s.version=_b++)}function c(u,f){let d=0,h=0,p=0,m=0,g=0;const b=f.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const y=u[M];if(y.isDirectionalLight){const _=s.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(b),d++}else if(y.isSpotLight){const _=s.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(b),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(b),p++}else if(y.isRectAreaLight){const _=s.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(b),o.identity(),a.copy(y.matrixWorld),a.premultiply(b),o.extractRotation(a),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const _=s.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(b),h++}else if(y.isHemisphereLight){const _=s.hemi[g];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(b),g++}}}return{setup:l,setupView:c,state:s}}function ql(i,e){const t=new vb(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xb(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new ql(i,e),t.set(r,[l])):a>=o.length?(l=new ql(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Mb extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yb extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tb(i,e,t){let n=new ya;const s=new Ue,r=new Ue,a=new Ut,o=new Mb({depthPacking:Fm}),l=new yb,c={},u=t.maxTextureSize,f={0:_n,1:di,2:_a},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Sb,fragmentShader:wb}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const p=new tn;p.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new gn(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc,this.render=function(y,_,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const A=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),w=i.state;w.setBlending(Wn),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let R=0,j=y.length;R<j;R++){const F=y[R],D=F.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const q=D.getFrameExtents();if(s.multiply(q),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,D.mapSize.y=r.y)),D.map===null){const te=this.type!==rs?{minFilter:Yt,magFilter:Yt}:{};D.map=new qn(s.x,s.y,te),D.map.texture.name=F.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const re=D.getViewportCount();for(let te=0;te<re;te++){const Y=D.getViewport(te);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),w.viewport(a),D.updateMatrices(F,te),n=D.getFrustum(),x(_,S,D.camera,F,this.type)}D.isPointLightShadow!==!0&&this.type===rs&&b(D,S),D.needsUpdate=!1}g.needsUpdate=!1,i.setRenderTarget(A,v,E)};function b(y,_){const S=e.update(m);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new qn(s.x,s.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(_,null,S,d,m,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(_,null,S,h,m,null)}function M(y,_,S,A,v,E){let w=null;const R=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0)w=R;else if(w=S.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const j=w.uuid,F=_.uuid;let D=c[j];D===void 0&&(D={},c[j]=D);let q=D[F];q===void 0&&(q=w.clone(),D[F]=q),w=q}return w.visible=_.visible,w.wireframe=_.wireframe,E===rs?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:f[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0&&(w.referencePosition.setFromMatrixPosition(S.matrixWorld),w.nearDistance=A,w.farDistance=v),w}function x(y,_,S,A,v){if(y.visible===!1)return;if(y.layers.test(_.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===rs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);const R=e.update(y),j=y.material;if(Array.isArray(j)){const F=R.groups;for(let D=0,q=F.length;D<q;D++){const re=F[D],te=j[re.materialIndex];if(te&&te.visible){const Y=M(y,te,A,S.near,S.far,v);i.renderBufferDirect(S,null,R,Y,y,re)}}}else if(j.visible){const F=M(y,j,A,S.near,S.far,v);i.renderBufferDirect(S,null,R,F,y,null)}}const w=y.children;for(let R=0,j=w.length;R<j;R++)x(w[R],_,S,A,v)}}function Eb(i,e,t){const n=t.isWebGL2;function s(){let O=!1;const $=new Ut;let ue=null;const Te=new Ut(0,0,0,0);return{setMask:function(Re){ue!==Re&&!O&&(i.colorMask(Re,Re,Re,Re),ue=Re)},setLocked:function(Re){O=Re},setClear:function(Re,mt,zt,Gt,Kn){Kn===!0&&(Re*=Gt,mt*=Gt,zt*=Gt),$.set(Re,mt,zt,Gt),Te.equals($)===!1&&(i.clearColor(Re,mt,zt,Gt),Te.copy($))},reset:function(){O=!1,ue=null,Te.set(-1,0,0,0)}}}function r(){let O=!1,$=null,ue=null,Te=null;return{setTest:function(Re){Re?ve(2929):Ce(2929)},setMask:function(Re){$!==Re&&!O&&(i.depthMask(Re),$=Re)},setFunc:function(Re){if(ue!==Re){switch(Re){case rm:i.depthFunc(512);break;case am:i.depthFunc(519);break;case om:i.depthFunc(513);break;case Qr:i.depthFunc(515);break;case lm:i.depthFunc(514);break;case cm:i.depthFunc(518);break;case um:i.depthFunc(516);break;case fm:i.depthFunc(517);break;default:i.depthFunc(515)}ue=Re}},setLocked:function(Re){O=Re},setClear:function(Re){Te!==Re&&(i.clearDepth(Re),Te=Re)},reset:function(){O=!1,$=null,ue=null,Te=null}}}function a(){let O=!1,$=null,ue=null,Te=null,Re=null,mt=null,zt=null,Gt=null,Kn=null;return{setTest:function(xt){O||(xt?ve(2960):Ce(2960))},setMask:function(xt){$!==xt&&!O&&(i.stencilMask(xt),$=xt)},setFunc:function(xt,Ln,dn){(ue!==xt||Te!==Ln||Re!==dn)&&(i.stencilFunc(xt,Ln,dn),ue=xt,Te=Ln,Re=dn)},setOp:function(xt,Ln,dn){(mt!==xt||zt!==Ln||Gt!==dn)&&(i.stencilOp(xt,Ln,dn),mt=xt,zt=Ln,Gt=dn)},setLocked:function(xt){O=xt},setClear:function(xt){Kn!==xt&&(i.clearStencil(xt),Kn=xt)},reset:function(){O=!1,$=null,ue=null,Te=null,Re=null,mt=null,zt=null,Gt=null,Kn=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let d={},h={},p=new WeakMap,m=[],g=null,b=!1,M=null,x=null,y=null,_=null,S=null,A=null,v=null,E=!1,w=null,R=null,j=null,F=null,D=null;const q=i.getParameter(35661);let re=!1,te=0;const Y=i.getParameter(7938);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),re=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),re=te>=2);let ae=null,oe={};const k=i.getParameter(3088),J=i.getParameter(2978),le=new Ut().fromArray(k),H=new Ut().fromArray(J);function ge(O,$,ue){const Te=new Uint8Array(4),Re=i.createTexture();i.bindTexture(O,Re),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let mt=0;mt<ue;mt++)i.texImage2D($+mt,0,6408,1,1,0,6408,5121,Te);return Re}const N={};N[3553]=ge(3553,3553,1),N[34067]=ge(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(2929),l.setFunc(Qr),Pt(!1),Ht(Oo),ve(2884),Ft(Wn);function ve(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function Ce(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function ke(O,$){return h[O]!==$?(i.bindFramebuffer(O,$),h[O]=$,n&&(O===36009&&(h[36160]=$),O===36160&&(h[36009]=$)),!0):!1}function X(O,$){let ue=m,Te=!1;if(O)if(ue=p.get($),ue===void 0&&(ue=[],p.set($,ue)),O.isWebGLMultipleRenderTargets){const Re=O.texture;if(ue.length!==Re.length||ue[0]!==36064){for(let mt=0,zt=Re.length;mt<zt;mt++)ue[mt]=36064+mt;ue.length=Re.length,Te=!0}}else ue[0]!==36064&&(ue[0]=36064,Te=!0);else ue[0]!==1029&&(ue[0]=1029,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function je(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Ve={[Fi]:32774,[Yh]:32778,[Zh]:32779};if(n)Ve[Go]=32775,Ve[Vo]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ve[Go]=O.MIN_EXT,Ve[Vo]=O.MAX_EXT)}const ze={[Kh]:0,[Jh]:1,[Qh]:768,[Jc]:770,[sm]:776,[nm]:774,[em]:772,[$h]:769,[Qc]:771,[im]:775,[tm]:773};function Ft(O,$,ue,Te,Re,mt,zt,Gt){if(O===Wn){b===!0&&(Ce(3042),b=!1);return}if(b===!1&&(ve(3042),b=!0),O!==Xh){if(O!==M||Gt!==E){if((x!==Fi||S!==Fi)&&(i.blendEquation(32774),x=Fi,S=Fi),Gt)switch(O){case Ni:i.blendFuncSeparate(1,771,1,771);break;case No:i.blendFunc(1,1);break;case Uo:i.blendFuncSeparate(0,769,0,1);break;case Bo:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ni:i.blendFuncSeparate(770,771,1,771);break;case No:i.blendFunc(770,1);break;case Uo:i.blendFuncSeparate(0,769,0,1);break;case Bo:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,_=null,A=null,v=null,M=O,E=Gt}return}Re=Re||$,mt=mt||ue,zt=zt||Te,($!==x||Re!==S)&&(i.blendEquationSeparate(Ve[$],Ve[Re]),x=$,S=Re),(ue!==y||Te!==_||mt!==A||zt!==v)&&(i.blendFuncSeparate(ze[ue],ze[Te],ze[mt],ze[zt]),y=ue,_=Te,A=mt,v=zt),M=O,E=!1}function Lt(O,$){O.side===_a?Ce(2884):ve(2884);let ue=O.side===_n;$&&(ue=!ue),Pt(ue),O.blending===Ni&&O.transparent===!1?Ft(Wn):Ft(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const Te=O.stencilWrite;c.setTest(Te),Te&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ve(32926):Ce(32926)}function Pt(O){w!==O&&(O?i.frontFace(2304):i.frontFace(2305),w=O)}function Ht(O){O!==jh?(ve(2884),O!==R&&(O===Oo?i.cullFace(1029):O===qh?i.cullFace(1028):i.cullFace(1032))):Ce(2884),R=O}function wt(O){O!==j&&(re&&i.lineWidth(O),j=O)}function pt(O,$,ue){O?(ve(32823),(F!==$||D!==ue)&&(i.polygonOffset($,ue),F=$,D=ue)):Ce(32823)}function fn(O){O?ve(3089):Ce(3089)}function Zt(O){O===void 0&&(O=33984+q-1),ae!==O&&(i.activeTexture(O),ae=O)}function L(O,$,ue){ue===void 0&&(ae===null?ue=33984+q-1:ue=ae);let Te=oe[ue];Te===void 0&&(Te={type:void 0,texture:void 0},oe[ue]=Te),(Te.type!==O||Te.texture!==$)&&(ae!==ue&&(i.activeTexture(ue),ae=ue),i.bindTexture(O,$||N[O]),Te.type=O,Te.texture=$)}function T(){const O=oe[ae];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function P(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(O){le.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function Pe(O){H.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),H.copy(O))}function Je(O,$){let ue=f.get($);ue===void 0&&(ue=new WeakMap,f.set($,ue));let Te=ue.get(O);Te===void 0&&(Te=i.getUniformBlockIndex($,O.name),ue.set(O,Te))}function Qe(O,$){const Te=f.get($).get(O);u.get($)!==Te&&(i.uniformBlockBinding($,Te,O.__bindingPointIndex),u.set($,Te))}function gt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ae=null,oe={},h={},p=new WeakMap,m=[],g=null,b=!1,M=null,x=null,y=null,_=null,S=null,A=null,v=null,E=!1,w=null,R=null,j=null,F=null,D=null,le.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:Ce,bindFramebuffer:ke,drawBuffers:X,useProgram:je,setBlending:Ft,setMaterial:Lt,setFlipSided:Pt,setCullFace:Ht,setLineWidth:wt,setPolygonOffset:pt,setScissorTest:fn,activeTexture:Zt,bindTexture:L,unbindTexture:T,compressedTexImage2D:Q,compressedTexImage3D:de,texImage2D:Ae,texImage3D:xe,updateUBOMapping:Je,uniformBlockBinding:Qe,texStorage2D:B,texStorage3D:Me,texSubImage2D:me,texSubImage3D:be,compressedTexSubImage2D:Oe,compressedTexSubImage3D:P,scissor:De,viewport:Pe,reset:gt}}function Ab(i,e,t,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let m;const g=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,T){return b?new OffscreenCanvas(L,T):ms("canvas")}function x(L,T,Q,de){let me=1;if((L.width>de||L.height>de)&&(me=de/Math.max(L.width,L.height)),me<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const be=T?sa:Math.floor,Oe=be(me*L.width),P=be(me*L.height);m===void 0&&(m=M(Oe,P));const B=Q?M(Oe,P):m;return B.width=Oe,B.height=P,B.getContext("2d").drawImage(L,0,0,Oe,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Oe+"x"+P+")."),B}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return ml(L.width)&&ml(L.height)}function _(L){return o?!1:L.wrapS!==Mn||L.wrapT!==Mn||L.minFilter!==Yt&&L.minFilter!==pn}function S(L,T){return L.generateMipmaps&&T&&L.minFilter!==Yt&&L.minFilter!==pn}function A(L){i.generateMipmap(L)}function v(L,T,Q,de,me=!1){if(o===!1)return T;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let be=T;return T===6403&&(Q===5126&&(be=33326),Q===5131&&(be=33325),Q===5121&&(be=33321)),T===33319&&(Q===5126&&(be=33328),Q===5131&&(be=33327),Q===5121&&(be=33323)),T===6408&&(Q===5126&&(be=34836),Q===5131&&(be=34842),Q===5121&&(be=de===_t&&me===!1?35907:32856),Q===32819&&(be=32854),Q===32820&&(be=32855)),(be===33325||be===33326||be===33327||be===33328||be===34842||be===34836)&&e.get("EXT_color_buffer_float"),be}function E(L,T,Q){return S(L,Q)===!0||L.isFramebufferTexture&&L.minFilter!==Yt&&L.minFilter!==pn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function w(L){return L===Yt||L===Ho||L===fr?9728:9729}function R(L){const T=L.target;T.removeEventListener("dispose",R),F(T),T.isVideoTexture&&p.delete(T)}function j(L){const T=L.target;T.removeEventListener("dispose",j),q(T)}function F(L){const T=n.get(L);if(T.__webglInit===void 0)return;const Q=L.source,de=g.get(Q);if(de){const me=de[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&D(L),Object.keys(de).length===0&&g.delete(Q)}n.remove(L)}function D(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const Q=L.source,de=g.get(Q);delete de[T.__cacheKey],a.memory.textures--}function q(L){const T=L.texture,Q=n.get(L),de=n.get(T);if(de.__webglTexture!==void 0&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)i.deleteFramebuffer(Q.__webglFramebuffer[me]),Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer[me]);else{if(i.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let me=0;me<Q.__webglColorRenderbuffer.length;me++)Q.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(Q.__webglColorRenderbuffer[me]);Q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let me=0,be=T.length;me<be;me++){const Oe=n.get(T[me]);Oe.__webglTexture&&(i.deleteTexture(Oe.__webglTexture),a.memory.textures--),n.remove(T[me])}n.remove(T),n.remove(L)}let re=0;function te(){re=0}function Y(){const L=re;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),re+=1,L}function ae(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.encoding),T.join()}function oe(L,T){const Q=n.get(L);if(L.isVideoTexture&&fn(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(Q,L,T);return}}t.bindTexture(3553,Q.__webglTexture,33984+T)}function k(L,T){const Q=n.get(L);if(L.version>0&&Q.__version!==L.version){Ce(Q,L,T);return}t.bindTexture(35866,Q.__webglTexture,33984+T)}function J(L,T){const Q=n.get(L);if(L.version>0&&Q.__version!==L.version){Ce(Q,L,T);return}t.bindTexture(32879,Q.__webglTexture,33984+T)}function le(L,T){const Q=n.get(L);if(L.version>0&&Q.__version!==L.version){ke(Q,L,T);return}t.bindTexture(34067,Q.__webglTexture,33984+T)}const H={[ta]:10497,[Mn]:33071,[na]:33648},ge={[Yt]:9728,[Ho]:9984,[fr]:9986,[pn]:9729,[bm]:9985,[fs]:9987};function N(L,T,Q){if(Q?(i.texParameteri(L,10242,H[T.wrapS]),i.texParameteri(L,10243,H[T.wrapT]),(L===32879||L===35866)&&i.texParameteri(L,32882,H[T.wrapR]),i.texParameteri(L,10240,ge[T.magFilter]),i.texParameteri(L,10241,ge[T.minFilter])):(i.texParameteri(L,10242,33071),i.texParameteri(L,10243,33071),(L===32879||L===35866)&&i.texParameteri(L,32882,33071),(T.wrapS!==Mn||T.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,10240,w(T.magFilter)),i.texParameteri(L,10241,w(T.minFilter)),T.minFilter!==Yt&&T.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Yt||T.minFilter!==fr&&T.minFilter!==fs||T.type===li&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===ds&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(L,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ve(L,T){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",R));const de=T.source;let me=g.get(de);me===void 0&&(me={},g.set(de,me));const be=ae(T);if(be!==L.__cacheKey){me[be]===void 0&&(me[be]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),me[be].usedTimes++;const Oe=me[L.__cacheKey];Oe!==void 0&&(me[L.__cacheKey].usedTimes--,Oe.usedTimes===0&&D(T)),L.__cacheKey=be,L.__webglTexture=me[be].texture}return Q}function Ce(L,T,Q){let de=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=35866),T.isData3DTexture&&(de=32879);const me=ve(L,T),be=T.source;t.bindTexture(de,L.__webglTexture,33984+Q);const Oe=n.get(be);if(be.version!==Oe.__version||me===!0){t.activeTexture(33984+Q),i.pixelStorei(37440,T.flipY),i.pixelStorei(37441,T.premultiplyAlpha),i.pixelStorei(3317,T.unpackAlignment),i.pixelStorei(37443,0);const P=_(T)&&y(T.image)===!1;let B=x(T.image,P,!1,u);B=Zt(T,B);const Me=y(B)||o,Ae=r.convert(T.format,T.encoding);let xe=r.convert(T.type),De=v(T.internalFormat,Ae,xe,T.encoding,T.isVideoTexture);N(de,T,Me);let Pe;const Je=T.mipmaps,Qe=o&&T.isVideoTexture!==!0,gt=Oe.__version===void 0||me===!0,O=E(T,B,Me);if(T.isDepthTexture)De=6402,o?T.type===li?De=36012:T.type===oi?De=33190:T.type===Ui?De=35056:De=33189:T.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ui&&De===6402&&T.type!==tu&&T.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=oi,xe=r.convert(T.type)),T.format===Hi&&De===6402&&(De=34041,T.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ui,xe=r.convert(T.type))),gt&&(Qe?t.texStorage2D(3553,1,De,B.width,B.height):t.texImage2D(3553,0,De,B.width,B.height,0,Ae,xe,null));else if(T.isDataTexture)if(Je.length>0&&Me){Qe&&gt&&t.texStorage2D(3553,O,De,Je[0].width,Je[0].height);for(let $=0,ue=Je.length;$<ue;$++)Pe=Je[$],Qe?t.texSubImage2D(3553,$,0,0,Pe.width,Pe.height,Ae,xe,Pe.data):t.texImage2D(3553,$,De,Pe.width,Pe.height,0,Ae,xe,Pe.data);T.generateMipmaps=!1}else Qe?(gt&&t.texStorage2D(3553,O,De,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,Ae,xe,B.data)):t.texImage2D(3553,0,De,B.width,B.height,0,Ae,xe,B.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Qe&&gt&&t.texStorage3D(35866,O,De,Je[0].width,Je[0].height,B.depth);for(let $=0,ue=Je.length;$<ue;$++)Pe=Je[$],T.format!==yn?Ae!==null?Qe?t.compressedTexSubImage3D(35866,$,0,0,0,Pe.width,Pe.height,B.depth,Ae,Pe.data,0,0):t.compressedTexImage3D(35866,$,De,Pe.width,Pe.height,B.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(35866,$,0,0,0,Pe.width,Pe.height,B.depth,Ae,xe,Pe.data):t.texImage3D(35866,$,De,Pe.width,Pe.height,B.depth,0,Ae,xe,Pe.data)}else{Qe&&gt&&t.texStorage2D(3553,O,De,Je[0].width,Je[0].height);for(let $=0,ue=Je.length;$<ue;$++)Pe=Je[$],T.format!==yn?Ae!==null?Qe?t.compressedTexSubImage2D(3553,$,0,0,Pe.width,Pe.height,Ae,Pe.data):t.compressedTexImage2D(3553,$,De,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(3553,$,0,0,Pe.width,Pe.height,Ae,xe,Pe.data):t.texImage2D(3553,$,De,Pe.width,Pe.height,0,Ae,xe,Pe.data)}else if(T.isDataArrayTexture)Qe?(gt&&t.texStorage3D(35866,O,De,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,Ae,xe,B.data)):t.texImage3D(35866,0,De,B.width,B.height,B.depth,0,Ae,xe,B.data);else if(T.isData3DTexture)Qe?(gt&&t.texStorage3D(32879,O,De,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,Ae,xe,B.data)):t.texImage3D(32879,0,De,B.width,B.height,B.depth,0,Ae,xe,B.data);else if(T.isFramebufferTexture){if(gt)if(Qe)t.texStorage2D(3553,O,De,B.width,B.height);else{let $=B.width,ue=B.height;for(let Te=0;Te<O;Te++)t.texImage2D(3553,Te,De,$,ue,0,Ae,xe,null),$>>=1,ue>>=1}}else if(Je.length>0&&Me){Qe&&gt&&t.texStorage2D(3553,O,De,Je[0].width,Je[0].height);for(let $=0,ue=Je.length;$<ue;$++)Pe=Je[$],Qe?t.texSubImage2D(3553,$,0,0,Ae,xe,Pe):t.texImage2D(3553,$,De,Ae,xe,Pe);T.generateMipmaps=!1}else Qe?(gt&&t.texStorage2D(3553,O,De,B.width,B.height),t.texSubImage2D(3553,0,0,0,Ae,xe,B)):t.texImage2D(3553,0,De,Ae,xe,B);S(T,Me)&&A(de),Oe.__version=be.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ke(L,T,Q){if(T.image.length!==6)return;const de=ve(L,T),me=T.source;t.bindTexture(34067,L.__webglTexture,33984+Q);const be=n.get(me);if(me.version!==be.__version||de===!0){t.activeTexture(33984+Q),i.pixelStorei(37440,T.flipY),i.pixelStorei(37441,T.premultiplyAlpha),i.pixelStorei(3317,T.unpackAlignment),i.pixelStorei(37443,0);const Oe=T.isCompressedTexture||T.image[0].isCompressedTexture,P=T.image[0]&&T.image[0].isDataTexture,B=[];for(let $=0;$<6;$++)!Oe&&!P?B[$]=x(T.image[$],!1,!0,c):B[$]=P?T.image[$].image:T.image[$],B[$]=Zt(T,B[$]);const Me=B[0],Ae=y(Me)||o,xe=r.convert(T.format,T.encoding),De=r.convert(T.type),Pe=v(T.internalFormat,xe,De,T.encoding),Je=o&&T.isVideoTexture!==!0,Qe=be.__version===void 0||de===!0;let gt=E(T,Me,Ae);N(34067,T,Ae);let O;if(Oe){Je&&Qe&&t.texStorage2D(34067,gt,Pe,Me.width,Me.height);for(let $=0;$<6;$++){O=B[$].mipmaps;for(let ue=0;ue<O.length;ue++){const Te=O[ue];T.format!==yn?xe!==null?Je?t.compressedTexSubImage2D(34069+$,ue,0,0,Te.width,Te.height,xe,Te.data):t.compressedTexImage2D(34069+$,ue,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?t.texSubImage2D(34069+$,ue,0,0,Te.width,Te.height,xe,De,Te.data):t.texImage2D(34069+$,ue,Pe,Te.width,Te.height,0,xe,De,Te.data)}}}else{O=T.mipmaps,Je&&Qe&&(O.length>0&&gt++,t.texStorage2D(34067,gt,Pe,B[0].width,B[0].height));for(let $=0;$<6;$++)if(P){Je?t.texSubImage2D(34069+$,0,0,0,B[$].width,B[$].height,xe,De,B[$].data):t.texImage2D(34069+$,0,Pe,B[$].width,B[$].height,0,xe,De,B[$].data);for(let ue=0;ue<O.length;ue++){const Re=O[ue].image[$].image;Je?t.texSubImage2D(34069+$,ue+1,0,0,Re.width,Re.height,xe,De,Re.data):t.texImage2D(34069+$,ue+1,Pe,Re.width,Re.height,0,xe,De,Re.data)}}else{Je?t.texSubImage2D(34069+$,0,0,0,xe,De,B[$]):t.texImage2D(34069+$,0,Pe,xe,De,B[$]);for(let ue=0;ue<O.length;ue++){const Te=O[ue];Je?t.texSubImage2D(34069+$,ue+1,0,0,xe,De,Te.image[$]):t.texImage2D(34069+$,ue+1,Pe,xe,De,Te.image[$])}}}S(T,Ae)&&A(34067),be.__version=me.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function X(L,T,Q,de,me){const be=r.convert(Q.format,Q.encoding),Oe=r.convert(Q.type),P=v(Q.internalFormat,be,Oe,Q.encoding);n.get(T).__hasExternalTextures||(me===32879||me===35866?t.texImage3D(me,0,P,T.width,T.height,T.depth,0,be,Oe,null):t.texImage2D(me,0,P,T.width,T.height,0,be,Oe,null)),t.bindFramebuffer(36160,L),pt(T)?d.framebufferTexture2DMultisampleEXT(36160,de,me,n.get(Q).__webglTexture,0,wt(T)):(me===3553||me>=34069&&me<=34074)&&i.framebufferTexture2D(36160,de,me,n.get(Q).__webglTexture,0),t.bindFramebuffer(36160,null)}function je(L,T,Q){if(i.bindRenderbuffer(36161,L),T.depthBuffer&&!T.stencilBuffer){let de=33189;if(Q||pt(T)){const me=T.depthTexture;me&&me.isDepthTexture&&(me.type===li?de=36012:me.type===oi&&(de=33190));const be=wt(T);pt(T)?d.renderbufferStorageMultisampleEXT(36161,be,de,T.width,T.height):i.renderbufferStorageMultisample(36161,be,de,T.width,T.height)}else i.renderbufferStorage(36161,de,T.width,T.height);i.framebufferRenderbuffer(36160,36096,36161,L)}else if(T.depthBuffer&&T.stencilBuffer){const de=wt(T);Q&&pt(T)===!1?i.renderbufferStorageMultisample(36161,de,35056,T.width,T.height):pt(T)?d.renderbufferStorageMultisampleEXT(36161,de,35056,T.width,T.height):i.renderbufferStorage(36161,34041,T.width,T.height),i.framebufferRenderbuffer(36160,33306,36161,L)}else{const de=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let me=0;me<de.length;me++){const be=de[me],Oe=r.convert(be.format,be.encoding),P=r.convert(be.type),B=v(be.internalFormat,Oe,P,be.encoding),Me=wt(T);Q&&pt(T)===!1?i.renderbufferStorageMultisample(36161,Me,B,T.width,T.height):pt(T)?d.renderbufferStorageMultisampleEXT(36161,Me,B,T.width,T.height):i.renderbufferStorage(36161,B,T.width,T.height)}}i.bindRenderbuffer(36161,null)}function Ve(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe(T.depthTexture,0);const de=n.get(T.depthTexture).__webglTexture,me=wt(T);if(T.depthTexture.format===ui)pt(T)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,de,0,me):i.framebufferTexture2D(36160,36096,3553,de,0);else if(T.depthTexture.format===Hi)pt(T)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,de,0,me):i.framebufferTexture2D(36160,33306,3553,de,0);else throw new Error("Unknown depthTexture format")}function ze(L){const T=n.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ve(T.__webglFramebuffer,L)}else if(Q){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(36160,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]=i.createRenderbuffer(),je(T.__webglDepthbuffer[de],L,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),je(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Ft(L,T,Q){const de=n.get(L);T!==void 0&&X(de.__webglFramebuffer,L,L.texture,36064,3553),Q!==void 0&&ze(L)}function Lt(L){const T=L.texture,Q=n.get(L),de=n.get(T);L.addEventListener("dispose",j),L.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=T.version,a.memory.textures++);const me=L.isWebGLCubeRenderTarget===!0,be=L.isWebGLMultipleRenderTargets===!0,Oe=y(L)||o;if(me){Q.__webglFramebuffer=[];for(let P=0;P<6;P++)Q.__webglFramebuffer[P]=i.createFramebuffer()}else{if(Q.__webglFramebuffer=i.createFramebuffer(),be)if(s.drawBuffers){const P=L.texture;for(let B=0,Me=P.length;B<Me;B++){const Ae=n.get(P[B]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&pt(L)===!1){const P=be?T:[T];Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer);for(let B=0;B<P.length;B++){const Me=P[B];Q.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(36161,Q.__webglColorRenderbuffer[B]);const Ae=r.convert(Me.format,Me.encoding),xe=r.convert(Me.type),De=v(Me.internalFormat,Ae,xe,Me.encoding,L.isXRRenderTarget===!0),Pe=wt(L);i.renderbufferStorageMultisample(36161,Pe,De,L.width,L.height),i.framebufferRenderbuffer(36160,36064+B,36161,Q.__webglColorRenderbuffer[B])}i.bindRenderbuffer(36161,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),je(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(me){t.bindTexture(34067,de.__webglTexture),N(34067,T,Oe);for(let P=0;P<6;P++)X(Q.__webglFramebuffer[P],L,T,36064,34069+P);S(T,Oe)&&A(34067),t.unbindTexture()}else if(be){const P=L.texture;for(let B=0,Me=P.length;B<Me;B++){const Ae=P[B],xe=n.get(Ae);t.bindTexture(3553,xe.__webglTexture),N(3553,Ae,Oe),X(Q.__webglFramebuffer,L,Ae,36064+B,3553),S(Ae,Oe)&&A(3553)}t.unbindTexture()}else{let P=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?P=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,de.__webglTexture),N(P,T,Oe),X(Q.__webglFramebuffer,L,T,36064,P),S(T,Oe)&&A(P),t.unbindTexture()}L.depthBuffer&&ze(L)}function Pt(L){const T=y(L)||o,Q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let de=0,me=Q.length;de<me;de++){const be=Q[de];if(S(be,T)){const Oe=L.isWebGLCubeRenderTarget?34067:3553,P=n.get(be).__webglTexture;t.bindTexture(Oe,P),A(Oe),t.unbindTexture()}}}function Ht(L){if(o&&L.samples>0&&pt(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Q=L.width,de=L.height;let me=16384;const be=[],Oe=L.stencilBuffer?33306:36096,P=n.get(L),B=L.isWebGLMultipleRenderTargets===!0;if(B)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){be.push(36064+Me),L.depthBuffer&&be.push(Oe);const Ae=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(Ae===!1&&(L.depthBuffer&&(me|=256),L.stencilBuffer&&(me|=1024)),B&&i.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[Me]),Ae===!0&&(i.invalidateFramebuffer(36008,[Oe]),i.invalidateFramebuffer(36009,[Oe])),B){const xe=n.get(T[Me]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,xe,0)}i.blitFramebuffer(0,0,Q,de,0,0,Q,de,me,9728),h&&i.invalidateFramebuffer(36008,be)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),B)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Me,36161,P.__webglColorRenderbuffer[Me]);const Ae=n.get(T[Me]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Me,3553,Ae,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function wt(L){return Math.min(f,L.samples)}function pt(L){const T=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function fn(L){const T=a.render.frame;p.get(L)!==T&&(p.set(L,T),L.update())}function Zt(L,T){const Q=L.encoding,de=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===ia||Q!==jn&&(Q===_t?o===!1?e.has("EXT_sRGB")===!0&&de===yn?(L.format=ia,L.minFilter=pn,L.generateMipmaps=!1):T=su.sRGBToLinear(T):(de!==yn||me!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Q)),T}this.allocateTextureUnit=Y,this.resetTextureUnits=te,this.setTexture2D=oe,this.setTexture2DArray=k,this.setTexture3D=J,this.setTextureCube=le,this.rebindTextures=Ft,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=X,this.useMultisampledRTT=pt}function Cb(i,e,t){const n=t.isWebGL2;function s(r,a=null){let o;if(r===hi)return 5121;if(r===ym)return 32819;if(r===Sm)return 32820;if(r===vm)return 5120;if(r===xm)return 5122;if(r===tu)return 5123;if(r===Mm)return 5124;if(r===oi)return 5125;if(r===li)return 5126;if(r===ds)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===wm)return 6406;if(r===yn)return 6408;if(r===Em)return 6409;if(r===Am)return 6410;if(r===ui)return 6402;if(r===Hi)return 34041;if(r===Tm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ia)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Cm)return 6403;if(r===Lm)return 36244;if(r===Pm)return 33319;if(r===Dm)return 33320;if(r===Rm)return 36249;if(r===dr||r===hr||r===mr||r===pr)if(a===_t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===dr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===dr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wo||r===jo||r===qo||r===Xo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Wo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Im)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Yo||r===Zo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Yo)return a===_t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Zo)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ko||r===Jo||r===Qo||r===$o||r===el||r===tl||r===nl||r===il||r===sl||r===rl||r===al||r===ol||r===ll||r===cl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ko)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jo)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qo)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$o)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===el)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tl)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nl)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===il)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sl)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rl)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===al)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ol)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ll)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cl)return a===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ul)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ul)return a===_t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ui?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Lb extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class os extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pb={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n),b=this._getHandJoint(c,m);g!==null&&(b.matrix.fromArray(g.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=g.radius),b.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,p=.005;c.inputState.pinching&&d>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Db extends Qt{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:ui,u!==ui&&u!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ui&&(n=oi),n===void 0&&u===Hi&&(n=Ui),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1}}class Rb extends pi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,d=null,h=null;const p=t.getContextAttributes();let m=null,g=null;const b=[],M=[],x=new Set,y=new Map,_=new ln;_.layers.enable(1),_.viewport=new Ut;const S=new ln;S.layers.enable(2),S.viewport=new Ut;const A=[_,S],v=new Lb;v.layers.enable(1),v.layers.enable(2);let E=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=b[k];return J===void 0&&(J=new Vr,b[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=b[k];return J===void 0&&(J=new Vr,b[k]=J),J.getGripSpace()},this.getHand=function(k){let J=b[k];return J===void 0&&(J=new Vr,b[k]=J),J.getHandSpace()};function R(k){const J=M.indexOf(k.inputSource);if(J===-1)return;const le=b[J];le!==void 0&&le.dispatchEvent({type:k.type,data:k.inputSource})}function j(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",F);for(let k=0;k<b.length;k++){const J=M[k];J!==null&&(M[k]=null,b[k].disconnect(J))}E=null,w=null,e.setRenderTarget(m),d=null,f=null,u=null,s=null,g=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return h},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",j),s.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:d}),g=new qn(d.framebufferWidth,d.framebufferHeight,{format:yn,type:hi,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let J=null,le=null,H=null;p.depth&&(H=p.stencil?35056:33190,J=p.stencil?Hi:ui,le=p.stencil?Ui:oi);const ge={colorFormat:32856,depthFormat:H,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),g=new qn(f.textureWidth,f.textureHeight,{format:yn,type:hi,depthTexture:new Db(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const N=e.properties.get(g);N.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(k){for(let J=0;J<k.removed.length;J++){const le=k.removed[J],H=M.indexOf(le);H>=0&&(M[H]=null,b[H].disconnect(le))}for(let J=0;J<k.added.length;J++){const le=k.added[J];let H=M.indexOf(le);if(H===-1){for(let N=0;N<b.length;N++)if(N>=M.length){M.push(le),H=N;break}else if(M[N]===null){M[N]=le,H=N;break}if(H===-1)break}const ge=b[H];ge&&ge.connect(le)}}const D=new U,q=new U;function re(k,J,le){D.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const H=D.distanceTo(q),ge=J.projectionMatrix.elements,N=le.projectionMatrix.elements,ve=ge[14]/(ge[10]-1),Ce=ge[14]/(ge[10]+1),ke=(ge[9]+1)/ge[5],X=(ge[9]-1)/ge[5],je=(ge[8]-1)/ge[0],Ve=(N[8]+1)/N[0],ze=ve*je,Ft=ve*Ve,Lt=H/(-je+Ve),Pt=Lt*-je;J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Pt),k.translateZ(Lt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Ht=ve+Lt,wt=Ce+Lt,pt=ze-Pt,fn=Ft+(H-Pt),Zt=ke*Ce/wt*Ht,L=X*Ce/wt*Ht;k.projectionMatrix.makePerspective(pt,fn,Zt,L,Ht,wt)}function te(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;v.near=S.near=_.near=k.near,v.far=S.far=_.far=k.far,(E!==v.near||w!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,w=v.far);const J=k.parent,le=v.cameras;te(v,J);for(let ge=0;ge<le.length;ge++)te(le[ge],J);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),k.matrix.copy(v.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const H=k.children;for(let ge=0,N=H.length;ge<N;ge++)H[ge].updateMatrixWorld(!0);le.length===2?re(v,_,S):v.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.getPlanes=function(){return x};let Y=null;function ae(k,J){if(c=J.getViewerPose(l||a),h=J,c!==null){const le=c.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let H=!1;le.length!==v.cameras.length&&(v.cameras.length=0,H=!0);for(let ge=0;ge<le.length;ge++){const N=le[ge];let ve=null;if(d!==null)ve=d.getViewport(N);else{const ke=u.getViewSubImage(f,N);ve=ke.viewport,ge===0&&(e.setRenderTargetTextures(g,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(g))}let Ce=A[ge];Ce===void 0&&(Ce=new ln,Ce.layers.enable(ge),Ce.viewport=new Ut,A[ge]=Ce),Ce.matrix.fromArray(N.transform.matrix),Ce.projectionMatrix.fromArray(N.projectionMatrix),Ce.viewport.set(ve.x,ve.y,ve.width,ve.height),ge===0&&v.matrix.copy(Ce.matrix),H===!0&&v.cameras.push(Ce)}}for(let le=0;le<b.length;le++){const H=M[le],ge=b[le];H!==null&&ge!==void 0&&ge.update(H,J,l||a)}if(Y&&Y(k,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let le=null;for(const H of x)J.detectedPlanes.has(H)||(le===null&&(le=[]),le.push(H));if(le!==null)for(const H of le)x.delete(H),y.delete(H),n.dispatchEvent({type:"planeremoved",data:H});for(const H of J.detectedPlanes)if(!x.has(H))x.add(H),y.set(H,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:H});else{const ge=y.get(H);H.lastChangedTime>ge&&(y.set(H,H.lastChangedTime),n.dispatchEvent({type:"planechanged",data:H}))}}h=null}const oe=new hu;oe.setAnimationLoop(ae),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}}function Ib(i,e){function t(m,g){g.color.getRGB(m.fogColor.value,uu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,b,M,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),c(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,x)):g.isMeshMatcapMaterial?(s(m,g),h(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),p(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?o(m,g,b,M):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===_n&&(m.bumpScale.value*=-1)),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===_n&&m.normalScale.value.negate()),g.specularMap&&(m.specularMap.value=g.specularMap),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const b=e.get(g).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const y=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*y}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let M;g.map?M=g.map:g.specularMap?M=g.specularMap:g.displacementMap?M=g.displacementMap:g.normalMap?M=g.normalMap:g.bumpMap?M=g.bumpMap:g.roughnessMap?M=g.roughnessMap:g.metalnessMap?M=g.metalnessMap:g.alphaMap?M=g.alphaMap:g.emissiveMap?M=g.emissiveMap:g.clearcoatMap?M=g.clearcoatMap:g.clearcoatNormalMap?M=g.clearcoatNormalMap:g.clearcoatRoughnessMap?M=g.clearcoatRoughnessMap:g.iridescenceMap?M=g.iridescenceMap:g.iridescenceThicknessMap?M=g.iridescenceThicknessMap:g.specularIntensityMap?M=g.specularIntensityMap:g.specularColorMap?M=g.specularColorMap:g.transmissionMap?M=g.transmissionMap:g.thicknessMap?M=g.thicknessMap:g.sheenColorMap?M=g.sheenColorMap:g.sheenRoughnessMap&&(M=g.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let x;g.aoMap?x=g.aoMap:g.lightMap&&(x=g.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function o(m,g,b,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=M*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x;g.map?x=g.map:g.alphaMap&&(x=g.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b;g.map?b=g.map:g.alphaMap&&(b=g.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function c(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===_n&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap)),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap)}function h(m,g){g.matcap&&(m.matcap.value=g.matcap)}function p(m,g){m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function kb(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=s[M.id];y===void 0&&(p(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",g));const _=x.program;n.updateUBOMapping(M,_);const S=e.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function u(M){const x=f();M.__bindingPointIndex=x;const y=i.createBuffer(),_=M.__size,S=M.usage;return i.bindBuffer(35345,y),i.bufferData(35345,_,S),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,y),y}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],y=M.uniforms,_=M.__cache;i.bindBuffer(35345,x);for(let S=0,A=y.length;S<A;S++){const v=y[S];if(h(v,S,_)===!0){const E=v.__offset,w=Array.isArray(v.value)?v.value:[v.value];let R=0;for(let j=0;j<w.length;j++){const F=w[j],D=m(F);typeof F=="number"?(v.__data[0]=F,i.bufferSubData(35345,E+R,v.__data)):F.isMatrix3?(v.__data[0]=F.elements[0],v.__data[1]=F.elements[1],v.__data[2]=F.elements[2],v.__data[3]=F.elements[0],v.__data[4]=F.elements[3],v.__data[5]=F.elements[4],v.__data[6]=F.elements[5],v.__data[7]=F.elements[0],v.__data[8]=F.elements[6],v.__data[9]=F.elements[7],v.__data[10]=F.elements[8],v.__data[11]=F.elements[0]):(F.toArray(v.__data,R),R+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,E,v.__data)}}i.bindBuffer(35345,null)}function h(M,x,y){const _=M.value;if(y[x]===void 0){if(typeof _=="number")y[x]=_;else{const S=Array.isArray(_)?_:[_],A=[];for(let v=0;v<S.length;v++)A.push(S[v].clone());y[x]=A}return!0}else if(typeof _=="number"){if(y[x]!==_)return y[x]=_,!0}else{const S=Array.isArray(y[x])?y[x]:[y[x]],A=Array.isArray(_)?_:[_];for(let v=0;v<S.length;v++){const E=S[v];if(E.equals(A[v])===!1)return E.copy(A[v]),!0}}return!1}function p(M){const x=M.uniforms;let y=0;const _=16;let S=0;for(let A=0,v=x.length;A<v;A++){const E=x[A],w={boundary:0,storage:0},R=Array.isArray(E.value)?E.value:[E.value];for(let j=0,F=R.length;j<F;j++){const D=R[j],q=m(D);w.boundary+=q.boundary,w.storage+=q.storage}if(E.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,A>0){S=y%_;const j=_-S;S!==0&&j-w.boundary<0&&(y+=_-S,E.__offset=y)}y+=w.storage}return S=y%_,S>0&&(y+=_-S),M.__size=y,M.__cache={},this}function m(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function b(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}function Fb(){const i=ms("canvas");return i.style.display="block",i}function bu(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Fb(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,d=null;const h=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=jn,this.physicallyCorrectLights=!1,this.toneMapping=En,this.toneMappingExposure=1;const m=this;let g=!1,b=0,M=0,x=null,y=-1,_=null;const S=new Ut,A=new Ut;let v=null,E=e.width,w=e.height,R=1,j=null,F=null;const D=new Ut(0,0,E,w),q=new Ut(0,0,E,w);let re=!1;const te=new ya;let Y=!1,ae=!1,oe=null;const k=new yt,J=new Ue,le=new U,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return x===null?R:1}let N=t;function ve(C,W){for(let ee=0;ee<C.length;ee++){const V=C[ee],se=e.getContext(V,W);if(se!==null)return se}return null}try{const C={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",Je,!1),N===null){const W=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&W.shift(),N=ve(W,C),N===null)throw ve(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ce,ke,X,je,Ve,ze,Ft,Lt,Pt,Ht,wt,pt,fn,Zt,L,T,Q,de,me,be,Oe,P,B,Me;function Ae(){Ce=new q_(N),ke=new B_(N,Ce,i),Ce.init(ke),P=new Cb(N,Ce,ke),X=new Eb(N,Ce,ke),je=new Z_,Ve=new db,ze=new Ab(N,Ce,X,Ve,ke,P,je),Ft=new V_(m),Lt=new j_(m),Pt=new sp(N,ke),B=new N_(N,Ce,Pt,ke),Ht=new X_(N,Pt,je,B),wt=new $_(N,Ht,Pt,je),me=new Q_(N,ke,ze),T=new G_(Ve),pt=new fb(m,Ft,Lt,Ce,ke,B,T),fn=new Ib(m,Ve),Zt=new mb,L=new xb(Ce,ke),de=new O_(m,Ft,Lt,X,wt,u,a),Q=new Tb(m,wt,ke),Me=new kb(N,je,ke,X),be=new U_(N,Ce,je,ke),Oe=new Y_(N,Ce,je,ke),je.programs=pt.programs,m.capabilities=ke,m.extensions=Ce,m.properties=Ve,m.renderLists=Zt,m.shadowMap=Q,m.state=X,m.info=je}Ae();const xe=new Rb(m,N);this.xr=xe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(C){C!==void 0&&(R=C,this.setSize(E,w,!1))},this.getSize=function(C){return C.set(E,w)},this.setSize=function(C,W,ee){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=C,w=W,e.width=Math.floor(C*R),e.height=Math.floor(W*R),ee!==!1&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(E*R,w*R).floor()},this.setDrawingBufferSize=function(C,W,ee){E=C,w=W,R=ee,e.width=Math.floor(C*ee),e.height=Math.floor(W*ee),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(D)},this.setViewport=function(C,W,ee,V){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,W,ee,V),X.viewport(S.copy(D).multiplyScalar(R).floor())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,W,ee,V){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,W,ee,V),X.scissor(A.copy(q).multiplyScalar(R).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(C){X.setScissorTest(re=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(C=!0,W=!0,ee=!0){let V=0;C&&(V|=16384),W&&(V|=256),ee&&(V|=1024),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),Zt.dispose(),L.dispose(),Ve.dispose(),Ft.dispose(),Lt.dispose(),wt.dispose(),B.dispose(),Me.dispose(),pt.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Te),xe.removeEventListener("sessionend",Re),oe&&(oe.dispose(),oe=null),mt.stop()};function De(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const C=je.autoReset,W=Q.enabled,ee=Q.autoUpdate,V=Q.needsUpdate,se=Q.type;Ae(),je.autoReset=C,Q.enabled=W,Q.autoUpdate=ee,Q.needsUpdate=V,Q.type=se}function Je(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Qe(C){const W=C.target;W.removeEventListener("dispose",Qe),gt(W)}function gt(C){O(C),Ve.remove(C)}function O(C){const W=Ve.get(C).programs;W!==void 0&&(W.forEach(function(ee){pt.releaseProgram(ee)}),C.isShaderMaterial&&pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ee,V,se,Ie){W===null&&(W=H);const Ne=se.isMesh&&se.matrixWorld.determinant()<0,Xe=Fu(C,W,ee,V,se);X.setMaterial(V,Ne);let Ze=ee.index,dt=1;V.wireframe===!0&&(Ze=Ht.getWireframeAttribute(ee),dt=2);const $e=ee.drawRange,et=ee.attributes.position;let Et=$e.start*dt,nn=($e.start+$e.count)*dt;Ie!==null&&(Et=Math.max(Et,Ie.start*dt),nn=Math.min(nn,(Ie.start+Ie.count)*dt)),Ze!==null?(Et=Math.max(Et,0),nn=Math.min(nn,Ze.count)):et!=null&&(Et=Math.max(Et,0),nn=Math.min(nn,et.count));const Pn=nn-Et;if(Pn<0||Pn===1/0)return;B.setup(se,V,Xe,ee,Ze);let Jn,At=be;if(Ze!==null&&(Jn=Pt.get(Ze),At=Oe,At.setIndex(Jn)),se.isMesh)V.wireframe===!0?(X.setLineWidth(V.wireframeLinewidth*ge()),At.setMode(1)):At.setMode(4);else if(se.isLine){let tt=V.linewidth;tt===void 0&&(tt=1),X.setLineWidth(tt*ge()),se.isLineSegments?At.setMode(1):se.isLineLoop?At.setMode(2):At.setMode(3)}else se.isPoints?At.setMode(0):se.isSprite&&At.setMode(4);if(se.isInstancedMesh)At.renderInstances(Et,Pn,se.count);else if(ee.isInstancedBufferGeometry){const tt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ar=Math.min(ee.instanceCount,tt);At.renderInstances(Et,Pn,ar)}else At.render(Et,Pn)},this.compile=function(C,W){function ee(V,se,Ie){V.transparent===!0&&V.side===Ms?(V.side=_n,V.needsUpdate=!0,dn(V,se,Ie),V.side=di,V.needsUpdate=!0,dn(V,se,Ie),V.side=Ms):dn(V,se,Ie)}d=L.get(C),d.init(),p.push(d),C.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights(m.physicallyCorrectLights),C.traverse(function(V){const se=V.material;if(se)if(Array.isArray(se))for(let Ie=0;Ie<se.length;Ie++){const Ne=se[Ie];ee(Ne,C,V)}else ee(se,C,V)}),p.pop(),d=null};let $=null;function ue(C){$&&$(C)}function Te(){mt.stop()}function Re(){mt.start()}const mt=new hu;mt.setAnimationLoop(ue),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(C){$=C,xe.setAnimationLoop(C),C===null?mt.stop():mt.start()},xe.addEventListener("sessionstart",Te),xe.addEventListener("sessionend",Re),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(W),W=xe.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,W,x),d=L.get(C,p.length),d.init(),p.push(d),k.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),te.setFromProjectionMatrix(k),ae=this.localClippingEnabled,Y=T.init(this.clippingPlanes,ae,W),f=Zt.get(C,h.length),f.init(),h.push(f),zt(C,W,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(j,F),Y===!0&&T.beginShadows();const ee=d.state.shadowsArray;if(Q.render(ee,C,W),Y===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(f,C),d.setupLights(m.physicallyCorrectLights),W.isArrayCamera){const V=W.cameras;for(let se=0,Ie=V.length;se<Ie;se++){const Ne=V[se];Gt(f,C,Ne,Ne.viewport)}}else Gt(f,C,W);x!==null&&(ze.updateMultisampleRenderTarget(x),ze.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(m,C,W),B.resetDefaultState(),y=-1,_=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,h.pop(),h.length>0?f=h[h.length-1]:f=null};function zt(C,W,ee,V){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){V&&le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(k);const Ne=wt.update(C),Xe=C.material;Xe.visible&&f.push(C,Ne,Xe,ee,le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==je.render.frame&&(C.skeleton.update(),C.skeleton.frame=je.render.frame),!C.frustumCulled||te.intersectsObject(C))){V&&le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(k);const Ne=wt.update(C),Xe=C.material;if(Array.isArray(Xe)){const Ze=Ne.groups;for(let dt=0,$e=Ze.length;dt<$e;dt++){const et=Ze[dt],Et=Xe[et.materialIndex];Et&&Et.visible&&f.push(C,Ne,Et,ee,le.z,et)}}else Xe.visible&&f.push(C,Ne,Xe,ee,le.z,null)}}const Ie=C.children;for(let Ne=0,Xe=Ie.length;Ne<Xe;Ne++)zt(Ie[Ne],W,ee,V)}function Gt(C,W,ee,V){const se=C.opaque,Ie=C.transmissive,Ne=C.transparent;d.setupLightsView(ee),Ie.length>0&&Kn(se,W,ee),V&&X.viewport(S.copy(V)),se.length>0&&xt(se,W,ee),Ie.length>0&&xt(Ie,W,ee),Ne.length>0&&xt(Ne,W,ee),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Kn(C,W,ee){const V=ke.isWebGL2;oe===null&&(oe=new qn(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?ds:hi,minFilter:fs,samples:V&&r===!0?4:0})),m.getDrawingBufferSize(J),V?oe.setSize(J.x,J.y):oe.setSize(sa(J.x),sa(J.y));const se=m.getRenderTarget();m.setRenderTarget(oe),m.clear();const Ie=m.toneMapping;m.toneMapping=En,xt(C,W,ee),m.toneMapping=Ie,ze.updateMultisampleRenderTarget(oe),ze.updateRenderTargetMipmap(oe),m.setRenderTarget(se)}function xt(C,W,ee){const V=W.isScene===!0?W.overrideMaterial:null;for(let se=0,Ie=C.length;se<Ie;se++){const Ne=C[se],Xe=Ne.object,Ze=Ne.geometry,dt=V===null?Ne.material:V,$e=Ne.group;Xe.layers.test(ee.layers)&&Ln(Xe,W,ee,Ze,dt,$e)}}function Ln(C,W,ee,V,se,Ie){C.onBeforeRender(m,W,ee,V,se,Ie),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(m,W,ee,V,C,Ie),se.transparent===!0&&se.side===Ms?(se.side=_n,se.needsUpdate=!0,m.renderBufferDirect(ee,W,V,se,C,Ie),se.side=di,se.needsUpdate=!0,m.renderBufferDirect(ee,W,V,se,C,Ie),se.side=Ms):m.renderBufferDirect(ee,W,V,se,C,Ie),C.onAfterRender(m,W,ee,V,se,Ie)}function dn(C,W,ee){W.isScene!==!0&&(W=H);const V=Ve.get(C),se=d.state.lights,Ie=d.state.shadowsArray,Ne=se.state.version,Xe=pt.getParameters(C,se.state,Ie,W,ee),Ze=pt.getProgramCacheKey(Xe);let dt=V.programs;V.environment=C.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(C.isMeshStandardMaterial?Lt:Ft).get(C.envMap||V.environment),dt===void 0&&(C.addEventListener("dispose",Qe),dt=new Map,V.programs=dt);let $e=dt.get(Ze);if($e!==void 0){if(V.currentProgram===$e&&V.lightsStateVersion===Ne)return Aa(C,Xe),$e}else Xe.uniforms=pt.getUniforms(C),C.onBuild(ee,Xe,m),C.onBeforeCompile(Xe,m),$e=pt.acquireProgram(Xe,Ze),dt.set(Ze,$e),V.uniforms=Xe.uniforms;const et=V.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=T.uniform),Aa(C,Xe),V.needsLights=Ou(C),V.lightsStateVersion=Ne,V.needsLights&&(et.ambientLightColor.value=se.state.ambient,et.lightProbe.value=se.state.probe,et.directionalLights.value=se.state.directional,et.directionalLightShadows.value=se.state.directionalShadow,et.spotLights.value=se.state.spot,et.spotLightShadows.value=se.state.spotShadow,et.rectAreaLights.value=se.state.rectArea,et.ltc_1.value=se.state.rectAreaLTC1,et.ltc_2.value=se.state.rectAreaLTC2,et.pointLights.value=se.state.point,et.pointLightShadows.value=se.state.pointShadow,et.hemisphereLights.value=se.state.hemi,et.directionalShadowMap.value=se.state.directionalShadowMap,et.directionalShadowMatrix.value=se.state.directionalShadowMatrix,et.spotShadowMap.value=se.state.spotShadowMap,et.spotLightMatrix.value=se.state.spotLightMatrix,et.spotLightMap.value=se.state.spotLightMap,et.pointShadowMap.value=se.state.pointShadowMap,et.pointShadowMatrix.value=se.state.pointShadowMatrix);const Et=$e.getUniforms(),nn=Zs.seqWithValue(Et.seq,et);return V.currentProgram=$e,V.uniformsList=nn,$e}function Aa(C,W){const ee=Ve.get(C);ee.outputEncoding=W.outputEncoding,ee.instancing=W.instancing,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Fu(C,W,ee,V,se){W.isScene!==!0&&(W=H),ze.resetTextureUnits();const Ie=W.fog,Ne=V.isMeshStandardMaterial?W.environment:null,Xe=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:jn,Ze=(V.isMeshStandardMaterial?Lt:Ft).get(V.envMap||Ne),dt=V.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,$e=!!V.normalMap&&!!ee.attributes.tangent,et=!!ee.morphAttributes.position,Et=!!ee.morphAttributes.normal,nn=!!ee.morphAttributes.color,Pn=V.toneMapped?m.toneMapping:En,Jn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,At=Jn!==void 0?Jn.length:0,tt=Ve.get(V),ar=d.state.lights;if(Y===!0&&(ae===!0||C!==_)){const sn=C===_&&V.id===y;T.setState(V,C,sn)}let Ot=!1;V.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==ar.state.version||tt.outputEncoding!==Xe||se.isInstancedMesh&&tt.instancing===!1||!se.isInstancedMesh&&tt.instancing===!0||se.isSkinnedMesh&&tt.skinning===!1||!se.isSkinnedMesh&&tt.skinning===!0||tt.envMap!==Ze||V.fog===!0&&tt.fog!==Ie||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==T.numPlanes||tt.numIntersection!==T.numIntersection)||tt.vertexAlphas!==dt||tt.vertexTangents!==$e||tt.morphTargets!==et||tt.morphNormals!==Et||tt.morphColors!==nn||tt.toneMapping!==Pn||ke.isWebGL2===!0&&tt.morphTargetsCount!==At)&&(Ot=!0):(Ot=!0,tt.__version=V.version);let Qn=tt.currentProgram;Ot===!0&&(Qn=dn(V,W,se));let Ca=!1,Ki=!1,or=!1;const Wt=Qn.getUniforms(),$n=tt.uniforms;if(X.useProgram(Qn.program)&&(Ca=!0,Ki=!0,or=!0),V.id!==y&&(y=V.id,Ki=!0),Ca||_!==C){if(Wt.setValue(N,"projectionMatrix",C.projectionMatrix),ke.logarithmicDepthBuffer&&Wt.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),_!==C&&(_=C,Ki=!0,or=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const sn=Wt.map.cameraPosition;sn!==void 0&&sn.setValue(N,le.setFromMatrixPosition(C.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Wt.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||se.isSkinnedMesh)&&Wt.setValue(N,"viewMatrix",C.matrixWorldInverse)}if(se.isSkinnedMesh){Wt.setOptional(N,se,"bindMatrix"),Wt.setOptional(N,se,"bindMatrixInverse");const sn=se.skeleton;sn&&(ke.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Wt.setValue(N,"boneTexture",sn.boneTexture,ze),Wt.setValue(N,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lr=ee.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&ke.isWebGL2===!0)&&me.update(se,ee,V,Qn),(Ki||tt.receiveShadow!==se.receiveShadow)&&(tt.receiveShadow=se.receiveShadow,Wt.setValue(N,"receiveShadow",se.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&($n.envMap.value=Ze,$n.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Ki&&(Wt.setValue(N,"toneMappingExposure",m.toneMappingExposure),tt.needsLights&&zu($n,or),Ie&&V.fog===!0&&fn.refreshFogUniforms($n,Ie),fn.refreshMaterialUniforms($n,V,R,w,oe),Zs.upload(N,tt.uniformsList,$n,ze)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zs.upload(N,tt.uniformsList,$n,ze),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Wt.setValue(N,"center",se.center),Wt.setValue(N,"modelViewMatrix",se.modelViewMatrix),Wt.setValue(N,"normalMatrix",se.normalMatrix),Wt.setValue(N,"modelMatrix",se.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const sn=V.uniformsGroups;for(let cr=0,Nu=sn.length;cr<Nu;cr++)if(ke.isWebGL2){const La=sn[cr];Me.update(La,Qn),Me.bind(La,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}function zu(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Ou(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,W,ee){Ve.get(C.texture).__webglTexture=W,Ve.get(C.depthTexture).__webglTexture=ee;const V=Ve.get(C);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=ee===void 0,V.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const ee=Ve.get(C);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ee=0){x=C,b=W,M=ee;let V=!0,se=null,Ie=!1,Ne=!1;if(C){const Ze=Ve.get(C);Ze.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(36160,null),V=!1):Ze.__webglFramebuffer===void 0?ze.setupRenderTarget(C):Ze.__hasExternalTextures&&ze.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);const dt=C.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Ne=!0);const $e=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(se=$e[W],Ie=!0):ke.isWebGL2&&C.samples>0&&ze.useMultisampledRTT(C)===!1?se=Ve.get(C).__webglMultisampledFramebuffer:se=$e,S.copy(C.viewport),A.copy(C.scissor),v=C.scissorTest}else S.copy(D).multiplyScalar(R).floor(),A.copy(q).multiplyScalar(R).floor(),v=re;if(X.bindFramebuffer(36160,se)&&ke.drawBuffers&&V&&X.drawBuffers(C,se),X.viewport(S),X.scissor(A),X.setScissorTest(v),Ie){const Ze=Ve.get(C.texture);N.framebufferTexture2D(36160,36064,34069+W,Ze.__webglTexture,ee)}else if(Ne){const Ze=Ve.get(C.texture),dt=W||0;N.framebufferTextureLayer(36160,36064,Ze.__webglTexture,ee||0,dt)}y=-1},this.readRenderTargetPixels=function(C,W,ee,V,se,Ie,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Xe=Xe[Ne]),Xe){X.bindFramebuffer(36160,Xe);try{const Ze=C.texture,dt=Ze.format,$e=Ze.type;if(dt!==yn&&P.convert(dt)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=$e===ds&&(Ce.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Ce.has("EXT_color_buffer_float"));if($e!==hi&&P.convert($e)!==N.getParameter(35738)&&!($e===li&&(ke.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-V&&ee>=0&&ee<=C.height-se&&N.readPixels(W,ee,V,se,P.convert(dt),P.convert($e),Ie)}finally{const Ze=x!==null?Ve.get(x).__webglFramebuffer:null;X.bindFramebuffer(36160,Ze)}}},this.copyFramebufferToTexture=function(C,W,ee=0){const V=Math.pow(2,-ee),se=Math.floor(W.image.width*V),Ie=Math.floor(W.image.height*V);ze.setTexture2D(W,0),N.copyTexSubImage2D(3553,ee,0,0,C.x,C.y,se,Ie),X.unbindTexture()},this.copyTextureToTexture=function(C,W,ee,V=0){const se=W.image.width,Ie=W.image.height,Ne=P.convert(ee.format),Xe=P.convert(ee.type);ze.setTexture2D(ee,0),N.pixelStorei(37440,ee.flipY),N.pixelStorei(37441,ee.premultiplyAlpha),N.pixelStorei(3317,ee.unpackAlignment),W.isDataTexture?N.texSubImage2D(3553,V,C.x,C.y,se,Ie,Ne,Xe,W.image.data):W.isCompressedTexture?N.compressedTexSubImage2D(3553,V,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Ne,W.mipmaps[0].data):N.texSubImage2D(3553,V,C.x,C.y,Ne,Xe,W.image),V===0&&ee.generateMipmaps&&N.generateMipmap(3553),X.unbindTexture()},this.copyTextureToTexture3D=function(C,W,ee,V,se=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=C.max.x-C.min.x+1,Ne=C.max.y-C.min.y+1,Xe=C.max.z-C.min.z+1,Ze=P.convert(V.format),dt=P.convert(V.type);let $e;if(V.isData3DTexture)ze.setTexture3D(V,0),$e=32879;else if(V.isDataArrayTexture)ze.setTexture2DArray(V,0),$e=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,V.flipY),N.pixelStorei(37441,V.premultiplyAlpha),N.pixelStorei(3317,V.unpackAlignment);const et=N.getParameter(3314),Et=N.getParameter(32878),nn=N.getParameter(3316),Pn=N.getParameter(3315),Jn=N.getParameter(32877),At=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;N.pixelStorei(3314,At.width),N.pixelStorei(32878,At.height),N.pixelStorei(3316,C.min.x),N.pixelStorei(3315,C.min.y),N.pixelStorei(32877,C.min.z),ee.isDataTexture||ee.isData3DTexture?N.texSubImage3D($e,se,W.x,W.y,W.z,Ie,Ne,Xe,Ze,dt,At.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D($e,se,W.x,W.y,W.z,Ie,Ne,Xe,Ze,At.data)):N.texSubImage3D($e,se,W.x,W.y,W.z,Ie,Ne,Xe,Ze,dt,At),N.pixelStorei(3314,et),N.pixelStorei(32878,Et),N.pixelStorei(3316,nn),N.pixelStorei(3315,Pn),N.pixelStorei(32877,Jn),se===0&&V.generateMipmaps&&N.generateMipmap($e),X.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ze.setTextureCube(C,0):C.isData3DTexture?ze.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ze.setTexture2DArray(C,0):ze.setTexture2D(C,0),X.unbindTexture()},this.resetState=function(){b=0,M=0,x=null,X.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class zb extends bu{}zb.prototype.isWebGL1Renderer=!0;class Ob extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ks extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xl=new U,Yl=new U,Zl=new yt,Hr=new nr,Gs=new _s;class Nb extends St{constructor(e=new tn,t=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xl.fromBufferAttribute(t,s-1),Yl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xl.distanceTo(Yl);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,e.ray.intersectsSphere(Gs)===!1)return;Zl.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(Zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,u=new U,f=new U,d=new U,h=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const b=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let x=b,y=M-1;x<y;x+=h){const _=p.getX(x),S=p.getX(x+1);if(c.fromBufferAttribute(g,_),u.fromBufferAttribute(g,S),Hr.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const b=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let x=b,y=M-1;x<y;x+=h){if(c.fromBufferAttribute(g,x),u.fromBufferAttribute(g,x+1),Hr.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Kl=new U,Jl=new U;class Ql extends Nb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kl.fromBufferAttribute(t,s),Jl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kl.distanceTo(Jl);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ls extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $l=new yt,aa=new nr,Vs=new _s,Hs=new U;class Wr extends St{constructor(e=new tn,t=new ls){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Vs.radius+=r,e.ray.intersectsSphere(Vs)===!1)return;$l.copy(s).invert(),aa.copy(e.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let p=d,m=h;p<m;p++){const g=c.getX(p);Hs.fromBufferAttribute(f,g),ec(Hs,g,l,s,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let p=d,m=h;p<m;p++)Hs.fromBufferAttribute(f,p),ec(Hs,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ec(i,e,t,n,s,r,a){const o=aa.distanceSqToPoint(i);if(o<t){const l=new U;aa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Ub extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bb extends An{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new nt(16777215),this.specular=new nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const $s={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Gb{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],p=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null}}}const vu=new Gb;class xs{constructor(e){this.manager=e!==void 0?e:vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const zn={};class Vb extends Error{constructor(e,t){super(e),this.response=t}}class xu extends xs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=$s.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:s});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),h=d?parseInt(d):0,p=h!==0;let m=0;const g=new ReadableStream({start(b){M();function M(){f.read().then(({done:x,value:y})=>{if(x)b.close();else{m+=y.byteLength;const _=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:h});for(let S=0,A=u.length;S<A;S++){const v=u[S];v.onProgress&&v.onProgress(_)}b.enqueue(y),M()}})}}});return new Response(g)}else throw new Vb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(p=>h.decode(p))}}}).then(c=>{$s.add(e,c);const u=zn[e];delete zn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hb extends xs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=$s.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ms("img");function l(){u(),$s.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class tc extends xs{constructor(e){super(e)}load(e,t,n,s){const r=new Qt,a=new Hb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Mu extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jr=new yt,nc=new U,ic=new U;class Wb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(nc),ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ic),t.updateMatrixWorld(),jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jb extends Wb{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sc extends Mu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DefaultUp),this.updateMatrix(),this.target=new St,this.shadow=new jb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qb extends Mu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xb{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rc(){return(typeof performance>"u"?Date:performance).now()}class Yb{constructor(e,t,n=0,s=1/0){this.ray=new nr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return oa(e,this,n,t),n.sort(ac),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)oa(e[s],this,n,t);return n.sort(ac),n}}function ac(i,e){return i.distance-e.distance}function oa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)oa(s[r],e,t,!0)}}class oc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);const Zb={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class sr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kb=new wa(-1,1,1,-1,0,1),Ea=new tn;Ea.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3));Ea.setAttribute("uv",new Rt([0,2,0,0,2,0],2));class Jb{constructor(e){this._mesh=new gn(Ea,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Qb extends sr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fu.clone(e.uniforms),this.material=new Nn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Jb(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class lc extends sr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class $b extends sr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ev{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ue);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qb(Zb),this.clock=new yu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lc!==void 0&&(a instanceof lc?n=!0:a instanceof $b&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Su extends sr{constructor(e,t,n,s,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new nt}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=s}}const tv=(i,e,t)=>{i.renderer=new bu({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),i.composer=new ev(i.renderer),i.composer.addPass(new Su(i.scene,Hn(i.camera)))},cc=(i,e,t)=>{i.renderer&&(e?i.renderer.outputEncoding=jn:i.renderer.outputEncoding=_t,t?i.renderer.toneMapping=En:i.renderer.toneMapping=$c)},uc=(i,e,t)=>{var n,s,r,a,o,l,c,u;!i.renderer||!i.composer||((s=(n=i.renderer).setSize)==null||s.call(n,e.width,e.height),(a=(r=i.renderer).setPixelRatio)==null||a.call(r,t),(l=(o=i.composer).setSize)==null||l.call(o,e.width,e.height),(u=(c=i.composer).setPixelRatio)==null||u.call(c,t))},fc=(i,e,t)=>{i.renderer&&(i.renderer.shadowMap.enabled=e,i.renderer.shadowMap.type=t)},Tn=i=>i.userData,nv=(i,e)=>{i.pointer.update(t=>i.renderer?t.set(e.offsetX/i.renderer.domElement.clientWidth*2-1,-(e.offsetY/i.renderer.domElement.clientHeight)*2+1):t)},wu=(i,e,t,n)=>(i.raycaster.setFromCamera(e,t),i.raycaster.intersectObjects(n,!1)),iv=(i,e)=>i.object.uuid!==e.object.uuid||i.instanceId!==e.instanceId,sv=(i,e,t)=>{let n=Hn(i.camera);const s=i.camera.subscribe(c=>n=c);Mt(s);let r=Hn(i.pointer);const a=i.pointer.subscribe(c=>r=c);Mt(a);let o;const l=c=>{var d,h;c.preventDefault();const u=c.type;i.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,nv(i,c);const f=rv(e,r,n);if(u==="pointerdown"&&(o=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!av(f,o)){o=null;return}o=null}f&&((h=(d=Tn(f.object)).eventDispatcher)==null||h.call(d,u,{...f,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function rv(i,e,t){if(i.interactiveObjects.size===0||i.raycastableObjects.size===0)return null;const n=wu(i,e,t,Array.from(i.raycastableObjects));return n.length===0||!i.interactiveObjects.has(n[0].object)?null:n[0]}function av(i,e){return!i||!e?!1:i.object.uuid===e.object.uuid&&i.instanceId===e.instanceId}const ov=(i,e)=>{let t=Hn(i.pointerOverCanvas);const n=i.pointerOverCanvas.subscribe(c=>t=c);Mt(n);let s=Hn(i.camera);const r=i.camera.subscribe(c=>s=c);Mt(r);let a=Hn(i.pointer);const o=i.pointer.subscribe(c=>a=c);return Mt(o),{raycast:()=>{var f,d,h,p,m,g,b,M;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?wu(e,a,s,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&iv(e.lastIntersection,u)&&((g=(m=Tn(e.lastIntersection.object)).eventDispatcher)==null||g.call(m,"pointerleave",e.lastIntersection),(M=(b=Tn(u.object)).eventDispatcher)==null||M.call(b,"pointerenter",u)):(p=(h=Tn(u.object)).eventDispatcher)==null||p.call(h,"pointerenter",u):e.lastIntersection&&((d=(f=Tn(e.lastIntersection.object)).eventDispatcher)==null||d.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},rr=typeof window<"u",lv=i=>{if(!rr)return;let e;const t=()=>{i(),e=requestAnimationFrame(t)};t(),Mt(()=>{e&&cancelAnimationFrame(e)})},cv=(i,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let s=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++s}),s>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((s,r)=>r.order?!0:s,!1),n=i.clock.getDelta();t?Array.from(e.frameHandlers).sort((s,r)=>(s.order??0)>(r.order??0)?1:-1).forEach(s=>s.fn(i,n)):e.frameHandlers.forEach(s=>s.fn(i,n))},uv=i=>{i.debugFrameloop&&(i.frame+=1,console.log(`frame: ${i.frame}${Object.keys(i.invalidations).length>0?", requested by ↴":""}`),Object.keys(i.invalidations).length>0&&console.table(i.invalidations),i.invalidations={})},fv=(i,e,t,n)=>{let s=Hn(i.camera);const r=i.camera.subscribe(o=>s=o);Mt(r);const{raycast:a}=ov(i,e);lv(()=>{n.dispose();const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),o&&(!s||!i.composer||!i.renderer||(cv(i,t),i.composer.passes.length>1?i.composer.render():i.renderer.render(i.scene,s),uv(t),t.frameInvalidated=!1,t.advance=!1))})},dv=()=>{const i=new ln(75,0,.1,1e3);return Tn(i).threlteDefaultCamera=!0,i.position.z=5,i.lookAt(0,0,0),i},hv=i=>{const e=i.size.subscribe(t=>{Tn(Hn(i.camera)).threlteDefaultCamera&&i.camera.update(n=>{const s=n;return s.aspect=t.width/t.height,s.updateProjectionMatrix(),i.invalidate("Default camera: aspect ratio changed"),s})});Mt(e)},mv=(i,e,t,n,s,r,a)=>{const o={audioListeners:new Map,addAudioListener:(b,M)=>{if(M=M??"default",o.audioListeners.has(M)){console.warn(`An AudioListener with the id "${M}" has already been added, aborting.`);return}o.audioListeners.set(M,b)},removeAudioListener:b=>{if(b=b??"default",!o.audioListeners.has(b)){console.warn(`No AudioListener with the id "${b}" found, aborting.`);return}o.audioListeners.delete(b)},getAudioListener:b=>{if(b=b??"default",!o.audioListeners.has(b)){console.warn(`No AudioListener with the id "${b}" found, aborting.`);return}return o.audioListeners.get(b)}},l={debugFrameloop:r,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Xu([n,s],([b,M])=>b||M),pointer:ht(new Ue),pointerOverCanvas:ht(!1),clock:new yu,camera:ht(dv()),scene:new Ob,renderer:void 0,composer:void 0,invalidate:b=>{l.frameInvalidated=!0,l.debugFrameloop&&b&&(l.invalidations[b]=l.invalidations[b]?l.invalidations[b]+1:1)},advance:()=>{l.advance=!0}},u={flat:ht(e),linear:ht(i),dpr:ht(t),setCamera:b=>{c.camera.set(b),c.composer&&(c.composer.passes.forEach(M=>{M instanceof Su&&(M.camera=b)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Yb,lastIntersection:null,addRaycastableObject:b=>{u.raycastableObjects.add(b)},removeRaycastableObject:b=>{u.raycastableObjects.delete(b)},addInteractiveObject:b=>{u.interactiveObjects.add(b)},removeInteractiveObject:b=>{u.interactiveObjects.delete(b)},addPass:b=>{c.composer&&(c.composer.addPass(b),c.invalidate("Canvas: adding pass"))},removePass:b=>{c.composer&&(c.composer.removePass(b),c.invalidate("Canvas: removing pass"))}},f={dispose:async(b=!1)=>{await da(),!(!f.shouldDispose&&!b)&&(f.disposableObjects.forEach((M,x)=>{var y;(M===0||b)&&((y=x==null?void 0:x.dispose)==null||y.call(x),f.disposableObjects.delete(x))}),f.shouldDispose=!1)},collectDisposableObjects:(b,M)=>{const x=M??[];return b&&(b!=null&&b.dispose&&typeof b.dispose=="function"&&b.type!=="Scene"&&x.push(b),Object.entries(b).forEach(([y,_])=>{if(y==="parent"||y==="children"||typeof _!="object")return;const S=_;S!=null&&S.dispose&&f.collectDisposableObjects(S,x)})),x},addDisposableObjects:b=>{b.forEach(M=>{const x=f.disposableObjects.get(M);x?f.disposableObjects.set(M,x+1):f.disposableObjects.set(M,1)})},removeDisposableObjects:b=>{b.length!==0&&(b.forEach(M=>{const x=f.disposableObjects.get(M);x&&x>0&&f.disposableObjects.set(M,x-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Jt("threlte",c),Jt("threlte-root",u),Jt("threlte-render-context",l),Jt("threlte-audio-context",o),Jt("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:o,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>o,getDisposalCtx:()=>f}};function Tu(i,e){const t=ht(i);let n=i;const s=t.subscribe(o=>n=o);return Mt(s),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Zi=()=>en("threlte");function pv(i){let e;const t=i[8].default,n=at(t,i,i[7],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,[r]){n&&n.p&&(!e||r&128)&&lt(n,t,s,s[7],e?ot(t,s[7],r,null):ct(s[7]),null)},i(s){e||(z(n,s),e=!0)},o(s){G(n,s),e=!1},d(s){n&&n.d(s)}}}const gv=()=>({onChildMount:en("threlte-hierarchical-object-on-mount"),onChildDestroy:en("threlte-hierarchical-object-on-destroy")}),Eu=()=>en("threlte-hierarchical-parent-context");function _v(i,e,t){var b;let n,{$$slots:s={},$$scope:r}=e,{object:a=void 0}=e,{children:o=[]}=e,{onChildMount:l=void 0}=e;const c=M=>{o.push(M),t(1,o),l==null||l(M)};let{onChildDestroy:u=void 0}=e;const f=M=>{const x=o.findIndex(y=>y.uuid===M.uuid);x!==-1&&o.splice(x,1),t(1,o),u==null||u(M)},{invalidate:d}=Zi(),h=Eu();bt(i,h,M=>t(6,n=M));let{parent:p=n}=e;const m=gv();a&&((b=m.onChildMount)==null||b.call(m,a),d("HierarchicalObject: object added"));const g=Tu(a,(M,x)=>{var y,_;x&&((y=m.onChildDestroy)==null||y.call(m,x),d("HierarchicalObject: object added")),M&&((_=m.onChildMount)==null||_.call(m,M),d("HierarchicalObject: object removed"))});return Mt(()=>{var M;a&&((M=m.onChildDestroy)==null||M.call(m,a),d("HierarchicalObject: object removed"))}),Jt("threlte-hierarchical-object-on-mount",c),Jt("threlte-hierarchical-object-on-destroy",f),Jt("threlte-hierarchical-parent-context",g),i.$$set=M=>{"object"in M&&t(3,a=M.object),"children"in M&&t(1,o=M.children),"onChildMount"in M&&t(4,l=M.onChildMount),"onChildDestroy"in M&&t(5,u=M.onChildDestroy),"parent"in M&&t(2,p=M.parent),"$$scope"in M&&t(7,r=M.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&t(2,p=n),i.$$.dirty&8&&g.set(a)},[h,o,p,a,l,u,n,r,s]}class bv extends We{constructor(e){super(),He(this,e,_v,pv,Ge,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function vv(i){let e;const t=i[1].default,n=at(t,i,i[4],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&16)&&lt(n,t,s,s[4],e?ot(t,s[4],r,null):ct(s[4]),null)},i(s){e||(z(n,s),e=!0)},o(s){G(n,s),e=!1},d(s){n&&n.d(s)}}}function xv(i){let e,t;return e=new bv({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[vv]},$$scope:{ctx:i}}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},p(n,[s]){const r={};s&1&&(r.object=n[0]),s&1&&(r.onChildMount=n[2]),s&1&&(r.onChildDestroy=n[3]),s&16&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function Mv(i,e,t){let{$$slots:n={},$$scope:s}=e,{object:r}=e;const a=l=>r.add(l),o=l=>r.remove(l);return i.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,s=l.$$scope)},[r,n,a,o,s]}class Au extends We{constructor(e){super(),He(this,e,Mv,xv,Ge,{object:0})}}const yv=()=>{const i=ht({width:0,height:0});let e={width:0,height:0};const t=i.subscribe(a=>e=a);Mt(t);let n;const s=()=>{const a=e;if(!n||!n.parentElement)return;const{clientWidth:o,clientHeight:l}=n.parentElement;(o!==a.width||l!==a.height)&&i.set({width:o,height:l})},r=a=>{n=a,s(),window.addEventListener("resize",s)};return rr?(Mt(()=>{window.removeEventListener("resize",s)}),{parentSizeAction:r,parentSize:i}):{parentSize:i,parentSizeAction:r}};function dc(i){let e,t;return e=new Au({props:{object:i[0].scene,$$slots:{default:[Sv]},$$scope:{ctx:i}}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},p(n,s){const r={};s[1]&4&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function Sv(i){let e;const t=i[29].default,n=at(t,i,i[33],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r[1]&4)&&lt(n,t,s,s[33],e?ot(t,s[33],r,null):ct(s[33]),null)},i(s){e||(z(n,s),e=!0)},o(s){G(n,s),e=!1},d(s){n&&n.d(s)}}}function wv(i){let e,t,n,s,r=i[2]&&dc(i);return{c(){e=he("canvas"),r&&r.c(),ne(e,"class","svelte-o3oskp")},m(a,o){K(a,e,o),r&&r.m(e,null),i[30](e),t=!0,n||(s=[Bu(i[3].call(null,e)),fe(e,"click",i[9]),fe(e,"contextmenu",i[10]),fe(e,"pointerup",i[13]),fe(e,"pointerdown",i[11]),fe(e,"pointermove",i[12]),fe(e,"pointerenter",i[31]),fe(e,"pointerleave",i[32])],n=!0)},p(a,o){a[2]?r?(r.p(a,o),o[0]&4&&z(r,1)):(r=dc(a),r.c(),z(r,1),r.m(e,null)):r&&(ut(),G(r,1,1,()=>{r=null}),ft())},i(a){t||(z(r),t=!0)},o(a){G(r),t=!1},d(a){a&&Z(e),r&&r.d(),i[30](null),n=!1,vt(s)}}}const hc=new Set;function Tv(i,e,t){let n,s,r,a,{$$slots:o={},$$scope:l}=e,{dpr:c=rr?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:d="demand"}=e,{debugFrameloop:h=!1}=e,{shadows:p=!0}=e,{shadowMapType:m=Kc}=e,{size:g=void 0}=e,{rendererParameters:b=void 0}=e,M,x=!1;const y=ht(g),{parentSize:_,parentSizeAction:S}=yv(),A=mv(f,u,c,y,_,h,d),{getCtx:v,renderCtx:E,disposalCtx:w}=A,{ctx:R,rootCtx:j,audioCtx:F}=A;hv(R),hc.add(R.invalidate),Mt(()=>{hc.delete(R.invalidate)});const{size:D,scene:q}=R;bt(i,D,ve=>t(26,s=ve));const{flat:re,linear:te,dpr:Y}=j;bt(i,re,ve=>t(27,r=ve)),bt(i,te,ve=>t(28,a=ve)),bt(i,Y,ve=>t(25,n=ve)),Jt("threlte-parent",ht(q)),qi(()=>{M&&(tv(R,M,b),cc(R,a,r),uc(R,s,n),fc(R,p,m),t(2,x=!0))}),fv(R,j,E,w);const{onClick:ae,onContextMenu:oe,onPointerDown:k,onPointerMove:J,onPointerUp:le}=sv(R,j,E);Mt(()=>{w.dispose(!0)});function H(ve){Tt[ve?"unshift":"push"](()=>{M=ve,t(1,M)})}const ge=()=>v().pointerOverCanvas.set(!0),N=()=>v().pointerOverCanvas.set(!1);return i.$$set=ve=>{"dpr"in ve&&t(14,c=ve.dpr),"flat"in ve&&t(15,u=ve.flat),"linear"in ve&&t(16,f=ve.linear),"frameloop"in ve&&t(17,d=ve.frameloop),"debugFrameloop"in ve&&t(18,h=ve.debugFrameloop),"shadows"in ve&&t(19,p=ve.shadows),"shadowMapType"in ve&&t(20,m=ve.shadowMapType),"size"in ve&&t(21,g=ve.size),"rendererParameters"in ve&&t(22,b=ve.rendererParameters),"$$scope"in ve&&t(33,l=ve.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&2097152&&y.set(g),i.$$.dirty[0]&65536&&Xt(te,a=f,a),i.$$.dirty[0]&32768&&Xt(re,r=u,r),i.$$.dirty[0]&16384&&Xt(Y,n=c,n),i.$$.dirty[0]&402653184&&cc(v(),a,r),i.$$.dirty[0]&100663296&&uc(v(),s,n),i.$$.dirty[0]&1572864&&fc(v(),p,m)},[R,M,x,S,v,D,re,te,Y,ae,oe,k,J,le,c,u,f,d,h,p,m,g,b,j,F,n,s,r,a,o,H,ge,N,l]}class Ev extends We{constructor(e){super(),He(this,e,Tv,wv,Ge,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Av=()=>en("threlte-root"),Cv=()=>en("threlte-disposal-context");function Lv(i){let e;const t=i[9].default,n=at(t,i,i[8],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,[r]){n&&n.p&&(!e||r&256)&&lt(n,t,s,s[8],e?ot(t,s[8],r,null):ct(s[8]),null)},i(s){e||(z(n,s),e=!0)},o(s){G(n,s),e=!1},d(s){n&&n.d(s)}}}const mc="threlte-disposable-object-context";function Pv(i,e,t){let n,s,{$$slots:r={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=Cv();let{object:u=void 0}=e,f=u,{dispose:d=void 0}=e;const h=en(mc);bt(i,h,g=>t(7,s=g));const p=ht(d??s??!0);bt(i,p,g=>t(6,n=g)),Jt(mc,p);let m=n?o(u):[];return l(m),Mt(()=>{c(m)}),i.$$set=g=>{"object"in g&&t(2,u=g.object),"dispose"in g&&t(3,d=g.dispose),"$$scope"in g&&t(8,a=g.$$scope)},i.$$.update=()=>{i.$$.dirty&136&&p.set(d??s??!0),i.$$.dirty&116&&u!==f&&(c(m),t(5,m=n?o(u):[]),l(m),t(4,f=u))},[h,p,u,d,f,m,n,s,a,r]}class Cu extends We{constructor(e){super(),He(this,e,Pv,Lv,Ge,{object:2,dispose:3})}}const Lu=(i,e)=>{if(!rr)return{start:()=>{},stop:()=>{},started:Hc(!1)};const t=en("threlte-render-context"),n={fn:i,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},s=ht(!1),r=()=>{t.frameHandlers.delete(n),s.set(!1)},a=()=>{t.frameHandlers.add(n),s.set(!0)};return((e==null?void 0:e.autostart)??!0)&&a(),Mt(()=>{r()}),{start:a,stop:r,started:{subscribe:s.subscribe}}},Dv=()=>{const i=ht(!1);return(async()=>{await da(),i.set(!0)})(),i};function Rv(i,e,t){let n,s,{object:r}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new U,f=Cn(),{invalidate:d}=Zi(),h=Dv();bt(i,h,x=>t(8,s=x));const p=async()=>{s||await da(),f("transform")},m=async()=>{d("TransformableObject: transformed"),await p()};Tn(r).onTransform=m;const{start:g,stop:b}=Lu(async()=>{c&&!l&&c instanceof St&&(c.getWorldPosition(u),r.lookAt(u),await p())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),M=Tu(r);return bt(i,M,x=>t(7,n=x)),i.$$set=x=>{"object"in x&&t(2,r=x.object),"position"in x&&t(3,a=x.position),"scale"in x&&t(4,o=x.scale),"rotation"in x&&t(5,l=x.rotation),"lookAt"in x&&t(6,c=x.lookAt)},i.$$.update=()=>{i.$$.dirty&4&&M.set(r),i.$$.dirty&232&&(a&&(n.position.set(a.x??0,a.y??0,a.z??0),m()),c&&!l&&(c instanceof St?g():(b(),n.lookAt(c.x??0,c.y??0,c.z??0),m())),c||b()),i.$$.dirty&144&&o&&(typeof o=="number"?n.scale.set(o,o,o):n.scale.set(o.x??1,o.y??1,o.z??1),m()),i.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),m())},[h,M,r,a,o,l,c,n]}class Iv extends We{constructor(e){super(),He(this,e,Rv,null,Ge,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const pc=[],la=(i,e)=>{const t=pc.find(s=>s instanceof i);if(t)return t;const n=e();return pc.push(n),n},gc={type:"change"},qr={type:"start"},_c={type:"end"};let kv=class extends pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Zt),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(gc),n.update(),r=s.NONE},this.update=function(){const P=new U,B=new mi().setFromUnitVectors(e.up,new U(0,1,0)),Me=B.clone().invert(),Ae=new U,xe=new mi,De=2*Math.PI;return function(){const Je=n.object.position;P.copy(Je).sub(n.target),P.applyQuaternion(B),o.setFromVector3(P),n.autoRotate&&r===s.NONE&&E(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Qe=n.minAzimuthAngle,gt=n.maxAzimuthAngle;return isFinite(Qe)&&isFinite(gt)&&(Qe<-Math.PI?Qe+=De:Qe>Math.PI&&(Qe-=De),gt<-Math.PI?gt+=De:gt>Math.PI&&(gt-=De),Qe<=gt?o.theta=Math.max(Qe,Math.min(gt,o.theta)):o.theta=o.theta>(Qe+gt)/2?Math.max(Qe,o.theta):Math.min(gt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(o),P.applyQuaternion(Me),Je.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Ae.distanceToSquared(n.object.position)>a||8*(1-xe.dot(n.object.quaternion))>a?(n.dispatchEvent(gc),Ae.copy(n.object.position),xe.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Q),n.domElement.removeEventListener("pointerdown",Ft),n.domElement.removeEventListener("pointercancel",Ht),n.domElement.removeEventListener("wheel",fn),n.domElement.removeEventListener("pointermove",Lt),n.domElement.removeEventListener("pointerup",Pt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Zt)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new oc,l=new oc;let c=1;const u=new U;let f=!1;const d=new Ue,h=new Ue,p=new Ue,m=new Ue,g=new Ue,b=new Ue,M=new Ue,x=new Ue,y=new Ue,_=[],S={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function E(P){l.theta-=P}function w(P){l.phi-=P}const R=function(){const P=new U;return function(Me,Ae){P.setFromMatrixColumn(Ae,0),P.multiplyScalar(-Me),u.add(P)}}(),j=function(){const P=new U;return function(Me,Ae){n.screenSpacePanning===!0?P.setFromMatrixColumn(Ae,1):(P.setFromMatrixColumn(Ae,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Me),u.add(P)}}(),F=function(){const P=new U;return function(Me,Ae){const xe=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;P.copy(De).sub(n.target);let Pe=P.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),R(2*Me*Pe/xe.clientHeight,n.object.matrix),j(2*Ae*Pe/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(Me*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),j(Ae*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(P){d.set(P.clientX,P.clientY)}function te(P){M.set(P.clientX,P.clientY)}function Y(P){m.set(P.clientX,P.clientY)}function ae(P){h.set(P.clientX,P.clientY),p.subVectors(h,d).multiplyScalar(n.rotateSpeed);const B=n.domElement;E(2*Math.PI*p.x/B.clientHeight),w(2*Math.PI*p.y/B.clientHeight),d.copy(h),n.update()}function oe(P){x.set(P.clientX,P.clientY),y.subVectors(x,M),y.y>0?D(v()):y.y<0&&q(v()),M.copy(x),n.update()}function k(P){g.set(P.clientX,P.clientY),b.subVectors(g,m).multiplyScalar(n.panSpeed),F(b.x,b.y),m.copy(g),n.update()}function J(P){P.deltaY<0?q(v()):P.deltaY>0&&D(v()),n.update()}function le(P){let B=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),B=!0;break}B&&(P.preventDefault(),n.update())}function H(){if(_.length===1)d.set(_[0].pageX,_[0].pageY);else{const P=.5*(_[0].pageX+_[1].pageX),B=.5*(_[0].pageY+_[1].pageY);d.set(P,B)}}function ge(){if(_.length===1)m.set(_[0].pageX,_[0].pageY);else{const P=.5*(_[0].pageX+_[1].pageX),B=.5*(_[0].pageY+_[1].pageY);m.set(P,B)}}function N(){const P=_[0].pageX-_[1].pageX,B=_[0].pageY-_[1].pageY,Me=Math.sqrt(P*P+B*B);M.set(0,Me)}function ve(){n.enableZoom&&N(),n.enablePan&&ge()}function Ce(){n.enableZoom&&N(),n.enableRotate&&H()}function ke(P){if(_.length==1)h.set(P.pageX,P.pageY);else{const Me=Oe(P),Ae=.5*(P.pageX+Me.x),xe=.5*(P.pageY+Me.y);h.set(Ae,xe)}p.subVectors(h,d).multiplyScalar(n.rotateSpeed);const B=n.domElement;E(2*Math.PI*p.x/B.clientHeight),w(2*Math.PI*p.y/B.clientHeight),d.copy(h)}function X(P){if(_.length===1)g.set(P.pageX,P.pageY);else{const B=Oe(P),Me=.5*(P.pageX+B.x),Ae=.5*(P.pageY+B.y);g.set(Me,Ae)}b.subVectors(g,m).multiplyScalar(n.panSpeed),F(b.x,b.y),m.copy(g)}function je(P){const B=Oe(P),Me=P.pageX-B.x,Ae=P.pageY-B.y,xe=Math.sqrt(Me*Me+Ae*Ae);x.set(0,xe),y.set(0,Math.pow(x.y/M.y,n.zoomSpeed)),D(y.y),M.copy(x)}function Ve(P){n.enableZoom&&je(P),n.enablePan&&X(P)}function ze(P){n.enableZoom&&je(P),n.enableRotate&&ke(P)}function Ft(P){n.enabled!==!1&&(_.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Lt),n.domElement.addEventListener("pointerup",Pt)),de(P),P.pointerType==="touch"?L(P):wt(P))}function Lt(P){n.enabled!==!1&&(P.pointerType==="touch"?T(P):pt(P))}function Pt(P){me(P),_.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Lt),n.domElement.removeEventListener("pointerup",Pt)),n.dispatchEvent(_c),r=s.NONE}function Ht(P){me(P)}function wt(P){let B;switch(P.button){case 0:B=n.mouseButtons.LEFT;break;case 1:B=n.mouseButtons.MIDDLE;break;case 2:B=n.mouseButtons.RIGHT;break;default:B=-1}switch(B){case bi.DOLLY:if(n.enableZoom===!1)return;te(P),r=s.DOLLY;break;case bi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Y(P),r=s.PAN}else{if(n.enableRotate===!1)return;re(P),r=s.ROTATE}break;case bi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;re(P),r=s.ROTATE}else{if(n.enablePan===!1)return;Y(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(qr)}function pt(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;ae(P);break;case s.DOLLY:if(n.enableZoom===!1)return;oe(P);break;case s.PAN:if(n.enablePan===!1)return;k(P);break}}function fn(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(qr),J(P),n.dispatchEvent(_c))}function Zt(P){n.enabled===!1||n.enablePan===!1||le(P)}function L(P){switch(be(P),_.length){case 1:switch(n.touches.ONE){case vi.ROTATE:if(n.enableRotate===!1)return;H(),r=s.TOUCH_ROTATE;break;case vi.PAN:if(n.enablePan===!1)return;ge(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ve(),r=s.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(qr)}function T(P){switch(be(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ke(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;X(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ve(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ze(P),n.update();break;default:r=s.NONE}}function Q(P){n.enabled!==!1&&P.preventDefault()}function de(P){_.push(P)}function me(P){delete S[P.pointerId];for(let B=0;B<_.length;B++)if(_[B].pointerId==P.pointerId){_.splice(B,1);return}}function be(P){let B=S[P.pointerId];B===void 0&&(B=new Ue,S[P.pointerId]=B),B.set(P.pageX,P.pageY)}function Oe(P){const B=P.pointerId===_[0].pointerId?_[1]:_[0];return S[B.pointerId]}n.domElement.addEventListener("contextmenu",Q),n.domElement.addEventListener("pointerdown",Ft),n.domElement.addEventListener("pointercancel",Ht),n.domElement.addEventListener("wheel",fn,{passive:!1}),this.update()}};function Fv(i){let e,t,n,s;return e=new Cu({props:{dispose:i[2],object:i[0]}}),n=new Iv({props:{object:i[4],position:i[1]}}),n.$on("transform",i[5]),{c(){Ee(e.$$.fragment),t=ye(),Ee(n.$$.fragment)},m(r,a){Se(e,r,a),K(r,t,a),Se(n,r,a),s=!0},p(r,a){const o={};a[0]&4&&(o.dispose=r[2]),a[0]&1&&(o.object=r[0]),e.$set(o);const l={};a[0]&2&&(l.position=r[1]),n.$set(l)},i(r){s||(z(e.$$.fragment,r),z(n.$$.fragment,r),s=!0)},o(r){G(e.$$.fragment,r),G(n.$$.fragment,r),s=!1},d(r){we(e,r),r&&Z(t),we(n,r)}}}function zv(i,e,t){let n,{autoRotate:s=void 0}=e,{autoRotateSpeed:r=void 0}=e,{dampingFactor:a=void 0}=e,{enableDamping:o=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:d=void 0}=e,{keys:h=void 0}=e,{maxAzimuthAngle:p=void 0}=e,{maxDistance:m=void 0}=e,{maxPolarAngle:g=void 0}=e,{maxZoom:b=void 0}=e,{minAzimuthAngle:M=void 0}=e,{minDistance:x=void 0}=e,{minPolarAngle:y=void 0}=e,{minZoom:_=void 0}=e,{mouseButtons:S=void 0}=e,{panSpeed:A=void 0}=e,{rotateSpeed:v=void 0}=e,{screenSpacePanning:E=void 0}=e,{touches:w=void 0}=e,{zoomSpeed:R=void 0}=e,{target:j=void 0}=e,{dispose:F=void 0}=e;const D=Eu();bt(i,D,N=>t(30,n=N));const{renderer:q,invalidate:re}=Zi();if(!q)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Ma))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const te=Cn(),Y=()=>{re("Orbitcontrols: change event"),te("change")},ae=()=>te("start"),oe=()=>te("end"),k=new kv(n,q.domElement);Tn(n).orbitControls=k,k.addEventListener("change",Y),k.addEventListener("start",ae),k.addEventListener("end",oe),Mt(()=>{n&&delete Tn(n).orbitControls,k.removeEventListener("change",Y),k.removeEventListener("start",ae),k.removeEventListener("end",oe)});const{start:J,stop:le}=Lu(()=>k.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),H=new St,ge=()=>{t(0,k.target=H.position,k),k.update(),re("OrbitControls: target changed")};return i.$$set=N=>{"autoRotate"in N&&t(6,s=N.autoRotate),"autoRotateSpeed"in N&&t(7,r=N.autoRotateSpeed),"dampingFactor"in N&&t(8,a=N.dampingFactor),"enableDamping"in N&&t(9,o=N.enableDamping),"enabled"in N&&t(10,l=N.enabled),"enablePan"in N&&t(11,c=N.enablePan),"enableRotate"in N&&t(12,u=N.enableRotate),"enableZoom"in N&&t(13,f=N.enableZoom),"keyPanSpeed"in N&&t(14,d=N.keyPanSpeed),"keys"in N&&t(15,h=N.keys),"maxAzimuthAngle"in N&&t(16,p=N.maxAzimuthAngle),"maxDistance"in N&&t(17,m=N.maxDistance),"maxPolarAngle"in N&&t(18,g=N.maxPolarAngle),"maxZoom"in N&&t(19,b=N.maxZoom),"minAzimuthAngle"in N&&t(20,M=N.minAzimuthAngle),"minDistance"in N&&t(21,x=N.minDistance),"minPolarAngle"in N&&t(22,y=N.minPolarAngle),"minZoom"in N&&t(23,_=N.minZoom),"mouseButtons"in N&&t(24,S=N.mouseButtons),"panSpeed"in N&&t(25,A=N.panSpeed),"rotateSpeed"in N&&t(26,v=N.rotateSpeed),"screenSpacePanning"in N&&t(27,E=N.screenSpacePanning),"touches"in N&&t(28,w=N.touches),"zoomSpeed"in N&&t(29,R=N.zoomSpeed),"target"in N&&t(1,j=N.target),"dispose"in N&&t(2,F=N.dispose)},i.$$.update=()=>{i.$$.dirty[0]&1073741761&&(s!==void 0&&t(0,k.autoRotate=s,k),r!==void 0&&t(0,k.autoRotateSpeed=r,k),a!==void 0&&t(0,k.dampingFactor=a,k),o!==void 0&&t(0,k.enableDamping=o,k),l!==void 0&&t(0,k.enabled=l,k),c!==void 0&&t(0,k.enablePan=c,k),u!==void 0&&t(0,k.enableRotate=u,k),f!==void 0&&t(0,k.enableZoom=f,k),d!==void 0&&t(0,k.keyPanSpeed=d,k),h!==void 0&&t(0,k.keys=h,k),p!==void 0&&t(0,k.maxAzimuthAngle=p,k),m!==void 0&&t(0,k.maxDistance=m,k),g!==void 0&&t(0,k.maxPolarAngle=g,k),b!==void 0&&t(0,k.maxZoom=b,k),M!==void 0&&t(0,k.minAzimuthAngle=M,k),x!==void 0&&t(0,k.minDistance=x,k),y!==void 0&&t(0,k.minPolarAngle=y,k),_!==void 0&&t(0,k.minZoom=_,k),S!==void 0&&t(0,k.mouseButtons=S,k),A!==void 0&&t(0,k.panSpeed=A,k),v!==void 0&&t(0,k.rotateSpeed=v,k),E!==void 0&&t(0,k.screenSpacePanning=E,k),w!==void 0&&t(0,k.touches=w,k),R!==void 0&&t(0,k.zoomSpeed=R,k),k.update(),re("OrbitControls: props changed")),i.$$.dirty[0]&576&&(s||o?J():le())},[k,j,F,D,H,ge,s,r,a,o,l,c,u,f,d,h,p,m,g,b,M,x,y,_,S,A,v,E,w,R]}class Ov extends We{constructor(e){super(),He(this,e,zv,Fv,Ge,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const Pu=new St;Pu.scale.set(0,0,0);Pu.matrix;new yt().fromArray(new Array(16).fill(0));new nt(16777215);const Du=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let s=0;s<t.length;s+=1)i=i[t[s]];return{target:i,key:n}}else return{target:i,key:e}},Xr=Symbol("initialValueBeforeAttach"),Nv=()=>{const{invalidate:i}=Zi();let e=!1,t=Xr,n,s,r;const a=(l,c,u)=>{if(o(),!u){const f=l;((f==null?void 0:f.isMaterial)||!1)&&(u="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(c,l);else{const{target:f,key:d}=Du(c,u);t=f[d],f[d]=l,s=f,r=d}e=!0,i()}},o=()=>{e&&(n?(n(),n=void 0):s&&r&&t!==Xr&&(s[r]=t,t=Xr,s=void 0,r=void 0),e=!1,i())};return Mt(()=>{o()}),{update:a}},Uv=i=>i&&i.isCamera,Ru=i=>i&&i.isOrthographicCamera,Iu=i=>i&&i.isPerspectiveCamera,Bv=i=>Iu(i)||Ru(i),Gv=()=>{const{invalidate:i,size:e}=Zi(),{setCamera:t}=Av();let n,s;Mt(()=>{s==null||s()});const r=l=>{n&&(Ru(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()):Iu(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()))};return{update:(l,c)=>{if(s==null||s(),c||!Bv(l)){n=void 0;return}n=l,s=e.subscribe(r)},makeDefaultCamera:(l,c)=>{!Uv(l)||!c||(t(l),i())}}},bc=i=>!!(i!=null&&i.addEventListener),Vv=()=>{const i=Cn(),e=Xn(),t=d=>{d!=null&&d.type&&i(d.type,d)},n=(d,h)=>{bc(d)&&h.forEach(p=>{d.removeEventListener(p,t)})},s=(d,h)=>{bc(d)&&h.forEach(p=>{d.addEventListener(p,t)})};let r=[],a;const o=ht([]),l=o.subscribe(d=>{n(a,r),s(a,d),r=d});Mt(l);const c=ht(),u=c.subscribe(d=>{n(a,r),s(d,r),a=d});return Mt(u),Mt(()=>{n(a,r)}),qi(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:d=>{c.set(d)}}},Hv=["$$scope","$$slots","type","args","attach","instance"],Wv=["fov","aspect","near","far","left","right","top","bottom","zoom"],jv=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,qv=()=>{const{invalidate:i}=Zi(),e=new Map,t=(s,r,a,o)=>{var u,f;if(jv(a)){const d=e.get(r);if(d&&d.instance===s&&d.value===a)return;e.set(r,{instance:s,value:a})}const{key:l,target:c}=Du(s,r);if(!Array.isArray(a)&&typeof a=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(a);else if(typeof((f=c[l])==null?void 0:f.set)=="function")Array.isArray(a)?c[l].set(...a):c[l].set(a);else{if(c[l]=a,o.manualCamera)return;Wv.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(s,r,a)=>{for(const o in r)Hv.includes(o)||t(s,o,r[o],a),i()}}},Xv=i=>({ref:i&1}),vc=i=>({ref:i[0]}),Yv=i=>({ref:i&1}),xc=i=>({ref:i[0]});function Mc(i){let e,t;return e=new Cu({props:{object:i[0],dispose:i[1]}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},p(n,s){const r={};s&1&&(r.object=n[0]),s&2&&(r.dispose=n[1]),e.$set(r)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function Zv(i){let e;const t=i[12].default,n=at(t,i,i[13],vc);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&8193)&&lt(n,t,s,s[13],e?ot(t,s[13],r,Xv):ct(s[13]),vc)},i(s){e||(z(n,s),e=!0)},o(s){G(n,s),e=!1},d(s){n&&n.d(s)}}}function Kv(i){let e,t;return e=new Au({props:{object:i[0],$$slots:{default:[Jv]},$$scope:{ctx:i}}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},p(n,s){const r={};s&1&&(r.object=n[0]),s&8193&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function Jv(i){let e;const t=i[12].default,n=at(t,i,i[13],xc);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&8193)&&lt(n,t,s,s[13],e?ot(t,s[13],r,Yv):ct(s[13]),xc)},i(s){e||(z(n,s),e=!0)},o(s){G(n,s),e=!1},d(s){n&&n.d(s)}}}function Qv(i){let e=i[4](i[0]),t,n,s,r,a,o,l=e&&Mc(i);const c=[Kv,Zv],u=[];function f(d,h){return h&1&&(n=null),n==null&&(n=!!d[3](d[0])),n?0:1}return s=f(i,-1),r=u[s]=c[s](i),{c(){l&&l.c(),t=ye(),r.c(),a=Bt()},m(d,h){l&&l.m(d,h),K(d,t,h),u[s].m(d,h),K(d,a,h),o=!0},p(d,[h]){h&1&&(e=d[4](d[0])),e?l?(l.p(d,h),h&1&&z(l,1)):(l=Mc(d),l.c(),z(l,1),l.m(t.parentNode,t)):l&&(ut(),G(l,1,1,()=>{l=null}),ft());let p=s;s=f(d,h),s===p?u[s].p(d,h):(ut(),G(u[p],1,1,()=>{u[p]=null}),ft(),r=u[s],r?r.p(d,h):(r=u[s]=c[s](d),r.c()),z(r,1),r.m(a.parentNode,a))},i(d){o||(z(l),z(r),o=!0)},o(d){G(l),G(r),o=!1},d(d){l&&l.d(d),d&&Z(t),u[s].d(d),d&&Z(a)}}}function $v(i,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let s=Le(e,n),r,{$$slots:a={},$$scope:o}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:f=void 0}=e,{makeDefault:d=void 0}=e,{dispose:h=void 0}=e;const p=en("threlte-hierarchical-parent-context");bt(i,p,w=>t(11,r=w));const m=w=>typeof w=="function"&&/^\s*class\s+/.test(w.toString()),g=w=>Array.isArray(w);let{ref:b=m(l)&&g(c)?new l(...c):m(l)?new l:l}=e,M=!1;const x=ht(b);Jt("threlte-hierarchical-parent-context",x);const y=qv(),_=Gv(),S=Nv(),A=Vv(),v=w=>!!w.isObject3D,E=w=>w.dispose!==void 0;return i.$$set=w=>{e=ce(ce({},e),Ye(w)),t(21,s=Le(e,n)),"type"in w&&t(5,l=w.type),"args"in w&&t(6,c=w.args),"attach"in w&&t(7,u=w.attach),"manual"in w&&t(8,f=w.manual),"makeDefault"in w&&t(9,d=w.makeDefault),"dispose"in w&&t(1,h=w.dispose),"ref"in w&&t(0,b=w.ref),"$$scope"in w&&t(13,o=w.$$scope)},i.$$.update=()=>{i.$$.dirty&1120&&(M?t(0,b=m(l)&&g(c)?new l(...c):m(l)?new l:l):t(10,M=!0)),i.$$.dirty&1&&x.set(b),y.updateProps(b,s,{manualCamera:f}),i.$$.dirty&257&&_.update(b,f),i.$$.dirty&513&&_.makeDefaultCamera(b,d),i.$$.dirty&2177&&S.update(b,r,u),i.$$.dirty&1&&A.updateRef(b)},[b,h,p,v,E,l,c,u,f,d,M,r,a,o]}class ci extends We{constructor(e){super(),He(this,e,$v,Qv,Ge,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function e1(i){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class yc extends We{constructor(e){super(),He(this,e,e1,null,Ge,{})}}new Proxy(yc,{get(i,e){return i[e]||yc}});la(tc,()=>new tc(vu));const zi=ht({}),Yr=ht(0),Ws=ht(0),Js=ht({});function ku(i){let e=[],t=[],n=[],s=[],r=[],a=[];for(const p in i){let m=i[p];e.push(m.boundingBox.max.x),t.push(m.boundingBox.max.y),n.push(m.boundingBox.max.z),s.push(m.boundingBox.min.x),r.push(m.boundingBox.min.y),a.push(m.boundingBox.min.z)}let o=Math.max(...e),l=Math.max(...t),c=Math.max(...n),u=Math.min(...s),f=Math.min(...r),d=Math.min(...a);return{min:{x:u,y:f,z:d},max:{x:o,y:l,z:c}}}function Sc(i){let e=ku(i),t=.5*(e.max.x+e.min.x),n=.5*(e.max.y+e.min.y),s=.5*(e.max.z+e.min.z);return{x:t,y:n,z:s}}function wc(i){let e=[0,0,0];if(Object.entries(i).length>0){let t=ku(i),n=0*(t.max.x+t.min.x),s=.5*(t.max.y+t.min.y),r=t.max.x-t.min.x,a=t.max.y-t.min.y,o=t.max.z-t.min.z,l=4*Math.max(r,a,o);e=[n,s,l]}return e}function Tc(i,e){let t="#505050";return e[i]&&(t=e[i]),t}function Ec(i,e,t){const n=i.slice();return n[2]=e[t][0],n[3]=e[t][1],n}function t1(i){let e,t;return e=new Ov({props:{enableZoom:!0,target:Sc(i[0])}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},p(n,s){const r={};s&1&&(r.target=Sc(n[0])),e.$set(r)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function n1(i){let e,t,n,s,r;return e=new ci({props:{type:i[3]}}),n=new ci({props:{type:Ub,color:Tc(i[2],i[1])}}),{c(){Ee(e.$$.fragment),t=ye(),Ee(n.$$.fragment),s=ye()},m(a,o){Se(e,a,o),K(a,t,o),Se(n,a,o),K(a,s,o),r=!0},p(a,o){const l={};o&1&&(l.type=a[3]),e.$set(l);const c={};o&3&&(c.color=Tc(a[2],a[1])),n.$set(c)},i(a){r||(z(e.$$.fragment,a),z(n.$$.fragment,a),r=!0)},o(a){G(e.$$.fragment,a),G(n.$$.fragment,a),r=!1},d(a){we(e,a),a&&Z(t),we(n,a),a&&Z(s)}}}function Ac(i){let e,t;return e=new ci({props:{type:gn,"position.x":.5,"position.y":.5,castShadow:!0,$$slots:{default:[n1,({ref:n})=>({6:n}),({ref:n})=>n?64:0]},$$scope:{ctx:i}}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},p(n,s){const r={};s&131&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function i1(i){let e,t,n,s,r,a,o,l,c,u;e=new ci({props:{type:ln,makeDefault:!0,position:wc(i[0]),fov:50,$$slots:{default:[t1]},$$scope:{ctx:i}}}),n=new ci({props:{type:sc,castShadow:!0,position:[3,10,10]}}),r=new ci({props:{type:sc,position:[-3,10,-10],intensity:.2}}),o=new ci({props:{type:qb,intensity:.2}});let f=Object.entries(i[0]),d=[];for(let p=0;p<f.length;p+=1)d[p]=Ac(Ec(i,f,p));const h=p=>G(d[p],1,1,()=>{d[p]=null});return{c(){Ee(e.$$.fragment),t=ye(),Ee(n.$$.fragment),s=ye(),Ee(r.$$.fragment),a=ye(),Ee(o.$$.fragment),l=ye();for(let p=0;p<d.length;p+=1)d[p].c();c=Bt()},m(p,m){Se(e,p,m),K(p,t,m),Se(n,p,m),K(p,s,m),Se(r,p,m),K(p,a,m),Se(o,p,m),K(p,l,m);for(let g=0;g<d.length;g+=1)d[g].m(p,m);K(p,c,m),u=!0},p(p,m){const g={};if(m&1&&(g.position=wc(p[0])),m&129&&(g.$$scope={dirty:m,ctx:p}),e.$set(g),m&3){f=Object.entries(p[0]);let b;for(b=0;b<f.length;b+=1){const M=Ec(p,f,b);d[b]?(d[b].p(M,m),z(d[b],1)):(d[b]=Ac(M),d[b].c(),z(d[b],1),d[b].m(c.parentNode,c))}for(ut(),b=f.length;b<d.length;b+=1)h(b);ft()}},i(p){if(!u){z(e.$$.fragment,p),z(n.$$.fragment,p),z(r.$$.fragment,p),z(o.$$.fragment,p);for(let m=0;m<f.length;m+=1)z(d[m]);u=!0}},o(p){G(e.$$.fragment,p),G(n.$$.fragment,p),G(r.$$.fragment,p),G(o.$$.fragment,p),d=d.filter(Boolean);for(let m=0;m<d.length;m+=1)G(d[m]);u=!1},d(p){we(e,p),p&&Z(t),we(n,p),p&&Z(s),we(r,p),p&&Z(a),we(o,p),p&&Z(l),er(d,p),p&&Z(c)}}}function s1(i){let e,t,n;return t=new Ev({props:{$$slots:{default:[i1]},$$scope:{ctx:i}}}),{c(){e=he("div"),Ee(t.$$.fragment),ne(e,"class","viewer svelte-iyns3y")},m(s,r){K(s,e,r),Se(t,e,null),n=!0},p(s,[r]){const a={};r&131&&(a.$$scope={dirty:r,ctx:s}),t.$set(a)},i(s){n||(z(t.$$.fragment,s),n=!0)},o(s){G(t.$$.fragment,s),n=!1},d(s){s&&Z(e),we(t)}}}function r1(i,e,t){let n,s;return bt(i,zi,r=>t(0,n=r)),bt(i,Js,r=>t(1,s=r)),[n,s]}class a1 extends We{constructor(e){super(),He(this,e,r1,s1,Ge,{})}}class Cc extends xs{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new xu(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){function t(c){const u=new DataView(c),f=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*f===u.byteLength)return!0;const p=[115,111,108,105,100];for(let m=0;m<5;m++)if(n(p,u,m))return!1;return!0}function n(c,u,f){for(let d=0,h=c.length;d<h;d++)if(c[d]!==u.getUint8(f+d))return!1;return!0}function s(c){const u=new DataView(c),f=u.getUint32(80,!0);let d,h,p,m=!1,g,b,M,x,y;for(let w=0;w<80-10;w++)u.getUint32(w,!1)==1129270351&&u.getUint8(w+4)==82&&u.getUint8(w+5)==61&&(m=!0,g=new Float32Array(f*3*3),b=u.getUint8(w+6)/255,M=u.getUint8(w+7)/255,x=u.getUint8(w+8)/255,y=u.getUint8(w+9)/255);const _=84,S=12*4+2,A=new tn,v=new Float32Array(f*3*3),E=new Float32Array(f*3*3);for(let w=0;w<f;w++){const R=_+w*S,j=u.getFloat32(R,!0),F=u.getFloat32(R+4,!0),D=u.getFloat32(R+8,!0);if(m){const q=u.getUint16(R+48,!0);q&32768?(d=b,h=M,p=x):(d=(q&31)/31,h=(q>>5&31)/31,p=(q>>10&31)/31)}for(let q=1;q<=3;q++){const re=R+q*12,te=w*3*3+(q-1)*3;v[te]=u.getFloat32(re,!0),v[te+1]=u.getFloat32(re+4,!0),v[te+2]=u.getFloat32(re+8,!0),E[te]=j,E[te+1]=F,E[te+2]=D,m&&(g[te]=d,g[te+1]=h,g[te+2]=p)}}return A.setAttribute("position",new un(v,3)),A.setAttribute("normal",new un(E,3)),m&&(A.setAttribute("color",new un(g,3)),A.hasColors=!0,A.alpha=y),A}function r(c){const u=new tn,f=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g;let h=0;const p=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+p+p+p,"g"),g=new RegExp("normal"+p+p+p,"g"),b=[],M=[],x=new U;let y,_=0,S=0,A=0;for(;(y=f.exec(c))!==null;){S=A;const v=y[0];for(;(y=d.exec(v))!==null;){let R=0,j=0;const F=y[0];for(;(y=g.exec(F))!==null;)x.x=parseFloat(y[1]),x.y=parseFloat(y[2]),x.z=parseFloat(y[3]),j++;for(;(y=m.exec(F))!==null;)b.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),M.push(x.x,x.y,x.z),R++,A++;j!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+h),R!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+h),h++}const E=S,w=A-S;u.addGroup(E,w,_),_++}return u.setAttribute("position",new Rt(b,3)),u.setAttribute("normal",new Rt(M,3)),u}function a(c){return typeof c!="string"?Xb.decodeText(new Uint8Array(c)):c}function o(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f)&255;return u.buffer||u}else return c}const l=o(e);return t(l)?s(l):r(a(e))}}const o1=/^[og]\s*(.+)?/,l1=/^mtllib /,c1=/^usemtl /,u1=/^usemap /,Lc=/\s+/,Pc=new U,Zr=new U,Dc=new U,Rc=new U,mn=new U,js=new nt;function f1(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;Pc.fromArray(s,e),Zr.fromArray(s,t),Dc.fromArray(s,n),mn.subVectors(Dc,Zr),Rc.subVectors(Pc,Zr),mn.cross(Rc),mn.normalize(),r.push(mn.x,mn.y,mn.z),r.push(mn.x,mn.y,mn.z),r.push(mn.x,mn.y,mn.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),h=this.parseVertexIndex(n,u);if(this.addVertex(f,d,h),this.addColor(f,d,h),o!==void 0&&o!==""){const p=this.normals.length;f=this.parseNormalIndex(o,p),d=this.parseNormalIndex(l,p),h=this.parseNormalIndex(c,p),this.addNormal(f,d,h)}else this.addFaceNormal(f,d,h);if(s!==void 0&&s!==""){const p=this.uvs.length;f=this.parseUVIndex(s,p),d=this.parseUVIndex(r,p),h=this.parseUVIndex(a,p),this.addUV(f,d,h),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class Ic extends xs{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new xu(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new f1;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(Lc);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(js.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),t.colors.push(js.r,js.g,js.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const d=c.slice(1).trim().split(Lc),h=[];for(let m=0,g=d.length;m<g;m++){const b=d[m];if(b.length>0){const M=b.split("/");h.push(M)}}const p=h[0];for(let m=1,g=h.length-1;m<g;m++){const b=h[m],M=h[m+1];t.addFace(p[0],b[0],M[0],p[1],b[1],M[1],p[2],b[2],M[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let d=[];const h=[];if(c.indexOf("/")===-1)d=f;else for(let p=0,m=f.length;p<m;p++){const g=f[p].split("/");g[0]!==""&&d.push(g[0]),g[1]!==""&&h.push(g[1])}t.addLineGeometry(d,h)}else if(u==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=o1.exec(c))!==null){const f=(" "+s[0].slice(1).trim()).slice(1);t.startObject(f)}else if(c1.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(l1.test(c))t.materialLibraries.push(c.substring(7).trim());else if(u1.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new os;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const c=t.objects[o],u=c.geometry,f=c.materials,d=u.type==="Line",h=u.type==="Points";let p=!1;if(u.vertices.length===0)continue;const m=new tn;m.setAttribute("position",new Rt(u.vertices,3)),u.normals.length>0&&m.setAttribute("normal",new Rt(u.normals,3)),u.colors.length>0&&(p=!0,m.setAttribute("color",new Rt(u.colors,3))),u.hasUVIndices===!0&&m.setAttribute("uv",new Rt(u.uvs,2));const g=[];for(let M=0,x=f.length;M<x;M++){const y=f[M],_=y.name+"_"+y.smooth+"_"+p;let S=t.materials[_];if(this.materials!==null){if(S=this.materials.create(y.name),d&&S&&!(S instanceof Ks)){const A=new Ks;An.prototype.copy.call(A,S),A.color.copy(S.color),S=A}else if(h&&S&&!(S instanceof ls)){const A=new ls({size:10,sizeAttenuation:!1});An.prototype.copy.call(A,S),A.color.copy(S.color),A.map=S.map,S=A}}S===void 0&&(d?S=new Ks:h?S=new ls({size:1,sizeAttenuation:!1}):S=new Bb,S.name=y.name,S.flatShading=!y.smooth,S.vertexColors=p,t.materials[_]=S),g.push(S)}let b;if(g.length>1){for(let M=0,x=f.length;M<x;M++){const y=f[M];m.addGroup(y.groupStart,y.groupCount,M)}d?b=new Ql(m,g):h?b=new Wr(m,g):b=new gn(m,g)}else d?b=new Ql(m,g[0]):h?b=new Wr(m,g[0]):b=new gn(m,g[0]);b.name=c.name,r.add(b)}else if(t.vertices.length>0){const o=new ls({size:1,sizeAttenuation:!1}),l=new tn;l.setAttribute("position",new Rt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Rt(t.colors,3)),o.vertexColors=!0);const c=new Wr(l,o);r.add(c)}return r}}function kc(i){let e,t,n,s;return n=new Wc({props:{kind:"tertiary",$$slots:{default:[d1]},$$scope:{ctx:i}}}),n.$on("click",function(){ji(i[0].clearFiles)&&i[0].clearFiles.apply(this,arguments)}),{c(){e=he("br"),t=ye(),Ee(n.$$.fragment)},m(r,a){K(r,e,a),K(r,t,a),Se(n,r,a),s=!0},p(r,a){i=r;const o={};a&262144&&(o.$$scope={dirty:a,ctx:i}),n.$set(o)},i(r){s||(z(n.$$.fragment,r),s=!0)},o(r){G(n.$$.fragment,r),s=!1},d(r){r&&Z(e),r&&Z(t),we(n,r)}}}function d1(i){let e;return{c(){e=Be("Clear Mesh Files")},m(t,n){K(t,e,n)},d(t){t&&Z(e)}}}function h1(i){let e,t,n,s,r,a,o;function l(f){i[11](f)}let c={multiple:!0,labelTitle:".stl",buttonLabel:"Load",accept:[".stl"],status:"complete"};i[2]!==void 0&&(c.files=i[2]),n=new qc({props:c}),i[10](n),Tt.push(()=>Zn(n,"files",l)),n.$on("add",i[6]),n.$on("remove",i[7]);let u=i[2]&&i[2].length!==0&&kc(i);return{c(){e=he("br"),t=ye(),Ee(n.$$.fragment),r=ye(),u&&u.c(),a=Bt()},m(f,d){K(f,e,d),K(f,t,d),Se(n,f,d),K(f,r,d),u&&u.m(f,d),K(f,a,d),o=!0},p(f,d){const h={};!s&&d&4&&(s=!0,h.files=f[2],Yn(()=>s=!1)),n.$set(h),f[2]&&f[2].length!==0?u?(u.p(f,d),d&4&&z(u,1)):(u=kc(f),u.c(),z(u,1),u.m(a.parentNode,a)):u&&(ut(),G(u,1,1,()=>{u=null}),ft())},i(f){o||(z(n.$$.fragment,f),z(u),o=!0)},o(f){G(n.$$.fragment,f),G(u),o=!1},d(f){f&&Z(e),f&&Z(t),i[10](null),we(n,f),f&&Z(r),u&&u.d(f),f&&Z(a)}}}function Fc(i){let e,t,n,s;return n=new Wc({props:{kind:"tertiary",$$slots:{default:[m1]},$$scope:{ctx:i}}}),n.$on("click",function(){ji(i[1].clearFiles)&&i[1].clearFiles.apply(this,arguments)}),{c(){e=he("br"),t=ye(),Ee(n.$$.fragment)},m(r,a){K(r,e,a),K(r,t,a),Se(n,r,a),s=!0},p(r,a){i=r;const o={};a&262144&&(o.$$scope={dirty:a,ctx:i}),n.$set(o)},i(r){s||(z(n.$$.fragment,r),s=!0)},o(r){G(n.$$.fragment,r),s=!1},d(r){r&&Z(e),r&&Z(t),we(n,r)}}}function m1(i){let e;return{c(){e=Be("Clear File")},m(t,n){K(t,e,n)},d(t){t&&Z(e)}}}function p1(i){let e,t,n,s,r,a,o;function l(f){i[13](f)}let c={labelTitle:".json",buttonLabel:"Load",accept:[".json"],status:"complete"};i[3]!==void 0&&(c.files=i[3]),n=new qc({props:c}),i[12](n),Tt.push(()=>Zn(n,"files",l)),n.$on("add",i[8]),n.$on("remove",i[9]);let u=i[3]&&i[3].length!==0&&Fc(i);return{c(){e=he("br"),t=ye(),Ee(n.$$.fragment),r=ye(),u&&u.c(),a=Bt()},m(f,d){K(f,e,d),K(f,t,d),Se(n,f,d),K(f,r,d),u&&u.m(f,d),K(f,a,d),o=!0},p(f,d){const h={};!s&&d&8&&(s=!0,h.files=f[3],Yn(()=>s=!1)),n.$set(h),f[3]&&f[3].length!==0?u?(u.p(f,d),d&8&&z(u,1)):(u=Fc(f),u.c(),z(u,1),u.m(a.parentNode,a)):u&&(ut(),G(u,1,1,()=>{u=null}),ft())},i(f){o||(z(n.$$.fragment,f),z(u),o=!0)},o(f){G(n.$$.fragment,f),G(u),o=!1},d(f){f&&Z(e),f&&Z(t),i[12](null),we(n,f),f&&Z(r),u&&u.d(f),f&&Z(a)}}}function g1(i){let e,t,n,s;return e=new Ba({props:{title:"Mesh Files",$$slots:{default:[h1]},$$scope:{ctx:i}}}),n=new Ba({props:{title:"Color Map",$$slots:{default:[p1]},$$scope:{ctx:i}}}),{c(){Ee(e.$$.fragment),t=ye(),Ee(n.$$.fragment)},m(r,a){Se(e,r,a),K(r,t,a),Se(n,r,a),s=!0},p(r,a){const o={};a&262149&&(o.$$scope={dirty:a,ctx:r}),e.$set(o);const l={};a&262154&&(l.$$scope={dirty:a,ctx:r}),n.$set(l)},i(r){s||(z(e.$$.fragment,r),z(n.$$.fragment,r),s=!0)},o(r){G(e.$$.fragment,r),G(n.$$.fragment,r),s=!1},d(r){we(e,r),r&&Z(t),we(n,r)}}}function _1(i){let e,t,n,s,r,a,o,l,c,u,f;return u=new df({props:{$$slots:{default:[g1]},$$scope:{ctx:i}}}),{c(){e=he("div"),t=Be("Loaded ("),n=Be(i[4]),s=Be("/"),r=Be(i[5]),a=Be(`) Files
  `),o=he("br"),l=he("br"),c=ye(),Ee(u.$$.fragment)},m(d,h){K(d,e,h),ie(e,t),ie(e,n),ie(e,s),ie(e,r),ie(e,a),ie(e,o),ie(e,l),ie(e,c),Se(u,e,null),f=!0},p(d,[h]){(!f||h&16)&&st(n,d[4]),(!f||h&32)&&st(r,d[5]);const p={};h&262159&&(p.$$scope={dirty:h,ctx:d}),u.$set(p)},i(d){f||(z(u.$$.fragment,d),f=!0)},o(d){G(u.$$.fragment,d),f=!1},d(d){d&&Z(e),we(u)}}}function b1(i,e,t){let n,s,r,a;bt(i,Js,_=>t(14,n=_)),bt(i,Ws,_=>t(4,s=_)),bt(i,Yr,_=>t(5,r=_)),bt(i,zi,_=>t(15,a=_));let o,l,c=[],u=[];const f=la(Cc,()=>new Cc),d=la(Ic,()=>new Ic);async function h(){Xt(zi,a={},a),Xt(Ws,s=0,s),Xt(Yr,r=c.length,r);for(let _=0;_<c.length;_++){let S=c[_],A=URL.createObjectURL(S),v=S.name.split(".").pop(),E;v==="stl"?E=f:E=d,await E.load(A,w=>{w.computeBoundingBox(),Xt(zi,a[S.name]=w,a),zi.set(a),Xt(Ws,s+=1,s)})}}async function p(){Xt(zi,a={},a),Xt(Yr,r=0,r),Xt(Ws,s=0,s)}async function m(){if(u.length>0){let _=new FileReader;_.addEventListener("load",S=>{try{Xt(Js,n=JSON.parse(_.result),n)}catch(A){console.log("JSON parse error",A)}}),_.readAsText(u[0])}}async function g(){Xt(Js,n={},n)}function b(_){Tt[_?"unshift":"push"](()=>{o=_,t(0,o)})}function M(_){c=_,t(2,c)}function x(_){Tt[_?"unshift":"push"](()=>{l=_,t(1,l)})}function y(_){u=_,t(3,u)}return[o,l,c,u,s,r,h,p,m,g,b,M,x,y]}class v1 extends We{constructor(e){super(),He(this,e,b1,_1,Ge,{})}}function x1(i,e,t){const n=i.slice();return n[2]=e[t],n}function M1(i){let e,t;return e=new Kf({props:{labelText:i[2],value:i[2]}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},p:it,i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function y1(i){let e,t,n=["white","g10","g80","g100"],s=[];for(let r=0;r<4;r+=1)s[r]=M1(x1(i,n,r));return{c(){for(let r=0;r<4;r+=1)s[r].c();e=Bt()},m(r,a){for(let o=0;o<4;o+=1)s[o].m(r,a);K(r,e,a),t=!0},p:it,i(r){if(!t){for(let a=0;a<4;a+=1)z(s[a]);t=!0}},o(r){s=s.filter(Boolean);for(let a=0;a<4;a+=1)G(s[a]);t=!1},d(r){er(s,r),r&&Z(e)}}}function S1(i){let e,t,n;function s(a){i[1](a)}let r={legendText:"Carbon theme",$$slots:{default:[y1]},$$scope:{ctx:i}};return i[0]!==void 0&&(r.selected=i[0]),e=new rh({props:r}),Tt.push(()=>Zn(e,"selected",s)),{c(){Ee(e.$$.fragment)},m(a,o){Se(e,a,o),n=!0},p(a,[o]){const l={};o&32&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.selected=a[0],Yn(()=>t=!1)),e.$set(l)},i(a){n||(z(e.$$.fragment,a),n=!0)},o(a){G(e.$$.fragment,a),n=!1},d(a){we(e,a)}}}function w1(i,e,t){let{theme:n="g80"}=e;function s(r){n=r,t(0,n)}return i.$$set=r=>{"theme"in r&&t(0,n=r.theme)},[n,s]}class T1 extends We{constructor(e){super(),He(this,e,w1,S1,Ge,{theme:0})}}function E1(i){let e,t;return e=new a1({}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function A1(i){let e,t,n,s,r,a,o,l,c;function u(d){i[2](d)}let f={};return i[0]!==void 0&&(f.theme=i[0]),e=new T1({props:f}),Tt.push(()=>Zn(e,"theme",u)),l=new v1({}),{c(){Ee(e.$$.fragment),n=ye(),s=he("br"),r=ye(),a=he("br"),o=ye(),Ee(l.$$.fragment)},m(d,h){Se(e,d,h),K(d,n,h),K(d,s,h),K(d,r,h),K(d,a,h),K(d,o,h),Se(l,d,h),c=!0},p(d,h){const p={};!t&&h&1&&(t=!0,p.theme=d[0],Yn(()=>t=!1)),e.$set(p)},i(d){c||(z(e.$$.fragment,d),z(l.$$.fragment,d),c=!0)},o(d){G(e.$$.fragment,d),G(l.$$.fragment,d),c=!1},d(d){we(e,d),d&&Z(n),d&&Z(s),d&&Z(r),d&&Z(a),d&&Z(o),we(l,d)}}}function C1(i){let e,t,n,s;return e=new co({props:{lg:{span:12,offset:0},padding:!0,$$slots:{default:[E1]},$$scope:{ctx:i}}}),n=new co({props:{ls:{span:4,offset:0},padding:!0,$$slots:{default:[A1]},$$scope:{ctx:i}}}),{c(){Ee(e.$$.fragment),t=ye(),Ee(n.$$.fragment)},m(r,a){Se(e,r,a),K(r,t,a),Se(n,r,a),s=!0},p(r,a){const o={};a&8&&(o.$$scope={dirty:a,ctx:r}),e.$set(o);const l={};a&9&&(l.$$scope={dirty:a,ctx:r}),n.$set(l)},i(r){s||(z(e.$$.fragment,r),z(n.$$.fragment,r),s=!0)},o(r){G(e.$$.fragment,r),G(n.$$.fragment,r),s=!1},d(r){we(e,r),r&&Z(t),we(n,r)}}}function L1(i){let e,t;return e=new kd({props:{padding:!0,$$slots:{default:[C1]},$$scope:{ctx:i}}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},p(n,s){const r={};s&9&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function P1(i){let e,t;return e=new Ad({props:{fullWidth:!0,$$slots:{default:[L1]},$$scope:{ctx:i}}}),{c(){Ee(e.$$.fragment)},m(n,s){Se(e,n,s),t=!0},p(n,s){const r={};s&9&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function D1(i){let e,t,n,s,r,a,o;function l(u){i[1](u)}let c={};return i[0]!==void 0&&(c.theme=i[0]),e=new Sh({props:c}),Tt.push(()=>Zn(e,"theme",l)),s=new Bh({props:{platformName:"3D Mesh Viewer"}}),a=new Wh({props:{$$slots:{default:[P1]},$$scope:{ctx:i}}}),{c(){Ee(e.$$.fragment),n=ye(),Ee(s.$$.fragment),r=ye(),Ee(a.$$.fragment)},m(u,f){Se(e,u,f),K(u,n,f),Se(s,u,f),K(u,r,f),Se(a,u,f),o=!0},p(u,[f]){const d={};!t&&f&1&&(t=!0,d.theme=u[0],Yn(()=>t=!1)),e.$set(d);const h={};f&9&&(h.$$scope={dirty:f,ctx:u}),a.$set(h)},i(u){o||(z(e.$$.fragment,u),z(s.$$.fragment,u),z(a.$$.fragment,u),o=!0)},o(u){G(e.$$.fragment,u),G(s.$$.fragment,u),G(a.$$.fragment,u),o=!1},d(u){we(e,u),u&&Z(n),we(s,u),u&&Z(r),we(a,u)}}}function R1(i,e,t){let n="g80";function s(a){n=a,t(0,n)}function r(a){n=a,t(0,n)}return i.$$.update=()=>{i.$$.dirty&1&&document.documentElement.setAttribute("theme",n)},[n,s,r]}class I1 extends We{constructor(e){super(),He(this,e,R1,D1,Ge,{})}}new I1({target:document.getElementById("app")});
