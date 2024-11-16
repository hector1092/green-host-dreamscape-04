import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Ban, CheckCircle, UserPlus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const UsersPanel = () => {
  const { toast } = useToast();

  const handleAddUser = () => {
    toast({
      title: "إضافة مستخدم جديد",
      description: "تم فتح نموذج إضافة مستخدم جديد",
    });
  };

  const handleBanUser = () => {
    toast({
      title: "تم حظر المستخدم",
      description: "تم حظر المستخدم بنجاح",
      variant: "destructive",
    });
  };

  const handleUnbanUser = () => {
    toast({
      title: "تم إلغاء الحظر",
      description: "تم إلغاء حظر المستخدم بنجاح",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>المستخدمين النشطين</span>
          <Button 
            className="bg-primary hover:bg-primary-dark"
            onClick={handleAddUser}
          >
            <UserPlus className="w-4 h-4 ml-2" />
            إضافة مستخدم
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="بحث عن مستخدم..." className="pr-10" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>المستخدم</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>الصلاحية</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>أحمد محمد</TableCell>
              <TableCell className="text-green-500">نشط</TableCell>
              <TableCell>مدير</TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleBanUser}
                >
                  <Ban className="w-4 h-4 ml-2" />
                  حظر
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>سارة أحمد</TableCell>
              <TableCell className="text-red-500">محظور</TableCell>
              <TableCell>مستخدم</TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleUnbanUser}
                >
                  <CheckCircle className="w-4 h-4 ml-2" />
                  إلغاء الحظر
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UsersPanel;