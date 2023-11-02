'use client'

import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import { useEffect, useState } from "react";

const LoginButton = () => {

    const router = useRouter()

    return (
        <Button size={'md'} className={'invert'} onClick={() => router.push('log-in')}>
            <span>Iniciar Sesión</span>
        </Button>
    )
}

const LogOutButton = () => {

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
            localStorage.removeItem('userCredentials') 
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

    const [isLogged, setIsLogged] = useState(false);

    const checkLogged = () => {
        const storedCredentials = localStorage.getItem('userCrendentials');
        if(!storedCredentials  || storedCredentials === undefined) {
            setIsLogged(false)
            return null
        }
        setIsLogged(true)
    }

    useEffect(() => {
        checkLogged()
    }, [isLogged])

    return (
        <>
           {isLogged ? <LogOutButton/> : <LoginButton/>}
        </>
     );
}
 
export default UserButton;