(this["webpackJsonpreact-redux-blogapp"]=this["webpackJsonpreact-redux-blogapp"]||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(22),r=a.n(n),i=(a(47),a(48),a(11)),o=a.n(i),l=a(16),d="GET_POST",u="CREATE_POST",p="UPDATE_POST",j="DELETE_POST",b="GET_POSTS",m=a(17),O=a.n(m),h=function(e){return function(){var t=Object(l.a)(o.a.mark((function t(a){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e));case 2:c=t.sent,a({type:d,payload:c.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=a(4),f=a(5),v=a(39),N=a.n(v),g=a(1),y=function(e){var t=e.postItem,a=Object(x.b)();return Object(g.jsx)("div",{className:"col-lg-3 col-md-6 mb-4",children:Object(g.jsxs)("div",{className:"card custom-card",children:[Object(g.jsx)("img",{src:"https://source.unsplash.com/collection/".concat(t.id,"/1600x900"),alt:t.title,className:"card-img-top"}),Object(g.jsx)(f.b,{to:"/updatePost/".concat(t.id),className:"btn btn-danger btn-edit",children:Object(g.jsx)("span",{class:"material-icons",children:"edit"})}),Object(g.jsx)("button",{className:"btn btn-danger btn-delete",onClick:function(){return a((e=t.id,function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.delete("https://jsonplaceholder.typicode.com/posts/".concat(e));case 2:a({type:j,payload:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(g.jsx)("span",{class:"material-icons",children:"delete_outline"})}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("h6",{className:"text-secondary",children:t.title}),Object(g.jsx)(N.a,{text:t.body,length:"100"})]}),Object(g.jsx)("div",{className:"card-footer",children:Object(g.jsxs)(f.b,{to:"/post/".concat(t.id),className:"btn btn-primary",children:[Object(g.jsx)("span",{className:"mb-1",children:" read more"}),Object(g.jsx)("span",{class:"material-icons",children:"keyboard_arrow_right"})]})})]})})},q=function(){var e=Object(x.b)();Object(c.useEffect)((function(){e(function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/posts");case 2:a=e.sent,t({type:b,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(x.c)((function(e){return e.post.posts}));return Object(g.jsx)("div",{className:"row",children:t.map((function(e){return Object(g.jsx)(y,{postItem:e})}))})},P=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"py-4",children:Object(g.jsx)(q,{})})})},w=function(){return Object(g.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(f.b,{className:"navbar-brand",to:"/",children:"Redux Posts"}),Object(g.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(g.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(g.jsx)("li",{className:"nav-item active",children:Object(g.jsx)(f.b,{className:"nav-link",to:"/",children:"Home"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(f.b,{className:"nav-link",children:"Posts"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(f.b,{className:"nav-link",children:"Contact"})})]})}),Object(g.jsx)("div",{className:"text-end",children:Object(g.jsx)(f.b,{to:"/addPost",className:"btn btn-dark",children:"Add Posts"})})]})})},E=a(3),S=a(13),T=a(40),k=a(42),A=a(12),C={posts:[],post:null},_=Object(S.combineReducers)({post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case b:return Object(A.a)(Object(A.a)({},e),{},{posts:c});case u:return console.log(c),Object(A.a)(Object(A.a)({},e),{},{posts:[c].concat(Object(k.a)(e.posts))});case d:return Object(A.a)(Object(A.a)({},e),{},{post:c});case p:return Object(A.a)(Object(A.a)({},e),{},{posts:e.posts.map((function(e){return e.id==c.id?c:e}))});case j:return Object(A.a)(Object(A.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=c}))});default:return e}}}),D=a(41),L=Object(S.createStore)(_,Object(T.composeWithDevTools)(Object(S.applyMiddleware)(D.a))),I=a(15),B=(a(77),function(){var e=Object(E.f)(),t=Object(x.b)(),a=Object(c.useState)(""),s=Object(I.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)(""),d=Object(I.a)(i,2),p=d[0],j=d[1];return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"py-4",children:Object(g.jsxs)("div",{className:"card shadow",children:[Object(g.jsx)("div",{className:"card-header",children:"Add A Post"}),Object(g.jsx)("div",{className:"card-body",children:Object(g.jsxs)("form",{onSubmit:function(a){var c;a.preventDefault(),t((c={title:n,body:p},function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("https://jsonplaceholder.typicode.com/posts",c);case 2:a=e.sent,t({type:u,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e.push("/")},children:[Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Post Title",value:n,onChange:function(e){return r(e.target.value)}})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("textarea",{rows:"5",className:"form-control form-control-lg",placeholder:"Enter Post Body Text",value:p,onChange:function(e){return j(e.target.value)}})}),Object(g.jsx)("button",{className:"btn btn-primary btn-lg",children:"Add New Post"})]})})]})})})}),F=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.post.post})),a=Object(E.g)().id;Object(c.useEffect)((function(){s()}),[]);var s=function(){e(h(a))};return t?Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:"https://source.unsplash.com/collection/".concat(t.id,"/1920x700"),alt:t.title,className:"img-fluid"}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"py-5",children:[Object(g.jsx)("h1",{className:"display-4 mb-3",children:t.title}),Object(g.jsx)("p",{className:"lead",children:t.body}),Object(g.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique dicta, facere iusto non voluptatem assumenda. Adipisci molestias modi assumenda numquam animi quo odio quis, ad eligendi optio cumque atque earum et, velit doloribus fugit? Quam soluta earum architecto, cupiditate adipisci tempora doloribus! Asperiores quaerat ipsam libero optio distinctio excepturi."}),Object(g.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique dicta, facere iusto non voluptatem assumenda. Adipisci molestias modi assumenda numquam animi quo odio quis, ad eligendi optio cumque atque earum et, velit doloribus fugit? Quam soluta earum architecto, cupiditate adipisci tempora doloribus! Asperiores quaerat ipsam libero optio distinctio excepturi."}),Object(g.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloremque ab et perferendis, earum dolores quos iure provident labore id eum recusandae harum dolor iste consequuntur veniam, adipisci deleniti molestias voluptates quasi porro! Illo reiciendis est adipisci consequatur perspiciatis sapiente fugit esse eum, rem nostrum dolor officiis repellendus dolores aliquid quaerat aut dolore, explicabo labore similique deleniti? Adipisci ipsa error excepturi, quibusdam, unde repellat ratione iusto labore deleniti cumque animi! Eveniet ex voluptatum repudiandae vel rerum reprehenderit accusamus velit nam iusto, cum ut amet dignissimos corrupti quod consectetur unde temporibus saepe tenetur totam. Nulla ipsam aut temporibus! Officia, vero perferendis."})]})})]}):Object(g.jsx)("h1",{children:"loading.."})},R=function(){var e=Object(E.f)(),t=Object(x.b)(),a=Object(x.c)((function(e){return e.post.post})),s=Object(E.g)().id,n=Object(c.useState)(""),r=Object(I.a)(n,2),i=r[0],d=r[1],u=Object(c.useState)(""),j=Object(I.a)(u,2),b=j[0],m=j[1];Object(c.useEffect)((function(){f()}),[]),Object(c.useEffect)((function(){a&&(d(a.title),m(a.body))}),[a]);var f=function(){t(h(s))};return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"py-4",children:Object(g.jsxs)("div",{className:"card shadow",children:[Object(g.jsx)("div",{className:"card-header",children:"Update A Post"}),Object(g.jsx)("div",{className:"card-body",children:Object(g.jsxs)("form",{onSubmit:function(c){c.preventDefault();var s={id:a.id,title:i,body:b};t(function(e){return function(){var t=Object(l.a)(o.a.mark((function t(a){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.put("https://jsonplaceholder.typicode.com/posts/".concat(e.id),e);case 2:c=t.sent,a({type:p,payload:c.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(s)),e.push("/")},children:[Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Post Title",value:i,onChange:function(e){return d(e.target.value)}})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("textarea",{rows:"5",className:"form-control form-control-lg",placeholder:"Enter Post Body Text",value:b,onChange:function(e){return m(e.target.value)}})}),Object(g.jsx)("button",{className:"btn btn-primary btn-lg",children:"Update Post"})]})})]})})})};var U=function(){return Object(g.jsx)(x.a,{store:L,children:Object(g.jsx)(f.a,{basename:"/",children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(w,{}),Object(g.jsxs)(E.c,{children:[Object(g.jsx)(E.a,{exact:!0,path:"/",component:P}),Object(g.jsx)(E.a,{exact:!0,path:"/addPost",component:B}),Object(g.jsx)(E.a,{exact:!0,path:"/post/:id",component:F}),Object(g.jsx)(E.a,{exact:!0,path:"/updatePost/:id",component:R})]})]})})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,87)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root")),G()}},[[86,1,2]]]);
//# sourceMappingURL=main.e94e6d83.chunk.js.map