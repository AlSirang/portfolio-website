import Link from 'next/link'
import { Navigation } from './navigation'
import { SocialLinks } from './social-links'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:items-end'>
      <div>
        <div className='h-auto w-auto max-h-[15rem] max-w-[15rem] lg:m-auto'>
          <Image src='/images/me.webp' height={240} width={240} className='rounded-full' alt='profile' />
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
        <Navigation />
      </div>

      <SocialLinks />
    </header>
  )
}
