import React from 'react'
import "./Footer.css"
function Footer() {
  return (
<footer>
<div className="container">

    <div className="footer-box">
      <img src="/public/imgs/FoodDashSvg.svg" alt="" />
      <p>
      Food Dash ©2023 All Rights Reserved
<br /><br />
      By - Piyush Prajapat
      </p>
      <span>Follow Us On</span>
      <img src="/public/imgs/footer_icon.svg" alt="" />
    </div>
    <ul className="footer_ul">
      <h2>Menu</h2>
      <li><a href="">Home</a></li>
      <li><a href="">Offers</a></li>
      <li><a href="">Service</a></li>
      <li><a href="">About Us</a></li>
    </ul>
    <ul className="footer_ul">
      <h2>Information</h2>
      <li><a href="">Menu</a></li>
      <li><a href="">Quality</a></li>
      <li><a href="">Make A Choice</a></li>
      <li><a href="">Fast Delivery</a></li>
    </ul>
    <ul className="footer_ul">
      <h2>Contact</h2>
      <li><a href="">+123456789</a></li>
      <li><a href="">Explore</a></li>
      <li><a href="">Info@Fooddash.com</a></li>
      <li><a href="">12, Maharashtra, Indian</a></li>
    </ul>
  
</div>
</footer>
  )
}

export default Footer