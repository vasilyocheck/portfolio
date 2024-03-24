import { useCallback } from 'react'
import Particles from 'react-tsparticles'

import { loadFull } from 'tsparticles'
import { Container } from 'tsparticles-engine' // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const Particle = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id={'tsparticles'}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        detectRetina: true,
        /*background: {
                    color: {
                        value: "#0d47a1",
                    },
                },*/
        fpsLimit: 120,
        interactivity: {
          events: {
            /*onClick: {
                            enable: true,
                            mode: "push",
                        },*/
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              area: 1000,
              enable: true,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { max: 1, min: 0.2 },
          },
        },
      }}
    />
  )
}
