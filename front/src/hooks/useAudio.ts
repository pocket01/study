import { useCallback } from 'react'

/**
 * 音声再生を管理するカスタムフック
 */
export const useAudio = () => {
  /**
   * 音声を再生する
   * @param src 再生する音声のパス
   */
  const play = useCallback((src: string) => {
    const audio = new Audio(src)
    audio.currentTime = 0.7
    audio
      .play()
      .catch((error) => console.error('Audio playback failed:', error))
  }, [])

  return { play }
}
