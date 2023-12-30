import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ModalProvider from "@/providers/modal-provider";

export default function MainLayout({ children }) {
    return (
        <>
            <ModalProvider>
                <Navbar />
                {children}
                <Footer />
            </ModalProvider>
        </>
    )
}