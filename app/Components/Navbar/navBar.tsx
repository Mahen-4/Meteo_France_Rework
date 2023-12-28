'use client'

import React, { FormEvent } from "react"
import { getFullData } from "@/app/Utils/apiCalls"
import { useDispatch } from "react-redux"
import { appDispatch } from "@/app/redux/store"
import { addData } from "@/app/redux/slices/weather-slice"
import { addCity } from "@/app/redux/slices/city-slice"
import { IoSearch } from "react-icons/io5";
import Link from "next/link"

export default function NavBar(){

    const [err, setErr] = React.useState(false)
    const [ville, setVille] = React.useState<string | null>(null)
    const dispatch = useDispatch<appDispatch>()

    const getFormData = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setVille(event.currentTarget.ville.value)
    }

    const getData = async() =>{
        if(ville !== null) {
            try{
                const data = await getFullData(ville)
                dispatch(addData(data.data))
                dispatch(addCity(ville))
                setErr(false)
            }catch(e){
                setErr(true)
            }
         
        }else{
            const data = await getFullData("Paris")
            dispatch(addData(data.data))
            dispatch(addCity("Paris"))
        }
    }

    React.useEffect(()=>{
        ville !== null && getData()
    },[ville])

    React.useEffect(()=>{
        getData()
    },[])

    const messageStyle = {
        backgroundColor: err ? "rgb(192 9 9)" : "transparant",
        width: err ? "20vh" : "0vh",
        padding: err ? "10px" : "0px"
   }

    return(
        <div className="navBar" >
            <Link href="/"> <img src="/logoMeteo.png" alt="" height={50}/> </Link>
            <form onSubmit={getFormData}>
                    <input type="text" placeholder='Rechercher une ville' name='ville'/>
                    <button type='submit'><IoSearch size="20px"/></button>
            </form>
            <div className="message" style={messageStyle}>
                {err  && "Ville / Pays Invalide"}
            </div>
        </div>
    )
}