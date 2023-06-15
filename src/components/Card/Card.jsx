/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import cl from "./Card.module.css";
import arrow from "./../../images/icons/arrow.svg";

const Card = ({ title, img }) => {
  return (
    <>
      <div className={cl.card}>
        <a href="#!" className={cl.card__link} />
        <img className={cl.card__img} src={img} alt="First category" />
        <div className={cl.card__body}>
          <div className={cl.card__text}>
            <div className={cl.card__title}>{title}</div>
            <div className={cl.card__desc}>Explore Now!</div>
          </div>
          <div className={cl.card__arrow}>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
