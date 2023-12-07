'use client'

import React from "react"
import { useAppSelector } from "../../redux/store"
import Weather_details from "../../Weather_Details/weather_details"

export default function Accueil(){

    const cityTaken:any = useAppSelector((state) => state.cityTakenReducer.value)
    const [ville, setVille] = React.useState<string>("")

    React.useEffect(()=>{
        cityTaken !== null && setVille(cityTaken)
    },[cityTaken])

    return(
        <main>
            {ville !== "" ? <Weather_details city={ville}/> : <></>}
        </main>
    )
}