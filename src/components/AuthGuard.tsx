import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken } from '@/utils/security';
import { useToast } from '@/components/ui/use-toast';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token || !verifyToken(token)) {
      toast({
        variant: "destructive",
        title: "غير مصرح",
        description: "يرجى تسجيل الدخول للوصول إلى هذه الصفحة"
      });
      navigate('/login');
    }
  }, [navigate, toast]);

  return <>{children}</>;
};

export default AuthGuard;