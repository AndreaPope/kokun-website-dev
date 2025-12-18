import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageContentWrapper from "../../components/PageContentWrapper";
import { Link } from "react-router-dom";

function Dec25Blog() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            'url("/images/Gemini_Metallic_Bursts.png")',
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
              The Invisible Effort of Showing Up
            </h1>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <p>
                  The holiday season brings more sensory stimulation, increased emotional pressure, and 
                  considerable disruptions to your routine. If you live with migraine, you’re constantly 
                  calculating how everyday choices might affect symptoms, triggers, and surroundings. 
                  During the holidays, all of these layers add to the invisible burden you already carry, 
                  and the number of decisions adds up quickly.
                </p>
                <br />
                <p>
                  What others can’t see is the quiet work you do before you even walk through the door. You think 
                  about lighting, noise levels, timing, travel, and whether there will be a place you can briefly 
                  step away to if symptoms build. You may also plan for explanations you hope you won’t have to 
                  give. None of this is visible, yet it shapes your entire experience of participating.
                </p>
              </div>

              <div>
                <h2 className="text-1xl md:text-2xl font-bold mb-4 text-primary">
                  The pressure to conform
                </h2>
                  <p>
                    <a
                      href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1129926/full"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-hover transition-colors duration-200"
                    >Studies 
                    </a>
                    {" "}on the experience of living with migraine reveal a clear pattern: people often push through 
                     symptoms to meet social expectations. Many{" "}
                    <a
                      href="https://bpspsychub.onlinelibrary.wiley.com/doi/10.1111/bjhp.12534"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-hover transition-colors duration-200"
                    >
                      minimize their needs 
                    </a>
                    {" "}during important gatherings because they don’t want to disappoint others. This pressure 
                    becomes especially salient during the holidays, when cultural norms require availability and 
                    enthusiasm.
                    </p>
                    <br></br>
                    <p>
                      For many people with migraine, this{" "}
                    <a
                      href="https://link.springer.com/article/10.1186/s10194-019-0993-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-hover transition-colors duration-200"
                    >
                      results in over-functioning
                    </a> 
                      . You might stay longer than feels comfortable, take on emotional labor to keep the peace, or feel pressure to 
                      join traditions that are harder to navigate when symptoms flare up. This doesn’t happen because of a lack of 
                      boundaries; it happens because conforming to tradition is rewarded over prioritizing self-care. 
                    </p>
              </div>
              <div>
                <h2 className="text-1xl md:text-2xl font-bold mb-4 text-primary">
                  Reimagining what it means to show up
                </h2>
                <p>
                  Showing up during the holidays can look different for everyone, and the way you do it doesn’t need to match 
                  anyone else’s. It can mean arriving later, leaving earlier, choosing a quieter role, or participating in a 
                  way that feels gentler for your body. Giving yourself permission to define what “being there” looks like can 
                  make the season more manageable and far less draining.
                </p>
                <br />
                <p>
                  We recognize that when we live with migraine,{" "}
                    <a
                      href="https://journals.sagepub.com/doi/10.1177/2150132720924874"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-hover transition-colors duration-200"
                    >
                      belonging can feel uncertain
                    </a>  
                  . Asking for accommodations can 
                  feel like we are putting potentially tenuous relationships at risk. But belonging shouldn’t depend on 
                  endurance. And you deserve support that allows you to show up as yourself.
                </p>
                <br />
                <p>
                  Most of us don’t want the holidays to feel like a performance. 
                  We want to feel understood. We want to know that our presence counts, even when it looks different from 
                  others’. When we honor our health and participate in ways that feel sustainable, the mental and emotional 
                  load becomes lighter.
                </p>
              </div>
              <div>
                <h2 className="text-1xl md:text-2xl font-bold mb-4 text-primary">
                  The larger lesson
                </h2>
                <p>
                  Migraine doesn’t pause for the holidays, and you shouldn’t feel pressured to act as if it does. 
                  The effort required to navigate the season is real, even when it’s unspoken. While understanding grows 
                  around us, we can start with small, intentional changes for a holiday experience that works better for us.
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

export default Dec25Blog;
