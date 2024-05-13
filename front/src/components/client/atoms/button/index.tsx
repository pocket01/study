import { SizeType } from "@/types/Types"
import { Button, ButtonProps } from "@mui/material"

export type PButtonProps = {
  children: ButtonProps["children"]
  variant?: ButtonProps["variant"]
  onClick?: ButtonProps["onClick"]
  size?: SizeType
}

const PButton = ({
  children,
  variant = "contained",
  onClick,
  size = "m",
}: PButtonProps) => {
  const buttonSize = size === "s" ? "small" : size === "l" ? "large" : "medium"
  return (
    <Button onClick={onClick} variant={variant} size={buttonSize}>
      {children}
    </Button>
  )
}

export default PButton
