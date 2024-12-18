import { ProjectsTable, ProjectsTableRow } from '@/components/projects-table'

import { archiveFreelanceProjects } from './data'

export default function AllProjectsTable() {
  return (
    <div className='mt-5 md:mt-10'>
      <div className='mb-5'>
        <h2 className='text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl'>All Archive Projects</h2>
        <p className='text-slate-500'>
          Below is a summary of projects I have completed during freelance work and throughout employment.
        </p>
      </div>

      <ProjectsTable>
        {archiveFreelanceProjects.map((project, index) => (
          <ProjectsTableRow key={index} {...project} />
        ))}
      </ProjectsTable>
    </div>
  )
}
