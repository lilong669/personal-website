'use client';

/**
 * 页面底部组件
 * 显示版权信息和其他底部内容
 */
export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-black py-8 border-t border-[#86868b]/10">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-[#86868b] text-xs">
          <p className="mb-2">© 2025 李龙. 保留所有权利。</p>
          <p>设计灵感来自 Apple</p>
        </div>
      </div>
    </footer>
  );
}
