import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { submitWebsiteInput } from '../lib/supabase';

function NewsletterPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    earlyAccess: false,
    pledge: false,
    pledgeAmount: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitWebsiteInput({
        email: formData.email,
        join_us: formData.earlyAccess,
        pledge: formData.pledge,
        receive_newsletter: true,
        pledge_amt: formData.pledge ? parseFloat(formData.pledgeAmount) : 0
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

        <main className="min-h-screen px-4 pb-24 pt-64 md:pt-72">
          <div className="max-w-4xl mx-auto w-full mb-32 md:mb-64">
            <div className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-center leading-tight">
              <div style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>
                NEWSLETTER
              </div>
            </div>
            
            <div className="text-xl sm:text-4xl md:text-5xl text-center font-bold mb-24 md:mb-32" style={{ textShadow: '1px 1px 1px rgba(155, 155, 155, 0.4)' }}>
              <p className="flex items-center justify-center">
                <span>Be in the <span className="text-terracotta">Know</span></span>
              </p>
            </div>
          </div>
              
          <div className="flex justify-center w-full">
            <div className="w-full md:w-[1050px] bg-black/60 backdrop-blur-sm p-6 md:p-12 rounded-lg">
              <div className="space-y-8 text-lg md:text-xl">
                <p>
                  Our monthly newsletter brings you closer to the world of invisible conditions—with curated insights, real stories from the community, and a behind-the-scenes look at Kōkūn's progress.
                </p>
                <p>
                  Join a growing movement of advocates, patients, and changemakers who want to stay connected to the breakthroughs, questions, and quiet revolutions shaping care from the inside out.
                </p>

                <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-base font-medium mb-2 text-terracotta">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <p className="text-xs text-gray-400">
                      We take your privacy seriously and will always handle your information with care. If you ever change your mind and want to opt out, just email us at <a href="mailto:info@kokun.space" className="text-terracotta hover:text-terracotta-light">info@kokun.space</a>. You can find our full <a href="/docs/kokun-privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:text-terracotta-light">Privacy Policy here</a>.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base font-medium mb-4 text-terracotta">Check the boxes below if you would also like to</p>
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
                    <div className="space-y-2">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          className="mt-1"
                          checked={formData.pledge}
                          onChange={(e) => setFormData({...formData, pledge: e.target.checked, pledgeAmount: e.target.checked ? formData.pledgeAmount : ''})}
                        />
                        <span className="text-base">
                          Pledge to Kōkūn. Ignite change for the unseen millions.
                        </span>
                      </label>
                      {formData.pledge && (
                        <div className="pl-6">
                          <label htmlFor="pledgeAmount" className="block text-sm font-medium mb-1">
                            Pledge Amount
                          </label>
                          <input
                            type="number"
                            id="pledgeAmount"
                            required
                            min="1"
                            step="1"
                            className="w-full md:w-48 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                            value={formData.pledgeAmount}
                            onChange={(e) => setFormData({...formData, pledgeAmount: e.target.value})}
                          />
                          <p className="text-xs text-gray-400 mt-1">NOTE: We are in the process of establishing our 501(c)(3) status and will follow up with donation details</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <Button type="submit">SUBSCRIBE NOW</Button>
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
            <h3 className="text-2xl font-bold mb-4 font-display">Thank you for subscribing!</h3>
            <p className="mb-6">
              Welcome to the Kōkūn family! We will send you an email confirming your subscription. Please check your inbox for our confirmation email and mark it as 'not spam' or add us to your contacts to ensure you receive all future updates.
            </p>
            <Button onClick={handleModalClose}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsletterPage;