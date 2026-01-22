import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageContentWrapper from "../components/PageContentWrapper";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function BlogPage() {
  const blogs = [
    {
      title: "Connection, Reimagined",
      image: "/images/Gemini_Metallic_Bursts.png",
      link: "/blogs/jan-26",
    },
    {
    title: "The Invisible Effort of Showing Up",
    image:
      "/images/Gemini_Metallic_Bursts.png",
    link: "/blogs/dec-25",
    },
    {
      title: "Rethinking Migraine at Work: From Stigma to Support",
      image:
        "/images/migraineatwork.png",
      link: "/blogs/nov-25",
    },
    {
    title: "5 Tips to Help You Navigate Thanksgiving",
    image:
      "/images/thanksgiving.png",
    link: "/blogs/nov-23",
    },

  ];

  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dknulbme8/image/upload/t_Grayscale/qcxon3z2kqbpeego4cap")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="fixed inset-0 z-10 bg-black/25" />

      <div className="relative z-20">
        <Navigation />

        <main className="min-h-screen px-4 pb-24 pt-40 md:pt-48">
           <PageContentWrapper className="mb-48 md:mb-64">
             <div className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-center leading-tight mb-0 sm:mb-0">
               <div>
                 BLOG
               </div>
             </div>
             
             <div className="text-3xl sm:text-4xl md:text-6xl text-center font-bold">
               <p className="flex items-center justify-center">
                 <span>Seeing<span className="text-primary"> the Invisible </span></span>
               </p>
             </div>
           </PageContentWrapper>
 
 
          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">


            {/* <div className="space-y-6 text-lg md:text-xl mb-10">
              <p>
                Born from our lived experiences, Kōkūn exists to hold space for
                yours. By connecting personal insights and science, we're
                transforming how invisible health conditions are seen, understood,
                and healed.
              </p>

              <p>
                The Kōkūn Effect brings our mission to life each month with trusted
                research, practical tools, and community stories to help you navigate
                invisible conditions with clarity and confidence.
              </p>
            </div> */}


            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white font-display text-left">
              Latest Posts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-4 rounded-lg hover:scale-105 transform transition-transform duration-200"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>

                    <Link
                      to={blog.link}
                      className="text-link hover:text-hover font-medium"
                    >
                      Read the full blog post
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="flex justify-end mt-6">
              <Link
                to="/all-blogs"
                className="text-link hover:text-hover font-medium flex items-center gap-2"
              >
                View all blogs
                <span className="text-2xl leading-none">→</span>
              </Link>
            </div> */}
          </PageContentWrapper>

          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg py-20 mt-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">We are Kōkūn</h2>
              <p className="text-lg md:text-xl mb-12">
                We're transforming how invisible health conditions are seen, understood, and healed.<br className="hidden md:block" />
                <span>Be among the first to join our movement.</span>
              </p>
                                  
               <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-8 md:space-y-0">
                <div className="flex flex-col items-center">
                  <Button to="/early-access" className="mb-3">EARLY ACCESS</Button>
                  <p className="text-sm max-w-[200px]">Join Kōkūn and experience what's next for migraine care</p>
                </div>
                                    
                <div className="flex flex-col items-center">
                  <Button to="/pledge" className="mb-3">DONATE</Button>
                  <p className="text-sm max-w-[200px]">Make a gift to ignite change for the unseen millions</p>
                </div>
                                    
                <div className="flex flex-col items-center">
                  <Button to="/newsletter" className="mb-3">NEWSLETTER</Button>
                  <p className="text-sm max-w-[210px]">Follow what we're uncovering, from research to real life</p>
                </div>
              </div>
            </div>
          </PageContentWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
