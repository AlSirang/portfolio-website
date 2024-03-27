import { Section, SectionHead } from '@/components/home-sections'

export const About = () => {
  return (
    <Section id='about' aria-label='About me'>
      <SectionHead>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
      </SectionHead>
      <div>
        <p>
          I am a Full-Stack JavaScript | Typescript developer with a Bachelor&apos;s degree in Software Engineering.
          Besides Full-Stack, my expertise includes Solidity and blockchain development, where I see the potential to
          revolutionize diverse industries through decentralization.{' '}
        </p>

        <p className='my-4'>
          Continuous learning fuels my curiosity in the ever-evolving world of software development.🌐🚀
        </p>

        <p>Beside these I love to volunteer, trek and hike.🚶‍♂️</p>
      </div>
    </Section>
  )
}
