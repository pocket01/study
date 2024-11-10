import { PFonts } from '@/font/PFonts'
import { VolumeOff, VolumeUp } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ThemeProvider,
  Typography,
  createTheme,
  keyframes,
  styled,
} from '@mui/material'
import { useCallback, useEffect, useRef, useState } from 'react'
const audio = new Audio('/sounds/gameboy_boot_nc93971_.wav')
const pkmnFont = PFonts.pkmnFont

const theme = createTheme({
  palette: {
    primary: {
      main: '#306230',
    },
    secondary: {
      main: '#8Bac0F',
    },
    background: {
      default: '#9CBD9C',
      paper: '#8Bac0F',
    },
  },
  typography: {
    fontFamily: '"Press Start 2P", cursive',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Press Start 2P", cursive',
          fontSize: '0.7rem',
          padding: '8px 16px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#8Bac0F',
          border: '4px solid #306230',
          borderRadius: '10px',
        },
      },
    },
  },
})

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`

const GameboyScreen = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '320px',
  height: '288px',
  backgroundColor: theme.palette.background.default,
  border: `20px solid ${theme.palette.primary.main}`,
  borderRadius: '10px 10px 50px 10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  position: 'relative',
}))

const NintendoLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  animation: `${fadeIn} 2s ease-in`,
}))

const GameTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '16px',
  textAlign: 'center',
  animation: `${slideIn} 1s ease-out 2s both`,
}))

const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '12px',
  marginTop: theme.spacing(1),
  animation: `${fadeIn} 1s ease-in 3s both`,
}))

export default function PokememoriaIntro() {
  const [showNintendo, setShowNintendo] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showSubTitle, setShowSubTitle] = useState(false)
  const [openDialog, setOpenDialog] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  const handleSoundChoice = (allowSound: boolean) => {
    setIsMuted(!allowSound)
    setOpenDialog(false)
  }

  const startAnimation = useCallback(() => {
    const nintendoTimer = setTimeout(() => {
      setShowNintendo(true)
      if (!isMuted) {
        audio
          .play()
          .catch((error) => console.error('音声の再生に失敗しました:', error))
      }
    }, 3000)
    const titleTimer = setTimeout(() => setShowTitle(true), 3000)
    const subTitleTimer = setTimeout(() => setShowSubTitle(true), 4000)

    return () => {
      clearTimeout(nintendoTimer)
      clearTimeout(titleTimer)
      clearTimeout(subTitleTimer)
    }
  }, [isMuted])

  useEffect(() => {
    if (!openDialog) {
      startAnimation()
    }
  }, [openDialog, isMuted, startAnimation])

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <GameboyScreen role='img' aria-label='ゲームボーイ風起動画面'>
          {showNintendo && <NintendoLogo variant='h1'>Nintendo</NintendoLogo>}
          {showTitle && <GameTitle variant='h2'>ポケメモリア</GameTitle>}
          {showSubTitle && (
            <SubTitle variant='subtitle1'>Your Pokémon Memory</SubTitle>
          )}
        </GameboyScreen>

        <Dialog open={openDialog} onClose={() => handleSoundChoice(false)}>
          <DialogTitle>
            <Typography
              sx={{ fontFamily: pkmnFont.style.fontFamily }}
              variant='h6'
              align='center'
            >
              このWEBアプリは おと が ながれるよ。
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography
              sx={{ fontFamily: pkmnFont.style.fontFamily }}
              variant='body1'
              align='center'
            >
              さいせい する？
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
            <Button
              sx={{ fontFamily: pkmnFont.style.fontFamily }}
              onClick={() => handleSoundChoice(true)}
              variant='contained'
              color='primary'
              startIcon={<VolumeUp />}
            >
              はい
            </Button>
            <Button
              sx={{ fontFamily: pkmnFont.style.fontFamily }}
              onClick={() => handleSoundChoice(false)}
              variant='outlined'
              color='primary'
              startIcon={<VolumeOff />}
            >
              いいえ
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  )
}
