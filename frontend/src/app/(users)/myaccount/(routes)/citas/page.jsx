'use client'

import { CloseIcon, SearchIcon } from '@/components/Icons';
import './citas.css'
import { useEffect, useState } from 'react';

const Citas = () => {

    const [active, setActive] = useState(false)
    const [selectedSpecialty, setSelectedSpecialty] = useState()
    const [filterByName, setFilterByName] = useState('')
    const [modalName, setModalName] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')

    const doctors = [
        {
            name: 'CARLOS AUGUSTO',
            specialty: 'CARDIOLOGIA'
        },
        {
            name: 'VERONICA SANCHEZ',
            specialty: 'CARDIOLOGIA'
        },
        {
            name: 'JUAN BERRIOS',
            specialty: 'CARDIOLOGIA'
        },
        {
            name: 'GIANFRANCO OCHOA',
            specialty: 'CARDIOLOGIA'
        },
        {
            name: 'GEORGE FLORES',
            specialty: 'CARDIOLOGIA'
        },
        {
            name: 'CAROLINA CUBAS',
            specialty: 'CARDIOLOGIA'
        },
        {
            name: 'KATHERINE FERNANDINI',
            specialty: 'DERMATOLOGIA'
        },
        {
            name: 'SEBASTIAN TUESTA',
            specialty: 'DERMATOLOGIA'
        },
        {
            name: 'NURIA ROJAS',
            specialty: 'DERMATOLOGIA'
        },
        {
            name: 'CLAUDIA LOZANO',
            specialty: 'DERMATOLOGIA'
        },
        {
            name: 'JORGE LEON',
            specialty: 'DERMATOLOGIA'
        },
        {
            name: 'JUAN RETAMOSO',
            specialty: 'NEUROLOGIA'
        },
        {
            name: 'DAVID RODRIGUEZ',
            specialty: 'NEUROLOGIA'
        },
        {
            name: 'LUANA DIAZ',
            specialty: 'NEUROLOGIA'
        },
        {
            name: 'SERGIO SILVA',
            specialty: 'NEUROLOGIA'
        },
    ]

    const filteredDoctors = doctors.filter(({ specialty, name }) => {
        return (
            specialty === selectedSpecialty && name.toLocaleLowerCase().includes(filterByName)
        )
    })

    console.log(filteredDoctors)

    const handleClick = ({ name, specialty }) => {
        setModalName(name)
        setActive(true)
    }

    const generateTimeIntervals = () => {
        const availability = '10:00 - 18:00'
        const [start, end] = availability.split(' - ');
        const startTime = new Date(`01/01/2000 ${start}`);
        const endTime = new Date(`01/01/2000 ${end}`);
        const intervalMinutes = 30; // Duración de cada intervalo en minutos
        const intervals = [];

        for (let time = startTime; time < endTime; time.setMinutes(time.getMinutes() + intervalMinutes)) {
            intervals.push({
                start: new Date(time),
            });
        }

        return intervals;
    }

    const intervals = generateTimeIntervals()



    console.log(intervals)

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
                                <select name="sedes" onChange={(e) => setSelectedLocation(e.target.value)} className='filters__select'>
                                    <option value="select">Selecciona una sede</option>
                                    <option value="1">sede 1</option>
                                    <option value="2">sede 2</option>
                                    <option value="3">sede 3</option>
                                </select>
                            </div>

                            <div style={{ maxWidth: '400px', width: '100%' }}>
                                <select name="especialidades" onChange={(e) => setSelectedSpecialty(e.target.value)} className='filters__select'>
                                    <option value="select-specialty">Seleccion una especialidad</option>
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
                            <input onChange={(e) => setFilterByName(e.target.value)} type="text" className='filters__input' placeholder='Busca tu médico' />
                        </div>
                    </div>

                    <div className='doctors'>
                        <div className='doctors__grid'>
                            {filteredDoctors.map(({ name, specialty }) => (
                                <div onClick={() => handleClick({ name })} className='doctor__card' key={name}>
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
                    <header className='modal__header'>
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
                                <label htmlFor="date">Seleccione una fecha:</label>
                                <input type="date" />
                            </div>
                            <h2>Disponibilidad del Doctor</h2>
                            
                            <div className='modal__main__intervals'>
                                {intervals.map((interval) => (
                                    <div key={interval.key}>
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