export function InfoSection() {
  return (
    <div className="bg-[#F5F5F5] py-16 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-8">
          <div className="flex w-full flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
            <span className="text-3xl leading-none" role="img" aria-label="Rocket">
              🚀
            </span>
            <h2 className="max-w-md text-3xl font-bold text-gray-900 sm:max-w-none">Understanding BrixEstimate</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Accurate Property Valuation Matters</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get the right market price for selling or renting your property.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Data-Driven Estimation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                BrixEstimator uses a deterministic formula for precise property valuation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Based on Real-Time Locality Benchmarks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Property prices are calculated using current market trends and locality data.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to list?</h3>
            <p className="text-gray-400 mt-1">Get genuine buyers and verified leads for free.</p>
          </div>
          <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors">
            Contact Us: +91 8073209672
          </button>
        </div>
      </div>
    </div>
  );
}
