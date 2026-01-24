import { motion } from 'framer-motion';
import { Download, Shield, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function FinalCTARefined() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section id="cta" className="py-32 bg-[#1A2B4C] text-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-16 backdrop-blur-sm"
                    >
                        <div className="w-24 h-24 bg-[#0056D2] rounded-full flex items-center justify-center mx-auto mb-8">
                            <Download size={40} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">資料請求を承りました</h3>
                        <p className="text-xl text-gray-300 mb-8">
                            ご入力いただいたメールアドレスに、<br />
                            1営業日以内にガイドブックを送付いたします。
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-white/60 hover:text-white underline underline-offset-4"
                        >
                            戻る
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="cta" className="py-32 bg-[#1A2B4C] text-white relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight tracking-tightest">
                            DXの全体像を、<br />
                            まずは資料で整理しませんか。
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 leading-[1.8] max-w-xl">
                            Entimeの支援内容と、数字を経営の資産に変えるための「DXガイドブック（無料）」をセットでお送りします。
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: 'DX全体像ガイド', desc: '業務と数字のつなぎ方、5つのステップ' },
                                { title: '法人向けDX研修詳細', desc: '研修内容・対象企業・研修後の状態' },
                                { title: '助成金活用の考え方', desc: '最大75%補助の活用方法' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#0056D2] flex items-center justify-center text-xs mt-1 shrink-0">
                                        <ArrowRight size={14} />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-white">{item.title}</div>
                                        <div className="text-gray-400 text-sm">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="flex-1 w-full max-w-xl">
                        <motion.form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl p-10 shadow-2xl"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-[#333333] mb-2">会社名</label>
                                    <input type="text" required className="w-full px-5 py-4 bg-[#F8F9FA] border-none rounded-xl text-[#333333] focus:ring-2 focus:ring-[#0056D2] transition-all" placeholder="株式会社Entime" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#333333] mb-2">お名前</label>
                                    <input type="text" required className="w-full px-5 py-4 bg-[#F8F9FA] border-none rounded-xl text-[#333333] focus:ring-2 focus:ring-[#0056D2] transition-all" placeholder="山田 太郎" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#333333] mb-2">メールアドレス</label>
                                    <input type="email" required className="w-full px-5 py-4 bg-[#F8F9FA] border-none rounded-xl text-[#333333] focus:ring-2 focus:ring-[#0056D2] transition-all" placeholder="mail@example.com" />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#0056D2] text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
                                >
                                    無料で資料を受け取る
                                    <ArrowRight size={20} />
                                </button>

                                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                                    <Shield size={14} />
                                    <span>個人情報は適切に管理させていただきます</span>
                                </div>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
}
