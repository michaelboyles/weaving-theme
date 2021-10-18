(self.webpackChunkflamewars=self.webpackChunkflamewars||[]).push([[341],{7092:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,'.flamewars-container{color:#222;white-space:pre-line;font-size:16px}.flamewars-container .comment{width:100%;display:flex;flex-wrap:wrap;flex-direction:row}.flamewars-container .comment .portrait{width:50px;height:50px;display:block;border:1px solid #e8e8e8;margin:5px 8px 0 0}.flamewars-container .comment .body{flex-basis:calc(100% - 60px);max-width:calc(100% - 60px);padding:6px 7px;box-sizing:border-box}.flamewars-container .comment .body.is-selected{background:#fcf7f5}.flamewars-container .comment .body .author-name{font-weight:bold}.flamewars-container .comment .body .timestamp,.flamewars-container .comment .body .edit-indicator,.flamewars-container .comment .body .reply-to{margin-left:15px;color:#7d7d7d}.flamewars-container .comment .body .reply-to a{color:inherit;font-weight:bold;text-decoration:none}.flamewars-container .comment .body .reply-to a:hover{color:#2d2d2d}.flamewars-container .comment .body .content{display:block;margin:.3em 0 .6em 0;overflow:hidden}.flamewars-container .comment .body .content>*:first-child{margin-top:0}.flamewars-container .comment .body .content>*:last-child{margin-bottom:0}.flamewars-container .comment .body .content a{color:#3d7e9a}.flamewars-container .comment .body .content ul{list-style:disc}.flamewars-container .comment .body .content pre code,.flamewars-container .comment .body .content blockquote{display:block;border-left:3px solid;background:#fbfbfb;padding:5px 10px}.flamewars-container .comment .body .content pre code{border-color:#3d7e9a;overflow-x:auto}.flamewars-container .comment .body .content blockquote{margin-left:0;margin-right:0;border-color:#7d7d7d;font-style:italic;white-space:normal}.flamewars-container .comment .body .content blockquote>*:first-child{margin-top:0}.flamewars-container .comment .body .content blockquote>*:last-child{margin-bottom:0}.flamewars-container .comment .body .content hr{border:0;border-top:1px solid #7d7d7d}.flamewars-container .comment .body .votes{display:inline-block;margin-right:15px;font-size:1em}.flamewars-container .comment .body .reply-btn,.flamewars-container .comment .body .edit-btn,.flamewars-container .comment .body .delete-btn,.flamewars-container .comment .body .share-btn{position:relative;display:inline-block;margin:0 15px 0 0;cursor:pointer;background:0;border:0;padding:0;font-size:.8em}.flamewars-container .comment .body .reply-btn:not(.delete-btn),.flamewars-container .comment .body .edit-btn:not(.delete-btn),.flamewars-container .comment .body .delete-btn:not(.delete-btn),.flamewars-container .comment .body .share-btn:not(.delete-btn){color:#7d7d7d}.flamewars-container .comment .body .reply-btn:not(.delete-btn):hover,.flamewars-container .comment .body .edit-btn:not(.delete-btn):hover,.flamewars-container .comment .body .delete-btn:not(.delete-btn):hover,.flamewars-container .comment .body .share-btn:not(.delete-btn):hover{color:#2d2d2d}.flamewars-container .comment .body .delete-btn{visibility:hidden;color:#c02d2e}.flamewars-container .comment .body .delete-btn:hover{color:#a91f20}.flamewars-container .comment .body .share-btn .copied{position:absolute;padding:5px 10px;background:#fff;border:2px solid #7d7d7d;color:#7d7d7d;font-weight:500;border-radius:4px;white-space:nowrap;left:-25px;top:25px;cursor:auto}.flamewars-container .comment .body .share-btn .copied::after{content:"";position:absolute;bottom:100%;left:50%;margin-left:-7px;width:0;height:0;border-bottom:solid 7px #fff;border-left:solid 7px transparent;border-right:solid 7px transparent}.flamewars-container .comment .body .share-btn .copied::before{content:"";position:absolute;bottom:100%;left:50%;margin-left:-9px;width:0;height:0;border-bottom:solid 9px #7d7d7d;border-left:solid 9px transparent;border-right:solid 9px transparent}.flamewars-container .comment .body:hover .delete-btn{visibility:visible}.flamewars-container .comment .replies{list-style-type:none;width:calc(100% - 65px);margin:0 0 0 65px;padding:0}.flamewars-container .comment button.view-replies,.flamewars-container .comment button.hide-replies{color:#6d9baf;font-size:.9em;margin:5px 0 7px 65px;padding:1px 4px;background:none;outline:none;border:none;cursor:pointer;user-select:none}.flamewars-container .comment button.view-replies .arrow,.flamewars-container .comment button.hide-replies .arrow{fill:#6d9baf;display:inline-block;width:10px;height:10px;margin-right:10px}.flamewars-container .comment button.view-replies:hover,.flamewars-container .comment button.hide-replies:hover{color:#3d7e9a}.flamewars-container .comment button.view-replies:hover .arrow,.flamewars-container .comment button.hide-replies:hover .arrow{fill:#3d7e9a}',""]);const a=r},1497:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".flamewars-container .votes .my-vote button{color:#3d7e9a}.flamewars-container .votes button{background:0;border:0;outline:0;padding:0 .2em;color:#7d7d7d;font-size:1em}.flamewars-container .votes button:disabled{color:#7d7d7d}.flamewars-container .votes button:not(:disabled){cursor:pointer}.flamewars-container .votes button:not(:disabled):hover{color:#3d7e9a}.flamewars-container .votes span:first-child{margin-left:-0.2em}",""]);const a=r},4341:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FwComment:()=>R});var o=n(7294),r=n(491),a=n(6694),l=n(3811),i=n(1715),c=n.n(i),m=n(2568),s=n.n(m),d=function(e){var t=c()({hash:s()(e.username),type:"SQUARE",width:50,size:5,background:{color:e.bgcolour}});return o.createElement("div",{className:"portrait",dangerouslySetInnerHTML:{__html:t}})},u=n(5526),f=(n(5263),function(e){var t=(0,o.useState)(!1),n=t[0],r=t[1];return o.createElement("button",{onClick:function(){window.location.href="#"+e.fragment,navigator.clipboard.writeText(window.location.href).then((function(){r(!0),setTimeout((function(){return r(!1)}),1e3)}))},className:e.className},"Share",n?o.createElement(o.Fragment,null,o.createElement("div",{className:"copied"},"Link copied")):null)}),p=n(21),b=n(3167),w=n(3462),h=n(3379),v=n.n(h),y=n(1497);v()(y.Z,{insert:"head",singleton:!1}),y.Z.locals;var g=" my-vote",x=function(e,t){fetch(a._w+"/comments/"+(0,w.iR)()+"/"+t+"/votes",{method:"PATCH",body:JSON.stringify(e),headers:{"content-type":"application/json"}})},E=function(e){var t=(0,o.useContext)(p.V).authorization,n=(0,o.useState)(e.comment.votes),a=n[0],l=n[1],i=void 0;a.upvoters.includes(null==t?void 0:t.fullId)&&(i="up"),a.downvoters.includes(null==t?void 0:t.fullId)&&(i="down");var c=function(n){var o={authorization:(0,r.i)(t),voteType:n};x(o,e.comment.id);var i=a.upvoters,c=a.downvoters;"up"===n&&(i=i.concat(null==t?void 0:t.fullId),c=c.filter((function(e){return e!==(null==t?void 0:t.fullId)}))),"down"===n&&(c=c.concat(null==t?void 0:t.fullId),i=i.filter((function(e){return e!==(null==t?void 0:t.fullId)}))),l({upvoters:i,downvoters:c})},m=function(){var n={authorization:(0,r.i)(t),voteType:"none"};x(n,e.comment.id),l({upvoters:a.upvoters.filter((function(e){return e!==(null==t?void 0:t.fullId)})),downvoters:a.downvoters.filter((function(e){return e!==(null==t?void 0:t.fullId)}))})},s="up"===i?"Remove like":"Like",d="down"===i?"Remove dislike":"Dislike",u=!t||(0,w.mF)(t,e.comment);return o.createElement("div",{className:"votes"},o.createElement("span",{className:"upvotes"+("up"===i?g:"")},o.createElement("button",{onClick:function(){return"up"===i?m():c("up")},disabled:u,"aria-label":s,title:s},"⇧"),a.upvoters.length),o.createElement("span",{className:"downvotes"+("down"===i?g:"")},o.createElement("button",{onClick:function(){return"down"===i?m():c("down")},disabled:u,"aria-label":d,title:d},"⇩"),a.downvoters.length))},k=function(){return o.createElement("svg",{viewBox:"0 0 20 20",className:"arrow down"},o.createElement("g",null,o.createElement("path",{d:"M 0 5 l 10 10 l 10 -10 z"})))},N=function(){return o.createElement("svg",{viewBox:"0 0 20 20",className:"arrow up"},o.createElement("g",null,o.createElement("path",{d:"M 0 5 l 10 10 l 10 -10 z",transform:"matrix(-1, 0, 0, -1, 20, 20)"})))},S=n(295),T=n(7092);v()(T.Z,{insert:"head",singleton:!1}),T.Z.locals;var C=function(){return C=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},C.apply(this,arguments)},z=o.memo((function(e){var t=new Date(e.isoTimestamp);return o.createElement("time",{className:"timestamp",dateTime:e.isoTimestamp,title:(0,w.KJ)(t)},(0,w.mO)(t))})),F=function(e){return e.url?o.createElement("img",{className:"portrait",src:e.url}):o.createElement(d,{username:e.username,bgcolour:"#fff"})},R=function(e){var t,n,i,c,m,s,d,h=(0,o.useState)({}),v=h[0],y=h[1],g=(0,o.useState)(e.comment.replies.uri),x=g[0],T=g[1],O=(0,o.useState)(!1),j=O[0],L=O[1],Z=(0,o.useState)(!1),q=Z[0],D=Z[1],_=(0,o.useState)("deleted"===e.comment.status),A=_[0],B=_[1],H=(0,o.useState)(!1),J=H[0],M=H[1],P=(0,o.useState)("edited"===e.comment.status),U=P[0],V=P[1],Q=(0,o.useState)(e.comment.text),G=Q[0],K=Q[1],W=(0,o.useContext)(p.V).authorization,X=(0,o.useContext)(b.Q).fragment;(0,o.useEffect)((function(){!W&&J&&M(!1)}),[W,J]);var Y=function(e){var t;y(C(C({},v),((t={})[e.id]=e,t)))},$=null!==(i=null===(n=null===(t=e.comment)||void 0===t?void 0:t.replies)||void 0===n?void 0:n.count)&&void 0!==i?i:0;if(A&&0===$&&0===Object.keys(v).length)return null;var ee="comment-"+e.comment.id,te="body"+((null==X?void 0:X.endsWith(e.comment.id))?" is-selected":"");return o.createElement("li",{id:ee,className:"comment",role:"comment","data-author":e.comment.author.name},o.createElement(F,{username:e.comment.author.id,url:e.comment.author.portraitUrl}),o.createElement("div",{className:te},o.createElement("span",{className:"author-name"},e.comment.author.name),o.createElement(z,{isoTimestamp:e.comment.timestamp}),U?o.createElement(o.Fragment,null,o.createElement("span",{className:"edit-indicator"},"Edited")):null,Boolean(null===(c=e.comment.inReplyTo)||void 0===c?void 0:c.author)?o.createElement(o.Fragment,null,o.createElement("span",{className:"reply-to"},"Replying to ",o.createElement("a",{href:"#"+e.comment.inReplyTo.id},e.comment.inReplyTo.author))):null,J?o.createElement(l.E,{commentToEdit:C(C({},e.comment),{text:G}),afterSubmit:function(t){M(!1),t.text!==e.comment.text&&(K(t.text),V(!0))},buttonLabel:"Save edit",type:"edit",onCancel:function(){return M(!1)}}):o.createElement(u.U,{text:A?a.Iq:G}),A?null:o.createElement(o.Fragment,null,o.createElement(E,{comment:e.comment})),o.createElement("button",{onClick:function(){return L(!j)},className:"reply-btn "+(j?"open":"closed")},"Reply"),o.createElement(f,{className:"share-btn",fragment:ee}),(0,w.mF)(W,e.comment)&&!A?o.createElement(o.Fragment,null,o.createElement("button",{className:"edit-btn",onClick:function(){return M(!J)}},"Edit"),o.createElement("button",{className:"delete-btn",onClick:function(){confirm("Are you sure you want to delete this comment?")&&fetch(a._w+"/comments/"+(0,w.iR)()+"/"+e.comment.id,{method:"DELETE",body:JSON.stringify({authorization:(0,r.i)(W)}),headers:{"content-type":"application/json"}}).then((function(e){e.ok&&(B(!0),M(!1))})).catch((function(e){return console.error(e)}))}},"Delete")):null),j?o.createElement(o.Fragment,null,o.createElement(l.E,{afterSubmit:function(t){e.parent?e.parent.addReply(t):Y(t),L(!1)},threadId:null!==(d=null===(s=null===(m=e.parent)||void 0===m?void 0:m.comment)||void 0===s?void 0:s.id)&&void 0!==d?d:e.comment.id,inReplyTo:e.comment.id,type:"reply",onCancel:function(){return L(!1)}})):null,q?o.createElement(o.Fragment,null,o.createElement("button",{className:"hide-replies",onClick:function(){return D(!1)}},o.createElement(N,null),"Hide ",I($)),o.createElement("ul",{className:"replies"},Object.values(v).sort((function(e,t){return e.timestamp.localeCompare(t.timestamp)})).map((function(t){return o.createElement(R,{key:t.id,comment:t,parent:{comment:e.comment,addReply:Y}})})))):null,o.createElement(S.s,{className:"view-replies",load:function(){return t=void 0,n=void 0,r=function(){var t,n;return function(e,t){var n,o,r,a,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!((r=(r=l.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){l.label=a[1];break}if(6===a[0]&&l.label<r[1]){l.label=r[1],r=a;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(a);break}r[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}(this,(function(o){switch(o.label){case 0:return!q&&Object.keys(v).length>0?(D(!0),[2]):x?[4,fetch(x)]:[2];case 1:return(t=o.sent()).ok?[4,t.json()]:[3,3];case 2:return n=o.sent(),y(C(C({},v),n.comments.reduce((function(e,t){var n;return C(C({},e),((n={})[t.id]=t,n))}),{}))),D(!0),n.continuationToken?T(e.comment.replies.uri+"?continuationToken="+n.continuationToken):T(void 0),[3,4];case 3:console.error("Failed to load replies"),o.label=4;case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,a){function l(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(l,i)}c((r=r.apply(t,n||[])).next())}));var t,n,o,r},normalLabel:o.createElement(o.Fragment,null,o.createElement(k,null),q?"Show more replies":"View "+I($)),loadingLabel:o.createElement(o.Fragment,null,o.createElement(k,null),"Loading..."),visible:$>0&&(!q||!!x)}))};function I(e){return 1===e?"reply":e+" replies"}}}]);