import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Crown, Bell, User, Search } from "lucide-react";

const NavButton = ({ children, variant = "default", onClick }) => {
  const baseStyles = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2";
  const variants = {
    default: "bg-gray-800/50 hover:bg-gray-800/80 text-white",
    primary: "bg-white text-black hover:bg-gray-200",
    dark: "bg-black/90 text-white hover:bg-black",
    ghost: "hover:bg-white/10 text-white",
    active: "bg-white text-black"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

const Navbar = ({ onSearch, onCategoryChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="space-y-6 bg-gray-900 p-6">
      {/* Top Navigation */}
      <div className="flex justify-between items-center">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <NavButton
            variant="ghost"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </NavButton>
          <NavButton
            variant="ghost"
            onClick={() => navigate(1)}
          >
            <ArrowRight size={20} />
          </NavButton>
        </div>
        {/* Search Input */}
        <div className="flex-grow max-w-xl px-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              placeholder="Search for songs or albums..."
              className="w-full py-2 pl-10 pr-4 text-sm text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearchChange}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <NavButton variant="ghost">
            <Bell size={20} />
          </NavButton>

          {/* Premium */}
          <div className="hidden md:block">
            <NavButton variant="primary">
              <Crown size={18} />
              <span>Explore Premium</span>
            </NavButton>
          </div>
          {/* User Profile */}
          <div className="relative group">
            <button className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
              B
            </button>
            <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-900 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors flex items-center gap-2">
                <User size={16} />
                <span>Profile</span>
              </div>
              <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors flex items-center gap-2">
                <Crown size={16} />
                <span>Upgrade to Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters (Visible only on the home route) */}
      {location.pathname === '/' && (
        <div className="flex flex-wrap items-center gap-2">
          <NavButton
            variant={activeCategory === 'all' ? 'active' : 'default'}
            onClick={() => handleCategoryClick('all')}
          >
            All
          </NavButton>
          <NavButton
            variant={activeCategory === 'music' ? 'active' : 'default'}
            onClick={() => handleCategoryClick('music')}
          >
            Music
          </NavButton>
          <NavButton
            variant={activeCategory === 'albums' ? 'active' : 'default'}
            onClick={() => handleCategoryClick('albums')}
          >
            Albums
          </NavButton>
        </div>
      )}

      {/* Bottom Border Gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
    </div>
  );
};

export default Navbar;
