import "./App.css"
import { useEffect, useState } from "react"
import SearchForm from "./components/SearchForm"
import GameList from "./components/GameList"

function App() {
  const [deals, setDeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [searchParams, setSearchParams] = useState("")

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    }

    const baseLink = "https://www.cheapshark.com/api/1.0/deals?upperPrice=50"

    fetch(baseLink, requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then((dealsData) => {
        setDeals(dealsData)
      })
      .catch((err) => {
        console.log("Error fetching data: ", err)
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const localSearch = (title) => {
    setSearchParams(title)
  }

  if (error) <p>Something went wrong while fetching data!</p>

  return (
    <div className="App">
      <SearchForm localSearchHandler={localSearch} />
      {isLoading ? (
        <p className="load">"Loading"</p>
      ) : (
        <GameList deals={deals} search={searchParams} />
      )}
    </div>
  )
}

export default App
