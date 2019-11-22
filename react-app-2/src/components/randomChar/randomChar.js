import React, { useEffect, useState } from "react";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import "./randomChar.sass";

function RandomChar() {
  const gotService = new GotService(),
    [char, changeChar] = useState([]),
    [loading, changeLoading] = useState(true),
    [error, changeError] = useState(false),
    [randomChar, changerandomChar] = useState(true);
    useEffect(() => {
      updateChar();
      const timerId = setInterval(updateChar, 3000);
      return function clear() {
        clearInterval(timerId);
      };
    }, []);

  function onError(arr) {
    changeError(true);
    changeLoading(false);
  }

  function onCharLoaded(char) {
    changeChar(char);
    changeLoading(false);
  }

  function updateChar() {
    const id = Math.floor(Math.random() * 110 + 20);
    gotService
      .getCharacter(id)
      .then(onCharLoaded)
      .catch(onError);
  }
  function toggleRandomChar() {
    changerandomChar(!randomChar);
  }

  const content = randomChar ? <View char={char}/> : null,
    spinner = loading ? <Spinner/> : null,
    errorMessage = error ? <ErrorMessage/> : null,
    buttonText = randomChar ? "Hide Random Character" : "Show Random Character";

  return (
    <div className="random-char-wrap">
      <button className="button-char" onClick={toggleRandomChar}>
        {buttonText}
      </button>
      {spinner}
      {content}
      {errorMessage}
    </div>
  );
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
export default RandomChar;