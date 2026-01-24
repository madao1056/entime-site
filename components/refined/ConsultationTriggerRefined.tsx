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
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-8 leading-tight tracking-tightest">
                        「詳しくなくても大丈夫」<br className="hidden sm:block" />
                        そう言われても、不安は残りますよね。
                    </h2>
                </motion.div>

                {/* Concerns Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-20"
                >
                    <div className="grid sm:grid-cols-3 gap-6 mb-12">
                        {[
                            'IT用語がよく分からない',
                            'パソコン操作に自信がない',
                            'AIと聞くと、正直まだハードルが高く感じる'
                        ].map((concern, idx) => (
                            <div key={idx} className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-100 flex items-center justify-center text-center">
                                <p className="text-[#333333] font-medium leading-[1.6]">
                                    {concern}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center space-y-6">
                        <p className="text-xl text-[#64748B] leading-[1.8]">
                            そんな状態のまま、<br className="hidden sm:block" />
                            <span className="font-bold text-[#333333]">「何から話せばいいか分からない」</span><br className="hidden sm:block" />
                            という方も少なくありません。
                        </p>

                        <p className="text-2xl text-[#333333] font-black">
                            それでも問題ありません。
                        </p>
                    </div>

                    <div className="text-center bg-[#EBF3FF] border border-[#BFDBFE] rounded-2xl p-10 my-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#0056D2] opacity-5 blur-2xl -mr-12 -mt-12"></div>
                        <p className="text-xl text-[#1A2B4C] font-bold leading-relaxed">
                            業務改善に一度つまずいた企業が、<br className="hidden sm:block" />
                            自社業務はもちろん、他店舗にも使える<br className="hidden sm:block" />
                            「専用マニュアル」を自動生成する仕組みを<br className="hidden sm:block" />
                            生み出した事例もあります。
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="text-lg text-[#64748B] mb-4">
                            やっていただくのは、たった一つ。
                        </p>
                        <p className="text-2xl text-[#333333] font-black">
                            「今のやり方を、そのまま聞かせてください。」
                        </p>
                    </div>
                </motion.div>

                <div className="my-24 h-px bg-gray-200 w-24 mx-auto"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-[#333333] mb-12 text-center">
                        ご相談後の流れ
                    </h3>

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
                </motion.div>
            </div>
        </section>
    );
}
