'use client'

import { useState } from 'react';
import './log-in.css'
import { ClosedEyeIcon, OpenEyeIcon } from '@/components/Icons';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Button from '@/components/ui/Button';
import { useAuth } from '@/providers/auth-provider';


const Login = () => {
    const [visible, setVisible] = useState(false)
    const router = useRouter()
    const { login } = useAuth();
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const form = event.target
        const formData = new FormData(form)

        const jsonData = {
            documentId: parseInt(formData.get('dni')),
            password: formData.get('password'),
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            credentials:"include",
            body: JSON.stringify(jsonData),
        })

        const data = await res.json()

        if (res.status === 200) {
            const credentials = JSON.stringify(data.userCredential)

            login(credentials)

            router.refresh()
            router.push('/myaccount/citas')
        };

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
                            <label htmlFor='dni' >Ingrese su numero de documento</label>
                            <input
                                required
                                type="text" 
                                maxLength={8} 
                                name='dni'
                                id='dni'
                                placeholder='DNI' 
                                onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))}
                            />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Ingrese su contraseña</label>
                            <input type={visible ? 'text' : 'password'} name='password' id='password' required placeholder='Contraseña'/>
                            <button type='button' className='eye-icon' onClick={() => setVisible(!visible)}>
                                {visible ? <ClosedEyeIcon/> : <OpenEyeIcon/>}
                            </button>
                        </div>

                        <span className='password'> Olvidaste tu contraseña? </span>

                        <div className='button-container'>

                            <Button type={'submit'}>
                                <span style={{fontWeight: '500'}}>Iniciar Sesion</span>
                            </Button>

                            <Button onClick={() => router.push('/sign-up')} >
                                <span style={{fontWeight: '500'}}>Registrarse</span>
                            </Button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;