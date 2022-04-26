import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'
import NathanSvg from './Nathan.svg'
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
                <div className={classes.headline}>

                    <animated.h1 style={styles}>Nathaniel <br className={classes.mobile} /> Pownell</animated.h1>
                    <div className={classes.svgContainer}>
                        <img className={classes.nathanSvg} src={NathanSvg} />
                    </div>
                </div>
                <div className={classes.info}>
                    <h3>Software Developer</h3>
                    <ul className={classes.skillsmobile}>
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                        <li>UI/Design</li>

                        <li>Python</li>
                        <li>Django</li>
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
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                        <li>UI/Design</li>

                        <li>Python</li>
                        <li>Django</li>
                        <li>Git</li>
                        <li>...</li>
                    </ul>
                </div>
                <div className={classes.brief}>
                    <p>
                        Web developer specializing in <b>mobile-first</b> web apps and websites.
                        Experience designing and developing intuitive <b>User Interfaces </b>
                        and consuming APIs.
                    </p>
                    &nbsp; <a href="#about" >Learn More</a>
                </div>
            </div>
        </animated.div>
    );
};

export default Home;