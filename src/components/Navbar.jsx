import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download, Crown, Bell, User } from "lucide-react";

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

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
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

      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <NavButton variant="active">
          All
        </NavButton>
        <NavButton variant="default">
          Music
        </NavButton>
        <NavButton variant="default">
          Podcasts
        </NavButton>
        <NavButton variant="default">
          Live Events
        </NavButton>
        <NavButton variant="default">
          Made For You
        </NavButton>
      </div>

      {/* Bottom Border Gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
    </div>
  );
};

export default Navbar;