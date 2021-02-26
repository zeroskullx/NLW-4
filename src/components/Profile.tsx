import { useContext } from 'react';
import clsx from 'clsx';
import styles from '../styles/components/Profile.module.scss'
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={clsx(styles.container, 'd-flex')}>
            <img src="https://github.com/zeroskullx.png" alt="perfil" />
            <div>
                <strong>Zeroskullx</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}