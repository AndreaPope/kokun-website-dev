import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageContentWrapper from "../../components/PageContentWrapper";
import { Link } from "react-router-dom";

function allBlogs() {
  const blogs = [
    {
      title: "Rethinking Migraine at Work: From Stigma to Support",
      image:
        "https://res.cloudinary.com/dknulbme8/image/upload/v1710844861/qcxon3z2kqbpeego4cap.jpg",
      link: "/blogs/nov-25",
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
          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white font-display text-center">
              All Blogs
            </h1>

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
                      className="text-link hover:text-hover underline font-medium"
                    >
                      Read the full blog post
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </PageContentWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default allBlogs;
