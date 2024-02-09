// import React from "react";

// const Grid = ({ photos }) => {
//   return (
//     <div>
//       <div className="grid">
//         {photos.map(({ photo, _id }) => (
//           <div key={_id} className="grid__item">
//             <img className="images"
//               src={`http://localhost:5000/uploads/${photo}`}
//               alt="grid_image"
//             />
//             <div className="allbuttons">
//               <button className="imagebutton" style={{ color: 'pink' }}>Like</button>
//               <button className="imagebutton">Download</button>
//               <button className="delete-button" style={{ color: 'red' }}>Delete</button>
//           </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Grid;

import React ,{useState}from "react";
import axios from "axios";
import DeleteButton from './DeleteButton'
import DownloadButton from "./DownloadButton";
import LikeCount from "./LikeCount";

const Grid = ({ photos ,setUpdateUI}) => {
  return (
    <div>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            <img className="images"
              src={`https://backend3-ocka.onrender.com/uploads/${photo}`}
              alt="grid_image"
            />
            <div className="button-container">
              <LikeCount className="lc" setUpdateUI={setUpdateUI} photoId={_id}/>
              <DownloadButton className="db" photoId={_id}/>
              <DeleteButton  className="db1" setUpdateUI={setUpdateUI} photoId={_id}  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
