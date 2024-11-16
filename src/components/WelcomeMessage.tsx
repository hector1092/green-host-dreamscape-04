import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const WelcomeMessage = () => {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      toast({
        description: "شكراً لزيارتكم Green Host",
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [toast]);

  const handleStartNow = () => {
    setOpen(false);
    const plansSection = document.getElementById('hosting-plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] animate-fade-in bg-secondary/95">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold text-primary text-center mb-4 animate-text-flow">
            مرحباً بكم في Green Host
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-200 text-center leading-relaxed">
            الوجهة المثالية لاستضافة المواقع على أفضل السيرفرات. نحن فخورون بتقديم خدمات استضافة متطورة وموثوقة تجعل من موقعك نقطة انطلاق قوية في عالم الإنترنت.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button 
            onClick={handleStartNow}
            className="btn-primary text-lg py-6"
          >
            ابدأ الآن
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            تخطي
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeMessage;