import { SearchIcon } from '@/components/Icons';
import './citas.css'

const Citas = () => {
    return ( 
        <div className="citas-container">
            <div className="citas">
                <header className='citas__header'>
                    <h1 className='citas__title'>Agenda tu Cita</h1>
                </header>
                <main className='citas__content'>
                    <div className='filters'>
                        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                            <div style={{maxWidth: '290px', width: '100%'}}>
                                <select name="sedes" className='filters__select'>
                                    <option value="select">Selecciona una locacion</option>
                                    <option value="1">Location 1</option>
                                    <option value="2">Location 2</option>
                                    <option value="3">Location 3</option>
                                </select>
                            </div>

                            <div style={{maxWidth: '400px', width: '100%'}}>
                                <select name="especialidades" className='filters__select'>
                                    <option value="select-specialty">Seleccion una especialidad</option>
                                    <option value="cardiology">Cardiologia</option>
                                    <option value="Dermatology">Dermatologia</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className='filters__title'>
                            <span>Médicos</span>
                        </div>

                        <div className='filter__doctor'>
                            <div className='filter__icon'>
                                <SearchIcon/>
                            </div>
                            <input type="text" className='filters__input' placeholder='Busca tu médico'/>
                        </div>
                    </div>

                    <div className='doctors'>
                        <div className='doctors__grid'>
                            <div className='doctor__card'>
                                Hola soy un doctor
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Citas;