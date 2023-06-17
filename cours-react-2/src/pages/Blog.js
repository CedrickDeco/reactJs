import React, { useState, useEffect } from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import axios from "axios";
import Article from '../components/Article';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  
  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setBlogData(res.data))
  };
  useEffect(() => getData(),  [])
  
  const handleSubmit = e => {
    e.preventDefault()

    if (content.length < 140) {
      setError(true)
    } else {
      axios.post("http://localhost:3004/articles", {
        author,
        content,
        date: Date.now()
      })
      setError(false);
      setAuthor("");
      setContent("");
      getData();
    }
  }
  const onChangeContent = e => {
    setContent(e.target.value)
  }
  const onChangeAuthor = e => {
    setAuthor(e.target.value)
  }

  return (
    <div className='blog-container'>
      <Logo />
      <Navigation />

      <form onSubmit={e => handleSubmit(e)}>
        <input type='text'
          placeholder='Nom'
          onChange={onChangeAuthor}
          value={author}
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }} placeholder='Message'
          onChange={onChangeContent}
          value={content}
        />
        {error && <p>Ecrire au moins 140 caracteres</p>}
        <input type='submit' value='Envoyer' />
      </form>
      <ul>
        {
          blogData
            .sort((a,b) => b.date - a.date)
            .map((article) => (
            <Article key={article.id} my_article={article} />
          ))
        }
      </ul>
    </div>
  )
}

export default Blog
