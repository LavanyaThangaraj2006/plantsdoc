import { useState, useRef, useCallback } from "react";
import { Camera, Upload, X, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface ImageUploaderProps {
  onImageSelect: (imageData: string) => void;
  isAnalyzing: boolean;
}

const ImageUploader = ({ onImageSelect, isAnalyzing }: ImageUploaderProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewUrl(result);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  const clearImage = useCallback(() => {
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  }, []);

  const handleAnalyze = useCallback(() => {
    if (previewUrl) {
      onImageSelect(previewUrl);
    }
  }, [previewUrl, onImageSelect]);

  return (
    <section id="scanner" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Scan Your Plant
            </h2>
            <p className="text-muted-foreground">
              Upload or capture a photo of the plant leaf you want to analyze
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
            {!previewUrl ? (
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 md:p-12 text-center transition-all ${
                  isDragging 
                    ? 'border-primary bg-accent/50 scale-[1.02]' 
                    : 'border-border hover:border-primary/50 hover:bg-accent/20'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-hero flex items-center justify-center shadow-glow animate-float">
                  <Upload className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Drop your image here
                </h3>
                <p className="text-muted-foreground mb-6">
                  or choose from the options below
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="default"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full sm:w-auto"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => cameraInputRef.current?.click()}
                    className="w-full sm:w-auto"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Take Photo
                  </Button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="animate-scale-in">
                <div className="relative rounded-xl overflow-hidden mb-6">
                  <img
                    src={previewUrl}
                    alt="Plant leaf preview"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <button
                    onClick={clearImage}
                    className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-smooth"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>

                <Button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  size="lg"
                  className="w-full"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Camera className="w-5 h-5 mr-2" />
                      Analyze Plant
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUploader;
