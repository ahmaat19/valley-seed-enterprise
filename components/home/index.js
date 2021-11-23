import Header from './Header'
import About from './About'
import Posts from './Posts'

export default function HomePage({ posts }) {
  return (
    <>
      <Header />
      <About />
      <Posts posts={posts} />
    </>
  )
}
