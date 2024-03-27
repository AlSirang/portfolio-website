import Image from 'next/image'
import { Tag } from './tag'
import { ArrowIcon } from '@/icons'
import Link from 'next/link'

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
    <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />
      <div className='z-10 sm:order-2 sm:col-span-6'>
        <h3>
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
        </h3>
        <p className='mt-2 text-sm leading-normal'>{description}</p>

        <ul className='mt-2 flex flex-wrap' aria-label='Technologies used:'>
          {tools.map((tool, index) => (
            <li className='mr-1.5 mt-2' key={index}>
              <Tag tool={tool} />
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
    </div>
  )
}
