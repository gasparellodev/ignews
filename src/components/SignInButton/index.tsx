import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

import styles from './style.module.scss';


export function SignInButton() {

    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#04d361"/>
            Vinicius Gasparello
            <FiX color="#737380" className={styles.closeIcon} />
        </button>

    ) : (

        <button
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#eba417"/>
            Sign In With Github
        </button>
    )
}