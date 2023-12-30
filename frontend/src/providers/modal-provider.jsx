'use client'

import CitasModal from "@/components/modals/CitasModal";
import ConfirmationModal from "@/components/modals/ConfirmationModal";
import CitasDetailModal from "@/components/modals/citas-detail-modal/CitasDetailModal";
import { startOfTomorrow } from "date-fns";
import { createContext, useState } from "react";

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {

  const [isCitasModalOpen, setIsCitasModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [userData, setUserData] = useState({})

  const openCitasModal = (sede, specialty, name, id, availability, day = startOfTomorrow()) => {
    setUserData({ sede, specialty, name, id, availability, day });
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

  const openDetailModal = ({cita, doctor, patient, specialty}) => {
    const {id, location, patientId, doctorId, date} = cita
    setUserData({id, location, patientId, doctorId, date, doctor, patient, specialty})
    setIsDetailModalOpen(true)
  }

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
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
        isDetailModalOpen,
        openDetailModal,
        closeDetailModal,
        userData,
        setUserData
      }}
    >
      <CitasModal />
      <ConfirmationModal />
      <CitasDetailModal />
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;