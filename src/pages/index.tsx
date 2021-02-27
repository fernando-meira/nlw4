import { Profile, ExperienceBar, CompletedChallenges } from '../components';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />

          <CompletedChallenges />
        </div>

        <div>

        </div>
      </section>
    </div>
  )
}
