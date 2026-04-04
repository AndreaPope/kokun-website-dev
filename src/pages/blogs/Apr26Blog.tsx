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
          backgroundImage: 'url("/images/whole_picture.png")',
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
              Migraine: The Whole Picture
            </h1>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <p>
                  Migraine often exists alongside other conditions — what clinicians call “comorbidities.” 
                  But those connections aren’t always recognized in care, which can leave us piecing things together 
                  on our own. So how do we begin to see the full picture?
                <br />
                </p>
                <br />
              </div>
            </div>

            <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  What often shows up with migraine
            </h2>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <p>
                  <a
                    href="https://americanmigrainefoundation.org/resource-library/comorbidities-of-migraine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >Migraine rarely exists in isolation.
                  </a>{" "}
                  Many people notice patterns that extend beyond head pain, sometimes affecting mood, 
                  digestion, 
                  sleep, and other parts of the body.

                </p>
                <br />
                <p>
                  Depression and anxiety are among the most common. People with migraine are significantly more 
                  likely to experience both,<sup>[2]</sup> which can shape how symptoms show up day to day.
                </p>
                <br />
                <p>
                  For some, the pattern includes conditions like endometriosis. Research suggests that p
                  eople 
                  with endometriosis face a higher likelihood of experiencing migraine as well.<sup>[3]</sup>
                </p>
                <br />
                <p>
                  If your migraine seems to show up along with digestive issues, there may be a connection. 
                  Conditions like IBS often overlap with migraine, and people with migraine are more than 
                  twice as likely to experience IBS. One possible explanation is the gut-brain connection — the 
                  close link between the digestive system and the brain.<sup>[4]</sup>
                </p>
                <br />
                <p>
                  You may also notice widespread pain or sensitivity. Conditions like fibromyalgia frequently 
                  overlap with migraine, and in many cases, each can make the other feel more intense.<sup>[5]</sup>
                </p>
                <br />
                <p>
                  Sleep is another important piece of the picture. Sleep disorders and migraine are closely linked, 
                  and the relationship goes both ways: poor sleep can trigger migraine attacks, and migraine can 
                  make it harder to get restful sleep.<sup>[6]</sup>
                </p>
                <br />                
                <p>
                  You may also notice patterns related to stress or body mechanics. For some, factors like chronic 
                  stress or hypermobility can play a role in how symptoms show up and interact, sometimes alongside 
                  nervous system issues like dysautonomia.<sup>[7]</sup>
                </p>
                <br />

              </div>

              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  Why these connections exist
                </h2>
                <p>
                  One possible reason for these overlaps is something called central sensitization. 
                  In simple terms, it means the nervous system becomes more sensitive over time, making it easier 
                  for pain and other symptoms to show up across different parts of the body.<sup>[8]</sup>
                </p>
                <br />
                <p>
                  It doesn’t explain everything. But it helps make sense of why conditions like migraine, 
                  fibromyalgia, and IBS can be so closely linked, and why symptoms that seem unrelated may actually 
                  be part of the same bigger picture.
                </p>
                <br />

              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  What this means
                </h2>
                <p>
                  Symptoms that seem unrelated may actually be part of a larger pattern. When you start to look at 
                  them together instead of separately, it can change the kinds of questions you ask, and the care 
                  you receive. For many people, treatment works best when migraine is addressed alongside factors 
                  like sleep, mood, fatigue, or digestive and pelvic symptoms. 
                </p>
                <br />
              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  Closing the knowledge gap
                </h2>
                <p>
                  Not all doctors receive the same training on conditions associated with migraine. 
                  Headache and pain specialists tend to be aware of these connections, but primary care physicians, 
                  OB/GYNs, and other migraine providers may not be. 
                </p>
                <br />
                <p>
                  Continuing education can help close the gap, but new research is emerging faster than doctors can 
                  be trained on it. So when you bring up a condition that feels connected to your migraine, 
                  you may find that those connections aren’t always immediately recognized.
                </p>
                <br />
                <p>
                  If your symptoms feel connected, it’s worth paying attention to what you’re noticing and 
                  bringing it into the conversation.That might look like asking questions, seeking a second opinion, 
                  or connecting with a specialist. You don’t need to have the full explanation. If something feels 
                  related, it’s always worth bringing it up.
                </p>
                <br />
              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  A more complete picture
                </h2>
                <p>
                  The more we understand how migraine connects to other conditions, the easier it becomes to make 
                  sense of our own experiences. You can share what you’re noticing with your doctors. 
                  Sometimes that leads to more connected care. But just as importantly, you can begin to understand 
                  yourself.
                </p>
                <br />
                <p>
                  It can start with simply noticing what’s happening in your body, and sharing that with others, 
                  including your care team. Connecting the dots in this way helps build a more complete picture of 
                  what migraine really looks like. 
                </p>
                <br />
                <p>
                  At Kōkūn, we believe those connections and our shared experiences matter. They’re how we move 
                  toward care that reflects the full reality of living with migraine. When those experiences are 
                  shared, patterns begin to emerge, helping us move closer to better care.
                </p>
                <br />
              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  Sources
                </h2>
                <p>
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10251688/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >[1] Systematic review and meta-analysis of calculating degree of comorbidity of irritable bowel syndrome with migraine. 
                  {" "}
                  </a>{" "}
                </p>
                <br />
                <p>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/41668695/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >[2] Migraine epidemiology, comorbidities and therapeutic landscape: a national 
                  population-based study.
                  </a>{" "}
                </p>
                <br />

                <p>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/40247158/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >[3] The association between endometriosis and migraine: a systematic review and 
                  meta-analysis of observational studies.  
                  </a>{" "}
                </p>
                <br />
                <p>
                   <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3008936/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >[4] Comorbidities of Migraine. 
                  </a>{" "}
                </p>
                <br />
                <p>
                   <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12318483/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >[5]The Correlation Between Migraine Frequency and Sleep Disturbances in Adults: 
                  A Cross-Sectional Study.
                  </a>{" "}
                </p>
                <br />
                <p>
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11581963/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >[6]Headache disorders in patients with Ehlers-Danlos syndromes and hypermobility spectrum disorders.
                  </a>{" "}
                </p>
                <br />                
                <p>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/36101891/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >[7]Central Sensitization in Migraine: A Narrative Review.
                  </a>{" "}
                </p>
                <br />

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
