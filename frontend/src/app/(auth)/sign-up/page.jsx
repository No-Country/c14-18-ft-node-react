'use client'
import Link from 'next/link'
import './sign-up.css'
import { useRouter } from 'next/navigation'
import { BackArrowIcon } from '@/components/Icons'
import Swal from 'sweetalert2'
import Button from '@/components/ui/Button'


const SignUp = () => {
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
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            })

            if(res.status === 200){
                Swal.fire({
                    title:"Registro exitoso",
                    text:"¡usuario guardado correctamente!",
                    icon:"success",
                    confirmButtonColor:"#4070f4",
                    iconColor: "#7DCE4F",
                }).then(()=>{
                    router.push('/log-in');
                });
            }

            console.log(res)
        } catch(error) {
            console.log(error)
            Swal.fire({
                title:"Ooops!",
                icon:"error",
                text:'Este DNI ya esta registrado',
                confirmButtonColor:"#4070f4",
            });
        }
    }



    return (
        <div className="container">
            <div className="register-form">
                <header >
                    <Link href={'/log-in'} className='back-btn'>
                        <BackArrowIcon/>
                        <span>Regresar al login</span> 
                    </Link>
                    <h1>Registro</h1>
                </header>
                <form onSubmit={handleSubmit}>
                    <span className='title'>Ingrese sus datos</span>

                    <div className='fields'>
                        <div className='input-field'>
                            <label for="dni" >Dni</label>
                            <input 
                                required 
                                name='dni' 
                                maxLength='8' 
                                type="text" 
                                placeholder='Ingrese su documento'
                                onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))}
                            />
                        </div>

                        <div className='input-field'>
                            <label for="name">Nombres</label>
                            <input required name='name' type="text" placeholder='Ingrese su nombre' />
                        </div>

                        <div className='input-field'>
                            <label for="lastName">Apellidos</label>
                            <input required name='lastName' type="text" placeholder='Ingrese sus apellidos' />
                        </div>

                        <div className='input-field'>
                            <label for="email">Email</label>
                            <input required name='email' type="email" placeholder='Ingrese su email' />
                        </div>

                        <div className='input-field'>
                            <label for="phone">Contacto </label>
                            <input required name='phone' type="number" placeholder='Ingrese su numero telofonico' />
                        </div>

                        <div className='input-field'>
                            <label for="birthDate">Fecha de nacimiento</label>
                            <input required name='birthDate' type="date" />
                        </div>

                        <div className='input-field'>
                            <label for="gender">Genero</label>
                            <select name="gender" defaultValue={'select'}>
                                <option value="select" disabled >Selecciona uno</option>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </select>
                        </div>

                        <div className='input-field'>
                            <label for="address">Direccion</label>
                            <input required name='address' type="text" placeholder='Ingrese el numero' />
                        </div>

                        <div className='input-field'>
                            <label for="password">Password</label>
                            <input required name='password' type="password" placeholder='Ingrese su password' />
                        </div>
                    </div>

                    <Button type={'submit'} >
                        <span style={{fontWeight: '500'}}>Registrarse</span>
                    </Button>

                </form>

            </div>
        </div>
    );
}

export default SignUp;