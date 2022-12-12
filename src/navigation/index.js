import React, { useState } from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from "react-router-dom";
import {UNSAFE_DataRouterStateContext, useLocation} from "react-router";
import { useDispatch,useSelectort } from "react-redux";



const NavigationComponent = () => {

  const [expanded, setExpanded] = useState(false);
  
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[1];
  //const userLogin = useSelector(state=>state.userLogin)
  //const {userData}=userLogin
  const user = localStorage.getItem("token");
  const dropdownToggle = () => {
    setExpanded((e) => !e);
  };
  

  return (
    <>
      <div className="bg-dark text-white p-3 row">
        <div className="col-md-3 ">   
          <h3 className="wd-logo">NEUStockTrade</h3>
        </div>
        <div className="col-md-5"></div>
        <div className="col-md-3 position-relative">
          <input
            type="text"
            class="rounded-pill w-100 h-100 bg-light border-0 ps-3"
            placeholder="Search for companies"
          />
          <i className="bi bi-search position-absolute text-dark wd-search-icon"></i>
        </div>
        <div className="col-md-1">
          <a onClick={dropdownToggle}>
            <span className="bg-light rounded-pill p-2">
              <i class="bi bi-person-fill text-dark fs-4"></i> </span>
          
           
            {!expanded && <i class="bi bi-caret-down-fill text-white ms-2"></i>}
            {expanded && <i class="bi bi-caret-up-fill text-white ms-2"></i>}
          </a>
        </div>
      </div>
      {expanded && (
        <div className="row">
          <ul className="list-group col-md-2 col-sm-12 position-absolute end-0 shadow">
          <Link to="/sign-up" className={`list-group-item ${active === 'sign-up'?'active':''}`}>
    
           
          SignUp
          </Link>
          <Link to="/sign-in" className={`list-group-item ${active === 'sign-in'?'active':''}`}>
      
          Login
        
          </Link>
          
          

          </ul>
        </div>
      )}
    </>
  );
};

export default NavigationComponent;
