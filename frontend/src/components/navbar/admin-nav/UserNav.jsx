'use client'

import { usePathname } from "next/navigation";
import { CrossIcon } from "../../Icons";
import Link from "next/link";
import ToggleButton from "../../ui/ToggleButton/ToggleButton";
import { useState } from "react";
import styles from './UserNav.module.css'
import CollapseNav from "../collapse-nav/CollapseNav";
import MainNav from "../main-nav/MainNav";

const UserNav = () => {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(true)

    const routes = [
        {
            title: 'Home',
            path: '/',
            active: pathname === '/' ? true : false
        },
        {
            title: 'Agendar una cita',
            path: '/myaccount/citas',
            active: pathname === '/myaccount/citas' ? true : false
        },
        {
            title: 'Historial de citas',
            path: '/myaccount/historial-citas',
            active: pathname === '/myaccount/historial-citas' ? true : false
        }
    ]

    return (
        <header className={styles.container}>
            <div className={styles.usernav}>
                <div className={styles.logo}>
                    <CrossIcon />
                    <Link href={'/'}>CLINICONNECT</Link>
                </div>

                <MainNav routes={routes}/>

                <div className={styles.toggleButton} onClick={() => setCollapsed(false)}>
                    <ToggleButton />
                </div>

                <CollapseNav routes={routes} collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>


        </header>
    );
}

export default UserNav;