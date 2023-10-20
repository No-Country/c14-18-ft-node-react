'use client'

import './landing.css'
import Button from '@/components/ui/Button'
import { RightArrowIcon } from '@/components/Icons'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <main style={{display: 'flex', flexDirection: 'column', placeItems: 'center' }}>
        <section className='main-banner'>
          <div className='dotted'/>
          <div className='circle'/>
          <div className='banner-content'>
            <p> <strong>Comprometidos</strong> con tu <br /> Bienestar y una <strong>Mejor</strong>  <br /> Calidad de <strong> Vida</strong> </p>
            <Button className={'invert'} onClick={() => router.push('/myaccount/citas')}>
              <span>Agenda Una Cita</span>
              <i style={{paddingRight: '10px'}}><RightArrowIcon /></i> 
            </Button>
            
          </div>
          <div className='banner-image'>
            <img src="doctor-banner.webp" alt="" />
          </div>
        </section>

      </main>
    </>
  )
}