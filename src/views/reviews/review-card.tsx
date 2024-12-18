import { Card } from '@/components/ui/card'

type ReviewCardProps = {
  username: string
  logo: string
  description: string
  country: string
}

export const ReviewCard = (props: ReviewCardProps) => {
  const { username, logo, description, country } = props
  return (
    <Card className='grid sm:grid-cols-8 sm:gap-8 md:gap-4 cursor-default'>
      <div className='z-10 sm:col-span-full'>
        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block' />
        <div className='w-full mx-auto rounded-lg p-5 text-slate-200 '>
          <div className='w-full flex items-center'>
            <p className='rounded-full w-14 h-14  border-2 border-slate-200/10 transition group-hover:border-slate-200/30'>
              <span className='text-xl font-bold inline-flex justify-center w-full h-full items-center'>{logo}</span>
            </p>

            <div className='flex-grow pl-3'>
              <h5 className='font-bold text-base'>{username}</h5>
              <h6 className='font-semibold text-sm text-slate-500'>{country}</h6>
            </div>
          </div>
        </div>
        <p className='text-sm leading-normal'>
          <span className='text-lg leading-none italic font-bold text-gray-400 mr-1'>&quot;</span>
          {description}
          <span className='text-lg leading-none italic font-bold text-gray-400 ml-1'>&quot;</span>
        </p>
      </div>
      {/* </div> */}
    </Card>
  )
}
