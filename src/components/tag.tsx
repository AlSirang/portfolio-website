type TagProps = {
  tool: string
}
export const Tag = ({ tool }: TagProps) => {
  return (
    <div className='flex items-center rounded-full bg-slate-800/75 px-3 py-1 text-xs font-medium leading-5 text-slate-200'>
      {tool}
    </div>
  )
}
