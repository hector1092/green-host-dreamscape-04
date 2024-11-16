import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Settings, Mail, Database, Server, BarChart, Globe } from "lucide-react";
import DomainManager from '../components/dashboard/DomainManager';
import GeneralSettings from '../components/dashboard/GeneralSettings';
import EmailManager from '../components/dashboard/EmailManager';
import BackupManager from '../components/dashboard/BackupManager';
import StatsPanel from '../components/dashboard/StatsPanel';
import UsersPanel from '../components/dashboard/UsersPanel';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-secondary p-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Server className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-white">لوحة التحكم</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatsPanel />
          <UsersPanel />
        </div>

        <Tabs defaultValue="domains" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-secondary-dark p-2 rounded-lg">
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
              <span>البريد الإلكتروني</span>
            </TabsTrigger>
            <TabsTrigger value="backup" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>النسخ الاحتياطي</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="domains" className="space-y-4">
            <DomainManager />
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <GeneralSettings />
          </TabsContent>

          <TabsContent value="email" className="space-y-4">
            <EmailManager />
          </TabsContent>

          <TabsContent value="backup" className="space-y-4">
            <BackupManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;