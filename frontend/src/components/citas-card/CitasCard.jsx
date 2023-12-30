import Button from '../ui/Button';
import styles from './CitasCard.module.css'

const CitasCard = ({doctor, specialty, patient, date, onClick}) => {

    const parts = date.split(' ')

    return ( 
        <div className={styles.container} onClick={onClick}>
            <div className={styles.citasCard}>
                <div className={styles.cardDateContainer}>
                    <div className={styles.cardDate}>
                        <span>{parts[0]}</span>
                        <br />
                        <span>{parts[1]}</span>
                        <br />
                        <span>{parts[2]}</span>
                        <hr />
                        <span>{parts[3]}</span>
                    </div>
                </div>

                <div className={styles.cardDetails}>
                    <span>Dr. {doctor}</span>
                    <span>{specialty}</span>
                    <span style={{paddingTop: '5px'}}>Paciente: {patient}</span>
                </div>
            </div>
            <hr />
            <footer className={styles.cardFooter}>
                <Button size={'xl'}>
                    <span>Ver detalles de la cita</span>
                </Button>
            </footer>
        </div>
     );
}
 
export default CitasCard;