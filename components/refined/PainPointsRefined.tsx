import { motion } from 'framer-motion';

export function PainPointsRefined() {
    const problems = [
        '忙しくて、数字をじっくり確認する時間が取れない。それが当たり前になっている。',
        '情報が、メール・LINE・スプレッドシートに分散し、探すだけで時間が消えていく。',
        '社員から数字は上がってくるが、どこまで正しいのか判断できない。',
        'ツールは導入したものの、現場に定着せず、結局、元のやり方に戻ってしまう。',
        '「今は回っているから」と後回しにして、改善のタイミングを逃している。',
    ];

    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-8 leading-tight tracking-tightest">
                        多くの会社で、<br className="hidden sm:block" />
                        改善すべきポイントは外ではなく、<br className="hidden sm:block" />
                        すでに社内にあります。
                    </h2>
                    <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-[1.8]">
                        売上や集客など、<br className="hidden sm:block" />
                        外向きの動きを増やす前に、<br className="hidden sm:block" />
                        社内の仕組みを整えることが重要です。
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid gap-8">
                    {problems.map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-6"
                        >
                            <div className="w-8 h-8 rounded-full bg-[#0056D2] text-white flex items-center justify-center flex-shrink-0 font-bold">
                                {index + 1}
                            </div>
                            <p className="text-lg text-[#333333] leading-[1.8] font-medium">
                                {text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <p className="text-xl text-[#64748B] leading-[1.8] max-w-3xl mx-auto">
                        これは、社員の努力不足でも、<br className="hidden sm:block" />
                        経営判断の失敗でもありません。
                    </p>
                    <p className="text-2xl text-[#333333] font-bold mt-8">
                        改善が必要なことに、<br className="hidden sm:block" />
                        <span className="text-[#0056D2]">まだ気づけていないだけ</span>です。
                    </p>
                </motion.div>

                <div className="my-20 h-px bg-gray-200 w-24 mx-auto"></div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-[#333333] leading-[1.8] mb-10">
                            忙しくなってから慌てて整えようとしても、<br className="hidden sm:block" />
                            その時には、仕組みを見直す余力が残っていません。
                        </p>
                        <p className="text-xl text-[#333333] leading-[1.8] mb-10">
                            だからこそ、動けるうちに、
                        </p>
                        <div className="bg-[#EBF3FF] border border-[#BFDBFE] rounded-2xl px-10 py-8 inline-block shadow-sm">
                            <p className="text-2xl font-bold text-[#1A2B4C] leading-relaxed">
                                動かなくても回る状態を<br />
                                先につくっておくこと。
                            </p>
                        </div>
                        <p className="text-xl text-[#333333] leading-[1.8] mt-10">
                            それが、経営を安定させるための<br className="hidden sm:block" />
                            最も確実な選択です。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
