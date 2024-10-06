import localFont from 'next/font/local'

/**
 * ポケモンフォント
 */
const pkmnFont = localFont({
  src: [{ path: './pkmnFonts/pkmn_s.woff2' }],
  display: 'swap',
})

export const PFonts = { pkmnFont }
