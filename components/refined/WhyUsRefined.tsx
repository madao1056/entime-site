import { motion } from 'framer-motion';
import { MessageSquare, Coins, Zap } from 'lucide-react';

export function WhyUsRefined() {
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
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl font-bold text-[#333333] mb-6 tracking-tightest">
                        なぜEntimeは、<br />
                        「現場に定着するDX」ができるのか。
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {qaPairs.map((qa, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#F8F9FA] rounded-2xl p-10 flex flex-col md:flex-row gap-8"
                        >
                            <div className="w-16 h-16 bg-[#0056D2] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                                <qa.icon size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-[#333333] mb-6 leading-tight">
                                    {qa.question}
                                </h3>
                                <div className="space-y-4 text-lg text-[#64748B] leading-[1.8]">
                                    <p className="text-[#333333] font-bold">{qa.answer.intro}</p>
                                    <p>{qa.answer.main}</p>
                                    {qa.answer.approach && <p>{qa.answer.approach}</p>}
                                    <p className="text-[#0056D2] font-medium pt-2 border-t border-gray-200 leading-relaxed">{qa.answer.conclusion}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
