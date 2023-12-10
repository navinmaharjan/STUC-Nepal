import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import MemberForm from "./Pages/MemberForm/MemberForm";
import ImageGallery from "./Pages/Gallery/ImageGallery";
import VideoGallery from "./Pages/Gallery/VideoGallery";
import Introduction from "./Pages/AboutUs/Introduction";
import History from "./Pages/AboutUs/History";
import BoardDirectors from "./Pages/AboutUs/BoardDirectors";
import News from "./Pages/News/News";
import Issue from "./Pages/Issue/Issue";
import Publications from "./Pages/Publications/Publications";
import Download from "./Pages/Download/Download";
import Contact from "./Pages/ContactUs/Contact";

const App = () => {
  return (
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/history" element={<History />} />
      <Route path="/board-of-directors" element={<BoardDirectors />} />
      <Route path="/news-events" element={<News />} />
      <Route path="/issue-campaigns" element={<Issue />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/member-form" element={<MemberForm />} />
      <Route path="/image-gallery" element={<ImageGallery />} />
      <Route path="/video-gallery" element={<VideoGallery />} />
      <Route path="/download" element={<Download />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  )
}

export default App