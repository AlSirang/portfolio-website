import { Section, SectionHead } from '@/components/ui/section'

export const About = () => {
  return (
    <Section id='about' aria-label='About me'>
      <SectionHead>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
      </SectionHead>
      <div>
        <p>
          With a Bachelor&apos;s degree in Software Engineering, I have been working as a Full-Stack JavaScript |
          TypeScript Developer since 2021, gaining extensive experience in developing highly scalable full-stack web
          applications. During this period, I have worked as a Web3 Front-end Engineer, integrating and developing
          full-stack EVM blockchain DApps using Solidity and React/Next.js.
        </p>

        <p className='mt-2'>Beside these I love to volunteer, trek and hike.🚶‍♂️ </p>
      </div>
    </Section>
  )
}
