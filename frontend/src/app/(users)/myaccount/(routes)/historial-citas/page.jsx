"use client";

import CitasCard from "@/components/ui/CitasCard/CitasCard";
import { fetchCitas } from "@/utils/fetchCitas";
import { useEffect, useState } from "react";
import { format, isAfter, isBefore, startOfToday } from "date-fns";
import { es } from "date-fns/locale";
import { useDoctors } from "@/hooks/useDoctors";

import "./historial-citas.css";

const HistorialCitas = () => {
  const [citas, setCitas] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [filterCita, setFilterCita] = useState(true)

  const { doctors } = useDoctors();

  useEffect(() => {
    const userCredentials = localStorage.getItem("userCredentials");

    if (userCredentials) {
      const parsedData = JSON.parse(userCredentials);
      const userDocumentId = parsedData?.identity;
      const userName = `${parsedData?.name} ${parsedData?.lastName}`;

      setPatientName(userName);

      const fetchCitasData = async () => {
        const res = await fetchCitas(userDocumentId);
        const citasData = res?.map((cita) => {
          const date = new Date(cita.date);
          const formattedDate = format(date, "EEE dd MMM p", { locale: es });
          return { ...cita, date, formattedDate };
        });

        setCitas(citasData);
      };

      fetchCitasData();
    } else {
      setCitas([]);
    }
  }, []);

  let today = startOfToday();

  const filteredCitas = citas.filter((cita) => {
    if(filterCita) {
      return isAfter(new Date(cita.date), today)
    } else {
      return isBefore(new Date(cita.date), today)
    }
  })

  return (
    <div className="historial__container">
      <div className="historial">
        <header className="historial__header">
          <h1 className="historial__title">Historial de Citas</h1>
          <div className="historial__header__selections">
            <div className={`historial__header__selection ${filterCita ? 'selected' : ''}`} onClick={() => setFilterCita(true)}>
              <span>Programadas</span>
              <hr />
            </div>
            <div className={`historial__header__selection ${!filterCita ? 'selected' : ''}`} onClick={() => setFilterCita(false)}>
              <span>Historial</span>
              <hr />
            </div>
          </div>
        </header>

        <main className="historial__content">
          <div className="historial__content__grid">
            {filteredCitas?.map((cita) => {
              const doctor = doctors.filter(
                (item) => item.id === cita.doctorId
              );

              return (
                <CitasCard
                  key={cita.id}
                  doctor={doctor[0].name}
                  specialty={doctor[0].speciality}
                  patient={patientName}
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
