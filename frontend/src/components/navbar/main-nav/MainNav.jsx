'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './MainNav.module.css'

const MainNav = ({ routes }) => {

    return ( 
        <nav className={styles.mainnav}>
                <ul className={`${styles.navItems}`}>
                    {routes.map(({title, path, active}) => (
                        <li key={title}>
                            <Link href={path} className={active ? styles.activeLink : ''}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
     );
}
 
export default MainNav;