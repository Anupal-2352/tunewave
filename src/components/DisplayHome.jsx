import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { TrendingUp, Disc } from "lucide-react";

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500">
      <Icon size={24} />
    </div>
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title === "Featured Charts" ? "Top albums this week" : "Fresh hits updated daily"}
      </p>
    </div>
  </div>
);

const DisplayHome = () => {
  return (
    <div className="min-h-scree bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-12 max-w-7xl">
        {/* Featured Charts Section */}
        <section className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <SectionHeader icon={Disc} title="Featured Charts" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {albumsData.map((item, index) => (
              <div 
                key={index}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <AlbumItem {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Today's Hits Section */}
        <section className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <SectionHeader icon={TrendingUp} title="Today's Biggest Hits" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {songsData.map((item, index) => (
              <div 
                key={index} 
                className="transform hover:scale-105 transition-transform duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeIn 0.5s ease-out forwards'
                }}
              >
                <SongItem {...item} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Keyframes for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DisplayHome; 