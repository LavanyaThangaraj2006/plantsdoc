import { Leaf, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-semibold text-xl text-foreground">
              PlantDoc
            </span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-current" />
            <span>for farmers and gardeners</span>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2024 PlantDoc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
