(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/img14.d3ff07a0.png"},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=(a(15),a(6)),i=a(1),s=a(2),u=a(4),h=a(3),m=a(5),p=(a(16),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.props.title),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.url,alt:""}),r.a.createElement("h2",null,this.props.title),r.a.createElement("p",null,"Author : ",r.a.createElement("strong",null,this.props.author)),r.a.createElement("a",{href:this.props.info,className:"button"},"Read more"))}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={searchInput:"",searchedBook:[]},a.handleChange=function(e){a.setState({searchInput:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(a.state.searchInput)).then(function(e){e.json().then(function(e){console.log(e);for(var t=Object(c.a)({},a.state),n=0;n<e.items.length;n++)t.searchedBook.push({title:e.items[n].volumeInfo.title,author:e.items[n].volumeInfo.authors,info:e.items[n].volumeInfo.infoLink,url:e.items[n].volumeInfo.imageLinks.thumbnail});a.setState({searchedBook:a.state.searchedBook})})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.searchedBook.map(function(e,t){return r.a.createElement(p,{book:e,key:t,title:e.title,author:e.author,info:e.info,url:e.url})});return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,style:{display:"inline-block"},className:"col-4"},r.a.createElement("input",{type:"text",placeholder:"search book by title",onChange:this.handleChange}),r.a.createElement("button",{className:"btnSearch",type:"submit"},"Search")),e)}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleDetails=function(){a.props.handleDetailsClick()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{onClick:this.handleDetails,src:this.props.bookCover,alt:"cover"}))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"inline-block"},className:"col-lg-3 col-md-2 col-sm-1 col-xs-1"},r.a.createElement(d,{bookCover:this.props.book,handleDetailsClick:this.props.onDetails}))}}]),t}(n.Component),v=["9780721451039","9781595669841","9780448439143","9780618732784","9781842709436","9781419401091","9781603576710","9780545757195","9781770938335","9780307304278","9781405234986","9780340698303"],k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:this.props.current.cover.large,alt:""}),r.a.createElement("h3",null,this.props.current.title),r.a.createElement("br",null),r.a.createElement("h5",null,"Author:"),r.a.createElement("a",{href:this.props.current.authors[0].url}," ",this.props.current.authors[0].name),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",null,"publish date:"),r.a.createElement("h6",null,this.props.current.publish_date),r.a.createElement("br",null),r.a.createElement("a",{href:this.props.current.ebooks[0].preview_url,className:"button"},"Preview"),r.a.createElement("a",{href:this.props.current.ebooks[0].borrow_url,className:"button"},"Borrow"))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={faves:[],book1:"",booksCover:[],allBooks:[],current:{},active:!1},a.handleDetailsClick=function(e){fetch("https://openlibrary.org/api/books?bibkeys=ISBN:"+e+"&jscmd=data&format=json").then(function(t){t.json().then(function(t){a.setState({current:t["ISBN:".concat(e)]}),a.setState({active:!0})})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.map(function(t,a){fetch("https://openlibrary.org/api/books?bibkeys=ISBN:"+t+"&jscmd=data&format=json").then(function(a){a.json().then(function(a){var n=Object(c.a)({},e.state);return n.allBooks.push({ISBN:t,data:a["ISBN:".concat(t)]}),e.setState(function(e){return{allBooks:n.allBooks}})})})})}},{key:"render",value:function(){var e,t=this,n=this.state.allBooks.map(function(e,a){return r.a.createElement(f,{book:e.data.cover.medium,key:a,onDetails:function(){t.handleDetailsClick(e.ISBN)}})});return e=this.state.active?r.a.createElement(k,{current:this.state.current}):n,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"Books are a uniquely portable magic."),r.a.createElement("div",null,r.a.createElement("img",{src:a(17),alt:""}))),r.a.createElement("div",null,r.a.createElement(b,null)),r.a.createElement("div",{className:"book-library"},e),r.a.createElement("footer",null,r.a.createElement("div",{className:"col-1",style:{display:"inline-block"}},r.a.createElement("svg",{id:"i-home",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},r.a.createElement("path",{d:"M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z"}))),r.a.createElement("div",{className:"col-1",style:{display:"inline-block"}},r.a.createElement("svg",{id:"i-twitter",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"32",height:"32"},r.a.createElement("path",{"stroke-width":"0",fill:"currentColor",d:"M60 16 L54 17 L58 12 L51 14 C42 4 28 15 32 24 C16 24 8 12 8 12 C8 12 2 21 12 28 L6 26 C6 32 10 36 17 38 L10 38 C14 46 21 46 21 46 C21 46 15 51 4 51 C37 67 57 37 54 21 Z"}))),r.a.createElement("div",{className:"col-1",style:{display:"inline-block"}}," ",r.a.createElement("svg",{id:"i-github",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"32",height:"32"},r.a.createElement("path",{"stroke-width":"0",fill:"currentColor",d:"M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.9e95d9ab.chunk.js.map