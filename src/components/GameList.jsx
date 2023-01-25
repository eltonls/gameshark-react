import "./GameList.css"
import GameCard from "./GameCard"

function GameList(props) {
  if (props.search === "") {
    return (
      <ul className="game-list">
        {props.deals.map((deal) => {
          return <GameCard dealInfo={deal} />
        })}
      </ul>
    )
  }

  return (
    <ul className="game-list">
      {props.deals.map((deal) => {
        if (deal.title.toLowerCase().includes(props.search)) {
          return <GameCard dealInfo={deal} />
        }
      })}
    </ul>
  )
}

export default GameList
