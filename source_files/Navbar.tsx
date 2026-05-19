import { ChevronDown } from 'lucide-react';
import WhiteLogo from '../../imports/WhiteLogo1-1/WhiteLogo1-7-189';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-black z-[9999] border-b border-white/10">
      <div className="max-w-6xl mx-auto h-full px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-6 lg:h-7 w-32 md:w-40">
            <WhiteLogo />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <button className="text-sm font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-1">
            Properties
            <ChevronDown className="w-3 h-3" />
          </button>
          <a href="#" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Loans
          </a>
          <button className="text-sm font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-1">
            Calculators
            <ChevronDown className="w-3 h-3" />
          </button>
          <button className="text-sm font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-1">
            More
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors">
          <div className="w-6 h-5 flex flex-col justify-between items-center">
            <span className="block w-5 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>
    </nav>
  );
}
