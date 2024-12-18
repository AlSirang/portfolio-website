import { ReviewCard } from './review-card'
import { Section, SectionHead } from '@/components/ui/section'

import { reviews } from './data'

export const Reviews = () => (
  <Section id='reviews' aria-label='reviews'>
    <SectionHead>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Reviews</h2>
    </SectionHead>

    <ul className='group/list'>
      {reviews.map((review, index) => (
        <li className='mb-12' key={index}>
          <ReviewCard {...review} />
        </li>
      ))}
    </ul>
  </Section>
)
