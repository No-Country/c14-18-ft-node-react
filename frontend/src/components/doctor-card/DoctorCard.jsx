import { useModal } from '@/hooks/useModal'

import styles from './DoctorCard.module.css'
import { useRouter } from 'next/navigation'

const DoctorCard = ({location, speciality, name, id, availability, isUser = false}) => {
    const {openCitasModal} = useModal()
    const router = useRouter()

    return (
        <div
            onClick={isUser ? () =>
                openCitasModal(
                    location,
                    speciality,
                    name,
                    id,
                    availability
                ) : () => router.push('/myaccount/citas')
            }
            className={styles.doctorCard}
            key={id}
        >
            <img src="/medicos-icon.png" alt="doctor-avatar" />
            <div className={styles.cardContent}>
                <span className={styles.cardTitle}>Dr. {name}</span>
                <span>{speciality}</span>
            </div>
        </div>
    )
}

export default DoctorCard