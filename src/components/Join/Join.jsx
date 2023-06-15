import React from "react";

import cl from "./Join.module.css";

const Join = () => {
  return (
    <>
      <div className={cl.join}>
        <div className="container">
          <div className={cl.join__items}>
            <div className={cl.join__items_text}>
              <h1>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
              <p>Type your email down below and be young wild generation</p>
            </div>
            <div className={cl.join__items_form}>
              <input
                type="Email"
                placeholder="Add your email here"
                className={cl.join__items_input}
              />
              <button type="submit" className={cl.join__items_btn}>
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
