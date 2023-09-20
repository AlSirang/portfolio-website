import CursorWave from '@/components/cursor-wave'
import { Header } from '@/views/header'
import { About, Experiences, Projects } from '@/views/home'

export default function Index() {
  return (
    <div className='group/spotlight relative'>
      <CursorWave />
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='flex lg:justify-between lg:gap-4 flex-col lg:flex-row-reverse'>
          <Header />
          <main className='pt-24 lg:w-1/2 lg:py-24'>
            <About />
            <Experiences />
            <Projects />
          </main>
        </div>
      </div>
    </div>
  )
}
