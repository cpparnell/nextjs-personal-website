import Head from 'next/head';
import Badge from './components/Badge'
import About from './components/About'
import ExperienceTimeline from './components/ExperienceTimeline'
import Education from './components/Education';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=6" />
        <></>
      </Head>
      <main className="flex flex-wrap min-h-screen flex-col items-center justify-between p-8">
        <Badge />
        <div className='min-w-[1200px] min-h-[500px] max-h-[1080pix] max'>
          <About/>
          <div className='pt-8'>
            <ExperienceTimeline />
          </div>
          <div className='pt-8'>
            <Education />
          </div>
        </div>
      </main>
    </div>
  )
}
