import Article from '@/components/Article'
import React from 'react'

const index = ({ theArticles }) => {
  return (
    <div>
      <h2>Blog</h2>
      <div className='article-list'>
        {theArticles.map(article =>
          <Article the_articles={article} key={article.id} />
				)}
      </div>
    </div>
  )
}

export default index

export const getStaticProps = async () => {
  const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=6'
	)
  const theArticles = await res.json()

  console.log(theArticles)
  return {
    props: {
      theArticles
    }
  }
}
