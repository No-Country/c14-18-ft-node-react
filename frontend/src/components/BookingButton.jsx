'use client'

import Link from "next/link";
import { CalendarIcon } from "./Icons";
import Button from "./ui/Button";

const BookingButton = () => {

    return (
        <Link href={'myaccount/citas'} style={{maxWidth: '150px', width: '100%'}}>
            <Button size={'md'} >
                <i><CalendarIcon /></i>
                <span>Agendar Cita</span>
            </Button>
        </Link>
     );
}
 
export default BookingButton;