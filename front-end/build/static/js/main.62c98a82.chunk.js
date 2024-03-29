(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(19),s=n.n(c),r=n(1),i=n.n(r),l=n(3),o=n(2),u=(n(64),["btn--primary","btn--outline"]),j=["btn--medium","btn--large"],b=function(e){var t=e.children,n=e.type,c=e.onClick,s=e.buttonStyle,r=e.buttonSize,i=e.props,l=u.includes(s)?s:u[0],b=j.includes(r)?r:j[0];return Object(a.jsx)(o.b,{to:i,className:"btn-mobile",children:Object(a.jsx)("button",{className:"btn ".concat(l," ").concat(b),onClick:c,type:n,children:t})})},d=(n(72),n(49)),m=n(50),O=n(58),h=n(57),p=n(51),x=n(21),f=Object(x.decorator)(p.slide),v=function(e){Object(O.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).guestLinks=Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(b,{props:"/Login",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:function(){return c.closeMenu()},children:"Login"}),Object(a.jsx)(b,{props:"/Signup",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:function(){return c.closeMenu()},children:"Signup"})]}),c.authLinks=Object(a.jsx)(r.Fragment,{children:Object(a.jsx)(b,{className:"button-mobile",buttonStyle:"btn--primary",onClick:c.props.handleLogout,children:"LOGOUT"})}),c.signedInCarLinkMobile=Object(a.jsx)(r.Fragment,{children:Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b,{props:"/listing",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:function(){return c.closeMenu()},children:"List your car"})})}),c.state={menuOpen:!1},c}return Object(m.a)(n,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"toggleMenu",value:function(){this.setState((function(e){return{menuOpen:!e.menuOpen}}))}},{key:"render",value:function(){var e=this;return Object(a.jsx)(f,{isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},right:!0,width:"100%",customBurgerIcon:Object(a.jsx)("i",{className:"fas fa-bars"}),customCrossIcon:Object(a.jsx)("i",{className:"fas fa-times"}),children:Object(a.jsxs)("ul",{className:"mobile-list",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b,{props:"/",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:function(){return e.closeMenu()},children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b,{props:"/renting",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:function(){return e.closeMenu()},children:"Cars"})}),this.props.isAuth?this.signedInCarLinkMobile:null,Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b,{props:"/about",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:function(){return e.closeMenu()},children:"About"})}),this.props.isAuth?this.authLinks:this.guestLinks]})})}}]),n}(i.a.Component),g=n(9),N={name:null,username:null,logged:!1},y=function(e){return{type:"LOGIN",data:{name:e.name,username:e.username}}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{name:t.data.name,username:t.data.username,logged:!0};case"LOGOUT":return{name:t.data.name,username:t.data.username,logged:!1};default:return e}},k=n(4),C=n.n(k),w=n(7),_=n(17),L=n.n(_),I="api/cars",E=null,T={getAll:function(){return L.a.get("https://recar-rental.herokuapp.com/"+I).then((function(e){return e.data}))},create:function(){var e=Object(w.a)(C.a.mark((function e(t){var n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:E}},e.next=3,L.a.post(I,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){E="bearer ".concat(e)},getOne:function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://recar-rental.herokuapp.com/"+I+"/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteCar:function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.delete("https://recar-rental.herokuapp.com/"+I+"/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(w.a)(C.a.mark((function e(t,n){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.put("https://recar-rental.herokuapp.com/"+I+"/".concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()};var A=function(){var e=Object(g.useDispatch)(),t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=(n[1],Object(r.useState)(!0)),i=Object(l.a)(s,2),u=(i[0],i[1]),j=function(){window.innerWidth<=960?u(!1):u(!0)};Object(r.useEffect)((function(){j()}),[]),window.addEventListener("resize",j);var d=Object(g.useSelector)((function(e){return e.user})).logged,m=function(t){t.preventDefault(),e({type:"LOGOUT",data:{name:null,username:null}}),T.setToken(null),window.localStorage.removeItem("loggedUser")},O=Object(a.jsx)(r.Fragment,{children:Object(a.jsx)(b,{className:"button-mobile",buttonStyle:"btn--primary",onClick:m,children:"LOGOUT"})}),h=Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(b,{props:"/Login",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"Login"}),Object(a.jsx)(b,{props:"/Signup",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"Signup"})]}),p=Object(a.jsx)(r.Fragment,{children:Object(a.jsx)(o.c,{exact:!0,to:"/listing",activeClassName:"main-nav-active",className:"nav-links",children:"List your car"})});return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("nav",{className:"navbar",children:Object(a.jsxs)("div",{className:"navbar-container",children:[Object(a.jsxs)(o.c,{exact:!0,to:"/",className:"navbar-logo",children:["RECAR ",Object(a.jsx)("i",{className:"fas fa-car"})]}),Object(a.jsx)(v,{isAuth:d,handleLogout:m}),Object(a.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{exact:!0,to:"/",activeClassName:"main-nav-active",className:"nav-links",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{exact:!0,to:"/renting",activeClassName:"main-nav-active",className:"nav-links",children:"Renting"})}),Object(a.jsx)("li",{className:"nav-item",children:d?p:null}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{exact:!0,to:"/about",activeClassName:"main-nav-active",className:"nav-links",children:"About"})}),Object(a.jsx)("li",{className:"nav-links-btn",children:d?O:h})]})]})})})};n(111);var R=function(){return Object(a.jsxs)("div",{className:"footer-container",children:[Object(a.jsxs)("section",{className:"footer-subscription",children:[Object(a.jsx)("p",{className:"footer-subscription-heading",children:"Join the newsletter to receive our best car deals"}),Object(a.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(a.jsx)("div",{className:"input-areas",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(a.jsx)(b,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(a.jsxs)("div",{className:"footer-links",children:[Object(a.jsxs)("div",{className:"footer-link-wrapper",children:[Object(a.jsxs)("div",{className:"footer-link-items",children:[Object(a.jsx)("h2",{children:"About Us"}),Object(a.jsx)(o.b,{to:"/sign-up",children:"How it works"}),Object(a.jsx)(o.b,{to:"/",children:"Testimonials"}),Object(a.jsx)(o.b,{to:"/",children:"Careers"}),Object(a.jsx)(o.b,{to:"/",children:"Investors"}),Object(a.jsx)(o.b,{to:"/",children:"Terms of Service"})]}),Object(a.jsxs)("div",{className:"footer-link-items",children:[Object(a.jsx)("h2",{children:"Contact Us"}),Object(a.jsx)(o.b,{to:"/",children:"Contact"}),Object(a.jsx)(o.b,{to:"/",children:"Support"}),Object(a.jsx)(o.b,{to:"/",children:"Cars"}),Object(a.jsx)(o.b,{to:"/",children:"Sponsorships"})]})]}),Object(a.jsxs)("div",{className:"footer-link-wrapper",children:[Object(a.jsxs)("div",{className:"footer-link-items",children:[Object(a.jsx)("h2",{children:"Videos"}),Object(a.jsx)(o.b,{to:"/",children:"Submit Video"}),Object(a.jsx)(o.b,{to:"/",children:"Ambassadors"}),Object(a.jsx)(o.b,{to:"/",children:"Agency"}),Object(a.jsx)(o.b,{to:"/",children:"Influencers"})]}),Object(a.jsxs)("div",{className:"footer-link-items",children:[Object(a.jsx)("h2",{children:"Social Media"}),Object(a.jsx)(o.b,{to:"/",children:"Instagram"}),Object(a.jsx)(o.b,{to:"/",children:"Facebook"}),Object(a.jsx)(o.b,{to:"/",children:"Youtube"}),Object(a.jsx)(o.b,{to:"/",children:"Twitter"})]})]})]}),Object(a.jsx)("section",{className:"social-media",children:Object(a.jsxs)("div",{className:"social-media-wrap",children:[Object(a.jsx)("div",{className:"footer-logo",children:Object(a.jsxs)(o.b,{to:"/",className:"social-logo",children:["RECAR",Object(a.jsx)("i",{className:"fas fa-car"})]})}),Object(a.jsx)("small",{className:"website-rights",children:"RECAR \xa9 2020"}),Object(a.jsxs)("div",{className:"social-icons",children:[Object(a.jsx)(o.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(a.jsx)("i",{className:"fab fa-facebook-f"})}),Object(a.jsx)(o.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(a.jsx)("i",{className:"fab fa-instagram"})}),Object(a.jsx)(o.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(a.jsx)("i",{className:"fab fa-youtube"})}),Object(a.jsx)(o.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(a.jsx)("i",{className:"fab fa-twitter"})}),Object(a.jsx)(o.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(a.jsx)("i",{className:"fab fa-linkedin"})})]})]})})]})},F=n(6);n(41);var D=function(){return Object(a.jsxs)("div",{className:"hero-container",children:[Object(a.jsx)("video",{src:"/videos/video.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(a.jsx)("h1",{children:"GET A RIDE FOR TODAY"}),Object(a.jsx)("p",{children:"What are you waiting for?"}),Object(a.jsx)("div",{className:"hero-btns",children:Object(a.jsx)(b,{props:"/renting",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"RENT NOW"})})]})};var U=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("li",{className:"cards__item",children:Object(a.jsxs)(o.b,{className:"cards__item__link",to:e.path,children:[Object(a.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(a.jsx)("img",{src:e.src,onClick:e.onClick,alt:"Car",className:"cards__item__img"})}),Object(a.jsx)("div",{className:"cards__item__info",children:Object(a.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};n(42);var M=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){T.getAll().then((function(e){return c(e)}))}),[]),Object(a.jsxs)("div",{className:"cards",children:[Object(a.jsx)("h1",{children:"Check out these discounts."}),Object(a.jsx)("div",{className:"cards__container",children:Object(a.jsxs)("div",{className:"cards__wrapper",children:[Object(a.jsxs)("ul",{className:"cards__items",children:[n.slice(0,1).map((function(e){return Object(a.jsx)(U,{src:e.img,text:e.basicInfo,label:e.price+" \u20ac/day",path:"/renting"})})),n.slice(1,2).map((function(e){return Object(a.jsx)(U,{src:e.img,text:e.basicInfo,label:e.price+" \u20ac/day",path:"/renting"})}))]}),Object(a.jsxs)("ul",{className:"cards__items",children:[n.slice(2,3).map((function(e){return Object(a.jsx)(U,{src:e.img,text:e.basicInfo,label:e.price+" \u20ac/day",path:"/renting"})})),n.slice(3,4).map((function(e){return Object(a.jsx)(U,{src:e.img,text:e.basicInfo,label:e.price+" \u20ac/day",path:"/renting"})})),n.slice(4,5).map((function(e){return Object(a.jsx)(U,{src:e.img,text:e.basicInfo,label:e.price+" \u20ac/day",path:"/renting"})})),n.slice(5,6).map((function(e){return Object(a.jsx)(U,{src:e.img,text:e.basicInfo,label:e.price+" \u20ac/day",path:"/renting"})}))]})]})})]})};n(112);var q=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(D,{}),Object(a.jsx)(M,{})]})},G=n(54),B=n.n(G);n(46);var z=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(null),i=Object(l.a)(s,2),u=i[0],j=i[1],b=Object(r.useState)(!1),d=Object(l.a)(b,2),m=d[0],O=d[1],h=Object(g.useSelector)((function(e){return e.user})).logged;Object(r.useEffect)((function(){T.getAll().then((function(e){return c(e)}))}),[]);var p=function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.getOne(t);case 3:n=e.sent,j(n),O(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),x=Object(a.jsx)(r.Fragment,{children:Object(a.jsx)(o.b,{to:"/Mycars",children:Object(a.jsx)("button",{className:"carsButton",children:"View your listings"})})});return 0===n.length?null:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"cars__heading",children:[Object(a.jsx)("h2",{children:"Cars available"}),h?x:null]}),Object(a.jsx)("div",{className:"cars__container",children:Object(a.jsx)("div",{className:"cars__wrapper",children:Object(a.jsxs)("ul",{className:"car__items",children:[n.map((function(e){return Object(a.jsx)(U,{src:e.img,onClick:function(t){return p(e.id)},text:e.basicInfo,label:e.price+" \u20ac/day"})})),function(){if(null!=u)return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(B.a,{isOpen:m,ariaHideApp:!1,onRequestClose:function(){return O(!1)},children:[Object(a.jsx)("p",{className:"closeModal",onClick:function(){return O(!1)},children:Object(a.jsx)("i",{className:"fas fa-times"})}),Object(a.jsxs)("div",{class:"leftSide",children:[Object(a.jsx)("h3",{children:u.carBrand}),Object(a.jsx)("img",{src:u.img,alt:""}),Object(a.jsxs)("p",{children:["Listed by: ",u.user[0].username]})]}),Object(a.jsx)("div",{class:"rightSide",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:["Price: ",u.price,"\u20ac/day"]}),Object(a.jsxs)("li",{children:["Location: ",u.location]}),Object(a.jsxs)("li",{children:["Basic info: ",u.basicInfo]}),Object(a.jsxs)("li",{children:["Color: ",u.technicalDetails.color]}),Object(a.jsxs)("li",{children:["Fuel type: ",u.technicalDetails.fuelTypes]}),Object(a.jsxs)("li",{children:["Tyre type: ",u.technicalDetails.tyreType]}),Object(a.jsxs)("li",{children:["Trailer hitch:",u.technicalDetails.trailerHitch?" Yes":" No"]}),Object(a.jsxs)("li",{children:["Seating capacity:",u.technicalDetails.seatingCapacity]}),Object(a.jsxs)("li",{children:["Transmission: ",u.technicalDetails.transmission]}),Object(a.jsxs)("li",{children:["Mileage: ",u.technicalDetails.mileage]})]})})]})})}()]})})})]})};var P=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(z,{})})};n(122);var H=function(){return Object(a.jsxs)("div",{className:"aboutContainer",children:[Object(a.jsxs)("div",{className:"aboutLeft",children:[Object(a.jsx)("h1",{children:"Who we are"}),Object(a.jsx)("img",{src:"/images/image.jpg",alt:"about"})]}),Object(a.jsxs)("div",{class:"aboutRight",children:[Object(a.jsx)("p",{className:"aboutText",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque natus esse veritatis consequatur blanditiis sed delectus rerum sapiente, at laboriosam, facere dignissimos totam asperiores illo veniam culpa dolorum nam."}),Object(a.jsx)("h2",{children:"Our customers come first"}),Object(a.jsx)("p",{className:"customerText",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, praesentium? Voluptatum maxime perspiciatis nemo autem ratione laboriosam, veniam consequatur dignissimos in, quasi laborum blanditiis sed, iure sapiente debitis numquam doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis doloremque delectus dicta iure alias perferendis tempora optio exercitationem a perspiciatis, quod ea quia quisquam facilis incidunt distinctio veniam quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sequi qui dolorem laborum reprehenderit deserunt error quo dolore nostrum mollitia itaque iure quasi, eos, voluptatibus fuga voluptatem, fugiat repellat cupiditate?"})]})]})};var V=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(H,{})})},Y=(n(47),{register:function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("https://recar-rental.herokuapp.com/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});var J=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],j=Object(r.useState)(""),b=Object(l.a)(j,2),d=b[0],m=b[1],O=Object(r.useState)(""),h=Object(l.a)(O,2),p=h[0],x=h[1],f=Object(r.useState)(""),v=Object(l.a)(f,2),g=v[0],N=v[1],y=Object(r.useState)(""),S=Object(l.a)(y,2),k=S[0],_=S[1],L=Object(r.useState)(""),I=Object(l.a)(L,2),E=I[0],T=I[1],A=function(){var e=Object(w.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Y.register({username:n,name:o,email:d,phone:p,password:g});case 4:a=e.sent,console.log(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.response.data.error),T(e.t0.response.data.error);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"content-box",children:[Object(a.jsx)("div",{class:"left"}),Object(a.jsxs)("div",{class:"right",children:[Object(a.jsx)("h1",{children:"Registration"}),Object(a.jsx)("p",{className:"errorMessage",children:E}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{className:"field",type:"text",name:"username",id:"username",placeholder:"Username",value:n,onChange:function(e){var t=e.target;return c(t.value)}}),Object(a.jsx)("input",{className:"field",type:"text",name:"name",id:"name",placeholder:"Name",value:o,onChange:function(e){var t=e.target;return u(t.value)}}),Object(a.jsx)("input",{className:"field",type:"email",name:"email",id:"email",placeholder:"Email",value:d,onChange:function(e){var t=e.target;return m(t.value)}}),Object(a.jsx)("input",{className:"field",type:"tel",name:"phone",id:"phone",placeholder:"Phone number",value:p,onChange:function(e){var t=e.target;return x(t.value)}}),Object(a.jsx)("input",{className:"field",type:"password",name:"password",id:"password",placeholder:"Password",value:g,onChange:function(e){var t=e.target;return N(t.value)}}),Object(a.jsx)("input",{className:"field",type:"password",name:"password",id:"password-repeat",placeholder:"Password again",value:k,onChange:function(e){var t=e.target;return _(t.value)}})]}),Object(a.jsx)("button",{className:"listButton",onClick:A,children:"SIGN UP"})]})]})})})};var W=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(J,{})})},X=(n(48),{login:function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("https://recar-rental.herokuapp.com/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});var K=function(){var e=Object(g.useDispatch)(),t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(""),o=Object(l.a)(i,2),u=o[0],j=o[1],b=Object(r.useState)(""),d=Object(l.a)(b,2),m=d[0],O=d[1],h=function(){var t=Object(w.a)(C.a.mark((function t(n){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,X.login({username:c,password:u});case 4:a=t.sent,window.localStorage.setItem("loggedUser",JSON.stringify(a)),e(y(a)),T.setToken(a.token),s(""),j(""),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0.response.data.error),O(t.t0.response.data.error);case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"content-box",children:[Object(a.jsx)("div",{className:"left"}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsx)("p",{className:"errorMessage",children:m}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{className:"field",type:"text",name:"username",id:"username",placeholder:"Username",value:c,onChange:function(e){var t=e.target;return s(t.value)}}),Object(a.jsx)("input",{className:"field",type:"password",name:"password",id:"password",placeholder:"Password",value:u,onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(a.jsx)("button",{className:"listButton",onClick:h,children:"LOGIN"})]})]})})})};var Q=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(K,{})})},Z=n(22),$=n(8);var ee=function(){var e=Object(g.useSelector)((function(e){return e.user.username})),t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)({}),o=Object(l.a)(i,2),u=o[0],j=o[1];Object(r.useEffect)((function(){T.getAll().then((function(t){return t.filter((function(t){return t.user[0].username===e}))})).then((function(e){return s(e)}))}),[e]);var b=function(){var e=Object(w.a)(C.a.mark((function e(t){var n,a,r,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u[t],a={price:n},e.prev=3,e.next=6,T.update(t,a);case 6:r=e.sent,i=c.map((function(e){return e.id===r.id?Object($.a)(Object($.a)({},e),{},{price:r.price}):e})),s(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(w.a)(C.a.mark((function e(t){var n,a,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,a=n.value,c=n.name,j(Object($.a)(Object($.a)({},u),{},Object(Z.a)({},c,a)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();console.log(u);var m=function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.deleteCar(t);case 3:e.sent,n=c.filter((function(e){return e.id!==t})),s(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return 0===c.length?Object(a.jsx)("p",{children:"No cars listed!"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{class:"carHeader",children:Object(a.jsx)("h1",{children:"Your listings"})}),Object(a.jsx)("div",{className:"carsContent",children:Object(a.jsx)("div",{className:"carsBox",children:c.map((function(e){return Object(a.jsxs)("div",{className:"carBoxContent",children:[Object(a.jsx)("img",{src:e.img,alt:"car"}),Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"carsUpdate",children:[Object(a.jsx)("label",{children:"Update price: "}),Object(a.jsx)("input",{type:"text",name:e.id,placeholder:e.price,onChange:d}),Object(a.jsx)("button",{className:"updateButton",onClick:function(){return b(e.id)},children:"Submit"}),Object(a.jsx)("button",{className:"updateButton",onClick:function(){return m(e.id)},children:"Delete listing"})]})})]},e.id)}))})})]})};n(123);var te=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(ee,{})})},ne=(n(124),n(55)),ae=n.n(ne);var ce=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],j=Object(r.useState)(""),b=Object(l.a)(j,2),d=b[0],m=b[1],O=Object(r.useState)(""),h=Object(l.a)(O,2),p=h[0],x=h[1],f=Object(r.useState)(""),v=Object(l.a)(f,2),g=v[0],N=v[1],y=Object(r.useState)(""),S=Object(l.a)(y,2),k=S[0],_=S[1],L=Object(r.useState)(""),I=Object(l.a)(L,2),E=I[0],A=I[1],R=Object(r.useState)(""),F=Object(l.a)(R,2),D=F[0],U=F[1],M=Object(r.useState)(!1),q=Object(l.a)(M,2),G=q[0],B=q[1],z=Object(r.useState)(""),P=Object(l.a)(z,2),H=P[0],V=P[1],Y=Object(r.useState)(""),J=Object(l.a)(Y,2),W=J[0],X=J[1],K=Object(r.useState)(""),Q=Object(l.a)(K,2),Z=Q[0],$=Q[1],ee=Object(r.useState)(null),te=Object(l.a)(ee,2),ne=te[0],ce=te[1],se=Object(r.useState)(""),re=Object(l.a)(se,2),ie=re[0],le=re[1],oe=function(){var e=Object(w.a)(C.a.mark((function e(t){var a,c,s,r,i,l;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),ne){e.next=5;break}return console.log("kaatu"),le("Image file is needed"),e.abrupt("return");case 5:if(!ne){e.next=15;break}if(a=ne.base64.length,c=ne.base64.charAt(a-1),s=ne.base64.charAt(a-2),r=0,"="===c&&"="===s?r=2:3===c&&(r=1),!(a*(3/4)-r>3e5)){e.next=15;break}return console.log("imagefile size limit 300kt"),e.abrupt("return");case 15:return i={img:ne.base64,location:n,price:o,basicInfo:d,carBrand:p,technicalDetails:{vechileType:g,color:k,fuelTypes:E,tyreType:D,trailerHitch:G,seatingCapacity:H,transmission:W,mileage:Z}},e.prev=16,e.next=19,T.create(i);case 19:l=e.sent,console.log(l),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(16),console.log(e.t0.response.data.error),le(e.t0.response.data.error);case 27:console.log(i);case 28:case"end":return e.stop()}}),e,null,[[16,23]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"content-box",children:[Object(a.jsx)("div",{className:"left"}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)("h1",{children:"Register your car for rent"}),Object(a.jsx)("p",{className:"errorMessage",children:ie}),Object(a.jsxs)("form",{onSubmit:oe,children:[Object(a.jsx)("label",{children:"Location"}),Object(a.jsx)("input",{className:"field",type:"text",name:"location",value:n,onChange:function(e){var t=e.target;return c(t.value)}}),Object(a.jsx)("label",{children:"Price"}),Object(a.jsx)("input",{className:"field",type:"text",name:"price",value:o,onChange:function(e){var t=e.target;return u(t.value)}}),Object(a.jsx)("label",{children:"Basic info"}),Object(a.jsx)("input",{className:"field",type:"text",name:"basicinfo",value:d,onChange:function(e){var t=e.target;return m(t.value)}}),Object(a.jsx)("label",{children:"Car brand"}),Object(a.jsx)("input",{className:"field",type:"text",name:"car brand",value:p,onChange:function(e){var t=e.target;return x(t.value)}}),Object(a.jsx)("label",{children:"Vehicle's type"}),Object(a.jsx)("input",{className:"field",type:"text",name:"vechiletype",value:g,onChange:function(e){var t=e.target;return N(t.value)}}),Object(a.jsx)("label",{children:"Color of the car"}),Object(a.jsx)("input",{className:"field",type:"text",name:"color",value:k,onChange:function(e){var t=e.target;return _(t.value)}}),Object(a.jsxs)("div",{className:"checkbox",children:[Object(a.jsx)("label",{children:"Trailer hitch"}),Object(a.jsx)("input",{className:"field",type:"checkbox",name:"trailer hitch",value:G,onChange:function(){return B(!G)}})]}),Object(a.jsx)("h3",{children:"Fuel type"}),Object(a.jsxs)("div",{className:"radio-group",children:[Object(a.jsx)("label",{children:"Diesel"}),Object(a.jsx)("input",{className:"field",type:"radio",name:"fueltype",value:"diesel",onChange:function(e){var t=e.target;return A(t.value)}}),Object(a.jsx)("label",{children:"Electricity"}),Object(a.jsx)("input",{className:"field",type:"radio",name:"fueltype",value:"electric",onChange:function(e){var t=e.target;return A(t.value)}}),Object(a.jsx)("label",{children:"Gasoline"}),Object(a.jsx)("input",{className:"field",type:"radio",name:"fueltype",value:"gasoline",onChange:function(e){var t=e.target;return A(t.value)}})]}),Object(a.jsx)("h3",{children:"Tyre type"}),Object(a.jsxs)("div",{class:"radio-group",children:[Object(a.jsx)("label",{children:"Winter tyres"}),Object(a.jsx)("input",{className:"field",type:"radio",name:"tyretype",value:"winter",onChange:function(e){var t=e.target;return U(t.value)}}),Object(a.jsx)("label",{children:"Summer tyres"}),Object(a.jsx)("input",{className:"field",type:"radio",name:"tyretype",value:"summer",onChange:function(e){var t=e.target;return U(t.value)}})]}),Object(a.jsx)("input",{className:"field",type:"text",name:"seating capacity",placeholder:"Seating capacity",value:H,onChange:function(e){var t=e.target;return V(t.value)}}),Object(a.jsx)("h3",{children:"Transmission"}),Object(a.jsxs)("div",{class:"radio-group",children:[Object(a.jsx)("label",{children:"Manual"}),Object(a.jsx)("input",{className:"field",type:"radio",name:"transmission",value:"manual",onChange:function(e){var t=e.target;return X(t.value)}}),Object(a.jsx)("label",{children:"Automatic"}),Object(a.jsx)("input",{className:"field",type:"radio",name:"transmission",value:"automatic",onChange:function(e){var t=e.target;return X(t.value)}})]}),Object(a.jsx)("input",{className:"field",type:"text",name:"mileage",placeholder:"Miles driven",value:Z,onChange:function(e){var t=e.target;return $(t.value)}}),Object(a.jsxs)("div",{className:"imageInput",children:[Object(a.jsx)("label",{children:"Choose image"}),Object(a.jsx)(ae.a,{multiple:!1,onDone:function(e){ce(e)}})]}),Object(a.jsx)("button",{className:"listButton",type:"submit",children:"Submit"})]})]})]})})})};var se=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(ce,{})})};var re=function(){var e=Object(g.useDispatch)();return Object(r.useEffect)((function(){var t=window.localStorage.getItem("loggedUser");if(t){var n=JSON.parse(t);e(y(n)),T.setToken(n.token)}}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(A,{}),Object(a.jsxs)(F.c,{children:[Object(a.jsx)(F.a,{path:"/",exact:!0,component:q}),Object(a.jsx)(F.a,{path:"/renting",component:P}),Object(a.jsx)(F.a,{path:"/about",component:V}),Object(a.jsx)(F.a,{path:"/listing",component:se}),Object(a.jsx)(F.a,{path:"/signup",component:W}),Object(a.jsx)(F.a,{path:"/login",component:Q}),Object(a.jsx)(F.a,{path:"/mycars",component:te})]}),Object(a.jsx)(R,{})]})})},ie=n(18),le=n(56),oe="GET_ITEMS",ue="USER_LOADING",je="USER_LOADED",be="AUTH_ERROR",de="LOGIN_SUCCESS",me="LOGIN_FAIL",Oe="LOGOUT_SUCCESS",he="REGISTER_SUCCESS",pe="REGISTER_FAIL",xe="GET_ERRORS",fe="CLEAR_ERRORS",ve={items:[]},ge={msg:{},status:null,id:null},Ne={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},ye=Object(ie.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object($.a)({},e);default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case fe:return{msg:{},status:null,id:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object($.a)(Object($.a)({},e),{},{isLoading:!0});case je:return Object($.a)(Object($.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case de:case he:return localStorage.setItem("token",t.payload.token),Object($.a)(Object($.a)(Object($.a)({},e),t.payload),{},{isAuthenticated:!0,isLoading:!1});case be:case me:case Oe:case pe:return localStorage.removeItem("token"),Object($.a)(Object($.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},burgerMenu:x.reducer,user:S}),Se=[le.a],ke=Object(ie.e)(ye,{},Object(ie.d)(ie.a.apply(void 0,Se),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));s.a.render(Object(a.jsx)(g.Provider,{store:ke,children:Object(a.jsx)(re,{})}),document.getElementById("root"))},41:function(e,t,n){},42:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},64:function(e,t,n){},72:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.62c98a82.chunk.js.map