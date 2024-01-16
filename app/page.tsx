import Image from 'next/image'
import Badge from './components/Badge'
import About from './components/About'
import Experience from './components/Experience'
import ExperienceTimeline from './components/ExperienceTimeline'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ExperienceTimeline />
    </main>
  )
}
