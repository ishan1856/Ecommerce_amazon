import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            title="iQOO Neo9 Pro 5G (Fiery Red, 8GB RAM, 256GB Storage) | Snapdragon 8 Gen 2 Processor | Supercomputing Chip Q1 | Flagship Level Sony IMX920 Camera"
            price={36999}
            image="https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            title="Then lean startup"
            price={29.36}
            image="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/vivo-new-mobile-phones?scl=1"
            rating={5}
          />
          <Product
            title="Kraasa Men Training, Walking, Gym, Sports Running Shoes"
            price={598}
            image="https://m.media-amazon.com/images/I/71IAZQAlDBL._SY675_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            title="Samsung Galaxy M14 5G (Smoky Teal,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor,2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger
"
            price={29.36}
            image="https://m.media-amazon.com/images/I/818VqDSKpCL._AC_SY95_.jpg"
            rating={4}
          />
          <Product
            title="Slippers starting from 149"
            price={149}
            image="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/WomensfootwearSBC/Unrec/Home_slippers_434x658_1709812125943_0._CB580648065_.png"
            rating={4}
          />

          <Product
            title="Be Bodywise 5% Niacinamide Body Wash & 1% Salicylic Acid Body Wash | With Aloe Vera & Chamomile Extract | For Glowing, Radiant & Even-Toned Skin | 500 ml"
            price="599"
            image="https://m.media-amazon.com/images/I/41Zfrq4d3qL._AC_SR400,600_.jpg"
            rating="4"
          />
          <Product
            title='ASUS Vivobook 15, Intel Core i7-12650H 12th Gen, 15.6" (39.62 cm) FHD, Thin and Light Laptop (16GB/512GB/Win11/Office 2021/Blue/1.7 kg), X1502ZA-EJ741WSl'
            price="599"
            image="https://m.media-amazon.com/images/I/71c0GSxtEEL._AC_UY327_FMwebp_QL65_.jpg"
            rating="4"
          />
        </div>
        <div className="home_row">
        <Product
            title="Allen Solly Men's Regular Fit Shirt
"
            price={29.36}
            image="https://m.media-amazon.com/images/I/61mOMiI2uhL._SY679_.jpg"
            rating={3}
          />
          <Product
            title="Pinkmint Mens Long Sleeve Button Down Shirt for Men Collared Casual Formal Soild Shirt
"
            price={349}
            image="https://m.media-amazon.com/images/I/317Jvwy8toL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            title="DHRUVI TRENDZ Men's Regular Fit Shirt
"
            price={289}
            image="https://m.media-amazon.com/images/I/71fz6+A0heL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />

        </div>

        
      </div>
    </div>
  );
}

export default Home;
