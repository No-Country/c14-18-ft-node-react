'use client'

import { useEffect, useState } from 'react';
import  mockDoctors  from '@/mocks/doctors.json'
import './historial-citas.css'

const HistorialCitas = () => {

    const [citas, setCitas] = useState([])

    const userCredentials = sessionStorage.getItem('userCredentials')
    const parsedData = JSON.parse(userCredentials);
    const userDocumentId = parsedData?.identity
    const userName = parsedData?.name

    const doctors = mockDoctors.doctors

    const result = citas.map((cita) => {
        const doctor = doctors.filter(item => item.id === cita.doctorId)
        return doctor[0].name
    })

    console.log(result)

    useEffect(() => {

        const userId = { documentId: userDocumentId }

        const fetchCitas = async () => {

            try {
                const res = await fetch('http://localhost:8080/api/appointment/getAppointment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: "include",
                    body: JSON.stringify(userId),
                })
                
                if( res.status === 200) {
                    const data = await res.json()
    
                    setCitas(data.payload)
                }
            } catch (error) {
                console.log(error)
            }
           
        }

        fetchCitas()
    }, [])

    return (
        <div className="historial__container">
            <div className="historial">
                <header className='historial__header'>
                    <h1 className='historial__title'>Historial de Citas</h1>
                    <div className='historial__header__selections'>
                        <div className='historial__header__selection'>
                            <span>Programadas</span>
                            <hr />
                        </div>
                        <div className='historial__header__selection'>
                            <span>Historial</span>
                            <hr />
                        </div>
                    </div>
                </header>

                <main className='historial__content'>
                    <div className='historial__content__grid'>
                        {citas?.map(cita => {
                            const doctor = doctors.filter(item => item.id === cita.doctorId)

                            return (<div key={cita.id} className='historial__content__item'>
                                <span>Dr {doctor[0].name}</span>
                                <span>{doctor[0].specialty}</span>
                                <span>{userName}</span>
                            </div>)

                        }
                        )}

                    </div>
                </main>
            </div>
        </div>
    );
}

export default HistorialCitas;