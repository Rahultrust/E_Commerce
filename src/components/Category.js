import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, changeCategory } from "../redux/features/categorySlice";
import { fetchProducts } from "../redux/features/productSlice";
import { NavLink } from "react-router-dom";

function Category() {
  const categoryState = useSelector((state) => state.categoryR);
  //{loading:false,arrCategory:[],error:'',selectedCategory:'Categories----'}
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategory());
  }, []);
  function span_Click(e) {
    dispatch(changeCategory(e.target.innerText));
  }
  return (
    <>
      <div className='col-lg-3 d-none d-lg-block'>
        <NavLink
          className='btn d-flex align-items-center justify-content-between bg-primary w-100'
          data-toggle='collapse'
          to='#navbar-vertical'
          style={{ height: 65, padding: "0 30px" }}
        >
          <h6 className='text-dark m-0'>
            <i className='fa fa-bars mr-2' />
            {categoryState.selectedCategory}
          </h6>
          <i className='fa fa-angle-down text-dark' />
        </NavLink>
        <nav
          className='collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light'
          id='navbar-vertical'
          style={{ width: "calc(100% - 30px)", zIndex: 999 }}
        >
          <div className='navbar-nav w-100'>
            {categoryState.arrCategory.map((e, i) => (
              <span
                key={i}
                data-toggle='collapse'
                href='#navbar-vertical'
                onClick={span_Click}
                className='nav-item nav-link'
              >
                {e.name}
              </span>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Category;
