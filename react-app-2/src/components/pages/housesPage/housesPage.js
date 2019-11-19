import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, { Field } from "../../itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import GotService from "../../../services/gotServices";
import RowBlock from "../../rowBlock/rowBlock";
import RandomChar from "../../randomChar/randomChar";

export default class HousePage extends Component {

  gotService = new GotService();

  state = { selectedHouse: null, error: false };

  componentDidCatch() {
    this.setState({ error: true });
  }

  onItemSelected = id => {
    this.setState({ selectedHouse: id });
  };
  
  render() {
    const itemList = (
      <ItemList
        getData={this.gotService.getAllHouses}
        onItemSelected={this.onItemSelected}
        renderItem={item => `${item.name}(${item.words || "No data of words"})`}
      />
    );

    const itemDetails = (
      <ItemDetails
        title="house"
        getData={this.gotService.getHouse}
        itemId={this.state.selectedHouse}
      >
        <Field field="region" label="Region" />
        <Field field="words" label="Words" />
        <Field field="overload" label="Overload" />
      </ItemDetails>
    );
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <div>
        <RandomChar />
        <RowBlock left={itemList} right={itemDetails} />
      </div>
    );
  }
}