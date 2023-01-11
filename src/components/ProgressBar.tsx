import styles from './ProgressBar.module.css'

export function ProgressBar() {
    return (
        <div className={styles.timerContainer}>
            <div className={styles.progressBar}><span></span></div>
            <div className={styles.progressTimer}>
                <span>03:20</span>
                <span>00:12</span>
            </div>
        </div>
    )
}