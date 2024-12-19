import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/utils/cn'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

const description = `Bashir Uddin is a skilled Freelance Full-Stack Developer specializing in JavaScript, TypeScript, Next.js, React.js, Express.js, and Nest.js. Expert in creating scalable, high-performance web applications with clean code and responsive design.
`

export const metadata: Metadata = {
  title: {
    template: '%s | (Bashir Uddin)',
    default: 'al sirang (Bashir Uddin)'
  },
  description,
  authors: [
    {
      name: 'Bashir Uddin',
      url: 'https://github.com/alsirang'
    }
  ],
  keywords: [
    'Full-Stack JavaScript',
    'Full-Stack TypeScript',
    'Front-End Developer',
    'Back-End Developer',
    'TypeScript',
    'Next.js',
    'React.js',
    'Express.js',
    'Nest.js',
    'freelance developer',
    'web development',
    'scalable',
    'high-performance web applications',
    'responsive design'
  ],
  verification: {
    google: 'tUcVEd0RrDlXk7DvpHTO66NlhAw6Ud3XHpdctaoSK3c'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />

        <meta property='og:title' content='Bashir Uddin - Full-Stack JavaScript | Typescript Engineer' />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/images/me.jpg' />
        <meta property='og:type' content='website' />
      </head>
      <body
        className={cn(
          'bg-background leading-relaxed text-white antialiased selection:bg-blue-300 selection:text-black',
          inter.className
        )}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
