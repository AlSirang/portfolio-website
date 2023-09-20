import { Section, SectionHead } from '@/components/home-sections'

export const About = () => {
  return (
    <Section id='about' aria-label='About me'>
      <SectionHead>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
      </SectionHead>
      <div>
        <p className='mb-4'>
          I am a Full-Stack JavaScript developer with a Bachelor&apos;s degree in Software Engineering. Besides
          JavaScript, my expertise includes Solidity and blockchain development, where I see the potential to
          revolutionize diverse industries through decentralization. Continuous learning fuels my curiosity in the
          ever-evolving world of software development.🌐🚀
        </p>

        <p>Beside these I love to volunteer, trek and hike.🚶‍♂️</p>
      </div>
    </Section>
  )
}
