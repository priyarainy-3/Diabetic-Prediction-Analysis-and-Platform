
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span className="text-lg font-bold">DiaPredictInsights</span>
          </a>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <a href="#data-exploration" className="text-muted-foreground transition-colors hover:text-foreground">
              Data Exploration
            </a>
            <a href="#model-comparison" className="text-muted-foreground transition-colors hover:text-foreground">
              Model Comparison
            </a>
            <a href="#prediction" className="text-muted-foreground transition-colors hover:text-foreground">
              Make Prediction
            </a>
          </nav>
          
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/jbrownlee/Datasets/blob/master/pima-indians-diabetes.names" target="_blank" rel="noopener noreferrer">
              Dataset Info
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
