import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col border-r-2 border-white/80">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">TuneWave</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <button onClick={() => navigate('/')} className="flex items-center gap-3 hover:text-blue-400">
                <img className="w-5" src={assets.home_icon} alt="" />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 hover:text-blue-400">
                <img className="w-5" src={assets.search_icon} alt="" />
                <span>Search</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 hover:text-blue-400">
                <img className="w-5" src={assets.stack_icon} alt="" />
                <span>Your Library</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <button className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          New Playlist
        </button>
      </div>
    </div>
  );
};

export default Sidebar;