import{J as a}from"./index-BV4Nease.js";import{b as e}from"./baseaxios-CTVpXELN.js";const c=async t=>{try{return(await e({method:"GET",url:"article-c1-category",params:t})).data}catch(r){a.error(r.message)}},o=async t=>{try{const r=await e({method:"POST",url:"article-c1-category",data:t});return r.data.status==200?a.success("Thêm danh mục tin C1 thành công!"):a.error("Đã có lỗi xảy ra!"),r.data}catch(r){a.error(r.message)}},n=async(t,r)=>{try{(await e({method:"PUT",url:`article-c1-category/${r}`,data:t})).data.status==200?a.success("Cập nhật danh mục tin c1 thành công!"):a.error("Đã có lỗi xảy ra!")}catch(s){a.error(s.message)}},i=async t=>{try{(await e({method:"DELETE",url:`article-c1-category/${t}`})).data.status==200?a.success("Xóa danh mục tin c1 thành công!"):a.error("Đã có lỗi xảy ra!")}catch(r){a.error(r.message)}},d={getCategoryC1:c,AddCategoryC1:o,EditCategoryC1:n,DeleteCategoryC1:i};export{d as a};
