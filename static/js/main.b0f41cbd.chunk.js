(this.webpackJsonpfuncamp=this.webpackJsonpfuncamp||[]).push([[0],{173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(52),s=a.n(l),o=a(12),c=a(53),u={extend:o.c},i={countdown:u.extend("/"),home:u.extend("/home")};Object(c.makeThisModuleAnExecutableRouteLister)(i);var m=Object(o.b)(i),d=m.RouteProvider,p=m.useRoute,h=m.routes,v=a(28),g=a.n(v),f=a(54),E=a(66),N=a(55),b=a.n(N),w=a(56),D=a(57),k=a.n(D),Y=a(58),j=a.n(Y),M=a(59),T=a.n(M),C=(a(74),a(60)),y=a.n(C),z=a(11),O=a(61),x=a.n(O)()((function(e){var t,a=z.Evt.create({days:NaN,hours:NaN,minutes:NaN,seconds:NaN,total:NaN}),n="Europe/Paris",r=e.endtimeYear,l=e.endtimeMonth,s=e.endtimeDate,o=e.endtimeHours;t=y.a.tz([r,l-1,s,o,0,0],n).format();var c=NaN;function u(){a.state=function(e){var t=Date.parse(e)-Date.parse(new Date),a=Math.floor(t/1e3%60),n=Math.floor(t/1e3/60%60),r=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:r,minutes:n,seconds:a}}(t),a.state.total<0&&clearInterval(c)}return u(),z.Evt.merge([a.evtAttach,a.evtChange.evtAttach,a.evtChangeDiff.evtAttach,a.evtDiff.evtAttach]).attach((function(){return a.getHandlers().length+a.evtChange.getHandlers().length+a.evtChangeDiff.getHandlers().length+a.evtDiff.getHandlers().length===1}),(function(){u(),c=setInterval(u,1e3)})),z.Evt.merge([a.evtDetach,a.evtChange.evtDetach,a.evtChangeDiff.evtDetach,a.evtDiff.evtDetach]).attach((function(){return a.getHandlers().length+a.evtChange.getHandlers().length+a.evtChangeDiff.getHandlers().length+a.evtDiff.getHandlers().length===0}),(function(){return clearInterval(c)})),a})),Z=a(62),_=a(63),R=a(64),H=a.n(R),I=Object(o.a)([h.home,h.countdown]),L={"Orl\xe9ans":{countdownTargetDate:{endtimeYear:2020,endtimeMonth:11,endtimeDate:24,endtimeHours:11},eventPageUrl:"https://docs.funcamp.sspcloud.fr/evenements/orlean_24_11_20"},"e-Funcamp":{countdownTargetDate:{endtimeYear:2020,endtimeMonth:12,endtimeDate:15,endtimeHours:9},eventPageUrl:"https://docs.funcamp.sspcloud.fr/evenements/e-funcamp_15_12_20"}},B=function(e){var t=e.route,a=Object(_.a)(H.a),l=Object(E.a)(a,1)[0],s=Object(w.a)(function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(),e.next=3,new Promise((function(e){return setTimeout(e,b.a.transitionDuration)}));case 3:if(!t.aborted){e.next=5;break}return e.abrupt("return");case 5:h.home().push();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[],{executeOnMount:!1,executeOnUpdate:!1}),o=s.execute,c=s.loading,u=Object(n.useCallback)((function(){return window.open("https://docs.funcamp.sspcloud.fr/demarrage_rapide")}),[]),i=Object(n.useCallback)((function(){return window.scrollBy(0,window.innerHeight)}),[]);return r.a.createElement("div",{className:"\n        CountDownAndHomeCastle \n        ".concat("home"===t.name||c?"homepageState":"","\n      ")},r.a.createElement("div",{className:"castle"},"countdown"===t.name&&r.a.createElement("div",{className:"countdown"},r.a.createElement("div",null," ",r.a.createElement("h1",null,"Prochain Bootcamps"),r.a.createElement("div",null,Object.keys(L).map((function(e){return r.a.createElement(U,{countdownTargetDate:L[e].countdownTargetDate,eventPageUrl:L[e].eventPageUrl,eventName:e,key:e})}))))),"home"===t.name&&r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"animate__animated animate__backInDown"},r.a.createElement("img",{src:T.a,alt:"Icarius game logo",className:"js-tilt"})),r.a.createElement("div",{className:"animate__animated animate__backInRight"},r.a.createElement("h1",null,"Une exp\xe9rience vid\xe9oludique d'apprentissage R"),r.a.createElement("h3",null,"L\u2019\xe9pop\xe9e statistico-ludique dont vous \xeates le h\xe9ros / l\u2019h\xe9ro\xefne.")),r.a.createElement("div",{className:"animate__animated animate__backInUp"},r.a.createElement("div",null,r.a.createElement("button",{className:"startGameButton",onClick:u},"Commencer le jeu")),r.a.createElement("div",{className:"animate__animated animate__shakeY animate__delay-2s"},r.a.createElement("button",{className:"slideDownButton",onClick:i}))))),"countdown"===t.name&&r.a.createElement("div",{className:"countdownSidePanel"},r.a.createElement("div",null,r.a.createElement("h1",null,"Le Funcamp R, de la nostalgie, du fun et du R!"),r.a.createElement("h2",null,"...saurez-vous percer les myst\xe8res du royaume de Statis?"),r.a.createElement("div",null,r.a.createElement("button",{onClick:o},"D\xe9couvrir")),r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:"https://github.com/InseeFrLab/funcamp.sspcloud.fr"},r.a.createElement("img",{src:j.a,alt:"InseeFrLab logo"})),r.a.createElement("a",{href:"https://www.tchap.gouv.fr/#/room/#SSPCloudXDpAw6v:agent.finances.tchap.gouv.fr"},r.a.createElement("img",{src:k.a,alt:"Tchap logo"}))))))},U=function(e){var t=e.countdownTargetDate,a=e.eventName,l=e.eventPageUrl,s=Object(n.useMemo)((function(){return x(t)}),[t]);Object(Z.useStatefulEvt)([s]);var o=s.state,c=o.days,u=o.hours,i=o.minutes,m=o.seconds,d=o.total,p=d<0&&Math.abs(d)>288e5,h=Object(n.useCallback)((function(){return window.open(l)}),[l]);return p?null:r.a.createElement("div",{className:"".concat(a," js-tilt"),key:a,onClick:h,style:{cursor:"pointer"}},r.a.createElement("h3",null,a),d<0?r.a.createElement("h2",null,"En cours maintenant"):r.a.createElement(r.a.Fragment,null,0!==c&&r.a.createElement("div",null,r.a.createElement("span",null,c),r.a.createElement("span",null," Jours")),0!==u&&r.a.createElement("div",null,r.a.createElement("span",null,u),r.a.createElement("span",null," heure")),0===c&&r.a.createElement("div",null,r.a.createElement("span",null,i),r.a.createElement("span",null," min")),0===c&&0===u&&r.a.createElement("div",null,r.a.createElement("span",null,m),r.a.createElement("span",null," sec"))))},F=(a(173),a(65)),V=a.n(F),q=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("section",{className:"scheme"},r.a.createElement("div",null,r.a.createElement("h1",null,"Funcamp R"),r.a.createElement("h3",null,"Un jeu et des tutoriels pour apprendre R"),r.a.createElement("p",null,"Le Funcamp R s'adresse avant tout \xe0 celles et ceux qui, petits et grands d\xe9butants en R, souhaitent inscrire leur apprentissage dans une d\xe9marche amusante, o\xf9 des phases de jeu et des phases de pratiques en R alternent. Il a \xe9t\xe9 con\xe7u pour les agents du syst\xe8me statistique public, qui retrouveront dans l'aventure d'icaRius quelques clins d'oeil \xe0 leur environnement professionnel - tous peuvent n\xe9anmoins s'essayer \xe0 ce parcours p\xe9dagogique, m\xeame sans travailler \xe0 l'Insee ou dans un service statistique minist\xe9riel."),r.a.createElement("button",{onClick:Object(n.useCallback)((function(){return window.open("https://docs.funcamp.sspcloud.fr/demarrage_rapide")}),[])},"Acc\xe9der au jeu et aux tutoriels R")),r.a.createElement("iframe",{title:"youtube vieo",width:"560",height:"315",src:"https://www.youtube.com/embed/Quz2CfF0gmo?start=13",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("section",{className:"sep"},r.a.createElement("h1",null,"Petits et grands d\xe9butants en R"),r.a.createElement("p",null,"La composante d\xe9di\xe9e aux techniques statistiques est d\xe9lib\xe8rement tr\xe8s restreinte : il s'agit surtout d'apprendre \xe0 ma\xeetriser le cadre g\xe9n\xe9ral de l'environnement R, d'autres formations plus avanc\xe9es r\xe9pondant aux besoins des statisticiens avertis.")),r.a.createElement("section",{className:"scheme"},r.a.createElement("div",null,r.a.createElement("h1",null,"La documentation"),r.a.createElement("h3",null,"Un espace pour les formateurs et un autre pour les d\xe9veloppeurs"),r.a.createElement("p",null,"Pour les esprits curieux, vous pouvez consulter la documentation qui regroupe des informations compl\xe9mentaires sur le projet (la philosophie du projet, son histoire, ses acteurs... et son possible devenir), un espace d\xe9di\xe9 aux ressouces pour les formateurs (principes p\xe9dagogiques et pr\xe9sentation de la trame suivie) et pour les d\xe9veloppeurs, un ensemble de ressources pour contribuer au d\xe9veloppement du grimoire de tutoriels R et du jeu icaRius."),r.a.createElement("button",{onClick:Object(n.useCallback)((function(){return window.open("https://docs.funcamp.sspcloud.fr/espace-formateur/principes_pedagogiques")}),[])},"Consulter la documentation")),r.a.createElement("img",{src:V.a,alt:"game screenshot"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(174);var G=function(){var e=p();return r.a.createElement(r.a.Fragment,null,I.has(e)&&r.a.createElement(B,{route:e}),"home"===e.name&&r.a.createElement(q,{route:e}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports={transitionDuration:"1500"}},57:function(e,t){e.exports="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ZjZlMTNiZjlkNDA1OTJkNTliYjg4ZDUyMWVmOWE1MGQ4YzY1NzIwYTQyY2RhOTQ5MWRkODkxODlkNzkyYTY4NgpzaXplIDUzMDAK"},58:function(e,t){e.exports="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6M2Y3NWE1NjgzZmEyNDhhNWY2NDk5YjI3ZThiYTBkMmYzYTQyM2MwNmUzNmFmMzk1NjY3OTc4MzVkZThlOTUwNgpzaXplIDI3MTIK"},59:function(e,t){e.exports="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MTkwODQ3YTBjZjY2ODk0YzYxMTQ2ZTA1NTFmN2VmYTRiMGYzMGJhN2U4YTQ1OWY0MzJjY2FlNjIyNmFiZDFlNApzaXplIDc0MzkK"},64:function(e,t,a){e.exports=a.p+"static/media/teleportFx.24905db7.mp3"},65:function(e,t){e.exports="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ZTE0MDE3NTRkZGQ0YWUwYmI3NTBhNjQzM2E2YzM3YTY3ODk2YWVmZTA3ZDQ1NmY2YTBkM2U5ODZiODJmOGQ0NwpzaXplIDk0ODgxMQo="},67:function(e,t,a){e.exports=a(175)}},[[67,1,2]]]);
//# sourceMappingURL=main.b0f41cbd.chunk.js.map