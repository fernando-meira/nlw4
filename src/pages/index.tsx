import Head from 'next/head';

import { CountdownProvider } from '../hooks/CountdownContext';
import styles from '../styles/pages/Home.module.css';
import { Profile, Countdown, ExperienceBar, ChallengeBox, CompletedChallenges } from '../components';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />

            <CompletedChallenges />

            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
