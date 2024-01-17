import Badge from './components/Badge'
import About from './components/About'
import Experience from './components/Experience'
import ExperienceTimeline from './components/ExperienceTimeline'

export default function Home() {
  return (
    <main className="flex flex-wrap min-h-screen flex-col items-center justify-between p-8">
      <Badge />
      <div className='min-w-[100px] min-h-[50px] max-h-[1200px]'>
        <About/>
        <div className='pt-8'>
        <ExperienceTimeline />
        </div>
      </div>
    </main>
  )
}
