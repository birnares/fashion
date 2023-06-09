import React from "react";

import amazon from "./../../images/brands/Amazon.png";
import hm from "./../../images/brands/HM.png";
import lacoste from "./../../images/brands/Lacoste.png";
import levis from "./../../images/brands/Levis.png";
import obey from "./../../images/brands/Obey.png";
import shopify from "./../../images/brands/Shopify.png";
import cl from "./Brands.module.css";

const Brands = () => {
  return (
    <>
      <section className={cl.brands}>
        <div className="container">
          <ul className={cl.brands__list}>
            <li>
              <a href="#!">
                <img src={hm} alt="HM" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={obey} alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={shopify} alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={lacoste} alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={levis} alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={amazon} alt="Amazon" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Brands;
