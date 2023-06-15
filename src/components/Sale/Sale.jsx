import React from "react";

import cl from "./Sale.module.css";
import sale from "./../../images/img/promo-img.jpg";
import BtnShop from "../BtnShop/BtnShop";

const Sale = () => {
  return (
    <>
      <section className={cl.sale}>
        <div className="container">
          <div className={cl.sale__content}>
            <div className={cl.sale__img}>
              <img src={sale} alt="sale" />
            </div>
            <div className={cl.sale__text}>
              <div className={cl.sale__title}>
                <span className={cl.sale__title_payday}>
                  <span>PAYDAY</span>
                </span>
                <br />
                SALE NOW
              </div>
              <div className={cl.sale__desc}>
                Spend minimal $100 get 30% off voucher code for your next
                purchase
              </div>
              <div className={cl.sale__date}>
                <b>1 June - 10 June 2021</b>
                <br />
                <span>*Terms & Conditions apply</span>
              </div>
              <BtnShop />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sale;
