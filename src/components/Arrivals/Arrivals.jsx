import React from "react";
import cl from "./Arrivals.module.css";
import Card from "../Card/Card";

const Arrivals = () => {
  return (
    <>
      <section className={cl.arrivals}>
        <div className="container">
          <div className={cl.arrivals__header}>
            <h2 className="title-2">NEW ARRIVALS</h2>
          </div>
          <div className={cl.arrivals__cars}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default Arrivals;
