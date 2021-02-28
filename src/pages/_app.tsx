
import GlobalStyle from '../themes/globalStyles';
import { ChallengesProvider } from '../hooks/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </>
  )
}

export default MyApp
