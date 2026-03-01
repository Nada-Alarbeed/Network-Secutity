import VideoButton from "../components/VideoButton";
import InfoCard from "../components/InfoCard";

const Authentication = () => {
  return (
    <div className="bg-primary text-white min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div dir="rtl" className="text-center mb-16">
          <h1
            className="flex flex-wrap justify-center items-center gap-3 font-black leading-none"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <span className="text-h3 md:text-h2 text-blue">المصادقة</span>
            <span className="text-h4 md:text-h3 text-white">
              (Authentication)
            </span>
          </h1>
          <div className="pt-8" data-aos="zoom-in-up" data-aos-duration="1500">
            <VideoButton videoUrl="https://drive.google.com/file/d/1R0tt_M_HU-DnUUOOU72ujhcy9YTslI-j/view?usp=sharing" />
          </div>
        </div>
        <InfoCard title="المفهوم والأهمية">
          <div
            className="space-y-4 text-right"
            dir="rtl"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-lg leading-relaxed text-gray-200">
              تُعد المصادقة أحد العناصر الأساسية في أمن الشبكات، حيث تهدف إلى
              التحقق من هوية المستخدم قبل منحه صلاحية الوصول إلى أجهزة الشبكة أو
              تعديل إعداداتها.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              تطبيق آليات المصادقة يمنع الوصول غير المصرح به، ويحمي أجهزة
              التوجيه من أي محاولات عبث أو تغيير قد تؤدي إلى تعطيل الخدمات أو
              اختراق الشبكة.
            </p>
            <div className="bg-red-500/10 border-r-4 border-red-500 p-4 rounded-l-xl my-4">
              <p className="text-sm italic text-red-200">
                في حال عدم تفعيل المصادقة، يمكن لأي شخص يمتلك وصولًا فيزيائيًا
                أو عن بُعد إلى الراوتر تنفيذ أوامر خطيرة مثل تعديل جداول التوجيه
                أو تعطيل الواجهات أو إيقاف الاتصال بين الفروع.
              </p>
            </div>
            <p className="text-lg leading-relaxed text-gray-200">
              لذلك تم تطبيق المصادقة في المشروع باستخدام قاعدة بيانات محلية
              (Local Authentication) مع تشفير كلمات المرور، لضمان أن الوصول
              الإداري يتم فقط من قبل مستخدمين مخولين.
            </p>
            <p className="text-sm font-bold text-blue-400 mt-4">
              التطبيق على الراوترات: <span className="text-white">R6 , R4</span>
            </p>
          </div>
        </InfoCard>
        <InfoCard title="إعداد المصادقة المحلية">
          <div
            className="space-y-6"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-right text-gray-300 text-lg" dir="rtl">
              إعداد المصادقة المحلية على الراوترات وإنشاء مستخدم بصلاحيات كاملة
              (Privilege 15). هذه الخطوة تضمن أن فقط المستخدمين المعرفين مسبقًا
              يمكنهم الدخول إلى الراوتر.
            </p>

            <div
              className="bg-black/60 p-6 rounded-2xl font-mono text-sm border border-blue-500/20 shadow-inner text-left"
              dir="ltr"
            >
              <p className="text-blue-400">
                R(config)# username netadmin privilege 15 secret @123
              </p>
            </div>

            <div
              className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 text-right"
              dir="rtl"
            >
              <p className="text-sm text-green-400 leading-relaxed">
                <strong>ميزة استخدام (secret) بدلاً من (password):</strong> هي
                أن كلمة المرور تُحفظ بشكل مشفر داخل ملف الإعدادات، مما يعزز
                مستوى الحماية.
              </p>
            </div>
          </div>
        </InfoCard>
        <InfoCard title="تفعيل المصادقة والتحقق">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
              <h4 className="text-blue font-bold mb-3 text-right" dir="rtl">
                منفذ الـ Console:
              </h4>
              <p className="text-xs text-gray-400 mb-4 text-right" dir="rtl">
                يمنع أي شخص من الدخول مباشرة إلى الراوتر دون اسم مستخدم وكلمة
                مرور.
              </p>
              <div
                className="font-mono text-xs text-blue-300 space-y-1 text-left"
                dir="ltr"
              >
                <p>R(config)# line console 0</p>
                <p>R(config-line)# login local</p>
              </div>
            </div>

            <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
              <h4 className="text-blue font-bold mb-3 text-right" dir="rtl">
                خطوط الـ VTY:
              </h4>
              <p className="text-xs text-gray-400 mb-4 text-right" dir="rtl">
                يضمن أن أي اتصال إداري عن بُعد يتطلب التحقق من الهوية.
              </p>
              <div
                className="font-mono text-xs text-blue-300 space-y-1 text-left"
                dir="ltr"
              >
                <p>R(config)# line vty 0 4</p>
                <p>R(config-line)# login local</p>
              </div>
            </div>
          </div>

          <div
            className="mt-8 bg-primaryCard p-6 rounded-2xl border border-white/10"
            dir="rtl"
          >
            <h4 className="text-white font-bold mb-4">آلية عمل النظام:</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-red-500">✘</span>
                <span>عند إدخال اسم مستخدم خاطئ ← يتم رفض الدخول</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">✘</span>
                <span>عند إدخال كلمة مرور خاطئة ← يتم رفض الدخول</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                <span>فقط المستخدم المخول يستطيع الوصول</span>
              </li>
            </ul>
          </div>
        </InfoCard>
        <div
          className="bg-blue/10 p-8 rounded-3xl border border-blue/20 text-center"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p
            className="text-blue-200 italic font-medium leading-relaxed"
            dir="rtl"
          >
            "وبذلك تم تحقيق مبدأ Authentication من خلال التحكم الكامل في هوية
            المستخدمين المسموح لهم بإدارة أجهزة الشبكة."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
