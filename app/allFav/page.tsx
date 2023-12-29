import axios from "axios"
import { getFavorites } from "../Utils/apiCalls"


export default async function AllFav() {
   
    const favData = getFavorites()

    const [favorites] = await Promise.all([favData])
    
    return (
      <div>
        {
            favorites.map((fav:any) => 
            <div key={fav.id}>
                <h1>{fav.place}</h1>
            </div>
            )
        }
      </div>
    )
  }