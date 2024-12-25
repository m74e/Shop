import React from "react";
import styles from "./footer.module.css";
const FooterBtn = ({ children, width = 0, marginTop=0,onClick }) => {
  return (
    <>
      <div className={styles.footerBtn} onClick={onClick} style={{ width,marginTop }}>
        {children}
      </div>
    </>
  );
};
export default FooterBtn;
