import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function HeaderRefined() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 h-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-2xl text-[#1A2B4C] flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0056D2] rounded-lg"></div>
                        Entime
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        <button onClick={() => scrollToSection('approach')} className="text-[#64748B] hover:text-[#0056D2] font-semibold transition-colors">
                            DXの全体像
                        </button>
                        <button onClick={() => scrollToSection('training')} className="text-[#64748B] hover:text-[#0056D2] font-semibold transition-colors">
                            法人向け研修
                        </button>
                        <button onClick={() => scrollToSection('cases')} className="text-[#64748B] hover:text-[#0056D2] font-semibold transition-colors">
                            実績
                        </button>
                        <button
                            onClick={() => scrollToSection('cta')}
                            className="bg-[#0056D2] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1A2B4C] transition-all transform hover:translate-y-[-2px] shadow-lg"
                        >
                            資料請求
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-[#333333]"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 right-0 bg-white border-b border-gray-100 py-8 px-4 flex flex-col gap-6 md:hidden shadow-xl"
                    >
                        <button onClick={() => scrollToSection('approach')} className="text-[#333333] font-bold text-lg text-left">
                            DXの全体像
                        </button>
                        <button onClick={() => scrollToSection('training')} className="text-[#333333] font-bold text-lg text-left">
                            法人向け研修
                        </button>
                        <button onClick={() => scrollToSection('cases')} className="text-[#333333] font-bold text-lg text-left">
                            実績
                        </button>
                        <button onClick={() => scrollToSection('cta')} className="bg-[#0056D2] text-white px-6 py-4 rounded-xl font-bold text-center">
                            資料請求
                        </button>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
