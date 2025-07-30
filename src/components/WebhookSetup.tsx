import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Settings } from "lucide-react";

const WebhookSetup = () => {
  const [webhookUrl, setWebhookUrl] = useState(
    localStorage.getItem('vayout_webhook_url') || ''
  );
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const handleSaveWebhook = () => {
    if (webhookUrl) {
      localStorage.setItem('vayout_webhook_url', webhookUrl);
      toast({
        title: "Success!",
        description: "Webhook URL saved successfully",
      });
    } else {
      localStorage.removeItem('vayout_webhook_url');
      toast({
        title: "Webhook Removed",
        description: "Webhook URL has been cleared",
      });
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 w-12 h-12 cosmic-border rounded-full flex items-center justify-center text-cosmic-text-secondary hover:text-cosmic-violet hover:bg-cosmic-violet/10 transition-all duration-300 cosmic-glow bg-cosmic-surface/80 backdrop-blur-xl z-50"
        title="Setup Webhook"
      >
        <Settings size={20} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 cosmic-border rounded-2xl p-6 bg-cosmic-surface/90 backdrop-blur-xl z-50 max-w-sm">
      <h3 className="font-cosmic-serif text-lg cosmic-gradient-text mb-4">
        Setup Email Notifications
      </h3>
      <div className="space-y-3">
        <Input
          type="url"
          placeholder="Enter your Zapier webhook URL"
          value={webhookUrl}
          onChange={(e) => setWebhookUrl(e.target.value)}
          className="cosmic-border bg-cosmic-surface/50 border-cosmic-violet/30 text-cosmic-text-primary placeholder:text-cosmic-text-muted focus:border-cosmic-violet"
        />
        <div className="flex space-x-2">
          <Button
            onClick={handleSaveWebhook}
            className="flex-1 cosmic-glow bg-cosmic-violet hover:bg-cosmic-blue text-cosmic-text-primary transition-all duration-300"
          >
            Save
          </Button>
          <Button
            onClick={() => setIsVisible(false)}
            variant="outline"
            className="cosmic-border text-cosmic-text-secondary border-cosmic-violet/30 hover:bg-cosmic-violet/10"
          >
            Cancel
          </Button>
        </div>
      </div>
      <p className="text-cosmic-text-muted text-xs mt-3 font-inter">
        Create a Zap with a webhook trigger, then paste the webhook URL here to receive email notifications.
      </p>
    </div>
  );
};

export default WebhookSetup;