import React, { useState } from "react";
import styles from "./createAccount.module.css";
import RightBlueSmall from "../../customsIcon/rightBlueSmall";
import TopGrey from "../../customsIcon/topGrey";
import Camera from "../../customsIcon/cameraPointerBorder";
import FooterBtn from "../../component/footerBtn/footerBtn";
import Iraq from "../../assets/Iraq.png";
import Eye from "../../customsIcon/lineOnEye";
import DownArrow from "/public/downArrow.svg";
import { Link } from "react-router";
import useStore from "../../zustand/zustand";
const createAccount = () => {
  const [isPassword, setIsPassword] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isNumber, setIsNumber] = useState("");
const {inc}=useStore();

  return (
    <>
      <div className={styles.continerCreateAccount}>
        <div className={styles.contant}>
          <div className={styles.textContent}>
            <TopGrey className={styles.greyPostion} />
            <RightBlueSmall className={styles.bluePostion} />
            <div className={styles.cameraPostion}>
              <Camera />
            </div>
            <h1 className={styles.text}>Create Account</h1>
          </div>

          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Email"
              maxLength={20}
              onChange={(e) => setIsEmail(e.target.value)}
              value={isEmail}
              className={styles.emailInput}
            />
            <Eye className={styles.Eye} />
            <input
              type="password"
              placeholder="Password"
              maxLength={16}
              minLength={8}
              value={isPassword}
              onChange={(e) => setIsPassword(e.target.value)}
              className={styles.emailInput}
            />
            <div className={styles.contantOfInput}>
              <div className={styles.sortImgs}>
                <img className={styles.countryFlag} src={Iraq} alt="" />{" "}
                <img className={styles.dArrow} src={DownArrow} alt="" />
              </div>
              <div className={styles.line}></div>
              <input
                type="text"
                placeholder=" Your number"
                value={isNumber}
                onChange={(e) => setIsNumber(e.target.value)}
                className={styles.lastInput}
              />
            </div>
          </div>
        </div>{" "}
        <Link
          to={
            isPassword.length >= 8 &&
            isEmail.length >= 16 &&
            isNumber.length >= 14
              ? "/shop"
              : "/"
          }
        >
          <FooterBtn width="100%" marginTop={30}>
            Done
          </FooterBtn>
        </Link>
        <div className={styles.cancle}>
          <div>cancle</div>
        </div>{" "}
      </div>
    </>
  );
};
export default createAccount;
