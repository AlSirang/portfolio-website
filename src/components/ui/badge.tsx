import { cn } from '@/utils/cn'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Badge = ({ className, ...props }: BadgeProps) => (
  <div
    className={cn(
      'flex items-center rounded-full bg-slate-800/75 px-3 py-1 text-xs font-medium leading-5 text-slate-200',
      className
    )}
    {...props}
  />
)
