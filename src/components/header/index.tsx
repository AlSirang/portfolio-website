'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { NavLink } from './nav-link'
import { SocialLink } from './social-link'
import { FaGithub, FaLinkedin, FaStackOverflow, FaUpwork } from 'react-icons/fa6'

export const Header = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.home-section')
      let currentSectionId = ''

      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100) currentSectionId = section.id
      })

      setActiveSection(currentSectionId)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:items-end'>
      <div>
        <div className='h-auto w-auto max-h-[15rem] max-w-[15rem] lg:m-auto'>
          <picture>
            <img src='/images/me.jpg' className='rounded-full' alt='profile' />
          </picture>
        </div>
        <Link href='/' className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mt-3 block'>
          Bashir Uddin
        </Link>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
          Freelance Full-Stack Developer
        </h2>
        <div className='mt-2'>
          <h3>Languages</h3>
          <p className='(max-w-xs leading-normal text-slate-500'>JavaScript | Typescript | Solidity</p>
        </div>

        <div className='mt-2'>
          <h3>Frameworks</h3>
          <p className='(max-w-xs leading-normal text-slate-500'>
            React.js | Next.js | Node.js | Express.js <br />
            Nest.js | PostgresSQL | MongoDB
          </p>
        </div>

        <nav className='nav hidden lg:block' aria-label='In-page jump links'>
          <ul className='mt-16 w-max'>
            {[
              {
                name: 'About',
                slug: 'about',
                href: '#about'
              },
              {
                name: 'Experience',
                slug: 'experience',
                href: '#experience'
              },
              {
                name: 'Projects',
                slug: 'projects',
                href: '#projects'
              },
              {
                name: 'Reviews',
                slug: 'reviews',
                href: '#reviews'
              },
              {
                name: 'Hire Me',
                slug: 'hire-me',
                href: '#hire-me'
              }
            ].map(path => (
              <li key={path.name}>
                <NavLink href={path.href} active={activeSection === path.slug}>
                  {path.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className='ml-1 mt-8 flex items-center' aria-label='Social media'>
        {[
          {
            name: 'Github',
            href: 'https://github.com/AlSirang',
            icon: FaGithub
          },
          {
            name: 'Upwork',
            href: 'https://www.upwork.com/freelancers/~0123164bb18bec0df4?mp_source=share',
            icon: FaUpwork
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
            <SocialLink href={social.href} social={social.name}>
              <social.icon className='h-6 w-6 transition-all' />
            </SocialLink>
          </li>
        ))}
      </ul>
    </header>
  )
}
