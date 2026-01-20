import { motion } from 'framer-motion';
import { MessageSquare, Coins, Zap } from 'lucide-react';

export function WhyUs() {
  const qaPairs = [
    {
      icon: MessageSquare,
      question: 'ITやDXの専門用語が分からなくても、DXは進められますか？',
      answer: {
        intro: '進められます。',
        main: 'DXが止まる理由の多くは、技術ではなく「現場と経営の言葉が噛み合っていないこと」にあります。',
        approach: 'Entimeでは、専門用語をできるだけ使わず、現場で使われている言葉を起点に、判断につながる形へと設計していきます。',
        conclusion: '技術は裏側に。判断は表に。それが、使われ続けるDXです。'
      }
    },
    {
      icon: Coins,
      question: 'なぜ、最初から大きなコストをかけなくても進められるのですか？',
      answer: {
        intro: 'Entimeでは、複数のツールを使い分けるのではなく、業務・情報・通知を一つの基盤に集約します。',
        main: 'その結果、無料から始められるプランや、定額・低コストの範囲でDXを進めることが可能です。',
        approach: '',
        conclusion: '安くするためではなく、無駄を生まない設計をしているだけです。'
      }
    },
    {
      icon: Zap,
      question: '自動化や通知は、他のツールや会社でもできるのでは？',
      answer: {
        intro: 'その通りです。',
        main: 'Entimeが行っているのは、自動化そのものではなく、「何を、誰が、どう判断するか」の設計です。',
        approach: '自動で届いても、判断できなければ意味がありません。',
        conclusion: 'Entimeは、判断が変わるところまでをDXと考えています。'
      }
    }
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
            EntimeのDXが、他と違う理由
          </h2>
        </motion.div>

        {/* Q&A Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {qaPairs.map((qa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                {/* Question */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <qa.icon size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-relaxed">
                    {qa.question}
                  </h3>
                </div>

                {/* Answer */}
                <div className="ml-14 space-y-4">
                  {qa.answer.intro && (
                    <p className="text-lg text-gray-900 font-medium">
                      {qa.answer.intro}
                    </p>
                  )}
                  {qa.answer.main && (
                    <p className="text-gray-700 leading-relaxed">
                      {qa.answer.main}
                    </p>
                  )}
                  {qa.answer.approach && (
                    <p className="text-gray-700 leading-relaxed">
                      {qa.answer.approach}
                    </p>
                  )}
                  {qa.answer.conclusion && (
                    <p className="text-gray-900 font-bold leading-relaxed">
                      {qa.answer.conclusion}
                    </p>
                  )}
                </div>
              </div>
              
              {index < qaPairs.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}