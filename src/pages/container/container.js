import React from "react";
import "./container.css"; // Importe um arquivo CSS para estilização, se necessário
import mobileImage from "../../images/image-product-mobile.jpg";
import desktopImage from "../../images/image-product-desktop.jpg";
import btnCartIcon from "../../images/icon-cart.svg";

const Container = () => {
  return (
    <div className="container">
      <picture>
        <source media="(max-width: 700px)" srcSet={mobileImage} />
        <img srcSet={desktopImage} alt="Minha Imagem" />
      </picture>
      <div className="container__text">
        <h2>PERFUME</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className="prices">
          <span className="prices_promotion_price">$149.99</span>
          <span className="prices_price">169.99</span>
        </div>
        <button className="btn__addCart">
          <img src={btnCartIcon}>
          </img>
          Add to Cart</button>
      </div>
    </div>
  );
};

export default Container;
