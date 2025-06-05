import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageContentWrapper from '../components/PageContentWrapper';

function PrivacyPage() {
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

        <main className="min-h-screen px-4 pb-24 pt-32">
          <PageContentWrapper>
            <div className="bg-background backdrop-blur-sm p-8 rounded-lg">
              <h1 className="text-4xl font-bold mb-8 font-display">Privacy Policy</h1>
              
              <div className="space-y-6 text-lg">
                <p>
                  Kōkūn ("we," "our," "us") is committed to protecting your privacy and ensuring transparency about how we collect, use, share, and safeguard your personal information. This Privacy Policy explains how we handle your data when you use our website, complete surveys, or engage with our services and communications.</p>
                <p>We know trust is hard-earned—especially when it comes to your health. This policy reflects our deep commitment to treating your information with the respect and care it deserves.
                </p>

                <section>
                  <h2 className="text-2xl font-bold mb-4">1. No Medical Advice</h2>
                  <p>Kōkūn is a wellness platform—not a medical provider. The information we provide is for educational and informational purposes only. It should not be considered medical advice and is not a substitute for professional care. Always consult a licensed healthcare provider with any questions about your health.
</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. What We Collect</h2>
                  <p>We collect personal information in three main ways:</p>
                  <br></br>
                  <p><h3 className="text-1xl font-bold mb-4">a. Information You Provide Directly</h3></p>
                  <p>including when you:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Complete surveys or forms</li>
                    <li>Sign up for updates or events</li>
                    <li>Contact us directly</li>
                  </ul>
                  <br></br>
                  <p>This may include:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Name, email, and zip code</li>
                    <li>Health-related data (e.g., symptoms, experiences, diagnosis)</li>
                    <li>Any other information you choose to share</li>
                  </ul>
                  <br></br> 
                  <p><h3 className="text-1xl font-bold mb-4">b. Sensitive Information (PHI)</h3></p>
                  <p>If you choose to share health-related details, we may collect data that qualifies as Protected Health Information (PHI). While Kōkūn is not a HIPAA-covered entity, we apply strict safeguards to protect this information and treat it with the utmost sensitivity.
</p><br></br><p><h3 className="text-1xl font-bold mb-4">c. Automatically Collected Data
</h3></p><p>When you visit our website, we may collect:</p>
                   <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>IP address, browser type, and device info</li>
                    <li>Usage data and site behavior</li>
                    <li>Cookies and web tracking tools</li>
                  </ul>
                  <br></br>
                  <p>We may also collect data from trusted third-party sources such as analytics platforms or public databases, and combine it with the information you provide.
</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Deliver and improve Kōkūn's services</li>
                    <li>Personalize your experience and communications</li>
                    <li>Understand trends and user needs</li>
                    <li>Generate insights to improve support for invisible conditions</li>
                    <li>Create de-identified, aggregated datasets for research and ecosystem impact</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                  <br></br>
                  <p>We process your data only when we have a valid legal basis, including:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Consent (e.g., when completing a survey)</li>
                    <li>Legitimate interest (e.g., improving our services)</li>
                    <li>Legal obligation (e.g., compliance with data laws)</li>
                    <li>Vital interest (e.g., protecting your safety)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Sharing and Licensing Data</h2>
                  <p>We do not sell or share your personal information in a way that identifies you.</p>
                  <br></br>
                  <p>We may license or share de-identified and aggregated data—which cannot reasonably be linked back to you—with trusted partners to support research, care innovation, and advocacy.</p>
                  <br></br>
                  <p>We may:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Share data with trusted service providers who help operate our platform (e.g., web hosting, analytics)</li>
                    <li>License or share de-identified and aggregated data with researchers, nonprofit partners, or healthcare stakeholders to advance understanding and solutions</li>
                    <li>Share data as required by law or legal proceedings
</li>
                    <li>Share data with your explicit consent for specific uses</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                  <p>
                    Depending on where you live, you may have the right to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Correct or delete your information</li>
                    <li>Request a copy of your information (data portability)</li>
                    <li>Opt out of the sharing or sale of personal information</li>
                    <li>Limit use of sensitive personal data</li>
                    <li>Appeal a denied data request</li>
                  </ul>             
                  <br></br>
                  <p>To exercise any of these rights, email us at <a href="mailto:info@kokun.space" className="text-primary hover:text-hover">info@kokun.space</a>. If your request is denied, you may appeal the decision through the same contact.
</p><br></br><p>We honor Global Privacy Control (GPC) and Do Not Track (DNT) browser signals where required.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Your Choices</h2>
                  <p>
                    You have control over how your data is used. You can:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Unsubscribe from communications at any time by clicking unsubscribe or contacting <a href="mailto:info@kokun.space" className="text-primary hover:text-hover">info@kokun.space</a></li>
                    <li>Opt out of programs (such as Early Access, Inner Circle, etc.) by contacting <a href="mailto:info@kokun.space" className="text-primary hover:text-hover">info@kokun.space</a></li>
                    <li>Opt out of cookie tracking via browser settings
</li>
                    <li>Request deletion or restriction of your data</li>
                    <li>Decline to participate in surveys or share certain information</li>
                  </ul>             
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Improve site performance and user experience</li>
                    <li>Understand how users interact with our content</li>
                    <li>Deliver relevant messaging</li>
                  </ul>
                  <br></br>
                  <p>
                    We may use tools like Google Analytics or Meta Pixel. You can opt out of cookies via browser settings or through tools like Google Analytics Opt-out. For more, see our{' '}
                    <a 
                      href="/cookie-notice"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-hover"
                    >
                      Cookie Notice
                    </a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
                  <p>We retain personal data:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>For as long as necessary to fulfill its intended purpose</li>
                    <li>As required by law or regulation</li>
                    <li>In de-identified form indefinitely to support research, advocacy, and insights</li>
                  </ul>
                  <br></br>
                  <p>If you request deletion, we will remove your personally identifiable information unless we are legally required to keep it.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. How We Protect Your Information</h2>
                  <p>We use industry-standard safeguards to protect your data, including:
</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Encryption where appropriate</li>
                    <li>Access controls and authentication</li>
                    <li>Agreements with third-party vendors to ensure data security</li>
                  </ul>
                  <br></br>
                  <p>Despite these efforts, no system is 100% secure. We encourage you to use strong passwords and keep your devices protected.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
                  <p>Our services are not intended for or directed to children under the age of 13. We do not knowingly collect data from children. If we learn that we have, we will delete it.
</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">11. Third-Party Links and Services</h2>
                  <p>Our website may contain links to other websites or services. We are not responsible for the privacy practices or content of those third-party services.</p>              
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">12. Financial Incentives
</h2>
                  <p>We do not currently offer financial incentives (e.g., discounts or access) in exchange for your data. If this changes, we will update this policy and provide details in compliance with applicable law.</p>              
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">13. State-Specific Rights (California, Virginia, etc.)
</h2>
                  <p>If you live in California, Virginia, Colorado, Connecticut, or Utah, you may have enhanced privacy rights under state law. These may include:
</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Knowing what categories of data we collect and for what purpose</li>
                    <li>Opting out of the sale or sharing of personal data</li>
                    <li>Knowing with whom your data is shared</li>
                  </ul>
                  <br></br>
                  <p>We provide a Data Disclosure Table and access mechanisms upon request.
</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">14. Changes to This Policy</h2>
                  <p>We may revise this policy periodically. If there are material changes, we will notify you via email or prominently on our website.
</p>              
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">15. Contact Us</h2>
                  <p>
                    If you have questions, feedback, or requests related to your data or this policy, reach out:{' '}
                    <a href="mailto:info@kokun.space" className="text-primary hover:text-hover">
                      info@kokun.space
                    </a>
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

export default PrivacyPage;