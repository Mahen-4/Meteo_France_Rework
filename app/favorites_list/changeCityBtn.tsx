'use client'

import { useDispatch } from "react-redux"
import { appDispatch } from "../redux/store"
import { addData } from "../redux/slices/weather-slice"
import { addCity } from "../redux/slices/city-slice"
import Link from "next/link"

export default  function ChangeCityBtn(props:{data: Object, city: string}) {
    const dispatch = useDispatch<appDispatch>()


    const handleClick = () => {
        dispatch(addData(props.data))
        dispatch(addCity(props.city))
    }

    const styles: any = {
        backgroundColor: "transparent",
        height: "100%",
        position: "absolute",
        width: "100%",
        top: "0",
        zIndex: "12",
    }

    return(
        <Link style={styles} onClick={handleClick} href="/">
        </Link>
    )
  }