import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageContentWrapper from "../../components/PageContentWrapper";
import { Link } from "react-router-dom";

function May26Blog() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/momNchild.png")',
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
              Migraine and Motherhood
            </h1>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <p>
                  If you’re a mom with migraine, here’s a truth you’ve probably discovered: living with migraine means your family lives with it too. It shapes how you show up as a parent, and how your family adapts because of it. 
                </p> 
                <br />
                <p> 
                  Motherhood asks us to hold a lot at once. When migraine is part of the equation, there’s even more to balance. It’s hard not to feel the weight of how your kids have to adapt when you have to step back.  It can raise questions you don’t always have answers for, like how it affects them, and how to handle it in a way that works for your family. We’re here to help you make sense of that, with concrete, actionable ways you can care for both yourself and your kids.
                <br />
                </p>
                <br />
              </div>
            </div>

            <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  Why Migraine can be Different in Motherhood
            </h2>

            <div className="space-y-8 text-lg md:text-xl">
              <div>
                <p>
                  <a
                    href="https://www.mdpi.com/2075-1729/14/10/1224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >Migraine affects almost one in five women of reproductive age
                  </a>
                  , and {" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/21631471/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >recent research shows the numbers may be even higher
                  </a>
                  . Hormones play a significant role here. Migraine often worsens 
                  around your period, improves for many during pregnancy as estrogen
                   rises and stabilizes, and then returns postpartum as levels drop 
                   again.
                  {" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/12662187/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >For more than half of women, migraine comes back within the first month after birth
                  </a>
                  .{" "}
                  <a
                    href="https://americanmigrainefoundation.org/resource-library/what-to-know-about-migraine-while-breastfeeding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >Breastfeeding may help
                  </a>
                  , since it keeps estrogen levels more stable and can 
                  delay the return of your period.

                </p>
                <br />
                <p>
                  These shifts mean that for many mothers, migraine changes across different stages of motherhood, sometimes in ways that are hard to predict.
                </p>
                <br />

              </div>

              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  What Migraine Looks Like in Real Life
                </h2>
                <p>
                  Even if your migraine didn’t change when you became a mom, motherhood can change how you experience it. If 
                  you’re a parent who stays home with kids, the weight of caregiving with migraine can be extra difficult to 
                  carry. When you’re the one who’s supposed to be the caregiver, it can be tricky, both logistically and emotionally, 
                  to need care yourself. You might also worry about migraine’s impact on your kids, and how they view and respond to it. If 
                  you’re also working, that adds another layer of challenge to your migraine landscape.
                </p>
                <br />
                <p>
                  This can all feel heavy. Before kids, you were managing symptoms. Now you’re also 
                  managing unpredictability in a role that depends on consistency. Understanding the 
                  full picture of how migraine affects family life is the first step toward changing 
                  how we approach migraine and motherhood. With that foundation, you can build a 
                  support system, help your kids understand you’re all in this together, and take 
                  steps to protect your health.
                </p>
                <br />

              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  What You Can Do About It
                </h2>
                <p>
                  <b>Talk with your kids about migraine.</b> Help them understand what’s happening 
                  and what you need. Even younger children can understand simple, clear explanations, and as kids 
                  get older, you can share more detail. When you’re transparent and vulnerable about what’s going on, it 
                  helps kids to feel less fearful and confused about their mom being in pain. Enlisting your kids to help 
                  can also give them agency in a situation that might make them feel out of control. They can take care of 
                  you, like you take care of them. You can have them get you a cold pack or turn off the lights. Older 
                  children can help with tasks around the house while you rest. 
                </p>
                <br />
                
                <p>
                  <b>Be prepared.</b> As a mom, you’re probably already a master of organization, 
                  but here are a few specific tactics that can help when a migraine hits. Let your kids 
                  know what to expect when you have migraine. Plan activities they can easily do, 
                  like arts and crafts, and make sure they can easily access the materials they need. 
                  It will help ease your mind, and theirs too, to have a consistent plan so they know what 
                  will happen when you’re not feeling good. Also, talk to your partner about what you need 
                  when you’re experiencing migraine, and work together to figure out what the kids 
                  might need during those times. At a time when you’re feeling well, have a “family 
                  meeting” where you all agree on a plan that promotes structure, sleep, and time 
                  to transition between activities. 
                </p>
                <br />
                <p>
                  <b>Tailor your migraine solutions to your kids’ ages. </b> 
                  While you can probably take a baby into a dark quiet room with you, a toddler may need more stimulation. If you need to give the kids more screen time than you usually do, don’t feel guilty: you’re doing the best you can for right now. If you have teens, managing their mood shifts adds another layer to dealing with your migraine. Structure and predictability is just as important in a house with teens as a house with younger kids. 
                </p>
                <br />
                <p>
                  <b>Prepare your own oxygen mask. </b> 
                  Part of being prepared also involves preparing yourself. As the saying goes, putting on your oxygen mask first means you’re able to help others. Put your meds somewhere easily accessible and make sure you have some on hand when you’re out of the house. Gather other supplies you might need, such as ice packs, and consider having multiples in different areas of your living space. If you need to contact your workplace to let them know you can’t come in or are stepping away from your desk, have a pre-written message ready to send so you don’t have to look at a screen for too long. 
                </p>
                <br />
                <p>
                  <b>Build your community. </b> 
                  A close circle of friends and family is beneficial in so many ways, but especially when you need help. Having people you can call when a migraine hits will help you, and your kids, feel like you’re not going it alone. You’ll be able to get much-needed rest, which could help prevent future migraine attacks. Some supports to put in place could include creating a neighborhood text chain, setting up after-school care, carpools, or drivers to doctor’s appointments. Find places that allow flexibility when you need it, such as same-day drop-in childcare. 
                </p>
                <br />
                <p>
                If you don’t have a community in place or aren’t sure how to build one, one way to start is by looking into migraine-specific communities and support groups in your area, and build relationships with fellow migraine moms (or any other caregiver with migraine!). When you need help, you can call on them — and you can also offer them help when they need it. 
                </p>
                <br />


              </div>
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-primary">
                  How Kōkūn Can Help
                </h2>
                <p>
                  At Kōkūn, we want to make sure that mothers with migraine are seen, supported, and heard. When people share their experiences, track what they’re going through, and connect with others who get it, those individual stories start to form a clearer picture of what migraine actually looks like in real life.
                </p>
                <br />
                <p>
                  Migraine and motherhood have intersected in silence for generations. Let’s come together to change that. In the way families talk about it, plan for it, and support each other through it. You’re part of that shift.
                </p>
                <br />
                <p><i>
                  Some of these migraine-mom-friendly suggestions come from Sarah Rathsack’s article 
                  {" "}
                  <a
                    href="https://americanmigrainefoundation.org/resource-library/chronic-migraine-motherhood/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-hover transition-colors duration-200"
                  >Balancing Chronic Migraine & Motherhood
                  </a>.
                </i></p>
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

export default May26Blog;
