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
      <DialogContent className="sm:max-w-[800px] animate-fade-in bg-gradient-to-br from-secondary/95 to-secondary/90 backdrop-blur-sm border border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent animate-text-flow text-center mb-6">
            مرحباً بكم في Green Host
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-200 text-center leading-relaxed space-y-6">
            <p className="text-xl font-medium text-primary/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              مرحباً بكم في Green Host، الوجهة المثالية لاستضافة المواقع على أفضل السيرفرات. نحن فخورون بتقديم خدمات استضافة متطورة وموثوقة تجعل من موقعك نقطة انطلاق قوية في عالم الإنترنت.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              في Green Host، نتميز بكوننا من أفضل مقدمي خدمات الاستضافة عربياً، حيث نقدم لكم خدمة تجهيز الاستضافة بأعلى معايير الجودة والسرعة. نحن نهتم بتوفير بيئة آمنة ومستقرة لموقعك، مع سرعة في الإعداد والتخصيص لتلبية احتياجاتك.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              نحن نقدم أيضًا خدمة تجهيز الإيميلات الرسمية لموقعك بسهولة، بالإضافة إلى تركيب أنظمة ووردبريس بسرعة وكفاءة، مما يسهل عليك إدارة موقعك بدون أي تعقيدات.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              اختيارك لـ Green Host يعني أنك في أيدٍ أمينة، ونحن هنا لدعمك في كل خطوة على الطريق لضمان نجاح موقعك على الإنترنت.
            </p>
            <p className="text-xl font-bold text-primary animate-fade-in" style={{ animationDelay: '1s' }}>
              مرحباً بك معنا!
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            onClick={handleStartNow}
            className="btn-primary text-lg py-6 animate-fade-in"
            style={{ animationDelay: '1.2s' }}
          >
            ابدأ الآن
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