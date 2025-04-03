'use client'; // Required for animations

import { motion } from 'framer-motion';
import { FiDownload, FiCheck, FiZap, FiLock, FiStar } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Home() {
  const [downloadCount, setDownloadCount] = useState<number>(1284);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* App Header */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center"
        >
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              transition: { 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }
            }}
            className="w-20 h-20 bg-white rounded-xl shadow-md mx-auto flex items-center justify-center mb-4"
          >
            <span className="text-3xl">📝</span>
          </motion.div>
          
          <h1 className="text-2xl font-bold text-white">Notely</h1>
          <div className="flex justify-center items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="text-yellow-300 fill-current mx-0.5" />
            ))}
            <span className="text-white ml-2">4.9 (1.2K)</span>
          </div>
        </motion.div>

        {/* App Content */}
        <div className="p-6">
          {/* Features */}
          <motion.div 
            variants={containerVariants}
            className="space-y-3 mb-6"
          >
            {[
              { icon: <FiZap className="text-blue-500" />, text: "Lightning-fast voice transcription" },
              { icon: <FiLock className="text-green-500" />, text: "End-to-end encrypted notes" },
              { icon: <FiCheck className="text-purple-500" />, text: "Cross-device sync" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="flex items-center"
              >
                <span className="mr-3">{feature.icon}</span>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Screenshot Carousel */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <h2 className="font-medium mb-3 text-gray-700">Preview</h2>
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {['#FF6B6B', '#4ECDC4', '#45B7D1'].map((color, i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 w-40 h-64 rounded-lg shadow-md"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6"
          >
            <a 
              href="apk-download-page\base.apk" 
              download
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-colors shadow-lg"
            >
              <FiDownload className="mr-2" />
              Download APK (15MB)
            </a>
          </motion.div>

          {/* Download Counter */}
          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-gray-500 mt-4"
          >
            {downloadCount.toLocaleString()} downloads this week
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}