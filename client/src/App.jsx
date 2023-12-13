import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import MemberForm from "./Pages/MemberForm/MemberForm";
import ImageGallery from "./Pages/Gallery/ImageGallery";
import VideoGallery from "./Pages/Gallery/VideoGallery";
import History from "./Pages/AboutUs/History";
import BoardDirectors from "./Pages/AboutUs/BoardDirectors";
import News from "./Pages/News/News";
import Issue from "./Pages/Issue/Issue";
import Publications from "./Pages/Publications/Publications";
import Download from "./Pages/Download/Download";
import Contact from "./Pages/ContactUs/Contact";
import Associate from "./Pages/AboutUs/Associate";
import ImageDetail from "./Pages/Gallery/ImageDetail";
import VideoDetail from "./Pages/Gallery/VideoDetail";
import Bidhan from "./Pages/AboutUs/Bidhan";
import ChairmanMessage from "./Pages/AboutUs/ChairmanMessage";
import SecretaryMessage from "./Pages/AboutUs/SecretaryMessage";
import NewsDetail from "./Pages/News/NewsDetail";

const App = () => {
  return (
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/associate-organization" element={<Associate />} />
      <Route path="/history" element={<History />} />
      <Route path="/board-of-directors" element={<BoardDirectors />} />
      <Route path="/news-events" element={<News />} />
      <Route path="/issue-campaigns" element={<Issue />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/member-form" element={<MemberForm />} />
      <Route path="/image-gallery" element={<ImageGallery />} />
      <Route path='/image-detail/:id' element={<ImageDetail />} />
      <Route path="/video-gallery" element={<VideoGallery />} />
      <Route path="/video-detail/:id" element={<VideoDetail />} />
      <Route path="/download" element={<Download />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/bidhan" element={<Bidhan />} />
      <Route path="/message-from-chairman" element={<ChairmanMessage />} />
      <Route path="/message-from-secretary" element={<SecretaryMessage />} />
      <Route path="/news-detail/:id" element={<NewsDetail />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  )
}

export default App