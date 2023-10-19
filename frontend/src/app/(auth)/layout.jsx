import Navbar from "@/components/Navbar";

export default function AuthLayout({ children }) {

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}