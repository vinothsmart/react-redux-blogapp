(this["webpackJsonpreact-redux-blogapp"]=this["webpackJsonpreact-redux-blogapp"]||[]).push([[0],{35:function(e,t,i){},36:function(e,t,i){},54:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),c=i(18),n=i.n(c),o=(i(35),i(36),"GET_POST"),r="CREATE_POST",u="UPDATE_POST",d="DELETE_POST",l=function(e){return{type:o,payload:e}},m=i(4),p=i(9),b=i(27),j=i.n(b),v=i(1),O=function(e){var t=e.postItem,i=Object(m.b)();return Object(v.jsx)("div",{className:"col-lg-3 col-md-6 mb-4",children:Object(v.jsxs)("div",{className:"card custom-card",children:[Object(v.jsx)("img",{src:"https://source.unsplash.com/collection/".concat(t.id,"/1600x900"),alt:t.title,className:"card-img-top"}),Object(v.jsx)(p.b,{to:"/updatePost/".concat(t.id),className:"btn btn-danger btn-edit",children:Object(v.jsx)("span",{class:"material-icons",children:"edit"})}),Object(v.jsx)("button",{className:"btn btn-danger btn-delete",onClick:function(){return i((e=t.id,{type:d,payload:e}));var e},children:Object(v.jsx)("span",{class:"material-icons",children:"delete_outline"})}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h6",{className:"text-secondary",children:t.title}),Object(v.jsx)(j.a,{text:t.body,length:"100"})]}),Object(v.jsx)("div",{className:"card-footer",children:Object(v.jsxs)(p.b,{to:"/post/".concat(t.id),className:"btn btn-primary",children:[Object(v.jsx)("span",{className:"mb-1",children:" read more"}),Object(v.jsx)("span",{class:"material-icons",children:"keyboard_arrow_right"})]})})]})})},h=function(){var e=Object(m.c)((function(e){return e.post.posts}));return Object(v.jsx)("div",{className:"row",children:e.map((function(e){return Object(v.jsx)(O,{postItem:e})}))})},x=function(){return Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"py-4",children:Object(v.jsx)(h,{})})})},f=function(){return Object(v.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(p.b,{className:"navbar-brand",to:"/",children:"Redux Posts"}),Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(v.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(v.jsx)("li",{className:"nav-item active",children:Object(v.jsx)("a",{className:"nav-link",href:"!#",children:"Home"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("a",{className:"nav-link",href:"!#",children:"Posts"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("a",{className:"nav-link",href:"!#",children:"Contact"})})]})}),Object(v.jsx)("div",{className:"text-end",children:Object(v.jsx)(p.b,{to:"/addPost",className:"btn btn-dark",children:"Add Posts"})})]})})},q=i(3),g=i(12),N=i(28),y=i(30),P=i(10),I={posts:[{userId:1,id:1,title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{userId:1,id:2,title:"qui est esse",body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{userId:1,id:3,title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{userId:1,id:4,title:"eum et est occaecati",body:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{userId:1,id:5,title:"nesciunt quas odio",body:"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"},{userId:1,id:6,title:"dolorem eum magni eos aperiam quia",body:"ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"},{userId:1,id:7,title:"magnam facilis autem",body:"dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"},{userId:1,id:8,title:"dolorem dolore est ipsam",body:"dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"},{userId:1,id:9,title:"nesciunt iure omnis dolorem tempora et accusantium",body:"consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"},{userId:1,id:10,title:"optio molestias id quia eum",body:"quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"},{userId:2,id:11,title:"et ea vero quia laudantium autem",body:"delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"},{userId:2,id:12,title:"in quibusdam tempore odit est dolorem",body:"itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"}],post:null},E=Object(g.combineReducers)({post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,i=t.type,a=t.payload;switch(i){case r:return console.log(a),Object(P.a)(Object(P.a)({},e),{},{posts:[a].concat(Object(y.a)(e.posts))});case o:return Object(P.a)(Object(P.a)({},e),{},{post:e.posts.find((function(e){return e.id==a}))});case u:return Object(P.a)(Object(P.a)({},e),{},{posts:e.posts.map((function(e){return e.id==a.id?a:e}))});case d:return Object(P.a)(Object(P.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=a}))});default:return e}}}),S=Object(g.createStore)(E,Object(N.composeWithDevTools)()),T=i(13),A=i(29),C=i.n(A),k=function(){var e=Object(q.f)(),t=Object(m.b)(),i=Object(a.useState)(""),s=Object(T.a)(i,2),c=s[0],n=s[1],o=Object(a.useState)(""),u=Object(T.a)(o,2),d=u[0],l=u[1];return Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"py-4",children:Object(v.jsxs)("div",{className:"card shadow",children:[Object(v.jsx)("div",{className:"card-header",children:"Add A Post"}),Object(v.jsx)("div",{className:"card-body",children:Object(v.jsxs)("form",{onSubmit:function(i){i.preventDefault();var a={id:C.a.generate(),title:c,body:d};t({type:r,payload:a}),e.push("/")},children:[Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Post Title",value:c,onChange:function(e){return n(e.target.value)}})}),Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("textarea",{rows:"5",className:"form-control form-control-lg",placeholder:"Enter Post Body Text",value:d,onChange:function(e){return l(e.target.value)}})}),Object(v.jsx)("button",{className:"btn btn-primary btn-lg",children:"Add New Post"})]})})]})})})},w=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.post.post})),i=Object(q.g)().id;Object(a.useEffect)((function(){s()}),[]);var s=function(){e(l(i))};return t?Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:"https://source.unsplash.com/collection/".concat(t.id,"/1920x700"),alt:t.title,className:"img-fluid"}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"py-5",children:[Object(v.jsx)("h1",{className:"display-4 mb-3",children:t.title}),Object(v.jsx)("p",{className:"lead",children:t.body}),Object(v.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique dicta, facere iusto non voluptatem assumenda. Adipisci molestias modi assumenda numquam animi quo odio quis, ad eligendi optio cumque atque earum et, velit doloribus fugit? Quam soluta earum architecto, cupiditate adipisci tempora doloribus! Asperiores quaerat ipsam libero optio distinctio excepturi."}),Object(v.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique dicta, facere iusto non voluptatem assumenda. Adipisci molestias modi assumenda numquam animi quo odio quis, ad eligendi optio cumque atque earum et, velit doloribus fugit? Quam soluta earum architecto, cupiditate adipisci tempora doloribus! Asperiores quaerat ipsam libero optio distinctio excepturi."}),Object(v.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloremque ab et perferendis, earum dolores quos iure provident labore id eum recusandae harum dolor iste consequuntur veniam, adipisci deleniti molestias voluptates quasi porro! Illo reiciendis est adipisci consequatur perspiciatis sapiente fugit esse eum, rem nostrum dolor officiis repellendus dolores aliquid quaerat aut dolore, explicabo labore similique deleniti? Adipisci ipsa error excepturi, quibusdam, unde repellat ratione iusto labore deleniti cumque animi! Eveniet ex voluptatum repudiandae vel rerum reprehenderit accusamus velit nam iusto, cum ut amet dignissimos corrupti quod consectetur unde temporibus saepe tenetur totam. Nulla ipsam aut temporibus! Officia, vero perferendis."})]})})]}):Object(v.jsx)("h1",{children:"loading.."})},_=function(){var e=Object(q.f)(),t=Object(m.b)(),i=Object(m.c)((function(e){return e.post.post})),s=Object(q.g)().id,c=Object(a.useState)(""),n=Object(T.a)(c,2),o=n[0],r=n[1],d=Object(a.useState)(""),p=Object(T.a)(d,2),b=p[0],j=p[1];Object(a.useEffect)((function(){O()}),[]),Object(a.useEffect)((function(){i&&(r(i.title),j(i.body))}),[i]);var O=function(){t(l(s))};return Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"py-4",children:Object(v.jsxs)("div",{className:"card shadow",children:[Object(v.jsx)("div",{className:"card-header",children:"Update A Post"}),Object(v.jsx)("div",{className:"card-body",children:Object(v.jsxs)("form",{onSubmit:function(a){a.preventDefault();var s={id:i.id,title:o,body:b};t(function(e){return{type:u,payload:e}}(s)),e.push("/")},children:[Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Post Title",value:o,onChange:function(e){return r(e.target.value)}})}),Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("textarea",{rows:"5",className:"form-control form-control-lg",placeholder:"Enter Post Body Text",value:b,onChange:function(e){return j(e.target.value)}})}),Object(v.jsx)("button",{className:"btn btn-primary btn-lg",children:"Update Post"})]})})]})})})};var D=function(){return Object(v.jsx)(m.a,{store:S,children:Object(v.jsx)(p.a,{basename:"/",children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(f,{}),Object(v.jsxs)(q.c,{children:[Object(v.jsx)(q.a,{exact:!0,path:"/",component:x}),Object(v.jsx)(q.a,{exact:!0,path:"/addPost",component:k}),Object(v.jsx)(q.a,{exact:!0,path:"/post/:id",component:w}),Object(v.jsx)(q.a,{exact:!0,path:"/updatePost/:id",component:_})]})]})})})},L=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,55)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),a(e),s(e),c(e),n(e)}))};n.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),L()}},[[54,1,2]]]);
//# sourceMappingURL=main.0533acfb.chunk.js.map