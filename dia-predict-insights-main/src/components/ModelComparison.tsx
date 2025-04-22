
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { modelPerformance, confusionMatrix } from "@/utils/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export function ModelComparison() {
  const metrics = ["accuracy", "precision", "recall", "f1Score", "auc"];
  const metricLabels = {
    accuracy: "Accuracy",
    precision: "Precision",
    recall: "Recall",
    f1Score: "F1 Score",
    auc: "AUC-ROC"
  };
  
  // Format model performance data for radar chart
  const radarData = metrics.map(metric => {
    const entry: Record<string, any> = { metric: metricLabels[metric as keyof typeof metricLabels] };
    modelPerformance.forEach(model => {
      entry[model.name] = model[metric as keyof typeof model];
    });
    return entry;
  });
  
  // Format confusion matrix data for visualization
  const confusionMatrixData = [
    { name: "True Negative", value: confusionMatrix.trueNegative, category: "Correct", description: "Correctly predicted non-diabetic" },
    { name: "False Positive", value: confusionMatrix.falsePositive, category: "Error", description: "Incorrectly predicted diabetic" },
    { name: "False Negative", value: confusionMatrix.falseNegative, category: "Error", description: "Incorrectly predicted non-diabetic" },
    { name: "True Positive", value: confusionMatrix.truePositive, category: "Correct", description: "Correctly predicted diabetic" },
  ];
  
  return (
    <Tabs defaultValue="overall" className="w-full">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="overall">Overall Comparison</TabsTrigger>
        <TabsTrigger value="metric">Metrics Comparison</TabsTrigger>
        <TabsTrigger value="confusion">Confusion Matrix</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overall" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Model Performance Overview</CardTitle>
            <CardDescription>Comparing the performance of different ML models</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={90} domain={[0, 1]} />
                  {modelPerformance.map((model, index) => (
                    <Radar 
                      key={model.name} 
                      name={model.name} 
                      dataKey={model.name} 
                      stroke={`hsl(${199 - index * 30}, 89%, ${48 - index * 5}%)`} 
                      fill={`hsl(${199 - index * 30}, 89%, ${48 - index * 5}%, 0.6)`} 
                    />
                  ))}
                  <Legend />
                  <Tooltip formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`, ""]} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="metric" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Performance by Metric</CardTitle>
            <CardDescription>Detailed comparison of model performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={modelPerformance}
                  margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45} 
                    textAnchor="end" 
                    height={70} 
                  />
                  <YAxis domain={[0, 1]} />
                  <Tooltip formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`, ""]} />
                  <Legend />
                  {metrics.map((metric, index) => (
                    <Bar 
                      key={metric} 
                      dataKey={metric} 
                      name={metricLabels[metric as keyof typeof metricLabels]}
                      fill={`hsl(${199 - index * 20}, ${90 - index * 5}%, ${48 - index * 3}%)`} 
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="confusion" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Confusion Matrix (Best Model)</CardTitle>
            <CardDescription>Performance of the Gradient Boosting model on test data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-8">
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-green-100 border border-green-300 p-4 rounded-md">
                  <div className="text-3xl font-bold text-green-700">{confusionMatrix.trueNegative}</div>
                  <div className="text-sm mt-2 text-gray-600">True Negative</div>
                  <div className="text-xs mt-1 text-gray-500">Correctly identified as non-diabetic</div>
                </div>
                <div className="bg-red-100 border border-red-300 p-4 rounded-md">
                  <div className="text-3xl font-bold text-red-700">{confusionMatrix.falsePositive}</div>
                  <div className="text-sm mt-2 text-gray-600">False Positive</div>
                  <div className="text-xs mt-1 text-gray-500">Incorrectly identified as diabetic</div>
                </div>
                <div className="bg-red-100 border border-red-300 p-4 rounded-md">
                  <div className="text-3xl font-bold text-red-700">{confusionMatrix.falseNegative}</div>
                  <div className="text-sm mt-2 text-gray-600">False Negative</div>
                  <div className="text-xs mt-1 text-gray-500">Incorrectly identified as non-diabetic</div>
                </div>
                <div className="bg-green-100 border border-green-300 p-4 rounded-md">
                  <div className="text-3xl font-bold text-green-700">{confusionMatrix.truePositive}</div>
                  <div className="text-sm mt-2 text-gray-600">True Positive</div>
                  <div className="text-xs mt-1 text-gray-500">Correctly identified as diabetic</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Performance Metrics:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Accuracy: <span className="font-medium">{(((confusionMatrix.truePositive + confusionMatrix.trueNegative) / 
                  (confusionMatrix.truePositive + confusionMatrix.trueNegative + 
                   confusionMatrix.falsePositive + confusionMatrix.falseNegative)) * 100).toFixed(1)}%</span></div>
                  <div>Precision: <span className="font-medium">{((confusionMatrix.truePositive / 
                  (confusionMatrix.truePositive + confusionMatrix.falsePositive)) * 100).toFixed(1)}%</span></div>
                  <div>Recall: <span className="font-medium">{((confusionMatrix.truePositive / 
                  (confusionMatrix.truePositive + confusionMatrix.falseNegative)) * 100).toFixed(1)}%</span></div>
                  <div>Specificity: <span className="font-medium">{((confusionMatrix.trueNegative / 
                  (confusionMatrix.trueNegative + confusionMatrix.falsePositive)) * 100).toFixed(1)}%</span></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
