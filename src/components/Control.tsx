import {Play, FastForward, Rewind} from 'phosphor-react'
import styles from './Control.module.css'

export function Control() {
    return (
        <div className={styles.musicControls}>
            <button  >
                <Rewind size={28} weight='fill'/>
            </button>
            <button>
                <Play size={28} weight='fill'/>
            </button>
            <button>
                <FastForward size={28} weight='fill'/>
            </button>
        </div>
    )
}