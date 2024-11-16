import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const DomainManager = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>إدارة النطاقات</span>
          <Button className="bg-primary hover:bg-primary-dark">
            <Plus className="w-4 h-4 ml-2" />
            إضافة نطاق
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Input placeholder="example.com" className="flex-1" />
            <Button variant="outline">إضافة سجل DNS</Button>
            <Button variant="destructive">حذف</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DomainManager;