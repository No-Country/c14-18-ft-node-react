'use client'

import './landing.css'
import Button from '@/components/ui/Button'
import { ClockIcon, DoctorIcon, LikeIcon, RightArrowIcon } from '@/components/Icons'
import { useRouter } from 'next/navigation'

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
                <p>Lorem ipsum dolor sit amet consectecur adipiscing</p>
              </div>
            </div>

            <div className='landing__content__card'>
              <div className='content__card__icon'>
                <DoctorIcon size='60'/>
              </div>

              <div className='content__card__text'>
                <span>Los Mejores Medicos</span>
                <p>Lorem ipsum dolor sit amet consectecur adipiscing</p>
              </div>
            </div>

            <div className='landing__content__card invert'>
              <div className='content__card__icon'>
                <LikeIcon size='46'/>
              </div>

              <div className='content__card__text'>
                <span>Atencion de Alta Calidad</span>
                <p>Lorem ipsum dolor sit amet consectecur adipiscing</p>
              </div>
            </div>

          </div>

          <div className='landing__content__services'>
            <div className='content__services__container'>
              <header className='content__services__header'>
                <h2 className='services__header__title'>Nuestros <span>Servicios</span> </h2>
                <p className='services__header__description'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa iusto asperiores praesentium hic deserunt sed vero sit fugiat aliquam inventore dolore nihil in ea, officia consequatur aliquid. Obcaecati, doloremque id.
                </p>
              </header>

              <main className='content__services__main'>
                <div className='content__services__grid'>
                  <div className='content__services__card'>
                    Agenda Una Cita
                  </div>

                  <div className='content__services__card'>
                    Miras los doctores
                  </div>
                </div>
              </main>

            </div>
          </div>

        </section>

      </main>
    </>
  )
}