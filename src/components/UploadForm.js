import React, { useState } from "react";
import axios from "axios";

const UploadForm = ({ setUpdateUI, category, onClose }) => {
  const [photoFile, setPhotoFile] = useState(null);
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", photoFile);
    formData.append("category", category);
    formData.append("details", details);
    formData.append("tags", tags);

    axios
      .post("http://localhost:5000/api/save", formData)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
        onClose(); // Close the modal after successful submission
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          {/* Form fields go here */}
          <input
            type="file"
            name="file_picker"
            onChange={(e) => setPhotoFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
