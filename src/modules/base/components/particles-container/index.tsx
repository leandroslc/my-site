import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { ClientSideOnly } from '@/src/modules/base/components/client-side-only'
import * as S from './styles'

const initParticles = async (engine: any) => {
  await loadFull(engine)
}

export const ParticlesContainer = () => {
  return (
    <ClientSideOnly>
      <S.Container
        as={Particles}
        init={initParticles}
        options={{
          fpsLimit: 60,
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          particles: {
            zIndex: {
              value: 0,
            },
            move: {
              enable: true,
              bounce: false,
              direction: 'none',
              outModes: 'out',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              value: 80,
              density: {
                area: 800,
              },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
            color: {
              value: ['#9B51E0', '#3CDBA2', '#C28C4C'],
            },
          },
        }}
      />
    </ClientSideOnly>
  )
}
