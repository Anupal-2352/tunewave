import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { albumsData, assets, songsData } from "../assets/assets";
import Navbar from "./Navbar";
import { Clock, Play, Heart, MoreHorizontal } from "lucide-react";

const SongRow = ({ item, index, albumName, onPlay }) => (
  <div 
    onClick={() => onPlay(item.id)} 
    className="group grid grid-cols-3 sm:grid-cols-4 gap-2 p-3 items-center text-gray-400 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <div className="w-5 text-center group-hover:hidden">{index + 1}</div>
      <Play size={16} className="w-5 hidden group-hover:block text-white" />
      <div className="relative flex-shrink-0">
        <img 
          className="w-10 h-10 rounded shadow-md" 
          src={item.image} 
          alt={item.name} 
        />
        <div className="absolute inset-0 bg-black/20 rounded opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div>
        <div className="text-white text-sm font-medium truncate max-w-[200px]">
          {item.name}
        </div>
        <div className="text-sm truncate max-w-[200px]">
          {item.desc}
        </div>
      </div>
    </div>
    <p className="text-sm truncate">{albumName}</p>
    <p className="text-sm hidden sm:block">5 days ago</p>
    <p className="text-sm text-center">{item.duration}</p>
  </div>
);

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <div className="min-h-full">
      <Navbar />
      
      {/* Album Header */}
      <div className="relative mt-6 px-6">
        <div className="flex flex-col md:flex-row md:items-end gap-8 backdrop-blur-xl bg-white/5 p-6 rounded-xl">
          <div className="relative group">
            <img 
              className="w-48 h-48 rounded-lg shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-300" 
              src={albumData.image} 
              alt={albumData.name} 
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <Play size={24} className="text-white ml-1" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-300">Playlist</span>
            <h2 className="text-5xl font-bold mb-2 md:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {albumData.name}
            </h2>
            <h4 className="text-lg text-gray-300">{albumData.desc}</h4>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <img className="w-6 h-6" src={assets.spotify_logo} alt="Spotify" />
              <span className="font-semibold">Spotify</span>
              <span className="font-semibold">1,232,123 saves</span>
              <span className="text-gray-400">50 songs, about 2hr 30min</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-6 mb-8">
          <button className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 hover:bg-blue-600 transition-all">
            <Play size={28} className="text-white ml-1" />
          </button>
          <button className="w-10 h-10 text-gray-400 hover:text-white transition-colors">
            <Heart />
          </button>
          <button className="w-10 h-10 text-gray-400 hover:text-white transition-colors">
            <MoreHorizontal />
          </button>
        </div>

        {/* Songs List */}
        <div className="mt-6">
          {/* Header */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 px-4 py-2 text-gray-400 text-sm border-b border-gray-700/50">
            <div className="flex items-center gap-4">
              <span className="w-5 text-center">#</span>
              <span>Title</span>
            </div>
            <span>Album</span>
            <span className="hidden sm:block">Date Added</span>
            <div className="flex justify-center">
              <Clock size={16} />
            </div>
          </div>

          {/* Songs */}
          <div className="mt-2 space-y-1">
            {songsData.map((item, index) => (
              <SongRow 
                key={item.id}
                item={item}
                index={index}
                albumName={albumData.name}
                onPlay={playWithId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAlbum;