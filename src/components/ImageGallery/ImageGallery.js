import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import '../../index.css';


export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    </div>
  );
};


// export class ImageGallery extends React.Component {
//   render() {
//     const { images, onImageClick } = this.props;

//     return (
//       <div>
//         <ul className="ImageGallery">
//           {images.map(image => (
//             <ImageGalleryItem
//               key={image.id}
//               image={image}
//               onImageClick={onImageClick}
//             />
//           ))}
//         </ul>
        
//       </div>
//     );
//   }
// }

