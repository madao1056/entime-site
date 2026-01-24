import { motion } from 'framer-motion';
import { Building } from 'lucide-react';

export function ProofRefined() {
    const cases = [
        {
            company: '製造業A社',
            overview: '社員80名 / 創業30年',
            challenge: '部署間の情報共有が紙とメールで分断、在庫管理が手作業',
            change: '業務時間30%削減、リアルタイム在庫可視化、意思決定スピード2倍',
            image: 'https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc2ODMxNTEzNnww&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            company: '建設業B社',
            overview: '社員50名 / 地域密着型',
            challenge: '現場と本社の連携が電話ベース、図面・写真の共有に時間がかかる',
            change: '情報伝達ミス90%減、プロジェクト進捗が一目で分かる、残業時間削減',
            image: 'https://images.unsplash.com/photo-1767788543704-d68ce083048e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzY4Mjc0OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            company: 'サービス業C社',
            overview: '社員120名 / 店舗運営',
            challenge: '顧客データが複数ツールに散らばり、マーケ施策の効果測定ができない',
            change: 'データ統合で顧客満足度向上、リピート率20%アップ、売上予測が可能に',
            image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODMxNTEzNnww&ixlib=rb-4.1.0&q=80&w=1080',
        },
    ];

    return (
        <section id="cases" className="py-32 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4 tracking-tightest">
                        実際に取り組んだ企業の声
                    </h2>
                </motion.div>

                {/* Cases Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.company}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#0056D2] border-b-[8px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-[#EBF3FF] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Building size={20} className="text-[#0056D2]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#333333] text-lg">{item.company}</h3>
                                        <p className="text-xs text-[#64748B] font-medium">{item.overview}</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div>
                                        <div className="text-[10px] font-bold text-[#E11D48] uppercase tracking-wider mb-1 px-2 py-0.5 bg-[#FFF1F2] inline-block rounded">Challenge</div>
                                        <p className="text-sm text-[#64748B] leading-relaxed">{item.challenge}</p>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-wider mb-1 px-2 py-0.5 bg-[#ECFDF5] inline-block rounded">Result</div>
                                        <p className="text-sm text-[#1A2B4C] font-bold leading-relaxed">{item.change}</p>
                                    </div>
                                </div>
                                <button className="w-full py-3 rounded-lg border-2 border-[#0056D2] text-[#0056D2] font-bold text-sm hover:bg-[#EBF3FF] transition-colors flex items-center justify-center gap-2">
                                    動画 + 要約を見る
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Link to More */}
                <div className="text-center mt-16">
                    <button className="text-[#0056D2] hover:text-[#1A2B4C] font-bold border-b-2 border-[#0056D2] transition-colors">
                        実績一覧を見る
                    </button>
                </div>
            </div>
        </section>
    );
}
