'use client'

import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { useAuth } from "@/providers/auth-provider";

const LoginButton = () => {

    const router = useRouter()

    return (
        <Button size={'md'} className={'invert'} onClick={() => router.push('log-in')}>
            <span>Iniciar Sesión</span>
        </Button>
    )
}

const LogOutButton = ({logOut}) => {
    const {logout} = useAuth()
    const router = useRouter()

    const handleClick = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials:"include",
        })

        if (res.status === 200) {
            logOut(false)
            router.refresh()
        }
    }

    return (
        <Button size={'md'} className={'invert'} onClick={handleClick}>
            <span>Cerrar Sesión</span>
        </Button>
    )
}

const UserButton = () => {
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        if(localStorage) {
            const user  = JSON.parse(localStorage.getItem('userCredentials'))
            if (user) {
                setIsLogged(true)
            } else {
                return
            }
        }
    }, [])

   
    return (
        <>
           {isLogged ? <LogOutButton logOut={setIsLogged}/> : <LoginButton/>}
        </>
     );
}
 
export default UserButton;