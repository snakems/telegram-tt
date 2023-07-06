"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[8563],{70172:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(60748),r=n(6137),i=n(83716),a=n(48670),s=n(2155),c=n(46752),l=n(32340),d=n(6202),u=n(70692),m=n(59107),f=n(39415),v=n(25190),h=n(57080);const p=(0,c.y)("Avatar");p.media=p("media"),p.icon=p("icon");const g=(0,o.X$)((e=>{let{className:t,size:n="large",peer:g,photo:w,text:C,isSavedMessages:Z,withVideo:I,loopIndefinitely:L,noPersonalPhoto:y,onClick:E}=e;const P=(0,o.sO)(null),x=(0,o.sO)(0),M=g&&"title"in g,b=g&&!M?g:void 0,k=g&&M?g:void 0,T=b&&(0,a.NB)(b),S=g&&(0,a.pK)(g.id),O=k?.isForum;let N,B;const U=I&&w?.isVideo,$="jumbo"===n;Z||T||(b&&!y||k?N=(0,a.RT)(g,$?"big":void 0):w&&(N=`photo${w.id}?size=m`,w.isVideo&&I&&(B=`videoAvatar${w.id}?size=u`)));const F=(0,d.Z)(N,!1,r.IU.BlobUrl),j=(0,d.Z)(B,!U,r.IU.BlobUrl),X=Boolean(F||j),J=Boolean(j&&U),_=(0,u.Z)(X),V=(0,v.Z)((e=>{const t=e.currentTarget;j&&(L||(x.current+=1,x.current>=3&&(t.style.display="none")))})),A=(0,m.Z)();let D;const R=b?(0,a.Js)(b):k?(0,a.U)(A,k):C;if(Z)D=o.ZP.createElement("i",{className:(0,c.Z)(p.icon,"icon","icon-avatar-saved-messages"),role:"img","aria-label":R});else if(T)D=o.ZP.createElement("i",{className:(0,c.Z)(p.icon,"icon","icon-avatar-deleted-account"),role:"img","aria-label":R});else if(S)D=o.ZP.createElement("i",{className:(0,c.Z)(p.icon,"icon","icon-reply-filled"),role:"img","aria-label":R});else if(X)D=o.ZP.createElement(o.ZP.Fragment,null,o.ZP.createElement("img",{src:F,className:(0,c.Z)(p.media,"avatar-media",_,j&&"poster"),alt:R,decoding:"async"}),J&&o.ZP.createElement(h.Z,{canPlay:!0,src:j,className:(0,c.Z)(p.media,"avatar-media","poster"),muted:!0,loop:L,autoPlay:!0,disablePictureInPicture:!0,playsInline:!0,onEnded:V}));else if(b){const e=(0,a.Js)(b);D=e?(0,s.Xv)(e,2):void 0}else if(k){const e=(0,a.U)(A,k);D=e&&(0,s.Xv)(e,(0,a.YC)(k.id)?2:1)}else C&&(D=(0,s.Xv)(C,2));const q=(0,c.Z)(`Avatar size-${n}`,t,`color-bg-${(0,a.Rs)(g)}`,Z&&"saved-messages",T&&"deleted-account",S&&"replies-bot-account",O&&"forum",E&&"interactive",!Z&&!F&&"no-photo"),z=Boolean(Z||F),{handleClick:H,handleMouseDown:G}=(0,f.m)((e=>{E&&E(e,z)}));return o.ZP.createElement("div",{ref:P,className:q,"data-test-sender-id":i.Cgt?g?.id:void 0,"aria-label":"string"==typeof D?R:void 0,onClick:H,onMouseDown:G},"string"==typeof D?(0,l.Z)(D,["jumbo"===n?"hq_emoji":"emoji"]):D)}))},50685:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748),r=n(59107);const i=(0,o.X$)((e=>{let{fakeType:t}=e;const n=(0,r.Z)();return o.ZP.createElement("span",{className:"FakeIcon"},n("fake"===t?"FakeMessage":"ScamMessage"))}))},2153:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(60748),r=n(83716),i=n(32340),a=n(48670),s=n(46752),c=n(59107);const l={__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.3 2.9c.1.1.2.1.3.2.7.6 1.3 1.1 2 1.7.3.2.6.4.9.4.9.1 1.7.2 2.6.2.5 0 .6.1.7.7.1.9.1 1.8.2 2.6 0 .4.2.7.4 1 .6.7 1.1 1.3 1.7 2 .3.4.3.5 0 .8-.5.6-1.1 1.3-1.6 1.9-.3.3-.5.7-.5 1.2-.1.8-.2 1.7-.2 2.5 0 .4-.2.5-.6.6-.8 0-1.6.1-2.5.2-.5 0-1 .2-1.4.5-.6.5-1.3 1.1-1.9 1.6-.3.3-.5.3-.8 0-.7-.6-1.4-1.2-2-1.8-.3-.2-.6-.4-.9-.4-.9-.1-1.8-.2-2.7-.2-.4 0-.5-.2-.6-.5 0-.9-.1-1.7-.2-2.6 0-.4-.2-.8-.4-1.1-.6-.6-1.1-1.3-1.6-2-.4-.4-.3-.5 0-1 .6-.6 1.1-1.3 1.7-1.9.3-.3.4-.6.4-1 0-.8.1-1.6.2-2.5 0-.5.1-.6.6-.6.9-.1 1.7-.1 2.6-.2.4 0 .7-.2 1-.4.7-.6 1.4-1.2 2.1-1.7.1-.2.3-.3.5-.2z" style="fill: var(--color-fill)"/><path class="lol" d="M16.4 10.1l-.2.2-5.4 5.4c-.1.1-.2.2-.4 0l-2.6-2.6c-.2-.2-.1-.3 0-.4.2-.2.5-.6.7-.6.3 0 .5.4.7.6l1.1 1.1c.2.2.3.2.5 0l4.3-4.3c.2-.2.4-.3.6 0 .1.2.3.3.4.5.2 0 .3.1.3.1z" style="fill: var(--color-checkmark)"/></svg>'},d=()=>o.ZP.createElement("span",{className:"VerifiedIcon",dangerouslySetInnerHTML:l});var u=n(50685),m=n(96459),f=n(4863);const v="ysHMmXALnn0fgFRc7Bn7",h=(0,o.X$)((e=>{let{className:t,peer:n,noVerified:l,noFake:h,withEmojiStatus:p,emojiStatusSize:g,isSavedMessages:w,noLoopLimit:C,onEmojiStatusClick:Z,observeIntersection:I}=e;const L=(0,c.Z)(),y=(0,a.YC)(n.id),E=y?(0,a.Js)(n):(0,a.U)(L,n),P=y&&n.emojiStatus,x=y&&n.isPremium;return w?o.ZP.createElement("div",{className:(0,s.Z)("title",v,t)},o.ZP.createElement("h3",null,L("SavedMessages"))):o.ZP.createElement("div",{className:(0,s.Z)("title",v,t)},o.ZP.createElement("h3",{dir:"auto",className:"fullName"},(0,i.Z)(E||"")),!l&&n.isVerified&&o.ZP.createElement(d,null),!h&&n.fakeType&&o.ZP.createElement(u.Z,{fakeType:n.fakeType}),p&&P&&o.ZP.createElement(m.Z,{documentId:P.documentId,size:g,loopLimit:C?void 0:r.y3O,observeIntersectionForLoading:I,onClick:Z}),p&&!P&&x&&o.ZP.createElement(f.Z,null))}))},4863:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(60748),r=n(69995),i=n(46752);const a={__html:'<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.63869 12.1902L3.50621 14.1092C3.18049 14.3087 2.75468 14.2064 2.55515 13.8807C2.45769 13.7216 2.42864 13.5299 2.47457 13.3491L2.95948 11.4405C3.13452 10.7515 3.60599 10.1756 4.24682 9.86791L7.6642 8.22716C7.82352 8.15067 7.89067 7.95951 7.81418 7.80019C7.75223 7.67116 7.61214 7.59896 7.47111 7.62338L3.66713 8.28194C2.89387 8.41581 2.1009 8.20228 1.49941 7.69823L0.297703 6.69116C0.00493565 6.44581 -0.0335059 6.00958 0.211842 5.71682C0.33117 5.57442 0.502766 5.48602 0.687982 5.47153L4.35956 5.18419C4.61895 5.16389 4.845 4.99974 4.94458 4.75937L6.36101 1.3402C6.5072 0.987302 6.91179 0.819734 7.26469 0.965925C7.43413 1.03612 7.56876 1.17075 7.63896 1.3402L9.05539 4.75937C9.15496 4.99974 9.38101 5.16389 9.6404 5.18419L13.3322 5.47311C13.713 5.50291 13.9975 5.83578 13.9677 6.2166C13.9534 6.39979 13.8667 6.56975 13.7269 6.68896L10.9114 9.08928C10.7131 9.25826 10.6267 9.52425 10.6876 9.77748L11.5532 13.3733C11.6426 13.7447 11.414 14.1182 11.0427 14.2076C10.8642 14.2506 10.676 14.2208 10.5195 14.1249L7.36128 12.1902C7.13956 12.0544 6.8604 12.0544 6.63869 12.1902Z" fill="var(--color-fill)"/></svg>'},s=(0,o.X$)((e=>{let{withGradient:t,big:n,className:s,onClick:c}=e;const l=(0,o.Ye)((()=>t?function(){const e=(0,r.Z)();return{__html:`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${e}" x1="3" y1="63.5001" x2="84.1475" y2="-1.32262" gradientUnits="userSpaceOnUse"><stop stop-color="#6B93FF"/><stop offset="0.439058" stop-color="#976FFF"/><stop offset="1" stop-color="#E46ACE"/></linearGradient></defs><path fill-rule="evenodd" clip-rule="evenodd" d="M6.63869 12.1902L3.50621 14.1092C3.18049 14.3087 2.75468 14.2064 2.55515 13.8807C2.45769 13.7216 2.42864 13.5299 2.47457 13.3491L2.95948 11.4405C3.13452 10.7515 3.60599 10.1756 4.24682 9.86791L7.6642 8.22716C7.82352 8.15067 7.89067 7.95951 7.81418 7.80019C7.75223 7.67116 7.61214 7.59896 7.47111 7.62338L3.66713 8.28194C2.89387 8.41581 2.1009 8.20228 1.49941 7.69823L0.297703 6.69116C0.00493565 6.44581 -0.0335059 6.00958 0.211842 5.71682C0.33117 5.57442 0.502766 5.48602 0.687982 5.47153L4.35956 5.18419C4.61895 5.16389 4.845 4.99974 4.94458 4.75937L6.36101 1.3402C6.5072 0.987302 6.91179 0.819734 7.26469 0.965925C7.43413 1.03612 7.56876 1.17075 7.63896 1.3402L9.05539 4.75937C9.15496 4.99974 9.38101 5.16389 9.6404 5.18419L13.3322 5.47311C13.713 5.50291 13.9975 5.83578 13.9677 6.2166C13.9534 6.39979 13.8667 6.56975 13.7269 6.68896L10.9114 9.08928C10.7131 9.25826 10.6267 9.52425 10.6876 9.77748L11.5532 13.3733C11.6426 13.7447 11.414 14.1182 11.0427 14.2076C10.8642 14.2506 10.676 14.2208 10.5195 14.1249L7.36128 12.1902C7.13956 12.0544 6.8604 12.0544 6.63869 12.1902Z" fill="url(#${e})"/></svg>`}}():a),[t]);return o.ZP.createElement("i",{onClick:c,className:(0,i.Z)("PremiumIcon",s,t&&"gradient",c&&"clickable",n&&"big"),dangerouslySetInnerHTML:l,title:"Premium"})}))},22275:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(60748),r=n(33555),i=n(11192),a=n(48670),s=n(32340),c=n(59107),l=n(17551);const d=(0,o.X$)((0,r.c$)(((e,t)=>{let{userId:n}=t;const o=(0,i.jr)(e),r=n&&(0,i.dy)(e,n);return{chat:o,contactName:r?(0,a.Vl)(r):void 0}}))((e=>{let{isOpen:t,chat:n,userId:i,contactName:a,onClose:d}=e;const{deleteChatMember:u}=(0,r.Sv)(),m=(0,c.Z)(),f=(0,o.I4)((()=>{u({chatId:n.id,userId:i}),d()}),[n,u,d,i]);if(n&&i)return o.ZP.createElement(l.Z,{isOpen:t,onClose:d,title:m("GroupRemoved.Remove"),textParts:(0,s.Z)(m("PeerInfo.Confirm.RemovePeer",a)),confirmLabel:m("lng_box_remove"),confirmHandler:f,confirmIsDestructive:!0})})))},42431:(e,t,n)=>{n.d(t,{$5:()=>s,Bj:()=>a,GU:()=>c,Ht:()=>l,LU:()=>m,fu:()=>u,mU:()=>d});var o=n(14342),r=n(48670),i=n(86087);function a(e,t){const n=(0,o.x6)(e,t);if(n&&n.groupCallId)return s(e,n.groupCallId)}function s(e,t){return e.groupCalls.byId[t]}function c(e,t,n){return s(e,t)?.participants[n]}function l(e){const t=d(e)?.chatId;if(!t)return!1;const n=(0,o.Z1)(e,t);return!!n&&((0,r.G9)(n)&&n.isCreator||Boolean(n.adminRights?.manageCall))}function d(e){const{groupCalls:{activeGroupCallId:t}}=e;if(t)return s(e,t)}function u(e){const{phoneCall:t,currentUserId:n}=e;if(!t||!t.participantId||!t.adminId)return;const o=t.adminId===n?t.participantId:t.adminId;return(0,i.dy)(e,o)}function m(e){const t=d(e);if(!t||!t.chatId)return!1;const n=(0,o.Z1)(e,t.chatId);if(!n)return!1;if(Boolean((0,r.WS)(n)))return!0;const i=(0,o.x6)(e,n.id)?.inviteLink;return Boolean(i)}},9211:(e,t,n)=>{n.d(t,{M:()=>i,P:()=>a});var o=n(86087),r=n(83716);function i(e,t){var n;const{appConfig:i}=e;if(!i)return r.prK[t][0];const a=(0,o.wV)(e),{limits:s}=i,c=null!==(n=s[t]?.[a?1:0])&&void 0!==n?n:r.prK[t][a?1:0];return"dialogFilters"===t?c+1:c}function a(e,t){const{appConfig:n}=e;if(!n)return r.prK[t][1];const{limits:o}=n;return o[t][1]}},17240:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(60748),r=n(31664),i=n(57710),a=n(601),s=n(25190);function c(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}const l=(e,t,n,l)=>{const[d,u]=(0,o.eJ)(!1),[m,f]=(0,o.eJ)(void 0),[v,h]=(0,o.eJ)(void 0),p=(0,s.Z)((e=>{t||2!==e.button||(0,i.WM)((()=>{(0,r.D_)(e.target,"no-selection")}))})),g=(0,s.Z)((e=>{(0,i.WM)((()=>{(0,r.mC)(e.target,"no-selection")})),t||n&&e.target.matches("a[href]")||(e.preventDefault(),m||(u(!0),f({x:e.clientX,y:e.clientY}),h(e.target)))})),w=(0,s.Z)((()=>{u(!1)})),C=(0,s.Z)((()=>{f(void 0)}));return(0,o.d4)((()=>{if(t||!a.$b||l)return;const o=e.current;if(!o)return;let r;const i=()=>{r&&(clearTimeout(r),r=void 0)},s=e=>{t||(i(),r=window.setTimeout((()=>(e=>{i();const{clientX:t,clientY:r,target:s}=e.touches[0];m||n&&s.matches("a[href]")||(o.addEventListener("touchend",(e=>{a.cj&&a.fl&&setTimeout((()=>{o.removeEventListener("mousedown",c,{capture:!0}),o.removeEventListener("click",c,{capture:!0})}),100),c(e)}),{once:!0,capture:!0}),a.fl&&a.cj&&(o.addEventListener("mousedown",c,{once:!0,capture:!0}),o.addEventListener("click",c,{once:!0,capture:!0})),u(!0),f({x:t,y:r}))})(e)),200))};return o.addEventListener("touchstart",s,{passive:!0}),o.addEventListener("touchcancel",i,!0),o.addEventListener("touchend",i,!0),o.addEventListener("touchmove",i,{passive:!0}),()=>{i(),o.removeEventListener("touchstart",s),o.removeEventListener("touchcancel",i,!0),o.removeEventListener("touchend",i,!0),o.removeEventListener("touchmove",i)}}),[m,t,l,e,n]),{isContextMenuOpen:d,contextMenuPosition:m,contextMenuTarget:v,handleBeforeContextMenu:p,handleContextMenu:g,handleContextMenuClose:w,handleContextMenuHide:C}}},39415:(e,t,n)=>{n.d(t,{m:()=>i});var o=n(601),r=n(25190);function i(e){const t=(0,r.Z)((t=>{"mousedown"===t.type&&t.button!==o.tc.Main||e(t)}));return o.$b?{handleClick:e?t:void 0}:{handleMouseDown:e?t:void 0}}},27407:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(60748),r=n(91713),i=n(60782),a=n(25190),s=n(65326),c=n(87204);function l(e,t,n,o){const{length:i}=e,a=o?e.indexOf(o):0,s=t===r.Uq.Forwards?a:a+1||i,c=Math.max(0,s-n),l=s+n-1,d=e.slice(Math.max(0,c),l+1);let u,m;switch(t){case r.Uq.Forwards:u=s>=0,m=c>=0;break;case r.Uq.Backwards:u=s<i,m=l<=i-1}return{newViewportIds:d,areSomeLocal:u,areAllLocal:m,newIsOnTop:d[0]===e[0]}}const d=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;const u=(0,o.sO)(),m=(0,o.sO)();if(!m.current&&t&&!n){const{newViewportIds:e,newIsOnTop:n}=l(t,r.Uq.Forwards,d,t[0]);m.current={viewportIds:e,isOnTop:n}}const f=(0,s.Z)();n&&(u.current={});const v=(0,c.Z)(t),h=(0,c.Z)(n);if(!t||n||t===v&&n===h)t||(m.current=void 0);else{const{viewportIds:e,isOnTop:n}=m.current||{},o=e&&!n?e[Math.round(e.length/2)]:void 0,a=o&&t.includes(o)?o:t[0],{offsetId:s=a,direction:c=r.Uq.Forwards}=u.current||{},{newViewportIds:f,newIsOnTop:v}=l(t,c,d,s);u.current={},e&&(0,i.et)(e,f)||(m.current={viewportIds:f,isOnTop:v})}const p=(0,a.Z)((n=>{let{direction:o,noScroll:a}=n;const{viewportIds:s}=m.current||{},c=s?o===r.Uq.Backwards?s[s.length-1]:s[0]:void 0;if(!t)return void(e&&e({offsetId:c}));const{newViewportIds:v,areSomeLocal:h,areAllLocal:p,newIsOnTop:g}=l(t,o,d,c);!h||s&&(0,i.et)(s,v)||(m.current={viewportIds:v,isOnTop:g},f()),!p&&e&&(a||(u.current={...u.current,direction:o,offsetId:c}),e({offsetId:c}))}));return n?[t]:[m.current?.viewportIds,p]}},62357:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(60748);const r=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=(0,o.sO)(e);(0,o.bt)((()=>{r.current=e}),[e]),(0,o.d4)((()=>{if(void 0===t)return;const e=setInterval((()=>r.current()),t);return n||r.current(),()=>clearInterval(e)}),[t,n])}},72645:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(60748);const r=(e,t,n)=>{const r=(0,o.sO)();return(0,o.bt)((()=>{const n=r.current;return r.current=t,e(n||[])}),t,n)}},12644:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748);const r={width:0,left:0,height:0,top:0};function i(e,t,n,i,a){const[s,c]=(0,o.eJ)("right"),[l,d]=(0,o.eJ)("bottom"),[u,m]=(0,o.eJ)(),[f,v]=(0,o.eJ)(),[h,p]=(0,o.eJ)(!1),[g,w]=(0,o.eJ)(""),[C,Z]=(0,o.eJ)("opacity: 0;");return(0,o.d4)((()=>{const o=t();if(!e||!o)return;let{x:s,y:l}=e;const u=s,f=l,h=i(),g=n(),{extraPaddingX:C=0,extraTopPadding:I=0,marginSides:L=0,extraMarginTop:y=0,menuElMinWidth:E=0,shouldAvoidNegativePosition:P=!1,withPortal:x=!1,isDense:M=!1}=a?.()||{},b=h?parseInt(getComputedStyle(h).marginTop,10)+y:void 0,{offsetWidth:k,offsetHeight:T}=h||{offsetWidth:0,offsetHeight:0},S=h?{width:Math.max(k,E),height:T+b}:r,O=g?g.getBoundingClientRect():r;let N,B;M||s+S.width+C<O.width+O.left?(s+=3,N="left"):s-S.width-O.left>0?(N="right",s-=3):(N="left",s=16),c(N),L&&"right"===N&&s+C+L>=O.width+O.left&&(s-=L),L&&"left"===N&&(s+C+L+S.width>=O.width+O.left?s-=L:s-L<=0&&(s+=L)),M||l+S.height<O.height+O.top?B="top":(B="bottom",l-S.height<O.top+I&&(l=O.top+O.height)),d(B);const U=o.getBoundingClientRect(),$=x?U.top:0,F=x?U.left:0,j=Math.min(s-U.left,O.width-S.width-16);let X=("left"===N?x||P?Math.max(16,j):j:s-U.left)+F,J=l-U.top+$;M&&(X=Math.min(X,O.width-S.width-16),J=Math.min(J,O.height-S.height-16));const _=E?Math.max(0,(E-k)/2):0;X-_<0&&P&&(X=_+16);const V=O.height-12-(b||0);p(V<S.height),Z(`max-height: ${V}px;`),w(`left: ${X}px; top: ${J}px`);const A=u+F-U.left-X,D=f+$-U.top-J-(b||0);m("left"===N?A:S.width+A),v("bottom"===B?S.height+D:D)}),[e,i,n,t,a]),{positionX:s,positionY:l,transformOriginX:u,transformOriginY:f,style:g,menuStyle:C,withScroll:h}}},98069:(e,t,n)=>{n.d(t,{In:()=>i,l_:()=>r,wT:()=>a});let o=0;function r(){o+=1}function i(){o-=1}function a(){return o>0}},87675:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(601);const r=(e,t)=>{o.cj&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),o.cj&&(e.style.overflow="")}},1911:(e,t,n)=>{function o(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const o=n.findIndex((e=>e.isSameNode(document.activeElement)));let r=0;o>=0&&(r=t.shiftKey?o>0?o-1:n.length-1:o<n.length-1?o+1:0),n[r].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}n.d(t,{Z:()=>o})}}]);
//# sourceMappingURL=8563.817103ae4a98e4b39d36.js.map