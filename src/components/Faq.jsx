import React from "react";

function Faq() {
  return (
    <div className="contact ">
      <div className="contactbox">
        <h3>CLOUDSTORE ©</h3>
        <ul>
          <li>Про компанію</li>
          <li>Правова інформація</li>
          <li>Стати партнером</li>
          <li>Декларації та сертифікати</li>
        </ul>
      </div>
      <div className="contactbuy">
        <h3>ПОКУПЦЕВІ</h3>
        <ul>
          <li>Статус замовлення</li>
          <li>Доставка і оплата</li>
          <li>Обмін і повернення товару</li>
          <li>Гарантія</li>
        </ul>
      </div>
      <div className="contactinfo">
        <h3>КОНТАКТНА ІНФОРМАЦІЯ</h3>
        <ul>
          <li>м. Одеса, вул. Генуезька, 5а</li>
          <li>+380 68 250 59 85</li>
        </ul>
      </div>
      <div>
        <p className="contactcopy">Сreated by Volodymyr Kostiuk</p>
      </div>
    </div>
  );
}

export default Faq;
