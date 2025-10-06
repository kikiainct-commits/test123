import { createClient } from '@supabase/supabase-js'

// 从环境变量读取 Supabase 配置
// Vite 项目使用 VITE_ 前缀，通过 import.meta.env 访问
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 验证环境变量是否存在
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('缺少 Supabase 环境变量！请检查 .env.local 文件。')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
