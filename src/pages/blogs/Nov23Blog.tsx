import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageContentWrapper from "../../components/PageContentWrapper";
import { Link } from "react-router-dom";

function Nov23Blog() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dknulbme8/image/upload/t_Grayscale/qcxon3z2kqbpeego4cap")',
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
              5 Tips to Help You Navigate Thanksgiving
            </h1>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <h2 className="text-1xl md:text-2xl font-bold mb-4 text-primary">
                  Migraine at work. It's more than just a health issue
                </h2>
                <p>
                  This week, the holiday season kicks off with family gatherings, turkey dinners, a few (too many?) glasses of
                  holiday cheer, copious amounts of dessert, and a day of navigating the Black Friday crowds to start your
                  holiday shopping. It’s a time of year that most people look forward to with excitement and anticipation,
                  but when you live with migraine, the festivities can be a minefield of triggers, stressors, and surprises.
                </p>
                <br />
                <p>
                  So how can you make it to all those holiday office parties, family dinners and gift exchanges?
                  Honestly, you might not, and that’s part of taking care of yourself. But if you’re in the mood to don your
                  favorite party outfit or whip up a gourmet meal for a crowd, we’ve got a few simple strategies
                  (and an{" "}
                  <a
                    href="https://mcusercontent.com/21828ca842c8b79b81f1b21d2/images/0e31e0f3-d359-6fdb-1822-b19451fd56ee.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >
                    awesome cheat sheet
                  </a>{" "}
                  ) that can help you make the most of the holiday season while reducing the
                  likelihood of a migraine.
                </p>
              </div>

              <div>
                <br />
                <ul className="list-disc list-outside pl-6 space-y-2">
                  <li>
                    <strong>Dial down the stress</strong>
                    <br />
                    Whether you're hosting everyone for a turkey dinner with all the trimmings or
                    flying across the country for a whirlwind weekend of family, friends and food,
                    celebrating Thanksgiving can be stressful. Almost 70% of people with migraine identify{" "}
                    <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3475609/#R13:~:text=Stress%20as%20a%20trigger%20for%20migraine%20attackes%20is%20present%20in%20nearly%2070%25%20of%20individuals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-hover transition-colors duration-200"
                    >
                      stress as a trigger
                    </a>{" "}
                    . Make things easier on yourself; you deserve it.
                    Plan or prep meals in advance, ask others to bring a dish, set a start and end time for
                    gatherings, and build in buffers so you're not rushing.
                  </li>

                  <li>
                    <strong>Watch what you eat and drink</strong>
                    <br />
                    If you say, "Oh, it's the holidays! I'll make an exception and indulge just this once," then the holidays
                    may not be so merry and bright. Food and alcohol are well-known{" "}
                    <a
                      href="https://www.migrainedisorders.org/migraine-safe-foods-by-category/#:~:text=of%20our%20guide!-,Migraine%20Safe%20Foods%20and%20Potential%20Triggers%20by%20Category,-Category"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-hover transition-colors duration-200"
                    >
                      triggers for migraine
                    </a>{" "}
                    so you might want to take a pass on that charcuterie board and opt for your favorite safe snack and a mocktail
                    instead.
                  </li>

                  <li>
                    <strong>Sleep is sacred</strong>
                    <br />
                    No matter where you are for the holidays, try to{" "}
                    <a
                      href="https://migrainetrust.org/live-with-migraine/self-management/migraine-and-sleep/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-hover transition-colors duration-200"
                    >
                      maintain a consistent sleep schedule
                    </a>{" "}
                    . That means sticking to your bedtime routine, not staying up late and getting the right amount of sleep.
                    If you can, keep familiar sleep items handy like your favorite pillow, a sleeping mask and ear plugs.
                    Make sure to build rest into your plans and nap strategically.
                  </li>

                  <li>
                    <strong>Avoid sensory overload</strong>
                    <br />
                    Holiday spaces can be a sensory circus. Bright lights, loud chatter, strong scents, and crowds can all
                    trigger migraine. If holiday lights are too bright or flashing, try wearing tinted glasses (yes, you might
                    look like a celebrity avoiding paparazzi). Ask to dim lights if you need to, switch seats to escape strong
                    fragrance, and slip away to a quieter spot to reset when noise ramps up.
                  </li>

                  <li>
                    <strong>Practice self-care</strong>
                    <br />
                    Schedule "me time" for activities like{" "}
                    <a
                      href="https://americanmigrainefoundation.org/resource-library/yoga-and-migraine/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-hover transition-colors duration-200"
                    >
                      yoga
                    </a>
                    ,{" "}
                    <a
                      href="https://americanmigrainefoundation.org/resource-library/breathing-exercises-for-migraine/#:~:text=best%20extent%20possible.%E2%80%9D-,Breathing%20Exercises%20for%20Migraine,-To%20practice%20paced"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-hover transition-colors duration-200"
                    >
                      deep breathing exercises
                    </a>{" "}
                    , or{" "}
                    <a
                      href="https://americanmigrainefoundation.org/resource-library/migraine-and-exercise-benefits/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-hover transition-colors duration-200"
                    >
                      walks
                    </a>{" "}
                    to recharge your emotional batteries. The migraine brain thrives on consistency, so be
                    intentional about sticking to your routines. Just as important: speak up about what you need.
                    It might feel awkward at first, but doing so can make the experience better for everyone.
                    Every small boundary can go a long way in reducing migraine triggers.
                  </li>
                </ul>
              </div>

              <div>
                <p>
                  However you spend the holiday, we hope these small shifts help you enjoy more of what matters.
                  We wish you a lovely holiday season!
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Link
                to="/blog"
                className="text-link hover:text-hover transition-colors duration-200 font-bold"
              >
                ← View All Feed
              </Link>
              <Link
                to="/all-blogs"
                className="text-link hover:text-hover transition-colors duration-200 font-bold"
              >
                View All Blogs →
              </Link>
            </div>
          </PageContentWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Nov23Blog;

