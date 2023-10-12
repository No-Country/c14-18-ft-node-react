import Link from 'next/link'
import './landing.css'
import { RightArrowIcon } from '@/components/Icons'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
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
            Image
          </div>
        </section>

      </main>
    </>
  )
}