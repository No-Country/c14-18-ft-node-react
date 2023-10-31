'use client'

import { useRouter } from "next/navigation";
import Button from "./ui/Button";

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

        if (res.status === 200)  router.refresh()
    }

    return (
        <Button size={'md'} className={'invert'} onClick={handleClick}>
            <span>Cerrar Sesión</span>
        </Button>
    )
}

const UserButton = ( token ) => {

    const authSession = token.token

    return (
        <>
           {authSession ? <LogOutButton/> : <LoginButton/>}
        </>
     );
}
 
export default UserButton;