import { NumberConsts } from "@/consts/NumberConsts"
import { StringConsts } from "@/consts/StringConsts"
import { Credentials, OAuth2Client } from "google-auth-library"
import { Auth, google } from "googleapis"
import { cookies } from "next/headers"

const SCOPES = ["https://www.googleapis.com/auth/youtube.readonly"]

/**
 * 認証クライアント作成
 */
const createClient = async () => {
  const credential = await import(process.env.NEXT_PUBLIC_YT_CREDENTIALS ?? "")
  if (!credential.web) return undefined

  const { web } = credential
  const clientId = web.client_id
  const clientSecret = web.client_secret
  const redirectUrl = web.redirect_uris[0]
  const oauth2Client = new Auth.OAuth2Client(
    clientId,
    clientSecret,
    redirectUrl
  )
  return oauth2Client
}

/**
 * 認証URL作成
 */
const createUrl = async () => {
  const client = await createClient()
  if (!client) return undefined
  return client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  })
}

/**
 * 認可処理
 * @param client 認証クライアント
 * @param searchParams URLクエリパラメータ
 * @returns 認可情報
 */
const authorization = async (client: OAuth2Client, code: string | null) => {
  if (!code) return undefined
  const { tokens } = await client.getToken(code)

  const { SECONDS_SIZE, MINUTES_SIZE, HOURS_SIZE, DAYS_SIZE_30 } = NumberConsts
  cookies().set({
    name: StringConsts.GoogleCookieName,
    value: JSON.stringify(tokens),
    maxAge: SECONDS_SIZE * MINUTES_SIZE * HOURS_SIZE * DAYS_SIZE_30, // 一ヶ月
    path: "/",
    sameSite: "lax",
    secure: true,
  })

  return tokens
}

const getOAuthTokenCookie = (): Credentials | undefined => {
  const tokens = cookies().get(StringConsts.GoogleCookieName)?.value

  if (!tokens) return undefined

  return JSON.parse(tokens)
}

const hasOAuthTokenCookie = () => {
  return getOAuthTokenCookie() !== undefined
}

/**
 * 検索処理
 * @param q 検索キーワード
 * @param maxResults 結果最大数
 * @returns 結果一覧
 */
const search = async (q: string, maxResults = 5) => {
  const credentials = getOAuthTokenCookie()
  if (!credentials) return undefined

  const client = await createClient()
  if (!client) return undefined

  client.setCredentials(credentials)
  const service = google.youtube("v3")
  return await service.search.list({
    auth: client,
    part: ["snippet"],
    q: q,
    maxResults: maxResults,
    type: ["video"],
  })
}

const getChannels = async () => {
  const credentials = getOAuthTokenCookie()
  if (!credentials) return undefined

  const client = await createClient()
  if (!client) return undefined

  client.setCredentials(credentials)
  const service = google.youtube("v3")
  return service.channels.list({
    auth: client,
    part: ["snippet", "contentDetails"],
    id: ["UCZszCX_TfylksyABpzXiRtg"],
  })
}

const YoutubeUtils = {
  createClient: createClient,
  createUrl: createUrl,
  authorization: authorization,
  getOAuthTokenCookie: getOAuthTokenCookie,
  hasOAuthTokenCookie: hasOAuthTokenCookie,
  search: search,
  getChannels: getChannels,
}

export default YoutubeUtils
