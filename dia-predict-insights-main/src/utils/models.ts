
import { toast } from "@/components/ui/use-toast";

export type PredictionInput = {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigree: number;
  age: number;
};

export type PredictionResult = {
  probability: number;
  prediction: "Diabetic" | "Non-Diabetic";
  confidenceLevel: "Low" | "Medium" | "High";
  riskFactors: string[];
};

// Feature value ranges for validation
export const featureRanges = {
  pregnancies: { min: 0, max: 17 },
  glucose: { min: 0, max: 199 },
  bloodPressure: { min: 0, max: 122 },
  skinThickness: { min: 0, max: 99 },
  insulin: { min: 0, max: 846 },
  bmi: { min: 0, max: 67.1 },
  diabetesPedigree: { min: 0.078, max: 2.42 },
  age: { min: 21, max: 81 }
};

// Validate input is within expected ranges
export function validateInput(input: PredictionInput): boolean {
  const validations = [
    input.pregnancies >= featureRanges.pregnancies.min && input.pregnancies <= featureRanges.pregnancies.max,
    input.glucose >= featureRanges.glucose.min && input.glucose <= featureRanges.glucose.max,
    input.bloodPressure >= featureRanges.bloodPressure.min && input.bloodPressure <= featureRanges.bloodPressure.max,
    input.skinThickness >= featureRanges.skinThickness.min && input.skinThickness <= featureRanges.skinThickness.max,
    input.insulin >= featureRanges.insulin.min && input.insulin <= featureRanges.insulin.max,
    input.bmi >= featureRanges.bmi.min && input.bmi <= featureRanges.bmi.max,
    input.diabetesPedigree >= featureRanges.diabetesPedigree.min && input.diabetesPedigree <= featureRanges.diabetesPedigree.max,
    input.age >= featureRanges.age.min && input.age <= featureRanges.age.max
  ];

  return validations.every(isValid => isValid);
}

// Identify risk factors based on input values
function identifyRiskFactors(input: PredictionInput): string[] {
  const riskFactors: string[] = [];

  if (input.glucose > 140) riskFactors.push("High glucose level");
  if (input.bmi > 30) riskFactors.push("Obesity (high BMI)");
  if (input.age > 45) riskFactors.push("Age over 45");
  if (input.diabetesPedigree > 0.8) riskFactors.push("Family history of diabetes");
  if (input.bloodPressure > 90) riskFactors.push("High blood pressure");

  return riskFactors;
}

// Determine confidence level based on probability
function getConfidenceLevel(probability: number): "Low" | "Medium" | "High" {
  if (probability < 0.6) return "Low";
  if (probability < 0.8) return "Medium";
  return "High";
}

// Simplified model prediction (in a real app, this would call a trained model)
export function predictDiabetes(input: PredictionInput): PredictionResult {
  try {
    if (!validateInput(input)) {
      toast({
        title: "Invalid input values",
        description: "Some input values are outside expected ranges.",
        variant: "destructive"
      });
      throw new Error("Invalid input values");
    }

    // This is a simplified logistic regression model based on the actual coefficients
    // from a trained model on the Pima Indians dataset
    const coefficients = {
      intercept: -8.4,
      pregnancies: 0.12,
      glucose: 0.035,
      bloodPressure: -0.001,
      skinThickness: 0.001,
      insulin: 0.0002,
      bmi: 0.089,
      diabetesPedigree: 0.94,
      age: 0.014
    };

    // Calculate the linear prediction
    let linearPrediction = coefficients.intercept;
    linearPrediction += coefficients.pregnancies * input.pregnancies;
    linearPrediction += coefficients.glucose * input.glucose;
    linearPrediction += coefficients.bloodPressure * input.bloodPressure;
    linearPrediction += coefficients.skinThickness * input.skinThickness;
    linearPrediction += coefficients.insulin * input.insulin;
    linearPrediction += coefficients.bmi * input.bmi;
    linearPrediction += coefficients.diabetesPedigree * input.diabetesPedigree;
    linearPrediction += coefficients.age * input.age;

    // Convert to probability with sigmoid function
    const probability = 1 / (1 + Math.exp(-linearPrediction));
    
    // Determine prediction and confidence
    const prediction = probability >= 0.5 ? "Diabetic" : "Non-Diabetic";
    const confidenceLevel = getConfidenceLevel(Math.max(probability, 1 - probability));
    
    // Identify risk factors
    const riskFactors = identifyRiskFactors(input);

    return {
      probability: parseFloat(probability.toFixed(4)),
      prediction,
      confidenceLevel,
      riskFactors
    };
  } catch (error) {
    console.error("Prediction error:", error);
    throw error;
  }
}
