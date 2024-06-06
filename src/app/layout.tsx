import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import classnames from 'classnames'
import '@/styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'al sirang (Bashir Uddin)',
  description:
    'Portfolio website of Bashir Uddin, a Full Stack JavaScript Engineer specializing in Solidity development',
  authors: [
    {
      name: 'Bashir Uddin',
      url: 'https://github.com/alsirang'
    }
  ],
  keywords: ['Bashir', 'alsirang', 'sirang', 'javascript developer', 'javascript', 'solidity', 'web3 developer', 'web3']
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />

        <meta property='og:title' content='Al Sirang (Bashir Uddin) - Full Stack JavaScript Engineer + Solidity' />
        <meta
          property='og:description'
          content='Portfolio website of Bashir Uddin, a Full Stack JavaScript Engineer specializing in Solidity development.'
        />
        <meta property='og:image' content='/images/me.jpg' />
        <meta property='og:type' content='website' />
      </head>
      <body
        className={classnames(
          'bg-background leading-relaxed text-white antialiased selection:bg-blue-300 selection:text-black',
          inter.className
        )}
      >
        {children}

        <SpeedInsights />
      </body>
    </html>
  )
}
