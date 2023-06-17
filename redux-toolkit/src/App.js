import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { useDispatch, useSelector } from "react-redux";
import { setPicturesData } from "./feature/pictures.slice";

const App = () => {
  const dispatch = useDispatch() // le useDispatch() sert à déclencger les actions(déclencher l'objet d reducer)
  const picsData = useSelector((state) => state.pictures.pictures) // le useSelector() permet d'aller prendre la data qui se trouve dans le store

  const getPictures = () => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPicturesData(res.data)));
  }
  useEffect(() => {
    getPictures();
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form myPictures = {getPictures} />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
