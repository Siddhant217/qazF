import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Grid from './Grid';
function Home (){

    const [photos, setPhotos] = useState([]);
    const [updateUI, setUpdateUI] = useState("");
  
    // const [click,setClick]=useState(false);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/get")
        .then((res) => {
          console.log(res.data);
          setPhotos(res.data);
        })
        .catch((err) => console.log(err));
    },[updateUI]);
    return (
        <div>
            <h1>Welcome to the world of images!</h1>
            <Grid photos={photos} setUpdateUI={setUpdateUI}/>
        </div>
        
        )
}
  
export default Home;
 