import React, { useEffect, useState } from "react";
import "./Quote.css";
import Axios from "axios";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    Axios.get("https://type.fit/api/quotes")
      .then(function (response) {
        let randomInd = Math.floor(Math.random() * response.data.length);
        console.log(response.data[randomInd]);
        setQuote(response.data[randomInd]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="quote">
      <div className="quote__container">
        <div className="quote__container--text">
          <p>"{quote.text}"</p>
        </div>
        <div className="quote__container--author">
          <p> - {quote.author === null ? "Unknown Author" : quote.author}</p>
        </div>
      </div>
      <div className="quote__button--container">
        <button className="quote__button" onClick={getQuote}>
          <p>Generate</p>
        </button>
      </div>
    </div>
  );
}

export default Quote;
