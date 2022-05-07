import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Button from './Button'
import classes from './Card.module.css'


const calc = (x, y) => [-(y - window.innerHeight / 9) / 50, (x - window.innerWidth / 2) / 30, 1.05]

const trans = (x, y, s) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = (props) => {

    const [propsMove, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const technologies = props.techs.map((tech) =>
        <li>{tech}</li>
    );
    return (
        <div className={classes.cardMain} >

            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: propsMove.xys.interpolate(trans) }}

                className={classes.card}>
                <img className={classes.projImg} src={props.image} />

                <div className={classes.info}>
                    <h2>
                        {props.title}
                    </h2>
                    <p>
                        {props.desc}
                    </p>

                    <ul className={classes.technologiesul}>
                        {technologies}
                    </ul>

                    {props.displayButtons &&
                        <div className={classes.actionContainer}>
                            <Button variety="secondary round" href={props.toInfoPath} className={classes.view}>
                                View Info
                            </Button>
                            <Button variety="regular round" target="_blank" href={props.toExternalPath} className={classes.view}>
                                <a className={classes.runLink} target="_blank" href={props.toExternalPath}>
                                    Run &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </Button>
                        </div>
                    }
                    {props.gitHubOnly &&
                        <div className={classes.actionContainer}>
                            <Button variety="secondary round" target="_blank" href={props.toInfoPath} className={classes.view}>
                                View On GitHub &nbsp;<FontAwesomeIcon icon={faGithub} />
                            </Button>
                        </div>
                    }

                </div>
            </animated.div>
        </div>
    );
};

export default Card;