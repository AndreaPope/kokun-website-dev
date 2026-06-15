import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PageContentWrapper from '../components/PageContentWrapper';

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
  "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
  "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
  "Chile", "China", "Colombia", "Comoros", "Congo (DRC)", "Congo (Republic)",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
  "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
  "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
  "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe",
  "Other",
];

const MIGRAINE_TYPES = [
  'Migraine without aura',
  'Migraine with aura',
  'Migraine with brainstem aura',
  'Hemiplegic migraine',
  'Vestibular migraine',
  'Chronic migraine',
  'Hormonal or Menstrual migraine',
  'Abdominal migraine',
  'Cyclical Vomiting Syndrome',
  'I do not experience migraine',
  'I do not know the type',
  'Other',
  'Prefer not to share',
];

export default function EarlyAccessPage() {
  const [migraineType, setMigraineType] = useState('');
  const [migraineOther, setMigraineOther] = useState('');

  const migraineValue = migraineType === 'Other' ? migraineOther : migraineType;

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
                Managing migraine is exhausting in ways most people never see. That’s why we’re building the Kōkūn app.
              </p>
              <p>
                Designed to be your guide through it all, the app helps you make sense of your experience, spot patterns, take control of your care and hopefully, feel a little less alone in the process.
              </p>
              <p>
                This Fall, we're launching a part of this experience in private beta. And we’d love for you to be part of it.
              </p>
              <p>
                We're opening only 100 spots. So sign up now.
              </p>

              {/* Mailchimp Early Access form with tag "EarlyAccess" */}
              <form
                action="https://space.us2.list-manage.com/subscribe/post?u=21828ca842c8b79b81f1b21d2&id=8d32120fc0&f_id=0073fbe3f0"
                method="POST"
                noValidate
                className="mt-12 space-y-8"
              >
                {/* Apply EarlyAccess tag */}
                <input type="hidden" name="tags" value="1936702" />

                {/* Honeypot field for spam protection */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                  <input
                    type="text"
                    name="b_21828ca842c8b79b81f1b21d2_8d32120fc0"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="mce-FNAME" className="block text-base font-medium mb-2 text-primary">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="mce-FNAME"
                      name="FNAME"
                      required
                      className="text w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mce-LNAME" className="block text-base font-medium mb-2 text-primary">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="mce-LNAME"
                      name="LNAME"
                      required
                      className="text w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mce-EMAIL" className="block text-base font-medium mb-2 text-primary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="mce-EMAIL"
                    name="EMAIL"
                    required
                    className="required email w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mce-COUNTRY" className="block text-base font-medium mb-2 text-primary">
                    Country
                  </label>
                  <select
                    id="mce-COUNTRY"
                    name="COUNTRY"
                    defaultValue=""
                    className="text w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white [&>option]:bg-background [&>option]:text-white"
                  >
                    <option value="" disabled>Select a country...</option>
                    {COUNTRIES.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mce-MIGTYPE" className="block text-base font-medium mb-2 text-primary">
                    What type of migraine do you experience?
                  </label>
                  <input type="hidden" name="MIGTYPE" value={migraineValue} />
                  <select
                    id="mce-MIGTYPE"
                    value={migraineType}
                    onChange={e => setMigraineType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white [&>option]:bg-background [&>option]:text-white"
                  >
                    <option value="" disabled>Select an option...</option>
                    {MIGRAINE_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {migraineType === 'Other' && (
                    <input
                      type="text"
                      value={migraineOther}
                      onChange={e => setMigraineOther(e.target.value)}
                      placeholder="Please describe your migraine type..."
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mt-3"
                    />
                  )}
                </div>

                <p className="text-xs text-gray-400">
                  We take your privacy seriously and will always handle your information with
                  care. If you ever change your mind and want to opt out, just email us at{' '}
                  <a href="mailto:info@kokun.space" className="text-primary hover:text-hover">
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
