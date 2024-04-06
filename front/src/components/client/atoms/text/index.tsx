import { Typography } from "@mui/material"

type PTextProps = {
  value: string
  color?: "red" | "green" | "blue" | "yellow" | "black" | "white"
  fontSize?: "s" | "m" | "l"
}

const PText = ({ value, color = "black", fontSize = "m" }: PTextProps) => {
  const fixFontSize =
    fontSize === "m" ? "1.0rem" : fontSize === "s" ? ".8rem" : "1.2rem"
  return (
    <Typography sx={{ color: color, fontSize: fixFontSize }}>
      {value}
    </Typography>
  )
}

export default PText
