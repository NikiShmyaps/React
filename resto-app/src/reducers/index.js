const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  total: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payLoad,
        loading: false,
        error: state.error
      };
    case "MENU_REQUSTED":
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: state.error
      };
    case "MENU_ERROR":
      return {
        ...state,
        menu: state.menu,
        loading: state.loading,
        error: true
      };
    case "ITEM_ADD_TO_CART":
      const id = action.payload;
      const item = state.menu.find(item => item.id === id);
      let newItem = {...item};
      const index = state.items.findIndex(item => item.id === id);
      if (index === -1) {
        return {
          ...state,
          items: [...state.items, newItem]
        };
      } else {
        const element = state.menu.find(item => item.id === id);
        newItem = {
          ...element,
          count: ++element.count
        };
        return {
          ...state,
          items: [
            ...state.items.slice(0, index),
            newItem,
            ...state.items.slice(index +1)
          ]
        };
      }
    case "ITEM_DEL_FROM_CART":
      const idx = action.payLoad;
      const itemIndex = state.items.findIndex(item => item.id === idx);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ]
      };
    case "COUNT_TOTAL":
      let total = 0;
      state.items.forEach(el => {
        total += el.price * el.count;
      });
      return {
        ...state,
        total: total
      };
    default:
      return state;
  }
};

export default reducer;