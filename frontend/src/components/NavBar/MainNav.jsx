'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = ({ column }) => {

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
        <nav className='main-nav'>
                <ul className={`nav-items ${column}`}>
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