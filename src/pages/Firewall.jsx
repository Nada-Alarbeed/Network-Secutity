import React from "react";
import VideoButton from "../components/VideoButton";
import InfoCard from "../components/InfoCard";

const Firewall = () => {
    return (
        <div className="bg-primary text-white min-h-screen pt-28 pb-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto space-y-12">
                <div dir="rtl" className="text-center mb-16">
                    <h1
                        className="flex flex-wrap justify-center items-center gap-3 font-black leading-none"
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    >
                        <span className="text-h3 md:text-h2 text-blue">(جدار الحماية)</span>
                        <span className="text-h4 md:text-h3 text-white">Firewall</span>
                    </h1>
                    <div className="pt-8" data-aos="zoom-in-up" data-aos-duration="1500">
                        <VideoButton videoUrl="src/assets/Ghazal.mp4" />
                    </div>
                </div>
                <InfoCard title="المفهوم والهدف">
                    <div
                        dir="rtl"
                        className="space-y-4 text-lg leading-relaxed text-right"
                    >
                        <p>
                            <strong className="text-blue">المفهوم:</strong> هو نظام أمني يراقب
                            ويتحكم في حركة مرور الشبكة الصادرة والواردة بناءً على قواعد أمنية
                            محددة.
                        </p>
                        <p>
                            <strong className="text-blue">الهدف:</strong> منع الوصول غير
                            المصرح به مع السماح بالاتصالات الآمنة.
                        </p>
                        <p>
                            <strong className="text-blue">يتحقق من خلاله:</strong> تطبيق قواعد
                            الـ Access Control Lists (ACL) على منافذ الراوترات.
                        </p>
                        <p>
                            <strong className="text-blue">التطبيق على:</strong> الراوتر
                            الرئيسي (R1) لفلترة الدخول إلى منطقة السيرفرات.
                        </p>
                    </div>
                </InfoCard>

                <InfoCard title="Extended ACL Configuration - R1">
                    <div
                        dir="rtl"
                        className="mb-4 text-gray-300 text-right"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <p>
                            <strong className="text-white">الهدف:</strong> السماح فقط
                            ببروتوكولات الويب (WWW) والـ (DNS) ومنع أي وصول غير مصرح به لشبكة
                            السيرفرات.
                        </p>
                        <p className="mt-2">
                            <strong className="text-white">التطبيق على (R1):</strong> برمجة
                            القواعد للتحكم في تدفق البيانات بين الفروع ومنطقة الخوادم.
                        </p>
                    </div>
                    <div
                        className="bg-black/60 p-6 rounded-2xl font-mono text-sm space-y-2 border border-blue-500/20 shadow-inner text-left"
                        dir="ltr"
                    >
                        <p className="text-blue-400">
                            R1(config)# ip access-list extended cc
                        </p>
                        <p className="text-green-400 pl-4">
                            R1(config-ext-nacl)# permit ip 192.168.10.0 0.0.0.255 192.168.50.0
                            0.0.0.255
                        </p>
                        <p className="text-green-400 pl-4">
                            R1(config-ext-nacl)# permit ip 192.168.30.0 0.0.0.255 192.168.51.0
                            0.0.0.255
                        </p>
                        <p className="text-green-400 pl-4">
                            R1(config-ext-nacl)# permit ip 192.168.50.0 0.0.0.255 192.168.51.0
                            0.0.0.255
                        </p>
                        <p className="text-green-400 pl-4">
                            R1(config-ext-nacl)# permit tcp any host 192.168.41.2 eq www
                        </p>
                        <p className="text-green-400 pl-4">
                            R1(config-ext-nacl)# permit udp any host 192.168.40.2 eq domain
                        </p>
                    </div>
                </InfoCard>
                <InfoCard title="Security Policies & Deny Rules - R1">
                    <div
                        dir="rtl"
                        className="mb-4 text-gray-300 text-right"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <p>
                            <strong className="text-white">مبدأ العزل:</strong> منع الوصول
                            العشوائي لشبكات الإدارة والأقسام لضمان سرية البيانات.
                        </p>
                        <p className="mt-2 text-blue-400">بقية الأوامر على (R1):</p>
                    </div>
                    <div
                        className="bg-black/60 p-6 rounded-2xl font-mono text-sm space-y-2 border border-red-500/20 shadow-inner text-left"
                        dir="ltr"
                    >
                        <p className="text-green-400">
                            R1(config-ext-nacl)# permit ip 192.168.10.0 0.0.0.255 192.168.51.0
                            0.0.0.255
                        </p>
                        <p className="text-green-400">
                            R1(config-ext-nacl)# permit ip 192.168.10.0 0.0.0.255 192.168.60.0
                            0.0.0.255
                        </p>
                        <p className="text-red-500">
                            R1(config-ext-nacl)# deny ip any 192.168.50.0 0.0.0.255
                        </p>
                        <p className="text-red-500">
                            R1(config-ext-nacl)# deny ip any 192.168.51.0 0.0.0.255
                        </p>
                        <p className="text-red-500">
                            R1(config-ext-nacl)# deny ip any 192.168.40.0 0.0.0.255
                        </p>
                        <p className="text-red-500">
                            R1(config-ext-nacl)# deny ip any 192.168.41.0 0.0.0.255
                        </p>
                        <p className="text-blue-400">
                            R1(config-ext-nacl)# permit ip any any
                        </p>
                    </div>
                </InfoCard>
                <InfoCard title=" VLAN Isolation - R7">
                    <div
                        dir="rtl"
                        className="mb-4 text-gray-300 text-right"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <p>
                            <strong className="text-white">الهدف:</strong> عزل شبكة الضيوف
                            (VLAN 60) ومنعها من الوصول إلى الموارد الداخلية للشركة.
                        </p>
                        <p className="mt-2">
                            <strong className="text-white">السياسة الأمنية:</strong> السماح
                            فقط بتصفح الويب واستخدام الـ DNS للضيوف.
                        </p>
                    </div>
                    <div
                        className="bg-black/60 p-6 rounded-2xl font-mono text-sm space-y-2 border border-green-500/20 shadow-inner text-left"
                        dir="ltr"
                    >
                        <p className="text-blue-400">
                            R7(config)# ip access-list extended vlan60
                        </p>
                        <p className="text-green-400 pl-4">
                            R7(config-ext-nacl)# permit udp 192.168.60.0 0.0.0.255 host
                            192.168.40.2 eq domain
                        </p>
                        <p className="text-green-400 pl-4">
                            R7(config-ext-nacl)# permit tcp 192.168.60.0 0.0.0.255 host
                            192.168.41.2 eq www
                        </p>
                        <p className="text-red-500 pl-4">
                            R7(config-ext-nacl)# deny ip 192.168.60.0 0.0.0.255 any
                        </p>
                        <p className="text-blue-400 pl-4">
                            R7(config-ext-nacl)# permit ip any any
                        </p>
                    </div>
                </InfoCard>
                <InfoCard title=" IT Department Access Control - R7">
                    <div
                        dir="rtl"
                        className="mb-4 text-gray-300 text-right"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <p>
                            <strong className="text-white">الهدف:</strong> تنظيم صلاحيات قسم
                            الـ IT وضمان الربط الآمن بين الفروع التقنية.
                        </p>
                        <p className="mt-2">
                            <strong className="text-white">التطبيق:</strong> إدارة الوصول
                            لشبكة السيرفرات وشبكة الإدارة (VLAN 50).
                        </p>
                    </div>
                    <div
                        className="bg-black/60 p-6 rounded-2xl font-mono text-sm space-y-2 border border-yellow-500/20 shadow-inner text-left"
                        dir="ltr"
                    >
                        <p className="text-blue-400">
                            R7(config)# ip access-list extended IT-AC
                        </p>
                        <p className="text-green-400 pl-4">
                            R7(config-ext-nacl)# permit udp 192.168.51.0 0.0.0.255 host
                            192.168.40.2 eq domain
                        </p>
                        <p className="text-green-400 pl-4">
                            R7(config-ext-nacl)# permit tcp 192.168.51.0 0.0.0.255 host
                            192.168.41.2 eq www
                        </p>
                        <p className="text-green-400 pl-4">
                            R7(config-ext-nacl)# permit ip 192.168.11.0 0.0.0.255 192.168.10.0
                            0.0.0.255
                        </p>
                        <p className="text-green-400 pl-4">
                            R7(config-ext-nacl)# permit ip 192.168.51.0 0.0.0.255 192.168.50.0
                            0.0.0.255
                        </p>
                        <p className="text-red-500 pl-4">
                            R7(config-ext-nacl)# deny ip 192.168.11.0 0.0.0.255 any
                        </p>
                        <p className="text-red-500 pl-4">
                            R7(config-ext-nacl)# deny ip 192.168.51.0 0.0.0.255 any
                        </p>
                        <p className="text-blue-400 pl-4">
                            R7(config-ext-nacl)# permit ip any any
                        </p>
                    </div>
                </InfoCard>
            </div>
        </div>
    );
};

export default Firewall;
