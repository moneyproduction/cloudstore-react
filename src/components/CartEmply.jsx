import React from "react";
import { Link } from "react-router-dom";
import boxOpen from "../assets/img/boxopen.gif";

const CartEmply = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Кошик пустий</h2>
        <p>
          Ви ще не додали жодних продуктів з нашого магазину до кошика. Для
          того, щоб замовити щось, перейдіть на головну сторінку та додайте
          товар у кошик.
        </p>
        <img src={boxOpen} alt="cartnone" />
        <Link to="/" className="button button--black">
          <span>⟸</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmply;
