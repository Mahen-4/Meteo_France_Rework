import { getFavorites, getFullData } from "../Utils/apiCalls"
import ChangeCityBtn from "./changeCityBtn"

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
    return (
      <div className="favList">
        {
            favorites.map((fav:any, index:number) => 
            <div key={fav.id} className="favCard">
                <h1>{fav.place}</h1>
                <img src={`https://openweathermap.org/img/wn/${favWeather[index].data.list[0].weather[0].icon}@2x.png`} />
                <h3>{favWeather[index].data.list[0].main.temp_max}°C</h3>
                <ChangeCityBtn data={favWeather[index].data} city={fav.place}/>
            </div>
            )
        }
      </div>
    )
  }