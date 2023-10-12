'use client'
import './appointment.css'

const Appointments = () => {
    const jwtToken = document.cookie
    console.log(jwtToken)

    return ( 
        <div className="cita-container">
            Aqui va la pagina de citas medicas
        </div>
     );
}
 
export default Appointments;