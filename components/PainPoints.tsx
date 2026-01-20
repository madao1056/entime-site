import { motion } from 'framer-motion';
import { Clock, MessagesSquare, AlertCircle, RefreshCcw } from 'lucide-react';

export function PainPoints() {
  const problems = [
    {
      icon: Clock,
      text: '忙しくて、パソコンの画面に映る数字をじっくり見る時間がない。',
    },
    {
      icon: MessagesSquare,
      text: 'メール・LINE・スプレットシート。連絡手段やデータの保存先がバラバラで情報が分散し、使えないまま放置してしまう。',
    },
    {
      icon: AlertCircle,
      text: 'どこに何の情報があるか把握ができてないので、 社員が出した情報が正しいかどうかもわからない。',
    },
    {
      icon: RefreshCcw,
      text: 'ツールはあるが 社内に浸透せずに、結局元のやり方に戻ってしまう',
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
            DXが進まないのは、<br />
            現場がサボっているからではありません。
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            多くの会社で、同じ"つまずき"が起きています。
          </p>
        </motion.div>

        {/* Problem List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <problem.icon size={20} className="text-red-600" />
              </div>
              <p className="text-gray-700 leading-relaxed pt-1">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg px-8 py-6 max-w-3xl">
            <p className="text-lg text-gray-800 leading-relaxed">
              これは、個人の努力不足ではありません。<br />
              DXは「正しい順番」と「現場に合った設計」をしないと、<br />
              かえって手間が増えてしまうのです。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}