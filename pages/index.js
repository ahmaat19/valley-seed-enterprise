import Head from 'next/head'
import { Header } from '../components/home'
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
      <Header />
    </div>
  )
}

export default Home
