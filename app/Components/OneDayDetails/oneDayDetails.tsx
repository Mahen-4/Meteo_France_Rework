import { getFormatedHour } from "@/app/Functions/data_hours_handler"

export default function OneDayDetails(props:{day:any}){
    const tempTime  = getFormatedHour(props.day.dt)

    return(
        <div className="oneDayDetails">
            <img src={`https://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`} alt=""/>
            <h3>{props.day.main.temp_max} °C</h3>
            <h4>&nbsp; - {tempTime}</h4>
        </div>
    )
}