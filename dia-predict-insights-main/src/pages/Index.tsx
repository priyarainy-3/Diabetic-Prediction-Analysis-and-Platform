
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { DataTable } from "@/components/DataTable";
import { DataVisualizations } from "@/components/DataVisualizations";
import { ModelComparison } from "@/components/ModelComparison";
import { PredictionForm } from "@/components/PredictionForm";
import { FeatureInfoCard } from "@/components/FeatureInfoCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-medical-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Diabetes Prediction & Analysis Platform
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore the Pima Indians Diabetes Dataset, compare ML models, and predict diabetes risk with our interactive tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="data-exploration" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Data Exploration</h2>
                <p className="text-muted-foreground">
                  Explore the Pima Indians Diabetes Dataset through visualizations and tabular views.
                </p>
              </div>
              
              <Tabs defaultValue="visualizations" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="visualizations">Visualizations</TabsTrigger>
                  <TabsTrigger value="data-table">Data Table</TabsTrigger>
                </TabsList>
                <TabsContent value="visualizations" className="space-y-6">
                  <DataVisualizations />
                </TabsContent>
                <TabsContent value="data-table">
                  <DataTable />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        <section id="model-comparison" className="w-full py-12 md:py-24 bg-medical-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Model Comparison</h2>
                <p className="text-muted-foreground">
                  Compare the performance of different machine learning models for diabetes prediction.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <ModelComparison />
                </div>
                <div>
                  <FeatureInfoCard />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="prediction" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Make a Prediction</h2>
                <p className="text-muted-foreground">
                  Use our predictive model to estimate diabetes risk based on patient data.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4 md:col-span-1">
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">How to Use</h3>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>Enter patient data using the sliders or number inputs</li>
                      <li>Click "Predict" to get a diagnosis prediction</li>
                      <li>Review the results and identified risk factors</li>
                      <li>Click "Reset" to start a new prediction</li>
                    </ol>
                    <div className="mt-6 p-4 bg-medical-100 rounded-lg">
                      <h4 className="font-medium text-medical-800 mb-2">Note:</h4>
                      <p className="text-sm text-medical-700">
                        This tool uses a simplified logistic regression model based on the Pima Indians Diabetes Dataset.
                        It should not be used for actual medical diagnosis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <PredictionForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
