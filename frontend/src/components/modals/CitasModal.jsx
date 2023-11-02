'use client'

import { generateTimeInterval } from '@/utils/generateIntervals';
import { CloseIcon } from '../Icons';
import { useModal } from '@/hooks/useModal';
import ModalOverlay from '../ui/ModalOverlay';
import Calendar from '../Calendar/Calendar';

import './CitasModal.css'
import { useEffect, useState } from 'react';

const CitasModal = () => {

    const { isCitasModalOpen, closeCitasModal, userData, openConfirmationModal } = useModal()
    const [intervals, setIntervals] = useState([])


    useEffect(() => {
        const intervals = generateTimeInterval(userData.availability ?? '08:00 - 16:00' )
        setIntervals(intervals)

    }, [userData])


    const choseDateAndHour = (hour) => {
        openConfirmationModal(hour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
        closeCitasModal()
    }

    return (
        <ModalOverlay isOpen={isCitasModalOpen}>
            <div className='modal__container'>
                <div className='modal'>
                    <header className='modal__header'>
                        <h3 className='modal__header__title'>Agenda tu cita | <span>  Elige el día y la hora </span></h3>

                        <div className='modal__header__content'>

                            <div className='modal__header__options' style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                                <div className='modal__header__option'>
                                    <span>SEDE {userData.sede}</span>
                                </div>

                                <div className='modal__header__option'>
                                    {userData.specialty}
                                </div>
                            </div>

                            <div className='modal__header__option'>
                                {userData.name}
                            </div>

                        </div>

                        <div className='modal__close__button' onClick={() => closeCitasModal()}>
                            <CloseIcon />
                        </div>
                    </header>

                    <main className='modal__content'>
                        <h3 className='modal__content__title'>Seleccione la fecha y hora de su cita</h3>
                        <div className='modal__content__container'>
                            <Calendar />

                            <div className='modal__content__intervals'>
                                {intervals.map((interval, index) => (
                                    <button onClick={() => choseDateAndHour(interval.start)} type='button' key={index} className='modal__content__interval'>
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