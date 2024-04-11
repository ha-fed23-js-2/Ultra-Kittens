import React, { useState } from 'react';
import { useImageStore } from '../Data/ImageStore.js'; 

const ImageUpload = ({ newPizzaData, setNewPizzaData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const setUploadedImage = useImageStore((state) => state.setUploadedImage); 

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setNewPizzaData({
      ...newPizzaData,
      image: URL.createObjectURL(imageFile) 
    });
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }

    setUploadedImage(imageFile);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <img
          className="pizzaImage"
          src={selectedImage}
          alt="Selected Image"
        />
      )}
    </div>
  );
};

export default ImageUpload;
