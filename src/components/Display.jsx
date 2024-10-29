import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import SearchResults from "./SearchResults";
import { albumsData } from "../assets/assets";
import Navbar from "./Navbar";
import YourLibrary from './YourLibrary';

const Display = ({ onSearch, searchResults }) => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)]?.bgColor || "#f3f4f6";
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    displayRef.current.style.transition = "background 0.5s ease-in-out";

    const gradient = isAlbum
      ? `linear-gradient(180deg, 
          ${bgColor} 0%, 
          ${bgColor}cc 30%, 
          #1a1a1a 100%)`
      : `linear-gradient(to bottom, 
          rgba(243, 244, 246, 0.8) 0%, 
          rgba(243, 244, 246, 1) 100%)`;

    displayRef.current.style.background = gradient;
  }, [isAlbum, bgColor]);

  const handleSearch = (query) => {
    onSearch(query);
    setShowSearchResults(query.length > 0);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowSearchResults(false);
  };

  return (
    <div ref={displayRef} className="flex-grow overflow-auto bg-gray-100 text-gray-900 mb-20">
      <Navbar onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      {showSearchResults && searchResults.length > 0 && (
        <SearchResults results={searchResults} />
      )}
      {!showSearchResults && (
        <Routes>
          <Route path="/" element={<DisplayHome activeCategory={activeCategory} />} />
          <Route path="/album/:id" element={<DisplayAlbum />} />
          <Route path="/search" element={<SearchResults results={searchResults} />} />
          <Route path="/library" element={<YourLibrary />} />
        </Routes>
      )}
    </div>
  );
}

export default Display;