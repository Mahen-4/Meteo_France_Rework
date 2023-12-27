import { authOptions } from "@/app/Utils/auth"
import { getServerSession } from "next-auth"
import Link from "next/link"
import LogOut from "./logOut"


export default async function Log(){

    const session =  await getServerSession(authOptions)

    return(
        <div>
            {session ? (<div><h1>Logged in</h1><LogOut/></div>) : (<Link href="/authForm">Log In</Link>)}
        </div>
    )
}