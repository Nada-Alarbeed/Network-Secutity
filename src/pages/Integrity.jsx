import React from "react";
import VideoButton from "../components/VideoButton";
import InfoCard from "../components/InfoCard";

const Integrity = () => {
  return (
    <div className="bg-primary text-white min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div dir="rtl" className="text-center mb-16">
          <h1
            className="flex flex-wrap justify-center items-center gap-3 font-black leading-none"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <span className="text-h3 md:text-h2 text-blue">سلامة البيانات</span>
            <span className="text-h4 md:text-h3 text-white">(Integrity)</span>
          </h1>
          <div className="pt-8" data-aos="zoom-in-up" data-aos-duration="1500">
            <VideoButton videoUrl="src/assets/Nada.mp4" />
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
              تُعد سلامة البيانات عنصرًا أساسيًا في حماية البنية التحتية
              للشبكات، حيث تضمن بقاء المعلومات وإعدادات الأجهزة دقيقة وغير معدلة
              إلا من قبل أشخاص مصرح لهم.
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              إن تطبيق آليات الحماية مثل التشفير، المصادقة، وتقييد الوصول
              الإداري يساهم في منع التلاعب بالإعدادات وتقليل المخاطر الأمنية،
              مما يحافظ على استقرار الشبكة واستمرارية عمل الشركة بكفاءة وأمان.
            </p>
            <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 my-4">
              <p className="text-sm italic text-red-200">
                في حال غياب هذه الآليات، قد تتعرض أجهزة الشبكة لتعديلات غير مصرح
                بها تؤدي إلى تعطيل الخدمات أو إنشاء ثغرات أمنية خطيرة. لذلك تُعد
                سلامة البيانات خط الدفاع الأساسي ضد العبث بالبنية التحتية
                التقنية.
              </p>
            </div>
            <p className="text-gray-200">
              تم تطبيق هذا المفهوم عملياً من خلال استخدام <strong>SSH</strong>{" "}
              لتشفير جلسات الإدارة، وتفعيل المصادقة المحلية، وتقييد مصادر الوصول
              باستخدام <strong>ACL</strong>.
            </p>
          </div>
        </InfoCard>
        <InfoCard title=" تطبيق SSH و ACL">
          <div
            dir="rtl"
            className="mb-4 text-right"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-gray-300">
              قمت بتطبيق SSH على جميع الراوترات بالفرعين، مع جعل قسم الـ{" "}
              <span className="text-blue-400 font-bold">IT</span> هو القسم
              الوحيد المخول للدخول لإجراء التعديلات:
            </p>
          </div>
          <div
            className="bg-black/60 p-6 rounded-2xl font-mono text-sm space-y-4 border border-blue-500/20 shadow-inner text-left"
            dir="ltr"
          >
            <div className="space-y-1">
              <p className="text-yellow-500">// إعدادات التشفير والمصادقة</p>
              <p className="text-blue-400">R(config)# enable secret RRRR</p>
              <p className="text-blue-400">R(config)# ip domain-name ccna</p>
              <p className="text-blue-400">
                R(config)# crypto key generate rsa
              </p>
            </div>
            <div className="border-t border-white/10 pt-4 space-y-1">
              <p className="text-yellow-500">// تقييد الوصول للفرع الرئيسي</p>
              <p className="text-green-400">
                R(config)# ip access-list standard IT-SSH
              </p>
              <p className="text-green-400">
                R(config-std-nacl)# permit 192.168.10.0 0.0.0.255
              </p>
              <p className="text-red-400">R(config-std-nacl)# deny any</p>
            </div>
          </div>
        </InfoCard>
        <InfoCard title=" توزيع الصلاحيات (R6, R7)">
          <div
            dir="rtl"
            className="space-y-4 text-right mb-6"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-gray-200">
              بالنسبة لراوترات الفرع الثاني (R6, R7)، تم السماح لقسم الـ IT في
              كلا الفرعين بالوصول SSH:
            </p>
            <div className="bg-blue/5 p-4 rounded-xl border border-blue/20 text-sm">
              <p className="leading-relaxed">
                • قسم IT بالفرع الرئيسي يمكنه الاتصال بجميع الراوترات (اتصال
                مشفر).
                <br />• قسم IT بالفرع الثاني له الصلاحية فقط على راوترات فرعه،
                ولا يمكنه الوصول لراوترات الفرع الرئيسي.
              </p>
            </div>
          </div>
          <div
            className="bg-black/60 p-6 rounded-2xl font-mono text-sm text-blue-300 border border-blue-500/20 text-left"
            dir="ltr"
          >
            <p>R(config)# ip access-list standard IT-SSH</p>
            <p className="text-green-400">
              R(config-std-nacl)# permit 192.168.10.0 0.0.0.255
            </p>
            <p className="text-green-400">
              R(config-std-nacl)# permit 192.168.11.0 0.0.0.255
            </p>
            <p className="text-red-400">R(config-std-nacl)# deny any</p>
          </div>
        </InfoCard>
        <section className="bg-primaryCard p-8 rounded-3xl border border-blue/20 shadow-xl">
          <h2
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-blue font-bold text-2xl mb-6 border-b border-white/10 pb-4 italic text-right"
            dir="rtl"
          >
            شرح التعليمات التقنية
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div
              className="bg-black/80 p-6 rounded-2xl font-mono text-xs text-yellow-500 border border-yellow-500/10 shadow-lg text-left order-2 md:order-1"
              dir="ltr"
            >
              <p>R(config)# line vty 0 4</p>
              <p className="text-white">R(config-line)# transport input ssh</p>
              <p className="text-white">
                R(config-line)# username ccna password RPASSWORD
              </p>
              <p className="text-white">
                R(config-line)# access-class IT-SSH in
              </p>
              <p className="text-white">R(config-line)# login local</p>
              <p className="text-white">R(config-line)# exec-timeout 5 0</p>
            </div>
            <div
              className="space-y-4 text-sm text-gray-300 pr-2 order-1 md:order-2 text-right"
              dir="rtl"
            >
              <p>
                <strong className="text-white">1. enable secret RRRR:</strong>{" "}
                يضمن أن الوصول لوضع الإعدادات (Privileged EXEC) يحتاج كلمة مرور
                قوية ومشفرة.
              </p>
              <p>
                <strong className="text-white">
                  2. ip domain-name & crypto key:
                </strong>{" "}
                لإنشاء هوية للمجال وتوليد مفاتيح تشفير RSA لمنع التجسس على
                بيانات الإدارة.
              </p>
              <p>
                <strong className="text-white">3. transport input ssh:</strong>{" "}
                يسمح بالوصول فقط عبر SSH المشفر ويمنع بروتوكول Telnet غير الآمن.
              </p>
              <p>
                <strong className="text-white">
                  4. access-class IT-SSH in:
                </strong>{" "}
                تطبيق الـ ACL للتحكم الدقيق في من يمكنه الاتصال بالراوتر (تقييد
                مصادر الوصول).
              </p>
              <p>
                <strong className="text-white">5. exec-timeout 5 0:</strong> قطع
                الجلسة تلقائياً بعد 5 دقائق من الخمول لزيادة الأمان.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Integrity;
