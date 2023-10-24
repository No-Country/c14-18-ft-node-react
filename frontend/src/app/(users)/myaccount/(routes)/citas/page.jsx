'use client'

import { CloseIcon, SearchIcon } from '@/components/Icons';
import { useState } from 'react';
import  mockDoctors  from '@/mocks/doctors.json'
import { useDebounce } from '@/hooks/useDebouncer';
import { generateTimeInterval } from '@/utils/generateIntervals';

import './citas.css'
import { useModal } from '@/hooks/useModal';

const Citas = () => {
    
    const [inputValue, setInputValue] = useState('')
    const [intervals, setIntervals] = useState([])
    const [active, setActive] = useState(false)
    const [modalName, setModalName] = useState('')
    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')

    const { isModalOpen, openModal } = useModal()

    const doctors = mockDoctors.doctors

    const handleInput = (event) => {
        const query = event.target.value
        setInputValue(query)
    }

    const debouncedInput = useDebounce(inputValue, 300)

    const filteredDoctors = doctors.filter(({ specialty, name }) => {
        return (
            specialty === selectedSpecialty && name.toLowerCase().includes(debouncedInput.toLowerCase())
        )
    })

    const openModall = ({ name, availability }) => {
        setModalName(name)
        setActive(true)
        setIntervals(generateTimeInterval(availability))
    }

    return (
        <div className="citas-container">
            <div className="citas">
                <header className='citas__header'>
                    <h1 className='citas__title'>Agenda tu Cita</h1>
                </header>
                <main className='citas__content'>
                    <div className='filters'>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <div style={{ maxWidth: '290px', width: '100%' }}>
                                <select name="sedes" defaultValue={'selected-sede'} onChange={(e) => setSelectedLocation(e.target.value)} className='filters__select'>
                                    <option value="selected-sede" disabled>Selecciona una sede</option>
                                    <option value="1">sede 1</option>
                                    <option value="2">sede 2</option>
                                    <option value="3">sede 3</option>
                                </select>
                            </div>

                            <div style={{ maxWidth: '400px', width: '100%' }}>
                                <select name="especialidades" defaultValue={'selected-specialty'} onChange={(e) => setSelectedSpecialty(e.target.value)} className='filters__select'>
                                    <option value="selected-specialty" disabled>Seleccion una especialidad</option>
                                    <option value="CARDIOLOGIA">Cardiologia</option>
                                    <option value="DERMATOLOGIA">Dermatologia</option>
                                    <option value="NEUROLOGIA">Neurologia</option>
                                </select>
                            </div>
                        </div>

                        <div className='filters__title'>
                            <span>Médicos</span>
                        </div>

                        <div className='filter__doctor'>
                            <div className='filter__icon'>
                                <SearchIcon />
                            </div>
                            <input onChange={handleInput} type="text" className='filters__input' placeholder='Busca tu médico' />
                        </div>
                    </div>

                    <div className='doctors'>
                        <div className='doctors__grid'>
                            {filteredDoctors.map(({ name, specialty, availability }) => (
                                <div onClick={() => openModal()} className='doctor__card' key={name}>
                                    <img src='/medicos-icon.png' alt="" />
                                    <div className='doctor__card__content'>
                                        <span className='doctor__card__title'>Dr. {name}</span>
                                        <span>{specialty}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            <div className={`citas__modal ${active ? '' : 'hidden'}`}>
                <div className='close-icon' onClick={() => setActive(false)}>
                    <CloseIcon/>
                </div>
                <div className='citas__modal__content'>
                    <header className='modal__headerr'>
                        <div className='modal__header__container'>
                            <h2>Agenda una cita | Elige el dia y la hora</h2>
                            <div className='modal__header__details'>
                                <div>
                                    <span>Locacion: {selectedLocation}</span>
                                    <span>Especialidad: {selectedSpecialty}</span>
                                </div>
                                <div>
                                    <span>Medico: {modalName}</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main className='modal__main'>
                        <div className='modal__main__container'>
                            <div className='modal__main__date'>
                                <label >Seleccione una fecha:</label>
                                <input type="date" />
                            </div>
                            <h2>Disponibilidad del Doctor</h2>
                            
                            <div className='modal__main__intervals'>
                                {intervals?.map((interval, index) => (
                                    <div key={index}>
                                        <span>{`${interval.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Citas;