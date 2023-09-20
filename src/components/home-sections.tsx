import classnames from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export const Section = (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <section
      {...props}
      className={classnames('mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 home-section', props.className)}
    />
  )
}
export const SectionHead = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='sticky top-0 left-0 right-0 z-20 -mx-6 mb-4 bg-slate-800/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
      {children}
    </div>
  )
}
