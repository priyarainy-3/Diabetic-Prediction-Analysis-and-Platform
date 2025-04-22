
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featureImportance, classDistribution, correlationMatrix, featureDistributions } from "@/utils/data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis } from 'recharts';

const COLORS = ['#0284c7', '#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd'];

export function DataVisualizations() {
  const [selectedFeature, setSelectedFeature] = useState("glucose");
  
  const handleFeatureChange = (value: string) => {
    setSelectedFeature(value);
  };
  
  return (
    <Tabs defaultValue="class-distribution" className="w-full">
      <TabsList className="grid grid-cols-4">
        <TabsTrigger value="class-distribution">Class Distribution</TabsTrigger>
        <TabsTrigger value="feature-importance">Feature Importance</TabsTrigger>
        <TabsTrigger value="feature-distribution">Feature Distribution</TabsTrigger>
        <TabsTrigger value="correlation">Correlation Analysis</TabsTrigger>
      </TabsList>
      
      <TabsContent value="class-distribution" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Class Distribution</CardTitle>
            <CardDescription>Distribution of diabetic vs non-diabetic cases in the dataset</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={classDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {classDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? "#0ea5e9" : "#ef4444"} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} patients`, ""]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="feature-importance" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Feature Importance</CardTitle>
            <CardDescription>Relative importance of each feature in predicting diabetes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={featureImportance.sort((a, b) => b.importance - a.importance)}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, Math.ceil(Math.max(...featureImportance.map(f => f.importance)) * 10) / 10]} />
                  <YAxis dataKey="feature" type="category" />
                  <Tooltip formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`, "Importance"]} />
                  <Bar dataKey="importance" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="feature-distribution" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Feature Distribution</CardTitle>
            <CardDescription>Distribution of values for selected feature</CardDescription>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-2">
              {Object.keys(featureDistributions).map((feature) => (
                <button
                  key={feature}
                  onClick={() => handleFeatureChange(feature)}
                  className={`px-3 py-1 text-xs rounded-full capitalize ${
                    selectedFeature === feature 
                      ? "bg-primary text-white" 
                      : "bg-secondary text-primary hover:bg-secondary/80"
                  }`}
                >
                  {feature}
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={featureDistributions[selectedFeature as keyof typeof featureDistributions].bins.map((bin, index) => ({
                    bin: bin,
                    count: featureDistributions[selectedFeature as keyof typeof featureDistributions].counts[index]
                  }))}
                  margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="bin" 
                    label={{ 
                      value: selectedFeature.charAt(0).toUpperCase() + selectedFeature.slice(1), 
                      position: 'insideBottom',
                      offset: -10
                    }} 
                  />
                  <YAxis 
                    label={{ 
                      value: 'Frequency', 
                      angle: -90, 
                      position: 'insideLeft',
                      offset: -5
                    }} 
                  />
                  <Tooltip />
                  <Bar dataKey="count" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="correlation" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Feature Correlation with Outcome</CardTitle>
            <CardDescription>How strongly each feature correlates with diabetes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={correlationMatrix
                    .filter(item => item.feature2 === "Outcome")
                    .sort((a, b) => Math.abs(b.correlation) - Math.abs(a.correlation))
                    .map(item => ({
                      feature: item.feature1,
                      correlation: parseFloat(item.correlation.toFixed(3))
                    }))}
                  margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[-0.5, 0.5]} />
                  <YAxis dataKey="feature" type="category" />
                  <Tooltip formatter={(value) => [`${(Number(value)).toFixed(3)}`, "Correlation"]} />
                  <Bar dataKey="correlation" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
