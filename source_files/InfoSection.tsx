export function InfoSection() {
  return (
    <div className="bg-[#F5F5F5] py-16 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Understanding BrixEstimator</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
            Accurate property valuation is critical for selling or renting your home at the right market price. BrixEstimator uses a deterministic formula based on real-time locality benchmarks.
          </p>
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
