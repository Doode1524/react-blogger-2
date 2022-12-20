import React from 'react'
import './blogs-styles.css'

const Blog = ({data}) => {

  return (
    <div className="blog-card">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <button>Read More</button>
    </div>
  )
}

export default Blog