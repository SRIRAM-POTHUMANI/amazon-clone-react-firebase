import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "./Slidder";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_image">
          <Carousel
            url1="https://m.media-amazon.com/images/I/61mX4+tcVdL._SX3000_.jpg"
            url2="https://m.media-amazon.com/images/I/61qK1Xm3ROL._SX3000_.jpg"
            url3="https://m.media-amazon.com/images/I/71kb+pV0lGL._SX3000_.jpg"
            url4="https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg"
            url5="https://m.media-amazon.com/images/I/610zaYNI4OL._SX3000_.jpg"
          />
        </div>
        <div className="productsrow m-2 g-4">
          <div class="row row-cols-1 row-cols-md-3 g-4 m-3 d-flex d-flex justify-content-evenly">
            <div class="col">
              <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={191}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
              />
            </div>
            <div class="col">
              <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={2390}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
              />
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 m-3 d-flex d-flex justify-content-evenly">
            <div class="col">
              <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={1999}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              />
            </div>
            <div class="col">
              <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={3999}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              />
            </div>
            <div class="col">
              <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={95999}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              />
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 m-3 d-flex d-flex justify-content-evenly">
            <div class="col">
              <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={59999}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              />{" "}
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 m-3 d-flex d-flex justify-content-evenly">
            <div class="col">
              <Product
                id="12321341"
                title="BLACK+DECKER BMT126C Hand Tool Kit (126-Piece)BLACK+DECKER BMT126C Hand Tool Kit (126-Piece)"
                price={1849}
                rating={5}
                image="https://m.media-amazon.com/images/I/91zAIW9Lz5L._SL1500_.jpg"
              />
            </div>
            <div class="col">
              <Product
                id="49538094"
                title="CREEK Unisex Octagonal Sunglasses/Frame for Men & Women - Black/Pink/Yellow/Blue Combo, Pack of 4, Free Size "
                price={999}
                rating={4}
                image="https://m.media-amazon.com/images/I/51sG7s-OYpL._UL1080_.jpg"
              />
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 m-3 d-flex d-flex justify-content-evenly">
            <div class="col">
              <Product
                id="4903851"
                title="Happilo Premium Californian Roasted & Salted Pistachios Value Pack Pouch, 500 g"
                price={717}
                rating={3}
                image="https://m.media-amazon.com/images/I/419Si8DdufL.jpg"
              />
            </div>
            <div class="col">
              <Product
                id="23445938"
                title="Aurion Skipping-Rope Jump Skipping Rope for Men, Women, Weight Loss, Kids, Girls, Children, Adult - Best in Fitness, Sports, Exercise, Workout "
                price={411}
                rating={5}
                image="https://m.media-amazon.com/images/I/61DteV3hXqL._SL1000_.jpg"
              />
            </div>
            <div class="col">
              <Product
                id="3254354346"
                title="boAt Airdopes 141 TWS Earbuds with 42H Playtime, Beast Mode, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls(Cider Cyan)"
                price={1299}
                rating={4}
                image="https://m.media-amazon.com/images/I/41enxHWTgIL._SL1500_.jpg"
              />
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 m-3 d-flex d-flex justify-content-evenly">
            <div class="col">
              <Product
                id="12321341"
                title="Fedra Epoch Nylon 55 litres Waterproof Strolley Duffle Bag 2 Wheels Luggage Bag Green White"
                price={599}
                rating={3}
                image="https://m.media-amazon.com/images/I/61yrh9SvoOL._SL1100_.jpg"
              />
            </div>{" "}
            <div class="col">
              <Product
                id="49538094"
                title="Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6 FHD Thin and Light Laptop (8 GB/256GB SDD/Windows 11/MS Office 2021/2Yr Warranty/Arctic Grey/1.65Kg)"
                price={42999}
                rating={4}
                image="https://m.media-amazon.com/images/I/61q6x-ll5FL._AC_UL320_.jpg"
              />
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 m-3 d-flex d-flex justify-content-evenly">
            <div class="col">
              <Product
                id="90829335"
                title="Classic Mosquito Net, Polyester, Foldable for Double Bed, Strong 30GSM, PVC Coated Steel - King Size, Blue"
                price={899}
                rating={4}
                image="https://m.media-amazon.com/images/I/71MNVwWhkaL._SL1500_.jpg"
              />
            </div>{" "}
            <div class="col">
              <Product
                id="90829335"
                title="SAFARI 15 Ltrs Sea Blue Casual/School/College Backpack (DAYPACKNEO15CBSEB) & SAFARI 15 Ltrs Cherry Red Casual/School/College Backpack (DAYPACKNEO15CBCRE) "
                price={658}
                rating={4}
                image="https://m.media-amazon.com/images/I/61YFWBeG6pL._SL1493_.jpg"
              />{" "}
            </div>
            <div class="col">
              <Product
                id="90829337"
                title="TP-link N300 WiFi Wireless Router TL-WR845N | 300Mbps Wi-Fi Speed | Three 5dBi high gain Antennas | IPv6 Compatible | AP/RE/WISP Mode | Parental Control | Guest Network "
                price={1199}
                rating={3}
                image="https://m.media-amazon.com/images/I/41fQ5NSkEWL._SL1040_.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
