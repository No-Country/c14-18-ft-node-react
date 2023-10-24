'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {

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
        <nav className='main-nav'>
                <ul className='nav-items'>
                    {routes.map(({title, path, active}) => (
                        <li key={title}>
                            <Link href={path} className={active ? 'active-link' : ''}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
     );
}
 
export default MainNav;