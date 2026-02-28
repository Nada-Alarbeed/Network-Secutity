import VideoButton from "../components/VideoButton";
import InfoCard from "../components/InfoCard";
const Confidentiality = () => {
  return (
    <div className="bg-primary text-white min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div dir="rtl" className="text-center mb-16">
          <h1
            className="flex flex-wrap justify-center items-center gap-3 font-black leading-none"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <span className="text-h3 md:text-h2 text-blue">(السرية)</span>
            <span className="text-h4 md:text-h3 text-white">
              Confidentiality
            </span>
          </h1>
          <div className="pt-8" data-aos="zoom-in-up" data-aos-duration="1500">
            <VideoButton videoUrl="src/assets/Hakam.mp4" />
          </div>
        </div>
        <InfoCard title="أولاً: تعريف السرّية (Confidentiality)">
          <div
            dir="rtl"
            className="space-y-4 text-right leading-relaxed text-lg"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p>
              السرّية هي أحد عناصر نموذج{" "}
              <span className="text-blue font-bold">CIA Triad</span> في أمن
              المعلومات، والذي يتكون من:
            </p>
            <ul className="list-disc list-inside mr-4 space-y-1 text-gray-300">
              <li>Confidentiality (السرّية)</li>
              <li>Integrity (سلامة البيانات)</li>
              <li>Availability (الإتاحة)</li>
            </ul>
            <p className="pt-4 border-t border-white/10 text-white">
              <span className="text-blue font-bold">
                ويمكن تعريف السرّية بأنها:
              </span>
              <br />
              السرّية تعني حماية المعلومات من الوصول أو الاستخدام أو الإفصاح غير
              المصرح به، وضمان أن البيانات لا يطّلع عليها إلا الأشخاص المخولون
              بذلك.
            </p>
          </div>
        </InfoCard>
        <InfoCard title="ثانياً: Snooping (التجسس أو التنصت)">
          <div
            dir="rtl"
            className="space-y-4 text-right leading-relaxed"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-lg">
              هو عبارة عن محاولة التقاط معلومات حساسة من خلال مثلا رؤية الاوراق
              الموجودة اوراق حساسة موجودة على مكان العمل او المكتب او من خلال
              التنصت او النظر الى شاشة الحاسوب ومحاولة الحصول على اي معلومات
              يمكن الاستفادة منها.
            </p>
            <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
              <p className="text-blue font-bold mb-2">
                الحل لتفادي هذه المشكلة:
              </p>
              <p className="text-gray-300">
                الحفاظ على نظافة المكتب من اي اوراق بها معلومات حساسة واستخدام
                سياسة الشاشة المقفلة في حال مغادرة المكتب عدم وضع اي اوراق حساسة
                او ابقاء شاشة الحاسوب تعمل.
              </p>
            </div>
          </div>
        </InfoCard>
        <InfoCard title="ثالثاً: Dumpster Diving (البحث في القمامة)">
          <div
            dir="rtl"
            className="space-y-4 text-right leading-relaxed"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-lg text-white">
              هو البحث في النفايات لاستخراج معلومات حساسة.
            </p>
            <div className="mr-4 text-gray-300 space-y-2">
              <p className="text-blue font-bold">أمثلة على ذلك:</p>
              <ul className="list-disc list-inside">
                <li>أوراق مطبوعة تحتوي على بيانات عملاء.</li>
                <li>فواتير قديمة فيها معلومات شخصية.</li>
                <li>أجهزة إلكترونية تم التخلص منها بدون مسح البيانات.</li>
              </ul>
            </div>
            <p className="text-red-400 font-bold">لماذا هو خطير؟</p>
            <p className="text-gray-300">
              لأن كثيراً من المؤسسات تتخلص من المستندات دون تمزيقها أو إتلافها
              بطريقة آمنة.
            </p>
            <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
              <p className="text-blue font-bold mb-1">لحل هذه المشكلة:</p>
              <p className="text-gray-300">
                نستخدم آلة تمزيق الأوراق لتدمير الوثائق للتخلص منها بطريقة يصعب
                على المتطفلين في الحصول عليها.
              </p>
            </div>
          </div>
        </InfoCard>
        <InfoCard title="رابعاً: Social Engineering (الهندسة الاجتماعية)">
          <div
            dir="rtl"
            className="space-y-4 text-right leading-relaxed"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-lg">
              هي خداع الأشخاص للحصول على معلومات سرّية بدلاً من اختراق الأنظمة
              تقنياً.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue/5 p-4 rounded-xl">
                <p className="text-blue font-bold mb-2">أمثلة على ذلك:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• شخص ينتحل صفة موظف دعم فني ويطلب كلمة المرور.</li>
                  <li>• رسائل تصيّد (Phishing) تطلب تحديث بياناتك.</li>
                  <li>• مكالمات احتيالية تدّعي أنها من البنك.</li>
                </ul>
              </div>
              <div className="bg-blue/5 p-4 rounded-xl">
                <p className="text-blue font-bold mb-2">أنواع مشهورة:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Phishing</li>
                  <li>• Pretexting</li>
                  <li>• Baiting</li>
                </ul>
              </div>
            </div>
          </div>
        </InfoCard>

        <section className="bg-primaryCard p-8 rounded-3xl border border-blue/20 shadow-xl relative overflow-hidden">
          <div
            dir="rtl"
            className="space-y-6 text-right"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="text-red-400 font-bold text-2xl">لماذا هي خطيرة؟</h2>
            <p className="text-lg text-white">
              لأنها تستهدف العنصر البشري، وهو أضعف حلقة في أمن المعلومات.
            </p>

            <div className="pt-6 border-t border-white/10">
              <h2 className="text-blue font-bold text-2xl mb-4">
                لحل هذه المشكلة:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
                <li>تدريب الموظفين على التوعية الأمنية.</li>
                <li>التحقق من هوية المتصل قبل إعطائه المعلومات.</li>
                <li>استخدام المصادقة الثنائية.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Confidentiality;
