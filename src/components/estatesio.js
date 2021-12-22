import React from 'react'
import ProjectModal from './ProjectModal'
import Badge from './ui/Badge'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import classes from './Alienswap.module.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Estatesio = () => {
    return (
        <ProjectModal>
            <img src="https://real-estate-app-five.vercel.app/estatesio.png" />
            <h1>ESTATES.IO REAL ESTATE APP</h1>
            <ul className={classes.techs}>
                <li><Badge image="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" /></li>
                <li><Badge image="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" /></li>
                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" /></li>
                <li><Badge image="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" /></li>
                <li><Badge image="https://www.feroot.com/wp-content/uploads/1200px-Unofficial_JavaScript_logo_2.svg.png" /></li>
                <li><Badge image="https://rapidapi.com/wp-content/uploads/2021/07/Brand-blue-horizontal.svg" /></li>
                <li><Badge image="https://mms.businesswire.com/media/20210623005228/en/887051/23/vercel-logotype-dark.jpg" /></li>
            </ul>
            <p className={classes.paragraph}>
                This project was created with React/Nextjs and utilizes the Bayut real estate API.
            </p>


            <h5>How it works</h5>
            <p className={classes.paragraph}>

                The app pulls real estate listing data from the Bayut API and organizes them by rent/buy type. The user can view and search the listings based on criteria.
            </p>
            <h5>The Objective:</h5>
            <p className={classes.paragraph} >
                The goal of this project was to get more familiar with Nextjs and using APIs. The project also utilizes the Chakra UI framework.
            </p>
            <div className={classes.actionDiv} >
                <p>Read more on <a target="_blank" href="https://github.com/NathanielPownell/real-estate-app#readme">Github <FontAwesomeIcon icon={faGithub} /></a></p>
                <p className={classes.run}> <a target="_blank" href="https://real-estate-app-five.vercel.app/"> Run App &nbsp; <FontAwesomeIcon icon={faPlay} /></a></p>
            </div>

        </ProjectModal>
    )
}

export default Estatesio
