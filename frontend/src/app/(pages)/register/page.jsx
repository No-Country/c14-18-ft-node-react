'use client'
import './register-form.css'
import { useRouter } from 'next/navigation'

const Register = () => {
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)

        const jsonData = {
            documentId: parseInt(formData.get('dni')),
            name: formData.get('name'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: parseInt(formData.get('phone')),
            password: formData.get('password'),
            birthDate: formData.get('birthDate'),
            gender: formData.get('gender'),
            address: formData.get('address'),
        };

        try {
            const res = await fetch('http://localhost:8080/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
            })

            console.log(res)
        } catch(error) {
            console.log(error)
            alert('Ese documento de indentidad ya esta registrado')
        }

        if(res.status === 200) {
            alert('Se ha registrado el usuario correctamente')
            router.push('/')
            form.reset()
        }
    }

    return (
        <div className="container">
            <div className="register-form">
                <header >
                    Registro
                </header>
                <form onSubmit={handleSubmit}>
                    <span className='title'>Ingrese sus datos</span>

                    <div className='fields'>
                        <div className='input-field'>
                            <label htmlFor="">Dni</label>
                            <input required name='dni' type="number" placeholder='Ingrese su documento' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Nombres</label>
                            <input required name='name' type="text" placeholder='Ingrese su nombre' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Apellidos</label>
                            <input required name='lastName' type="text" placeholder='Ingrese sus apellidos' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Email</label>
                            <input required name='email' type="email" placeholder='Ingrese su email' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Contacto </label>
                            <input required name='phone' type="number" placeholder='Ingrese su numero telofonico' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Fecha de nacimiento</label>
                            <input required name='birthDate' type="date" />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="gender">Genero</label>
                            <select name="gender">
                                <option value="select" selected disabled>Selecciona uno</option>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </select>
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Direccion</label>
                            <input required name='address' type="text" placeholder='Ingrese el numero' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Password</label>
                            <input required name='password' type="password" placeholder='Ingrese su password' />
                        </div>
                    </div>

                    <button className='next-button' type='submit'>
                        <span>Registrarse</span>
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Register;