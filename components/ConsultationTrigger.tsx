import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";

export function ConsultationTrigger() {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            「詳しくなくても大丈夫」<br />
            そう言われても、不安は残りますよね。
          </h2>
        </motion.div>

        {/* Concerns Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <ul className="text-lg text-gray-700 space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>IT用語がよく分からない</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>パソコン操作に自信がない</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>AIと聞くと、正直まだハードルが高く感じる</span>
            </li>
          </ul>
          
          <p className="text-lg text-gray-700 mb-8">
            そんな状態のまま、<br />
            「何から話せばいいか分からない」<br />
            という方も少なくありません。
          </p>
          
          <p className="text-xl text-gray-900 font-medium mb-8">
            それでも問題ありません。
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-4">
              実際に、
            </p>
            <p className="text-lg text-gray-900 font-bold mb-4">
              ITやAIに苦手意識を持った状態からスタートし、<br />
              業務改善コンテスト（MVP）を獲得した企業もあります。
            </p>
          </div>
          
          <p className="text-lg text-gray-700 mb-4">
            やっていただくのは、たった一つ。
          </p>
          <p className="text-xl text-gray-900 font-bold">
            「今のやり方を、そのまま聞かせてください。」
          </p>
        </motion.div>

        <hr className="border-gray-300 max-w-xs mx-auto mb-12" />

        {/* Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ご相談後の流れ
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors h-full">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight
                      className="text-gray-300"
                      size={24}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <hr className="border-gray-300 max-w-xs mx-auto mb-12" />

          <div className="text-center mb-8">
            <p className="text-xl text-gray-900 font-bold">
              まずは、<br />
              「今のやり方を話してみる」だけで大丈夫です。
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToCTA}
              className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
            >
              まずは資料を見てみる
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}