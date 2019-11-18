import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, { Field } from "../../itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import GotService from "../../../services/gotServices";
import RowBlock from "../../rowBlock/rowBlock";

export default class BookPage extends Component {
  gotService = new GotService();
  state = { selectedBook: null, error: false };
  componentDidCatch() {
    this.setState({ error: true });
  }
  onItemSelected = id => {
    this.setState({ selectedBook: id });
  };
  render() {
    const itemList = (
      <ItemList
        getData={this.gotService.getAllBooks}
        onItemSelected={this.onItemSelected}
        renderItem={item => `${item.name}(${item.country})`}
      />
    );

    const itemDetails = (
      <ItemDetails
        title="book"
        getData={this.gotService.getBook}
        itemId={this.state.selectedBook}
      >
        <Field field="authors" label="Authors" />
        <Field field="country" label="Country" />
        <Field field="released" label="Released" />
      </ItemDetails>
    );
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return <RowBlock left={itemList} right={itemDetails} />;
  }
}