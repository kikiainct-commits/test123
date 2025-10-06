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

        {/* 测试图片上传组件 */}
        <div className="mb-12 p-8 border-2 border-dashed ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg">
          <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            📤 测试图片上传
          </h2>
          <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            点击下方按钮测试上传功能，图片将保存到 Supabase Storage
          </p>
          <ImageUpload />
        </div>
        
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
    </ClickSpark>
  );
}

export default Work;
