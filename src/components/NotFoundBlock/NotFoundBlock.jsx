import React from "react";

import styles from "./NotFoundBlock.module.scss";

import notfound from "../../assets/img/notfound1.png";

function NotFoundBlock() {
  return (
    <div>
      <div className={styles.imgNot}>
        <h3>Поверніться на головну сторінку</h3>
        <img width={200} height={200} src={notfound} alt="" />
      </div>
    </div>
  );
}
export default NotFoundBlock;
