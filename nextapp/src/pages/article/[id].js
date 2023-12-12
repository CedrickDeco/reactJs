import Link from 'next/link'
import React from 'react'

const article = ({ the_articles }) => {
  return (
    <div className='article-page'>
      <h3>
        {the_articles.title}
      </h3>
      <p />
      <Link href='/'>Revenir à l'accueil</Link>
    </div>
  )
}

export default article

export const getStaticProps = async context => {
  const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts/' + context.params.id
	)
  const article = await res.json()
  console.log(article)

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const articles = await res.json()
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))
  console.log(paths)

  return {
    paths,
    fallback: false
  }
}
