'use client'

import { COLORS, FONTS } from '@/consts/Theme'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { DotGothic16 } from 'next/font/google'

/**
 * DotGothic16フォントの設定
 */
const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  weight: '400',
})

/**
 * Material-UIのテーマ設定
 */
const theme = createTheme({
  typography: {
    fontFamily: FONTS.main,
  },
  palette: {
    primary: {
      main: COLORS.primary,
    },
    background: {
      default: COLORS.background,
    },
  },
})

/**
 * ルートレイアウトコンポーネント
 * @param {Object} props - プロパティ
 * @param {React.ReactNode} props.children - 子要素
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body className={dotGothic16.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
