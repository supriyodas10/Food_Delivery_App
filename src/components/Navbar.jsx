import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { assets } from './../assets/assets';
import './Navbar/Navbar.css';



const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'>
       <Link to='https://khanapina001.vercel.app/' ><p alt="" className="log" > KhanaPina </p></Link>
       <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href= "#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a>
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
       </ul>
       <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
<div className="navbar-search-icon">
    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
    <div className={getTotalCartAmount()===0?"":"dot"}>

    </div>
</div>
<button onClick={()=>setShowLogin(true)}>Sign in</button>
       </div>
    </div>
  )
}

export default Navbar
