import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ClickSpark from '../components/ClickSpark';
import Weather from '../components/Weather';

function Home() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <ClickSpark 
      sparkColor={isDarkMode ? '#ffffff' : '#000000'}
      sparkSize={10}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
      easing="ease-out"
    >
      <div className={`min-h-screen w-full ${isDarkMode ? 'bg-black text-white' : 'bg-[#f0f0f0] text-black'} font-inter relative transition-colors duration-300`}>
      {/* Top bar with four sections */}
      <header className="w-full flex flex-col sm:flex-row justify-between items-start px-8 sm:px-12 py-10 gap-4 sm:gap-0">
        {/* 左上：名字与身份 */}
        <div className="flex flex-col leading-[1.1] space-y-0.5">
          <span className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-[13px]`}>
            Ruoxuan:
          </span>
          <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-[13px]`}>
            Independent Consultant & Creative Learner
          </span>
        </div>

        {/* 中左：天气信息 */}
        <div className="flex flex-col leading-[1.1] space-y-0.5">
          <span className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-[13px]`}>
            Weather:
          </span>
          <Weather />
        </div>

        {/* 中右：导航 */}
        <nav className="flex flex-col leading-[1.1] space-y-0.5">
          <span className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-[13px]`}>
            Navigation:
          </span>
          <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-[13px] space-x-2`}>
            <Link to="/" className={`${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'} transition-colors`}>Index</Link>
            <span>,</span>
            <Link to="/work" className={`${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'} transition-colors`}>About</Link>
            <span>,</span>
            <Link to="/archive" className={`${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'} transition-colors`}>Archive</Link>
            <span>,</span>
            <Link to="/contact" className={`${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'} transition-colors`}>Contact</Link>
          </div>
        </nav>

        {/* 右上：主题提示 */}
        <div className="flex flex-col leading-[1.1] space-y-0.5">
          <span className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-[13px]`}>
            Theme:
          </span>
          <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-[13px] space-x-2`}>
            <button 
              onClick={() => setIsDarkMode(false)}
              className={`${!isDarkMode ? 'underline' : ''} ${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'} transition-colors cursor-pointer`}
            >
              Light Mode
            </button>
            <span>,</span>
            <button 
              onClick={() => setIsDarkMode(true)}
              className={`${isDarkMode ? 'underline' : ''} ${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'} transition-colors cursor-pointer`}
            >
              Dark Mode
            </button>
          </div>
        </div>
      </header>

      {/* Main content area - centered profile image */}
      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop" 
          alt="Ruoxuan QI profile" 
          className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-none shadow-lg" 
        />
      </main>

      {/* Bottom large name */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <h1 className={`text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-playfair font-normal text-center ${isDarkMode ? 'text-white' : 'text-black'} leading-[0.85] tracking-tight whitespace-nowrap`}>
          Ruoxuan QI
        </h1>
      </div>

      {/* Copyright */}
      <footer className={`absolute bottom-4 left-8 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        © 2025 Ruoxuan QI
      </footer>
      </div>
    </ClickSpark>
  );
}

export default Home;
