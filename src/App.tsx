import { useState } from "react"
import SearchBar from "./components/SearchBar/SearchBar"
import { Gif } from "./types/Gif"
import GifGrid from "./components/GifGrid/GifGrid"
import "./App.css"

function App() {
  const [gifs, setGifs] = useState<Gif[] | null>(null)
  return (
    <>
      <div className="container">
        <SearchBar setGifs={setGifs} />

        <GifGrid gifs={gifs} />
      </div>
    </>
  )
}

export default App
