import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import classes from './ProjectModal.module.css'

const ProjectModal = (props) => {
    return (
        <div className={classes.projectModal}>
            <div className={classes.modalX} >
                <a href="/projects">
                <FontAwesomeIcon icon={faTimesCircle} />
                </a>
            </div>
            <h1>
                {props.children}
            </h1>
        </div>
    )
}

export default ProjectModal
