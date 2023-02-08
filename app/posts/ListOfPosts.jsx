import { LikeButton } from './LikeButton.jsx'
import Link from 'next/link'
const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}
export async function ListOfPosts () {
  const posts = await fetchPost()
  return (posts.map(post => (
    <article key={post.id}>
      <Link href='/post/[id]' as={`posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton />
      </Link>
    </article>
  ))

  )
}