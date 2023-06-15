import React from "react";
import classes from "./Promo.module.css";
import promo from "./../../images/img/header-img.jpg";
import BtnShop from "../BtnShop/BtnShop";

const Promo = () => {
  return (
    <>
      <section className={classes.promo}>
        <div className="container">
          <div className={classes.promo__content}>
            <div className={classes.promo__text}>
              <div className={classes.promo__title}>
                <span className={classes.promo__title_lets}>
                  <span>LET’S</span>
                </span>
                EXPLORE
                <span className={classes.promo__title_unique}>
                  <span>UNIQUE</span>
                </span>
                CLOTHES.
              </div>
              <div className={classes.promo__desc}>
                Live for Influential and Innovative fashion!
              </div>
              <BtnShop />
            </div>
            <div className={classes.promo__img}>
              <img src={promo} alt="Promo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promo;
