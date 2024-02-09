import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Grid from './Grid';
import Button from './Button'

const Nature = ({wtoFetch}) => {

  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");
  

  useEffect(() => {
    axios
      .get("https://backend3-ocka.onrender.com/api/get/nature")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, [updateUI]);

  return (
    <div>
        <h1 style={{textAlign: "center", color:"black"}}>Nature Photographs</h1>
        <Grid photos={photos} setUpdateUI={setUpdateUI} />
        <Button setUpdateUI={setUpdateUI} category="Nature"/> 
    </div>
  )
}

export default Nature
