import React, { useState } from "react";
import styles from "./shopStore.module.css";
import Container from "../../component/container/container.jsx";
import Filter from "../../customsIcon/filter.jsx";
import Girl from "/public/girl.svg";
import Shose from "/public/shoes.svg";
import FooterShop from "../../component/footerShop/footerShop.jsx";
import ProductVariations from "../../UI/productVariations.jsx";
import Clothes from "../../assets/clothes.jpg";
import corrct from "/public/corrct.svg";
import Like from "../../customsIcon/like";
import { Link } from "react-router";
const shopStore = () => {
  const [isModule, setIsModule] = useState(false);
  const [convert, setConvert] = useState({});
  const [tranform, setTranform] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [mTranform, setMTranform] = useState(false);
  const [lTranform, setLTranform] = useState(false);
  const [xlTranform, setXLTranform] = useState(false);
  const [xxlTranform, setXXLTranform] = useState(false);
  const [xxxlTranform, setXXXLTranform] = useState(false);
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
      img: Shose,
      des: "Lorem ipsum dolor sit amet consectetur",
      price: "17.00",
    },
    {
      id: 3,
      img: Girl,
      des: "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturZLorem",
      price: "19.00",
    },
    {
      id: 4,
      img: Girl,
      des: " Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturZLorem",
      price: "16.00",
    },
    {
      id: 5,
      img: Girl,
      des: " Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturZLorem",
      price: "16.00",
    },
  ];
  return (
    <>
      <Container>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.paddingForheader}>
              <h2>shop</h2>
            </div>
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
                  onClick={() => {
                    setIsModule(!isModule), setConvert(i);
                  }}
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
          Img={convert.img}
          onClick={() => {
            setIsModule(!isModule), setConvert({});
          }}
          Hight="60%"
        >
          <div className={styles.mainInfoOfModule}>
            <h2>Color Options</h2>
            <div className={styles.colorOptions}>
              <div
                className={styles.insideColorOptions}
                onClick={() => setIsCorrect(!isCorrect)}
              >
                <img
                  className={
                    isCorrect
                      ? styles.correctPostion
                      : styles.noneCorrectPostion
                  }
                  src={corrct}
                  alt=""
                />
                <img src={Clothes} alt="" className={styles.colorClothes} />
              </div>
              <div
                className={styles.insideColorOptions}
                onClick={() => setIsCorrect(!isCorrect)}
              >
                <img
                  className={
                    isCorrect
                      ? styles.correctPostion
                      : styles.noneCorrectPostion
                  }
                  src={corrct}
                  alt=""
                />
                <img src={Clothes} alt="" className={styles.colorClothes} />
              </div>
              <div
                className={styles.insideColorOptions}
                onClick={() => setIsCorrect(!isCorrect)}
              >
                <img
                  className={
                    isCorrect
                      ? styles.correctPostion
                      : styles.noneCorrectPostion
                  }
                  src={corrct}
                  alt=""
                />
                <img src={Clothes} alt="" className={styles.colorClothes} />
              </div>
              <div
                className={styles.insideColorOptions}
                onClick={() => setIsCorrect(!isCorrect)}
              >
                <img
                  className={
                    isCorrect
                      ? styles.correctPostion
                      : styles.noneCorrectPostion
                  }
                  src={corrct}
                  alt=""
                />
                <img src={Clothes} alt="" className={styles.colorClothes} />
              </div>
            </div>
            <div className={styles.size}>
              <button
                onClick={() => setTranform(!tranform)}
                className={tranform ? styles.actInsideSize : styles.insideSize}
              >
                S
              </button>

              <button
                onClick={() => setMTranform(!mTranform)}
                className={mTranform ? styles.actInsideSize : styles.insideSize}
              >
                M
              </button>
              <button
                onClick={() => setLTranform(!lTranform)}
                className={lTranform ? styles.actInsideSize : styles.insideSize}
              >
                L
              </button>
              <button
                onClick={() => setXLTranform(!xlTranform)}
                className={
                  xlTranform ? styles.actInsideSize : styles.insideSize
                }
              >
                XL
              </button>
              <button
                onClick={() => setXXLTranform(!xxlTranform)}
                className={
                  xxlTranform ? styles.actInsideSize : styles.insideSize
                }
              >
                XXL
              </button>
              <button
                onClick={() => setXXXLTranform(!xxxlTranform)}
                className={
                  xxxlTranform ? styles.actInsideSize : styles.insideSize
                }
              >
                XXXL
              </button>
            </div>
            <div className={styles.quantity}>
              <div>
                {" "}
                <h3>Quantity</h3>
              </div>

              <div className={styles.counter}>
                <div
                  onClick={() => setCount(count - 1)}
                  className={styles.quantityMinus}
                >
                  -
                </div>
                <div className={styles.quantitySquer}>
                  <p>{count}</p>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className={styles.quantityPlus}
                >
                  +
                </div>
              </div>
            </div>
            <div className={styles.footerModule}>
              <div className={styles.likeFooter}>
                <Like />
              </div>{" "}
              <div>
                {" "}
                <button className={styles.footerAddBtn}>Add to cart</button>
              </div>
              <div>
                <Link to={"/cart"}>
                  {" "}
                  <button className={styles.footerBuyBtn}>Buy now</button>
                </Link>
              </div>
            </div>
          </div>
        </ProductVariations>
      )}
      <FooterShop isModule={isModule} />
    </>
  );
};
export default shopStore;
