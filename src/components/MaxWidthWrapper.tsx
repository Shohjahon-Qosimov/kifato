import { cn } from '../utils/helper'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-2xl px-2.5 md:px-12',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper