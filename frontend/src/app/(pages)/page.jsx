import Link from 'next/link'
import './landing.css'
import { CalendarIcon, CrossIcon, RightArrowIcon } from '@/components/Icons'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <header className='landing-header'>
        <div className='header-logo'>
          <CrossIcon/>
          <span>CLINICONNECT</span>
        </div>

        <nav className='main-nav'>
          <ul className='nav-items'>
            <li>Home</li>
            <li>Servicios</li>
            <li>Medicos</li>
            <li>Contacto</li>
          </ul>
        </nav>

        <div className='header-buttons'>
          <Link href={'/log-in'} style={{maxWidth: '150px', width: '100%'}}>
            <Button>
              <i><CalendarIcon/></i> 
              <span>Agendar Cita</span>
            </Button>
          </Link>
        </div>
      </header>

      <main style={{display: 'flex', flexDirection: 'column', placeItems: 'center' }}>
        <section className='main-banner'>
          <div>
            <p> <strong>Comprometidos</strong> con tu <br /> Bienestar y una <strong>Mejor</strong>  <br /> Calidad De <strong> Vida</strong> </p>
            <Link href={'/log-in'} >
              <Button className={'invert'}>
                <span>Agenda Una Cita</span>
                <RightArrowIcon/>
              </Button>
            </Link>
            
          </div>
          <div>
            IMAGEN
          </div>
        </section>

      </main>
    </>
  )
}