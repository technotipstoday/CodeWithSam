// pages/index.js
import NavBar from '../components/NavBar';
import '../app/globals.css'
export async function getStaticProps() {
    // Fetch data at build time
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
  }
  
  export default function Home({ posts }) {
    return (
      <>
      <NavBar />
      <div className="flex justify-center items-center h-screen bg-orange-500">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-6">My Blog</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="list-disc list-inside text-white mb-2">
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </>
    )
  }
  