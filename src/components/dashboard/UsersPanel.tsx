import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Ban, CheckCircle } from "lucide-react";

const UsersPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>المستخدمين النشطين</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>المستخدم</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>أحمد محمد</TableCell>
              <TableCell className="text-green-500">نشط</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  <Ban className="w-4 h-4 ml-2" />
                  حظر
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>سارة أحمد</TableCell>
              <TableCell className="text-red-500">محظور</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
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