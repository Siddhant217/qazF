import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route, Link,useLocation  } from 'react-router-dom';
import axios from 'axios';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WildLife from './components/WildLife';
import Nature from './components/Nature';
import Human from './components/Human';
import Footer from './components/Footer';
import UploadFrom from './components/UploadForm'

function App() {

  const [photos, setPhotos] = useState([]);
  // const [up, setUpdateUI] = useState("");

  const [click,setClick]=useState(false);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/get")
  //     .then((res) => {
  //       console.log(res.data);
  //       setPhotos(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // },[setup]);

    return (
    <Router>
      <Navbar style={{boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"}}/>
      <hr style={{color:"white"}}></hr>
        <div className="App">
          <div className="container">
            <div className='types'>
              <div>
                  <Link to="/wildLife" onClick={() => setClick(true)} style={{color:"black"}}  id="wildLifecss">wildLife</Link>
              </div>
              <div>
                  <Link to="/nature" onClick={() => setClick(true)} style={{color:"black"}} id="naturecss" >Nature</Link>
              </div>
              <div>
                  <Link to="/human" onClick={() => setClick(true)} style={{color:"black"}} id="humancss" >Human</Link>
              </div>
            </div>
          </div>
          
        <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/wildLife' element={< WildLife />}></Route>
                <Route exact path='/nature' element={< Nature />}></Route>
                <Route exact path='/human' element={< Human />}></Route>
                <Route exact path='/form' element={< UploadFrom />}></Route>
                
        </Routes>

        {/* {!click && <Grid photos={photos} />} */}
        </div>  
        <hr style={{color:"black"}}></hr>
        <Footer/>
    </Router>
);
}

  
export default App;