'use client'

import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { getFavorites } from "@/app/Utils/apiCalls"
import axios from "axios"
import React from "react"
import { Toaster, toast } from 'sonner'

export default function Fav(props: { city: string }) {
    const [favorites, setFavorites] = React.useState<Array<string>>([]);
    const [temp, setTemp] = React.useState(false)

    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getFavorites();
          setFavorites(result || []);
        } catch (error) {
          console.error('Error fetching favorites:', error);
          setFavorites([]);
        }
      };
  
      fetchData();
    }, [temp]); 
  
    return (
      <div>
        <Toaster position="top-right" richColors  />
        {
            (favorites ?? []).some((e:any) => e.place === props.city) ? (
                <RiStarSFill onClick={async () => {
                    try {
                        await axios.delete(`/api/handleFav/deleteFav/${props.city}`);
                        setTemp(!temp);
                        toast.success('Favori supprimé !');
                    } catch (error) {
                        toast.error('Vous devez être connecté pour avoir des favoris');
                    }
                }} />
            ) : (
                <RiStarSLine onClick={async () => {
                    try {
                        await axios.post('/api/handleFav', { cityFav: props.city });
                        setTemp(!temp);
                        toast.success('Favori ajouté !');
                    } catch (error) {
                        toast.error('Vous devez vous connecter !');
                    }
                }} />
            )
        }
      </div>
    );
  }