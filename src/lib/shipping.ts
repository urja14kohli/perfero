// Shipping calculation based on India Post rates
// Shipping from: Mayur Vihar, New Delhi - 110091

const SOURCE_PINCODE = '110091';
const SOURCE_CITY = 'Delhi';
const SOURCE_STATE = 'Delhi';

// India Post zone-based shipping charges (approximate rates for parcel service)
// Based on typical 500g-1kg package weight
const SHIPPING_RATES: Record<number, number> = {
  1: 40,  // Zone 1: Local (same city) - Delhi NCR
  2: 80,  // Zone 2: Metro to Metro
  3: 100, // Zone 3: State Capital to State Capital
  4: 120, // Zone 4: State Capital to Other Places
  5: 150, // Zone 5: North to South / East to West (long distance)
  6: 200, // Zone 6: Remote areas
};

// Metro cities in India
const METRO_CITIES = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad'];

// Major state capitals
const STATE_CAPITALS: Record<string, string> = {
  'Delhi': 'Delhi',
  'Maharashtra': 'Mumbai',
  'West Bengal': 'Kolkata',
  'Tamil Nadu': 'Chennai',
  'Karnataka': 'Bangalore',
  'Telangana': 'Hyderabad',
  'Gujarat': 'Ahmedabad',
  'Rajasthan': 'Jaipur',
  'Uttar Pradesh': 'Lucknow',
  'Punjab': 'Chandigarh',
  'Haryana': 'Chandigarh',
  'Madhya Pradesh': 'Bhopal',
  'Bihar': 'Patna',
  'Odisha': 'Bhubaneswar',
  'Kerala': 'Thiruvananthapuram',
  'Assam': 'Dispur',
  'Jharkhand': 'Ranchi',
  'Chhattisgarh': 'Raipur',
  'Uttarakhand': 'Dehradun',
  'Himachal Pradesh': 'Shimla',
  'Goa': 'Panaji',
  'Puducherry': 'Puducherry',
  'Jammu and Kashmir': 'Srinagar',
};

/**
 * Determine shipping zone based on pincode and location details
 * @param destPincode - Destination pincode
 * @param destCity - Destination city (optional)
 * @param destState - Destination state (optional)
 * @returns Zone number (1-6)
 */
export function determineShippingZone(
  destPincode: string,
  destCity?: string,
  destState?: string
): number {
  // Validate pincode
  if (!destPincode || !/^\d{6}$/.test(destPincode)) {
    // Default to highest zone if invalid
    return 5;
  }

  const destPincodePrefix = destPincode.substring(0, 2);
  const sourcePincodePrefix = SOURCE_PINCODE.substring(0, 2);

  // Zone 1: Same city/metro area (Delhi NCR)
  // Delhi pincodes start with 11
  if (destPincodePrefix === '11') {
    return 1;
  }

  // If we have state information, use it for better accuracy
  if (destState) {
    const destStateNormalized = destState.trim();
    
    // Zone 1: Same state (Delhi/NCR)
    if (destStateNormalized.toLowerCase() === 'delhi' || 
        destStateNormalized.toLowerCase() === 'ncr' ||
        (destCity && (destCity.toLowerCase().includes('noida') || 
                      destCity.toLowerCase().includes('gurgaon') ||
                      destCity.toLowerCase().includes('ghaziabad') ||
                      destCity.toLowerCase().includes('faridabad')))) {
      return 1;
    }

    // Zone 2: Metro to Metro
    if (destCity && METRO_CITIES.some(metro => 
      destCity.toLowerCase().includes(metro.toLowerCase()) || 
      metro.toLowerCase() === destCity.toLowerCase()
    )) {
      return 2;
    }

    // Zone 3: State Capital to State Capital
    const destCapital = STATE_CAPITALS[destStateNormalized];
    if (destCapital && destCity && 
        destCity.toLowerCase().includes(destCapital.toLowerCase())) {
      return 3;
    }

    // Zone 4: State Capital to Other Places (within reasonable distance)
    // Check if destination is in North India (closer states)
    const northStates = [
      'Haryana', 'Punjab', 'Uttar Pradesh', 'Rajasthan', 
      'Uttarakhand', 'Himachal Pradesh'
    ];
    if (northStates.includes(destStateNormalized)) {
      return 4;
    }

    // Zone 5: Long distance (North to South/East/West)
    return 5;
  }

  // Fallback: Use pincode prefix for zone estimation
  // North India: 11, 12, 13, 14, 15, 16, 17, 18, 19
  // West India: 30-44
  // South India: 50-69
  // East India: 70-82
  // Central/North-East: 20-29, 45-49, 83-99

  const destPrefix = parseInt(destPincodePrefix);
  
  // Same region (North): pincodes 10-19
  if (destPrefix >= 10 && destPrefix <= 19) {
    return destPrefix === 11 ? 1 : 2; // Same city (Delhi) or nearby northern states
  }

  // West/Mid-West: 30-44
  if (destPrefix >= 30 && destPrefix <= 44) {
    return 4;
  }

  // South: 50-69
  if (destPrefix >= 50 && destPrefix <= 69) {
    return 5;
  }

  // East: 70-82
  if (destPrefix >= 70 && destPrefix <= 82) {
    return 5;
  }

  // Central/Remote: 20-29, 45-49, 83-99
  if ((destPrefix >= 20 && destPrefix <= 29) || 
      (destPrefix >= 45 && destPrefix <= 49) ||
      (destPrefix >= 83 && destPrefix <= 99)) {
    return 5;
  }

  // Default to zone 5 for unknown
  return 5;
}

/**
 * Calculate shipping charges based on destination and order value
 * @param subtotal - Order subtotal
 * @param destPincode - Destination pincode
 * @param destCity - Destination city (optional)
 * @param destState - Destination state (optional)
 * @returns Shipping charges in INR
 */
export function calculateShipping(
  subtotal: number,
  destPincode?: string,
  destCity?: string,
  destState?: string
): number {
  // Free shipping for orders above ₹1000
  if (subtotal >= 1000) {
    return 0;
  }

  // If no pincode provided, return default rate
  if (!destPincode) {
    return 100; // Default charge when address not yet entered
  }

  // Determine zone
  const zone = determineShippingZone(destPincode, destCity, destState);
  
  // Get shipping rate for the zone
  return SHIPPING_RATES[zone] || SHIPPING_RATES[5]; // Default to zone 5 rate
}

/**
 * Calculate total including shipping
 * @param subtotal - Order subtotal
 * @param destPincode - Destination pincode (optional)
 * @param destCity - Destination city (optional)
 * @param destState - Destination state (optional)
 * @returns Total amount including shipping
 */
export function calculateTotal(
  subtotal: number,
  destPincode?: string,
  destCity?: string,
  destState?: string
): number {
  const shipping = calculateShipping(subtotal, destPincode, destCity, destState);
  return subtotal + shipping;
}

