import React from "react";
import "./menu-list-item.scss";

const MenuListItem = ({ menuItem, onAddToCart, countTotal }) => {
  const { title, price, url, category } = menuItem;
  let icon = null;

  switch (category) {
    case "salads":
      icon = "https://image.flaticon.com/icons/svg/403/403590.svg";
      break;
    case "pizza":
      icon = "https://image.flaticon.com/icons/svg/1404/1404945.svg";
      break;
    case "meat":
      icon = "https://image.flaticon.com/icons/svg/2224/2224259.svg";
    break;
    default:
      return icon;
  }

  return (
    <li className="menu__item">
      <div className="menu__title">{title}</div>
      <img className="menu__img" src={url} alt={title}></img>
      <div className="menu__category">Category: <span>{category}</span></div>
      <div className="menu__price">Price: <span>{price}$</span></div>
      <img className="menu__icon" src={icon} alt={icon}></img>
      <button onClick={() => {onAddToCart(); countTotal();}} className="menu__btn">Add to cart</button>
    </li>
  );
};

export default MenuListItem;