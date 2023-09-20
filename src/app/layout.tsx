import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import classnames from 'classnames'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'al sirang (Bashir Uddin)',
  description: 'Portfolio Web site for Al Sirang (Bashir Uddin)'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={classnames(
          'bg-background leading-relaxed text-white antialiased selection:bg-teal-300 selection:text-teal-900',
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
