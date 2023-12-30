'use client'

import { generateTimeInterval } from '@/utils/generateIntervals';
import { CloseIcon } from '../Icons';
import { useModal } from '@/hooks/useModal';
import Calendar from '../calendar/Calendar';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import { useEffect, useState } from 'react';

import styles from './CitasModal.module.css'

const CitasModal = () => {

    const { isCitasModalOpen, closeCitasModal, userData, openConfirmationModal } = useModal()
    const [intervals, setIntervals] = useState([])


    useEffect(() => {
        const intervals = generateTimeInterval(userData.availability ?? '08:00 - 16:00')
        setIntervals(intervals)

    }, [userData])


    const choseDateAndHour = (hour) => {
        openConfirmationModal(hour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
        closeCitasModal()
    }

    return (
        <ModalOverlay isOpen={isCitasModalOpen}>
            <div className={styles.container}>
                <div className={styles.modal}>
                    <header className={styles.header}>
                        <h3 className={styles.headerTitle}>Agenda tu cita | <span>  Elige el día y la hora </span></h3>

                        <div className={styles.headerContent}>

                            <div className={styles.headerOptions} style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                                <div className={styles.headerOption}>
                                    <span>SEDE {userData.sede}</span>
                                </div>

                                <div className={styles.headerOption}>
                                    {userData.specialty}
                                </div>
                            </div>

                            <div className={styles.headerOption}>
                                {userData.name}
                            </div>

                        </div>

                        <div className={styles.closeButton} onClick={() => closeCitasModal()}>
                            <CloseIcon />
                        </div>
                    </header>

                    <main className={styles.content}>
                        <h3 className={styles.contentTitle}>Seleccione la fecha y hora de su cita</h3>
                        <div className={styles.contentContainer}>
                            <Calendar />

                            <div className={styles.intervals}>
                                {intervals.map((interval, index) => (
                                    <button onClick={() => choseDateAndHour(interval.start)} type='button' key={index} className={styles.interval}>
                                        <span>{`${interval.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</span>
                                    </button>
                                ))}
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        </ModalOverlay>
    );
}

export default CitasModal;