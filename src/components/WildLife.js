import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Grid from './Grid';
import Button from './Button'

const WildLife = () => {

  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");
  

  useEffect(() => {
    axios
      .get("https://backend3-ocka.onrender.com/api/get/wildLife")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, [updateUI]);

  return (
    <div>
        <h1 style={{textAlign: "center", color:"black"}}>WildLife Photographs</h1>
        <Button setUpdateUI={setUpdateUI} category="WildLife"/> 
        {/* <Grid photos={photos} /> */}
        <Grid photos={photos}  setUpdateUI={setUpdateUI}/>
        
    </div>
  )
}

export default WildLife
