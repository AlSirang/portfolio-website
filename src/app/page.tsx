import { Header } from '@/components/header'
import CursorWave from '@/components/cursor-wave'

import { About } from '@/views/about'
import { Reviews } from '@/views/reviews'
import { Experiences } from '@/views/experiences'
import { HireMeSection } from '@/views/hire-me-section'
import { ProjectsLatest } from '@/views/projects-latest'

export default function Home() {
  return (
    <div className='group/spotlight relative'>
      <CursorWave />
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-10 md:py-20 lg:py-0'>
        <div className='flex lg:justify-between lg:gap-4 flex-col lg:flex-row-reverse'>
          <Header />
          <main className='pt-24 lg:w-1/2 lg:py-24'>
            <About />
            <Experiences />
            <ProjectsLatest />
            <Reviews />
            <HireMeSection />
          </main>
        </div>
      </div>
    </div>
  )
}
