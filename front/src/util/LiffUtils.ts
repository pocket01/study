import liff from '@line/liff'

type LiffConfig = {
  liffId: string
}

/**
 * LIFFの初期化処理。
 * LIFFアプリケーション起動前に必ず本メソッドを呼び出す。
 * @param liffId LIFFアプリケーションのLiffID
 */
const initLiff = ({ liffId }: LiffConfig) => {
  liff.init({
    liffId: liffId,
  })
}

/**
 * ログイン状態を返す。
 * @returns ログイン状態
 */
const isLoggedIn = () => {
  return liff.isLoggedIn()
}

/**
 * 初期化処理に応じて処理を実施する。
 * @param success 成功時の処理
 * @param failed 失敗時の処理
 * @param redirectUri リダイレクト先URL
 * @returns 初期化処理結果（true：初期化成功）
 */
const ready = async (
  success?: () => void,
  failed?: () => void,
  redirectUri = window.location.href,
) => {
  return await liff.ready
    .then(() => {
      if (isLoggedIn()) {
        success && success()
      } else {
        // Liffブラウザ以外の場合は明示的にログイン実施する。
        !liff.isInClient() && liff.login({ redirectUri: redirectUri })
      }
      return true
    })
    .catch(() => {
      failed && failed()
      return false
    })
}

/**
 * ログインする。
 */
const login = () => {
  if (isLoggedIn()) {
    return
  }

  liff.login()
}

/**
 * ログアウトする。
 * @param isClose true: ログアウト時に画面を閉じる。
 */
const logout = async (isClose = false) => {
  if (isLoggedIn()) {
    await liff.logout()
  }

  if (isClose) {
    if (liff.isInClient()) {
      liff.closeWindow()
    } else {
      window.close()
    }
  }
}

/**
 * LINEプロフィールを取得する。
 * @returns LINEプロフィール
 */
const getProfile = async () => {
  const isReady = await ready()
  if (isReady) {
    return await liff.getProfile()
  }
  return undefined
}

/**
 * ユーザーとLINE公式アカウントの友だち関係を取得する。
 * @returns ユーザーとLINE公式アカウントの友だち関係
 */
const getFriendship = async () => {
  const isReady = await ready()
  if (isReady) {
    return await liff.getFriendship()
  }
  return undefined
}

export const LiffUtils = {
  initLiff,
  isLoggedIn,
  ready,
  logout,
  login,
  getProfile,
  getFriendship,
}
