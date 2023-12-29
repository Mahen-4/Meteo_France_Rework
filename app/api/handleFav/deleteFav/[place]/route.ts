import { NextResponse } from "next/server"
import prisma from "@/app/Utils/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/Utils/auth"

export async function DELETE( req: Request,{ params }: { params: { place: string } }){
    const res = params.place
    const session = await getServerSession(authOptions)
    try {
      await prisma.savedPlace.deleteMany({
        where:{
          place: res as string,
          userEmail_:{
            email: session?.user?.email as string
          }
        }
      })
      return NextResponse.json({OK: "Deleted"})
    } catch (error) {
      return NextResponse.json({err : error})
    }
  
    
  }