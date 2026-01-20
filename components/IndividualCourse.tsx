import { motion } from 'framer-motion';
import { User, Briefcase, UserCheck } from 'lucide-react';

export function IndividualCourse() {
  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-8 sm:p-10 border-2 border-purple-200"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              まずはDXに触れ、<br />
              自分の価値を高めたい方へ。
            </h3>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              <User size={16} />
              <span className="text-sm font-medium">個人・小規模事業者向けDX講座</span>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              この講座は、
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <Briefcase size={18} className="text-purple-600 flex-shrink-0" />
                個人事業主
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <User size={18} className="text-purple-600 flex-shrink-0" />
                フリーランス
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <UserCheck size={18} className="text-purple-600 flex-shrink-0" />
                秘書・マーケターなど支援者
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              向けの入口プログラムです。
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <p className="text-gray-800 leading-relaxed">
                クライアントワークに<br />
                「業務改善」「自動化」という<br />
                付加価値を持たせたい方に選ばれています。
              </p>
            </div>

            {/* Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <span className="font-bold">※注意：</span>
                法人向けDX研修とは内容・支援範囲が異なります。
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={scrollToCTA}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors"
              >
                個人向け講座の詳細を見る
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}