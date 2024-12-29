import React, { useState } from "react";
import styles from "./login.module.css";
import BlueCirclTop from "../../customsIcon/blueCirclTop";
import GreyCirclTop from "../../customsIcon/greyCirclTop";
import RightCircl from "../../customsIcon/rightCircl";
import GreyCirclBottom from "../../customsIcon/greyCirclBottom";
import Container from "../../component/container/container";
import FooterBtn from "../../component/footerBtn/footerBtn";
import { Link } from "react-router";
function login() {
  const [isEmail, setIsEmail] = useState("");
  return (
    <>
      <Container>
        <div className={styles.mainLogin}>
          <BlueCirclTop className={styles.bluePostion} />
          <GreyCirclTop className={styles.greyPostion} />
          <RightCircl className={styles.rightPostion} />
          <GreyCirclBottom className={styles.rightPostion} />
          <div className={styles.headerOfLogin}>
            <h1>Login</h1>
            <p className={styles.contentOfLogin}>
              Good to see you back! &#10084;
            </p>
          </div>
          <input
            type="text"
            placeholder="Email"
            className={styles.inputEmail}
            value={isEmail}
            onChange={(e) => setIsEmail(e.target.value)}
          />
          <Link
            to={isEmail.length >= 16 ? "/shop" : "/login"}
            className={styles.linkZIndex}
          >
            <FooterBtn width="100%" marginTop={32}>
              Next
            </FooterBtn>
          </Link>
          <Link to={"/"} className={styles.linkZIndex}>
            <p className={styles.cancelBtn}>Cancel</p>
          </Link>
        </div>
      </Container>
    </>
  );
}

export default login;
