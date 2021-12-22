import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCodepen, faDribbble } from '@fortawesome/free-brands-svg-icons'
import './Contact.css';

import ReactTooltip from 'react-tooltip';

// import classes from './Contact.module.css';

const Contact = () => {


    let datatip = "Copied! ✅"

    function copyToClipboard() {
        navigator.clipboard.writeText("nathanieldpownell@gmail.com");
    }
    return (
        <div className='content'>
            <h3 className="heading">
                Let's get in touch.
            </h3>
            <div onClick={copyToClipboard} className="contactmethods">
                <ul className="sociconsul">
                    <li>
                        <a target="_blank" href="https://github.com/NathanielPownell">
                            Github <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/nathaniel-pownell-3a510a1bb/">
                            LinkedIn <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://codepen.io/nathanielpownell">
                            Codepen <FontAwesomeIcon icon={faCodepen} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://dribbble.com/nathanielpownell">
                            Dribbble <FontAwesomeIcon icon={faDribbble} />
                        </a>
                    </li>

                </ul>

                <div onClick={copyToClipboard} className="email" data-for='copyEmail' data-effect="solid" data-event="click focus" data-tip={datatip}>
                    <ReactTooltip id='copyEmail' globalEventOff='click' />
                    <p className="emailp">
                        nathanieldpownell@gmail.com
                    </p>
                    <FontAwesomeIcon className="fa" icon={faCopy} />

                </div>
            </div>
        </div>

    );
};

export default Contact;