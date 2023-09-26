import{s as T,r as G,u as _,v as Ne,e as Y,w as Me,h as N,d,x as y,i as x,y as h,z as O,A as Z,B as q,C as ze,D as de,E as A,f as z,a as W,l as ie,g as I,F as Ie,c as X,m as fe,j as C}from"../chunks/scheduler.8aec7823.js";import{S as U,i as V,a as g,t as v,b as L,d as w,m as S,e as j}from"../chunks/index.f82d2824.js";import{b as ge}from"../chunks/paths.065a8b3a.js";import{g as J,a as ee}from"../chunks/spread.8a54911c.js";import{e as ve}from"../chunks/each.e59479a4.js";const Ae=!0,nt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ae},Symbol.toStringTag,{value:"Module"}));var $e={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function pe(a,e,s){const l=a.slice();return l[9]=e[s][0],l[10]=e[s][1],l}function ce(a){let e,s=[a[10]],l={};for(let t=0;t<s.length;t+=1)l=_(l,s[t]);return{c(){e=Ne(a[9]),this.h()},l(t){e=Me(t,a[9],{}),N(e).forEach(d),this.h()},h(){y(e,l)},m(t,n){x(t,e,n)},p(t,n){y(e,l=J(s,[n&16&&t[10]]))},d(t){t&&d(e)}}}function be(a){let e=a[9],s,l=a[9]&&ce(a);return{c(){l&&l.c(),s=Y()},l(t){l&&l.l(t),s=Y()},m(t,n){l&&l.m(t,n),x(t,s,n)},p(t,n){t[9]?e?T(e,t[9])?(l.d(1),l=ce(t),e=t[9],l.c(),l.m(s.parentNode,s)):l.p(t,n):(l=ce(t),e=t[9],l.c(),l.m(s.parentNode,s)):e&&(l.d(1),l=null,e=t[9])},d(t){t&&d(s),l&&l.d(t)}}}function Ee(a){let e,s,l,t,n=ve(a[4]),o=[];for(let r=0;r<n.length;r+=1)o[r]=be(pe(a,n,r));const m=a[8].default,c=G(m,a,a[7],null);let $=[$e,a[5],{width:a[2]},{height:a[2]},{stroke:a[1]},{"stroke-width":a[3]},{class:l=`tabler-icon tabler-icon-${a[0]} ${a[6].class??""}`}],b={};for(let r=0;r<$.length;r+=1)b=_(b,$[r]);return{c(){e=Ne("svg");for(let r=0;r<o.length;r+=1)o[r].c();s=Y(),c&&c.c(),this.h()},l(r){e=Me(r,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var i=N(e);for(let f=0;f<o.length;f+=1)o[f].l(i);s=Y(),c&&c.l(i),i.forEach(d),this.h()},h(){y(e,b)},m(r,i){x(r,e,i);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(e,null);h(e,s),c&&c.m(e,null),t=!0},p(r,[i]){if(i&16){n=ve(r[4]);let f;for(f=0;f<n.length;f+=1){const M=pe(r,n,f);o[f]?o[f].p(M,i):(o[f]=be(M),o[f].c(),o[f].m(e,s))}for(;f<o.length;f+=1)o[f].d(1);o.length=n.length}c&&c.p&&(!t||i&128)&&O(c,m,r,r[7],t?q(m,r[7],i,null):Z(r[7]),null),y(e,b=J($,[$e,i&32&&r[5],(!t||i&4)&&{width:r[2]},(!t||i&4)&&{height:r[2]},(!t||i&2)&&{stroke:r[1]},(!t||i&8)&&{"stroke-width":r[3]},(!t||i&65&&l!==(l=`tabler-icon tabler-icon-${r[0]} ${r[6].class??""}`))&&{class:l}]))},i(r){t||(g(c,r),t=!0)},o(r){v(c,r),t=!1},d(r){r&&d(e),ze(o,r),c&&c.d(r)}}}function Ce(a,e,s){const l=["name","color","size","stroke","iconNode"];let t=de(e,l),{$$slots:n={},$$scope:o}=e,{name:m}=e,{color:c="currentColor"}=e,{size:$=24}=e,{stroke:b=2}=e,{iconNode:r}=e;return a.$$set=i=>{s(6,e=_(_({},e),A(i))),s(5,t=de(e,l)),"name"in i&&s(0,m=i.name),"color"in i&&s(1,c=i.color),"size"in i&&s(2,$=i.size),"stroke"in i&&s(3,b=i.stroke),"iconNode"in i&&s(4,r=i.iconNode),"$$scope"in i&&s(7,o=i.$$scope)},e=A(e),[m,c,$,b,r,t,e,o,n]}class Le extends U{constructor(e){super(),V(this,e,Ce,Ee,T,{name:0,color:1,size:2,stroke:3,iconNode:4})}}const te=Le;function we(a){let e;const s=a[2].default,l=G(s,a,a[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&8)&&O(l,s,t,t[3],e?q(s,t[3],n,null):Z(t[3]),null)},i(t){e||(g(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function Se(a){let e,s;const l=[{name:"info-hexagon"},a[1],{iconNode:a[0]}];let t={$$slots:{default:[we]},$$scope:{ctx:a}};for(let n=0;n<l.length;n+=1)t=_(t,l[n]);return e=new te({props:t}),{c(){L(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){S(e,n,o),s=!0},p(n,[o]){const m=o&3?J(l,[l[0],o&2&&ee(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(m.$$scope={dirty:o,ctx:n}),e.$set(m)},i(n){s||(g(e.$$.fragment,n),s=!0)},o(n){v(e.$$.fragment,n),s=!1},d(n){j(e,n)}}}function je(a,e,s){let{$$slots:l={},$$scope:t}=e;const n=[["path",{d:"M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"}],["path",{d:"M12 9h.01"}],["path",{d:"M11 12h1v4h1"}]];return a.$$set=o=>{s(1,e=_(_({},e),A(o))),"$$scope"in o&&s(3,t=o.$$scope)},e=A(e),[n,e,l,t]}class He extends U{constructor(e){super(),V(this,e,je,Se,T,{})}}const Fe=He;function Pe(a){let e;const s=a[2].default,l=G(s,a,a[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&8)&&O(l,s,t,t[3],e?q(s,t[3],n,null):Z(t[3]),null)},i(t){e||(g(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function Te(a){let e,s;const l=[{name:"creative-commons-zero"},a[1],{iconNode:a[0]}];let t={$$slots:{default:[Pe]},$$scope:{ctx:a}};for(let n=0;n<l.length;n+=1)t=_(t,l[n]);return e=new te({props:t}),{c(){L(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){S(e,n,o),s=!0},p(n,[o]){const m=o&3?J(l,[l[0],o&2&&ee(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(m.$$scope={dirty:o,ctx:n}),e.$set(m)},i(n){s||(g(e.$$.fragment,n),s=!0)},o(n){v(e.$$.fragment,n),s=!1},d(n){j(e,n)}}}function Be(a,e,s){let{$$slots:l={},$$scope:t}=e;const n=[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{d:"M12 12m-3 0a3 4 0 1 0 6 0a3 4 0 1 0 -6 0"}],["path",{d:"M14 9l-4 6"}]];return a.$$set=o=>{s(1,e=_(_({},e),A(o))),"$$scope"in o&&s(3,t=o.$$scope)},e=A(e),[n,e,l,t]}class De extends U{constructor(e){super(),V(this,e,Be,Te,T,{})}}const Ge=De;function Oe(a){let e;const s=a[2].default,l=G(s,a,a[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&8)&&O(l,s,t,t[3],e?q(s,t[3],n,null):Z(t[3]),null)},i(t){e||(g(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function Ze(a){let e,s;const l=[{name:"file-code"},a[1],{iconNode:a[0]}];let t={$$slots:{default:[Oe]},$$scope:{ctx:a}};for(let n=0;n<l.length;n+=1)t=_(t,l[n]);return e=new te({props:t}),{c(){L(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){S(e,n,o),s=!0},p(n,[o]){const m=o&3?J(l,[l[0],o&2&&ee(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(m.$$scope={dirty:o,ctx:n}),e.$set(m)},i(n){s||(g(e.$$.fragment,n),s=!0)},o(n){v(e.$$.fragment,n),s=!1},d(n){j(e,n)}}}function qe(a,e,s){let{$$slots:l={},$$scope:t}=e;const n=[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"}],["path",{d:"M10 13l-1 2l1 2"}],["path",{d:"M14 13l1 2l-1 2"}]];return a.$$set=o=>{s(1,e=_(_({},e),A(o))),"$$scope"in o&&s(3,t=o.$$scope)},e=A(e),[n,e,l,t]}class Ue extends U{constructor(e){super(),V(this,e,qe,Ze,T,{})}}const Ve=Ue;function Je(a){let e;const s=a[2].default,l=G(s,a,a[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&8)&&O(l,s,t,t[3],e?q(s,t[3],n,null):Z(t[3]),null)},i(t){e||(g(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function Ke(a){let e,s;const l=[{name:"external-link"},a[1],{iconNode:a[0]}];let t={$$slots:{default:[Je]},$$scope:{ctx:a}};for(let n=0;n<l.length;n+=1)t=_(t,l[n]);return e=new te({props:t}),{c(){L(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){S(e,n,o),s=!0},p(n,[o]){const m=o&3?J(l,[l[0],o&2&&ee(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(m.$$scope={dirty:o,ctx:n}),e.$set(m)},i(n){s||(g(e.$$.fragment,n),s=!0)},o(n){v(e.$$.fragment,n),s=!1},d(n){j(e,n)}}}function Qe(a,e,s){let{$$slots:l={},$$scope:t}=e;const n=[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"}],["path",{d:"M11 13l9 -9"}],["path",{d:"M15 4h5v5"}]];return a.$$set=o=>{s(1,e=_(_({},e),A(o))),"$$scope"in o&&s(3,t=o.$$scope)},e=A(e),[n,e,l,t]}class Re extends U{constructor(e){super(),V(this,e,Qe,Ke,T,{})}}const ke=Re;function We(a){let e,s,l="<h1>Collective Governance Archive</h1>",t,n,o,m,c,$,b,r,i,f,M,ne,H,le,K,E,F,se,P,oe,B;$=new Fe({props:{size:30}}),M=new Ge({props:{size:30}}),H=new ke({props:{size:18}}),F=new Ve({props:{size:30}}),P=new ke({props:{size:18}});const ae=a[2].default,p=G(ae,a,a[1],null);return{c(){e=z("main"),s=z("a"),s.innerHTML=l,t=W(),n=z("nav"),o=z("ul"),m=z("li"),c=z("a"),L($.$$.fragment),b=ie(`
          About`),r=W(),i=z("li"),f=z("a"),L(M.$$.fragment),ne=ie(`
          License`),L(H.$$.fragment),le=W(),K=z("li"),E=z("a"),L(F.$$.fragment),se=ie(`
          Source`),L(P.$$.fragment),oe=W(),p&&p.c(),this.h()},l(u){e=I(u,"MAIN",{});var k=N(e);s=I(k,"A",{href:!0,"data-svelte-h":!0}),Ie(s)!=="svelte-1t5umvt"&&(s.innerHTML=l),t=X(k),n=I(k,"NAV",{class:!0});var ue=N(n);o=I(ue,"UL",{class:!0});var D=N(o);m=I(D,"LI",{});var me=N(m);c=I(me,"A",{href:!0,class:!0});var re=N(c);w($.$$.fragment,re),b=fe(re,`
          About`),re.forEach(d),me.forEach(d),r=X(D),i=I(D,"LI",{});var he=N(i);f=I(he,"A",{href:!0,class:!0});var Q=N(f);w(M.$$.fragment,Q),ne=fe(Q,`
          License`),w(H.$$.fragment,Q),Q.forEach(d),he.forEach(d),le=X(D),K=I(D,"LI",{});var _e=N(K);E=I(_e,"A",{href:!0,class:!0});var R=N(E);w(F.$$.fragment,R),se=fe(R,`
          Source`),w(P.$$.fragment,R),R.forEach(d),_e.forEach(d),D.forEach(d),ue.forEach(d),oe=X(k),p&&p.l(k),k.forEach(d),this.h()},h(){C(s,"href",ge+"/"),C(c,"href",ge+"/about"),C(c,"class","svelte-b36r9w"),C(f,"href","https://creativecommons.org/publicdomain/zero/1.0/"),C(f,"class","svelte-b36r9w"),C(E,"href","https://github.com/DougInAMug/ALPHA-CGA"),C(E,"class","svelte-b36r9w"),C(o,"class","svelte-b36r9w"),C(n,"class","svelte-b36r9w")},m(u,k){x(u,e,k),h(e,s),h(e,t),h(e,n),h(n,o),h(o,m),h(m,c),S($,c,null),h(c,b),h(o,r),h(o,i),h(i,f),S(M,f,null),h(f,ne),S(H,f,null),h(o,le),h(o,K),h(K,E),S(F,E,null),h(E,se),S(P,E,null),h(e,oe),p&&p.m(e,null),B=!0},p(u,[k]){p&&p.p&&(!B||k&2)&&O(p,ae,u,u[1],B?q(ae,u[1],k,null):Z(u[1]),null)},i(u){B||(g($.$$.fragment,u),g(M.$$.fragment,u),g(H.$$.fragment,u),g(F.$$.fragment,u),g(P.$$.fragment,u),g(p,u),B=!0)},o(u){v($.$$.fragment,u),v(M.$$.fragment,u),v(H.$$.fragment,u),v(F.$$.fragment,u),v(P.$$.fragment,u),v(p,u),B=!1},d(u){u&&d(e),j($),j(M),j(H),j(F),j(P),p&&p.d(u)}}}function Xe(a,e,s){let{$$slots:l={},$$scope:t}=e;const n=!0;return a.$$set=o=>{"$$scope"in o&&s(1,t=o.$$scope)},[n,t,l]}class lt extends U{constructor(e){super(),V(this,e,Xe,We,T,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{lt as component,nt as universal};