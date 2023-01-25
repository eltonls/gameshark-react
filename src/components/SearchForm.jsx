import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import "./SearchForm.css"

const SearchForm = (props) => {
  const [searchInput, setSearchInput] = useState("")

  const searchInputHandler = (evt) => {
    setSearchInput(evt.target.value)
  }

  const searchFormHandler = (evt) => {
    evt.preventDefault()
    props.localSearchHandler(searchInput.toLowerCase())
  }

  return (
    <form className="search-form" onKeyUp={searchFormHandler}>
      <label htmlFor="search-input" className="search-form__label">
        Search
      </label>
      <div className="search-form__input-wrapper">
        <input
          type="text"
          className="search-form__input"
          name="search-input"
          onChange={searchInputHandler}
          value={searchInput}
        />
        <button className="search-form__btn">
          <FaSearch />
        </button>
      </div>
    </form>
  )
}

export default SearchForm
