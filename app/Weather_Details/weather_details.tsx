import React from "react"
import SimpleMap from "./Map/map"
import FiveDays from "./FiveDays/fiveDays"
import TodayWeather from "./TodayWeather/todayWeather"
import { useAppSelector } from "../redux/store"

export default function Weather_details(props:{city:string}){

    const weatherData :any= useAppSelector((state) => state.weatherReducer.value)
    const [datas, setDatas] : any = React.useState(null)

    React.useEffect(()=>{
      setDatas(weatherData)
    },[weatherData])

    const dayToGet = [8,16,24,32,39]

    return (
        <main>
            {
              datas !== null  ? 
              <div className="container">
                  <TodayWeather dayWeather={datas.list[0]} city={props.city}/> 
                  <SimpleMap key={props.city} lat={datas.city.coord.lat} lon={datas.city.coord.lon} city={props.city} />
                  
                  <div className="fiveDays-container">
                    {
                      datas.list.map((day: object, index: number) =>{
                        if(dayToGet.includes(index)){
                          return(
                            <FiveDays days={day} key={index} temp_mini={datas.list[index - 3].main.temp_min} /> 
                          )
                        }
                      })
                    }
                  </div>  
              </div>
              :<h1>LOADING ....</h1>
            }         
        </main>
      )
}