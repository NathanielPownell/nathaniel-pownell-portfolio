import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";


import classes from './Card.module.css'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]

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

                    <ul>
                        {technologies}
                    </ul>


                    <a href={props.toPath} className={classes.view}>
                        View &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                    </a>

                </div>
            </animated.div>
        </div>
    );
};

export default Card;