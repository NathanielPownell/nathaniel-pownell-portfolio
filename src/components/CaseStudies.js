import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import AlienImg from '../images/alienfront.jpg'
import InvstrImg from '../images/invstrmain.jpg'
import { Link } from 'react-router-dom'
import EstateioImg from '../images/estatesfront.jpg'

import Card from './ui/Card';

import classes from './CaseStudies.module.css'
import ProjectModal from './ProjectModal';
import Alienswap from './Alienswap';
import Invstr from './Invstr'

const CaseStudies = () => {
    const [project, projectHandler] = useState('');

    const toggleModalOff = () => {
        project = null;
    }

    return (
        <div className={classes.contentdiv}>

            <div className={classes.upper} >
                <h2>Case Studies </h2>
            </div>
            <div className={classes.projects}>
                
                <Card image={AlienImg} title="Web3 NFT Site" desc="View NFT Collection data from opensea.io." techs={['Reactjs']} toPath="/projects/alienswap" />
                
                <Card image={InvstrImg} title="Stock Watchlist App" desc="User-based app to add and edit stock watchlist." techs={['Django']} toPath="/projects/invstr"/>
                
                <Card image={EstateioImg} title="Real Estate App" desc="View and search real estate listings." techs={['Reactjs'], ['Nextjs']} toPath="/projects/estatesio" />

            </div>
            <div className={classes.wideSection}>
                <div className={classes.wideCard}>
                    <a href="/projects/portfolio">
                        Check out the breakdown of this portfolio website!
                        &nbsp;
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;