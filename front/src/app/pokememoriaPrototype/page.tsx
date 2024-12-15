'use client'

import { GameboyButton } from '@/components/GameboyButton'
import { GameboyScreen } from '@/components/GameboyScreen'
import { COLORS } from '@/consts/Theme'
import { PFonts } from '@/font/PFonts'
import { useAudio } from '@/hooks/useAudio'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

const pkmnFont = PFonts.pkmnFont

/**
 * ホームページコンポーネント
 */
export default function Home() {
  /** ダイアログの表示状態 */
  const [showDialog, setShowDialog] = useState(false)
  /** 音声再生の許可状態 */
  const [audioAllowed, setAudioAllowed] = useState(false)
  /** アニメーション開始状態 */
  const [startAnimation, setStartAnimation] = useState(false)
  /** アニメーション完了状態 */
  const [animationComplete, setAnimationComplete] = useState(false)
  /** 音声の再生状態と制御関数 */
  const { play } = useAudio()

  /** コンポーネントマウント時にダイアログを表示 */
  useEffect(() => {
    setShowDialog(true)
  }, [])

  /** アニメーション完了時の処理 */
  useEffect(() => {
    if (animationComplete && audioAllowed) {
      play('/sounds/gameboy_boot_nc93971_.wav')
    }
  }, [animationComplete, audioAllowed, play])

  /** 音声再生を許可するハンドラ */
  const handleAllowAudio = useCallback(() => {
    setAudioAllowed(true)
    setShowDialog(false)
    setStartAnimation(true)
  }, [])

  /** 音声再生を拒否するハンドラ */
  const handleDenyAudio = useCallback(() => {
    setAudioAllowed(false)
    setShowDialog(false)
    setStartAnimation(true)
  }, [])

  return (
    <Box
      component='main'
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        backgroundColor: COLORS.secondary,
        backgroundSize: '20px 20px',
      }}
    >
      <GameboyScreen>
        {startAnimation && (
          <AnimatePresence>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1,
                duration: 3,
              }}
            >
              <Typography
                variant='h4'
                component='h1'
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  mb: 1,
                  fontSize: '2.4rem',
                  letterSpacing: '0.1em',
                  color: COLORS.primary,
                  fontFamily: pkmnFont.style.fontFamily,
                }}
              >
                ポケメモリア
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1,
                duration: 3,
              }}
              onAnimationComplete={() => setAnimationComplete(true)}
            >
              <Typography
                variant='subtitle1'
                sx={{
                  textAlign: 'center',
                  mb: 4,
                  fontSize: '1.0rem',
                  letterSpacing: '0.05em',
                  color: COLORS.primary,
                  fontFamily: pkmnFont.style.fontFamily,
                }}
              >
                YOUR POKéMON MEMORY
              </Typography>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 4,
                duration: 1,
              }}
            >
              <GameboyButton
                sx={{ fontFamily: pkmnFont.style.fontFamily }}
                href='/pokememoriaPrototype/character-creation'
              >
                スタート
              </GameboyButton>
            </motion.div>
          </AnimatePresence>
        )}
      </GameboyScreen>

      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        PaperProps={{
          style: {
            backgroundColor: COLORS.background,
          },
        }}
      >
        <DialogTitle sx={{ color: COLORS.primary }}>音声の再生許可</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: COLORS.primary }}>
            ゲームボーイの起動音を再生してもよろしいですか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDenyAudio} sx={{ color: COLORS.primary }}>
            いいえ
          </Button>
          <Button
            onClick={handleAllowAudio}
            autoFocus
            sx={{ color: COLORS.primary }}
          >
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
