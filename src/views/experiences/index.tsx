import Link from 'next/link'
import { ArrowRight } from '@/icons'
import { JobHistoryCard } from './job-history-card'
import { Section, SectionHead } from '@/components/ui/section'

import { jobHistories } from './data'

export const Experiences = () => {
  return (
    <Section id='experience' aria-label='Work experience'>
      <SectionHead>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Experience</h2>
      </SectionHead>

      <div>
        <ol className='group/list'>
          {jobHistories.map((history, index) => (
            <li className='inline-block mb-12' key={index}>
              <JobHistoryCard {...history} />
            </li>
          ))}
        </ol>
        <div className='mt-12'>
          <Link
            className='inline-flex items-center leading-tight font-semibold text-slate-200 group'
            aria-label='View Full Résumé'
            target='_blank'
            href='/resume.pdf'
            rel='noreferrer'
          >
            <span>
              <span className='border-b border-transparent pb-px'>View&nbsp;</span>
              <span className='whitespace-nowrap'>
                <span className='border-b border-transparent pb-px'>Résumé</span>
                <ArrowRight className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </Section>
  )
}
