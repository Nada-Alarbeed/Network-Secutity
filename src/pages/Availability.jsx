import React from "react";
import VideoButton from "../components/VideoButton";
import InfoCard from "../components/InfoCard";

const Availability = () => {
  return (
    <div className="bg-primary text-white min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div dir="rtl" className="text-center mb-16">
          <h1
            className="flex flex-wrap justify-center items-center gap-3 font-black leading-none"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <span className="text-h3 md:text-h2 text-blue">توافر الخدمة</span>
            <span className="text-h4 md:text-h3 text-white">
              (Availability)
            </span>
          </h1>
          <div className="pt-8" data-aos="zoom-in-up" data-aos-duration="1500">
            <VideoButton videoUrl="src/assets/Qusai.mp4" />
          </div>
        </div>
        <InfoCard title=" المفهوم والأهداف">
          <div
            dir="rtl"
            className="space-y-4 text-right"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-lg leading-relaxed text-gray-200">
              أن يكون النظام أو الشبكة أو الخدمة متاحة للمستخدمين في أي وقت
              يحتاجونها بدون انقطاع أو توقف.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue/5 p-4 rounded-xl border border-blue/10">
                <h4 className="text-blue font-bold mb-2 underline">الهدف:</h4>
                <ul className="list-disc list-inside text-sm space-y-2 text-gray-300">
                  <li>تقليل الأعطال وزيادة وقت التشغيل.</li>
                  <li>يتحقق من خلال وجود إعدادات احتياطية للراوترات.</li>
                  <li>
                    خط احتياطي لضمان الاستمرارية في حال تعطل الخط الأساسي.
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col justify-center">
                <p className="text-sm font-bold text-white mb-2">
                  لذلك تم تطبيق:
                </p>
                <p className="text-blue-400 font-mono">1. Load Balancing</p>
                <p className="text-blue-400 font-mono">2. Backups</p>
              </div>
            </div>
          </div>
        </InfoCard>
        <InfoCard title="Load Balancing (HSRP)">
          <div
            dir="rtl"
            className="mb-6 text-right space-y-3"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-gray-200">
              بتطبيق بروتوكول{" "}
              <span className="text-blue-400 font-bold">HSRP</span>:
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              <strong className="text-white">الهدف الأساسي:</strong> توزيع الحمل
              مما يزيد من كفاءة الشبكة وتقليل الضغط عليها.
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              <strong className="text-white">الفكرة الثانية:</strong> تأمين مسار
              احتياطي في حال حدث عطل على أحد المسارات مما يتيح الاستمرارية في
              الشبكة.
            </p>
            <p className="text-xs font-bold text-blue-400">
              التطبيق على: R2, R3
            </p>
          </div>

          <div
            className="bg-black/60 p-6 rounded-2xl font-mono text-sm space-y-6 border border-blue-500/20 shadow-inner text-left"
            dir="ltr"
          >
            <div>
              <p className="text-yellow-500 mb-1">// R2 Configuration</p>
              <p className="text-blue-400">
                R2(config)# interface fastEthernet 0/0
              </p>
              <p className="text-green-400">
                R2(config-if)# standby 1 ip 192.168.23.1
              </p>
              <p className="text-green-400">R2(config-if)# standby 1 preempt</p>
              <p className="text-green-400">
                R2(config-if)# standby 1 priority 150
              </p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-yellow-500 mb-1">// R3 Configuration</p>
              <p className="text-blue-400">
                R3(config)# interface fastEthernet 0/0
              </p>
              <p className="text-green-400">
                R3(config-if)# standby 1 ip 192.168.23.1
              </p>
            </div>
          </div>
        </InfoCard>
        <InfoCard title="النسخ الاحتياطي (Backups)">
          <div
            dir="rtl"
            className="space-y-4 text-right mb-6"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-gray-200">
              هو حفظ نسخة احتياطية من البيانات في مكان آمن لاستخدامها عند فقدان
              البيانات الأصلية بعد عطل أو هجمات.
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-white">التطبيق:</strong> على جميع
              الراوترات بوضع نسخة على كل سيرفر لضمان وجود نسختين في حال حدث
              انقطاع بين الفرعين.
            </p>
            <p className="text-sm bg-blue/10 p-3 border-r-4 border-blue text-blue-200">
              القسم الوحيد المخول للدخول إلى TFTP هو قسم{" "}
              <span className="font-bold text-white">IT</span> ويتم السماح له
              باستخدام FIREWALL ACL.
            </p>
          </div>
          <div
            className="bg-black/60 p-6 rounded-2xl font-mono text-sm space-y-4 border border-green-500/20 text-left"
            dir="ltr"
          >
            <p className="text-blue-400">R# copy startup-config tftp:</p>
            <p className="text-gray-400 pl-4">
              Address or name of remote host []? 192.168.40.2
            </p>
            <p className="text-gray-400 pl-4">
              Destination filename [R-config]? R^name^
            </p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-yellow-500 font-bold mb-1">
                // وعلى السيرفر الثاني
              </p>
              <p className="text-blue-400">R# copy startup-config tftp:</p>
              <p className="text-gray-400 pl-4">
                Address or name of remote host []? 192.168.41.2
              </p>
            </div>
          </div>
        </InfoCard>
        <InfoCard title="تأمين الوصول (ACL)">
          <div
            className="bg-black/80 p-6 rounded-2xl font-mono text-[11px] md:text-xs space-y-4 border border-red-500/20 text-left"
            dir="ltr"
          >
            <p className="text-blue-300">
              R1(config)# ip access-list extended IT-TFTP
            </p>
            <p className="text-green-400">
              R1(config-ext-nacl)# permit udp 192.168.10.0 0.0.0.255 host
              192.168.40.2 eq tftp
            </p>
            <p className="text-green-400">
              R1(config-ext-nacl)# permit udp 192.168.10.0 0.0.0.255 host
              192.168.41.2 eq tftp
            </p>
            <p className="text-red-400">
              R1(config-ext-nacl)# deny udp any host 192.168.40.2 eq tftp
            </p>
            <p className="text-red-400">
              R1(config-ext-nacl)# deny udp any host 192.168.41.2 eq tftp
            </p>
            <p className="text-blue-300">
              R1(config-ext-nacl)# permit ip any any
            </p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-blue-300">
                R7(config)# ip access-list extended IT-TFTP
              </p>
              <p className="text-green-400">
                R7(config-ext-nacl)# permit udp 192.168.11.0 0.0.0.255 host
                192.168.41.2 eq tftp
              </p>
              <p className="text-red-400">
                R7(config-ext-nacl)# deny udp any host 192.168.40.2 eq tftp
              </p>
              <p className="text-red-400">
                R7(config-ext-nacl)# deny udp any host 192.168.41.2 eq tftp
              </p>
              <p className="text-blue-300">
                R7(config-ext-nacl)# permit ip any any
              </p>
            </div>
          </div>
        </InfoCard>
        <InfoCard title=" أمن المنافذ (Port Security)">
          <div
            dir="rtl"
            className="mb-4 text-right"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-gray-200">
              هو ميزة في أجهزة السويتش تستخدم لمنع الأجهزة غير المصرح لها من
              الاتصال بالشبكة لضمان بقاء المنافذ متاحة فقط للأجهزة الموثوقة.
            </p>
            <p className="text-xs font-bold text-blue-400 mt-2">
              التطبيق على السويتشات الموجودة.
            </p>
          </div>

          <div
            className="bg-black/60 p-6 rounded-2xl font-mono text-sm space-y-2 border border-blue-500/10 text-left"
            dir="ltr"
          >
            <p className="text-blue-400">
              S(config)# interface fastEthernet 0/1
            </p>
            <p className="text-green-400">
              S(config-if)# switchport port-security mac-address sticky
              "0007.ECDC.BD3C"
            </p>
            <p className="text-red-500 font-bold">
              S(config-if)# switchport port-security violation shutdown
            </p>
          </div>
        </InfoCard>
        <InfoCard title="المشاكل الفيزيائية والحلول">
          <div
            className="space-y-6 text-right"
            dir="rtl"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div>
              <h4 className="text-blue font-bold flex items-center gap-2 mb-2 underline">
                انقطاع الكهرباء:
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                قد يحدث انقطاع للتيار الكهربائي لعدة عوامل مما يعيق الوصول
                للمعلومات، مثل زيادة الحمل أو كوارث (زلزال/إعصار). الحل هو توفير
                تيار كهربائي احتياطي مثل{" "}
                <span className="text-white font-bold">مولد كهربائي</span>.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <h4 className="text-blue font-bold flex items-center gap-2 mb-2 underline">
                تدمير المعدات:
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                قد تُدمر المعدات لأسباب عرضية أو متعمدة (مثل الحريق). الحل هو
                وضع{" "}
                <span className="text-white font-bold">
                  أنظمة احتياطية في مواقع بعيدة
                </span>{" "}
                نوعاً ما لضمان بقاء النظام سليمًا وتوليه المهمة فوراً عند تعرض
                الموقع الرئيسي لمشكلة.
              </p>
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  );
};

export default Availability;
