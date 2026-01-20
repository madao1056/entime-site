import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-gray-900">
            Entime
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('approach')} className="text-gray-600 hover:text-gray-900 transition-colors">
              DXの全体像
            </button>
            <button onClick={() => scrollToSection('training')} className="text-gray-600 hover:text-gray-900 transition-colors">
              法人向け研修
            </button>
            <button onClick={() => scrollToSection('cases')} className="text-gray-600 hover:text-gray-900 transition-colors">
              実績
            </button>
            <button onClick={() => scrollToSection('cta')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              資料請求
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-gray-100">
            <button onClick={() => scrollToSection('approach')} className="block w-full text-left text-gray-600 hover:text-gray-900">
              DXの全体像
            </button>
            <button onClick={() => scrollToSection('training')} className="block w-full text-left text-gray-600 hover:text-gray-900">
              法人向け研修
            </button>
            <button onClick={() => scrollToSection('cases')} className="block w-full text-left text-gray-600 hover:text-gray-900">
              実績
            </button>
            <button onClick={() => scrollToSection('cta')} className="block w-full text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              資料請求
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}