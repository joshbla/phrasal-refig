(self.webpackChunklite=self.webpackChunklite||[]).push([[9381],{41987:(e,n,i)=>{"use strict";i.d(n,{e:()=>h,t:()=>N});var t=i(63038),l=i.n(t),a=i(67294),o=i(6479),r=i.n(o),s=i(64718),d=i(19262),m=i(319),u=i.n(m),c=i(69387),k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowersDialog_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"followersUserConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"DialogUserEntity_user"}}]}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"next"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"to"}},{kind:"Field",name:{kind:"Name",value:"from"}},{kind:"Field",name:{kind:"Name",value:"limit"}}]}}]}}]}}]}}].concat(u()(c.U.definitions))},v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherFollowersDialogUserQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersDialog_publisher"}}]}}]}}].concat(u()(k.definitions))},p={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherFollowersDialogPublicationQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersDialog_publisher"}}]}}]}}].concat(u()(k.definitions))},f=function(e){var n,i,t,l,o,m=e.publisher,u=e.followerCount,c=e.isVisible,k=e.hide,f=(0,s.a)("User"===m.__typename?v:p,{variables:{id:m.id,pagingInfo:{limit:10}}}),g=f.data,b=f.error,S=f.fetchMore,N="User"===m.__typename?"user":"collection",h=null==g||null===(n=g[N])||void 0===n||null===(i=n.followersUserConnection)||void 0===i?void 0:i.users,w=null==g||null===(t=g[N])||void 0===t||null===(l=t.followersUserConnection)||void 0===l||null===(o=l.pagingInfo)||void 0===o?void 0:o.next;return b||0===u?null:a.createElement(d.L,{hide:k,isVisible:c,heading:"".concat(u," Followers"),entities:h,pagingInfoNext:w,handleFetchMore:function(){if(w){w.__typename;var e=r()(w,["__typename"]);S({variables:{pagingInfo:e}})}}})},g=i(93310),b=i(87691),S=i(21372),N=function(e){var n,i,t=null!==(n="Collection"===e.__typename?e.subscriberCount:null===(i=e.socialStats)||void 0===i?void 0:i.followerCount)&&void 0!==n?n:0;return{followerCount:t,isFollowerCountVisible:t>0}},h=function(e){var n=e.disableLink,i=void 0!==n&&n,t=e.scale,o=void 0===t?"L":t,r=e.publisher,s=e.linkStyle,d=void 0===s?"SUBTLE":s,m=N(r),u=m.followerCount,c=m.isFollowerCountVisible,k=a.useState(!1),v=l()(k,2),p=v[0],h=v[1],w=!i;if(!c)return null;var y="".concat((0,S.pY)(u)," Follower").concat(1===u?"":"s");return w?a.createElement(a.Fragment,null,a.createElement(b.F,{playwrightClassName:"pw-follower-count",tag:"span",scale:o},a.createElement(g.r,{onClick:function(){return h(!0)},linkStyle:d},y)),a.createElement(f,{hide:function(){return h(!1)},publisher:r,followerCount:u,isVisible:p})):a.createElement(b.F,{tag:"span",scale:o,color:"DARKER"},y)}},69387:(e,n,i)=>{"use strict";i.d(n,{U:()=>r});var t=i(319),l=i.n(t),a=i(78693),o=i(27048),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DialogUserEntity_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}].concat(l()(a.s.definitions),l()(o.W.definitions))}},19262:(e,n,i)=>{"use strict";i.d(n,{L:()=>S});var t=i(67294),l=i(97521),a=i(77355),o=i(47230),r=i(20113),s=i(68427),d=i(71652),m=i(82405),u=i(93310),c=i(87691),k=function(e){var n=e.avatar,i=e.href,l=e.name,o=e.followButton,s=e.bio;return t.createElement(a.x,{padding:"12px 0"},t.createElement(a.x,{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},t.createElement(a.x,{display:"flex",alignItems:"flex-start"},t.createElement(a.x,{marginRight:"20px"},n),t.createElement(a.x,{display:"flex",flexDirection:"column",alignItems:"flex-start"},t.createElement(u.r,{href:i},t.createElement(r.X6,{scale:"XS"},l)),s&&t.createElement(c.F,{scale:"S"},s))),t.createElement(a.x,{marginLeft:"48px"},o)))},v=function(e){var n=e.follower,i=n.name,l=(0,s.R)(n);return t.createElement(k,{avatar:t.createElement(d.v,{collection:n,circular:!0,size:40}),href:l,name:i,followButton:t.createElement(m.Fp,{buttonSize:"SMALL",collection:n,susiEntry:"follow_list"})})},p=i(84739),f=i(17193),g=i(32317),b=function(e){var n=e.follower,i=n.name,l=n.bio,a=void 0===l?"":l,o=(0,p.B)(n);return t.createElement(k,{avatar:t.createElement(f.Yt,{user:n,scale:"S"}),href:o,name:i,bio:a,followButton:t.createElement(g.Bv,{buttonSize:"SMALL",user:n,susiEntry:"follow_list"})})},S=function(e){var n=e.hide,i=e.isVisible,s=e.heading,d=e.entities,m=e.pagingInfoNext,u=e.handleFetchMore;return t.createElement(l.V,{isVisible:i,hide:n,withAnimation:!0},t.createElement(a.x,{maxWidth:"550px"},t.createElement(a.x,{display:"flex",flexDirection:"column",textAlign:"center",marginBottom:"24px"},t.createElement(r.X6,{scale:"S"},s)),null==d?void 0:d.map((function(e){return"User"===e.__typename?t.createElement(b,{follower:e,key:e.id}):t.createElement(v,{follower:e,key:e.id})})),m&&t.createElement(a.x,{display:"flex",flexDirection:"column",margin:"24px",alignItems:"center"},t.createElement(o.z,{buttonStyle:"SOCIAL",size:"SMALL",onClick:u},"Show more"))))}},24330:(e,n,i)=>{"use strict";i.d(n,{N:()=>d});var t=i(63038),l=i.n(t),a=i(67294),o=i(32317),r=i(27927),s=i(77355),d=function(e){var n=e.creator,i=e.followButtonSize,t=void 0===i?"REGULAR":i,d=e.shouldHideTooltip,m=void 0!==d&&d,u=e.post,c=e.showMembershipUpsellModal,k=e.showFirstUseToolTip,v=e.susiEntry,p=e.isVisible,f=e.width,g=e.isSubscribeCompact,b=void 0!==g&&g,S=a.useState(!1),N=l()(S,2),h=N[0],w=N[1];return a.createElement(a.Fragment,null,a.createElement(o.Bv,{buttonSize:t,onClick:function(){n.viewerEdge.isFollowing||w(!0)},post:u,user:n,susiEntry:v,width:f}),a.createElement(s.x,{marginLeft:b?"4px":"8px"},a.createElement(r.X,{user:n,showMembershipUpsellModal:c,showPostFollowSubscribeTooltip:h&&!m,hidePostFollowSubscribeTooltip:function(){return w(!1)},showFirstUseToolTip:k,isVisible:p,isCompact:b})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/9381.2d95ed91.chunk.js.map