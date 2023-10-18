import Link from "next/link";
import { CalendarIcon, CrossIcon } from "./Icons";
import Button from "./Button";
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='landing-header'>
            <div className='header-logo'>
                <CrossIcon />
                <span>CLINICONNECT</span>
            </div>

            <nav className='main-nav'>
                <ul className='nav-items'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/services'}>Servicios</Link>
                    </li>
                    <li>
                        <Link href={'/specialties'}>Medicos</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>Contacto</Link>
                    </li>
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