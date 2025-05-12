import React from 'react';
import { LayoutGrid, Upload, Settings, LogOut, Map, BarChart } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  currentPage: 'projects' | 'upload' | 'Map' | 'chart';
  setCurrentPage: (page: 'projects' | 'upload') => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, onLogout }) => {
  const router = useRouter();

  return (
    <div className="relative w-64 bg-white border-r border-gray-200 min-h-screen p-4 ">
      <nav className="space-y-2">
        <button
          onClick={() => setCurrentPage('projects')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'projects' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <LayoutGrid size={20} />
          <span>All Projects</span>
        </button>

        <button
          onClick={() => setCurrentPage('upload')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'upload' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Upload size={20} />
          <span>Upload</span>
        </button>

        <button
          onClick={() => router.push('/map')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'Map' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Map size={20} />
          <span>View Map</span>
        </button>

        <button
          onClick={() => router.push('/chart')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
            currentPage === 'chart' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <BarChart size={20} />
          <span>View Chart</span>
        </button>
      </nav>

      <div className="absolute bottom-4 w-[calc(100%-2rem)] space-y-2">
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </button>

        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
