import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Leaf, Target, Users, Lightbulb, CheckCircle, Code, Rocket, Award } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const Report = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Project Overview",
      icon: <Leaf className="w-12 h-12 text-primary" />,
      content: (
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">AI-Powered Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Plant Disease Identifier
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An intelligent mobile-friendly application that identifies plant diseases from leaf images using advanced image classification technology.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-6">
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Diseases</div>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="text-2xl font-bold text-primary">&lt;3s</div>
              <div className="text-sm text-muted-foreground">Analysis</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Problem Statement",
      icon: <Target className="w-12 h-12 text-destructive" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center">
            The Problem We Are Solving
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-destructive/10 rounded-2xl border border-destructive/20">
              <h3 className="text-xl font-semibold text-destructive mb-4">Challenges Faced</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2"></span>
                  Farmers struggle to identify plant diseases early
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2"></span>
                  Lack of expert knowledge leads to crop loss
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2"></span>
                  Traditional diagnosis requires costly lab tests
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2"></span>
                  Delayed treatment results in significant damage
                </li>
              </ul>
            </div>
            <div className="p-6 bg-warning/10 rounded-2xl border border-warning/20">
              <h3 className="text-xl font-semibold text-warning mb-4">Impact Statistics</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-warning rounded-full mt-2"></span>
                  40% of global crops lost to diseases annually
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-warning rounded-full mt-2"></span>
                  $220 billion economic loss worldwide
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-warning rounded-full mt-2"></span>
                  Small farmers most affected
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-warning rounded-full mt-2"></span>
                  Early detection can prevent 80% of losses
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Target Audience",
      icon: <Users className="w-12 h-12 text-secondary" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center">
            Who Benefits From This Solution?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: "🌾", title: "Farmers", desc: "Small & large scale agricultural workers" },
              { icon: "🏡", title: "Home Gardeners", desc: "Hobbyists growing plants at home" },
              { icon: "🔬", title: "Researchers", desc: "Agricultural scientists & students" },
              { icon: "🌿", title: "Nurseries", desc: "Plant nursery owners & managers" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-card rounded-2xl border border-border text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 mt-6">
            <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Research Methods Used</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["User Interviews", "Online Research", "AI Analysis", "Field Observation", "Survey Data"].map((method, idx) => (
                <span key={idx} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Solution Ideation",
      icon: <Lightbulb className="w-12 h-12 text-warning" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center">
            Explored Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { num: 1, title: "AI Image Recognition App", desc: "Instant disease detection from photos", selected: true },
              { num: 2, title: "Community Forum", desc: "Farmers share disease photos for advice", selected: false },
              { num: 3, title: "SMS Reporting System", desc: "Text-based disease symptom checker", selected: false },
              { num: 4, title: "Drone Monitoring", desc: "Aerial crop health scanning", selected: false },
              { num: 5, title: "IoT Sensors", desc: "Real-time plant health monitoring", selected: false },
            ].map((solution) => (
              <div
                key={solution.num}
                className={`p-5 rounded-2xl border-2 transition-all ${
                  solution.selected
                    ? "bg-primary/10 border-primary shadow-lg"
                    : "bg-card border-border"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-3 ${
                  solution.selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {solution.num}
                </div>
                <h3 className={`font-semibold mb-2 ${solution.selected ? "text-primary" : "text-foreground"}`}>
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground">{solution.desc}</p>
                {solution.selected && (
                  <div className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-medium">
                    <CheckCircle className="w-4 h-4" /> Selected Solution
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Chosen Solution",
      icon: <CheckCircle className="w-12 h-12 text-success" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center">
            Why AI-Powered Image Recognition?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: "📱", title: "Accessible", desc: "Works on any smartphone with camera access" },
              { icon: "⚡", title: "Instant", desc: "Get results in under 3 seconds" },
              { icon: "🎯", title: "Accurate", desc: "99% accuracy with trained AI model" },
              { icon: "🌐", title: "Scalable", desc: "Can identify 50+ plant diseases" },
              { icon: "💡", title: "User-Friendly", desc: "Simple interface for non-technical users" },
              { icon: "💰", title: "Cost-Effective", desc: "Free to use, no expert fees required" },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-success/5 rounded-2xl border border-success/20 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Features Built",
      icon: <Code className="w-12 h-12 text-primary" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center">
            Key Features Implemented
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {[
              { icon: "📤", title: "Image Upload", desc: "Drag-and-drop or click to upload leaf images" },
              { icon: "📷", title: "Camera Capture", desc: "Take photos directly from device camera" },
              { icon: "🤖", title: "AI Analysis", desc: "Deep learning model for disease detection" },
              { icon: "📊", title: "Confidence Score", desc: "Percentage accuracy of diagnosis" },
              { icon: "✅", title: "Health Status", desc: "Clear healthy or infected indication" },
              { icon: "💊", title: "Recommendations", desc: "Treatment suggestions for detected diseases" },
              { icon: "📱", title: "Mobile Responsive", desc: "Works seamlessly on all devices" },
              { icon: "🎨", title: "Modern UI", desc: "Beautiful, intuitive user interface" },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Technology Stack",
      icon: <Code className="w-12 h-12 text-secondary" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center">
            Technologies Used
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vite", "Lucide Icons"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-secondary mb-4">AI & Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "Keras", "TensorFlow Lite", "Image Classification", "Deep Learning"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-card rounded-2xl border border-border md:col-span-2">
              <h3 className="text-xl font-semibold text-foreground mb-4">Dataset & Training</h3>
              <p className="text-muted-foreground mb-3">
                Model trained using the PlantVillage dataset from Kaggle containing 50,000+ images of healthy and diseased plant leaves across 38 categories.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PlantVillage Dataset", "Data Augmentation", "Image Preprocessing", "Model Optimization"].map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "Future Roadmap",
      icon: <Rocket className="w-12 h-12 text-warning" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center">
            Future Improvements
          </h2>
          <div className="relative mt-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
            <div className="space-y-8">
              {[
                { phase: "Phase 1", title: "Expand Disease Database", desc: "Add 100+ more plant diseases and conditions" },
                { phase: "Phase 2", title: "Offline PWA Support", desc: "Enable offline usage for field workers" },
                { phase: "Phase 3", title: "Multi-language Support", desc: "Add regional languages for wider accessibility" },
                { phase: "Phase 4", title: "Expert Consultation", desc: "Connect users with plant pathologists" },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-6 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`flex-1 p-5 bg-card rounded-2xl border border-border ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className="text-sm text-primary font-medium">{item.phase}</span>
                    <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title: "Conclusion",
      icon: <Award className="w-12 h-12 text-primary" />,
      content: (
        <div className="space-y-6 text-center">
          <Award className="w-16 h-16 text-primary mx-auto" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Thank You!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The Plant Disease Identifier empowers farmers and gardeners to quickly identify plant diseases using AI, enabling early preventive action and reducing crop losses.
          </p>
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 max-w-xl mx-auto">
            <h3 className="font-semibold text-foreground mb-3">Project Impact</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-primary">80%</div>
                <div className="text-xs text-muted-foreground">Faster Diagnosis</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success">40%</div>
                <div className="text-xs text-muted-foreground">Reduced Crop Loss</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warning">Free</div>
                <div className="text-xs text-muted-foreground">For All Users</div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Button variant="hero" size="xl" onClick={() => window.location.href = "/"}>
              Try PlantDoc Now
            </Button>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Helmet>
        <title>Project Report - Plant Disease Identifier | PlantDoc</title>
        <meta name="description" content="View the complete project report for Plant Disease Identifier - an AI-powered solution for plant health analysis." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="p-4 border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="font-display font-semibold text-foreground">PlantDoc</span>
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Slide {currentSlide + 1} of {slides.length}</span>
            </div>
          </div>
        </header>

        {/* Slide Content */}
        <main className="flex-1 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-5xl">
            <div className="bg-card rounded-3xl border border-border shadow-xl p-8 md:p-12 min-h-[500px] flex flex-col justify-center animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6 justify-center">
                {slides[currentSlide].icon}
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {slides[currentSlide].title}
                </span>
              </div>
              {slides[currentSlide].content}
            </div>
          </div>
        </main>

        {/* Navigation */}
        <footer className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevSlide}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </Button>

            {/* Slide Indicators */}
            <div className="hidden md:flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentSlide
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="default"
              onClick={nextSlide}
              className="flex items-center gap-2"
            >
              Next <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Report;
