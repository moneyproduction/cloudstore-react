import React from "react";
import banner from "../assets/img/banner.jpg";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";

function Banner() {
  return (
    <div className="slider">
      <div className="slidertitle ">
        <h3>
          У нашому магазині ви знайдете від найбільшого до найменшого, а також
          ловіть нас у соцмережах, ваш CLOUDSTORE ©
        </h3>
        <img width={950} src={banner} alt="banner" />
      </div>
      <div className="socilal ">
        <img width={100} height={100} src={facebook} alt="facebook" />
        <img width={100} height={100} src={instagram} alt="instagram" />
        <img width={100} height={100} src={twitter} alt="twitter" />
      </div>
    </div>
  );
}

export default Banner;
