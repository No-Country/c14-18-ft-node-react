import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar/>
            { children }
            <Footer/>
        </div>
    )
}