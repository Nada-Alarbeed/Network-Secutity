import { Routes, Route, useLocation } from "react-router-dom"; // أضفنا useLocation
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Integrity from "./pages/Integrity";
import Availability from "./pages/Availability";
import Authentication from "./pages/Authentication";
import Firewall from "./pages/Firewall.JSX";
import Confidentiality from "./pages/Confidentiality";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import VideoButton from "./components/VideoButton";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/integrity" element={<Integrity />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/firewall" element={<Firewall />} />
        <Route path="/confidentiality" element={<Confidentiality />} />
        <Route path="/video" element={<VideoButton />} />
      </Routes>
    </Layout>
  );
};

export default App;
