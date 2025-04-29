'use client';

// 导入组件
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

/**
 * 主页组件
 * 组织网站的整体结构和布局
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
