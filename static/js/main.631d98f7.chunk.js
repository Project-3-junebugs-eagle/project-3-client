(this["webpackJsonpcine-buster"]=this["webpackJsonpcine-buster"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(29),i=n.n(s),c=(n(74),n(69)),o=n(10),u=n(11),l=n(13),d=n(12),h=n(14),m=n(107),j=n(2),p=n(3),g=n(1),b=["user","component","render"],f=function(e){var t=e.user,n=e.component,a=e.render,r=Object(p.a)(e,b);return t&&a?Object(g.jsx)(h.b,Object(j.a)(Object(j.a)({},r),{},{render:a})):Object(g.jsx)(h.b,Object(j.a)(Object(j.a)({},r),{},{render:function(e){return t?Object(g.jsx)(n,Object(j.a)({},e)):Object(g.jsx)(h.a,{to:"/"})}}))},v=n(51),O=(n(83),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,r=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){r(s)}),300),Object(g.jsx)(v.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(v.a.Heading,{children:n}),Object(g.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(r.a.Component)),x=n(68),w=n(36),y=n(9),C=n.p+"static/media/logo1.2fab0ad6.png",S=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(y.c,{to:"/purchases",className:"nav-link",children:"My Purchases"}),Object(g.jsx)(y.c,{to:"/cart",className:"nav-link",children:"My Cart"}),Object(g.jsx)(y.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(y.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),k=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(y.c,{to:"/sign-up",className:"nav-link",id:"float",children:"Sign Up"}),Object(g.jsx)(y.c,{to:"/sign-in",className:"nav-link",id:"float",children:"Sign In"})]}),A=Object(g.jsx)(a.Fragment,{children:Object(g.jsx)(y.c,{exact:!0,to:"/movies",className:"nav-link",children:"Home"})}),N=function(e){var t=e.user;return Object(g.jsxs)(w.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(g.jsxs)(w.a.Brand,{children:[Object(g.jsx)("img",{className:"logo",src:C,alt:"Logo"}),Object(g.jsx)(y.b,{className:"header",to:"/",style:{color:"#FFFF",textDecoration:"none"},children:"Cinebuster"})]}),Object(g.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(w.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(g.jsxs)(x.a,{className:"ml-auto",children:[t&&Object(g.jsxs)("span",{id:"welcome-nav-bar",className:"navbar-text mr-2",children:["Welcome, ",t.email]}),A,t?S:k]})})]})},P=n(6),I="https://secure-taiga-59525.herokuapp.com",T="http://localhost:4741",U="localhost"===window.location.hostname?T:I,F=n(15),B=n.n(F),D=function(e){return B()({url:U+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},z=n(8),G=n(28),E=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,r=n.msgAlert,s=n.history,i=n.setUser;(t=a.state,B()({method:"POST",url:U+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return D(a.state)})).then((function(e){return i(e.data.user)})).then((function(){return r({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/movies")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),r({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign up"}),Object(g.jsxs)(z.a,{onSubmit:this.onSignUp,children:[Object(g.jsx)(z.a.Group,{controlId:"email",children:Object(g.jsx)(z.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Email address",onChange:this.handleChange,style:{marginBottom:"20px"}})}),Object(g.jsx)(z.a.Group,{controlId:"password",children:Object(g.jsx)(z.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange,style:{marginBottom:"20px"}})}),Object(g.jsx)(z.a.Group,{controlId:"passwordConfirmation",children:Object(g.jsx)(z.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})}),Object(g.jsx)(G.a,{variant:"primary",type:"submit",style:{marginTop:"15px"},children:"Sign up"})]})]})})}}]),n}(a.Component),M=Object(h.f)(E),R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.setUser;D(a.state).then((function(e){return s(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return r.push("/movies")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign in"}),Object(g.jsxs)(z.a,{onSubmit:this.onSignIn,children:[Object(g.jsx)(z.a.Group,{controlId:"email",children:Object(g.jsx)(z.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange,style:{marginBottom:"20px"}})}),Object(g.jsx)(z.a.Group,{controlId:"password",children:Object(g.jsx)(z.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})}),Object(g.jsx)(G.a,{variant:"primary",type:"submit",style:{marginTop:"15px"},children:"Sign in"})]})]})})}}]),n}(a.Component),L=Object(h.f)(R),q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return B()({url:U+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),_=Object(h.f)(q),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.user;(function(e,t){return B()({url:U+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(z.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(z.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(z.a.Label,{children:"Old password"}),Object(g.jsx)(z.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(z.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(z.a.Label,{children:"New Password"}),Object(g.jsx)(z.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),K=Object(h.f)(H),W=function(){return B()({method:"GET",url:U+"/movies"})},J=n(108),Y=function(e){return B()({url:U+"/carts",method:"get",headers:{Authorization:"Bearer ".concat(e.token)}})},X=function(e,t){return B()({url:U+"/carts/"+e,method:"delete",headers:{Authorization:"Bearer ".concat(t.token)}})},$=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClick=function(e){var t=a.props,n=t.user,r=t.msgAlert;e.preventDefault(),function(e,t){return B()({url:U+"/carts",method:"post",data:{cart:e},headers:{Authorization:"Bearer ".concat(t.token)}})}({title:e.target.attributes.getNamedItem("data-title").value,description:e.target.attributes.getNamedItem("data-description").value,price:e.target.attributes.getNamedItem("data-price").value},n).then((function(){return r({heading:"Item added",message:"Item has been added to your cart.",variant:"success"})})).catch((function(e){return r({heading:"Purchase failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={movies:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.msgAlert;W().then((function(t){return e.setState({movies:t.data.movies})})).then((function(){return t({heading:"Success",message:"Here's the movies",variant:"success"})})).catch((function(e){return t({heading:"Index failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this,n=this.state.movies;return null===n?"Loading...":(e=0===n.length?"No movies":n.map((function(e){return Object(g.jsxs)(J.a,{style:{width:"18rem"},children:[Object(g.jsx)(J.a.Img,{variant:"top",style:{objectFit:"cover"},src:e.imgUrl,height:"161"}),Object(g.jsxs)(J.a.Body,{children:[Object(g.jsx)(J.a.Title,{children:e.title}),Object(g.jsx)(J.a.Text,{children:e.description}),Object(g.jsx)(J.a.Text,{children:Object(g.jsxs)("strong",{children:["$",e.price]})}),Object(g.jsxs)(G.a,{variant:"btn btn-outline-danger",onClick:t.handleClick,"data-title":e.title,"data-description":e.description,"data-price":e.price,className:"button",children:["Add to cart"," "]})]})]},e.id)})),Object(g.jsx)("div",{className:"movies-text",style:{display:"flex",justifyContent:"center",flexFlow:"row wrap"},children:e}))}}]),n}(a.Component),V=Object(h.f)($),Z=function(e){return B()({url:U+"/purchases",method:"get",headers:{Authorization:"Bearer ".concat(e.token)}})},Q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClick=function(e){var t=a.props,n=t.user,r=t.msgAlert,s=t.history;e.preventDefault(),function(e,t){return B()({url:U+"/purchases/"+e,method:"delete",headers:{Authorization:"Bearer ".concat(t.token)}})}(e.target.attributes.getNamedItem("data-id").value,n).then((function(){return r({heading:"Refund success",message:"You should get your money back within 5 business day.",variant:"success"})})).then((function(){return s.push("/purchases")})).then((function(){return Z(n).then((function(e){a.setState({purchases:e.data.purchases})}))})).catch((function(e){return r({heading:"Refund failed :(",message:"Unable to refund you at the moment. Try again later. "+e.message,variant:"danger"})}))},a.state={purchases:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user;Z(t).then((function(t){e.setState({purchases:t.data.purchases})})).catch(console.error)}},{key:"render",value:function(){var e,t=this,n=this.state.movies,a=this.props.history;return null===n?"Loading...":(e=0===this.state.purchases.length?"No purchases have been made. Go buy something!":this.state.purchases.map((function(e){return Object(g.jsxs)(J.a,{style:{width:"18rem",marginTop:"40px"},children:[Object(g.jsx)(J.a.Body,{}),Object(g.jsxs)(J.a.Body,{children:[Object(g.jsx)(J.a.Title,{children:e.title}),Object(g.jsx)(J.a.Text,{children:e.description}),Object(g.jsx)(G.a,{style:{margin:"10px",alignItems:"center"},onClick:function(){return a.push("/purchases/".concat(e._id,"/review"))},children:"Review"}),Object(g.jsx)(G.a,{"data-id":e._id,onClick:t.handleClick,children:"Refund"}),Object(g.jsx)(J.a.Text,{style:{fontFamily:"Satisfy",fontSize:"25px"},children:e.review})]})]},e.id)})),Object(g.jsx)("div",{className:"movie-text",style:{display:"flex",justifyContent:"center",flexFlow:"row wrap"},children:e}))}}]),n}(a.Component),ee=Object(h.f)(Q),te=function(e){var t=e.purchase,n=e.handleSubmit,a=e.handleChange;return Object(g.jsxs)(z.a,{onSubmit:n,children:[Object(g.jsx)(z.a.Group,{controlId:"title",children:Object(g.jsx)(z.a.Control,{as:"textarea",required:!0,name:"review",value:t.review,placeholder:"Review",onChange:a})}),Object(g.jsx)(G.a,{type:"submit",children:"Submit"})]})},ne=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=Object(P.a)({},e.target.name,e.target.value);a.setState((function(e){return{purchase:Object(j.a)(Object(j.a)({},e.purchase),t)}}))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,r=t.msgAlert,s=t.history,i=t.match;(function(e,t,n){return B()({url:U+"/purchases/"+t,method:"patch",data:{purchase:e},headers:{Authorization:"Bearer ".concat(n.token)}})})(a.state.purchase,i.params.id,n).then((function(e){return s.push("/purchases")})).then((function(){return r({heading:"Movie Updated!",message:"Nice work, go check out your movie.",variant:"success"})})).catch((function(e){r({heading:"Movie update failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={purchase:{title:"",description:"",price:"",review:""}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user,r=t.msgAlert;(function(e,t){return B()({url:U+"/purchases/"+e,method:"get",headers:{Authorization:"Bearer ".concat(t.token)}})})(n.params.id,a).then((function(t){return e.setState({purchase:t.data.purchase[0]})})).then((function(){return r({heading:"Write a review",message:"Review your movie here",variant:"success"})})).catch((function(e){return r({heading:"Show movie failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h3",{children:["Add your review for ",Object(g.jsx)("em",{children:this.state.purchase.title})]}),Object(g.jsx)(te,{purchase:this.state.purchase,handleSubmit:this.handleSubmit,handleChange:this.handleChange})]})}}]),n}(a.Component),ae=Object(h.f)(ne),re=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={movies:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;W().then((function(t){return e.setState({movies:t.data.movies})}))}},{key:"render",value:function(){var e,t=this.state.movies;return null===t?"Loading...":(e=0===t.length?"Loading...":t.map((function(e){return Object(g.jsxs)(J.a,{style:{width:"18rem"},children:[Object(g.jsx)(J.a.Img,{variant:"top",style:{objectFit:"cover"},src:e.imgUrl,height:"161"}),Object(g.jsxs)(J.a.Body,{children:[Object(g.jsx)(J.a.Title,{children:e.title}),Object(g.jsx)(J.a.Text,{children:e.description})]})]},e.id)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"text",style:{textAlign:"center"},children:Object(g.jsx)("h4",{children:Object(g.jsx)("strong",{children:"Sign in to purchase our movies"})})}),Object(g.jsx)("div",{style:{display:"flex",justifyContent:"center",flexFlow:"row wrap"},children:e})]}))}}]),n}(a.Component),se=Object(h.f)(re),ie=n(67),ce=n.n(ie),oe=function(e){return 100*e},ue=function(e,t,n,a){var r,s;e.forEach((function(e){r={title:e.title,description:e.description,price:e.price.toString()},s=e._id,function(e,t){B()({url:U+"/purchases",method:"post",data:{purchase:e},headers:{Authorization:"Bearer ".concat(t.token)}})}(r,t),X(s,t).then((function(){return n({heading:"Item has been purchased",message:"Go to 'my purchases' to see your movies.",variant:"success"})})).then((function(){return a.push("/purchases")})).catch((function(e){return console.error(e)}))}))},le=function(e,t,n,a,r,s){return function(i){return B.a.post("http://myapidomain.com",{description:t,source:i.id,currency:"USD",amount:oe(e)}).then((function(){return ue(n,a,r,s)})).catch((function(){return function(e,t){t({heading:"Payment failed",message:"Sorry, we were unable to process your payment.",variant:"danger"})}()}))}},de=function(e){var t=e.cart,n=e.user,a=e.name,r=e.description,s=e.amount,i=e.msgAlert,c=e.history;return Object(g.jsx)(ce.a,{name:a,description:r,amount:oe(s),token:le(s,r,t,n,i,c),currency:"USD",stripeKey:"pk_test_51JSk3WBTmuyaUYrEPFAdU0cxfR75txhtOjEzVeCStfhkK4lgyNjRmTX8Szag2nGhHh5HBixKhKTILPCUJXKZNdf100jOmTkhco"})},he=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClick=function(e){var t=a.props,n=t.user,r=t.msgAlert,s=t.history;e.preventDefault();var i=e.target.attributes.getNamedItem("data-id").value;X(i,n).then((function(){return r({heading:"Item removed from cart",message:"The item has been removed from your cart successfully",variant:"success"})})).then((function(){return s.push("/carts")})).then((function(){return Y(n).then((function(e){a.setState({carts:e.data.carts})}))})).catch((function(e){return r({heading:"Removal failed",message:"Unable to remove item from your cart: "+e.message,variant:"danger"})}))},a.state={carts:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user;Y(t).then((function(t){e.setState({carts:t.data.carts})})).catch(console.error)}},{key:"render",value:function(){for(var e=this,t=this.state.carts,n=0,a=0;a<t.length;a++){n+=t[a].price}var r;return null===this.state.movies?"Loading...":(r=0===this.state.carts.length?"Cart is empty. Go add some movies!":this.state.carts.map((function(t){return Object(g.jsx)(J.a,{style:{width:"18rem",marginTop:"40px"},children:Object(g.jsxs)(J.a.Body,{children:[Object(g.jsx)(J.a.Title,{children:t.title}),Object(g.jsxs)(J.a.Text,{children:["$",t.price]}),Object(g.jsx)(G.a,{variant:"danger","data-id":t._id,onClick:e.handleClick,children:"Remove from cart"})]})},t.id)})),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{style:{display:"flex",justifyContent:"center",flexFlow:"row wrap"},children:r}),Object(g.jsx)(de,{msgAlert:this.props.msgAlert,history:this.props.history,user:this.props.user,cart:this.state.carts,name:"Enter payment information",description:"Thank you for shopping with us!",amount:n})]}))}}]),n}(a.Component),me=Object(h.f)(he),je=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,r=e.variant,s=Object(m.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:n,variant:r,id:s}])}}))},a.state={user:null,msgAlerts:[],purchases:[]},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,r=t.user;return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(N,{user:r}),n.map((function(t){return Object(g.jsx)(O,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(h.b,{path:"/sign-up",render:function(){return Object(g.jsx)(M,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{path:"/sign-in",render:function(){return Object(g.jsx)(L,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(f,{user:r,path:"/sign-out",render:function(){return Object(g.jsx)(_,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:r})}}),Object(g.jsx)(f,{user:r,path:"/change-password",render:function(){return Object(g.jsx)(K,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(f,{user:r,exact:!0,path:"/movies",render:function(){return Object(g.jsx)(V,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(f,{user:r,exact:!0,path:"/purchases",render:function(){return Object(g.jsx)(ee,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(f,{user:r,exact:!0,path:"/purchases/:id/review",render:function(){return Object(g.jsx)(ae,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(g.jsx)(se,{})}}),Object(g.jsx)(f,{user:r,path:"/cart",render:function(){return Object(g.jsx)(me,{msgAlert:e.msgAlert,user:r})}})]})]})}}]),n}(a.Component),pe=Object(g.jsx)(y.a,{basename:"/project-3-client",children:Object(g.jsx)(je,{})});i.a.render(pe,document.getElementById("root"))},74:function(e,t,n){},83:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.631d98f7.chunk.js.map