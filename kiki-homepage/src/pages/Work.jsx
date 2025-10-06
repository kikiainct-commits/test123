import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Work() {
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
        <h1 className={`text-6xl font-playfair font-normal mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>Work</h1>
        <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          This is the Work page. Here you can showcase your projects and portfolio.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Project 1</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Description of your first project...</p>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Project 2</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Description of your second project...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Work;
