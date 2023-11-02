import BookingButton from "../BookingButton";
import UserButton from "../UserButton";
import { CrossIcon } from "../Icons";
import MainNav from "./MainNav";

import './Navbar.css'

const Navbar = () => {
    

    return (
        <header className='landing-header'>
            <div className='header-logo'>
                <CrossIcon />
                <span>CLINICONNECT</span>
            </div>

            <MainNav/>

            <div className='header-buttons'>
                <UserButton />
                <BookingButton/>
            </div>
        </header>
    );
}

export default Navbar;

