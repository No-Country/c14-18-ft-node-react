'use client'

import { SearchIcon } from '@/components/Icons';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebouncer';
import { useModal } from '@/hooks/useModal';

import './citas.css'
import { fetchDoctors } from '@/services/fetchDoctors';

const Citas = () => {
    
    const [doctors, setDoctors] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')

    const { openCitasModal } = useModal()

    useEffect(() => {
        const fetchDoctorsFunction = async () => {
            const doctorsFetch = await fetchDoctors()
            setDoctors(doctorsFetch)
        }

        fetchDoctorsFunction()
    }, [])

    const handleInput = (event) => {
        const query = event.target.value
        setInputValue(query)
    }

    const debouncedInput = useDebounce(inputValue, 300)

    const filteredDoctors = doctors.filter(({ speciality, name, location }) => {
        const hasSelectedLocation = selectedLocation !== '';
        const hasSelectedSpecialty = selectedSpecialty !== '';

        if (!hasSelectedLocation && !hasSelectedSpecialty && inputValue === '') {
            return true;
        } else if (hasSelectedLocation && hasSelectedSpecialty) {
            return location === selectedLocation && speciality === selectedSpecialty && name.toLowerCase().includes(debouncedInput.toLowerCase());
        } else if (hasSelectedLocation) {
            return location === selectedLocation && name.toLowerCase().includes(debouncedInput.toLowerCase());
        } else if (hasSelectedSpecialty) {
            return speciality === selectedSpecialty && name.toLowerCase().includes(debouncedInput.toLowerCase());
        } else {
            return name.toLowerCase().includes(debouncedInput.toLowerCase());
        }
    });

    return (
        <div className="citas-container">
            <div className="citas">
                <header className='citas__header'>
                    <h1 className='citas__title'>Agenda tu Cita</h1>
                </header>
                <main className='citas__content'>
                    <div className='filters'>
                        <div className='filters__selections'>
                                <select name="sedes" defaultValue={'selected-sede'} onChange={(e) => setSelectedLocation(e.target.value)} className='filters__select'>
                                    <option value="">Selecciona una sede</option>
                                    <option value="FRANCHIN">Franchin</option>
                                    <option value="SAN JOSE">San José</option>
                                    <option value="FINOCHIETTO">Finochietto</option>
                                </select>

                                <select name="especialidades" defaultValue={'selected-specialty'} onChange={(e) => setSelectedSpecialty(e.target.value)} className='filters__select'>
                                    <option value="selected-specialty" disabled>Seleccion una especialidad</option>
                                    <option value="CARDIOLOGIA">Cardiologia</option>
                                    <option value="DERMATOLOGIA">Dermatologia</option>
                                    <option value="NEUROLOGIA">Neurologia</option>
                                </select>
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

                    <div className='doctors__container'>
                        <div className='doctors'>
                            <div className='doctors__grid'>
                                {filteredDoctors.map(({ id, name, speciality, availability }) => (
                                    <div onClick={() => openCitasModal(selectedLocation, speciality, name, id)} className='doctor__card' key={id}>
                                        <img src='/medicos-icon.png' alt="doctor-avatar" />
                                        <div className='doctor__card__content'>
                                            <span className='doctor__card__title'>Dr. {name}</span>
                                            <span>{speciality}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </main>
            </div>
           
        </div>
    );
}

export default Citas;