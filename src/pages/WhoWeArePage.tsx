import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import PageContentWrapper from '../components/PageContentWrapper'

const WhoWeArePage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            'url("/images/backlit_side_dandelion.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="fixed inset-0 z-10 bg-black/25" />
        </div>
        <div className="relative z-20">
          <Navigation />
          <div
            className="relative mt-20 w-full h-[30rem] items-start"
            style={{
              backgroundImage: 'url(/images/pexels-david-kouakou-536418893-30214684.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'top 35% left 0%',
              backgroundAttachment: 'scroll',
            }}
          >
            <div
              className={`absolute left-0 md:left-[-20%] bg-secondary h-[30rem] w-full md:w-[20%] transform transition-transform duration-1000 ease-out ${
                mounted ? 'translate-x-0 md:translate-x-[100%]' : 'translate-x-[-100%]'
              }`}
            />
            <div className="absolute inset-0 z-10 bg-black/25" />
            {/* <Whoweare /> */}

            <div className="absolute top-0 my-20 h-[20rem] w-[85%] md:w-[30%] bg-primary">
              <div className="my-[10rem] font-display text-white font-bold text-5xl ml-8 leading-tight ">
                Who We Are
              </div>
            </div>
          </div>

          <main className="min-h-screen pb-24 pt-40 md:pt-48">
            <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg min-h-screen max-h-auto">
              <div className="text-lg md:text-xl space-y-8 mb-48">
                <div className='space-y-8 text-lg md:text-xl'>
                    <div className='text-left space-y-4'>
                        <p className='mb-14'>
                            <span className='text-primary font-semibold text-4xl'> Kōkūn is making the invisible visible.</span>
                        </p>
                    <p className='text-lg md:text-xl'>
                        A groundbreaking nonprofit organization, founded in 2025, Kōkūn is reimagining how we understand health, by starting where medicine often stops. Around the world, millions of people live with chronic, misunderstood, and often invisible health conditions that medicine has overlooked for far too long. Starting with migraine – one of the most common yet misunderstood invisible conditions – we're changing that.
                    </p>
                    </div>
                    <div className='space-y-4'>
                        <span className='text-3xl lg:text-5xl font-semibold mb-2 text-white font-display'>Our mission</span>
                        <p className='text-lg md:text-xl'>
                            To help ​people with invisible conditions thrive ​by finding and delivering ​breakthrough insights at scale.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <span className='text-3xl lg:text-5xl font-semibold mb-2 text-white font-display'>Our vision

                            </span>
                        <p className='text-lg md:text-xl'>
                            We envision a world where​ invisible conditions are truly seen, understood, and healed​.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <span className='text-3xl lg:text-5xl font-semibold mb-2 text-white font-display'>
                            Founding story
                        </span>
                        <p className='text-lg md:text-xl'>
                            <span>
                            When Sangita Jayaraman was pregnant with her daughter, she began getting migraine attacks every week. With no medications that could help, she could only find solace in a dark room with ice packs until the headache eased.
                            </span>
                            <br/><br/>

                            <span>Six months after her beautiful baby was born, she suddenly lost her vision. Panicked, she rushed to the ER. After thirteen hours and countless tests, she was told she had a deep migraine. This happened every 6-9 months.</span>
                            <br/><br/>

                            <span>
                            She never imagined things could get worse, but then she started getting daily headaches, each preceded by sudden blurring of vision. Each migraine day forced her to pause and figure out why she wasn’t getting better. That search became an investigation, and eventually, a mission.
                            </span>
                            <br/><br/>

                            <span>  
                            For more than two decades, Sangita had led teams, built products, and solved complex problems in the high tech world. Now she turned that same mindset toward making a dent with migraine. What she uncovered led to the creation of Kōkūn.
                            </span>

                        </p>
                    </div>
                    <blockquote className="my-16 md:my-24 mx-6 md:mx-32">
                  <p className="text-primary font-merriweather text-base md:text-lg lg:text-xl">
                    We’re connecting the dots for people with invisible conditions like migraine by finding breakthrough insights. We’re building what we wish had existed for us, something needed by so many others living with invisible conditions.
                  </p>
                </blockquote>
                    <div >
                        
                    </div>
                    <div className='text-lg md:text-xl'>
                        Our first offering is an AI-powered, evidence-based platform built to help people understand their bodies, navigate their conditions, and thrive. We combine research, peer insights, and real-world data to bring clarity where there’s confusion, and healing where there’s been dismissal.
                    <br/><br/>
                        <span className='text-primary text-3xl'>Join us on our journey!</span>

                    </div>
                </div>
              </div>
            </PageContentWrapper>
          </main>
        </div>
      </div>
  )
}

export default WhoWeArePage
