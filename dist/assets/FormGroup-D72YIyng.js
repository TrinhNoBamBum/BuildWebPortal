import{b as p,g as f,s as w,_ as e,r as x,d as F,e as d,Y as C,Z as G,j as y,f as R,h as g}from"./index-BV4Nease.js";function h(o){return p("MuiFormGroup",o)}f("MuiFormGroup",["root","row","error"]);const j=["className","row"],M=o=>{const{classes:r,row:t,error:s}=o;return g({root:["root",t&&"row",s&&"error"]},h,r)},U=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),v=x.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:l=!1}=s,c=d(s,j),i=C(),u=G({props:s,muiFormControl:i,states:["error"]}),n=e({},s,{row:l,error:u.error}),m=M(n);return y.jsx(U,e({className:R(m.root,a),ownerState:n,ref:t},c))});export{v as F};
