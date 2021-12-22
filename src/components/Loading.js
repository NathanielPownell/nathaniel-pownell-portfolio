import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons'

import classes from './Loading.module.css'


const Loading = () => {
    return (

        <FontAwesomeIcon className={classes.spinning} icon={faCircleNotch} />
    );
};

export default Loading;