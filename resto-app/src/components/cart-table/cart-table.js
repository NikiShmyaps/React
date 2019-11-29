import React from "react";
import { connect } from "react-redux";
import { deleteFromCart, countTotal } from "../../actions";
import "./cart-table.scss";

const CartTable = ({ items, deleteFromCart, countTotal }) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map(item => {
          const { title, price, url, id, count } = item;
          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{`${title} x ${count} pieces`}</div>
              <div className="cart__item-price">{price}$</div>
              <div className="cart__item-total">sum : {price * count}$</div>
              <div onClick={() => {deleteFromCart(id); countTotal();}} className="cart__close">&times;</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = ({ items }) => {
  return {
    items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: id => dispatch(deleteFromCart(id)),
    countTotal: () => dispatch(countTotal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);