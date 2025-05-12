import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { submitWebsiteInput } from '../lib/supabase';

function NewsletterPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    earlyAccess: false,
    pledge: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitWebsiteInput({
        email: formData.email,
        join_us: formData.earlyAccess,
        pledge: formData.pledge,
        receive_newsletter: true,
        pledge_amt: 0
      });
      setShowModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="relative min-h-screen font-sans text-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dknulbme8/image/upload/v1743181038/rpythhmvkqgig7lmiyd8.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10">
        <Navigation />

        <main className="flex flex-col items-center justify-center min-h-screen px-4 pb-24 pt-48">
          <div className="text-6xl md:text-9xl font-bold text-center leading-none mb-12 font-league-spartan">
            <div style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>NEWSLETTER</div>
          </div>
          
          <div className="text-4xl md:text-5xl text-center font-bold mb-48 font-league-spartan" style={{ textShadow: '1px 1px 1px rgba(155, 155, 155, 0.4)' }}>
            <p className="flex items-center justify-center">
              <span>Be in the <span className="text-terracotta">Know</span></span>
            </p>
          </div>
              
          <div className="flex justify-center w-full mt-24">
            <div className="w-[1050px] bg-black/60 backdrop-blur-sm p-12 rounded-lg">
              <div className="space-y-8 text-xl">
                <p>
                  Our monthly newsletter delivers curated insights, community stories, and updates on Kōkūn's progress directly to your inbox. Join our growing community of advocates and changemakers and stay informed about breakthroughs, developments, and much much more.
                </p>

                <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                  <div>
                    <label htmlFor="email" className="block text-base font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-base font-medium mb-4">Check the boxes below if you would also like to:</p>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        className="mt-1"
                        checked={formData.earlyAccess}
                        onChange={(e) => setFormData({...formData, earlyAccess: e.target.checked})}
                      />
                      <span className="text-base">
                        Be a founding member of Kōkūn by signing up for Early Access to our migraine offering.
                      </span>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        className="mt-1"
                        checked={formData.pledge}
                        onChange={(e) => setFormData({...formData, pledge: e.target.checked})}
                      />
                      <span className="text-base">
                        Pledge to Kōkūn. Ignite change for the unseen millions.<i>(Note, our 501c3 status is in progress.)</i>
                      </span>
                    </label>
                  </div>

                  <p className="text-sm text-gray-300 italic">
                    *By submitting this form, you consent to Kōkūn using your information for the purposes you've selected (early access, pledge, newsletter). Your personal and payment information will be securely processed. You can unsubscribe from communications or opt out of programs at any time by contacting info@kokun.space. Read our full Privacy Policy.

                  </p>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-terracotta text-white w-64 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors"
                    >
                      SUBSCRIBE NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70" onClick={handleModalClose} />
          <div className="relative bg-white text-black p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 font-league-spartan">Thank you for subscribing!</h3>
            <p className="mb-6">
              Welcome to the Kōkūn family! We will send you an email confirming your subscription. Please check your inbox for our confirmation email and mark it as 'not spam' or add us to your contacts to ensure you receive all future updates.
            </p>
            <button
              onClick={handleModalClose}
              className="w-full bg-terracotta text-white w-64 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsletterPage;