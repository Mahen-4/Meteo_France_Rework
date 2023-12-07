'use client'
import { useRouter } from 'next/router'
import React from 'react'
import { useAppSelector } from '@/app/redux/store'
import { BarChart } from '@mui/x-charts/BarChart';
import OneDayDetails from '@/app/Components/OneDayDetails/oneDayDetails';
import { LineChart } from '@mui/x-charts';
import Image from 'next/image';
import { getFormatedHour, getDateData2 } from '@/app/Functions/data_hours_handler';
import { MdOutlineVisibility } from "react-icons/md";

export default function DayStat({ params }: { params: { day: string } }){
    const weather_data:any = useAppSelector((state) => state.weatherReducer.value)
    const day :any = parseInt(params.day)
    const [dayWeather, setDayWeather] = React.useState<any>([])
    const [dayHours, setDayHours] = React.useState<any>([])
    
    React.useEffect(()=>{
        const getWeatherDay = async () => {
            const fetchWeatherData = await getDateData2(weather_data,day)
            setDayWeather(fetchWeatherData);
            const dayhoursConverted = fetchWeatherData.map((oneTime:any)=>{
                return getFormatedHour(oneTime.dt)
            })
            setDayHours(dayhoursConverted)   
        }
        getWeatherDay()
    },[])


    return(
        <div>
            {
                dayWeather.length > 0 && dayHours.length > 0 ? 
                    <div className='dayDetailsByHour'>
                        <div className='oneDayDetails-container'>
                            {
                                dayWeather.map((dayW:any)=>{
                                    return <OneDayDetails day={dayW} key={dayW.dt_txt}/>
                                })
                            }
                        </div>
                        <div className='charts'>
                            <LineChart   
                                xAxis={[{scaleType: 'point', data: dayHours}]}
                                series={[{data: dayWeather.map((dayW: any) => parseFloat((dayW.wind.speed* 3.6).toFixed(1))), label: 'Vitesse du vent (km/h)'},]}
                                width={800}
                                height={300}
                                
                            />
                            <BarChart 
                                xAxis={[{data: dayHours,scaleType: 'band',},]}
                                series={[{data: dayWeather.map((dayW: any) => ((dayW.pop)*100)), label: 'Précipitations (%)'},]}
                                width={800}
                                height={300}
                            />
                        </div>
                        <div style={{ textAlign: "center"}} className='lastDetails'>
                            <div style={{display: "flex"}}>
                                <div>
                                    <Image src="/icon/sunrise.png" alt='' width={150} height={150}/>
                                    <p>{getFormatedHour(weather_data.city.sunrise)}</p>
                                </div>
                                <div>
                                    <Image src="/icon/sunset.png" alt='' width={150} height={150}/>
                                    <p>{getFormatedHour(weather_data.city.sunset)}</p>
                                </div>
                            </div>
                            <div style={{marginTop: "5%"}}>
                            <MdOutlineVisibility size="40px"/>
                            <p>{(dayWeather[0].visibility) / 1000}km</p>
                            </div>
                        </div>
                    </div>
                : <></>
            }
        </div>
    )
}