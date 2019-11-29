import React, { Component } from "react";
import MenuListItem from "../menu-list-item";
import { connect } from "react-redux";
import WithRestoService from "../hoc";
import { menuLoaded, menuRequsted, menuError, addToCart, countTotal } from "../../actions/";
import Spinner from "../spinner";
import Error from "../error";

import "./menu-list.scss";

class MenuList extends Component {
  componentDidMount() {
    this.props.menuRequsted();
    const { RestoService } = this.props;
    RestoService.getMenuItems()
      .then(res => this.props.menuLoaded(res))
      .catch(() => this.props.menuError());
  }
  render() {
    const { menuItems, loading, error, addToCart, countTotal } = this.props;
    if (error) {
      return <Error />;
    }
    if (loading) {
      return <Spinner />;
    }

    return (
      <ul className="menu__list">
        {menuItems.map(menuItem => (
          <MenuListItem key={menuItem.id} menuItem={menuItem} onAddToCart={() => addToCart(menuItem.id)} countTotal={countTotal}/>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    menuLoaded: newMenu => {
      dispatch(menuLoaded(newMenu));
    },
    menuRequsted: () => dispatch(menuRequsted()),
    menuError: () => dispatch(menuError()),
    addToCart: id => dispatch(addToCart(id)),
    countTotal: () => dispatch(countTotal())
  };
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));