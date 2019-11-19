import React, { Component } from "react";
import ItemList from "../../itemList";
import ErrorMessage from "../../errorMessage/errorMessage";
import GotService from "../../../services/gotServices";
import RandomChar from "../../randomChar/randomChar";
import { withRouter } from "react-router-dom";

class BookPage extends Component {

  gotService = new GotService();

  state = { error: false };

  componentDidCatch() {
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <div>
        <RandomChar />
        <ItemList 
          getData={this.gotService.getAllBooks} 
          onItemSelected={itemId => {this.props.history.push(itemId);}} 
          renderItem={item => `${item.name}(${item.country})`}
        />
      </div>
    );
  }
}

export default withRouter(BookPage);