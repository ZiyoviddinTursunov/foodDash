import React, { useState } from 'react'
import "./Navbar.css"
import { IoSearchSharp } from 'react-icons/io5'
import { IoIosCloseCircleOutline, IoMdMenu } from 'react-icons/io'
function Navbar() {
const [mediaMenu, setMediaMenu]=useState(false)


  return (
<nav>
    <div className="container">
<div className={mediaMenu ? "nav_modalMenu active" : "nav_modalMenu"}>
<button onClick={()=>{
              setMediaMenu(!mediaMenu)
            }}  className='IoIosCloseCircleOutline'><IoIosCloseCircleOutline/></button>
<ul className="nav_modal_ul">
            <li><a href="">Home</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Offers </a></li>
            <li><a href="">Service</a></li>
            <li><a href="">About Us</a></li>
        </ul>

</div>



        <img src="/imgs/FoodDashSvg.svg" alt="" />
        <ul className="nav_ul">
            <li><a href="">Home</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Offers </a></li>
            <li><a href="">Service</a></li>
            <li><a href="">About Us</a></li>
        </ul>
        <div className="nav_buttons">
            <button><IoSearchSharp/></button>
            <button><img src="/imgs/nav_img.png" alt="" /></button>
            <button onClick={()=>{
              setMediaMenu(!mediaMenu)
            }} className='nav_menu'><IoMdMenu className='IoMdMenu'/>
            </button>
        </div>
    </div>
</nav>
  )
}

export default Navbar