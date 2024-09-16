'use client'

import PImage from '@/components/client/atoms/image'
import { LineProfile } from '@/types/Types'
import { LiffUtils } from '@/util/LiffUtils'
import PButton from '../../atoms/button'
import PText from '../../atoms/text'
import { useCallback, useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import PBox from '../../atoms/container'

LiffUtils.initLiff({ liffId: process.env.NEXT_PUBLIC_LIFF_TEST_ID as string })

const PLiffSample = () => {
  const { isLoggedIn, getProfile, getFriendship, login, logout } = LiffUtils
  const [profile, setProfile] = useState<LineProfile | undefined>(undefined)
  const [isFriend, setFriend] = useState<boolean | undefined>(undefined)
  const [showLogout, setShowLogout] = useState<boolean>(false)
  const nfLineImageMsg = 'ここにLINEアカウントのアイコンが表示されます'

  /**
   * LINEの情報をLIFF経由で取得する。
   */
  const getLineInfo = useCallback(async () => {
    const isLogin = await isLoggedIn()
    setProfile(await getProfile())
    setFriend((await getFriendship())?.friendFlag)
    setShowLogout(isLogin)
  }, [isLoggedIn, getProfile, getFriendship])

  useEffect(() => {
    getLineInfo()
  }, [getLineInfo])

  return (
    <>
      <PBox sx={{ display: 'flex', alignItems: 'center' }}>
        <PText value={'LINEアカウント名：'} />
        <TextField disabled defaultValue={profile?.displayName ?? ''} />
      </PBox>
      <PBox sx={{ display: 'flex', alignItems: 'center' }}>
        <PText value={'LINE公式アカウントとの友だち関係：'} />
        <TextField disabled defaultValue={isFriend} />
      </PBox>
      <PBox sx={{ mt: 2 }}>
        {profile ? (
          <PImage
            src={profile?.pictureUrl ?? ''}
            width={400}
            height={400}
            alt={nfLineImageMsg}
          />
        ) : (
          <PText value={nfLineImageMsg} />
        )}
      </PBox>
      <PBox sx={{ mt: 2 }}>
        {showLogout ? (
          <>
            <PButton
              onClick={async () => {
                await logout()
                setProfile(undefined)
                setFriend(undefined)
                setShowLogout(false)
              }}
            >
              ログアウト
            </PButton>
          </>
        ) : (
          <PButton
            onClick={async () => {
              await login()
            }}
          >
            ログイン
          </PButton>
        )}
      </PBox>
    </>
  )
}

export default PLiffSample
