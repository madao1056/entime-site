import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ConsultationTriggerRefined() {
    const flowSteps = [
        {
            step: "01",
            title: "現状のヒアリング",
            description: "専門用語は使いません。今、どのように仕事をしているかを伺います。",
        },
        {
            step: "02",
            title: "課題の整理",
            description: "何が詰まっているのか、どこで判断が止まっているのかを一緒に整理します。",
        },
        {
            step: "03",
            title: "未来の業務フローを可視化",
            description: "改善すると、業務や判断がどう変わるのかを見える形でお伝えします。",
        },
        {
            step: "04",
            title: "必要な場合のみご提案",
            description: "無理な営業は行いません。合わない場合は、その場で終えていただいて構いません。",
        },
    ];

    const scrollToCTA = () => {
        const element = document.getElementById("cta");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl font-bold text-[#333333] mb-8 tracking-tightest">
                        ITが苦手な組織から、<br className="hidden sm:block" />
                        「自走するDX」が生まれています。
                    </h2>
                    <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-[1.8]">
                        AIや最新ツールを使いこなす必要はありません。大切なのは、今の業務をありのままに話していただくことです。
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {flowSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-[#F8F9FA] p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-50"
                        >
                            <div className="text-5xl font-black text-[#0056D2] opacity-10 mb-6 group-hover:opacity-20 transition-opacity font-mono">
                                {step.step}
                            </div>
                            <h3 className="text-xl font-bold text-[#333333] mb-4">{step.title}</h3>
                            <p className="text-[#64748B] leading-[1.8]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-[#1A2B4C] rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0056D2] opacity-20 blur-3xl -mr-16 -mt-16"></div>
                    <p className="text-2xl font-bold mb-8 leading-tight">
                        まずは「今のやり方を話してみる」だけで、<br />
                        仕組みの整理は始まります。
                    </p>
                    <button
                        onClick={scrollToCTA}
                        className="bg-white text-[#1A2B4C] px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:translate-y-[-4px] transition-all flex items-center gap-2 mx-auto"
                    >
                        まずは資料で整理する
                        <ArrowRight size={22} />
                    </button>
                </div>
            </div>
        </section>
    );
}
