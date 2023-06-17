import React from 'react';
import { useState } from "react";
import axios from "axios";

const Article = (my_article) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEdiContent] = useState("");

  const dateFormater = (the_date) => {
    let newDate = new Date(the_date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    return newDate;
  }

  const handleEdit = () => {
    
    const data = {
      author: my_article.my_article.author,
      content: editContent ? editContent : my_article.my_article.content,
      date: my_article.my_article.date,
      updatedDate: Date.now(),
    };

    axios
      .put("http://localhost:3004/articles/" + my_article.my_article.id, data)
      .then(() => { setIsEditing(false) })
    ;
  }

  const handleDelete = () => {
    axios.delete("http://localhost:3004/articles/" + my_article.my_article.id);
    window.location.reload();
  }

  return (
    <div className="article" style={{background: isEditing ? "#f3feff" : "white"}}>
      <div className="card-header">
        <h3>{my_article.my_article.author}</h3>
        <em>Poste le {dateFormater(my_article.my_article.date)}</em>
      </div>
      {
        isEditing ? (
          <textarea
            defaultValue={editContent ? editContent : my_article.my_article.content}
            autoFocus
            onChange={(e) => setEdiContent(e.target.value)}></textarea>
          ) : (
            <p>
              {editContent ? editContent : my_article.my_article.content}
            </p>
          )
      }
      
      <div className="btn-container">
        {
          isEditing ? (
            <button
              onClick={() => handleEdit()}>
              Valider
            </button>
          ) :
            (
              <button onClick={() => setIsEditing(true)}>Editer</button>
            )
        }
        <button onClick={() => {
          if (window.confirm("Voulez-vous vraiment supprimer cet article?")) {
            handleDelete();
          }
        }}>Supprimer</button>
      </div>
    </div>
  );
};

export default Article;