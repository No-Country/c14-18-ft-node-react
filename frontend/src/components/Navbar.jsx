'use client'

import Link from "next/link";
import {usePathname} from "next/navigation"
import { CalendarIcon, CrossIcon } from "./Icons";
import Button from "./Button";
import './Navbar.css'

const Navbar = () => {
    const pathname = usePathname()

    const routes = [
        {
            title: 'Home',
            path: '/',
            active: pathname === '/' ? true : false
        },
        {
            title: 'Servicios',
            path: '/services',
            active: pathname === '/services' ? true : false
        },
        {
            title: 'Medicos',
            path: '/specialties',
            active: pathname === '/specialties' ? true : false
        },
        {
            title: 'Contacto',
            path: '/contact',
            active: pathname === '/contact' ? true : false
        },
    ]

    return (
        <header className='landing-header'>
            <div className='header-logo'>
                <CrossIcon />
                <span>CLINICONNECT</span>
            </div>

            <nav className='main-nav'>
                <ul className='nav-items'>
                    {routes.map(({title, path, active}) => (
                        <li key={title}>
                            <Link href={path} className={active ? 'active-link' : ''}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className='header-buttons'>
                <Link href={'/log-in'} style={{ maxWidth: '150px', width: '100%' }}>
                    <Button>
                        <i><CalendarIcon /></i>
                        <span>Agendar Cita</span>
                    </Button>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;