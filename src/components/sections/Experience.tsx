'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

/**
 * 工作经历组件
 * 展示个人的职业经历和成就
 */
export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#f5f5f7] dark:bg-[#151515]">
      <div className="max-w-[980px] mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-16 text-center">
          工作经历
        </h2>
        <div className="space-y-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1d1d1f] rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold mb-2">
                首席架构师
              </h3>
              <p className="text-[#86868b] mb-6">
                科技有限公司 | 2020 - 至今
              </p>
              <ul className="space-y-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0066cc] dark:text-[#2997ff] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>领导团队完成多个大型系统的设计与开发</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0066cc] dark:text-[#2997ff] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>负责系统架构设计和性能优化</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0066cc] dark:text-[#2997ff] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>指导团队成员提升技术能力</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1d1d1f] rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold mb-2">
                高级软件工程师
              </h3>
              <p className="text-[#86868b] mb-6">
                知名互联网公司 | 2015 - 2020
              </p>
              <ul className="space-y-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0066cc] dark:text-[#2997ff] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>负责核心系统的设计与开发</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0066cc] dark:text-[#2997ff] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>主导多个重要项目的实施</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0066cc] dark:text-[#2997ff] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>参与技术规范的制定</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
