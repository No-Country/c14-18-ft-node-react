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

const LogOutButton = ({setIsLogged}) => {
    const router = useRouter()

    const handleClick = () => {
        if(localStorage) {
            localStorage.removeItem('userCredentials')
            setIsLogged(false)
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
           {isLogged ? <LogOutButton setIsLogged={setIsLogged}/> : <LoginButton/>}
        </>
     );
}
 
export default UserButton;