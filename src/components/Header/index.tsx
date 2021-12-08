import { SignInButton } from '../SignInButton';
import styles from './style.module.scss'

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img className={styles.logo} src="/images/logo.svg" alt="ignews"/>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    );
}