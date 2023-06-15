import React from "react";
import classes from "./BtnShop.module.css";

const BtnShop = (style) => {
  return (
    <>
      <div className={classes.promo__btn_wrapper}>
        <button className={classes.promo__btn}>
          <a href="#!"> Shop Now</a>
        </button>
      </div>
    </>
  );
};

export default BtnShop;
