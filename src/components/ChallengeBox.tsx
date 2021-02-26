import { useContext, useState } from 'react';
import clsx from 'clsx';
import styles from '../styles/components/ChallengeBox.module.scss';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={clsx(styles.container, 'd-flex', 'flex-column')}>

            {activeChallenge ? (
                <div className={clsx(styles.containerActive, 'd-flex', 'flex-column')}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main className="flex-column-center">
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Icon" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={clsx(styles.actionFailed)}
                            onClick={handleChallengeFailed}
                        >Falhei</button>

                        <button
                            type="button"
                            className={clsx(styles.actionSucceeded)}
                            onClick={handleChallengeSucceeded}
                        >completei</button>
                    </footer>
                </div>
            ) : (
                    <div className={clsx(styles.containerNotActive, 'd-flex', 'flex-column')}>
                        <strong>Finalize um ciclo para receber novos desafios.</strong>
                        <p className={clsx('d-flex', 'flex-column')}>
                            <img src="icons/level-up.svg" alt="Level up" />
                            {'Avance de level completando desafios.'}
                        </p>
                    </div>
                )}

        </div >
    )
}