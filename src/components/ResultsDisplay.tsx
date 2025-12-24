import { CheckCircle, AlertTriangle, Info, ArrowLeft, Leaf, Activity } from "lucide-react";
import { Button } from "./ui/button";

export interface AnalysisResult {
  diseaseName: string;
  confidence: number;
  isHealthy: boolean;
  description: string;
  recommendations: string[];
}

interface ResultsDisplayProps {
  result: AnalysisResult;
  imageUrl: string;
  onReset: () => void;
}

const ResultsDisplay = ({ result, imageUrl, onReset }: ResultsDisplayProps) => {
  const confidencePercentage = Math.round(result.confidence * 100);
  
  const getStatusColor = () => {
    if (result.isHealthy) return "success";
    if (result.confidence > 0.8) return "destructive";
    return "warning";
  };

  const statusColor = getStatusColor();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            onClick={onReset}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Analyze Another Plant
          </Button>

          <div className="bg-card rounded-2xl shadow-card overflow-hidden animate-scale-in">
            {/* Image Section */}
            <div className="relative h-64 md:h-80">
              <img
                src={imageUrl}
                alt="Analyzed plant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full ${
                result.isHealthy 
                  ? 'bg-success text-success-foreground' 
                  : 'bg-warning text-warning-foreground'
              }`}>
                {result.isHealthy ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <AlertTriangle className="w-4 h-4" />
                )}
                <span className="font-medium text-sm">
                  {result.isHealthy ? 'Healthy' : 'Disease Detected'}
                </span>
              </div>
            </div>

            {/* Results Content */}
            <div className="p-6 md:p-8">
              {/* Disease Name */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                  result.isHealthy ? 'bg-success/10' : 'bg-warning/10'
                }`}>
                  <Leaf className={`w-7 h-7 ${
                    result.isHealthy ? 'text-success' : 'text-warning'
                  }`} />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-1">
                    {result.diseaseName}
                  </h2>
                  <p className="text-muted-foreground">{result.description}</p>
                </div>
              </div>

              {/* Confidence Score */}
              <div className="bg-muted rounded-xl p-5 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Confidence Score</span>
                  </div>
                  <span className={`font-heading font-bold text-2xl ${
                    result.isHealthy ? 'text-success' : 
                    confidencePercentage > 80 ? 'text-destructive' : 'text-warning'
                  }`}>
                    {confidencePercentage}%
                  </span>
                </div>
                <div className="h-3 bg-background rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${
                      result.isHealthy ? 'bg-success' : 
                      confidencePercentage > 80 ? 'bg-destructive' : 'bg-warning'
                    }`}
                    style={{ width: `${confidencePercentage}%` }}
                  />
                </div>
              </div>

              {/* Recommendations */}
              {result.recommendations.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="w-5 h-5 text-primary" />
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {result.isHealthy ? 'Care Tips' : 'Recommended Actions'}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary">{index + 1}</span>
                        </div>
                        <span className="text-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsDisplay;
