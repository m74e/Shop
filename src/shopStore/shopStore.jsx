import React from "react";
import styles from "./shopStore.module.css";
import Container from "../component/container/container.jsx";
import Filter from "../customsIcon/filter.jsx";
import Girl from "/public/girl.svg";
import Shose from "/public/shoes.svg";
const shopStore = () => {
  const Clothestype = [
    {
      id: 1,
      img: Shose,
      type: "Dresses",
    },
    {
      id: 2,
      img: Shose,
      type: "Dresses",
    },
    {
      id: 3,
      img: Shose,
      type: "Dresses",
    },
    {
      id: 4,
      img: Shose,
      type: "Dresses",
    },
    {
      id: 5,
      img: Shose,
      type: "Dresses",
    },
    {
      id: 6,
      img: Shose,
      type: "Dresses",
    },
    {
      id: 7,
      img: Shose,
      type: "Dresses",
    },
    {
      id: 8,
      img: Shose,
      type: "Dresses",
    },
    {
      id: 9,
      img: Shose,
      type: "Dresses",
    },
    {
      id: 10,
      img: Shose,
      type: "Dresses",
    },
  ];

  const items = [
    {
      id: 1,
      img: Girl,
      des: "Lorem ipsum dolor sit amet consectetur",
      price: "17.00",
    },
    {
      id: 1,
      img: Girl,
      des: "Lorem ipsum dolor sit amet consectetur",
      price: "17.00",
    },
    {
      id: 1,
      img: Girl,
      des: "Lorem ipsum dolor sit amet consectetur",
      price: "17.00",
    },
    {
      id: 1,
      img: Girl,
      des: "Lorem ipsum dolor sit amet consectetur",
      price: "17.00",
    },
  ];
  return (
    <>
      <Container>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>shop</h2>
            <div className={styles.mainFlexForCircl}>
              {Clothestype.map((i) => (
                <div className={styles.flexBody}>
                  <div className={styles.flexForCircl}><img className={styles.imgContent} src={i.img} alt="" /></div>
                  <p>{i.type}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.mainBody}>
            <div className={styles.headerBody}>
              <div className={styles.allItems}>All Items</div>
              <div className={styles.filter}>
                <Filter />
              </div>
            </div>
            <div className={styles.body}>
              {items.map((i) => (
                <div className={styles.insideBody}>
                  <div className={styles.squer}>
                    <img src={i.img} alt="" />
                  </div>
                  <div className={styles.contantAndPrice}>
                    <p>{i.des}</p>
                    <div className={styles.price}>{`${i.price}$`}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default shopStore;
