import React, { Component } from "react";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import "./randomChar.sass";

export default class RandomChar extends Component {

  gotService = new GotService();

  state = {
    char: {},
    loading: true,
    error: false,
    randomChar: true
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  onCharLoaded = char => {
    this.setState({ char, loading: false });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * 110 + 20);
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  toggleRandomChar = () => {
    const { randomChar } = this.state;
    this.setState({ randomChar: !randomChar });
    console.log(this.state);
  };

  componentDidMount() {
    this.updateChar();
    setInterval(this.updateChar, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { char, loading, error, randomChar } = this.state;
    const content = randomChar ? <View char={char} /> : null;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const buttonText = randomChar ? "Hide Random Character" : "Show Random Character";

    return (
      <div className="random-char-wrap">
        <button className="button-char" onClick={this.toggleRandomChar}>
          {buttonText}
        </button>
        {spinner}
        {content}
        {errorMessage}
      </div>
    );
  }
}

const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <div className="random-block rounded">
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </div>
  );
};