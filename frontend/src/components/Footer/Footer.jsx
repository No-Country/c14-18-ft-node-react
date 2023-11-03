import { CrossIcon, GithubIcon } from '../Icons';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <CrossIcon/>
                <span>CLINICONNECT</span>
            </div>

            <div className='footer__disclaimer'>
                ©2023 Cliniconnect - All rights reserved
            </div>

            <div className='footer__links'>
                <a href='https://github.com/No-Country/c14-18-ft-node-react' className='footer__links__icon'>
                    <GithubIcon/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;