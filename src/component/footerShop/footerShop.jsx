import React from "react";
import styles from "./footerShop.module.css";
import Home from "/public/homeNoneAct.svg";
import ActHome from "../../assets/home.png";
import Heart from "/public/heart.svg";
import Sheet from "/public/sheet.svg";
import Cart from "/public/cart.svg";
import person from "/public/person.svg";
import Container from "../container/container";
import { useLocation, Link } from "react-router";
const footerShop = ({isModule}) => {
  const location = useLocation();

  return (
    <>
      {/* {" "}style={{display:`${isModule? "none" :"block"}`}} */}
      <div className={styles.mainFooter} >
        <Container> 
          <div className={styles.globelFooter} >
            <Link to="/shop">
              {" "}
              {location == "/shop" ? (
                <img className={styles.footerImg} src={Home} alt="" />
              ) : (
                <img className={styles.footerImgAct} src={ActHome} alt="" />
              )}
            </Link>
            <Link to="">
              {" "}
              <img className={styles.footerImg} src={Heart} alt="" />
            </Link>
            <Link to="">
              {" "}
              <img className={styles.footerImg} src={Sheet} alt="" />
            </Link>
            <Link to="">
              {" "}
              <img className={styles.footerImg} src={Cart} alt="" />
            </Link>
            <Link to="">
              <img className={styles.footerImg} src={person} alt="" />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
export default footerShop;
