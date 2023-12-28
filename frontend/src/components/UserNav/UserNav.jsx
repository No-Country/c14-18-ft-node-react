'use client'

import { usePathname } from "next/navigation";
import { CloseIcon, CrossIcon } from "../Icons";
import Link from "next/link";
import ToggleButton from "../ui/ToggleButton/ToggleButton";
import { useState } from "react";
import './UserNav.css'

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
        <header className="usernav__container">
            <div className="usernav">
                <div className='usernav__logo'>
                    <CrossIcon />
                    <Link href={'/'}>CLINICONNECT</Link>
                </div>

                <nav className='mainNav'>
                    <ul className='mainNav__items'>
                        {routes.map(({ title, path, active }) => (
                            <li key={title} className="mainNav__item">
                                <Link href={path} className={active ? 'active-link' : ''}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="toggle-button-container" onClick={() => setCollapsed(false)}>
                    <ToggleButton />
                </div>

                <aside className={`navbar-collapse ${collapsed ? 'collapsed' : ''}`}>
                    <div className="navbar-collapse-content">
                        <div className="navbar-collapse-closeIcon" onClick={() => setCollapsed(true)}>
                            <CloseIcon size="30" />
                        </div>

                        <div className="navbar__collapse__navigation">
                            <ul className="collapse__navigation__items">
                                <li className="collapse__navigation__item">
                                    <Link href={'/'}>Home</Link>
                                </li>
                                <li className="collapse__navigation__item">
                                    <Link href={'/myaccount/citas'}>Agenda una cita</Link>
                                </li>
                                <li className="collapse__navigation__item">
                                    <Link href={'/myaccount/historial-citas'}>Historial de citas</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </aside>

            </div>


        </header>
    );
}

export default UserNav;