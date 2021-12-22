import { useState, useTransition, animated, config} from 'react-spring';

function Mount() {
    const [show, set] = useState(false)
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: show,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!show),
    })
    return transitions(
      (styles, item) => item && <animated.div style={styles}>
          Poop
      </animated.div>
    )
  }

  export default Mount;