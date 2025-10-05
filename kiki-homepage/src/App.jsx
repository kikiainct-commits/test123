function App() {
  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] text-black font-inter relative">
      {/* Top bar with four sections */}
      <header className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-8 py-6 text-xs sm:text-sm font-bold space-y-2 sm:space-y-0">
        <div className="w-full sm:w-auto text-left">
          <span className="text-black">Kiki: Designer</span>
        </div>
        <div className="w-full sm:w-auto text-left sm:text-center">
          <span className="text-black">Location: Taipei, Taiwan</span>
        </div>
        <div className="w-full sm:w-auto text-left sm:text-center">
          <span className="text-black">Navigation: Index, Work, Archive, Contact</span>
        </div>
        <div className="w-full sm:w-auto text-left sm:text-right">
          <span className="text-black">Theme: Light Mode, Dark Mode</span>
        </div>
      </header>

      {/* Main content area - centered profile image */}
      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/profile.jpg" 
          alt="Kiki profile" 
          className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-none shadow-lg" 
        />
      </main>

      {/* Bottom large name */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair text-center text-black leading-none">
          Kiki
        </h1>
      </div>

      {/* Copyright */}
      <footer className="absolute bottom-4 left-8 text-xs text-gray-600">
        © 2025 Kiki
      </footer>
    </div>
  );
}

export default App;