import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lightbulb, HeartHandshake } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PageContentWrapper from '../components/PageContentWrapper';

function HomePage() {
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
      
      {/* Black overlay layer */}
      <div className="fixed inset-0 z-10 bg-black/25" />

      <div className="relative z-20">
        <Navigation />

        <main className="min-h-screen px-4 pb-24 pt-40 md:pt-48">
          <PageContentWrapper className="w-full">
            <div className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-center leading-tight mb-8 md:mb-16">
              <div>
                MAKING<br />
                THE INVISIBLE<br />
                VISIBLE
              </div>
            </div>
            
            <div className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-12 md:mb-16">
              <p>Together we can transform how invisible health conditions<br className="hidden md:block" />are seen, understood, and healed</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center mb-48 md:mb-64 items-center">
              <Button to="/early-access">GET EARLY ACCESS</Button>
              <Button to="/newsletter">GET OUR NEWSLETTER</Button>
            </div>
          </PageContentWrapper>

          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg mt-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white font-display">OUR FOCUS</h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-primary">We see what is unseen</h2>
            
            <div className="space-y-8 text-lg md:text-xl">
              <p>
                When doctors dismiss your symptoms, when loved ones don't understand your struggles, when you begin to question your own experience—that's the reality of living with an invisible condition.
              </p>

              <p>
                Invisible conditions have been overlooked by medical research for generations, leaving profound gaps in our understanding. From migraine and anxiety to endometriosis and autoimmune disorders, invisible conditions take many forms. Without foundational research, healthcare professionals don't have the tools to effectively diagnose or treat these conditions. That leaves too many of us on our own.
              </p>

              <blockquote className="my-16 md:my-24 mx-6 md:mx-48">
                <p className="text-primary font-merriweather text-base md:text-lg lg:text-xl" data-attribution="KŌKŪN RESEARCH PARTICIPANT">
                  "Sometimes it feels like people don't understand what I'm going through because they can't see it. It's invisible, but it's so real."
                </p>
              </blockquote>

              <p>
                At Kōkūn, we see you. Starting with <Link to="/migraine" className="text-primary hover:text-hover">migraine</Link>—one of the most common yet misunderstood invisible conditions—we're shining a light on what has been in the shadows for too long. Join us on this journey to make the invisible visible.
              </p>

              <div className="text-center pt-8">
                <Button to="/early-access">START YOUR JOURNEY</Button>
              </div>
            </div>
          </PageContentWrapper>

          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg mt-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white font-display">WHAT WE DO</h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-primary">We transform lived experiences into breakthroughs</h2>
            
            <div className="space-y-8 text-lg md:text-xl">
              <p>
                Your story matters. Your condition deserves respect and your future deserves real answers. We're here to truly see you, understand you, and help you reclaim your healing journey.
              </p>

              <blockquote className="my-16 md:my-24 mx-6 md:mx-44 mb-2">
                <p className="text-primary font-merriweather text-base md:text-lg lg:text-xl" data-attribution="KŌKŪN RESEARCH PARTICIPANT">
                  "I hope for a world where managing my condition isn't so hard. Where information is easily accessible, solutions abound, and people understand the impact they have on our lives."
                </p>
              </blockquote>

              <p>
                To make that vision real, we're focused on two things
              </p>

              <div>
                <h3 className="text-xl md:text-xl font-bold mb-2 flex items-center gap-2">
                  <HeartHandshake className="w-6 h-6 text-primary flex-shrink-0" />
                  Personalized Support
                </h3>
                <p className="mb-6">
                  Each of us is on a complex, deeply personal journey that defies standard narratives and one-size-fits-all solutions. At Kōkūn, we're building a digital sanctuary that empowers you to take control of your health. Through personalized tools, trusted resources, and a community that truly sees you, we help you make sense of your experience and uncover what works for you.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-xl font-bold mb-2 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                  Breakthrough Insights
                </h3>
                <p className="mb-6">
                  Healing often begins alone—but becomes powerful in the collective. Your personal experience, combined with thousands of others, can reveal patterns that were once invisible and fuel discoveries that are long overdue.
                
                  As these insights come to light, we'll partner with leading research institutions and healthcare innovators to turn them into meaningful advances in care.
                </p>
             </div>

              <div className="text-center pt-8">
                <Button to="/early-access">SIGN UP NOW</Button>
              </div>
            </div>
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
                  <Button to="/pledge" className="mb-3">PLEDGE</Button>
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

export default HomePage;