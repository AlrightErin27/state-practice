import { useState } from "react";

function RandomCard() {
  const [cardStatus, setCardStatus] = useState("🂠");

  //cardsArr[Math.floor(Math.random() * cardsArr.length)]);

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
    ];
    let randomCard = cardsArr[Math.floor(Math.random() * cardsArr.length)];
    setCardStatus((cardStatus) => randomCard);
  }
  ///////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="RandomCard">
        <h1 id="image">{cardStatus}</h1>
      </div>
      <button id="button" onClick={handleCardStatus}>
        Play
      </button>
    </>
  );
}

export default RandomCard;
