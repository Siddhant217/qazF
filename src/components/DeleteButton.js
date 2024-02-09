import React from 'react';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';

const DeleteButton = ({ photoId, setUpdateUI }) => {
  const handleChange = () => {
    axios.delete(`http://localhost:5000/api/delete/${photoId}`)
      .then(() => {
        console.log("Photo deleted successfully");
        const change=photoId+"a";
        
        setUpdateUI(change); // Trigger a UI update to refresh the photo list
      })
      .catch((err) => {
        console.error("Error deleting photo:", err);
      });
  };

  return (
    <div id='deleteButtonIcon'>
    {/* <button className="imagebutton" onClick={() => handleChange()}>Delete</button> */}
    <MdDelete className="deleteIcon"  onClick={() => handleChange()}/>
    </div>
  );
};

export default DeleteButton;
