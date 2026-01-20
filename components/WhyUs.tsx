import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export function WhyUs() {
  const comparisons = [
    {
      aspect: '手間',
      others: '入力して、さらに報告する二度手間',
      us: '入力すれば自動で通知、二度手間なし',
    },
    {
      aspect: 'コスト',
      others: '高額な月額課金',
      us: '無料〜低コストから始められる設計',
    },
    {
      aspect: '言葉',
      others: '専門用語が多く、現場が置いていかれる',
      us: '専門用語を使わず、現場の言葉で絆走',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            なぜEntimeが選ばれるのか
          </h2>
        </motion.div>

        {/* Comparison Cards */}
        <div className="max-w-5xl mx-auto space-y-6 mb-12">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - Others */}
                <div className="p-6 bg-red-50 border-r border-gray-200">
                  <div className="text-xs font-bold text-red-700 mb-3 uppercase tracking-wide">
                    よくあるDX支援
                  </div>
                  <div className="flex items-start gap-3">
                    <X size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item.others}</p>
                  </div>
                </div>

                {/* Right - Us */}
                <div className="p-6 bg-green-50">
                  <div className="text-xs font-bold text-green-700 mb-3 uppercase tracking-wide">
                    Entime
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-900 font-medium">{item.us}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-blue-600 text-white rounded-xl px-8 py-6 max-w-3xl">
            <p className="text-xl font-medium leading-relaxed">
              DXは、<br />
              「すごいシステム」より<br />
              「使い続けられる仕組み」が成果を生みます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}