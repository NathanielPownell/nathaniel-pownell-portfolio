import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import classes from './Card.module.css'


const Card = (props) => {
    const technologies = props.techs.map((tech) =>
        <li>{tech}</li>
    );
    return (
        <div className={classes.card}>
            <img className={classes.projImg} src={props.image} />
            
            <div className={classes.info}>
            <h2>
                {props.title}
            </h2>
            <p>
                {props.desc}
            </p>

            <ul>
                {technologies}
            </ul>
            
            
            <a href={props.toPath} className={classes.view}>
                View &nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </a>
            
            </div>
        </div>
    );
};

export default Card;