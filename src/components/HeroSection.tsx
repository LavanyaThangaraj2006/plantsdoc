import { ArrowDown, Camera, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-plant.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Healthy plant leaves" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      <div className="absolute inset-0 leaf-pattern opacity-30" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">AI-Powered Plant Diagnosis</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Identify Plant Diseases
            <span className="block text-primary mt-2">In Seconds</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Upload a photo of any plant leaf and our AI will instantly detect diseases, 
            providing you with actionable insights to protect your crops and garden.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button size="xl" onClick={onGetStarted} className="group">
              <Camera className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Scan Your Plant
            </Button>
            <Button variant="outline" size="xl">
              Learn More
            </Button>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-sm text-foreground">99% Accuracy</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
              <Zap className="w-4 h-4 text-warning" />
              <span className="text-sm text-foreground">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">50+ Diseases</span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
