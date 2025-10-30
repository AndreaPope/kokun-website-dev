import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageContentWrapper from '../components/PageContentWrapper';

function BlogPage() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dknulbme8/image/upload/t_Grayscale/qcxon3z2kqbpeego4cap")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="fixed inset-0 z-10 bg-black/25" />

      <div className="relative z-20">
        <Navigation />

        <main className="min-h-screen px-4 pb-24 pt-40 md:pt-48">
          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white font-display">
              From Stigma to Support: What You Can Do About Migraine at Work
            </h1>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  Migraine at work. It's more than just a health issue
                </h2>
                <p>
                  Did you know migraine is one of the{' '}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/33882816/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-hover underline"
                  >
                    most common
                  </a>{' '}
                  neurological conditions? But despite how common it is, it remains poorly understood, especially in the workplace. Roughly{' '}
                  <a
                    href="https://www.ajmc.com/view/estimating-the-economic-burden-of-migraine-on-us-employers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-hover underline"
                  >
                    one in five
                  </a>{' '}
                  workers in the U.S. lives with migraine. And to make matters worse, it{' '}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/12085478/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-hover underline"
                  >
                    often peaks
                  </a>{' '}
                  during prime career years. Because women are{' '}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7642465/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-hover underline"
                  >
                    three to four times more likely
                  </a>{' '}
                  to experience migraine than men, treating it as "just a health issue" misses important equity implications. When a condition is invisible, misunderstanding fills the gap. That misunderstanding can quietly shape how people are treated, creating small daily barriers that make it harder to do their best work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  Stigma costs us all
                </h2>
                <p>
                  Stigma keeps people quiet, and that silence shuts down support. Many people push through migraine attacks because they feel they have no choice.{' '}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/30739216/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-hover underline"
                  >
                    More than half
                  </a>{' '}
                  of those who miss work because of a headache don't share the real reason, and{' '}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/18617829/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-hover underline"
                  >
                    only about 22%
                  </a>{' '}
                  of employers believe migraine is a valid reason to stay home. This shows us that the issue is a lack of awareness and support, not a lack of commitment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  How did we get here?
                </h2>
                <p>
                  Skepticism about migraine has deep roots.{' '}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11396411/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-hover underline"
                  >
                    For centuries
                  </a>
                  , women's symptoms were labeled as signs of fragility or emotional instability, while men with similar experiences were described as simply overworked. Early research often reflected those same biases, and traces of that thinking remain today. Migraine is still too often minimized or dismissed, especially since most people living with migraine are women.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  When bias shows up in everyday ways, here's how to respond
                </h2>
                <p>
                  Stigma rarely looks like open criticism. More often, it hides in everyday routines and policies that quietly make work harder than it needs to be. That is why advocating for yourself matters. The encouraging news is that most changes that support people with migraine are simple and low cost. Many cost nothing, and the{' '}
                  <a
                    href="https://www.dol.gov/agencies/odep/ada/MythsandFacts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-hover underline"
                  >
                    rest average around $500
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  Small adjustments can make a big difference
                </h2>
                <p>
                  Softer or filtered lighting, an anti-glare screen, a quiet space to step away, fragrance-smart practices, or the option to work remotely all help reduce triggers and make work more manageable. These are not special favors. They are practical ways to create a healthier workplace for everyone, harnessing the "curb-cut effect," where removing barriers for one group ends up improving the environment for all.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  Ready to take action? Start here
                </h2>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <strong>Track what matters.</strong> Keep a simple record of your triggers, symptoms, and which tasks are most affected.
                  </li>
                  <li>
                    <strong>Prepare one clear ask.</strong> Try framing it this way: "Here's what helps me do my best work when symptoms flare: [lighting change, quiet space, short break, flexible start time]."
                  </li>
                  <li>
                    <strong>Optimize your setup.</strong> Make small changes now: adjust lighting and screen settings, use an anti-glare filter, reduce noise, and avoid fragrance.
                  </li>
                  <li>
                    <strong>Request support early.</strong> Reach out to your manager or HR with the tasks impacted and the specific adjustments that would help.
                  </li>
                  <li>
                    <strong>Know your rights.</strong> If you qualify under the{' '}
                    <a
                      href="https://askjan.org/disabilities/Migraines.cfm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-hover underline"
                    >
                      ADA
                    </a>
                    , your employer must engage in an interactive process to find reasonable accommodations.
                  </li>
                  <li>
                    <strong>Use your benefits.</strong> Look into health plan resources like specialty care, virtual visits, or migraine screening tools.
                  </li>
                  <li>
                    <strong>Promote awareness.</strong> Suggest adding migraine-smart practices to team trainings or Employee Resource Group events.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  The larger lesson
                </h2>
                <p>
                  Stigma may be rooted in systems, but change can start with you. Asking questions, making small adjustments, and keeping track of what works are practical ways to make progress. Each time someone replaces doubt with thoughtful design—one conversation, one light filter or one flexible hour at a time—everyone benefits. People can show up at their best and workplaces become fairer, stronger, and more humane.
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

export default BlogPage;
