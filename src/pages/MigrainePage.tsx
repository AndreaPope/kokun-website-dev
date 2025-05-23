import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Users, BookOpen, FlaskConical } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';

function MigrainePage() {
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

        <main className="min-h-screen px-4 pb-24 pt-64 md:pt-72">
          <div className="max-w-4xl mx-auto w-full mb-32 md:mb-64">
            <div className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-center leading-tight">
              <div style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>
                MIGRAINE
              </div>
            </div>
            
            <div className="text-2xl sm:text-4xl md:text-5xl text-center font-bold" style={{ textShadow: '1px 1px 1px rgba(155, 155, 155, 0.4)' }}>
              <p className="flex items-center justify-center">
                <span>The <span className="text-terracotta">Invisible</span> Epidemic</span>
              </p>
            </div>
          </div>
              
          <div className="flex justify-center w-full">
            <div className="w-full md:w-[1050px] bg-black/60 backdrop-blur-sm p-6 md:p-12 rounded-lg">
              <div className="space-y-8 text-lg md:text-xl">
                <div className="space-y-6">
                  <p>
                    <span className="font-bold text-terracotta">Migraine isn't just a headache.</span> It's crushing pain. Lost days. Constant recalibrations: <span className="font-italic">Should I commit? Can I push through? What if I can't? Will anyone understand?</span>
                  </p>
                  <br></br>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 text-center">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl md:text-5xl font-bold mb-2 font-display">39M</div>
                      <div className="text-sm md:text-base">suffering from migraine</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl md:text-5xl font-bold mb-2 font-display">#1</div>
                      <div className="text-sm md:text-base">cause of disability</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl md:text-5xl font-bold mb-2 font-display">45%</div>
                      <div className="text-sm md:text-base">still undiagnosed</div>
                    </div>
                  </div>
                  
                  <p>
                    Migraine affects over  39 million people in the U.S. and is the top cause of disability for people under 50. Yet despite its massive impact, migraine often remains invisible—to medicine, to society, even to the people around you.
                  </p>
                  
                  <p>
                    Half of those living with migraine are undiagnosed, leaving millions to struggle without answers or support. 
                    And even with a diagnosis, most of us are still left to figure it out on our own—because specialists are scarce, treatments haven’t kept up, and the system wasn’t built for us.


                  </p>

               
                  <br></br>                  
                  <blockquote className="my-16 md:my-24 mx-6 md:mx-32">
                    <p className="text-terracotta font-merriweather text-base md:text-lg lg:text-xl" data-attribution="KŌKŪN RESEARCH PARTICIPANT">
                      "It impacts every day and many of my choices and decisions... it's constantly figuring out how to not get a migraine."
                    </p>
                  </blockquote>
                  <br></br>
                  <p>
                    <span className="font-bold text-terracotta">You deserve better.</span> It's not just about health. It's about your time, your energy, your ability to live your life fully. At Kōkūn, we're building a smarter, more compassionate way to navigate migraine. One that listens deeply, learns with you, and helps you find what's most helpful, right when you need it. Here's what that'll look like in practice:
                  </p>
                </div>
                
                <div className="font-inter">
                  <ul className="space-y-6">
                    <li className="flex items-center gap-3">
                      <Lightbulb className="w-6 h-6 text-terracotta flex-shrink-0" />
                      <span>Evidence-based insights tailored to you</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-terracotta flex-shrink-0" />
                      <span>A supportive community that sees and hears you</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-terracotta flex-shrink-0" />
                      <span>Personalized resources you can trust</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FlaskConical className="w-6 h-6 text-terracotta flex-shrink-0" />
                      <span>A collective movement pushing for the research and recognition migraine truly deserves</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <p>
                    Migraine is where we start, but it won't be where we stop. We're building a future where all invisible conditions are seen, understood, and transformed. We're here to make the invisible visible. To help you thrive.
                               
                    Join us on this journey! 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="py-20 flex justify-center w-full">
            <div className="w-full md:w-[1050px] bg-black/60 backdrop-blur-sm p-6 md:p-12 rounded-lg">
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
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default MigrainePage;