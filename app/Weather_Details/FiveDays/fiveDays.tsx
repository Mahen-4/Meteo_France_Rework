import Link from "next/link";

export default function FiveDays(props:{days: any, temp_mini:number})  {

    const dateString = props.days.dt;

    const timestamp: number = dateString * 1000; 
    const date: Date = new Date(timestamp);

    const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    timeZone: 'UTC', 
    };

    const formattedDate: string = date.toLocaleDateString('fr-FR', options);
    
    return(
        <div className="oneDay-container">
            <Link href={`Weather_Details/Day_Details/${dateString}`}>
                <p>{formattedDate}</p>        
                <img src={`https://openweathermap.org/img/wn/${props.days.weather[0].icon}@2x.png`} alt="icon" />
                <div style={{display: "flex", alignItems: "center"}}>
                    <h6>{props.temp_mini}°</h6>
                    <h5> &nbsp; / &nbsp; </h5>
                    <h6>{props.days.main.temp_max}°</h6>
                </div>
            </Link>
        </div>
    )
}