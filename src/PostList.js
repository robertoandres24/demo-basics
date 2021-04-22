import React from 'react'

function PostList({posts}) {
  return (
    <div>
      <ul>
        {posts && posts.map(post => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </div>
  )
}

export default PostList
