import Link from 'next/link'
import { Section, SectionHead } from '@/components/home-sections'
import { ReviewCard } from '@/components/review-card'
import { reviews } from '@/data/reviews'
import { ArrowRight } from '@/icons'

export const Reviews = () => {
  return (
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
      {/* <div className='mt-12'>
        <Link
          className='inline-flex items-center leading-tight font-semibold text-slate-200 group'
          aria-label='View all reviews'
          target='_blank'
          rel='noreferrer'
          href='https://www.fiverr.com/bashir_uddin21#reviews_header_as_seller'
        >
          <span>
            <span className='border-b border-transparent pb-px'>View all </span>
            <span className='whitespace-nowrap'>
              <span className='border-b border-transparent pb-px'>Reviews</span>

              <ArrowRight className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
            </span>
          </span>
        </Link>
      </div> */}
    </Section>
  )
}
