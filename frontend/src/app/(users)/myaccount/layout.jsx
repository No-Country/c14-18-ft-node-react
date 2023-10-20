import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import UserNav from "@/components/UserNav";

export default async function UsersLayout({children}) {
    const jwt = cookies().get("clinicaUser")?.value;

    if (jwt === undefined) {
        redirect('/log-in')
    }

    return (
        <>
            <UserNav/>
            {children}
        </>
    )
}