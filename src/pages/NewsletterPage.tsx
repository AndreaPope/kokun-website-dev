import { useState } from 'react';
import { /* useNavigate */ } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PageContentWrapper from '../components/PageContentWrapper';
// Replace this URL with your Mailchimp (or other) subscribe URL
const MAILCHIMP_SUBSCRIBE_URL = 'https://space.us2.list-manage.com/subscribe?u=21828ca842c8b79b81f1b21d2&id=8d32120fc0';

function NewsletterPage() {
  // navigation removed (no internal navigation needed for external subscribe)
  const [formData, setFormData] = useState({
    email: '',
    earlyAccess: false,
    pledge: false,
    pledgeAmount: ''
  });
  // Note: We keep local form state in case you want to prefill the Mailchimp
  // form or keep these checkboxes locally. The CTA below now sends the user
  // to an external subscribe page in a new tab instead of submitting to
  // Supabase.

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
          <PageContentWrapper className="mb-48 md:mb-64">
            <div className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-center leading-tight">
              <div>
                NEWSLETTER
              </div>
            </div>
            
            <div className="text-3xl sm:text-4xl md:text-6xl text-center font-bold mb-24 md:mb-32">
              <p className="flex items-center justify-center">
                <span>Be <span className="text-primary">in the Know</span></span>
              </p>
            </div>
          </PageContentWrapper>
              
          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">
            <div className="space-y-8 text-lg md:text-xl">
              <p>
                Our monthly newsletter brings you closer to the world of invisible conditions—with curated insights, real stories from the community, and a behind-the-scenes look at Kōkūn's progress.
              </p>
              <p>
                Join a growing movement of advocates, patients, and changemakers who want to stay connected to the breakthroughs, questions, and quiet revolutions shaping care from the inside out.
              </p>

              {/*
                Inactive form (kept in source but commented out).
                To re-enable later, remove the surrounding comment markers.

                <form className="mt-6 space-y-6" onSubmit={(e) => e.preventDefault()} aria-hidden>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-base font-medium mb-2 text-primary">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      disabled
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 cursor-not-allowed"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <p className="text-xs text-gray-400">This form is currently inactive. Use the Subscribe button below to open the external subscribe page.</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base font-medium mb-4 text-primary">Optional preferences</p>
                    <label className="flex items-start space-x-3 opacity-60">
                      <input type="checkbox" className="mt-1" disabled checked={formData.earlyAccess} />
                      <span className="text-base">Sign up for Early Access</span>
                    </label>

                    <label className="flex items-start space-x-3 opacity-60">
                      <input type="checkbox" className="mt-1" disabled checked={formData.pledge} />
                      <span className="text-base">Pledge to Kōkūn</span>
                    </label>

                    <div>
                      <label htmlFor="pledgeAmount" className="block text-sm font-medium mb-1">Pledge Amount</label>
                      <input
                        id="pledgeAmount"
                        type="number"
                        disabled
                        className="w-full md:w-48 px-4 py-2 rounded-lg bg-white/5 border border-white/10 cursor-not-allowed"
                        value={formData.pledgeAmount}
                        onChange={(e) => setFormData({...formData, pledgeAmount: e.target.value})}
                      />
                    </div>

                    <div className="pt-4 text-center">
                      <button type="button" disabled className="w-52 md:w-56 h-12 rounded-full bg-white/10 text-white cursor-not-allowed">SUBSCRIBE (disabled)</button>
                    </div>
                  </div>
                </form>
              */}

              <div className="text-center pt-4">
                <Button onClick={() => window.open(MAILCHIMP_SUBSCRIBE_URL, '_blank', 'noopener')}>
                  SUBSCRIBE NOW
                </Button>
              </div>

              <div className="text-center pt-4" />

              <p className="text-xs text-center text-gray-400">
                We take your privacy seriously and will always handle your information with care. 
              </p>
            </div>
          </PageContentWrapper>
        </main>

        <Footer />
      </div>

      {/* Modal removed — external Mailchimp flow opens in a new tab */}
    </div>
  );
}

export default NewsletterPage;