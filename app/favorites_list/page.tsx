import { getFavorites, getFullData } from "../Utils/apiCalls"

export async function favorites_weather(favs: Array<any>) {
  const weatherPromises = favs.map(async (fav: any) => {
    const data = await getFullData(fav.place as string)
    return data
  })

  return Promise.all(weatherPromises)
}

export default async function Favorites_list() {
   
    const favData = getFavorites()
    const [favorites] = await Promise.all([favData])

    const favWeather = await favorites_weather(favorites)
    
    console.log(favWeather[0].data.list[0].main.temp_max)
    return (
      <div className="favList">
        {
            favorites.map((fav:any) => 
            <div key={fav.id} className="favCard">
                <h1>{fav.place}</h1>
            </div>
            )
        }
      </div>
    )
  }