import React from 'react'
import ProjectModal from './ProjectModal'
import Badge from './ui/Badge'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import classes from './Alienswap.module.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Bankio = () => {
    return (
        <ProjectModal>
            <h1>Personal Blog</h1>

            <p className={classes.paragraph}>
                My blog was created with a Django Rest API backend and React front end.
            </p>


            <h5>How it works</h5>
            <p className={classes.paragraph}>
                I have set up the back end as an API. I am able to log in and create and edit blog posts using a rich text editor.
            </p>
            <p className={classes.paragraph}>
                The front end of the blog that is integrated with this website was built with react.
            </p>
            <p className={classes.paragraph}>
                The blog post detail view allows the user to
                like, comment, and see how many views the blog post has.
            </p>

            <div className={classes.actionDiv} >
                {/* <p>Read more on <a target="_blank" href="https://github.com/NathanielPownell/real-estate-app#readme">Github <FontAwesomeIcon icon={faGithub} /></a></p> */}
                <p className={classes.run}> <a target="_blank" href="https://www.nathanielpownell.com/blog"> Run App &nbsp; <FontAwesomeIcon icon={faPlay} /></a></p>
            </div>
        </ProjectModal>
    )
}

export default Bankio