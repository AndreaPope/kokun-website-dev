import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
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
          //backgroundImage: 'url("https://res.cloudinary.com/dknulbme8/image/upload/v1743104717/xyopxkjk6dob5iodjy9n.jpg")',
          //backgroundImage: 'url("/images/rhdandelion.jpg")',
          backgroundImage: 'url("/images/dandelion.jpg")',
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
                PLEDGE
              </div>
            </div>
            
            <div className="text-xl sm:text-4xl md:text-5xl text-center font-bold mb-24 md:mb-32" style={{ textShadow: '1px 1px 1px rgba(155, 155, 155, 0.4)' }}>
              <p className="flex items-center justify-center">
                <span>Be a <span className="text-text-primary">Catalyst</span> for Change</span>
              </p>
            </div>
          </div>
              
          <div className="flex justify-center w-full">
            <div className="w-full md:w-[1050px] bg-black/60 backdrop-blur-sm p-6 md:p-12 rounded-lg">
              <div className="space-y-8 text-lg md:text-xl">
                <p>
                  We're getting ready to launch Kōkūn and every dollar makes a difference. By pledging today, you will directly fuel our mission to help people with invisible conditions thrive.
                </p>
                <p>
                  Kōkūn is in the process of establishing itself as a nonprofit—because we believe care should be driven by the needs of those who are suffering, not by profit margins. Staying mission-first allows us to focus on what matters most: the people who've been overlooked for too long.
                </p>
                <p>
                  Your support isn't just a gift—it's an investment in a more compassionate, inclusive future of care. Are you ready to ignite change for the unseen millions? Pledge now!
                </p>

                <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-base font-medium mb-2 text-text-primary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <p className="text-xs text-gray-300">
                      We take your privacy seriously and will always handle your information with care. If you ever change your mind and want to opt out, just email us at <a href="mailto:info@kokun.space" className="text-text-primary hover:text-text-secondary">info@kokun.space</a>. You can find our full <a href="/docs/kokun-privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-secondary">Privacy Policy here</a>.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="amount" className="block text-base font-medium mb-2 text-text-primary">
                      Pledge Amount
                    </label>
                    <input
                      type="number"
                      id="amount"
                      required
                      min="1"
                      step="1"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                    <p className="text-xs text-gray-400 mt-2">NOTE: We are in the process of establishing our 501(c)(3) status and will follow up with donation details</p>
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
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70" onClick={handleModalClose} />
          <div className="relative bg-white text-black p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 font-display">Welcome to the Kōkūn family!</h3>
            <p className="mb-6">
               We will send you an email confirming your pledge. Please check your inbox for our confirmation email and mark it as 'not spam' or add us to your contacts to ensure you receive all future updates.
            </p>
            <Button onClick={handleModalClose}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PledgePage;