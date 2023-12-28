import { NextResponse } from "next/server"
import prisma from "@/app/Utils/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/Utils/auth"


export async function POST(request:any){
    const res = await request.json()
    
    const session = await getServerSession(authOptions)
    if(session == null){
        return NextResponse.json({ error: 'Not connected' }, { status: 401 })
    }
    else{
        const query = await prisma.savedPlace.create({
            data: {
              place: res.cityFav,
              userEmail: session.user?.email,
              user: {
                connect: {
                  userEmail_: session.user?.email
                }
              }
            }
          });
        return NextResponse.json({OK: res.cityFav})
    }
        
     
    


    
}