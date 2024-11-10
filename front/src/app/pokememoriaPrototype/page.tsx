'use client'

import { FileDownload, Share } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from '@mui/material'
import PokememoriaIntro from './PokememoriaIntro'

// カスタムテーマの作成
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
          borderRadius: 0,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
  },
})

const PixelBorder = styled(Box)(({ theme }) => ({
  border: `4px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(2),
}))

const StatBox = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(1),
  textAlign: 'center',
}))

export default function Component() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', p: 2 }}>
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <PokememoriaIntro />
          <Card>
            <CardContent>
              <Typography variant='h6' sx={{ mb: 2, color: 'primary.main' }}>
                ポケモン履歴書を作成
              </Typography>
              <Typography variant='body2' sx={{ mb: 3, color: 'primary.main' }}>
                あなたのポケモン体験を履歴書形式で記録しましょう。
                懐かしのポケモンとの思い出を共有できます。
              </Typography>

              <Button
                variant='contained'
                fullWidth
                size='large'
                sx={{
                  mb: 2,
                  bgcolor: 'primary.main',
                  color: 'secondary.main',
                  '&:hover': { bgcolor: 'primary.dark' },
                }}
              >
                はじめる
              </Button>

              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    fullWidth
                    startIcon={<FileDownload />}
                    sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                  >
                    テンプレート
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    fullWidth
                    startIcon={<Share />}
                    sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                  >
                    共有する
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                {['テンプレート', '作成済み', '共有数'].map((label, index) => (
                  <Grid item xs={4} key={label}>
                    <StatBox>
                      <Typography variant='h6' sx={{ color: 'primary.main' }}>
                        {index === 0 ? '100+' : index === 1 ? '1000+' : '500+'}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{ color: 'primary.main' }}
                      >
                        {label}
                      </Typography>
                    </StatBox>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          <Box
            component='nav'
            sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}
          >
            {['使い方', 'プライバシー', 'お問い合わせ'].map((label) => (
              <Link key={label} href='#' sx={{ color: 'primary.main' }}>
                {label}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
