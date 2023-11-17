import React, { useState } from 'react';
import '../../index.css';




export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Can not be empty');
      return;
    }
    onSubmit(query);
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <button className="SearchForm-button" type="submit">
        Search
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};

// export class Searchbar extends React.Component {
//   state = {
//     query: '',
//   };

//   handleChange = e => this.setState({ query: e.target.value });

//   handleSubmit = e => {
//     e.preventDefault();
//     const { query } = this.state;
//     if (query.trim() === '') {
//       alert('Can not be empty');
//       return;
//     }
//     this.props.onSubmit(query);
//   };

//   render() {
//     const { query } = this.state;

//     return (
//       <form className="SearchForm" onSubmit={this.handleSubmit}>
//         <button className="SearchForm-button" type="submit">
//           Search
//         </button>

//         <input
//           className="SearchForm-input"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={query}
//           onChange={this.handleChange}
//         />
//       </form>
//     );
//   }
// }
