import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Button from '../components/Button'
import PageContentWrapper from '../components/PageContentWrapper'


// Replace this URL with your Mailchimp (or other) subscribe URL
// const MAILCHIMP_SUBSCRIBE_URL =
//   'https://space.us2.list-manage.com/subscribe?u=21828ca842c8b79b81f1b21d2&id=8d32120fc0'


function NewsletterPage() {
  // navigation removed (no internal navigation needed for external subscribe)
  const [formData, setFormData] = useState({
    email: '',
    earlyAccess: false,
    pledge: false,
    pledgeAmount: '',
  })


  // Note: We keep local form state in case you want to prefill the Mailchimp
  // form or keep these checkboxes locally. The CTA below now sends the user
  // to an external subscribe page in a new tab instead of submitting to
  // Supabase.

  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dknulbme8/image/upload/v1743181038/rpythhmvkqgig7lmiyd8.jpg")',
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
              <div>NEWSLETTER</div>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl text-center font-bold mb-24 md:mb-32">
              <p className="flex items-center justify-center">
                <span>
                  Be <span className="text-primary">in the Know</span>
                </span>
              </p>
            </div>
          </PageContentWrapper>

          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">
            <div className="space-y-8 text-lg md:text-xl">
              <p>
                Our monthly newsletter brings you closer to the world of invisible conditions—with
                curated insights, real stories from the community, and a behind-the-scenes look at
                Kōkūn's progress.
              </p>
              <p>
                Join a growing movement of advocates, patients, and changemakers who want to stay
                connected to the breakthroughs, questions, and quiet revolutions shaping care from
                the inside out.
              </p>

              
              <div className="text-center pt-4">
                <form
                  action="https://space.us2.list-manage.com/subscribe/post"
                  method="POST"
                  target="_blank"
                  noValidate
                  className="mt-12 space-y-8"
                >
                  {/* Mailchimp required hidden fields */}
                  <input type="hidden" name="u" value="21828ca842c8b79b81f1b21d2" />
                  <input type="hidden" name="id" value="8d32120fc0" />

                  <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 gap-4">
                    <div className="mr-4">
                      <label
                        htmlFor="mce-FNAME"
                        className="block text-base font-medium mb-2 text-primary text-left"
                      >
                        First Name
                      </label>
                      <input
                        id="mce-FNAME"
                        name="FNAME"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div className="mr-4">
                      <label
                        htmlFor="mce-LNAME"
                        className="block text-base font-medium mb-2 text-primary text-left"
                      >
                        Last Name
                      </label>
                      <input
                        id="mce-LNAME"
                        name="LNAME"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="mce-EMAIL"
                      className="block text-base font-medium mb-2 text-primary text-left"
                    >
                      Email Address
                    </label>
                    <input
                      id="mce-EMAIL"
                      name="EMAIL"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <Button type="submit">
                    SUBSCRIBE NOW
                  </Button>
                </form>
                
                <br></br>
                <br></br>
                <p className="text-xs text-center text-gray-400">
                  We take your privacy seriously and will always handle your information with care.
                </p>
              </div>
            </div>
          </PageContentWrapper>
        </main>

        <Footer />
      </div>

      {/* Modal removed — external Mailchimp flow opens in a new tab */}
    </div>
  )
}

export default NewsletterPage
