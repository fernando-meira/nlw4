import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../hooks/CountdownContext';
import { ChallengesProvider } from '../hooks/ChallengesContext';
import { Profile, Countdown, ExperienceBar, ChallengeBox, CompletedChallenges } from '../components';

interface IHomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: IHomeProps) {

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}