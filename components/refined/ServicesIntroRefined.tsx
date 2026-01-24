import { motion } from 'framer-motion';
import { Building2, User } from 'lucide-react';
import { useState } from 'react';
import { CorporateTraining } from '../CorporateTraining';
import { IndividualCourse } from '../IndividualCourse';

export function ServicesIntroRefined() {
    const [activeTab, setActiveTab] = useState<'corporate' | 'individual'>('corporate');

    return (
        <section className="py-32 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#333333] mb-8">サービス紹介</h2>

                    <div className="inline-flex p-2 bg-gray-200 rounded-2xl mb-12">
                        <button
                            onClick={() => setActiveTab('corporate')}
                            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'corporate'
                                ? 'bg-white text-[#0056D2] shadow-sm scale-105'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <Building2 size={24} />
                            法人向けDX研修
                        </button>
                        <button
                            onClick={() => setActiveTab('individual')}
                            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'individual'
                                ? 'bg-white text-[#0056D2] shadow-sm scale-105'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <User size={24} />
                            個人・小規模事業者向けDX講座
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-3xl p-12 shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-gray-100"
                >
                    {activeTab === 'corporate' ? <CorporateTraining /> : <IndividualCourse />}
                </motion.div>
            </div>
        </section>
    );
}
