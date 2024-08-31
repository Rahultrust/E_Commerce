import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../redux/features/categorySlice';
function getFilteredProductsOfCategory(categoryName,arrProduct){
    var arrFilteredProduct=arrProduct.filter(e=>e.category.toUpperCase()==categoryName.toUpperCase())
   
        return arrFilteredProduct;
    
    
    }
function CategoryDetails(props) {
    const productState=useSelector((state)=>state.productR);
    const dispatch=useDispatch();
    if(productState.arrProducts.length==0){
        return <>loading.....</>
    }
    else{
        var arrFilter=getFilteredProductsOfCategory(props.category.name,productState.arrProducts)
        if(arrFilter.length==0){
            return ''
        }
        
  return (
    <div onClick={()=>{dispatch(changeCategory(props.category.name))}} className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <span className="text-decoration-none" >
          <div className="cat-item d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img className="img-fluid" src={arrFilter[0].thumbnail} alt="" />
            </div>
            <div className="flex-fill pl-3">
              <h6>{props.category.name}</h6>
              <small className="text-body">{arrFilter.length} Products</small>
            </div>
          </div>
        </span>
      </div>
  )
}
}

export default CategoryDetails