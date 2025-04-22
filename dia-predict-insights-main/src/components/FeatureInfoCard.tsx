
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featureImportance, featureDescriptions } from "@/utils/data";

export function FeatureInfoCard() {
  // Sort features by importance
  const sortedFeatures = [...featureImportance].sort((a, b) => b.importance - a.importance);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Risk Factors</CardTitle>
        <CardDescription>The most important features in diabetes prediction</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedFeatures.slice(0, 4).map((feature, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{feature.feature}</h3>
                <span className="text-sm text-muted-foreground">
                  Importance: {(feature.importance * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${feature.importance * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground">
                {featureDescriptions[feature.feature.toLowerCase() as keyof typeof featureDescriptions]}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
