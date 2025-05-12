import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function MigrainePage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen font-sans text-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dknulbme8/image/upload/v1743104321/hezg7mcejnues0txjldc.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10">
        <Navigation />

        <main className="flex flex-col items-center justify-center min-h-screen px-4 pb-24 pt-48">
          <div className="text-6xl md:text-9xl font-bold text-center leading-none mb-12 font-league-spartan">
            <div style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>MIGRAINE</div>
          </div>
          
          <div className="text-4xl md:text-5xl text-center font-bold mb-48 font-league-spartan" style={{ textShadow: '1px 1px 1px rgba(155, 155, 155, 0.4)' }}>
            <p className="flex items-center justify-center">
              <span>The <span className="text-terracotta">Invisible</span> Epidemic</span>
            </p>
          </div>
              
          <div className="flex justify-center w-full mt-24">
            <div className="w-[1050px] bg-black/60 backdrop-blur-sm p-12 rounded-lg">
              <div className="space-y-8 text-xl">
                <div className="space-y-6">
                  <p>
                    <span className="font-bold">Migraine isn't just a headache.</span> It's crushing pain. Lost days. Constant recalibrations: <span className="italic">Should I commit? Can I push through? What if I can't? Will anyone understand?</span>
                  </p>
                  
                  <p>
                    Migraine affects over 40 million people in the U.S. and is the <span className="font-bold">top cause of disability for people under 50</span>. Yet despite its massive impact, migraine often remains invisible—to medicine, to society, even to the people around you.
                  </p>
                  
                  <p>
                    <span className="font-bold">Half of those living with migraine are undiagnosed</span>, leaving millions to struggle without answers or support. And even with a diagnosis, most of us are still left to figure it out on our own - with too few specialists to turn to, too little progress in treatment, and far too many gaps in care.
                  </p>

                  <p>It's not just about health. It's about your time, your energy, your ability to live your life fully.</p>
                  
                  <blockquote className="my-24 mx-12 md:mx-24 text-center">
                    <p className="text-terracotta font-merriweather italic text-lg md:text-xl">
                      "It impacts every day and it impacts many of my choices and decisions... it's constantly figuring out how to not get a migraine."
                    </p>
                  </blockquote>

                  <p>
                    <span className="font-bold">You deserve better.</span> At Kōkūn, we're building a smarter, more compassionate way to navigate migraine. One that listens deeply, learns with you, and helps you find what's most helpful, right when you need it.
                  </p>
                </div>
                
                <div className="font-inter">
                  <h2 className="text-2xl font-bold mt-12 mb-6">You'll find:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>Evidence-based insights tailored to you</li>
                    <li>A supportive community that sees and hears you</li>
                    <li>Personalized resources you can trust</li>
                    <li>A collective movement pushing for the research and recognition migraine truly deserves</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <p>
                    Migraine is where we start, but it won't be where we stop. We're building a future where all invisible conditions are seen, understood, and transformed. We're here to make the invisible visible. To help you thrive.
                  </p>
                  <p>
                    Join us on this journey to make migraine visible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="py-20 flex justify-center w-full">
            <div className="w-[1050px] bg-black/60 backdrop-blur-sm p-12 rounded-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 font-league-spartan">We are Kōkūn</h2>
                <p className="text-lg mb-12">
                  We're transforming how invisible health conditions are seen, understood, and healed.<br className="hidden md:block" />
                  <span className="text-terracotta font-league-spartan text-xl">Be among the first to join our movement.</span>
                </p>
                
                <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-8 md:space-y-0">
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => navigate('/early-access')}
                      className="bg-terracotta text-white w-64 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors mb-3"
                    >
                      EARLY ACCESS
                    </button>
                    <p className="text-sm max-w-[200px]">Join our migraine community and shape the Kōkūn Collective</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => navigate('/pledge')}
                      className="bg-terracotta text-white w-64 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors mb-3"
                    >
                      PLEDGE
                    </button>
                    <p className="text-sm max-w-[200px]">Make a gift to ignite change for the unseen millions</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => navigate('/newsletter')}
                      className="bg-terracotta text-white w-64 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors mb-3"
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

export default MigrainePage;