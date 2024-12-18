import Link from 'next/link'
import { ArrowRight } from '@/icons'
import { ProjectCard } from './project-card'
import { Section, SectionHead } from '@/components/ui/section'

import { projects } from './data'

export const ProjectsLatest = () => (
  <Section id='projects' aria-label='Selected projects'>
    <SectionHead>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Projects</h2>
    </SectionHead>

    <div>
      <ul className='group/list'>
        {projects.map(project => (
          <li className='mb-12' key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
      <div className='mt-12'>
        <Link
          className='inline-flex items-center leading-tight font-semibold text-slate-200 group'
          aria-label='View Full Project Archive'
          href='/projects'
        >
          <span>
            <span className='border-b border-transparent pb-px'>View Full Project </span>
            <span className='whitespace-nowrap'>
              <span className='border-b border-transparent pb-px'>Archive</span>

              <ArrowRight className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
            </span>
          </span>
        </Link>
      </div>
    </div>
  </Section>
)
