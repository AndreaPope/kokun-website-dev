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
import ScrollToTop from "./components/ScrollToTop";
import { testConnection } from "./lib/supabase";
import AllBlogs from "../src/pages/blogs/allBlogs";

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
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/team" element={<TeamPage/>} />
      </Routes>
    </>
  );
}

export default App;
