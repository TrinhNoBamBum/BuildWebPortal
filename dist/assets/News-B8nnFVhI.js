import{r as i,K as V,_ as q,J as C,H as Y,I as B,j as e,G as m,S as _,B as S,u as P,R as Le,T as ke}from"./index-BV4Nease.js";import{a as D,A as G,R as Re,S as Ee,P as ze}from"./StyledDataGrid-FNaFrEdc.js";import{b as L}from"./baseaxios-CTVpXELN.js";import{O as N,D as J,a as U,b as Q,B as Ae,c as Ve,R as qe,d as Ye}from"./BoxCover-D9rhDFlx.js";import{C as Z,L as ee,A as te,D as ae,a as ne}from"./ComDatePicker-DkX5OOTG.js";import{A as M}from"./AutocompleteForm-DM2Ck111.js";import{F as ie,c as re,a as T}from"./formik.esm-DZjldY3N.js";import{F as se,B as b}from"./InputLabel-WUsojO3a.js";import{a as Be}from"./topic-cYtaDVfy.js";import{a as Pe}from"./channel-C607U_8l.js";import{b as X}from"./TextField-BhRWA0TT.js";import"./FormControlLabel-M6Lp4kHF.js";import"./Skeleton-KZcenIcW.js";var $e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"}}]},name:"filter",theme:"filled"},Oe=function(a,r){return i.createElement(V,q({},a,{ref:r,icon:$e}))},He=i.forwardRef(Oe),We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm-508 0v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512 265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512 267.1 157.9A7.95 7.95 0 00254 164z"}}]},name:"vertical-left",theme:"outlined"},Ke=function(a,r){return i.createElement(V,q({},a,{ref:r,icon:We}))},Ge=i.forwardRef(Ke),Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M326 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm444 72.4V164c0-6.8-7.9-10.5-13.1-6.1L335 512l421.9 354.1c5.2 4.4 13.1.7 13.1-6.1v-72.4c0-9.4-4.2-18.4-11.4-24.5L459.4 512l299.2-251.1c7.2-6.1 11.4-15.1 11.4-24.5z"}}]},name:"vertical-right",theme:"outlined"},_e=function(a,r){return i.createElement(V,q({},a,{ref:r,icon:Xe}))},Je=i.forwardRef(_e);const Ue=async s=>{try{return(await L({method:"GET",url:"media-news",params:s})).data}catch(a){C.error(a.message)}},Qe=async s=>{try{const a=await L({method:"POST",url:"media-news",data:s});return a.data.status==200?C.success("Thêm tin truyền thông thành công!"):C.error("Đã có lỗi xảy ra!"),a.data}catch(a){return C.error(a.message),a}},Ze=async(s,a)=>{try{const r=await L({method:"PUT",url:`media-news/${a}`,data:s});return r.data.status==200?C.success("Cập nhật tin truyền thông thành công!"):C.error("Đã có lỗi xảy ra"),r.data}catch(r){C.error(r,message)}},et=async s=>{try{const a=await L({method:"DELETE",url:`media-news/${s}`});return a.data.status==200?C.success("Xóa tin truyền thông thành công"):C.error("Đã có lỗi xảy ra!"),a.data}catch(a){C.error(a.message)}},F={getNewMedia:Ue,AddNewMedia:Qe,EditNewMedia:Ze,DeleteNewMedia:et};function tt({open:s,setOpen:a,channel:r,topic:l}){const c=Y(),d=B(n=>n.organizationReducer),[h,y]=i.useState(null),I=n=>{y(n.format("YYYY-MM-DD"))},j=async n=>{(await F.AddNewMedia({Title:n.Title,ContentCreator:n.ContentCreator,TopicId:n.TopicId,ChannelId:n.ChannelId,CreateTime:h})).status==200&&(c(D.status(!d.isFresh)),a(!1))},w=()=>{a(!1)};return e.jsx(e.Fragment,{children:e.jsx(ie,{initialValues:{Title:"",ContentCreator:"",TopicId:"",ChannelId:"",submit:null},validationSchema:re().shape({Title:T().max(255).required("Title is required"),ContentCreator:T().max(255).required("ContentCreator is required"),TopicId:T().max(255).required("TopicId is required"),ChannelId:T().max(255).required("ChannelId is required")}),onSubmit:j,children:({errors:n,handleBlur:u,handleChange:x,handleSubmit:v,isSubmitting:f,touched:g,values:p})=>e.jsx("form",{noValidate:!0,onSubmit:v,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(N,{id:"Title",lable:"Tiêu đề",values:p,placeholder:"Nhập tên kênh truyền thông",nameValue:"Title",handleBlur:u,handleChange:x,touched:g,errors:n}),e.jsx(N,{id:"ContentCreator",lable:"Người kiểm duyệt",values:p,placeholder:"Nhập tên người kiểm duyệt",nameValue:"ContentCreator",handleBlur:u,handleChange:x,touched:g,errors:n}),e.jsx(M,{touched:g,data:r,handleBlur:u,errors:n,values:p,handleChange:x,inputLable:"Kênh truyền thông",valueId:"ChannelId",valueLable:"ChannelName"}),e.jsx(M,{touched:g,data:l,handleBlur:u,errors:n,values:p,handleChange:x,inputLable:"Chủ đề truyền thông",valueId:"TopicId",valueLable:"TopicName"}),e.jsx(m,{item:!0,xs:12,children:e.jsx(_,{spacing:1,children:e.jsx(Z,{lable:"Ngày tạo tin",length:"100%",onDateChange:I})})}),e.jsx(m,{item:!0,xs:12,sx:{mt:-1}}),n.submit&&e.jsx(m,{item:!0,xs:12,children:e.jsx(se,{error:!0,children:n.submit})}),e.jsx(m,{item:!0,xs:12,children:e.jsxs(S,{style:{float:"right"},children:[e.jsx(b,{disableElevation:!0,disabled:f,size:"small",variant:"contained",color:"primary",onClick:w,children:"Cancel"}),e.jsx(b,{disableElevation:!0,disabled:f,size:"small",type:"submit",variant:"contained",color:"primary",sx:{marginLeft:"10px"},children:"Ok"})]})})]})})})})}function at({open:s,setOpen:a,channel:r,topic:l}){const c=P(),d=()=>{a(!1)};return e.jsx(i.Fragment,{children:e.jsxs(J,{open:s,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{"& .MuiDialogTitle-root":{background:`${c.palette.secondary[200]}`,marginBottom:"5px"}},children:[e.jsx(U,{id:"alert-dialog-title",sx:{fontSize:"16px",fontWeight:"Bold",lineHeight:"24px"},children:"Thêm tin truyền thông"}),e.jsx(Q,{children:e.jsx(tt,{open:s,setOpen:a,channel:r,topic:l})})]})})}function nt({setOpenEdit:s,channel:a,topic:r,media:l}){const c=Y(),d=B(n=>n.organizationReducer),[h,y]=i.useState(null),I=n=>{y(n.format("YYYY-MM-DD"))},j=async n=>{(await F.EditNewMedia({Title:n.Title,ContentCreator:n.ContentCreator,TopicId:n.TopicId,ChannelId:n.ChannelId,CreateTime:h||(l==null?void 0:l.CreateTime)},l.id)).status==200&&(c(D.status(!d.isFresh)),s(!1))},w=()=>{s(!1)};return e.jsx(e.Fragment,{children:e.jsx(ie,{initialValues:{Title:l.Title,ContentCreator:l.ContentCreator,TopicId:l.TopicId,ChannelId:l.ChannelId,submit:null},validationSchema:re().shape({Title:T().max(255).required("Title is required"),ContentCreator:T().max(255).required("ContentCreator is required"),TopicId:T().max(255).required("TopicId is required"),ChannelId:T().max(255).required("ChannelId is required")}),onSubmit:j,children:({errors:n,handleBlur:u,handleChange:x,handleSubmit:v,isSubmitting:f,touched:g,values:p})=>e.jsx("form",{noValidate:!0,onSubmit:v,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(N,{id:"Title",lable:"Tiêu đề",values:p,placeholder:"Nhập tên kênh truyền thông",nameValue:"Title",handleBlur:u,handleChange:x,touched:g,errors:n}),e.jsx(N,{id:"ContentCreator",lable:"Người kiểm duyệt",values:p,placeholder:"Nhập tên người kiểm duyệt",nameValue:"ContentCreator",handleBlur:u,handleChange:x,touched:g,errors:n}),e.jsx(M,{touched:g,data:a,handleBlur:u,errors:n,values:p,handleChange:x,inputLable:"Kênh truyền thông",valueId:"ChannelId",valueLable:"ChannelName"}),e.jsx(M,{touched:g,data:r,handleBlur:u,errors:n,values:p,handleChange:x,inputLable:"Chủ đề truyền thông",valueId:"TopicId",valueLable:"TopicName"}),e.jsx(m,{item:!0,xs:12,children:e.jsx(_,{spacing:1,children:e.jsx(Z,{lable:"Ngày tạo tin",length:"100%",onDateChange:I,valueDefault:l==null?void 0:l.CreateTime})})}),e.jsx(m,{item:!0,xs:12,sx:{mt:-1}}),n.submit&&e.jsx(m,{item:!0,xs:12,children:e.jsx(se,{error:!0,children:n.submit})}),e.jsx(m,{item:!0,xs:12,children:e.jsxs(S,{style:{float:"right"},children:[e.jsx(b,{disableElevation:!0,disabled:f,size:"small",variant:"contained",color:"primary",onClick:w,children:"Cancel"}),e.jsx(b,{disableElevation:!0,disabled:f,size:"small",type:"submit",variant:"contained",color:"primary",sx:{marginLeft:"10px"},children:"Ok"})]})})]})})})})}function it({openEdit:s,setOpenEdit:a,channel:r,topic:l,media:c}){const d=P(),h=()=>{a(!1)};return e.jsx(i.Fragment,{children:e.jsxs(J,{open:s,onClose:h,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{"& .MuiDialogTitle-root":{background:`${d.palette.secondary[200]}`,marginBottom:"5px"}},children:[e.jsx(U,{id:"alert-dialog-title",sx:{fontSize:"16px",fontWeight:"Bold",lineHeight:"24px"},children:"Cập nhật tin truyền thông"}),e.jsx(Q,{children:e.jsx(nt,{setOpenEdit:a,channel:r,topic:l,media:c})})]})})}function rt({lable:s,length:a,onDateChange:r}){const[l,c]=i.useState(null),d=h=>{c(h),r&&r(h)};return e.jsx(ee,{dateAdapter:te,children:e.jsx(ae,{components:["DatePicker"],children:e.jsx(ne,{value:l,onChange:d,label:s,sx:{width:a,minWidth:"0 !important"}})})})}function st({lable:s,length:a,onDateChange:r}){const[l,c]=i.useState(null),d=h=>{c(h),r&&r(h)};return e.jsx(ee,{dateAdapter:te,children:e.jsx(ae,{components:["DatePicker"],children:e.jsx(ne,{value:l,onChange:d,label:s,sx:{width:a,minWidth:"0 !important"}})})})}const lt=()=>{const s=P(),a=Y(),r=B(t=>t.organizationReducer),[l,c]=i.useState(1),[d,h]=i.useState(10),[y,I]=i.useState([]),[j,w]=i.useState([]),[n,u]=i.useState({}),[x,v]=i.useState(!1),[f,g]=i.useState(0),[p,le]=i.useState([]),[k,oe]=i.useState([]),[$,O]=i.useState(!1),[ce,de]=i.useState(null),[he,ue]=i.useState(null),[xe,pe]=i.useState(null),[me,ge]=i.useState(null);i.useEffect(()=>{(async()=>{const o=await Be.getTopic({size:100});oe(o.result.rows)})()},[]),i.useEffect(()=>{(async()=>{const o=await Pe.getChannel({size:100});le(o.result.rows)})()},[]);const H=async(t,o,E,z,Me,Fe)=>{const A=await F.getNewMedia({page:t,size:o,TopicId:E,ChannelId:z,StartTime:Me,EndTime:Fe});w(A==null?void 0:A.result.rows)};i.useEffect(()=>{H(0,10,ce,he,xe,me)},[r.isFresh]);const Ce=async()=>{var t;(t=y[0])!=null&&t.id?(await F.DeleteNewMedia(y[0].id)).status===200&&a(D.status(!r.isFresh)):C.error("Chọn chủ đề để xóa!")},fe=(t,o)=>{c(o),H(o-1,10)},Te=t=>{u(t),O(!$)},R=j==null?void 0:j.map((t,o)=>({STT:(l-1)*d+o+1,Title:t==null?void 0:t.Title,CreateTime:t==null?void 0:t.CreateTime,ContentCreator:t==null?void 0:t.ContentCreator,Channel:t==null?void 0:t.Channel.ChannelName,TopicId:t.TopicId,ChannelId:t.ChannelId,Topic:t==null?void 0:t.Topic.TopicName,id:t==null?void 0:t.id})),je=[{field:"STT",headerName:"STT",flex:.5},{field:"Title",headerName:"Tiêu đề",flex:1},{field:"ContentCreator",headerName:"Chịu trách nhiệm nội dung",flex:1},{field:"Channel",headerName:"Kênh truyền thông",flex:1},{field:"Topic",headerName:"Chủ đề truyền thông",flex:1},{field:"CreateTime",headerName:"Ngày tạo",flex:1},{field:"action",align:"left",headerName:"Tác vụ",flex:.5,renderCell:t=>e.jsx(e.Fragment,{children:e.jsx(Ye,{type:"edit",onClick:()=>Te(t.row)})})}],be=t=>{pe(t.format("YYYY-MM-DD"))},ye=t=>{ge(t.format("YYYY-MM-DD"))},Se=t=>{de(t.target.value)},Ie=t=>{ue(t.target.value)},we=()=>{a(D.status(!r.isFresh))},ve=t=>t==0?2:0,De=async()=>{await v(!x),g(ve(f))},[W,K]=Le.useState(!1),Ne=()=>{K(!W)};return e.jsxs(Ae,{children:[e.jsxs(m,{container:!0,children:[x?e.jsxs(m,{item:!0,xs:f,children:[e.jsx(S,{sx:{padding:"10px",paddingTop:"15px",textAlign:"center",display:"flex"},children:e.jsx(ke,{variant:"h5",sx:{marginLeft:"5px",borderBottom:"1px solid #000"},children:"BỘ LỌC TÌM KIẾM"})}),e.jsxs(S,{sx:{padding:"5px",marginRight:"5px"},children:[e.jsx(G,{fullWidth:!0,sx:{"& .MuiAutocomplete-input":{padding:"0px !important"},marginBottom:"8px"},id:"ChannelId",options:p,getOptionLabel:t=>t.ChannelName,onChange:(t,o)=>{Ie({target:{name:"ChannelId",value:o?o.id:""}})},renderInput:t=>e.jsx(X,{...t,label:"Kênh ",variant:"outlined"})}),e.jsx(G,{fullWidth:!0,sx:{"& .MuiAutocomplete-input":{padding:"0px !important"}},id:"TopicId",options:k,getOptionLabel:t=>t.TopicName,onChange:(t,o)=>{Se({target:{name:"TopicId",value:o?o.id:""}})},renderInput:t=>e.jsx(X,{...t,label:"Chủ đề",variant:"outlined"})}),e.jsx(st,{lable:"Từ ngày",length:"100%",onDateChange:be}),e.jsx(rt,{lable:"Đến ngày",length:"100%",onDateChange:ye}),e.jsx(b,{component:"label",fullWidth:!0,onClick:we,sx:{whiteSpace:"nowrap",padding:"5px 25px 5px 25px",marginTop:"8px"},role:void 0,variant:"contained",tabIndex:-1,startIcon:e.jsx(He,{}),children:"Tìm kiếm"})]})]}):e.jsx(e.Fragment,{}),e.jsxs(m,{item:!0,xs:12-f,children:[e.jsxs(Ve,{children:[e.jsx(S,{sx:{display:"flex",paddingTop:"10px",cursor:"pointer"},onClick:De,children:x?e.jsx(Ge,{}):e.jsx(Je,{})}),e.jsxs("div",{children:[e.jsx(b,{component:"label",onClick:Ne,sx:{whiteSpace:"nowrap",padding:"5px 25px 5px 25px",marginLeft:"5px",float:"right"},role:void 0,variant:"contained",tabIndex:-1,startIcon:e.jsx(qe,{}),children:"Thêm tin"}),e.jsx(b,{component:"label",onClick:Ce,sx:{whiteSpace:"nowrap",padding:"5px 25px 5px 25px",marginLeft:"5px"},role:void 0,variant:"contained",tabIndex:-1,startIcon:e.jsx(Re,{}),children:"Xóa"})]})]}),R?e.jsx(Ee,{rows:R,columns:je,disableColumnMenu:!0,autoHeight:!0,rowHeight:40,columnHeaderHeight:45,sx:{border:2,borderColor:s.palette.secondary.light},checkboxSelection:!0,onRowSelectionModelChange:t=>{const o=new Set(t),E=R.filter(z=>o.has(z.id.toString()));I(E)}}):e.jsx(e.Fragment,{}),e.jsx(S,{sx:{display:"flex",justifyContent:"center",marginTop:"10px",paddingBottom:"10px"},children:e.jsx(ze,{count:10,color:"primary",onChange:fe})})]})]}),e.jsx(it,{openEdit:$,setOpenEdit:O,channel:p,topic:k,media:n}),e.jsx(at,{open:W,setOpen:K,channel:p,topic:k})]})},yt=()=>e.jsx(e.Fragment,{children:e.jsx(lt,{})});export{yt as default};
