import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import '../../index.css';


export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map((image, index) => (
          <ImageGalleryItem
            key={index}
            image={image}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    </div>
  );
};



