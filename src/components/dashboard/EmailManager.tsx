import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const EmailManager = () => {
  const { toast } = useToast();

  const handleAddEmail = () => {
    toast({
      title: "تمت إضافة البريد الإلكتروني",
      description: "تم إضافة البريد الإلكتروني بنجاح",
    });
  };

  const handleResetPassword = () => {
    toast({
      title: "تم إرسال رابط إعادة تعيين كلمة المرور",
      description: "يرجى التحقق من بريدك الإلكتروني",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>إدارة البريد الإلكتروني</span>
          <Button 
            className="bg-primary hover:bg-primary-dark"
            onClick={handleAddEmail}
          >
            <Plus className="w-4 h-4 ml-2" />
            إضافة بريد إلكتروني
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Input placeholder="user@example.com" className="flex-1" />
            <Button 
              variant="outline"
              onClick={handleResetPassword}
            >
              تعديل كلمة المرور
            </Button>
            <Button variant="destructive">حذف</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailManager;