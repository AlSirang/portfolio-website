import Link from 'next/link'
import { ArrowRight } from '@/icons'
import { ProjectsTable } from '@/views/projects'
import CursorWave from '@/components/cursor-wave'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects'
}
export default function Index() {
  return (
    <div className='group/spotlight relative'>
      <CursorWave />
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:py-24'>
          <Link className='group mb-2 inline-flex items-center font-semibold leading-tight slate-800/50' href='/'>
            <ArrowRight className='mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2' />
            Bashir Uddin
          </Link>
          <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>All Projects</h1>

          <ProjectsTable />
        </div>
      </div>
    </div>
  )
}
