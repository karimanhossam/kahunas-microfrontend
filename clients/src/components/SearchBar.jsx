import { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (

    <SearchInput
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder={placeholder}
      className='search-input'
    />
  );
};

const SearchInput = styled.input`
    width: 100%;
    padding: 8px 16px;
    font-family: "Poppins";
    font-size: 12px;
    border: 1px solid #DADEE7;
    border-radius: 4px;
    color: #9095A0;

    &:hover {
      border-color: #3e97ff;
    }

    &:focus-visible {
      outline-color: #3e97ff;
    }

`

export default SearchBar;
