import { FormEvent, useState } from "react"
import { fetchGifs } from "../../services/fetchGifs"
import { Gif } from "../../types/Gif"
import "./SearchBar.css"

interface SearchBarProps {
  setGifs: (gifs: Gif[]) => void
}
const SearchBar = ({ setGifs }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("")

  //   const handleSubmit = async (e: FormEvent) => {
  //     e.preventDefault()
  //     const gifs = await fetchGifs(query)
  //     setGifs(gifs.data)
  //     console.log(gifs)
  //   }

  const handleChange = async (e: FormEvent) => {
    setQuery((e.target as HTMLInputElement).value)
    if (query.length > 2) {
      //cómo maneja uno que query sea asíncrono? mejor poner e.target.value acá?
      const gifs = await fetchGifs(query)
      setGifs(gifs.data)
    }
  }

  return (
    <>
      {/* <form action="" onSubmit={handleSubmit}> */}
      <form action="">
        <div className="search">
          <div className="search-box">
            <p className="search-text">Buscar</p>
            <div className="searcher">
              <input
                type="text"
                placeholder="Search gif"
                onChange={handleChange}
                className="searcher-input"
              />
              {/* <button>Search</button> */}
              {/* <button className="search-button" id="search-bttn">
                Search
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default SearchBar
