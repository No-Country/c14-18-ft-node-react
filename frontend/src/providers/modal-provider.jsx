'use client'

import CitasModal from "@/components/modals/CitasModal";
import ConfirmationModal from "@/components/modals/ConfirmationModal";
import { createContext, useState } from "react";

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {

  const [isCitasModalOpen, setIsCitasModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)
  const [userData, setUserData] = useState({})

  const openCitasModal = (sede, specialty, name, id, availability) => {
    setUserData({ sede, specialty, name, id, availability });
    setIsCitasModalOpen(true);
  };

  const closeCitasModal = () => {
    setIsCitasModalOpen(false);
  };

  const openConfirmationModal = (hour) => {
    setUserData({...userData, hour})
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    setUserData({})
  };

    return (
    <ModalContext.Provider
      value={{
        isCitasModalOpen,
        openCitasModal,
        closeCitasModal,
        isConfirmationModalOpen,
        openConfirmationModal,
        closeConfirmationModal,
        userData,
        setUserData
      }}
    >
      <CitasModal />
      <ConfirmationModal />
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;