'use client';

/**
 * 页面头部导航组件
 * 提供网站的主要导航功能
 */
export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-[#86868b]/10 z-50">
      <div className="max-w-[980px] mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">李龙</h1>
        <ul className="flex space-x-8">
          <li><a href="#about" className="text-sm font-medium hover:text-[#0066cc] dark:hover:text-[#2997ff] transition-colors">关于我</a></li>
          <li><a href="#experience" className="text-sm font-medium hover:text-[#0066cc] dark:hover:text-[#2997ff] transition-colors">工作经历</a></li>
          <li><a href="#projects" className="text-sm font-medium hover:text-[#0066cc] dark:hover:text-[#2997ff] transition-colors">项目经验</a></li>
          <li><a href="#contact" className="text-sm font-medium hover:text-[#0066cc] dark:hover:text-[#2997ff] transition-colors">联系我</a></li>
        </ul>
      </div>
    </nav>
  );
}
