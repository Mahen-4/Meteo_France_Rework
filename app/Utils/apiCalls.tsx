
import axios from 'axios'

export const getFullData = async(city: string) =>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url:`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY_OW}`,
        headers: { }
      };
      const dataLatLon = await axios.request(config)
      let config2 = {
        method: 'get',
        maxBodyLength: Infinity,
        url:`https://api.openweathermap.org/data/2.5/forecast?lat=${dataLatLon.data[0].lat}&lon=${dataLatLon.data[0].lon}&appid=${process.env.NEXT_PUBLIC_API_KEY_OW}&units=metric`,
        headers: { }
      };
      
      const data = await axios.request(config2)
      return data
      
}

export async function getFavorites(){
  const response = await axios.get("http://localhost:3000/api/handleFav");
  return response.data.res;
}