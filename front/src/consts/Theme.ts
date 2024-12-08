/**
 * ゲームボーイの色パレット
 */
export const COLORS = {
  /** ゲームボーイの背景色（薄緑） */
  background: '#c4cfa1',
  /** 濃い緑（テキストや境界線用） */
  primary: '#0f380f',
  /** やや薄い緑（セカンダリ背景用） */
  secondary: '#8bac0f',
  /** 中間の緑（境界線用） */
  border: '#306230',
  /** テキスト色 */
  text: '#0f380f',
  /** ボタンのテキスト色 */
  buttonText: '#9bbc0f',
}

/**
 * フォントの定義
 */
export const FONTS = {
  /** ピクセル風日本語フォント */
  main: '"DotGothic16", sans-serif',
}

/**
 * ゲームボーイのスタイル定数
 */
export const GAMEBOY_STYLES = {
  /** ボーダーの太さ */
  borderWidth: '4px',
  /** 角の丸み */
  borderRadius: '10px',
  /** ピクセルサイズ */
  pixelSize: '2px',
}

/**
 * アニメーションの設定
 */
export const ANIMATION = {
  /** タイトルアニメーションの遅延時間 (ms) */
  titleDelay: 500,
  /** サブタイトルアニメーションの遅延時間 (ms) */
  subtitleDelay: 1000,
  /** ボタンアニメーションの遅延時間 (ms) */
  buttonDelay: 1500,
  /** アニメーションの持続時間 (ms) */
  duration: 1000,
}
