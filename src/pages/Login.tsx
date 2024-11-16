import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, Lock } from 'lucide-react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { verifyPassword, generateOTP } from '@/utils/security';

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
      // في الواقع، يجب التحقق من قاعدة البيانات
      const mockHashedPassword = await verifyPassword(password, 'stored_hashed_password');
      
      if (username === 'admin' && mockHashedPassword) {
        // إرسال رمز OTP عبر SMS أو البريد الإلكتروني
        const generatedOTP = generateOTP();
        console.log('OTP:', generatedOTP); // في البيئة الحقيقية، سيتم إرسال الرمز للمستخدم
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
    // في الواقع، يجب التحقق من الرمز المخزن
    if (otp.length === 6) {
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "جاري تحويلك إلى لوحة التحكم..."
      });
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/50 backdrop-blur-sm p-4" dir="rtl">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-bold text-white">تسجيل الدخول للوحة التحكم</h2>
        </div>
        
        {!showOTP ? (
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
              <Lock className="w-4 h-4 ml-2" />
              تسجيل الدخول
            </Button>
          </form>
        ) : (
          <div className="mt-8 space-y-6 card p-6">
            <h3 className="text-lg font-medium text-center mb-4">أدخل رمز التحقق</h3>
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => {
                setOtp(value);
                if (value.length === 6) {
                  verifyOTP();
                }
              }}
              className="gap-2 flex justify-center"
            >
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;