import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, Clock, ArrowUp, Server } from "lucide-react";

const StatsPanel = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart className="w-5 h-5" />
          الإحصائيات
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">الزوار النشطين</div>
            <div className="text-2xl font-bold text-primary flex items-center gap-2">
              245
              <ArrowUp className="w-4 h-4 text-green-500" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">المستخدمون الجدد</div>
            <div className="text-2xl font-bold text-primary">128</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">معدل الاستجابة</div>
            <div className="text-2xl font-bold text-primary flex items-center gap-2">
              0.8s
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">استخدام الخوادم</div>
            <div className="text-2xl font-bold text-primary flex items-center gap-2">
              45%
              <Server className="w-4 h-4" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsPanel;