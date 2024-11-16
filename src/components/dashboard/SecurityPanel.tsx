import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SecurityPanel = () => {
  const { toast } = useToast();

  const handleSecurityAlert = () => {
    toast({
      title: "تنبيه أمني",
      description: "تم تسجيل محاولة دخول مشبوهة",
      variant: "destructive",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5" />
          الحالة الأمنية
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-sm text-gray-400">محاولات الدخول الفاشلة</div>
            <div className="text-2xl font-bold text-red-500 flex items-center gap-2">
              3
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-400">حالة الحماية</div>
            <div className="text-2xl font-bold text-green-500 flex items-center gap-2">
              نشط
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityPanel;