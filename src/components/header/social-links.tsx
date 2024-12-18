import { FaGithub, FaLinkedin, FaStackOverflow, FaUpwork } from 'react-icons/fa6'

export const SocialLinks = () => (
  <ul className='ml-1 mt-8 flex items-center' aria-label='Social media'>
    {[
      {
        name: 'Upwork',
        href: 'https://www.upwork.com/freelancers/~0123164bb18bec0df4?mp_source=share',
        icon: FaUpwork
      },
      {
        name: 'Github',
        href: 'https://github.com/AlSirang',
        icon: FaGithub
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ba-shir',
        icon: FaLinkedin
      },
      {
        name: 'Stack Overflow',
        href: 'https://stackoverflow.com/users/15004779/al-sirang',
        icon: FaStackOverflow
      }
    ].map(social => (
      <li className='mr-5 text-xs' key={social.name}>
        <a className='block text-slate-500 hover:text-slate-200' href={social.href} target='_blank' rel='noreferrer'>
          <span className='sr-only'>{social.name}</span>
          <social.icon className='h-6 w-6 transition-all' />
        </a>
      </li>
    ))}
  </ul>
)
