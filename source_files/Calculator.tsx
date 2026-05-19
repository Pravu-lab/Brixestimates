import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, RefreshCcw, Info, TrendingUp } from 'lucide-react';
import { 
  LOCALITY_DATA, 
  PROPERTY_TYPE_MULTIPLIERS, 
  FURNISHING_MULTIPLIERS, 
  PropertyCalculationInput, 
  calculatePropertyValue, 
  formatINR 
} from '../lib/calculatorData';

export function PropertyCalculator() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<Partial<PropertyCalculationInput>>({
    intention: "Sell",
    city: "Bengaluru",
    bedrooms: "2 BHK",
    furnishing: "Semi Furnished",
    propertyType: "Apartment"
  });

  const isFormValid = 
    formData.intention && 
    formData.city && 
    formData.locality && 
    formData.propertyType && 
    formData.bedrooms && 
    formData.size && 
    formData.size > 0 &&
    formData.furnishing;

  const updateField = (field: keyof PropertyCalculationInput, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const pillClass = (active: boolean) => 
    `px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
      active 
        ? 'bg-black text-white border-black shadow-md' 
        : 'bg-white text-gray-600 border-gray-200 hover:border-black'
    }`;

  if (showResults && isFormValid) {
    const { min, max } = calculatePropertyValue(formData as PropertyCalculationInput);
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative px-4 -mt-20 z-10 pb-20"
      >
        <div className="max-w-4xl bg-gray-100 p-3 rounded-2xl mx-auto shadow-2xl">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="p-8 border-b border-gray-50 bg-gray-50/50">
              
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                {formData.bedrooms} {formData.propertyType} in {formData.locality}, {formData.city}
              </h2>
              <p className="mt-2 text-gray-500 font-medium">
                {formData.size} sq.ft. | {formData.furnishing} | For {formData.intention}
              </p>
            </div>

            {/* Price Body */}
            <div className="p-8 md:p-12 text-center space-y-10">
              <div className="space-y-3">
                <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">Estimated {formData.intention === 'Sell' ? 'Property Value' : 'Monthly Rent'}</p>
                <div className="text-4xl md:text-6xl font-black text-gray-900 flex flex-wrap items-center justify-center gap-4">
                  <span className="text-[#2771DD]">{formatINR(min)}</span>
                  <span className="text-gray-200 font-light">-</span>
                  <span className="text-[#2771DD]">{formatINR(max)}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-100 flex gap-4">
                  <div className="bg-[#2771DD] p-2 rounded-lg h-fit text-white">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Locality Insights</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Based on current {formData.locality} benchmarks and sector construction averages.
                    </p>
                  </div>
                </div>
                <div className="p-5 bg-orange-50/50 rounded-xl border border-orange-100 flex gap-4">
                  <div className="bg-orange-600 p-2 rounded-lg h-fit text-white">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Market Variance</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Actual price may vary based on floor, view, and specific building amenities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-black/10">
                  Contact Us: +91 8073209672
                </button>
                <button 
                  onClick={() => setShowResults(false)}
                  className="flex items-center gap-2 mx-auto text-gray-500 font-bold text-sm hover:text-black transition-colors"
                >
                  <RefreshCcw className="w-4 h-4" />
                  Recalculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative px-4 -mt-20 z-10 pb-20"
    >
      <div className="max-w-4xl bg-gray-100 p-3 rounded-2xl mx-auto shadow-2xl">
        <div className="bg-white rounded-xl p-8 md:p-10 space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">I want to</label>
                <div className="flex gap-2">
                  {["Sell", "Rent"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateField('intention', type)}
                      className={pillClass(formData.intention === type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">City</label>
                  <select 
                    value={formData.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="Bengaluru">Bengaluru</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Locality</label>
                  <select 
                    value={formData.locality || ""}
                    onChange={(e) => updateField('locality', e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="" disabled>Select Locality</option>
                    {Object.keys(LOCALITY_DATA).map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Property Type</label>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(PROPERTY_TYPE_MULTIPLIERS).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateField('propertyType', type)}
                      className={pillClass(formData.propertyType === type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bedrooms</label>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {["1 BHK", "2 BHK", "3 BHK", "4 BHK"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => updateField('bedrooms', type)}
                        className={pillClass(formData.bedrooms === type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Or enter custom (e.g. 5 BHK)"
                      value={formData.bedrooms && !["1 BHK", "2 BHK", "3 BHK", "4 BHK"].includes(formData.bedrooms) ? formData.bedrooms : ""}
                      onChange={(e) => updateField('bedrooms', e.target.value)}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400 placeholder:font-normal"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Size in sq.ft</label>
                <input
                  type="number"
                  placeholder="e.g. 1200"
                  value={formData.size || ""}
                  onChange={(e) => updateField('size', Number(e.target.value))}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Furnishing</label>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(FURNISHING_MULTIPLIERS).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateField('furnishing', type)}
                      className={pillClass(formData.furnishing === type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            disabled={!isFormValid}
            onClick={() => setShowResults(true)}
            className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-30 disabled:cursor-not-allowed shadow-xl shadow-black/10"
          >
            Estimate Price
          </button>
        </div>
      </div>
    </motion.div>
  );
}
