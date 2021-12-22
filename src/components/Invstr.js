import React from 'react'
import ProjectModal from './ProjectModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import classes from './Alienswap.module.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import InvstrLogo from './invstrlogo.png'
import Badge from './ui/Badge'

const Invstr = () => {
    return (
        <ProjectModal>
            <img src={InvstrLogo} />
            <h1>Invstr Stock Watchlist Web-App</h1>
            <ul className={classes.techs} >

                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" /></li>
                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" /></li>
                <li><Badge image="https://www.feroot.com/wp-content/uploads/1200px-Unofficial_JavaScript_logo_2.svg.png" /></li>
                <li><Badge image="https://avatars.githubusercontent.com/u/2918581?s=280&v=4" /></li>
                <li><Badge image="https://ivazz.com/wp-content/uploads/2021/05/jquery-1.png" /></li>
                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" /></li>
                <li><Badge image="https://www.djangoproject.com/m/img/logos/django-logo-negative.png" /></li>
                <li><Badge image="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_251be2af3ae607c45c14e816eaa1cf41/postgresql.png" /></li>
                <li><Badge image="https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j_400x400.png" /></li>
            </ul>
            <p className={classes.paragraph}>
                Invstr was created for a Project Management class. My goal was to facilitate the development of this application
                while remaining on a tight schedule and meeting periodic goals.
            </p>


            <h5>
                How it works
            </h5>
            <p className={classes.paragraph}>
                The web app uses email/password registration and is connected to a PostgreSQL database hosted on heroku. The user can register to
                create their stock watchlist.
            </p>
            <h5>The Objective:</h5>
            <p className={classes.paragraph} >
                The goal was to create a web app that supports a user system and includes an entired dedicated database for the users' data.
            </p>
            <div className={classes.actionDiv} >
                <p>Read more on <a target="_blank" href="https://github.com/NathanielPownell/">Github <FontAwesomeIcon icon={faGithub} /></a></p>
                <p className={classes.run}> <a target="_blank" href="https://invstrapp.herokuapp.com/"> Run App &nbsp; <FontAwesomeIcon icon={faPlay} /></a></p>
            </div>

        </ProjectModal>
    )
}

export default Invstr
