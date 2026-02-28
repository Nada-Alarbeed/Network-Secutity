import { useState } from "react";
import networkTopology from "../assets/network.png";
import { FaSearchPlus, FaTimes } from "react-icons/fa";

const About = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const securityPillars = [
    {
      title: "السرية (Confidentiality)",
      desc: "تطبيق تقنيات التشفير لضمان أن البيانات الحساسة لا يمكن قراءتها إلا من قبل الأشخاص المخولين فقط.",
    },
    {
      title: "سلامة البيانات (Integrity)",
      desc: "استخدام خوارزميات التحقق لضمان أن المعلومات لم تتعرض لأي تعديل غير مصرح به أثناء انتقالها.",
    },
    {
      title: "التوافر (Availability)",
      desc: "تصميم مسارات بديلة في الشبكة (Redundancy) لضمان استمرار الخدمة حتى في حال تعطل أحد المسارات.",
    },
    {
      title: "الجدار الناري (Firewall)",
      desc: "بناء قواعد تصفية المرور (ACLs) للتحكم في البيانات الواردة والصادرة ومنع التهديدات الخارجية.",
    },
    {
      title: "المصادقة (Authentication)",
      desc: "إلزام المستخدمين بالتحقق من هويتهم قبل الوصول إلى المصادر الحساسة داخل نظام الشبكة.",
    },
  ];

  return (
    <div className="bg-primary text-white min-h-screen pt-28 pb-20">
      <div className="center-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="relative order-2 lg:order-1 group cursor-pointer"
            onClick={() => setIsZoomed(true)}
          >
            <div className="absolute -inset-2 bg-blue/30 blur-2xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative z-10 p-2 bg-white/5 rounded-2xl border border-blue/20 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-4 right-4 z-20 bg-blue/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <FaSearchPlus className="text-white text-sm" />
              </div>

              <img
                src={networkTopology}
                alt="Cisco Network Topology"
                className="w-full h-auto rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-center text-[10px] text-blue mt-4 font-mono uppercase tracking-[0.3em] opacity-60">
              Click to inspect topology details
            </p>
          </div>

          <div
            dir="rtl"
            className="space-y-6 order-1 lg:order-2"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <h3 className="text-3xl md:text-5xl font-black leading-tight">
              محاكاة واقعية للبنية التحتية للشبكة
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              قمنا بتصميم مخطط شبكة متكامل يحاكي بيئة عمل حقيقية، حيث قمت بتوزيع
              الأجهزة وربطها عبر شبكات فرعية (VLANs) لضمان عزل البيانات
              وحمايتها، مع ضبط إعدادات الـ Routing والـ Security لكل قطاع.
            </p>
          </div>
        </div>
        <div
          dir="rtl"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 border-t border-border/20"
        >
          {securityPillars.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              key={index}
              className="p-8 bg-primaryCard/40 rounded-2xl border border-border/30 hover:border-blue/50 transition-all hover:-translate-y-1 duration-300"
            >
              <h4 className="text-blue font-bold mb-4 text-lg">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fadeIn"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-7xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 md:-right-4 text-white/70 hover:text-blue transition-colors flex items-center gap-2 group"
              onClick={() => setIsZoomed(false)}
            >
              <span className="text-xs font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                CLOSE
              </span>
              <FaTimes className="text-3xl md:text-4xl" />
            </button>

            <div className="bg-white p-1 rounded-xl shadow-2xl overflow-hidden shadow-blue/20">
              <img
                src={networkTopology}
                alt="Full Topology View"
                className="max-w-full max-h-[80vh] object-contain animate-zoomIn cursor-zoom-out"
                onClick={() => setIsZoomed(false)}
              />
            </div>

            <p className="mt-6 text-white/20 text-[10px] font-mono tracking-[0.5em] uppercase">
              Cisco Network Architecture - Al-Madina Tech
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
