import React, { useState } from "react";
import styles from "./cart.module.css";
import Container from "../../component/container/container";
import Girl from "/public/girl.svg";
import Delete from "/public/delete.svg";
import Footer from "../../component/footerShop/footerShop";

const cart = () => {
  const [number, setNumber] = useState(1);
  const [isCart, setIsCart] = useState(true);
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
  const infoCart = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet consectetur.",
      dec: "Pink, Size M",
      price: 17.45,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet consectetur.",
      dec: "Pink, Size M",
      price: 99.78,
    },
  ];

  const totalPrice = infoCart.reduce((acc, item) => acc + item.price, 0);

  // console.log(totalPrice);

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
            {place.map((i) => (
              <div className={styles.headerAddress}>
                <div className={styles.Shipping}>
                  <h3>{i.Shipping}</h3>
                </div>
                <div className={styles.testAddress}>
                  <p>{i.address}</p>
                </div>
              </div>
            ))}
          </div>
          {isCart == true && (
            <>
              {infoCart.map((i) => (
                <div className={styles.mainContent}>
                  <div className={styles.imgOfContent}>
                    <div className={styles.deleteContent}>
                      <img src={Delete} alt="" />
                    </div>
                    <img className={styles.imgContent} src={Girl} alt="" />
                  </div>
                  <div className={styles.textContent}>
                    <div className={styles.flexText}>
                      <p className={styles.nameOfProdect}>{i.name}</p>
                      <p className={styles.decOfProdect}>{i.dec}</p>
                    </div>
                    <div className={styles.priceAndCount}>
                      <div className={styles.price}>${i.price}</div>
                      <div className={styles.counterBox}>
                        <div
                          className={styles.minus}
                          onClick={() => {
                            if (number == 1) {
                              return;
                            } else {
                              setNumber(number - 1);
                            }
                          }}
                        >
                          -
                        </div>
                        <div className={styles.counter}>{number}</div>
                        <div
                          className={styles.plus}
                          onClick={() => {
                            if (number == 10) {
                              return;
                            } else {
                              setNumber(number + 1);
                            }
                          }}
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </>
          )}
        </div>
      </Container>

      <div className={styles.total}>
        <div className={styles.totalText}>
          <h3>Total</h3>
          <p className={styles.totalPrice}>${totalPrice}</p>
        </div>
        {isCart == true && (
          <div>
            <button
              className={styles.Checkout}
              onClick={() => setIsCart(!isCart)}
            >
              Checkout
            </button>
          </div>
        )}
        {isCart == false && (
          <div>
            <button className={styles.pay} onClick={() => setIsCart(!isCart)}>
              Checkout
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default cart;
