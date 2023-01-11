import {Control} from './components/Control'
import {MusicInfo} from './components/MusicInfo'
import {ProgressBar} from './components/ProgressBar'
import styles from './App.module.css'

export function App() {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.jukeboxContainer}>
          <MusicInfo direction='column'/>
          <Control/>
          <ProgressBar/>
        </div>
        <div>
          <div className={styles.jukeboxContainer}>
            <MusicInfo direction='row'/>
            <Control/>
            <ProgressBar/>
          </div>
          
          <div className={styles.jukeboxContainer}>
            <MusicInfo direction='row'/>
            <Control/>
          </div>
        </div> 
      </section>
    </main>
  )
}