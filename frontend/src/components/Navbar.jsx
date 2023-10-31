import BookingButton from "./BookingButton";
import UserButton from "./UserButton";
import MainNav from "./MainNav";
import { CrossIcon } from "./Icons";
import { cookies } from "next/headers";

import './Navbar.css'

const Navbar = () => {

    const jwt = cookies().get("clinicaUser")?.value;

    return (
        <header className='landing-header'>
            <div className='header-logo'>
                <CrossIcon />
                <span>CLINICONNECT</span>
            </div>

            <MainNav/>

            <div className='header-buttons'>
                <UserButton token={jwt}/>
                <BookingButton/>
            </div>
        </header>
    );
}

export default Navbar;

