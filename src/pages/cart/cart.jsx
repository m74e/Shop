import React from "react";
import styles from "./cart.module.css";
import Container from "../../component/container/container";
const cart = () => {
  const counter = [
    {
      id: 1,
      count: 0,
    },
  ];
  const place = [
    {
      id: 1,
      Shipping: "Shipping Address",
      address: ` 26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi
                  Minh city`,
     
    },
  ];
  return (
    <>
      <Container>
        <div className={styles.mainCart}>
          {" "}
          {counter.map((i) => (
            <div className={styles.headerCart}>
              <h3>Cart</h3> <div className={styles.headerCount}>{i.count}</div>
            </div>
          ))}
          <div className={styles.address}>
            {place.map((i)=>(
            <div className={styles.headerAddress}>
                
              <div className={styles.Shipping}>
                <h3>{i.Shipping}</h3>
              </div>
              <div className={styles.testAddress}>
                <p>
                 {i.address}
                </p>
              </div>
            </div>))}
          </div>
        </div>
      </Container>
    </>
  );
};
export default cart;
