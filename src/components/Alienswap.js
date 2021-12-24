import React from 'react'
import ProjectModal from './ProjectModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import classes from './Alienswap.module.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Badge from './ui/Badge'

const Alienswap = () => {
    return (
        <ProjectModal>
            <img className={classes.bannerImg} src="https://main.d1ygngt526fn5m.amplifyapp.com/static/media/alienswap.54619cd9f86834b66779.png" />
            <h1>ALIENSWAP WEB 3.0 NFT MARKETPLACE</h1>
            <ul className={classes.techs}>
                <li><Badge image="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" /></li>
                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" /></li>
                <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"/></li>
                <li><Badge image="https://www.feroot.com/wp-content/uploads/1200px-Unofficial_JavaScript_logo_2.svg.png" /></li>
                <li><Badge image="https://pbs.twimg.com/profile_images/1455238767321784325/Xi_Xwzwg_400x400.jpg" /></li>
                <li><Badge image="https://media-exp1.licdn.com/dms/image/C560BAQEMno40xMVwLw/company-logo_200_200/0/1625608739205?e=2159024400&v=beta&t=bdL51QX7UgqxLgPcq2zqw2QhAYBv_RUK00RCvbB2aPQ" /></li>
                <li><Badge image="https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x_400x400.png" /></li>
            </ul>
            <p className={classes.paragraph}>
                This project was created with Reactjs and thirdweb. It is a fairly simple web app; the main purpose is experimintation with Web3.0.
            </p>


                <h5>How It Works</h5>
            <p className={classes.paragraph}>

                The web app pulls NFT data from the opensea.io API and displays the NFTs in card components, allowing the user to view the NFT data.

                
            </p>
            <h5>The Objective:</h5>
            <p className={classes.paragraph} >
                The goal was to create a web app that used Web3 technologies, and pulls dynamic data from an external source.
            </p>
            <div className={classes.actionDiv} >
                <p>Read more on <a target="_blank" href="https://github.com/NathanielPownell/alienswap/blob/main/README.md">Github <FontAwesomeIcon icon={ faGithub } /></a></p>
                <p className={classes.run}> <a target="_blank" href="https://main.d1ygngt526fn5m.amplifyapp.com/"> Run App &nbsp; <FontAwesomeIcon icon={ faPlay } /></a></p>
            </div>

        </ProjectModal>
    )
}

export default Alienswap
