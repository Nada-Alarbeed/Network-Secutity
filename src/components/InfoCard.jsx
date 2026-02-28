const InfoCard = ({ title, children }) => {
  return (
    <section dir="rtl" className="bg-primaryCard p-8 rounded-3xl border border-white/5 shadow-xl text-right" data-aos="fade-right" data-aos-duration="1000">
      <h2 className="text-blue font-bold text-2xl mb-6 border-b border-white/10 pb-4 italic">
        {title}
      </h2>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
};
export default InfoCard