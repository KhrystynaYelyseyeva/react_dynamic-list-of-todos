(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,r){e.exports=r(25)},19:function(e,t,r){},20:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(12),c=r.n(s),o=r(1),l=r.n(o),u=r(2),i=r(4),d=r(5),m=r(6),p=r(8),h=r(7),f=(r(19),r(20),r(9)),v=r.n(f),E=function(e){var t=e.className,r=e.onClick,n=e.content;return a.a.createElement("button",{className:t,type:"button",onClick:r},n)};E.defaultProps={className:""};var b=r(3),_=r.n(b),U=(_.a.shape({id:_.a.number.isRequired,userId:_.a.number.isRequired,title:_.a.string.isRequired,completed:_.a.bool.isRequired}).isRequired,r(23),function(e){var t=e.todos,r=e.getUserId,n=e.selectedUserId;return a.a.createElement("div",{className:"TodoList"},a.a.createElement("h2",null,"Todos:"),a.a.createElement("div",{className:"TodoList__list-container"},a.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return a.a.createElement("li",{className:v()("TodoList__item",{"TodoList__item--unchecked":!e.completed},{"TodoList__item--checked":e.completed}),key:e.id},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:e.completed,readOnly:!0}),a.a.createElement("p",null,e.title)),a.a.createElement(E,{className:v()("TodoList__user-button","button",{"TodoList__user-button--selected":e.userId===n}),type:"button",onClick:function(){return r(e.userId)},content:"User #".concat(e.userId)}))})))))}),N=(r(24),r(10)),g=function(){var e=Object(u.a)(l.a.mark((function e(t,r){var n,a,s,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.timeout,a=void 0===n?8e3:n,s=new AbortController,c=setTimeout((function(){return s.abort()}),a),e.next=5,fetch(t,Object(N.a)(Object(N.a)({},r),{},{signal:s.signal}));case 5:return o=e.sent,clearTimeout(c),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://mate-api.herokuapp.com/todos",{timeout:800});case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.next=8,r.data;case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(l.a.mark((function e(t){var r,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("".concat("https://mate-api.herokuapp.com/users/").concat(t),{timeout:800});case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.next=8,n.data;case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(d.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={user:{},userNoFoundError:!1},e.getUser=Object(u.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e.props.selectedUserId);case 3:r=t.sent,e.handleShowUser(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.handleShowError();case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.handleShowUser=function(t){e.setState({user:t,userNoFoundError:!1})},e.handleShowError=function(){e.setState({userNoFoundError:!0})},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"componentDidUpdate",value:function(e){this.props.selectedUserId!==e.selectedUserId&&this.getUser()}},{key:"render",value:function(){var e=this.state,t=e.user,r=e.userNoFoundError,n=this.props.getUserId;return r?a.a.createElement("h2",{className:"CurrentUser__title"},a.a.createElement("span",null,"No user with current id")):a.a.createElement("div",{className:"CurrentUser"},a.a.createElement("h2",{className:"CurrentUser__title"},a.a.createElement("span",null,"Selected user:\xa0",t.id)),a.a.createElement("h3",{className:"CurrentUser__name"},t.name),a.a.createElement("p",{className:"CurrentUser__email"},t.email),a.a.createElement("p",{className:"CurrentUser__phone"},t.phone),a.a.createElement(E,{onClick:function(){return n(0)},className:"CurrentUser__button button",content:"Clear"}))}}]),r}(n.PureComponent),C=function(e){var t=e.search,r=e.filter,n=e.handleChange;return a.a.createElement("form",{className:"Form"},a.a.createElement("label",{htmlFor:"search"},a.a.createElement("input",{className:"Form__input",name:"search",id:"search",type:"search",placeholder:"Search",value:t,onChange:n})),a.a.createElement("label",{htmlFor:"filter"},a.a.createElement("select",{className:"Form__select",name:"filter",id:"filter",value:r,onChange:n},a.a.createElement("option",{value:"all"},"All"),a.a.createElement("option",{value:"active"},"Active"),a.a.createElement("option",{value:"completed"},"Completed"))))},I=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(d.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],selectedUserId:0,search:"",filter:"all"},e.getUserId=function(t){e.setState({selectedUserId:t})},e.handleChange=function(t){var r=t.target,n=r.name,a=r.value;e.setState(Object(i.a)({},n,a))},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,r=e.selectedUserId,n=e.search,s=e.filter,c=new RegExp(n,"gim"),o=t.filter((function(e){var t=e.title;return c.test(t)})).filter((function(e){var t=e.completed;switch(s){case"all":return!0;case"active":return!t;case"completed":return t;default:return!0}}));return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App__form"},a.a.createElement(C,{search:n,filter:s,handleChange:this.handleChange})),a.a.createElement("div",{className:"App__sidebar"},a.a.createElement(U,{todos:o,getUserId:this.getUserId,selectedUserId:r})),a.a.createElement("div",{className:"App__content"},a.a.createElement("div",{className:"App__content-container"},r?a.a.createElement(y,{getUserId:this.getUserId,selectedUserId:r}):"No user selected")))}}]),r}(a.a.Component);c.a.render(a.a.createElement(I,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a1a43205.chunk.js.map