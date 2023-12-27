'use client'
import { signIn } from "next-auth/react";
import { FiGithub } from "react-icons/fi";

export default function LogIn(){
    return(
        <button onClick={()=> signIn('github',{
            callbackUrl: `${window.location.origin}`
        })}>GitHub <FiGithub /></button>
    )
}