import Header from './Header'
import About from './About'
import Posts from './Posts'
import Contact from '../Contact'

export default function HomePage({ posts }) {
  return (
    <>
      <Header />
      <About />
      <Posts posts={posts} />
      <Contact />
    </>
  )
}
