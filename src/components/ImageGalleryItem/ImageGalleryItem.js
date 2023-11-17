import React from 'react';
import '../../index.css';

export const ImageGalleryItem = ({ image, onImageClick }) => (
  <li
    className="ImageGalleryItem"
    onClick={() => onImageClick(image)}
  >
    <img
      className="ImageGalleryItem-image"
      src={image.webformatURL}
      alt={image.tags}
    />
  </li>
);
