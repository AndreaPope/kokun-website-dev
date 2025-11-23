import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PageContentWrapper from '../components/PageContentWrapper';

export default function EarlyAccessPage() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/bridgewstones-purchased.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10">
        <Navigation />

        <main className="min-h-screen px-4 pb-24 pt-64 md:pt-72">
          <PageContentWrapper className="mb-32 md:mb-64">
            <div className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-center leading-tight">
              <div>EARLY ACCESS</div>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl text-center font-bold mb-48 md:mb-32">
              <p className="flex items-center justify-center">
                <span>
                  Be <span className="text-primary">Among the First</span>
                </span>
              </p>
            </div>
          </PageContentWrapper>

          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">
            <div className="space-y-8 text-lg md:text-xl">
              <p>
                We're getting ready to launch Kōkūn&apos;s migraine offering and we&apos;re
                offering early access to the first 250 individuals ready to shine a light on what
                medicine has overlooked for too long.
              </p>
              <p>
                You&apos;ll be among the first to experience our platform, and your insights will
                help shape what comes next. Early access is a front-row seat to the future of
                migraine care.
              </p>
              <p>
                If you&apos;ve ever felt invisible, this is your moment to be seen and heard—and
                help change the story. Sign up now to secure your spot.
              </p>

              {/* Mailchimp Early Access form with tag "EarlyAccess" */}
              <form
                action="https://space.us2.list-manage.com/subscribe/post?u=21828ca842c8b79b81f1b21d2&id=8d32120fc0&f_id=0073fbe3f0"
                method="POST"
                target="_blank"
                noValidate
                className="mt-12 space-y-8"
              >
                {/* Apply EarlyAccess tag */}
                <input type="hidden" name="tags" value="1936702" />

                {/* Optional but fine to include: honeypot field for spam protection */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                  <input
                    type="text"
                    name="b_21828ca842c8b79b81f1b21d2_8d32120fc0"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="mce-EMAIL"
                    className="block text-base font-medium mb-2 text-primary"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="mce-EMAIL"
                    name="EMAIL"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <p className="text-xs text-gray-400">
                    We take your privacy seriously and will always handle your information with
                    care. If you ever change your mind and want to opt out, just email us at{' '}
                    <a
                      href="mailto:info@kokun.space"
                      className="text-primary hover:text-hover"
                    >
                      info@kokun.space
                    </a>
                    . You can find our full{' '}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-hover"
                    >
                      Privacy Policy here
                    </a>
                    .
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Button type="submit">
                    JOIN THE MOVEMENT
                  </Button>
                </div>
              </form>
            </div>
          </PageContentWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}
