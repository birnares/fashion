import React from "react";
import cl from "./Application.module.css";
import apple from "./../../images/icons/app-store.png";
import google from "./../../images/icons/google-play.png";
import app from "./../../images/img/vouchers-img.png";

const Application = () => {
  return (
    <>
      <div className={cl.application}>
        <div className="container">
          <div className={cl.application__content}>
            <div className={cl.application__text}>
              <div className={cl.application__text_title}>
                DOWNLOAD APP & GET THE VOUCHER!
              </div>
              <div className={cl.application__text_desc}>
                Get 30% off for first transaction using Rondovision mobile app
                for now.
              </div>
              <div className={cl.application__text_images}>
                <img src={apple} alt="App Store" />
                <img src={google} alt="Google Play" />
              </div>
            </div>
            <div className={cl.application__img}>
              <img src={app} alt="Application" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
