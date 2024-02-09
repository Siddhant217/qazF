import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";

const Button = ({ setUpdateUI ,category}) => {
  const handleChange = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    formData.append("category", category);

    axios
      .post("https://backend3-ocka.onrender.com/api/save", formData)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <label className="button" htmlFor="file_picker">
      <AiFillPlusCircle id="addButton" />
      <input
        hidden
        type="file"
        name="file_picker"
        id="file_picker"
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
};

export default Button;

// button click gives normal 3 inputs

// import React, { useState } from "react";
// import { AiFillPlusCircle } from "react-icons/ai";
// import axios from "axios";


// const Button = ({ setUpdateUI, category }) => {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [photoFile, setPhotoFile] = useState(null);
//   const [details, setDetails] = useState("");
//   const [tags, setTags] = useState("");

//   const handleChange = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("photo", photoFile);
//     formData.append("category", category);
//     formData.append("details", details);
//     formData.append("tags", tags);

//     axios
//       .post("http://localhost:5000/api/save", formData)
//       .then((res) => {
//         console.log(res.data);
//         setUpdateUI(res.data._id);
//         setIsFormVisible(false); // Hide the form after successful submission
//       })
//       .catch((err) => console.log(err));
//   };

//   const toggleForm = () => {
//     setIsFormVisible(!isFormVisible);
//   };

//   return (
//     <div>
//       {isFormVisible ? (
//         <form onSubmit={handleChange} className="form">
//           <input
//             type="file"
//             name="file_picker"
//             onChange={(e) => setPhotoFile(e.target.files[0])}
//           />
//           <input
//             type="text"
//             placeholder="Details"
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Tags"
//             value={tags}
//             onChange={(e) => setTags(e.target.value)}
//           />
//           <button type="submit">Upload</button>
//         </form>
//       ) : (
//         <label className="button" htmlFor="file_picker">
//           <AiFillPlusCircle id="addButton" onClick={toggleForm} />
//         </label>
//       )}
//     </div>
//   );
// };

// export default Button;

