import { Navbar } from './components/Navbar';
import { PropertyCalculator } from './components/Calculator';
import { OtherCalculators } from './components/OtherCalculators';
import { InfoSection } from './components/InfoSection';
import Vector from './components/Vector';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative bg-black pt-28 pb-48 px-4 overflow-hidden">
          {/* Blue Glow Effect */}
          <div 
            className="absolute -mt-80 opacity-80 inset-0 flex items-center justify-center" 
            style={{ 
              borderRadius: '1200px', 
              background: 'radial-gradient(50% 50%, rgb(0, 100, 229) 0%, rgba(0, 100, 229, 0) 100%)', 
              filter: 'blur(134.655px)' 
            }}
          ></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-6">
              <h1 className="sr-only">Brix Estimate</h1>
              <img 
                src="/estimate-logo.png" 
                alt="Brix Estimate Logo" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain mx-auto"
              />
            </div>
            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Estimate the market value of your property in seconds. 
              Our deterministic engine uses live locality data for unmatched accuracy.
            </p>
          </div>
        </div>

        {/* Calculator Section */}
        <PropertyCalculator />

        {/* Other Calculators */}
        <OtherCalculators />

        {/* Info Section */}
        <InfoSection />
      </main>

      {/* Simple Footer */}
      <footer className="bg-black text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-400 text-sm">
            © 2026 Brixline. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
