import { useState } from "react";
import { Menu, X, Atom, Lightbulb, Activity, Flame, Bot, CircuitBoard, Dna } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  borderColor: string;
  glowColor: string;
}

// const ModuleCard = ({ icon, title, tagline, borderColor, glowColor }: ModuleCardProps) => {
//   return (
//     <div
//       className="group relative bg-card rounded-lg p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
//       style={{
//         border: `2px solid ${borderColor}`,
//         boxShadow: `0 0 10px ${glowColor}20`,
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.boxShadow = `0 0 20px ${glowColor}60`;
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.boxShadow = `0 0 10px ${glowColor}20`;
//       }}
//     >
//       <div className="flex flex-col items-center text-center space-y-4">
//         <div className="p-4 rounded-full bg-card-foreground/5" style={{ color: borderColor }}>
//           {icon}
//         </div>
//         <h3 className="text-xl font-bold text-foreground">{title}</h3>
//         <p className="text-sm text-muted-foreground">{tagline}</p>
//       </div>
//     </div>
//   );
// };
const ModuleCard = ({ icon, title, tagline, borderColor, glowColor }: ModuleCardProps) => {
  const handleClick = () => {
    if (title === "3D Biology Chromalume") {
      window.location.href = "https://chromalumebio-hqo0rnlsw-srinidhis-projects-78c96e55.vercel.app";
    }
    else if (title === "Digital Electronics") {
    window.location.href = "https://digital-circuit-lab-0cc28572.vercel.app";
  } else if (title === "Ray Optics") {
    window.location.href = "https://ray-optics-explorer.vercel.app";
  } else if (title === "Kinematics") {
    window.location.href = "https://motion-masters.vercel.app";
  } else if (title === "Thermodynamics") {
    window.location.href = "https://thermo-explorer.vercel.app";
  }
  else if (title === "AI Chat Assistant") {
    window.location.href = "https://groq-chat-buddy.vercel.app";
  } 
  else if (title === "3D ChemVision") {
    window.location.href = "https://chem-verse-7egs.vercel.app/";
  } else if (title === "Periodic Viewer") {
    window.location.href = "https://periodic-explorer.vercel.app/";
  }
  
  };

  return (
    <div
      className="group relative bg-card rounded-lg p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{
        border: `2px solid ${borderColor}`,
        boxShadow: `0 0 10px ${glowColor}20`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${glowColor}60`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 10px ${glowColor}20`;
      }}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-card-foreground/5" style={{ color: borderColor }}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{tagline}</p>
      </div>
    </div>
  );
};
const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const modules = [
    {
      icon: <Atom size={40} />,
      title: "Periodic Viewer",
      tagline: "Explore Elements in 3D & Interactive Way",
      borderColor: "hsl(var(--neon-cyan))",
      glowColor: "#00ffff",
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Ray Optics",
      tagline: "Learn Reflection, Refraction & Optical Experiments",
      borderColor: "hsl(var(--neon-magenta))",
      glowColor: "#ff00ff",
    },
    {
      icon: <Activity size={40} />,
      title: "Kinematics",
      tagline: "Visualize Motion, Velocity & Acceleration",
      borderColor: "hsl(var(--neon-yellow))",
      glowColor: "#ffee00",
    },
    {
      icon: <Flame size={40} />,
      title: "Thermodynamics",
      tagline: "Understand Energy, Heat & Work Visually",
      borderColor: "hsl(var(--neon-purple))",
      glowColor: "#b388ff",
    },
    {
      icon: <Bot size={40} />,
      title: "AI Chat Assistant",
      tagline: "Ask Questions & Learn Interactively",
      borderColor: "hsl(var(--neon-cyan))",
      glowColor: "#00ffff",
    },
    {
      icon: <CircuitBoard size={40} />,
      title: "Digital Electronics",
      tagline: "Simulate Circuits & Logic Experiments",
      borderColor: "hsl(var(--neon-magenta))",
      glowColor: "#ff00ff",
    },
    {
      icon: <Atom size={40} />,
      title: "3D ChemVision",
      tagline: "Explore Chemistry in 3D",
      borderColor: "hsl(var(--neon-yellow))",
      glowColor: "#ffee00",
    },
    {
      icon: <Dna size={40} />,
      title: "3D Biology Chromalume",
      tagline: "Visualize Biology in 3D",
      borderColor: "hsl(var(--neon-purple))",
      glowColor: "#b388ff",
    },
  ];

  const navLinks = [
    "Periodic Viewer",
    "Ray Optics",
    "Kinematics",
    "Thermodynamics",
    "AI Chat",
    "Electronics",
    "ChemVision",
    "Biology",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h1 
              className="text-2xl font-bold transition-all duration-300"
              style={{
                color: "hsl(var(--neon-cyan))",
                textShadow: "0 0 10px hsl(var(--neon-cyan))",
              }}
            >
              EduVision
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-foreground hover:text-neon-cyan transition-all duration-300"
                  style={{
                    textShadow: "0 0 0px transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = "0 0 10px hsl(var(--neon-cyan))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = "0 0 0px transparent";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block py-2 text-sm text-foreground hover:text-neon-cyan transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Welcome to </span>
            <span
              className="text-neon-cyan"
              style={{ textShadow: "0 0 20px hsl(var(--neon-cyan))" }}
            >
              Interactive Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Explore science and technology through immersive 3D visualizations and interactive experiments
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {modules.map((module, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fade-in"
              >
                <ModuleCard {...module} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border mt-16">
        <div className="container mx-auto text-center">
          <div
            className="h-px w-32 mx-auto mb-4"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(var(--neon-cyan)), transparent)",
            }}
          />
          <p className="text-sm text-muted-foreground">
            © 2025 EduVision. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
              About
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
              Contact
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
