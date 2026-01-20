import { motion } from 'framer-motion';
import { Building2, Clock, MessageSquare, TrendingUp, Sparkles } from 'lucide-react';

export function CorporateTraining() {
  const targetCompanies = [
    '社員5名以上の組織（助成金活用の対象となる規模）',
    '業務の判断が人に依存し、数字で判断できる状態になっていない',
    '情報や数字はあるが、必要なときにすぐ見える状態ではない',
    '現場と経営で、同じ情報をもとに判断できていない',
    '数字を確認しているが、次の行動や改善につながっていない',
  ];

  const afterStates = [
    {
      icon: Clock,
      text: '毎日17:30に、必要な数字が自動で届く',
    },
    {
      icon: MessageSquare,
      text: '翌朝の朝礼で、数字をもとに会話が始まる',
    },
    {
      icon: TrendingUp,
      text: '「次に何を改善するか」が自然に決まる',
    },
    {
      icon: Sparkles,
      text: 'DXが"特別な仕事"ではなく、日常になる',
    },
  ];

  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="training">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            一部デジタル化は進んでいるのに、<br />
            現場と経営のズレが縮まらない会社へ。
          </h3>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mt-4">
            <Building2 size={16} />
            <span className="text-sm font-medium">法人向けDX研修（助成金対応）</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                多くの組織では、<br />
                情報や数字は存在しています。<br />
                ただ、判断に使える形にはなっていません。
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                この研修では、<br />
                ツールの使い方ではなく、<br />
                業務の中で生まれる情報と数字を整え、<br />
                <span className="font-bold text-blue-600">現場と経営の両方で判断が揃う状態</span>をつくっていきます。
              </p>
            </div>

            {/* Target Companies Box */}
            <div className="bg-white border-2 border-blue-200 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-4">この研修が向いている企業</h4>
              <ul className="space-y-2">
                {targetCompanies.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subsidy Info */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                • 助成金活用により、導入コストを大幅に軽減可能
              </p>
            </div>
          </motion.div>

          {/* Right - After States */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                研修後の状態
              </h4>
              <div className="space-y-6">
                {afterStates.map((state, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <state.icon size={20} className="text-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {state.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToCTA}
            className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
          >
            詳しい資料を見る
          </button>
        </div>
      </div>
    </div>
  );
}