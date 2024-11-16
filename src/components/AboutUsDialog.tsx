import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AboutUsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn-primary text-lg">
          من نحن
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-6">
            مرحبا بك في Green Host – حيث يلتقي الأداء بالأمان.
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-right">
          <p className="text-lg leading-relaxed">
            نحن أكثر من مجرد شركة استضافة مواقع، نحن بوابتك إلى عالم رقمي سريع، آمن، وموثوق.
            بفريقنا المبدع وتقنياتنا المتطورة، نقدم لك تجربة استضافة تضيف لموقعك القوة، السرعة، والاستقرار.
          </p>

          <div>
            <h3 className="text-xl font-bold text-primary mb-2">رؤيتنا: نُعيد تعريف استضافة المواقع.</h3>
            <p className="leading-relaxed">
              في عالم مليء بالتحديات التقنية، نسعى لنكون الحل الأمثل لأصحاب المواقع الطموحين. هدفنا هو تقديم خدمات تجعل من السهل على الجميع الانطلاق نحو النجاح في فضاء الإنترنت.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-2">قيمنا الأساسية:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>التطوير المستمر: نحن دائمًا في رحلة تطوير وتحسين.</li>
              <li>الأمان أولويتنا: نوفر حماية شاملة للحفاظ على بياناتك وموقعك.</li>
              <li>الابتكار: نجلب أحدث التقنيات لخدمتك.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-2">ماذا نقدم؟</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>استضافة فائقة السرعة: خوادم حديثة مهيأة لتقديم أفضل أداء.</li>
              <li>حماية متقدمة: أنظمة أمان ذكية لضمان تجربة خالية من المخاطر.</li>
              <li>دعم مستمر: فريق دعم فني متاح على مدار الساعة ليجيب على أسئلتك.</li>
              <li>حلول مخصصة: خطط تناسب الجميع، من المواقع الشخصية إلى المشاريع الكبرى.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-2">لماذا Green Host؟</h3>
            <p className="leading-relaxed">
              لأننا نؤمن أن التكنولوجيا المتطورة وحدها لا تكفي، بل يجب أن تكون مدعومة بخدمة إنسانية حقيقية.
              معنا، ستحصل على تجربة استضافة تجمع بين الأداء الراقي، السهولة، والأمان – كل ذلك بأسعار تنافسية.
            </p>
          </div>

          <p className="text-lg font-bold text-primary">
            ابدأ اليوم رحلتك الرقمية معنا – لأن موقعك يستحق الأفضل.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutUsDialog;
