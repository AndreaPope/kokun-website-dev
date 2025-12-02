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
            'url("https://res.cloudinary.com/dknulbme8/image/upload/t_Grayscale/colored-treescape_wcvfjs")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="fixed inset-0 z-10 bg-black/25" />
        <div className="relative z-20">
          <Navigation />
          <div
            className="relative mt-20 w-full h-[30rem] items-start"
            style={{
              backgroundImage: 'url(/images/pexels-david-kouakou-536418893-30214684.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          >
            <div
              className={`absolute left-[-20%] bg-secondary h-[30rem] w-[20%] transform transition-transform duration-1000 ease-out ${
                mounted ? 'translate-x-[100%]' : 'translate-x-[-100%]'
              }`}
            />
            <div className="absolute inset-0 z-10 bg-black/25" />
            {/* <Whoweare /> */}

            <div className="absolute top-0 my-20 h-[20rem] w-[30%] bg-primary">
              <div className="my-[10rem] font-display text-white font-bold text-5xl ml-8 leading-tight">
                Who We Are
              </div>
            </div>
          </div>

          <main className="min-h-screen pb-24 pt-40 md:pt-48">
            <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">
              <div className="text-lg md:text-xl space-y-8 mb-48">
                <div className='space-y-8 text-lg md:text-xl'>
                <div className='text-primary text-left font-semibold'>
                    Kōkūn is making the invisible visible.
                </div>
                </div>
              </div>
            </PageContentWrapper>
          </main>
        </div>
      </div>
    </div>
  )
}

export default WhoWeArePage
