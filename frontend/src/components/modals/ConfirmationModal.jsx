'use client'

import Button from "../ui/Button";
import ModalOverlay from "../ui/ModalOverlay";
import { useModal } from "@/hooks/useModal";
import { toast } from "sonner";
import { es } from "date-fns/locale";
import { addHours, format, parse, } from "date-fns";
import { CalendarIcon, ClockIcon, CloseIcon, LocationIcon } from "../Icons";
import { createAppointment } from "@/services/createAppointment";

import styles from './ConfirmationModal.module.css'

const ConfirmationModal = () => {

    const { isConfirmationModalOpen, closeConfirmationModal, userData } = useModal()

    const formatDate = (date) => {
        if (date) {
            return format(date, "EEEE dd 'de' MMMM 'del' y", { locale: es })
        } else {
            return undefined
        }
    }

    const handleSubmit = async () => {

        const userCredentials = localStorage.getItem('userCredentials')
        const parsedData = JSON.parse(userCredentials);
        const userDocumentId = parsedData?.identity

        const date = userData?.day
        const time = userData?.hour
        const timeWithoutSpace = time.split(' ').join('')

        const dateWithTime = parse(timeWithoutSpace, 'hh:mma', new Date())

        const dateAndTime = addHours(date, dateWithTime.getHours());
        dateAndTime.setMinutes(dateWithTime.getMinutes());

        const timeZoneOffset = new Date().getTimezoneOffset() / 60;

        dateAndTime.setHours(dateAndTime.getHours() - timeZoneOffset);

        const isoStringDate = dateAndTime.toISOString();

        const jsonData = {
            date: isoStringDate,
            location: userData.sede,
            documentId: userDocumentId,
            doctorId: userData.id,
            email: parsedData?.email
        }

        const res = await createAppointment(jsonData)

        if (res) {
            toast.success('Su cita se ha agendado con exito, revise su correo')
            closeConfirmationModal()
        } else {
            toast.error('Hubo un error al agendar la cita')
        }

    }

    return (
        <ModalOverlay isOpen={isConfirmationModalOpen}>
            <div className={styles.container}>
                <div className={styles.modal}>
                    <header className={styles.header}>
                        <h3 className={styles.headerTitle}>Agenda tu cita | <span>  Confirma los datos de tu cita </span></h3>

                        <div className={styles.closeButton} onClick={() => closeConfirmationModal()}>
                            <CloseIcon />
                        </div>
                    </header>

                    <main className={styles.content}>
                        <div className={styles.doctor}>
                            <div>
                                <img className={styles.doctorImg} src='/medicos-icon.png' alt="doctor-avatar" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '10px', paddingLeft: '10px' }}>
                                <div className={styles.doctorDetails}>
                                    <span className={styles.doctorName}>Dr. {userData.name}</span>
                                    <span>{userData.specialty}</span>
                                </div>

                                <div className={styles.patientDetails}>
                                    <span>Paciente</span>
                                    <span className={styles.patientName}>ALVARO RODRIGUEZ AGUILAR</span>
                                </div>

                                <div className={styles.cita}>
                                    <div className={styles.citaDetails}>
                                        <CalendarIcon />
                                        <span>{formatDate(userData.day)}</span>
                                    </div>
                                    <div className={styles.citaDetails}>
                                        <ClockIcon />
                                        <span>{userData.hour}</span>
                                    </div>
                                </div>

                                <div className={styles.location}>
                                    <LocationIcon />
                                    <span>SEDE {userData.sede}</span>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer>
                        <div className={styles.footerButtons}>
                            <Button className={'invert'} onClick={() => closeConfirmationModal()}>
                                <span>Cancelar</span>
                            </Button>

                            <Button onClick={handleSubmit}>
                                <span>Confirmar</span>
                            </Button>
                        </div>
                    </footer>
                </div>
            </div>
        </ModalOverlay>
    );
}

export default ConfirmationModal;