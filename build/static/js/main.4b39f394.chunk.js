(this["webpackJsonpreact-portfolio-template-v2"]=this["webpackJsonpreact-portfolio-template-v2"]||[]).push([[0],{159:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),i=(a(97),a(6)),o=a(7),m=a(8),s=a(9),u=(a(22),a(10)),p=a(17),h=a(69),d=a(66),g=a.n(d),E=function(e){var t=e.name;return l.a.createElement("div",{className:"top_nav",style:{height:"150px",background:"linear-gradient(rgba(213, 232, 246, 1), rgba(213, 232, 246, 0))",marginRight:"-170px",marginLeft:"-170px"}},l.a.createElement("div",{className:"header_container"},l.a.createElement(u.b,{to:"/"},l.a.createElement("h1",null,t,".")),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{style:{paddingTop:"30px"}},l.a.createElement("a",{href:"/",className:"btnHome"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{className:"btnBrowse",to:"/campaign_browsing"},"Browse")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/campaign_type"},l.a.createElement(h.a,{className:"btnCreate",style:{height:"50px",width:"200px"}},"Create Campaign",l.a.createElement("img",{src:g.a}))))))))},b=function(e){e.name;var t=e.paragraph,a=e.authorImage;return l.a.createElement("div",null,l.a.createElement("div",{className:"home_container"},l.a.createElement("div",{className:"home_head_wrapper"},l.a.createElement("h1",null,"Helping the",l.a.createElement("br",null),l.a.createElement("span",null,"community")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,t)),l.a.createElement("div",{className:"image_container"},l.a.createElement("img",{src:a,alt:"Logo"}),l.a.createElement("div",{className:"bg"}))))},f=a(25),v=function(e){var t=e.contactEmail,a=e.socialLinks;return l.a.createElement("div",{className:"contact_container"},l.a.createElement("h1",null,"Help the community"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{className:"email_link",href:"mailto:".concat(t)},t),l.a.createElement("div",{className:"social_links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:".concat(t)},l.a.createElement(f.b,null))),l.a.createElement("li",null,l.a.createElement("a",{href:a[0].url},l.a.createElement(f.d,null))),l.a.createElement("li",null,l.a.createElement("a",{href:a[1].url},l.a.createElement(f.c,null))),l.a.createElement("li",null,l.a.createElement("a",{href:a[2].url},l.a.createElement(f.a,null))))))},y={name:"Donaid",contactEmail:"Info@donaid.com",landingPageName:"Donaid",landingPagePara:"Our solution is to connect those who want to donate to local health care workers. This can include anything from collecting surgical masks and then donating them to a local hospital, or collecting funds for good cause.",landingPageImage:"./create.png",projects:[{id:1,title:"Project One",imageSrc:"https://via.placeholder.com/300",url:""},{id:2,title:"Project Two",imageSrc:"https://via.placeholder.com/300",url:"/"},{id:3,title:"Project Three",imageSrc:"https://via.placeholder.com/300",url:"/"},{id:4,title:"Project Four",imageSrc:"https://via.placeholder.com/300",url:"/"},{id:5,title:"Project Five",imageSrc:"https://via.placeholder.com/300",url:"/"},{id:6,title:"Project Six",imageSrc:"https://via.placeholder.com/300",url:"/"}],social:[{name:"LinkedIn",url:"https://www.linkedin.com//"},{name:"Github",url:"https://www.behance.net/"},{name:"Dribbble",url:"https://dribbble.com/"}],aboutTitle:"Helping the community"},C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card",style:{display:"inline-block"}},l.a.createElement("div",{className:"header"},l.a.createElement("h6",{className:"title"},this.props.title)),l.a.createElement("div",{className:"content"},this.props.content))}}]),a}(n.Component),S=a(166),j=a(74),O=a(71),x=a.n(O),k=a(72),N=a.n(k),w=a(73),A=a.n(w),I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{name:y.name,contactEmail:y.contactEmail}),l.a.createElement(b,{name:y.landingPageName,paragraph:y.landingPagePara,authorImage:A.a}),l.a.createElement("div",{className:"get-started"},l.a.createElement("h2",{style:{textAlign:"center",marginTop:"55px",color:"black"}},"Get Started Now"),l.a.createElement(S.a,null,l.a.createElement(j.a,{md:6},l.a.createElement("div",{style:{float:"right",marginBottom:"55px"}},l.a.createElement(u.b,{to:"/campaign_type"},l.a.createElement(C,{title:"Create Campaign",content:l.a.createElement("div",{className:"description"},l.a.createElement("img",{style:{height:"100px",width:"100px",marginLeft:"70px"},src:x.a,alt:"create description"}),l.a.createElement("p",{style:{fontSize:"14px",color:"#605e5e"}},"Help community by creating a meaningful campaign"))})))),l.a.createElement(j.a,{md:6},l.a.createElement("div",null,l.a.createElement(u.b,{to:"/campaign_browsing"},l.a.createElement(C,{title:"Browse Campaign",content:l.a.createElement("div",{className:"description"},l.a.createElement("img",{style:{height:"100px",width:"100px",marginLeft:"70px"},src:N.a,alt:"browse description"}),l.a.createElement("p",{style:{fontSize:"14px",color:"#605e5e",paddingTop:"20px"}},"Get help from your community"))})))))),l.a.createElement(v,{contactEmail:y.contactEmail,socialLinks:y.social}))},L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card col"},this.props.children)}}]),a}(l.a.Component),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e="selectable "+(this.props.selected?"selected":"");return l.a.createElement(L,null,l.a.createElement("div",{className:e,onClick:this.props.onClick},this.props.children,l.a.createElement("div",{className:"check"},l.a.createElement("span",{className:"checkmark"},"\u2714"))))}}]),a}(l.a.Component),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.selected;return l.a.createElement(T,{onClick:this.props.onClick,selected:n},l.a.createElement("div",{className:"content"},l.a.createElement("h1",{className:"title"},t),l.a.createElement("br",null),l.a.createElement("p",{className:"description",style:{width:200}},a)))}}]),a}(l.a.Component),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e);var l={selected:e.multiple?[]:-1};return n.state=l,n}return Object(o.a)(a,[{key:"onItemSelected",value:function(e){this.setState((function(t,a){if(a.multiple){var n=t.selected,l=n.indexOf(e);return l>-1?(n.splice(l,1),a.onChange(n)):n.length>=a.maxSelectable||(n.push(e),a.onChange(n)),{selected:n}}return a.onChange(e),{selected:e}}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.contents,n=t.multiple,r=a.map((function(t,a){var r=t.title,c=t.description,i=t.selected;return i=n?e.state.selected.indexOf(a)>-1:e.state.selected===a,l.a.createElement(P,{key:a,title:r,description:c,selected:i,onClick:function(t){return e.onItemSelected(a)}})}));return l.a.createElement("div",{className:"row"},r)}}]),a}(l.a.Component),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={selected:-1,clickAble:!1},n}return Object(o.a)(a,[{key:"onListChanged",value:function(e){this.setState({selected:e,clickAble:!0})}},{key:"submit",value:function(){0===this.state.selected?(localStorage.setItem("Type","Money"),window.alert("Selected: Money")):1===this.state.selected?(localStorage.setItem("Type","Supplies"),window.alert("Selected: Supplies")):2===this.state.selected&&(localStorage.setItem("Type","Human Resources"),window.alert("Selected: Human Resources"))}},{key:"submitNothing",value:function(e){e.preventDefault(),window.alert("Must choose a type")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement(D,{multiple:this.props.multiple,maxSelectable:this.props.maxSelectable,contents:this.props.cardContents,onChange:this.onListChanged.bind(this)}),this.state.clickAble?l.a.createElement(u.b,{to:"/campaign_title"},l.a.createElement(h.a,{id:"next_button",variant:"primary",onClick:function(t){return e.submit()}},"Next")):l.a.createElement(u.b,{to:"/campaign_title"},l.a.createElement(h.a,{id:"next_button",variant:"primary",onClick:function(t){return e.submitNothing(t)}},"Next")))}}]),a}(l.a.Component),B=[{title:"Money",description:"Funding resources for institutions"},{title:"Supplies",description:"Physical objects needed"},{title:"Human Resources",description:"Volunteers able to help"}],J=function(){return localStorage.setItem("Type",""),l.a.createElement("div",null,l.a.createElement(E,{name:y.name,contactEmail:y.contactEmail}),l.a.createElement("div",{className:"about_container"},l.a.createElement("h1",null,"1. What is your campaign type?"),l.a.createElement("p",{className:"titleP"},"* required information"),l.a.createElement("div",{className:"cards row"},l.a.createElement(_,{cardContents:B}))),l.a.createElement(v,{contactEmail:y.contactEmail,socialLinks:y.social}))},H=a(11),M=a(169),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:"",clickAble:!1},n.handleChange=n.handleChange.bind(Object(H.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(H.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value}),""!==e.target.value?this.setState({clickAble:!0}):""===e.target.value&&this.setState({clickAble:!1})}},{key:"handleSubmit",value:function(){alert("A name was submitted: "+this.state.value),localStorage.setItem("Title",this.state.value)}},{key:"handleSubmitNothing",value:function(e){e.preventDefault(),window.alert("Must input a title for your campaign")}},{key:"render",value:function(){var e=this;return l.a.createElement(M.a,null," ","onSubmit=",this.handleSubmit,l.a.createElement(M.a.Group,{controlId:"formBasicEmail"},l.a.createElement(M.a.Label,null,"Campaign Title"),l.a.createElement(M.a.Control,{type:"text",placeholder:"Enter Title",value:this.state.value,onChange:this.handleChange}),l.a.createElement(M.a.Text,{className:"text-muted"},"This title will appear on your campaign page")),this.state.clickAble?l.a.createElement(u.b,{to:"/campaign_purpose"},l.a.createElement(h.a,{id:"next_button",variant:"primary",type:"submit",onClick:function(){return e.handleSubmit()}},"Next")):l.a.createElement(u.b,{to:"/campaign_purpose"},l.a.createElement(h.a,{id:"next_button",variant:"primary",type:"submit",onClick:function(t){return e.handleSubmitNothing(t)}},"Next")))}}]),a}(l.a.Component),U=function(){return localStorage.setItem("Title",""),l.a.createElement("div",null,l.a.createElement(E,{name:y.name,contactEmail:y.contactEmail}),l.a.createElement("div",{className:"about_container"},l.a.createElement("h1",null,"Name of Campaign"),l.a.createElement("p",{style:{marginTop:"10px"}},"* required information"),l.a.createElement("h2",null,"Tip: Get peoples attention by writing a short focused title for your campaign"),l.a.createElement("list",{class:"list"},l.a.createElement("li",null,"+ Keep it short and to the point"),l.a.createElement("li",null,"+ Focus on the solution"),l.a.createElement("li",null,"+ Communicate urgency")),l.a.createElement(R,null)),l.a.createElement(v,{contactEmail:y.contactEmail,socialLinks:y.social}))},z=a(168),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updatePurpose=function(e){n.setState({purpose:e})},n.updateNumber=function(){localStorage.setItem("Purpose",n.state.purpose)},n.state={purpose:"",number:0},localStorage.setItem("Purpose",""),localStorage.setItem("Number",""),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(E,{name:y.name,contactEmail:y.contactEmail}),l.a.createElement("div",{className:"about_container"},l.a.createElement("h1",null,"Explain the purpose and goal of the campaign"),l.a.createElement("p",{style:{marginTop:"10px"}},"* required information"),l.a.createElement("h2",null,"Tip: Write a clear explanation of your purpose of the campaign."),l.a.createElement(F,{onChange:function(t){e.updatePurpose(t)}}),l.a.createElement("br",null),l.a.createElement("h2",null,"Donation Goal can be..."),l.a.createElement("list",{class:"list"},l.a.createElement("li",null,"+ Number of items"),l.a.createElement("li",null,"+ A dollar amount")),l.a.createElement(G,{onSubmit:function(){e.updateNumber()}})),l.a.createElement(v,{contactEmail:y.contactEmail,socialLinks:y.social}))}}]),a}(l.a.Component),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(M.a,null,l.a.createElement(z.a,{placeholder:"Tell us more description",style:{minHeight:100,width:500,marginLeft:"5px",fontSize:"14px"},onChange:function(t){e.props.onChange(t.target.value)}}))}}]),a}(l.a.Component),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(H.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(H.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Amount was submitted: "+this.state.value),localStorage.setItem("Number",this.state.value),this.props.onSubmit()}},{key:"render",value:function(){var e=this;return l.a.createElement(M.a,null," ","onSubmit=",this.handleSubmit,"}}",l.a.createElement(M.a.Control,{type:"text",placeholder:"Amount goes here",value:this.state.value,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/campaign_details"},l.a.createElement(h.a,{id:"next_button",variant:"primary",type:"submit",onClick:function(t){return e.handleSubmit()}},"Next")))}}]),a}(l.a.Component),V=W,Z=a(51),Y=a.n(Z),q=a(81),Q=a(167),K=a(34),X=a.n(K),$=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateCardList=function(e){var t=JSON.parse(localStorage.getItem("original_cards")).filter((function(t){return t.Type===e}));localStorage.setItem("cards",JSON.stringify(t)),n.setState({cards:t})},n.sortCardList=function(e){var t=JSON.parse(localStorage.getItem("original_cards"));"Date Posted"===e?t.sort((function(e,t){return e.Date-t.Date})):"A-Z"===e?t.sort((function(e,t){var a=e.Title.toLowerCase(),n=t.Title.toLowerCase();return a<n?-1:a>n?1:0})):"Z-A"===e&&t.sort((function(e,t){var a=e.Title.toLowerCase(),n=t.Title.toLowerCase();return n<a?-1:n>a?1:0})),localStorage.setItem("cards",JSON.stringify(t)),n.setState({cards:t})},function(e,t){le.apply(this,arguments)}(n.props.fireDB,[]),n.state={cards:JSON.parse(localStorage.getItem("cards"))},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(E,{name:y.name,contactEmail:y.contactEmail}),l.a.createElement(S.a,null,l.a.createElement(j.a,{md:9},l.a.createElement("h4",{style:{textAlign:"center",marginBottom:"40px",marginLeft:"280px",fontWeight:"600"}},"Browse Campaigns")),l.a.createElement(j.a,{md:2},l.a.createElement(Q.a,null,l.a.createElement(Q.a.Toggle,{variant:"success",id:"dropdown-basic"},"Type of Campaign"),l.a.createElement(Q.a.Menu,null,l.a.createElement(Q.a.Item,null,l.a.createElement(te,{text:"Supplies",onClick:function(t){e.updateCardList(t)}})),l.a.createElement(Q.a.Item,null,l.a.createElement(te,{text:"Money",onClick:function(t){e.updateCardList(t)}})),l.a.createElement(Q.a.Item,null,l.a.createElement(te,{text:"Human Resources",onClick:function(t){e.updateCardList(t)}}))))),l.a.createElement(j.a,{md:1},l.a.createElement(Q.a,null,l.a.createElement(Q.a.Toggle,{variant:"success",id:"dropdown-basic"},"Sort By"),l.a.createElement(Q.a.Menu,null,l.a.createElement(Q.a.Item,null,l.a.createElement(ee,{text:"Date Posted",onClick:function(t){e.sortCardList(t)}})),l.a.createElement(Q.a.Item,null,l.a.createElement(ee,{text:"A-Z",onClick:function(t){e.sortCardList(t)}})),l.a.createElement(Q.a.Item,null,l.a.createElement(ee,{text:"Z-A",onClick:function(t){e.sortCardList(t)}})))))),l.a.createElement(S.a,null,l.a.createElement(ae,{db:this.props.db,cards:this.state.cards})),l.a.createElement(v,{contactEmail:y.contactEmail,socialLinks:y.social}))}}]),a}(n.Component),ee=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("span",{onClick:function(t){t.preventDefault(),e.props.onClick(e.props.text)}},this.props.text)}}]),a}(l.a.Component),te=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("span",{onClick:function(t){t.preventDefault(),e.props.onClick(e.props.text)}},this.props.text)}}]),a}(l.a.Component),ae=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t=[],a=this.props.cards;for(e=0;e<a.length;e++){var n,r=a[e];n="empty"===r.Picture?X.a:r.Picture,t.push(l.a.createElement(C,{title:r.Title,content:l.a.createElement("div",null,l.a.createElement("img",{src:n,alt:"purpose of campaign"}),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,r.Purpose)),l.a.createElement("div",{className:"learn-more"},l.a.createElement(ne,{index:r.index})))}))}return l.a.createElement("div",null,t)}}]),a}(l.a.Component),ne=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(H.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){localStorage.setItem("index",this.props.index)}},{key:"render",value:function(){var e=this;return l.a.createElement(u.b,{to:"/campaign_information",onClick:function(t){return e.handleSubmit()}},l.a.createElement("a",null,"Learn More"))}}]),a}(l.a.Component);function le(){return(le=Object(q.a)(Y.a.mark((function e(t,a){var n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,e.next=3,t.collection("campaigns").get().then((function(e){e.forEach((function(e){var t=e.data();a.push({Title:t.Title,Picture:t.Picture,Purpose:t.Purpose,Type:t.Type,Phone:t.Phone,Location:t.Location,Email:t.Email,Number:t.Number,Date:t.Date,index:n,Donation:t.Donation}),n++}))}));case 3:localStorage.setItem("original_cards",JSON.stringify(a)),localStorage.setItem("cards",JSON.stringify(a));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=$,ce=a(170),ie=a(87),oe=a.n(ie);var me=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).updateDonation=function(){var e,t,a;n.setState({donation:n.state.donation+1}),e=n.props.fireDB,t=n.state.title,a=n.state.donation,e.collection("campaigns").doc(t).update({Donation:a+1}).then((function(){console.log("Document successfully updated!")})).catch((function(e){console.error("Error updating document: ",e)}));var l=n.state.donation+1;alert("Congrats! You have contributed to these "+l+" donations!")};var l,r=JSON.parse(localStorage.getItem("original_cards"))[localStorage.getItem("index")];return l="empty"===r.Picture?X.a:r.Picture,n.state={title:r.Title,type:r.Type,purpose:r.Purpose,picture:l,number:r.Number,email:r.Email,location:r.Location,phone:r.Phone,donation:r.Donation},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"campaign_info"},l.a.createElement(E,{name:y.name,contactEmail:y.contactEmail}),l.a.createElement("h2",{style:{color:"black",textAlign:"center",marginBottom:"60px",fontWeight:"600"}},this.state.title+": "+this.state.type),l.a.createElement(S.a,null,l.a.createElement(j.a,{md:7,style:{textAlign:"center"}},l.a.createElement("img",{style:{maxHeight:"500px",maxWidth:"540px"},src:this.state.picture,alt:"details"})),l.a.createElement(j.a,{md:5},l.a.createElement(C,{title:l.a.createElement("div",null,l.a.createElement(ce.a,{now:this.state.donation/this.state.number*100})," ",this.state.donation+" donated of "+this.state.number),content:l.a.createElement("div",null,l.a.createElement("div",{className:"description"},l.a.createElement("p",{style:{fontSize:"14px",color:"rgb(87, 96, 139)"}},"Thank you for supporting this campaign! We need more donators to reach the goal - can you help?")),l.a.createElement("div",{className:"btnDonate",style:{textAlign:"center"}},l.a.createElement("button",{onClick:function(){e.updateDonation()}},l.a.createElement("a",{href:"javascript:void(0)"},"Donate to Campaign"))))}))),l.a.createElement(S.a,null,l.a.createElement(j.a,{md:7},l.a.createElement("h2",{style:{color:"rgb(61, 75, 113)",fontWeight:"600",marginTop:"40px",marginLeft:"185px"}},"Location: "+this.state.location),l.a.createElement("p",{style:{color:"rgb(96, 94, 94)",fontSize:"18px",marginLeft:"185px"}},"Description: "+this.state.purpose)),l.a.createElement(j.a,{md:5},l.a.createElement("img",{src:oe.a,style:{width:"150px",height:"150px",marginTop:"40px",marginLeft:"138px"}}),l.a.createElement("h6",{style:{color:"black",fontSize:"18px",marginLeft:"116px",marginTop:"10px"}},"Phone: "+this.state.phone),l.a.createElement("h6",{style:{color:"black",fontSize:"18px",marginLeft:"116px",marginTop:"5px"}},"Email: "+this.state.email))),l.a.createElement(v,{contactEmail:y.contactEmail,socialLinks:y.social}))}}]),a}(l.a.Component),se=a(88),ue=a.n(se),pe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateLocation=function(e){n.setState({location:e})},n.updateEmail=function(e){n.setState({email:e})},n.updateNumber=function(e){n.setState({number:e})},n.uploadInfo=function(){localStorage.setItem("Location",n.state.location),localStorage.setItem("Email",n.state.email),localStorage.setItem("Phone",n.state.number)},n.state={location:"",email:"",phone:"",image:""},localStorage.setItem("Location",""),localStorage.setItem("Email",""),localStorage.setItem("Phone",""),localStorage.setItem("Picture",""),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(E,{name:y.name,contactEmail:y.contactEmail}),l.a.createElement("div",{className:"about_container campaign_details"},l.a.createElement("h1",null,"Add Details"),l.a.createElement("p",{style:{marginTop:"10px"}},"* required information"),l.a.createElement("h2",{style:{marginBottom:"0"}},"More information is always better"),l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"Location"),l.a.createElement(he,{onChange:function(t){e.updateLocation(t)}}),l.a.createElement("br",null),l.a.createElement("h3",null,"Contact Information"),l.a.createElement(de,{onChange:function(t){e.updateEmail(t)}}),l.a.createElement("br",null),l.a.createElement(ge,{onChange:function(t){e.updateNumber(t)}}),l.a.createElement("h3",null,"Add Photos"),l.a.createElement("p",{style:{fontSize:"20px"}},"Max Size 1MB (Or result in creation failure)"),l.a.createElement(Ee,null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(be,{fireDB:this.props.fireDB,onSubmit:function(){e.uploadInfo()}})),l.a.createElement(v,{contactEmail:y.contactEmail,socialLinks:y.social}))}}]),a}(l.a.Component),he=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(H.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return l.a.createElement(M.a,null," ",l.a.createElement(M.a.Control,{type:"text",placeholder:"Location goes here",onChange:this.handleChange}))}}]),a}(l.a.Component),de=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(H.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return l.a.createElement(M.a,null," ",l.a.createElement(M.a.Control,{type:"text",placeholder:"Email goes here",onChange:this.handleChange}))}}]),a}(l.a.Component),ge=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(H.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return l.a.createElement(M.a,null," ",l.a.createElement(M.a.Control,{type:"text",placeholder:"Phone number goes here",onChange:this.handleChange}))}}]),a}(l.a.Component),Ee=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).onChange=function(e){console.log(e),localStorage.setItem("Picture",e[0].dataURL)},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(ue.a,{onChange:this.onChange,maxNumber:10,multiple:!0,maxFileSize:5242880,acceptType:["jpg","gif","png"]},(function(e){var t=e.imageList,a=e.onImageUpload,n=e.onImageRemoveAll;return l.a.createElement("div",null,l.a.createElement("button",{onClick:a},"Upload images"),l.a.createElement("button",{onClick:n},"Remove all images"),t.map((function(e){return l.a.createElement("div",{key:e.key},l.a.createElement("img",{src:e.dataURL}),l.a.createElement("button",{onClick:e.onUpdate},"Update"),l.a.createElement("button",{onClick:e.onRemove},"Remove"))})))}))}}]),a}(l.a.Component),be=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(H.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){this.props.onSubmit();var t=(new Date).getFullYear()+"/"+(new Date).getMonth()+"/"+(new Date).getDate();localStorage.setItem("Date",t),localStorage.setItem("index",0),alert("Campaign successfully created!"),function(e){var t=localStorage.getItem("Title"),a=localStorage.getItem("Type"),n=localStorage.getItem("Phone"),l=localStorage.getItem("Purpose"),r=localStorage.getItem("Location"),c=localStorage.getItem("Picture");""===c&&(c="empty");var i=localStorage.getItem("Email"),o=localStorage.getItem("Number"),m=localStorage.getItem("Date");e.collection("campaigns").doc(t).set({Title:t,Type:a,Phone:n,Purpose:l,Location:r,Picture:c,Email:i,Number:o,Date:m,Donation:0}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)})),console.log(c)}(this.props.fireDB)}},{key:"render",value:function(){var e=this;return l.a.createElement(u.b,{to:"/"},l.a.createElement(h.a,{id:"finish_button",variant:"primary",type:"submit",onClick:function(t){return e.handleSubmit()}},"Finish Creation"))}}]),a}(l.a.Component);var fe=pe,ve=a(37),ye=a.n(ve),Ce=(a(156),a(89)),Se=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e),ye.a.apps.length||ye.a.initializeApp({apiKey:Ce.a,authDomain:"donaid-442.firebaseapp.com",projectId:"donaid-442"});var l=ye.a.firestore();return n.state={firebase:l},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,{basename:""},l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/campaign_type"},l.a.createElement(J,null)),l.a.createElement(p.a,{path:"/campaign_title"},l.a.createElement(U,null)),l.a.createElement(p.a,{path:"/campaign_purpose"},l.a.createElement(V,null)),l.a.createElement(p.a,{path:"/campaign_details"},l.a.createElement(fe,{fireDB:this.state.firebase})),l.a.createElement(p.a,{path:"/",exact:!0},l.a.createElement(I,null)),l.a.createElement(p.a,{path:"/campaign_browsing"},l.a.createElement(re,{fireDB:this.state.firebase})),l.a.createElement(p.a,{path:"/campaign_information"},l.a.createElement(me,{fireDB:this.state.firebase})),l.a.createElement(p.a,{exact:!0,path:"/about"},l.a.createElement(J,null))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/default.dd0f68db.svg"},66:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAwUlEQVRIie2UQQrCMBBF/4jgUdJb6A2KV1BEulA8SnFTxdgrNL2AeAxzFFffjZtCCUmaCkLfevgP/gwDTPwlBIWg+MzOY8Jr1ZYEFrQsBMKkAp2ZpVAOAKRW7ZuWJ5dkFirYvdZPCAoAJHC8q7Zy1eXVYx86M3sQ1TfjurV5b13RAl/JIIGPpCPQyjgvwpOOJHjJofy2otThgwSjnqlveJTgljUroTwAiADnjc2dryIYgqJVU2plLr4fNUoyWvhEcj5wHGpxlHm3yQAAAABJRU5ErkJggg=="},71:function(e,t,a){e.exports=a.p+"static/media/create.920d8a3a.png"},72:function(e,t,a){e.exports=a.p+"static/media/browse.a2dee9f2.png"},73:function(e,t,a){e.exports=a.p+"static/media/Team.aedbc5d5.svg"},87:function(e,t,a){e.exports=a.p+"static/media/person.a57ecf51.png"},89:function(e){e.exports=JSON.parse('{"a":"AIzaSyBgW25euGpULSICvSS-1EcqDDDVHOVHjNc"}')},92:function(e,t,a){e.exports=a(159)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.4b39f394.chunk.js.map