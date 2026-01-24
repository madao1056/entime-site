import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroRefined() {
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
        <section className="relative pt-32 pb-32 sm:pt-40 sm:pb-40 overflow-hidden bg-white">
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
                style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Main Headline with Gradient */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tightest text-transparent bg-clip-text bg-gradient-to-r from-[#0056D2] to-[#1A2B4C]">
                        数字が見えると<br />
                        会社の未来も見えてくる。
                    </h1>

                    {/* Sub Headline */}
                    <p className="text-xl sm:text-2xl font-medium text-[#64748B] mb-10 leading-[1.8] max-w-2xl mx-auto">
                        中小企業のための、<br className="hidden sm:block" />
                        業務と数字をつなぐDX支援
                    </p>

                    {/* USP List */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {[
                            '「判断」に直結する数字',
                            '「二度手間」ゼロの仕組み',
                            '現場が自走する「絆走」'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-lg text-[#1A2B4C] font-semibold">
                                <div className="w-1.5 h-1.5 bg-[#0056D2] rounded-full"></div>
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* Supplementary Info */}
                    <div className="mb-10 flex justify-center">
                        <div className="bg-[#EBF3FF] border border-[#BFDBFE] rounded-full px-6 py-2.5 inline-flex items-center gap-6">
                            <span className="text-sm font-bold text-[#0056D2] whitespace-nowrap">助成金活用で最大75%補助</span>
                            <div className="w-px h-4 bg-[#BFDBFE]"></div>
                            <span className="text-sm font-medium text-[#1A2B4C] whitespace-nowrap">令和8年度まで対応可能</span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.button
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={scrollToApproach}
                            className="bg-[#0056D2] text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                        >
                            DXの全体像を見る
                            <ArrowRight size={22} />
                        </motion.button>
                        <motion.button
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={scrollToCTA}
                            className="border-2 border-[#64748B] text-[#333333] px-10 py-5 rounded-full font-bold text-lg transition-all"
                        >
                            資料で整理する
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
