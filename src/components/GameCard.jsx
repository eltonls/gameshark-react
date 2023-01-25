import "./GameCard.css"

function GameCard(props) {
  const { dealInfo } = props

  const salePercent = (dealInfo.salePrice * 100) / dealInfo.normalPrice

  function metacriticComp() {
    return (
      <p className="game-card__rating--meta">
        Metacritic Score: {dealInfo.metacriticScore}
      </p>
    )
  }

  function steamScore() {
    return (
      <p className="game-card__rating--steam">
        Steam Rating: {dealInfo.steamRatingText}
      </p>
    )
  }

  return (
    <div className="game-card">
      <div className="game-card__body">
        <p className="game-card__title">{dealInfo.title}</p>
        <div className="game-card__prices">
          <p className="game-card__price--percent">
            {Math.round(100 - salePercent)}%
          </p>
          <p className="game-card__price--normal">{dealInfo.normalPrice}</p>
          <p className="game-card__price--deal">{dealInfo.salePrice}</p>
        </div>
        <div className="game-card__ratings">
          {dealInfo.metacriticScore !== "0" ? metacriticComp() : null}
          {dealInfo.steamRatingText !== null ? steamScore() : null}
        </div>
      </div>
      <a
        href={`https://www.cheapshark.com/redirect?dealID=${dealInfo.dealID}`}
        className="btn btn--buy"
      >
        Buy Now!
      </a>
    </div>
  )
}

export default GameCard
