import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ClickSpark from '../components/ClickSpark';

function Contact() {
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

      <main className="max-w-2xl mx-auto">
        <h1 className={`text-6xl font-playfair font-normal mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact</h1>
        <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Get in touch with me through the following channels:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Email</h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>your.email@example.com</p>
          </div>
          <div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Location</h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Putuo, Shanghai</p>
          </div>
          <div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Social Media</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>• LinkedIn</p>
              <p>• Twitter</p>
              <p>• GitHub</p>
            </div>
          </div>
        </div>
      </main>
      </div>
    </ClickSpark>
  );
}

export default Contact;
