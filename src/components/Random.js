import React from 'react'
import ProjectModal from './ProjectModal'
import Badge from './ui/Badge'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import classes from './Alienswap.module.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Random = () => {
    return (
        <ProjectModal>
            <h1>RANDOM PERSON GEN API</h1>
            <ul className={classes.techs}>
            <li><Badge image="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" /></li>
                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" /></li>
                <li><Badge image="https://www.feroot.com/wp-content/uploads/1200px-Unofficial_JavaScript_logo_2.svg.png" /></li>
                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" /></li>
                <li><Badge image="https://www.djangoproject.com/m/img/logos/django-logo-negative.png" /></li>
                <li><Badge image="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_251be2af3ae607c45c14e816eaa1cf41/postgresql.png" /></li>

            </ul>
            <p className={classes.paragraph}>
                This project was created with Python/Django/DjangoRestFramework. The front end was built with React.
            </p>


            <h5>How it works</h5>
            <p className={classes.paragraph}>
                I created a django api view in django that responds with a random gender (if not specified in call), first name, last name, 
                email address, job title, and profile image that matches the gender of the person's first name.
            </p>
            <h5>The Objective:</h5>
            <p className={classes.paragraph} >
                For this project, I was really focused on creating something that anyone within the community could access and use with ease.
                I wanted to create an API that functions quickly and returns easy-to-read JSON data.
            </p>
            <div className={classes.actionDiv} >
                {/* <p>Read more on <a target="_blank" href="https://github.com/NathanielPownell/real-estate-app#readme">Github <FontAwesomeIcon icon={faGithub} /></a></p> */}
                <p className={classes.run}> <a target="_blank" href="https://main.d3r7x3m8bhtzcp.amplifyapp.com/"> Run App &nbsp; <FontAwesomeIcon icon={faPlay} /></a></p>
                <p className={classes.paragraph}>**The backend is hosted on Heroku's free dynos, please be patient when you first load the app. 🙂</p>            </div>

        </ProjectModal>
    )
}

export default Random