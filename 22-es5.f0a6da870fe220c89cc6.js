!function(){function t(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function o(t,o){for(var n=0;n<o.length;n++){var a=o[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Q2Bp:function(n,a,e){"use strict";e.r(a),e.d(a,"ion_backdrop",(function(){return s}));var r=e("ePDZ"),i=e("ws0j"),c=e("rxGk"),s=function(){function n(t){!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,n),Object(r.q)(this,t),this.ionBackdropTap=Object(r.i)(this,"ionBackdropTap",7),this.blocker=c.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}var a,e,s;return a=n,(e=[{key:"connectedCallback",value:function(){this.stopPropagation&&this.blocker.block()}},{key:"disconnectedCallback",value:function(){this.blocker.unblock()}},{key:"onMouseDown",value:function(t){this.emitTap(t)}},{key:"emitTap",value:function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}},{key:"render",value:function(){var o,n=Object(i.b)(this);return Object(r.l)(r.c,{tabindex:"-1",class:(o={},t(o,n,!0),t(o,"backdrop-hide",!this.visible),t(o,"backdrop-no-tappable",!this.tappable),o)})}}])&&o(a.prototype,e),s&&o(a,s),n}();s.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}])}();