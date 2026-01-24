import { motion } from 'framer-motion';
import { ListChecks, Target, Database, Zap, Heart } from 'lucide-react';

export function ApproachOverview() {
  const stages = [
    {
      number: '01',
      icon: ListChecks,
      title: '業務の棚卸し',
      description: '業務内容の透明性を高め、判断に使える形にします。',
    },
    {
      number: '02',
      icon: Target,
      title: '判断ポイントの明確化',
      description: 'どの情報・数字を見て、何を決めるのかを明確にします。',
    },
    {
      number: '03',
      icon: Database,
      title: 'データの一元化',
      description: '情報を経営資産としてまとめ、探さずに使える状態をつくります。',
    },
    {
      number: '04',
      icon: Zap,
      title: '自動化による流れの統一',
      description: '一度の入力が、共有・通知・記録まで自然につながる形に整えます。',
    },
    {
      number: '05',
      icon: Heart,
      title: '定着を前提にした設計',
      description: '必要最小限の入力で、自然と使われ続ける形にします。',
    },
  ];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Entimeが考えるDXの目的は、<br />
            情報を経営資産に変えることです。
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            DXは、ツールを導入することではありません。<br />
            現場で生まれる情報を整理し、<br />
            判断と改善に使える形へと整えることです。
          </p>
          <p className="text-lg font-bold text-gray-900 max-w-3xl mx-auto leading-relaxed mb-6">
            現場で情報が生まれ、経営の判断に使われ、その判断が現場の改善につながる。
          </p>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            この循環そのものが、<br />
            売上を生み続ける経営資産です。
          </p>
        </motion.div>

        <hr className="border-gray-300 max-w-xs mx-auto mb-12" />

        {/* Visual Label */}
        <div className="text-center mb-8">
          <span className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium">
            DX全体像
          </span>
        </div>

        {/* Stages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow relative"
            >
              {/* Stage Number */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {stage.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <stage.icon size={24} className="text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-900 mb-2 text-base">
                {stage.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>

        <hr className="border-gray-300 max-w-xs mx-auto mb-12" />

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Entimeは、<br />
            「一緒に考える」だけで終わりません。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            現場と経営の間を何度も往復しながら、<br />
            改善の循環が回り続ける状態まで<br />
            <span className="font-bold text-blue-600 text-xl">絆走（ばんそう）</span>します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}