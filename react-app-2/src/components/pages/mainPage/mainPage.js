import React from "react";
import "./mainPage.sass";
import img from './GoT.png'

const MainPage = () => {
  return (
    <div className="main-page">
      <img src={img} alt='Game of Thrones'></img>
    </div>
  );
};

export default MainPage;