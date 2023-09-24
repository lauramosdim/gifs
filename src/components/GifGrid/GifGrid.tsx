import { Gif } from "../../types/Gif"
import "./GifGrid.styles.css"

interface GifGridProps {
  gifs: Gif[] | null
}

const getTitle = (gifTitle: string) => gifTitle.split(" GIF")[0]

const GifGrid = ({ gifs }: GifGridProps) => {
  console.log("gifs acá", gifs)

  return (
    <div className="trend-gifs">
      {gifs?.length &&
        gifs?.map((gif: Gif) => (
          <div key={gif.id} className="trendy-container">
            <img
              src={gif.images.original.url}
              alt={gif.title}
              className="trend-gif"
            />
            <p className="footer-gif">{getTitle(gif.title)}</p>
          </div>
        ))}
    </div>
  )
}

export default GifGrid
