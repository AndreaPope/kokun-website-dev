import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram } from 'lucide-react';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen font-sans text-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dknulbme8/image/upload/t_Grayscale/colored-treescape_wcvfjs")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background" />
      </div>

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-primary font-bold hover:text-hover transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Home</Link>
              <Link to="/migraine" className="text-primary font-bold hover:text-secondary transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Migraine</Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold absolute left-1/2 -translate-x-1/2">
              Kōkūn
            </h1>
            <div className="flex items-center space-x-8">
              <Link to="/about" className="text-primary font-bold hover:text-secondary transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">About Us</Link>
              <Link to="/early-access" className="text-primary font-bold hover:text-secondary transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Join Us</Link>
            </div>
          </nav>
        </header>

        <div className="pt-16">
          <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
            <div className="max-w-4xl w-full bg-background p-8 rounded-lg backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Us</h1>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-xl">
                    We envision a world where invisible conditions are truly seen, understood, and healed
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-xl">
                    Our mission is to help people with invisible conditions thrive by finding and delivering breakthrough insights at scale
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                  <div className="space-y-4">
                    <p><strong>Powered by Purpose</strong> - We place our mission at the heart of every decision</p>
                    <p><strong>Committed to the Collective</strong> - We seek out every perspective to uncover deeper truths</p>
                    <p><strong>Inspired by Hope</strong> - We believe in the power of hope as a catalyst for change</p>
                    <p><strong>Unwavering in Integrity</strong> - We pursue truth with humility and share it with courage</p>
                    <p><strong>Guided by Interconnections</strong> - We see and honor the connections in all things</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen flex flex-col justify-center px-4 py-20 bg-background">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Who We Are</h2>
              <p className="text-xl mb-12">
                We are a passionate founding team with extensive experience, backed by industry leaders in various capacities
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12">
                <div className="bg-background p-4 sm:p-6 md:p-8 rounded-lg backdrop-blur-sm">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">SANGITA JAYARAMAN</h3>
                  <p className="text-base sm:text-lg md:text-xl mb-4">Chief Executive Officer</p>
                  <p className="mb-6 text-sm sm:text-base">
                    Seasoned technology leader and intrapreneur with 20+ years of global experience in business management, product and marketing
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/sangitajayaraman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-hover transition-colors"
                  >
                    <Linkedin size={24} />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>

                <div className="bg-background p-4 sm:p-6 md:p-8 rounded-lg backdrop-blur-sm">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">ANDREA POPE</h3>
                  <p className="text-base sm:text-lg md:text-xl mb-4">Chief Technical Officer</p>
                  <p className="mb-6 text-sm sm:text-base">
                    Accomplished start-up leader with 20+ years of experience across industries with a focus on innovation, data science and product
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/andreapope/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                  >
                    <Linkedin size={24} />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <div className="mt-6 space-y-4">
                    <p className="text-sm sm:text-base">
                      I come from a family where invisible conditions like migraines have deeply affected our lives. Witnessing the struggle to secure the right care in a siloed and complicated system ignited my determination to change that narrative. My personal and professional background has uniquely set the stage for this mission—I have seen both how systems can fall short for those truly in need and how technology can positively transform outcomes. This insight, coupled with my family's journey, fuels my passion to empower everyday users with the knowledge they need to secure the best care possible.
                    </p>
                    <p className="text-sm sm:text-base">
                      This personal journey inspired the creation of Kōkūn. Our mission—to make invisible conditions visible—stems from a deep-rooted desire to transform challenges into opportunities for healing and understanding. By putting patients first and leveraging breakthrough insights, we aim to unlock a more compassionate, informed, and hopeful healthcare system. Every decision I make is driven by the commitment to convert lived experiences into actionable insights that empower you to receive the care you deserve. Together, we can create a future where invisible conditions are seen, understood, and healed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-background backdrop-blur-sm py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm mb-4 md:mb-0">Kōkūn © 2025</div>
              <div className="flex gap-6">
                <a href="mailto:contact@kokun.com" className="hover:text-hover">
                  <Mail size={24} />
                </a>
                <a href="https://linkedin.com/company/kokun" className="hover:text-hover">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com/kokun" className="hover:text-hover">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
