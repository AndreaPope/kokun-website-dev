//https://res.cloudinary.com/dknulbme8/image/upload/v1743104717/xyopxkjk6dob5iodjy9n.jpg
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageContentWrapper from '../components/PageContentWrapper';

export default function CookieNoticePage() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/dandelion.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10">
        <Navigation />

        <main className="min-h-screen px-4 pb-24 pt-32">
          <PageContentWrapper>
            <div className="bg-background backdrop-blur-sm p-8 rounded-lg">
              <h1 className="text-4xl font-bold mb-8 font-display">Cookie Notice</h1>
              
              <div className="space-y-6 text-lg">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
                  <p>
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and supporting our marketing efforts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Essential cookies: Required for basic site functionality</li>
                    <li>Analytics cookies: Help us understand how visitors use our site</li>
                    <li>Preference cookies: Remember your settings and choices</li>
                    <li>Marketing cookies: Track your activity to deliver personalized content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Third-Party Tools</h2>
                  <p>
                    We use tools like Google Analytics to understand site usage. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-hover">Google Analytics Opt-out Browser Add-on</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Your Choices</h2>
                  <p>
                    You can control cookies through your browser settings. Note that blocking some types of cookies may impact your experience on our site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                  <p>
                    If you have questions about our cookie practices, please contact us at <a href="mailto:info@kokun.space" className="text-primary hover:text-hover">info@kokun.space</a>.
                  </p>
                </section>

                <p className="text-sm text-gray-400">
                  Last updated: May 15, 2025
                </p>
              </div>
            </div>
          </PageContentWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}