import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const EmailManager = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>إدارة البريد الإلكتروني</span>
          <Button className="bg-primary hover:bg-primary-dark">
            <Plus className="w-4 h-4 ml-2" />
            إضافة بريد إلكتروني
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Input placeholder="user@example.com" className="flex-1" />
            <Button variant="outline">تعديل كلمة المرور</Button>
            <Button variant="destructive">حذف</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailManager;