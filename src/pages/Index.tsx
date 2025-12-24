import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageUploader from "@/components/ImageUploader";
import ResultsDisplay, { AnalysisResult } from "@/components/ResultsDisplay";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";
import { toast } from "sonner";

// Mock analysis function - will be replaced with real AI integration
const analyzeImage = async (imageData: string): Promise<AnalysisResult> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock responses for demonstration
  const mockResults: AnalysisResult[] = [
    {
      diseaseName: "Healthy Plant",
      confidence: 0.95,
      isHealthy: true,
      description: "Your plant appears to be in excellent health with no visible signs of disease.",
      recommendations: [
        "Continue your current watering schedule",
        "Ensure adequate sunlight exposure",
        "Monitor regularly for any changes",
        "Apply balanced fertilizer monthly during growing season",
      ],
    },
    {
      diseaseName: "Leaf Blight",
      confidence: 0.87,
      isHealthy: false,
      description: "Brown spots with yellow halos indicate fungal infection commonly known as leaf blight.",
      recommendations: [
        "Remove and destroy infected leaves immediately",
        "Apply copper-based fungicide to remaining foliage",
        "Improve air circulation around the plant",
        "Avoid overhead watering to prevent spread",
        "Consider crop rotation next season",
      ],
    },
    {
      diseaseName: "Powdery Mildew",
      confidence: 0.92,
      isHealthy: false,
      description: "White powdery coating on leaves is characteristic of powdery mildew fungal infection.",
      recommendations: [
        "Apply neem oil or sulfur-based fungicide",
        "Increase spacing between plants for better airflow",
        "Water at the base of plants, not on foliage",
        "Remove severely infected leaves",
      ],
    },
  ];
  
  // Return random result for demo
  return mockResults[Math.floor(Math.random() * mockResults.length)];
};

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [analyzedImage, setAnalyzedImage] = useState<string | null>(null);
  const scannerRef = useRef<HTMLDivElement>(null);

  const scrollToScanner = () => {
    scannerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageSelect = async (imageData: string) => {
    setIsAnalyzing(true);
    setAnalyzedImage(imageData);
    
    try {
      const result = await analyzeImage(imageData);
      setAnalysisResult(result);
      
      if (result.isHealthy) {
        toast.success("Great news! Your plant appears healthy.");
      } else {
        toast.warning(`Disease detected: ${result.diseaseName}`);
      }
    } catch (error) {
      toast.error("Failed to analyze image. Please try again.");
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setAnalyzedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>PlantDoc - AI Plant Disease Identifier | Protect Your Plants</title>
        <meta 
          name="description" 
          content="Identify plant diseases instantly with AI. Upload a photo of any plant leaf and get accurate diagnosis with treatment recommendations. Perfect for farmers and gardeners." 
        />
        <meta name="keywords" content="plant disease, plant health, crop disease, leaf disease, AI diagnosis, plant care, gardening, farming" />
        <link rel="canonical" href="https://plantdoc.app" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {!analysisResult ? (
          <>
            <HeroSection onGetStarted={scrollToScanner} />
            <div ref={scannerRef}>
              <ImageUploader 
                onImageSelect={handleImageSelect} 
                isAnalyzing={isAnalyzing} 
              />
            </div>
            <FeaturesSection />
            <HowItWorksSection />
          </>
        ) : (
          <div className="pt-16">
            <ResultsDisplay 
              result={analysisResult} 
              imageUrl={analyzedImage!}
              onReset={handleReset}
            />
          </div>
        )}
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
