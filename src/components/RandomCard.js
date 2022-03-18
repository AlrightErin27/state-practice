import { useState } from "react";

function RandomCard(props) {
  const [cardStatus, setCardStatus] = useState("🂠");

  function handleCardStatus() {
    const cardsArr = [
      "🫖",
      "🐑",
      "🐊",
      "🦋",
      "🌼",
      "🍎",
      "🥄",
      "⏰",
      "🌞",
      "🧸",
      "🧦",
      "🔔",
      "☂️",
      "💍",
      "🦩",
      "🍄",
      "🍩",
      "⚽️",
    ];
    let randomCard = cardsArr[Math.floor(Math.random() * cardsArr.length)];
    setCardStatus((cardStatus) => randomCard);
  }

  function handleReset() {
    setCardStatus((cardStatus) => "");
  }
  ///////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="RandomCard">
        <h1 id="image">{cardStatus}</h1>
      </div>
      <button class="button" onClick={handleCardStatus}>
        {props.buttonTxt}
      </button>
      <button class="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default RandomCard;
