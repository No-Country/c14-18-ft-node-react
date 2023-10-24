'use client'

import { useState } from 'react';
import { CloseIcon } from '../Icons';
import './CitasModal.css'
import { useModal } from '@/hooks/useModal';

const CitasModal = () => {

    const { isModalOpen, closeModal } = useModal()

    return ( 
        <div className="modal__overlay" style={isModalOpen ? {} : {display: 'none'}}>
            <div className='modal__container'>
                <div className='modal'>
                    <header className='modal__header'>
                        <h3 className='modal__header__title'>Agenda tu cita | <span>  Elige el día y la hora </span></h3>
                        <div className='modal__close__button' onClick={() => closeModal()}>
                            <CloseIcon/>
                        </div>
                    </header>

                    <main className='modal__content'>
                        Este es el cuerpo
                    </main>
                </div>
            </div>
        </div>
     );
}
 
export default CitasModal;