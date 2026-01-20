import { motion } from 'motion/react';
import { Download, FileText, Shield, Clock } from 'lucide-react';
import { useState } from 'react';

export function FinalCTA() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォーム送信処理（将来的にSupabaseで保存）
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="cta" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-12"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download size={40} className="text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ありがとうございます
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              1営業日以内に、ご登録いただいたメールアドレスに<br />
              資料をお送りします。
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-gray-700">
                迷惑メールフォルダもご確認ください。<br />
                ご不明点がありましたら、お気軽にお問い合わせください。
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            DXの全体像を、<br />
            まずは資料で整理しませんか。
          </h2>
          <ul className="text-lg text-gray-700 max-w-2xl mx-auto space-y-2">
            <li>• 無料</li>
            <li>• 法人向けDX研修の内容</li>
            <li>• 助成金活用の考え方</li>
          </ul>
          <p className="text-gray-600 mt-4">
            をまとめた資料をお送りします。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - What You Get */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              届く資料
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">DX全体像ガイド</div>
                  <p className="text-sm text-gray-600">
                    業務と数字のつなぎ方、5つのステップ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">法人向けDX研修詳細</div>
                  <p className="text-sm text-gray-600">
                    研修内容・対象企業・研修後の状態
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">助成金活用の考え方</div>
                  <p className="text-sm text-gray-600">
                    最大75%補助の活用方法
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={20} className="text-green-600" />
                <span className="font-bold text-green-900">安心してご請求ください</span>
              </div>
              <ul className="text-sm text-green-800 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  完全無料
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  過度なご提案はいたしません
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  いただいたメールアドレスに資料を送付いたします
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="株式会社◯◯"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="example@company.co.jp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号（任意）
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="03-1234-5678"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
                >
                  無料で資料を受け取る
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Shield size={14} />
                  <span>SSL暗号化通信で保護されています</span>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  1営業日以内にメールで資料をお届けします。
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}