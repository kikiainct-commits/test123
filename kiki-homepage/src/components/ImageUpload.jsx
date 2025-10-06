import { useState } from 'react';
import { supabase } from '../config/supabase';
import { useTheme } from '../context/ThemeContext';

function ImageUpload() {
  const { isDarkMode } = useTheme();
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  // 处理文件上传
  const handleFileUpload = async (event) => {
    try {
      setUploading(true);
      setMessage('');

      const file = event.target.files[0];
      
      // 检查是否选择了文件
      if (!file) {
        return;
      }

      // 检查文件类型（只允许图片）
      if (!file.type.startsWith('image/')) {
        setMessage('请选择图片文件！');
        setMessageType('error');
        setUploading(false);
        return;
      }

      // 检查文件大小（限制 5MB）
      if (file.size > 5 * 1024 * 1024) {
        setMessage('图片大小不能超过 5MB！');
        setMessageType('error');
        setUploading(false);
        return;
      }

      // 生成唯一文件名（时间戳 + 原文件名）
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      // 上传文件到 Supabase Storage
      const { data, error } = await supabase.storage
        .from('images')
        .upload(fileName, file);

      if (error) {
        throw error;
      }

      // 上传成功
      setMessage('图片上传成功！✓');
      setMessageType('success');
      
      // 3秒后清除消息
      setTimeout(() => {
        setMessage('');
      }, 3000);

      // 清空文件选择器
      event.target.value = '';

    } catch (error) {
      console.error('上传错误:', error);
      setMessage('上传失败：' + error.message);
      setMessageType('error');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="inline-block">
      {/* 上传按钮 */}
      <label
        className={`
          inline-block px-6 py-3 
          border-2 
          ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}
          font-semibold text-sm
          cursor-pointer
          transition-all duration-300
          ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        {uploading ? '上传中...' : '上传图片'}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          disabled={uploading}
          className="hidden"
        />
      </label>

      {/* 消息提示 */}
      {message && (
        <div
          className={`
            mt-4 px-4 py-2 text-sm font-semibold
            ${messageType === 'success' 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'
            }
          `}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default ImageUpload;

