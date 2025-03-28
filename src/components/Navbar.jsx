import React from "react";
import { useUser } from "./UserContext";
import { Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsSearchHeart } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import "./Navbar.css";

function Navbar({ search, setSearch }) {
    const { user } = useUser(); // Correctly declared user variable
    return (
        <nav className="navBar">
            <div>
                <IoMdMenu />
            </div>
            <div>
                <Link to="/">
                    Home</Link>
            </div>
            <div className="locatorDiv">
                <FaLocationDot />
                <div className="locatorInside">
                    <h4>Deliver to</h4>
                    <h5>Location</h5>
                </div>
            </div>

            <div className="searchDiv">
                <input type="search"
                    placeholder="Search for your favourites"
                    className="searchInput"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div>
                {user ? (<> <Link to='/user' > {user.firstName} </Link> </>) : (<Link to='/auth' className="loginLink"> Sign in <FaSignInAlt /> </Link>)}
            </div>
            <div>
                <Link to='/cart' className="cartLink"> <> <span>0</span> <PiShoppingCartSimpleLight /> </> <h4>Cart</h4> </Link>
            </div>
        </nav>
    );
}

export default Navbar;
