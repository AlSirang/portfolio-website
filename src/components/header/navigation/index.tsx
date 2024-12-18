'use client'
import { useEffect, useState } from 'react'
import { NavLink } from './nav-link'

export const Navigation = () => {
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
  )
}
