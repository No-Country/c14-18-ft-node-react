import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AuthLayout({ children }) {

    const jwt = cookies().get("clinicaUser")?.value;

    if(jwt) redirect('/')

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}