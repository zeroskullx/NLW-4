import clsx from 'clsx'
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.scss';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={clsx(styles.experienceBar, 'd-flex')}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentNextLevel}%`, }}></div>
                <span
                    className={styles.currentExperience}
                    style={{ left: `${percentNextLevel}%` }}
                >{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}   