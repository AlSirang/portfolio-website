import Link from 'next/link'
import { Tag } from '@/components/tag'
import { ArrowIcon } from '@/icons'
import { TArchiveProjects } from '@/types/archiveProjects.types'

interface ProjectRowProps extends TArchiveProjects {}
export const ProjectRow = (props: ProjectRowProps) => {
  const { year, title, tools, website } = props
  return (
    <tr className='border-b border-slate-300/10 last:border-none'>
      <td className='py-4 pr-4 align-top text-sm'>
        <div className='translate-y-px'>{year}</div>
      </td>
      <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-200'>
        <div>
          {website ? (
            <div className='block sm:hidden'>
              <Link
                className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-slate-100 sm:hidden group/link text-base transition-all'
                href={website.url}
                target='_blank'
                rel='noreferrer noopener'
                aria-label={`${title} (opens in a new tab)`}
              >
                <span>
                  {title}
                  <span className='inline-block'>
                    <ArrowIcon className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
                  </span>
                </span>
              </Link>
            </div>
          ) : (
            <div className='block sm:hidden'>
              <span
                className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-slate-100 sm:hidden group/link text-base transition-all'
                aria-label={`${title} (opens in a new tab)`}
              >
                <span>
                  {title}
                  <span className='inline-block'></span>
                </span>
              </span>
            </div>
          )}

          <div className='hidden sm:block'>{title}</div>
        </div>
      </td>

      <td className='hidden py-4 pr-4 align-top lg:table-cell'>
        <ul className='flex -translate-y-1.5 flex-wrap'>
          {tools.map(tool => (
            <li className='my-1 mr-1.5' key={tool}>
              <Tag tool={tool} />
            </li>
          ))}
        </ul>
      </td>
      <td className='hidden py-4 align-top sm:table-cell'>
        {website && (
          <ul className='translate-y-1'>
            <li className='mb-1 flex items-center'>
              <Link
                className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-slate-100 group/link text-sm transition-all'
                href={website.url}
                target='_blank'
                rel='noreferrer noopener'
                aria-label='emersoncollective.com (opens in a new tab)'
              >
                <span>
                  <span className='inline-block'>
                    {website.display}
                    <ArrowIcon className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5' />
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        )}
      </td>
    </tr>
  )
}
