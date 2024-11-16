import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const SecurityPanel = () => {
  const { toast } = useToast();

  const handleSecurityFix = () => {
    toast({
      title: "جاري إصلاح المشكلات الأمنية",
      description: "سيتم إخطارك عند اكتمال العملية",
    });
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            الحالة الأمنية
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleSecurityFix}
            className="hover:bg-primary hover:text-white transition-colors"
          >
            إصلاح المشكلات
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <span>شهادة SSL</span>
            </div>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </div>
          
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
              <span>محاولات الدخول الفاشلة</span>
            </div>
            <span className="text-yellow-500 font-medium">3</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>المصادقة الثنائية</span>
            </div>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityPanel;