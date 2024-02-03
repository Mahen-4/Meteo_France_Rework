import { redirect } from "next/navigation";
import { getFavorites, getFullData } from "../Utils/apiCalls";
import { authOptions } from "../Utils/auth";
import ChangeCityBtn from "./changeCityBtn";
import { getServerSession } from "next-auth";

// Add type declarations for the return type of the functions
type WeatherData = { data: { list: { weather: { icon: string }[]; main: { temp_max: number } }[] } };

async function favorites_weather(favs: Array<any>): Promise<WeatherData[]> {
  const weatherPromises = favs.map(async (fav: any) => {
    const data = await getFullData(fav.place as string);
    return data as WeatherData;
  });

  return Promise.all(weatherPromises);
}

export default async function Favorites_list() {
  const session = await getServerSession(authOptions);

  const favData = getFavorites();
  const [favorites] = await Promise.all([favData]);

  const favWeather = await favorites_weather(favorites);
  return session == null ? redirect('/') :
    <div className="favList">
      {
        favorites.map((fav: any, index: number) =>
          <div key={fav.id} className="favCard">
            <h1>{fav.place}</h1>
            <img src={`https://openweathermap.org/img/wn/${favWeather[index].data.list[0].weather[0].icon}@2x.png`} alt="" />
            <h3>{favWeather[index].data.list[0].main.temp_max}°C</h3>
            <ChangeCityBtn data={favWeather[index].data} city={fav.place} />
          </div>
        )
      }
    </div>;
}
