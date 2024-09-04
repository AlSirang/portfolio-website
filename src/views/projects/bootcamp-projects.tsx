import { ProjectsTable } from '@/components/projectsTable'
import { ProjectRow } from '@/components/projectsTable/project'
import { bootcampProjects } from '@/data/archive-projects'

export default function BootcampProjects() {
  return (
    <div className='mt-10 md:mt-16'>
      <div className='mb-5'>
        <h2 className='text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl'>Bootcamp Projects</h2>
        <p>Below is a summary of projects created during my learning journey and through various bootcamps.</p>
      </div>

      <ProjectsTable>
        {bootcampProjects.map((project, index) => (
          <ProjectRow key={index} {...project} />
        ))}
      </ProjectsTable>
    </div>
  )
}
