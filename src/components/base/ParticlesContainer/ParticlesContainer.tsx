import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import * as S from './ParticlesContainer.styles'

const colors = ['#afa0b9']

export const ParticlesContainer = () => {
  const initParticles = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <S.Container>
      <Particles
        init={initParticles}
        options={{
          fpsLimit: 60,
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          pauseOnOutsideViewport: true,
          particles: {
            zIndex: {
              value: 0,
            },
            move: {
              enable: true,
              bounce: false,
              direction: 'top',
              outModes: 'out',
              outMode: 'out',
              warp: true,
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              value: 20,
              density: {
                area: 400,
              },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 7 },
            },
            color: {
              value: colors,
            },
          },
        }}
      />
    </S.Container>
  )
}
