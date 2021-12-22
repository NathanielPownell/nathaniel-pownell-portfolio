import React from 'react'
import ProjectModal from './ProjectModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import classes from './Alienswap.module.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Badge from './ui/Badge'

const StudyPortfolio = () => {
    return (
        <ProjectModal>
            <h1>Personal Portfolio Project</h1>
            <ul className={classes.techs}>
                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png" /></li>
                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" /></li>
                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"/></li>
                <li><Badge image="https://www.feroot.com/wp-content/uploads/1200px-Unofficial_JavaScript_logo_2.svg.png" /></li>
                <li><Badge image="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" /></li>
                <li><Badge image="https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x_400x400.png" /></li>

                
            </ul>
            <p className={classes.paragraph}>
                My portfolio site was designed in AdobeXD and created using custom HTML and CSS. 
                <br />Built with react, the purpose of this site is to provide users with information about myself and my work.
            </p>

            <div className={classes.actionDiv} >
                <p>Visit my <a target="_blank" href="https://github.com/NathanielPownell">Github <FontAwesomeIcon icon={ faGithub } /></a></p>
            </div>

        </ProjectModal>
    )
}

export default StudyPortfolio
