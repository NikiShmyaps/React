import React, { Component } from "react";
import GotService from "../../../services/gotServices";
import ItemDetails, { Field } from "../../itemDetails/itemDetails";
import "./booksItem.sass";

export default class BooksItem extends Component {
  gotService = new GotService();

  render() {
    return (
      <div className="books-wrap">
        <div className="book">
          <ItemDetails title="book" getData={this.gotService.getBook} itemId={this.props.bookId}>
            <Field field="authors" label="Authors" />
            <Field field="country" label="Country" />
            <Field field="released" label="Released" />
          </ItemDetails>
        </div>
      </div>
    );
  }
}