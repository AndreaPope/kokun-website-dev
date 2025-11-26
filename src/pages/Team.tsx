import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { Lightbulb, Users, BookOpen, FlaskConical } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PageContentWrapper from '../components/PageContentWrapper';

function AboutPage() {
  const navigate = useNavigate();

  const councilMembers = [
    {
      name: 'ALIX ALDERMAN',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQFdEQHCG4Xq4A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696965251461?e=1765411200&v=beta&t=E_Lz3JXX8MYwbWdZ282cPwKkSzC4iIi24VuRVUTh2qI',
      linkedin: 'https://www.linkedin.com/in/alixalderman/',
    },
    {
      name: 'ANNA BAUMAN',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQG6R3-ZhfQ2og/profile-displayphoto-shrink_200_200/B56ZPcBCmpGsAY-/0/1734563081601?e=1765411200&v=beta&t=iHMP9TFgcb9f_dZsZjJaSBbhGXH5S4KnIhxRXUT_AcI',
      linkedin: 'https://www.linkedin.com/in/annabauman/',
    },
    {
      name: 'RAMA DURAIRAJAN',
      image:
        'https://media.licdn.com/dms/image/v2/C5603AQE-uoAWg87qLQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1569565028912?e=1765411200&v=beta&t=EgCuE7q6r7TWbXtYhTrbZySYFhRhgEYKEXdbyppx9O0',
      linkedin: 'https://www.linkedin.com/in/rama-durairajan-2a50ba4/',
    },
    {
      name: 'CAROLYN MOORE',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQEi4Pb1gLkOKg/profile-displayphoto-shrink_200_200/B56ZRNDHy0GQAk-/0/1736459452697?e=1765411200&v=beta&t=F8TBLhQqjZH4pqPCCoHswR4h4LpjarWxHGnK0wkPRZE',
      linkedin: 'https://www.linkedin.com/in/carolynfmoore/',
    },
    {
      name: 'JULIA POLK',
      image:
        'https://media.licdn.com/dms/image/v2/C5603AQEywX1ORtjFmg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1652978188951?e=1765411200&v=beta&t=aM2cfpj8KcYJ3SptQD1HlwqTwLnAIS0K_UGXlfPNLsM',
      linkedin: 'https://www.linkedin.com/in/juliapolk/',
    },
    {
      name: 'BRETT SPITALE',
      image:
        'https://media.licdn.com/dms/image/v2/C5603AQF5UfSE71eVfA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1602812013223?e=1765411200&v=beta&t=3zjqSLmCB4PxMKH8TY43rq94hyEozO0m-TzbcLMerJ8',
      linkedin: 'https://www.linkedin.com/in/brett-spitale-81166b6/',
    },
    {
      name: 'MARK STAHL',
      image:
        'https://media.licdn.com/dms/image/v2/C4E03AQGrrclmTLlMyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517433983331?e=1765411200&v=beta&t=sjs9LBPEOeuzYkvpqtbVhupqOWrNf3XJSdA3qPJj1Bc',
      linkedin: 'https://www.linkedin.com/in/mark-stahl-81275390/',
    },
  ];

  const councilRowOne = councilMembers.slice(0, 5);
  const councilRowTwo = councilMembers.slice(5, 9);

  const expertContributors = [
    {
      name: 'FIONA AKHTAR',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQHM05weBqneAg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689567226171?e=1765411200&v=beta&t=WEBeK8WSuwQfLCfGaExFqI9SVrJ6elWWc5Y4UOT7v20',
      linkedin: 'https://www.linkedin.com/in/fionaa/',
    },
    {
      name: 'THARIKA CHANDRASEKHAR',
      image: '/images/Tharika.jpg',
      linkedin: 'https://www.linkedin.com/in/tharika-chandrasekhar/',
    },
    {
      name: 'RACHEL HEUSSENSTAMM',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQGoo-ZWOIH2lg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1681269369872?e=1765411200&v=beta&t=dSSQcj1I1bK0fUP81ly7fB4VqU7Dtw4swQepJv0jE0g',
      linkedin: 'https://www.linkedin.com/in/rachel-heussenstamm/',
    },
    {
      name: 'KAY HOFMEESTER',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQH-QVjoSzIVIg/profile-displayphoto-scale_200_200/B56ZfCqu_YHQAc-/0/1751317674220?e=1765411200&v=beta&t=Qf9Cj8my3P0Laxahc2GL2Fz86WZbU9_3OZl8vsGD9Zg',
      linkedin: 'https://www.linkedin.com/in/kayhofmeester/',
    },
    {
      name: 'ERIC LEBLANC',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQFEdyRcZitIZg/profile-displayphoto-scale_200_200/B4EZfB0KtKHYAY-/0/1751303368009?e=1765411200&v=beta&t=57yZ33SmFCojM3XPYZEedWtauF-llyt9L7xJlAM9JlU',
      linkedin: 'https://www.linkedin.com/in/eric--leblanc/',
    },
  ];

  const volunteerMembers = [
    {
      name: 'MOMINA DIN',
      image:
        'https://media.licdn.com/dms/image/v2/D4D35AQHe5cmltq8QiA/profile-framedphoto-shrink_400_400/B4DZZBqzbCHwAg-/0/1744858462282?e=1764738000&v=beta&t=bhB_OJlql07Ek7tm2guhAYOiaXZqcgILeB_tPtU-Sek',
      linkedin: 'https://www.linkedin.com/in/momina-din/',
    },
    {
      name: 'ABHIVYAKTI DUBEY',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQFOL3rUicPWrA/profile-displayphoto-shrink_200_200/B4EZdWuMYMHYAk-/0/1749506639704?e=1765411200&v=beta&t=52z3C2BGneXnHAlf-PQC8F-eM0ePp5AmKA6KHlPIibg',
      linkedin: 'https://www.linkedin.com/in/abhivyaktidubey/',
    },
    {
      name: 'SRIVYSHNAVI GADDE',
      image:
        'https://media.licdn.com/dms/image/v2/C4E03AQFD1PcVeLhhTQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517399004412?e=1766016000&v=beta&t=D-iWBbmWLeAirfFznP2vSPwYt8CE7ig2nXXCXesJeB0',
      linkedin: 'https://www.linkedin.com/in/srivyshnavigadde/',
    },
    {
      name: 'MIRNA HADDAD',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQG1rR6QZNrulQ/profile-displayphoto-scale_200_200/B4DZqYiCOsGQAY-/0/1763495651809?e=1765411200&v=beta&t=9qjs6ZAHrx2cDpP6HV3ZSiK09BIthBjRRMv9spWHZrQ',
      linkedin: 'https://www.linkedin.com/in/mirna-haddad-67898396/',
    },
    {
      name: 'KEETHANSHAN MARKANDU',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQGMCXmJr4j2iQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707718189082?e=1765411200&v=beta&t=DfDGMJpwxmFQEXxC3Zz9SKTRwl74hUzitckWtl4j2Z0',
      linkedin: 'https://www.linkedin.com/in/keethanshan-markandu-a79877248/',
    },
    {
      name: 'ZARANA NAKRANI',
      image:
        'https://media.licdn.com/dms/image/v2/D5635AQFONyCc26O20Q/profile-framedphoto-shrink_400_400/B56ZbM_._tH4Ac-/0/1747196047712?e=1764738000&v=beta&t=g8f-CcCXPmC6cKwe77nyCjq4SdRYfXwpV4rtqsz8tD8',
      linkedin: 'https://www.linkedin.com/in/zarana-nakrani/',
    },
    {
      name: 'ROBERT ROJO',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQEhK96HErX81w/profile-displayphoto-scale_400_400/B56ZfsNALYG0Ag-/0/1752014521492?e=1766016000&v=beta&t=PDSIjCbtSL1CDUnMyyMk4nse3kSRlBbqgTE3o3QjdqQ',
      linkedin: 'https://www.linkedin.com/in/robertrojodev/',
    },
    {
      name: 'SAVANI SHROTRI',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQEKxMzt7f-rMA/profile-displayphoto-scale_200_200/B4DZlfAfQqJYAY-/0/1758235588245?e=1765411200&v=beta&t=SPBTC2I32pI_8pJZHSBfRPe5AEQ0UK5Dqu4gasCBz5Q',
      linkedin: 'https://www.linkedin.com/in/savanishrotri/',
    },
    {
      name: 'DISHITA BAJAJ',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQFB2cB6WdguRQ/profile-displayphoto-scale_200_200/B4EZnV4Hb5GoAY-/0/1760229882068?e=1765411200&v=beta&t=x5WsvhanfAs_WdS3bJCtlv8seN2F_igtNuCtE7vbnGI',
      linkedin: 'https://www.linkedin.com/in/dishita-bajaj-00bb88313/',
    },
  ];

  const volunteersRowOne = volunteerMembers.slice(0, 5);
  const volunteersRowTwo = volunteerMembers.slice(5, 10);

  const volunteerPastMembers = [
    {
      name: 'NILA KATHIRAVAN',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQEQnOLhG-rAMA/profile-displayphoto-shrink_200_200/B4DZXgsPnuH4AY-/0/1743231449878?e=1765411200&v=beta&t=QTGe6YrQfMHvlTgW-6rWsmDY-zl91ArLf2AZzQrPtxg',
      linkedin: 'https://www.linkedin.com/in/nila-kathiravan-33b62b359/',
    },
    {
      name: 'JENNY JONES',
      image:
        'https://media.licdn.com/dms/image/v2/C5603AQHNYcX7PmIIYA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654541356674?e=1765411200&v=beta&t=knU61rg-1CXHWGswoOOQQ1NQxLlwO0lRz-ysmpkyqOY',
      linkedin: 'https://www.linkedin.com/in/jenny-jones-1740a79/',
    },
    {
      name: 'DHRUV KURPAD',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQFMGkC-hdiO4A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727240730439?e=1766016000&v=beta&t=rrjfnqDeX1jtVZQKomd-xyszmnhOo942sGULE40KHp8',
      linkedin: 'https://www.linkedin.com/in/dhruv-kurpad-212b60276/',
    },
    {
      name: 'BISHARAT MINHAS',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQH_d0TO-N-dHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714658233059?e=1765411200&v=beta&t=MjEoTwsYKSn05ityNNGcrhVPKBcxy--S5q-prvvDk8I',
      linkedin: 'https://www.linkedin.com/in/bisharat-minhas/',
    },
  ];

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

                <div className="mt-6 flex gap-8 justify-start flex-nowrap overflow-x-auto">
                  <div className="bg-background/70 p-6 rounded-lg flex flex-col items-center text-center min-w-[220px]">
                    <a
                      href="https://www.linkedin.com/in/sangitajayaraman/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 block"
                      aria-label="LinkedIn profile for Sangita Jayaraman"
                    >
                      <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQGzMJx6fmDZDQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718226509703?e=1765411200&v=beta&t=hSv8fykizIK3NPmvU0AM2W1t7LDRQIZ5AAis-JeNX4w"
                        alt="Sangita"
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </a>
                    <h3 className="text-1xl font-bold mb-2">SANGITA JAYARAMAN</h3>
                    <a
                      href="https://www.linkedin.com/in/sangitajayaraman/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition-colors"
                      aria-label="LinkedIn profile for Sangita Jayaraman"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>

                  <div className="bg-background/70 p-6 rounded-lg flex flex-col items-center text-center min-w-[220px]">
                    <a
                      href="https://www.linkedin.com/in/andreapope/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 block"
                      aria-label="LinkedIn profile for Andrea Pope"
                    >
                      <img
                        src="https://media.licdn.com/dms/image/v2/D4E03AQH6xxgXf__GMg/profile-displayphoto-scale_200_200/B4EZiEpw3VGUAY-/0/1754572198462?e=1765411200&v=beta&t=rK2SEofvjeuA6qm_cq26NsDPMKLrvdyt3TahfQHVTec "
                        alt="Andrea"
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </a>
                    <h3 className="text-1xl font-bold mb-2">ANDREA POPE</h3>
                    <a
                      href="https://www.linkedin.com/in/andreapope/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition-colors"
                      aria-label="LinkedIn profile for Andrea Pope"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <br></br><br></br>
              </div>
              <div>
                <p className="font-bold text-primary text-lg tracking-wide">ADVISORY BOARD</p>

                <div className="mt-6 flex gap-8 justify-start flex-nowrap overflow-x-auto">
                  <div className="bg-background/70 p-6 rounded-lg flex flex-col items-center text-center min-w-[220px]">
                    <a
                      href="https://www.linkedin.com/in/familyhealthguy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 block"
                      aria-label="LinkedIn profile for Sean Nolan"
                    >
                      <img
                        src="/images/SEANNOLAN.jpeg"
                        alt="Sean Nolan"
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </a>
                    <h3 className="text-1xl font-bold mb-2">SEAN NOLAN</h3>
                    <a
                      href="https://www.linkedin.com/in/familyhealthguy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition-colors"
                      aria-label="LinkedIn profile for Sean Nolan"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>

                  <div className="bg-background/70 p-6 rounded-lg flex flex-col items-center text-center min-w-[220px]">
                    <a
                      href="https://www.linkedin.com/in/divyayerraguntla/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 block"
                      aria-label="LinkedIn profile for Divya Yerraguntla"
                    >
                      <img
                        src="https://media.licdn.com/dms/image/v2/C4D03AQHXoHThZH-O_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516251526310?e=1765411200&v=beta&t=tUv3DKqxkdWeaVQYksERdniWzrPC5U6WvMTBsT2tlc0"
                        alt="Divya Yerraguntla"
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </a>
                    <h3 className="text-1xl font-bold mb-2">DIVYA YERRAGUNTLA</h3>
                    <a
                      href="https://www.linkedin.com/in/divyayerraguntla/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition-colors"
                      aria-label="LinkedIn profile for Divya Yerraguntla"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <br></br><br></br><br></br>
              </div>

              <div>
                <p className="font-bold text-primary text-lg tracking-wide">COUNCIL OF ADVISORS</p>

                <div className="mt-6 space-y-8">
                  <div className="flex gap-8 justify-start flex-nowrap overflow-x-auto">
                    {councilRowOne.map((member) => (
                      <div
                        key={member.name}
                        className="bg-background/70 p-6 rounded-lg flex flex-col items-center text-center min-w-[220px]"
                      >
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mb-4 block"
                          aria-label={`LinkedIn profile for ${member.name}`}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full object-cover"
                          />
                        </a>
                        <h3 className="text-1xl font-bold mb-2">{member.name}</h3>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-white transition-colors"
                          aria-label={`LinkedIn profile for ${member.name}`}
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      </div>
                    ))}
                  </div>

                  {councilRowTwo.length > 0 && (
                    <div className="flex gap-8 justify-start flex-nowrap overflow-x-auto">
                      {councilRowTwo.map((member) => (
                        <div
                          key={member.name}
                          className="bg-background/70 p-6 rounded-lg flex flex-col items-center text-center min-w-[220px]"
                        >
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 block"
                            aria-label={`LinkedIn profile for ${member.name}`}
                          >
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-32 h-32 rounded-full object-cover"
                            />
                          </a>
                          <h3 className="text-1xl font-bold mb-2">{member.name}</h3>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-white transition-colors"
                            aria-label={`LinkedIn profile for ${member.name}`}
                          >
                            <Linkedin className="w-6 h-6" />
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <br></br><br></br>
              </div>

              <div>
                <p className="font-bold text-primary text-lg tracking-wide">EXPERT CONTRIBUTORS</p>

                <div className="mt-6 flex gap-8 justify-start flex-nowrap overflow-x-auto">
                  {expertContributors.map((contributor) => (
                    <div
                      key={contributor.name}
                      className="bg-background/70 p-6 rounded-lg flex flex-col items-center text-center min-w-[220px]"
                    >
                      <a
                        href={contributor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 block"
                        aria-label={`LinkedIn profile for ${contributor.name}`}
                      >
                        <img
                          src={contributor.image}
                          alt={contributor.name}
                          className="w-32 h-32 rounded-full object-cover"
                        />
                      </a>
                      <h3 className="text-1xl font-bold mb-2">{contributor.name}</h3>
                      <a
                        href={contributor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white transition-colors"
                        aria-label={`LinkedIn profile for ${contributor.name}`}
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  ))}
                </div>
                <br></br><br></br><br></br>
              </div>

              <div>
                <p className="font-bold text-primary text-lg tracking-wide">VOLUNTEERS (CURRENT)</p>

                <div className="mt-6 space-y-8">
                  <div className="flex gap-8 justify-start flex-nowrap overflow-x-auto">
                    {volunteersRowOne.map((member) => (
                      <div
                        key={member.name}
                        className="bg-background/70 p-6 rounded-lg flex flex-col items-center text-center min-w-[220px]"
                      >
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mb-4 block"
                          aria-label={`LinkedIn profile for ${member.name}`}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full object-cover"
                          />
                        </a>
                        <h3 className="text-1xl font-bold mb-2">{member.name}</h3>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-white transition-colors"
                          aria-label={`LinkedIn profile for ${member.name}`}
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      </div>
                    ))}
                  </div>

                  {volunteersRowTwo.length > 0 && (
                    <div className="flex gap-8 justify-start flex-nowrap overflow-x-auto">
                      {volunteersRowTwo.map((member) => (
                        <div
                          key={member.name}
                          className="bg-background/70 p-6 rounded-lg flex flex-col items-center text-center min-w-[220px]"
                        >
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 block"
                            aria-label={`LinkedIn profile for ${member.name}`}
                          >
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-32 h-32 rounded-full object-cover"
                            />
                          </a>
                          <h3 className="text-1xl font-bold mb-2">{member.name}</h3>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-white transition-colors"
                            aria-label={`LinkedIn profile for ${member.name}`}
                          >
                            <Linkedin className="w-6 h-6" />
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <br></br><br></br>
              </div>

              <div>
                <p className="font-bold text-primary text-lg tracking-wide">VOLUNTEERS (PAST)</p>

                <div className="mt-6 flex gap-8 justify-start flex-nowrap overflow-x-auto">
                {volunteerPastMembers.map((member) => (
                  <div
                    key={member.name}
                    className="bg-background/70 p-6 rounded-lg flex flex-col items-center text-center min-w-[220px]"
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 block"
                      aria-label={`LinkedIn profile for ${member.name}`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </a>
                    <h3 className="text-1xl font-bold mb-2">{member.name}</h3>
                    <a
                      href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white transition-colors"
                        aria-label={`LinkedIn profile for ${member.name}`}
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  ))}
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
