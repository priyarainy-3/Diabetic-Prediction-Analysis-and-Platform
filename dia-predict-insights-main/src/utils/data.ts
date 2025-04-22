
// Sample data representation of the Pima Indians Diabetes Dataset
export type DiabetesDataPoint = {
  id: number;
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigree: number;
  age: number;
  outcome: number;
};

// Column descriptions for the dataset
export const featureDescriptions = {
  pregnancies: "Number of times pregnant",
  glucose: "Plasma glucose concentration (2 hours in an oral glucose tolerance test)",
  bloodPressure: "Diastolic blood pressure (mm Hg)",
  skinThickness: "Triceps skin fold thickness (mm)",
  insulin: "2-Hour serum insulin (mu U/ml)",
  bmi: "Body mass index (weight in kg/(height in m)^2)",
  diabetesPedigree: "Diabetes pedigree function (a function which scores likelihood of diabetes based on family history)",
  age: "Age in years",
  outcome: "Class variable (0: non-diabetic, 1: diabetic)"
};

// Feature importance from a pre-trained model (for visualization)
export const featureImportance = [
  { feature: "Glucose", importance: 0.242 },
  { feature: "BMI", importance: 0.201 },
  { feature: "Age", importance: 0.152 },
  { feature: "DiabetesPedigree", importance: 0.118 },
  { feature: "Pregnancies", importance: 0.111 },
  { feature: "BloodPressure", importance: 0.088 },
  { feature: "SkinThickness", importance: 0.051 },
  { feature: "Insulin", importance: 0.037 }
];

// Sample dataset (first 20 entries of the Pima Indians Diabetes Dataset)
export const sampleData: DiabetesDataPoint[] = [
  { id: 1, pregnancies: 6, glucose: 148, bloodPressure: 72, skinThickness: 35, insulin: 0, bmi: 33.6, diabetesPedigree: 0.627, age: 50, outcome: 1 },
  { id: 2, pregnancies: 1, glucose: 85, bloodPressure: 66, skinThickness: 29, insulin: 0, bmi: 26.6, diabetesPedigree: 0.351, age: 31, outcome: 0 },
  { id: 3, pregnancies: 8, glucose: 183, bloodPressure: 64, skinThickness: 0, insulin: 0, bmi: 23.3, diabetesPedigree: 0.672, age: 32, outcome: 1 },
  { id: 4, pregnancies: 1, glucose: 89, bloodPressure: 66, skinThickness: 23, insulin: 94, bmi: 28.1, diabetesPedigree: 0.167, age: 21, outcome: 0 },
  { id: 5, pregnancies: 0, glucose: 137, bloodPressure: 40, skinThickness: 35, insulin: 168, bmi: 43.1, diabetesPedigree: 2.288, age: 33, outcome: 1 },
  { id: 6, pregnancies: 5, glucose: 116, bloodPressure: 74, skinThickness: 0, insulin: 0, bmi: 25.6, diabetesPedigree: 0.201, age: 30, outcome: 0 },
  { id: 7, pregnancies: 3, glucose: 78, bloodPressure: 50, skinThickness: 32, insulin: 88, bmi: 31.0, diabetesPedigree: 0.248, age: 26, outcome: 1 },
  { id: 8, pregnancies: 10, glucose: 115, bloodPressure: 0, skinThickness: 0, insulin: 0, bmi: 35.3, diabetesPedigree: 0.134, age: 29, outcome: 0 },
  { id: 9, pregnancies: 2, glucose: 197, bloodPressure: 70, skinThickness: 45, insulin: 543, bmi: 30.5, diabetesPedigree: 0.158, age: 53, outcome: 1 },
  { id: 10, pregnancies: 8, glucose: 125, bloodPressure: 96, skinThickness: 0, insulin: 0, bmi: 0.0, diabetesPedigree: 0.232, age: 54, outcome: 1 },
  { id: 11, pregnancies: 4, glucose: 110, bloodPressure: 92, skinThickness: 0, insulin: 0, bmi: 37.6, diabetesPedigree: 0.191, age: 30, outcome: 0 },
  { id: 12, pregnancies: 10, glucose: 168, bloodPressure: 74, skinThickness: 0, insulin: 0, bmi: 38.0, diabetesPedigree: 0.537, age: 34, outcome: 1 },
  { id: 13, pregnancies: 10, glucose: 139, bloodPressure: 80, skinThickness: 0, insulin: 0, bmi: 27.1, diabetesPedigree: 1.441, age: 57, outcome: 0 },
  { id: 14, pregnancies: 1, glucose: 189, bloodPressure: 60, skinThickness: 23, insulin: 846, bmi: 30.1, diabetesPedigree: 0.398, age: 59, outcome: 1 },
  { id: 15, pregnancies: 5, glucose: 166, bloodPressure: 72, skinThickness: 19, insulin: 175, bmi: 25.8, diabetesPedigree: 0.587, age: 51, outcome: 1 },
  { id: 16, pregnancies: 7, glucose: 100, bloodPressure: 0, skinThickness: 0, insulin: 0, bmi: 30.0, diabetesPedigree: 0.484, age: 32, outcome: 1 },
  { id: 17, pregnancies: 0, glucose: 118, bloodPressure: 84, skinThickness: 47, insulin: 230, bmi: 45.8, diabetesPedigree: 0.551, age: 31, outcome: 1 },
  { id: 18, pregnancies: 7, glucose: 107, bloodPressure: 74, skinThickness: 0, insulin: 0, bmi: 29.6, diabetesPedigree: 0.254, age: 31, outcome: 1 },
  { id: 19, pregnancies: 1, glucose: 103, bloodPressure: 30, skinThickness: 38, insulin: 83, bmi: 43.3, diabetesPedigree: 0.183, age: 33, outcome: 0 },
  { id: 20, pregnancies: 1, glucose: 115, bloodPressure: 70, skinThickness: 30, insulin: 96, bmi: 34.6, diabetesPedigree: 0.529, age: 32, outcome: 1 }
];

