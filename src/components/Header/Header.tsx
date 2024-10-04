import React, { useState } from "react";
import logo from "../../images/logo.png";
import closeButton from "../../images/closebtn.png";
import openButton from "../../images/hamburger.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartProduct } from "../../models/Cart";
import "./Header.css";

const Header: React.FC = () => {
  const [open,setOpen] = useState(false);
  const cart: Array<CartProduct> = useSelector(
    (state: any) => state.cart.items
  );
  const handleToggle=()=>{
    setOpen((prev)=>!prev);
  }
  const cartLength: number = cart.reduce((a,b)=>a+b.quantity,0);
  return (
    <header>
      <div className="header-content">
        <div className="container">
          <div className="header-content-wrapper">
            <div className="website-logo">
              <Link to="">
                <img src={logo} alt="logo" height={"100%"} width={"200px"} />
              </Link>
            </div>
            <div className="mobile-menu">
              <img  onClick={handleToggle} src={open?closeButton:openButton} alt={`${open?"close":"open"}`}/>
            </div>
            <div className={`header-menu ${open?"open":"close"}`}>
              <nav>
                <ul>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      to=""
                      end
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      to="cart"
                    >
                      View Cart({cartLength})
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      to="orders"
                    >
                      View Orders
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

