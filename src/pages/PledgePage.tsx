import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
          backgroundImage: 'url("https://res.cloudinary.com/dknulbme8/image/upload/v1743104717/xyopxkjk6dob5iodjy9n.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10">
        <Navigation />

        <main className="flex flex-col items-center justify-center min-h-screen px-4 pb-24 pt-48">
          <div className="text-6xl md:text-9xl font-bold text-center leading-none mb-12">
            <div style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>PLEDGE</div>
          </div>
          
          <div className="text-4xl md:text-5xl text-center font-bold mb-48" style={{ textShadow: '1px 1px 1px rgba(155, 155, 155, 0.4)' }}>
            <p className="flex items-center justify-center">
              <span>Be a <span className="text-terracotta">Catalyst</span> for Change</span>
            </p>
          </div>
              
          <div className="flex justify-center w-full mt-24">
            <div className="w-[1050px] bg-black/60 backdrop-blur-sm p-12 rounded-lg">
              <div className="space-y-8 text-xl">
                <p>
                  Join the Kōkūn Collective and help us transform how migraine and other invisible conditions are seen, understood, and healed. Your contribution has the power to ignite change for the unseen millions.
                </p>
                
                <p>
                  We're launching our beta soon and every dollar counts. By contributing today, your donation will directly fuel our mission to help people with invisible conditions not just survive but thrive. Your generosity will help transform lives!
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

                  <div>
                    <label htmlFor="amount" className="block text-base font-medium mb-2">
                      Pledge Amount*
                    </label>
                    <input
                      type="number"
                      id="amount"
                      required
                      min="1"
                      step="1"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-base font-medium mb-4">Check the boxes below if you would also like to:</p>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        className="mt-1"
                        checked={formData.newsletter}
                        onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                      />
                      <span className="text-base">
                        Sign up for our Newsletter. Stay updated on invisible conditions and Kōkūn's progress
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
                        Sign up for Early Access. Be a founding member of our migraine community
                      </span>
                    </label>
                  </div>

                  <p className="text-sm text-gray-300 italic">
                    *We respect your privacy and will never share your information without your consent.
                  </p>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-terracotta text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-terracotta-light transition-colors"
                    >
                      MAKE YOUR IMPACT
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
            <h3 className="text-2xl font-bold mb-4">Welcome to the Kōkūn family!</h3>
            <p className="mb-6">
               We will send you an email confirming your pledge. Please check your inbox for our confirmation email and mark it as 'not spam' or add us to your contacts to ensure you receive all future updates.
            </p>
            <button
              onClick={handleModalClose}
              className="w-full bg-terracotta text-white px-6 py-2 rounded-full font-semibold hover:bg-terracotta-light transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PledgePage;