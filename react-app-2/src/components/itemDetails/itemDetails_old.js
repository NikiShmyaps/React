import React, { Component } from "react";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import "./itemDetails.sass";

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field] || "This data is missing"}</span>
    </li>
  );
};
export { Field };

export default class ItemDetails extends Component {

  gotService = new GotService();

  state = {
    item: null,
    loading: false
  };

  componentDidMount() {
    this.updateItem();
    this.setState({
      loading: false
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(this.setState({ loading: true }))
      .then(item => {
        this.setState({ item, loading: false });
      })
      .catch(this.onError);
  }

  render() {
    const { item, loading, error } = this.state;
    const { title } = this.props;
    const data = title === "book" ? (
        <BookView childrens={this.props.children} item={item} title={title} /> 
      ) : (
        <View childrens={this.props.children} item={item} title={title} />
      );
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? data : null;

    return (
      <div className="item-details">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const View = ({ item, childrens, title }) => {
  if (!item) {
    return <span className="select-error">Please select a {title}</span>;
  }

  const { name } = item;
  
  return (
    <>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {React.Children.map(childrens, child => {
          return React.cloneElement(child, { item });
        })}
      </ul>
    </>
  );
};

const BookView = ({ item, childrens, title }) => {
  if(!item) {
    return <span className="select-error">Please select a {title}</span>;
  }
  const {name} = item;
  return (
    <div className="book-wrap">
      <h4 className="titles">{name}</h4>
      <ul className="list-group list-group-flush">
        {React.Children.map(childrens, child => {
          return React.cloneElement(child, { item });
        })}
      </ul>
    </div>
  );
};