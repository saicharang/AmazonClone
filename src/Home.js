import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_ft._CB404804383_.jpg"
          alt="home_image"
        />

        <div className="home__row">
          <Product
            id={1}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg"
            }
            title={
              "Do you dread going to work? Do you feel tired, unhappy, weighed down? Have you given up on your dreams? The road to a happier"
            }
            price={300}
            rating={5}
          />
          <Product
            id={2}
            image={
              "https://m.media-amazon.com/images/I/81GM4Ang38L._AC_UY218_.jpg"
            }
            title={
              "Do you dread going to work? Do you feel tired, unhappy, weighed down? Have you given up on your dreams? The road to a happier"
            }
            price={200}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            image={
              "https://m.media-amazon.com/images/I/817Cl9rdehL._AC_UY218_.jpg"
            }
            title={
              "Do you dread going to work? Do you feel tired, unhappy, weighed down? Have you given up on your dreams? The road to a happier"
            }
            price={400}
            rating={4}
          />
          <Product
            id={4}
            image={
              "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg"
            }
            title={
              "Do you dread going to work? Do you feel tired, unhappy, weighed down? Have you given up on your dreams? The road to a happier"
            }
            price={500}
            rating={4}
          />
          <Product
            id={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51+2bxo4TuL._SX325_BO1,204,203,200_.jpg"
            }
            title={
              "Do you dread going to work? Do you feel tired, unhappy, weighed down? Have you given up on your dreams? The road to a happier"
            }
            price={800}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            image={
              "https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_UY218_.jpg"
            }
            title={
              "Do you dread going to work? Do you feel tired, unhappy, weighed down? Have you given up on your dreams? The road to a happier"
            }
            price={600}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
