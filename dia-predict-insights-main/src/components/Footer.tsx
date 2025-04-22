
export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          DiaPredictInsights - Built with React, TypeScript, and Tailwind CSS.
          This is a demo application for educational purposes only.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a 
            href="https://github.com/jbrownlee/Datasets/blob/master/pima-indians-diabetes.data.csv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Dataset Source
          </a>
          <div>|</div>
          <a 
            href="#" 
            className="underline underline-offset-4"
          >
            Terms of Use
          </a>
          <div>|</div>
          <a 
            href="#" 
            className="underline underline-offset-4"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
