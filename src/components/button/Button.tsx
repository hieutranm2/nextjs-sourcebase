import { useMemo } from 'react'
import clsx from 'clsx'
import { tw } from '@/lib/tailwind-utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The color of button.
   */
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'info'
  /**
   * The size of button
   */
  size?: 'small' | 'sm' | 'medium' | 'md' | 'large' | 'lg'
}

/**
 * Button UI
 */
export const Button = ({ children, color, size = 'medium', ...props }: ButtonProps) => {
  const defaultStyles = tw`rounded-lg border leading-none hover:opacity-[0.85]`

  const colorStyle = useMemo(() => {
    switch (color) {
      case 'primary':
        return tw`bg-sky-600 text-white`
      case 'secondary':
        return tw`bg-slate-600 text-white`
      case 'error':
        return tw`bg-red-600 text-white`
      case 'warning':
        return tw`bg-yellow-600 text-white`
      case 'success':
        return tw`bg-green-600 text-white`
      case 'info':
        return tw`bg-blue-600 text-white`
      default:
        return ''
    }
  }, [color])

  const sizeStyle = useMemo(() => {
    switch (size) {
      case 'small':
      case 'sm':
        return tw`text-sm py-1 px-2`
      case 'medium':
      case 'md':
        return tw`text-base py-2 px-4`
      case 'large':
      case 'lg':
        return tw`text-lg py-3 px-6`
      default:
        return ''
    }
  }, [size])

  return (
    <button type="button" className={clsx(defaultStyles, colorStyle, sizeStyle)} {...props}>
      {children}
    </button>
  )
}
