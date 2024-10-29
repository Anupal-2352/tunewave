import React from 'react';
import SongItem from './SongItem';
import AlbumItem from './AlbumItem';

const SearchResults = ({ results }) => {
  return (
    <div className="p-6 bg-gray-900 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Search Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((item) => (
          item.type === 'song' ? (
            <SongItem key={item.id} {...item} />
          ) : (
            <AlbumItem key={item.id} {...item} />
          )
        ))}
      </div>
    </div>
  );
};

export default SearchResults;