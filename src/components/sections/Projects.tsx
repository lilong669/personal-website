'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

/**
 * 项目经验组件
 * 展示个人参与的重要项目
 */
export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-[980px] mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-16 text-center">
          项目经验
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-2xl overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                企业级电商平台
              </h3>
              <p className="text-[#86868b] mb-6">
                一个高性能的分布式电商平台，支持百万级并发访问
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e8e8ed] dark:bg-[#2d2d2d] rounded-full text-xs font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-[#e8e8ed] dark:bg-[#2d2d2d] rounded-full text-xs font-medium">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-[#e8e8ed] dark:bg-[#2d2d2d] rounded-full text-xs font-medium">
                  MongoDB
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-2xl overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                智能数据分析平台
              </h3>
              <p className="text-[#86868b] mb-6">
                基于大数据技术的智能分析平台，提供实时数据洞察和决策支持
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e8e8ed] dark:bg-[#2d2d2d] rounded-full text-xs font-medium">
                  Python
                </span>
                <span className="px-3 py-1 bg-[#e8e8ed] dark:bg-[#2d2d2d] rounded-full text-xs font-medium">
                  Spark
                </span>
                <span className="px-3 py-1 bg-[#e8e8ed] dark:bg-[#2d2d2d] rounded-full text-xs font-medium">
                  Hadoop
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
