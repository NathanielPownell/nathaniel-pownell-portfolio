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
            <h1>Bank Dashboard</h1>
            
            <p className={classes.paragraph}>
                This project was created with Reactjs.
            </p>


            <h5>How it works</h5>
            <p className={classes.paragraph}>
                The project is hosted on AWS Amplify and uses data from a JSON file resembling a database response once a 
                user is authenticated. The data from the JSON file is used in the dashboard. This data includes recent transactions,
                credit cards, current balance, and more.
            </p>
            <h5>The Objective:</h5>
            <p className={classes.paragraph} >
                My focus on this project was to build a modern, sleek, and fully responsive user interface. The interface is pretty simple, but that
                will allow for potential additions in the future. I utilized react-spring to ensure the interface felt sleek and alive. 
            </p>
            <div className={classes.actionDiv} >
                {/* <p>Read more on <a target="_blank" href="https://github.com/NathanielPownell/real-estate-app#readme">Github <FontAwesomeIcon icon={faGithub} /></a></p> */}
                <p className={classes.run}> <a target="_blank" href="https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1&code=e86b4dbf2d3e6be38ff5#/drlf9f7ncyp3w"> Run App &nbsp; <FontAwesomeIcon icon={faPlay} /></a></p>
            </div>
        </ProjectModal>
  )
}

export default Bankio