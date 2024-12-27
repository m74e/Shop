import React, { useState } from "react";
import styles from "./shopStore.module.css";
import Container from "../component/container/container.jsx";
import Filter from "../customsIcon/filter.jsx";
import Girl from "/public/girl.svg";
import Shose from "/public/shoes.svg";
import FooterShop from "../component/footerShop/footerShop.jsx";
import ProductVariations from "../UI/productVariations.jsx";
import Clothes from "../assets/clothes.jpg"
const shopStore = () => {
  const [isModule, setIsModule] = useState(false);
  const [convert, setConvert] = useState("");
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
      id: 2,
      img: Girl,
      des: "Lorem ipsum dolor sit amet consectetur",
      price: "17.00",
    },
    {
      id: 3,
      img: Girl,
      des: "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturZLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturZ",
      price: "19.00",
    },
    {
      id: 4,
      img: Girl,
      des: "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturZLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturZLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturZ",
      price: "16.00",
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
                  <div className={styles.flexForCircl}>
                    <img className={styles.imgContent} src={i.img} alt="" />
                  </div>
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
                <div
                  className={styles.insideBody}
                  onClick={() => setIsModule(!isModule)}
                >
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
      {isModule && (
        <ProductVariations
          Img={Girl}
          onClick={() => setIsModule(!isModule)}
          Hight="60%"
        >
          <img src={Clothes} alt="" />
        </ProductVariations>
      )}
      <FooterShop isModule={isModule} />
    </>
  );
};
export default shopStore;
