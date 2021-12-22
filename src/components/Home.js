import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import classes from './Home.module.css'


const Home = () => {

    return (
        <div className={classes.contentdiv}>

            <div className={classes.upper} >
                    <h1>Nathaniel Pownell</h1>
                <div>
                    <h3>ReactJs Web Developer</h3>
                    <h3>
                        <Link to="/projects" >
                            See my work
                        </Link>
                    </h3>
                </div>
            </div>
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
        </div>
    );
};

export default Home;