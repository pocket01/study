import PBox from '@/components/client/atoms/container'
import PText from '@/components/client/atoms/text'
import { ColorConsts } from '@/consts/ColorConsts'
import { PFonts } from '@/font/PFonts'
import { SxProps, Theme } from '@mui/material'
import Link from 'next/link'
const pkmnFont = PFonts.pkmnFont

type PkmnFontTextProps = {
  value: string
  sx?: SxProps<Theme>
}
const PkmnFontText = ({
  value,
  sx = {
    fontFamily: pkmnFont.style.fontFamily,
    mt: 1,
    letterSpacing: 0,
  },
}: PkmnFontTextProps) => {
  return <PText sx={sx} value={value} />
}

/**
 * 指定した長さ+2の枠線を作成する。
 * @param len 長さ。初期値は38
 * @returns 枠線上部
 */
const createBorder = (
  direction: 'left' | 'top' | 'right' | 'bottom' = 'top',
  len = 38,
) => {
  const border: string[] = []
  switch (direction) {
    case 'left':
    case 'right':
      // 左右の枠線を作成
      border.push(String.fromCharCode(0x2502).repeat(len))
      break
    case 'top':
      // 上部の枠線を作成
      border.push(String.fromCharCode(0x252f))
      border.push(String.fromCharCode(0x2500).repeat(len))
      border.push(String.fromCharCode(0x2530))
      break
    case 'bottom':
      // 下部の枠線を作成
      border.push(String.fromCharCode(0x2537))
      border.push(String.fromCharCode(0x2500).repeat(len))
      border.push(String.fromCharCode(0x2538))
      break
    default:
      break
  }
  return border.join('')
}

/**
 * 枠線コンポーネント
 * @returns
 */
const PkmnBorder = () => {
  return (
    <>
      <PkmnFontText
        value={createBorder('top', 38)}
        sx={{
          fontFamily: pkmnFont.style.fontFamily,
          mt: 2,
          letterSpacing: 0,
          lineHeight: 0,
        }}
      />
      <PBox display={'flex'}>
        <PkmnFontText
          value={createBorder('left', 1)}
          sx={{
            fontFamily: pkmnFont.style.fontFamily,
            mt: 2,
            letterSpacing: 0,
            lineHeight: 0,
          }}
        />
        <PkmnFontText
          value={
            '　　　　　　　　　　　　　　　じこしょうかい▼　　　　　　　　　　　　　　　'
          }
          sx={{
            fontFamily: pkmnFont.style.fontFamily,
            mt: 2,
            letterSpacing: 0,
            lineHeight: 0,
          }}
        />
        <PkmnFontText
          value={createBorder('right', 1)}
          sx={{
            fontFamily: pkmnFont.style.fontFamily,
            mt: 2,
            letterSpacing: 0,
            lineHeight: 0,
          }}
        />
      </PBox>
      <PkmnFontText
        value={createBorder('bottom', 38)}
        sx={{
          fontFamily: pkmnFont.style.fontFamily,
          mt: 2,
          letterSpacing: 0,
          lineHeight: 0,
        }}
      />
    </>
  )
}

export default function Home() {
  return (
    <>
      <PkmnBorder />
      <PkmnFontText value='ポケットモンスター あか・みどり ふうUIの WEBアプリケーションを つくってるよ。 ▼' />
      <PBox display={'flex'}>
        <PkmnFontText value='@' />
        <Link
          style={{
            ...pkmnFont.style,
            color: ColorConsts.BLUE,
            marginTop: '8px',
          }}
          href={'https://nue2004.info/program/pkmn/'}
        >
          {'こちら'}
        </Link>
        <PkmnFontText value={`のフォントをおかりしました。▼`} />
      </PBox>
      <br />

      <PkmnFontText value='ゆめと ぼうけんと!' />
      <PkmnFontText value='ポケット モンスターの せかいへ!' />
      <PkmnFontText value='レッツ ゴー! ▼' />
    </>
  )
}
