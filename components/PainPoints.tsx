import { motion } from 'framer-motion';

export function PainPoints() {
  const problems = [
    {
      text: '忙しくて、数字をじっくり確認する時間が取れない。それが当たり前になっている。',
    },
    {
      text: '情報が、メール・LINE・スプレッドシートに分散し、探すだけで時間が消えていく。',
    },
    {
      text: '社員から数字は上がってくるが、どこまで正しいのか判断できない。',
    },
    {
      text: 'ツールは導入したものの、現場に定着せず、結局、元のやり方に戻ってしまう。',
    },
    {
      text: '「今は回っているから」と後回しにして、改善のタイミングを逃している。',
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            多くの会社で、<br />
            改善すべきポイントは外ではなく、<br />
            すでに社内にあります。
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            売上や集客など、<br />
            外向きの動きを増やす前に、<br />
            <span className="font-bold text-gray-900">社内の仕組みを整えることが重要</span>です。
          </p>
        </motion.div>

        <hr className="border-gray-300 max-w-xs mx-auto mb-12" />

        {/* Problem List */}
        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              {problem.text}
            </motion.div>
          ))}
        </div>

        <hr className="border-gray-300 max-w-xs mx-auto mb-12" />

        {/* Middle Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            これは、<br />
            社員の努力不足でも、<br />
            経営判断の失敗でもありません。
          </p>
          <p className="text-xl text-gray-900 font-semibold mt-6">
            改善が必要なことに、<br />
            <span className="text-2xl">まだ気づけていないだけ</span>です。
          </p>
        </motion.div>

        <hr className="border-gray-300 max-w-xs mx-auto mb-12" />

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              忙しくなってから慌てて整えようとしても、<br />
              その時には、<br />
              仕組みを見直す余力が残っていません。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              だからこそ、<br />
              動けるうちに、
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg px-8 py-6 inline-block">
              <p className="text-xl text-gray-900 font-bold leading-relaxed">
                動かなくても回る状態を<br />
                先につくっておくこと。
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              それが、<br />
              経営を安定させるための<br />
              最も確実な選択です。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}