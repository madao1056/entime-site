import { motion } from 'framer-motion';
import { User, TrendingUp, Eye, Zap, Target } from 'lucide-react';

export function IndividualCourse() {
  const targetBusinessOwners = [
    'セミナー・講座を運営している事業主',
    'フリーランス・個人事業主（複数案件を並行している方）',
    '小規模EC・オンライン販売を行っている事業主',
    '地域密着型のサービス業を一人〜少人数で運営している事業主',
    '「良かったから人にも勧めたい」と感じている事業主',
  ];

  const afterStates = [
    {
      icon: Eye,
      text: '事業の状況が、数字として一目で把握できている',
    },
    {
      icon: TrendingUp,
      text: '日々の業務と数字がつながり、迷いが減る',
    },
    {
      icon: Target,
      text: '「何を続け、何を変えるか」を数字で判断できる',
    },
    {
      icon: Zap,
      text: '判断スピードが上がり、余計な悩みが減る',
    },
  ];

  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="individual">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            業界の当たり前を見直し、<br />
            自分の価値を高めたい方へ。
          </h3>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mt-4">
            <User size={16} />
            <span className="text-sm font-medium">個人・小規模事業者向けDX講座</span>
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
                情報や数字はすでに存在しています。<br />
                ただ、それらは<span className="font-bold">判断に使える形</span>には整っていません。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                業務の中で生まれた情報は散在し、<br />
                数字は見ているつもりでも、<br />
                結局は「感覚」で判断してしまっている。<br />
                その状態に、気づかないまま仕事を続けている人も少なくありません。
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                この講座では、<br />
                ツールの使い方を教えるのではなく、<br />
                <span className="font-bold text-purple-600">業務の中で生まれる情報と数字を整理し、<br />
                事業判断に使える状態へ整えていきます。</span>
              </p>
            </div>

            <hr className="border-gray-300 max-w-xs mb-8" />

            {/* Target Business Owners Box */}
            <div className="bg-white border-2 border-purple-200 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-4">この講座が向いている事業主</h4>
              <ul className="space-y-2">
                {targetBusinessOwners.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
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
                講座受講後の状態
              </h4>
              <div className="space-y-6 mb-8">
                {afterStates.map((state, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <state.icon size={20} className="text-purple-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {state.text}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-purple-900 font-bold text-center">
                  事業実績の数字を判断の核にし、<br />
                  迷わず舵を切れる。
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <hr className="border-gray-300 max-w-xs mx-auto mb-8" />

        {/* Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto">
          <p className="text-sm text-gray-700 text-center">
            ※本講座は、法人向けDX研修とは<br />
            内容・支援範囲が異なります。<br />
            個人・小規模事業者向けに設計された入口プログラムです。
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToCTA}
            className="bg-purple-600 text-white px-12 py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
          >
            個人向けDX講座の詳細を見る
          </button>
        </div>
      </div>
    </div>
  );
}