import Head from 'next/head'
import HomePage from '../components/home'

function Home() {
  return (
    <div>
      <Head>
        <title>Valley Seed Enterprise</title>
        <meta
          property='og:title'
          content='Valley Seed Enterprise'
          key='title'
        />
      </Head>
      <HomePage />
    </div>
  )
}

export default Home
