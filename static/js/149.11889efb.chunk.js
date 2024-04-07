"use strict";(self.webpackChunkreact_team_project=self.webpackChunkreact_team_project||[]).push([[149],{6454:function(n,e,t){t(2791);e.Z=t.p+"static/media/logo_money_guard.7da338bacedd9b81e38e5c0537b5bfd3.svg"},7609:function(n,e,t){t(2791);e.Z=t.p+"static/media/sprite.d34226730588e01b4b6a1ba69b82af33.svg"},1572:function(n,e,t){t.d(e,{Z:function(){return E}});var i,o,r,d,s,a,p,l,x,c,h=t(5861),f=t(9439),g=t(4687),u=t.n(g),m=t(5294),w=t(2791),b=t(168),j=t(7924),C=j.ZP.div(i||(i=(0,b.Z)(["\n  position: relative;\n  background-color: rgba(74, 86, 226, 0.1);\n  width: 320px;\n  height: 220px;\n  margin: 0 auto;\n  @media only screen and (min-width: 768px) {\n    min-width: 336px;\n\n    margin: 0;\n  }\n  @media only screen and (min-width: 1280px) {\n    width: 100%;\n    max-height: 395px;\n    height: 350px;\n  }\n"]))),y=j.ZP.div(o||(o=(0,b.Z)(["\n  position: relative;\n  width: 100%;\n\n  top: -6px;\n  &::before {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background-color: #563eaf;\n    border: solid 1px #ff868d;\n    left: 39px;\n    top: 21px;\n    z-index: 1000;\n  }\n\n  &::after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background-color: #563eaf;\n    border: solid 1px #ff868d;\n    left: 242px;\n    top: -2px;\n    z-index: 1000;\n  }\n  @media only screen and (min-width: 768px) {\n    &::before {\n      left: 42px;\n      top: 21px;\n    }\n    &::after {\n      left: 254px;\n      top: -2px;\n    }\n  }\n  @media only screen and (min-width: 1280px) {\n    &::before {\n      left: 58px;\n      top: 29px;\n      width: 9px;\n      height: 9px;\n    }\n    &::after {\n      left: 364px;\n      top: -4px;\n      width: 9px;\n      height: 9px;\n    }\n    top: 26px;\n  }\n"]))),v=j.ZP.table(r||(r=(0,b.Z)(["\n  width: 100%;\n  font-size: 16px;\n  line-height: normal;\n  border-collapse: collapse;\n  padding-left: 20px;\n  @media only screen and (min-width: 1280px) {\n  }\n"]))),Z=j.ZP.thead(d||(d=(0,b.Z)(["\n  background: rgba(255, 255, 255, 0.2);\n  font-weight: 600;\n  @media only screen and (min-width: 1280px) {\n  }\n"]))),L=j.ZP.th(s||(s=(0,b.Z)(["\n  padding-top: 13px;\n  padding-bottom: 13px;\n  width: 33%;\n  padding-left: 20px;\n  @media only screen and (min-width: 1280px) {\n    &:first-child {\n      padding-left: 62px;\n    }\n    &:last-child {\n      padding-right: 111px;\n    }\n  }\n"]))),k=j.ZP.td(a||(a=(0,b.Z)(["\n  padding-top: 8px;\n  padding-bottom: 8px;\n  width: 30%;\n  padding-left: 25px;\n  &:last-child {\n    padding-left: 46px;\n  }\n  @media only screen and (min-width: 1280px) {\n    text-align: center;\n    &:first-child {\n      padding-left: 62px;\n    }\n    &:last-child {\n      padding-right: 131px;\n    }\n  }\n"]))),z=j.ZP.svg(p||(p=(0,b.Z)(["\n  position: absolute;\n  width: 100%;\n"]))),O=j.ZP.svg(l||(l=(0,b.Z)(["\n  width: 100%;\n  position: absolute;\n  top: 6px;\n  @media only screen and (min-width: 1280px) {\n    top: 20px;\n  }\n"]))),_=j.ZP.div(x||(x=(0,b.Z)(["\n  position: absolute;\n  left: 48px;\n  top: 8px;\n  color: var(--dashboard-text, #ff868d);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n"]))),P=j.ZP.div(c||(c=(0,b.Z)(["\n  position: absolute;\n  left: 352px;\n  top: -27px;\n  color: var(--dashboard-text, #ff868d);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n"]))),S=t(1075),F=t(184),E=function(){var n=(0,w.useState)(null),e=(0,f.Z)(n,2),t=e[0],i=e[1];(0,w.useEffect)((function(){var n=function(){var n=(0,h.Z)(u().mark((function n(){var e,t,o;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.Z.get("https://api.monobank.ua/bank/currency");case 3:e=n.sent,t=e.data,o=(new Date).getTime(),localStorage.setItem("QUOTES",JSON.stringify({data:t,fetchTime:o})),i(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("Error fetching data:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),e=localStorage.getItem("QUOTES");if(e){var t=JSON.parse(e),o=t.data,r=t.fetchTime;(new Date).getTime()-r<36e5?i(o):n()}else n()}),[]);var o=null===t||void 0===t?void 0:t.find((function(n){return 840===n.currencyCodeA})),r=null===t||void 0===t?void 0:t.find((function(n){return 978===n.currencyCodeA})),d=null===o||void 0===o?void 0:o.rateBuy.toFixed(2),s=null===o||void 0===o?void 0:o.rateSell.toFixed(2),a=null===r||void 0===r?void 0:r.rateBuy.toFixed(2),p=null===r||void 0===r?void 0:r.rateSell.toFixed(2),l=(0,S.ac)({query:"(max-width: 767px)"}),x=(0,S.ac)({query:"(min-width: 768px)"}),c=(0,S.ac)({query:"(max-width: 1279px)"}),g=(0,S.ac)({query:"(min-width: 1280px)"});return(0,F.jsxs)(C,{children:[(0,F.jsxs)(v,{children:[(0,F.jsx)(Z,{children:(0,F.jsxs)("tr",{children:[(0,F.jsx)(L,{children:"Currency"}),(0,F.jsx)(L,{children:"Purchase"}),(0,F.jsx)(L,{children:"Sale"})]})}),(0,F.jsxs)("tbody",{children:[(0,F.jsxs)("tr",{children:[(0,F.jsx)(k,{children:"USD"}),(0,F.jsx)(k,{children:d}),(0,F.jsx)(k,{children:s})]}),(0,F.jsxs)("tr",{children:[(0,F.jsx)(k,{children:"EUR"}),(0,F.jsx)(k,{children:a}),(0,F.jsx)(k,{children:p})]})]})]}),l?(0,F.jsxs)(y,{children:[(0,F.jsx)(z,{xmlns:"http://www.w3.org/2000/svg",width:"320",height:"72",viewBox:"0 0 320 72",fill:"none",children:(0,F.jsx)("path",{d:"M0 48.1232L25.6 30.368C27.8187 28.4332 33.9968 24.5634 40.96 24.5634C47.9232 24.5634 53.4187 27.295 55.296 28.6608L110.08 67.5855C111.616 68.7237 116.326 71 122.88 71C129.434 71 134.144 68.7237 135.68 67.5855L230.4 6.46313C232.789 4.64208 238.08 1 244.736 1C251.392 1 257.365 4.64208 260.096 6.46313L280.576 20.8038C281.941 21.7144 286.208 23.5354 292.352 23.5354C298.496 23.5354 301.818 21.5514 303.104 20.8038C307.586 18.1985 310.805 15.3875 316.416 15.6821C317.137 15.72 318.834 15.8815 320 16.365",stroke:"#FF868D"})}),(0,F.jsxs)(O,{xmlns:"http://www.w3.org/2000/svg",width:"320",height:"88",viewBox:"0 0 320 88",fill:"none",children:[(0,F.jsx)("path",{d:"M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z",fill:"url(#paint0_linear_34_6965)",fillOpacity:"0.6"}),(0,F.jsx)("path",{d:"M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z",fill:"#390096",fillOpacity:"0.2"}),(0,F.jsx)("defs",{children:(0,F.jsxs)("linearGradient",{id:"paint0_linear_34_6965",x1:"160",y1:"12.95",x2:"160",y2:"102.2",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"0.374892",stopColor:"white",stopOpacity:"0.536458"}),(0,F.jsx)("stop",{offset:"0.6091",stopColor:"white",stopOpacity:"0.269957"}),(0,F.jsx)("stop",{offset:"0.766012",stopColor:"white",stopOpacity:"0.151176"}),(0,F.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})})]})]}):"",x&c?(0,F.jsxs)(y,{children:[(0,F.jsx)(z,{xmlns:"http://www.w3.org/2000/svg",width:"338",height:"72",viewBox:"0 0 338 72",fill:"none",children:(0,F.jsx)("path",{d:"M1 48.291L27.88 30.4726C30.2096 28.5309 36.6966 24.6474 44.008 24.6474C51.3194 24.6474 57.0896 27.3886 59.0608 28.7593L116.584 67.8227C118.197 68.9649 123.143 71.2493 130.024 71.2493C136.905 71.2493 141.851 68.9649 143.464 67.8227L242.92 6.48258C245.429 4.65505 250.984 1 257.973 1C264.962 1 271.234 4.65505 274.101 6.48258L295.605 20.8744C297.038 21.7881 301.518 23.6156 307.97 23.6156C314.421 23.6156 317.909 21.6246 319.259 20.8744C323.966 18.2597 327.345 15.4387 333.237 15.7344C333.993 15.7724 335.776 15.9345 337 16.4198",stroke:"#FF868D"})}),(0,F.jsxs)(O,{xmlns:"http://www.w3.org/2000/svg",width:"336",height:"88",viewBox:"0 0 336 88",fill:"none",children:[(0,F.jsx)("path",{d:"M26.88 29.4724L0 47.2907V80C0 84.4183 3.58173 88 8.00001 88H328C332.418 88 336 84.4183 336 80V15.4195C334.776 14.9343 332.993 14.7722 332.237 14.7342C326.345 14.4385 322.966 17.2595 318.259 19.8741L318.201 19.9066C316.81 20.6801 313.33 22.6154 306.97 22.6154C300.518 22.6154 296.038 20.7879 294.605 19.8741L273.101 5.48234C270.234 3.65481 263.962 -0.000244141 256.973 -0.000244141C249.984 -0.000244141 244.429 3.65481 241.92 5.48234L142.464 66.8224C140.851 67.9646 135.905 70.249 129.024 70.249C122.143 70.249 117.197 67.9646 115.584 66.8224L58.0608 27.759C56.0896 26.3884 50.3194 23.6471 43.008 23.6471C35.6966 23.6471 29.2096 27.5306 26.88 29.4724Z",fill:"url(#paint0_linear_32_4883)",fillOpacity:"0.6"}),(0,F.jsx)("path",{d:"M26.88 29.4724L0 47.2907V80C0 84.4183 3.58173 88 8.00001 88H328C332.418 88 336 84.4183 336 80V15.4195C334.776 14.9343 332.993 14.7722 332.237 14.7342C326.345 14.4385 322.966 17.2595 318.259 19.8741L318.201 19.9066C316.81 20.6801 313.33 22.6154 306.97 22.6154C300.518 22.6154 296.038 20.7879 294.605 19.8741L273.101 5.48234C270.234 3.65481 263.962 -0.000244141 256.973 -0.000244141C249.984 -0.000244141 244.429 3.65481 241.92 5.48234L142.464 66.8224C140.851 67.9646 135.905 70.249 129.024 70.249C122.143 70.249 117.197 67.9646 115.584 66.8224L58.0608 27.759C56.0896 26.3884 50.3194 23.6471 43.008 23.6471C35.6966 23.6471 29.2096 27.5306 26.88 29.4724Z",fill:"#390096",fillOpacity:"0.2"}),(0,F.jsx)("defs",{children:(0,F.jsxs)("linearGradient",{id:"paint0_linear_32_4883",x1:"168",y1:"12.9498",x2:"168",y2:"102.2",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"0.374892",stopColor:"white",stopOpacity:"0.536458"}),(0,F.jsx)("stop",{offset:"0.6091",stopColor:"white",stopOpacity:"0.269957"}),(0,F.jsx)("stop",{offset:"0.766012",stopColor:"white",stopOpacity:"0.151176"}),(0,F.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})})]})]}):"",g?(0,F.jsxs)(y,{$usd:d,children:[(0,F.jsx)(_,{children:d}),(0,F.jsx)(P,{children:a}),(0,F.jsx)(z,{xmlns:"http://www.w3.org/2000/svg",width:"480",height:"102",viewBox:"0 0 480 102",fill:"none",children:(0,F.jsx)("path",{d:"M0 68.5585L38.4 43.1037C41.728 40.3298 50.9952 34.7819 61.44 34.7819C71.8848 34.7819 80.128 38.6981 82.944 40.6561L165.12 96.461C167.424 98.0927 174.49 101.356 184.32 101.356C194.15 101.356 201.216 98.0927 203.52 96.461L345.6 8.83226C349.184 6.22151 357.12 1 367.104 1C377.088 1 386.048 6.22151 390.144 8.83226L420.864 29.3919C422.912 30.6973 429.312 33.3081 438.528 33.3081C447.744 33.3081 452.727 30.4637 454.656 29.3919C461.379 25.6567 466.207 21.6267 474.624 22.0492C475.705 22.1035 478.251 22.335 480 23.0282",stroke:"#FF868D"})}),(0,F.jsxs)(O,{xmlns:"http://www.w3.org/2000/svg",width:"480",height:"167",viewBox:"0 0 480 167",fill:"none",children:[(0,F.jsx)("path",{d:"M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z",fill:"url(#paint0_linear_15_252)",fillOpacity:"0.6"}),(0,F.jsx)("path",{d:"M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z",fill:"#390096",fillOpacity:"0.2"}),(0,F.jsx)("defs",{children:(0,F.jsxs)("linearGradient",{id:"paint0_linear_15_252",x1:"240",y1:"18.5",x2:"240",y2:"146",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"0.374892",stopColor:"white",stopOpacity:"0.536458"}),(0,F.jsx)("stop",{offset:"0.6091",stopColor:"white",stopOpacity:"0.269957"}),(0,F.jsx)("stop",{offset:"0.766012",stopColor:"white",stopOpacity:"0.151176"}),(0,F.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})})]})]}):""]})}},149:function(n,e,t){t.r(e),t.d(e,{default:function(){return Sn}});var i,o,r,d,s,a,p,l,x,c,h,f,g,u,m,w,b,j,C,y,v,Z=t(2791),L=t(168),k=t(7924),z=k.ZP.div(i||(i=(0,L.Z)(["\n  border-radius: 8px;\n  background: rgba(82, 59, 126, 0.6);\n  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n  padding: 8px 74px 12px 32px;\n  width: 280px;\n  height: 80px;\n\n  @media only screen and (min-width: 768px) {\n    padding: 8px 122px 12px 40px;\n    width: 336px;\n  }\n  @media only screen and (min-width: 1280px) {\n    width: 100%;\n  }\n"]))),O=k.ZP.h2(o||(o=(0,L.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n"]))),_=k.ZP.h4(r||(r=(0,L.Z)(["\n  color: ",";\n  font-family: 'Poppins';\n  font-size: 12px;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n"])),(function(n){return n.theme.colors.subColor})),P=t(4420),S=t(4217),F=t(184),E=function(){var n=(0,P.v9)(S.QM);return(0,F.jsxs)(z,{children:[(0,F.jsx)(_,{children:"Your Balance"}),(0,F.jsxs)(O,{children:["\u20b4",n.toFixed(2)]})]})},M=t(9439),V=t(2530),B=(0,k.zo)(V.P)(d||(d=(0,L.Z)(["\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  max-width: 1280px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);\n  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),\n    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;\n  @media only screen and (min-width: 768px) {\n    padding-top: 16px;\n    padding-bottom: 15px;\n  }\n"]))),U=k.zo.div(s||(s=(0,L.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n"]))),q=(k.zo.header(a||(a=(0,L.Z)(["\n  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);\n"]))),k.zo.div(p||(p=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n\n  &:hover {\n    opacity: 0.8;\n    transform: translateY(-1px);\n  }\n"])))),T=k.zo.img(l||(l=(0,L.Z)(["\n  width: 13px;\n  height: 17px;\n"]))),H=k.zo.span(x||(x=(0,L.Z)(["\n  color: ",";\n  font-size: 13px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 17px;\n  }\n"])),(function(n){return n.theme.colors.mainWhite})),D=k.zo.p(c||(c=(0,L.Z)(["\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.colors.editBtn})),G=k.zo.img(h||(h=(0,L.Z)(["\n  margin-right: 12px;\n  margin-left: 4px;\n"]))),A=k.zo.p(f||(f=(0,L.Z)(["\n  font-size: 16px;\n  color: ",";\n  margin-left: 8px;\n"])),(function(n){return n.theme.colors.editBtn})),I=k.zo.button(g||(g=(0,L.Z)(["\n  padding: 0;\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: filter 0.3s;\n  &:hover {\n    filter: drop-shadow(0px 3px 5px rgba(255, 255, 255, 0.8));\n  }\n"]))),Q=k.zo.div(u||(u=(0,L.Z)(["\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 80vh;\n  display: flex;\n  justify-content: flex-end;\n  z-index: 1200;\n  background: rgba(34, 13, 91, 0.23);\n  backdrop-filter: blur(7px);\n  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;\n  opacity: 1;\n  visibility: visible;\n\n  @media screen and (min-width: 768px) {\n    position: fixed;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;\n  }\n"]))),Y=k.zo.div(m||(m=(0,L.Z)(["\n  width: 100%;\n  min-height: 691px;\n  padding: 41px 40px;\n  margin: 56px, auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: radial-gradient(#3f2e96, #5f478c);\n  border-radius: 8px;\n  position: relative;\n  bottom: 0;\n  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n\n  @media screen and (min-width: 768px) {\n    width: 533px;\n    height: 477px;\n  }\n"]))),$=k.zo.img(w||(w=(0,L.Z)(["\n  align-items: center;\n  justify-content: center;\n  width: 25px;\n  height: 25px;\n\n  @media screen and (min-width: 768px) {\n    width: 36px;\n    height: 36px;\n  }\n"]))),J=k.zo.span(b||(b=(0,L.Z)(["\n  color: #fbfbfb;\n  font-size: 19px;\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 27px;\n    margin-bottom: 52px;\n  }\n"]))),N=k.zo.p(j||(j=(0,L.Z)(["\n  font-size: 18px;\n  line-height: normal;\n  margin-bottom: 40px;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 65px;\n  }\n"]))),W=k.zo.button(C||(C=(0,L.Z)(["\n  min-width: 280px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  border: 1px solid #4a56e2;\n  margin: auto;\n  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);\n\n  font-weight: 400;\n  font-size: 18px;\n  text-transform: uppercase;\n  letter-spacing: 1.8;\n  word-wrap: break-word;\n  text-align: center;\n  cursor: pointer;\n  background-color: #ffffff;\n  color: #623f8b;\n\n  &:hover {\n    font-weight: 600;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 319px;\n    height: 50px;\n  }\n"]))),R=k.zo.button(y||(y=(0,L.Z)(["\n  min-width: 280px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #4a56e2;\n  margin: auto;\n  margin-bottom: 20px;\n\n  font-weight: 400;\n  font-size: 18px;\n  text-transform: uppercase;\n  letter-spacing: 1.8;\n  word-wrap: break-word;\n  text-align: center;\n  cursor: pointer;\n  background: linear-gradient(97deg, #ffc727 0%, #9e40ba 61%, #7000ff 91%);\n  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);\n  border-radius: 20px;\n\n  &:hover {\n    font-weight: 600;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 319px;\n    height: 50px;\n  }\n"]))),K=k.zo.div(v||(v=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n"])));var X=t.p+"static/media/exit.e630083d99c67516c6d0428369e2c7e6.svg";var nn,en,tn,on,rn,dn,sn,an,pn,ln=t.p+"static/media/straight_line.af8513ecc3ad6b6637fe1f628e65400e.svg",xn=t(6454),cn=t(1075),hn=t(9273),fn=t(1087),gn=function(){var n=(0,P.I0)(),e=(0,cn.ac)({query:"(min-width: 768px)"}),t=(0,P.v9)(S.dy),i=(null===t||void 0===t?void 0:t.email)||"name.surname",o=i.indexOf("@"),r=i.slice(0,o),d=(0,Z.useState)(!1),s=(0,M.Z)(d,2),a=s[0],p=s[1],l=(0,Z.useCallback)((function(){document.body.style.overflow="auto"}),[]),x=(0,Z.useCallback)((function(n){"Escape"===n.key&&(p(!1),l())}),[l]);return(0,Z.useEffect)((function(){return function(){document.removeEventListener("keydown",x)}}),[x]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("header",{children:(0,F.jsxs)(B,{children:[(0,F.jsx)(fn.rU,{to:"/",children:(0,F.jsxs)(q,{children:[(0,F.jsx)(T,{src:xn.Z,alt:"logo"}),(0,F.jsx)(H,{children:"Money Guard"})]})}),(0,F.jsxs)(U,{children:[(0,F.jsx)(D,{children:r}),e&&(0,F.jsx)(G,{src:ln,alt:"divider-icon"}),(0,F.jsxs)(I,{onClick:function(){p(!0),document.body.style.overflow="hidden",document.addEventListener("keydown",x)},children:[(0,F.jsx)("img",{src:X,alt:"exit"}),e&&(0,F.jsx)(A,{children:"Exit"})]})]})]})}),a&&(0,F.jsx)(Q,{children:(0,F.jsxs)(Y,{children:[(0,F.jsxs)(K,{children:[(0,F.jsx)($,{src:xn.Z,alt:"logo"}),(0,F.jsx)(J,{children:"Money Guard"})]}),(0,F.jsx)(N,{children:"Are you sure you want to logout?"}),(0,F.jsxs)("div",{children:[(0,F.jsx)(R,{onClick:function(){n((0,hn.kS)()),p(!1),l(),document.removeEventListener("keydown",x)},children:"Logout"}),(0,F.jsx)(W,{onClick:function(){p(!1),l()},children:"Cancel"})]})]})})]})},un=t(7609),mn=(0,k.zo)(V.P)(nn||(nn=(0,L.Z)(["\n  @media only screen and (min-width: 768px) and (max-width: 1279px) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @media only screen and (min-width: 1280px) {\n    padding-top: 40px;\n    padding-bottom: 28px;\n  }\n"]))),wn=(k.zo.nav(en||(en=(0,L.Z)([""]))),k.zo.ul(tn||(tn=(0,L.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 32px;\n  align-items: center;\n  justify-content: center;\n  overflow: visible;\n\n  @media only screen and (min-width: 768px) {\n    flex-direction: column;\n    align-items: baseline;\n    justify-content: center;\n    gap: 12px;\n  }\n"])))),bn=(0,k.zo)(fn.OL)(on||(on=(0,L.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: grey;\n  transition: all 0.3s;\n  &:hover {\n    filter: drop-shadow(0px 3px 10px rgba(255, 255, 255, 0.6));\n  }\n  &div {\n    border-radius: 6px;\n    width: 37px;\n    height: 37px;\n    overflow: hidden;\n  }\n  &.active {\n    color: blue;\n    border-radius: 5px;\n    transition: all 0.3s;\n    & div {\n      background: white;\n      border-radius: 6px;\n      width: 37px;\n      height: 37px;\n      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));\n    }\n  }\n\n  & svg {\n    fill: currentColor;\n  }\n\n  @media only screen and (min-width: 768px) {\n    &.active {\n      font-weight: 600;\n      & div {\n        width: 24px;\n        height: 24px;\n      }\n    }\n\n    & svg {\n      width: 24px;\n      height: 24px;\n    }\n  }\n"]))),jn=k.zo.span(rn||(rn=(0,L.Z)(["\n  color: ",";\n  font-size: 18px;\n  margin-left: 20px;\n"])),(function(n){return n.theme.colors.mainWhite})),Cn=function(){var n=(0,cn.ac)({query:"(min-width: 768px)"}),e=(0,cn.ac)({query:"(max-width: 767px)"});return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)("nav",{children:(0,F.jsx)(mn,{children:(0,F.jsxs)(wn,{children:[(0,F.jsx)("li",{children:(0,F.jsxs)(bn,{to:"/",children:[(0,F.jsxs)("div",{children:[" ",(0,F.jsx)("svg",{width:"38",height:"38",children:(0,F.jsx)("use",{href:"".concat(un.Z,"#homepage")})})]}),n&&(0,F.jsx)(jn,{children:"Home"})]})}),(0,F.jsx)("li",{children:(0,F.jsxs)(bn,{to:"/statistics",children:[(0,F.jsx)("div",{children:(0,F.jsx)("svg",{width:"38",height:"38",children:(0,F.jsx)("use",{href:"".concat(un.Z,"#statistics")})})}),n&&(0,F.jsx)(jn,{children:"Statistics"})]})}),e?(0,F.jsx)("li",{children:(0,F.jsx)(bn,{to:"/currency",children:(0,F.jsxs)("div",{children:[" ",(0,F.jsx)("svg",{width:"38",height:"38",children:(0,F.jsx)("use",{href:"".concat(un.Z,"#dollar")})})]})})}):null]})})})})},yn=t(7689),vn=t(1572),Zn=(0,k.ZP)(V.P)(dn||(dn=(0,L.Z)(["\n  @media only screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: row;\n    padding: 0;\n    justify-content: space-between;\n    margin-bottom: 20px;\n\n    &::before {\n      content: '';\n      width: 330px;\n      height: 333px;\n      border-radius: 333px;\n      background: #b223c4;\n      position: absolute;\n      left: 420px;\n      top: 600px;\n\n      filter: blur(150px);\n    }\n  }\n  @media only screen and (min-width: 1280px) {\n    flex-direction: column;\n    max-width: 480px;\n    padding: 0;\n    margin: 0;\n    height: calc(100vh - 70px);\n    justify-content: space-between;\n    gap: 32px;\n    border-right: 1px solid ",";\n    &::after {\n      content: '';\n      width: 285px;\n      height: 265.381px;\n      top: 430px;\n      left: calc(100vw - 400px);\n      z-index: -1;\n      position: absolute;\n      border-radius: 362.381px;\n      background: linear-gradient(220deg, #cd54eb 28.31%, #9902ff 66.76%);\n      filter: blur(150px);\n    }\n  }\n"])),(function(n){return n.theme.colors.subColor})),Ln=k.ZP.div(sn||(sn=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  align-items: center;\n  gap: 12px;\n\n  margin-top: 12px;\n  margin-bottom: 32px;\n  @media only screen and (min-width: 768px) {\n    gap: 28px;\n    margin-bottom: 0;\n    margin-top: 40px;\n    align-items: baseline;\n  }\n  @media only screen and (min-width: 1280px) {\n    &::before {\n      content: '';\n      width: 739px;\n      height: 500px;\n      border-radius: 366.105px;\n      background: #5e3ede;\n\n      filter: blur(200px);\n      z-index: -1;\n\n      position: absolute;\n      left: -30px;\n      top: 100px;\n    }\n    &::after {\n      content: '';\n      width: 363px;\n      height: 366px;\n      border-radius: 366px;\n      background: #2f2da3;\n      z-index: -1;\n      filter: blur(150px);\n      position: absolute;\n      left: calc(100vw - 450px);\n      top: 80px;\n    }\n  }\n"]))),kn=(0,k.ZP)(V.P)(an||(an=(0,L.Z)(["\n  @media only screen and (max-width: 767px) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @media only screen and (min-width: 1280px) {\n    display: grid;\n    grid-template-columns: 480px auto;\n    padding-left: 0;\n    padding-right: 0;\n    gap: 69px;\n  }\n"]))),zn=t(6143),On=t(6696),_n=k.ZP.div(pn||(pn=(0,L.Z)(["\n  opacity: ",";\n  position: fixed;\n  bottom: 21vh;\n  right: 4.5vw;\n  height: 20px;\n  font-size: 3rem;\n  z-index: 100;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  transition: all 0.3s;\n  &:hover {\n    color: rgba(255, 255, 255, 0.9);\n  }\n"])),(function(n){return n.$opacity})),Pn=function(){var n=(0,Z.useState)(!1),e=(0,M.Z)(n,2),t=e[0],i=e[1],o=(0,Z.useState)(0),r=(0,M.Z)(o,2),d=r[0],s=r[1];return window.addEventListener("scroll",(function(){document.documentElement.scrollTop>200?(i(!0),s(1)):(i(!1),s(0))})),(0,F.jsx)(_n,{$opacity:d,children:(0,F.jsx)(On.gtS,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:t?"inline-block":"none"}})})},Sn=function(){var n=(0,cn.ac)({query:"(min-width: 768px)"});return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(gn,{}),(0,F.jsxs)(kn,{children:[(0,F.jsxs)(Zn,{children:[(0,F.jsxs)(Ln,{children:[(0,F.jsx)(Cn,{}),(0,F.jsx)(E,{})]}),n&&(0,F.jsx)(vn.Z,{})]}),(0,F.jsx)(Z.Suspense,{fallback:(0,F.jsx)(zn.Z,{}),children:(0,F.jsx)(yn.j3,{})}),(0,F.jsx)(Pn,{})]})]})}}}]);
//# sourceMappingURL=149.11889efb.chunk.js.map