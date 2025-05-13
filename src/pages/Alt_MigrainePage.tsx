import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Alt_MigrainePage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen font-sans text-gray-800">
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
          <div className="text-6xl md:text-9xl font-bold text-center leading-none mb-12 text-white">
            <div style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>MIGRAINE</div>
          </div>
          
          <div className="text-4xl md:text-5xl text-center font-bold mb-48 text-white" style={{ textShadow: '1px 1px 1px rgba(155, 155, 155, 0.4)' }}>
            <p className="flex items-center justify-center">
              <span>The <span className="text-terracotta">Invisible</span> Epidemic</span>
            </p>
          </div>
              
          <div className="flex justify-center w-full mt-24">
            <div className="w-[1050px] bg-white shadow-lg p-12 rounded-lg">
              <div className="space-y-8 text-xl">
                <p>
                  Migraine is more than just a headache—it's the #1 cause of disability in people under 50, affecting over a billion people worldwide. Despite its massive impact, migraine remains profoundly misunderstood, with fundamental questions about its mechanisms still unanswered due to significant research deficits.
                </p>
                
                <p className="font-bold text-2xl mt-12 mb-6">The numbers are staggering. Migraine is:</p>
                <ul className="space-y-6">
                  <li><span className="font-bold">Widespread yet invisible:</span> Over 40 million Americans are suffering, with approximately 50% remaining undiagnosed</li>
                  <li><span className="font-bold">Severely underserved:</span> Only about 500 neurologists in the US are specifically trained to treat migraine</li>
                  <li><span className="font-bold">Economically devastating:</span> It is costing the US $78 billion annually in lost productivity</li>
                </ul>

                <p className="mt-12">
                  Today, in addition to the debilitating pain and crushing invisibility, people with migraine are also navigating a frustrating and fragmented ecosystem. Kōkūn aims to simplify this journey by connecting you with the right resources at the right time. We do this by understanding you deeply and personalizing your healing journey.
                </p>

                <p>
                  On our platform, you will be connected with a nurturing community that truly sees you, relevant resources you can trust, and informative insights that can drive meaningful change. We will also mobilize our collective power to move the needle on migraine research.
                </p>

                <p>
                  Migraine is our starting point, not our destination—we're building the foundations to ultimately transform care for the vast spectrum of invisible conditions.
                </p>
              </div>
            </div>
          </div>

          <section className="py-20 flex justify-center w-full">
            <div className="w-[1050px] bg-white shadow-lg p-12 rounded-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">We are Kōkūn</h2>
                <p className="text-xl mb-12">
                  We're transforming how invisible health conditions are seen, understood, and healed.<br className="hidden md:block" />
                  Be among the first to join our movement.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-8 md:space-y-0">
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => navigate('/early-access')}
                      className="bg-terracotta text-white w-48 h-12 rounded-full font-semibold hover:bg-terracotta-light transition-colors mb-3"
                    >
                      EARLY ACCESS
                    </button>
                    <p className="text-sm max-w-[200px]">Join our migraine community and shape the Kōkūn Collective</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => navigate('/pledge')}
                      className="bg-terracotta text-white w-48 h-12 rounded-full font-semibold hover:bg-terracotta-light transition-colors mb-3"
                    >
                      PLEDGE
                    </button>
                    <p className="text-sm max-w-[200px]">Make a gift to ignite change for the unseen millions</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => navigate('/newsletter')}
                      className="bg-terracotta text-white w-48 h-12 rounded-full font-semibold hover:bg-terracotta-light transition-colors mb-3"
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

export default Alt_MigrainePage;