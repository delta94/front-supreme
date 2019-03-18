(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{13:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r="https://supreme-yoga-prod.herokuapp.com",o=4},14:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4).b.div.withConfig({displayName:"PaginationStyles",componentId:"aduuar-0"})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ",";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ",";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"],function(e){return e.theme.lightgrey},function(e){return e.theme.lightgrey}),i=n(7),u=n.n(i),c=n(5),l=n(13),f=n(24),s=n.n(f),p=n(11),m=n.n(p);function d(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query PAGINATION_QUERY {\n    itemsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return d=function(){return e},e}n.d(t,"a",function(){return b});var b=u()(d());t.b=function(e){return o.a.createElement(c.Query,{query:b},function(t){var n=t.data,r=t.loading;if(t.error,r)return o.a.createElement("p",null,"Loading...");var i=n.itemsConnection.aggregate.count,u=Math.ceil(i/l.b),c=e.page;return o.a.createElement(a,null,o.a.createElement(s.a,null,o.a.createElement("title",null,"Sick Fits! - Page ",c," of ",u)),o.a.createElement(m.a,{prefetch:!0,href:{pathname:"items",query:{page:c-1}}},o.a.createElement("a",{className:"prev","aria-disabled":c<=1},"← Prev")),o.a.createElement("p",null,"Page ",c," of ",u),o.a.createElement("p",null,i," Items Total"),o.a.createElement(m.a,{prefetch:!0,href:{pathname:"items",query:{page:c+1}}},o.a.createElement("a",{className:"prev","aria-disabled":c>=u},"Next →")))})}},190:function(e,t,n){"use strict";var r=n(4).b.button.withConfig({displayName:"SickButton",componentId:"l04z44-0"})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);t.a=r},208:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(0),i=n.n(a),u=n(5),c=n(7),l=n.n(c),f=n(22),s=n.n(f),p=n(17),m=n(12),d=n(30),b=n(14);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function g(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){h(a,r,o,i,u,"next",e)}function u(e){h(a,r,o,i,u,"throw",e)}i(void 0)})}}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation CREATE_ITEM_MUTATION(\n    $title: String!\n    $description: String!\n    $price: Int!\n    $image: String\n    $largeImage: String\n  ) {\n    createItem(\n      title: $title\n      description: $description\n      price: $price\n      image: $image\n      largeImage: $largeImage\n    ) {\n      id\n    }\n  }\n"]);return _=function(){return e},e}var S=l()(_()),P=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return r=this,a=(e=E(t)).call.apply(e,[this].concat(u)),n=!a||"object"!==y(a)&&"function"!=typeof a?w(r):a,j(w(n),"state",{title:"",description:"",image:"",largeImage:"",price:0}),j(w(n),"handleChange",function(e){var t=e.target,r=t.name,o=t.type,a=t.value,i="number"===o?parseFloat(a):a;n.setState(j({},r,i))}),j(w(n),"uploadFile",function(){var e=g(o.a.mark(function e(t){var r,a,i,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files,(a=new FormData).append("file",r[0]),a.append("upload_preset","sickfits"),e.next=6,fetch("https://api.cloudinary.com/v1_1/datfc97pro/image/upload",{method:"POST",body:a});case 6:return i=e.sent,e.next=9,i.json();case 9:u=e.sent,n.setState({image:u.secure_url,largeImage:u.eager[0].secure_url});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this,t=this.state,n=t.title,r=t.description,a=t.price,c=t.image;t.largeImage;return i.a.createElement(u.Mutation,{mutation:S,variables:this.state,refetchQueries:function(){return[{query:d.a},{query:b.a}]}},function(t,u){var l=u.loading,f=u.error;return i.a.createElement(p.a,{onSubmit:function(){var e=g(o.a.mark(function e(n){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t();case 3:r=e.sent,s.a.push({pathname:"/item",query:{id:r.data.createItem.id}});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},i.a.createElement(m.a,{error:f}),i.a.createElement("fieldset",{disabled:l,"aria-busy":l},i.a.createElement("label",{htmlFor:"file"},"Image",i.a.createElement("input",{type:"file",id:"file",name:"file",placeholder:"Upload an image",onChange:e.uploadFile}),c&&i.a.createElement("img",{width:"200",src:c,alt:"Upload Preview"})),i.a.createElement("label",{htmlFor:"title"},"Title",i.a.createElement("input",{type:"text",id:"title",name:"title",placeholder:"Title",required:!0,value:n,onChange:e.handleChange})),i.a.createElement("label",{htmlFor:"price"},"Price",i.a.createElement("input",{type:"number",id:"price",name:"price",placeholder:"Price",required:!0,value:a,onChange:e.handleChange})),i.a.createElement("label",{htmlFor:"description"},"Description",i.a.createElement("textarea",{id:"description",name:"description",placeholder:"Enter A Description",required:!0,value:r,onChange:e.handleChange})),i.a.createElement("button",{type:"submit"},"Submit")))})}}])&&v(n.prototype,r),c&&v(n,c),t}();t.a=P},22:function(e,t,n){e.exports=n(39)},25:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(0),i=n.n(a),u=n(5),c=n(7),l=n.n(c),f=n(17),s=n(12),p=n(10);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    signin(email: $email, password: $password) {\n      id\n      email\n      name\n    }\n  }\n"]);return E=function(){return e},e}var w=l()(E()),O=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=this,o=(e=y(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==m(o)&&"function"!=typeof o?h(r):o,v(h(n),"state",{email:"",password:""}),v(h(n),"handleChange",function(e){n.setState(v({},e.target.name,e.target.value))}),n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this,t=this.state,n=t.email,r=t.password;return i.a.createElement(u.Mutation,{mutation:w,variables:this.state,refetchQueries:function(){return[{query:p.a}]}},function(t,a){var u=a.loading,c=a.error;return i.a.createElement(f.a,{onSubmit:function(){var n,r=(n=o.a.mark(function n(r){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,t();case 3:n.sent,e.setState({email:"",password:""});case 5:case"end":return n.stop()}},n)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(e){d(a,r,o,i,u,"next",e)}function u(e){d(a,r,o,i,u,"throw",e)}i(void 0)})});return function(e){return r.apply(this,arguments)}}()},i.a.createElement("fieldset",{disabled:u,"aria-busy":u},i.a.createElement("h2",null,"Sign into your account"),c&&i.a.createElement(s.a,{error:c}),i.a.createElement("label",{htmlFor:"email"},"Email",i.a.createElement("input",{type:"email",name:"email",placeholder:"email",value:n,required:!0,onChange:e.handleChange})),i.a.createElement("label",{htmlFor:"password"},"Password",i.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:r,required:!0,onChange:e.handleChange})),i.a.createElement("button",{type:"submit"},"Sign In!")))})}}])&&b(n.prototype,r),c&&b(n,c),t}();t.a=O},30:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(5),i=n(7),u=n.n(i),c=n(4),l=(n(6),c.b.h3.withConfig({displayName:"Title",componentId:"sc-16nq74k-0"})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:",";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"],function(e){return e.theme.red})),f=c.b.div.withConfig({displayName:"ItemStyles__Item",componentId:"sc-16pk14u-0"})(["background:white;border:1px solid ",";box-shadow:",";position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid ",";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:",";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"],function(e){return e.theme.offWhite},function(e){return e.theme.bs},function(e){return e.theme.lightgrey},function(e){return e.theme.lightgrey}),s=c.b.span.withConfig({displayName:"PriceTag",componentId:"nwbk6t-0"})(["background:",";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"],function(e){return e.theme.red}),p=n(11),m=n.n(p),d=n(18),b=n(14);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation DELTE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);return w=function(){return e},e}var O=u()(w()),j=function(e){function t(){var e,n,r,o,a,i,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,l=new Array(c),f=0;f<c;f++)l[f]=arguments[f];return r=this,o=(e=g(t)).call.apply(e,[this].concat(l)),n=!o||"object"!==y(o)&&"function"!=typeof o?v(r):o,a=v(n),u=function(e,t){var r=e.readQuery({query:B});r.items=r.items.filter(function(e){return e.id!==n.props.id}),e.writeQuery({query:B,data:r})},(i="update")in a?Object.defineProperty(a,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[i]=u,n}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this;return o.a.createElement(a.Mutation,{mutation:O,variables:{id:this.props.id},update:this.update,refetchQueries:[{query:B},{query:b.a}]},function(t,n){n.error;return o.a.createElement("button",{onClick:function(){confirm("Are you sure you want to delete this item>")&&t().catch(function(e){return alert(e.message)})}},e.props.children)})}}])&&h(n.prototype,i),u&&h(n,u),t}(),_=n(10);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation($id: ID!) {\n    addToCart(id: $id) {\n      id\n      quantity\n    }\n  }\n"]);return C=function(){return e},e}var T=u()(C()),q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,I(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.id;return o.a.createElement(a.Mutation,{mutation:T,variables:{id:e},refetchQueries:[{query:_.a}]},function(e,t){t.error;var n=t.loading;return o.a.createElement("button",{disabled:n,onClick:e},"Add",n&&"ing"," To Cart 🛒")})}}])&&P(n.prototype,r),i&&P(n,i),t}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,N(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props.item;return o.a.createElement(f,null,e.image&&o.a.createElement("img",{src:e.image,alt:e.title}),o.a.createElement(l,null,o.a.createElement(m.a,{prefetch:!0,href:{pathname:"/item",query:{id:e.id}}},o.a.createElement("a",null,e.title))),o.a.createElement(s,null,Object(d.a)(e.price)),o.a.createElement("p",null,e.description),o.a.createElement("div",{className:"buttonList"},o.a.createElement(m.a,{prefetch:!0,href:{pathname:"update",query:{id:e.id}}},o.a.createElement("a",null,"Edit ✏️")),o.a.createElement(q,{id:e.id}),o.a.createElement(j,{id:e.id},"Delete This Item")))}}])&&A(n.prototype,a),i&&A(n,i),t}(),R=n(13);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ",") {\n    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);return G=function(){return e},e}n.d(t,"a",function(){return B});var B=u()(G(),R.b),J=c.b.div.withConfig({displayName:"Items__Center",componentId:"tikday-0"})(["text-align:center;"]),Y=c.b.div.withConfig({displayName:"Items__ItemList",componentId:"tikday-1"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:",";margin:0 auto;box-sizing:border-box;"],function(e){return e.theme.maxWidth}),X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,L(t).apply(this,arguments))}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement(J,null,o.a.createElement(b.b,{page:this.props.page}),o.a.createElement(a.Query,{query:B,variables:{skip:this.props.page*R.b-R.b}},function(e){var t=e.data,n=e.error;return e.loading?o.a.createElement("p",null,"Loading..."):n?o.a.createElement("p",null,"Error: ",n.message):o.a.createElement(Y,null,t.items.map(function(e,t){return o.a.createElement(D,{key:t,item:e})}))}),o.a.createElement(b.b,{page:this.props.page}))}}])&&Q(n.prototype,i),u&&Q(n,u),t}();t.b=X},33:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(5),i=n(25),u=n(10);t.a=function(e){return o.a.createElement(a.Query,{query:u.a},function(t){var n=t.data;return t.loading?o.a.createElement("p",null,"Loading..."):n.me?e.children:o.a.createElement("div",null,o.a.createElement("p",null,"Please Sign In before Continuing"),o.a.createElement(i.a,null))})}},431:function(e,t,n){__NEXT_REGISTER_PAGE("/permissions",function(){return e.exports=n(445),{page:e.exports.default}})},445:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=(n(208),n(33)),i=n(5),u=n(12),c=n(7),l=n.n(c),f=n(4).b.table.withConfig({displayName:"Table",componentId:"sc-1jvbtk5-0"})(["border-spacing:0;width:100%;border:1px solid ",";thead{font-size:10px;}td,th{border-bottom:1px solid ",";border-right:1px solid ",";position:relative;padding:5px;&:last-child{border-right:none;width:150px;button{width:100%;}}label{padding:10px 5px;display:block;}}tr{&:hover{background:",";}}"],function(e){return e.theme.offWhite},function(e){return e.theme.offWhite},function(e){return e.theme.offWhite},function(e){return e.theme.offWhite}),s=n(190);n(6);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){var e=w(["\n  query {\n    users {\n      id\n      name\n      email\n      permissions\n    }\n  }\n"]);return v=function(){return e},e}function E(){var e=w(["\n  mutation($permissions: [Permission], $userId: ID!) {\n    updatePermissions(permissions: $permissions, userId: $userId) {\n      id\n      permissions\n      name\n      email\n    }\n  }\n"]);return E=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var O=["ADMIN","USER","ITEMCREATE","ITEMUPDATE","ITEMDELETE","PERMISSIONUPDATE"],j=l()(E()),_=l()(v()),S=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=this,o=(e=b(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==p(o)&&"function"!=typeof o?y(r):o,g(y(n),"state",{permissions:n.props.user.permissions}),g(y(n),"handleChange",function(e){var t=e.target,r=m(n.state.permissions);t.checked?r.push(t.value):r=r.filter(function(e){return e!==t.value}),n.setState({permissions:r})}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.user;return o.a.createElement(i.Mutation,{mutation:j,variables:{userId:t.id,permissions:this.state.permissions}},function(n,r){r.data;var a=r.loading,i=r.error;return o.a.createElement(o.a.Fragment,null,i&&o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"8"},o.a.createElement(u.a,{error:i}))),o.a.createElement("tr",null,o.a.createElement("td",null,t.name),o.a.createElement("td",null,t.email),O.map(function(n,r){return o.a.createElement("td",{key:r},o.a.createElement("label",{htmlFor:"".concat(t.id,"-permission-").concat(n)},o.a.createElement("input",{type:"checkbox",checked:e.state.permissions.includes(n),onChange:e.handleChange,value:n,id:"".concat(t.id,"-permission-").concat(n)})))}),o.a.createElement("td",null,o.a.createElement(s.a,{type:"button",disabled:a,onClick:n},"Updat",a?"ing":"e"))))})}}])&&d(n.prototype,r),a&&d(n,a),t}(),P=function(){return o.a.createElement(i.Query,{query:_},function(e){var t=e.data,n=(e.loading,e.error);return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(u.a,{error:n}),o.a.createElement("div",null,o.a.createElement("h2",null,"Manage Permissions"),o.a.createElement(f,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Email"),O.map(function(e,t){return o.a.createElement("th",{key:t},e)}),o.a.createElement("th",null,"👇🏻"))),o.a.createElement("tbody",null,t.users&&t.users.map(function(e,t){return o.a.createElement(S,{key:t,user:e})})))))})};t.default=function(e){return o.a.createElement("div",null,o.a.createElement(a.a,null,o.a.createElement(P,null)))}}},[[431,1,0]]]);