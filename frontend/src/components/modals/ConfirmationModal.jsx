'use client'

import Button from "../ui/Button";
import ModalOverlay from "../ui/ModalOverlay";
import { useModal } from "@/hooks/useModal";
import { toast } from "sonner";
import { es } from "date-fns/locale";
import { addHours, format, parse, } from "date-fns";
import { CalendarIcon, ClockIcon, CloseIcon } from "../Icons";

import './ConfirmationModal.css'

const ConfirmationModal = () => {

    const { isConfirmationModalOpen, closeConfirmationModal, userData } = useModal()

    const formatDate = (date) => {
        if (date) {
            return format(date, "EEEE dd 'de' MMMM 'del' y", { locale: es })
        } else {
            return undefined
        }
    }

    const CreateAppointment = async () => {

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
            doctorId: userData.id
        }

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointment/createAppointment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(jsonData),
            })

            console.log(res)

            if (res.status === 200) {
                toast.success('Tu cita se ha guardado con exito')
                closeConfirmationModal()
            } else {
                toast.error('Hubo un error al guardar la cita')
                closeConfirmationModal()
            }

        } catch (e) {
            console.log(e)
        }

    }

    return (
        <ModalOverlay isOpen={isConfirmationModalOpen}>
            <div className="confirmation__modal__container">
                <div className="confirmation__modal">
                    <header className="modal__header">
                        <h3 className='modal__header__title'>Agenda tu cita | <span>  Confirma los datos de tu cita </span></h3>

                        <div className='modal__close__button' onClick={() => closeConfirmationModal()}>
                            <CloseIcon />
                        </div>
                    </header>

                    <main className="confirmation__modal__content">
                        <div className="confirmation__modal__doctor">
                            <div>
                                <img className="modal__doctor__img" src='/medicos-icon.png' alt="doctor-avatar" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '10px', paddingLeft: '10px' }}>
                                <div className="modal__doctor__details">
                                    <span className="modal__doctor__name">Dr. {userData.name}</span>
                                    <span>{userData.specialty}</span>
                                </div>

                                <div className="modal__patient__details">
                                    <span>Paciente</span>
                                    <span className="patient__name">ALVARO RODRIGUEZ AGUILAR</span>
                                </div>

                                <div className="modal__cita__details">
                                    <div className="cita__details">
                                        <CalendarIcon />
                                        <span>{formatDate(userData.day)}</span>
                                    </div>
                                    <div className="cita__details">
                                        <ClockIcon />
                                        <span>{userData.hour}</span>
                                    </div>
                                </div>

                                <div className="modal__location">
                                    <span>SEDE {userData.sede}</span>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer>
                        <div className="modal__footer__btns">
                            <Button className={'invert'} onClick={() => closeConfirmationModal()}>
                                <span>Cancelar</span>
                            </Button>

                            <Button onClick={CreateAppointment}>
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