import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageContentWrapper from "../../components/PageContentWrapper";
import { Link } from "react-router-dom";

function Jan26Blog() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/heartleaf.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="fixed inset-0 z-10 bg-black/25" />

      <div className="relative z-20">
        <Navigation />

        <main className="min-h-screen px-4 pb-24 pt-40 md:pt-48">
          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-8 text-white font-display">
              From Misunderstanding to Insight
            </h1>
            <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  The Roots of Inequity
            </h2>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <p>
                  Migraine is a neurological condition with a long history. And an equally long-standing 
                  history of being misunderstood.
                </p>
                <br />
                <p>
                  In the late 19th century, cultural beliefs about gender and class shaped how migraine was interpreted. 
                  <a
                    href="https://digitalcommons.providence.edu/cgi/viewcontent.cgi?article=1077&context=sbg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >
                    [1]
                  </a>{" "}
                   Women were labeled “nervous” or hysterical, their attacks dismissed as psychological fragility. 
                   Men, meanwhile, were more often given physical explanations such as stress and overexertion 
                   and told to rest. 
                   <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11396411/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >
                    [2]
                  </a>{" "}
                   The science was incomplete, but the bias was clear. 
                </p>
                <br />
                <p>
                  Those early narratives didn’t just reflect misunderstanding; they reinforced it. And the ripple 
                  effects of that bias still shape who gets believed, who gets studied, and who gets appropriate 
                  care today.
                </p>
                <br />
              </div>

              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  Pervasive Stereotypes
                </h2>
                <p>
                  Advances in neuroscience and clinical care have moved migraine medicine forward, but meaningful 
                  progress depends on who is included (or excluded) in research. 
                </p>
                <br />
                <p>
                  Migraine is still dismissed as “just a headache.” It is still framed as a “women’s disorder.” 
                  These stereotypes influence everything from funding priorities to diagnostic timelines. 
                  They shape how clinicians interpret symptoms and how individuals interpret their own pain.
                </p>
                <br />
                <p>
                  That framing has consequences for everyone. Women’s symptoms may be minimized or attributed to 
                  stress or hormones. Men, on the other hand, are less likely to recognize their symptoms as 
                  migraine at all, and healthcare providers may overlook it as a possibility. As a result, 
                  many men with migraine go undiagnosed or untreated. 
                  <a
                    href="https://americanheadachesociety.org/news/migraine-stigma-may-prevent-proper-diagnosis-and-treatment-in-men"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >
                    [3]
                  </a>{" "}
                </p>
                <br />
                <p>
                  We’re left with delayed diagnoses, under-treatment, and research that doesn’t always capture 
                  the full complexity of who migraine affects and how.
                </p>
                <br />
                <p>
                  Bias doesn’t only distort perception. It distorts data.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  Moving Forward
                </h2>
                <p>
                  By centering equity in migraine research, we have an opportunity to challenge assumptions and expand who gets represented in research.
                </p>
                <br />
                <p>
                  In recent years, more attention has been paid to how migraine affects women, including the role hormones play in symptom severity and flare-ups. That's an important correction. For decades, meaningful analysis of sex-based differences was missing.
                </p>
                <br />
                <p>
                  But progress is uneven. Many studies still fail to meaningfully separate or analyze data by sex. Even fewer account for differences across race, socioeconomic status, geography, or access to care. When we don’t examine this data, we miss critical patterns and lose out on opportunities for more precise, supportive treatment.
                </p>
                <br />
                <p>
                  Equity isn’t a trend in research. It’s a requirement for accuracy.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  Owning Our Care
                </h2>
                <p>
                  For much of history, migraine has been shaped by misunderstanding and gaps in care, often at the expense of the people living with it. That’s where we come in.
                </p>
                <br />
                <p>
                  By owning and sharing our realities, we can help shape better research and better care. The stigma and data gaps in migraine’s history are real, and they can be exhausting. But there’s also something powerful: the opportunity to transform lived reality into better understanding.
                </p>
                <br />
                <p>
                  When we track our symptoms, speak candidly about triggers, and share our experiences, we help build data that reflects the full diversity of people living with migraine. That kind of visibility strengthens research, sharpens care, and shifts systems.
                </p>
                <br />
                <p>
                  That’s the work we’re committed to at Kōkūn: turning lived experience into meaningful insight, and insight into better care. When we build tools and community around equity, we move closer to the breakthroughs our community deserves.
                </p>
                <br />
                <p>
                  Belonging leads to better data. Better data leads to better care.
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Link
                to="/blog"
                className="text-link hover:text-hover transition-colors duration-200 font-bold"
              >
                ← View All Posts
              </Link>
              {/* <Link
                to="/all-blogs"
                className="text-link hover:text-hover transition-colors duration-200 font-bold"
              >
                View All Blogs →
              </Link> */}
            </div>
          </PageContentWrapper>

        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Jan26Blog;
