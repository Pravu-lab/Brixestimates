import { useLocation, useNavigate, Link } from 'react-router';
import { calculatePropertyValue, formatINR, CalculationInput } from './calculatorData';
import { ArrowLeft, CheckCircle2, TrendingUp, Info } from 'lucide-react';

export function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const propertyDetails = location.state?.propertyDetails as CalculationInput;

  if (!propertyDetails) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">No data found</p>
        <Link to="/" className="text-black font-bold underline">Go back</Link>
      </div>
    );
  }

  const { min, max } = calculatePropertyValue(propertyDetails);

  return (
    <div className="max-w-4xl mx-auto pb-20 px-4">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to form
      </button>

      <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl border border-gray-100">
        {/* Header Summary */}
        <div className="bg-gray-50 p-8 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider">
              <CheckCircle2 className="w-3 h-3" />
              Calculated via Live Market Data
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            {propertyDetails.bedrooms} {propertyDetails.propertyType} in {propertyDetails.locality}, {propertyDetails.city}
          </h1>
          <div className="flex flex-wrap gap-4 mt-4 text-gray-500 font-medium">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-gray-100 shadow-sm">
              {propertyDetails.size} sq.ft.
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-gray-100 shadow-sm">
              {propertyDetails.furnishing}
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-gray-100 shadow-sm capitalize">
              For {propertyDetails.intention}
            </span>
          </div>
        </div>

        {/* Price Display */}
        <div className="p-8 md:p-12 text-center space-y-8">
          <div className="space-y-2">
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">Estimated Property Value</p>
            <div className="text-4xl md:text-6xl font-black text-gray-900 flex items-center justify-center gap-3">
              <span className="text-blue-600">{formatINR(min)}</span>
              <span className="text-gray-300 font-light">-</span>
              <span className="text-blue-600">{formatINR(max)}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex gap-4">
              <div className="bg-blue-600 p-2 rounded-lg h-fit text-white">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Market Accuracy</h4>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Value calculated using {propertyDetails.locality} base rate of ₹{formatINR(5000)}/sq.ft and standard construction factors.
                </p>
              </div>
            </div>
            <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100 flex gap-4">
              <div className="bg-orange-600 p-2 rounded-lg h-fit text-white">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Important Note</h4>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Actual price may vary based on floor number, amenities, and specific direction (Vastu).
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 active:scale-[0.98]">
              Post your property for FREE
            </button>
            <p className="text-xs text-gray-400 mt-4">No middleman fees • Verified buyers • 100% Free</p>
          </div>
        </div>
      </div>
    </div>
  );
}
