import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { History } from "lucide-react";

const ActivityLog = () => {
  const activities = [
    {
      user: "أحمد محمد",
      action: "تسجيل دخول",
      timestamp: "منذ 5 دقائق",
      status: "نجاح"
    },
    {
      user: "سارة أحمد",
      action: "تعديل محتوى",
      timestamp: "منذ 15 دقيقة",
      status: "نجاح"
    },
    {
      user: "مجهول",
      action: "محاولة دخول",
      timestamp: "منذ 30 دقيقة",
      status: "فشل"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="w-5 h-5" />
          سجل النشاطات
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>المستخدم</TableHead>
              <TableHead>النشاط</TableHead>
              <TableHead>التوقيت</TableHead>
              <TableHead>الحالة</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity, index) => (
              <TableRow key={index}>
                <TableCell>{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.timestamp}</TableCell>
                <TableCell className={activity.status === "نجاح" ? "text-green-500" : "text-red-500"}>
                  {activity.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ActivityLog;