import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import { sortByDate } from '../utils'
import HomePage from '../components/home'

function Home({ posts }) {
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
      <HomePage posts={posts} />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
