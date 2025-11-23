import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PageContentWrapper from '../components/PageContentWrapper';
// submitWebsiteInput removed because the inline form is inactive

function PledgePage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Form submission is disabled — form UI is kept commented out for later use.

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/');
  };

  // Load/refresh FundRazr widget when the component mounts.
// Load FundRazr script and initialize widget
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const anyWindow = window as any;

    const initWidget = () => {
      const manager = anyWindow.FundRazr?.WidgetManager;
      if (manager && typeof manager.parse === 'function') {
        manager.parse(document);
      }
    };

    // If script already loaded, just init
    if (anyWindow.FundRazr) {
      initWidget();
      return;
    }

    // Otherwise, inject the script
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-fundrazr-loader="true"]'
    );
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://static.fundrazr.com/widgets/loader.js';
      script.async = true;
      script.dataset.fundrazrLoader = 'true';
      script.onload = initWidget;
      document.body.appendChild(script);
    } else {
      existingScript.addEventListener('load', initWidget);
      // Cleanup handler when component unmounts
      return () => {
        existingScript.removeEventListener('load', initWidget);
      };
    }
  }, []);


  return (
      <div className="relative min-h-screen font-sans text-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          //backgroundImage: 'url("/images/bridgewstones-purchased.jpg")',
          backgroundImage: 'url("/images/dandelion.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10">
        <Navigation />

        <main className="min-h-screen px-4 pb-24 pt-64 md:pt-72">
          <PageContentWrapper className="mb-48 md:mb-64">
            <div className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-center leading-tight">
              <div>
                DONATE
              </div>
            </div>
            
            <div className="text-3xl sm:text-4xl md:text-6xl text-center font-bold mb-24 md:mb-32">
              <p className="flex items-center justify-center">
                <span>Be a <span className="text-primary">Catalyst for Change</span></span>
              </p>
            </div>
          </PageContentWrapper>
              
          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">
            <div className="space-y-8 text-lg md:text-xl">
              {/* <p>
                We're getting ready to launch Kōkūn and every dollar matters. By donating today, you will directly fuel our mission to help people with invisible conditions thrive.
              </p>
              <p>
                Kōkūn is a nonprofit because we believe care should be driven by the needs of those who are suffering, not by profit margins. We're here for those who've been overlooked for too long.
              </p>
              <p>
                Your support isn't just a gift. It's an investment in a more compassionate, inclusive future of care. Ready to ignite change for the unseen millions? Donate now!
              </p> */}

                <div className="flex justify-center pt-4">
                  <div 
                  className="fr-widget"
                  data-type="simple-checkout"
                  data-url="https://fnd.us/makeyourimpact"
                      style={{
                        width: '100%',
                      }}
                  >
                    <img src="//static.fundrazr.com/widgets/loader.gif" />
                  </div>
                </div>


            </div>
          </PageContentWrapper>
        </main>

        <Footer />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-background" onClick={handleModalClose} />
          <div className="relative bg-white text-black p-8 rounded-lg max-w-md w-full text-center">
            <h3 className="text-2xl font-bold mb-4 font-display">Welcome to the Kōkūn family!</h3>
            <p className="mb-6">
               We will send you an email confirming your donation. Please check your inbox for our confirmation email and mark it as 'not spam' or add us to your contacts to ensure you receive all future updates.
            </p>
            <Button onClick={handleModalClose}>CLOSE</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PledgePage;
