import MainContainer from '@/components/ui/MainContainer/MainContainer';
import { SearchIcon } from '@/components/Icons';
import  mockDoctors  from '@/mocks/doctors.json'

import './staffMedico.css'


const StaffMedico = () => {

    const doctors = mockDoctors.doctors

    return ( 
        <MainContainer>

            <section className='staff__banner'>
                <div className='staff__banner__title'>
                    <span>Nuestro Staff Médico</span>
                </div>
            </section>

            <section className='staff__content__container'>
                <header className='staff__content__header'>
                    <h3 className='staff__content__title'>Busca a tu médico:</h3>

                    <div className='staff__content__filters'>
                        <select name="sedes" defaultValue={'selected-sede'} className='staff__filters__select'>
                            <option value="selected-sede" disabled>Selecciona una sede</option>
                            <option value="1">Franchin</option>
                            <option value="2">San José</option>
                            <option value="3">Finochietto</option>
                        </select>

                        <select name="especialidades" defaultValue={'selected-specialty'} className='staff__filters__select'>
                            <option value="selected-specialty" disabled>Selecciona una especialidad</option>
                            <option value="CARDIOLOGIA">Cardiologia</option>
                            <option value="DERMATOLOGIA">Neurologia</option>   
                            <option value="NEUROLOGIA">Dermatologia</option>
                        </select>

                        <div className='staff__filter__doctor'>
                            <div className='staff__filter__icon'>
                                <SearchIcon />
                            </div>
                            <input type="text" className='staff__filters__input' placeholder='Busca tu médico' />
                        </div>
                    </div>
                </header>

                <div className='staff__content__doctors'>
                    <div className='staff__content__doctors__grid' >
                        {doctors.map(({ id, name, specialty, availability }) => (
                            <div className='doctor__card' key={id}>
                            <img src='/medicos-icon.png' alt="doctor-avatar" />
                            <div className='doctor__card__content'>
                                <span className='doctor__card__title'>Dr. {name}</span>
                                <span>{specialty}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

            </section>

        </MainContainer>
     );
}
 
export default StaffMedico;