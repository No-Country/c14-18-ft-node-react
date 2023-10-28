import Button from '../Button';
import './CitasCard.css'

const CitasCard = ({doctor, specialty, patient, date}) => {

    const parts = date.split(' ')

    return ( 
        <div className="citas__card">
            <div className='citas__card__details'>
                <div className='card__date__container'>
                    <div className='card__date'>
                        <span>{parts[0]}</span>
                        <br />
                        <span>{parts[1]}</span>
                        <br />
                        <span>{parts[2]}</span>
                        <hr />
                        <span>{parts[3]}</span>
                    </div>
                </div>

                <div className='card__details'>
                    <span>Dr. {doctor}</span>
                    <span>{specialty}</span>
                    <span style={{paddingTop: '5px'}}>Paciente: {patient}</span>
                </div>
            </div>
            <hr />
            <footer className='citas__card__footer'>
                <Button size={'xl'}>
                    <span>Ver detalles de la cita</span>
                </Button>
            </footer>
        </div>
     );
}
 
export default CitasCard;