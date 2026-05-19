import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import WhiteLogo from './WhiteLogo1-7-189';

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY <= 16) {
        setVisible(true);
      } else if (delta > 4) {
        setVisible(false);
      } else if (delta < -4) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-[9999] h-16 w-full border-b border-gray-100 bg-white shadow-sm transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center">
          <div className="h-6 w-32 md:h-7 md:w-40">
            <WhiteLogo />
          </div>
        </div>

        <div className="hidden items-center space-x-8 lg:flex">
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-black">
            Properties
            <ChevronDown className="h-3 w-3" />
          </button>
          <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-black">
            Loans
          </a>
          <button className="flex items-center gap-1 text-sm font-bold text-black transition-colors hover:text-gray-600">
            Calculators
            <ChevronDown className="h-3 w-3" />
          </button>
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-black">
            More
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>

        <button className="rounded-md p-2 transition-colors hover:bg-gray-100 lg:hidden">
          <div className="flex h-5 w-6 flex-col items-center justify-between">
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
          </div>
        </button>
      </div>
    </nav>
  );
}
