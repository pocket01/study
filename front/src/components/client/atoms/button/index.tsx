import { Button, ButtonProps } from '@mui/material'

export type PButtonProps = {
  children: ButtonProps['children']
  variant?: ButtonProps['variant']
  onClick?: ButtonProps['onClick']
  sx?: ButtonProps['sx']
}

const PButton = ({
  children,
  variant = 'contained',
  onClick,
  sx,
}: PButtonProps) => {
  return (
    <Button onClick={onClick} variant={variant} sx={sx}>
      {children}
    </Button>
  )
}

export default PButton
