import Link from 'next/link'
import './landing.css'
import Button from '@/components/Button'
import { RightArrowIcon } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <main style={{display: 'flex', flexDirection: 'column', placeItems: 'center' }}>
        <section className='main-banner'>
          <div className='dotted'/>
          <div className='circle'/>
          <div className='banner-content'>
            <p> <strong>Comprometidos</strong> con tu <br /> Bienestar y una <strong>Mejor</strong>  <br /> Calidad de <strong> Vida</strong> </p>
            <Link href={'/myaccount/citas'} >
              <Button className={'invert'}>
                <span>Agenda Una Cita</span>
                <RightArrowIcon />
              </Button>
            </Link>
            
          </div>
          <div className='banner-image'>
            <img src="doctor-banner.webp" alt="" />
          </div>
        </section>

      </main>
    </>
  )
}