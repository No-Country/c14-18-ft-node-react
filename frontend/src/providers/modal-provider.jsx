'use client'

import CitasModal from "@/components/modals/CitasModal";
import { createContext, useState } from "react";

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState()
    const [userData, setUserData] = useState({})

    const openModal = (sede, specialty, doctor) => {
        setUserData({sede, specialty, doctor})
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, userData }}>
            <CitasModal />
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;