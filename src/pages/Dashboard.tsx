import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, Settings, Mail, Database, Server, BarChart, 
  Globe, Shield, History, Bell, FileText, Printer,
  HardDrive, Cpu, Activity, AlertTriangle
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import DomainManager from '../components/dashboard/DomainManager';
import GeneralSettings from '../components/dashboard/GeneralSettings';
import EmailManager from '../components/dashboard/EmailManager';
import BackupManager from '../components/dashboard/BackupManager';
import StatsPanel from '../components/dashboard/StatsPanel';
import UsersPanel from '../components/dashboard/UsersPanel';
import SecurityPanel from '../components/dashboard/SecurityPanel';
import ActivityLog from '../components/dashboard/ActivityLog';

const Dashboard = () => {
  const { toast } = useToast();

  const handleNotification = () => {
    toast({
      title: "تنبيه جديد",
      description: "تم تسجيل دخول جديد إلى النظام",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 transition-all duration-300" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <Server className="w-8 h-8 text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold">لوحة التحكم</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleNotification}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-accent transition-colors">
              <Printer className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <StatsPanel />
          <SecurityPanel />
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 bg-card rounded-lg shadow-sm">
              <div className="space-y-1">
                <h3 className="font-medium">استخدام الموارد</h3>
                <div className="text-sm text-muted-foreground">
                  <Cpu className="w-4 h-4 inline-block ml-1" />
                  CPU: 45%
                </div>
                <div className="text-sm text-muted-foreground">
                  <HardDrive className="w-4 h-4 inline-block ml-1" />
                  مساحة التخزين: 60%
                </div>
              </div>
              <Activity className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>

        <Tabs defaultValue="domains" className="space-y-6 animate-fade-in">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-card p-2 rounded-lg">
            <TabsTrigger value="domains" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>النطاقات</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span>الإعدادات</span>
            </TabsTrigger>
            <TabsTrigger value="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>البريد</span>
            </TabsTrigger>
            <TabsTrigger value="backup" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>النسخ الاحتياطي</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>المستخدمين</span>
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <History className="w-4 h-4" />
              <span>النشاطات</span>
            </TabsTrigger>
          </TabsList>

          <div className="bg-card rounded-lg p-4 shadow-sm">
            <TabsContent value="domains">
              <DomainManager />
            </TabsContent>
            <TabsContent value="settings">
              <GeneralSettings />
            </TabsContent>
            <TabsContent value="email">
              <EmailManager />
            </TabsContent>
            <TabsContent value="backup">
              <BackupManager />
            </TabsContent>
            <TabsContent value="users">
              <UsersPanel />
            </TabsContent>
            <TabsContent value="activity">
              <ActivityLog />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;