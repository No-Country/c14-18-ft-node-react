'use client'

import UserNav from "@/components/navbar/admin-nav/UserNav";
import ModalProvider from "@/providers/modal-provider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UsersLayout({ children }) {
    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const checkUserCredentials = () => {
        const storedCredentials = localStorage.getItem('userCredentials');
        if (!storedCredentials || storedCredentials === 'undefined') {
            setIsLoggedIn(false);
            return router.push('/log-in');
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
        checkUserCredentials();
    }, [isLoggedIn]);

    return (
        <>
            {
                isLoggedIn ? 
                    <ModalProvider>
                        <UserNav />
                        {children}
                    </ModalProvider> 
                : null
            }
        </>
    )
}