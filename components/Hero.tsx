import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToApproach = () => {
    const element = document.getElementById('approach');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              数字が見えると<br />
              <span className="text-blue-600">会社の未来も見えてくる。</span>
            </h1>

            {/* Sub Headline */}
            <p className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">
              中小企業のための、<br />
              業務と数字をつなぐDX支援
            </p>

            {/* USP List */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-base sm:text-lg text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                生きた数字になるDX支援
              </li>
              <li className="flex items-center gap-3 text-base sm:text-lg text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                業務効率化を実現する伴走型
              </li>
              <li className="flex items-center gap-3 text-base sm:text-lg text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                現場起点の業務改善
              </li>
            </ul>

            {/* Supplementary Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-8 inline-block">
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 助成金活用で最大75%補助</li>
                <li>• 令和8年度まで対応可能</li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToApproach}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                DXの全体像を見る
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToCTA}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                資料で整理する
              </button>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODMxNTEzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="データ可視化"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}