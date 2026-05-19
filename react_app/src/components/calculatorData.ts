export const CITY_DATA = {
  "Bengaluru": 2000
};

export const LOCALITY_DATA = {
  "Yelahanka": 5000,
  "Whitefield": 6500,
  "Indiranagar": 12000
};

export const PROPERTY_TYPE_MULTIPLIERS = {
  "Apartment": 1.0,
  "Independent Floor": 1.05,
  "Independent House": 1.2,
  "Villa": 1.4
};

export const FURNISHING_MULTIPLIERS = {
  "Unfurnished": 1.0,
  "Semi Furnished": 1.05,
  "Fully Furnished": 1.15
};

export const BHK_MULTIPLIERS = {
  "1 BHK": 1.0,
  "2 BHK": 1.1,
  "3 BHK": 1.25,
  "4 BHK": 1.45,
  "5 BHK": 1.65
};

export interface PropertyCalculationInput {
  intention: "Sell" | "Rent";
  city: string;
  locality: string;
  propertyType: string;
  bedrooms: string;
  size: number;
  furnishing: string;
}

export const calculatePropertyValue = (input: PropertyCalculationInput) => {
  const cityPrice = CITY_DATA[input.city as keyof typeof CITY_DATA] || 0;
  const localityPrice = LOCALITY_DATA[input.locality as keyof typeof LOCALITY_DATA] || 0;
  const typeMultiplier = PROPERTY_TYPE_MULTIPLIERS[input.propertyType as keyof typeof PROPERTY_TYPE_MULTIPLIERS] || 1.0;
  const furnishingMultiplier = FURNISHING_MULTIPLIERS[input.furnishing as keyof typeof FURNISHING_MULTIPLIERS] || 1.0;
  
  // Apply BHK Multiplier robustly
  let bhkMultiplier = 1.0;
  const bhkMatch = input.bedrooms.match(/(\d+)/);
  if (bhkMatch) {
    const num = parseInt(bhkMatch[1]);
    if (num === 1) bhkMultiplier = 1.0;
    else if (num === 2) bhkMultiplier = 1.1;
    else if (num === 3) bhkMultiplier = 1.25;
    else if (num === 4) bhkMultiplier = 1.45;
    else bhkMultiplier = 1.65 + (num - 5) * 0.20;
  }

  // Base Formula: Size * (Locality Avg + City Avg) * Type_Multiplier * Furnishing_Multiplier * BHK_Multiplier
  const baseValue = input.size * (localityPrice + cityPrice) * typeMultiplier * furnishingMultiplier * bhkMultiplier;

  // For Rental valuation, we'll apply a common market factor (roughly 3% yield / 12 months) 
  // though the prompt focuses on "Estimated Price Range" which is usually capital value.
  const isRent = input.intention === "Rent";
  const finalBase = isRent ? (baseValue * 0.03) / 12 : baseValue;

  return {
    min: finalBase * 0.9,
    max: finalBase * 1.1,
    base: finalBase
  };
};

export const formatINR = (num: number) => {
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
  if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
  if (num >= 1000) return `₹${num.toLocaleString('en-IN')}`;
  return `₹${num.toFixed(0)}`;
};
