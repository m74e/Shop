import React from "react";
import styles from "./createAccount.module.css";
import RightBlueSmall from "../customsIcon/rightBlueSmall";
import TopGrey from "../customsIcon/topGrey";
import Camera from "../customsIcon/cameraPointerBorder";
import FooterBtn from "../component/footerBtn/footerBtn";
import Iraq from "../customsIcon/Iraq";
import Eye from "../customsIcon/lineOnEye";
import { Link } from "react-router";
const createAccount = () => {
  
  return (
    <>
      <div className={styles.continerCreateAccount}>
        <div className={styles.contant}>
          <div className={styles.textContent}>
            <TopGrey className={styles.greyPostion} />
            <RightBlueSmall className={styles.bluePostion} />
            <Camera className={styles.cameraPostion} />
            <h1 className={styles.text}>Create Account</h1>
          </div>

          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Email"
              maxLength={50}
              className={styles.emailInput}
            />
            <Eye className={styles.Eye} />
            <input
              type="text"
              placeholder="Password"
              maxLength={16}
              className={styles.emailInput}
            />
            <div className={styles.contantOfInput}>
              <div>Iraq</div>
              <div className={styles.line}></div>
              <input
                type="text"
                placeholder=" Your number"
                className={styles.lastInput}
              />
            </div>
          </div>
        </div>
        <Link to="/shop">
          {" "}
          <FooterBtn width="100%" marginTop={30}>
            Done
          </FooterBtn>
        </Link>
        <div className={styles.cancle}>
          <Link to="/">cancle</Link>
        </div>{" "}
      </div>
    </>
  );
};
export default createAccount;
