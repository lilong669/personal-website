/**
 * 主题配置文件
 * 定义网站的主题颜色和样式变量
 */

export const theme = {
  colors: {
    // 浅色模式颜色
    light: {
      background: '#ffffff',
      text: '#1d1d1f',
      secondaryText: '#86868b',
      primary: '#0066cc',
      primaryHover: '#0055b3',
      card: '#f5f5f7',
      cardDark: '#e8e8ed',
      border: 'rgba(134, 134, 139, 0.1)'
    },
    // 深色模式颜色
    dark: {
      background: '#000000',
      text: '#f5f5f7',
      secondaryText: '#86868b',
      primary: '#2997ff',
      primaryHover: '#147ce5',
      card: '#1d1d1f',
      cardDark: '#2d2d2d',
      border: 'rgba(134, 134, 139, 0.145)'
    }
  },
  // 字体设置
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  // 间距设置
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  // 圆角设置
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px'
  },
  // 过渡效果
  transitions: {
    default: 'all 0.2s ease-in-out',
    slow: 'all 0.3s ease-in-out',
    fast: 'all 0.1s ease-in-out'
  }
};
