import {
  CalendarIcon,
  ClockIcon,
  CloseIcon,
  LocationIcon,
  UserIcon,
} from "@/components/Icons";
import ModalOverlay from "@/components/modal-overlay/ModalOverlay";
import { useModal } from "@/hooks/useModal";
import { formatDate } from "@/utils/formatDate";

import styles from "./CitasDetailModal.module.css";

const CitasDetailModal = () => {
  const { isDetailModalOpen, closeDetailModal, userData } = useModal();

  console.log(userData);

  return (
    <ModalOverlay isOpen={isDetailModalOpen}>
      <div className={styles.container}>
        <div className={styles.modal}>
          <header className={styles.header}>
            <div
              className={styles.closeButton}
              onClick={() => closeDetailModal()}
            >
              <CloseIcon />
            </div>
            <h2>Detalles de tu cita</h2>
          </header>

          <div className={styles.content}>
            <div className={styles.doctor}>
              <div>
                <img
                  className={styles.doctorImg}
                  src="/medicos-icon.png"
                  alt="doctor-avatar"
                />
              </div>

              <div className={styles.doctorDetails}>
                <span className={styles.doctorName}>Dr. {userData.doctor}</span>
                <span>{userData.specialty}</span>
              </div>
            </div>

            <div className={styles.patient}>
              <UserIcon size="20" />

              <span>Paciente:</span>

              <span>{userData.patient}</span>
            </div>

            <div className={styles.date}>
              <CalendarIcon size="20" />

              <span>Fecha:</span>

              <span>{formatDate(userData.date)}</span>
            </div>

            <div className={styles.time}>
              <ClockIcon size="20" />

              <span>Hora:</span>

              <span>
                {userData.date?.getHours() + ":" + userData.date?.getMinutes()}
              </span>
            </div>

            <div className={styles.location}>
              <LocationIcon size="20" />

              <span>Sede:</span>

              <span>{userData.location}</span>
            </div>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default CitasDetailModal;
