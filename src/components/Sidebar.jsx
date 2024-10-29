import { Link, useNavigate, useLocation } from "react-router-dom";
import { Home, Library } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-48 h-full bg-gray-900 text-white hidden flex-col border-r-2 border-white/80 md:flex">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">TuneWave</h1>
        <nav>
          <div className="flex flex-col gap-y-6">
            <Link to={'/'}>
              <button
                onClick={() => navigate('/')}
                className={`flex items-center gap-3 ${
                  location.pathname === '/' ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>
            </Link>
            <Link to={'/library'}>
              <button
                className={`flex items-center gap-3 ${
                  location.pathname === '/library' ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                <Library className="w-5 h-5" />
                <span>Your Library</span>
              </button>
            </Link>
          </div>
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
