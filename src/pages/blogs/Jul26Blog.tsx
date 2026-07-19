import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageContentWrapper from "../../components/PageContentWrapper";
import { Link } from "react-router-dom";

function Jun26Blog() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/migraine-n-weather.png")',
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
              Migraine and Weather: What the Forecast Already Knows
            </h1>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <p>
                  You know it in your body. The sky shifts before a storm, the air thickens with smoke, a heat wave settles in, and something changes. You brace for it. You rearrange your plans. You hope you're wrong.</p> 
                <br />
                <p>
                  For a long time, the connection between weather and migraine was treated as a quirk, something individual people reported but that science hadn't fully confirmed. That's changing. A growing body of research is showing that weather-related factors, including barometric pressure, temperature, air quality, and the more extreme conditions tied to a warming climate, can affect how often and how severely migraine attacks occur. The picture is becoming clearer, even if it's still incomplete.                
                </p>
                <br />
                        
              </div>
            </div>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  What Your Brain Is Reacting To
                </h2>
                <p>
                  More than one in three people with migraine report that weather changes affect their symptoms. The most commonly studied factor is barometric pressure, which is the weight of the air around us. When pressure drops, as it often does before a storm or a weather front, some people with migraine feel it before anything shows up on the radar.
                </p>
                <br />
                <p>
                  Why does this happen? Researchers are still studying the exact mechanism. 
                   {" "}<a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4684554/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >One possibility is
                  </a>
                  {" "}that changes in pressure may affect the sinus cavities and inner ear, or may influence blood vessel activity in the brain. 
                   {" "}<a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8088284/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >Other research
                  </a>
                  {" "}points to serotonin, a chemical messenger involved in memory, learning, mood, sleep, and migraine biology.  Shifts in atmospheric pressure may affect how the body regulates serotonin.
                </p>
                <br />
                <p>A {" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12617017/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  > 2025 review 
                  </a>
                  {" "}
                  found that changes in barometric pressure were consistently associated with migraine across multiple studies. Rapid shifts in pressure, particularly falling pressure, appear to correspond with increased attacks.
                </p>
                <br />
                <p>
                  Temperature is another piece of the picture. In 2024, 
                  {" "}
                  <a
                    href="https://www.nationalgeographic.com/health/article/migraines-climate-change-weather-heat-pressure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >research found 
                  </a> 
                  {" "}that for every 10°F (5.5°C) increase in outdoor temperature, there was a 6% increase in the occurrence of headache that day. 
                </p>
                <br />
                <p>
                  Levi, a young man with migraine, puts it plainly: “I think a lot of people might overlook [migraine] in men. But that could also be men being stubborn and not getting diagnosed.” 
                  {" "}<a
                    href="https://www.ynetnews.com/health_science/article/rkrlcy0vlx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >Humidity plays a role too
                  </a>: a 2024 study found that a roughly 26% rise in humidity correlated with a 28% increase in the likelihood of migraine, particularly between April and September. 
                </p>
                <br />
                <p>
                  These aren't one-to-one relationships. Weather rarely acts alone. For many people, it works more like a threshold: stress, sleep changes, bright light, dehydration, and a pressure drop may all stack together. One factor on its own might not be enough, but together they push the nervous system over the edge. The weather doesn't cause migraine. It helps create the conditions for one to occur.
                </p>
                <br />


              </div>

              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  Climate Change and Migraine
                </h2>
                <p>
                  Heat, pressure shifts, humidity, air pollution, and wildfires are becoming more common and more intense as the climate changes. 
                  <a
                    href="https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(24)00087-5/abstract"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >A 2024 review of more than 300 studies
                  </a> 
                  {" "}looked at how climate change affects health conditions including migraine. The researchers concluded that worsening climate conditions may affect migraine in two ways: people who already have migraine may have more frequent attacks, and more people may develop migraine over time.
                </p>
                <br />
                <p>
                  This matters because when weather and climate affect your migraine, it can change how you understand what is happening in your body. It is not a personal failing or a body that simply won't cooperate. Your nervous system is responding to conditions around you that are real, external, and often outside your control.
                </p>
                <br />
              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  Why Weather-Related Migraine Gets Missed
                </h2>
                <p>
                  There's still a gap between what people with migraine report experiencing and what gets systematically addressed in care. Part of that gap is due to the fact that weather contains many overlapping variables: pressure, temperature, humidity, light, wind, and air quality often shift together. That makes it difficult for studies to isolate which factor is doing what. 
                </p>
                <br />
                <p>
                  This complexity has slowed the gathering of scientific data around migraine and weather. In addition, it has sometimes led people to interpret mixed findings as proof that the connection is not real, rather than evidence that the connection is hard to measure.
                </p>
                <br />
                <p>
                  Even when weather is recognized as a trigger category, clinical guidance hasn't fully caught up. There is still no standard protocol for helping people identify, plan for, or manage weather-related migraine patterns.
                </p>
                <br />
                <p>
                  Weather-related migraine can be hard to talk about in a medical appointment. You might say “I always get worse before storms,” or “Smoke season makes my migraine unbearable.” That information may get noted or it may be set aside. 
                </p>
                <br />
              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  A Condition That Deserves Environmental Recognition
                </h2>
                <p>
                  For a long time, migraine has been framed mostly as something happening inside the body: genetics, hormones, lifestyle, stress, psychology. Those factors matter, but they are not the whole story. The world outside your body matters too. The pressure in the atmosphere, the particles in the air, the heat of a July afternoon, the wildfire smoke that lingers in the sky. These are part of the migraine story, too.
                </p>
                <br />
                <p>
                  Of course, broader environmental changes require collective action. No single person can control the weather, clean the air, or reverse climate change on their own. But recognizing  environmental triggers still matters. It matters for how you manage your care, communicate with providers, and make sense of your own experience.
                </p>
                <br />
              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  How Kōkūn Can Help
                </h2>
                <p>
                  At Kōkūn, we believe that understanding migraine fully means understanding the world it lives in. If your attacks are shaped by the air you breathe, the pressure in the atmosphere, the heat outside your window, or the smoke in the sky, that's part of your story. It belongs in research, in clinical conversations, and in community discussions. 
                </p>
                <br />
                <p>
                  When people share what they're noticing, track what's changing, and connect with others who recognize the same patterns, individual experiences become something larger. Migraine and environment have always intersected. We’re here to make that connection visible, study it, and push for it to be taken seriously. 
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

export default Jun26Blog;
