import { CrossIcon, GithubIcon } from '../Icons';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.logo}>
                <CrossIcon />
                <span>CLINICONNECT</span>
            </div>

            <div className={styles.description}>
                ©2023 Cliniconnect - All rights reserved
            </div>

            <div className={styles.links}>
                <a href='https://github.com/No-Country/c14-18-ft-node-react'>
                    <GithubIcon size='18' />
                </a>
            </div>
        </footer>
    );
}

export default Footer;