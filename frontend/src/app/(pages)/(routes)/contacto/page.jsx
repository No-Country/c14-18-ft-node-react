import Button from '@/components/ui/Button';
import './contact.css'

const Contact = () => {
    return ( 
        <div className="contact__container">
            <div className='contact'>
                <div className='contact__form__container'>
                    <header className='contact__form__header'>
                        <h1>Déjanos tu mensaje</h1>
                        <p>Llena el formulario y nuestro equipo respondera a la brevedad</p>
                    </header>

                    <form className='contact__form' action="">
                        <div className='form__fields'>
                            <div className='form__inputs'>
                                <input className='form__input' type="text" name='nombre' placeholder='Ingresa tu nombre'/>
                                <input className='form__input' type="text" name='apellidos' placeholder='Ingresa tus apellidos' />
                                <input className='form__input' type="number" name='telefonoo' placeholder='Indica tu telefono de contacto' />
                                <input className='form__input' type="email" name='email' placeholder='Ingresa tu email'/>
                            </div>

                            <div className='form__textarea'>
                                <textarea name="mensaje"  cols="45" rows="10" placeholder='Escribe aqui tu mensaje'/>
                            </div>
                        </div>
                        

                        <Button type={'submit'}>
                            <span>Enviar</span>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;