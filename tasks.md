# Tasks - Kiki Homepage 2025

## Phase 0: 初始化

### T0.1 创建项目结构
- 打开终端，运行以下命令：  
  ```bash
  npm create vite@latest kiki-homepage -- --template react
  cd kiki-homepage
  npm install
  ```
- 启动开发服务器验证项目是否正常：  
  ```bash
  npm run dev
  ```

验收：
- [ ] 项目成功启动并显示 React 欢迎页面  
- [ ] 控制台无报错信息  

---

### T0.2 安装 Tailwind CSS
- 在项目根目录运行以下命令：  
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- 修改 `tailwind.config.js`：  
  ```js
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  ```
- 在 `src/index.css` 中添加：  
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

验收：
- [ ] Tailwind 样式生效（删除默认内容后能使用 `bg-red-200` 测试）  
- [ ] 终端无编译错误  

---

## Phase 1: 页面基础结构

### T1.1 清理默认模板
- 删除 `src/assets` 中默认图片  
- 清空 `App.jsx` 并重新创建基本结构：  
  ```jsx
  function App() {
    return (
      <div className="min-h-screen bg-[#f5f5f5] text-[#111] flex flex-col justify-between items-center font-inter">
        <header className="w-full flex justify-between p-6 text-sm uppercase tracking-wide">
          <div>Kiki</div>
          <div>Designer / Based in Taipei</div>
        </header>
        <main className="flex flex-col items-center">
          <img src="/profile.jpg" alt="profile" className="w-48 h-48 rounded-full object-cover mb-6" />
          <h1 className="text-4xl font-playfair">Kiki</h1>
        </main>
        <footer className="p-6 text-xs opacity-60">© 2025 Kiki</footer>
      </div>
    );
  }
  export default App;
  ```

验收：
- [ ] 页面仅显示 Header、Main（含照片和名字）、Footer  
- [ ] 无多余的默认样式  

---

### T1.2 引入自定义字体
- 在 `index.html` 中引入：  
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
  ```
- 在 `tailwind.config.js` 中添加字体设置：  
  ```js
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  }
  ```

验收：
- [ ] 页面字体已生效（Inter + Playfair）  
- [ ] 样式在手机与桌面端均协调  

---

## Phase 2: 响应式布局优化

### T2.1 调整自适应排版
- 在 `App.jsx` 中为 Header 和 Main 区域添加响应式类：  
  ```jsx
  <header className="w-full flex flex-col sm:flex-row justify-between p-6 text-sm">
  ...
  <img src="/profile.jpg" className="w-32 h-32 sm:w-48 sm:h-48" />
  <h1 className="text-3xl sm:text-5xl font-playfair">Kiki</h1>
  ```

验收：
- [ ] 页面在手机、平板、桌面端均无错位  
- [ ] 图片与标题随屏幕比例自动调整  

---

## Phase 3: 样式与美化

### T3.1 微调间距与留白
- 在 `App.jsx` 中添加更多留白：  
  ```jsx
  <main className="flex flex-col items-center mt-20 sm:mt-32 space-y-6">
  ```
- 调整 Footer：  
  ```jsx
  <footer className="p-6 text-xs text-center text-gray-500">© 2025 Kiki</footer>
  ```

验收：
- [ ] 页面视觉居中，结构清晰  
- [ ] 留白和排版有呼吸感  

---

## Phase 4: 部署

### T4.1 Vercel 部署
- 初始化 Git 并推送至 GitHub：  
  ```bash
  git init
  git add .
  git commit -m "initial commit"
  git branch -M main
  git remote add origin https://github.com/<你的用户名>/kiki-homepage.git
  git push -u origin main
  ```
- 登录 [Vercel](https://vercel.com)，点击 **“New Project” → Import GitHub Repository**  
- 构建设置：  
  - Framework: `Vite`
  - Build command: `npm run build`
  - Output directory: `dist`

验收：
- [ ] 部署成功，可通过 Vercel 域名访问  
- [ ] 页面加载时间 < 2 秒  
- [ ] 所有元素显示正常  
