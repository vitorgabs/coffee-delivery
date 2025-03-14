import { ComponentProps } from 'react'
import { IconProps } from '@phosphor-icons/react'

interface Props extends ComponentProps<'label'> {
  title: string
  icon: React.FC<IconProps>
  isSelected: boolean
}

export function PaymentOption({
  title,
  icon: Icon,
  isSelected,
  ...rest
}: Props) {
  console.log({ isSelected })
  return (
    <label
      data-checked={isSelected}
      className="group hover:bg-hover data-[checked=true]:border-purple border-button data-[checked=true]:bg-purple-light bg-button flex flex-1 cursor-pointer items-center gap-3 rounded-md border p-4 transition-colors checked:bg-red-700"
      {...rest}
    >
      <input type="radio" className="sr-only" />

      <Icon className="text-purple size-4" />
      <span className="group-hover:text-subtitle text-xs uppercase">
        {title}
      </span>
    </label>
  )
}
