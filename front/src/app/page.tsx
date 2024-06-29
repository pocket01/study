import PText from '@/components/client/atoms/text'
import PListItem from '@/components/client/molecules/listItem'
import { List } from '@mui/material'
import { Suspense } from 'react'
import Loading from './loading'

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PText value='メニュー' />
      <List>
        <PListItem text='自己紹介' link='/introduction' />
        <PListItem text='ポートフォリオ' link='/portfolio' />
        <PListItem text='連絡先' link='/contact' />
      </List>
    </Suspense>
  )
}

export default Home
