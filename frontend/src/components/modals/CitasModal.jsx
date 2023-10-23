import './CitasModal.css'

const CitasModal = () => {

    const isOpen = false

    return ( 
        <div className="modal__overlay" style={isOpen ? {} : {display: 'none'}}>
            <div className='modal__container'>
                <div className='modal'>
                    <header className='modal__header'>
                        <h3 className='modal__header__title'>Agenda tu cita | <span>  Elige el día y la hora </span></h3>
                        <div>

                        </div>
                    </header>

                    <main className='modal__content'>
                        Este es el cuerpo
                    </main>
                </div>
            </div>
        </div>
     );
}
 
export default CitasModal;