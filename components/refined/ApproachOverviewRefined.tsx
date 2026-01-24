import { motion } from 'framer-motion';
import { ListChecks, Target, Database, Zap, Heart } from 'lucide-react';

export function ApproachOverviewRefined() {
    const stages = [
        {
            icon: ListChecks,
            title: '業務の棚卸し',
            description: '業務内容の透明性を高め、判断に使える形にします。',
        },
        {
            icon: Target,
            title: '判断ポイントの明確化',
            description: 'どの情報・数字を見て、何を決めるのかを明確にします。',
        },
        {
            icon: Database,
            title: 'データの一元化',
            description: '情報を経営資産としてまとめ、探さずに使える状態をつくります。',
        },
        {
            icon: Zap,
            title: '自動化による流れの統一',
            description: '一度の入力が、共有・通知・記録まで自然につながる形に整えます。',
        },
        {
            icon: Heart,
            title: '定着を前提にした設計',
            description: '必要最小限の入力で、自然と使われ続ける形にします。',
        },
    ];

    return (
        <section id="approach" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-8 leading-tight tracking-tightest">
                        Entimeが考えるDXの目的は、<br className="hidden sm:block" />
                        情報を経営資産に変えることです。
                    </h2>
                    <div className="space-y-6">
                        <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-[1.8]">
                            DXは、ツールを導入することではありません。<br className="hidden sm:block" />
                            現場で生まれる情報を整理し、<br className="hidden sm:block" />
                            判断と改善に使える形へと整えることです。
                        </p>
                        <p className="text-xl font-bold text-[#1A2B4C] max-w-3xl mx-auto leading-[1.8]">
                            現場で情報が生まれ、経営の判断に使われ、その判断が現場の改善につながる。
                        </p>
                        <p className="text-2xl text-[#333333] max-w-3xl mx-auto mt-8">
                            この循環そのものが、<br className="hidden sm:block" />
                            売上を生み続ける経営資産です。
                        </p>
                    </div>
                </motion.div>

                <div className="space-y-32">
                    {stages.map((stage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
                        >
                            {/* Image/Icon Area */}
                            <div className="flex-1 w-full lg:w-1/2">
                                <div className="aspect-video bg-[#F8F9FA] rounded-2xl flex items-center justify-center p-12 shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                                    <div className="w-24 h-24 bg-[#0056D2] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                        <stage.icon size={48} />
                                    </div>
                                </div>
                            </div>

                            {/* Text Area */}
                            <div className="flex-1 text-center lg:text-left">
                                <div className="inline-block px-4 py-1 bg-blue-50 text-[#0056D2] text-sm font-bold rounded-full mb-6">
                                    STEP 0{index + 1}
                                </div>
                                <h3 className="text-3xl font-bold text-[#333333] mb-6">{stage.title}</h3>
                                <p className="text-xl text-[#64748B] leading-[1.8]">
                                    {stage.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-32 text-center max-w-4xl mx-auto"
                >
                    <p className="text-xl text-[#64748B] leading-[1.8] mb-6">
                        Entimeは、「一緒に考える」だけで終わりません。
                    </p>
                    <p className="text-xl text-[#64748B] leading-[1.8]">
                        現場と経営の間を何度も往復しながら、<br className="hidden sm:block" />
                        改善の循環が回り続ける状態まで<br className="hidden sm:block" />
                        <span className="font-bold text-[#0056D2] text-3xl">絆走（ばんそう）</span>します。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
