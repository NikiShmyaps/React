const initialState = {
  menu: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        menu: action.payLoad,
        loading: false,
        error: state.error
      };
    case "MENU_REQUSTED":
      return {
        menu: state.menu,
        loading: true,
        error: state.error
      };
    case "MENU_ERROR":
      return {
        menu: state.menu,
        loading: state.loading,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;