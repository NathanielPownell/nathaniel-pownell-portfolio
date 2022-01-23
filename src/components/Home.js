import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'

import classes from './Home.module.css'
import Button from './ui/Button'

const Home = () => {
    const styles = useSpring({
        loop: false,
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 300 },
    })

    return (
        <animated.div style={styles} className={classes.contentdiv}>

            <div id="home" className={classes.upper} >
                <animated.h1 style={styles}>Nathaniel <br className={classes.mobile} /> Pownell</animated.h1>
                <div>
                    <h3>Junior Front End Developer</h3>
                    <ul className={classes.skillsmobile}>
                        <li>ReactJs</li>
                        <li>HTML/CSS</li>
                        <li>PHP</li>
                        <li>JQuery</li>
                        <li>...</li>
                    </ul>
                </div>
                <a href="#projects">
                    <Button variety="regular" >
                        See my work
                    </Button>
                </a>

            </div>

            {/* <div className={classes.mobile}>
                 <p><strong>I'm a junior front-end developer. <br /><br></br>
                     I've just graduated with an associate's degree in software development. <br />
                     Looking for a team with big goals.
                     </strong></p>
            </div> */}
            <div className={classes.lower}>
                <div className={classes.skills}>
                    <ul>
                        <li>ReactJs</li>
                        <li>HTML/CSS</li>
                        <li>PHP</li>
                        <li>JQuery</li>
                        <li>...</li>
                    </ul>
                </div>
                <div className={classes.brief}>
                    <p>
                        Junior developer specializing in <b>mobile-first</b> and
                        reactive web apps and websites.
                    </p>
                    <a href="/about" >Learn More</a>
                </div>
            </div>
        </animated.div>
    );
};

export default Home;