import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { LOCALITY_DATA, PROPERTY_TYPE_MULTIPLIERS, FURNISHING_MULTIPLIERS, CalculationInput } from './calculatorData';

export function CalculatorForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<CalculationInput>>({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/results', { state: { propertyDetails: formData } });
    }
  };

  const updateField = (field: keyof CalculationInput, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const pillClass = (active: boolean) => 
    `px-6 py-2.5 rounded-full text-sm font-medium transition-all border ${
      active 
        ? 'bg-black text-white border-black' 
        : 'bg-white text-gray-600 border-gray-200 hover:border-black'
    }`;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Intention */}
        <div className="space-y-4">
          <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">I want to</label>
          <div className="flex gap-3">
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

        {/* City & Locality */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">City</label>
            <select 
              value={formData.city}
              onChange={(e) => updateField('city', e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
            >
              <option value="Bengaluru">Bengaluru</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Locality</label>
            <select 
              value={formData.locality || ""}
              onChange={(e) => updateField('locality', e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
            >
              <option value="" disabled>Select Locality</option>
              {Object.keys(LOCALITY_DATA).map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Property Type */}
        <div className="space-y-4">
          <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Property Type</label>
          <div className="flex flex-wrap gap-3">
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

        {/* Bedrooms */}
        <div className="space-y-4">
          <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Bedrooms</label>
          <div className="flex flex-wrap gap-3">
            {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map((type) => (
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
        </div>

        {/* Size */}
        <div className="space-y-4">
          <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Size in sq.ft</label>
          <input
            type="number"
            placeholder="e.g. 1200"
            value={formData.size || ""}
            onChange={(e) => updateField('size', Number(e.target.value))}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
          />
        </div>

        {/* Furnishing */}
        <div className="space-y-4">
          <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Furnishing</label>
          <div className="flex flex-wrap gap-3">
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

        {/* Submit */}
        <button
          type="submit"
          disabled={!isFormValid}
          className="w-full py-5 bg-black text-white rounded-2xl font-bold text-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-xl shadow-black/10"
        >
          Estimate Price
        </button>
      </form>
    </div>
  );
}
