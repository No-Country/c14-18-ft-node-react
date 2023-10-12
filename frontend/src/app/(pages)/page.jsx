import Link from 'next/link'
import './landing.css'

export default function Home() {
  return (
    <>
      <header className='landing-header'>
        <h1>LOGO</h1>
        <nav className='main-nav'>
          <ul className='nav-items'>
            <li>Home</li>
            <li>Servicios</li>
            <li>Medicos</li>
            <li>Contacto</li>
          </ul>
        </nav>

        <div>
          <Link href={'/log-in'} style={{ backgroundColor: '#4070f4', color: '#fff', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none' }}>
            Ingresar
          </Link>
          <Link href={'/sign-up'} style={{ backgroundColor: '#4070f4', color: '#fff', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none' }}>
            Registrarse
          </Link>
        </div>
      </header>

      <main style={{display: 'flex', flexDirection: 'column', placeItems: 'center' }}>
        <h1>Landing Page</h1>

      </main>
    </>
  )
}