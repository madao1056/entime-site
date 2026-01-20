import { motion } from 'motion/react';
import { ListChecks, Target, Database, Zap, Heart } from 'lucide-react';

export function ApproachOverview() {
  const stages = [
    {
      number: '01',
      icon: ListChecks,
      title: '業務の棚卸し',
      description: '誰が・何を・どこでやっているか',
    },
    {
      number: '02',
      icon: Target,
      title: '判断ポイントの明確化',
      description: 'どの数字を見て、何を決めるのか',
    },
    {
      number: '03',
      icon: Database,
      title: 'データの一元化',
      description: '情報が散らばらない状態をつくる',
    },
    {
      number: '04',
      icon: Zap,
      title: '自動化による二度手間の解消',
      description: '入力すれば、自動で共有・通知される',
    },
    {
      number: '05',
      icon: Heart,
      title: '現場にやさしい定着設計',
      description: 'ITが苦手でも使える言葉・温度感',
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Entimeが考えるDXは、<br />
            「二度手間をなくすこと」から始まります。
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            DXはツール導入ではなく、<br />
            業務と情報の流れを一本にすることです。
          </p>
        </motion.div>

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

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center max-w-4xl mx-auto"
        >
          <p className="text-xl text-gray-900 leading-relaxed">
            Entimeは、<br />
            「一緒に考える」だけで終わりません。<br />
            現場と同じスピードで走りながら、<br />
            使われ続ける形まで <span className="font-bold text-blue-600">絆走（ばんそう）</span>します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}