import UserNav from "@/components/UserNav";
import ModalProvider from "@/providers/modal-provider";

export default async function UsersLayout({children}) {

    return (
        <ModalProvider>
            <UserNav/>
            {children}
        </ModalProvider>
    )
}