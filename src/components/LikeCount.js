// import React, { useState } from 'react'
// import {AiFillLike} from 'react-icons/ai'
// import axios from 'axios';

// const LikeCount = ({photoId, setUpdateUI}) => {
//     const [count,setCount]=useState(0);

//     const handleChange = () => {
//         axios.delete(`http://localhost:5000/api/delete/${photoId}`)
//           .then(() => {
//             console.log("Photo deleted successfully");
//             const change=photoId+"a";
//             // setCount()
//             setUpdateUI(change); // Trigger a UI update to refresh the photo list
//           })
//           .catch((err) => {
//             console.error("Error deleting photo:", err);
//           });
//       };

//   return (
//     <div>
//         <AiFillLike onClick={() => handleChange()} />
//         <span>{count}</span>
//     </div>
//   )
// }

// export default LikeCount

// LikeCount.js
// import React, { useState } from 'react';
// import { AiFillLike } from 'react-icons/ai';
// import axios from 'axios';

// const LikeCount = ({ photoId, setUpdateUI }) => {
//   const [count, setCount] = useState(0);

//   const handleLike = () => {
//     axios
//       .put(`http://localhost:5000/api/updateLike/${photoId}`)
//       .then(() => {
//         console.log('Photo like updated successfully');
//         setCount(count + 1); // Update the like count in the component state
//         setUpdateUI(new Date().getTime()); // Trigger UI update
//       })
//       .catch((err) => {
//         console.error('Error updating like:', err);
//       });
//   };

//   return (
//     <div >
//       <AiFillLike onClick={handleLike} />
//       <span>{count}</span>
//     </div>
//   );
// };

// export default LikeCount;  

import React, { useState, useEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import axios from 'axios';

const LikeCount = ({ photoId, setUpdateUI }) => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    axios
      .put(`https://backend3-ocka.onrender.com/api/updateLike/${photoId}`)
      .then(() => {
        console.log('Photo like updated successfully');
        setCount(count + 1); // Update the like count in the component state
        setUpdateUI(new Date().getTime()); // Trigger UI update
      })
      .catch((err) => {
        console.error('Error updating like:', err);
      });
  };
  
  useEffect(() => {
    // Fetch initial like count from backend when the component mounts
    axios
      .get(`https://backend3-ocka.onrender.com/api/getLikeCount/${photoId}`)
      .then((response) => {
        console.log('Photo fetch updated successfully');
        setCount(response.data.likeCount); // Set the initial like count
      })
      .catch((err) => {
        console.error('Error fetching like count:', err);
      });
  }, [photoId]); // Ensure the effect runs when photoId changes

  

  return (
    <div id="likeButtonr">
      <AiFillLike onClick={handleLike} id="likeButtonrIcon" />
      <span id="LikeCountr" style={{color: "white" }}>{count} </span>
    </div>
  );
};

export default LikeCount;
