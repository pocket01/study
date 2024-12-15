'use client'

import { GameboyScreen } from '@/components/GameboyScreen'
import { COLORS } from '@/consts/Theme'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { ja } from 'date-fns/locale'
import { useState } from 'react'

export default function CharacterCreation() {
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState<Date | null>(null)

  //   const handleBack = () => {
  //     router.push('/')
  //   }

  const handleNext = () => {
    // TODO: Implement next step logic
    console.log('Next step with:', { name, birthday })
  }

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
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              width: '100%',
            }}
          >
            <TextField
              fullWidth
              label='名前'
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: COLORS.primary,
                  },
                  '&:hover fieldset': {
                    borderColor: COLORS.primary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: COLORS.primary,
                  },
                },
                '& .MuiInputLabel-root': {
                  color: COLORS.primary,
                },
              }}
            />
            <DatePicker
              label='誕生日'
              value={birthday}
              onChange={(newValue) => setBirthday(newValue)}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: COLORS.primary,
                  },
                  '&:hover fieldset': {
                    borderColor: COLORS.primary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: COLORS.primary,
                  },
                },
                '& .MuiInputLabel-root': {
                  color: COLORS.primary,
                },
              }}
            />
            <Box
              sx={{
                width: '100%',
                aspectRatio: '9 / 3',
                backgroundColor: COLORS.secondary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: COLORS.primary }}>
                画像をアップロード
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Button
                href='/pokememoriaPrototype/'
                sx={{
                  color: COLORS.primary,
                  borderColor: COLORS.primary,
                  '&:hover': {
                    borderColor: COLORS.primary,
                    backgroundColor: COLORS.secondary,
                  },
                }}
                variant='outlined'
              >
                もどる
              </Button>
              <Button
                onClick={handleNext}
                sx={{
                  color: COLORS.primary,
                  borderColor: COLORS.primary,
                  '&:hover': {
                    borderColor: COLORS.primary,
                    backgroundColor: COLORS.secondary,
                  },
                }}
                variant='outlined'
              >
                すすむ
              </Button>
            </Box>
          </Box>
        </LocalizationProvider>
      </GameboyScreen>
    </Box>
  )
}
