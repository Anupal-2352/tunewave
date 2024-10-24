import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2,
  Volume1,
  VolumeX
} from "lucide-react";

const Player = () => {
  const { 
    seekBar, 
    seekBg, 
    playStatus, 
    play, 
    pause, 
    track, 
    time, 
    previous, 
    next, 
    seekSong 
  } = useContext(PlayerContext);

  return (
    <div className="h-24 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700 flex justify-between items-center text-white px-6 fixed bottom-0 left-0 right-0">
      {/* Track Info */}
      <div className="flex items-center gap-4 w-1/4">
        <div className="relative group">
          <img 
            className="w-16 h-16 rounded-lg shadow-lg transition-transform group-hover:scale-105" 
            src={track.image} 
            alt="song_cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg" />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-sm truncate hover:text-blue-400 transition-colors cursor-pointer">
            {track.name}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {track.desc}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-3 w-2/4">
        <div className="flex items-center gap-8">
          <button 
            onClick={previous}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <SkipBack size={20} />
          </button>
          {playStatus ? (
            <button 
              onClick={pause}
              className="w-10 h-10 flex items-center justify-center bg-white text-gray-900 rounded-full hover:scale-105 transition-transform"
            >
              <Pause size={20} />
            </button>
          ) : (
            <button 
              onClick={play}
              className="w-10 h-10 flex items-center justify-center bg-white text-gray-900 rounded-full hover:scale-105 transition-transform"
            >
              <Play size={20} />
            </button>
          )}
          <button 
            onClick={next}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <SkipForward size={20} />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full max-w-xl">
          <span className="text-xs text-gray-400 w-12 text-right">
            {time.currentTime.minute}:{String(time.currentTime.second).padStart(2, '0')}
          </span>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="flex-grow h-1 bg-gray-600 rounded-full cursor-pointer group relative"
          >
            <div
              ref={seekBar}
              className="absolute h-full bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"
              style={{ width: `${(time.currentTime.second / time.totalTime.second) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="text-xs text-gray-400 w-12">
            {time.totalTime.minute}:{String(time.totalTime.second).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-4 w-1/4 justify-end">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Volume2 size={20} />
        </button>
        <input 
          type="range" 
          className="w-24 h-1 accent-blue-500 bg-gray-600 rounded-full cursor-pointer"
          min="0" 
          max="100" 
        />
      </div>
    </div>
  );
};

export default Player;