import React from "react";
import Card from "../Card/Card";
import favor1 from "./../../images/img/promo-01.jpg";
import favor2 from "./../../images/img/promo-02.jpg";
import cl from "./Favourite.module.css";

const Favourite = () => {
  return (
    <>
      <div className={cl.favourite__card}>
        <div className="container">
          <div className={cl.favourite__header}>
            <div className={"title-2"}>Young’s Favourite</div>
          </div>
          <div className={cl.favourite__card_items}>
            <Card title="Trending on instagram" img={favor1} />
            <Card title="All Under $40" img={favor2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourite;
