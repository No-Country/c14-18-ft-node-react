import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar/>
            { children }
            <Footer/>
        </>
    )
}