import Link from 'next/link'
import Image from 'next/image'
import { ArrowIcon } from '@/icons'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type ProjectCardProps = {
  href: string
  name: string
  description: string
  imgSrc: string
  tools: string[]
}
export const ProjectCard = (props: ProjectCardProps) => {
  const { href, name, description, imgSrc, tools } = props

  return (
    <Card className='grid gap-4 sm:grid-cols-8 sm:gap-8 md:gap-4'>
      <div className='z-10 sm:order-2 sm:col-span-6'>
        <div>
          <Link
            className='inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base'
            href={href}
            target='_blank'
            rel='noreferrer'
          >
            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block' />

            <span>
              {name}
              <span className='inline-block'>
                <ArrowIcon className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
              </span>
            </span>
          </Link>
        </div>

        <p className='mt-2 text-sm leading-normal'>{description}</p>

        <ul className='mt-2 flex flex-wrap' aria-label='Technologies used:'>
          {tools.map((tool, index) => (
            <li className='mr-1.5 mt-2' key={index}>
              <Badge>{tool}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <Image
        alt=''
        loading='lazy'
        decoding='async'
        width='200'
        height='48'
        data-nimg='1'
        className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
        src={imgSrc}
      />
    </Card>
  )
}
