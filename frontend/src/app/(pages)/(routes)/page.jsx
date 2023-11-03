'use client'

import { CalendarIcon, ClockIcon, DoctorIcon, LikeIcon, RightArrowIcon } from '@/components/Icons'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

import './landing.css'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <main className='landing__container'>
        <section className='main-banner'>
          <div className='dotted'/>
          <div className='circle'/>
          <div className='banner-content'>
            <p> <strong>Comprometidos</strong> con tu <br /> Bienestar y una Mejor  <br /> <strong> Calidad de Vida</strong> </p>
            <Button className={'invert'} onClick={() => router.push('/myaccount/citas')}>
              <span>Agenda Una Cita</span>
              <i style={{paddingRight: '10px'}}><RightArrowIcon /></i> 
            </Button>
            
          </div>
          <div className='banner-image'>
            <img src="doctor-banner.webp" alt="" />
          </div>
        </section>

        <section className='landing__content'>

          <div className='landing__content__cards'>

            <div className='landing__content__card invert'>
              <div className='content__card__icon'>
                <ClockIcon size='46'/>
              </div>

              <div className='content__card__text'>
                <span>Atencion 24/7</span>
                <p>En Cliniconnect atendemos cualquier emergencia</p>
              </div>
            </div>

            <div className='landing__content__card'>
              <div className='content__card__icon'>
                <DoctorIcon size='60'/>
              </div>

              <div className='content__card__text'>
                <span>Los Mejores Medicos</span>
                <p>Contamos con excelentes profesionales del area de salud</p>
              </div>
            </div>

            <div className='landing__content__card invert'>
              <div className='content__card__icon'>
                <LikeIcon size='46'/>
              </div>

              <div className='content__card__text'>
                <span>Atencion de Alta Calidad</span>
                <p>Nuestra prioridad es brindarte la mejor atencion en salud</p>
              </div>
            </div>

          </div>

          <div className='landing__content__services'>
            <div className='content__services__container'>
              <header className='content__services__header'>
                <h2 className='services__header__title'>Nuestros <span>Servicios</span> </h2>
                <p className='services__header__description'>
                En Cliniconnect, nos enorgullece ofrecerte una amplia gama de servicios de atención médica de calidad. Nuestra pasión por la salud y el bienestar se refleja en cada uno de nuestros servicios, diseñados para atender tus necesidades de manera integral y personalizada.
                </p>
              </header>

              <main className='content__services__main'>
                <div className='content__services__cards'>
                  <div onClick={() => router.push('/myaccount/citas')} className='content__services__card' style={{display: 'flex', flexDirection: 'column', gap: '20px', padding: '0'}}>
                    <span>Agenda una cita con tu medico</span>
                  </div>

                  <div onClick={() => router.push('/staff-medico')} className='content__services__card' style={{display: 'flex', flexDirection: 'column', gap: '20px', padding: '0'}}>
                    Revisa nuestro Staff Medico
                  </div>
                </div>
              </main>

            </div>
          </div>

        </section>


        <section className='landing__'>


        </section>

      </main>
    </>
  )
}