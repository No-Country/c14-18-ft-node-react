'use client'

import Calendar from '../Calendar';
import { CloseIcon } from '../Icons';
import './CitasModal.css'
import { useModal } from '@/hooks/useModal';

const CitasModal = () => {

    const { isModalOpen, closeModal, userData } = useModal()

    return ( 
        <div className="modal__overlay" style={isModalOpen ? {} : {display: 'none'}}>
            <div className='modal__container'>
                <div className='modal'>
                    <header className='modal__header'>
                        <h3 className='modal__header__title'>Agenda tu cita | <span>  Elige el día y la hora </span></h3>
                        
                        <div className='modal__header__content'>

                            <div className='modal__header__options' style={{display: 'flex', justifyContent: 'space-between', gap: '20px'}}>
                                <div className='modal__header__option'>
                                    <span>SEDE {userData.sede}</span>
                                </div>

                                <div className='modal__header__option'>
                                    {userData.specialty}
                                </div>
                            </div>

                            <div className='modal__header__option'>
                                {userData.doctor}
                            </div>

                        </div>

                        <div className='modal__close__button' onClick={() => closeModal()}>
                            <CloseIcon/>
                        </div>
                    </header>

                    <main className='modal__content'>
                        <h3 className='modal__content__title'>Seleccione la fecha y hora de su cita</h3>
                        <div className='modal__content__container'>
                            <Calendar/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
     );
}
 
export default CitasModal;