'use client';

import SearchIcon from '@/assets/icons/search';
import React, { useState } from 'react';
import './SearchBar.scss';


interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch  }: SearchBarProps) => {
  const [query, setQuery] = useState('');



  const handleChange = (e: any) => {
    setQuery(e.target.value);
    console.log(query);
  };

  return (
 <>
   
    <div className="search-bar-container">
        <SearchIcon size={20} />
      <input 
         type="text" 
         className="search-bar" 
         placeholder="Search..." 
         onChange={handleChange} />
    </div>

 </>
  );
};

export default SearchBar;