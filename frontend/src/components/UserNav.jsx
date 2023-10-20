'use client'

import { usePathname } from "next/navigation";
import { CrossIcon } from "./Icons";
import './UserNav.css'
import Link from "next/link";

const UserNav = () => {
    const pathname = usePathname()

    const routes = [
        {
            title: 'Home',
            path: '/myaccount/home',
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
                    {routes.map(({title, path, active}) => (
                        <li key={title} className="mainNav__item">
                            <Link href={path} className={active ? 'active-link' : ''}>{title}</Link>
                        </li>
                    ))}
                </ul>
                </nav>

                <div className="usernav__button">
                    Despegable
                </div>

            </div>

            
        </header>
     );
}
 
export default UserNav;