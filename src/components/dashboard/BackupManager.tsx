import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";

const BackupManager = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>النسخ الاحتياطي واستعادة البيانات</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Download className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-lg font-semibold">تحميل نسخة احتياطية</h3>
                <p className="text-sm text-gray-400">قم بتحميل نسخة احتياطية من بياناتك</p>
                <Button className="w-full bg-primary hover:bg-primary-dark">
                  تحميل النسخة الاحتياطية
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Upload className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-lg font-semibold">استعادة النسخة الاحتياطية</h3>
                <p className="text-sm text-gray-400">قم باستعادة بياناتك من نسخة احتياطية</p>
                <Button className="w-full bg-primary hover:bg-primary-dark">
                  استعادة النسخة الاحتياطية
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default BackupManager;