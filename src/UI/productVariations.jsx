import React from "react";
import styles from "./productVariations.module.css";
import Container from "../component/container/container";
const productVariations = ({ children, Hight = "auto", onClick, Img }) => {
  return (
    <>
    <div className={styles.flexModule}>
      <div className={styles.overLayer} onClick={onClick}>
        <img className={styles.imgOfModule} src={Img} alt="" />
      </div>
      <div className={styles.mainModule} style={{ height: Hight }}>
        <Container>{children}</Container>
      </div>
      </div>
    </>
  );
};

export default productVariations;
