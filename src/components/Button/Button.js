import React from 'react';
import '../../index.css';

export const Button = ({ onClick }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      Load More
    </button>
  );
};
