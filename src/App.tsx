import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EarlyAccessPage from "./pages/EarlyAccessPage";
import PledgePage from "./pages/PledgePage";
import NewsletterPage from "./pages/NewsletterPage";
import MigrainePage from "./pages/MigrainePage";
import Alt_MigrainePage from "./pages/Alt_MigrainePage";
import InnerCirclePage from "./pages/InnerCirclePage";
import TeamPage from "./pages/Team";
import PrivacyPage from "./pages/PrivacyPage";
import CookieNoticePage from "./pages/CookieNoticePage";
import BlogPage from "./pages/BlogPage";
import Dec25Blog from "./pages/blogs/Dec25Blog";
import Nov25Blog from "./pages/blogs/Nov25Blog";
import Nov23Blog from "./pages/blogs/Nov23Blog";
import Jan26Blog from "./pages/blogs/Jan26Blog";
import Mar26Blog from "./pages/blogs/Mar26Blog";
import Apr26Blog from "./pages/blogs/Apr26Blog";
import May26Blog from "./pages/blogs/May26Blog";
import Jun26Blog from "./pages/blogs/Jun26Blog";
import Jul26Blog from "./pages/blogs/Jul26Blog";
import ScrollToTop from "./components/ScrollToTop";
import { testConnection } from "./lib/supabase";
import AllBlogs from "../src/pages/blogs/allBlogs";
import JoinUs from "./pages/JoinUs";

function App() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkConnection() {
      const connected = await testConnection();
      setIsConnected(connected);
      console.log(
        "Supabase connection status:",
        connected ? "Connected" : "Not connected"
      );
    }
    checkConnection();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/early-access" element={<EarlyAccessPage />} />
        <Route path="/pledge" element={<PledgePage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/migraine" element={<MigrainePage />} />
        <Route path="/alt_migraine" element={<Alt_MigrainePage />} />
        <Route path="/inner-circle" element={<InnerCirclePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/cookie-notice" element={<CookieNoticePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogs/nov-25" element={<Nov25Blog />} />
        <Route path="/blogs/dec-25" element={<Dec25Blog />} />
        <Route path="/blogs/nov-23" element={<Nov23Blog />} />
        <Route path="/blogs/jan-26" element={<Jan26Blog />} />
        <Route path="/blogs/mar-26" element={<Mar26Blog />} />
        <Route path="/blogs/apr-26" element={<Apr26Blog />} />
        <Route path="/blogs/may-26" element={<May26Blog />} />
        <Route path="/blogs/jun-26" element={<Jun26Blog />} />
        <Route path="/blogs/jul-26" element={<Jul26Blog />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/team" element={<TeamPage/>} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>
    </>
  );
}

export default App;
