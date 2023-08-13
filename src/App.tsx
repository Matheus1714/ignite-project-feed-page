import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { posts } from './database/data'

import style from './App.module.css'
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post
                post={post}
                key={post.id}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

