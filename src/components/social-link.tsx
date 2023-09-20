interface IProps {
  href: string
  social: string
  children: React.ReactNode
}
export const SocialLink = ({ href, social, children }: IProps) => {
  return (
    <a className='block hover:text-slate-200' href={href} target='_blank' rel='noreferrer'>
      <span className='sr-only'>{social}</span>

      {children}
    </a>
  )
}
