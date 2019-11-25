import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

const Counter = ({ counter, inc, dec, drop }) => {
  return (
    <div className="block">
      <div className="content">
        <div className="block-header">
          <h1 id="counter" className="block-header__text">{counter}</h1>
        </div>
        <div className="block-list">
          <button onClick={inc} className="block-list__btn"><img src="img/Plus.png" alt="Plus"/></button>
          <button onClick={dec} className="block-list__btn"><img src="img/Minus.png" alt="Minus"/></button>
          <button onClick={drop} className="block-list__btn"><img src="img/Reset.png" alt="Reset"/></button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { counter: state };
};
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);