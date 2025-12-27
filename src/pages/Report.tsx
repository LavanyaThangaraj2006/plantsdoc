import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Leaf, Target, Users, Lightbulb, CheckCircle, Code, Rocket, Award, FileText, TestTube, Presentation, MessageSquare } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const Report = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Title of the Project",
      subtitle: "Plant Disease Identifier",
      icon: <Leaf className="w-12 h-12 text-primary" />,
      content: (
        <div className="space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">AI-Powered Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Plant Disease Identifier
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-Powered Plant Health Analysis Application
          </p>
          
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto pt-6 text-left">
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="text-sm text-muted-foreground">Name of Innovator</div>
              <div className="font-semibold text-foreground">[Your Name]</div>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="text-sm text-muted-foreground">Start Date</div>
              <div className="font-semibold text-foreground">25-12-2025</div>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="text-sm text-muted-foreground">End Date</div>
              <div className="font-semibold text-foreground">02-01-2026</div>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="text-sm text-muted-foreground">Project Type</div>
              <div className="font-semibold text-foreground">Web Application</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Day 1: Empathise & Define",
      subtitle: "Step 1: Understanding the Need",
      icon: <Target className="w-12 h-12 text-destructive" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <span className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium">Day 1</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3">Empathise & Define</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">Which problem am I trying to solve?</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                  Farmers struggle to identify plant diseases early
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                  Lack of expert knowledge leads to crop loss
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                  Traditional diagnosis requires costly lab tests
                </li>
              </ul>
            </div>
            
            <div className="p-5 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold text-secondary mb-3">Who is affected by this problem?</h3>
              <ol className="space-y-2 text-muted-foreground text-sm list-decimal list-inside">
                <li>Small-scale farmers</li>
                <li>Home gardeners and hobbyists</li>
                <li>Agricultural workers in remote areas</li>
                <li>Greenhouse managers and nurseries</li>
              </ol>
            </div>
            
            <div className="p-5 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold text-warning mb-3">How did I find out about this?</h3>
              <div className="flex flex-wrap gap-2">
                {["Observation", "Online Research", "AI Tools", "Farmer Interviews"].map((item, idx) => (
                  <span key={idx} className="px-3 py-1 bg-warning/10 text-warning rounded-full text-sm">{item}</span>
                ))}
              </div>
            </div>
            
            <div className="p-5 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold text-success mb-3">AI Tools Used</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><strong>ChatGPT:</strong> Analyze problem & identify user needs</li>
                <li><strong>Perplexity AI:</strong> Research plant disease challenges</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Day 1: Empathise & Define",
      subtitle: "Step 2: What is the problem?",
      icon: <FileText className="w-12 h-12 text-destructive" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <span className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium">Day 1 - Step 2</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3">What is the Problem?</h2>
          </div>
          
          <div className="p-6 bg-destructive/5 rounded-2xl border border-destructive/20 mb-6">
            <p className="text-foreground text-lg leading-relaxed">
              Plant diseases cause <strong>40% of global crop losses</strong> annually because farmers cannot identify diseases early. By the time symptoms become obvious, significant damage has already occurred. Most farmers lack access to plant pathologists or affordable disease identification tools.
            </p>
          </div>
          
          <div className="p-6 bg-success/5 rounded-2xl border border-success/20 mb-6">
            <h3 className="text-lg font-semibold text-success mb-3">Why is this problem important to solve?</h3>
            <p className="text-muted-foreground">
              Early disease detection can prevent up to <strong>80% of crop losses</strong>. A mobile-friendly AI tool democratizes access to expert-level plant diagnosis, helping farmers take preventive action quickly and save their crops.
            </p>
          </div>
          
          <div className="p-6 bg-card rounded-2xl border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">📝 Take-home Task: User Research</h3>
            <p className="text-muted-foreground text-sm mb-4">After discussing with farmers and gardeners:</p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                Farmers said identifying diseases from leaf symptoms is the hardest part of plant care
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                Most waste time searching online or consulting expensive experts
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                They need instant, accurate diagnosis on their smartphones
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Day 2: Ideate",
      subtitle: "Step 3-5: Solutions",
      icon: <Lightbulb className="w-12 h-12 text-warning" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <span className="px-3 py-1 bg-warning/10 text-warning rounded-full text-sm font-medium">Day 2</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3">Ideate</h2>
          </div>
          
          <div className="p-5 bg-card rounded-2xl border border-border mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Step 3: List at least 5 different solutions</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { num: 1, title: "AI Image Recognition App", desc: "Instant disease detection from photos", selected: true },
                { num: 2, title: "Community Forum Platform", desc: "Farmers share disease photos for advice" },
                { num: 3, title: "SMS-based Symptom Checker", desc: "Text-based disease diagnosis" },
                { num: 4, title: "Drone Crop Monitoring", desc: "Aerial scanning for large farms" },
                { num: 5, title: "IoT Sensor Network", desc: "Real-time plant health monitoring" },
              ].map((s) => (
                <div key={s.num} className={`p-3 rounded-xl border flex items-start gap-3 ${s.selected ? "bg-primary/10 border-primary" : "bg-muted/30 border-border"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${s.selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{s.num}</span>
                  <div>
                    <div className={`font-medium text-sm ${s.selected ? "text-primary" : "text-foreground"}`}>{s.title}</div>
                    <div className="text-xs text-muted-foreground">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="text-lg font-semibold text-primary mb-2">Step 4: My Favourite Solution</h3>
              <p className="text-muted-foreground text-sm">
                <strong>AI-Powered Plant Disease Identifier</strong> – A mobile-friendly web application that uses image classification to instantly identify plant diseases from leaf photos.
              </p>
            </div>
            
            <div className="p-5 bg-success/5 rounded-2xl border border-success/20">
              <h3 className="text-lg font-semibold text-success mb-2">Step 5: Why this solution?</h3>
              <p className="text-muted-foreground text-sm">
                This solution is simple, accessible, and useful. It helps farmers get instant diagnosis using their smartphones without needing internet expertise or expensive consultations.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Day 2: Ideate",
      subtitle: "Take-home Task: App Screenshots",
      icon: <Code className="w-12 h-12 text-warning" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <span className="px-3 py-1 bg-warning/10 text-warning rounded-full text-sm font-medium">Day 2 - Take-home Task</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3">Application Design</h2>
          </div>
          
          <div className="p-5 bg-card rounded-2xl border border-border mb-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Pages & Features Included:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-xl">
                  <h4 className="font-medium text-foreground">1. Home Page</h4>
                  <p className="text-sm text-muted-foreground">Green nature theme, hero section with CTA, feature highlights</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-xl">
                  <h4 className="font-medium text-foreground">2. Image Upload Section</h4>
                  <p className="text-sm text-muted-foreground">Drag-and-drop upload, camera capture option</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-xl">
                  <h4 className="font-medium text-foreground">3. AI Analysis Engine</h4>
                  <p className="text-sm text-muted-foreground">Deep learning model processes leaf images</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-xl">
                  <h4 className="font-medium text-foreground">4. Results Display</h4>
                  <p className="text-sm text-muted-foreground">Disease name, confidence score, health status</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-xl">
                  <h4 className="font-medium text-foreground">5. Recommendations</h4>
                  <p className="text-sm text-muted-foreground">Treatment suggestions and prevention tips</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-xl">
                  <h4 className="font-medium text-foreground">6. How It Works</h4>
                  <p className="text-sm text-muted-foreground">Step-by-step guide for users</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20">
            <h4 className="font-semibold text-secondary mb-2">AI Tools used for Step 3-5:</h4>
            <div className="flex flex-wrap gap-2">
              {["ChatGPT – Ideas & content", "Lovable AI – Website building", "Meta AI – Image generation"].map((tool, idx) => (
                <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Day 3: Prototype & Test",
      subtitle: "Step 6: Building My First Version",
      icon: <TestTube className="w-12 h-12 text-primary" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Day 3</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3">Prototype & Test</h2>
          </div>
          
          <div className="p-5 bg-card rounded-2xl border border-border mb-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">What will my solution look like?</h3>
            <p className="text-muted-foreground mb-4">
              A mobile-friendly website with a clean green-themed interface where users can upload or capture plant leaf images, get instant AI-powered disease analysis, view confidence scores, and receive treatment recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="p-5 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">Technologies Used</h3>
              <div className="space-y-2">
                <div>
                  <div className="text-sm font-medium text-foreground">Frontend</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {["React", "TypeScript", "Tailwind CSS", "Shadcn UI"].map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">AI & Backend</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {["TensorFlow", "Keras", "TFLite", "Deep Learning"].map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold text-secondary mb-3">Dataset & Training</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Model trained using the <strong>PlantVillage dataset</strong> from Kaggle containing 50,000+ images across 38 disease categories.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Data Augmentation", "Image Preprocessing", "Model Optimization"].map((t, i) => (
                  <span key={i} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
            <h4 className="font-semibold text-primary mb-2">AI Tools for Building:</h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li><strong>ChatGPT</strong> – Content, formulas, explanations</li>
              <li><strong>Lovable AI</strong> – Website design and development</li>
              <li><strong>GitHub</strong> – Code hosting and version control</li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Day 3: Prototype & Test",
      subtitle: "Step 7: Getting Feedback",
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Day 3 - Step 7</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3">Test – Getting Feedback</h2>
          </div>
          
          <div className="p-4 bg-card rounded-xl border border-border mb-4">
            <h3 className="font-semibold text-foreground mb-2">Who tested?</h3>
            <div className="flex flex-wrap gap-2">
              {["Classmates", "Project Mentor", "Local Farmers", "Home Gardeners"].map((t, i) => (
                <span key={i} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">{t}</span>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="p-5 bg-success/5 rounded-2xl border border-success/20">
              <h3 className="text-lg font-semibold text-success mb-3">👍 What works well:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" /> Clean, nature-inspired layout</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" /> Easy image upload process</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" /> Fast and accurate results</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" /> Clear confidence scores</li>
              </ul>
            </div>
            
            <div className="p-5 bg-warning/5 rounded-2xl border border-warning/20">
              <h3 className="text-lg font-semibold text-warning mb-3">🔧 What needs improvement:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2"><span className="w-4 h-4 text-center">•</span> Add more disease categories</li>
                <li className="flex items-center gap-2"><span className="w-4 h-4 text-center">•</span> Include offline PWA support</li>
                <li className="flex items-center gap-2"><span className="w-4 h-4 text-center">•</span> Add scan history feature</li>
                <li className="flex items-center gap-2"><span className="w-4 h-4 text-center">•</span> Multi-language support</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-card rounded-2xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">📝 Take-home Task</h3>
            <p className="text-muted-foreground text-sm mb-3">
              I recorded my project explanation and uploaded along with images and the website on GitHub:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Full project report explaining the Plant Disease Identifier</li>
              <li>✓ Screenshot images of all main sections</li>
              <li>✓ The main project files and website code</li>
              <li>✓ Working website link generated using Lovable AI</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "Day 4: Showcase",
      subtitle: "Step 8: Presenting My Innovation",
      icon: <Presentation className="w-12 h-12 text-secondary" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">Day 4</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3">Showcase</h2>
          </div>
          
          <div className="p-5 bg-primary/5 rounded-2xl border border-primary/20 text-center mb-4">
            <div className="text-sm text-muted-foreground mb-1">Final Project Title</div>
            <h3 className="text-xl font-bold text-primary">AI-Powered Plant Disease Identifier</h3>
          </div>
          
          <div className="p-5 bg-card rounded-2xl border border-border mb-4">
            <h3 className="text-lg font-semibold text-destructive mb-3">Problem Statement:</h3>
            <p className="text-muted-foreground text-sm">
              Many farmers and gardeners struggle to identify plant diseases because they lack expert knowledge. By the time visible symptoms appear, significant crop damage has already occurred. Traditional diagnosis requires expensive lab tests or consultations that are not accessible to small-scale farmers.
            </p>
          </div>
          
          <div className="p-5 bg-card rounded-2xl border border-border mb-4">
            <h3 className="text-lg font-semibold text-primary mb-3">My Innovation:</h3>
            <p className="text-muted-foreground text-sm mb-3">
              I created a <strong>Plant Disease Identifier</strong> using Lovable AI and deep learning. This application allows users to:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Upload or capture plant leaf images</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Get instant AI-powered diagnosis</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> View confidence scores for accuracy</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Receive treatment recommendations</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Identify 50+ plant diseases</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Use on any mobile device</li>
            </ul>
          </div>
          
          <div className="p-5 bg-success/5 rounded-2xl border border-success/20">
            <h3 className="text-lg font-semibold text-success mb-3">Impact of My Innovation:</h3>
            <p className="text-muted-foreground text-sm">
              The Plant Disease Identifier makes crop health monitoring <strong>faster, easier, and more accessible</strong>. It reduces crop losses, empowers farmers with expert-level diagnosis, and helps them take early preventive action – ultimately improving food security and farmer livelihoods.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title: "Day 4: Showcase",
      subtitle: "Step 9: Reflections",
      icon: <Award className="w-12 h-12 text-warning" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <span className="px-3 py-1 bg-warning/10 text-warning rounded-full text-sm font-medium">Day 4 - Step 9</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3">Reflections</h2>
          </div>
          
          <div className="p-5 bg-success/5 rounded-2xl border border-success/20 mb-4">
            <h3 className="text-lg font-semibold text-success mb-3">What did I enjoy the most?</h3>
            <p className="text-muted-foreground">
              Designing the nature-inspired user interface and implementing the AI-powered image analysis feature. Using Lovable AI made the development process much faster and more creative. Seeing farmers get instant disease diagnosis was extremely rewarding.
            </p>
          </div>
          
          <div className="p-5 bg-warning/5 rounded-2xl border border-warning/20 mb-4">
            <h3 className="text-lg font-semibold text-warning mb-3">What was my biggest challenge?</h3>
            <p className="text-muted-foreground">
              Ensuring the AI model provides accurate disease detection across different lighting conditions and image qualities. Also, organizing the results display to show confidence scores and recommendations in a user-friendly way for non-technical farmers.
            </p>
          </div>
          
          <div className="p-5 bg-card rounded-2xl border border-border mb-4">
            <h3 className="font-semibold text-foreground mb-3">📝 Take-home Task: Project Links</h3>
            <div className="space-y-3">
              <div className="p-3 bg-muted/30 rounded-xl">
                <div className="text-sm text-muted-foreground">PROJECT LINK:</div>
                <div className="text-primary font-medium break-all">[Your Lovable App URL]</div>
              </div>
              <div className="p-3 bg-muted/30 rounded-xl">
                <div className="text-sm text-muted-foreground">GITHUB LINK:</div>
                <div className="text-primary font-medium break-all">[Your GitHub Repository URL]</div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <Button variant="hero" size="xl" onClick={() => window.location.href = "/"}>
              <Leaf className="w-5 h-5 mr-2" /> Try PlantDoc Now
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
        <meta name="description" content="IBM SkillsBuild Project Report for Plant Disease Identifier - an AI-powered solution for plant health analysis." />
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
              <span className="hidden sm:inline">IBM SkillsBuild Report</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>
        </header>

        {/* Slide Content */}
        <main className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-4xl">
            <div className="bg-card rounded-2xl border border-border shadow-xl p-6 md:p-10 min-h-[520px] flex flex-col justify-center animate-fade-in-up">
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
            <div className="hidden md:flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide
                      ? "bg-primary w-6"
                      : "bg-muted hover:bg-muted-foreground/50 w-2"
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
