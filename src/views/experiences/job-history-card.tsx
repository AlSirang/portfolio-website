import { Badge } from '../../components/ui/badge'
import { Card } from '../../components/ui/card'

type JobHistoryCardProps = {
  duration: string
  role: string
  company: string
  description: string
  tools: string[]
}

export const JobHistoryCard = (props: JobHistoryCardProps) => {
  const { duration, role, company, description, tools } = props
  return (
    <Card className='grid sm:grid-cols-8 sm:gap-8 md:gap-4'>
      <p
        className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
        aria-label={duration}
      >
        {duration}
      </p>
      <div className='z-10 sm:col-span-6'>
        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block' />

        <div className='font-medium leading-snug text-slate-200'>
          <span className='inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base'>
            <h2>{company} </h2>
          </span>
          <h3 className='text-slate-500'>{role}</h3>
        </div>
        <p className='mt-2 text-sm leading-normal'>{description}</p>
        <ul className='mt-2 flex flex-wrap' aria-label='Technologies used'>
          {tools.map(tool => (
            <li key={tool} className='mr-1.5 mt-2'>
              <Badge>{tool}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
