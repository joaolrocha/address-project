import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './_searchTextField.scss';

const SearchTextField: React.FC = () => {
  return (
    <div className="search-container">
      <SearchIcon className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search the address here"
      />
    </div>
  );
}

export default SearchTextField;
