"use strict";(self.webpackChunkwallet_project=self.webpackChunkwallet_project||[]).push([[256],{3373:function(n,e,t){t.d(e,{Z:function(){return L}});var i=t(9434),r=t(2791),o=t(7689),a=function(n){return n.currency.currency},d=function(n){return n.currency.isLoading},c=function(n){return n.currency.error},p=t(7948),x=t(168),s=t(9256);var h=t.p+"static/media/top-bg.5128f0511d2c4b8b5d073c8f3bceedd0.svg";var f,l,u,g,b,m,w,v=t.p+"static/media/bottom-bg.340c22a500ab5a21cd92a8df9fb25c67.svg",j=s.ZP.table(f||(f=(0,x.Z)(["\n  background-color: #4a56e2;\n  border-radius: 30px;\n  min-width: 280px;\n  min-height: 232px;\n  padding: 11px 20px 52px;\n  text-align: left;\n  color: #fff;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  position: relative;\n  font-family: Circe;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 40%;\n    background-repeat: no-repeat;\n  }\n\n  &::before {\n    top: 0;\n    left: 0;\n    background-image: url(",");\n  }\n\n  &::after {\n    bottom: 0;\n    left: 0;\n    background-image: url(",");\n  }\n\n  @media (min-width: 768px) {\n    min-width: 336px;\n    padding-bottom: 56px;\n    box-shadow: none;\n\n    &::before {\n      top: -5px;\n      background-size: contain;\n    }\n\n    &::after {\n      background-size: cover;\n      height: 50%;\n    }\n  }\n\n  @media (min-width: 1280px) {\n    min-width: 393px;\n    padding: 17px 60px 100px;\n\n    &::before {\n      top: -8px;\n    }\n    &::after {\n      height: 35%;\n    }\n  }\n"])),h,v),k=s.ZP.tr(l||(l=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),y=s.ZP.th(u||(u=(0,x.Z)(["\n  padding-bottom: 12px;\n  font-size: 18px;\n\n  @media (min-width: 768px) {\n    &:nth-child(2) {\n      margin-left: -30px;\n    }\n  }\n\n  @media (min-width: 1280px) {\n    &:first-child {\n      margin-left: -14px;\n      margin-right: 8px;\n    }\n  }\n"]))),Z=s.ZP.td(g||(g=(0,x.Z)(["\n  padding-top: 12px;\n\n  @media (min-width: 1280px) {\n    padding-top: 24px;\n  }\n"]))),z=s.ZP.div(b||(b=(0,x.Z)(["\n  background-color: #4a56e2;\n  border-radius: 30px;\n  max-width: 280px;\n  min-height: 232px;\n  color: #fff;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 40%;\n    background-repeat: no-repeat;\n  }\n\n  &::before {\n    top: 0;\n    left: 0;\n    background-image: url(",");\n  }\n\n  &::after {\n    bottom: 0;\n    left: 0;\n    background-image: url(",");\n  }\n\n  @media (min-width: 768px) {\n    max-width: 336px;\n    min-height: 234px;\n    box-shadow: none;\n\n    &::before {\n      top: -5px;\n      background-size: contain;\n    }\n\n    &::after {\n      background-size: cover;\n      height: 50%;\n    }\n  }\n\n  @media (min-width: 1280px) {\n    max-width: 393px;\n    min-height: 331px;\n\n    &::before {\n      top: -8px;\n    }\n    &::after {\n      height: 35%;\n    }\n  }\n"])),h,v),P=s.ZP.div(m||(m=(0,x.Z)(["\n  border: 4px solid rgba(0, 0, 0, 0.3);\n  border-bottom: 4px solid #fff;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: spin 1s linear infinite;\n  font-size: 30px;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),C=s.ZP.p(w||(w=(0,x.Z)(["\n  color: #fff;\n  font-style: italic;\n  text-align: center;\n\n  @media (min-width: 1280px) {\n    font-size: 20px;\n  }\n"]))),E=t(184),L=function(){var n=(0,i.I0)(),e=(0,i.v9)(a),t=(0,i.v9)(d),x=(0,i.v9)(c);(0,r.useEffect)((function(){n((0,p.k)())}),[n]);var s=(0,o.TH)(),h=(0,o.s0)(),f="/currency"===s.pathname;return(0,r.useEffect)((function(){var n=function(){window.innerWidth>767&&f&&h("/home")};return n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[h,f]),(0,E.jsxs)(E.Fragment,{children:[t&&(0,E.jsx)(z,{children:(0,E.jsx)(P,{children:"-$-"})}),e.length>1&&(0,E.jsxs)(j,{children:[(0,E.jsx)("thead",{children:(0,E.jsxs)(k,{children:[(0,E.jsx)(y,{children:"Currency"}),(0,E.jsx)(y,{children:"Purchase"}),(0,E.jsx)(y,{children:"Sale"})]})}),(0,E.jsx)("tbody",{children:e.map((function(n,e){return(0,E.jsxs)(k,{children:[(0,E.jsx)(Z,{children:n.currency}),(0,E.jsx)(Z,{children:n.purchase}),(0,E.jsx)(Z,{children:n.sale})]},e)}))})]}),x&&(0,E.jsx)(z,{children:(0,E.jsx)(C,{children:"Sorry, there was an error retrieving current exchange rate data :c"})})]})}},8256:function(n,e,t){t.r(e);var i=t(3373),r=t(184);e.default=function(){return(0,r.jsx)(i.Z,{})}}}]);
//# sourceMappingURL=256.cea4a49c.chunk.js.map