"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{8133:function(e,n,t){t.d(n,{XZ:function(){return D}});var a=t(9703),r=t(6450),i=t(7294),o=t(4697),c=t(7375),l=t(7178),s=t(2515),u=t(4332),d=t(9762),f=t(1358);function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h.apply(this,arguments)}var v=(0,r.kr)({name:"CheckboxGroupContext",strict:!1}),k=(v[0],v[1]);function p(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}a.Ts;var b=["isIndeterminate","isChecked"];var m=function(e){var n=s.E;return"custom"in n&&"function"===typeof n.custom?n.custom(e):n(e)}(l.m$.svg),y=function(e){return i.createElement(m,h({width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),i.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"}))},C=function(e){return i.createElement(m,h({width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4}},e),i.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))},g=function(e){var n=e.open,t=e.children;return i.createElement(u.M,{initial:!1},n&&i.createElement(s.E.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},t))},P=function(e){var n=e.isIndeterminate,t=e.isChecked,a=p(e,b),r=n?C:y;return i.createElement(g,{open:t||n},i.createElement(r,a))},x=["defaultIsChecked","defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"];function I(e){e.preventDefault(),e.stopPropagation()}var B=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange","inputProps"],E=(0,l.m$)("span",{baseStyle:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0}}),w=(0,l.m$)("label",{baseStyle:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"}}),D=(0,l.Gp)((function(e,n){var t=k(),s=h({},t,e),u=(0,l.jC)("Checkbox",s),v=(0,l.Lr)(e),b=v.spacing,m=void 0===b?"0.5rem":b,y=v.className,C=v.children,g=v.iconColor,D=v.iconSize,_=v.icon,S=void 0===_?i.createElement(P,null):_,M=v.isChecked,N=v.isDisabled,O=void 0===N?null==t?void 0:t.isDisabled:N,A=v.onChange,R=v.inputProps,j=p(v,B),L=M;null!=t&&t.value&&v.value&&(L=t.value.includes(v.value));var T=A;null!=t&&t.onChange&&v.value&&(T=(0,a.PP)(t.onChange,A));var F=function(e){void 0===e&&(e={});var n=(0,d.Kn)(e),t=n.isDisabled,l=n.isReadOnly,s=n.isRequired,u=n.isInvalid,v=n.id,k=n.onBlur,b=n.onFocus,m=n["aria-describedby"],y=e,C=y.defaultIsChecked,g=y.defaultChecked,P=void 0===g?C:g,B=y.isChecked,E=y.isFocusable,w=y.onChange,D=y.isIndeterminate,_=y.name,S=y.value,M=y.tabIndex,N=void 0===M?void 0:M,O=y["aria-label"],A=y["aria-labelledby"],R=y["aria-invalid"],j=p(y,x),L=(0,a.CE)(j,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),T=(0,o.u)(w),F=(0,o.u)(k),q=(0,o.u)(b),K=(0,c.kt)(),U=K[0],$=K[1],X=(0,c.kt)(),Z=X[0],z=X[1],G=(0,c.kt)(),W=G[0],H=G[1],Y=(0,i.useRef)(null),J=(0,i.useState)(!0),Q=J[0],V=J[1],ee=(0,i.useState)(!!P),ne=ee[0],te=ee[1],ae=(0,c.pY)(B,ne),re=ae[0],ie=ae[1];(0,a.ZK)({condition:!!C,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var oe=(0,i.useCallback)((function(e){l||t?e.preventDefault():(re||te(ie?e.target.checked:!!D||e.target.checked),null==T||T(e))}),[l,t,ie,re,D,T]);(0,o.a)((function(){Y.current&&(Y.current.indeterminate=Boolean(D))}),[D]),(0,c.rf)((function(){t&&$.off()}),[t,$]);var ce=t&&!E,le=(0,i.useCallback)((function(e){" "===e.key&&H.on()}),[H]),se=(0,i.useCallback)((function(e){" "===e.key&&H.off()}),[H]);(0,o.a)((function(){Y.current&&Y.current.checked!==ie&&te(Y.current.checked)}),[Y.current]);var ue=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),h({},e,{ref:n,"data-active":(0,a.PB)(W),"data-hover":(0,a.PB)(Z),"data-checked":(0,a.PB)(ie),"data-focus":(0,a.PB)(U),"data-indeterminate":(0,a.PB)(D),"data-disabled":(0,a.PB)(t),"data-invalid":(0,a.PB)(u),"data-readonly":(0,a.PB)(l),"aria-hidden":!0,onMouseDown:(0,a.v0)(e.onMouseDown,(function(e){e.preventDefault(),H.on()})),onMouseUp:(0,a.v0)(e.onMouseUp,H.off),onMouseEnter:(0,a.v0)(e.onMouseEnter,z.on),onMouseLeave:(0,a.v0)(e.onMouseLeave,z.off)})}),[W,ie,t,U,Z,D,u,l,H,z.off,z.on]),de=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),h({},L,e,{ref:(0,r.lq)(n,(function(e){e&&V("LABEL"===e.tagName)})),onClick:(0,a.v0)(e.onClick,(function(){var e;Q||(null==(e=Y.current)||e.click(),(0,a.T_)(Y.current,{nextTick:!0}))})),"data-disabled":(0,a.PB)(t),"data-checked":(0,a.PB)(ie),"data-invalid":(0,a.PB)(u)})}),[L,t,ie,u,Q]),fe=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),h({},e,{ref:(0,r.lq)(Y,n),type:"checkbox",name:_,value:S,id:v,tabIndex:N,onChange:(0,a.v0)(e.onChange,oe),onBlur:(0,a.v0)(e.onBlur,F,$.off),onFocus:(0,a.v0)(e.onFocus,q,$.on),onKeyDown:(0,a.v0)(e.onKeyDown,le),onKeyUp:(0,a.v0)(e.onKeyUp,se),required:s,checked:ie,disabled:ce,readOnly:l,"aria-label":O,"aria-labelledby":A,"aria-invalid":R?Boolean(R):u,"aria-describedby":m,"aria-disabled":t,style:f.NL})}),[_,S,v,oe,$.off,$.on,F,q,le,se,s,ie,ce,l,O,A,R,u,m,t,N]),he=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),h({},e,{ref:n,onMouseDown:(0,a.v0)(e.onMouseDown,I),onTouchStart:(0,a.v0)(e.onTouchStart,I),"data-disabled":(0,a.PB)(t),"data-checked":(0,a.PB)(ie),"data-invalid":(0,a.PB)(u)})}),[ie,t,u]);return{state:{isInvalid:u,isFocused:U,isChecked:ie,isActive:W,isHovered:Z,isIndeterminate:D,isDisabled:t,isReadOnly:l,isRequired:s},getRootProps:de,getCheckboxProps:ue,getInputProps:fe,getLabelProps:he,htmlProps:L}}(h({},j,{isDisabled:O,isChecked:L,onChange:T})),q=F.state,K=F.getInputProps,U=F.getCheckboxProps,$=F.getLabelProps,X=F.getRootProps,Z=i.useMemo((function(){return h({opacity:q.isChecked||q.isIndeterminate?1:0,transform:q.isChecked||q.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:D,color:g},u.icon)}),[g,D,q.isChecked,q.isIndeterminate,u.icon]),z=i.cloneElement(S,{__css:Z,isIndeterminate:q.isIndeterminate,isChecked:q.isChecked});return i.createElement(w,h({__css:u.container,className:(0,a.cx)("chakra-checkbox",y)},X()),i.createElement("input",h({className:"chakra-checkbox__input"},K(R,n))),i.createElement(E,h({__css:u.control,className:"chakra-checkbox__control"},U()),z),C&&i.createElement(l.m$.span,h({className:"chakra-checkbox__label"},$(),{__css:h({marginStart:m},u.label)}),C))}));a.Ts&&(D.displayName="Checkbox")},29:function(e,n,t){function a(e,n,t,a,r,i,o){try{var c=e[i](o),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(a,r)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function c(e){a(o,r,i,c,l,"next",e)}function l(e){a(o,r,i,c,l,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return r}})},2640:function(e,n,t){function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(i.push(a.value),!n||i.length!==n);o=!0);}catch(l){c=!0,r=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw r}}return i}}(e,n)||function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return r}})}}]);