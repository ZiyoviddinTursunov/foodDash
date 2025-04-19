import React from 'react'
import "./Home.css"
import { FaStar } from 'react-icons/fa'
function Home() {
  return (
 <div className="home">
<div className="hero">
<div className="container">
      <div className="hero-title">
      <h1><span>Quick</span> and <span>Tasty 
       Food Delivered</span> with <span>a 
       Dash of</span> Speed </h1>
   <div className="hero-buttons">
   <button>Order Now</button> 
   <button>Track Order</button>
   </div>
      </div>
      <div className="hero-img">
        <img src="/public/imgs/hero_img.png" alt="" />
      </div>

      <div className="home-frame">

            <div className="home-frame-box">
                <img src="/public/imgs/hero_svg1.svg" alt="" />
                <div className="home-frame-box-title">
                    <h2>Fast Delivery</h2>
                    <p>Promise To Deliver Within 30 Mins</p>
                </div>
            </div>
            <div className="home-frame-box">
                <img src="/public/imgs/hero_svg2.svg" alt="" />
                <div className="home-frame-box-title">
                    <h2>Fresh Food</h2>
                    <p>Your Food Will Be Delivered 100% Fresh To Your Home. </p>
                </div>
            </div>
            <div className="home-frame-box">
                <img src="/public/imgs/hero_svg.svg" alt="" />
                <div className="home-frame-box-title">
                    <h2>Free Delivery</h2>
                    <p>Your Food Delivery Is Absolutely Free. No Cost Just Order</p>
                </div>
            </div>
       
      </div>
    </div>
</div>


<main>
    <section className="section1">
        <div className="container">
            <div className="section1-title">
<h1>Our <span>Best  Delivered</span> Indian Dish
</h1>
<p>
It’s Not Just About Bringing You Good Food From Restaurants, We Deliver You Experience</p>
            </div>

            <div className="boxs1">
                <div className="box1">
                    <img className='box1-font' src="/public/imgs/boxFont.svg" alt="" />
                    <img className='box1_img' src="/public/imgs/box1_img.png" /> 
                    <h4>
                    Indian Vegetable 
                    Pulao
                    </h4>
                    <span>Order Now &gt;</span>
                </div>
                <div className="box1">
                    <img className='box1-font' src="/public/imgs/boxFont.svg" alt="" />
                    <img className='box1_img' src="/public/imgs/box1_img1.png" /> 
                    <h4>
                    Paneer Bhuna 
                    Masala
                    </h4>
                    <span>Order Now &gt;</span>
                </div>
                <div className="box1">
                    <img className='box1-font' src="/public/imgs/boxFont.svg" alt="" />
                    <img className='box1_img' src="/public/imgs/box1_img2.png" /> 
                    <h4>
                    Vermicelli 
                    Upma
                    </h4>
                    <span>Order Now &gt;</span>
                </div>
            </div>
        </div>
    </section>
    <section className="section2">
        <div className="container">
<div className="box2">
    <img src="/public/imgs/box2_svg.svg" alt="" />
    <h2>Rajasthan</h2>
</div>
<div className="box2">
    <img src="/public/imgs/box2_svg.svg" alt="" />
    <h2>South Indian</h2>
</div>
<div className="box2">
    <img src="/public/imgs/box2_svg.svg" alt="" />
    <h2>Gujarat</h2>
</div>
<div className="box2">
    <img src="/public/imgs/box2_svg.svg" alt="" />
    <h2>Maharashtra</h2>
</div>

        </div>
    </section>
    <section className="section3">
        <div className="container">
        <div className="section3-title">
<h1>Our <span>Regular</span> Menu 
</h1>
<button>See All </button>
            </div>
<div className="boxs3">
    <div className="box3">
        <div className="box3_img">
        <img className='box1-font' src="/public/imgs/boxFont.svg" alt="" />
        <img className='box3-mainImg' src="/public/imgs/box3_img1.png" alt="" />
        </div>
       <div className="box3-title">
       <h3><span>Indian Dessert </span>
        Angoori Rasmalai</h3>
        <div className="rating">
            <div className="star">
            <FaStar/>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <div className="rewiev-count">
                <span>(100)</span>
            </div>
            </div>
            <div className="prodact-pric3">
                <span>₹150</span>
                <button>Buy Now</button>
            </div>
       </div>
    </div>
    <div className="box3">
        <div className="box3_img">
        <img className='box1-font' src="/public/imgs/boxFont.svg" alt="" />
        <img className='box3-mainImg' src="/public/imgs/box3_img2.png" alt="" />
        </div>
       <div className="box3-title">
       <h3><span>Indian Dessert </span>
        Angoori Rasmalai</h3>
        <div className="rating">
            <div className="star">
            <FaStar/>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <div className="rewiev-count">
                <span>(100)</span>
            </div>
            </div>
            <div className="prodact-pric3">
                <span>₹150</span>
                <button>Buy Now</button>
            </div>
       </div>
    </div>
    <div className="box3">
        <div className="box3_img">
        <img className='box1-font' src="/public/imgs/boxFont.svg" alt="" />
        <img className='box3-mainImg' src="/public/imgs/box3_img3.png" alt="" />
        </div>
       <div className="box3-title">
       <h3><span>Indian Dessert </span>
        Angoori Rasmalai</h3>
        <div className="rating">
            <div className="star">
            <FaStar/>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <div className="rewiev-count">
                <span>(100)</span>
            </div>
            </div>
            <div className="prodact-pric3">
                <span>₹150</span>
                <button>Buy Now</button>
            </div>
       </div>
    </div>
    <div className="box3">
        <div className="box3_img">
        <img className='box1-font' src="/public/imgs/boxFont.svg" alt="" />
        <img className='box3-mainImg' src="/public/imgs/box3_img4.png" alt="" />
        </div>
       <div className="box3-title">
       <h3><span>Indian Dessert </span>
        Angoori Rasmalai</h3>
        <div className="rating">
            <div className="star">
            <FaStar/>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <div className="rewiev-count">
                <span>(100)</span>
            </div>
            </div>
            <div className="prodact-pric3">
                <span>₹150</span>
                <button>Buy Now</button>
            </div>
       </div>
    </div>
    <div className="box3">
        <div className="box3_img">
        <img className='box1-font' src="/public/imgs/boxFont.svg" alt="" />
        <img className='box3-mainImg' src="/public/imgs/box3_img5.png" alt="" />
        </div>
       <div className="box3-title">
       <h3><span>Indian Dessert </span>
        Angoori Rasmalai</h3>
        <div className="rating">
            <div className="star">
            <FaStar/>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <div className="rewiev-count">
                <span>(100)</span>
            </div>
            </div>
            <div className="prodact-pric3">
                <span>₹150</span>
                <button>Buy Now</button>
            </div>
       </div>
    </div>
    <div className="box3">
        <div className="box3_img">
        <img className='box1-font' src="/public/imgs/boxFont.svg" alt="" />
        <img className='box3-mainImg' src="/public/imgs/box3_img6.png" alt="" />
        </div>
       <div className="box3-title">
       <h3><span>Indian Dessert </span>
        Angoori Rasmalai</h3>
        <div className="rating">
            <div className="star">
            <FaStar/>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <div className="rewiev-count">
                <span>(100)</span>
            </div>
            </div>
            <div className="prodact-pric3">
                <span>₹150</span>
                <button>Buy Now</button>
            </div>
       </div>
    </div>
</div>

        </div>
    </section>
    <section className="section4">
        <div className="container">

<div className="boxs4">
    <div className="box4">
        <img src="/public/imgs/Box4_img.png" alt="" />
    </div>
    <div className="box4">
    <img src="/public/imgs/Box4_img1.png" alt="" />
    <img src="/public/imgs/Box4_img2.png" alt="" />
        
    </div>

</div>



        </div>
    </section>
</main>


 </div>
  )
}

export default Home