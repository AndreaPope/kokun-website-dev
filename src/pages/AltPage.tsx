import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram } from 'lucide-react';

function AltPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen font-sans text-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dknulbme8/image/upload/t_Grayscale/qcxon3z2kqbpeego4cap")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-xl font-bold hover:text-gray-300 transition-colors">Home</Link>
              <Link to="/migraine" className="hover:text-gray-300 transition-colors">Migraine</Link>
              <Link to="/alt" className="hover:text-gray-300 transition-colors">Alt</Link>
              <Link to="/home-alt" className="hover:text-gray-300 transition-colors">Home Alt</Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold absolute left-1/2 -translate-x-1/2 text-terracotta">
              Kōkūn
            </h1>
            <div className="flex items-center space-x-8">
              <Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
              <Link to="/early-access" className="hover:text-gray-300 transition-colors">Join Us</Link>
            </div>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center min-h-screen px-4 pb-24 pt-32">
          <div className="text-6xl md:text-8xl font-bold text-center leading-none mb-36">
            <div className="mb-6" style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>MAKING</div>
            <div className="mb-6 flex flex-col md:flex-row justify-center items-center md:space-x-6" style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>
              <span>INVISIBLE</span>
              <span>CONDITIONS</span>
            </div>
            <div style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>VISIBLE</div>
          </div>
          
          <div className="text-3xl text-center font-bold text-terracotta" style={{ textShadow: '1px 1px 1px rgba(155, 155, 155, 0.4)' }}>
            <p className="flex items-center justify-center space-x-8">
              <span>Your story matters.</span>
              <span>Your participation heals.</span>
              <span>Your data transforms.</span>
            </p>
          </div>
        </main>

        <section className="py-20 flex justify-center">
          <div className="max-w-[800px] mx-auto bg-black/50 backdrop-blur-sm rounded-lg p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR FOCUS</h2>
            <h3 className="text-2xl md:text-3xl mb-6 text-terracotta font-bold">The Unseen Reality</h3>
            <div className="space-y-6 text-xl">
              <p>When doctors dismiss your symptoms, when loved ones don't understand your struggles, when you begin to question your own experience – that's the reality of living with an invisible condition.</p>
              <p>At Kōkūn, we see you. We know that what you're experiencing is real, even when others can't see it.</p>
              <p>Invisible conditions have been overlooked by medical research for generations, creating profound gaps in understanding. In the absence of foundational research, healthcare providers lack the tools to correctly diagnose or effectively treat what you're experiencing. We are in a medical blind spot, without clear answers or paths to relief.​</p>
              <p>From migraine and anxiety to endometriosis and autoimmune disorders, invisible conditions take many forms. They affect tens of millions of Americans yet remain largely unseen by medicine.​</p>
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="max-w-[800px] mx-auto bg-black/50 backdrop-blur-sm rounded-lg p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">WHAT WE DO</h2>
            <h3 className="text-2xl md:text-3xl mb-6 text-terracotta font-bold">Make the Invisible Visible</h3>
            <div className="space-y-6 text-xl">
              <p>Your experience deserves validation, your condition deserves recognition, and your future deserves better solutions.​</p>
              <p>That's why at Kōkūn, we're creating a world where invisible conditions are truly seen, understood, and healed. A world where your experiences aren't dismissed, where your pain isn't minimized, and where you have the power to reclaim your health on your terms.​</p>
              <p>Starting with migraine – one of the most common yet misunderstood invisible conditions – we're shining a light on what has remained in the shadows for too long. Your experiences hold answers that could transform care for you and millions like you.​</p>
              <p>Join us on this journey to make the invisible visible.</p>
              <button 
                onClick={() => navigate('/early-access')}
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
              >
                START YOUR JOURNEY
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="max-w-[800px] mx-auto bg-black/50 backdrop-blur-sm rounded-lg p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">HOW WE DO IT</h2>
            <h3 className="text-2xl md:text-3xl mb-6 text-terracotta font-bold">By Focusing on the Unique You</h3>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-xl font-bold mb-4">PERSONALIZED SUPPORT</h4>
                <div className="space-y-4 text-xl">
                  <p>We ensure your condition is seen and understood in all its unique ways so you can reclaim control.</p>
                  <p>We all experience our invisible conditions differently. They are often complex, deeply personal journeys that defy standard narratives and one-size-fits-all solutions. Being truly seen - with all the nuance, complexity, and individuality - is the first step to finding the right solutions. ​</p>
                  <p>We are building a supportive digital sanctuary that will empower you to take control of your health while connecting you to a community that truly sees you. We'll help you navigate your condition with personalized tools, meaningful connections, and access to resources that evolve as you do.​ </p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">BREAKTHROUGH INSIGHTS</h4>
                <div className="space-y-4 text-xl">
                  <p>We uncover what medicine has missed about invisible conditions and deliver insights that work uniquely for you.​</p>
                  <p>Our lived experiences hold valuable clues about our invisible condition. These individual insights, when combined with thousands of others, can unlock breakthroughs that transform how we understand and treat these conditions.</p>
                  <p>We are laying the foundation for a collaborative ecosystem that will allow actions taken by each individual to drive transformation for all. We'll help you make sense of your own health patterns and also partner with scientists to translate our collective experiences into groundbreaking discoveries.​</p>
                </div>
              </div>
            </div>
            
            <blockquote className="max-w-2xl mx-auto text-center relative px-12">
              <div className="quote-mark relative font-bold text-lg leading-relaxed tracking-wide font-serif">
                <span className="text-terracotta">I hope for a world where managing my condition isn't so hard—where solutions are accessible, and people understand the impact they have on our lives.</span>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="max-w-[800px] mx-auto bg-black/50 backdrop-blur-sm rounded-lg p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">We are Kōkūn</h2>
              <p className="text-xl mb-12">We're transforming how invisible health conditions are seen, understood, and healed. Be among the first to join our movement.</p>
              
              <div className="flex justify-center space-x-16">
                <div className="flex flex-col items-center">
                  <button 
                    onClick={() => navigate('/early-access')}
                    className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors mb-3"
                  >
                    EARLY ACCESS
                  </button>
                  <p className="text-sm max-w-[200px]">Join our migraine community and shape the Kōkūn Collective</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <button 
                    onClick={() => navigate('/pledge')}
                    className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors mb-3"
                  >
                    PLEDGE
                  </button>
                  <p className="text-sm max-w-[200px]">Make a gift to ignite change for the unseen millions</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <button 
                    onClick={() => navigate('/newsletter')}
                    className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors mb-3"
                  >
                    NEWSLETTER
                  </button>
                  <p className="text-sm max-w-[200px]">Discover what's new in the world of Invisible Conditions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-black/30 backdrop-blur-sm py-6 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">Kōkūn © 2025</div>
            <div className="flex gap-6">
              <a href="mailto:contact@kokun.com" className="hover:text-gray-300">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/company/kokun" className="hover:text-gray-300">
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com/kokun" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default AltPage;