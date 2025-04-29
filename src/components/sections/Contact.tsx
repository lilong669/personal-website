'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

/**
 * 联系表单组件
 * 提供与用户联系的表单界面
 */
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f5f5f7] dark:bg-[#151515]">
      <div className="max-w-[580px] mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-16 text-center">
          联系我
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#1d1d1f] rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#86868b] text-sm mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#f5f5f7] dark:bg-[#2d2d2d] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#0066cc] dark:focus:ring-[#2997ff] transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#86868b] text-sm mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#f5f5f7] dark:bg-[#2d2d2d] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#0066cc] dark:focus:ring-[#2997ff] transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#86868b] text-sm mb-2">
                  消息
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#f5f5f7] dark:bg-[#2d2d2d] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#0066cc] dark:focus:ring-[#2997ff] transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0066cc] dark:bg-[#2997ff] text-white py-3 px-6 rounded-lg hover:bg-[#0055b3] dark:hover:bg-[#147ce5] transition-colors"
              >
                发送消息
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
