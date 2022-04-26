import React from 'react'
import ProjectModal from './ProjectModal'
import Badge from './ui/Badge'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import classes from './Alienswap.module.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Survey = () => {
    return (
        <ProjectModal>
            <img className={classes.bannerImg} src="https://master.d5e8q7ae5xwkg.amplifyapp.com/static/media/survhey.81b6e307d217821715b6.png" />
            <h1>Survey Creation Web App</h1>

            <p className={classes.paragraph}>
                This is a CRUD application created with the MERN stack and hosted on Heroku.
            </p>



            <p className={classes.paragraph}>

                The app allows the user to create and edit questionnaire/surveys, take surveys, and review survey feedback.
            </p>

            <p className={classes.paragraph} >
                Since the app offers users the ability to create a public profile and post public surveys, safety was a large concern. To ensure the community remains safe, I utilized a profanity filter and AWS AI Powered Image moderation to prevent unsafe content from being distributed on the platform.
            </p>

            <p className={classes.paragraph} >
                This project is a remake of a previous project I had created using the Django Rest framework and react. </p>
            <p className={classes.paragraph} >
                 <b><a href="#">Read More.</a></b>
            </p>
            <div className={classes.actionDiv} >
                {/* <p>Read more on <a target="_blank" href="https://github.com/NathanielPownell/real-estate-app#readme">Github <FontAwesomeIcon icon={faGithub} /></a></p> */}
                <p className={classes.run}> <a target="_blank" href="https://survhey-app.herokuapp.com/"> Run App &nbsp; <FontAwesomeIcon icon={faPlay} /></a></p>
                <p className={classes.paragraph}>**This project is hosted on heroku's free dynos and may take a second to load. 🙂</p>
            </div>

        </ProjectModal>
    )
}

export default Survey