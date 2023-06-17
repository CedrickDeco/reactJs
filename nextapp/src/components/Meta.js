import Head from 'next/head'
import React from 'react'

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>
        {title}
      </title>
      <meta name='description' content={description} />
    </Head>
  )
}
Meta.defaultProps = {
  title: 'Le blog des dev pour les passionnés',
  description: 'Apprendre et comprendre apprendre le javaScript  reactJs...'
}
export default Meta
