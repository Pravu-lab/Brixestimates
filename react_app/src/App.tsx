import { Navbar } from './components/Navbar';
import { PropertyCalculator } from './components/Calculator';
import { OtherCalculators } from './components/OtherCalculators';
import { InfoSection } from './components/InfoSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="pt-16">
        <section className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[38rem] sm:h-[40rem] md:h-[42rem]"
            style={{
              background: 'linear-gradient(to bottom, #001845 0%, #03091F 100%)',
            }}
          />

          <div className="relative z-10 px-4 pt-28 pb-0 text-center">
            <div className="mx-auto flex max-w-4xl flex-col items-center">
              <div className="mb-6">
                <h1 className="sr-only">Brix Estimate</h1>
                <img
                  src="/estimate-logo.png"
                  alt="Brix Estimate Logo"
                  className="mx-auto h-12 w-auto object-contain sm:h-16 md:h-20"
                />
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-blue-100/80 md:text-xl">
                Estimate the market value of your property in seconds.
                Our deterministic AI engine uses live locality data for unmatched accuracy.
              </p>
            </div>
          </div>

          <PropertyCalculator />
        </section>

        <OtherCalculators />

        <InfoSection />
      </main>

      <footer className="border-t border-white/10 bg-black px-6 py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-sm text-gray-400">
            © 2026 Brixline. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
