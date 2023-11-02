"use client";

import { SearchIcon } from "@/components/Icons";
import { useDoctors } from "@/hooks/useDoctors";

import "./citas.css";

const Citas = () => {
  const {
    filteredDoctors,
    setInputValue,
    setSelectedLocation,
    setSelectedSpecialty,
  } = useDoctors();

  const handleInput = (event) => {
    const query = event.target.value;
    setInputValue(query);
  };

  return (
    <div className="citas-container">
      <div className="citas">
        <header className="citas__header">
          <h1 className="citas__title">Agenda tu Cita</h1>
        </header>

        <main className="citas__content">
          <div className="filters">
            <div className="filters__selections">
              <select
                name="sedes"
                defaultValue={"selected-sede"}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="filters__select"
              >
                <option value="">Selecciona una sede</option>
                <option value="FRANCHIN">Franchin</option>
                <option value="SAN JOSE">San José</option>
                <option value="FINOCHIETTO">Finochietto</option>
              </select>

              <select
                name="especialidades"
                defaultValue={""}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="filters__select"
              >
                <option value="">Seleccion una especialidad</option>
                <option value="CARDIOLOGIA">Cardiologia</option>
                <option value="DERMATOLOGIA">Dermatologia</option>
                <option value="NEUROLOGIA">Neurologia</option>
                <option value="PEDIATRIA">Pediatria</option>
                <option value="GASTROENTEROLOGIA">Gastroenterologia</option>
              </select>
            </div>

            <div className="filters__title">
              <span>Médicos</span>
            </div>

            <div className="filter__doctor">
              <div className="filter__icon">
                <SearchIcon />
              </div>
              <input
                onChange={handleInput}
                type="text"
                className="filters__input"
                placeholder="Busca tu médico"
              />
            </div>
          </div>

          <div className="doctors__container">
            <div className="doctors">
              <div className="doctors__grid">
                {filteredDoctors.map(
                  ({ id, name, speciality, availability, location }) => (
                    <div
                      onClick={() =>
                        openCitasModal(
                          location,
                          speciality,
                          name,
                          id,
                          availability
                        )
                      }
                      className="doctor__card"
                      key={id}
                    >
                      <img src="/medicos-icon.png" alt="doctor-avatar" />
                      <div className="doctor__card__content">
                        <span className="doctor__card__title">Dr. {name}</span>
                        <span>{speciality}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Citas;
