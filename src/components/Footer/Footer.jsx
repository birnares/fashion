import React from "react";

import cl from "./Footer.module.css";

import f from "./../../images/socials/fb.svg";
import i from "./../../images/socials/inst.svg";
import tw from "./../../images/socials/tw.svg";
import inn from "./../../images/socials/in.svg";

const Footer = () => {
  return (
    <>
      <footer className={cl.footer}>
        <div className="container">
          <div className={cl.footer__nav}>
            <div className={cl.footer__social}>
              <h3 className="title-1 title-1white">FASHION</h3>
              <p className={cl.footer__social_desc}>
                Complete your style with awesome clothes from us.
              </p>
              <ul className={cl.footer__social_icons}>
                <li>
                  <img src={f} alt="Facebook" />
                </li>
                <li>
                  <img src={i} alt="Instagram" />
                </li>
                <li>
                  <img src={tw} alt="Twitter" />
                </li>
                <li>
                  <img src={inn} alt="In" />
                </li>
              </ul>
            </div>
            <nav className={cl.footer__menu}>
              <ul className={cl.footer__menu_list}>
                <li className={cl.footer__menu_item}>
                  <p className={cl.footer__menu_title}>Company</p>
                </li>
                <li className={cl.footer__menu_item}>
                  <a href="#!">About</a>
                </li>
                <li className={cl.footer__menu_item}>
                  <a href="#!">Contact us</a>
                </li>
                <li className={cl.footer__menu_item}>
                  <a href="#!">Support</a>
                </li>
                <li className={cl.footer__menu_item}>
                  <a href="#!">Careers</a>
                </li>
              </ul>
              <ul className={cl.footer__menu_list}>
                <li className={cl.footer__menu_item}>
                  <p className={cl.footer__menu_title}>Quick Link</p>
                </li>
                <li className={cl.footer__menu_item}>
                  <a href="#!">Share Location</a>
                </li>
                <li className={cl.footer__menu_item}>
                  <a href="#!">Orders Tracking</a>
                </li>
                <li className={cl.footer__menu_item}>
                  <a href="#!">Size Guide</a>
                </li>
                <li className={cl.footer__menu_item}>
                  <a href="#!">FAQs</a>
                </li>
              </ul>
              <ul className={cl.footer__menu_list}>
                <li className={cl.footer__menu_item}>
                  <p className={cl.footer__menu_title}>Legal</p>
                </li>
                <li className={cl.footer__menu_item}>
                  <a href="#!">Terms & conditions</a>
                </li>
                <li className={cl.footer__menu_item}>
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
