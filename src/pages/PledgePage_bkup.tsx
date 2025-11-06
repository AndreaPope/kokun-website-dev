import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PageContentWrapper from '../components/PageContentWrapper';
import { submitWebsiteInput } from '../lib/supabase';


function PledgePage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
    newsletter: false,
    earlyAccess: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitWebsiteInput({
        email: formData.email,
        join_us: formData.earlyAccess,
        pledge: true,
        pledge_amt: parseFloat(formData.amount),
        receive_newsletter: formData.newsletter
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
              <p>
                We're getting ready to launch Kōkūn and every dollar matters. By donating today, you will directly fuel our mission to help people with invisible conditions thrive.
              </p>
              <p>
                Kōkūn is a nonprofit because we believe care should be driven by the needs of those who are suffering, not by profit margins. We're here for those who've been overlooked for too long.
              </p>
              <p>
                Your support isn't just a gift. It's an investment in a more compassionate, inclusive future of care. Ready to ignite change for the unseen millions? Donate now!
              </p>

              <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-base font-medium mb-2 text-primary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <p className="text-xs text-gray-300">
                    We take your privacy seriously and will always handle your information with care. If you ever change your mind and want to opt out, just email us at <a href="mailto:info@kokun.space" className="text-primary hover:text-hover">info@kokun.space</a>. You can find our full <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-hover">Privacy Policy here</a>.
                  </p>
                </div>

                <div>
                  <label htmlFor="amount" className="block text-base font-medium mb-2 text-primary">
                    Donation Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    required
                    min="1"
                    step="1"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-base font-medium mb-4">Check the boxes below if you would also like to</p>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={formData.newsletter}
                      onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                    />
                    <span className="text-base">
                      Sign up for our Newsletter. Follow what we're uncovering—from research to real life.
                    </span>
                  </label>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={formData.earlyAccess}
                      onChange={(e) => setFormData({...formData, earlyAccess: e.target.checked})}
                    />
                    <span className="text-base">
                      Sign up for Early Access to Kōkūn. Be among the first to experience what's next in migraine care.
                    </span>
                  </label>
                </div>

                <div className="text-center pt-4">
                  <Button type="submit">MAKE YOUR IMPACT</Button>
                </div>
              </form>
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