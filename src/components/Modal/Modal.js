import React, {useEffect} from 'react'; 
import '../../index.css';



export const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    const handleOverlayClick = e => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleOverlayClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleOverlayClick);
    };
  }, [onClose, largeImageURL]);

  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt="Large" />
      </div>
    </div>
  );
};


// export class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleOverlayClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL } = this.props;

//     return (
//       <div className="Overlay" onClick={this.handleOverlayClick}>
//         <div className="Modal">
//           <img src={largeImageURL} alt="Large" />
//         </div>
//       </div>
//     );
//   }
// }
