import { motion } from 'framer-motion';
import { Mail, Phone, Info } from 'lucide-react';

export function FooterRefined() {
    return (
        <footer className="bg-[#1A2B4C] text-white py-24 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-6 tracking-tighter">Entime</h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-8">
                            プロトタイプから、信頼されるプロダクトへ。<br />
                            情報の解像度を上げ、次の一歩を確実にするDX支援。
                        </p>
                        <div className="flex gap-6 opacity-60">
                            {/* SNS Placeholders */}
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">X</div>
                            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">In</div>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Service</h3>
                        <ul className="space-y-4">
                            <li><a href="#approach" className="hover:text-[#0056D2] transition-colors">DXの進め方</a></li>
                            <li><a href="#training" className="hover:text-[#0056D2] transition-colors">法人向け研修</a></li>
                            <li><a href="#individual" className="hover:text-[#0056D2] transition-colors">個人向け講座</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Contact</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-2"><Mail size={16} /> contact@entime.jp</li>
                            <li className="flex items-center gap-2"><Phone size={16} /> 03-xxxx-xxxx</li>
                            <li className="flex items-center gap-2"><Info size={16} /> 運営会社：合同会社Entime</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 Entime LLC. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
