import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Server, Shield, Zap, Rocket, Heart } from 'lucide-react';

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
    }, 10000);

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
      <DialogContent className="sm:max-w-[800px] animate-fade-in bg-gradient-to-br from-secondary/95 to-secondary-dark/90 backdrop-blur-sm border border-primary/20" dir="rtl">
        <DialogHeader className="space-y-6">
          <DialogTitle className="text-5xl font-bold bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent animate-text-flow text-center mb-8">
            <Rocket className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
            مرحباً بكم في Green Host
          </DialogTitle>
          <DialogDescription className="text-lg space-y-8 text-right">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary-dark/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Server className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-xl font-medium text-primary/90">
                نحن فخورون بتقديم خدمات استضافة متطورة وموثوقة تجعل من موقعك نقطة انطلاق قوية في عالم الإنترنت.
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary-dark/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-gray-200">
                في <span className="text-primary font-semibold">Green Host</span>، نتميز بكوننا من أفضل مقدمي خدمات الاستضافة عربياً، حيث نقدم لكم خدمة تجهيز الاستضافة بأعلى معايير الجودة والسرعة.
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary-dark/50 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-gray-200">
                نحن نقدم أيضًا خدمة تجهيز الإيميلات الرسمية لموقعك بسهولة، بالإضافة إلى تركيب أنظمة ووردبريس بسرعة وكفاءة.
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary-dark/50 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-gray-200">
                <span className="font-semibold">اختيارك لـ Green Host</span> يعني أنك في أيدٍ أمينة، ونحن هنا لدعمك في كل خطوة على الطريق لضمان <span className="text-primary font-semibold">نجاح موقعك على الإنترنت</span>.
              </p>
            </div>

            <p className="text-2xl font-bold text-primary text-center animate-fade-in" style={{ animationDelay: '1s' }}>
              مرحباً بك معنا!
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            onClick={handleStartNow}
            className="btn-primary text-lg py-6 animate-fade-in group relative overflow-hidden"
            style={{ animationDelay: '1.2s' }}
          >
            ابدأ الآن
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white animate-fade-in"
            style={{ animationDelay: '1.4s' }}
          >
            تخطي
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeMessage;