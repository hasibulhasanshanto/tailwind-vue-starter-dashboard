// Height options for dropdown selection
export const HeightOptions = [
  { key: 134, value: "4ft 5in - 134cm" },
  { key: 137, value: "4ft 6in - 137cm" },
  { key: 139, value: "4ft 7in - 139cm" },
  { key: 142, value: "4ft 8in - 142cm" },
  { key: 144, value: "4ft 9in - 144cm" },
  { key: 147, value: "4ft 10in - 147cm" },
  { key: 149, value: "4ft 11in - 149cm" },
  { key: 152, value: "5ft - 152cm" },
  { key: 154, value: "5ft 1in - 154cm" },
  { key: 157, value: "5ft 2in - 157cm" },
  { key: 160, value: "5ft 3in - 160cm" },
  { key: 162, value: "5ft 4in - 162cm" },
  { key: 165, value: "5ft 5in - 165cm" },
  { key: 167, value: "5ft 6in - 167cm" },
  { key: 170, value: "5ft 7in - 170cm" },
  { key: 172, value: "5ft 8in - 172cm" },
  { key: 175, value: "5ft 9in - 175cm" },
  { key: 177, value: "5ft 10in - 177cm" },
  { key: 180, value: "5ft 11in - 180cm" },
  { key: 182, value: "6ft - 182cm" },
];

// Height options for dropdown selection
export const WeightOptions = makeWeightArr();

function makeWeightArr() {
  let weightArray = [];
  for (let i = 40; i <= 150; i++) {
    weightArray.push({ key: i, value: i });
  }
  return weightArray;
}

// Marital status options for dropdown selection
export const MaritalStatusOptions = [
  { key: "never_married", value: "Never Married" },
  { key: "married", value: "Married" },
  { key: "divorce", value: "Divorce" },
  { key: "separate", value: "Separate" },
  { key: "widow", value: "Widow" },
  { key: "widower", value: "Widower" },
];

// Grew up status options for dropdown selection
// If need generate own JSON from this API: https://restcountries.com/v3.1/all?fields=name,flags,cca3
export const GrewUpCountryOptions = [
    { key: "BD", value: "BANGLADESH", flag: "https://flagcdn.com/w320/bd.png" },
    { key: "USA", value: "UNITED STATES", flag: "https://flagcdn.com/w320/us.png" },
    { key: "UK", value: "UNITED KINGDOM", flag: "https://flagcdn.com/w320/gb.png" },
    { key: "CANADA", value: "CANADA", flag: "https://flagcdn.com/w320/ca.png" }, 
];

// Diet options for dropdown selection
export const DietOptions = [
    { key: "vegetarian", value: "Vegetarian" },
    { key: "non-vegetarian", value: "Non Vegetarian" },
    { key: "halal-food-always", value: "Halal food always" },
    { key: "halal-food-when-i-can", value: "Halal food when I can" }, 
    { key: "no-restrictions", value: "No Restrictions" }, 
];

// Health Info options for dropdown selection
export const HealthInfoOptions = [
    { key: null, value: "No Health Problems" },
    { key: "hiv", value: "HIV Positive" },
    { key: "diabetes", value: "Diabetes" },
    { key: "low-bp", value: "Low BP" }, 
    { key: "high-bp", value: "High BP" }, 
    { key: "heart-dieseases", value: "Heart Dieseases" }, 
    { key: "other", value: "Other" }, 
];

// Body Type options for dropdown selection
export const BodyTypeOptions = [
    { key: "slim", value: "Slim" },
    { key: "athletic", value: "Athletic" },
    { key: "average", value: "Average" },
    { key: "heavy", value: "Heavy" },  
];

// Blood Group options for dropdown selection
export const BloodGroupOptions = [
    { key: "a_pos", value: "A +" },
    { key: "a_neg", value: "A -" }, 
    { key: "b_pos", value: "B +" },
    { key: "b_neg", value: "B -" }, 
    { key: "o_pos", value: "O +" },
    { key: "o_neg", value: "O -" }, 
    { key: "ab_pos", value: "AB +" },
    { key: "ab_neg", value: "AB -" }, 
];

// Skin Complexion options for dropdown selection
export const SkinComplexionOptions = [
    { key: "very_fair", value: "Very Fair" },
    { key: "fair", value: "Fair" }, 
    { key: "medium", value: "Medium" },
    { key: "light_brown", value: "Light Brown" }, 
    { key: "brown", value: "Brown" },  
    { key: "black", value: "Black" },  
];