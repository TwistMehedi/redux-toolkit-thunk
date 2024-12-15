import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './features/posts/postSlice';

const App = () => {

  const {posts,isLoading,error} = useSelector((state)=>state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(fetchPosts())
  },[])

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {posts && posts.map(post=>{
        return (
          <p>{post.title}</p>
        )
      })}
    </div>
  )
}

export default App;
