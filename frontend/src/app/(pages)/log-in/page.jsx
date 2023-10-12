'use client'
import { useState } from 'react';
import './log-in.css'
import { ClosedEyeIcon, OpenEyeIcon } from '@/components/Icons';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';


const Login = () => {
    const [visible, setVisible] = useState(false)
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const form = event.target
        const formData = new FormData(form)

        const jsonData = {
            documentId: parseInt(formData.get('dni')),
            password: formData.get('password'),
        };

        const res = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials:"include",
            body: JSON.stringify(jsonData),
        })

        console.log(res.body)

        if (res.status === 200) {
            router.push('/appointments')
        }
        
        if( res.status === 400) {
            toast.error('documento o contraseña incorrecta')
        }
    }

    return (
        <div className="container">
            <div className='form-container'>
                <header>
                    <h1>Login</h1>
                </header>
                <form onSubmit={handleSubmit}>
                    <span className='login-title'>Accede si ya tienes una cuenta</span>
                    <div className='fields'>
                        <div className='input-field'>
                            <label for='dni' >Ingrese su numero de documento</label>
                            <input
                                required
                                type="text" 
                                maxLength={8} 
                                name='dni' 
                                placeholder='DNI' 
                                onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))}
                            />
                        </div>
                        <div className='input-field'>
                            <label for='dni'>Ingrese su contraseña</label>
                            <input type={visible ? 'text' : 'password'} name='password' required placeholder='Contraseña'/>
                            <button type='button' className='eye-icon' onClick={() => setVisible(!visible)}>
                                {visible ? <ClosedEyeIcon/> : <OpenEyeIcon/>}
                            </button>
                        </div>

                        <span className='password'> Olvidaste tu contraseña? </span>

                        <div className='button-container'>
                            <button type='submit'>
                                <span style={{width: '100%'}}>Iniciar Sesion</span>
                            </button>

                            <button type='button' onClick={() => router.push('/sign-up')}>
                                <span style={{width: '100%'}}>Registrarse</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;