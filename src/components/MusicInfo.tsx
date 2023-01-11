import styles from './MusicInfo.module.css'

interface MusicInfoProps {
    direction: 'row' | 'column'
}

export function MusicInfo({direction}:MusicInfoProps) {
    return (
        <div className={`${styles.container} ${direction==='column' ? styles.containerColumn : styles.containerRow}`}>
            <img className={styles.cover} src="/assets/cover.png" alt="cover album"/>
            <div className={styles.musicInfo}>
                <strong>Acorda Devinho</strong>
                <span>Banda Rocketseat</span>
            </div>
        </div>
    )
}