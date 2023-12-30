'use client'

import { usePathname } from "next/navigation";
import { CrossIcon } from "../Icons";
import { useState } from "react";
import BookingButton from "../BookingButton";
import ToggleButton from "../ui/ToggleButton/ToggleButton";
import UserButton from "../UserButton";
import CollapseNav from "./collapse-nav/CollapseNav";
import MainNav from "./main-nav/MainNav";
import Link from "next/link";

import styles from './Navbar.module.css'

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true)
    const pathname = usePathname()

    const routes = [
        {
            title: 'Home',
            path: '/',
            active: pathname === '/' ? true : false
        },
        {
            title: 'Staff Médico',
            path: '/staff-medico',
            active: pathname === '/staff-medico' ? true : false
        },
        {
            title: 'Contacto',
            path: '/contacto',
            active: pathname === '/contacto' ? true : false
        },
    ]

    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <CrossIcon />
                <Link href={'/'}><span>CLINICONNECT</span></Link>
            </div>

            <MainNav routes={routes} />

            <div className={styles.headerButtons}>
                <UserButton />
                <BookingButton />
            </div>

            <div className={styles.toggleButton} onClick={() => setCollapsed(false)}>
                <ToggleButton />
            </div>

            <CollapseNav collapsed={collapsed} setCollapsed={setCollapsed} routes={routes} />
        </header>
    );
}

export default Navbar;

