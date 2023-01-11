import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import garant from "../assets/img/garantiya.gif";
import loading from "../assets/img/loader.gif";
import order from "../assets/img/order.gif";
import truck from "../assets/img/truck.gif";

const FullApple = () => {
  const [appleFull, setAppleFull] = React.useState();

  const { id } = useParams();

  React.useEffect(() => {
    async function fetchFullApple() {
      try {
        const { data } = await axios.get(
          "https://63a6d83759fd83b1bb390719.mockapi.io/items/" + id
        );
        setAppleFull(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFullApple();
  }, []);
  if (!appleFull) {
    return (
      <div className="waitCloud">
        <img width={150} src={loading} alt="loadingicon" />
      </div>
    );
  }

  return (
    <div>
      <Link to="/" className="backside">
        <span>⟸</span>
      </Link>
      <div className="full-apple">
        <img src={appleFull.imageUrl} alt="" />
        <img src={appleFull.imageUrl1} alt="" />
        <img src={appleFull.imageUrl2} alt="" />
      </div>
      <div className="description-apple">
        <h2 className="h2-title">
          {appleFull.title} від <span>{appleFull.price}</span>₴
        </h2>

        <b>{appleFull.description}</b>
        <ul>
          <li>
            <img width={100} src={garant} alt="garanticon" />
          </li>
          <li>
            <h3>Гарантія</h3>
            <b>
              -Гарантія товару 12 місяців <br />
              -Обмін/повернення товару протягом 14 днів.
            </b>
          </li>
        </ul>
        <ul>
          <li>
            <img width={100} src={order} alt="ordericon" />
          </li>
          <li>
            <h3>Оплата</h3>
            <b>
              -Карткою на сайті (комісія сервісу MonoPay - 1.2%) <br />
              -При отримані у відділені Нової пошти.
            </b>
          </li>
        </ul>
        <ul>
          <li>
            <img width={100} src={truck} alt="truckicon" />
          </li>
          <li>
            <h3>Доставка</h3>
            <b>
              -Доставка по Україні службою Нова пошта. <br />
              -Доставка по Европі службою Укр пошта.
            </b>
          </li>
        </ul>
        <ul></ul>
      </div>
    </div>
  );
};

export default FullApple;
