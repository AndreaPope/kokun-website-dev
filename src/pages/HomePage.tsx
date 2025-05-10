import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function HomePage() {
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
        <Navigation />

        <main className="flex flex-col items-center justify-center min-h-screen px-4 pb-24 pt-32">
          <div className="text-6xl md:text-8xl font-bold text-center leading-none mb-12">
            <div style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>
              MAKING THE INVISIBLE VISIBLE
            </div>
          </div>
          
          <div className="text-2xl md:text-3xl text-center font-bold mb-12" style={{ textShadow: '1px 1px 1px rgba(155, 155, 155, 0.4)' }}>
            <p>Together we can transform how invisible health conditions<br />are seen, understood, and healed</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-24">
            <button 
              onClick={() => navigate('/early-access')}
              className="bg-terracotta text-white w-48 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors"
            >
              GET EARLY ACCESS
            </button>
            <button 
              onClick={() => navigate('/newsletter')}
              className="bg-terracotta text-white w-48 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors"
            >
              GET OUR NEWSLETTER
            </button>
          </div>

          <section className="w-full bg-black/60 backdrop-blur-sm py-20">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-terracotta">We see what is unseen</h2>
              
              <div className="space-y-8 text-xl">
                <p>
                  When doctors dismiss your symptoms, when loved ones don't understand your struggles, when you begin to question your own experience – that's the reality of living with an invisible condition.
                </p>

                <p>
                  Invisible conditions have been overlooked by medical research for generations, leaving profound gaps in our understanding. From migraine and anxiety to endometriosis and autoimmune disorders, invisible conditions take many forms. Without foundational research, healthcare professionals don't have the tools to effectively diagnose or treat these conditions. That leaves too many of us on our own.
                </p>

                <blockquote className="my-24 mx-12 md:mx-24 text-center">
                  <p className="text-terracotta font-merriweather italic text-lg md:text-xl">
                    "Sometimes it feels like people don't understand what I'm going through because they can't see it. It's invisible, but it's so real."
                  </p>
                </blockquote>

                <p>
                  At Kōkūn, we see you. Starting with <Link to="/migraine" className="text-terracotta hover:text-terracotta-light">migraine</Link> – one of the most common yet misunderstood invisible conditions – we're shining a light on what has been in the shadows for too long.
                </p>

                <p>
                  Join us on this journey to make the invisible visible.
                </p>

                <div className="text-center pt-8">
                  <button 
                    onClick={() => navigate('/early-access')}
                    className="bg-terracotta text-white w-48 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors"
                  >
                    START YOUR JOURNEY
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-black/60 backdrop-blur-sm py-20 mt-12">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-terracotta">We transform lived experiences into breakthroughs</h2>
              
              <div className="space-y-8 text-xl">
                <p>
                  Your story matters. Your condition deserves respect and your future deserves real answers. We're here to truly see you, understand you, and help you reclaim your healing journey.
                </p>

                <blockquote className="my-24 mx-12 md:mx-24 text-center">
                  <p className="text-terracotta font-merriweather italic text-lg md:text-xl">
                    "I hope for a world where managing my condition isn't so hard—where solutions are accessible, and people understand the impact they have on our lives."
                  </p>
                </blockquote>

                <h3 className="text-2xl font-bold mb-4">Personalized Support</h3>
                <p>
                  Each of us is on a complex, deeply personal journey that defies standard narratives and one-size-fits-all solutions.
                </p>
                <p>
                  At Kokun, we're building a digital sanctuary that empowers you to take control of your health. Through personalized tools, trusted resources, and a community that truly sees you, we help you make sense of your experience and uncover what works for you.
                </p>

                <h3 className="text-2xl font-bold mb-4">Breakthrough Insights</h3>
                <p>
                  Healing often begins alone—but becomes powerful in the collective. Your personal experience, combined with thousands of others, can reveal patterns that were once invisible and fuel discoveries that are long overdue.
                </p>
                <p>
                  As these insights come to light, we'll partner with leading research institutions and healthcare innovators to turn them into meaningful advances in care. We're building the connective tissue – across patients, researchers and providers – to power this transformation.
                </p>

                <div className="text-center pt-8">
                  <button 
                    onClick={() => navigate('/early-access')}
                    className="bg-terracotta text-white w-48 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors"
                  >
                    GET EARLY ACCESS
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 flex justify-center w-full">
            <div className="w-[1050px] bg-black/60 backdrop-blur-sm p-12 rounded-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">We are Kōkūn</h2>
                <p className="text-xl mb-12">
                  We're transforming how invisible health conditions are seen, understood, and healed.<br className="hidden md:block" />
                  <span className="text-terracotta">Be among the first to join our movement.</span>
                </p>
                
                <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-8 md:space-y-0">
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => navigate('/early-access')}
                      className="bg-terracotta text-white w-48 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors mb-3"
                    >
                      EARLY ACCESS
                    </button>
                    <p className="text-sm max-w-[200px]">Join our migraine community and shape the Kōkūn Collective</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => navigate('/pledge')}
                      className="bg-terracotta text-white w-48 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors mb-3"
                    >
                      PLEDGE
                    </button>
                    <p className="text-sm max-w-[200px]">Make a gift to ignite change for the unseen millions</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => navigate('/newsletter')}
                      className="bg-terracotta text-white w-48 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors mb-3"
                    >
                      NEWSLETTER
                    </button>
                    <p className="text-sm max-w-[200px]">Discover what's new in the world of Invisible Conditions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;