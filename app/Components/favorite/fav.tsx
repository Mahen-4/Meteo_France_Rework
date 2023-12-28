'use client'

import { getFavorites } from "@/app/Utils/apiCalls"
import axios from "axios"
import React from "react"

export default function Fav(props: { city: string }) {
    const [favorites, setFavorites] = React.useState<Array<string>>([]);
  
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getFavorites();
          setFavorites(result);
        } catch (error) {
          console.error('Error fetching favorites:', error);
        }
      };
  
      fetchData();
    }, []); 
  
    return (
      <div>
        {favorites.filter((e:any) => e.place === props.city).length > 0 ? <h1>ETOILE REMPLIE</h1> : <h1>ETOIE NON REMPLIE</h1>}
        <button  onClick={ async()=>{
            try {
                const query = await axios.post('/api/addFav',{cityFav: props.city})
                console.log(query)
            } catch (error) {
            }        
        }}>
            FAVORITE +
        </button>
      </div>
    );
  }