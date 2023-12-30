'use client'

import Button from '@/components/ui/Button';
import './contact.css'
import { sendEmail } from '@/services/sendContactEmail';
import { toast } from 'sonner';

const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const jsonData = {
            name: formData.get('name'),
            lastname: formData.get('lastname'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            message: formData.get('message'),
        }

        try {
            const response = await sendEmail(jsonData);

            console.log(response)

            document.getElementById("contact-form").reset();
            toast.success('Recibimos tu mensaje, nos contactaremos en la brevedad posible!');
        } catch (error) {
            console.log(error)
            toast.error(`Hubo un problema al enviar tu mensaje. Por favor, llene todo los campos e intentelo denuevo.`);
        }
    }

    return (
        <div className="contact__container">
            <div className='contact'>
                <div className='contact__form__container'>
                    <header className='contact__form__header'>
                        <h1>Déjanos tu mensaje</h1>
                        <p>Llena el formulario y nuestro equipo respondera a la brevedad</p>
                    </header>

                    <form id='contact-form' className='contact__form' onSubmit={handleSubmit}>
                        <div className='form__fields'>
                            <div className='form__inputs'>
                                <input className='form__input' type="text" name='name' placeholder='Ingresa tu nombre' />
                                <input className='form__input' type="text" name='lastname' placeholder='Ingresa tus apellidos' />
                                <input className='form__input' type="number" name='phone' placeholder='Indica tu telefono de contacto' />
                                <input className='form__input' type="email" name='email' placeholder='Ingresa tu email' />
                            </div>

                            <div className='form__textarea'>
                                <textarea name="message" autoComplete='off' cols="45" rows="10" placeholder='Escribe aqui tu mensaje' />
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