(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"8FJ2":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{}},DxvK:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(){this.progressSpinnerHTML='<mat-progress-spinner mode="determinate" [value]="40"></mat-progress-spinner>\n<mat-progress-spinner mode="indeterminate" color="accent"></mat-progress-spinner>'}ngOnInit(){}}},W5yJ:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return d}));var r=n("KCVW"),a=n("8Y7J"),l=n("Xd0L");class o{constructor(e){this._elementRef=e}}const s=Object(l.E)(o,"primary"),i=new a.p("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});let u=(()=>{class e extends s{constructor(t,n,r,a,l){super(t),this._elementRef=t,this._document=r,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const o=e._diameters;o.has(r.head)||o.set(r.head,new Set([100])),this._fallbackAnimation=n.EDGE||n.TRIDENT,this._noopAnimations="NoopAnimations"===a&&!!l&&!l._forceAnimations,l&&(l.diameter&&(this.diameter=l.diameter),l.strokeWidth&&(this.strokeWidth=l.strokeWidth))}get diameter(){return this._diameter}set diameter(e){this._diameter=Object(r.f)(e),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(e){this._strokeWidth=Object(r.f)(e)}get value(){return"determinate"===this.mode?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,Object(r.f)(e)))}ngOnInit(){const e=this._elementRef.nativeElement;this._styleRoot=function(e,t){if("undefined"!=typeof window){const n=t.head;if(n&&(n.createShadowRoot||n.attachShadow)){const t=e.getRootNode?e.getRootNode():null;if(t instanceof window.ShadowRoot)return t}}return null}(e,this._document)||this._document.head,this._attachStyleNode(),e.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}get _circleRadius(){return(this.diameter-10)/2}get _viewBox(){const e=2*this._circleRadius+this.strokeWidth;return`0 0 ${e} ${e}`}get _strokeCircumference(){return 2*Math.PI*this._circleRadius}get _strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._strokeCircumference:null}get _circleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const t=this._styleRoot,n=this._diameter,r=e._diameters;let a=r.get(t);if(!a||!a.has(n)){const e=this._document.createElement("style");e.setAttribute("mat-spinner-animation",n+""),e.textContent=this._getAnimationText(),t.appendChild(e),a||(a=new Set,r.set(t,a)),a.add(n)}}_getAnimationText(){return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*this._strokeCircumference).replace(/END_VALUE/g,""+.2*this._strokeCircumference).replace(/DIAMETER/g,""+this.diameter)}}return e._diameters=new WeakMap,e})();class m extends u{constructor(e,t,n,r,a){super(e,t,n,r,a),this.mode="indeterminate"}}class d{}},zajI:function(e,t,n){"use strict";var r=n("8Y7J"),a=n("VDRc"),l=n("/q54"),o=n("IP0z"),s=n("W5yJ"),i=n("SVse"),u=(n("Xd0L"),n("cUpR"),n("/HVE")),m=n("omvX"),d=r.tb({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function f(e){return r.Rb(0,[(e()(),r.vb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,(function(e,t){var n=t.component;e(t,0,0,n._circleRadius,"mat-progress-spinner-stroke-rotate-"+n.diameter,n._strokeDashOffset,n._strokeCircumference,n._circleStrokeWidth)}))}function c(e){return r.Rb(0,[(e()(),r.vb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,(function(e,t){var n=t.component;e(t,0,0,n._circleRadius,n._strokeDashOffset,n._strokeCircumference,n._circleStrokeWidth)}))}function p(e){return r.Rb(2,[(e()(),r.vb(0,0,null,null,5,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),r.ub(1,16384,null,0,i.r,[],{ngSwitch:[0,"ngSwitch"]},null),(e()(),r.kb(16777216,null,null,1,null,f)),r.ub(3,278528,null,0,i.s,[r.P,r.L,i.r],{ngSwitchCase:[0,"ngSwitchCase"]},null),(e()(),r.kb(16777216,null,null,1,null,c)),r.ub(5,278528,null,0,i.s,[r.P,r.L,i.r],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(e,t){e(t,1,0,"indeterminate"===t.component.mode),e(t,3,0,!0),e(t,5,0,!1)}),(function(e,t){var n=t.component;e(t,0,0,n.diameter,n.diameter,n._viewBox)}))}var h=n("Rlre"),b=n("rWV4"),g=n("B1UH"),k=n("9s5c");n("DxvK"),n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return v}));var _=r.tb({encapsulation:0,styles:[[""]],data:{}});function v(e){return r.Rb(0,[(e()(),r.vb(0,0,null,null,40,"div",[["class","card"],["fxLayout","column"],["fxLayout.gt-sm","row"]],null,null,null,null,null)),r.ub(1,671744,null,0,a.e,[r.k,l.i,[2,a.m],l.f],{fxLayout:[0,"fxLayout"],"fxLayout.gt-sm":[1,"fxLayout.gt-sm"]},null),(e()(),r.vb(2,0,null,null,10,"div",[["class","p-6"]],null,null,null,null,null)),(e()(),r.vb(3,0,null,null,1,"h2",[["class","title mt-0 mb-4"]],null,null,null,null,null)),(e()(),r.Pb(-1,null,["Preview"])),(e()(),r.vb(5,0,null,null,7,"div",[["fxLayout","column"],["fxLayoutAlign","start center"],["fxLayoutGap","24px"]],null,null,null,null,null)),r.ub(6,671744,null,0,a.e,[r.k,l.i,[2,a.m],l.f],{fxLayout:[0,"fxLayout"]},null),r.ub(7,1720320,null,0,a.f,[r.k,r.y,o.b,l.i,[2,a.l],l.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),r.ub(8,671744,null,0,a.d,[r.k,l.i,[2,a.k],l.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(e()(),r.vb(9,0,null,null,1,"mat-progress-spinner",[["class","mat-progress-spinner"],["mode","determinate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0],[1,"mode",0]],null,null,p,d)),r.ub(10,114688,null,0,s.b,[r.k,u.a,[2,i.d],[2,m.a],s.a],{mode:[0,"mode"],value:[1,"value"]},null),(e()(),r.vb(11,0,null,null,1,"mat-progress-spinner",[["class","mat-progress-spinner"],["color","accent"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0],[1,"mode",0]],null,null,p,d)),r.ub(12,114688,null,0,s.b,[r.k,u.a,[2,i.d],[2,m.a],s.a],{color:[0,"color"],mode:[1,"mode"]},null),(e()(),r.vb(13,0,null,null,27,"div",[["class","border-l"],["fxFlex",""]],null,null,null,null,null)),r.ub(14,671744,null,0,a.b,[r.k,l.i,l.e,a.j,l.f],{fxFlex:[0,"fxFlex"]},null),(e()(),r.vb(15,0,null,null,4,"div",[["class","p-6"]],null,null,null,null,null)),(e()(),r.vb(16,0,null,null,1,"h2",[["class","title mt-0 mb-4"]],null,null,null,null,null)),(e()(),r.Pb(-1,null,["Progress Spinner"])),(e()(),r.vb(18,0,null,null,1,"h4",[["class","body-2 text-secondary m-0"]],null,null,null,null,null)),(e()(),r.Pb(-1,null,["<mat-progress-spinner>"])),(e()(),r.vb(20,0,null,null,20,"mat-tab-group",[["class","vex-tabs mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,h.d,h.b)),r.ub(21,3325952,null,1,b.f,[r.k,r.h,[2,b.a],[2,m.a]],null,null),r.Nb(603979776,1,{_tabs:1}),(e()(),r.vb(23,16777216,null,null,10,"mat-tab",[["label","DESCRIPTION"]],null,null,null,h.f,h.a)),r.ub(24,770048,[[1,4]],2,b.c,[r.P],{textLabel:[0,"textLabel"]},null),r.Nb(603979776,2,{templateLabel:0}),r.Nb(335544320,3,{_explicitContent:0}),(e()(),r.vb(27,0,null,0,6,"p",[["class","p-6"]],null,null,null,null,null)),(e()(),r.Pb(-1,null,[" A single visual indicator should be used to represent each type of operation. For example, a refresh operation should display either a refresh bar or an activity circle, but not both. "])),(e()(),r.vb(29,0,null,null,0,"br",[],null,null,null,null,null)),(e()(),r.vb(30,0,null,null,0,"br",[],null,null,null,null,null)),(e()(),r.Pb(-1,null,["Determinate indicators display how long an operation will take. "])),(e()(),r.vb(32,0,null,null,0,"br",[],null,null,null,null,null)),(e()(),r.Pb(-1,null,["Indeterminate indicators visualize an unspecified wait time. "])),(e()(),r.vb(34,16777216,null,null,6,"mat-tab",[["label","SOURCE CODE"]],null,null,null,h.f,h.a)),r.ub(35,770048,[[1,4]],2,b.c,[r.P],{textLabel:[0,"textLabel"]},null),r.Nb(603979776,4,{templateLabel:0}),r.Nb(335544320,5,{_explicitContent:0}),(e()(),r.vb(38,0,null,0,2,"pre",[],null,null,null,null,null)),(e()(),r.vb(39,0,null,null,1,"code",[],[[2,"hljs",null],[8,"innerHTML",1]],null,null,null,null)),r.ub(40,540672,null,0,g.a,[k.a,r.y],{code:[0,"code"]},null)],(function(e,t){var n=t.component;e(t,1,0,"column","row"),e(t,6,0,"column"),e(t,7,0,"24px"),e(t,8,0,"start center"),e(t,10,0,"determinate",80),e(t,12,0,"accent","indeterminate"),e(t,14,0,""),e(t,24,0,"DESCRIPTION"),e(t,35,0,"SOURCE CODE"),e(t,40,0,n.progressSpinnerHTML)}),(function(e,t){e(t,9,0,r.Hb(t,10)._noopAnimations,r.Hb(t,10).diameter,r.Hb(t,10).diameter,"determinate"===r.Hb(t,10).mode?0:null,"determinate"===r.Hb(t,10).mode?100:null,"determinate"===r.Hb(t,10).mode?r.Hb(t,10).value:null,r.Hb(t,10).mode),e(t,11,0,r.Hb(t,12)._noopAnimations,r.Hb(t,12).diameter,r.Hb(t,12).diameter,"determinate"===r.Hb(t,12).mode?0:null,"determinate"===r.Hb(t,12).mode?100:null,"determinate"===r.Hb(t,12).mode?r.Hb(t,12).value:null,r.Hb(t,12).mode),e(t,20,0,r.Hb(t,21).dynamicHeight,"below"===r.Hb(t,21).headerPosition),e(t,39,0,!0,r.Hb(t,40).highlightedCode)}))}}}]);