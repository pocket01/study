import { COLORS } from '@/consts/Theme'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

/**
 * ゲームボーイのボタンを模したコンポーネント
 */
export const GameboyButton = styled(Button)(({ theme }) => ({
  backgroundColor: COLORS.primary,
  color: COLORS.buttonText,
  borderRadius: '4px',
  padding: theme.spacing(1, 3),
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  letterSpacing: '0.1em',
  '&:hover': {
    backgroundColor: COLORS.border,
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  transition: 'all 0.1s ease-in-out',
}))
