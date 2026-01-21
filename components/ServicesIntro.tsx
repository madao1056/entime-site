import { motion } from 'framer-motion';
import { Building2, User } from 'lucide-react';
import { useState } from 'react';
import { CorporateTraining } from './CorporateTraining';
import { IndividualCourse } from './IndividualCourse';

export function ServicesIntro() {
  const [activeTab, setActiveTab] = useState<'corporate' | 'individual'>('corporate');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            サービス紹介
          </h2>
          
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab('corporate')}
              className={`flex items-center gap-3 px-6 py-4 flex-1 w-full sm:w-auto transition-all ${
                activeTab === 'corporate'
                  ? 'bg-blue-600 text-white border-2 border-blue-600 shadow-lg rounded-t-lg sm:rounded-tl-lg sm:rounded-tr-none'
                  : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-gray-400 rounded-t-lg sm:rounded-tl-lg sm:rounded-tr-none'
              }`}
            >
              <Building2 size={24} className={`flex-shrink-0 ${activeTab === 'corporate' ? 'text-white' : 'text-blue-600'}`} />
              <span className="font-medium">法人向けDX研修</span>
            </button>
            
            <button
              onClick={() => setActiveTab('individual')}
              className={`flex items-center gap-3 px-6 py-4 flex-1 w-full sm:w-auto transition-all ${
                activeTab === 'individual'
                  ? 'bg-purple-600 text-white border-2 border-purple-600 shadow-lg rounded-t-lg sm:rounded-tr-lg sm:rounded-tl-none'
                  : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-gray-400 rounded-t-lg sm:rounded-tr-lg sm:rounded-tl-none'
              }`}
            >
              <User size={24} className={`flex-shrink-0 ${activeTab === 'individual' ? 'text-white' : 'text-purple-600'}`} />
              <span className="font-medium">個人・小規模事業者向けDX講座</span>
            </button>
          </div>
        </motion.div>

        {/* Tab Content with Frame */}
        <div className="mt-0 bg-gray-50 border-2 border-gray-200 rounded-xl p-8 shadow-inner">
          {activeTab === 'corporate' && <CorporateTraining />}
          {activeTab === 'individual' && <IndividualCourse />}
        </div>
      </div>
    </section>
  );
}