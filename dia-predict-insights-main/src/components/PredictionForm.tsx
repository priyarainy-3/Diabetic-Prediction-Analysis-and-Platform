
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { PredictionInput, predictDiabetes, PredictionResult, featureRanges } from "@/utils/models";
import { featureDescriptions } from "@/utils/data";
import { AlertCircle, HelpCircle, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function PredictionForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PredictionInput>({
    pregnancies: 0,
    glucose: 120,
    bloodPressure: 70,
    skinThickness: 20,
    insulin: 80,
    bmi: 25,
    diabetesPedigree: 0.5,
    age: 30
  });
  
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleInputChange = (name: keyof PredictionInput, value: number) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePredict = () => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      try {
        const prediction = predictDiabetes(formData);
        setResult(prediction);
      } catch (error) {
        toast({
          title: "Prediction Error",
          description: "An error occurred during prediction. Please check your inputs.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    }, 800);
  };
  
  const handleReset = () => {
    setFormData({
      pregnancies: 0,
      glucose: 120,
      bloodPressure: 70,
      skinThickness: 20,
      insulin: 80,
      bmi: 25,
      diabetesPedigree: 0.5,
      age: 30
    });
    setResult(null);
  };
  
  return (
    <div className="w-full space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Diabetes Prediction</CardTitle>
          <CardDescription>Enter patient data to predict diabetes risk</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pregnancies */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Label htmlFor="pregnancies" className="mr-2">Pregnancies</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{featureDescriptions.pregnancies}</p>
                      <p className="text-xs text-muted-foreground mt-1">Range: {featureRanges.pregnancies.min} - {featureRanges.pregnancies.max}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex space-x-2 items-center">
                <Slider
                  id="pregnancies"
                  value={[formData.pregnancies]}
                  min={0}
                  max={17}
                  step={1}
                  onValueChange={(values) => handleInputChange("pregnancies", values[0])}
                />
                <Input
                  type="number"
                  value={formData.pregnancies}
                  onChange={(e) => handleInputChange("pregnancies", Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>
            
            {/* Glucose */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Label htmlFor="glucose" className="mr-2">Glucose</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{featureDescriptions.glucose}</p>
                      <p className="text-xs text-muted-foreground mt-1">Range: {featureRanges.glucose.min} - {featureRanges.glucose.max}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex space-x-2 items-center">
                <Slider
                  id="glucose"
                  value={[formData.glucose]}
                  min={0}
                  max={200}
                  step={1}
                  onValueChange={(values) => handleInputChange("glucose", values[0])}
                />
                <Input
                  type="number"
                  value={formData.glucose}
                  onChange={(e) => handleInputChange("glucose", Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>
            
            {/* Blood Pressure */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Label htmlFor="bloodPressure" className="mr-2">Blood Pressure</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{featureDescriptions.bloodPressure}</p>
                      <p className="text-xs text-muted-foreground mt-1">Range: {featureRanges.bloodPressure.min} - {featureRanges.bloodPressure.max}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex space-x-2 items-center">
                <Slider
                  id="bloodPressure"
                  value={[formData.bloodPressure]}
                  min={0}
                  max={130}
                  step={1}
                  onValueChange={(values) => handleInputChange("bloodPressure", values[0])}
                />
                <Input
                  type="number"
                  value={formData.bloodPressure}
                  onChange={(e) => handleInputChange("bloodPressure", Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>
            
            {/* Skin Thickness */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Label htmlFor="skinThickness" className="mr-2">Skin Thickness</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{featureDescriptions.skinThickness}</p>
                      <p className="text-xs text-muted-foreground mt-1">Range: {featureRanges.skinThickness.min} - {featureRanges.skinThickness.max}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex space-x-2 items-center">
                <Slider
                  id="skinThickness"
                  value={[formData.skinThickness]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(values) => handleInputChange("skinThickness", values[0])}
                />
                <Input
                  type="number"
                  value={formData.skinThickness}
                  onChange={(e) => handleInputChange("skinThickness", Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>
            
            {/* Insulin */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Label htmlFor="insulin" className="mr-2">Insulin</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{featureDescriptions.insulin}</p>
                      <p className="text-xs text-muted-foreground mt-1">Range: {featureRanges.insulin.min} - {featureRanges.insulin.max}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex space-x-2 items-center">
                <Slider
                  id="insulin"
                  value={[formData.insulin]}
                  min={0}
                  max={850}
                  step={5}
                  onValueChange={(values) => handleInputChange("insulin", values[0])}
                />
                <Input
                  type="number"
                  value={formData.insulin}
                  onChange={(e) => handleInputChange("insulin", Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>
            
            {/* BMI */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Label htmlFor="bmi" className="mr-2">BMI</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{featureDescriptions.bmi}</p>
                      <p className="text-xs text-muted-foreground mt-1">Range: {featureRanges.bmi.min} - {featureRanges.bmi.max}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex space-x-2 items-center">
                <Slider
                  id="bmi"
                  value={[formData.bmi]}
                  min={10}
                  max={70}
                  step={0.1}
                  onValueChange={(values) => handleInputChange("bmi", values[0])}
                />
                <Input
                  type="number"
                  value={formData.bmi}
                  onChange={(e) => handleInputChange("bmi", Number(e.target.value))}
                  className="w-20"
                  step="0.1"
                />
              </div>
            </div>
            
            {/* Diabetes Pedigree */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Label htmlFor="diabetesPedigree" className="mr-2">Diabetes Pedigree</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{featureDescriptions.diabetesPedigree}</p>
                      <p className="text-xs text-muted-foreground mt-1">Range: {featureRanges.diabetesPedigree.min} - {featureRanges.diabetesPedigree.max}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex space-x-2 items-center">
                <Slider
                  id="diabetesPedigree"
                  value={[formData.diabetesPedigree]}
                  min={0.078}
                  max={2.42}
                  step={0.001}
                  onValueChange={(values) => handleInputChange("diabetesPedigree", values[0])}
                />
                <Input
                  type="number"
                  value={formData.diabetesPedigree}
                  onChange={(e) => handleInputChange("diabetesPedigree", Number(e.target.value))}
                  className="w-20"
                  step="0.001"
                />
              </div>
            </div>
            
            {/* Age */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Label htmlFor="age" className="mr-2">Age</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{featureDescriptions.age}</p>
                      <p className="text-xs text-muted-foreground mt-1">Range: {featureRanges.age.min} - {featureRanges.age.max}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex space-x-2 items-center">
                <Slider
                  id="age"
                  value={[formData.age]}
                  min={21}
                  max={81}
                  step={1}
                  onValueChange={(values) => handleInputChange("age", values[0])}
                />
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleReset}>Reset</Button>
          <Button onClick={handlePredict} disabled={isLoading}>
            {isLoading ? "Processing..." : "Predict"}
          </Button>
        </CardFooter>
      </Card>
      
      {result && (
        <Card>
          <CardHeader className={result.prediction === "Diabetic" ? "bg-red-50" : "bg-green-50"}>
            <CardTitle className="flex items-center">
              <span className={result.prediction === "Diabetic" ? "text-red-600" : "text-green-600"}>
                {result.prediction} 
              </span>
              <span className="text-base ml-2 font-normal">
                ({(result.probability * 100).toFixed(1)}% probability)
              </span>
            </CardTitle>
            <CardDescription>
              <span className="font-medium">Confidence: {result.confidenceLevel}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {result.riskFactors.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                    Risk Factors Identified
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {result.riskFactors.map((factor, index) => (
                      <li key={index}>{factor}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex items-start space-x-2 text-sm border-t pt-4">
                <Info className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <p className="text-muted-foreground">
                  This prediction is based on a simplified logistic regression model trained on the Pima Indians Diabetes Dataset. 
                  It should not replace professional medical advice.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
