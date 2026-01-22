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
          backgroundImage: 'url("/images/Gemini_Metallic_Bursts.png")',
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
            <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold mb-8 text-white font-display">
              Connection, Reimagined
            </h1>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <p>
                  Loving someone while living with migraine means building a connection
                  rooted in flexibility, tenderness, and the courage to ask for
                  support. It means saying &quot;I&apos;m sorry&quot; more than
                  feels fair, canceling plans you wanted to keep, and lying in a
                  dark room while the person you love eats dinner alone in the
                  next room. It means wondering, sometimes quietly, if you&apos;re
                  worth the extra effort.
                </p>
                <br />
                <p>
                  If you&apos;ve been there, you&apos;re not alone. And if
                  you&apos;ve ever felt like migraine is slowly eroding a
                  relationship you care about, it&apos;s worth knowing that the
                  research tells a more hopeful story than you might expect.
                </p>
                <br />
                <p>
                  Before every plan, there&apos;s a calculation. Will I have
                  enough energy? Will the restaurant be too loud? If I push
                  through tonight, what will tomorrow cost me? You run these
                  numbers constantly, adjusting expectations before anyone else
                  notices. And then there&apos;s the other math: how many times
                  can I cancel before it becomes a problem? How much can I ask
                  for before it becomes a burden?
                </p>
                <br />
                <p>
                  These questions don&apos;t have answers, but they take up space
                  in every relationship migraine touches.
                </p>
              </div>

              <div>
                <h2 className="text-1xl md:text-2xl font-bold mb-4 text-primary">
                  The weight of being doubted
                </h2>
                <p>
                  One of the hardest parts of migraine in relationships isn&apos;t
                  the pain itself. It&apos;s the fear that the person you love
                  doesn&apos;t fully understand.
                </p>
                <br />
                <p>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/27132088/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >
                    In one study
                  </a>
                  , nearly 44 percent of people with chronic migraine felt their
                  partner doubted the severity of their symptoms. That doubt
                  doesn&apos;t always sound like an accusation. Sometimes
                  it&apos;s a sigh. A silence. A question that starts with
                  &quot;again?&quot;
                </p>
              </div>
              <div>
                <h2 className="text-1xl md:text-2xl font-bold mb-4 text-primary">
                  What support looks like
                </h2>
                <p>
                  Support isn&apos;t about them fixing the pain or having all the
                  answers. It&apos;s enjoying their presence without feeling
                  pressure. It&apos;s being believed without needing proof.
                  It&apos;s flexibility without resentment.
                </p>
                <br />
                <p>
                  The couples who navigate migraine well tend to approach it as a
                  shared reality rather than one person&apos;s problem. This might
                  look like a partner who learns your early warning signs, who
                  knows when to offer help and when to simply stay close, who
                  asks &quot;How can I support you?&quot; instead of
                  &quot;Why can&apos;t you…?&quot;
                </p>
                <br />
                <p>
                  Some couples develop shorthand for hard days: a word or signal
                  that means &quot;I&apos;m not okay but I don&apos;t need to
                  explain right now.&quot; That kind of understanding doesn&apos;t
                  happen overnight. But when it&apos;s there, it changes
                  everything.
                </p>
              </div>
              <div>
                <h2 className="text-1xl md:text-2xl font-bold mb-4 text-primary">
                  The larger truth
                </h2>
                <p>
                  Migraine doesn&apos;t pause for love, and you shouldn&apos;t
                  have to earn it by pretending you&apos;re fine.
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/31407321/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >
                    Nearly 17 percent
                  </a>{" "}
                  of people with migraine say the condition has contributed to
                  relationship strain. But the other 83 percent are finding ways
                  to make it work. Not by pushing through, but by building
                  relationships where their needs are understood rather than
                  managed.
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
