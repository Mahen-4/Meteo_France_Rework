'use client'

import axios from "axios"
import React from "react"

export default function Fav(props:{city:string}){


    return (
        <button  onClick={ async()=>{
            try {
                await axios.post('/api/addFav',{"cityFav": props.city})
            } catch (error) {
            }        
        }}>
            FAVORITE +
        </button>
    )
}