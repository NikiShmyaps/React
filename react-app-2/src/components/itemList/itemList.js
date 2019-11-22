import React, { useState, useEffect } from "react";
import Spinner from "../spinner/spinner";
import "./itemList.sass";

function ItemList({getData, onItemSelected, renderItem}) {
  const [itemList, updateList] = useState([]);

  useEffect(() => {
    getData().then(data => {
      updateList(data);
    });
  }, []);

  function renderItems(arr) {
    return arr.map(el => {
      const { id } = el;
      const label = renderItem(el);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });
  }
  if (!itemList) {
    return <Spinner />;
  }
  const items = renderItems(itemList);
  return <ul className="item-list list-group">{items}</ul>;
}

export default ItemList;