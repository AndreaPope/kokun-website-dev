import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { Lightbulb, Users, BookOpen, FlaskConical } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PageContentWrapper from '../components/PageContentWrapper';

type Person = {
  name: string;
  image: string;
  linkedin: string;
};

function AboutPage() {
  const navigate = useNavigate();

  const founders: Person[] = [
    {
      name: 'SANGITA JAYARAMAN',
      image:'/images/people/sangita.jpeg',
      linkedin: 'https://www.linkedin.com/in/sangitajayaraman/',
    },
    {
      name: 'ANDREA POPE',
      image:'/images/people/andrea.jpeg',
      linkedin: 'https://www.linkedin.com/in/andreapope/',
    },
  ];

  const advisoryBoard: Person[] = [
    {
      name: 'SEAN NOLAN',
      image: '/images/people/SNolan.jpg',
      linkedin: 'https://www.linkedin.com/in/familyhealthguy/',
    },
    {
      name: 'DIVYA YERRAGUNTLA',
      image:'/images/people/Divya.jfif',
      linkedin: 'https://www.linkedin.com/in/divyayerraguntla/',
    },
  ];

  const councilMembers: Person[] = [
    {
      name: 'ALIX ALDERMAN',
      image:'/images/people/alix.jpeg',
      linkedin: 'https://www.linkedin.com/in/alixalderman/',
    },
    {
      name: 'ANNA BAUMAN',
      image:'/images/people/anna.jpeg',
      linkedin: 'https://www.linkedin.com/in/annabauman/',
    },
    {
      name: 'RAMA DURAIRAJAN',
      image:'/images/people/rama.jpeg',
      linkedin: 'https://www.linkedin.com/in/rama-durairajan-2a50ba4/',
    },
    {
      name: 'CAROLYN MOORE',
      image:'/images/people/carolyn.jpeg',
      linkedin: 'https://www.linkedin.com/in/carolynfmoore/',
    },
    {
      name: 'JULIA POLK',
      image:'/images/people/julia.jpeg',
      linkedin: 'https://www.linkedin.com/in/juliapolk/',
    },
    {
      name: 'BRETT SPITALE',
      image:'/images/people/brett.jpeg',
      linkedin: 'https://www.linkedin.com/in/brett-spitale-81166b6/',
    },
    {
      name: 'MARK STAHL',
      image:'/images/people/mark.jpeg',
      linkedin: 'https://www.linkedin.com/in/mark-stahl-81275390/',
    },
  ];

  const expertContributors: Person[] = [
    {
      name: 'FIONA AKHTAR',
      image:'/images/people/fiona.jpeg',
      linkedin: 'https://www.linkedin.com/in/fionaa/',
    },
    {
      name: 'THARIKA CHANDRASEKHAR',
      image: '/images/people/Tharika.jpg',
      linkedin: 'https://www.linkedin.com/in/tharika-chandrasekhar/',
    },
    {
      name: 'RACHEL HEUSSENSTAMM',
      image:'/images/people/rachel.jpeg',
      linkedin: 'https://www.linkedin.com/in/rachel-heussenstamm/',
    },
    {
      name: 'KAY HOFMEESTER',
      image:'/images/people/kay.jpeg',
      linkedin: 'https://www.linkedin.com/in/kayhofmeester/',
    },
    {
      name: 'ERIC LEBLANC',
      image:'/images/people/Eric.jfif',
      linkedin: 'https://www.linkedin.com/in/eric--leblanc/',
    },
  ];

  const volunteerMembers: Person[] = [
    {
      name: 'EDMOND ABRAHAM',
      image:'/images/people/edmond.jpg',
      linkedin: 'https://www.linkedin.com/in/edmondabraham/',
    },
    {
      name: 'KANIKA BANSAL',
      image:'/images/people/Kanika.jpeg',
      linkedin: 'https://www.linkedin.com/in/kanikabansal/',
    },
    {
      name: 'DISHITA BAJAJ',
      image:'/images/people/Dishita.jfif',
      linkedin: 'https://www.linkedin.com/in/dishita-bajaj-00bb88313/',
    },
    {
      name: 'MOMINA DIN',
      image:'/images/people/Momina_Din.jpeg',
      linkedin: 'https://www.linkedin.com/in/momina-din/',
    },
    {
      name: 'ABHIVYAKTI DUBEY',
      image:'/images/people/Abhivyakti.jfif',
      linkedin: 'https://www.linkedin.com/in/abhivyaktidubey/',
    },
    // {
    //   name: 'SRIVYSHNAVI GADDE',
    //   image:'/images/people/Abhivyakti.jfif',
    //   linkedin: 'https://www.linkedin.com/in/srivyshnavigadde/',
    // },
    {
      name: 'MIRNA HADDAD',
      image:'/images/people/Mirna.jfif',
      linkedin: 'https://www.linkedin.com/in/mirna-haddad-67898396/',
    },
    
    {
      name: 'KEETHANSHAN MARKANDU',
      image:'/images/people/Keeth.jfif',
      linkedin: 'https://www.linkedin.com/in/keethanshan-markandu-a79877248/',
    },
    // {
    //   name: 'ZARANA NAKRANI',
    //   image:
    //     'https://media.licdn.com/dms/image/v2/D5635AQFONyCc26O20Q/profile-framedphoto-shrink_400_400/B56ZbM_._tH4Ac-/0/1747196047712?e=1764738000&v=beta&t=g8f-CcCXPmC6cKwe77nyCjq4SdRYfXwpV4rtqsz8tD8',
    //   linkedin: 'https://www.linkedin.com/in/zarana-nakrani/',
    // },
    {
      name: 'ROBERT ROJO',
      image:'/images/people/robert.jpeg',
      linkedin: 'https://www.linkedin.com/in/robertrojodev/',
    },
    {
      name: 'SAVANI SHROTRI',
      image:'/images/people/Savani.jfif',
      linkedin: 'https://www.linkedin.com/in/savanishrotri/',
    },
    
  ];

  const volunteerPastMembers: Person[] = [
    // {
    //   name: 'NILA KATHIRAVAN',
    //   image:'/images/people/Nila.jfif',
    //   linkedin: 'https://www.linkedin.com/in/nila-kathiravan-33b62b359/',
    // }
    {
      name: 'PRAYAS DURAIRAJAN',
      image:'/images/people/prayas.jpeg',
      linkedin: 'https://www.linkedin.com/in/murari-durairajan-b14409359/',
    },  
    {
      name: 'JENNY JONES',
      image:'/images/people/Jenny.jfif',
      linkedin: 'https://www.linkedin.com/in/jenny-jones-1740a79/',
    },
    {
      name: 'DHRUV KURPAD',
      image:'/images/people/Dhruv.jfif',
      linkedin: 'https://www.linkedin.com/in/dhruv-kurpad-212b60276/',
    },
    {
      name: 'BISHARAT MINHAS',
      image:'/images/people/Bisharat.jfif',
      linkedin: 'https://www.linkedin.com/in/bisharat-minhas/',
    },
    

  ];

  const renderPeopleGrid = (people: Person[]) => (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
      {people.map((person) => (
        <div
          key={person.name}
          className="bg-background/70 p-4 sm:p-5 md:p-6 rounded-lg flex flex-col items-center text-center"
        >
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 block"
            aria-label={`LinkedIn profile for ${person.name}`}
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover"
            />
          </a>
          <h3
            className={`text-lg font-bold mb-2 text-center ${
              person.name.length <= 17 ? 'whitespace-nowrap' : 'leading-tight'
            }`}
          >
            {person.name}
          </h3>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-link)] hover:text-white transition-colors"
            aria-label={`LinkedIn profile for ${person.name}`}
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            'url("/images/ChatGPT-Hands.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background" />
      </div>

      <div className="relative z-10">
        <Navigation />

        <main className="min-h-screen px-4 pb-4 pt-64 md:pt-72">
          <PageContentWrapper className="mb-48 md:mb-64">
            <div className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-center leading-tight mb-0 sm:mb-0">
              <div>ABOUT US</div>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl text-center font-bold">
              <p className="flex items-center justify-center">
                <span>
                  The <span className="text-primary">People Behind Kōkūn</span>
                </span>
              </p>
            </div>
          </PageContentWrapper>

          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg">
            <div className="space-y-8 text-lg md:text-xl">
              <div className="space-y-6">
                <p>
                  We are a mission-driven collective shaped by lived experience and deep expertise across technology, healthcare, and research. Our work is guided and strengthened by respected leaders across the ecosystem. 
                  Together, we are reimagining how invisible conditions are seen, understood, and healed.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-16">
              <div>
                <p className="font-bold text-primary text-lg tracking-wide">FOUNDERS</p>
                {renderPeopleGrid(founders)}
              </div>

              <div>
                <p className="font-bold text-primary text-lg tracking-wide">ADVISORY BOARD</p>
                {renderPeopleGrid(advisoryBoard)}
              </div>

              <div>
                <p className="font-bold text-primary text-lg tracking-wide">COUNCIL OF ADVISORS</p>
                {renderPeopleGrid(councilMembers)}
              </div>

              <div>
                <p className="font-bold text-primary text-lg tracking-wide">EXPERT CONTRIBUTORS</p>
                {renderPeopleGrid(expertContributors)}
              </div>

              <div>
                <p className="font-bold text-primary text-lg tracking-wide">VOLUNTEERS (CURRENT)</p>
                {renderPeopleGrid(volunteerMembers)}
              </div>

              <div>
                <p className="font-bold text-primary text-lg tracking-wide">VOLUNTEERS (PAST)</p>
                {renderPeopleGrid(volunteerPastMembers)}
              </div>
            </div>




          </PageContentWrapper>

          <PageContentWrapper className="bg-background backdrop-blur-sm p-6 md:p-12 rounded-lg py-20 mt-12">
                      <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">We are Kōkūn</h2>
                        <p className="text-lg md:text-xl mb-12">
                          We're transforming how invisible health conditions are seen, understood, and healed.<br className="hidden md:block" />
                          <span>Be among the first to join our movement.</span>
                        </p>
                        
                        <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-8 md:space-y-0">
                          <div className="flex flex-col items-center">
                            <Button to="/early-access" className="mb-3">EARLY ACCESS</Button>
                            <p className="text-sm max-w-[200px]">Join Kōkūn and experience what's next for migraine care</p>
                          </div>
                          
                          <div className="flex flex-col items-center">
                            <Button to="/pledge" className="mb-3">DONATE</Button>
                            <p className="text-sm max-w-[200px]">Make a gift to ignite change for the unseen millions</p>
                          </div>
                          
                          <div className="flex flex-col items-center">
                            <Button to="/newsletter" className="mb-3">NEWSLETTER</Button>
                            <p className="text-sm max-w-[210px]">Follow what we're uncovering, from research to real life</p>
                          </div>
                        </div>
                      </div>
          </PageContentWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
