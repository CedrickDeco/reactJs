import React from 'react';

const WritePost = () => {
  return (
    <div className="writePost" >
      <div className="writeImage">
        <img src="./assets/img/card1.jpeg" alt="" />
      </div>
      <div className="writeForm">
        <div className="writeFormGroup">
          <label for="fileInput">
            <i className="writeIcon fi fi-br-plus-small"></i>
          </label>
          <input type="file" id='fileInput' />
          <input type="text" placeholder='Title' className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </div>
    </div>
  );
};

export default WritePost;