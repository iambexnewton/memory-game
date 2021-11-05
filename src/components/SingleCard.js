import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, matched }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div
      className={`card${flipped ? " flipped" : ""}${matched ? " matched" : ""}`}
    >
      <img className="front" src={card.src} alt="card front" />
      <img
        className="back"
        src="/img/star.png"
        onClick={handleClick}
        alt="card back"
      />
    </div>
  );
}
