import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Archive() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-black text-white' : 'bg-[#f0f0f0] text-black'} font-inter p-8 transition-colors duration-300`}>
      <header className="mb-12">
        <nav className="text-sm font-semibold">
          <Link to="/" className={`${isDarkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'} transition-colors`}>
            ← Back to Home
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto">
        <h1 className={`text-6xl font-playfair font-normal mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>Archive</h1>
        <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          This is the Archive page. Here you can display your archived content and past work.
        </p>
        
        <div className="space-y-6">
          <div className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} pb-4`}>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>2024</h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Archive item 1</li>
              <li>• Archive item 2</li>
              <li>• Archive item 3</li>
            </ul>
          </div>
          <div className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} pb-4`}>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>2023</h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Archive item 4</li>
              <li>• Archive item 5</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Archive;
