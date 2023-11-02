import Navbar from "@/components/NavBar/Navbar";

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar/>
            { children }
        </div>
    )
}