(this["webpackJsonpreact-portfolio-template-v2"]=this["webpackJsonpreact-portfolio-template-v2"]||[]).push([[0],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),i=(a(93),a(6)),o=a(7),m=a(8),s=a(9),u=(a(22),a(10)),p=a(17),h=function(e){var t=e.name;e.contactEmail;return l.a.createElement("div",null,l.a.createElement("div",{className:"header_container"},l.a.createElement(u.b,{to:"/"},l.a.createElement("h1",null,t,".")),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/",className:"btnHome"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{className:"btnBrowse",to:"/campaign_browsing"},"Browse")),l.a.createElement("button",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/campaign_type"},"Create Campaign")))))))},d=function(e){e.name;var t=e.paragraph,a=e.authorImage;return l.a.createElement("div",null,l.a.createElement("div",{className:"home_container"},l.a.createElement("div",{className:"home_head_wrapper"},l.a.createElement("h1",null,"Helping the",l.a.createElement("br",null),l.a.createElement("span",null,"community")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,t)),l.a.createElement("div",{className:"image_container"},l.a.createElement("img",{src:a,alt:"Logo"}),l.a.createElement("div",{className:"bg"}))))},E=a(25),g=function(e){var t=e.contactEmail,a=e.socialLinks;return l.a.createElement("div",{className:"contact_container"},l.a.createElement("h1",null,"Help the community"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{className:"email_link",href:"mailto:".concat(t)},t),l.a.createElement("div",{className:"social_links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:".concat(t)},l.a.createElement(E.b,null))),l.a.createElement("li",null,l.a.createElement("a",{href:a[0].url},l.a.createElement(E.d,null))),l.a.createElement("li",null,l.a.createElement("a",{href:a[1].url},l.a.createElement(E.c,null))),l.a.createElement("li",null,l.a.createElement("a",{href:a[2].url},l.a.createElement(E.a,null))))))},b={name:"Donaid",contactEmail:"Info@donaid.com",landingPageName:"Donaid",landingPagePara:"Our solution is to connect those who want to donate to local health care workers. This can include anything from collecting surgical masks and then donating them to a local hospital, or collecting funds for good cause.",landingPageImage:"./create.png",projects:[{id:1,title:"Project One",imageSrc:"https://via.placeholder.com/300",url:""},{id:2,title:"Project Two",imageSrc:"https://via.placeholder.com/300",url:"/"},{id:3,title:"Project Three",imageSrc:"https://via.placeholder.com/300",url:"/"},{id:4,title:"Project Four",imageSrc:"https://via.placeholder.com/300",url:"/"},{id:5,title:"Project Five",imageSrc:"https://via.placeholder.com/300",url:"/"},{id:6,title:"Project Six",imageSrc:"https://via.placeholder.com/300",url:"/"}],social:[{name:"LinkedIn",url:"https://www.linkedin.com//"},{name:"Github",url:"https://www.behance.net/"},{name:"Dribbble",url:"https://dribbble.com/"}],aboutTitle:"Helping the community"},f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card",style:{display:"inline-block"}},l.a.createElement("div",{className:"header"},l.a.createElement("h6",{className:"title"},this.props.title)),l.a.createElement("div",{className:"content"},this.props.content))}}]),a}(n.Component),v=a(162),y=a(71),C=a(67),O=a.n(C),j=a(68),S=a.n(j),k=a(69),x=a.n(k),N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{name:b.name,contactEmail:b.contactEmail}),l.a.createElement(d,{name:b.landingPageName,paragraph:b.landingPagePara,authorImage:x.a}),l.a.createElement("div",{className:"get-started"},l.a.createElement("h4",{style:{textAlign:"center",marginTop:"25px"}},"Get Started Now"),l.a.createElement(v.a,null,l.a.createElement(y.a,{md:6},l.a.createElement("div",{style:{float:"right",marginBottom:"40px"}},l.a.createElement(u.b,{to:"/campaign_type"},l.a.createElement(f,{title:"Create Campaign",content:l.a.createElement("div",{className:"description"},l.a.createElement("img",{style:{height:"100px",width:"100px",marginLeft:"70px"},src:O.a}),l.a.createElement("p",{style:{fontSize:"14px",color:"#605e5e"}},"Help community by creating a meaningful campaign"))})))),l.a.createElement(y.a,{md:6},l.a.createElement("div",null,l.a.createElement(u.b,{to:"/campaign_browsing"},l.a.createElement(f,{title:"Browse Campaign",content:l.a.createElement("div",{className:"description"},l.a.createElement("img",{style:{height:"100px",width:"100px",marginLeft:"70px"},src:S.a}),l.a.createElement("p",{style:{fontSize:"14px",color:"#605e5e",paddingTop:"20px"}},"Get help from your community"))})))))),l.a.createElement(g,{contactEmail:b.contactEmail,socialLinks:b.social}))},w=a(72),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card col"},this.props.children)}}]),a}(l.a.Component),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e="selectable "+(this.props.selected?"selected":"");return l.a.createElement(I,null,l.a.createElement("div",{className:e,onClick:this.props.onClick},this.props.children,l.a.createElement("div",{className:"check"},l.a.createElement("span",{className:"checkmark"},"\u2714"))))}}]),a}(l.a.Component),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=(e.description,e.selected);return l.a.createElement(D,{onClick:this.props.onClick,selected:a},l.a.createElement("div",{className:"content"},l.a.createElement("h1",{className:"title"},t)))}}]),a}(l.a.Component),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e);var l={selected:e.multiple?[]:-1};return n.state=l,n}return Object(o.a)(a,[{key:"onItemSelected",value:function(e){this.setState((function(t,a){if(a.multiple){var n=t.selected,l=n.indexOf(e);return l>-1?(n.splice(l,1),a.onChange(n)):n.length>=a.maxSelectable||(n.push(e),a.onChange(n)),{selected:n}}return a.onChange(e),{selected:e}}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.contents,n=t.multiple,r=a.map((function(t,a){var r=t.title,c=t.description,i=t.selected;i=n?e.state.selected.indexOf(a)>-1:e.state.selected==a;return l.a.createElement(L,{key:a,title:r,description:c,selected:i,onClick:function(t){return e.onItemSelected(a)}})}));return l.a.createElement("div",{class:"row"},r)}}]),a}(l.a.Component),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"onListChanged",value:function(e){this.setState({selected:e})}},{key:"submit",value:function(){0===this.state.selected?(localStorage.setItem("Type","Money"),window.alert("Selected: Money")):1===this.state.selected?(localStorage.setItem("Type","Supplies"),window.alert("Selected: Supplies")):2===this.state.selected&&(localStorage.setItem("Type","Human Resources"),window.alert("Selected: Human Resources"))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement(P,{multiple:this.props.multiple,maxSelectable:this.props.maxSelectable,contents:this.props.cardContents,onChange:this.onListChanged.bind(this)}),l.a.createElement(u.b,{to:"/campaign_title"},l.a.createElement(w.a,{id:"next_button",variant:"primary",onClick:function(t){return e.submit()}},"Next")))}}]),a}(l.a.Component),_=[{title:"Money",description:"Funding resources for institutions"},{title:"Supplies",description:"Physical objects needed"},{title:"Human Resources",description:"I have no idea what this is"}],B=function(){return l.a.createElement("div",null,l.a.createElement(h,{name:b.name,contactEmail:b.contactEmail}),l.a.createElement("div",{className:"about_container"},l.a.createElement("h1",null,"1. What is your campaign type?"),l.a.createElement("p",{className:"titleP"},"* required information"),l.a.createElement("div",{className:"cards row"},l.a.createElement(T,{cardContents:_}))),l.a.createElement(g,{contactEmail:b.contactEmail,socialLinks:b.social}))},A=a(11),H=a(165),M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(A.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),localStorage.setItem("Title",this.state.value)}},{key:"render",value:function(){var e=this;return l.a.createElement(H.a,null," ","onSubmit=",this.handleSubmit,l.a.createElement(H.a.Group,{controlId:"formBasicEmail"},l.a.createElement(H.a.Label,null,"Campaign Title"),l.a.createElement(H.a.Control,{type:"text",placeholder:"Enter Title",value:this.state.value,onChange:this.handleChange}),l.a.createElement(H.a.Text,{className:"text-muted"},"This title will appear on your campaign page")),l.a.createElement(u.b,{to:"/campaign_purpose"},l.a.createElement(w.a,{id:"next_button",variant:"primary",type:"submit",onClick:function(t){return e.handleSubmit()}},"Next")))}}]),a}(l.a.Component),J=function(){return l.a.createElement("div",null,l.a.createElement(h,{name:b.name,contactEmail:b.contactEmail}),l.a.createElement("div",{className:"about_container"},l.a.createElement("h1",null,"Name of Campaign"),l.a.createElement("p",null,"* required information"),l.a.createElement("h2",null,"Tip: Get peoples attention by writing a short focused title for your campaign"),l.a.createElement("list",{class:"list"},l.a.createElement("li",null,"+ Keep it short and to the point"),l.a.createElement("li",null,"+ Focus on the solution"),l.a.createElement("li",null,"+ Communicate urgency")),l.a.createElement(M,null)),l.a.createElement(g,{contactEmail:b.contactEmail,socialLinks:b.social}))},R=a(164),z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updatePurpose=function(e){n.setState({purpose:e})},n.updateNumber=function(){localStorage.setItem("Purpose",n.state.purpose)},n.state={purpose:"",number:0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(h,{name:b.name,contactEmail:b.contactEmail}),l.a.createElement("div",{className:"about_container"},l.a.createElement("h1",null,"Explain the purpose and goal of the campaign"),l.a.createElement("p",null,"* required information"),l.a.createElement("h2",null,"Tip: Write a clear explanation of your purpose of the campaign."),l.a.createElement(F,{onChange:function(t){e.updatePurpose(t)}}),l.a.createElement("br",null),l.a.createElement("h2",null,"Donation Goal can be..."),l.a.createElement("list",{class:"list"},l.a.createElement("li",null,"+ Number of items"),l.a.createElement("li",null,"+ A dollar amount")),l.a.createElement(G,{onSubmit:function(){e.updateNumber()}})),l.a.createElement(g,{contactEmail:b.contactEmail,socialLinks:b.social}))}}]),a}(l.a.Component),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(H.a,null,l.a.createElement(R.a,{placeholder:"Tell us more description",style:{minHeight:100,width:500,marginLeft:"5px"},onChange:function(t){e.props.onChange(t.target.value)}}))}}]),a}(l.a.Component),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(A.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Amount was submitted: "+this.state.value),localStorage.setItem("Number",this.state.value),this.props.onSubmit()}},{key:"render",value:function(){var e=this;return l.a.createElement(H.a,null," ","onSubmit=",this.handleSubmit,"}}",l.a.createElement(H.a.Control,{type:"text",placeholder:"Amount goes here",value:this.state.value,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/campaign_details"},l.a.createElement(w.a,{id:"next_button",variant:"primary",type:"submit",onClick:function(t){return e.handleSubmit()}},"Next")))}}]),a}(l.a.Component),U=z,W=a(50),q=a.n(W),Z=a(79),K=a(163),V=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateCardList=function(e){var t=JSON.parse(localStorage.getItem("original_cards")).filter((function(t){return t.Type===e}));localStorage.setItem("cards",JSON.stringify(t)),n.setState({cards:t})},n.sortCardList=function(e){var t=JSON.parse(localStorage.getItem("original_cards"));"Date Posted"===e?t.sort((function(e,t){return e.Date-t.Date})):"A-Z"===e?t.sort((function(e,t){var a=e.Title.toLowerCase(),n=t.Title.toLowerCase();return a<n?-1:a>n?1:0})):"Z-A"===e&&t.sort((function(e,t){var a=e.Title.toLowerCase(),n=t.Title.toLowerCase();return n<a?-1:n>a?1:0})),localStorage.setItem("cards",JSON.stringify(t)),n.setState({cards:t})},function(e,t){ee.apply(this,arguments)}(n.props.fireDB,[]),n.state={cards:JSON.parse(localStorage.getItem("cards"))},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(h,{name:b.name,contactEmail:b.contactEmail}),l.a.createElement(v.a,null,l.a.createElement(y.a,{md:9},l.a.createElement("h4",{style:{textAlign:"center",marginBottom:"40px",marginLeft:"280px"}},"Browse Campaigns")),l.a.createElement(y.a,{md:2},l.a.createElement(K.a,null,l.a.createElement(K.a.Toggle,{variant:"success",id:"dropdown-basic"},"Type of Campaign"),l.a.createElement(K.a.Menu,null,l.a.createElement(K.a.Item,null,l.a.createElement($,{text:"Supplies",onClick:function(t){e.updateCardList(t)}})),l.a.createElement(K.a.Item,null,l.a.createElement($,{text:"Money",onClick:function(t){e.updateCardList(t)}})),l.a.createElement(K.a.Item,null,l.a.createElement($,{text:"Human Resources",onClick:function(t){e.updateCardList(t)}}))))),l.a.createElement(y.a,{md:1},l.a.createElement(K.a,null,l.a.createElement(K.a.Toggle,{variant:"success",id:"dropdown-basic"},"Sort By"),l.a.createElement(K.a.Menu,null,l.a.createElement(K.a.Item,null,l.a.createElement(Y,{text:"Date Posted",onClick:function(t){e.sortCardList(t)}})),l.a.createElement(K.a.Item,null,l.a.createElement(Y,{text:"A-Z",onClick:function(t){e.sortCardList(t)}})),l.a.createElement(K.a.Item,null,l.a.createElement(Y,{text:"Z-A",onClick:function(t){e.sortCardList(t)}})))))),l.a.createElement(v.a,null,l.a.createElement(Q,{db:this.props.db,cards:this.state.cards})),l.a.createElement(g,{contactEmail:b.contactEmail,socialLinks:b.social}))}}]),a}(n.Component),Y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("span",{onClick:function(t){t.preventDefault(),e.props.onClick(e.props.text)}},this.props.text)}}]),a}(l.a.Component),$=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("span",{onClick:function(t){t.preventDefault(),e.props.onClick(e.props.text)}},this.props.text)}}]),a}(l.a.Component),Q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t=[],a=(this.props.db,this.props.cards);for(e=0;e<a.length;e++){var n=a[e];t.push(l.a.createElement(f,{title:n.Title,content:l.a.createElement("div",null,l.a.createElement("img",{src:n.Picture,alt:"purpose of campaign"}),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,n.Purpose)),l.a.createElement("div",{className:"learn-more"},l.a.createElement(X,{index:n.index})))}))}return l.a.createElement("div",null,t)}}]),a}(l.a.Component),X=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){localStorage.setItem("index",this.props.index)}},{key:"render",value:function(){var e=this;return l.a.createElement(u.b,{to:"/campaign_information",onClick:function(t){return e.handleSubmit()}},l.a.createElement("a",null,"Learn More"))}}]),a}(l.a.Component);function ee(){return(ee=Object(Z.a)(q.a.mark((function e(t,a){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,e.next=3,t.collection("campaigns").get().then((function(e){e.forEach((function(e){var t=e.data();a.push({Title:t.Title,Picture:t.Picture,Purpose:t.Purpose,Type:t.Type,Phone:t.Phone,Location:t.Location,Email:t.Email,Number:t.Number,Date:t.Date,index:n,Donation:t.Donation}),n++}))}));case 3:console.log(a.length),localStorage.setItem("original_cards",JSON.stringify(a)),localStorage.setItem("cards",JSON.stringify(a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=V;var ae=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).updateDonation=function(){var e,t,a;n.setState({donation:n.state.donation+1}),e=n.props.fireDB,t=n.state.title,a=n.state.donation,e.collection("campaigns").doc(t).update({Donation:a+1}).then((function(){console.log("Document successfully updated!")})).catch((function(e){console.error("Error updating document: ",e)}));var l=n.state.donation+1;alert("Congrats! You have contributed to these "+l+" donations!")};var l=JSON.parse(localStorage.getItem("original_cards"))[localStorage.getItem("index")];return n.state={title:l.Title,type:l.Type,purpose:l.Purpose,picture:l.Picture,number:l.Number,email:l.Email,location:l.Location,phone:l.Phone,donation:l.Donation},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"campaign_info"},l.a.createElement(h,{name:b.name,contactEmail:b.contactEmail}),l.a.createElement("h4",{style:{textAlign:"center",marginBottom:"40px"}},this.state.title+": "+this.state.type),l.a.createElement(v.a,null,l.a.createElement(y.a,{md:7},l.a.createElement("img",{style:{maxHeight:"500px",maxWidth:"540px"},src:this.state.picture})),l.a.createElement(y.a,{md:5},l.a.createElement(f,{title:this.state.donation+" donated of "+this.state.number,content:l.a.createElement("div",null,l.a.createElement("div",{className:"description"},l.a.createElement("p",{style:{fontSize:"14px"}},"Thank you for supporting this campaign! We need more donators to reach the goal - can you help?")),l.a.createElement("div",{className:"btnDonate",style:{textAlign:"center"}},l.a.createElement("button",{onClick:function(){e.updateDonation()}},l.a.createElement("a",null,"Donate to Campaign"))))}))),l.a.createElement(v.a,null,l.a.createElement(y.a,{md:7},l.a.createElement("h2",{style:{color:"black",marginTop:"40px"}},"Location: "+this.state.location),l.a.createElement("p",{style:{color:"black",fontSize:"18px"}},"Description: "+this.state.purpose)),l.a.createElement(y.a,{md:5},l.a.createElement("h4",{style:{color:"black",marginTop:"40px"}},"Phone: "+this.state.phone),l.a.createElement("p",{style:{color:"black",fontSize:"18px"}},"Email: "+this.state.email))),l.a.createElement(g,{contactEmail:b.contactEmail,socialLinks:b.social}))}}]),a}(l.a.Component),ne=a(85),le=a.n(ne),re=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateLocation=function(e){n.setState({location:e})},n.updateEmail=function(e){n.setState({email:e})},n.updateNumber=function(e){n.setState({number:e})},n.uploadInfo=function(){localStorage.setItem("Location",n.state.location),localStorage.setItem("Email",n.state.email),localStorage.setItem("Phone",n.state.number)},n.state={location:"",email:"",phone:"",image:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(h,{name:b.name,contactEmail:b.contactEmail}),l.a.createElement("div",{className:"about_container"},l.a.createElement("h1",null,"Add Details"),l.a.createElement("p",null,"* required information"),l.a.createElement("h2",null,"More information is always better"),l.a.createElement("h1",null,"Location"),l.a.createElement(ce,{onChange:function(t){e.updateLocation(t)}}),l.a.createElement("br",null),l.a.createElement("h1",null,"Contact Information"),l.a.createElement(ie,{onChange:function(t){e.updateEmail(t)}}),l.a.createElement("br",null),l.a.createElement(oe,{onChange:function(t){e.updateNumber(t)}}),l.a.createElement("h1",null,"Add Photos"),l.a.createElement("p",null,"Max Size 1MB (Or result in creation failure)"),l.a.createElement(me,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(se,{fireDB:this.props.fireDB,onSubmit:function(){e.uploadInfo()}})),l.a.createElement(g,{contactEmail:b.contactEmail,socialLinks:b.social}))}}]),a}(l.a.Component),ce=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(A.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return l.a.createElement(H.a,null," ",l.a.createElement(H.a.Control,{type:"text",placeholder:"Location goes here",onChange:this.handleChange}))}}]),a}(l.a.Component),ie=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(A.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return l.a.createElement(H.a,null," ",l.a.createElement(H.a.Control,{type:"text",placeholder:"Email goes here",onChange:this.handleChange}))}}]),a}(l.a.Component),oe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(A.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return l.a.createElement(H.a,null," ",l.a.createElement(H.a.Control,{type:"text",placeholder:"Phone number goes here",onChange:this.handleChange}))}}]),a}(l.a.Component),me=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).onChange=function(e){console.log(e),localStorage.setItem("Picture",e[0].dataURL)},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(le.a,{onChange:this.onChange,maxNumber:10,multiple:!0,maxFileSize:5242880,acceptType:["jpg","gif","png"]},(function(e){var t=e.imageList,a=e.onImageUpload,n=e.onImageRemoveAll;return l.a.createElement("div",null,l.a.createElement("button",{onClick:a},"Upload images"),l.a.createElement("button",{onClick:n},"Remove all images"),t.map((function(e){return l.a.createElement("div",{key:e.key},l.a.createElement("img",{src:e.dataURL}),l.a.createElement("button",{onClick:e.onUpdate},"Update"),l.a.createElement("button",{onClick:e.onRemove},"Remove"))})))}))}}]),a}(l.a.Component),se=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(A.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){this.props.onSubmit();var t=(new Date).getFullYear()+"/"+(new Date).getMonth()+"/"+(new Date).getDate();localStorage.setItem("Date",t),localStorage.setItem("index",0),alert("Campaign successfully created!"),function(e){var t=localStorage.getItem("Title"),a=localStorage.getItem("Type"),n=localStorage.getItem("Phone"),l=localStorage.getItem("Purpose"),r=localStorage.getItem("Location"),c=localStorage.getItem("Picture"),i=localStorage.getItem("Email"),o=localStorage.getItem("Number"),m=localStorage.getItem("Date");e.collection("campaigns").doc(t).set({Title:t,Type:a,Phone:n,Purpose:l,Location:r,Picture:c,Email:i,Number:o,Date:m,Donation:0}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)})),console.log(c)}(this.props.fireDB)}},{key:"render",value:function(){var e=this;return l.a.createElement(u.b,{to:"/"},l.a.createElement(w.a,{id:"finish_button",variant:"primary",type:"submit",onClick:function(t){return e.handleSubmit()}},"Finish Creation"))}}]),a}(l.a.Component);var ue=re,pe=a(36),he=a.n(pe),de=(a(152),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e),he.a.apps.length||he.a.initializeApp({apiKey:"AIzaSyBgW25euGpULSICvSS-1EcqDDDVHOVHjNc",authDomain:"donaid-442.firebaseapp.com",projectId:"donaid-442"});var l=he.a.firestore();return n.state={firebase:l},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,{basename:""},l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/campaign_type"},l.a.createElement(B,null)),l.a.createElement(p.a,{path:"/campaign_title"},l.a.createElement(J,null)),l.a.createElement(p.a,{path:"/campaign_purpose"},l.a.createElement(U,null)),l.a.createElement(p.a,{path:"/campaign_details"},l.a.createElement(ue,{fireDB:this.state.firebase})),l.a.createElement(p.a,{path:"/",exact:!0},l.a.createElement(N,null)),l.a.createElement(p.a,{path:"/campaign_browsing"},l.a.createElement(te,{fireDB:this.state.firebase})),l.a.createElement(p.a,{path:"/campaign_information"},l.a.createElement(ae,{fireDB:this.state.firebase})),l.a.createElement(p.a,{exact:!0,path:"/about"},l.a.createElement(B,null))))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/create.920d8a3a.png"},68:function(e,t,a){e.exports=a.p+"static/media/browse.a2dee9f2.png"},69:function(e,t,a){e.exports=a.p+"static/media/Team.aedbc5d5.svg"},88:function(e,t,a){e.exports=a(155)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.31624c99.chunk.js.map