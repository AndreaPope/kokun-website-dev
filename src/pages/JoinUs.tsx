import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Button from '../components/Button'
import PageContentWrapper from '../components/PageContentWrapper'

export default function JoinUs() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/ChatGPT-Hands.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background" />
      </div>

      <div className="relative z-10">
        <Navigation />

        <main className="min-h-screen px-4 pb-24 pt-64 md:pt-72">
          <PageContentWrapper className="mb-48 md:mb-64">
            <div className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-center leading-tight">
              <div>JOIN US</div>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl text-center font-bold mb-24 md:mb-32">
              <p className="flex items-center justify-center">
                <span>
                  Be <span className="text-primary">Part of the Movement</span>
                </span>
              </p>
            </div>
          </PageContentWrapper>

          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">
            <div className="space-y-8 text-lg md:text-xl">
              <p>
                Invisible conditions have been overlooked by medical research for generations, 
                leaving profound gaps in understanding and care. At Kōkūn, we're changing that.
              </p>
              <p>
                Starting with migraine, one of the most common yet most misunderstood invisible conditions, 
                we're shining a light on what has been in the shadows for too long. We're building a platform to 
                help you understand your condition better, connect with a community that truly sees you, and 
                reclaim your healing journey.
              </p>
              <p>
                Join us and a growing movement of advocates, patients, and changemakers who want to make the invisible visible. 
                Be among the first to experience what's next for migraine care and help shape the future with your insights.
              </p>
              <p>
                Sign up now to secure your spot.
              </p>

              <form
                action="https://space.us2.list-manage.com/subscribe/post"
                method="POST"
                target="_blank"
                noValidate
                className="mt-12 space-y-8"
              >
                <input type="hidden" name="u" value="21828ca842c8b79b81f1b21d2" />
                <input type="hidden" name="id" value="8d32120fc0" />

                <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 gap-4">
                  <div className="mr-4">
                    <label
                      htmlFor="joinus-FNAME"
                      className="block text-base font-medium mb-2 text-primary text-left"
                    >
                      First Name
                    </label>
                    <input
                      id="joinus-FNAME"
                      name="FNAME"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="mr-4">
                    <label
                      htmlFor="joinus-LNAME"
                      className="block text-base font-medium mb-2 text-primary text-left"
                    >
                      Last Name
                    </label>
                    <input
                      id="joinus-LNAME"
                      name="LNAME"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="joinus-EMAIL"
                    className="block text-base font-medium mb-2 text-primary text-left"
                  >
                    Email Address
                  </label>
                  <input
                    id="joinus-EMAIL"
                    name="EMAIL"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="text-center pt-4">
                  <Button type="submit">
                    JOIN OUR COMMUNITY
                  </Button>
                </div>
              </form>

              <p className="text-xs text-center text-gray-400">
                We take your privacy seriously and will always handle your information with care.
              </p>
            </div>
          </PageContentWrapper>
        </main>

        <Footer />
      </div>
    </div>
  )
}
