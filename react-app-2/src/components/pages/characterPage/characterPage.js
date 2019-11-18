import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, { Field } from "../../itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import GotService from "../../../services/gotServices";
import RowBlock from "../../rowBlock/rowBlock";

export default class CharacterPage extends Component {
  gotService = new GotService();
  state = { selectedChar: null, error: false };
  componentDidCatch() {
    console.log("error!");
    this.setState({ error: true });
  }
  onItemSelected = id => {
    this.setState({ selectedChar: id });
  };
  render() {
    const itemList = (
      <ItemList
        getData={this.gotService.getAllCharacters}
        onItemSelected={this.onItemSelected}
        renderItem={item => `${item.name}(${item.gender})`}
      />
    );

    const itemDetails = (
      <ItemDetails
        title="character"
        getData={this.gotService.getCharacter}
        itemId={this.state.selectedChar}
      >
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture" />
      </ItemDetails>
    );
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return <RowBlock left={itemList} right={itemDetails} />;
  }
}