import Head from 'next/head';
import Badge from './components/Badge'
import About from './components/About'
import ExperienceTimeline from './components/ExperienceTimeline'
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import PersonalCard from './components/PersonalCard';

export default function Home() {
  return (
    <body>
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico"/>
          <meta name="viewport" content="width=device-width, initial-scale=6" />
          <></>
        </Head>
        <main className="flex flex-wrap min-h-screen flex-col items-center justify-between p-8">
          <div className='hidden md:block'>
            <Badge />
          </div>
          <div className='min-w-[1200px] min-h-[500px] max-h-[1080pix]'>        
            <div className='md:hidden pl-[400px] pr-[200px]'>
              <PersonalCard />
            </div>
            <About />
            <div className='pt-8'>
              <ExperienceTimeline />
            </div>
            <div className='pt-8'>
              <Education />
            </div>
            <div className='pt-8 md:hidden w-full pl-[400px] pr-[200px]'>
              <div className="shadow-lg block px-6 pt-6 pb-2 bg-white border border-gray-300 rounded-lg mb-8 md:hidden">
                  <div>
                      <ContactForm />
                  </div>
              </div>
              <div className="shadow-lg block px-6 py-2 bg-white border border-gray-300 rounded-lg text-sm">
                  <p>Like this website? <a className="text-gradient font-bold" href="https://github.com/cpparnell/nextjs-personal-website" >Check out the code here!</a></p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  )
}
