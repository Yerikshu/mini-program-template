module.exports=function(e,t){var s=e.self;e.HTMLElement,e.Element,e.Node,e.localStorage,e.sessionStorage,e.navigator,e.history,e.location,e.performance,e.Image,e.CustomEvent,e.Event,e.requestAnimationFrame,e.cancelAnimationFrame,e.getComputedStyle,e.XMLHttpRequest,e.Worker,e.SharedWorker;(s.webpackChunkcreateApp=s.webpackChunkcreateApp||[]).push([[805],{838:(s,o,n)=>{n.d(o,{default:()=>c});n(562).jquery.compat(),n(985);const a=n(943),l=n(374);function c(){t.body.appendChild(l());const s=a(".nav .title-list li"),o=a(".nav .icon-active"),n=a(".news-list"),c=a("#spin");function i(){c.css("display","none")}function p(){a(n[1]).css("display","none"),c.css("display","block"),o.removeClass("pull-right"),setTimeout((()=>{a(n[0]).css("display","block"),i()}),1e3)}s.on("click",(function(){const e=+a(this).attr("data-tab");10===e?p():11===e&&(a(n[0]).css("display","none"),c.css("display","block"),o.addClass("pull-right"),setTimeout((()=>{a(n[1]).css("display","block"),i()}),1e3))})),p(),e.log=(...e)=>{console.log(...e)}}}}])};