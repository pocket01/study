'use client'

import PImage from '@/components/client/atoms/image'
import { LineProfile } from '@/types/Types'
import { LiffUtils } from '@/util/LiffUtils'
import PButton from '../../atoms/button'
import PText from '../../atoms/text'
import { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import PBox from '../../atoms/container'

LiffUtils.initLiff({ liffId: process.env.NEXT_PUBLIC_LIFF_TEST_ID as string })

const PLiffSample = () => {
  const [profile, setProfile] = useState<LineProfile | undefined>(undefined)
  const { isLoggedIn, getProfile, logout } = LiffUtils
  const [showLogout, setShowLogout] = useState<boolean>(false)
  const nfLineImageMsg = 'ここにLINEアカウントのアイコンが表示されます'

  useEffect(() => {
    // ログイン済みの場合、ログアウトボタンを表示する
    setShowLogout(isLoggedIn())
  }, [setShowLogout, isLoggedIn])

  return (
    <>
      <PBox sx={{ display: 'flex', alignItems: 'center' }}>
        <PText value={'LINEアカウント名：'} />
        <TextField disabled value={profile?.displayName ?? ''} />
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
        <PButton
          onClick={async () => {
            setProfile(await getProfile())
          }}
        >
          LINEプロフィール取得
        </PButton>
        {showLogout && (
          <PButton
            onClick={async () => {
              await logout()
            }}
          >
            ログアウト
          </PButton>
        )}
      </PBox>
    </>
  )
}

export default PLiffSample
