import { authOptions } from "@/app/Utils/auth"
import { getServerSession } from "next-auth"
import Link from "next/link"
import LogOut from "./logOut"


export default async function Log(){

    const session =  await getServerSession(authOptions)
    return(
        <div className="logs">
            {session ? 
                (
                    <div>
                        <div className="userDetails">
                            <img src={session.user?.image as string} alt="" width={50} height={50}/>
                            <h1>{session.user?.name}</h1>
                            <LogOut/>
                        </div>
                    </div>
                ) : 
                (
                    <Link href="/authForm">Log In</Link>
                )}
        </div>
    )
}