import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ClickSpark from '../components/ClickSpark';
import ImageUpload from '../components/ImageUpload';

function Work() {
  const { isDarkMode } = useTheme();

  return (
    <ClickSpark 
      sparkColor={isDarkMode ? '#ffffff' : '#000000'}
      sparkSize={10}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
      easing="ease-out"
    >
      <div className={`min-h-screen w-full ${isDarkMode ? 'bg-black text-white' : 'bg-[#f0f0f0] text-black'} font-inter transition-colors duration-300`}>
        {/* Header with back link */}
        <header className="px-8 sm:px-12 py-10">
          <nav className="text-[13px] font-semibold">
            <Link 
              to="/" 
              className={`${isDarkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'} transition-colors`}
            >
              ← Back to Home
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="px-8 sm:px-12 pb-20">
          {/* Page title */}
          <h1 className={`text-6xl sm:text-7xl md:text-8xl font-playfair font-normal mb-16 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Work
          </h1>

          {/* Project 1 - 左侧图片 + 右侧文字（像参考图片那样） */}
          <div className="mb-32 flex flex-col lg:flex-row gap-0 lg:gap-0 items-stretch min-h-screen lg:min-h-0">
            {/* 左侧可上传图片区域 */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:pr-0">
              <div className={`w-full max-w-2xl aspect-[3/4] ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'} flex flex-col items-center justify-center rounded-none shadow-lg`}>
                <span className={`text-sm mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  上传项目图片
                </span>
                <ImageUpload />
              </div>
            </div>

            {/* 右侧文字 - 垂直居中 */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:pl-16 mt-8 lg:mt-0">
              <div className="max-w-xl">
                <h2 className={`text-4xl sm:text-5xl md:text-6xl font-playfair font-normal mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  A few fun facts about me:
                </h2>
                <div className={`text-base sm:text-lg leading-relaxed space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>I love to travel — and I've kept a 733-day streak on Duolingo.</p>
                  <p>Every morning starts with breakfast and a podcast.</p>
                  <p>I enjoy catching up with friends over a meal, a chat, or a game.</p>
                  <p>Lately, I've been learning Spanish and exploring Vibe Coding — and I truly enjoy using what I know to help others.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - 纯文字布局 */}
          <div className="mb-32 max-w-4xl">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-playfair font-normal mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Back Story
            </h2>
            <div className={`text-base sm:text-lg leading-relaxed space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                I didn't start where I am now. My story began in medicine — a year of hospital rotations and a month inside the operating room, watching life and precision unfold. It taught me calm, focus, and a lasting curiosity about how things work.
              </p>
              <p>
                After leaving the medical field, travel became my classroom. I entered the visa consulting world, helping over a thousand people apply for U.S. visas and hundreds more for Canada, the U.K., Australia, and beyond. Each story showed me how deeply people long to connect with the world.
              </p>
              <p>
                Three years later, curiosity led me to a new field — finance and tax consulting. With some prior knowledge, the transition felt more like evolution than a restart. Today, I truly enjoy working with both businesses and individuals, and it's rewarding to use what I know to make things a little easier for others.
              </p>
              <p>
                Outside of work, I love designing trips for family and friends — from taking my grandparents to Japan to backpacking across the U.K. with my sister. This year, I've said yes to new things: traveling with online friends, learning Spanish, and exploring Vibe Coding.
              </p>
              <p>
                Through every chapter, one thing stays the same — I keep learning, creating, and helping others find their own way forward.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className={`px-8 sm:px-12 py-6 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2025 Ruoxuan QI
        </footer>
      </div>
    </ClickSpark>
  );
}

export default Work;
