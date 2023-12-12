import Link from 'next/link'
import React from 'react'

const Article = ({ the_articles }) => {
  return (
    <Link href=''>
      <div className='article'>
        <h3>
          {the_articles.title} ➡️
				</h3>
        <p>
          {the_articles.body}
        </p>
      </div>
    </Link>
  )
}

export default Article
