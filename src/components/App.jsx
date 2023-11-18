import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Grid } from 'react-loader-spinner';
import { fetchImages } from '../fetchimages';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const fetchImagesData = async () => {
      if (!query) {
        return;
      }

      try {
        setIsLoading(true);
        const imageData = await fetchImages({
          query,
          page,
        });

        if (imageData !== null) {
          setImages(prevImages => [...prevImages, ...imageData.hits]);
          setHasMore(page < Math.ceil(imageData.total / 12));
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImagesData();
  }, [query, page]);

  const handleSubmit = newQuery => {
   

    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleImageClick = image => {
    setShowModal(true);
    setLargeImageURL(image.largeImageURL);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery
        images={images}
        onImageClick={handleImageClick}
        isLoading={isLoading}
      />
      {isLoading && (
        <Grid
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}

      {hasMore && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={handleModalClose} />
      )}
    </div>
  );
};