// Distribution of values for each feature (for visualizations)
export const featureDistributions = {
  pregnancies: {
    bins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    counts: [111, 135, 103, 75, 68, 57, 50, 45, 38, 28, 38]
  },
  glucose: {
    bins: [0, 40, 80, 120, 160, 200],
    counts: [5, 25, 190, 320, 170, 58]
  },
  bloodPressure: {
    bins: [0, 30, 60, 90, 120],
    counts: [35, 15, 410, 295, 13]
  },
  skinThickness: {
    bins: [0, 10, 20, 30, 40, 50, 60],
    counts: [227, 43, 213, 165, 95, 25, 0]
  },
  insulin: {
    bins: [0, 100, 200, 300, 400, 500, 600, 700, 800],
    counts: [374, 170, 102, 55, 26, 16, 15, 8, 2]
  },
  bmi: {
    bins: [0, 10, 20, 30, 40, 50, 60, 70],
    counts: [11, 5, 133, 325, 168, 22, 3, 1]
  }
};

// Class distribution (Diabetic vs Non-diabetic)
export const classDistribution = [
  { name: "Non-Diabetic", value: 500 },
  { name: "Diabetic", value: 268 }
];

// Correlation matrix for features
export const correlationMatrix = [
  { feature1: "Pregnancies", feature2: "Glucose", correlation: 0.129 },
  { feature1: "Pregnancies", feature2: "BloodPressure", correlation: 0.141 },
  { feature1: "Pregnancies", feature2: "SkinThickness", correlation: 0.018 },
  { feature1: "Pregnancies", feature2: "Insulin", correlation: -0.012 },
  { feature1: "Pregnancies", feature2: "BMI", correlation: 0.017 },
  { feature1: "Pregnancies", feature2: "DiabetesPedigree", correlation: -0.034 },
  { feature1: "Pregnancies", feature2: "Age", correlation: 0.544 },
  { feature1: "Pregnancies", feature2: "Outcome", correlation: 0.222 },
  { feature1: "Glucose", feature2: "BloodPressure", correlation: 0.153 },
  { feature1: "Glucose", feature2: "SkinThickness", correlation: 0.057 },
  { feature1: "Glucose", feature2: "Insulin", correlation: 0.331 },
  { feature1: "Glucose", feature2: "BMI", correlation: 0.222 },
  { feature1: "Glucose", feature2: "DiabetesPedigree", correlation: 0.137 },
  { feature1: "Glucose", feature2: "Age", correlation: 0.264 },
  { feature1: "Glucose", feature2: "Outcome", correlation: 0.467 },
  { feature1: "BloodPressure", feature2: "SkinThickness", correlation: 0.207 },
  { feature1: "BloodPressure", feature2: "Insulin", correlation: 0.089 },
  { feature1: "BloodPressure", feature2: "BMI", correlation: 0.282 },
  { feature1: "BloodPressure", feature2: "DiabetesPedigree", correlation: 0.041 },
  { feature1: "BloodPressure", feature2: "Age", correlation: 0.240 },
  { feature1: "BloodPressure", feature2: "Outcome", correlation: 0.065 },
  { feature1: "SkinThickness", feature2: "Insulin", correlation: 0.436 },
  { feature1: "SkinThickness", feature2: "BMI", correlation: 0.392 },
  { feature1: "SkinThickness", feature2: "DiabetesPedigree", correlation: 0.184 },
  { feature1: "SkinThickness", feature2: "Age", correlation: -0.114 },
  { feature1: "SkinThickness", feature2: "Outcome", correlation: 0.075 },
  { feature1: "Insulin", feature2: "BMI", correlation: 0.197 },
  { feature1: "Insulin", feature2: "DiabetesPedigree", correlation: 0.185 },
  { feature1: "Insulin", feature2: "Age", correlation: -0.042 },
  { feature1: "Insulin", feature2: "Outcome", correlation: 0.130 },
  { feature1: "BMI", feature2: "DiabetesPedigree", correlation: 0.141 },
  { feature1: "BMI", feature2: "Age", correlation: 0.036 },
  { feature1: "BMI", feature2: "Outcome", correlation: 0.293 },
  { feature1: "DiabetesPedigree", feature2: "Age", correlation: 0.034 },
  { feature1: "DiabetesPedigree", feature2: "Outcome", correlation: 0.174 },
  { feature1: "Age", feature2: "Outcome", correlation: 0.238 }
];

// Model performance metrics
export const modelPerformance = [
  {
    name: "Logistic Regression",
    accuracy: 0.78,
    precision: 0.72,
    recall: 0.61,
    f1Score: 0.66,
    auc: 0.82
  },
  {
    name: "Decision Tree",
    accuracy: 0.74,
    precision: 0.67,
    recall: 0.66,
    f1Score: 0.66,
    auc: 0.70
  },
  {
    name: "Random Forest",
    accuracy: 0.82,
    precision: 0.77,
    recall: 0.69,
    f1Score: 0.73,
    auc: 0.86
  },
  {
    name: "Gradient Boosting",
    accuracy: 0.84,
    precision: 0.79,
    recall: 0.72,
    f1Score: 0.75,
    auc: 0.88
  }
];

// Confusion matrix for best model
export const confusionMatrix = {
  trueNegative: 102,
  falsePositive: 23,
  falseNegative: 15,
  truePositive: 38
};
