// src/components/YourLibrary.jsx
import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import SongItem from './SongItem';

const YourLibrary = () => {
    const { library } = useContext(PlayerContext);

    return (
        <div className="min-h-screen max-w-8xl mx-auto p-4 bg-gray-900">
            <h2 className="text-2xl font-bold text-white mb-4">Your Library</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {library.map((item) => (
                    <SongItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default YourLibrary;