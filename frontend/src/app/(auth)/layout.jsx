'use client'

import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthLayout({ children }) {

    const router = useRouter();

    return (
        <>
            <Navbar />
            {children} 
        </>
    )
}