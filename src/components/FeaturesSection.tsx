import { Camera, Zap, Shield, Smartphone, Database, Clock } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Easy Image Capture",
    description: "Simply upload or take a photo of any plant leaf using your device's camera.",
  },
  {
    icon: Zap,
    title: "Instant Analysis",
    description: "Get results in seconds with our optimized AI model designed for speed.",
  },
  {
    icon: Shield,
    title: "High Accuracy",
    description: "Trained on thousands of images for reliable disease detection.",
  },
  {
    icon: Database,
    title: "50+ Diseases",
    description: "Comprehensive database covering common plant diseases across species.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Optimized for mobile devices, perfect for use in the field.",
  },
  {
    icon: Clock,
    title: "Early Detection",
    description: "Catch diseases early before they spread to protect your crops.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Why Choose PlantDoc?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform provides everything you need to keep your plants healthy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:shadow-glow transition-all">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
