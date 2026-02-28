import React from "react";
import { FaUsers, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import hero from "../assets/hhh.png";
import { MdFingerprint, MdOutlineVerifiedUser, MdUpdate } from "react-icons/md";
import { GiBrickWall } from "react-icons/gi";
import { HiOutlineLockClosed } from "react-icons/hi";
const Home = () => {
    const students = [
        { name: "قصي بدر", role: "Availability & Port Security" },
        { name: "ندى العربيد", role: "Integrity & SSH Specialist" },
        { name: "غزل العربيد", role: "Firewall & VLAN Administrator" },
        { name: "وائل الحلح", role: "Authentication & Secure Tunnel" },
        { name: "حكم النصار", role: "Confidentiality Architect" },
    ];
    const pillars = [
        {
            name: "Availability",
            icon: <MdUpdate />,
            path: "/availability",
            desc: "التوافرية (HSRP & Backups)",
        },
        {
            name: "Integrity",
            icon: <MdOutlineVerifiedUser />,
            path: "/integrity",
            desc: "سلامة البيانات (SSH & ACL)",
        },
        {
            name: "Firewall",
            icon: <GiBrickWall />,
            path: "/firewall",
            desc: "جدار الحماية (VLAN Isolation)",
        },
        {
            name: "Authentication",
            icon: <MdFingerprint />,
            path: "/authentication",
            desc: "المصادقة (Local Auth)",
        },
        {
            name: "Confidentiality",
            icon: <HiOutlineLockClosed />,
            path: "/confidentiality",
            desc: "سرية وتشفير البيانات",
        },
    ];

    return (
        <div className="bg-primary text-white min-h-screen">
            <section
                className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

                <div
                    className="relative z-10 text-center px-4 overflow-hidden"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                >
                    <h3 className="text-blue font-bold tracking-[0.2em] mb-2 text-sm md:text-lg uppercase">
                        Al-Madina Tech Services
                    </h3>

                    <h2 className="text-h6 md:text-h2 font-black mb-6 tracking-tight leading-tight text-white">
                        SECURE NETWORK <br className="sm:hidden" /> INFRASTRUCTURE
                    </h2>

                    <p
                        dir="rtl"
                        className="text-gray-200 text-h7 md:text-h6 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        مشروع تأمين البنية التحتية المتكامل لـ
                        <span className="text-blue px-2 font-bold text-shadow">
                            شركة المدينة للخدمات التقنية
                        </span>
                        تطبيق معايير{" "}
                        <span dir="ltr" className="text-blue font-bold">
                            CIA Triad
                        </span>
                    </p>

                    <div className="mt-10 animate-bounce">
                        <FaArrowDown className="text-blue text-2xl mx-auto" />
                    </div>
                </div>
            </section>
            <section className="py-20 bg-primaryCard border-b border-white/5">
                <div className="center-container px-6">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <FaUsers className="text-blue text-5xl mb-4" />
                        <h3 className="text-4xl font-bold">فريق المشروع</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {students.map((s, i) => (
                            <div
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                className="p-8 bg-primary border border-white/5 rounded-2xl hover:border-blue/50 transition-all duration-500 shadow-xl flex flex-col items-center text-center group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-blue/5 rounded-bl-full transition-all group-hover:bg-blue/10"></div>
                                <div className="w-14 h-14 text-blue rounded-full mb-6 flex items-center justify-center font-bold text-xl bg-primaryCard border border-white/10 group-hover:bg-blue group-hover:text-white transition-all transform group-hover:scale-110">
                                    {i + 1}
                                </div>
                                <h4 className="font-bold text-xl mb-2 group-hover:text-blue transition-colors">
                                    {s.name}
                                </h4>
                                <p className="text-gray-400 text-sm italic">{s.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 bg-primary relative">
                <div className="center-container px-6">
                    <h3 className="text-2xl font-bold text-center mb-20 uppercase tracking-[0.4em] ">
                        الركائز التقنية للبحث
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {pillars.map((item, idx) => (
                            <Link
                                data-aos="zoom-in"
                                data-aos-delay={idx * 150}
                                to={item.path}
                                key={idx}
                                className="flex flex-col items-center group text-center bg-white/5 p-6 rounded-3xl border border-transparent hover:border-blue/20 hover:bg-white/[0.07] transition-all"
                            >
                                <div className="w-20 h-20 mb-6 relative">
                                    <div className="absolute inset-0 bg-blue/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10 w-full h-full flex items-center justify-center text-blue text-5xl group-hover:scale-125 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                </div>
                                <h4 className="text-white font-black group-hover:text-blue transition-colors text-sm md:text-base uppercase tracking-wider">
                                    {item.name}
                                </h4>
                                <p className="text-gray-400 text-[11px] mt-3 leading-tight font-medium">
                                    {item.desc}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
