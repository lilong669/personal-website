'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

/**
 * 英雄区域组件
 * 显示个人简介和主要信息
 */
export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            李龙
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-[#86868b] mb-8">
            高级软件工程师
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            专注于全栈开发和系统架构设计，拥有10年以上的软件开发经验。
          </p>
          <a 
            href="#experience" 
            className="inline-block bg-[#0066cc] dark:bg-[#2997ff] text-white py-3 px-8 rounded-full text-sm font-medium hover:bg-[#0055b3] dark:hover:bg-[#147ce5] transition-colors"
          >
            了解更多
          </a>
        </motion.div>
      </div>
    </section>
  );
}
