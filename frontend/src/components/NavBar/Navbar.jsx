'use client'

import BookingButton from "../BookingButton";
import UserButton from "../UserButton";
import { CloseIcon, CrossIcon } from "../Icons";
import MainNav from "./MainNav";
import { useState } from "react";
import ToggleButton from "../ui/ToggleButton/ToggleButton";

import './Navbar.css'
import Link from "next/link";

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <header className='landing-header'>
            <div className='header-logo'>
                <CrossIcon />
                <Link href={'/'}><span>CLINICONNECT</span></Link>
            </div>

            <MainNav/>

            <div className='header-buttons'>
                <UserButton />
                <BookingButton/>
            </div>

            <div className="toggle-button-container" onClick={() => setCollapsed(false)}>
                <ToggleButton/>
            </div>

            <aside className={`navbar-collapse ${collapsed ? 'collapsed' : ''}`}>
                <div className="navbar-collapse-content">
                    <div className="navbar-collapse-closeIcon" onClick={() => setCollapsed(true)}>
                        <CloseIcon size="30"/>
                    </div>

                    <div className="navbar__collapse__navigation">
                        <ul className="collapse__navigation__items">
                            <li className="collapse__navigation__item">
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li className="collapse__navigation__item">
                                <Link href={'/staff-medico'}>Staff Médico</Link>
                            </li>
                            <li className="collapse__navigation__item">
                                <Link href={'/contacto'}>Contacto</Link>
                            </li>
                        </ul>
                    </div>

                    <div style={{paddingTop: '30px'}}>
                        <BookingButton/>
                    </div>

                </div>
            </aside>
        </header>
    );
}

export default Navbar;

