'use client'
import React from "react";
import { Map, Marker } from "pigeon-maps"

export default function SimpleMap(props: {lat: number, lon: number, city: string}){
  
  return (
    <div className="map">
      <Map defaultCenter={[props.lat, props.lon]} defaultZoom={11} >
        <Marker width={50} anchor={[props.lat, props.lon]} />
      </Map>  
    </div>
  );
}