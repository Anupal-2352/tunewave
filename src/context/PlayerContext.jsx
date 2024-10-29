import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const [track, setTrack] = useState(songsData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [library, setLibrary] = useState([]);
  const audioRef = useRef(new Audio(track.file));
  const seekBg = useRef();
  const seekBar = useRef();

  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  }

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  }

  const playWithId = (id) => {
    const song = songsData.find(s => s.id === id);
    if (song) {
      setTrack(song);
      setIsPlaying(true);
    }
  };

  const addToLibrary = (song) => {
    if (!library.some(item => item.id === song.id)) {
      setLibrary([...library, song]);
    } else {
      setLibrary(library.filter(item => item.id !== song.id));
    }
  };

  const isInLibrary = (id) => {
    return library.some(item => item.id === id);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const seekSong = async (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)) * audioRef.current.duration;
  }

  useEffect(() => {
    setTimeout(() => {

      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        })
      }

    }, 1000);

  }, [audioRef])

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track, setTrack,
    playStatus, setPlayStatus,
    time, setTime,
    play, pause,
    playWithId,
    previous,
    next,
    seekSong,
    library,
    addToLibrary,
    isInLibrary
  };
  

  return (
    <PlayerContext.Provider value={contextValue}>
    {children}
  </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
