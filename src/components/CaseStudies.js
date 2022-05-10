import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import AlienImg from '../images/alienfront.jpg'
import SurveyImg from '../images/survheydd.jpg'
import RandomImg from '../images/randomuser_img.jpg'
import BankImg from '../images/bankio.png'
import StoicImg from '../images/stoicthumb.png'
import BlogImg from '../images/blogimage.png'
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
    const JobBoardImg = 'https://github.com/NathanielPownell/job-board/raw/main/static/images/2homepage.png'

    const toggleModalOff = () => {
        project = null;
    }

    return (
        <animated.div id="projects" style={styles} className={classes.contentdiv}>

            <div className={classes.upper} >
                <h2>Projects </h2>
            </div>
            <div className={classes.projects}>

                <Card image={SurveyImg} title="Survey CRUD App" desc="MERN CRUD application - Create and edit surveys." toInfoPath="/projects/survhey" toExternalPath="https://survhey-app.herokuapp.com/dashboard" techs={['MERN', 'Redux', 'Cloudinary']} displayButtons={true} />                
                <Card image={JobBoardImg} title="Job Posting CRUD App" desc="It's kind of like Indeed." gitHubOnly={true} toInfoPath="https://github.com/NathanielPownell/job-board" toExternalPath="https://main.d3r7x3m8bhtzcp.amplifyapp.com/" techs={['Django', 'Tailwind']} displayButtons={false} />
                
                <Card image={RandomImg} title="Random Person Generator" desc="Django Rest API that returns JSON for a randomly generated person." toInfoPath="/projects/random" toExternalPath="https://main.d3r7x3m8bhtzcp.amplifyapp.com/" techs={['Django/DjangoREST', 'ReactJs']} displayButtons={true} />
                                
                {/* <Card image={StoicImg} title="Stoic Twitter" desc="Twitter-ish feed full of quotes from famous Stoic philosophers. Infinite scroll." techs={['Reactjs', 'React-Query']} toInfoPath="#projects" toExternalPath="https://main.d1znxmygxjy3vd.amplifyapp.com/" displayButtons={true}/> */}
                
                {/* <Card image={BlogImg} title="Personal Blog" desc="Personal blog created with Django and React. Includes Rich Text editor for creating and editing posts." techs={['Reactjs', 'Django']} toInfoPath="https://www.nathanielpownell.com/blog" toExternalPath="https://www.nathanielpownell.com/blog" displayButtons={true}/> */}
                <Card image={BankImg} title="Bank Dashboard" desc="View balances and recent transactions in this sleek bank dashboard." techs={['ReactJs', 'React-Spring', 'Recharts']} toInfoPath="/projects/bankio" toExternalPath="https://master.drlf9f7ncyp3w.amplifyapp.com/" displayButtons={true}/>

                {/* <Card image={AlienImg} title="Web3 NFT Site" desc="View NFT Collection data from opensea.io." techs={['Reactjs']} toInfoPath="/projects/alienswap" toExternalPath="https://main.d1ygngt526fn5m.amplifyapp.com/" displayButtons={true} /> */}
                
                {/* <Card image={EstateioImg} title="Real Estate App" desc="View and search real estate listings." techs={['Reactjs', 'Nextjs']} toInfoPath="/projects/estatesio" toExternalPath="https://real-estate-app-five.vercel.app/" displayButtons={true}/> */}

            </div>
            <div className={classes.wideSection}>
                {/* <div className={classes.wideCard}>
                    <a href="/projects/portfolio">
                        Check out the breakdown of this portfolio website!
                        &nbsp;
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div> */}
            </div>
        </animated.div>
    );
};

export default CaseStudies;