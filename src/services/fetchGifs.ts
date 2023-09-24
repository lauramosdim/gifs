const BASE_URL = "https://api.giphy.com/v1/gifs"
// const URL = `${BASE_URL}/search?api_key=${API_KEY}&q=${query}`

export const fetchGifs = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search?api_key=${
      import.meta.env.VITE_GIPHY_KEY
    }&q=${query}&limit=&offset=0`
  )
  const gifs = await response.json()

  return gifs
}
