import Link from 'next/link'
import { ArrowIcon } from '@/icons'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Service } from '@/types'

interface ServiceCardProps extends Service {}

export const ServiceCard = (props: ServiceCardProps) => {
  const { title, description, tools, href } = props

  return (
    <Card key={title}>
      <Link
        className='inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base'
        href={href}
        target='_blank'
        rel='noreferrer'
      >
        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block' />

        <span>
          {title}
          <span className='inline-block'>
            <ArrowIcon className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
          </span>
        </span>
      </Link>

      <p className='text-sm leading-normal mb-4 text-slate-500'>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {tools.map(tool => (
          <Badge key={tool}>{tool}</Badge>
        ))}
      </div>
    </Card>
  )
}
