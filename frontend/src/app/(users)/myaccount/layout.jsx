import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import UserNav from "@/components/UserNav";
import ModalProvider from "@/providers/modal-provider";

export default async function UsersLayout({children}) {
    const jwt = cookies().get("clinicaUser")?.value;

    if (jwt === undefined) {
        redirect('/log-in')
    }

    return (
        <ModalProvider>
            <UserNav/>
            {children}
        </ModalProvider>
    )
}