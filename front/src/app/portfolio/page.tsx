import PText from '@/components/client/atoms/text'
import PListItem from '@/components/client/molecules/listItem'
import { List } from '@mui/material'

export default function Home() {
  return (
    <>
      <PText value='ポートフォリオ' />
      <List>
        <PListItem text='タスク管理' link='/portfolio/pTask' icon='task' />
        <PListItem
          text='Youtube動画'
          link='/portfolio/pYtVideos'
          icon='youTube'
        />
        <PListItem text='GoogleMap' link='/portfolio/pMap' icon='map' />
        <PListItem
          text='カレンダー'
          link='/portfolio/pCalendar'
          icon='calendar'
        />
        {/* TODO privateリポジトリへ移動予定のため、一旦リンク無効化。 */}
        <PListItem
          text='スクレイピング'
          // link='/portfolio/pScraping'
          icon='public'
        />
        <PListItem
          text='LIFFサンプル'
          link='/portfolio/pLiffSample'
          icon='line'
        />
      </List>
    </>
  )
}
