(this["webpackJsonpmy-react-website"]=this["webpackJsonpmy-react-website"]||[]).push([[0],{13:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(11),r=a.n(c),o=(a(18),a(2)),s=a(3),i=a(5),m=a(4);var u=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"/index.html"},"Remote-Upload"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/index.php"},"Uploader")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Link")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Link"))))))},d=a(6),p=0,h=1,b=2,v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).chechLogin=function(){fetch("https://remote-upload.herokuapp.com/",{redirect:"manual",credentials:"include"}).then((function(e){"opaqueredirect"===e.type?(console.log("notLogin"),n.setState({login:h})):n.setState({login:b})}),console.log)},n.handleClick=function(){var e=window.screen.height>600?(window.screen.height-600)/2:0,t=window.screen.width>600?(window.screen.width-600)/2:0,a=window.open("https://remote-upload.herokuapp.com/","","toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=599,height=600,top=".concat(e,",left=").concat(t)),l=setInterval((function(){a.closed&&(clearInterval(l),n.chechLogin())}),100)},n.loginPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.show,a=void 0!==t&&t;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-backdrop show"},l.a.createElement("div",{className:"align-items-center ".concat(a?"d-none":"d-flex"," justify-content-center h-100")},l.a.createElement("div",{className:"spinner-border text-light"}))),l.a.createElement("div",{className:"modal fade d-block ".concat(a?"show":""),style:{zIndex:a?"1040":"-1"}},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("form",{className:"form-signin text-center"},l.a.createElement("svg",{className:"mb-3",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"135",height:"135"},l.a.createElement("path",{fill:"#bbdefb",d:"M24,5c10.477,0,19,8.523,19,19s-8.523,19-19,19S5,34.477,5,24S13.523,5,24,5z"}),l.a.createElement("path",{fill:"#3f51b5",d:"M32 24L20 14 20 34z"}),l.a.createElement("path",{fill:"#3f51b5",d:"M5 21H22V27H5z"})),l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Login"),l.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",disabled:!0}),l.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",disabled:!0}),l.a.createElement("div",{className:"position-relative"},l.a.createElement("div",{className:"bs-tooltip-top show tooltip w-100",style:{top:"calc(-0.8rem - .5rem - 1.5em)"}},l.a.createElement("div",{className:"arrow",style:{left:"calc(50% - 0.4rem)"}}),l.a.createElement("div",{className:"tooltip-inner ml-auto mr-auto",style:{width:"fit-content"}},"Not available now"))),l.a.createElement("div",{className:"btn btn-lg btn-primary btn-block disabled"},l.a.createElement("span",{className:"pl-2 pr-2"},"Sign in")),l.a.createElement("div",{className:"mt-1 mb-1"},"- OR -"),l.a.createElement("div",{className:"btn btn-block btn-lg btn-outline-primary mb-5",onClick:n.handleClick},l.a.createElement("img",{className:"navbar-toggler-icon",alt:"",src:"https://img.icons8.com/color/48/000000/google-logo.png"}),l.a.createElement("span",{className:"pl-2 pr-2"},"Sign in"))))))))},n.state={login:p},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.chechLogin()}},{key:"render",value:function(){var e;return(e={},Object(d.a)(e,p,this.loginPage()),Object(d.a)(e,h,this.loginPage({show:!0})),Object(d.a)(e,b,this.props.children),e)[this.state.login]}}]),a}(n.Component),f=a(1),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).clickHandler=function(){n.state.show&&(n.setState({show:!1}),setTimeout(n.props.alertDissmissHandler,150))},n.getAlertType=function(){return{error:"alert-danger",warning:"alert-warning",success:"alert-success"}[n.props.type]||"alert-warning"},n.state={show:!0,idOfSettimeout:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){if("error"!==this.props.type){var e=setTimeout(this.clickHandler,3e3);this.setState({idOfSettimeout:e})}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.idOfSettimeout)}},{key:"render",value:function(){var e=this.state.show,t=this.props,a=t.msg,n=t.type;return l.a.createElement("div",{className:"alert ".concat(this.getAlertType()," alert-dismissible fade ").concat(e?"show":"")},l.a.createElement("button",{type:"button",className:"close",onClick:this.clickHandler},"\xd7"),l.a.createElement("strong",null,n||"warning",": "),a)}}]),a}(n.Component),E=a(7),w=a(12);var y=function(e){var t=Object(n.useState)(e),a=Object(f.a)(t,2),l=a[0],c=a[1];return[l,{value:l,onChange:function(e){c(e.target.value)}},function(){c(e)},c]};var N=function(){var e=y(""),t=Object(f.a)(e,3),a=t[0],l=t[1],c=t[2],r=y(""),o=Object(f.a)(r,4),s=o[0],i=o[1],m=o[2],u=o[3],d=Object(n.useState)([]),p=Object(f.a)(d,2),h=p[0],b=p[1],v=Object(n.useState)({}),g=Object(f.a)(v,2),N=g[0],k=g[1],O=function(e){fetch("https://remote-upload.herokuapp.com/?list",{credentials:"include"}).then((function(e){return e.json()})).then((function(t){console.log(t),e&&e(Object(w.a)({},t))}),(function(e){console.log(e)}))};return Object(n.useEffect)((function(){var e=/https?:\/\/.+[/]([^/?]+).*/.exec(a)||[],t=decodeURIComponent(e[1]||"");u(t)}),[a,u]),Object(n.useEffect)((function(){O(k);var e=setInterval(O,3e3,k);return function(){clearInterval(e)}}),[]),[h,N,l,i,function(){""!==a&&""!==s?(fetch("https://remote-upload.herokuapp.com/",{body:new URLSearchParams({url:a,name:s}).toString(),method:"POST",credentials:"include",headers:{"Content-type":"application/x-www-form-urlencoded"}}).then((function(e){b((function(e){return[].concat(Object(E.a)(e),[{type:"success",key:(new Date).getTime()+""+e.length,msg:s+" add into upload queue."}])})),O(k)}),(function(e){b((function(e){return[].concat(Object(E.a)(e),[{type:"error",key:(new Date).getTime()+""+e.length,msg:"An error occurred."}])})),console.log(e)})),c(),m()):b((function(e){return[].concat(Object(E.a)(e),[{key:(new Date).getTime()+""+e.length,msg:"Please fill in all required fields."}])}))},function(e){b((function(t){var a=t.findIndex((function(t){return t.key===e}));return[].concat(Object(E.a)(t.slice(0,a)),Object(E.a)(t.slice(a+1)))}))}]};var k=function(){var e=N(),t=Object(f.a)(e,6),a=t[0],n=t[1],c=t[2],r=t[3],o=t[4],s=t[5];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"alertBox",className:"floating_alert"},a.map((function(e,t){return l.a.createElement(g,Object.assign({alertDissmissHandler:function(){s(e.key)}},e))}))),l.a.createElement("div",{className:"container vh-100 pt-4"},l.a.createElement("form",{action:"",method:"get",id:"form"},l.a.createElement("div",{className:"form-row pt-2",style:{overflow:"auto"}},l.a.createElement("div",{className:"col-md-4 col-sm-6 col-12"},l.a.createElement("input",Object.assign({type:"text",className:"form-control mb-2 mr-sm-2",placeholder:"url"},c))),l.a.createElement("div",{className:"col-md-2 col-sm-4 col-8"},l.a.createElement("input",Object.assign({type:"text",className:"form-control mb-2 mr-sm-2",placeholder:"name"},r))),l.a.createElement("div",{className:"col-md-1 col-sm-2 col-4"},l.a.createElement("input",{onClick:o,type:"button",className:"btn btn-primary mb-2",value:"Submit"})))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"60%"}},"Name"),l.a.createElement("th",{style:{width:"40%"}},"Progress"))),l.a.createElement("tbody",{id:"list"},Object.keys(n).map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("td",null,e),l.a.createElement("td",null,n[e],"%"))})))))))},O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{className:"jumbotron text-center mb-0"},l.a.createElement("h1",null,"Remote-Upload.HerokuApp.Com"),l.a.createElement("p",null,"Upload everything to your Google Drive")),l.a.createElement(v,null,l.a.createElement(k,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.f7144d62.chunk.js.map