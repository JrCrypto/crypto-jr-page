import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);

    return (
      <Particles
            canvasClassName='canvasParticle'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                'particles': {
                    'number': {
                      'value': 80,
                      'density': {
                        'enable': true,
                        'value_area': (80 * 10) * 2
                      }
                    },
                    'color': {
                      'value': '#75A5B7'
                    },
                    'shape': {
                      'type': 'circle',
                      'stroke': {
                        'width': 0,
                        'color': '#000000'
                      },
                      'polygon': {
                        'nb_sides': 5
                      },
                    },
                    'opacity': {
                      'value': 0.5,
                      'random': false,
                      'anim': {
                        'enable': false,
                        'speed': 1,
                        'opacity_min': 0.1,
                        'sync': false
                      }
                    },
                    'size': {
                      'value': 3,
                      'random': true,
                      'anim': {
                        'enable': false,
                        'speed': 40,
                        'size_min': 0.1,
                        'sync': false
                      }
                    },
                    'line_linked': {
                      'enable': true,
                      'distance': 150,
                      'color': '#75A5B7',
                      'opacity': 1,
                      'width': 1
                    },
                    'move': {
                      'enable': true,
                      'speed': 2,
                      'direction': 'none',
                      'random': false,
                      'straight': false,
                      'out_mode': 'out',
                      'bounce': false,
                      'attract': {
                        'enable': false,
                        'rotateX': 600,
                        'rotateY': 1200
                      }
                    }
                  },
                  'interactivity': {
                    'detect_on': 'canvas',
                    'modes': {
                      'grab': {
                        'distance': 140,
                        'line_linked': {
                          'opacity': 1
                        }
                      },
                      'bubble': {
                        'distance': 400,
                        'size': 40,
                        'duration': 2,
                        'opacity': 8,
                        'speed': 3
                      },
                      'repulse': {
                        'distance': 200,
                        'duration': 0.4
                      },
                      'push': {
                        'particles_nb': 4
                      },
                      'remove': {
                        'particles_nb': 2
                      }
                    }
                  },
                  'retina_detect': true,
                  fullScreen: {
                    enable: false,
                    zIndex: 1,
                  },
            }}
      />
    );
};