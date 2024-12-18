import { ArrowRight } from '@/icons'
import { ServiceCard } from './service-card'
import { Section, SectionHead } from '@/components/ui/section'

import Link from 'next/link'

import { services } from './data'

export const HireMeSection = () => (
  <Section id='hire-me' aria-label='hire me'>
    <SectionHead>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Hire Me</h2>
    </SectionHead>
    <div className='grid grid-cols-1 gap-8 mb-12'>
      {services.map(service => (
        <span className='mb-12' key={service.title}>
          <ServiceCard {...service} />
        </span>
      ))}
    </div>

    <Link
      className='inline-flex items-center leading-tight font-semibold text-slate-200 group'
      aria-label='View Full Project Archive'
      target='_blank'
      href='https://www.upwork.com/freelancers/~0123164bb18bec0df4?mp_source=share'
    >
      <span>
        <span className='border-b border-transparent pb-px'> Let&apos;s Build </span>
        <span className='whitespace-nowrap'>
          <span className='border-b border-transparent pb-px'>Something Great</span>

          <ArrowRight className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
        </span>
      </span>
    </Link>
  </Section>
)
