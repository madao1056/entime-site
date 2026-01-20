import { motion } from "motion/react";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";

export function ConsultationTrigger() {
  const flowSteps = [
    {
      step: "01",
      title: "現状のヒアリング",
      description: "専門用語は使いません",
    },
    {
      step: "02",
      title: "課題の整理",
      description: "一緒に問題を整理します",
    },
    {
      step: "03",
      title: "未来の業務フローの提示",
      description: "どう変わるか見える化",
    },
    {
      step: "04",
      title: "必要な場合のみ、ご提案",
      description: "無理な営業は行いません",
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            ITが苦手でも、
            <br />
            何から話せばいいか分からなくても大丈夫です。
          </h2>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 sm:p-12 mb-16 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award size={24} className="text-yellow-800" />
            </div>
            <div>
              <ul className="text-lg text-gray-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>IT用語が分からない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>パソコンが正直苦手</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>スプレッドシートも新しいと感じる</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xl text-gray-900 font-medium text-center mt-8">
            そんな状態からスタートし、
            <br />
            <span className="text-green-600 font-bold">
              業務改善コンテスト（MVP）
            </span>
            を取った企業もあります。
          </p>
        </motion.div>

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
                  <p className="text-sm text-gray-600">
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

          {/* Note */}
          {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center max-w-2xl mx-auto mb-8">
            <p className="text-gray-800">
              ※無理な営業は行いません。
            </p>
          </div> */}

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