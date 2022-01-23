import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode"
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes"
import Toggle from "./Toggler";

import { useSpring, animated } from 'react-spring'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faHome, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCodepen, faDribbble } from '@fortawesome/free-brands-svg-icons'

// import classes from './menu-wrapper.module.css'
import './menu-wrapper.css'
import Loading from "./Loading";
import CaseStudies from "./CaseStudies";
import { NavLink } from "react-router-dom";

const MenuFrame = (props) => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const styles = useSpring({
        loop: false,
        from: { opacity: 0},
        to: { opacity: 1},
        config: {duration: 300},
      })

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!mountedComponent) return <div />
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <div className='mainframe'>
                <div className='frametop'>
                    <div>
                        <ul>
                            <li>www.nathanielpownell.com</li>
                            <li>Web Developer</li>
                            <li>nathanieldpownell@gmail.com</li>
                        </ul>
                    </div>
                    <div className="togglerDiv">
                        <small>{themeMode.themetext}</small>
                        <Toggle theme={theme} toggleTheme={themeToggler} />
                    </div>

                </div>
                <div className='midframe'>

                    <animated.div style={styles} className='content' id="content" >
                        {props.children}
                    </animated.div>

                    <ul className="sociconsulFrame">
                    <li>
                        <a className="socicon" style={{color: themeMode.text}} target="_blank" href="https://github.com/NathanielPownell">
                            <FontAwesomeIcon className='socIcon' icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a className="socicon" style={{color: themeMode.text}} target="_blank" href="https://www.linkedin.com/in/nathaniel-pownell-3a510a1bb/">
                            <FontAwesomeIcon className='socIcon' icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a className="socicon" style={{color: themeMode.text}} target="_blank" href="https://codepen.io/nathanielpownell">
                            <FontAwesomeIcon icon={faCodepen} />
                        </a>
                    </li>
                    <li>
                        <a className="socicon" style={{color: themeMode.text}} target="_blank" href="https://dribbble.com/nathanielpownell">
                            <FontAwesomeIcon icon={faDribbble} />
                        </a>
                    </li>
                    </ul>
                    
                </div>
                
                <div className='lowerframe'>
                    <ul className='navmenu'>
                        
                        <li>
                            <a  href="#home" activeClassName="active" style={{color: themeMode.text}}>
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                        </li>
                        <li>
                            <a  href="#projects" activeClassName="active" style={{color: themeMode.text}}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a  href="#about" activeClassName="active" style={{color: themeMode.text}}>
                                About
                            </a>
                        </li>
                        <li>
                            <a  href="#contact" activeClassName="active" style={{color: themeMode.text}}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default MenuFrame
