import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.scss';

import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {

    const { minutes, seconds, hasFinished, isActive, handleCountdown } = useContext(CountdownContext);

    const [minLeft, minRight] = String(minutes).padStart(2, '0').split('');
    const [secLeft, secRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={clsx(styles.container, 'd-flex')}>
                <div>
                    <span>{minLeft}</span>
                    <span>{minRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secLeft}</span>
                    <span>{secRight}</span>
                </div>
            </div>
            {hasFinished ? (<button
                disabled
                className={clsx(styles.countdownButton)}>
                Ciclo encerrado
            </button>) : (
                    <button
                        type="button"
                        className={clsx(styles.countdownButton, isActive ? styles.countdownButtonActived : '')}
                        onClick={handleCountdown}
                    >
                        {isActive ? <>Abandonar ciclo</> : <>Iniciar um ciclo</>}
                    </button>
                )}
        </div>
    )
}   