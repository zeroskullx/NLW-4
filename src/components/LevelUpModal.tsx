import clsx from 'clsx';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.scss'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);
    return (
        <div className={clsx(styles.overlay, "d-flex")}>
            <div className={clsx(styles.container)}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar" />
                </button>
            </div>
        </div>
    )
}