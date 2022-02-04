import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import AlienImg from '../images/alienfront.jpg'
import SurveyImg from '../images/survhey_img.jpg'
import RandomImg from '../images/randomuser_img.jpg'
import InvstrImg from '../images/invstrmain.jpg'
import { Link } from 'react-router-dom'
import EstateioImg from '../images/estatesfront.jpg'
import { useSpring, animated } from 'react-spring'

import Card from './ui/Card';

import classes from './CaseStudies.module.css'
import ProjectModal from './ProjectModal';
import Alienswap from './Alienswap';
import Invstr from './Invstr'
const CaseStudies = () => {
    const styles = useSpring({
        loop: false,
        from: { opacity: 0},
        to: { opacity: 1},
        config: {duration: 300},
      })
    const [project, projectHandler] = useState('');

    const toggleModalOff = () => {
        project = null;
    }

    return (
        <animated.div id="projects" style={styles} className={classes.contentdiv}>

            <div className={classes.upper} >
                <h2>Projects </h2>
            </div>
            <div className={classes.projects}>
                
                <Card image={SurveyImg} title="Survey Web App" desc="Create and edit a survey and generate a link to send to friends." toInfoPath="/projects/survhey" toExternalPath="https://master.d5e8q7ae5xwkg.amplifyapp.com/Home" techs={['Django/DjangoREST', 'ReactJs']} displayButtons={true} />
                
                <Card image={RandomImg} title="Random Person Generator" desc="Django Rest API that returns JSON for a randomly generated person." toInfoPath="/projects/random" toExternalPath="https://main.d3r7x3m8bhtzcp.amplifyapp.com/" techs={['Django/DjangoREST', 'ReactJs']} displayButtons={true} />
                
                <Card image={AlienImg} title="Web3 NFT Site" desc="View NFT Collection data from opensea.io." techs={['Reactjs']} toInfoPath="/projects/alienswap" toExternalPath="https://main.d1ygngt526fn5m.amplifyapp.com/" displayButtons={true} />
                
                <Card image={InvstrImg} title="Stock Watchlist App" desc="User-based app to add and edit stock watchlist." techs={['Django']} toInfoPath="/projects/invstr" toExternalPath="https://invstrapp.herokuapp.com/" displayButtons={true}/>
                
                <Card image={EstateioImg} title="Real Estate App" desc="View and search real estate listings." techs={['Reactjs'], ['Nextjs']} toInfoPath="/projects/estatesio" toExternalPath="https://real-estate-app-five.vercel.app/" displayButtons={true}/>

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
        </animated.div>
    );
};

export default CaseStudies;