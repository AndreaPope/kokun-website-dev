import React, { useState } from 'react';
import Button from './Button';

export default function CookieNotice() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-background" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white text-black p-8 rounded-lg max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4 font-display">Cookie Notice</h2>
            
            <div className="space-y-4 text-base">
              <h3 className="text-xl font-bold">1. What Are Cookies?</h3>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and supporting our marketing efforts.
              </p>

              <h3 className="text-xl font-bold">2. Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Essential cookies: Required for basic site functionality</li>
                <li>Analytics cookies: Help us understand how visitors use our site</li>
                <li>Preference cookies: Remember your settings and choices</li>
                <li>Marketing cookies: Track your activity to deliver personalized content</li>
              </ul>

              <h3 className="text-xl font-bold">3. Third-Party Tools</h3>
              <p>
                We use tools like Google Analytics to understand site usage. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-hover">Google Analytics Opt-out Browser Add-on</a>.
              </p>

              <h3 className="text-xl font-bold">4. Your Choices</h3>
              <p>
                You can control cookies through your browser settings. Note that blocking some types of cookies may impact your experience on our site.
              </p>

              <h3 className="text-xl font-bold">5. Contact Us</h3>
              <p>
                If you have questions about our cookie practices, please contact us at <a href="mailto:info@kokun.space" className="text-primary hover:text-hover">info@kokun.space</a>.
              </p>
            </div>

            <div className="mt-6">
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}