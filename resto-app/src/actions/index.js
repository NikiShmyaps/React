const menuLoaded = newMenu => {
  return {
    type: "MENU_LOADED",
    payLoad: newMenu
  };
};

const menuRequsted = () => {
  return {
    type: "MENU_REQUSTED"
  };
};

const menuError = () => {
  return {
    type: "MENU_ERROR"
  };
};

const addToCart = id => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: id
  };
};
const deleteFromCart = id => {
  console.log(`удаление ${id}`);
  return {
    type: "ITEM_DEL_FROM_CART",
    payLoad: id
    
  };
};

const countTotal = () => {
  return {
    type: "COUNT_TOTAL"
  };
};

export { menuLoaded, menuRequsted, menuError, addToCart, deleteFromCart, countTotal };