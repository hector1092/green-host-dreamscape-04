import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const GeneralSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>الإعدادات العامة</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>وضع الصيانة</Label>
            <div className="text-sm text-gray-400">تفعيل/تعطيل وضع الصيانة للموقع</div>
          </div>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>تحسين الأداء</Label>
            <div className="text-sm text-gray-400">تفعيل ذاكرة التخزين المؤقت</div>
          </div>
          <Switch />
        </div>

        <div className="flex justify-end">
          <Button className="bg-primary hover:bg-primary-dark">حفظ التغييرات</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneralSettings;