import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addItem, selectCartItemById } from "../../redux/slices/cartSlice";

function AppleBlock({
  id,
  description,
  title,
  price,
  imageUrl,
  sizes,
  types,
  rating,
}) {
  const dispatch = useDispatch();
  const [activeTypeOrder, setActiveTypeOrder] = React.useState(0);
  const [activeMemory, setActiveMemory] = React.useState(0);
  const cartItem = useSelector(selectCartItemById(id));
  const typeOrder = ["Оплата відразу", "Кредит"];

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeOrder[activeTypeOrder],
      size: sizes[activeMemory],
    };
    dispatch(addItem(item));
  };

  return (
    <div className="apple-block-wrapper">
      <div className="apple-block">
        <Link key={id} to={`/apple/${id}`}>
          <img
            className="apple-block__image"
            width="100%"
            src={imageUrl}
            alt="apple"
          />
          <h4 className="apple-block__title">{title}</h4>
        </Link>
        <div className="apple-block__selector">
          <ul>
            {types.map((type) => (
              <li
                onClick={() => setActiveTypeOrder(type)}
                className={activeTypeOrder === type ? "active" : ""}
              >
                {typeOrder[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                onClick={() => setActiveMemory(i)}
                className={activeMemory === i ? "active" : ""}
              >
                {size}GB
              </li>
            ))}
          </ul>
        </div>
        <div className="apple-block__bottom">
          <div className="apple-block__price">від {price}₴</div>

          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Додати</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppleBlock;
