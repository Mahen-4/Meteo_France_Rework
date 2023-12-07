import Link from "next/link";
import { WiHumidity, WiRain, WiStrongWind } from "react-icons/wi";

export default function TodayWeather(props:{dayWeather: any, city: string}){
    return(
        <div className="todayWeather">
            <h1><span>{props.city}</span> Aujourd'hui</h1>
            <div className="temp">
                <img src={`https://openweathermap.org/img/wn/${props.dayWeather.weather[0].icon}@2x.png`} alt="iconToday" />
                <p>{(props.dayWeather.main.temp_max).toFixed(1)}°C</p> 
            </div>
            <div className="details">
                <div className="oneDetail">
                    <div>
                        <WiStrongWind size="40px"/>
                        <p> &nbsp; Vent</p>
                    </div>
                    <h5>{(props.dayWeather.wind.speed * 3.6).toFixed(1)} km/h</h5>
                </div>
                <div className="oneDetail">
                    <div>
                        <WiHumidity size="40px"/>
                        <p>Humidité</p> 
                    </div>
                    <h5>{(props.dayWeather.main.humidity)} %</h5>
                </div>
                <div className="oneDetail">
                    <div>
                        <WiRain size="40px"/>      
                        <p>Précipitations</p>   
                    </div>
                    <h5>{(props.dayWeather.pop) * 100} %</h5>
                </div>
            </div>
            <Link href={`Weather_Details/Day_Details/${props.dayWeather.dt}`}>Voir plus + </Link>
            
        </div>
    )
}