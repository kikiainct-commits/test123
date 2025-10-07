import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Weather() {
  const { isDarkMode } = useTheme();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 获取天气数据
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const apiUrl = import.meta.env.VITE_WEATHER_API_URL;
        
        // 验证环境变量
        if (!apiKey || !apiUrl) {
          throw new Error('Weather API 配置缺失');
        }

        const response = await fetch(
          `${apiUrl}/current.json?key=${apiKey}&q=Shanghai&aqi=no`
        );

        if (!response.ok) {
          throw new Error('获取天气数据失败');
        }

        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        console.error('Weather API Error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
    
    // 每10分钟更新一次天气数据
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  // 加载中状态
  if (loading) {
    return (
      <div className={`font-semibold text-[13px] ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} animate-pulse`}>
        Loading...
      </div>
    );
  }

  // 错误状态
  if (error) {
    return (
      <div className={`font-semibold text-[13px] ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
        Weather unavailable
      </div>
    );
  }

  // 无数据
  if (!weather) {
    return null;
  }

  const { location, current } = weather;

  return (
    <div className="flex items-center gap-2">
      {/* 天气图标 */}
      <img 
        src={`https:${current.condition.icon}`}
        alt={current.condition.text}
        className="w-5 h-5 sm:w-6 sm:h-6"
        loading="lazy"
      />
      
      {/* 天气信息 */}
      <div className="flex flex-col leading-[1.1]">
        <span className={`font-semibold text-[13px] ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {location.name}, {current.temp_c}°C
        </span>
        <span className={`text-[11px] ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {current.condition.text}
        </span>
      </div>
    </div>
  );
}

export default Weather;
