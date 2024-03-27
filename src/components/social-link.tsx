type SocialLinkProps = {
  href: string
  social: string
  children: React.ReactNode
}
export const SocialLink = (props: SocialLinkProps) => {
  const { href, social, children } = props
  return (
    <a className='block text-slate-500 hover:text-slate-200' href={href} target='_blank' rel='noreferrer'>
      <span className='sr-only'>{social}</span>

      {children}
    </a>
  )
}
