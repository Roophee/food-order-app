(this["webpackJsonpfood-order-app-max"]=this["webpackJsonpfood-order-app-max"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"style_cart-items__3DNah",total:"style_total__3gSXF",actions:"style_actions__3gSm3","button--alt":"style_button--alt__3R6pd",button:"style_button__36U7s"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__ZN1e9",summary:"CartItem_summary__219CW",price:"CartItem_price__2n2ye",amount:"CartItem_amount__33Kpm",actions:"CartItem_actions__1uPls"}},,,function(e,t,n){e.exports={button:"style_button__1ui4-",icon:"style_icon__3iWkM",badge:"style_badge__2pYI_",bump:"style_bump__31a3T"}},,function(e,t,n){e.exports={meal:"style_meal__cdQ--",description:"style_description__WuNV1",price:"style_price__1bX7B"}},function(e,t,n){e.exports={backdrop:"style_backdrop__PsbL4",modal:"style_modal__KvAfP","slide-down":"style_slide-down__2_DLD"}},,function(e,t,n){e.exports={header:"style_header__3z-KD","main-image":"style_main-image__255NT"}},,function(e,t,n){e.exports={summary:"style_summary__pxUcI"}},function(e,t,n){e.exports={meals:"style_meals__3lTHf","meals-appear":"style_meals-appear__q4sW8"}},function(e,t,n){e.exports={card:"style_card__28gib"}},function(e,t,n){e.exports={form:"style_form__UqJg_"}},function(e,t,n){e.exports={input:"style_input__2P1g4"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),r=(n(24),n(3)),o=n(13),l=n.n(o),m=n.p+"static/media/meals.2971f633.jpg",u=n(8),d=n.n(u),j=n(0),b=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},x={items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}},p=a.a.createContext(x),O=function(){return Object(c.useContext)(p)},h=p,_=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1],s=O().items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(d.a.button," ").concat(a?d.a.bump:"");return Object(c.useEffect)((function(){if(0===s.length)return"";i(!0);var e=setTimeout((function(){i(!1)}),300);return function(){clearTimeout(e)}}),[s]),Object(j.jsxs)("button",{className:l,onClick:e.onShowCart,children:[Object(j.jsx)("span",{className:d.a.icon,children:Object(j.jsx)(b,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:d.a.badge,children:o})]})},f=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:l.a.header,children:[Object(j.jsx)("h1",{children:"React Meals"}),Object(j.jsx)(_,{onShowCart:e.onShowCart})]}),Object(j.jsx)("div",{className:l.a["main-image"],children:Object(j.jsx)("img",{src:m,alt:"meals"})})]})},v=n(15),y=n.n(v),C=function(){return Object(j.jsxs)("section",{className:y.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},g=n(16),N=n.n(g),A=n(17),I=n.n(A),w=function(e){var t=e.children;return Object(j.jsx)("div",{className:I.a.card,children:t})},k=n(10),T=n.n(k),D=n(18),M=n.n(D),S=n(2),E=n(19),F=n.n(E),R=a.a.forwardRef((function(e,t){var n=e.label,c=e.input,a=e.input.id;return Object(j.jsxs)("div",{className:F.a.input,children:[Object(j.jsx)("label",{htmlFor:a,children:n}),Object(j.jsx)("input",Object(S.a)({ref:t},c))]})})),P=function(e){var t=Object(c.useState)(!0),n=Object(r.a)(t,2),a=n[0],i=n[1],s=Object(c.useRef)();return Object(j.jsxs)("form",{className:M.a.form,children:[Object(j.jsx)(R,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:1,max:5,step:1,defaultValue:1}}),Object(j.jsx)("button",{onClick:function(t){t.preventDefault();var n=s.current.value,c=+n;(0===n.trim().length||c<1||c>5)&&i(!1),e.onAddToCart(c)},children:"+ Add"}),!a&&Object(j.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},B=function(e){var t=e.price,n=e.description,c=e.name,a="$".concat(t.toFixed(2)),i=O();return Object(j.jsxs)("li",{className:T.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:c}),Object(j.jsx)("div",{className:T.a.description,children:n}),Object(j.jsx)("div",{className:T.a.price,children:a})]}),Object(j.jsx)(P,{onAddToCart:function(t){i.addItem({id:e.id,name:e.name,amount:t,price:e.price})}})]})},H=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],z=function(){return Object(j.jsx)("section",{className:N.a.meals,children:Object(j.jsx)(w,{children:Object(j.jsx)("ul",{children:H.map((function(e){return Object(j.jsx)(B,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}))})})})},K=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C,{}),Object(j.jsx)(z,{})]})},V=n(4),W=n.n(V),q=n(5),J=n.n(q),U=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:J.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:J.a.summary,children:[Object(j.jsx)("span",{className:J.a.price,children:t}),Object(j.jsxs)("span",{className:J.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:J.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Y=n(11),L=n.n(Y),X=function(e){return Object(j.jsx)("div",{role:"button",tabIndex:"0",className:L.a.backdrop,onClick:e.onClose,onKeyDown:e.onClose})},$=function(e){return Object(j.jsx)("div",{className:L.a.modal,children:Object(j.jsx)("div",{className:L.a.content,children:e.children})})},G=document.getElementById("overlays"),Q=function(e){return Object(j.jsxs)(j.Fragment,{children:[s.a.createPortal(Object(j.jsx)(X,{onClose:e.onClose}),G),s.a.createPortal(Object(j.jsx)($,{children:e.children}),G)]})},Z=function(e){var t=O(),n="".concat(t.totalAmount.toFixed(2)),c=t.items.length>0,a=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(S.a)(Object(S.a)({},e),{},{amount:1}))},s=Object(j.jsx)("ul",{className:W.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(U,{name:e.name,amount:e.amount,price:e.price,onRemove:a.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(j.jsxs)(Q,{onClose:e.onClose,children:[s,Object(j.jsxs)("div",{className:W.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("div",{className:W.a.actions,children:[Object(j.jsx)("button",{className:W.a["button--alt"],onClick:e.onClose,children:"Close"}),c&&Object(j.jsx)("button",{className:W.a.button,children:"Order"})]})]})},ee=n(14),te={items:[],totalAmount:0},ne=function(e,t){if("ADD_ITEM"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[a];if(i){var s=Object(S.a)(Object(S.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(ee.a)(e.items))[a]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE_ITEM"===t.type){var r,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)r=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(S.a)(Object(S.a)({},l),{},{amount:l.amount-1});(r=Object(ee.a)(e.items))[o]=u}return{items:r,totalAmount:m}}return te},ce=function(e){var t=Object(c.useReducer)(ne,te),n=Object(r.a)(t,2),a=n[0],i=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){i({type:"ADD_ITEM",item:e})},removeItem:function(e){i({type:"REMOVE_ITEM",id:e})}};return Object(j.jsx)(h.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(ce,{children:[n&&Object(j.jsx)(Z,{onClose:function(){a(!1)}}),Object(j.jsx)(f,{onShowCart:function(){a(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(K,{})})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ae,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.116af9cb.chunk.js.map