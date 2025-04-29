/**
 * 动画效果工具
 * 定义网站中使用的各种动画效果
 */

// 淡入上升动画
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// 淡入动画
export const fadeInOnly = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// 从左侧滑入
export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

// 从右侧滑入
export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};
