import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)]?.bgColor || "#f3f4f6";
  
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

  return (
    <div ref={displayRef} className="flex-grow p-4 overflow-auto bg-gray-100 text-gray-900 mb-20">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;