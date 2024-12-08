import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { COLORS } from '@/consts/Theme'

/**
 * ゲームボーイの画面を模したコンポーネント
 */
export const GameboyScreen = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '320px',
  aspectRatio: '10 / 9',
  backgroundColor: COLORS.background,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // background: `repeating-linear-gradient(
    //   0deg,
    // )`,
    opacity: 0.05,
    pointerEvents: 'none',
  },
}))
