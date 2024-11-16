import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, Lock } from 'lucide-react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { verifyPassword, generateOTP, sendOTP } from '@/utils/security';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const mockHashedPassword = await verifyPassword(password, 'stored_hashed_password');
      
      if (username === 'admin' && mockHashedPassword) {
        const generatedOTP = generateOTP();
        await sendOTP(generatedOTP);
        setShowOTP(true);
        
        toast({
          title: "تم إرسال رمز التحقق",
          description: "يرجى إدخال الرمز المرسل إلى هاتفك"
        });
      } else {
        toast({
          variant: "destructive",
          title: "خطأ في تسجيل الدخول",
          description: "اسم المستخدم أو كلمة المرور غير صحيحة"
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "حدث خطأ أثناء تسجيل الدخول"
      });
    }
  };

  const verifyOTP = () => {
    if (otp.length === 6) {
      localStorage.setItem('token', 'demo_token');
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "جاري تحويلك إلى لوحة التحكم..."
      });
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-accent-dark p-4 sm:p-6 md:p-8" dir="rtl">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-primary animate-pulse-glow" />
          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-white">تسجيل الدخول للوحة التحكم</h2>
        </div>
        
        {!showOTP ? (
          <form className="mt-8 space-y-6 card bg-secondary-dark/90" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200">اسم المستخدم</label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 bg-secondary-dark/50 border-white/10 text-white"
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
                  className="mt-1 bg-secondary-dark/50 border-white/10 text-white"
                  dir="ltr"
                  autoComplete="off"
                />
              </div>
            </div>

            <Button type="submit" className="w-full btn-primary">
              <Lock className="w-4 h-4 ml-2" />
              تسجيل الدخول
            </Button>
          </form>
        ) : (
          <div className="mt-8 space-y-6 card bg-secondary-dark/90 p-6">
            <h3 className="text-lg font-medium text-center mb-4 text-white">أدخل رمز التحقق</h3>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => {
                  setOtp(value);
                  if (value.length === 6) {
                    verifyOTP();
                  }
                }}
                className="gap-2"
              >
                <InputOTPGroup>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <InputOTPSlot 
                      key={index} 
                      index={index}
                      className="bg-secondary-dark/50 border-white/10 text-white w-12 h-12 text-xl"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;