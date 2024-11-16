import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DomainManager = () => {
  const { toast } = useToast();

  const handleAddDomain = () => {
    toast({
      title: "تمت إضافة النطاق",
      description: "تم إضافة النطاق بنجاح إلى قائمة النطاقات",
    });
  };

  const handleAddDNS = () => {
    toast({
      title: "تمت إضافة سجل DNS",
      description: "تم إضافة سجل DNS بنجاح",
    });
  };

  const handleDelete = () => {
    toast({
      title: "تم حذف النطاق",
      description: "تم حذف النطاق بنجاح من قائمة النطاقات",
      variant: "destructive",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>إدارة النطاقات</span>
          <Button 
            className="bg-primary hover:bg-primary-dark"
            onClick={handleAddDomain}
          >
            <Plus className="w-4 h-4 ml-2" />
            إضافة نطاق
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Input placeholder="example.com" className="flex-1" />
            <Button 
              variant="outline"
              onClick={handleAddDNS}
            >
              إضافة سجل DNS
            </Button>
            <Button 
              variant="destructive"
              onClick={handleDelete}
            >
              حذف
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DomainManager;