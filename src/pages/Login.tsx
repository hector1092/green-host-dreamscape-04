import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'admin123') {
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "جاري تحويلك إلى لوحة التحكم..."
      });
      navigate('/dashboard');
    } else {
      toast({
        variant: "destructive",
        title: "خطأ في تسجيل الدخول",
        description: "اسم المستخدم أو كلمة المرور غير صحيحة"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/50 backdrop-blur-sm p-4" dir="rtl">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-bold text-white">تسجيل الدخول للوحة التحكم</h2>
        </div>
        
        <form className="mt-8 space-y-6 card" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200">اسم المستخدم</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 bg-secondary-dark/50 border-white/10"
                dir="ltr"
                autoComplete="off"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-200">كلمة المرور</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 bg-secondary-dark/50 border-white/10"
                dir="ltr"
                autoComplete="off"
              />
            </div>
          </div>

          <Button type="submit" className="w-full btn-primary">
            تسجيل الدخول
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;