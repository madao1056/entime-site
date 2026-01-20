import { motion } from 'framer-motion';
import { Play, Building, AlertCircle, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CaseStudies() {
  const cases = [
    {
      company: '製造業A社',
      overview: '社員80名 / 創業30年',
      challenge: '部署間の情報共有が紙とメールで分断、在庫管理が手作業',
      change: '業務時間30%削減、リアルタイム在庫可視化、意思決定スピード2倍',
      image: 'https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc2ODMxNTEzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: '#',
    },
    {
      company: '建設業B社',
      overview: '社員50名 / 地域密着型',
      challenge: '現場と本社の連携が電話ベース、図面・写真の共有に時間がかかる',
      change: '情報伝達ミス90%減、プロジェクト進捗が一目で分かる、残業時間削減',
      image: 'https://images.unsplash.com/photo-1767788543704-d68ce083048e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzY4Mjc0OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: '#',
    },
    {
      company: 'サービス業C社',
      overview: '社員120名 / 店舗運営',
      challenge: '顧客データが複数ツールに散らばり、マーケ施策の効果測定ができない',
      change: 'データ統合で顧客満足度向上、リピート率20%アップ、売上予測が可能に',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODMxNTEzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: '#',
    },
  ];

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            実際に取り組んだ企業の声
          </h2>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={caseItem.image}
                  alt={caseItem.company}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Play size={24} className="text-blue-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{caseItem.company}</h3>
                    <p className="text-xs text-gray-500">{caseItem.overview}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-red-600 font-medium mb-2">
                      <AlertCircle size={12} />
                      課題
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{caseItem.challenge}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-xs text-green-600 font-medium mb-2">
                      <TrendingUp size={12} />
                      変化
                    </div>
                    <p className="text-sm text-gray-900 font-medium leading-relaxed">{caseItem.change}</p>
                  </div>
                </div>

                <button className="mt-6 w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                  <Play size={16} />
                  動画 + 要約を見る
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to More */}
        <div className="text-center">
          <button className="text-blue-600 hover:text-blue-700 font-medium underline">
            実績一覧を見る
          </button>
        </div>
      </div>
    </section>
  );
}