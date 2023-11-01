'use client'

import mockDoctors from "@/mocks/doctors.json";
import "./historial-citas.css";
import CitasCard from "@/components/ui/CitasCard/CitasCard";
import { fetchCitas } from "@/utils/fetchCitas";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const HistorialCitas = () => {

    const [citas, setCitas] = useState([])

    const doctors = mockDoctors.doctors;
    const userCredentials = sessionStorage?.getItem("userCredentials");
    const parsedData = JSON.parse(userCredentials);
    const userDocumentId = parsedData?.identity;
    const userName = `${parsedData?.name} ${parsedData?.lastName}`

    useEffect(() => {

        const fetch = async () => {
            const res = await fetchCitas(userDocumentId)
            const citasData = res?.map(cita => {
                const date = new Date(cita.date);
                const formattedDate = format(date, 'EEE dd MMM p', {locale: es});
                return { ...cita, date, formattedDate };
              });
          
            setCitas(citasData);
        }

        fetch()
        
    }, [])

    return (
        <div className="historial__container">
            <div className="historial">
                <header className="historial__header">
                    <h1 className="historial__title">Historial de Citas</h1>
                    <div className="historial__header__selections">
                        <div className="historial__header__selection">
                            <span>Programadas</span>
                            <hr />
                        </div>
                        <div className="historial__header__selection">
                            <span>Historial</span>
                            <hr />
                        </div>
                    </div>
                </header>

                <main className="historial__content">
                    <div className="historial__content__grid">
                        {citas?.map((cita) => {
                            const doctor = doctors.filter(
                                (item) => item.id === cita.doctorId
                            );

                            return (

                                <CitasCard
                                    key={cita.id}
                                    doctor={doctor[0].name}
                                    specialty={doctor[0].specialty}
                                    patient={userName}
                                    date={cita.formattedDate}
                                />
                            );
                        })}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HistorialCitas;
