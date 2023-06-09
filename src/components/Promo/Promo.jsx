import React from "react";
import classes from "./Promo.module.css";
import promo from "./../../images/img/header-img.jpg";

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
                </span>{" "}
                CLOTHES.
              </div>
              <div className={classes.promo__desc}>
                Live for Influential and Innovative fashion!
              </div>
              <div className={classes.promo__btn_wrapper}>
                <button className={classes.promo__btn}>
                  <a href="#!"> Shop Now</a>
                </button>
              </div>
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
