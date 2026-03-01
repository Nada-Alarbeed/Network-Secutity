import { FaPlayCircle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

const VideoButton = ({ videoUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isVideoPage = location.pathname === "/video";

  const getEmbedLink = (url) => {
    if (!url) return "";
    const videoId = url.split("/d/")[1]?.split("/")[0];
    return `https://drive.google.com/file/d/${videoId}/preview`;
  };

  if (isVideoPage) {
    const rawVideo = location.state?.videoUrl;
    const embedUrl = getEmbedLink(rawVideo);

    return (
      <div className="bg-primary text-white min-h-screen pt-20 px-4">
        <div className="max-w-5xl mx-auto mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-blue hover:bg-blue-600 px-6 py-3 rounded-full font-bold shadow-lg"
          >
            <FaArrowLeftLong />
            الرجوع للصفحة السابقة
          </button>
        </div>

        <div className="max-w-5xl mx-auto h-[60vh] md:h-[75vh]">
          <iframe
            src={embedUrl}
            className="w-full h-full rounded-2xl shadow-2xl bg-black border border-white/10"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => navigate("/video", { state: { videoUrl } })}
      className="flex items-center gap-3 bg-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg mx-auto"
    >
      <FaPlayCircle size={24} />
      <span>مشاهدة شرح فيديو للقسم</span>
    </button>
  );
};

export default VideoButton;
