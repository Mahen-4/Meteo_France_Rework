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
      try {
        await prisma.savedPlace.create({
          data: {
            place: res.cityFav,
            userEmail_ : {
              connect: {
                email : session.user?.email as any
              }
            }
          }
        });
        return NextResponse.json({OK: res.cityFav})
      } catch (error) {
        return NextResponse.json({ err: error })
      }
        
    }   
}

export async function GET(){
  const session = await getServerSession(authOptions)
  
    try {
      const query = await prisma.savedPlace.findMany({
        where:{
          userEmail_:{
            email: session?.user?.email as any
          },
        },
        select: {
          id: true,
          place: true
        }
      })
      return NextResponse.json({res : query})
    } catch (error) {
      return NextResponse.json({err : error})
    }

  
}


