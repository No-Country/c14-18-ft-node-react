"use client";

import MainContainer from "@/components/ui/MainContainer/MainContainer";
import { SearchIcon } from "@/components/Icons";
import { useDoctors } from "@/hooks/useDoctors";

import "./staffMedico.css";

const StaffMedico = () => {
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
    <MainContainer>
      <section className="staff__banner">
        <div className="staff__banner__title">
          <span>Nuestro Staff Médico</span>
        </div>
      </section>

      <section className="staff__content__container">
        <header className="staff__content__header">
          <h3 className="staff__content__title">Busca a tu médico:</h3>

          <div className="staff__content__filters">
            <select
              onChange={(e) => setSelectedLocation(e.target.value)}
              name="sedes"
              defaultValue={"selected-sede"}
              className="staff__filters__select"
            >
              <option value="">Selecciona una sede</option>
              <option value="FRANCHIN">Franchin</option>
              <option value="SAN JOSE">San José</option>
              <option value="FINOCHIETTO">Finochietto</option>
            </select>

            <select
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              name="especialidades"
              defaultValue={"selected-specialty"}
              className="staff__filters__select"
            >
              <option value="">Selecciona una especialidad</option>
              <option value="CARDIOLOGIA">Cardiologia</option>
              <option value="NEUROLOGIA">Neurologia</option>
              <option value="DERMATOLOGIA">Dermatologia</option>
              <option value="PEDIATRIA">Pediatria</option>
            </select>

            <div className="staff__filter__doctor">
              <div className="staff__filter__icon">
                <SearchIcon />
              </div>
              <input
                onChange={handleInput}
                type="text"
                className="staff__filters__input"
                placeholder="Busca tu médico"
              />
            </div>
          </div>
        </header>

        <div className="staff__content__doctors">
          <div className="staff__content__doctors__grid">
            {filteredDoctors.map(({ id, name, speciality }) => (
              <div className="doctor__card" key={id}>
                <img src="/medicos-icon.png" alt="doctor-avatar" />
                <div className="doctor__card__content">
                  <span className="doctor__card__title">Dr. {name}</span>
                  <span>{speciality}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainContainer>
  );
};

export default StaffMedico;
