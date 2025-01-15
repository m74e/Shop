import React, { useEffect } from "react";
import styles from "./fav.module.css";
import useStore from "../../zustand/zustand";
import Container from "../../component/container/container";
import Delete from "/public/delete.svg";

const Fav = () => {
  const { wishList, setWishList } = useStore();

  // Load the wishList 
  useEffect(() => {
    const handle = localStorage.getItem("kidh");
    if (handle) {
      setWishList(JSON.parse(handle));
    }
  }, [setWishList]);

  // Remove one ID
  const remove = (id) => {
    const updatedWishList = wishList.filter((item) => item.id !== id);
    setWishList(updatedWishList);
    localStorage.setItem("kidh", JSON.stringify(updatedWishList));
  };

  return (
    <>
      <Container>
        <div className={styles.mainFav}>
          {wishList.map((item) => (
            <div key={item.id}>
              <div className={styles.content}>
                <div className={styles.containerImg}>
                  <div
                    className={styles.whitebg}
                    onClick={() => remove(item.id)}
                  >
                    <img
                      className={styles.deletePostion}
                      src={Delete}
                      alt="Delete"
                    />
                  </div>
                  <img className={styles.favImg} src={item.img} alt="Favorite" />
                </div>
                <div className={styles.desp}>{item.des}</div>
                <div className={styles.price}>${item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Fav;
