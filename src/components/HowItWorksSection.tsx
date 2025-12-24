import { Upload, Cpu, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Image",
    description: "Take a photo or upload an existing image of the plant leaf you want to analyze.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analysis",
    description: "Our deep learning model processes the image and identifies potential diseases.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Get Results",
    description: "Receive detailed results with disease name, confidence score, and recommendations.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to identify plant diseases and protect your garden
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-border" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Number Badge */}
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl gradient-hero flex items-center justify-center shadow-glow">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    {step.step}
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
