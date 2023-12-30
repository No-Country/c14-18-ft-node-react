import { CloseIcon } from '@/components/Icons'
import Link from 'next/link'

import styles from './CollapseNav.module.css'

const CollapseNav = ({routes, setCollapsed, collapsed}) => {

    return (
        <aside className={`${styles.navbarCollapse} ${collapsed ? styles.collapsed : ''}`}>
            <div className={styles.collapseContent}>
                <div className={styles.closeIcon} onClick={() => setCollapsed(true)}>
                    <CloseIcon size="30" />
                </div>

                <div className={styles.collapseNavigation}>
                        <ul className={styles.navigationItems}>
                        {routes.map(route => (
                            <li key={route.title} className={styles.navigationItem} onClick={() => setCollapsed(true)}>
                                <Link href={route.path}>{route.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </aside>
    )
}

export default CollapseNav