import React from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="group relative rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <img 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
          src={image} 
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button Overlay */}
        <div className="absolute right-4 bottom-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-all">
            <Play size={20} className="text-white ml-1" />
          </button>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h3 className="font-bold text-white text-sm truncate mb-1 group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
        <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
          {desc}
        </p>
      </div>
      
      {/* Subtle Border Overlay */}
      <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none group-hover:border-white/10 transition-colors" />
    </div>
  );
};

export default AlbumItem;