import React from "react";
import cl from "./Arrivals.module.css";
import Card from "../Card/Card";

import cat1 from "./../../images/categories/cat-01.jpg";
import cat2 from "./../../images/categories/cat-02.jpg";
import cat3 from "./../../images/categories/cat-03.jpg";

const Arrivals = () => {
  return (
    <>
      <section className={cl.arrivals}>
        <div className="container">
          <div className={cl.arrivals__header}>
            <h2 className="title-2">NEW ARRIVALS</h2>
          </div>
          <div className={cl.arrivals__card}>
            <Card title="Hoodies & Sweetshirt" img={cat1} />
            <Card title="Coats & Parkas" img={cat2} />
            <Card title="Tees & T-Shirt" img={cat3} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Arrivals;
