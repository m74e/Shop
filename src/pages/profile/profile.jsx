import React from "react";
import styles from "./profile.module.css";
import Girl from "/public/girl.svg";
import FooterShop from "../../component/footerShop/footerShop";
import Container from "../../component/container/container";
import Box from "/public/box.svg";
import Lines from "/public/lines.svg";
import Sitting from "/public/sitting.svg";
const profile = () => {
  return (
    <>
      <Container>
        <div className={styles.mainProfile}>
          <div className={styles.header}>
            <div className={styles.contentOfRight}>
              <div className={styles.imgContainer}>
                {" "}
                <img className={styles.profileImg} src={Girl} alt="pic" />
              </div>
              <div className={styles.vouchers}>Vouchers</div>
            </div>
            <div className={styles.chooser}>
              <div className={styles.box}>
                <img src={Box} alt="" />
              </div>
              <div className={styles.lines}>
                <img src={Lines} alt="" />
              </div>
              <div className={styles.Sitting}>
                <img src={Sitting} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <FooterShop />
    </>
  );
};
export default profile;
