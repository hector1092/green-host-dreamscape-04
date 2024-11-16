import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PaymentMethods = () => {
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);

  const paymentMethods = [
    {
      icon: "/icons/image-_5_.ico",
      name: "فودافون كاش",
      description: "ادفع بسهولة عبر محفظة فودافون كاش",
      bgColor: "bg-red-500/10",
      action: () => setShowPhoneDialog(true)
    },
    {
      icon: "/icons/image-_4_.ico",
      name: "بطاقة فيزا/ماستركارد",
      description: "ادفع باستخدام بطاقتك البنكية",
      bgColor: "bg-blue-500/10",
      action: () => setShowCardForm(true)
    },
    {
      icon: "/icons/image-_2_.ico",
      name: "إنستا باي",
      description: "الدفع السريع عبر إنستا باي",
      bgColor: "bg-purple-500/10",
      action: () => setShowPhoneDialog(true)
    },
    {
      icon: "/icons/image-_3_.ico",
      name: "تحويل بنكي",
      description: "حول المبلغ مباشرة إلى حسابنا البنكي",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <section className="py-16 bg-secondary/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">طرق الدفع</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className={`${method.bgColor} backdrop-blur-xl rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10 flex flex-col items-center cursor-pointer`}
              onClick={method.action}
            >
              <div className="mb-4">
                <img 
                  src={method.icon}
                  alt={method.name}
                  className="w-16 h-16 transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{method.name}</h3>
              <p className="text-gray-300">{method.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Phone Number Dialog */}
      <Dialog open={showPhoneDialog} onOpenChange={setShowPhoneDialog}>
        <DialogContent className="sm:max-w-md" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-center">رقم الهاتف للدفع</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center p-6">
            <p className="text-2xl font-bold">01281343893</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Card Payment Form Dialog */}
      <Dialog open={showCardForm} onOpenChange={setShowCardForm}>
        <DialogContent className="sm:max-w-md" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-center">بيانات البطاقة</DialogTitle>
          </DialogHeader>
          <form className="space-y-4 p-6">
            <div>
              <Input 
                placeholder="اسم حامل البطاقة"
                className="w-full text-right"
              />
            </div>
            <div>
              <Input 
                placeholder="رقم البطاقة"
                className="w-full text-right"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input 
                placeholder="تاريخ الانتهاء"
                className="text-right"
              />
              <Input 
                placeholder="CVV"
                type="password"
                maxLength={3}
                className="text-right"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
            >
              دفع
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PaymentMethods;