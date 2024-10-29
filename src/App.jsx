import { useContext, useState } from "react"
import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import { PlayerContext } from "./context/PlayerContext"
import { songsData, albumsData } from "./assets/assets"

const App = () => {
  const {audioRef, track} = useContext(PlayerContext)
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (query) => {
    const filteredSongs = songsData.filter(song => 
      song.name.toLowerCase().includes(query.toLowerCase()) ||
      song.desc.toLowerCase().includes(query.toLowerCase())
    ).map(song => ({ ...song, type: 'song' }));

    const filteredAlbums = albumsData.filter(album => 
      album.name.toLowerCase().includes(query.toLowerCase()) ||
      album.desc.toLowerCase().includes(query.toLowerCase())
    ).map(album => ({ ...album, type: 'album' }));

    setSearchResults([...filteredSongs, ...filteredAlbums]);
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow flex bg-gray-900 overflow-hidden">
        <Sidebar/>
        <Display onSearch={handleSearch} searchResults={searchResults} />
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload="auto" />
    </div>
  )
}

export default App