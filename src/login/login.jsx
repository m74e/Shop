import React from "react";
import styles from "./login.module.css";
import CartIcon from "../customsIcon/cartIcon";
import RightArrow from "../customsIcon/firstPageArrow";
import useStore from "../zustand/zustand";
import FooterBtn from "../component/footerBtn/footerBtn";

const login = () => {
    const {  inc } = useStore(); 
  return (
    <>
      <div className={styles.Contant}>
        <div className={styles.main}>
          <div className={styles.loginBody}>
            <div className={styles.cartImg}>
              <CartIcon />
            </div>
            <div className={styles.textContant}>
              <h2 className={styles.headers}>Shoppe</h2>
              <p>Beautiful eCommerce UI Kit for your online store</p>
            </div>
          </div>
          <FooterBtn width={"70%"} marginTop={100} onClick={inc} >Let's get started</FooterBtn>
          <div className={styles.register}>
            <p>I already have an account</p>
            <div className={styles.registerIcon}>
              <RightArrow/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default login;
