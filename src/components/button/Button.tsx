import { useMemo } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The color of button.
   */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'info'
  /**
   * The size of button
   */
  size?: 'small' | 'medium' | 'large'
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, color, size = 'medium', ...props }: ButtonProps) => {
  const colorStyle = useMemo(() => (color ? styles[`button--${color}`] : ''), [color])
  const sizeStyle = useMemo(() => styles[`button--${size}`], [size])
  return (
    <button type="button" className={clsx(styles.button, colorStyle, sizeStyle)} {...props}>
      {children}
    </button>
  )
}
