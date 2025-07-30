import { Instagram, Mail, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send email notification via webhook
      const webhookUrl = localStorage.getItem('vayout_webhook_url');
      
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            type: "email_subscription",
            email: email,
            timestamp: new Date().toISOString(),
            source: "Vayout Website Footer",
          }),
        });
      }

      // Show success message
      toast({
        title: "Success!",
        description: "Thank you for joining our cosmic journey!",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="py-16 px-6 cosmic-border-t">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/550f69de-4d03-4bad-a302-e32c33142f3d.png" 
              alt="Vayout Logo" 
              className="h-12 w-auto"
            />
            <p className="text-cosmic-text-secondary font-inter text-sm leading-relaxed">
              Crafting AI-driven visual experiences that transcend the boundaries of imagination 
              and reality.
            </p>
          </div>

          {/* Email Signup */}
          <div className="space-y-4">
            <h3 className="font-cosmic-serif text-xl cosmic-gradient-text">
              Join our cosmic journey
            </h3>
            <form onSubmit={handleEmailSignup} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cosmic-border bg-cosmic-surface/50 border-cosmic-violet/30 text-cosmic-text-primary placeholder:text-cosmic-text-muted focus:border-cosmic-violet"
              />
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full cosmic-glow bg-cosmic-violet hover:bg-cosmic-blue text-cosmic-text-primary transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-cosmic-serif text-xl cosmic-gradient-text">
              Connect with us
            </h3>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick("https://www.instagram.com/vayout.in")}
                className="w-10 h-10 cosmic-border rounded-lg flex items-center justify-center text-cosmic-text-secondary hover:text-cosmic-violet hover:bg-cosmic-violet/10 transition-all duration-300 cosmic-glow"
              >
                <Instagram size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick("https://twitter.com")}
                className="w-10 h-10 cosmic-border rounded-lg flex items-center justify-center text-cosmic-text-secondary hover:text-cosmic-violet hover:bg-cosmic-violet/10 transition-all duration-300 cosmic-glow"
              >
                <Twitter size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick("https://linkedin.com")}
                className="w-10 h-10 cosmic-border rounded-lg flex items-center justify-center text-cosmic-text-secondary hover:text-cosmic-violet hover:bg-cosmic-violet/10 transition-all duration-300 cosmic-glow"
              >
                <Linkedin size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick("mailto:vayoutmedia@gmail.com")}
                className="w-10 h-10 cosmic-border rounded-lg flex items-center justify-center text-cosmic-text-secondary hover:text-cosmic-violet hover:bg-cosmic-violet/10 transition-all duration-300 cosmic-glow"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cosmic-violet/20 text-center">
          <p className="text-cosmic-text-muted font-inter text-sm">
            © 2025 Vayout. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;