(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{12:function(e,s,a){},13:function(e,s,a){},15:function(e,s,a){"use strict";a.r(s);var r=a(1),t=a.n(r),n=a(7),c=a.n(n),i=(a(12),a(13),a(2)),l=a(3),o=a(6);function m(e){var s={};return e.username.trim()||(s.username="Username Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(s.email="Email address is invalid"):s.email="Email required",e.password?e.password.length<6&&(s.password="password need to ne 6 characters or more"):s.password="Password required",e.password2?e.password2!==e.password&&(s.password2="password do not match"):s.password2="password is required",s}var d=function(e,s){var a=Object(r.useState)({username:"",email:"",password:"",password2:""}),t=Object(i.a)(a,2),n=t[0],c=t[1],m=Object(r.useState)({}),d=Object(i.a)(m,2),u=d[0],j=d[1],p=Object(r.useState)(!1),b=Object(i.a)(p,2),h=b[0],O=b[1];return Object(r.useEffect)((function(){0===Object.keys(u).length&&h&&e()}),[u]),{handleChange:function(e){var s=e.target,a=s.name,r=s.value;c(Object(o.a)(Object(o.a)({},n),{},Object(l.a)({},a,r)))},values:n,handleSubmit:function(e){e.preventDefault(),j(s(n)),O(!0)},errors:u}},u=(a(5),a(0)),j=function(e){var s=e.submitForm,a=d(s,m),r=a.handleChange,t=a.values,n=a.handleSubmit,c=a.errors;return Object(u.jsx)("div",{className:"form-content-right",children:Object(u.jsxs)("form",{className:"form",onSubmit:n,noValidate:!0,children:[Object(u.jsx)("h1",{children:"Get Started With Us! Fill Details Here..."}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username: "}),Object(u.jsx)("input",{type:"text",className:"form-input",id:"username",value:t.username,onChange:r,placeholder:"Enter your username",name:"username"}),c.username&&Object(u.jsx)("p",{children:c.username})]}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{htmlFor:"email",className:"form-label",children:" Email:"}),Object(u.jsx)("input",{type:"email",id:"email",className:"form-input",value:t.email,onChange:r,placeholder:"Enter your email",name:"email"}),c.email&&Object(u.jsx)("p",{children:c.email})]}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{htmlFor:"password",className:"form-label",children:"  Password: "}),Object(u.jsx)("input",{type:"password",className:"form-input",id:"password",value:t.password,onChange:r,placeholder:"Enter your password",name:"password"}),c.password&&Object(u.jsx)("p",{children:c.password})]}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{htmlFor:"password2",className:"form-label",children:"Confirm Password "}),Object(u.jsx)("input",{type:"password",className:"form-input",id:"password2",value:t.password2,onChange:r,placeholder:"Enter your password again",name:"password2"}),c.password2&&Object(u.jsx)("p",{children:c.password2})]}),Object(u.jsx)("button",{className:"form-input-btn",type:"submit",children:"Sign Up"}),Object(u.jsxs)("span",{className:"form-input-login",children:["Already have an account? Login ",Object(u.jsx)("a",{href:"#",children:"here"})]})]})})},p=function(){return Object(u.jsxs)("div",{className:"form-content-right",children:[Object(u.jsx)("div",{className:"form-success",children:Object(u.jsx)("h2",{children:"We have recieved your request"})}),Object(u.jsx)("img",{src:"images/img-1.png",alt:"success image",className:"form-img-2"})]})},b=function(){var e=Object(r.useState)(!1),s=Object(i.a)(e,2),a=s[0],t=s[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)("span",{className:"close-btn",children:"X"}),a?Object(u.jsx)(p,{}):Object(u.jsx)(j,{submitForm:function(){t(!0)}})]})})};var h=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(s){var a=s.getCLS,r=s.getFID,t=s.getFCP,n=s.getLCP,c=s.getTTFB;a(e),r(e),t(e),n(e),c(e)}))};c.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()},5:function(e,s,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.b647fbe8.chunk.js.map